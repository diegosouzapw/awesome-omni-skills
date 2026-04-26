---
name: distributed-tracing-v3
description: "Distributed Tracing workflow skill. Use this skill when the user needs Implement distributed tracing with Jaeger and Tempo for request flow visibility across microservices and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["distributed-tracing-v3", "distributed-tracing", "implement", "distributed", "tracing", "jaeger", "and", "tempo"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-26"
date_updated: "2026-04-26"
---

# Distributed Tracing

## Overview

This public intake copy packages `plugins/antigravity-bundle-observability-monitoring/skills/distributed-tracing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Distributed Tracing Implement distributed tracing with Jaeger and Tempo for request flow visibility across microservices.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Distributed Tracing Concepts, Application Instrumentation, Context Propagation, Sampling Strategies, Trace Analysis.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to distributed tracing
- You need a different domain or tool outside this scope
- Debug latency issues
- Understand service dependencies
- Identify bottlenecks
- Trace error propagation

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. "5775:5775/udp"
6. "6831:6831/udp"
7. "6832:6832/udp"

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Jaeger Setup

### Kubernetes Deployment

```bash
# Deploy Jaeger Operator
kubectl create namespace observability
kubectl create -f https://github.com/jaegertracing/jaeger-operator/releases/download/v1.51.0/jaeger-operator.yaml -n observability

# Deploy Jaeger instance
kubectl apply -f - <<EOF
apiVersion: jaegertracing.io/v1
kind: Jaeger
metadata:
  name: jaeger
  namespace: observability
spec:
  strategy: production
  storage:
    type: elasticsearch
    options:
      es:
        server-urls: http://elasticsearch:9200
  ingress:
    enabled: true
EOF
```

### Docker Compose

```yaml
version: '3.8'
services:
  jaeger:
    image: jaegertracing/all-in-one:latest
    ports:
      - "5775:5775/udp"
      - "6831:6831/udp"
      - "6832:6832/udp"
      - "5778:5778"
      - "16686:16686"  # UI
      - "14268:14268"  # Collector
      - "14250:14250"  # gRPC
      - "9411:9411"    # Zipkin
    environment:
      - COLLECTOR_ZIPKIN_HOST_PORT=:9411
```

**Reference:** See `references/jaeger-setup.md`

#### Imported: Tempo Setup (Grafana)

### Kubernetes Deployment

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: tempo-config
data:
  tempo.yaml: |
    server:
      http_listen_port: 3200

    distributor:
      receivers:
        jaeger:
          protocols:
            thrift_http:
            grpc:
        otlp:
          protocols:
            http:
            grpc:

    storage:
      trace:
        backend: s3
        s3:
          bucket: tempo-traces
          endpoint: s3.amazonaws.com

    querier:
      frontend_worker:
        frontend_address: tempo-query-frontend:9095
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tempo
spec:
  replicas: 1
  template:
    spec:
      containers:
      - name: tempo
        image: grafana/tempo:latest
        args:
          - -config.file=/etc/tempo/tempo.yaml
        volumeMounts:
        - name: config
          mountPath: /etc/tempo
      volumes:
      - name: config
        configMap:
          name: tempo-config
```

**Reference:** See `assets/jaeger-config.yaml.template`

#### Imported: Purpose

Track requests across distributed systems to understand latency, dependencies, and failure points.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @distributed-tracing-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @distributed-tracing-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @distributed-tracing-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @distributed-tracing-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Sample appropriately (1-10% in production)
- Add meaningful tags (userid, requestid)
- Propagate context across all service boundaries
- Log exceptions in spans
- Use consistent naming for operations
- Monitor tracing overhead (<1% CPU impact)
- Set up alerts for trace errors

### Imported Operating Notes

#### Imported: Best Practices

1. **Sample appropriately** (1-10% in production)
2. **Add meaningful tags** (user_id, request_id)
3. **Propagate context** across all service boundaries
4. **Log exceptions** in spans
5. **Use consistent naming** for operations
6. **Monitor tracing overhead** (<1% CPU impact)
7. **Set up alerts** for trace errors
8. **Implement distributed context** (baggage)
9. **Use span events** for important milestones
10. **Document instrumentation** standards

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-observability-monitoring/skills/distributed-tracing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**No traces appearing:**
- Check collector endpoint
- Verify network connectivity
- Check sampling configuration
- Review application logs

**High latency overhead:**
- Reduce sampling rate
- Use batch span processor
- Check exporter configuration

## Related Skills

- `@changelog-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@commit-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@create-pr-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@documentation-templates-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Files

- `references/jaeger-setup.md` - Jaeger installation
- `references/instrumentation.md` - Instrumentation patterns
- `assets/jaeger-config.yaml.template` - Jaeger configuration

#### Imported: Distributed Tracing Concepts

### Trace Structure
```
Trace (Request ID: abc123)
  ↓
Span (frontend) [100ms]
  ↓
Span (api-gateway) [80ms]
  ├→ Span (auth-service) [10ms]
  └→ Span (user-service) [60ms]
      └→ Span (database) [40ms]
