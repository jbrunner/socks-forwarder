package server

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net"
	"net/http"
	"runtime"
	"sync/atomic"
	"time"

	"github.com/prometheus/client_golang/prometheus/promhttp"

	"socks-forwarder/internal/config"
	"socks-forwarder/internal/metrics"
	"socks-forwarder/internal/socks5"
)

// Server represents the SOCKS5 forwarder server.
type Server struct {
	config        *config.Config
	listener      net.Listener
	metricsServer *http.Server
	done          chan struct{}
	ready         int32 // atomic boolean: 0 = not ready, 1 = ready
	startTime     time.Time
}

const DefaultPort = 8080

const (
	// Health check thresholds.
	maxMemoryUsageBytes = 1024 * 1024 * 1024 // 1GB //nolint:mnd // mnd:magic-number - Well-defined memory threshold
	maxGoroutines       = 1000
	localConnTimeout    = 100 * time.Millisecond
	bytesToMB           = 1024 * 1024
)

// NewServer creates a new SOCKS5 forwarder server.
func NewServer(cfg *config.Config) *Server {
	// Initialize metrics with current config
	metrics.UpdateActiveRules(len(cfg.Rules))
	metrics.UpdateActiveDirectHosts(len(cfg.DirectHosts))

	return &Server{
		config:    cfg,
		done:      make(chan struct{}),
		startTime: time.Now(),
	}
}

// Start starts the SOCKS5 server.
func (s *Server) Start() error {
	// Start metrics server if enabled
	if s.config.MetricsEnabled {
		s.startMetricsServer()
	}

	addr := fmt.Sprintf(":%d", s.config.Port)
	lc := net.ListenConfig{}
	listener, err := lc.Listen(context.Background(), "tcp", addr)
	if err != nil {
		return fmt.Errorf("failed to listen on %s: %w", addr, err)
	}

	s.listener = listener

	// Mark as ready once the listener is successfully started
	atomic.StoreInt32(&s.ready, 1)

	log.Printf("SOCKS5 server listening on %s", addr)

	for {
		select {
		case <-s.done:
			return nil
		default:
			conn, err := listener.Accept()
			if err != nil {
				select {
				case <-s.done:
					return nil
				default:
					log.Printf("Failed to accept connection: %v", err)

					continue
				}
			}

			go s.handleConnection(conn)
		}
	}
}

// Stop stops the SOCKS5 server.
func (s *Server) Stop() {
	// Mark as not ready immediately
	atomic.StoreInt32(&s.ready, 0)

	close(s.done)
	if s.listener != nil {
		s.listener.Close()
	}
	if s.metricsServer != nil {
		s.metricsServer.Close()
	}
}

// handleConnection handles a new SOCKS5 connection.
func (s *Server) handleConnection(conn net.Conn) {
	// close connection when done and log the connection
	defer func() {
		if s.config.Debug {
			log.Printf("Closing connection from %s", conn.RemoteAddr())
		}
		conn.Close()
	}()

	if s.config.Debug {
		log.Printf("New connection from %s", conn.RemoteAddr())
	}

	// Connection timeout could be configured here if needed
	// conn.SetDeadline(time.Now().Add(24 * time.Hour))

	// Create SOCKS5 handler with our forwarding logic
	handler := &socks5.Handler{
		Config: s.config,
		Debug:  s.config.Debug,
	}

	if err := handler.Handle(conn); err != nil {
		if s.config.Debug {
			log.Printf("Connection error: %v", err)
		}
	}
}

// startMetricsServer starts the Prometheus metrics HTTP server.
func (s *Server) startMetricsServer() {
	metricsPort := s.config.MetricsPort
	if metricsPort == 0 {
		metricsPort = DefaultPort
	}

	metricsAddr := fmt.Sprintf(":%d", metricsPort)

	mux := http.NewServeMux()
	mux.Handle("/metrics", promhttp.Handler())

	// Health check endpoints
	mux.HandleFunc("/health", s.handleHealth)
	mux.HandleFunc("/readyz", s.handleReadiness)
	mux.HandleFunc("/livez", s.handleLiveness)

	s.metricsServer = &http.Server{
		Addr:              metricsAddr,
		Handler:           mux,
		ReadHeaderTimeout: 15 * time.Second, //nolint:mnd // mnd:magic-number - Industry standard HTTP server timeout value
		ReadTimeout:       30 * time.Second, //nolint:mnd // mnd:magic-number - Industry standard HTTP server timeout value
		WriteTimeout:      30 * time.Second, //nolint:mnd // mnd:magic-number - Industry standard HTTP server timeout value
		IdleTimeout:       60 * time.Second, //nolint:mnd // mnd:magic-number - Industry standard HTTP server timeout value
	}

	go func() {
		log.Printf("Metrics server listening on %s", metricsAddr)
		if err := s.metricsServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Printf("Metrics server error: %v", err)
		}
	}()
}

// HealthStatus represents the health check response structure.
type HealthStatus struct {
	Status    string            `json:"status"`
	Timestamp time.Time         `json:"timestamp"`
	Uptime    string            `json:"uptime"`
	Details   map[string]string `json:"details,omitempty"`
}

