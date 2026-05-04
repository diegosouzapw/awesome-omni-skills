---
name: "nodejs-best-practices-v3"
description: "Node.js Best Practices workflow skill. Use this skill when the user needs Node.js development principles and decision-making. Framework selection, async patterns, security, and architecture. Teaches thinking, not copying and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "nodejs-best-practices-v3"
  - "nodejs-best-practices"
  - "node"
  - "development"
  - "architecture"
  - "async"
  - "security"
  - "review"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "SEE LICENSE IN UPSTREAM SOURCE"
date_added: "2026-04-27"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "nodejs-best-practices-v3"
family_name: "Node.js Best Practices"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/nodejs-best-practices-v3"
upstream_skill: "skills/nodejs-best-practices-v3"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "nodejs-best-practices-v3"
---

# Node.js Best Practices

## Overview

This skill preserves the upstream intent: teach operators how to make good Node.js decisions instead of memorizing snippets or blindly following framework trends.

In this curated form, the skill is strongest as a **review and decision workflow** for modern Node.js services, CLIs, and workers. Use it to judge whether a codebase is safe, maintainable, diagnosable, and operationally predictable.

Focus the review on:

- package and module boundaries
- async correctness and request-context propagation
- dependency reproducibility and supply-chain hygiene
- runtime security and secret handling
- diagnostics readiness for production incidents
- container packaging and shutdown behavior

## When to Use

Use this skill when you need to:

- review a Node.js repository before merge, release, or migration
- compare architectural options such as framework choice, worker threads, or built-in vs third-party tooling
- assess whether a service is production-ready
- explain why a Node.js implementation is risky even if tests currently pass
- turn broad “best practices” requests into a concrete review report

Do **not** use this skill as a generic JavaScript style guide or as a substitute for framework-specific documentation.

## Workflow

1. **Set the review boundary**
   - Identify the runtime target: API server, worker, CLI, cron, or library.
   - Confirm Node version policy from `package.json`, container image, CI config, or docs.
   - Decide whether the task is architecture review, pre-release review, incident hardening, or migration review.

2. **Inspect package and module structure**
   - Check whether `package.json` declares an intentional module mode such as `"type": "module"` or a deliberate CommonJS choice.
   - Review `exports` usage for libraries and internal boundary clarity for applications.
   - Flag deep imports, hidden entrypoints, mixed module systems without a migration reason, and brittle path aliases.

3. **Review async behavior and concurrency choices**
   - Trace request flow through `async`/`await`, timers, streams, queues, and event handlers.
   - Look for unhandled promise rejections, fire-and-forget work, and error swallowing.
   - Verify whether request-scoped state uses `AsyncLocalStorage` when correlation IDs, tracing context, or tenant context must survive async hops.
   - If CPU-heavy work exists, verify whether it is isolated with worker threads or external processing instead of blocking the event loop.

4. **Assess build, test, and dependency reproducibility**
   - Check for deterministic installs with lockfiles and `npm ci` in CI.
   - Review whether dependency updates are constrained, observable, and tested.
   - Check whether the built-in test runner is sufficient or whether heavier test tooling is justified by requirements.
   - Prefer SBOM generation and dependency visibility over ad hoc package sprawl.

5. **Assess runtime security and operational safety**
   - Review secret handling, input validation, deserialization, child process usage, and filesystem/network access.
   - Check whether the Node Permission Model is relevant for the runtime and whether permission usage is explicit.
   - For containers, verify non-root execution, multi-stage builds, signal handling, and secret-safe image construction.
   - Ensure debug endpoints, stack traces, and reports do not expose sensitive data by default.

6. **Assess diagnostics and failure handling**
   - Verify structured logging, correlation IDs, health endpoints, and startup failure visibility.
   - Check readiness for production investigation using process reports, event-loop metrics, and clear shutdown hooks.
   - Review whether crashes are fail-fast and observable instead of partially swallowed.

7. **Produce a decision-oriented report**
   - Separate findings into `keep`, `change soon`, and `block release`.
   - For each finding, state: evidence, risk, recommended action, and what would count as acceptable remediation.
   - Avoid taste-based comments unless they clearly affect reliability, security, or maintainability.

For a compact scoring rubric, open [`references/review-criteria.md`](references/review-criteria.md).

## Review Priorities

### 1. Module and package boundaries

Prefer explicit boundaries over convenience.

Good signals:

- deliberate module mode selection
- stable entrypoints
- limited reliance on side effects at import time
- libraries exposing supported paths via `exports`
- applications organized by domain boundaries instead of large utility dumps

Risk signals:

- mixed ESM/CommonJS without migration notes
- deep imports into private files
- circular dependencies hidden by runtime behavior
- global mutable singletons used for request-scoped data

### 2. Async correctness

Prefer code that makes failure and sequencing obvious.

Good signals:

- `await` used for meaningful sequencing
- explicit timeout, retry, and cancellation behavior where relevant
- errors rethrown or mapped with context
- request context propagated intentionally

Risk signals:

- orphaned promises
- `Array.prototype.forEach(async ...)` for ordered or failure-sensitive work
- broad `try/catch` that logs and continues without policy
- CPU-heavy parsing or crypto in the main event loop under request load

