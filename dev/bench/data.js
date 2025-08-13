window.BENCHMARK_DATA = {
  "lastUpdate": 1755060853757,
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
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bce0ba77ed4251dbd44e21daf47d2b2b27bf6e7",
          "message": "Merge pull request #1 from jbrunner/gosec\n\nchore: allow gosec to fail",
          "timestamp": "2025-07-22T01:09:21+02:00",
          "tree_id": "dda9a894428447f7538e431d2db3404e05b37ef8",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/6bce0ba77ed4251dbd44e21daf47d2b2b27bf6e7"
        },
        "date": 1753139403792,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46322265 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.42,
            "unit": "ns/op",
            "extra": "46322265 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46322265 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46322265 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19441866 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.66,
            "unit": "ns/op",
            "extra": "19441866 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19441866 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19441866 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 83.48,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14538295 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 83.48,
            "unit": "ns/op",
            "extra": "14538295 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14538295 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14538295 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 100.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11692296 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 100.8,
            "unit": "ns/op",
            "extra": "11692296 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11692296 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11692296 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44271700 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.32,
            "unit": "ns/op",
            "extra": "44271700 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44271700 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44271700 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 95.07,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12437994 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 95.07,
            "unit": "ns/op",
            "extra": "12437994 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12437994 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12437994 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 129.3,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9220122 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 129.3,
            "unit": "ns/op",
            "extra": "9220122 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9220122 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9220122 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 243.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5035602 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 243.8,
            "unit": "ns/op",
            "extra": "5035602 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5035602 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5035602 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 392.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3058828 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 392.2,
            "unit": "ns/op",
            "extra": "3058828 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3058828 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3058828 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 369.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3232576 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 369.6,
            "unit": "ns/op",
            "extra": "3232576 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3232576 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3232576 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 23.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51968055 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 23.22,
            "unit": "ns/op",
            "extra": "51968055 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51968055 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51968055 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 124.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9692178 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 124.3,
            "unit": "ns/op",
            "extra": "9692178 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9692178 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9692178 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 171.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7012981 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 171.1,
            "unit": "ns/op",
            "extra": "7012981 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7012981 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7012981 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 244.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4976588 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 244.2,
            "unit": "ns/op",
            "extra": "4976588 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4976588 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4976588 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5186559 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.9,
            "unit": "ns/op",
            "extra": "5186559 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5186559 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5186559 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f442fbd2e5c47a6ba270ec44077227f324c33997",
          "message": "Merge pull request #2 from jbrunner/build-pish-action-v6\n\nchore: upgrade docker/build-push-action@v5 -> v6",
          "timestamp": "2025-07-22T02:07:32+02:00",
          "tree_id": "6637c648a2138ffbcc6c00e7e9d5e26d66b00e02",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/f442fbd2e5c47a6ba270ec44077227f324c33997"
        },
        "date": 1753142898784,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45616736 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.39,
            "unit": "ns/op",
            "extra": "45616736 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45616736 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45616736 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19567670 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.93,
            "unit": "ns/op",
            "extra": "19567670 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19567670 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19567670 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 85.64,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14397992 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 85.64,
            "unit": "ns/op",
            "extra": "14397992 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14397992 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14397992 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 104.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11756628 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 104.1,
            "unit": "ns/op",
            "extra": "11756628 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11756628 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11756628 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43969069 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.48,
            "unit": "ns/op",
            "extra": "43969069 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43969069 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43969069 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 94.75,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12362800 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 94.75,
            "unit": "ns/op",
            "extra": "12362800 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12362800 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12362800 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 129.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9219517 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 129.6,
            "unit": "ns/op",
            "extra": "9219517 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9219517 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9219517 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 241.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4957060 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 241.7,
            "unit": "ns/op",
            "extra": "4957060 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4957060 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4957060 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 393.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3022246 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 393.8,
            "unit": "ns/op",
            "extra": "3022246 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3022246 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3022246 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 371.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3232386 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 371.9,
            "unit": "ns/op",
            "extra": "3232386 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3232386 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3232386 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52472685 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.98,
            "unit": "ns/op",
            "extra": "52472685 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52472685 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52472685 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 127.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9338989 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 127.9,
            "unit": "ns/op",
            "extra": "9338989 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9338989 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9338989 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 172.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7052874 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 172.3,
            "unit": "ns/op",
            "extra": "7052874 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7052874 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7052874 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 242.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4949724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 242.9,
            "unit": "ns/op",
            "extra": "4949724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4949724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4949724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5275936 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.1,
            "unit": "ns/op",
            "extra": "5275936 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5275936 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5275936 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ced30a991fb74d73ae9da1b27b9141fe1598255",
          "message": "Merge pull request #3 from jbrunner/docker-build-checkout\n\nchore: add actions/checkout again",
          "timestamp": "2025-07-22T02:23:25+02:00",
          "tree_id": "a232951a15ecdd7ec8a2225fe71f4e94b5ad7d3a",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/3ced30a991fb74d73ae9da1b27b9141fe1598255"
        },
        "date": 1753143852117,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47136800 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.61,
            "unit": "ns/op",
            "extra": "47136800 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47136800 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47136800 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 63.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19539764 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 63.55,
            "unit": "ns/op",
            "extra": "19539764 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19539764 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19539764 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 83.91,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13552502 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 83.91,
            "unit": "ns/op",
            "extra": "13552502 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "13552502 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13552502 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 100.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11876942 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "11876942 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11876942 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11876942 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44976553 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.29,
            "unit": "ns/op",
            "extra": "44976553 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44976553 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44976553 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 94.83,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12483464 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 94.83,
            "unit": "ns/op",
            "extra": "12483464 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12483464 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12483464 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 136.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9256665 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 136.2,
            "unit": "ns/op",
            "extra": "9256665 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9256665 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9256665 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 236.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5087824 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 236.7,
            "unit": "ns/op",
            "extra": "5087824 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5087824 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5087824 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 394.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3043998 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 394.5,
            "unit": "ns/op",
            "extra": "3043998 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3043998 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3043998 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 370.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3121644 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 370.5,
            "unit": "ns/op",
            "extra": "3121644 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3121644 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3121644 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53114193 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.8,
            "unit": "ns/op",
            "extra": "53114193 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "53114193 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "53114193 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 123.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9745260 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 123.9,
            "unit": "ns/op",
            "extra": "9745260 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9745260 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9745260 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 172.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6995230 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 172.2,
            "unit": "ns/op",
            "extra": "6995230 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6995230 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6995230 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 244,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4976310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 244,
            "unit": "ns/op",
            "extra": "4976310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4976310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4976310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5561394 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 221,
            "unit": "ns/op",
            "extra": "5561394 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5561394 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5561394 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ec8c350f82260290f67eb067ef192ed98b8f64c",
          "message": "Merge pull request #4 from jbrunner/dbg-docker-push\n\nchore: skip docker/login-action",
          "timestamp": "2025-07-22T03:22:12+02:00",
          "tree_id": "665211f90cd97c14c076219bf5bc72c8dcf703ea",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/7ec8c350f82260290f67eb067ef192ed98b8f64c"
        },
        "date": 1753147383476,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44793297 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.54,
            "unit": "ns/op",
            "extra": "44793297 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44793297 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44793297 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 62.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19429038 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 62.28,
            "unit": "ns/op",
            "extra": "19429038 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19429038 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19429038 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 84.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14141352 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 84.2,
            "unit": "ns/op",
            "extra": "14141352 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14141352 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14141352 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 102.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11645408 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 102.3,
            "unit": "ns/op",
            "extra": "11645408 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11645408 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11645408 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44283141 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.29,
            "unit": "ns/op",
            "extra": "44283141 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44283141 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44283141 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 95.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12503588 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 95.9,
            "unit": "ns/op",
            "extra": "12503588 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12503588 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12503588 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 130.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9124419 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 130.7,
            "unit": "ns/op",
            "extra": "9124419 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9124419 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9124419 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 239.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5025310 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 239.1,
            "unit": "ns/op",
            "extra": "5025310 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5025310 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5025310 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 398.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2973820 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 398.9,
            "unit": "ns/op",
            "extra": "2973820 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2973820 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2973820 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 375.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3187491 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 375.2,
            "unit": "ns/op",
            "extra": "3187491 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3187491 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3187491 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 23.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52756458 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 23.14,
            "unit": "ns/op",
            "extra": "52756458 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52756458 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52756458 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 127.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9714541 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 127.3,
            "unit": "ns/op",
            "extra": "9714541 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9714541 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9714541 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 180.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6965758 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 180.4,
            "unit": "ns/op",
            "extra": "6965758 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6965758 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6965758 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 249.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4857819 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 249.2,
            "unit": "ns/op",
            "extra": "4857819 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4857819 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4857819 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5422754 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.4,
            "unit": "ns/op",
            "extra": "5422754 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5422754 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5422754 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8189bcfd76cf34811aa6b102bc52c856fdff813c",
          "message": "Merge pull request #5 from jbrunner/fix-push-release-pat\n\nchore: try to fix build-push-action & gh-release",
          "timestamp": "2025-07-23T12:17:03+02:00",
          "tree_id": "77d404597b57ce4ce2f2768a0692178a58bceab7",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/8189bcfd76cf34811aa6b102bc52c856fdff813c"
        },
        "date": 1753265873418,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45133680 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.96,
            "unit": "ns/op",
            "extra": "45133680 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45133680 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45133680 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 63.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19631328 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 63.54,
            "unit": "ns/op",
            "extra": "19631328 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19631328 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19631328 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 82.97,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14469420 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 82.97,
            "unit": "ns/op",
            "extra": "14469420 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14469420 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14469420 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 100.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11748267 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 100.2,
            "unit": "ns/op",
            "extra": "11748267 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11748267 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11748267 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43294977 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.4,
            "unit": "ns/op",
            "extra": "43294977 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43294977 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43294977 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 99.27,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12434086 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 99.27,
            "unit": "ns/op",
            "extra": "12434086 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12434086 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12434086 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 134.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9094088 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 134.9,
            "unit": "ns/op",
            "extra": "9094088 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9094088 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9094088 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 235.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5065933 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 235.8,
            "unit": "ns/op",
            "extra": "5065933 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5065933 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5065933 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 395.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3051279 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 395.3,
            "unit": "ns/op",
            "extra": "3051279 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3051279 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3051279 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 371.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3186508 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 371.2,
            "unit": "ns/op",
            "extra": "3186508 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3186508 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3186508 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52457726 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.98,
            "unit": "ns/op",
            "extra": "52457726 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52457726 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52457726 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 123.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9464317 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 123.7,
            "unit": "ns/op",
            "extra": "9464317 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9464317 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9464317 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 173.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7057986 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 173.2,
            "unit": "ns/op",
            "extra": "7057986 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7057986 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7057986 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 244.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4943570 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 244.2,
            "unit": "ns/op",
            "extra": "4943570 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4943570 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4943570 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5510310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.5,
            "unit": "ns/op",
            "extra": "5510310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5510310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5510310 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "592b44e92f89fc253cd836c9c83efc6879304adf",
          "message": "Merge pull request #6 from jbrunner/prefix-ghcrio\n\nchore: prefix image name with ghcr.io",
          "timestamp": "2025-07-23T12:37:59+02:00",
          "tree_id": "1382e1d53de57f3d0a6e466a036557bfdca9bd66",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/592b44e92f89fc253cd836c9c83efc6879304adf"
        },
        "date": 1753267130224,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47149305 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.89,
            "unit": "ns/op",
            "extra": "47149305 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47149305 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47149305 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 64.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19579634 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 64.12,
            "unit": "ns/op",
            "extra": "19579634 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19579634 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19579634 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 84.11,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13668748 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 84.11,
            "unit": "ns/op",
            "extra": "13668748 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "13668748 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13668748 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 101.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11881276 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 101.1,
            "unit": "ns/op",
            "extra": "11881276 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11881276 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11881276 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42454326 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.4,
            "unit": "ns/op",
            "extra": "42454326 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42454326 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42454326 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 95.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12383280 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 95.7,
            "unit": "ns/op",
            "extra": "12383280 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12383280 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12383280 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 130.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9164582 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 130.2,
            "unit": "ns/op",
            "extra": "9164582 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9164582 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9164582 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 240.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5015868 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 240.9,
            "unit": "ns/op",
            "extra": "5015868 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5015868 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5015868 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 395.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3026024 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 395.5,
            "unit": "ns/op",
            "extra": "3026024 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3026024 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3026024 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 374.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3192492 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 374.1,
            "unit": "ns/op",
            "extra": "3192492 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3192492 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3192492 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52534645 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.86,
            "unit": "ns/op",
            "extra": "52534645 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52534645 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52534645 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 124.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9635782 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 124.1,
            "unit": "ns/op",
            "extra": "9635782 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9635782 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9635782 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6715278 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 173,
            "unit": "ns/op",
            "extra": "6715278 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6715278 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6715278 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 242,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4966748 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 242,
            "unit": "ns/op",
            "extra": "4966748 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4966748 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4966748 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5494591 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.6,
            "unit": "ns/op",
            "extra": "5494591 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5494591 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5494591 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "735ace644a04842eefe03fd5745eb6fb76980448",
          "message": "Merge pull request #7 from jbrunner/fix-release\n\nFix release pipeline",
          "timestamp": "2025-07-23T13:40:17+02:00",
          "tree_id": "49c7eff18aed74570a5ec8e47e30db9fba5dc04e",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/735ace644a04842eefe03fd5745eb6fb76980448"
        },
        "date": 1753270865031,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45792499 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.43,
            "unit": "ns/op",
            "extra": "45792499 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45792499 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45792499 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19472326 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.36,
            "unit": "ns/op",
            "extra": "19472326 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19472326 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19472326 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 83.48,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14331906 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 83.48,
            "unit": "ns/op",
            "extra": "14331906 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14331906 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14331906 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 101.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11791396 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 101.3,
            "unit": "ns/op",
            "extra": "11791396 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11791396 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11791396 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43536710 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.31,
            "unit": "ns/op",
            "extra": "43536710 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43536710 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43536710 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 95.84,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12394470 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 95.84,
            "unit": "ns/op",
            "extra": "12394470 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12394470 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12394470 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 131.3,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8979012 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 131.3,
            "unit": "ns/op",
            "extra": "8979012 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8979012 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8979012 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 235.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5075360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 235.3,
            "unit": "ns/op",
            "extra": "5075360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5075360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5075360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 392.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2979760 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 392.3,
            "unit": "ns/op",
            "extra": "2979760 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2979760 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2979760 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 376.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3216387 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 376.8,
            "unit": "ns/op",
            "extra": "3216387 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3216387 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3216387 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 23.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44299903 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 23.93,
            "unit": "ns/op",
            "extra": "44299903 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44299903 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44299903 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 123.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9728821 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 123.4,
            "unit": "ns/op",
            "extra": "9728821 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9728821 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9728821 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 172.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6927447 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 172.7,
            "unit": "ns/op",
            "extra": "6927447 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6927447 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6927447 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 241.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4978303 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 241.7,
            "unit": "ns/op",
            "extra": "4978303 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4978303 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4978303 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5594688 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.4,
            "unit": "ns/op",
            "extra": "5594688 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5594688 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5594688 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bcb793820f35bd1643dfcac26944343f8294a02",
          "message": "Merge pull request #8 from jbrunner/refactor-release\n\nchore: remove release creation in ci-cd job",
          "timestamp": "2025-07-23T14:13:38+02:00",
          "tree_id": "cd52ee98733d5eb0c35b535445f630b6b9a1b6f0",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/5bcb793820f35bd1643dfcac26944343f8294a02"
        },
        "date": 1753272863744,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46064719 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.68,
            "unit": "ns/op",
            "extra": "46064719 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "46064719 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "46064719 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19664043 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.25,
            "unit": "ns/op",
            "extra": "19664043 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19664043 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19664043 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 83.66,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14554172 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 83.66,
            "unit": "ns/op",
            "extra": "14554172 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14554172 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14554172 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 101.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11406386 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 101.3,
            "unit": "ns/op",
            "extra": "11406386 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11406386 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11406386 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44398921 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.69,
            "unit": "ns/op",
            "extra": "44398921 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44398921 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44398921 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 95.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12302022 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 95.7,
            "unit": "ns/op",
            "extra": "12302022 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12302022 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12302022 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 130.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9171690 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 130.2,
            "unit": "ns/op",
            "extra": "9171690 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9171690 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9171690 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 238.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5031612 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 238.1,
            "unit": "ns/op",
            "extra": "5031612 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5031612 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5031612 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 413.4,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2510227 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 413.4,
            "unit": "ns/op",
            "extra": "2510227 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2510227 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2510227 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 371.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3209598 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 371.9,
            "unit": "ns/op",
            "extra": "3209598 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3209598 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3209598 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 23.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51693769 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 23.07,
            "unit": "ns/op",
            "extra": "51693769 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51693769 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51693769 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 123.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9667735 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 123.8,
            "unit": "ns/op",
            "extra": "9667735 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9667735 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9667735 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6985936 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 172,
            "unit": "ns/op",
            "extra": "6985936 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6985936 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6985936 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 241.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4954386 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 241.3,
            "unit": "ns/op",
            "extra": "4954386 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4954386 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4954386 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5517638 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.8,
            "unit": "ns/op",
            "extra": "5517638 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5517638 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5517638 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "057017d160ebb5347e8d1cc3b36ebbf6805c17e4",
          "message": "Merge pull request #9 from jbrunner/fix-releasenotes\n\ndocs (releasenotes): remove scratch image docs",
          "timestamp": "2025-07-23T14:23:33+02:00",
          "tree_id": "cd3329d7d5a8d0e68da64b5ce04304a985f69eb7",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/057017d160ebb5347e8d1cc3b36ebbf6805c17e4"
        },
        "date": 1753273453295,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.65,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45207625 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.65,
            "unit": "ns/op",
            "extra": "45207625 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45207625 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45207625 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19126537 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.72,
            "unit": "ns/op",
            "extra": "19126537 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19126537 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19126537 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 86.21,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14454308 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 86.21,
            "unit": "ns/op",
            "extra": "14454308 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14454308 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14454308 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 101.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11795322 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 101.2,
            "unit": "ns/op",
            "extra": "11795322 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11795322 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11795322 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44322193 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.51,
            "unit": "ns/op",
            "extra": "44322193 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44322193 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44322193 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 95.46,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "10970229 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 95.46,
            "unit": "ns/op",
            "extra": "10970229 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "10970229 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10970229 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 129.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9201008 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 129.2,
            "unit": "ns/op",
            "extra": "9201008 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9201008 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9201008 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 236.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5087917 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 236.1,
            "unit": "ns/op",
            "extra": "5087917 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5087917 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5087917 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 414,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3034442 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 414,
            "unit": "ns/op",
            "extra": "3034442 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3034442 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3034442 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 376.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3005497 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 376.7,
            "unit": "ns/op",
            "extra": "3005497 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3005497 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3005497 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 23.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51716382 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 23.28,
            "unit": "ns/op",
            "extra": "51716382 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51716382 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51716382 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 124.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9677520 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 124.1,
            "unit": "ns/op",
            "extra": "9677520 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9677520 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9677520 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 172.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6972223 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 172.6,
            "unit": "ns/op",
            "extra": "6972223 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6972223 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6972223 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 243.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4918623 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 243.4,
            "unit": "ns/op",
            "extra": "4918623 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4918623 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4918623 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5582114 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.8,
            "unit": "ns/op",
            "extra": "5582114 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5582114 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5582114 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b161e3e80706bf08f1e7cbf1782415a567246af",
          "message": "Merge pull request #10 from jbrunner/fix-release-dl-artifacts\n\nfix: exclude Docker cache artifacts from release download",
          "timestamp": "2025-07-23T14:42:53+02:00",
          "tree_id": "cb0bbb83a4127306f75b7cf7850646633feec372",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/4b161e3e80706bf08f1e7cbf1782415a567246af"
        },
        "date": 1753274616276,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 26.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45300547 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 26.01,
            "unit": "ns/op",
            "extra": "45300547 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45300547 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45300547 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 62.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16590144 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 62.36,
            "unit": "ns/op",
            "extra": "16590144 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "16590144 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "16590144 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 83.69,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14465508 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 83.69,
            "unit": "ns/op",
            "extra": "14465508 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14465508 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14465508 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 100.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11773911 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 100.5,
            "unit": "ns/op",
            "extra": "11773911 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11773911 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11773911 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43869057 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.38,
            "unit": "ns/op",
            "extra": "43869057 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43869057 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43869057 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 97.75,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12166402 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 97.75,
            "unit": "ns/op",
            "extra": "12166402 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12166402 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12166402 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 132.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8945113 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 132.9,
            "unit": "ns/op",
            "extra": "8945113 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8945113 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8945113 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 237.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4346415 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 237.3,
            "unit": "ns/op",
            "extra": "4346415 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4346415 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4346415 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 394.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3037034 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 394.5,
            "unit": "ns/op",
            "extra": "3037034 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3037034 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3037034 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 371.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3241160 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 371.5,
            "unit": "ns/op",
            "extra": "3241160 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3241160 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3241160 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52006003 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.96,
            "unit": "ns/op",
            "extra": "52006003 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52006003 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52006003 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 124.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9565726 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 124.4,
            "unit": "ns/op",
            "extra": "9565726 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9565726 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9565726 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 172.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7017235 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 172.2,
            "unit": "ns/op",
            "extra": "7017235 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7017235 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7017235 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 243.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4971116 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 243.3,
            "unit": "ns/op",
            "extra": "4971116 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4971116 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4971116 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 217.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5544420 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 217.4,
            "unit": "ns/op",
            "extra": "5544420 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5544420 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5544420 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d870dc5757635f73c007b56106bced4cdacf748",
          "message": "Merge pull request #11 from jbrunner/fix-releae\n\nfix: improve caching and and escape `pattern` for artefact downloads",
          "timestamp": "2025-07-23T15:22:35+02:00",
          "tree_id": "6375438d193b123605400e078e82292ba168e571",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/6d870dc5757635f73c007b56106bced4cdacf748"
        },
        "date": 1753277005772,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 26.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43072220 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 26.13,
            "unit": "ns/op",
            "extra": "43072220 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43072220 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43072220 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 62.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17220214 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 62.08,
            "unit": "ns/op",
            "extra": "17220214 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17220214 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17220214 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 83.68,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14319613 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 83.68,
            "unit": "ns/op",
            "extra": "14319613 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14319613 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14319613 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 102.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11791466 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 102.5,
            "unit": "ns/op",
            "extra": "11791466 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11791466 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11791466 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42921751 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.38,
            "unit": "ns/op",
            "extra": "42921751 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "42921751 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "42921751 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 94.96,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12225568 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 94.96,
            "unit": "ns/op",
            "extra": "12225568 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12225568 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12225568 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 129.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9241941 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 129.6,
            "unit": "ns/op",
            "extra": "9241941 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9241941 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9241941 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 236.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4996192 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 236.3,
            "unit": "ns/op",
            "extra": "4996192 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4996192 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4996192 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 396,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3047976 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 396,
            "unit": "ns/op",
            "extra": "3047976 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3047976 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3047976 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 371.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3199790 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 371.5,
            "unit": "ns/op",
            "extra": "3199790 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3199790 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3199790 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52962458 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.92,
            "unit": "ns/op",
            "extra": "52962458 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52962458 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52962458 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 123.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9745960 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 123.6,
            "unit": "ns/op",
            "extra": "9745960 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9745960 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9745960 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 172.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7000856 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 172.1,
            "unit": "ns/op",
            "extra": "7000856 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7000856 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7000856 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 243,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4918579 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 243,
            "unit": "ns/op",
            "extra": "4918579 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4918579 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4918579 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 219.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5478734 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 219.2,
            "unit": "ns/op",
            "extra": "5478734 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5478734 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5478734 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7054acbff99c74fb96ba7450f4ff93bce88466b",
          "message": "Merge pull request #12 from jbrunner/skip-cicd-on-tag\n\nchore: skip ci-cd tasks when creating a new tag",
          "timestamp": "2025-07-23T15:29:50+02:00",
          "tree_id": "0ba11a71b42890222b69177f1b5969d1e773ccdf",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/c7054acbff99c74fb96ba7450f4ff93bce88466b"
        },
        "date": 1753277436789,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44817200 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.83,
            "unit": "ns/op",
            "extra": "44817200 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44817200 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44817200 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19714843 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.37,
            "unit": "ns/op",
            "extra": "19714843 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19714843 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19714843 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 85.16,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14234187 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 85.16,
            "unit": "ns/op",
            "extra": "14234187 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14234187 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14234187 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 101.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11686386 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 101.1,
            "unit": "ns/op",
            "extra": "11686386 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11686386 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11686386 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41814789 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.19,
            "unit": "ns/op",
            "extra": "41814789 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41814789 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41814789 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 95.82,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12392418 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 95.82,
            "unit": "ns/op",
            "extra": "12392418 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12392418 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12392418 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 131,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9182617 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 131,
            "unit": "ns/op",
            "extra": "9182617 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9182617 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9182617 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 250.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4969417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 250.5,
            "unit": "ns/op",
            "extra": "4969417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4969417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4969417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 397.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2997744 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 397.9,
            "unit": "ns/op",
            "extra": "2997744 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2997744 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2997744 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 377.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3162296 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 377.7,
            "unit": "ns/op",
            "extra": "3162296 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3162296 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3162296 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51471010 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.93,
            "unit": "ns/op",
            "extra": "51471010 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51471010 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51471010 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 123.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9697816 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 123.3,
            "unit": "ns/op",
            "extra": "9697816 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9697816 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9697816 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 171.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6799405 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 171.9,
            "unit": "ns/op",
            "extra": "6799405 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6799405 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6799405 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 243.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4983826 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 243.1,
            "unit": "ns/op",
            "extra": "4983826 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4983826 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4983826 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 219.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5472729 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 219.1,
            "unit": "ns/op",
            "extra": "5472729 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5472729 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5472729 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad1e097dedbf64a0779a46e423009e2002cc2720",
          "message": "Merge pull request #13 from jbrunner/refactor-metrics\n\nrefactor: metrics",
          "timestamp": "2025-07-24T02:01:11+02:00",
          "tree_id": "8f130aa3cde5b33c3f160243618f8f6092cb43f3",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/ad1e097dedbf64a0779a46e423009e2002cc2720"
        },
        "date": 1753315323178,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47816516 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.56,
            "unit": "ns/op",
            "extra": "47816516 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47816516 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47816516 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19426624 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.51,
            "unit": "ns/op",
            "extra": "19426624 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19426624 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19426624 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 85.53,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14343394 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 85.53,
            "unit": "ns/op",
            "extra": "14343394 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14343394 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14343394 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 100.5,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11680959 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 100.5,
            "unit": "ns/op",
            "extra": "11680959 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11680959 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11680959 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44541949 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.33,
            "unit": "ns/op",
            "extra": "44541949 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44541949 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44541949 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 96.58,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12516470 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 96.58,
            "unit": "ns/op",
            "extra": "12516470 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12516470 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12516470 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 130,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9114424 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 130,
            "unit": "ns/op",
            "extra": "9114424 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9114424 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9114424 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 237.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5034656 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 237.1,
            "unit": "ns/op",
            "extra": "5034656 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5034656 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5034656 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 396.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3031503 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 396.6,
            "unit": "ns/op",
            "extra": "3031503 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3031503 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3031503 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 373.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3181176 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 373.3,
            "unit": "ns/op",
            "extra": "3181176 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3181176 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3181176 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52597872 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.8,
            "unit": "ns/op",
            "extra": "52597872 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "52597872 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "52597872 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 123.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9747114 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 123.8,
            "unit": "ns/op",
            "extra": "9747114 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9747114 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9747114 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 171.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6923949 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 171.9,
            "unit": "ns/op",
            "extra": "6923949 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6923949 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6923949 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 241.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4961056 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 241.9,
            "unit": "ns/op",
            "extra": "4961056 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4961056 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4961056 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 219.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5481025 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 219.1,
            "unit": "ns/op",
            "extra": "5481025 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5481025 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5481025 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8f23b20393d0cc24bda5c77e914f43811293b7d",
          "message": "Merge pull request #14 from jbrunner/probes\n\nfeat(probes): add /health, /readyz and /livez endpoints",
          "timestamp": "2025-07-24T02:31:42+02:00",
          "tree_id": "54c9f4b45a274cecbd6347aa1f564b7c3efc9c1c",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/e8f23b20393d0cc24bda5c77e914f43811293b7d"
        },
        "date": 1753317150796,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 25.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47011947 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 25.79,
            "unit": "ns/op",
            "extra": "47011947 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "47011947 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "47011947 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 61.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19404661 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 61.44,
            "unit": "ns/op",
            "extra": "19404661 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "19404661 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "19404661 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 85.27,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14432058 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 85.27,
            "unit": "ns/op",
            "extra": "14432058 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "14432058 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "14432058 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 100.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10616612 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 100.1,
            "unit": "ns/op",
            "extra": "10616612 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10616612 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10616612 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 27.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44569442 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 27.16,
            "unit": "ns/op",
            "extra": "44569442 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44569442 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44569442 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 95.35,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12458103 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 95.35,
            "unit": "ns/op",
            "extra": "12458103 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12458103 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12458103 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 129.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9034915 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 129.9,
            "unit": "ns/op",
            "extra": "9034915 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "9034915 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "9034915 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 236.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "5030307 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 236.3,
            "unit": "ns/op",
            "extra": "5030307 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "5030307 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "5030307 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 393.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3035940 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 393.8,
            "unit": "ns/op",
            "extra": "3035940 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3035940 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3035940 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 372.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2887923 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 372.1,
            "unit": "ns/op",
            "extra": "2887923 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2887923 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2887923 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 22.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51256527 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 22.87,
            "unit": "ns/op",
            "extra": "51256527 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "51256527 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "51256527 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 123.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9570224 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 123.3,
            "unit": "ns/op",
            "extra": "9570224 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9570224 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9570224 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 171.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7048640 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 171.8,
            "unit": "ns/op",
            "extra": "7048640 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "7048640 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "7048640 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 245.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4432395 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 245.7,
            "unit": "ns/op",
            "extra": "4432395 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4432395 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4432395 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 216.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5501010 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 216.7,
            "unit": "ns/op",
            "extra": "5501010 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5501010 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5501010 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34f2b7700024b8762f7005830b9df47f477be3ea",
          "message": "Merge pull request #15 from jbrunner/gosec\n\nchore: fix gosec and hadolint code scanning alerts",
          "timestamp": "2025-07-24T03:04:27+02:00",
          "tree_id": "5324e64d596518b11b239608747ea8f51f91a7e2",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/34f2b7700024b8762f7005830b9df47f477be3ea"
        },
        "date": 1753319114412,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39003439 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.36,
            "unit": "ns/op",
            "extra": "39003439 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39003439 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39003439 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17820056 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.18,
            "unit": "ns/op",
            "extra": "17820056 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17820056 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17820056 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 95.57,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12732322 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 95.57,
            "unit": "ns/op",
            "extra": "12732322 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12732322 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12732322 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 108,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10957873 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 108,
            "unit": "ns/op",
            "extra": "10957873 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10957873 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10957873 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37595095 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.63,
            "unit": "ns/op",
            "extra": "37595095 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37595095 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37595095 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 99.17,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11833947 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 99.17,
            "unit": "ns/op",
            "extra": "11833947 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11833947 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11833947 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 139.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8588512 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 139.9,
            "unit": "ns/op",
            "extra": "8588512 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8588512 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8588512 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4659166 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 257,
            "unit": "ns/op",
            "extra": "4659166 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4659166 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4659166 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 427.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2801302 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 427.5,
            "unit": "ns/op",
            "extra": "2801302 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2801302 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2801302 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 398.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2997408 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 398.6,
            "unit": "ns/op",
            "extra": "2997408 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2997408 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2997408 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45184978 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.48,
            "unit": "ns/op",
            "extra": "45184978 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45184978 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45184978 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 128.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9493134 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 128.5,
            "unit": "ns/op",
            "extra": "9493134 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9493134 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9493134 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 199.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6031358 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 199.2,
            "unit": "ns/op",
            "extra": "6031358 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6031358 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6031358 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 278.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4334229 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 278.7,
            "unit": "ns/op",
            "extra": "4334229 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4334229 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4334229 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4537207 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248,
            "unit": "ns/op",
            "extra": "4537207 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4537207 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4537207 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2befeafacb308bcd96ab017c2f16dbab08a15a",
          "message": "Merge pull request #16 from jbrunner/misc-fixes\n\nMisc fixes",
          "timestamp": "2025-07-24T18:44:09+02:00",
          "tree_id": "4ee6ea6313c70be1fa21e8ad7badb71e8061f494",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/4d2befeafacb308bcd96ab017c2f16dbab08a15a"
        },
        "date": 1753375505525,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39202484 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.11,
            "unit": "ns/op",
            "extra": "39202484 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39202484 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39202484 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17914634 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.07,
            "unit": "ns/op",
            "extra": "17914634 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17914634 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17914634 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 97.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12363472 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 97.3,
            "unit": "ns/op",
            "extra": "12363472 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12363472 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12363472 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 109.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10627976 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 109.3,
            "unit": "ns/op",
            "extra": "10627976 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10627976 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10627976 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38121267 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.71,
            "unit": "ns/op",
            "extra": "38121267 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38121267 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38121267 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 104.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11756833 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 104.1,
            "unit": "ns/op",
            "extra": "11756833 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11756833 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11756833 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 141.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8497087 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 141.5,
            "unit": "ns/op",
            "extra": "8497087 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8497087 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8497087 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 264.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4537360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 264.6,
            "unit": "ns/op",
            "extra": "4537360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4537360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4537360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 439.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2714287 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 439.2,
            "unit": "ns/op",
            "extra": "2714287 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2714287 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2714287 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 406.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2985751 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 406.2,
            "unit": "ns/op",
            "extra": "2985751 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2985751 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2985751 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45348619 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.56,
            "unit": "ns/op",
            "extra": "45348619 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45348619 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45348619 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 131.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9385132 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 131.7,
            "unit": "ns/op",
            "extra": "9385132 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9385132 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9385132 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 200.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6008848 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 200.2,
            "unit": "ns/op",
            "extra": "6008848 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6008848 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6008848 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 278,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4304697 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 278,
            "unit": "ns/op",
            "extra": "4304697 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4304697 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4304697 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4837566 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.5,
            "unit": "ns/op",
            "extra": "4837566 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4837566 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4837566 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1a970289b2348bd6db12cd8a221e73de0545d2a",
          "message": "Merge pull request #17 from jbrunner/precommit\n\ncore: add pre-commit",
          "timestamp": "2025-07-24T19:31:43+02:00",
          "tree_id": "8665126af4ef6621f68a24003dce115e3c57fd44",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/c1a970289b2348bd6db12cd8a221e73de0545d2a"
        },
        "date": 1753378359340,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39076152 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.92,
            "unit": "ns/op",
            "extra": "39076152 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39076152 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39076152 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 68.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17472808 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 68.19,
            "unit": "ns/op",
            "extra": "17472808 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17472808 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17472808 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 94.75,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12676854 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 94.75,
            "unit": "ns/op",
            "extra": "12676854 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12676854 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12676854 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 108.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11058506 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 108.4,
            "unit": "ns/op",
            "extra": "11058506 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11058506 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11058506 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37656778 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.63,
            "unit": "ns/op",
            "extra": "37656778 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37656778 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37656778 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 100.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12097989 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 100.9,
            "unit": "ns/op",
            "extra": "12097989 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12097989 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12097989 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 138.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8535552 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 138.6,
            "unit": "ns/op",
            "extra": "8535552 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8535552 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8535552 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 256.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4668314 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 256.6,
            "unit": "ns/op",
            "extra": "4668314 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4668314 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4668314 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 430.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2804734 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 430.2,
            "unit": "ns/op",
            "extra": "2804734 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2804734 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2804734 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 401.4,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2992872 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 401.4,
            "unit": "ns/op",
            "extra": "2992872 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2992872 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2992872 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 27.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45225289 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 27.88,
            "unit": "ns/op",
            "extra": "45225289 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45225289 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45225289 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9427219 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 127,
            "unit": "ns/op",
            "extra": "9427219 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9427219 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9427219 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 199.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5993215 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 199.3,
            "unit": "ns/op",
            "extra": "5993215 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5993215 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5993215 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 275.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4228510 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 275.8,
            "unit": "ns/op",
            "extra": "4228510 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4228510 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4228510 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4790266 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.9,
            "unit": "ns/op",
            "extra": "4790266 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4790266 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4790266 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "222ca3d78b818250cfcff4c6ed30d02828b529d6",
          "message": "Merge pull request #18 from jbrunner/precommit-fix\n\nfix: pre commit minor code format",
          "timestamp": "2025-07-24T19:34:43+02:00",
          "tree_id": "df99a3b2ccd5803c9dd567588a57a6359d74b752",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/222ca3d78b818250cfcff4c6ed30d02828b529d6"
        },
        "date": 1753378527045,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39679352 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.96,
            "unit": "ns/op",
            "extra": "39679352 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39679352 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39679352 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17848387 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.01,
            "unit": "ns/op",
            "extra": "17848387 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17848387 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17848387 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 96.69,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12436494 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 96.69,
            "unit": "ns/op",
            "extra": "12436494 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12436494 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12436494 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 109.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10829216 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 109.2,
            "unit": "ns/op",
            "extra": "10829216 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10829216 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10829216 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37958928 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.81,
            "unit": "ns/op",
            "extra": "37958928 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37958928 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37958928 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 99.11,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11752327 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 99.11,
            "unit": "ns/op",
            "extra": "11752327 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11752327 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11752327 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 140.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8465130 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 140.8,
            "unit": "ns/op",
            "extra": "8465130 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8465130 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8465130 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 270.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4633840 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 270.1,
            "unit": "ns/op",
            "extra": "4633840 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4633840 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4633840 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 430.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2777299 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 430.2,
            "unit": "ns/op",
            "extra": "2777299 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2777299 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2777299 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 400.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2987360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 400.3,
            "unit": "ns/op",
            "extra": "2987360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2987360 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2987360 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45286887 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.79,
            "unit": "ns/op",
            "extra": "45286887 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45286887 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45286887 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9483837 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 127,
            "unit": "ns/op",
            "extra": "9483837 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9483837 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9483837 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 198.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6032427 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 198.9,
            "unit": "ns/op",
            "extra": "6032427 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6032427 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6032427 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 288.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4344667 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 288.1,
            "unit": "ns/op",
            "extra": "4344667 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4344667 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4344667 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4829780 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.3,
            "unit": "ns/op",
            "extra": "4829780 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4829780 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4829780 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joshua Brunner",
            "username": "jbrunner",
            "email": "joshua.brunner@bluewin.ch"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "222ca3d78b818250cfcff4c6ed30d02828b529d6",
          "message": "Merge pull request #18 from jbrunner/precommit-fix\n\nfix: pre commit minor code format",
          "timestamp": "2025-07-24T17:34:43Z",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/222ca3d78b818250cfcff4c6ed30d02828b529d6"
        },
        "date": 1753674376551,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40097924 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.1,
            "unit": "ns/op",
            "extra": "40097924 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "40097924 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "40097924 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17902645 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.17,
            "unit": "ns/op",
            "extra": "17902645 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17902645 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17902645 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 95.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12605902 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 95.5,
            "unit": "ns/op",
            "extra": "12605902 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12605902 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12605902 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 107.7,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10969524 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 107.7,
            "unit": "ns/op",
            "extra": "10969524 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10969524 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10969524 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37915150 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.78,
            "unit": "ns/op",
            "extra": "37915150 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37915150 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37915150 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 98.19,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12020902 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 98.19,
            "unit": "ns/op",
            "extra": "12020902 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12020902 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12020902 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 137.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8622980 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 137.9,
            "unit": "ns/op",
            "extra": "8622980 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8622980 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8622980 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 255.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4393652 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 255.8,
            "unit": "ns/op",
            "extra": "4393652 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4393652 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4393652 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 429.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2810461 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 429.3,
            "unit": "ns/op",
            "extra": "2810461 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2810461 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2810461 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 397.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3019758 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 397.6,
            "unit": "ns/op",
            "extra": "3019758 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3019758 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3019758 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44981390 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.57,
            "unit": "ns/op",
            "extra": "44981390 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44981390 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44981390 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 127.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9440504 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 127.2,
            "unit": "ns/op",
            "extra": "9440504 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9440504 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9440504 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 201.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6043537 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 201.7,
            "unit": "ns/op",
            "extra": "6043537 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6043537 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6043537 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 276.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4336687 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 276.5,
            "unit": "ns/op",
            "extra": "4336687 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4336687 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4336687 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 247.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4847668 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 247.5,
            "unit": "ns/op",
            "extra": "4847668 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4847668 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4847668 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joshua Brunner",
            "username": "jbrunner",
            "email": "joshua.brunner@bluewin.ch"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "222ca3d78b818250cfcff4c6ed30d02828b529d6",
          "message": "Merge pull request #18 from jbrunner/precommit-fix\n\nfix: pre commit minor code format",
          "timestamp": "2025-07-24T17:34:43Z",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/222ca3d78b818250cfcff4c6ed30d02828b529d6"
        },
        "date": 1754279787510,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39516768 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.98,
            "unit": "ns/op",
            "extra": "39516768 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39516768 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39516768 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 68.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17808818 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 68.8,
            "unit": "ns/op",
            "extra": "17808818 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17808818 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17808818 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 96.93,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12737053 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 96.93,
            "unit": "ns/op",
            "extra": "12737053 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12737053 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12737053 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 108.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11013992 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 108.3,
            "unit": "ns/op",
            "extra": "11013992 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11013992 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11013992 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38166048 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.53,
            "unit": "ns/op",
            "extra": "38166048 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38166048 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38166048 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 105.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12010417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 105.2,
            "unit": "ns/op",
            "extra": "12010417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12010417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12010417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 138,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8162716 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 138,
            "unit": "ns/op",
            "extra": "8162716 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8162716 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8162716 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 255.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4664133 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 255.2,
            "unit": "ns/op",
            "extra": "4664133 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4664133 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4664133 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 428,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2811864 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 428,
            "unit": "ns/op",
            "extra": "2811864 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2811864 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2811864 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 397.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3028326 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 397.2,
            "unit": "ns/op",
            "extra": "3028326 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3028326 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3028326 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44991550 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.7,
            "unit": "ns/op",
            "extra": "44991550 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44991550 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44991550 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9485125 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.6,
            "unit": "ns/op",
            "extra": "9485125 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9485125 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9485125 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 200.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6060049 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 200.5,
            "unit": "ns/op",
            "extra": "6060049 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6060049 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6060049 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 276.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4194944 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 276.5,
            "unit": "ns/op",
            "extra": "4194944 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4194944 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4194944 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 249.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4821499 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 249.1,
            "unit": "ns/op",
            "extra": "4821499 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4821499 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4821499 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ef896c75b4fb4b6a2b10924f46c1b3ff3ad258e",
          "message": "Merge pull request #19 from jbrunner/dependabot/github_actions/anchore/scan-action-6\n\nci(deps): bump anchore/scan-action from 3 to 6",
          "timestamp": "2025-08-04T08:25:58+02:00",
          "tree_id": "8c02d3cd164dbbee63664e0f61d25e33053dfccc",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/0ef896c75b4fb4b6a2b10924f46c1b3ff3ad258e"
        },
        "date": 1754288804822,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39542182 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.03,
            "unit": "ns/op",
            "extra": "39542182 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39542182 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39542182 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 68.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17793082 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 68.71,
            "unit": "ns/op",
            "extra": "17793082 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17793082 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17793082 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 94.86,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12590936 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 94.86,
            "unit": "ns/op",
            "extra": "12590936 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12590936 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12590936 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 110.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11058424 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 110.2,
            "unit": "ns/op",
            "extra": "11058424 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11058424 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11058424 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38056826 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.62,
            "unit": "ns/op",
            "extra": "38056826 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38056826 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38056826 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 99.07,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11983262 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 99.07,
            "unit": "ns/op",
            "extra": "11983262 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11983262 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11983262 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 138.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8562790 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 138.9,
            "unit": "ns/op",
            "extra": "8562790 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8562790 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8562790 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 255.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4550335 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 255.5,
            "unit": "ns/op",
            "extra": "4550335 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4550335 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4550335 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 427.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2799084 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 427.9,
            "unit": "ns/op",
            "extra": "2799084 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2799084 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2799084 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 399.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2997460 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 399.5,
            "unit": "ns/op",
            "extra": "2997460 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2997460 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2997460 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45256472 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.56,
            "unit": "ns/op",
            "extra": "45256472 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45256472 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45256472 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9435512 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.7,
            "unit": "ns/op",
            "extra": "9435512 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9435512 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9435512 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 199.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5935131 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 199.1,
            "unit": "ns/op",
            "extra": "5935131 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5935131 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5935131 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 275.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4334498 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 275.9,
            "unit": "ns/op",
            "extra": "4334498 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4334498 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4334498 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4840246 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.1,
            "unit": "ns/op",
            "extra": "4840246 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4840246 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4840246 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f647023a0b3e0fb842ccc2eac75dbf1633ecd04",
          "message": "Merge pull request #20 from jbrunner/dependabot/go_modules/github.com/prometheus/client_model-0.6.2\n\ndeps(deps): bump github.com/prometheus/client_model from 0.6.1 to 0.6.2",
          "timestamp": "2025-08-04T08:26:22+02:00",
          "tree_id": "8b064668d946bf6bd19e4af6a13e72427d628a7c",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/4f647023a0b3e0fb842ccc2eac75dbf1633ecd04"
        },
        "date": 1754288825591,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39863048 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.91,
            "unit": "ns/op",
            "extra": "39863048 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39863048 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39863048 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 66.99,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17928345 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 66.99,
            "unit": "ns/op",
            "extra": "17928345 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17928345 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17928345 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 95.06,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12582319 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 95.06,
            "unit": "ns/op",
            "extra": "12582319 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12582319 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12582319 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 107.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10882252 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 107.3,
            "unit": "ns/op",
            "extra": "10882252 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10882252 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10882252 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37977187 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.59,
            "unit": "ns/op",
            "extra": "37977187 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37977187 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37977187 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 97.94,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12126122 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 97.94,
            "unit": "ns/op",
            "extra": "12126122 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12126122 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12126122 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 137.4,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8529422 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 137.4,
            "unit": "ns/op",
            "extra": "8529422 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8529422 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8529422 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 253.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4646548 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 253.9,
            "unit": "ns/op",
            "extra": "4646548 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4646548 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4646548 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 426.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2772132 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 426.7,
            "unit": "ns/op",
            "extra": "2772132 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2772132 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2772132 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 395.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3019200 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 395.5,
            "unit": "ns/op",
            "extra": "3019200 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3019200 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3019200 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 27.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45333302 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 27.07,
            "unit": "ns/op",
            "extra": "45333302 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45333302 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45333302 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9442136 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.6,
            "unit": "ns/op",
            "extra": "9442136 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9442136 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9442136 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 199.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6036789 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 199.9,
            "unit": "ns/op",
            "extra": "6036789 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6036789 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6036789 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 275.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4353105 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 275.3,
            "unit": "ns/op",
            "extra": "4353105 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4353105 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4353105 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 267.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4847082 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 267.4,
            "unit": "ns/op",
            "extra": "4847082 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4847082 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4847082 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55c494c4e18bda23d1a3bec4e32703ef56d75125",
          "message": "Merge pull request #22 from jbrunner/dependabot/go_modules/google.golang.org/protobuf-1.36.6\n\ndeps(deps): bump google.golang.org/protobuf from 1.36.5 to 1.36.6",
          "timestamp": "2025-08-04T08:26:56+02:00",
          "tree_id": "8b064668d946bf6bd19e4af6a13e72427d628a7c",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/55c494c4e18bda23d1a3bec4e32703ef56d75125"
        },
        "date": 1754288860053,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39301978 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.94,
            "unit": "ns/op",
            "extra": "39301978 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39301978 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39301978 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17917899 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.05,
            "unit": "ns/op",
            "extra": "17917899 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17917899 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17917899 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 95.65,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12597670 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 95.65,
            "unit": "ns/op",
            "extra": "12597670 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12597670 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12597670 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 114.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10313484 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 114.4,
            "unit": "ns/op",
            "extra": "10313484 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10313484 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10313484 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38141433 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.51,
            "unit": "ns/op",
            "extra": "38141433 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38141433 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38141433 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 98.08,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11947156 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 98.08,
            "unit": "ns/op",
            "extra": "11947156 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11947156 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11947156 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 138.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8189918 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 138.1,
            "unit": "ns/op",
            "extra": "8189918 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8189918 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8189918 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 257.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4627956 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 257.1,
            "unit": "ns/op",
            "extra": "4627956 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4627956 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4627956 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 429.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2785377 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 429.6,
            "unit": "ns/op",
            "extra": "2785377 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2785377 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2785377 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 399.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2995299 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 399.1,
            "unit": "ns/op",
            "extra": "2995299 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2995299 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2995299 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 27.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45362410 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 27.14,
            "unit": "ns/op",
            "extra": "45362410 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45362410 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45362410 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9463257 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.5,
            "unit": "ns/op",
            "extra": "9463257 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9463257 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9463257 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 199.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6027994 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 199.2,
            "unit": "ns/op",
            "extra": "6027994 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6027994 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6027994 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 275.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4353384 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 275.5,
            "unit": "ns/op",
            "extra": "4353384 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4353384 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4353384 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 247.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4816927 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 247.2,
            "unit": "ns/op",
            "extra": "4816927 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4816927 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4816927 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50b263213f61d165432d6561b9c3df087233e536",
          "message": "Merge pull request #23 from jbrunner/dependabot/github_actions/peter-evans/dockerhub-description-4\n\nci(deps): bump peter-evans/dockerhub-description from 3 to 4",
          "timestamp": "2025-08-04T08:27:06+02:00",
          "tree_id": "50a0bd460300b4b40b426421a7ba1065d40fd495",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/50b263213f61d165432d6561b9c3df087233e536"
        },
        "date": 1754288871157,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39375070 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.3,
            "unit": "ns/op",
            "extra": "39375070 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39375070 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39375070 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17859894 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.14,
            "unit": "ns/op",
            "extra": "17859894 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17859894 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17859894 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 94.91,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12414907 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 94.91,
            "unit": "ns/op",
            "extra": "12414907 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12414907 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12414907 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 108.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10963730 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 108.8,
            "unit": "ns/op",
            "extra": "10963730 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10963730 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10963730 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37867012 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.93,
            "unit": "ns/op",
            "extra": "37867012 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37867012 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37867012 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 99.05,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12040285 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 99.05,
            "unit": "ns/op",
            "extra": "12040285 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12040285 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12040285 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 139.3,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8518341 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 139.3,
            "unit": "ns/op",
            "extra": "8518341 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8518341 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8518341 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 257.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4649539 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 257.8,
            "unit": "ns/op",
            "extra": "4649539 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4649539 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4649539 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 428.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2772960 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 428.7,
            "unit": "ns/op",
            "extra": "2772960 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2772960 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2772960 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 398.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2980804 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 398.7,
            "unit": "ns/op",
            "extra": "2980804 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2980804 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2980804 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 27.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45110541 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 27.3,
            "unit": "ns/op",
            "extra": "45110541 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45110541 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45110541 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9509206 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.9,
            "unit": "ns/op",
            "extra": "9509206 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9509206 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9509206 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 200.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5990138 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 200.6,
            "unit": "ns/op",
            "extra": "5990138 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5990138 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5990138 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 276.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4268341 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 276.8,
            "unit": "ns/op",
            "extra": "4268341 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4268341 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4268341 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 250.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4827366 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 250.3,
            "unit": "ns/op",
            "extra": "4827366 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4827366 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4827366 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "793418319710ce55a1bf505c2f8317027a83448b",
          "message": "Merge pull request #24 from jbrunner/dependabot/github_actions/codecov/codecov-action-5\n\nci(deps): bump codecov/codecov-action from 3 to 5",
          "timestamp": "2025-08-04T08:27:13+02:00",
          "tree_id": "58e03b236a873c2e322ea5a96ab3579e873d6d29",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/793418319710ce55a1bf505c2f8317027a83448b"
        },
        "date": 1754288875723,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39419620 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.1,
            "unit": "ns/op",
            "extra": "39419620 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39419620 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39419620 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 68.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17925404 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 68.08,
            "unit": "ns/op",
            "extra": "17925404 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17925404 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17925404 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 96.04,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12753752 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 96.04,
            "unit": "ns/op",
            "extra": "12753752 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12753752 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12753752 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 109.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10433452 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 109.8,
            "unit": "ns/op",
            "extra": "10433452 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10433452 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10433452 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37305387 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.67,
            "unit": "ns/op",
            "extra": "37305387 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37305387 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37305387 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 101.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11682086 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 101.5,
            "unit": "ns/op",
            "extra": "11682086 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11682086 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11682086 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 141,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8610144 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 141,
            "unit": "ns/op",
            "extra": "8610144 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8610144 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8610144 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 267.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4423332 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 267.2,
            "unit": "ns/op",
            "extra": "4423332 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4423332 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4423332 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 439.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2769084 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 439.5,
            "unit": "ns/op",
            "extra": "2769084 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2769084 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2769084 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 408.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2965034 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 408.9,
            "unit": "ns/op",
            "extra": "2965034 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2965034 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2965034 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45052492 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.58,
            "unit": "ns/op",
            "extra": "45052492 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45052492 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45052492 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 127.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9528175 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 127.1,
            "unit": "ns/op",
            "extra": "9528175 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9528175 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9528175 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 201.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5979564 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 201.3,
            "unit": "ns/op",
            "extra": "5979564 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5979564 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5979564 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 278.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4219724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 278.9,
            "unit": "ns/op",
            "extra": "4219724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4219724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4219724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4718574 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.9,
            "unit": "ns/op",
            "extra": "4718574 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4718574 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4718574 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15b8d72e7cf974cd108691df01a6cc4c4faf0dd5",
          "message": "Merge pull request #21 from jbrunner/dependabot/go_modules/github.com/prometheus/common-0.65.0\n\ndeps(deps): bump github.com/prometheus/common from 0.62.0 to 0.65.0",
          "timestamp": "2025-08-04T08:34:24+02:00",
          "tree_id": "3fde62c2a55eef82140dcd2d7d26e2cb07f4543a",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/15b8d72e7cf974cd108691df01a6cc4c4faf0dd5"
        },
        "date": 1754289307041,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39441206 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.94,
            "unit": "ns/op",
            "extra": "39441206 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39441206 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39441206 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 66.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17827989 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 66.93,
            "unit": "ns/op",
            "extra": "17827989 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17827989 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17827989 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 94.64,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12692127 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 94.64,
            "unit": "ns/op",
            "extra": "12692127 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12692127 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12692127 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 111.9,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10672033 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 111.9,
            "unit": "ns/op",
            "extra": "10672033 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10672033 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10672033 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38138856 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.55,
            "unit": "ns/op",
            "extra": "38138856 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38138856 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38138856 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 98.32,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11954071 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 98.32,
            "unit": "ns/op",
            "extra": "11954071 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11954071 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11954071 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 138.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8595795 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 138.1,
            "unit": "ns/op",
            "extra": "8595795 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8595795 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8595795 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 257.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4680230 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 257.7,
            "unit": "ns/op",
            "extra": "4680230 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4680230 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4680230 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 426.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2809765 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 426.6,
            "unit": "ns/op",
            "extra": "2809765 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2809765 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2809765 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 395.4,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3022724 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 395.4,
            "unit": "ns/op",
            "extra": "3022724 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3022724 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3022724 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43760992 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.63,
            "unit": "ns/op",
            "extra": "43760992 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43760992 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43760992 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9532198 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.6,
            "unit": "ns/op",
            "extra": "9532198 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9532198 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9532198 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 198.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6008094 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 198.9,
            "unit": "ns/op",
            "extra": "6008094 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6008094 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6008094 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 276.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4342414 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 276.7,
            "unit": "ns/op",
            "extra": "4342414 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4342414 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4342414 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 249.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4776038 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 249.3,
            "unit": "ns/op",
            "extra": "4776038 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4776038 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4776038 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "342ae840b480d382455c94327442d09eea1d4080",
          "message": "Merge pull request #25 from jbrunner/dependabot/go_modules/github.com/prometheus/procfs-0.17.0\n\ndeps(deps): bump github.com/prometheus/procfs from 0.15.1 to 0.17.0",
          "timestamp": "2025-08-04T08:38:26+02:00",
          "tree_id": "e06fcc39554f39fa56bbcd8dd529afe9ae082fe3",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/342ae840b480d382455c94327442d09eea1d4080"
        },
        "date": 1754289544917,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39229432 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.93,
            "unit": "ns/op",
            "extra": "39229432 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39229432 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39229432 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17912772 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.29,
            "unit": "ns/op",
            "extra": "17912772 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17912772 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17912772 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 94.97,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12604987 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 94.97,
            "unit": "ns/op",
            "extra": "12604987 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12604987 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12604987 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 107.9,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10921682 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 107.9,
            "unit": "ns/op",
            "extra": "10921682 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10921682 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10921682 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37701775 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.54,
            "unit": "ns/op",
            "extra": "37701775 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37701775 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37701775 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 98.3,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12121417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 98.3,
            "unit": "ns/op",
            "extra": "12121417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12121417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12121417 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 137.8,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8637212 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 137.8,
            "unit": "ns/op",
            "extra": "8637212 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8637212 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8637212 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 255.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4669670 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 255.3,
            "unit": "ns/op",
            "extra": "4669670 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4669670 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4669670 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 431.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2764956 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 431.1,
            "unit": "ns/op",
            "extra": "2764956 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2764956 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2764956 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 397.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3005664 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 397.5,
            "unit": "ns/op",
            "extra": "3005664 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3005664 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3005664 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44699830 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.54,
            "unit": "ns/op",
            "extra": "44699830 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44699830 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44699830 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8960750 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.6,
            "unit": "ns/op",
            "extra": "8960750 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8960750 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8960750 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5951338 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 200,
            "unit": "ns/op",
            "extra": "5951338 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5951338 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5951338 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 275.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4327201 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 275.8,
            "unit": "ns/op",
            "extra": "4327201 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4327201 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4327201 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 250.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4839057 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 250.7,
            "unit": "ns/op",
            "extra": "4839057 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4839057 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4839057 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5de895f6e4b569560343849a5ca13e60af1dfc00",
          "message": "Merge pull request #26 from jbrunner/dependabot/go_modules/golang.org/x/sys-0.34.0\n\ndeps(deps): bump golang.org/x/sys from 0.30.0 to 0.34.0",
          "timestamp": "2025-08-04T08:53:42+02:00",
          "tree_id": "24a9766824973ff7113e399a275b1861f8bdeef2",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/5de895f6e4b569560343849a5ca13e60af1dfc00"
        },
        "date": 1754290459100,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39257522 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.92,
            "unit": "ns/op",
            "extra": "39257522 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39257522 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39257522 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.07,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17848270 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.07,
            "unit": "ns/op",
            "extra": "17848270 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17848270 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17848270 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 94.46,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12681278 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 94.46,
            "unit": "ns/op",
            "extra": "12681278 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12681278 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12681278 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 107.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11046631 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 107.8,
            "unit": "ns/op",
            "extra": "11046631 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11046631 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11046631 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38117944 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.95,
            "unit": "ns/op",
            "extra": "38117944 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38117944 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38117944 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 97.94,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11896621 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 97.94,
            "unit": "ns/op",
            "extra": "11896621 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11896621 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11896621 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 140.7,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8604294 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 140.7,
            "unit": "ns/op",
            "extra": "8604294 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8604294 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8604294 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 255.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4660285 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 255.5,
            "unit": "ns/op",
            "extra": "4660285 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4660285 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4660285 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 427.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2759242 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 427.8,
            "unit": "ns/op",
            "extra": "2759242 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2759242 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2759242 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 397.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3014331 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 397.7,
            "unit": "ns/op",
            "extra": "3014331 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3014331 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3014331 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 28.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45346167 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 28.71,
            "unit": "ns/op",
            "extra": "45346167 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45346167 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45346167 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9407090 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.8,
            "unit": "ns/op",
            "extra": "9407090 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9407090 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9407090 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 198.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6064012 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 198.7,
            "unit": "ns/op",
            "extra": "6064012 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6064012 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6064012 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 276.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4267034 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 276.3,
            "unit": "ns/op",
            "extra": "4267034 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4267034 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4267034 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4807402 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.8,
            "unit": "ns/op",
            "extra": "4807402 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4807402 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4807402 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f2b5d096733299f7ecac33feb18182a7b51a876",
          "message": "Merge pull request #29 from jbrunner/dependabot/github_actions/softprops/action-gh-release-2\n\nci(deps): bump softprops/action-gh-release from 1 to 2",
          "timestamp": "2025-08-05T09:51:33+02:00",
          "tree_id": "94cfc364c00f18103c49699580037d2bd890b887",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/3f2b5d096733299f7ecac33feb18182a7b51a876"
        },
        "date": 1754380338759,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35195943 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.49,
            "unit": "ns/op",
            "extra": "35195943 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35195943 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35195943 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 70.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15906921 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 70.09,
            "unit": "ns/op",
            "extra": "15906921 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "15906921 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "15906921 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 100.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11574906 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 100.5,
            "unit": "ns/op",
            "extra": "11574906 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "11574906 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11574906 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 114.8,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10349122 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 114.8,
            "unit": "ns/op",
            "extra": "10349122 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10349122 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10349122 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35638593 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.59,
            "unit": "ns/op",
            "extra": "35638593 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "35638593 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "35638593 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 110.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11245713 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 110.1,
            "unit": "ns/op",
            "extra": "11245713 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11245713 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11245713 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 146,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7912215 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 146,
            "unit": "ns/op",
            "extra": "7912215 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "7912215 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "7912215 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 272,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4508959 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 272,
            "unit": "ns/op",
            "extra": "4508959 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4508959 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4508959 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 447.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2705214 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 447.5,
            "unit": "ns/op",
            "extra": "2705214 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2705214 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2705214 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 417.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2902267 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 417.9,
            "unit": "ns/op",
            "extra": "2902267 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2902267 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2902267 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 27.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41542357 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 27.42,
            "unit": "ns/op",
            "extra": "41542357 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "41542357 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "41542357 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 128.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9149877 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 128.9,
            "unit": "ns/op",
            "extra": "9149877 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9149877 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9149877 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 201.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5880061 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 201.2,
            "unit": "ns/op",
            "extra": "5880061 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5880061 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5880061 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 280.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4275495 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 280.6,
            "unit": "ns/op",
            "extra": "4275495 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4275495 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4275495 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 251.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4718581 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 251.3,
            "unit": "ns/op",
            "extra": "4718581 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4718581 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4718581 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6658986fe6128e8d6e42c3f26fc0407a8562f855",
          "message": "Merge pull request #28 from jbrunner/dependabot/github_actions/actions/setup-go-5\n\nci(deps): bump actions/setup-go from 4 to 5",
          "timestamp": "2025-08-05T09:51:44+02:00",
          "tree_id": "a4bd8e1d86909876d4b6a49f617b4592555ea8e7",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/6658986fe6128e8d6e42c3f26fc0407a8562f855"
        },
        "date": 1754380345279,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39734318 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.83,
            "unit": "ns/op",
            "extra": "39734318 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39734318 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39734318 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17845864 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 68.7,
            "unit": "ns/op",
            "extra": "17845864 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17845864 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17845864 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 100.6,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12689178 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 100.6,
            "unit": "ns/op",
            "extra": "12689178 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12689178 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12689178 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 108.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10708425 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 108.4,
            "unit": "ns/op",
            "extra": "10708425 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10708425 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10708425 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38110252 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.81,
            "unit": "ns/op",
            "extra": "38110252 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38110252 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38110252 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 101.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "10451042 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 101.6,
            "unit": "ns/op",
            "extra": "10451042 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "10451042 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10451042 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 139.1,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8594532 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 139.1,
            "unit": "ns/op",
            "extra": "8594532 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8594532 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8594532 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 256.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4662110 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 256.2,
            "unit": "ns/op",
            "extra": "4662110 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4662110 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4662110 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 430.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2776945 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 430.2,
            "unit": "ns/op",
            "extra": "2776945 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2776945 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2776945 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 398.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3009493 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 398.8,
            "unit": "ns/op",
            "extra": "3009493 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3009493 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3009493 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44575215 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.56,
            "unit": "ns/op",
            "extra": "44575215 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "44575215 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "44575215 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9521684 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.8,
            "unit": "ns/op",
            "extra": "9521684 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9521684 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9521684 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6007573 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 200,
            "unit": "ns/op",
            "extra": "6007573 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6007573 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6007573 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 278.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4341908 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 278.1,
            "unit": "ns/op",
            "extra": "4341908 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4341908 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4341908 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 250.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4827422 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 250.3,
            "unit": "ns/op",
            "extra": "4827422 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4827422 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4827422 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6e2e8c47af80d70dd2f72899b9a36acfc115f96",
          "message": "Merge pull request #27 from jbrunner/dependabot/go_modules/github.com/prometheus/client_golang-1.23.0\n\ndeps(deps): bump github.com/prometheus/client_golang from 1.22.0 to 1.23.0",
          "timestamp": "2025-08-05T10:05:23+02:00",
          "tree_id": "ea81641155bccb4f26dc156a93e8ca129a019e1c",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/f6e2e8c47af80d70dd2f72899b9a36acfc115f96"
        },
        "date": 1754381169541,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 29.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39540844 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 29.94,
            "unit": "ns/op",
            "extra": "39540844 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39540844 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39540844 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17904853 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.33,
            "unit": "ns/op",
            "extra": "17904853 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17904853 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17904853 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 94.54,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12719902 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 94.54,
            "unit": "ns/op",
            "extra": "12719902 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12719902 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12719902 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 107.6,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "11026400 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 107.6,
            "unit": "ns/op",
            "extra": "11026400 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "11026400 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11026400 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37997319 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.49,
            "unit": "ns/op",
            "extra": "37997319 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37997319 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37997319 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 100.4,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11988858 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 100.4,
            "unit": "ns/op",
            "extra": "11988858 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11988858 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11988858 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 138.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8610500 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 138.2,
            "unit": "ns/op",
            "extra": "8610500 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8610500 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8610500 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 255.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4665699 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 255.3,
            "unit": "ns/op",
            "extra": "4665699 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4665699 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4665699 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 428.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2797780 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 428.5,
            "unit": "ns/op",
            "extra": "2797780 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2797780 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2797780 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 400.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3002197 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 400.3,
            "unit": "ns/op",
            "extra": "3002197 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3002197 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3002197 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45221152 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.52,
            "unit": "ns/op",
            "extra": "45221152 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45221152 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45221152 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9488415 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.5,
            "unit": "ns/op",
            "extra": "9488415 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9488415 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9488415 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 204,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6071344 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 204,
            "unit": "ns/op",
            "extra": "6071344 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6071344 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6071344 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 276.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4251414 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 276.5,
            "unit": "ns/op",
            "extra": "4251414 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4251414 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4251414 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4814139 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.5,
            "unit": "ns/op",
            "extra": "4814139 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4814139 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4814139 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d076094bcfce2d961bf8b2ce481277de42f2c288",
          "message": "Merge pull request #30 from jbrunner/fix-codecov\n\nFix codecov/codecov-action @v5 scema change",
          "timestamp": "2025-08-06T15:29:49+02:00",
          "tree_id": "1f41991e403987a15bd138eab04414480d30c48a",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/d076094bcfce2d961bf8b2ce481277de42f2c288"
        },
        "date": 1754487035304,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39325702 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.1,
            "unit": "ns/op",
            "extra": "39325702 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39325702 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39325702 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17824880 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.87,
            "unit": "ns/op",
            "extra": "17824880 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17824880 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17824880 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 95.27,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12433090 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 95.27,
            "unit": "ns/op",
            "extra": "12433090 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12433090 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12433090 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 108.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10995595 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 108.2,
            "unit": "ns/op",
            "extra": "10995595 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10995595 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10995595 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 32.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38064696 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 32.04,
            "unit": "ns/op",
            "extra": "38064696 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38064696 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38064696 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 99.31,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11980974 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 99.31,
            "unit": "ns/op",
            "extra": "11980974 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11980974 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11980974 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 138.6,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8542550 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 138.6,
            "unit": "ns/op",
            "extra": "8542550 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8542550 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8542550 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 256.7,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4541328 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 256.7,
            "unit": "ns/op",
            "extra": "4541328 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4541328 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4541328 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 430.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2792014 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 430.3,
            "unit": "ns/op",
            "extra": "2792014 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2792014 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2792014 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 398.2,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2729356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 398.2,
            "unit": "ns/op",
            "extra": "2729356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2729356 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2729356 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 27.18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37496278 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 27.18,
            "unit": "ns/op",
            "extra": "37496278 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37496278 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37496278 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 126.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9438643 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 126.6,
            "unit": "ns/op",
            "extra": "9438643 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9438643 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9438643 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 199.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6024008 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 199.4,
            "unit": "ns/op",
            "extra": "6024008 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "6024008 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "6024008 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 276.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4337355 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 276.7,
            "unit": "ns/op",
            "extra": "4337355 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4337355 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4337355 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4764310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.1,
            "unit": "ns/op",
            "extra": "4764310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4764310 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4764310 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48fbd6f53ae5392f65e26559790d090ca28833ec",
          "message": "Merge pull request #31 from jbrunner/priority-tests\n\nchore: add tests for direct routing descisions",
          "timestamp": "2025-08-06T15:44:49+02:00",
          "tree_id": "df7e5f8fbc08c644b9da09cef389783a0d35b5e9",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/48fbd6f53ae5392f65e26559790d090ca28833ec"
        },
        "date": 1754487932855,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39843669 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.53,
            "unit": "ns/op",
            "extra": "39843669 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39843669 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39843669 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17720462 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.6,
            "unit": "ns/op",
            "extra": "17720462 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17720462 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17720462 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 93.44,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12884565 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 93.44,
            "unit": "ns/op",
            "extra": "12884565 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12884565 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12884565 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 109,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10823880 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 109,
            "unit": "ns/op",
            "extra": "10823880 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10823880 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10823880 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38042557 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.85,
            "unit": "ns/op",
            "extra": "38042557 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38042557 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38042557 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 100.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11786126 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 100.5,
            "unit": "ns/op",
            "extra": "11786126 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11786126 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11786126 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 140.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8519847 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 140.5,
            "unit": "ns/op",
            "extra": "8519847 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8519847 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8519847 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 256.6,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4704498 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 256.6,
            "unit": "ns/op",
            "extra": "4704498 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4704498 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4704498 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 440.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2759404 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 440.3,
            "unit": "ns/op",
            "extra": "2759404 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2759404 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2759404 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 399.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2989412 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 399.3,
            "unit": "ns/op",
            "extra": "2989412 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2989412 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2989412 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45596821 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.38,
            "unit": "ns/op",
            "extra": "45596821 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45596821 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45596821 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 134.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8947678 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 134.9,
            "unit": "ns/op",
            "extra": "8947678 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8947678 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8947678 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 201.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5750682 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 201.3,
            "unit": "ns/op",
            "extra": "5750682 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5750682 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5750682 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 279.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4307026 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 279.4,
            "unit": "ns/op",
            "extra": "4307026 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4307026 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4307026 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 248.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4853679 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 248.2,
            "unit": "ns/op",
            "extra": "4853679 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4853679 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4853679 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Joshua Brunner",
            "username": "jbrunner",
            "email": "joshua.brunner@bluewin.ch"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "48fbd6f53ae5392f65e26559790d090ca28833ec",
          "message": "Merge pull request #31 from jbrunner/priority-tests\n\nchore: add tests for direct routing descisions",
          "timestamp": "2025-08-06T13:44:49Z",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/48fbd6f53ae5392f65e26559790d090ca28833ec"
        },
        "date": 1754883799978,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39144645 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.62,
            "unit": "ns/op",
            "extra": "39144645 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39144645 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39144645 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17806370 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.43,
            "unit": "ns/op",
            "extra": "17806370 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17806370 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17806370 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 91.97,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13032720 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 91.97,
            "unit": "ns/op",
            "extra": "13032720 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "13032720 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "13032720 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 108.4,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10916896 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 108.4,
            "unit": "ns/op",
            "extra": "10916896 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10916896 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10916896 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37799751 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.34,
            "unit": "ns/op",
            "extra": "37799751 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37799751 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37799751 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 99.51,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11939980 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 99.51,
            "unit": "ns/op",
            "extra": "11939980 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11939980 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11939980 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 140.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8539249 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 140.9,
            "unit": "ns/op",
            "extra": "8539249 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8539249 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8539249 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 252.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4652329 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 252.9,
            "unit": "ns/op",
            "extra": "4652329 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4652329 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4652329 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 432.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2764472 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 432.1,
            "unit": "ns/op",
            "extra": "2764472 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2764472 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2764472 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 397.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3028904 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 397.9,
            "unit": "ns/op",
            "extra": "3028904 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3028904 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3028904 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45689894 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.89,
            "unit": "ns/op",
            "extra": "45689894 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45689894 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45689894 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 134.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9026128 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 134.3,
            "unit": "ns/op",
            "extra": "9026128 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9026128 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9026128 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5947916 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 203,
            "unit": "ns/op",
            "extra": "5947916 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5947916 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5947916 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 279.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4306966 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 279.3,
            "unit": "ns/op",
            "extra": "4306966 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4306966 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4306966 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 247.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4853956 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 247.8,
            "unit": "ns/op",
            "extra": "4853956 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4853956 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4853956 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "544895bb3dcedc919cf4a038328f56780d5bbff6",
          "message": "Merge pull request #34 from jbrunner/dependabot/go_modules/google.golang.org/protobuf-1.36.7\n\ndeps(deps): bump google.golang.org/protobuf from 1.36.6 to 1.36.7",
          "timestamp": "2025-08-11T13:06:18+02:00",
          "tree_id": "8ba031e2105d238eec1e3fdceed6e755e6d78558",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/544895bb3dcedc919cf4a038328f56780d5bbff6"
        },
        "date": 1754910427506,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39813310 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.59,
            "unit": "ns/op",
            "extra": "39813310 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39813310 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39813310 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14836402 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.74,
            "unit": "ns/op",
            "extra": "14836402 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "14836402 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "14836402 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 92.07,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12811723 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 92.07,
            "unit": "ns/op",
            "extra": "12811723 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12811723 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12811723 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 109.1,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10686798 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 109.1,
            "unit": "ns/op",
            "extra": "10686798 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10686798 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10686798 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 32.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34681162 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 32.43,
            "unit": "ns/op",
            "extra": "34681162 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "34681162 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "34681162 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 103.2,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "10496728 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 103.2,
            "unit": "ns/op",
            "extra": "10496728 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "10496728 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10496728 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 139.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8363499 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 139.9,
            "unit": "ns/op",
            "extra": "8363499 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8363499 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8363499 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 250.8,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4764183 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 250.8,
            "unit": "ns/op",
            "extra": "4764183 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4764183 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4764183 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 427.4,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2800842 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 427.4,
            "unit": "ns/op",
            "extra": "2800842 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2800842 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2800842 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 395.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3023256 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 395.5,
            "unit": "ns/op",
            "extra": "3023256 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3023256 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3023256 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.48,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45616306 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.48,
            "unit": "ns/op",
            "extra": "45616306 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45616306 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45616306 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 134.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8911762 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 134.4,
            "unit": "ns/op",
            "extra": "8911762 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8911762 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8911762 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 200.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5944102 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 200.8,
            "unit": "ns/op",
            "extra": "5944102 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5944102 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5944102 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 277.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4261016 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 277.7,
            "unit": "ns/op",
            "extra": "4261016 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4261016 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4261016 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 247.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4755424 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 247.8,
            "unit": "ns/op",
            "extra": "4755424 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4755424 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4755424 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31a7ba3d2194611046490e6daf7970e7b579a672",
          "message": "Merge pull request #32 from jbrunner/dependabot/github_actions/actions/download-artifact-5\n\nci(deps): bump actions/download-artifact from 4 to 5",
          "timestamp": "2025-08-11T13:06:27+02:00",
          "tree_id": "d6c60f76207bf3fe2ecc681a31e79e07a0c82cc8",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/31a7ba3d2194611046490e6daf7970e7b579a672"
        },
        "date": 1754910429829,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 30.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39830556 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 30.79,
            "unit": "ns/op",
            "extra": "39830556 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39830556 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39830556 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 68.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17798470 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 68.49,
            "unit": "ns/op",
            "extra": "17798470 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17798470 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17798470 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 94.18,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12877777 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 94.18,
            "unit": "ns/op",
            "extra": "12877777 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12877777 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12877777 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 110.3,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10811457 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 110.3,
            "unit": "ns/op",
            "extra": "10811457 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10811457 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10811457 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38356602 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.7,
            "unit": "ns/op",
            "extra": "38356602 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "38356602 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "38356602 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 101.5,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "12018574 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 101.5,
            "unit": "ns/op",
            "extra": "12018574 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "12018574 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12018574 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 139.9,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8459960 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 139.9,
            "unit": "ns/op",
            "extra": "8459960 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8459960 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8459960 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 255.9,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4663128 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 255.9,
            "unit": "ns/op",
            "extra": "4663128 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4663128 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4663128 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 438.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2696493 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 438.1,
            "unit": "ns/op",
            "extra": "2696493 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2696493 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2696493 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 409.1,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2978097 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 409.1,
            "unit": "ns/op",
            "extra": "2978097 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2978097 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2978097 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45652647 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.49,
            "unit": "ns/op",
            "extra": "45652647 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "45652647 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "45652647 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8591623 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 134,
            "unit": "ns/op",
            "extra": "8591623 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "8591623 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8591623 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 202.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5977123 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 202.8,
            "unit": "ns/op",
            "extra": "5977123 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5977123 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5977123 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 278.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4288734 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 278.3,
            "unit": "ns/op",
            "extra": "4288734 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4288734 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4288734 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 247,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4871517 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 247,
            "unit": "ns/op",
            "extra": "4871517 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4871517 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4871517 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joshua.brunner@bluewin.ch",
            "name": "Joshua Brunner",
            "username": "jbrunner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e894a31b484cea4470171591c0fe39248ad10849",
          "message": "Merge pull request #33 from jbrunner/dependabot/go_modules/golang.org/x/sys-0.35.0\n\ndeps(deps): bump golang.org/x/sys from 0.34.0 to 0.35.0",
          "timestamp": "2025-08-13T06:53:23+02:00",
          "tree_id": "51417e288acff7c078060d8997d5ea2bdf4145a9",
          "url": "https://github.com/jbrunner/socks-forwarder/commit/e894a31b484cea4470171591c0fe39248ad10849"
        },
        "date": 1755060852816,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMatchHostname/exact-match",
            "value": 31.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39824547 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - ns/op",
            "value": 31.08,
            "unit": "ns/op",
            "extra": "39824547 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "39824547 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/exact-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "39824547 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix",
            "value": 67.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17863836 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - ns/op",
            "value": 67.29,
            "unit": "ns/op",
            "extra": "17863836 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "17863836 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-prefix - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "17863836 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix",
            "value": 91.75,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12881830 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - ns/op",
            "value": 91.75,
            "unit": "ns/op",
            "extra": "12881830 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - B/op",
            "value": 32,
            "unit": "B/op",
            "extra": "12881830 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-suffix - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12881830 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle",
            "value": 108.2,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "10596096 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - ns/op",
            "value": 108.2,
            "unit": "ns/op",
            "extra": "10596096 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - B/op",
            "value": 48,
            "unit": "B/op",
            "extra": "10596096 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/wildcard-middle - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10596096 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match",
            "value": 31.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37747680 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - ns/op",
            "value": 31.43,
            "unit": "ns/op",
            "extra": "37747680 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "37747680 times\n4 procs"
          },
          {
            "name": "BenchmarkMatchHostname/no-match - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "37747680 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com",
            "value": 98.31,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "11946680 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - ns/op",
            "value": 98.31,
            "unit": "ns/op",
            "extra": "11946680 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "11946680 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.internal.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "11946680 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com",
            "value": 138.4,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8556786 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - ns/op",
            "value": 138.4,
            "unit": "ns/op",
            "extra": "8556786 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - B/op",
            "value": 64,
            "unit": "B/op",
            "extra": "8556786 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/api.example.com - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "8556786 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com",
            "value": 251.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "4686524 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - ns/op",
            "value": 251.5,
            "unit": "ns/op",
            "extra": "4686524 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "4686524 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/sub.test.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "4686524 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com",
            "value": 429.5,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "2788134 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - ns/op",
            "value": 429.5,
            "unit": "ns/op",
            "extra": "2788134 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2788134 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/other.example.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "2788134 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com",
            "value": 396.3,
            "unit": "ns/op\t     112 B/op\t       2 allocs/op",
            "extra": "3021259 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - ns/op",
            "value": 396.3,
            "unit": "ns/op",
            "extra": "3021259 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "3021259 times\n4 procs"
          },
          {
            "name": "BenchmarkFindRule/no-match.com - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "3021259 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost",
            "value": 26.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "43064638 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - ns/op",
            "value": 26.39,
            "unit": "ns/op",
            "extra": "43064638 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "43064638 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/localhost - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "43064638 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local",
            "value": 134.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9003823 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - ns/op",
            "value": 134.8,
            "unit": "ns/op",
            "extra": "9003823 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "9003823 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/api.local - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "9003823 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com",
            "value": 202.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5878047 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - ns/op",
            "value": 202.1,
            "unit": "ns/op",
            "extra": "5878047 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "5878047 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/direct.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "5878047 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com",
            "value": 277.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4304518 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - ns/op",
            "value": 277.8,
            "unit": "ns/op",
            "extra": "4304518 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4304518 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/other.example.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4304518 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com",
            "value": 247.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4839895 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - ns/op",
            "value": 247.5,
            "unit": "ns/op",
            "extra": "4839895 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "4839895 times\n4 procs"
          },
          {
            "name": "BenchmarkShouldServeDirect/no-match.com - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4839895 times\n4 procs"
          }
        ]
      }
    ]
  }
}