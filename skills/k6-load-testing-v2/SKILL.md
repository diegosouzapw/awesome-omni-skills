---
name: k6-load-testing-v2
description: "k6 Load Testing workflow skill. Use this skill when the user needs Comprehensive k6 load testing skill for API, browser, and scalability testing. Write realistic load scenarios, analyze results, and integrate with CI/CD and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["k6", "load-testing", "performance", "api-testing", "ci-cd", "k6-load-testing-v2", "k6-load-testing", "comprehensive"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "Kairo Official"
date_added: "2026-04-17"
date_updated: "2026-04-24"
---

# k6 Load Testing

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/k6-load-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# k6 Load Testing

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: k6 Basics, Test Configuration, HTTP Testing, Browser Testing (k6 Browser), WebSocket Testing, Data Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to load test HTTP APIs, WebSocket endpoints, or browser scenarios
- Use when setting up performance regression tests in CI/CD
- Use when analyzing system behavior under various load conditions
- Use when comparing performance between code changes
- Use when validating SLA requirements and performance budgets
- Use when the request clearly matches the imported source intent: Comprehensive k6 load testing skill for API, browser, and scalability testing. Write realistic load scenarios, analyze results, and integrate with CI/CD.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

k6 is a modern, developer-centric load testing tool that helps you write and execute performance tests for HTTP APIs, WebSocket endpoints, and browser scenarios. This skill provides comprehensive guidance on writing realistic load tests, configuring test scenarios (smoke, load, stress, spike, soak), analyzing results, and integrating with CI/CD pipelines.

Use this skill when you need to validate system performance, identify bottlenecks, ensure SLA compliance, or catch performance regressions before deployment.

---

#### Imported: k6 Basics

### Installation

```bash
# macOS
brew install k6

# Windows
choco install k6

# Linux
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

### Quick Start

```javascript
// simple-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/get');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
```

Run with: `k6 run simple-test.js`

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @k6-load-testing-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @k6-load-testing-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @k6-load-testing-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @k6-load-testing-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Basic API Load Test

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '2m',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('https://api.example.com/users');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
```

### Example 2: Test with Authentication and Data Parameterization

```javascript
import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from 'k6/data';

const users = new SharedArray('users', function () {
  return JSON.parse(open('./users.json'));
});

export default function () {
  const user = users[__VU % users.length];

  const loginRes = http.post('https://api.example.com/login',
    JSON.stringify({ email: user.email, password: user.password })
  );

  const token = loginRes.json('access_token');

  const headers = { 'Authorization': `Bearer ${token}` };
  const res = http.get('https://api.example.com/profile', { headers });

  check(res, { 'profile loaded': (r) => r.status === 200 });
}
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Start with smoke test: Verify test works with 1-5 VUs before scaling up
- Use realistic data: Parameterize with real user data and behaviors
- Set meaningful thresholds: Match your SLA and business requirements
- Warm up systems: Include ramp-up time in stages
- Monitor external dependencies: Track not just your APIs but downstream services
- Use tags: Tag requests for granular analysis (tags: { endpoint: 'users' })
- Keep tests focused: One test file per scenario for clarity

### Imported Operating Notes

#### Imported: Best Practices

- **Start with smoke test**: Verify test works with 1-5 VUs before scaling up
- **Use realistic data**: Parameterize with real user data and behaviors
- **Set meaningful thresholds**: Match your SLA and business requirements
- **Warm up systems**: Include ramp-up time in stages
- **Monitor external dependencies**: Track not just your APIs but downstream services
- **Use tags**: Tag requests for granular analysis (`tags: { endpoint: 'users' }`)
- **Keep tests focused**: One test file per scenario for clarity

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/k6-load-testing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@interactive-portfolio-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@intercom-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-anthropic-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-community-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Additional Resources

- [k6 Documentation](https://k6.io/docs/)
- [k6 Examples](https://github.com/grafana/k6/tree/master/examples)
- [k6 Load Testing Guides](https://k6.io/guides/)
- [k6 Cloud](https://k6.io/cloud/)

#### Imported: Test Configuration

### Common Options

```javascript
export const options = {
  // Virtual Users (concurrent users)
  vus: 100,

  // Test duration
  duration: '5m',

  // Or use stages for ramp-up/ramp-down
  stages: [
    { duration: '30s', target: 20 },   // Ramp up
    { duration: '1m', target: 100 },  // Stay at 100
    { duration: '30s', target: 0 },    // Ramp down
  ],

  // Thresholds (SLA)
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95% requests < 500ms
    http_req_failed: ['rate<0.01'],     // Error rate < 1%
  },

  // Load zones (distributed testing)
  ext: {
    loadimpact: {
      name: 'My Load Test',
      distribution: {
        'amazon:us:ashburn': { weight: 50 },
        'amazon:eu: Dublin': { weight: 50 },
      },
    },
  },
};
```

### Test Types

| Type | Use Case | Configuration |
|------|----------|---------------|
| Smoke Test | Verify basic functionality | Low VUs (1-5), short duration |
| Load Test | Normal expected load | Target VUs based on traffic |
| Stress Test | Find breaking point | Ramp beyond capacity |
| Spike Test | Sudden traffic spikes | Rapid increase/decrease |
| Soak Test | Long-term stability | Extended duration |

---

#### Imported: HTTP Testing

### Basic Requests

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  // GET request
  const getRes = http.get('https://api.example.com/users');

  check(getRes, {
    'GET succeeded': (r) => r.status === 200,
    'has users': (r) => r.json('data.length') > 0,
  });

  // POST request with JSON body
  const postRes = http.post('https://api.example.com/users',
    JSON.stringify({ name: 'Test User', email: 'test@example.com' }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + __ENV.API_TOKEN,
      },
    }
  );

  check(postRes, {
    'POST succeeded': (r) => r.status === 201,
    'user created': (r) => r.json('id') !== undefined,
  });

  sleep(1);
}
```

