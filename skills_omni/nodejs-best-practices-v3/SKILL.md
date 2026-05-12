---
name: "nodejs-best-practices-v3"
description: "Node.js Best Practices workflow skill. Use this skill when the user needs Node.js development principles and decision-making. Framework selection, async patterns, security, and architecture. Teaches thinking, not copying and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "nodejs-best-practices-v3"
  - "nodejs-best-practices"
  - "node"
  - "node.js"
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
date_updated: "2026-05-12"
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

This skill preserves the upstream intent: teach operators how to make sound Node.js decisions instead of copying fashionable patterns.

In this curated form, the skill is optimized for **analysis and review** of Node.js codebases, services, workers, CLIs, and internal tooling. It is especially useful when you need to assess:

- runtime and release-line fit
- event-loop safety and async correctness
- framework necessity versus built-in platform features
- dependency and supply-chain discipline
- testing, diagnostics, and observability maturity
- security posture and operational readiness

This is a **decision-making skill**, not a code-generation template. Use it to produce a justified review, recommendation, or architecture direction.

## When to Use

Use this skill when:

- a team asks whether a Node.js service is production-ready
- you need to review architecture, framework choice, or async patterns
- a repository shows latency spikes, blocking work, or unstable concurrency behavior
- you need to judge whether built-in Node features can replace unnecessary dependencies
- you need a structured review of security, testing, diagnostics, or release hygiene
- the user wants best practices with rationale, trade-offs, and review criteria

Do **not** use this skill as the primary workflow when:

- the task is language-agnostic and not meaningfully Node-specific
- the user only wants implementation code with no review or architecture component
- the dominant problem is infrastructure-only and not connected to Node runtime behavior
- the codebase is browser-only JavaScript with no Node runtime concerns

## Workflow

1. **Establish the review target**
   - Identify whether the subject is an API server, CLI, worker, monolith, library, or mixed repository.
   - Record the Node version policy from `.nvmrc`, `.node-version`, `package.json`, CI config, Dockerfile, or deployment manifests.
   - Confirm whether the question is about architecture, correctness, performance, security, or release readiness.

2. **Map runtime responsibilities**
   - Separate I/O-bound work from CPU-bound work.
   - Note where the process handles HTTP, queues, cron jobs, file I/O, streams, child processes, or crypto/compression.
   - Flag any work that appears likely to block the event loop.

3. **Review platform-fit decisions**
   - Check whether the codebase uses built-in capabilities appropriately before adding dependencies.
   - Look for valid use of modern Node facilities such as `node:test`, `AsyncLocalStorage`, `diagnostics_channel`, built-in `fetch`, `--env-file`, and permissions where relevant.
   - Challenge framework or library choices that add abstraction without solving a concrete problem.

4. **Assess correctness and maintainability**
   - Review async boundaries, error propagation, cancellation, shutdown behavior, and timeouts.
   - Check whether configuration is explicit, validated, and environment-specific.
   - Verify that modules, services, and adapters are separated cleanly enough to test and replace.

5. **Assess dependency and supply-chain discipline**
   - Review lockfile presence, install reproducibility, dependency sprawl, and package freshness.
   - Prefer `npm ci`-style reproducible installs in CI over drift-prone install flows.
   - Check whether dependency risk is controlled with minimal package count, provenance-aware publishing or consumption where applicable, and actionable audit handling rather than blind upgrades.

6. **Assess testing and diagnostics**
   - Check whether tests cover behavior at the right level: unit, integration, contract, and failure-path tests.
   - Look for observability support: structured logs, request or job correlation, health signals, metrics hooks, and useful crash diagnostics.
   - Review whether production debugging relies on stable mechanisms instead of ad hoc `console.log` sprawl.

7. **Assess operational safety**
   - Review input validation, secret handling, permissions, file-system scope, subprocess usage, and network exposure.
   - Confirm graceful shutdown, backpressure handling, and retry logic do not create duplicate work or data corruption.
   - Check whether defaults are safe under failure, not only under happy-path traffic.

8. **Produce a decision-oriented output**
   - Summarize findings as **keep**, **change**, or **investigate**.
   - Prioritize by impact: correctness and security first, then operability, then maintainability.
   - Recommend the smallest safe change that materially improves the system.

## Review Output Format

Use this structure when presenting results:

- **Context:** what the service does and what Node is responsible for
- **Strengths:** practices worth preserving
- **Critical risks:** issues that can cause outages, corruption, or security exposure
- **Important improvements:** changes that improve resilience or clarity
- **Optional refinements:** nice-to-have improvements with lower urgency
- **Decision summary:** whether the current approach is acceptable, conditionally acceptable, or should be changed

