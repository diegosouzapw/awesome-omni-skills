---
name: "bullmq-specialist"
description: "BullMQ Specialist workflow skill. Use this skill when the task needs BullMQ expertise for Redis-backed job queues, background processing, and reliable async execution in Node.js or TypeScript systems, including incident triage, production changes, and architecture review."
version: "0.0.1"
category: "devops"
tags:
  - "bullmq-specialist"
  - "bullmq"
  - "redis"
  - "job-queues"
  - "background-processing"
  - "workers"
  - "nodejs"
  - "typescript"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
license: "Unknown"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "bullmq-specialist"
family_name: "BullMQ Specialist"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/bullmq-specialist"
upstream_skill: "skills/bullmq-specialist"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "bullmq-specialist"
---

# BullMQ Specialist

## Overview

Use this skill when the task involves **BullMQ design, debugging, migration review, production hardening, or incident triage** for Redis-backed background processing in Node.js or TypeScript applications.

This enhanced version preserves the skill identity from the upstream community source, but it is curated for direct operator execution. It focuses on BullMQ-specific reliability and operational behavior rather than generic queue advice.

Primary areas covered:

- queue and worker behavior
- retries, backoff, attempts, and failure handling
- delayed, repeatable, prioritized, deduplicated, and rate-limited jobs
- stalled jobs, lock-renewal failures, and event-loop blocking symptoms
- Flows and parent/child dependency behavior
- Redis constraints that affect queue correctness and availability
- safe production changes and incident response

## When to Use

Activate this skill when the user asks for or clearly implies any of the following:

- BullMQ queue, worker, scheduler, events, or flow behavior
- background jobs not running, running twice, running late, or staying stuck
- retries, backoff, idempotency, dead-letter handling, or poison-job behavior
- Redis-backed job queue design in a Node.js or TypeScript application
- migration to BullMQ from another queue library or from an ad hoc worker system
- production hardening for background processing, concurrency, or throughput issues
- queue observability, stalled jobs, delayed execution drift, or worker crashes

Do **not** use this skill as the primary workflow when the task is mainly about:

- generic Redis administration unrelated to BullMQ semantics
- cron-only scheduling with no BullMQ queues or workers
- message brokers such as Kafka, RabbitMQ, or SQS unless BullMQ integration is the main problem
- application logic bugs that happen to surface inside a job but are not queue-behavior issues

## Workflow

1. **Confirm the BullMQ surface area**
   - Identify whether the task concerns `Queue`, `Worker`, `QueueEvents`, `FlowProducer`, repeatable jobs, delayed jobs, or rate limiting.
   - Record the runtime shape: single process vs multiple workers, local Redis vs managed Redis, and whether queue names differ by environment.
   - Ask for the specific symptom: jobs not enqueued, not picked up, failing, retrying forever, duplicating, stalling, or completing without expected side effects.

2. **Establish the exact failure mode before changing code**
   - Inspect the job lifecycle state involved: waiting, active, delayed, completed, failed, prioritized, or waiting-children.
   - Check whether the problem is producer-side, worker-side, dependency-side, or Redis-side.
   - Verify if the issue is deterministic, load-related, deployment-related, or only present after restarts.

3. **Review core reliability controls**
   - Confirm whether jobs are **idempotent**. If a retry or worker restart replays a job, the side effect must remain safe.
   - Inspect `attempts`, `backoff`, timeouts, concurrency, and any custom failure classification.
   - Check for jobs that are too large, too slow, CPU-bound, or dependent on unstable external APIs.
   - For delayed or repeatable jobs, verify schedule assumptions, timezone expectations, and duplicate registration behavior.

4. **Check worker execution and lock health**
   - Look for event-loop blocking, long synchronous work, heavy CPU tasks, or missing yielding that can prevent lock renewal.
   - Verify whether jobs stall because workers crash, lose Redis connectivity, or exceed practical execution windows.
   - Confirm whether worker concurrency is aligned with downstream capacity instead of merely maximizing throughput.

5. **Inspect Redis and deployment constraints**
   - Confirm that the application uses the intended Redis endpoint and database/namespace separation for the environment.
   - Review connection stability, latency spikes, restarts, eviction policy risks, and any managed Redis limits.
   - Check whether multiple deployments unintentionally process the same queues or register the same repeatable work.

6. **Apply the smallest safe correction**
   - Prefer targeted fixes: stronger idempotency, bounded retries, better backoff, smaller payloads, reduced concurrency, or clearer queue naming.
   - Avoid broad queue purges, mass retries, or schema changes without explicit impact analysis.
   - If changing production behavior, define rollback steps first.

