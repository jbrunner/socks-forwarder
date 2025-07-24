package socks5

import (
	"encoding/binary"
	"errors"
	"fmt"
	"io"
	"log"
	"net"
	"strconv"
	"time"

	"socks-forwarder/internal/config"
	"socks-forwarder/internal/metrics"
)

const (
	SocksClientGreetingSize = 257              // Maximum size of SOCKS5 greeting message = 1 + 1 + 255
	SocksBufferSize         = 1024             // Buffer size for reading/writing data
	DialTimeout             = 10 * time.Second // Default dial timeout for connections
)

// SOCKS5 protocol packet size constants.
const (
	SOCKS5IPv4PacketMinSize    = 10 // Minimum size for IPv4 address packet
	SOCKS5DomainPacketMinSize  = 5  // Minimum size for domain name packet
	SOCKS5IPv6PacketMinSize    = 22 // Minimum size for IPv6 address packet
	SOCKS5ResponseSize         = 2  // Size of SOCKS5 response buffer
	SOCKS5PortSize             = 2  // Size of port in bytes
	GoroutineChannelBufferSize = 2  // Buffer size for bidirectional forwarding channel
)

// Static error definitions.
var (
	ErrInvalidSOCKSVersion    = errors.New("invalid SOCKS version")
	ErrInvalidGreetingLength  = errors.New("invalid greeting length")
	ErrNoSupportedAuthMethod  = errors.New("no supported authentication method")
	ErrInvalidRequest         = errors.New("invalid request")
	ErrInvalidIPv4Address     = errors.New("invalid IPv4 address")
	ErrInvalidDomainAddress   = errors.New("invalid domain address")
	ErrInvalidDomainLength    = errors.New("invalid domain address length")
	ErrInvalidIPv6Address     = errors.New("invalid IPv6 address")
	ErrProxyAuthFailed        = errors.New("proxy authentication failed")
	ErrInvalidResponse        = errors.New("invalid response")
	ErrUnsupportedCommand     = errors.New("unsupported command")
	ErrUnsupportedAddressType = errors.New("unsupported address type")
	ErrConnectionFailed       = errors.New("connection failed")
)

const (
	// SOCKS5 version.
	socksVersion5 = 0x05

	// Authentication methods.
	authNone     = 0x00
	authPassword = 0x02
	authNoAccept = 0xFF

	// Commands.
	cmdConnect = 0x01
	cmdBind    = 0x02
	cmdUDP     = 0x03

	// Address types.
	addrIPv4   = 0x01
	addrDomain = 0x03
	addrIPv6   = 0x04

	// Reply codes.
	replySuccess              = 0x00
	replyServerFailure        = 0x01
	replyConnectionNotAllowed = 0x02
	replyNetworkUnreachable   = 0x03
	replyHostUnreachable      = 0x04
	replyConnectionRefused    = 0x05
	replyTTLExpired           = 0x06
	replyCommandNotSupported  = 0x07
	replyAddressNotSupported  = 0x08
)

// Handler handles SOCKS5 connections.
type Handler struct {
	Config *config.Config
	Debug  bool
}

// Handle processes a SOCKS5 connection.
func (h *Handler) Handle(clientConn net.Conn) error {
	// Track active connection as pending initially
	metrics.IncrementActiveConnections("pending")
	
	// This variable will track the actual rule name for cleanup
	var actualRuleName string
	defer func() {
		// Decrement using the actual rule name, or "pending" if we never determined it
		if actualRuleName != "" {
			metrics.DecrementActiveConnections(actualRuleName)
		} else {
			metrics.DecrementActiveConnections("pending")
		}
	}()

	// Step 1: Authentication negotiation
	if err := h.handleAuthentication(clientConn); err != nil {
		metrics.RecordConnectionFailure()
		metrics.RecordConnectionError("auth_failed", "unknown")

		return fmt.Errorf("authentication failed: %w", err)
	}

	// Step 2: Handle SOCKS5 request
	ruleName, err := h.handleRequest(clientConn)
	if err != nil {
		metrics.RecordConnectionFailure()
		metrics.RecordConnectionError("request_failed", "unknown")

		return fmt.Errorf("request handling failed: %w", err)
	}

	// Update the actual rule name for proper cleanup
	actualRuleName = ruleName

	// Record successful connection
	metrics.RecordConnectionSuccess()

	return nil
}

