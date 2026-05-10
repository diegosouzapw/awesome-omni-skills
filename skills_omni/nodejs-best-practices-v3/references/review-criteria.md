# Node.js Review Criteria

Use this checklist when reviewing a Node.js codebase, service, worker, or CLI. Mark each item as **Good**, **Concern**, or **Investigate**.

## 1. Runtime and Release-Line Fit

- Is the target Node major version explicitly defined in repository and CI artifacts?
- Is the project on a currently supported release line appropriate for its risk profile?
- Do local development, CI, containers, and deployment environments agree on the runtime major version?
- Are features used in code compatible with the declared runtime, rather than only with a developer machine?

## 2. Event-Loop Safety

- Does the hot path avoid sync filesystem calls, heavy parsing, compression, crypto, or other blocking work?
- Is CPU-heavy work isolated into workers, queues, subprocesses, or separate services when justified?
- Are stream and backpressure semantics respected for large payloads?
- Is concurrency bounded for fan-out operations, background jobs, and bulk processing?

## 3. Async Correctness

- Do outbound calls have explicit timeout behavior?
- Are retries bounded and idempotency-aware?
- Are promise rejections surfaced and handled at the correct layer?
- Is cancellation or shutdown behavior defined for long-running work?
- Is request-scoped or job-scoped context preserved across async boundaries where needed?

## 4. Platform Fit: Built-in vs Third-Party

- Is a dependency used for something Node already provides adequately?
- Does the framework solve a real complexity problem, or is it only fashion/convenience?
- Could built-in `node:test`, built-in `fetch`, `AsyncLocalStorage`, `diagnostics_channel`, `--env-file`, or permissions reduce package sprawl or operational risk?
- If a third-party package remains justified, is the justification clear: ecosystem compatibility, stronger ergonomics, or missing platform capability?

## 5. Configuration and Startup Discipline

- Are required configuration values validated at startup?
- Is configuration centralized instead of being read ad hoc throughout the codebase?
- Are secrets handled through appropriate environment or platform controls rather than hardcoded or committed values?
- Are unsafe defaults prevented when configuration is missing or malformed?

## 6. Dependency and Supply-Chain Hygiene

- Is a lockfile present and treated as authoritative?
- Does CI use reproducible installation flows rather than floating installs?
- Is package count proportionate to the actual problem being solved?
- Are dependency additions reviewed as architectural choices rather than casual convenience?
- Are vulnerability and package-integrity checks handled with judgment, not blind upgrading?
- Where relevant, is package provenance or publisher trust part of the review?

## 7. Testing Strategy

- Do tests exist at the right level: unit, integration, contract, and failure path?
- Are async failure modes tested, including timeouts, partial failures, and retries?
- Are shutdown, startup, and configuration validation behaviors tested?
- Is the testing approach simple enough to maintain, or has the tooling stack become part of the risk?

## 8. Diagnostics and Observability

- Are logs structured and meaningful under incident conditions?
- Can requests or jobs be correlated across async boundaries?
- Are health, readiness, and error signals clear enough for operations?
- Are diagnostics produced by stable mechanisms rather than scattered `console.log` statements?
- Is there enough information to distinguish application bugs from environment or dependency failures?

## 9. Security and Boundary Control

- Is all external input validated at trust boundaries?
- Are file paths, subprocess inputs, and network destinations constrained appropriately?
- Is secret exposure minimized in logs, errors, and configuration files?
- Are permissions or environment restrictions considered for higher-risk tools or CLIs?
- Is deserialization, template rendering, or command construction handled safely?

## 10. Shutdown and Operational Resilience

- Does the service handle termination signals predictably?
- Are in-flight requests, jobs, or streams drained or failed intentionally during shutdown?
- Are duplicate processing and partial-commit risks understood for retries or restarts?
- Is crash behavior observable and recoverable rather than silent or corrupting?

## High-Weight Findings

Escalate findings quickly when you see:

- event-loop blocking work on request paths
- missing timeouts around outbound network calls
- unbounded concurrency or queue growth
- runtime version drift between CI and production
- dependency sprawl with weak lockfile discipline
- no clear shutdown semantics for servers or workers
- weak trust-boundary validation on external input
