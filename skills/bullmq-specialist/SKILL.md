---
name: bullmq-specialist
description: "BullMQ Specialist workflow skill. Use this skill when the user needs BullMQ expert for Redis-backed job queues, background processing, and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["bullmq-specialist", "bullmq", "expert", "for", "redis-backed", "job", "queues", "background"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# BullMQ Specialist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/bullmq-specialist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# BullMQ Specialist BullMQ expert for Redis-backed job queues, background processing, and reliable async execution in Node.js/TypeScript applications.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Scope, Tooling, Patterns, Validation Checks, Collaboration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: bullmq
- User mentions or implies: bull queue
- User mentions or implies: redis queue
- User mentions or implies: background job
- User mentions or implies: job queue
- User mentions or implies: delayed job

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Capabilities

- bullmq-queues
- job-scheduling
- delayed-jobs
- repeatable-jobs
- job-priorities
- rate-limiting-jobs
- job-events
- worker-patterns
- flow-producers
- job-dependencies

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @bullmq-specialist to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/bullmq-specialist/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/bullmq-specialist/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @bullmq-specialist using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Jobs are fire-and-forget from the producer side - let the queue handle delivery
- Always set explicit job options - defaults rarely match your use case
- Idempotency is your responsibility - jobs may run more than once
- Backoff strategies prevent thundering herds - exponential beats linear
- Dead letter queues are not optional - failed jobs need a home
- Concurrency limits protect downstream services - start conservative
- Job data should be small - pass IDs, not payloads

### Imported Operating Notes

#### Imported: Principles