// handleAuthentication handles the SOCKS5 authentication phase.
func (h *Handler) handleAuthentication(conn net.Conn) error {
	// Read client greeting
	buf := make([]byte, SocksClientGreetingSize)
	n, err := conn.Read(buf)
	if err != nil {
		return fmt.Errorf("failed to read client greeting: %w", err)
	}

	if n < 3 || buf[0] != socksVersion5 {
		return ErrInvalidSOCKSVersion
	}

	methodCount := int(buf[1])
	if n < 2+methodCount {
		return ErrInvalidGreetingLength
	}

	// Check supported methods (we only support no authentication)
	methodSupported := false
	for i := 0; i < methodCount; i++ {
		if buf[2+i] == authNone {
			methodSupported = true

			break
		}
	}

	// Send method selection response
	response := []byte{socksVersion5, authNone}
	if !methodSupported {
		response[1] = authNoAccept
	}

	_, err = conn.Write(response)
	if err != nil {
		return fmt.Errorf("failed to write authentication response: %w", err)
	}

	if !methodSupported {
		return ErrNoSupportedAuthMethod
	}

	return nil
}

// handleRequest handles the SOCKS5 connection request.
func (h *Handler) handleRequest(clientConn net.Conn) (string, error) {
	// Read and validate request
	targetHost, targetPort, err := h.parseRequest(clientConn)
	if err != nil {
		return "", err
	}

	if h.Debug {
		log.Printf("SOCKS5 request: %s:%d", targetHost, targetPort)
	}

	// Establish target connection based on routing rules
	targetConn, routingType, ruleName, err := h.establishTargetConnection(targetHost, targetPort)
	if err != nil {
		_ = h.sendReply(clientConn, replyConnectionRefused, net.IPv4zero, 0)

		return "", fmt.Errorf("failed to establish target connection: %w", err)
	}
	defer targetConn.Close()

	// Transition the connection from "pending" to the actual rule name
	metrics.TransitionConnectionFromPending(ruleName)

	// Send success reply
	if err := h.sendSuccessReply(clientConn, targetConn); err != nil {
		return "", err
	}

	// Start bidirectional data forwarding
	if err := h.forwardData(clientConn, targetConn, routingType, ruleName); err != nil {
		return "", err
	}
	
	return ruleName, nil
}

// parseRequest reads and parses the SOCKS5 request, returning target host and port.
func (h *Handler) parseRequest(clientConn net.Conn) (targetHost string, targetPort int, err error) {
	buf := make([]byte, SocksBufferSize)
	n, err := clientConn.Read(buf)
	if err != nil {
		return "", 0, fmt.Errorf("failed to read SOCKS5 request: %w", err)
	}

	if n < 4 || buf[0] != socksVersion5 {
		return "", 0, ErrInvalidRequest
	}

	cmd := buf[1]
	if cmd != cmdConnect {
		_ = h.sendReply(clientConn, replyCommandNotSupported, net.IPv4zero, 0)

		return "", 0, fmt.Errorf("%w: %d", ErrUnsupportedCommand, cmd)
	}

	return h.parseTargetAddress(buf, n, clientConn)
}

// parseTargetAddress extracts target host and port from SOCKS5 request.
func (h *Handler) parseTargetAddress(
	buf []byte, n int, clientConn net.Conn,
) (targetHost string, targetPort int, err error) {
	addrType := buf[3]

	switch addrType {
	case addrIPv4:
		if n < SOCKS5IPv4PacketMinSize {
			return "", 0, ErrInvalidIPv4Address
		}
		targetHost = net.IP(buf[4:8]).String()
		targetPort = int(binary.BigEndian.Uint16(buf[8:10]))
	case addrDomain:
		if n < SOCKS5DomainPacketMinSize {
			return "", 0, ErrInvalidDomainAddress
		}
		domainLen := int(buf[4])
		if n < 5+domainLen+2 {
			return "", 0, ErrInvalidDomainLength
		}
		targetHost = string(buf[5 : 5+domainLen])
		targetPort = int(binary.BigEndian.Uint16(buf[5+domainLen : 7+domainLen]))
	case addrIPv6:
		if n < SOCKS5IPv6PacketMinSize {
			return "", 0, ErrInvalidIPv6Address
		}
		targetHost = net.IP(buf[4:20]).String()
		targetPort = int(binary.BigEndian.Uint16(buf[20:22]))
	default:
		_ = h.sendReply(clientConn, replyAddressNotSupported, net.IPv4zero, 0)

		return "", 0, fmt.Errorf("%w: %d", ErrUnsupportedAddressType, addrType)
	}

	return targetHost, targetPort, nil
}

