---
name: "bullmq-specialist-v2"
description: "Use when the task needs BullMQ expertise for designing, reviewing, debugging, migrating, or tuning Redis-backed job queues in Node.js/TypeScript applications, including producer and worker configuration, retries and backoff, delayed and repeatable scheduling, deduplication, stalled-job analysis, observability, and safe version-aware changes while preserving upstream workflow and provenance."
version: "0.0.1"
category: "devops"
tags:
  - "bullmq-specialist-v2"
  - "bullmq-specialist"
  - "bullmq"
  - "redis"
  - "job-queues"
  - "background-processing"
  - "nodejs"
  - "typescript"
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
license: "unknown"
date_added: "2026-04-19"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "bullmq-specialist-v2"
family_name: "BullMQ Specialist"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/bullmq-specialist-v2"
upstream_skill: "skills/bullmq-specialist-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "bullmq-specialist-v2"
---

# BullMQ Specialist

## Overview

This skill curates the upstream BullMQ specialist workflow into an operational guide for agents working on Redis-backed background processing in Node.js or TypeScript systems.

Use it when the task involves BullMQ queue design, producer or worker configuration, retry and backoff behavior, delayed or repeatable execution, deduplication, concurrency tuning, stalled-job troubleshooting, queue observability, or version-aware migration decisions.

Preserve upstream workflow intent, copied support files, and provenance. Improve implementation quality without silently changing queue semantics, retry guarantees, or delivery assumptions.

## When to Use

Activate this skill when one or more of these are true:

- The user mentions BullMQ, Redis-backed queues, workers, queue events, delayed jobs, or repeatable jobs.
- The task requires reviewing or changing producer or worker code that enqueues or processes background jobs.
- The task involves migration across BullMQ versions, especially scheduler-related behavior.
- The user reports duplicate jobs, stuck jobs, stalled jobs, delayed execution drift, retry storms, or missing queue metrics.
- The task requires operational guidance for graceful shutdown, idempotency, retention, or observability.

Do not use this skill as the primary skill when the problem is mainly:

- General Redis administration unrelated to BullMQ behavior.
- Generic Node.js performance tuning with no queue-specific scope.
- Product-level async workflow design that does not yet depend on BullMQ.

## Output Format

When you use this skill, structure the response as an operator-ready BullMQ assessment and action plan. Unless the user explicitly asks for another format, produce these sections in order:

1. **Task Summary** — one to three bullets stating the queue problem, desired outcome, and BullMQ surface involved.
2. **Current State** — concrete findings from code, config, logs, or user description.
3. **BullMQ Risk Check** — version-sensitive or safety-critical concerns such as scheduler changes, retry/idempotency gaps, blocking connection misuse, or retention side effects.
4. **Recommended Changes** — exact code/config/operational actions, ordered from safest to most impactful.
5. **Validation Plan** — how to verify behavior with tests, logs, events, or queue inspection.
6. **Expected Outcome** — specific before/after behavior, including failure-mode impact if relevant.

If proposing code changes, include:

- affected files or components
- whether the change is producer-side, worker-side, scheduler-side, or operational
- rollback notes for any risky queue-semantics change

If the task is a troubleshooting task, also include:

- **Likely Root Cause**
- **Evidence Needed**
- **Fastest Safe Check**

Keep outputs concrete. Prefer exact BullMQ terms such as `Worker`, `Queue`, `QueueEvents`, `jobId`, deduplication, delayed jobs, repeatable jobs, and Job Schedulers rather than generic queue wording.

## Workflow

1. **Identify the BullMQ surface area**
   - Determine whether the task concerns producers, workers, queue event listeners, scheduling, retention, retries, or observability.
   - Confirm the BullMQ major version before recommending scheduler or repeatability changes.

2. **Map current behavior to implementation details**
   - Inspect queue creation, worker construction, Redis connection setup, job options, retry settings, and shutdown handling.
   - Look for `attempts`, `backoff`, `removeOnComplete`, `removeOnFail`, `jobId`, deduplication options, concurrency, and event subscriptions.

3. **Check version-sensitive decisions first**
   - Avoid reviving deprecated or obsolete patterns.
   - For BullMQ 2+, do not assume `QueueScheduler` is required for delayed-job support in the same way as older flows.
   - For BullMQ 5.16.0+, treat legacy repeatable-job APIs as migration-sensitive and verify whether Job Schedulers are the better fit.
   - Use the comparison notes in [references/domain-notes.md](references/domain-notes.md) when the version boundary matters.

4. **Evaluate delivery safety and correctness**
   - Check idempotency expectations. Retries, worker restarts, or stalled-job recovery can cause the same logical work to run more than once.
   - Distinguish deduplication from `jobId` uniqueness; they solve related but different problems.
   - Verify retention settings because aggressive auto-removal can interfere with duplicate-prevention assumptions and postmortem inspection.

5. **Review connection and worker behavior**
   - Separate producer expectations from worker expectations.
   - Confirm worker connections can block correctly and are not configured like request-response producers.
   - Check graceful shutdown behavior so active jobs finish or fail in a controlled way during deploys.

6. **Inspect observability and operational signals**
   - Verify the system emits enough queue-level evidence to debug failures: worker logs, queue events, failure reasons, retry counts, and latency or throughput signals.
   - Add instrumentation only where it improves diagnosis without inventing unsupported platform features.

