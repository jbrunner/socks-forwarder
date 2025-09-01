package server

import (
	"context"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"net/url"
	"strings"
	"time"

	"socks-forwarder/internal/config"
	"socks-forwarder/internal/metrics"

	"golang.org/x/net/proxy"
)

const readHeaderTimeoutSec = 5

// HTTPProxyServer is a simple HTTP proxy that uses the same rules and directHosts as the SOCKS5 server.
type HTTPProxyServer struct {
	Config *config.Config
	Debug  bool
	server *http.Server
}

func NewHTTPProxyServer(cfg *config.Config, debug bool) *HTTPProxyServer {
	return &HTTPProxyServer{
		Config: cfg,
		Debug:  debug,
	}
}

func (h *HTTPProxyServer) ListenAndServe(ctx context.Context, addr string) error {
	h.server = &http.Server{
		Addr:              addr,
		Handler:           h,
		ReadHeaderTimeout: readHeaderTimeoutSec * time.Second, // Prevent Slowloris attacks
	}

	log.Printf("HTTP proxy server listening on %s", addr)

	go func() {
		<-ctx.Done()
		if err := h.server.Close(); err != nil {
			log.Printf("[HTTP PROXY] error closing server: %v", err)
		}
	}()

	if err := h.server.ListenAndServe(); err != nil {
		return fmt.Errorf("http proxy server failed: %w", err)
	}

	return nil
}

// ServeHTTP implements the http.Handler interface for HTTP proxying.
func (h *HTTPProxyServer) ServeHTTP(responseWriter http.ResponseWriter, request *http.Request) {
	if h.Debug {
		log.Printf("[HTTP PROXY] %s %s Host=%s", request.Method, request.URL.String(), request.Host)
	}

	// Handle HTTPS CONNECT method (tunneling)
	if strings.EqualFold(request.Method, "CONNECT") {
		h.handleConnect(responseWriter, request)

		return
	}

	targetHost := request.Host
	if strings.Contains(targetHost, ":") {
		targetHost, _, _ = net.SplitHostPort(targetHost)
	}

	if h.Config.ShouldServeDirect(targetHost) {
		h.handleDirect(responseWriter, request)

		return
	}

	rule := h.Config.FindRule(targetHost)
	if rule != nil {
		h.handleProxy(responseWriter, request, rule.Target)

		return
	}

	if h.Config.DefaultTarget != "" {
		h.handleProxy(responseWriter, request, h.Config.DefaultTarget)

		return
	}

	h.handleDirect(responseWriter, request)
}

// handleConnect handles HTTPS CONNECT requests for tunneling.
func (h *HTTPProxyServer) handleConnect(responseWriter http.ResponseWriter, request *http.Request) {
	const tunnelTimeout = 10 * time.Second
	const doneChanSize = 2

	hostOnly := request.Host
	if strings.Contains(hostOnly, ":") {
		hostOnly, _, _ = net.SplitHostPort(hostOnly)
	}
	rule := h.Config.FindRule(hostOnly)
	clientAddr := "unknown"
	if request.RemoteAddr != "" {
		clientAddr = request.RemoteAddr
	}

	destConn, err := h.dialConnectTarget(responseWriter, request, rule, tunnelTimeout)
	if err != nil {
		// dialConnectTarget already logs and responds
		return
	}
	defer func() {
		log.Printf("Closing connection from %s", clientAddr)
		if err := destConn.Close(); err != nil {
			log.Printf("[HTTP PROXY] error closing destConn: %v", err)
		}
	}()

	clientConn, err := hijackConnection(responseWriter, request.Host)
	if err != nil {
		// hijackConnection already logs and responds
		return
	}
	defer clientConn.Close()

	// Write 200 OK to client to signal tunnel is established
	_, err = clientConn.Write([]byte("HTTP/1.1 200 Connection Established\r\n\r\n"))
	if err != nil {
		log.Printf("[HTTP PROXY] [connect] failed to write 200 OK to client for %s: %v", request.Host, err)
		metrics.RecordProxyError("connect", "")

		return
	}

	// Tunnel data between client and destination
	tunnelData(clientConn, destConn, doneChanSize)
}

// tunnelData copies data bidirectionally between two connections and logs errors, returns when one side closes.
func tunnelData(conn, otherConn net.Conn, doneChanSize int) {
	done := make(chan struct{}, doneChanSize)
	go func() {
		if _, err := io.Copy(conn, otherConn); err != nil {
			if !strings.Contains(err.Error(), "use of closed network connection") {
				log.Printf("[HTTP PROXY] Error copying from client to dest: %v", err)
			}
		}
		done <- struct{}{}
	}()
	go func() {
		if _, err := io.Copy(otherConn, conn); err != nil {
			if !strings.Contains(err.Error(), "use of closed network connection") {
				log.Printf("[HTTP PROXY] Error copying from dest to client: %v", err)
			}
		}
		done <- struct{}{}
	}()
	<-done // Wait for one side to close
}

