# tOSU-PromiseWebServer-Expirement

This accomplanies an article on my website, https://theOpenSourceU.org/

> My intended purpose is to provide a higher level of throughput -- service more requests per second through an async
> API. It is expected that the time to service each request would increase but that is fine if we handle more requests
> per second. Or if nothing else, at least handle more requests before issues start to occur.

## Testing commands

* `npm install artillery -g`
* `artillery quick --count 10 -n 20 http://localhost:3000/basic`
* `artillery quick --count 10 -n 20 http://localhost:3000/promise`

## Example Test Runs

### Without a Promise
```
λ artillery quick --count 10 -n 20 http://localhost:3000/basic
Started phase 0, duration: 1s @ 08:58:50(-0600) 2018-03-05
Report @ 08:58:52(-0600) 2018-03-05
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  200
  RPS sent: 143.88
  Request latency:
    min: 2.9
    max: 448.4
    median: 22.6
    p95: 44.6
    p99: 160.3
  Codes:
    200: 200

All virtual users finished
Summary report @ 08:58:52(-0600) 2018-03-05
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  200
  RPS sent: 141.84
  Request latency:
    min: 2.9
    max: 448.4
    median: 22.6
    p95: 44.6
    p99: 160.3
  Scenario counts:
    0: 10 (100%)
  Codes:
    200: 200
```

### With Promise
```
λ artillery quick --count 10 -n 20 http://localhost:3000/promise
Started phase 0, duration: 1s @ 08:59:17(-0600) 2018-03-05
Report @ 08:59:19(-0600) 2018-03-05
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  200
  RPS sent: 143.88
  Request latency:
    min: 2.9
    max: 298.2
    median: 9.9
    p95: 21.7
    p99: 37.2
  Codes:
    200: 200

All virtual users finished
Summary report @ 08:59:19(-0600) 2018-03-05
  Scenarios launched:  10
  Scenarios completed: 10
  Requests completed:  200
  RPS sent: 141.84
  Request latency:
    min: 2.9
    max: 298.2
    median: 9.9
    p95: 21.7
    p99: 37.2
  Scenario counts:
    0: 10 (100%)
  Codes:
    200: 200
```