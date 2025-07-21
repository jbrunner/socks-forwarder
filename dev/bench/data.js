window.BENCHMARK_DATA = {
  "lastUpdate": 1753137566257,
  "repoUrl": "https://github.com/jbrunner/socks-forwarder",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bedag.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "joshua.brunner@bedag.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "distinct": true,
          "id": "31d070912ae47871de767f90403c79e1ffb00088",
          "message": "Initial commit",
          "timestamp": "2025-07-22T00:10:48+02:00",
          "tree_id": "87f1684e84600174fdf492f81d99108481bdb31b",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/31d070912ae47871de767f90403c79e1ffb00088"
        },
        "date": 1753137565933,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 26.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46177888 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 26.14,
            "unit": "ns/op",
            "extra": "46177888 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46177888 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46177888 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19123498 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.85,
            "unit": "ns/op",
            "extra": "19123498 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19123498 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19123498 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 86.57,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14113941 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 86.57,
            "unit": "ns/op",
            "extra": "14113941 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14113941 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14113941 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 105.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11657685 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 105.2,
            "unit": "ns/op",
            "extra": "11657685 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11657685 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11657685 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 28.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42631784 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 28.4,
            "unit": "ns/op",
            "extra": "42631784 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42631784 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42631784 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 97.23,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11868220 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 97.23,
            "unit": "ns/op",
            "extra": "11868220 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11868220 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11868220 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 133.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8667897 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 133.9,
            "unit": "ns/op",
            "extra": "8667897 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8667897 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8667897 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 245.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4989262 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 245.9,
            "unit": "ns/op",
            "extra": "4989262 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4989262 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4989262 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 401.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2896018 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 401.2,
            "unit": "ns/op",
            "extra": "2896018 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2896018 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2896018 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 380.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3124348 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 380.7,
            "unit": "ns/op",
            "extra": "3124348 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3124348 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3124348 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 23.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50030958 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 23.61,
            "unit": "ns/op",
            "extra": "50030958 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "50030958 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "50030958 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 124.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9660348 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 124.3,
            "unit": "ns/op",
            "extra": "9660348 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9660348 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9660348 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6905618 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 175,
            "unit": "ns/op",
            "extra": "6905618 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6905618 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6905618 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 243.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4959385 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 243.6,
            "unit": "ns/op",
            "extra": "4959385 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4959385 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4959385 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 218.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5493939 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 218.5,
            "unit": "ns/op",
            "extra": "5493939 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5493939 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5493939 times\n4 procs"
          }
        ]
      }
    ]
  }
}