```

### Key Components
- **Trace** - End-to-end request journey
- **Span** - Single operation within a trace
- **Context** - Metadata propagated between services
- **Tags** - Key-value pairs for filtering
- **Logs** - Timestamped events within a span

#### Imported: Application Instrumentation

### OpenTelemetry (Recommended)

#### Python (Flask)
```python
from opentelemetry import trace
from opentelemetry.exporter.jaeger.thrift import JaegerExporter
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from flask import Flask

# Initialize tracer
resource = Resource(attributes={SERVICE_NAME: "my-service"})
provider = TracerProvider(resource=resource)
processor = BatchSpanProcessor(JaegerExporter(
    agent_host_name="jaeger",
    agent_port=6831,
))
provider.add_span_processor(processor)
trace.set_tracer_provider(provider)

# Instrument Flask
app = Flask(__name__)
FlaskInstrumentor().instrument_app(app)

@app.route('/api/users')
def get_users():
    tracer = trace.get_tracer(__name__)

    with tracer.start_as_current_span("get_users") as span:
        span.set_attribute("user.count", 100)
        # Business logic
        users = fetch_users_from_db()
        return {"users": users}

def fetch_users_from_db():
    tracer = trace.get_tracer(__name__)

    with tracer.start_as_current_span("database_query") as span:
        span.set_attribute("db.system", "postgresql")
        span.set_attribute("db.statement", "SELECT * FROM users")
        # Database query
        return query_database()
```

#### Node.js (Express)
```javascript
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { BatchSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');

// Initialize tracer
const provider = new NodeTracerProvider({
  resource: { attributes: { 'service.name': 'my-service' } }
});

const exporter = new JaegerExporter({
  endpoint: 'http://jaeger:14268/api/traces'
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register();

// Instrument libraries
registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
  ],
});

const express = require('express');
const app = express();

app.get('/api/users', async (req, res) => {
  const tracer = trace.getTracer('my-service');
  const span = tracer.startSpan('get_users');

  try {
    const users = await fetchUsers();
    span.setAttributes({ 'user.count': users.length });
    res.json({ users });
  } finally {
    span.end();
  }
});
```

#### Go
```go
package main

import (
    "context"
    "go.opentelemetry.io/otel"
    "go.opentelemetry.io/otel/exporters/jaeger"
    "go.opentelemetry.io/otel/sdk/resource"
    sdktrace "go.opentelemetry.io/otel/sdk/trace"
    semconv "go.opentelemetry.io/otel/semconv/v1.4.0"
)

func initTracer() (*sdktrace.TracerProvider, error) {
    exporter, err := jaeger.New(jaeger.WithCollectorEndpoint(
        jaeger.WithEndpoint("http://jaeger:14268/api/traces"),
    ))
    if err != nil {
        return nil, err
    }

    tp := sdktrace.NewTracerProvider(
        sdktrace.WithBatcher(exporter),
        sdktrace.WithResource(resource.NewWithAttributes(
            semconv.SchemaURL,
            semconv.ServiceNameKey.String("my-service"),
        )),
    )

    otel.SetTracerProvider(tp)
    return tp, nil
}

func getUsers(ctx context.Context) ([]User, error) {
    tracer := otel.Tracer("my-service")
    ctx, span := tracer.Start(ctx, "get_users")
    defer span.End()

    span.SetAttributes(attribute.String("user.filter", "active"))

    users, err := fetchUsersFromDB(ctx)
    if err != nil {
        span.RecordError(err)
        return nil, err
    }

    span.SetAttributes(attribute.Int("user.count", len(users)))
    return users, nil
}
```

**Reference:** See `references/instrumentation.md`

#### Imported: Context Propagation

### HTTP Headers
```
traceparent: 00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01
tracestate: congo=t61rcWkgMzE
```

### Propagation in HTTP Requests

#### Python
```python
from opentelemetry.propagate import inject

headers = {}
inject(headers)  # Injects trace context

response = requests.get('http://downstream-service/api', headers=headers)
```

#### Node.js
```javascript
const { propagation } = require('@opentelemetry/api');

const headers = {};
propagation.inject(context.active(), headers);

axios.get('http://downstream-service/api', { headers });
```

#### Imported: Sampling Strategies

### Probabilistic Sampling
```yaml
# Sample 1% of traces
sampler:
  type: probabilistic
  param: 0.01
```

### Rate Limiting Sampling
```yaml
# Sample max 100 traces per second
sampler:
  type: ratelimiting
  param: 100
```

### Adaptive Sampling
```python
from opentelemetry.sdk.trace.sampling import ParentBased, TraceIdRatioBased

# Sample based on trace ID (deterministic)
sampler = ParentBased(root=TraceIdRatioBased(0.01))
```

#### Imported: Trace Analysis

### Finding Slow Requests

**Jaeger Query:**
```
service=my-service
duration > 1s
```

### Finding Errors

**Jaeger Query:**
```
service=my-service
error=true
tags.http.status_code >= 500
```

### Service Dependency Graph

Jaeger automatically generates service dependency graphs showing:
- Service relationships
- Request rates
- Error rates
- Average latencies

#### Imported: Integration with Logging

### Correlated Logs
```python
import logging
from opentelemetry import trace

logger = logging.getLogger(__name__)

def process_request():
    span = trace.get_current_span()
    trace_id = span.get_span_context().trace_id

    logger.info(
        "Processing request",
        extra={"trace_id": format(trace_id, '032x')}
    )
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
