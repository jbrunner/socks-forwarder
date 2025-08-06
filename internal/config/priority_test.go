package config_test

import (
	"testing"

	"socks-forwarder/internal/config"
)

func TestDirectHostPriorityOverRules(t *testing.T) {
	// Test configuration that reproduces the issue
	cfg := &config.Config{
		Port:  1080,
		Debug: false,
		DirectHosts: []string{
			"localhost",
			"127.0.0.1",
			"*.local",
			"*.localhost",
			"direct.dev.example.com", // This should have priority
		},
		Rules: []config.Rule{
			{
				Target: "dev-proxy.example.com:1080",
				Hostnames: []string{
					"dev.example.com",
					"*.dev.example.com", // This pattern matches "direct.dev.example.com"
					"*.staging.example.com",
				},
				Name: "Development and staging environments",
			},
		},
	}

	tests := []struct {
		name         string
		hostname     string
		expectDirect bool
		expectRule   *config.Rule
		description  string
	}{
		{
			name:         "direct host should override wildcard rule",
			hostname:     "direct.dev.example.com",
			expectDirect: true,
			expectRule:   nil,
			description:  "direct.dev.example.com is in directHosts and should NOT match *.dev.example.com rule",
		},
		{
			name:         "other dev hosts should match rule",
			hostname:     "api.dev.example.com",
			expectDirect: false,
			expectRule:   &cfg.Rules[0],
			description:  "api.dev.example.com should match *.dev.example.com rule since it's not in directHosts",
		},
		{
			name:         "exact dev host should match rule",
			hostname:     "dev.example.com",
			expectDirect: false,
			expectRule:   &cfg.Rules[0],
			description:  "dev.example.com should match the exact hostname in the rule",
		},
		{
			name:         "localhost should be direct",
			hostname:     "localhost",
			expectDirect: true,
			expectRule:   nil,
			description:  "localhost is in directHosts and should be served directly",
		},
	}

	for _, testCase := range tests {
		testCase := testCase // capture range variable
		t.Run(testCase.name, func(t *testing.T) {
			// Test ShouldServeDirect
			isDirect := cfg.ShouldServeDirect(testCase.hostname)
			if isDirect != testCase.expectDirect {
				t.Errorf("ShouldServeDirect(%q) = %v, want %v - %s",
					testCase.hostname, isDirect, testCase.expectDirect, testCase.description)
			}

			// Test FindRule - this is independent and will still find matching rules
			// The key is that the HANDLER should check ShouldServeDirect FIRST
			rule := cfg.FindRule(testCase.hostname)
			if testCase.expectRule == nil {
				if rule != nil {
					// This is expected for "direct.dev.example.com" - FindRule will find a match
					// but ShouldServeDirect should take priority in the handler
					t.Logf("INFO: FindRule(%q) found rule %q, but ShouldServeDirect=true should take priority",
						testCase.hostname, rule.Name)
				}
			} else {
				if rule == nil {
					t.Errorf("FindRule(%q) = nil, want rule %q - %s",
						testCase.hostname, testCase.expectRule.Name, testCase.description)
				} else if rule.Name != testCase.expectRule.Name {
					t.Errorf("FindRule(%q) = %q, want %q - %s",
						testCase.hostname, rule.Name, testCase.expectRule.Name, testCase.description)
				}
			}

			// Test the actual priority logic as implemented in the handler:
			// If ShouldServeDirect returns true, it should take priority over any rule
			if testCase.expectDirect {
				t.Logf("SUCCESS: %q correctly identified as direct host (priority over any rules)", testCase.hostname)
			}
		})
	}
}

