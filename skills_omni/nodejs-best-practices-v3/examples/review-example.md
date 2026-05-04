# Worked Review Example: Node.js API Service

This example shows how to turn raw observations into a decision-oriented review report.

## Scenario

Repository: `orders-api`

Stated purpose:

- internal HTTP API
- runs in containers on Kubernetes
- handles order creation and status lookup
- Node 22 runtime

Observed traits:

- `package.json` has no `type` field, but the repo mixes `require(...)` and `import ... from ...`
- request ID is written to a global `currentRequest` object and reused in logging helpers
- one route performs synchronous CSV parsing for uploaded files
- CI uses `npm install`
- lockfile is committed
- Dockerfile builds and runs in a single stage as root
- secrets are passed through `ARG` during image build for private package access
- app logs are JSON-like strings but not valid JSON and do not always include request IDs
- shutdown handler calls `process.exit(0)` immediately on SIGTERM

## Raw observations to preserve

```text
- Mixed module syntax without explicit module policy.
- Global mutable state for request context.
- CPU-heavy sync parsing on request path.
- CI install path is not deterministic enough for release confidence.
- Docker image runs as root and build secrets may leak into layer history.
- Logging and shutdown behavior are weak for production incidents.
```

## Review output

### Block release

1. **Request-scoped data stored in a global mutable object**
   - **Evidence:** logging helper reads `currentRequest.id`; request middleware mutates it on every request.
   - **Risk:** concurrent requests can overwrite context, producing incorrect audit trails and broken correlation during incidents.
   - **Remediation:** replace the global with `AsyncLocalStorage` or pass context explicitly through request-bound interfaces.

2. **Container build and runtime posture are unsafe**
   - **Evidence:** single-stage Dockerfile, runtime user is root, private access token provided through build `ARG`.
   - **Risk:** larger attack surface, privilege exposure, and possible secret leakage in image history or build logs.
   - **Remediation:** use a multi-stage build, switch to a non-root runtime user, and move package access secrets to a secret-safe build mechanism.

3. **Shutdown handling is likely to drop requests**
   - **Evidence:** SIGTERM handler calls `process.exit(0)` immediately.
   - **Risk:** in-flight HTTP work can be cut off during rollout or scaling events.
   - **Remediation:** stop accepting new work, drain connections, close dependencies, then exit when shutdown completes or times out.

### Needs change soon

4. **Mixed ESM and CommonJS without explicit boundary policy**
   - **Evidence:** repo uses both `require` and `import`, but `package.json` declares no module intent.
   - **Risk:** future tooling and runtime behavior become harder to reason about; migration costs increase.
   - **Remediation:** document the intended module system and migrate toward a single clear model.

5. **Synchronous CSV parsing on a request path**
   - **Evidence:** upload route parses large files in-process before responding.
   - **Risk:** event-loop blocking can degrade latency for unrelated requests.
   - **Remediation:** move heavy parsing off the hot path, stream it, or isolate it in a worker or separate processing flow.

6. **CI uses `npm install` instead of `npm ci`**
   - **Evidence:** workflow step is `npm install --no-audit`.
   - **Risk:** build reproducibility is weaker and release artifacts may drift from the committed lockfile.
   - **Remediation:** use `npm ci` in CI and release pipelines.

7. **Logs are inconsistent for production diagnostics**
   - **Evidence:** some lines are pseudo-JSON strings, some are plain text, request IDs are missing from several paths.
   - **Risk:** incident filtering and correlation become slower and less reliable.
   - **Remediation:** standardize structured logging and ensure request ID inclusion on all request-bound logs.

## Acceptable items

- Lockfile is committed.
- Node 22 runtime target is recent enough to support modern core capabilities.
- The service appears small enough that the built-in test runner may be sufficient unless missing features are demonstrated.

## Decision summary

```text
Decision: Do not approve for production release in current form.
Primary blockers: request-context safety, container/security posture, and unsafe shutdown behavior.
Fastest credible next steps:
1. Replace global request state handling.
2. Rework Docker build/runtime security.
3. Implement graceful shutdown.
4. Switch CI to npm ci.
```

## Why this example matters

This is a good Node.js review example because the findings are not style complaints. Each item ties directly to concurrency safety, reproducibility, security, or operability.
