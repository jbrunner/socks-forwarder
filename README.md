# SOCKS5 Forwarder

SOCKS5 proxy server that forwards connections based on hostname rules to other SOCKS5 servers or serves them directly.

## Features

- **SOCKS5 Protocol Support**: Full SOCKS5 implementation for accepting client connections
- **Rule-Based Forwarding**: Configure hostname patterns to forward requests through different SOCKS5 proxies
- **Direct Host Override**: Configure hosts that will always be served directly, bypassing all forwarding rules
- **Direct Connections**: Serve requests directly if no forwarding rule matches
- **Wildcard Matching**: Support for wildcard patterns in hostname rules and direct hosts (e.g., `*.example.com`)
- **Default Forwarding**: Optional default SOCKS5 server for unmatched requests
- **Debug Logging**: Configurable debug output for troubleshooting

## Quick Start

1. **Build the application:**
   ```bash
   make deps
   make build
   ```

2. **Run with default configuration:**
   ```bash
   ./socks-forwarder
   ```

3. **Run with custom configuration:**
   ```bash
   ./socks-forwarder -config my-config.yaml -port 8080
   ```

### Testing with curl
```bash
# Test through the proxy
curl --socks5 localhost:1080 http://example.com

# Test with specific hostname
curl --socks5 localhost:1080 http://internal.company.com

# Let the proxy resolve the host name
curl --socks5-hostname localhost:1080 http://internal.company.com
```

## Configuration

The application uses a YAML configuration file (`config.yaml` by default). Here's an example:

```yaml
# Port to listen on for incoming SOCKS5 connections
port: 1080

# Enable debug logging
debug: false

# Enable metrics server
metricsEnabled: true

# Direct hosts - these will always be served directly, bypassing all rules
# Supports wildcard patterns like *.example.com
directHosts:
  - "localhost"
  - "127.0.0.1"
  - "*.local"
  - "*.localhost"

# Default target SOCKS5 server (optional)
#defaultTarget: "fallback-proxy.example.com:1080"

# Forwarding rules
rules:
  # Forward company internal services through corporate proxy
  - target: "corporate-proxy.company.com:1080"
    hostnames:
      - "*.internal.company.com"
      - "intranet.company.com"
      - "admin.company.com"
    name: "Company internal services"

  # Forward development environments
  - target: "dev-proxy.example.com:1080"
    hostnames:
      - "dev.example.com"
      - "*.dev.example.com"
      - "*.staging.example.com"
    name: "Development and staging environments"
```

### Configuration Options

- **`port`**: Port number to listen for SOCKS5 connections (default: 1080)
- **`debug`**: Enable debug logging (default: false)
- **`metricsEnabled`**: Enable Prometheus metrics server (default: true)
- **`metricsPort`**: Port for Prometheus metrics server (optional, defaults to main port + 1000)
- **`directHosts`**: Array of hostnames that will always be served directly, bypassing all forwarding rules (supports wildcards)
- **`defaultTarget`**: Default SOCKS5 server for unmatched requests (optional)
- **`rules`**: Array of forwarding rules with the following properties:
  - **`target`**: Target SOCKS5 server address (host:port)
  - **`hostnames`**: Array of hostname patterns to match (supports `*` wildcards)
  - **`name`**: Optional name of the rule

### Hostname Matching

The hostname matching supports the following patterns:

- **Exact match**: `example.com` matches only `example.com`
- **Wildcard prefix**: `*.example.com` matches `sub.example.com`, `api.example.com`, etc.
- **Wildcard suffix**: `example.*` matches `example.com`, `example.org`, etc.
- **Wildcard all**: `*` matches any hostname

## Command Line Options

```bash
Usage of ./socks-forwarder:
  -config string
        Path to configuration file (default "config.yaml")
  -port int
        Port to listen on (default 1080)
  -help
        Show help
```

## How It Works

1. **Client Connection**: The application accepts SOCKS5 connections from clients
2. **Direct Host Check**: First checks if the target hostname is configured as a direct host
3. **Rule Evaluation**: If not a direct host, checks the target hostname against configured forwarding rules
4. **Forwarding Decision**:
   - If hostname is in `directHosts`: Establish a direct connection (bypasses all rules)
   - If a rule matches: Forward the request through the specified SOCKS5 server
   - If no rule matches but `defaultTarget` is set: Forward through the default SOCKS5 server
   - If no rule matches and no default target: Establish a direct connection
5. **Data Relay**: Bidirectionally relay data between the client and target connections

## Metrics and Monitoring

### Prometheus Metrics

The application exposes comprehensive Prometheus metrics for monitoring and observability:

```bash
# Access metrics endpoint (default: port + 1000)
curl http://localhost:2080/metrics

# Health check endpoint
curl http://localhost:2080/health
```

### Available Metrics

#### Connection Metrics
- `socks5_active_connections` - Number of currently active SOCKS5 connections
- `socks5_active_connections_by_rule{rule_name}` - Number of currently active SOCKS5 connections by rule
- `socks5_connections_total{status}` - Total number of SOCKS5 connections handled (success/failed)
- `socks5_connection_duration_seconds{routing_type,rule_name}` - Connection duration histogram

#### Traffic Metrics
- `socks5_bytes_transferred_total{direction,routing_type,rule_name}` - Total bytes transferred
- `socks5_data_transfer_rate_bytes_per_second{direction,rule_name}` - Data transfer rate histogram

#### Routing Metrics
- `socks5_routing_decisions_total{decision,rule_name}` - Routing decisions made
- `socks5_rule_matches_total{rule_target,rule_name}` - Rule matches
- `socks5_direct_host_matches_total` - Direct host matches
- `socks5_active_rules` - Number of active forwarding rules
- `socks5_active_direct_hosts` - Number of active direct host patterns

#### Error Metrics
- `socks5_connection_errors_total{error_type,rule_name}` - Connection errors
- `socks5_proxy_errors_total{error_type,rule_name}` - Proxy-related errors

#### Performance Metrics
- `socks5_connection_establishment_seconds{connection_type,rule_name}` - Connection establishment time

### Grafana Dashboard

Example Prometheus configuration:
```yaml
scrape_configs:
  - job_name: 'socks5-forwarder'
    static_configs:
      - targets: ['localhost:8080']
    scrape_interval: 15s
```

Key metrics to monitor:
- **Active Connections**: Monitor connection load
- **Error Rates**: Track connection and proxy failures
- **Routing Distribution**: Understand traffic patterns
- **Performance**: Connection establishment and transfer rates

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