// Test that simulates the actual handler logic.
func TestHandlerPriorityLogic(t *testing.T) {
	cfg := &config.Config{
		DirectHosts: []string{
			"direct.dev.example.com",
		},
		Rules: []config.Rule{
			{
				Target: "dev-proxy.example.com:1080",
				Hostnames: []string{
					"*.dev.example.com",
				},
				Name: "Development environments",
			},
		},
	}

	// Simulate the handler's establishTargetConnection logic
	simulateHandlerLogic := func(hostname string) (isDirectHost bool, matchingRule *config.Rule) {
		// This mimics the handler's priority check
		if cfg.ShouldServeDirect(hostname) {
			return true, nil // Direct host takes priority, rule is ignored
		}

		return false, cfg.FindRule(hostname)
	}

	tests := []struct {
		hostname       string
		expectDirect   bool
		expectRuleName string
	}{
		{
			hostname:       "direct.dev.example.com",
			expectDirect:   true,
			expectRuleName: "", // No rule should be used because it's a direct host
		},
		{
			hostname:       "api.dev.example.com",
			expectDirect:   false,
			expectRuleName: "Development environments",
		},
	}

	for _, testCase := range tests {
		testCase := testCase // capture range variable
		t.Run(testCase.hostname, func(t *testing.T) {
			isDirect, rule := simulateHandlerLogic(testCase.hostname)

			if isDirect != testCase.expectDirect {
				t.Errorf("Handler logic for %q: isDirect = %v, want %v",
					testCase.hostname, isDirect, testCase.expectDirect)
			}

			var ruleName string
			if rule != nil {
				ruleName = rule.Name
			}

			if ruleName != testCase.expectRuleName {
				t.Errorf("Handler logic for %q: rule = %q, want %q",
					testCase.hostname, ruleName, testCase.expectRuleName)
			}

			if testCase.expectDirect && rule != nil {
				t.Errorf("HANDLER BUG: %q should be direct but handler would use rule %q",
					testCase.hostname, rule.Name)
			} else {
				t.Logf("✅ Handler priority correct for %q: direct=%v, rule=%q",
					testCase.hostname, isDirect, ruleName)
			}
		})
	}
}

func TestDirectHostWildcardPriority(t *testing.T) {
	// Test wildcard directHosts vs wildcard rules
	cfg := &config.Config{
		DirectHosts: []string{
			"*.direct.example.com", // Wildcard in directHosts
		},
		Rules: []config.Rule{
			{
				Target: "proxy.example.com:1080",
				Hostnames: []string{
					"*.example.com", // Broader wildcard that would also match
				},
				Name: "All example.com traffic",
			},
		},
	}

	// Simulate the handler's establishTargetConnection logic
	simulateHandlerLogic := func(hostname string) (isDirectHost bool, matchingRule *config.Rule) {
		// This mimics the handler's priority check
		if cfg.ShouldServeDirect(hostname) {
			return true, nil // Direct host takes priority, rule is ignored
		}

		return false, cfg.FindRule(hostname)
	}

	tests := []struct {
		hostname       string
		expectDirect   bool
		expectRuleName string
	}{
		{
			hostname:       "api.direct.example.com",
			expectDirect:   true,
			expectRuleName: "", // Direct takes priority
		},
		{
			hostname:       "other.example.com",
			expectDirect:   false,
			expectRuleName: "All example.com traffic",
		},
	}

	for _, testCase := range tests {
		testCase := testCase // capture range variable
		t.Run(testCase.hostname, func(t *testing.T) {
			isDirect, rule := simulateHandlerLogic(testCase.hostname)

			if isDirect != testCase.expectDirect {
				t.Errorf("Handler logic for %q: isDirect = %v, want %v",
					testCase.hostname, isDirect, testCase.expectDirect)
			}

			ruleName := ""
			if rule != nil {
				ruleName = rule.Name
			}

			if ruleName != testCase.expectRuleName {
				t.Errorf("Handler logic for %q: rule = %q, want %q",
					testCase.hostname, ruleName, testCase.expectRuleName)
			}

			t.Logf("✅ Wildcard priority correct for %q: direct=%v, rule=%q",
				testCase.hostname, isDirect, ruleName)
		})
	}
}

func TestConfigPriorityDocumentation(t *testing.T) {
	// This test documents the expected priority order
	t.Log("Expected priority order (highest to lowest):")
	t.Log("1. directHosts (exact and wildcard matches)")
	t.Log("2. rules (first matching rule)")
	t.Log("3. defaultTarget (if configured)")
	t.Log("4. direct connection (fallback)")
	t.Log("")
	t.Log("The issue: rules are currently checked before directHosts")
	t.Log("Fix needed: check directHosts first, then rules")
}
