# Worked Example: BullMQ Incident Triage

## Scenario

A Node.js service uses BullMQ to send customer invoices.

Reported symptoms:

- invoice jobs sometimes send duplicate emails
- failure count spikes during peak traffic
- some jobs appear stalled before retrying
- the team wants to increase worker concurrency to "clear the backlog"

## Initial facts

Current worker configuration:

```ts
new Worker('invoice-email', sendInvoiceEmail, {
  concurrency: 80,
})
```

Current producer behavior:

```ts
await invoiceQueue.add('send', {
  invoiceId,
  customerEmail,
})
```

Observed runtime notes:

- the email provider returns intermittent 429 responses during peak traffic
- workers run in multiple containers during deploys
- sending an email is an external side effect
- no durable idempotency check exists before sending

## Investigation sequence

### 1. Classify the problem correctly

This is not just a throughput problem.

There are at least three separate concerns:

1. duplicate side effects
2. transient provider throttling
3. stalled jobs under load

### 2. Identify the highest-risk correctness gap

Duplicate emails indicate the job is not safely replayable.

Key question:

- If a job retries or a worker restarts after the provider accepted the email but before completion is recorded, can the same invoice send again?

In this scenario, yes.

## Expected finding

The primary correctness issue is missing idempotency around the email send.

## Safe remediation plan

### A. Add an idempotency guard

Before sending, check durable state keyed by `invoiceId` or a delivery key.

```ts
async function sendInvoiceEmail(job: Job<{ invoiceId: string; customerEmail: string }>) {
  const alreadySent = await deliveryStore.wasSent(job.data.invoiceId)
  if (alreadySent) return

  await emailProvider.send(job.data.customerEmail)
  await deliveryStore.markSent(job.data.invoiceId)
}
```

Expected effect:

- retries become much safer
- worker restarts are less likely to cause duplicate user-visible side effects

### B. Bound retries with backoff for 429s

```ts
await invoiceQueue.add('send', payload, {
  attempts: 5,
  backoff: {
    type: 'exponential',
    delay: 1000,
  },
})
```

Expected effect:

- transient provider throttling gets recovery time
- failures do not immediately fan out into a retry storm

### C. Reduce concurrency instead of increasing it blindly

```ts
new Worker('invoice-email', sendInvoiceEmail, {
  concurrency: 20,
  limiter: { max: 100, duration: 1000 },
})
```

Expected effect:

- lower pressure on the provider
- less event-loop and resource contention
- more predictable processing under load

### D. Inspect stalled-job cause

If stalls correlate with CPU spikes or synchronous template rendering, move expensive work out of the main event loop or split the job.

Expected effect:

- fewer lock-renewal misses
- fewer false "queue reliability" complaints caused by worker design

## What not to do

- Do not immediately purge or mass-retry failed jobs.
- Do not raise concurrency first just because a backlog exists.
- Do not treat duplicate emails as proof that BullMQ itself is duplicating jobs incorrectly.

## Before and after summary

### Before

- side effect not idempotent
- high concurrency amplifies provider throttling
- retries and restarts can duplicate email sends
- stall symptoms are investigated too late

### After

- email send is protected by durable idempotency
- retries are bounded and better suited for transient failures
- concurrency is aligned with downstream capacity
- stall investigation focuses on worker execution and lock health

## Reusable operator conclusion

When BullMQ incidents include both duplicates and backlog pressure, fix **correctness first**:

1. idempotency
2. retry classification and backoff
3. concurrency and rate limiting
4. stall root cause

That sequence is usually safer than chasing throughput as the first move.
