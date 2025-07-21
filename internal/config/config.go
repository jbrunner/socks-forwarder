package config

import (
	"fmt"
	"os"
	"strings"

	"gopkg.in/yaml.v3"
)

// Rule defines a forwarding rule.
type Rule struct {
	// Target SOCKS5 server to forward to (host:port)
	Target string `yaml:"target"`
	// Hostname patterns to match (supports wildcards with *)
	Hostnames []string `yaml:"hostnames"`
	// Description of the rule (optional)
	Description string `yaml:"description,omitempty"`
}

// Config holds the application configuration.
type Config struct {
	// Port to listen on for SOCKS5 connections
	Port int `yaml:"port"`
	// Forwarding rules
	Rules []Rule `yaml:"rules"`
	// Direct hosts - these will always be served directly, bypassing rules
	DirectHosts []string `yaml:"directHosts,omitempty"`
	// Default target SOCKS5 server (optional)
	DefaultTarget string `yaml:"defaultTarget,omitempty"`
	// Enable debug logging
	Debug bool `yaml:"debug"`
	// Enable metrics server (default: true)
	MetricsEnabled bool `yaml:"metricsEnabled"`
	// Port for metrics server (optional, defaults to main port + 1000)
	MetricsPort int `yaml:"metricsPort,omitempty"`
}

// LoadConfig loads configuration from a YAML file.
func LoadConfig(filename string) (*Config, error) {
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, fmt.Errorf("failed to read config file %s: %w", filename, err)
	}

	var cfg Config
	if err := yaml.Unmarshal(data, &cfg); err != nil {
		return nil, fmt.Errorf("failed to unmarshal YAML config: %w", err)
	}

	// Set defaults for fields that weren't explicitly configured
	if cfg.Port == 0 {
		cfg.Port = 1080
	}

	// metricsEnabled defaults to true if not explicitly set to false
	// We need to check if it was explicitly set in the YAML
	var tempCfg struct {
		MetricsEnabled *bool `yaml:"metricsEnabled"`
	}
	_ = yaml.Unmarshal(data, &tempCfg) // Ignore error since we already parsed it above
	if tempCfg.MetricsEnabled == nil {
		cfg.MetricsEnabled = true // Default to true if not specified
	}

	return &cfg, nil
}

// DefaultConfig returns a default configuration.
func DefaultConfig() *Config {
	return &Config{
		Port:           1080,
		Rules:          []Rule{},
		DirectHosts:    []string{},
		Debug:          false,
		MetricsEnabled: true,
	}
}

// FindRule finds the first matching rule for a hostname.
func (c *Config) FindRule(hostname string) *Rule {
	for _, rule := range c.Rules {
		for _, ruleHostname := range rule.Hostnames {
			if c.matchHostname(ruleHostname, hostname) {
				return &rule
			}
		}
	}

	return nil
}

// ShouldServeDirect checks if a hostname should be served directly.
// Direct hosts bypass all forwarding rules.
func (c *Config) ShouldServeDirect(hostname string) bool {
	for _, directHost := range c.DirectHosts {
		if c.matchHostname(directHost, hostname) {
			return true
		}
	}

	return false
}

// matchHostname checks if a hostname matches a pattern (supports wildcards).
func (c *Config) matchHostname(pattern, hostname string) bool {
	// Convert to lowercase for case-insensitive matching
	pattern = strings.ToLower(pattern)
	hostname = strings.ToLower(hostname)

	// Simple wildcard matching
	if pattern == "*" {
		return true
	}

	// Exact match
	if pattern == hostname {
		return true
	}

	// Handle wildcards
	if strings.Contains(pattern, "*") {
		return c.wildcardMatch(pattern, hostname)
	}

	return false
}

// wildcardMatch performs wildcard pattern matching.
func (c *Config) wildcardMatch(pattern, hostname string) bool {
	// Convert pattern to regex-like matching
	// Replace * with regex equivalent and match

	// Special case: if pattern is just "*"
	if pattern == "*" {
		return true
	}

	// Special case for *.domain.com pattern
	if c.isSimplePrefixPattern(pattern) {
		return c.matchSimplePrefixPattern(pattern, hostname)
	}

	// Complex pattern: split by * and check each part exists in order
	return c.matchComplexPattern(pattern, hostname)
}

// isSimplePrefixPattern checks if pattern is a simple *.domain.com format.
func (c *Config) isSimplePrefixPattern(pattern string) bool {
	return strings.HasPrefix(pattern, "*.") && !strings.Contains(pattern[2:], "*")
}

// matchSimplePrefixPattern handles *.domain.com patterns.
func (c *Config) matchSimplePrefixPattern(pattern, hostname string) bool {
	suffix := pattern[2:]
	// Should match sub.domain.com but also domain.com itself
	return strings.HasSuffix(hostname, "."+suffix) || hostname == suffix
}

// matchComplexPattern handles patterns with multiple wildcards.
func (c *Config) matchComplexPattern(pattern, hostname string) bool {
	parts := strings.Split(pattern, "*")
	currentPos := 0

	for partIndex, part := range parts {
		if part == "" {
			continue // Skip empty parts from consecutive *
		}

		if !c.matchPatternPart(pattern, hostname, part, partIndex, len(parts), &currentPos) {
			return false
		}
	}

	return true
}

// matchPatternPart matches a single part of a complex pattern.
func (c *Config) matchPatternPart(pattern, hostname, part string, partIndex, totalParts int, currentPos *int) bool {
	// Find the part in the remaining hostname
	idx := strings.Index(hostname[*currentPos:], part)
	if idx == -1 {
		return false
	}

	actualPos := *currentPos + idx

	// Check position constraints for first and last parts
	if !c.validatePartPosition(pattern, hostname, part, partIndex, totalParts, actualPos) {
		return false
	}

	*currentPos = actualPos + len(part)

	return true
}

// validatePartPosition checks if pattern part is in correct position.
func (c *Config) validatePartPosition(pattern, hostname, part string, partIndex, totalParts, actualPos int) bool {
	// First part: if pattern doesn't start with *, it must be at the beginning
	if partIndex == 0 && !strings.HasPrefix(pattern, "*") && actualPos != 0 {
		return false
	}

	// Last part: if pattern doesn't end with *, it must be at the end
	if partIndex == totalParts-1 && !strings.HasSuffix(pattern, "*") {
		if actualPos+len(part) != len(hostname) {
			return false
		}
	}

	return true
}