7. **Validate with evidence**
   - Show before/after behavior using job state transitions, logs, metrics, or event traces.
   - Confirm the expected outcome: job processed once, retries bounded, delay honored, stalled count reduced, or flow dependencies resolved.
   - Document operational follow-up: dashboards, alerts, and any runbook changes.

## Examples

### Example 1: Diagnose repeated side effects after retries

```text
Input symptom:
- Payment capture job sometimes charges twice after worker restarts.
- Worker has attempts=5 with exponential backoff.
```

```text
Expected analysis:
- Retries are not the root problem by themselves.
- The job side effect is not idempotent.
- Add an idempotency key or durable "already processed" check around payment capture.
- Keep retries only for transient failures.
```

### Example 2: Diagnose stalled jobs under load

```text
Input symptom:
- Jobs move to active, then stall and retry.
- CPU usage spikes to 100% during image processing.
```

```text
Expected analysis:
- Worker likely blocks the Node.js event loop long enough to miss lock renewal.
- Move CPU-heavy work off the main event loop or reduce per-worker concurrency.
- Re-check whether the job should be split into smaller units.
```

### Example 3: Review a safe production change

```ts
// Before
new Worker('emails', processEmail, { concurrency: 100 })

// After
new Worker('emails', processEmail, {
  concurrency: 20,
  limiter: { max: 200, duration: 1000 },
})
```

```text
Expected result:
- Throughput becomes more predictable.
- Downstream SMTP/API pressure is reduced.
- Fewer retry storms caused by external provider throttling.
```

For a fuller incident walkthrough, open [`examples/worked-example.md`](examples/worked-example.md).

## Best Practices

- **Do** require idempotency for any job that can mutate external state.
- **Do** treat retries as recovery for transient failure, not as a substitute for safe business logic.
- **Do** keep job payloads small and reference durable records when possible.
- **Do** separate queue names by environment and purpose to prevent cross-environment processing.
- **Do** instrument enqueue, start, completion, failure, and retry events so incidents can be reconstructed.
- **Do** bound concurrency according to downstream limits, CPU cost, and Redis stability.
- **Do** review repeatable and delayed jobs carefully during deploys to avoid duplicate scheduling.
- **Do** prefer smaller jobs or offloaded processing for CPU-heavy work that can block lock renewal.
- **Do not** purge queues, remove failed jobs, or mass-retry production workloads without confirming business impact.
- **Do not** rely on in-memory state inside workers for correctness across restarts or scaling events.
- **Do not** treat a successful enqueue as proof that a job will execute correctly; worker health and Redis behavior still matter.
- **Do not** assume duplicates mean BullMQ is broken; first inspect idempotency, deploy overlap, repeat registration, and retry semantics.

## Troubleshooting

**Symptoms:** Jobs are enqueued but never start.

**Solution:** Confirm a worker is attached to the exact queue name and Redis namespace, verify connectivity, and inspect whether jobs are delayed, waiting-children, or rate-limited rather than truly idle.

**Symptoms:** Jobs run more than once or duplicate side effects appear.

**Solution:** Check retry behavior, worker restarts, duplicate scheduling, and producer-side duplicate adds. Then verify job idempotency around the external side effect.

**Symptoms:** Jobs become stalled and then retry.

**Solution:** Inspect event-loop blocking, CPU-heavy handlers, long synchronous code, process crashes, and Redis interruptions that prevent lock renewal. Reduce concurrency or offload heavy work if needed.

**Symptoms:** Delayed or repeatable jobs fire at unexpected times.

**Solution:** Review scheduling assumptions, duplicate registration during deploys, timezone handling outside BullMQ, and whether multiple services register the same repeatable work.

**Symptoms:** Retry storms overload external dependencies.

**Solution:** Reduce concurrency, add or tune backoff, classify non-retryable failures, and add rate limiting or circuit-breaking behavior outside the queue where appropriate.

**Symptoms:** Flow jobs appear blocked even though child jobs finished.

**Solution:** Verify parent/child queue names, dependency graph creation, and whether jobs remain in `waiting-children` because completion or failure handling is not modeled as expected.

**Symptoms:** A change works in staging but fails in production.

**Solution:** Compare Redis topology, worker count, deployment overlap, payload size, throughput, and external dependency limits. Queue correctness problems often emerge only under real concurrency or latency.

## Additional Resources

- [`references/domain-notes.md`](references/domain-notes.md) — Open this for compact BullMQ-specific operational notes on retries, stalled jobs, Flows, and Redis production guardrails.
- [`examples/worked-example.md`](examples/worked-example.md) — Open this for a concrete triage walkthrough with symptom framing, investigation steps, and a safe remediation plan.

## Related Skills

No related local skills were provided in the source context.
