package config //nolint:testpackage // testpackage - tests need access to internal methods

import (
	"os"
	"testing"
)

func TestDefaultConfig(t *testing.T) {
	cfg := DefaultConfig()

	if cfg.Port != 1080 {
		t.Errorf("Expected default port 1080, got %d", cfg.Port)
	}

	if cfg.Debug != false {
		t.Errorf("Expected debug to be false by default")
	}

	if cfg.MetricsEnabled != true {
		t.Errorf("Expected metrics to be enabled by default")
	}

	if len(cfg.Rules) != 0 {
		t.Errorf("Expected no rules by default, got %d", len(cfg.Rules))
	}
}

func TestHostnameMatching(t *testing.T) {
	cfg := &Config{}

	tests := []struct {
		pattern  string
		hostname string
		expected bool
	}{
		// Exact matches
		{"example.com", "example.com", true},
		{"example.com", "EXAMPLE.COM", true}, // case insensitive
		{"example.com", "other.com", false},

		// Wildcard prefix
		{"*.example.com", "sub.example.com", true},
		{"*.example.com", "api.example.com", true},
		{"*.example.com", "example.com", true}, // should match the domain itself
		{"*.example.com", "other.com", false},

		// Wildcard suffix
		{"example.*", "example.com", true},
		{"example.*", "example.org", true},
		{"example.*", "other.com", false},

		// Wildcard in middle
		{"*.test.*", "sub.test.com", true},
		{"*.test.*", "api.test.org", true},
		{"*.test.*", "test.com", false},

		// Universal wildcard
		{"*", "anything.com", true},
		{"*", "localhost", true},
	}

	for _, test := range tests {
		result := cfg.matchHostname(test.pattern, test.hostname)
		if result != test.expected {
			t.Errorf("matchHostname(%q, %q) = %v, expected %v",
				test.pattern, test.hostname, result, test.expected)
		}
	}
}

func TestFindRule(t *testing.T) {
	cfg := &Config{
		Rules: []Rule{
			{Target: "proxy1.com:1080", Hostnames: []string{"*.internal.com"}},
			{Target: "proxy2.com:1080", Hostnames: []string{"api.example.com"}},
			{Target: "proxy3.com:1080", Hostnames: []string{"*.test.*"}},
		},
	}

	tests := []struct {
		hostname     string
		expectedRule *Rule
	}{
		{"api.internal.com", &cfg.Rules[0]},
		{"api.example.com", &cfg.Rules[1]},
		{"sub.test.com", &cfg.Rules[2]},
		{"other.com", nil},
	}

	for _, test := range tests {
		result := cfg.FindRule(test.hostname)
		if test.expectedRule == nil {
			if result != nil {
				t.Errorf("FindRule(%q) expected nil, got %v", test.hostname, result)
			}
		} else {
			if result == nil {
				t.Errorf("FindRule(%q) expected rule, got nil", test.hostname)
			} else if result.Target != test.expectedRule.Target {
				t.Errorf("FindRule(%q) expected target %q, got %q",
					test.hostname, test.expectedRule.Target, result.Target)
			}
		}
	}
}

func TestShouldServeDirect(t *testing.T) {
	cfg := &Config{
		DirectHosts: []string{
			"localhost",
			"127.0.0.1",
			"*.local",
			"direct.example.com",
		},
	}

	tests := []struct {
		hostname string
		expected bool
	}{
		{"localhost", true},
		{"127.0.0.1", true},
		{"api.local", true},
		{"test.local", true},
		{"direct.example.com", true},
		{"other.example.com", false},
		{"example.com", false},
		{"remote.server.com", false},
	}

	for _, test := range tests {
		result := cfg.ShouldServeDirect(test.hostname)
		if result != test.expected {
			t.Errorf("ShouldServeDirect(%q) = %v, expected %v",
				test.hostname, result, test.expected)
		}
	}
}

func TestDirectHostsBypassesRules(t *testing.T) {
	cfg := &Config{
		DirectHosts: []string{
			"direct.example.com",
			"*.bypass.com",
		},
		Rules: []Rule{
			{Target: "proxy.example.com:1080", Hostnames: []string{"*.example.com"}},
			{Target: "proxy.bypass.com:1080", Hostnames: []string{"*.bypass.com"}},
		},
	}

	// Test that direct hosts bypass rules
	if !cfg.ShouldServeDirect("direct.example.com") {
		t.Error("direct.example.com should be served directly")
	}

	if !cfg.ShouldServeDirect("api.bypass.com") {
		t.Error("api.bypass.com should be served directly")
	}

	// Test that rules still work for non-direct hosts
	rule := cfg.FindRule("api.example.com")
	if rule == nil {
		t.Error("api.example.com should match a rule")
	}

	// Test that direct hosts would match rules but are bypassed
	rule = cfg.FindRule("direct.example.com")
	if rule == nil {
		t.Error("direct.example.com should match a rule (but will be bypassed)")
	}
}

//nolint:cyclop // cyclop:cyclomatic-complexity - Test with multiple validation scenarios
func TestLoadConfigWithDirectHosts(t *testing.T) {
	// Create a temporary config file
	configContent := `
port: 1080
debug: true
directHosts:
  - "localhost"
  - "*.local"
rules:
  - target: "proxy.test.com:1080"
    hostnames:
      - "*.test.com"
    description: "Test rule"
`

	tmpFile, err := os.CreateTemp("", "test-config-*.yaml")
	if err != nil {
		t.Fatalf("Failed to create temp file: %v", err)
	}
	defer os.Remove(tmpFile.Name())

	if _, err := tmpFile.WriteString(configContent); err != nil {
		t.Fatalf("Failed to write temp file: %v", err)
	}
	tmpFile.Close()

	// Load the config
	cfg, err := LoadConfig(tmpFile.Name())
	if err != nil {
		t.Fatalf("Failed to load config: %v", err)
	}

	// Verify loaded values
	if cfg.Port != 1080 {
		t.Errorf("Expected port 1080, got %d", cfg.Port)
	}

	if !cfg.Debug {
		t.Errorf("Expected debug to be true")
	}

	if len(cfg.DirectHosts) != 2 {
		t.Errorf("Expected 2 direct hosts, got %d", len(cfg.DirectHosts))
	}

	expectedDirectHosts := []string{"localhost", "*.local"}
	for i, expected := range expectedDirectHosts {
		if i >= len(cfg.DirectHosts) || cfg.DirectHosts[i] != expected {
			t.Errorf("Expected direct host %d to be %q, got %q", i, expected, cfg.DirectHosts[i])
		}
	}

	if len(cfg.Rules) != 1 {
		t.Errorf("Expected 1 rule, got %d", len(cfg.Rules))
	}

	if len(cfg.Rules) > 0 {
		rule := cfg.Rules[0]
		if len(rule.Hostnames) != 1 || rule.Hostnames[0] != "*.test.com" {
			t.Errorf("Expected hostnames to contain '*.test.com', got %v", rule.Hostnames)
		}
		if rule.Target != "proxy.test.com:1080" {
			t.Errorf("Expected target 'proxy.test.com:1080', got %q", rule.Target)
		}
	}
}

func TestLoadConfigNonExistent(t *testing.T) {
	_, err := LoadConfig("non-existent-file.yaml")
	if err == nil {
		t.Errorf("Expected error when loading non-existent file")
	}
}
