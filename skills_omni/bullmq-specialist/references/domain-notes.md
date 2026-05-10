# BullMQ Domain Notes

Use this file during implementation review or incident triage when you need BullMQ-specific reminders that are too detailed for the main skill.

## Core mental model

- `Queue` adds jobs.
- `Worker` processes jobs.
- `QueueEvents` helps observe state transitions.
- `FlowProducer` coordinates parent/child dependency graphs.
- Redis is part of the correctness surface, not just a transport detail.

## Job lifecycle cues

Common states to reason about:

- **waiting**: job is available but not yet claimed
- **active**: worker is currently processing it
- **delayed**: scheduled for later execution
- **completed**: finished successfully
- **failed**: exhausted or failed processing path
- **waiting-children**: parent job is blocked on child completion

Operational reminder: a job that is "not running" may actually be delayed, dependency-blocked, or rate-limited rather than stuck.

## Retries and idempotency

- Retries are useful for transient failures such as temporary network issues or upstream throttling.
- Retries are dangerous when the job mutates external state without an idempotency guard.
- If the side effect is money movement, email delivery, webhook execution, or record mutation, assume the job can replay.
- Treat `attempts` and `backoff` as part of business safety, not just performance tuning.

Good review questions:

- What happens if the worker crashes after the external side effect but before BullMQ records completion?
- Can the same job run again after restart or retry without causing duplicate harm?
- Are non-retryable errors separated from transient errors?

## Stalled jobs

Stalls often indicate one of these:

- event-loop blocking from CPU-heavy or synchronous work
- process crash or container restart mid-job
- Redis connectivity interruption
- job execution duration or concurrency that exceeds practical lock-renewal conditions

High-value operator check:

- If CPU is saturated and jobs stall under load, the problem is often not "BullMQ retry logic" but worker execution design.

## Concurrency and throughput

Higher concurrency is not always better.

Review against:

- downstream API rate limits
- database connection limits
- CPU cost of each job
- memory growth from large payloads
- Redis latency under production load

A stable queue usually beats a fast queue that triggers retry storms.

## Delayed and repeatable jobs

Watch for these failure patterns:

- duplicate registration after multiple deploys or service instances start
- misunderstanding app-level timezone handling
- assuming delayed execution will be exact under all load conditions
- forgetting environment-specific queue names and accidentally sharing schedules

## Flow-specific notes

For parent/child work:

- verify queue names on every child and parent branch
- inspect whether the parent is intentionally in `waiting-children`
- confirm that failure semantics are modeled the way the application expects
- do not assume a finished child automatically means the parent will progress if the dependency graph was built incorrectly

## Redis production guardrails

- Separate environments clearly by queue naming and Redis configuration.
- Avoid accidental queue sharing across staging and production.
- Review managed Redis limits, failover behavior, and eviction risks.
- Protect Redis access with standard network and authentication controls appropriate to your environment.
- Treat latency spikes and reconnect loops as queue-behavior risks, not just infrastructure noise.

## Evidence to collect during triage

Capture concrete observations before suggesting a fix:

- queue name and environment
- producer and worker deployment versions
- job state distribution
- attempts/backoff/concurrency configuration
- representative failure logs or event traces
- whether duplicates, stalls, or delays correlate with deploys or load spikes

## Source orientation

This note is derived from the research basis for this skill, especially BullMQ official documentation topics covering queues, workers, retries, events, flows, and production guidance, plus Redis and Node.js operational considerations.
