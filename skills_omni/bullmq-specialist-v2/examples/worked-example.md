# Worked Example: Duplicate Side Effects During BullMQ Retries

## Input scenario

A user reports:

> "Our `emailQueue` sometimes sends the same password-reset email twice when Redis is unstable or when the worker restarts during deployments. We use BullMQ retries because the email provider occasionally times out."

## Structured operator response

### Task Summary

- Queue problem: duplicate customer-visible side effect
- BullMQ surface: worker retry behavior, possible stalled-job recovery, and enqueue identity assumptions
- Desired outcome: keep transient-failure resilience without sending the same email twice

### Current State

Assume inspection shows:

- producer adds jobs with `attempts: 5` and exponential backoff
- worker sends the email directly inside the processor
- handler has no business-level idempotency check
- queue uses a generated `jobId` instead of a stable business key
- completed jobs are removed aggressively

### BullMQ Risk Check

- Retries are expected to re-run processor logic after transient failure.
- Worker interruption or stall-related recovery can also lead to repeated execution attempts.
- A generated `jobId` does not guarantee the external email side effect only happens once across all failure paths.
- Aggressive auto-removal may erase evidence needed to understand duplicate behavior.

### Likely Root Cause

The queue is behaving within BullMQ retry/recovery expectations, but the processor is not idempotent. The system relies on queue-level uniqueness assumptions where handler-level side-effect protection is required.

### Recommended Changes

1. Add a business-level idempotency guard around the password-reset send operation.
   - Example: persist and check a reset-token or delivery record before sending.
2. Keep retries for transient provider failures, but make duplicate execution safe.
3. If appropriate, enqueue with a stable business identifier for the logical reset event.
4. Relax retention only enough to preserve failure/debug history during investigation.
5. Add worker logs that include queue name, job name, attempt count, and external provider result.

### Validation Plan

Run a narrow validation sequence:

1. Enqueue one password-reset job.
2. Simulate a transient provider timeout so BullMQ retries it.
3. Restart the worker during processing in a controlled test environment.
4. Confirm multiple execution attempts may occur in logs.
5. Verify only one email is actually delivered because the handler idempotency guard blocks the duplicate side effect.

### Expected Outcome

Before:

- one logical reset request can produce two customer emails under retry/restart conditions

After:

- BullMQ may still retry the job
- logs may show more than one execution attempt
- customer-visible email delivery occurs once for the same logical reset event

## Why this example matters

This is a common BullMQ review mistake:

- queue-level uniqueness is treated as enough
- retry behavior is blamed even though the real gap is non-idempotent side effects

Use this pattern whenever the user reports duplicate emails, webhooks, billing actions, or other external effects in a BullMQ system.
