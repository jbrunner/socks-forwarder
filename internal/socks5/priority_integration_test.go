package socks5_test

import (
	"testing"

	"socks-forwarder/internal/config"
	"socks-forwarder/internal/socks5"
)

const (
	directRouting = "direct"
	proxyRouting  = "proxy"
	directHost    = "direct_host"
	noRuleMatch   = "no_rule_match"
)

func TestHandlerEstablishTargetConnectionPriority(t *testing.T) {
	// Test configuration that matches the user's config.yaml
	cfg := &config.Config{
		Port:  1080,
		Debug: false,
		DirectHosts: []string{
			"localhost",
			"127.0.0.1",
			"*.local",
			"*.localhost",
			"direct.dev.example.com", // This should have priority over rules
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

	handler := &socks5.Handler{
		Config: cfg,
		Debug:  false,
	}

	tests := []struct {
		name         string
		hostname     string
		expectDirect bool
		expectRule   string
		description  string
	}{
		{
			name:         "direct_host_overrides_wildcard_rule",
			hostname:     "direct.dev.example.com",
			expectDirect: true,
			expectRule:   directHost, // Direct hosts use "direct_host" as rule name
			description:  "direct.dev.example.com should be served directly despite matching *.dev.example.com",
		},
		{
			name:         "wildcard_rule_matches_other_hosts",
			hostname:     "api.dev.example.com",
			expectDirect: false,
			expectRule:   "Development and staging environments",
			description:  "api.dev.example.com should match *.dev.example.com rule",
		},
		{
			name:         "exact_rule_match",
			hostname:     "dev.example.com",
			expectDirect: false,
			expectRule:   "Development and staging environments",
			description:  "dev.example.com should match exact hostname in rule",
		},
		{
			name:         "localhost_is_direct",
			hostname:     "localhost",
			expectDirect: true,
			expectRule:   directHost,
			description:  "localhost should always be served directly",
		},
	}

	for _, testCase := range tests {
		testCase := testCase // capture range variable
		t.Run(testCase.name, func(t *testing.T) {
			// Test the actual handler logic used in establishTargetConnection
			isDirect := handler.Config.ShouldServeDirect(testCase.hostname)

			if isDirect != testCase.expectDirect {
				t.Errorf("ShouldServeDirect(%q) = %v, want %v - %s",
					testCase.hostname, isDirect, testCase.expectDirect, testCase.description)
			}

			// Simulate the establishTargetConnection priority logic
			var actualRoutingType, actualRuleName string
			if handler.Config.ShouldServeDirect(testCase.hostname) {
				// This would call handleDirectHost
				actualRoutingType = directRouting
				actualRuleName = directHost
			} else {
				// This would call handleRoutingRules
				rule := handler.Config.FindRule(testCase.hostname)
				if rule != nil {
					actualRoutingType = proxyRouting
					actualRuleName = rule.Name
				} else {
					actualRoutingType = directRouting
					actualRuleName = noRuleMatch
				}
			}

			if actualRuleName != testCase.expectRule {
				t.Errorf("Handler would use rule %q, want %q for %q - %s",
					actualRuleName, testCase.expectRule, testCase.hostname, testCase.description)
			}

			t.Logf("✅ %q -> routing: %s, rule: %s (correct priority)",
				testCase.hostname, actualRoutingType, actualRuleName)
		})
	}
}

func TestRealWorldScenario(t *testing.T) {
	// This test verifies the exact scenario from the user's config.yaml
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
				Name: "Development and staging environments",
			},
		},
	}

	handler := &socks5.Handler{Config: cfg, Debug: false}

	// Test the exact case the user reported
	hostname := "direct.dev.example.com"

	// This is what the handler's establishTargetConnection does:
	if handler.Config.ShouldServeDirect(hostname) {
		t.Logf("SUCCESS: %q will be served directly (bypassing all rules)", hostname)
		t.Logf("✅ The priority issue is NOT present - direct hosts take priority")
	} else {
		rule := handler.Config.FindRule(hostname)
		if rule != nil {
			t.Errorf("BUG: %q should be direct but would use rule %q", hostname, rule.Name)
		} else {
			t.Errorf("BUG: %q should be direct but no rule found either", hostname)
		}
	}

	// Double-check by testing both functions
	isDirect := handler.Config.ShouldServeDirect(hostname)
	rule := handler.Config.FindRule(hostname)

	t.Logf("ShouldServeDirect(%q) = %v", hostname, isDirect)
	if rule != nil {
		t.Logf("FindRule(%q) = %q (this will be ignored due to priority)", hostname, rule.Name)
	}

	if !isDirect {
		t.Errorf("FAILED: %q should be identified as direct host", hostname)
	}
}
