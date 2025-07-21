package main

import (
	"flag"
	"log"
	"os"
	"os/signal"
	"syscall"

	"socks-forwarder/internal/config"
	"socks-forwarder/internal/server"
)

//nolint:gochecknoglobals // Build-time variables set via ldflags during compilation
var (
	version   = "dev"
	buildDate = "unknown"
	gitCommit = "unknown"
)

func main() {
	var (
		configFile  = flag.String("config", "config.yaml", "Path to configuration file")
		port        = flag.Int("port", 1080, "Port to listen on")
		showVersion = flag.Bool("version", false, "Show version information")
		help        = flag.Bool("help", false, "Show help")
	)
	flag.Parse()

	if *showVersion {
		log.Printf("SOCKS5 Forwarder %s", version)
		log.Printf("Build date: %s", buildDate)
		log.Printf("Git commit: %s", gitCommit)

		return
	}

	if *help {
		flag.PrintDefaults()

		return
	}

	// Load configuration
	cfg, err := config.LoadConfig(*configFile)
	if err != nil {
		log.Printf("Warning: Could not load config file %s: %v", *configFile, err)
		log.Println("Using default configuration")
		cfg = config.DefaultConfig()
	}

	// Override port if specified via command line
	if *port != 1080 {
		cfg.Port = *port
	}

	// Create and start the SOCKS5 server
	srv := server.NewServer(cfg)

	log.Printf("Starting SOCKS5 forwarder on port %d", cfg.Port)
	log.Printf("Loaded %d forwarding rules", len(cfg.Rules))
	log.Printf("Loaded %d direct hosts", len(cfg.DirectHosts))

	// Start server in a goroutine
	go func() {
		if err := srv.Start(); err != nil {
			log.Fatalf("Server failed to start: %v", err)
		}
	}()

	// Wait for interrupt signal
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
	<-sigChan

	log.Println("Shutting down...")
	srv.Stop()
}
