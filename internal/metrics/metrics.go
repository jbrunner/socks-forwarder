package metrics

import (
	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
)

var (
	// Connection metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ActiveConnections = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "socks5_active_connections",
		Help: "Number of currently active SOCKS5 connections",
	})

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	TotalConnections = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_connections_total",
		Help: "Total number of SOCKS5 connections handled",
	}, []string{"status"}) // status: success, failed

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ConnectionDuration = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "socks5_connection_duration_seconds",
		Help:    "Duration of SOCKS5 connections in seconds",
		Buckets: []float64{0.1, 0.5, 1.0, 5.0, 10.0, 30.0, 60.0, 300.0, 600.0},
	}, []string{"routing_type"}) // routing_type: direct, proxy, default

	// Traffic metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	BytesTransferred = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_bytes_transferred_total",
		Help: "Total bytes transferred through SOCKS5 proxy",
	}, []string{"direction", "routing_type"}) // direction: in, out

	// Routing metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	RoutingDecisions = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_routing_decisions_total",
		Help: "Total routing decisions made",
	}, []string{"decision", "target"}) // decision: direct, proxy, default; target: hostname of target

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	RuleMatches = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_rule_matches_total",
		Help: "Total number of rule matches",
	}, []string{"rule_target", "rule_name"})

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	DirectHostMatches = promauto.NewCounter(prometheus.CounterOpts{
		Name: "socks5_direct_host_matches_total",
		Help: "Total number of direct host matches",
	})

	// Error metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ConnectionErrors = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_connection_errors_total",
		Help: "Total connection errors",
	}, []string{"error_type", "target"}) // error_type: dial_failed, proxy_failed, auth_failed, etc.

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ProxyErrors = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_proxy_errors_total",
		Help: "Total proxy-related errors",
	}, []string{"proxy_target", "error_type"})

	// Performance metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ConnectionEstablishmentTime = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "socks5_connection_establishment_seconds",
		Help:    "Time taken to establish connections",
		Buckets: []float64{0.001, 0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0},
	}, []string{"connection_type"}) // connection_type: direct, proxy

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	DataTransferRate = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "socks5_data_transfer_rate_bytes_per_second",
		Help:    "Data transfer rate in bytes per second",
		Buckets: []float64{1024, 10240, 102400, 1048576, 10485760, 104857600}, // 1KB to 100MB/s
	}, []string{"direction"}) // direction: upload, download

	// Configuration metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ConfigReloads = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_config_reloads_total",
		Help: "Total number of configuration reloads",
	}, []string{"status"}) // status: success, failed

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ActiveRules = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "socks5_active_rules",
		Help: "Number of active forwarding rules",
	})

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ActiveDirectHosts = promauto.NewGauge(prometheus.GaugeOpts{
		Name: "socks5_active_direct_hosts",
		Help: "Number of active direct host patterns",
	})
)

// Helper functions for common metric operations

func IncrementActiveConnections() {
	ActiveConnections.Inc()
}

func DecrementActiveConnections() {
	ActiveConnections.Dec()
}

func RecordConnectionSuccess() {
	TotalConnections.WithLabelValues("success").Inc()
}

func RecordConnectionFailure() {
	TotalConnections.WithLabelValues("failed").Inc()
}

func RecordBytesIn(bytes float64, routingType string) {
	BytesTransferred.WithLabelValues("in", routingType).Add(bytes)
}

func RecordBytesOut(bytes float64, routingType string) {
	BytesTransferred.WithLabelValues("out", routingType).Add(bytes)
}

func RecordDirectDecision(target string) {
	RoutingDecisions.WithLabelValues("direct", target).Inc()
}

func RecordProxyDecision(target string) {
	RoutingDecisions.WithLabelValues("proxy", target).Inc()
}

func RecordDefaultDecision(target string) {
	RoutingDecisions.WithLabelValues("default", target).Inc()
}

func RecordRuleMatch(ruleTarget, ruleName string) {
	RuleMatches.WithLabelValues(ruleTarget, ruleName).Inc()
}

func RecordDirectHostMatch() {
	DirectHostMatches.Inc()
}

func RecordConnectionError(errorType, target string) {
	ConnectionErrors.WithLabelValues(errorType, target).Inc()
}

func RecordProxyError(proxyTarget, errorType string) {
	ProxyErrors.WithLabelValues(proxyTarget, errorType).Inc()
}

func UpdateActiveRules(count int) {
	ActiveRules.Set(float64(count))
}

func UpdateActiveDirectHosts(count int) {
	ActiveDirectHosts.Set(float64(count))
}