### Request Chaining

```javascript
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  // Login and extract token
  const loginRes = http.post('https://api.example.com/login',
    JSON.stringify({ email: 'test@example.com', password: 'password123' })
  );

  const token = loginRes.json('access_token');

  // Use token in subsequent requests
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const profileRes = http.get('https://api.example.com/profile', {
    headers: headers,
  });

  check(profileRes, {
    'profile loaded': (r) => r.status === 200,
  });
}
```

### Parameterized Testing

```javascript
import http from 'k6/http';
import { check } from 'k6';

const usernames = ['user1', 'user2', 'user3', 'user4', 'user5'];

export default function () {
  // Use shared array with VU-specific index
  const username = usernames[__VU % usernames.length];

  const res = http.get(`https://api.example.com/users/${username}`);

  check(res, {
    'user found': (r) => r.status === 200,
  });
}
```

---

#### Imported: Browser Testing (k6 Browser)

```javascript
import { browser } from 'k6/browser';

export const options = {
  scenarios: {
    browser_test: {
      executor: 'constant-vus',
      vus: 5,
      duration: '30s',
      browser: {
        type: 'chromium',
      },
    },
  },
};

export default async function () {
  const page = await browser.newPage();

  try {
    await page.goto('https://example.com');

    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Click and interact
    await page.click('button[data-testid="submit"]');

    // Wait for response
    await page.waitForSelector('.success-message');

  } finally {
    await page.close();
  }
}
```

Install browser support: `k6 install chromium`

---

#### Imported: WebSocket Testing

```javascript
import ws from 'k6/ws';
import { check } from 'k6';

export default function () {
  const url = 'wss://echo.websocket.org';

  ws.connect(url, {}, function (socket) {
    socket.on('open', () => {
      console.log('WebSocket connected');
      socket.send('Hello WebSocket');
    });

    socket.on('message', (data) => {
      console.log(`Received: ${data}`);
      check(data, {
        'echo received': (d) => d.includes('Hello'),
      });
    });

    socket.on('close', () => {
      console.log('WebSocket closed');
    });

    // Send periodic messages
    socket.setInterval(function () {
      socket.send('ping');
    }, 1000);

    // Close after 5 seconds
    socket.setTimeout(function () {
      socket.close();
    }, 5000);
  });
}
```

---

#### Imported: Data Handling

### CSV Data Source

```javascript
import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from 'k6/data';

// Option 1: Load once, shared across VUs
const users = new SharedArray('users', function () {
  return open('./users.csv').split('\n').slice(1).map(line => {
    const [email, password] = line.split(',');
    return { email, password };
  });
});

export default function () {
  const user = users[__VU % users.length];

  const res = http.post('https://api.example.com/login',
    JSON.stringify({ email: user.email, password: user.password })
  );

  check(res, { 'login successful': (r) => r.status === 200 });
}
```

### JSON Data Source

```javascript
import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from 'k6/data';

