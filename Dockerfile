# Rootless Dockerfile for SOCKS5 Forwarder using distroless
# Stage 1: Build the application
FROM golang:1.24-alpine AS builder

# Install git and ca-certificates, and create a non-root user for building
RUN apk add --no-cache git ca-certificates tzdata && \
    adduser -D -s /bin/sh -u 1001 builder

USER builder

# Set working directory
WORKDIR /app

# Copy go mod files first for better caching
COPY --chown=builder:builder go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy source code
COPY --chown=builder:builder . .

# Use Docker's automatic platform detection
ARG TARGETPLATFORM
ARG BUILDPLATFORM
ARG TARGETOS
ARG TARGETARCH

# Build the application with static linking and verify it works
RUN CGO_ENABLED=0 GOOS=${TARGETOS} GOARCH=${TARGETARCH} go build \
    -ldflags='-w -s -extldflags "-static"' \
    -a -installsuffix cgo \
    -o socks-forwarder \
    ./cmd/socks-forwarder && \
    ./socks-forwarder -help

# Stage 2: Create the runtime image using distroless
FROM gcr.io/distroless/static:nonroot

# Copy timezone data
COPY --from=builder /usr/share/zoneinfo /usr/share/zoneinfo

# Copy CA certificates
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

# Copy the binary
COPY --from=builder /app/socks-forwarder /usr/local/bin/socks-forwarder

# Copy default configuration
COPY --from=builder /app/config.yaml /etc/socks-forwarder/config.yaml

# The distroless nonroot image already has a non-root user (uid 65532)
# No need to create or switch users

# Expose the default SOCKS5 port and metrics port
EXPOSE 1080
EXPOSE 8080

# Set default configuration path
ENV CONFIG_FILE=/etc/socks-forwarder/config.yaml

# Add labels for better container management
LABEL maintainer="SOCKS5 Forwarder Team"
LABEL description="SOCKS5 proxy forwarder with rule-based routing"
LABEL version="1.0"
LABEL security.non-root="true"

# Health check using the binary itself
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD ["/usr/local/bin/socks-forwarder", "-help"]

# Default command
ENTRYPOINT ["/usr/local/bin/socks-forwarder"]
CMD ["-config", "/etc/socks-forwarder/config.yaml"]
