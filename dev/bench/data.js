window.BENCHMARK_DATA = {
  "lastUpdate": 1753142899217,
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
      }
    ]
  }
}