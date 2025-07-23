window.BENCHMARK_DATA = {
  "lastUpdate": 1753277006243,
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
      }
    ]
  }
}