const products = new SharedArray('products', function () {
  return JSON.parse(open('./products.json'));
});

export default function () {
  const product = products[Math.floor(Math.random() * products.length)];

  const res = http.get(`https://api.example.com/products/${product.id}`);

  check(res, { 'product found': (r) => r.status === 200 });
}
```

---

#### Imported: Thresholds & SLA

### Basic Thresholds

```javascript
export const options = {
  vus: 50,
  duration: '2m',

  thresholds: {
    // Response time thresholds
    http_req_duration: ['p(95)<500', 'p(99)<1000'],

    // Error rate threshold
    http_req_failed: ['rate<0.01'],

    // Throughput threshold
    http_reqs: ['rate>100'],
  },
};
```

### Advanced Thresholds

```javascript
export const options = {
  thresholds: {
    // Multiple thresholds on same metric
    http_req_duration: [
      'p(90)<300',   // 90th percentile < 300ms
      'p(95)<500',  // 95th percentile < 500ms
      'p(99)<1000', // 99th percentile < 1s
      'avg<200',    // average < 200ms
    ],

    // Custom metrics
    my_custom_metric: ['avg<100'],

    // Abort on threshold failure
    'http_req_duration{method:GET}': ['p(95)<300'],
  },
};
```

---

#### Imported: Custom Metrics

### Counters

```javascript
import http from 'k6/http';
import { Counter, Trend, Rate, Gauge } from 'k6/metrics';

// Define custom metrics
const myCounter = new Counter('api_calls_total');
const responseTime = new Trend('response_time');
const errorRate = new Rate('error_rate');
const activeUsers = new Gauge('active_users');

export default function () {
  const res = http.get('https://api.example.com/data');

  // Increment counter
  myCounter.add(1);

  // Add to trend (for percentiles)
  responseTime.add(res.timings.duration);

  // Track error rate
  errorRate.add(res.status !== 200);

  // Set gauge value
  activeUsers.add(__VU);

  // Tagged metrics
  const taggedRes = http.get('https://api.example.com/users', {
    tags: { endpoint: 'users', env: 'prod' },
  });
}
```

---

#### Imported: CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/load-test.yml
name: Load Tests

on:
  push:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  load-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup k6
        uses: grafana/k6-action@v0.2.0

      - name: Run load test
        env:
          API_TOKEN: ${{ secrets.API_TOKEN }}
        run: k6 run --out json=results.json load-test.js

      - name: Upload results
        uses: actions/upload-artifact@v4
        with:
          name: k6-results
          path: results.json

      - name: Check thresholds
        if: failure()
        run: |
          echo "Load test failed thresholds!"
          exit 1
```

### GitLab CI

```yaml
# .gitlab-ci.yml
load_test:
  image: grafana/k6:latest
  script:
    - k6 run load-test.js
  artifacts:
    when: always
    paths:
      - results.json
    reports:
      junit: results.xml
```

---

#### Imported: Results Analysis

### Built-in Reports

```bash
# Text summary
k6 run load-test.js

# JSON output for parsing
k6 run --out json=results.json load-test.js

# InfluxDB + Grafana
k6 run --out influxdb=http://localhost:8086/k6 load-test.js

# Prometheus remote write
k6 run --out prometheus=localhost:9090/k6 load-test.js

# Cloud results
k6 run --out cloud load-test.js
```

### Interpreting Results

| Metric | Description | Good | Warning | Bad |
|--------|-------------|------|---------|-----|
| http_req_duration (p95) | 95% response time | < 300ms | 300-500ms | > 500ms |
| http_req_failed | Error rate | < 0.1% | 0.1-1% | > 1% |
| http_reqs | Requests/sec | Meeting target | Near limit | At limit |
| vus | Virtual users | Stable | Gradual increase | Unexpected spike |

---

#### Imported: Common Pitfalls

- **Problem:** Tests pass locally but fail in CI
  **Solution:** Ensure CI environment has similar resources and network conditions

- **Problem:** Inconsistent results between runs
  **Solution:** Check for external dependencies, random data, or test data pollution

- **Problem:** k6 runs out of memory
  **Solution:** Use ` SharedArray` for large data, reduce VUs, or use `--max-memory` flag

- **Problem:** Thresholds too strict
  **Solution:** Start with relaxed thresholds, tighten based on historical data

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