## Examples

### Example 1: Short review summary

```text
Target: Express-based internal API on Node 22
Decision: Conditionally acceptable

Strengths:
- Uses LTS runtime in CI and production
- Has a lockfile and reproducible CI install
- Uses structured logging and graceful shutdown hooks

Critical risks:
- Image processing runs inline on request path and blocks the event loop
- Request timeouts are missing on outbound fetch calls
- Input validation is inconsistent across routes

Important improvements:
- Move CPU-heavy image work to a worker or separate service
- Wrap outbound I/O with explicit timeout and retry policy
- Centralize schema validation at the edge
```

### Example 2: Framework challenge

```text
Question: Should this small JSON API keep a large framework stack?

Observed facts:
- 12 routes, minimal middleware, no SSR, no plugin ecosystem dependency
- Most code is validation, auth checks, and data access
- Team cites convenience, not a hard technical requirement

Reasoned recommendation:
- Re-evaluate framework weight versus built-in HTTP support or a lighter server layer
- Keep the current framework only if it provides proven operational value such as standardized plugins, hooks, or team-wide conventions
- Do not rewrite purely for fashion; rewrite only if complexity reduction is measurable
```

For deeper worked examples, open:

- `examples/review-example.md`
- `examples/decision-scenarios.md`

## Best Practices

### Do

- Prefer current supported Node release lines and document the target runtime explicitly.
- Distinguish CPU-bound work from I/O-bound work before discussing performance.
- Use built-in platform features when they meet the requirement cleanly.
- Require explicit timeouts, cancellation strategy, and error handling for outbound I/O.
- Keep request handlers thin; move business rules into testable modules.
- Preserve correlation context across async boundaries when tracing request or job flow matters.
- Use reproducible installs and review dependency additions as architecture decisions, not convenience-only changes.
- Treat observability as part of correctness: if failures cannot be diagnosed, the system is not truly production-ready.

### Do Not

- Recommend a framework because it is popular without tying it to delivery or operational benefit.
- Assume async code is safe just because it uses `await`.
- Put compression, crypto, large JSON transforms, image manipulation, or heavy parsing directly on hot request paths without justification.
- Accept unbounded concurrency, unbounded queues, or unbounded payload handling.
- Add packages for features already provided adequately by Node unless the package clearly reduces risk or complexity.
- Treat `npm audit` output as a mechanical upgrade queue; evaluate exploitability, reachability, and breakage risk.
- Rely on scattered environment variables with no validation or startup checks.

## Troubleshooting

**Symptoms:** Latency spikes under moderate traffic, CPU rises sharply, and unrelated requests slow down.

**Solution:** Review for event-loop blocking work such as sync filesystem calls, large JSON parsing/stringifying, crypto/compression on the request path, regex backtracking, or CPU-heavy transforms. Move CPU-bound work to workers, queues, or another service boundary where justified.

**Symptoms:** The service appears "async" but still hangs or times out unpredictably.

**Solution:** Inspect outbound I/O for missing timeouts, retries without bounds, unresolved promises, and connection-pool exhaustion. Verify that every network call has explicit timeout behavior and failure handling.

**Symptoms:** Logs are present, but incidents are still hard to trace across requests or jobs.

**Solution:** Check whether correlation IDs or async context propagation are preserved consistently. Prefer structured logs and stable context propagation over ad hoc string logging.

**Symptoms:** CI passes, but production fails after dependency updates or environment changes.

**Solution:** Check for non-reproducible installs, weak lockfile discipline, runtime version drift, and configuration assumptions hidden in shell environments. Confirm that CI and production use the same Node major line and installation strategy.

**Symptoms:** Memory growth appears gradual and hard to reproduce.

**Solution:** Review long-lived caches, event listeners, stream lifecycle handling, and request-scoped state retained beyond completion. Check whether backpressure is ignored or whether large objects remain referenced in closures.

For a faster diagnosis matrix, open `references/troubleshooting-matrix.md`.

## Additional Resources

- `references/review-criteria.md` — Open this when you need a compact but concrete Node.js review checklist with decision criteria.
- `references/troubleshooting-matrix.md` — Open this when symptoms are operational and you need likely causes plus targeted review checks.
- `examples/review-example.md` — Open this when you need a worked example of a review with findings and prioritization.
- `examples/decision-scenarios.md` — Open this when the user is asking "should we use X?" and you need scenario-based decisions.

## Scope Notes

This skill favors **judgment and review quality** over style debates. The best output is usually not "rewrite everything," but "keep what is working, change the parts that create measurable risk, and justify each recommendation in Node-specific terms."