### 3. Dependency and build hygiene

Prefer boring, reproducible builds.

Good signals:

- lockfile committed
- `npm ci` in CI or release automation
- dependency additions justified by capability gaps
- upgrade cadence visible in automation or policy

Risk signals:

- deleting the lockfile during builds
- `npm install` in CI when deterministic installs are expected
- unnecessary framework or utility overlap
- no inventory of transitive risk for production systems

### 4. Security posture

Prefer explicit restriction over ambient trust.

Good signals:

- secrets injected at runtime, not baked into images
- validated external input
- narrow process spawning
- container runs as non-root
- permission model evaluated for the threat model

Risk signals:

- shell interpolation with user input
- secrets in Docker layers or source control
- broad filesystem access assumptions
- debug behavior exposing internals in production

### 5. Diagnostics and production readiness

Prefer systems that are easy to investigate under stress.

Good signals:

- structured logs with request IDs
- health and readiness behavior aligned to actual dependencies
- graceful shutdown for HTTP servers, queues, and workers
- event-loop lag or utilization visibility for latency-sensitive systems

Risk signals:

- logs without correlation context
- SIGTERM ignored in containers
- no crash artifacts or incident diagnostics path
- health checks that always return success regardless of dependency failure

## Examples

### Example 1: Short review finding

**Input**

```text
Service: payments-api
Observed: Express app stores request metadata on a mutable global object, uses npm install in CI, and Dockerfile runs as root.
```

**Expected review output**

```text
Block release:
1. Request-scoped state is stored globally. Concurrent requests can overwrite correlation or tenant context. Use AsyncLocalStorage or explicit parameter passing.
2. CI uses npm install instead of npm ci. Reproducibility is weaker and lockfile drift can change shipped dependencies.
3. Container runs as root. Rebuild with a non-root runtime stage and verify writable paths explicitly.

Change soon:
4. No evidence of graceful SIGTERM shutdown for HTTP connections.
```

### Example 2: Architecture decision note

**Input**

```text
Question: Should this internal API adopt a heavy test stack immediately?
Context: Node 22 service, mostly unit and integration tests, no browser automation, no custom mocking constraints.
```

**Expected review output**

```text
Recommendation: Start with the built-in Node test runner unless required capabilities are missing.
Reasoning: It reduces dependency surface and is often sufficient for server-side unit and integration coverage.
Upgrade trigger: Introduce a heavier framework only when you need capabilities the built-in runner does not provide cleanly in this codebase.
```

For a longer worked example with findings and remediation, open [`examples/review-example.md`](examples/review-example.md).

## Best Practices

Do:

- define the runtime and operational context before giving advice
- prefer explicit module boundaries and package entrypoints
- use `AsyncLocalStorage` only when request context is truly needed, and review where context may be lost
- keep installs deterministic with lockfiles and `npm ci`
- review container shutdown, signal handling, and user privileges as part of Node review, not as a separate concern
- distinguish architecture preferences from release-blocking risks
- recommend the smallest toolchain that satisfies the requirement

Do not:

- recommend frameworks by popularity alone
- treat passing tests as proof of async safety under concurrency
- add packages when the Node standard library or built-in runner already covers the need
- ignore operational diagnostics until after an incident
- approve root-running containers, secret-baking builds, or broad shell execution patterns without strong justification
- mix ESM and CommonJS casually in new code

## Troubleshooting

**Symptoms:** Request IDs appear in some logs but disappear after queue hops or background callbacks.

**Solution:** Review context propagation boundaries. Check whether request state relies on globals or closure tricks. Use `AsyncLocalStorage` or explicit context passing where correlation must survive async transitions.

**Symptoms:** The service behaves differently between local installs and CI or between two developer machines.

**Solution:** Check whether CI uses `npm ci`, whether the lockfile is committed, and whether postinstall behavior changes the dependency graph. Reproduce from a clean install instead of an incrementally mutated `node_modules` tree.

**Symptoms:** CPU spikes cause latency collapse even though the code is fully `async`/`await`.

**Solution:** Async syntax does not prevent event-loop blocking. Inspect for CPU-heavy JSON work, compression, crypto, image processing, or synchronous filesystem calls. Move suitable work to worker threads or external jobs.

**Symptoms:** Containerized shutdown causes dropped requests or duplicate job processing.

**Solution:** Review SIGTERM handling, connection draining, queue consumer shutdown, and readiness transitions. Node process exit should be coordinated with the orchestrator instead of relying on abrupt termination.

**Symptoms:** A security review flags excessive filesystem or process access but the team argues that the app “needs Node defaults.”

**Solution:** Reassess the threat model. Identify which reads, writes, child processes, or network targets are truly required. Evaluate whether the Permission Model or narrower runtime/container boundaries reduce risk without breaking the app.

## Additional Resources

- [`references/review-criteria.md`](references/review-criteria.md) — open this when you need a compact, repeatable rubric for review findings and release readiness.
- [`examples/review-example.md`](examples/review-example.md) — open this when you need a worked example of how to turn observations into a decision-oriented review report.

## Related Skills

No local related skills were provided in the source context. Keep framework-specific follow-up work in the target repository’s own documentation or dedicated skills.