// establishTargetConnection determines routing and establishes connection.
func (h *Handler) establishTargetConnection(
	targetHost string, targetPort int,
) (conn net.Conn, routingType, ruleName string, err error) {
	// Check if this host should be served directly (bypasses rules)
	if h.Config.ShouldServeDirect(targetHost) {
		return h.handleDirectHost(targetHost, targetPort)
	}

	return h.handleRoutingRules(targetHost, targetPort)
}

// handleDirectHost establishes direct connection for configured direct hosts.
func (h *Handler) handleDirectHost(
	targetHost string, targetPort int,
) (conn net.Conn, routingType, ruleName string, err error) {
	if h.Debug {
		log.Printf("Direct connection to %s:%d (configured as direct host)", targetHost, targetPort)
	}
	metrics.RecordDirectHostMatch()
	metrics.RecordDirectDecision("direct_host")

	conn, err = h.connectDirect(targetHost, targetPort, "direct_host")

	return conn, "direct", "direct_host", err
}

// handleRoutingRules processes forwarding rules and establishes connection.
func (h *Handler) handleRoutingRules(
	targetHost string, targetPort int,
) (conn net.Conn, routingType, ruleName string, err error) {
	rule := h.Config.FindRule(targetHost)

	switch {
	case rule != nil:
		return h.handleRuleMatch(rule, targetHost, targetPort)
	case h.Config.DefaultTarget != "":
		return h.handleDefaultTarget(targetHost, targetPort)
	default:
		return h.handleDirectConnection(targetHost, targetPort)
	}
}

// handleRuleMatch establishes connection through rule-specified proxy.
func (h *Handler) handleRuleMatch(
	rule *config.Rule, targetHost string, targetPort int,
) (conn net.Conn, routingType, ruleName string, err error) {
	if h.Debug {
		log.Printf("Forwarding %s:%d through %s (rule: %s)", targetHost, targetPort, rule.Target, rule.Name)
	}
	metrics.RecordRuleMatch(rule.Target, rule.Name)
	metrics.RecordProxyDecision(rule.Name)

	conn, err = h.connectThroughSocks5(rule.Target, targetHost, targetPort, rule.Name)

	return conn, "proxy", rule.Name, err
}

// handleDefaultTarget establishes connection through default proxy.
func (h *Handler) handleDefaultTarget(
	targetHost string, targetPort int,
) (conn net.Conn, routingType, ruleName string, err error) {
	if h.Debug {
		log.Printf("Forwarding %s:%d through default target %s", targetHost, targetPort, h.Config.DefaultTarget)
	}
	metrics.RecordDefaultDecision("default_target")

	conn, err = h.connectThroughSocks5(h.Config.DefaultTarget, targetHost, targetPort, "default_target")

	return conn, "default", "default_target", err
}

// handleDirectConnection establishes direct connection as fallback.
func (h *Handler) handleDirectConnection(
	targetHost string, targetPort int,
) (conn net.Conn, routingType, ruleName string, err error) {
	if h.Debug {
		log.Printf("Direct connection to %s:%d", targetHost, targetPort)
	}
	metrics.RecordDirectDecision("fallback_direct")

	conn, err = h.connectDirect(targetHost, targetPort, "fallback_direct")

	return conn, "direct", "fallback_direct", err
}

// sendSuccessReply sends SOCKS5 success reply to client.
func (h *Handler) sendSuccessReply(clientConn, targetConn net.Conn) error {
	localAddr, ok := targetConn.LocalAddr().(*net.TCPAddr)
	if !ok {
		localAddr = &net.TCPAddr{IP: net.IPv4zero, Port: 0}
	}

	return h.sendReply(clientConn, replySuccess, localAddr.IP, localAddr.Port)
}