// handleHealth provides a general health endpoint that combines readiness and liveness.
func (s *Server) handleHealth(writer http.ResponseWriter, _ *http.Request) {
	ready := atomic.LoadInt32(&s.ready) == 1
	alive := s.checkLiveness()

	status := HealthStatus{
		Timestamp: time.Now(),
		Uptime:    time.Since(s.startTime).String(),
		Details:   make(map[string]string),
	}

	if ready && alive {
		status.Status = "healthy"
		status.Details["socks_listener"] = "ready"
		status.Details["liveness"] = "ok"
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusOK)
	} else {
		status.Status = "unhealthy"
		if !ready {
			status.Details["socks_listener"] = "not ready"
		}
		if !alive {
			status.Details["liveness"] = "failed"
		}
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusServiceUnavailable)
	}

	if err := json.NewEncoder(writer).Encode(status); err != nil {
		log.Printf("Failed to encode health status: %v", err)
	}
}

// handleReadiness checks if the application is ready to serve traffic.
func (s *Server) handleReadiness(writer http.ResponseWriter, _ *http.Request) {
	if atomic.LoadInt32(&s.ready) == 1 {
		status := HealthStatus{
			Status:    "ready",
			Timestamp: time.Now(),
			Uptime:    time.Since(s.startTime).String(),
			Details:   map[string]string{"socks_listener": "ready"},
		}
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusOK)
		if err := json.NewEncoder(writer).Encode(status); err != nil {
			log.Printf("Failed to encode readiness status: %v", err)
		}
	} else {
		status := HealthStatus{
			Status:    "not ready",
			Timestamp: time.Now(),
			Uptime:    time.Since(s.startTime).String(),
			Details:   map[string]string{"socks_listener": "not ready"},
		}
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusServiceUnavailable)
		if err := json.NewEncoder(writer).Encode(status); err != nil {
			log.Printf("Failed to encode readiness status: %v", err)
		}
	}
}

// handleLiveness checks if the application is alive and functioning properly.
func (s *Server) handleLiveness(writer http.ResponseWriter, _ *http.Request) {
	if s.checkLiveness() {
		status := HealthStatus{
			Status:    "alive",
			Timestamp: time.Now(),
			Uptime:    time.Since(s.startTime).String(),
			Details:   s.getLivenessDetails(),
		}
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusOK)
		if err := json.NewEncoder(writer).Encode(status); err != nil {
			log.Printf("Failed to encode liveness status: %v", err)
		}
	} else {
		status := HealthStatus{
			Status:    "not alive",
			Timestamp: time.Now(),
			Uptime:    time.Since(s.startTime).String(),
			Details:   s.getLivenessDetails(),
		}
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusServiceUnavailable)
		if err := json.NewEncoder(writer).Encode(status); err != nil {
			log.Printf("Failed to encode liveness status: %v", err)
		}
	}
}

// checkLiveness performs various liveness checks without depending on external services.
func (s *Server) checkLiveness() bool {
	// Check 1: Ensure we're not shutting down
	select {
	case <-s.done:
		return false
	default:
	}

	// Check 2: Memory usage check (fail if using more than 1GB)
	var mem runtime.MemStats
	runtime.ReadMemStats(&mem)
	if mem.Alloc > maxMemoryUsageBytes {
		return false
	}

	// Check 3: Goroutine leak check (fail if more than threshold)
	if runtime.NumGoroutine() > maxGoroutines {
		return false
	}

	// Check 4: Configuration validity
	if s.config == nil {
		return false
	}

	// Check 5: Basic TCP socket test (can we create a local connection?)
	dialer := &net.Dialer{Timeout: localConnTimeout}
	ctx, cancel := context.WithTimeout(context.Background(), localConnTimeout)
	defer cancel()

	conn, err := dialer.DialContext(ctx, "tcp", "127.0.0.1:0")
	if err == nil {
		conn.Close()
	}
	// Note: We don't fail on this error as it might be due to local network config

	return true
}

// getLivenessDetails returns detailed information about liveness checks.
func (s *Server) getLivenessDetails() map[string]string {
	details := make(map[string]string)

	// Memory usage
	var mem runtime.MemStats
	runtime.ReadMemStats(&mem)
	details["memory_alloc"] = fmt.Sprintf("%.2f MB", float64(mem.Alloc)/bytesToMB)
	details["memory_sys"] = fmt.Sprintf("%.2f MB", float64(mem.Sys)/bytesToMB)

	// Goroutine count
	details["goroutines"] = fmt.Sprintf("%d", runtime.NumGoroutine())

	// Configuration status
	if s.config != nil {
		details["config"] = "valid"
		details["rules_count"] = fmt.Sprintf("%d", len(s.config.Rules))
		details["direct_hosts_count"] = fmt.Sprintf("%d", len(s.config.DirectHosts))
	} else {
		details["config"] = "invalid"
	}

	// Shutdown status
	select {
	case <-s.done:
		details["shutdown"] = "true"
	default:
		details["shutdown"] = "false"
	}

	return details
}
