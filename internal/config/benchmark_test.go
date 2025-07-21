package config //nolint:testpackage // testpackage - benchmarks need access to internal methods

import (
	"testing"
)

// BenchmarkMatchHostname benchmarks the hostname matching function.
func BenchmarkMatchHostname(b *testing.B) {
	cfg := &Config{}

	testCases := []struct {
		name     string
		pattern  string
		hostname string
	}{
		{"exact-match", "example.com", "example.com"},
		{"wildcard-prefix", "*.example.com", "api.example.com"},
		{"wildcard-suffix", "example.*", "example.com"},
		{"wildcard-middle", "*.test.*", "api.test.com"},
		{"no-match", "example.com", "other.com"},
	}

	for _, tc := range testCases {
		b.Run(tc.name, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				cfg.matchHostname(tc.pattern, tc.hostname)
			}
		})
	}
}

// BenchmarkFindRule benchmarks the rule finding function.
func BenchmarkFindRule(b *testing.B) {
	cfg := &Config{
		Rules: []Rule{
			{Target: "proxy1.com:1080", Hostnames: []string{"*.internal.com"}},
			{Target: "proxy2.com:1080", Hostnames: []string{"api.example.com"}},
			{Target: "proxy3.com:1080", Hostnames: []string{"*.test.*"}},
			{Target: "proxy4.com:1080", Hostnames: []string{"*.dev.company.com"}},
			{Target: "proxy5.com:1080", Hostnames: []string{"*.staging.company.com"}},
		},
	}

	testCases := []string{
		"api.internal.com",
		"api.example.com",
		"sub.test.com",
		"other.example.com",
		"no-match.com",
	}

	for _, hostname := range testCases {
		b.Run(hostname, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				cfg.FindRule(hostname)
			}
		})
	}
}

// BenchmarkShouldServeDirect benchmarks the direct host checking function.
func BenchmarkShouldServeDirect(b *testing.B) {
	cfg := &Config{
		DirectHosts: []string{
			"localhost",
			"127.0.0.1",
			"*.local",
			"direct.example.com",
			"*.internal.local",
		},
	}

	testCases := []string{
		"localhost",
		"api.local",
		"direct.example.com",
		"other.example.com",
		"no-match.com",
	}

	for _, hostname := range testCases {
		b.Run(hostname, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				cfg.ShouldServeDirect(hostname)
			}
		})
	}
}
