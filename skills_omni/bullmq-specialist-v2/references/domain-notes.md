# BullMQ Domain Notes

Use this reference when the task needs version-aware or operationally precise BullMQ guidance that would be too dense to keep in the main skill.

## Version-sensitive decision table

| Topic | Current guidance | Why it matters |
| --- | --- | --- |
| `QueueScheduler` | Do not assume it is required in BullMQ 2+ the same way it was in older guidance. Verify actual version and feature path before adding or restoring it. | Many migration mistakes come from reviving older scheduler patterns unnecessarily. |
| Repeatable jobs | In newer BullMQ guidance, legacy repeatable-job APIs are migration-sensitive. Check whether Job Schedulers are the preferred model for the installed version. | Prevents reinforcing APIs that may be considered legacy for the target version. |
| Delayed execution | Validate delayed-job behavior against current worker and scheduling setup instead of copying older snippets. | Delayed-job failures are often version or architecture misunderstandings rather than a single code bug. |

## Connection-role matrix

| Role | Connection concern | Operator check |
| --- | --- | --- |
| Producer / request-path enqueue | Usually should fail predictably and not hang user-facing traffic indefinitely. | Inspect shared Redis client settings and request-time behavior under Redis degradation. |
| Worker | Uses blocking behavior and should be configured with worker-appropriate connection expectations. | Verify worker connection configuration is not copied from request-path producer settings without review. |
| Queue events / listeners | Event visibility is useful for diagnosis but should not be mistaken for the source of truth about handler side effects. | Confirm event consumers help observability without being the only business guarantee. |

Official docs: https://docs.bullmq.io/guide/connections

## Retry and idempotency checklist

Use this before approving retry-related changes:

- Does the handler produce an external side effect such as email, billing, webhook calls, or database mutation?
- If the job retries, restarts mid-flight, or is recovered after a stall, can the same side effect happen twice?
- Is there a business-level idempotency key separate from BullMQ internals?
- Are `attempts` and `backoff` chosen intentionally for the real failure mode?
- Is the failure transient, or are retries likely to amplify a bad deployment or broken dependency?

Official docs:
- Retrying jobs: https://docs.bullmq.io/guide/retrying-failing-jobs
- Stalled jobs: https://docs.bullmq.io/guide/jobs/stalled

## Deduplication vs `jobId`

These are related but not identical:

| Mechanism | What it helps with | Common mistake |
| --- | --- | --- |
| `jobId` | Preventing multiple jobs with the same identifier from being inserted under the expected conditions | Assuming it alone guarantees business-level exactly-once side effects forever |
| Deduplication | Suppressing logically duplicate enqueue attempts according to the selected dedupe behavior/window | Treating it as a substitute for idempotent job handlers |
| Idempotent handler design | Preventing repeated side effects when a job runs more than once | Skipping it because the enqueue path already has uniqueness controls |

Official docs:
- Job IDs: https://docs.bullmq.io/guide/jobs/job-ids
- Deduplication: https://docs.bullmq.io/guide/jobs/deduplication

## Retention caveat

Auto-removal is operationally useful, but it changes debugging and duplicate-prevention assumptions.

If completed or failed jobs are removed aggressively:

- operators may lose evidence needed for postmortems
- dashboards may appear cleaner while hiding repeat patterns
- duplicate-prevention assumptions based on historical job presence may stop working the way the team expects

Official docs: https://docs.bullmq.io/guide/queues/auto-removal-of-jobs

## Observability hooks to verify

When diagnosing or reviewing a BullMQ system, check whether the implementation exposes enough evidence through:

- worker logs with job name, queue name, attempt count, and failure reason
- `QueueEvents` or equivalent event consumption where appropriate
- metrics or telemetry hooks used by the actual deployment
- timing visibility for enqueue-to-start and start-to-complete paths

Official docs:
- Events: https://docs.bullmq.io/guide/events
- Metrics: https://docs.bullmq.io/guide/metrics
- Telemetry: https://docs.bullmq.io/guide/telemetry

## Graceful shutdown review points

Before approving deploy-related worker changes, verify:

- the worker stops accepting new work in a controlled way
- active jobs are allowed to finish or fail predictably
- shutdown behavior is documented well enough for on-call operators

Official docs: https://docs.bullmq.io/guide/workers/graceful-shutdown

## Practical review order

Use this order during live work:

1. Confirm BullMQ version.
2. Identify whether the issue is producer-side, worker-side, or scheduling-side.
3. Check retries, backoff, and idempotency together.
4. Review duplicate-prevention assumptions: `jobId`, deduplication, and retention.
5. Inspect observability signals before recommending broad changes.
6. Propose the smallest safe change set and define validation.