7. **Recommend the smallest safe change set**
   - Prefer narrow fixes over queue-wide redesign.
   - Preserve upstream intent and external interfaces unless the user explicitly asks for a behavioral change.
   - When changing scheduling, retries, or deduplication, explain expected semantic impact before implementation.

8. **Define validation before handoff**
   - Specify how to prove the change worked: enqueue a representative job, observe state transitions, verify retry behavior, confirm no unexpected duplicates, and review logs or events.
   - Use the concrete pattern in [examples/worked-example.md](examples/worked-example.md) when the task needs a before/after troubleshooting model.

## Examples

### Example 1: Troubleshoot duplicate email sends

```text
Input problem:
"Our BullMQ worker sometimes sends the same welcome email twice after transient Redis or worker failures."

Expected specialist response shape:
- Task Summary: duplicate side effect during worker retry/recovery path
- Current State: worker has retries enabled; email send is not idempotent; no deduplication or durable business key check
- BullMQ Risk Check: retries and stalled-job recovery can re-run work; `jobId` alone may not protect against repeated side effects over time
- Recommended Changes:
  1. Make the email-send operation idempotent using an application business key
  2. Use stable enqueue identity where appropriate
  3. Keep retry/backoff but prevent duplicate side effects at the handler boundary
  4. Review retention and duplicate-suppression assumptions
- Validation Plan: enqueue same logical event twice, simulate worker retry, confirm only one email is sent
- Expected Outcome: job may retry, but customer-visible side effect happens once
```

### Example 2: Version-aware scheduling review

```text
Input problem:
"We are upgrading BullMQ and need to review delayed and repeatable jobs."

Expected specialist response shape:
- Task Summary: audit scheduling behavior across version boundary
- Current State: codebase uses delayed jobs plus legacy repeatable-job APIs
- BullMQ Risk Check: scheduler guidance changed across versions; repeatable APIs may be legacy depending on version
- Recommended Changes:
  1. Confirm exact BullMQ version in lockfile/package manifest
  2. Inventory queues using delayed or repeatable scheduling
  3. Replace or retain patterns based on current official guidance
  4. Regression-test cadence, duplicate creation, and worker pickup
- Validation Plan: verify next-run creation, processing cadence, and absence of missed or duplicated scheduled work
- Expected Outcome: scheduling behavior remains correct after upgrade without preserving obsolete patterns by accident
```

For a fuller worked example with findings, recommendations, and validation, open [examples/worked-example.md](examples/worked-example.md).

## Best Practices

Do:

- Confirm the BullMQ version before giving scheduler or repeatability guidance.
- Treat worker handlers as idempotent whenever retries, restarts, or stalled-job recovery are possible.
- Separate producer connection expectations from worker connection expectations.
- Keep retry counts and backoff intentional; retries should reduce transient failure impact, not amplify systemic failure.
- Use queue events, worker logs, and failure reasons to validate real behavior.
- Keep queue changes narrow and reversible when operating in production.

Do not:

- Assume `jobId` and deduplication are interchangeable.
- Remove failed/completed jobs so aggressively that you lose needed debugging or duplicate-prevention context.
- Recommend scheduler-related patterns without checking whether they are version-appropriate.
- Treat missing observability as a reason to guess; ask for code, logs, and queue configuration.
- Change retries, concurrency, or retention globally when the issue is isolated to one queue or one job family.

## Troubleshooting

**Symptoms:** Delayed jobs are not running when expected, or cadence drifts under load.

**Solution:** Verify BullMQ version, worker availability, and whether the implementation relies on outdated scheduler assumptions. Review delayed versus repeatable behavior and compare current code against the version notes in [references/domain-notes.md](references/domain-notes.md).

**Symptoms:** The same logical work happens twice after failure or restart.

**Solution:** Check for retry execution, stalled-job recovery, or re-enqueue behavior. Inspect whether the handler is truly idempotent and whether the system confuses `jobId` uniqueness with durable side-effect protection.

**Symptoms:** Jobs remain stuck, reprocess unexpectedly, or appear stalled.

**Solution:** Inspect worker health, long-running processor behavior, and stalled-job conditions. Confirm the worker is operating normally, not blocked by process issues, and able to renew work as expected.

**Symptoms:** Duplicate-prevention worked earlier but later identical jobs were accepted.

**Solution:** Review auto-removal settings. If older completed or failed jobs were removed, assumptions based on historical job presence may no longer hold. Re-check whether deduplication or `jobId` usage matches the intended time window.

**Symptoms:** Producers intermittently fail or hang while workers seem healthy.

**Solution:** Separate connection-role expectations. Producer-facing request paths and background workers tolerate different Redis retry semantics; verify the connection configuration is appropriate for each role.

## Additional Resources

- [references/domain-notes.md](references/domain-notes.md) — Open this for version boundaries, connection-role guidance, retry/idempotency checks, deduplication versus `jobId`, retention caveats, and observability notes that would be too dense to inline here.
- [examples/worked-example.md](examples/worked-example.md) — Open this when you need a concrete troubleshooting walkthrough with input symptoms, analysis, recommended changes, and validation expectations.

## Related Skills

No related local skills were provided in the source context.
