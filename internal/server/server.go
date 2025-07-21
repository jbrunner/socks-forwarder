package server

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net"
	"net/http"
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
}

const DefaultPort = 8080

// NewServer creates a new SOCKS5 forwarder server.
func NewServer(cfg *config.Config) *Server {
	// Initialize metrics with current config
	metrics.UpdateActiveRules(len(cfg.Rules))
	metrics.UpdateActiveDirectHosts(len(cfg.DirectHosts))

	return &Server{
		config: cfg,
		done:   make(chan struct{}),
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

	// Add health check endpoint
	mux.HandleFunc("/health", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("OK"))
	})

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