// connectDirect establishes a direct connection to the target.
func (h *Handler) connectDirect(host string, port int, ruleName string) (net.Conn, error) {
	start := time.Now()
	address := net.JoinHostPort(host, strconv.Itoa(port))

	dialer := &net.Dialer{Timeout: DialTimeout}
	conn, err := dialer.Dial("tcp", address)
	if err != nil {
		metrics.RecordConnectionError("dial_failed", ruleName)

		return nil, fmt.Errorf("failed to dial %s: %w", address, err)
	}

	// Record connection establishment time
	metrics.RecordConnectionEstablishment(time.Since(start).Seconds(), "direct", ruleName)

	return conn, nil
}

// connectThroughSocks5 establishes a connection through another SOCKS5 server.
func (h *Handler) connectThroughSocks5(
	proxyAddr, targetHost string, targetPort int, ruleName string,
) (net.Conn, error) {
	start := time.Now()

	// Connect to the SOCKS5 proxy
	dialer := &net.Dialer{Timeout: DialTimeout}
	proxyConn, err := dialer.Dial("tcp", proxyAddr)
	if err != nil {
		metrics.RecordProxyError("connection_failed", ruleName)

		return nil, fmt.Errorf("failed to connect to proxy %s: %w", proxyAddr, err)
	}

	// Perform SOCKS5 handshake
	if err := h.performSocks5Handshake(proxyConn, targetHost, targetPort); err != nil {
		if closeErr := proxyConn.Close(); closeErr != nil {
			log.Printf("Error closing proxy connection: %v", closeErr)
		}
		metrics.RecordProxyError("handshake_failed", ruleName)

		return nil, fmt.Errorf("SOCKS5 handshake failed: %w", err)
	}

	// Record successful proxy connection establishment time
	metrics.RecordConnectionEstablishment(time.Since(start).Seconds(), "proxy", ruleName)

	return proxyConn, nil
}

// performSocks5Handshake performs the SOCKS5 handshake with a proxy server.
func (h *Handler) performSocks5Handshake(conn net.Conn, targetHost string, targetPort int) error {
	// Send greeting and validate auth response
	if err := h.performSocks5Auth(conn); err != nil {
		return err
	}

	// Send connection request and validate response
	return h.performSocks5Connect(conn, targetHost, targetPort)
}

// performSocks5Auth handles SOCKS5 authentication phase.
func (h *Handler) performSocks5Auth(conn net.Conn) error {
	// Send greeting
	greeting := []byte{socksVersion5, 1, authNone}
	if _, err := conn.Write(greeting); err != nil {
		return fmt.Errorf("failed to write SOCKS5 greeting: %w", err)
	}

	// Read method selection response
	response := make([]byte, SOCKS5ResponseSize)
	if _, err := io.ReadFull(conn, response); err != nil {
		return fmt.Errorf("failed to read method selection response: %w", err)
	}

	if response[0] != socksVersion5 || response[1] != authNone {
		return ErrProxyAuthFailed
	}

	return nil
}

// performSocks5Connect sends connect request and validates response.
func (h *Handler) performSocks5Connect(conn net.Conn, targetHost string, targetPort int) error {
	// Build and send connection request
	request := h.buildConnectRequest(targetHost, targetPort)

	if _, err := conn.Write(request); err != nil {
		return fmt.Errorf("failed to write SOCKS5 connection request: %w", err)
	}

	// Read and validate connection response
	return h.validateConnectResponse(conn)
}

// buildConnectRequest builds SOCKS5 connect request.
func (h *Handler) buildConnectRequest(targetHost string, targetPort int) []byte {
	request := []byte{socksVersion5, cmdConnect, 0x00}

	// Add target address
	if net.ParseIP(targetHost) != nil {
		request = h.addIPAddress(request, targetHost)
	} else {
		request = h.addDomainName(request, targetHost)
	}

	// Add port
	return h.addPort(request, targetPort)
}

