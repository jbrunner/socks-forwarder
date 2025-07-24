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
	ActiveConnectionsByRule = promauto.NewGaugeVec(prometheus.GaugeOpts{
		Name: "socks5_active_connections_by_rule",
		Help: "Number of currently active SOCKS5 connections by rule",
	}, []string{"rule_name"})

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
	}, []string{"routing_type", "rule_name"}) // routing_type: direct, proxy, default

	// Traffic metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	BytesTransferred = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_bytes_transferred_total",
		Help: "Total bytes transferred through SOCKS5 proxy",
	}, []string{"direction", "routing_type", "rule_name"}) // direction: in, out

	// Routing metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	RoutingDecisions = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_routing_decisions_total",
		Help: "Total routing decisions made",
	}, []string{"decision", "rule_name"}) // decision: direct, proxy, default

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
	}, []string{"error_type", "rule_name"}) // error_type: dial_failed, proxy_failed, auth_failed, etc.

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ProxyErrors = promauto.NewCounterVec(prometheus.CounterOpts{
		Name: "socks5_proxy_errors_total",
		Help: "Total proxy-related errors",
	}, []string{"error_type", "rule_name"})

	// Performance metrics.
	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	ConnectionEstablishmentTime = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "socks5_connection_establishment_seconds",
		Help:    "Time taken to establish connections",
		Buckets: []float64{0.001, 0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0},
	}, []string{"connection_type", "rule_name"}) // connection_type: direct, proxy

	//nolint:gochecknoglobals // gochecknoglobals:global-variable - Prometheus metrics must be global
	DataTransferRate = promauto.NewHistogramVec(prometheus.HistogramOpts{
		Name:    "socks5_data_transfer_rate_bytes_per_second",
		Help:    "Data transfer rate in bytes per second",
		Buckets: []float64{1024, 10240, 102400, 1048576, 10485760, 104857600}, // 1KB to 100MB/s
	}, []string{"direction", "rule_name"}) // direction: upload, download

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

func IncrementActiveConnections(ruleName string) {
	ActiveConnections.Inc()
	ActiveConnectionsByRule.WithLabelValues(ruleName).Inc()
}

func DecrementActiveConnections(ruleName string) {
	ActiveConnections.Dec()
	ActiveConnectionsByRule.WithLabelValues(ruleName).Dec()
}

func RecordConnectionSuccess() {
	TotalConnections.WithLabelValues("success").Inc()
}

func RecordConnectionFailure() {
	TotalConnections.WithLabelValues("failed").Inc()
}

func RecordBytesIn(bytes float64, routingType, ruleName string) {
	BytesTransferred.WithLabelValues("in", routingType, ruleName).Add(bytes)
}

func RecordBytesOut(bytes float64, routingType, ruleName string) {
	BytesTransferred.WithLabelValues("out", routingType, ruleName).Add(bytes)
}

func RecordDirectDecision(ruleName string) {
	RoutingDecisions.WithLabelValues("direct", ruleName).Inc()
}

func RecordProxyDecision(ruleName string) {
	RoutingDecisions.WithLabelValues("proxy", ruleName).Inc()
}

func RecordDefaultDecision(ruleName string) {
	RoutingDecisions.WithLabelValues("default", ruleName).Inc()
}

func RecordRuleMatch(ruleTarget, ruleName string) {
	RuleMatches.WithLabelValues(ruleTarget, ruleName).Inc()
}

func RecordDirectHostMatch() {
	DirectHostMatches.Inc()
}

func RecordConnectionError(errorType, ruleName string) {
	ConnectionErrors.WithLabelValues(errorType, ruleName).Inc()
}

func RecordProxyError(errorType, ruleName string) {
	ProxyErrors.WithLabelValues(errorType, ruleName).Inc()
}

func UpdateActiveRules(count int) {
	ActiveRules.Set(float64(count))
}

func UpdateActiveDirectHosts(count int) {
	ActiveDirectHosts.Set(float64(count))
}

func IncrementRuleActiveConnections(ruleName string) {
	ActiveConnectionsByRule.WithLabelValues(ruleName).Inc()
}

func DecrementRuleActiveConnections(ruleName string) {
	ActiveConnectionsByRule.WithLabelValues(ruleName).Dec()
}

func RecordConnectionDuration(duration float64, routingType, ruleName string) {
	ConnectionDuration.WithLabelValues(routingType, ruleName).Observe(duration)
}

func RecordConnectionEstablishment(duration float64, connectionType, ruleName string) {
	ConnectionEstablishmentTime.WithLabelValues(connectionType, ruleName).Observe(duration)
}

func RecordDataTransferRate(rate float64, direction, ruleName string) {
	DataTransferRate.WithLabelValues(direction, ruleName).Observe(rate)
}
