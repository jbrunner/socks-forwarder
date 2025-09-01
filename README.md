# SOCKS5 Forwarder

SOCKS5 and HTTP proxy server that forwards connections based on hostname rules to other SOCKS5 servers or serves them directly.

## Features

- **SOCKS5 Protocol Support**: Built-in SOCKS5 server
- **HTTP Proxy Support**: Built-in HTTP/HTTPS proxy server
- **Rule-Based Forwarding**: Configure hostname patterns to forward requests through different upstream SOCKS5 proxies
- **Direct Host Override**: Configure hosts that will always be served directly, bypassing all forwarding rules
- **Direct Connections**: Serve requests directly if no forwarding rule matches
- **Wildcard Matching**: Support for wildcard patterns in hostname rules and direct hosts (e.g., `*.example.com`)
- **Default Forwarding**: Optional default SOCKS5 server for unmatched requests


## Quick Start
By default, the SOCKS5 proxy listens on port 1080 and the HTTP proxy on port 8080.

```bash
docker run -p 1080:1080 -p 8080:8080 \
  -v "config.yaml:/etc/socks-forwarder/config.yaml:ro" \
  ghcr.io/jbrunner/socks-forwarder
```

### Build from Source
```bash
make deps
make build
./socks-forwarder -help
```

### Testing with curl
```bash
# Test SOCKS5 proxy
curl --socks5 localhost:1080 http://example.com

# Test SOCKS5 proxy resolving DNS over SOCKS
curl --socks5-hostname localhost:1080 http://example.com

# Test HTTP proxy
curl --proxy localhost:8080 http://example.com
```

## Configuration

All features and routing logic are configured via the YAML file: [`config.yaml`](config.yaml).


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

The application exposes comprehensive Prometheus metrics for monitoring and observability if `metricsEnabled`.

### Health Endpoints

The application provides Kubernetes-compatible health check endpoints:

- **`/health`** - General health check combining readiness and liveness
- **`/readyz`** - Readiness probe indicating when SOCKS listener is ready to accept traffic
- **`/livez`** - Liveness probe with internal health validations (memory, goroutines, config validity)

All endpoints return JSON responses with detailed status information and appropriate HTTP status codes (200 OK / 503 Service Unavailable).

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


## HTTP Proxy Support

The built-in HTTP proxy server allows you to forward HTTP(S) traffic using the same rules and directHosts as the SOCKS5 proxy. This is useful for tools and environments that do not support SOCKS5 proxies natively.

- Enable or disable the HTTP proxy with `proxyEnabled` in your config.
- The HTTP proxy listens on `proxyPort` (default: 8080).
- All routing, directHosts, and rules work exactly as with SOCKS5.
- Prometheus metrics are collected for HTTP proxy traffic as well.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