// addIPAddress adds IP address to SOCKS5 request.
func (h *Handler) addIPAddress(request []byte, targetHost string) []byte {
	ip := net.ParseIP(targetHost)
	if ip.To4() != nil {
		// IPv4
		request = append(request, addrIPv4)
		request = append(request, ip.To4()...)
	} else {
		// IPv6
		request = append(request, addrIPv6)
		request = append(request, ip.To16()...)
	}

	return request
}

// addDomainName adds domain name to SOCKS5 request.
func (h *Handler) addDomainName(request []byte, targetHost string) []byte {
	request = append(request, addrDomain, byte(len(targetHost)))
	request = append(request, []byte(targetHost)...)

	return request
}

// addPort adds port to SOCKS5 request.
func (h *Handler) addPort(request []byte, targetPort int) []byte {
	portBytes := make([]byte, SOCKS5PortSize)
	// Ensure port is within valid uint16 range to prevent integer overflow
	if targetPort > 65535 || targetPort < 0 {
		targetPort = 65535
	}
	// Safe conversion: targetPort is guaranteed to be in range [0, 65535]
	binary.BigEndian.PutUint16(portBytes, uint16(targetPort)) // #nosec G115 -- targetPort range validated above

	return append(request, portBytes...)
}

// validateConnectResponse validates SOCKS5 connect response.
func (h *Handler) validateConnectResponse(conn net.Conn) error {
	respBuf := make([]byte, SocksBufferSize)
	n, err := conn.Read(respBuf)
	if err != nil {
		return fmt.Errorf("failed to read SOCKS5 connection response: %w", err)
	}

	if n < 4 || respBuf[0] != socksVersion5 {
		return ErrInvalidResponse
	}

	if respBuf[1] != replySuccess {
		return fmt.Errorf("%w: reply code %d", ErrConnectionFailed, respBuf[1])
	}

	return nil
}

// sendReply sends a SOCKS5 reply to the client.
func (h *Handler) sendReply(conn net.Conn, reply byte, ip net.IP, port int) error {
	response := []byte{socksVersion5, reply, 0x00}

	if ip == nil {
		ip = net.IPv4zero
	}

	if ip.To4() != nil {
		response = append(response, addrIPv4)
		response = append(response, ip.To4()...)
	} else {
		response = append(response, addrIPv6)
		response = append(response, ip.To16()...)
	}

	portBytes := make([]byte, SOCKS5PortSize)
	// Ensure port is within valid uint16 range to prevent integer overflow
	if port > 65535 || port < 0 {
		port = 65535
	}
	// Safe conversion: port is guaranteed to be in range [0, 65535]
	binary.BigEndian.PutUint16(portBytes, uint16(port)) // #nosec G115 -- port range validated above
	response = append(response, portBytes...)

	_, err := conn.Write(response)
	if err != nil {
		return fmt.Errorf("failed to write SOCKS5 reply: %w", err)
	}

	return nil
}

// forwardData forwards data bidirectionally between two connections.
func (h *Handler) forwardData(clientConn, targetConn net.Conn, routingType, ruleName string) error {
	done := make(chan error, GoroutineChannelBufferSize)
	startTime := time.Now()

	// Track rule-specific active connection during data transfer
	metrics.IncrementRuleActiveConnections(ruleName)
	defer metrics.DecrementRuleActiveConnections(ruleName)

	// Forward data from client to target
	go func() {
		written, err := io.Copy(targetConn, clientConn)
		metrics.RecordBytesOut(float64(written), routingType, ruleName)
		done <- err
	}()

	// Forward data from target to client
	go func() {
		written, err := io.Copy(clientConn, targetConn)
		metrics.RecordBytesIn(float64(written), routingType, ruleName)
		done <- err
	}()

	// Wait for either direction to complete
	err := <-done

	// Record connection duration
	duration := time.Since(startTime).Seconds()
	metrics.RecordConnectionDuration(duration, routingType, ruleName)

	// Close both connections to stop the other goroutine
	if closeErr := clientConn.Close(); closeErr != nil {
		log.Printf("Error closing client connection: %v", closeErr)
	}
	if closeErr := targetConn.Close(); closeErr != nil {
		log.Printf("Error closing target connection: %v", closeErr)
	}

	return err
}
