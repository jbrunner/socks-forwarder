# Makefile for SOCKS5 Forwarder

# Variables
BINARY_NAME=socks-forwarder
GO_FILES=$(shell find . -name '*.go' -type f)
CONFIG_FILE=config.yaml

# Default target
.PHONY: all
all: build

# Build the application
.PHONY: build
build: $(BINARY_NAME)

$(BINARY_NAME): $(GO_FILES)
	go build -o $(BINARY_NAME) ./cmd/socks-forwarder

# Run the application
.PHONY: run
run: build
	./$(BINARY_NAME) -config $(CONFIG_FILE)

# Test the application
.PHONY: test
test:
	go test -v ./...

# Clean build artifacts
.PHONY: clean
clean:
	rm -f $(BINARY_NAME)

# Format code
.PHONY: fmt
fmt:
	go fmt ./...

# Run linter
.PHONY: lint
lint:
	golangci-lint run --new-from-rev=""

# Validate GitHub Actions workflows
.PHONY: validate-actions
validate-actions:
	@command -v act >/dev/null 2>&1 || { echo "act is not installed. Install from https://github.com/nektos/act"; exit 1; }
	act --list

# Run security checks
.PHONY: security
security:
	@command -v gosec >/dev/null 2>&1 || go install github.com/securecodewarrior/gosec/v2/cmd/gosec@latest
	gosec ./...

# Install dependencies
.PHONY: deps
deps:
	go mod download
	go mod tidy

# Build for multiple platforms
.PHONY: build-all
build-all: clean
	GOOS=linux GOARCH=amd64 go build -o $(BINARY_NAME)-linux-amd64 ./cmd/socks-forwarder
	GOOS=windows GOARCH=amd64 go build -o $(BINARY_NAME)-windows-amd64.exe ./cmd/socks-forwarder
	GOOS=darwin GOARCH=amd64 go build -o $(BINARY_NAME)-darwin-amd64 ./cmd/socks-forwarder
	GOOS=darwin GOARCH=arm64 go build -o $(BINARY_NAME)-darwin-arm64 ./cmd/socks-forwarder

# Docker targets
.PHONY: docker-build
docker-build:
	docker build -t socks5-forwarder:latest .

.PHONY: docker-run
docker-run: docker-build
	docker run --rm -p 1080:1080 socks5-forwarder:latest

.PHONY: docker-compose-up
docker-compose-up:
	docker-compose up -d

.PHONY: docker-compose-down
docker-compose-down:
	docker-compose down

# Show help
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  build        - Build the application"
	@echo "  run          - Build and run with default config"
	@echo "  run-debug    - Build and run with debug config"
	@echo "  test         - Run tests"
	@echo "  clean        - Remove build artifacts"
	@echo "  fmt          - Format code"
	@echo "  lint         - Run linter"
	@echo "  validate-actions - Validate GitHub Actions workflows"
	@echo "  security     - Run security checks"
	@echo "  deps         - Download and tidy dependencies"
	@echo "  build-all    - Build for multiple platforms"
	@echo "  docker-build - Build Docker image"
	@echo "  docker-run   - Build and run Docker container"
	@echo "  docker-compose-up - Start with docker-compose"
	@echo "  docker-compose-down - Stop docker-compose"
	@echo "  help         - Show this help"
