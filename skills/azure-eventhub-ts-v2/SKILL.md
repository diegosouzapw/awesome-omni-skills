---
name: azure-eventhub-ts-v2
description: "Azure Event Hubs SDK for TypeScript workflow skill. Use this skill when the user needs High-throughput event streaming and real-time data ingestion and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-eventhub-ts-v2", "azure-eventhub-ts", "high-throughput", "event", "streaming", "and", "real-time", "data"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-19"
---

# Azure Event Hubs SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-eventhub-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Event Hubs SDK for TypeScript High-throughput event streaming and real-time data ingestion.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Event Hub Properties, Key Types, Event Properties, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: High-throughput event streaming and real-time data ingestion.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash npm install @azure/event-hubs @azure/identity For checkpointing with consumer groups: bash npm install @azure/eventhubs-checkpointstore-blob @azure/storage-blob ### Send Events typescript const producer = new EventHubProducerClient(namespace, eventHubName, credential); // Create batch and add events const batch = await producer.createBatch(); batch.tryAdd({ body: { temperature: 72.5, deviceId: "sensor-1" } }); batch.tryAdd({ body: { temperature: 68.2, deviceId: "sensor-2" } }); await producer.sendBatch(batch); await producer.close(); ### Send to Specific Partition typescript // By partition ID const batch = await producer.createBatch({ partitionId: "0" }); // By partition key (consistent hashing) const batch = await producer.createBatch({ partitionKey: "device-123" }); ### Receive Events (Simple) typescript const consumer = new EventHubConsumerClient("$Default", namespace, eventHubName, credential); const subscription = consumer.subscribe({ processEvents: async (events, context) => { for (const event of events) { console.log(Partition: ${context.partitionId}, Body: ${JSON.stringify(event.body)}); } }, processError: async (err, context) => { console.error(Error on partition ${context.partitionId}: ${err.message}); }, }); // Stop after some time setTimeout(async () => { await subscription.close(); await consumer.close(); }, 60000); ### Receive with Checkpointing (Production) typescript import { EventHubConsumerClient } from "@azure/event-hubs"; import { ContainerClient } from "@azure/storage-blob"; import { BlobCheckpointStore } from "@azure/eventhubs-checkpointstore-blob"; const containerClient = new ContainerClient( https://${storageAccount}.blob.core.windows.net/${containerName}, credential ); const checkpointStore = new BlobCheckpointStore(containerClient); const consumer = new EventHubConsumerClient( "$Default", namespace, eventHubName, credential, checkpointStore ); const subscription = consumer.subscribe({ processEvents: async (events, context) => { for (const event of events) { console.log(Processing: ${JSON.stringify(event.body)}); } // Checkpoint after processing batch if (events.length > 0) { await context.updateCheckpoint(events[events.length - 1]); } }, processError: async (err, context) => { console.error(Error: ${err.message}); }, }); ### Receive from Specific Position typescript const subscription = consumer.subscribe({ processEvents: async (events, context) => { / ...
2. / }, processError: async (err, context) => { / ...
3. / }, }, { startPosition: { // Start from beginning "0": { offset: "@earliest" }, // Start from end (new events only) "1": { offset: "@latest" }, // Start from specific offset "2": { offset: "12345" }, // Start from specific time "3": { enqueuedOn: new Date("2024-01-01") }, }, }); typescript const subscription = consumer.subscribe( { processEvents: async (events, context) => { / ...
4. / }, }, { maxBatchSize: 100, // Max events per batch maxWaitTimeInSeconds: 30, // Max wait for batch } ); ``
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/event-hubs @azure/identity
```

For checkpointing with consumer groups:
```bash
npm install @azure/eventhubs-checkpointstore-blob @azure/storage-blob
```

#### Imported: Core Workflow

### Send Events

```typescript
const producer = new EventHubProducerClient(namespace, eventHubName, credential);

// Create batch and add events
const batch = await producer.createBatch();
batch.tryAdd({ body: { temperature: 72.5, deviceId: "sensor-1" } });
batch.tryAdd({ body: { temperature: 68.2, deviceId: "sensor-2" } });

await producer.sendBatch(batch);
await producer.close();
```

### Send to Specific Partition

```typescript
// By partition ID
const batch = await producer.createBatch({ partitionId: "0" });

// By partition key (consistent hashing)
const batch = await producer.createBatch({ partitionKey: "device-123" });
```

### Receive Events (Simple)

```typescript
const consumer = new EventHubConsumerClient("$Default", namespace, eventHubName, credential);

const subscription = consumer.subscribe({
  processEvents: async (events, context) => {
    for (const event of events) {
      console.log(`Partition: ${context.partitionId}, Body: ${JSON.stringify(event.body)}`);
    }
  },
  processError: async (err, context) => {
    console.error(`Error on partition ${context.partitionId}: ${err.message}`);
  },
});

// Stop after some time
setTimeout(async () => {
  await subscription.close();
  await consumer.close();
}, 60000);
```

### Receive with Checkpointing (Production)

```typescript
import { EventHubConsumerClient } from "@azure/event-hubs";
import { ContainerClient } from "@azure/storage-blob";
import { BlobCheckpointStore } from "@azure/eventhubs-checkpointstore-blob";

const containerClient = new ContainerClient(
  `https://${storageAccount}.blob.core.windows.net/${containerName}`,
  credential
);

const checkpointStore = new BlobCheckpointStore(containerClient);

const consumer = new EventHubConsumerClient(
  "$Default",
  namespace,
  eventHubName,
  credential,
  checkpointStore
);

const subscription = consumer.subscribe({
  processEvents: async (events, context) => {
    for (const event of events) {
      console.log(`Processing: ${JSON.stringify(event.body)}`);
    }
    // Checkpoint after processing batch
    if (events.length > 0) {
      await context.updateCheckpoint(events[events.length - 1]);
    }
  },
  processError: async (err, context) => {
    console.error(`Error: ${err.message}`);
  },
});
```

### Receive from Specific Position

```typescript
const subscription = consumer.subscribe({
  processEvents: async (events, context) => { /* ... */ },
  processError: async (err, context) => { /* ... */ },
}, {
  startPosition: {
    // Start from beginning
    "0": { offset: "@earliest" },
    // Start from end (new events only)
    "1": { offset: "@latest" },
    // Start from specific offset
    "2": { offset: "12345" },
    // Start from specific time
    "3": { enqueuedOn: new Date("2024-01-01") },
  },
});
```

#### Imported: Batch Processing Options

```typescript
const subscription = consumer.subscribe(
  {
    processEvents: async (events, context) => { /* ... */ },
    processError: async (err, context) => { /* ... */ },
  },
  {
    maxBatchSize: 100,           // Max events per batch
    maxWaitTimeInSeconds: 30,    // Max wait for batch
  }
);
```

#### Imported: Environment Variables

```bash
EVENTHUB_NAMESPACE=<namespace>.servicebus.windows.net
EVENTHUB_NAME=my-eventhub
STORAGE_ACCOUNT_NAME=<storage-account>
STORAGE_CONTAINER_NAME=checkpoints
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-eventhub-ts-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-eventhub-ts-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-eventhub-ts-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-eventhub-ts-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use checkpointing - Always checkpoint in production for exactly-once processing
- Batch sends - Use createBatch() for efficient sending
- Partition keys - Use partition keys to ensure ordering for related events
- Consumer groups - Use separate consumer groups for different processing pipelines
- Handle errors gracefully - Don't checkpoint on processing failures
- Close clients - Always close producer/consumer when done
- Monitor lag - Track lastEnqueuedSequenceNumber vs processed sequence

### Imported Operating Notes

#### Imported: Best Practices

1. **Use checkpointing** - Always checkpoint in production for exactly-once processing
2. **Batch sends** - Use `createBatch()` for efficient sending
3. **Partition keys** - Use partition keys to ensure ordering for related events
4. **Consumer groups** - Use separate consumer groups for different processing pipelines
5. **Handle errors gracefully** - Don't checkpoint on processing failures
6. **Close clients** - Always close producer/consumer when done
7. **Monitor lag** - Track `lastEnqueuedSequenceNumber` vs processed sequence

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-eventhub-ts`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-ai-projects-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-projects-ts-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-textanalytics-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-transcription-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Authentication

```typescript
import { EventHubProducerClient, EventHubConsumerClient } from "@azure/event-hubs";
import { DefaultAzureCredential } from "@azure/identity";

const fullyQualifiedNamespace = process.env.EVENTHUB_NAMESPACE!;
const eventHubName = process.env.EVENTHUB_NAME!;
const credential = new DefaultAzureCredential();

// Producer
const producer = new EventHubProducerClient(fullyQualifiedNamespace, eventHubName, credential);

// Consumer
const consumer = new EventHubConsumerClient(
  "$Default", // Consumer group
  fullyQualifiedNamespace,
  eventHubName,
  credential
);
```

#### Imported: Event Hub Properties

```typescript
// Get hub info
const hubProperties = await producer.getEventHubProperties();
console.log(`Partitions: ${hubProperties.partitionIds}`);

// Get partition info
const partitionProperties = await producer.getPartitionProperties("0");
console.log(`Last sequence: ${partitionProperties.lastEnqueuedSequenceNumber}`);
```

#### Imported: Key Types

```typescript
import {
  EventHubProducerClient,
  EventHubConsumerClient,
  EventData,
  ReceivedEventData,
  PartitionContext,
  Subscription,
  SubscriptionEventHandlers,
  CreateBatchOptions,
  EventPosition,
} from "@azure/event-hubs";

import { BlobCheckpointStore } from "@azure/eventhubs-checkpointstore-blob";
```

#### Imported: Event Properties

```typescript
// Send with properties
const batch = await producer.createBatch();
batch.tryAdd({
  body: { data: "payload" },
  properties: {
    eventType: "telemetry",
    deviceId: "sensor-1",
  },
  contentType: "application/json",
  correlationId: "request-123",
});

// Access in receiver
consumer.subscribe({
  processEvents: async (events, context) => {
    for (const event of events) {
      console.log(`Type: ${event.properties?.eventType}`);
      console.log(`Sequence: ${event.sequenceNumber}`);
      console.log(`Enqueued: ${event.enqueuedTimeUtc}`);
      console.log(`Offset: ${event.offset}`);
    }
  },
});
```

#### Imported: Error Handling

```typescript
consumer.subscribe({
  processEvents: async (events, context) => {
    try {
      for (const event of events) {
        await processEvent(event);
      }
      await context.updateCheckpoint(events[events.length - 1]);
    } catch (error) {
      // Don't checkpoint on error - events will be reprocessed
      console.error("Processing failed:", error);
    }
  },
  processError: async (err, context) => {
    if (err.name === "MessagingError") {
      // Transient error - SDK will retry
      console.warn("Transient error:", err.message);
    } else {
      // Fatal error
      console.error("Fatal error:", err);
    }
  },
});
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