- Jobs are fire-and-forget from the producer side - let the queue handle delivery
- Always set explicit job options - defaults rarely match your use case
- Idempotency is your responsibility - jobs may run more than once
- Backoff strategies prevent thundering herds - exponential beats linear
- Dead letter queues are not optional - failed jobs need a home
- Concurrency limits protect downstream services - start conservative
- Job data should be small - pass IDs, not payloads
- Graceful shutdown prevents orphaned jobs - handle SIGTERM properly

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/bullmq-specialist`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Scope

- redis-infrastructure -> redis-specialist
- serverless-queues -> upstash-qstash
- workflow-orchestration -> temporal-craftsman
- event-sourcing -> event-architect
- email-delivery -> email-systems

#### Imported: Tooling

### Core

- bullmq
- ioredis

### Hosting

- upstash
- redis-cloud
- elasticache
- railway

### Monitoring

- bull-board
- arena
- bullmq-pro

### Patterns

- delayed-jobs
- repeatable-jobs
- job-flows
- rate-limiting
- sandboxed-processors

#### Imported: Patterns

### Basic Queue Setup

Production-ready BullMQ queue with proper configuration

**When to use**: Starting any new queue implementation

import { Queue, Worker, QueueEvents } from 'bullmq';
import IORedis from 'ioredis';

// Shared connection for all queues
const connection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null,  // Required for BullMQ
  enableReadyCheck: false,
});

// Create queue with sensible defaults
const emailQueue = new Queue('emails', {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
    removeOnComplete: { count: 1000 },
    removeOnFail: { count: 5000 },
  },
});

// Worker with concurrency limit
const worker = new Worker('emails', async (job) => {
  await sendEmail(job.data);
}, {
  connection,
  concurrency: 5,
  limiter: {
    max: 100,
    duration: 60000,  // 100 jobs per minute
  },
});

// Handle events
worker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err);
});

### Delayed and Scheduled Jobs

Jobs that run at specific times or after delays

**When to use**: Scheduling future tasks, reminders, or timed actions

// Delayed job - runs once after delay
await queue.add('reminder', { userId: 123 }, {
  delay: 24 * 60 * 60 * 1000,  // 24 hours
});

// Repeatable job - runs on schedule
await queue.add('daily-digest', { type: 'summary' }, {
  repeat: {
    pattern: '0 9 * * *',  // Every day at 9am
    tz: 'America/New_York',
  },
});

// Remove repeatable job
await queue.removeRepeatable('daily-digest', {
  pattern: '0 9 * * *',
  tz: 'America/New_York',
});

### Job Flows and Dependencies

Complex multi-step job processing with parent-child relationships

**When to use**: Jobs depend on other jobs completing first

import { FlowProducer } from 'bullmq';

const flowProducer = new FlowProducer({ connection });

// Parent waits for all children to complete
await flowProducer.add({
  name: 'process-order',
  queueName: 'orders',
  data: { orderId: 123 },
  children: [
    {
      name: 'validate-inventory',
      queueName: 'inventory',
      data: { orderId: 123 },
    },
    {
      name: 'charge-payment',
      queueName: 'payments',
      data: { orderId: 123 },
    },
    {
      name: 'notify-warehouse',
      queueName: 'notifications',
      data: { orderId: 123 },
    },
  ],
});

### Graceful Shutdown

Properly close workers without losing jobs

**When to use**: Deploying or restarting workers

const shutdown = async () => {
  console.log('Shutting down gracefully...');

  // Stop accepting new jobs
  await worker.pause();

  // Wait for current jobs to finish (with timeout)
  await worker.close();

  // Close queue connection
  await queue.close();

  process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

### Bull Board Dashboard

Visual monitoring for BullMQ queues

**When to use**: Need visibility into queue status and job states

import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [
    new BullMQAdapter(emailQueue),
    new BullMQAdapter(orderQueue),
  ],
  serverAdapter,
});

app.use('/admin/queues', serverAdapter.getRouter());

#### Imported: Validation Checks

### Redis connection missing maxRetriesPerRequest

Severity: ERROR

BullMQ requires maxRetriesPerRequest null for proper reconnection handling

Message: BullMQ queue/worker created without maxRetriesPerRequest: null on Redis connection. This will cause workers to stop on Redis connection issues.

### No stalled job event handler

Severity: WARNING

Workers should handle stalled events to detect crashed workers

Message: Worker created without 'stalled' event handler. Stalled jobs indicate worker crashes and should be monitored.

### No failed job event handler

Severity: WARNING

Workers should handle failed events for monitoring and alerting

Message: Worker created without 'failed' event handler. Failed jobs should be logged and monitored.

### No graceful shutdown handling

Severity: WARNING

Workers should gracefully shut down on SIGTERM/SIGINT

Message: Worker file without graceful shutdown handling. Jobs may be orphaned on deployment.

### Awaiting queue.add in request handler

Severity: INFO

Queue additions should be fire-and-forget in request handlers

Message: Queue.add awaited in request handler. Consider fire-and-forget for faster response.

### Potentially large data in job payload

Severity: WARNING

Job data should be small - pass IDs not full objects

Message: Job appears to have large inline data. Pass IDs instead of full objects to keep Redis memory low.

### Job without timeout configuration

Severity: INFO

Jobs should have timeouts to prevent infinite execution

Message: Job added without explicit timeout. Consider adding timeout to prevent stuck jobs.

### Retry without backoff strategy

Severity: WARNING

Retries should use exponential backoff to avoid thundering herd

Message: Job has retry attempts but no backoff strategy. Use exponential backoff to prevent thundering herd.

### Repeatable job without explicit timezone

Severity: WARNING

Repeatable jobs should specify timezone to avoid DST issues

Message: Repeatable job without explicit timezone. Will use server local time which can drift with DST.

### Potentially high worker concurrency

Severity: INFO

High concurrency can overwhelm downstream services

Message: Worker concurrency is high. Ensure downstream services can handle this load (DB connections, API rate limits).

#### Imported: Collaboration

### Delegation Triggers

- redis infrastructure|redis cluster|memory tuning -> redis-specialist (Queue needs Redis infrastructure)
- serverless queue|edge queue|no redis -> upstash-qstash (Need queues without managing Redis)
- complex workflow|saga|compensation|long-running -> temporal-craftsman (Need workflow orchestration beyond simple jobs)
- event sourcing|CQRS|event streaming -> event-architect (Need event-driven architecture)
- deploy|kubernetes|scaling|infrastructure -> devops (Queue needs infrastructure)
- monitor|metrics|alerting|dashboard -> performance-hunter (Queue needs monitoring)

### Email Queue Stack

Skills: bullmq-specialist, email-systems, redis-specialist

Workflow:

```
1. Email request received (API)
2. Job queued with rate limiting (bullmq-specialist)
3. Worker processes with backoff (bullmq-specialist)
4. Email sent via provider (email-systems)
5. Status tracked in Redis (redis-specialist)
```

### Background Processing Stack

Skills: bullmq-specialist, backend, devops

Workflow:

```
1. API receives request (backend)
2. Long task queued for background (bullmq-specialist)
3. Worker processes async (bullmq-specialist)
4. Result stored/notified (backend)
5. Workers scaled per load (devops)
```

### AI Processing Pipeline

Skills: bullmq-specialist, ai-workflow-automation, performance-hunter

Workflow:

```
1. AI task submitted (ai-workflow-automation)
2. Job flow created with dependencies (bullmq-specialist)
3. Workers process stages (bullmq-specialist)
4. Performance monitored (performance-hunter)
5. Results aggregated (ai-workflow-automation)
```

### Scheduled Tasks Stack

Skills: bullmq-specialist, backend, redis-specialist

Workflow:

```
1. Repeatable jobs defined (bullmq-specialist)
2. Cron patterns with timezone (bullmq-specialist)
3. Jobs execute on schedule (bullmq-specialist)
4. State managed in Redis (redis-specialist)
5. Results handled (backend)
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