// dialConnectTarget dials the target for CONNECT, using SOCKS5 if rule is present, else direct.
func (h *HTTPProxyServer) dialConnectTarget(
	responseWriter http.ResponseWriter,
	request *http.Request,
	rule *config.Rule,
	tunnelTimeout time.Duration,
) (net.Conn, error) {
	if rule != nil {
		socks5Addr := rule.Target
		log.Printf("Forwarding %s through %s (rule: %s)", request.Host, socks5Addr, rule.Name)
		socksDialer, dialerErr := proxy.SOCKS5("tcp", socks5Addr, nil, proxy.Direct)
		if dialerErr != nil {
			log.Printf("[HTTP PROXY] [connect] failed to create SOCKS5 dialer for %s: %v", socks5Addr, dialerErr)
			metrics.RecordProxyError("connect", "")
			http.Error(responseWriter, "Failed to create SOCKS5 dialer", http.StatusBadGateway)

			return nil, fmt.Errorf("SOCKS5 dialer error: %w", dialerErr)
		}

		destConn, err := socksDialer.Dial("tcp", request.Host)
		if err != nil {
			log.Printf("[HTTP PROXY] [connect] failed to dial %s via SOCKS5 %s: %v", request.Host, socks5Addr, err)
			metrics.RecordProxyError("connect", "")
			http.Error(responseWriter, "Failed to connect to target host via SOCKS5", http.StatusBadGateway)

			return nil, fmt.Errorf("SOCKS5 dial error: %w", err)
		}

		return destConn, nil
	}
	// fallback to direct dialer
	log.Printf("Forwarding %s directly (no rule matched)", request.Host)
	dialer := &net.Dialer{Timeout: tunnelTimeout}
	destConn, err := dialer.DialContext(request.Context(), "tcp", request.Host)
	if err != nil {
		log.Printf("[HTTP PROXY] [connect] failed to dial %s directly: %v", request.Host, err)
		metrics.RecordProxyError("connect", "")
		http.Error(responseWriter, "Failed to connect to target host", http.StatusBadGateway)

		return nil, fmt.Errorf("direct dial error: %w", err)
	}

	return destConn, nil
}

// hijackConnection hijacks the HTTP connection and returns the net.Conn.
var errHijackingNotSupported = fmt.Errorf("hijacking not supported")

func hijackConnection(responseWriter http.ResponseWriter, host string) (net.Conn, error) {
	hijacker, ok := responseWriter.(http.Hijacker)
	if !ok {
		log.Printf("[HTTP PROXY] [connect] hijacking not supported for %s", host)
		metrics.RecordProxyError("connect", "")
		http.Error(responseWriter, "Hijacking not supported", http.StatusInternalServerError)

		return nil, errHijackingNotSupported
	}

	clientConn, _, err := hijacker.Hijack()
	if err != nil {
		log.Printf("[HTTP PROXY] [connect] hijack failed for %s: %v", host, err)
		metrics.RecordProxyError("connect", "")
		http.Error(responseWriter, "Hijack failed", http.StatusInternalServerError)

		return nil, fmt.Errorf("hijack error: %w", err)
	}

	return clientConn, nil
}

func (h *HTTPProxyServer) handleDirect(responseWriter http.ResponseWriter, request *http.Request) {
	// Simple direct HTTP proxying (no upstream)
	transport := http.DefaultTransport
	resp, err := transport.RoundTrip(request)
	if err != nil {
		log.Printf("[HTTP PROXY] [direct] error: %v", err)
		metrics.RecordProxyError("direct", "")
		responseWriter.WriteHeader(http.StatusBadGateway)
		fmt.Fprintf(responseWriter, "Proxy error: %v", err)

		return
	}
	defer resp.Body.Close()
	copyHeader(responseWriter.Header(), resp.Header)
	responseWriter.WriteHeader(resp.StatusCode)
	log.Printf("[HTTP PROXY] [direct] status: %d", resp.StatusCode)
	_, _ = io.Copy(responseWriter, resp.Body)
	metrics.RecordProxyDecision("")
}

func (h *HTTPProxyServer) handleProxy(responseWriter http.ResponseWriter, request *http.Request, upstream string) {
	// Forward the request to the upstream proxy (SOCKS5 or HTTP)
	// Try SOCKS5 first, fallback to HTTP proxy if SOCKS5 fails
	var transport *http.Transport
	socks5Addr := upstream
	clientAddr := "unknown"
	if request.RemoteAddr != "" {
		clientAddr = request.RemoteAddr
	}
	rule := h.Config.FindRule(request.Host)
	if rule != nil {
		log.Printf("Forwarding %s through %s (rule: %s)", request.Host, socks5Addr, rule.Name)
	} else {
		log.Printf("Forwarding %s through %s (no rule matched)", request.Host, socks5Addr)
	}
	dialer, err := proxy.SOCKS5("tcp", socks5Addr, nil, proxy.Direct)
	if err == nil {
		transport = &http.Transport{
			DialContext: func(_ context.Context, network, addr string) (net.Conn, error) {
				return dialer.Dial(network, addr)
			},
		}
	} else {
		// fallback to HTTP proxy
		proxyURL := fmt.Sprintf("http://%s", upstream)
		transport = &http.Transport{
			Proxy: func(_ *http.Request) (*url.URL, error) {
				return url.Parse(proxyURL)
			},
		}
	}

	resp, err := transport.RoundTrip(request)
	if err != nil {
		log.Printf("[HTTP PROXY] [proxy] error: %v (upstream: %s)", err, upstream)
		metrics.RecordProxyError("proxy", "")
		responseWriter.WriteHeader(http.StatusBadGateway)
		fmt.Fprintf(responseWriter, "Proxy error: %v", err)

		return
	}
	defer func() {
		log.Printf("Closing connection from %s", clientAddr)
		if err := resp.Body.Close(); err != nil {
			log.Printf("[HTTP PROXY] error closing resp.Body: %v", err)
		}
	}()
	copyHeader(responseWriter.Header(), resp.Header)
	responseWriter.WriteHeader(resp.StatusCode)
	_, _ = io.Copy(responseWriter, resp.Body)
	metrics.RecordProxyDecision("")
}

func copyHeader(dst, src http.Header) {
	for k, vv := range src {
		for _, v := range vv {
			dst.Add(k, v)
		}
	}
}
