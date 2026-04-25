---
name: azure-eventhub-dotnet
description: "Azure.Messaging.EventHubs (.NET) workflow skill. Use this skill when the user needs Azure Event Hubs SDK for .NET and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-eventhub-dotnet", "azure", "event", "hubs", "sdk", "for", "net", "cli-automation"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Azure.Messaging.EventHubs (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-eventhub-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.Messaging.EventHubs (.NET) High-throughput event streaming SDK for sending and receiving events via Azure Event Hubs.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Types, EventPosition Options, ASP.NET Core Integration, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Event Hubs SDK for .NET.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. `bash # Core package (sending and simple receiving) dotnet add package Azure.Messaging.EventHubs # Processor package (production receiving with checkpointing) dotnet add package Azure.Messaging.EventHubs.Processor # Authentication dotnet add package Azure.Identity # For checkpointing (required by EventProcessorClient) dotnet add package Azure.Storage.Blobs Current Versions: Azure.Messaging.EventHubs v5.12.2, Azure.Messaging.EventHubs.Processor v5.12.2 ### 1.
2. Send Events (Batch) csharp using Azure.Identity; using Azure.Messaging.EventHubs; using Azure.Messaging.EventHubs.Producer; await using var producer = new EventHubProducerClient( fullyQualifiedNamespace, eventHubName, new DefaultAzureCredential()); // Create a batch (respects size limits automatically) using EventDataBatch batch = await producer.CreateBatchAsync(); // Add events to batch var events = new[] { new EventData(BinaryData.FromString("{\"id\": 1, \"message\": \"Hello\"}")), new EventData(BinaryData.FromString("{\"id\": 2, \"message\": \"World\"}")) }; foreach (var eventData in events) { if (!batch.TryAdd(eventData)) { // Batch is full - send it and create a new one await producer.SendAsync(batch); batch = await producer.CreateBatchAsync(); if (!batch.TryAdd(eventData)) { throw new Exception("Event too large for empty batch"); } } } // Send remaining events if (batch.Count > 0) { await producer.SendAsync(batch); } ### 2.
3. Send Events (Buffered - High Volume) csharp using Azure.Messaging.EventHubs.Producer; var options = new EventHubBufferedProducerClientOptions { MaximumWaitTime = TimeSpan.FromSeconds(1) }; await using var producer = new EventHubBufferedProducerClient( fullyQualifiedNamespace, eventHubName, new DefaultAzureCredential(), options); // Handle send success/failure producer.SendEventBatchSucceededAsync += args => { Console.WriteLine($"Batch sent: {args.EventBatch.Count} events"); return Task.CompletedTask; }; producer.SendEventBatchFailedAsync += args => { Console.WriteLine($"Batch failed: {args.Exception.Message}"); return Task.CompletedTask; }; // Enqueue events (sent automatically in background) for (int i = 0; i < 1000; i++) { await producer.EnqueueEventAsync(new EventData($"Event {i}")); } // Flush remaining events before disposing await producer.FlushAsync(); ### 3.
4. Receive Events (Production - EventProcessorClient) csharp using Azure.Identity; using Azure.Messaging.EventHubs; using Azure.Messaging.EventHubs.Consumer; using Azure.Messaging.EventHubs.Processor; using Azure.Storage.Blobs; // Blob container for checkpointing var blobClient = new BlobContainerClient( Environment.GetEnvironmentVariable("BLOBSTORAGECONNECTIONSTRING"), Environment.GetEnvironmentVariable("BLOBCONTAINER_NAME")); await blobClient.CreateIfNotExistsAsync(); // Create processor var processor = new EventProcessorClient( blobClient, EventHubConsumerClient.DefaultConsumerGroup, fullyQualifiedNamespace, eventHubName, new DefaultAzureCredential()); // Handle events processor.ProcessEventAsync += async args => { Console.WriteLine($"Partition: {args.Partition.PartitionId}"); Console.WriteLine($"Data: {args.Data.EventBody}"); // Checkpoint after processing (or batch checkpoints) await args.UpdateCheckpointAsync(); }; // Handle errors processor.ProcessErrorAsync += args => { Console.WriteLine($"Error: {args.Exception.Message}"); Console.WriteLine($"Partition: {args.PartitionId}"); return Task.CompletedTask; }; // Start processing await processor.StartProcessingAsync(); // Run until cancelled await Task.Delay(Timeout.Infinite, cancellationToken); // Stop gracefully await processor.StopProcessingAsync(); ### 4.
5. Partition Operations csharp // Get partition IDs string[] partitionIds = await producer.GetPartitionIdsAsync(); // Send to specific partition (use sparingly) var options = new SendEventOptions { PartitionId = "0" }; await producer.SendAsync(events, options); // Use partition key (recommended for ordering) var batchOptions = new CreateBatchOptions { PartitionKey = "customer-123" // Events with same key go to same partition }; using var batch = await producer.CreateBatchAsync(batchOptions); `
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Core package (sending and simple receiving)
dotnet add package Azure.Messaging.EventHubs

# Processor package (production receiving with checkpointing)
dotnet add package Azure.Messaging.EventHubs.Processor

# Authentication
dotnet add package Azure.Identity

# For checkpointing (required by EventProcessorClient)
dotnet add package Azure.Storage.Blobs
```

**Current Versions**: Azure.Messaging.EventHubs v5.12.2, Azure.Messaging.EventHubs.Processor v5.12.2

#### Imported: Core Workflow

### 1. Send Events (Batch)

```csharp
using Azure.Identity;
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Producer;

await using var producer = new EventHubProducerClient(
    fullyQualifiedNamespace,
    eventHubName,
    new DefaultAzureCredential());

// Create a batch (respects size limits automatically)
using EventDataBatch batch = await producer.CreateBatchAsync();

// Add events to batch
var events = new[]
{
    new EventData(BinaryData.FromString("{\"id\": 1, \"message\": \"Hello\"}")),
    new EventData(BinaryData.FromString("{\"id\": 2, \"message\": \"World\"}"))
};

foreach (var eventData in events)
{
    if (!batch.TryAdd(eventData))
    {
        // Batch is full - send it and create a new one
        await producer.SendAsync(batch);
        batch = await producer.CreateBatchAsync();

        if (!batch.TryAdd(eventData))
        {
            throw new Exception("Event too large for empty batch");
        }
    }
}

// Send remaining events
if (batch.Count > 0)
{
    await producer.SendAsync(batch);
}
```

### 2. Send Events (Buffered - High Volume)

```csharp
using Azure.Messaging.EventHubs.Producer;

var options = new EventHubBufferedProducerClientOptions
{
    MaximumWaitTime = TimeSpan.FromSeconds(1)
};

await using var producer = new EventHubBufferedProducerClient(
    fullyQualifiedNamespace,
    eventHubName,
    new DefaultAzureCredential(),
    options);

// Handle send success/failure
producer.SendEventBatchSucceededAsync += args =>
{
    Console.WriteLine($"Batch sent: {args.EventBatch.Count} events");
    return Task.CompletedTask;
};

producer.SendEventBatchFailedAsync += args =>
{
    Console.WriteLine($"Batch failed: {args.Exception.Message}");
    return Task.CompletedTask;
};

// Enqueue events (sent automatically in background)
for (int i = 0; i < 1000; i++)
{
    await producer.EnqueueEventAsync(new EventData($"Event {i}"));
}

// Flush remaining events before disposing
await producer.FlushAsync();
```

### 3. Receive Events (Production - EventProcessorClient)

```csharp
using Azure.Identity;
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Consumer;
using Azure.Messaging.EventHubs.Processor;
using Azure.Storage.Blobs;

// Blob container for checkpointing
var blobClient = new BlobContainerClient(
    Environment.GetEnvironmentVariable("BLOB_STORAGE_CONNECTION_STRING"),
    Environment.GetEnvironmentVariable("BLOB_CONTAINER_NAME"));

await blobClient.CreateIfNotExistsAsync();

// Create processor
var processor = new EventProcessorClient(
    blobClient,
    EventHubConsumerClient.DefaultConsumerGroup,
    fullyQualifiedNamespace,
    eventHubName,
    new DefaultAzureCredential());

// Handle events
processor.ProcessEventAsync += async args =>
{
    Console.WriteLine($"Partition: {args.Partition.PartitionId}");
    Console.WriteLine($"Data: {args.Data.EventBody}");

    // Checkpoint after processing (or batch checkpoints)
    await args.UpdateCheckpointAsync();
};

// Handle errors
processor.ProcessErrorAsync += args =>
{
    Console.WriteLine($"Error: {args.Exception.Message}");
    Console.WriteLine($"Partition: {args.PartitionId}");
    return Task.CompletedTask;
};

// Start processing
await processor.StartProcessingAsync();

// Run until cancelled
await Task.Delay(Timeout.Infinite, cancellationToken);

// Stop gracefully
await processor.StopProcessingAsync();
```

### 4. Partition Operations

```csharp
// Get partition IDs
string[] partitionIds = await producer.GetPartitionIdsAsync();

// Send to specific partition (use sparingly)
var options = new SendEventOptions
{
    PartitionId = "0"
};
await producer.SendAsync(events, options);

// Use partition key (recommended for ordering)
var batchOptions = new CreateBatchOptions
{
    PartitionKey = "customer-123"  // Events with same key go to same partition
};
using var batch = await producer.CreateBatchAsync(batchOptions);
```

#### Imported: Environment Variables

```bash
EVENTHUB_FULLY_QUALIFIED_NAMESPACE=<namespace>.servicebus.windows.net
EVENTHUB_NAME=<event-hub-name>

# For checkpointing (EventProcessorClient)
BLOB_STORAGE_CONNECTION_STRING=<storage-connection-string>
BLOB_CONTAINER_NAME=<checkpoint-container>

# Alternative: Connection string auth (not recommended for production)
EVENTHUB_CONNECTION_STRING=Endpoint=sb://<namespace>.servicebus.windows.net/;SharedAccessKeyName=...
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-eventhub-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-eventhub-dotnet against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-eventhub-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-eventhub-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use EventProcessorClient for receiving — Never use EventHubConsumerClient in production
- Checkpoint strategically — After N events or time interval, not every event
- Use partition keys — For ordering guarantees within a partition
- Reuse clients — Create once, use as singleton (thread-safe)
- Use await using — Ensures proper disposal
- Handle ProcessErrorAsync — Always register error handler
- Batch events — Use CreateBatchAsync() to respect size limits

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `EventProcessorClient` for receiving** — Never use `EventHubConsumerClient` in production
2. **Checkpoint strategically** — After N events or time interval, not every event
3. **Use partition keys** — For ordering guarantees within a partition
4. **Reuse clients** — Create once, use as singleton (thread-safe)
5. **Use `await using`** — Ensures proper disposal
6. **Handle `ProcessErrorAsync`** — Always register error handler
7. **Batch events** — Use `CreateBatchAsync()` to respect size limits
8. **Use buffered producer** — For high-volume scenarios with automatic batching

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-eventhub-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

```csharp
using Azure.Identity;
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Producer;

// Always use DefaultAzureCredential for production
var credential = new DefaultAzureCredential();

var fullyQualifiedNamespace = Environment.GetEnvironmentVariable("EVENTHUB_FULLY_QUALIFIED_NAMESPACE");
var eventHubName = Environment.GetEnvironmentVariable("EVENTHUB_NAME");

var producer = new EventHubProducerClient(
    fullyQualifiedNamespace,
    eventHubName,
    credential);
```

**Required RBAC Roles**:
- **Sending**: `Azure Event Hubs Data Sender`
- **Receiving**: `Azure Event Hubs Data Receiver`
- **Both**: `Azure Event Hubs Data Owner`

#### Imported: Client Types

| Client | Purpose | When to Use |
|--------|---------|-------------|
| `EventHubProducerClient` | Send events immediately in batches | Real-time sending, full control over batching |
| `EventHubBufferedProducerClient` | Automatic batching with background sending | High-volume, fire-and-forget scenarios |
| `EventHubConsumerClient` | Simple event reading | Prototyping only, NOT for production |
| `EventProcessorClient` | Production event processing | **Always use this for receiving in production** |

#### Imported: EventPosition Options

Control where to start reading:

```csharp
// Start from beginning
EventPosition.Earliest

// Start from end (new events only)
EventPosition.Latest

// Start from specific offset
EventPosition.FromOffset(12345)

// Start from specific sequence number
EventPosition.FromSequenceNumber(100)

// Start from specific time
EventPosition.FromEnqueuedTime(DateTimeOffset.UtcNow.AddHours(-1))
```

#### Imported: ASP.NET Core Integration

```csharp
// Program.cs
using Azure.Identity;
using Azure.Messaging.EventHubs.Producer;
using Microsoft.Extensions.Azure;

builder.Services.AddAzureClients(clientBuilder =>
{
    clientBuilder.AddEventHubProducerClient(
        builder.Configuration["EventHub:FullyQualifiedNamespace"],
        builder.Configuration["EventHub:Name"]);

    clientBuilder.UseCredential(new DefaultAzureCredential());
});

// Inject in controller/service
public class EventService
{
    private readonly EventHubProducerClient _producer;

    public EventService(EventHubProducerClient producer)
    {
        _producer = producer;
    }

    public async Task SendAsync(string message)
    {
        using var batch = await _producer.CreateBatchAsync();
        batch.TryAdd(new EventData(message));
        await _producer.SendAsync(batch);
    }
}
```

#### Imported: Error Handling

```csharp
using Azure.Messaging.EventHubs;

try
{
    await producer.SendAsync(batch);
}
catch (EventHubsException ex) when (ex.Reason == EventHubsException.FailureReason.ServiceBusy)
{
    // Retry with backoff
    await Task.Delay(TimeSpan.FromSeconds(5));
}
catch (EventHubsException ex) when (ex.IsTransient)
{
    // Transient error - safe to retry
    Console.WriteLine($"Transient error: {ex.Message}");
}
catch (EventHubsException ex)
{
    // Non-transient error
    Console.WriteLine($"Error: {ex.Reason} - {ex.Message}");
}
```

#### Imported: Checkpointing Strategies

| Strategy | When to Use |
|----------|-------------|
| Every event | Low volume, critical data |
| Every N events | Balanced throughput/reliability |
| Time-based | Consistent checkpoint intervals |
| Batch completion | After processing a logical batch |

```csharp
// Checkpoint every 100 events
private int _eventCount = 0;

processor.ProcessEventAsync += async args =>
{
    // Process event...

    _eventCount++;
    if (_eventCount >= 100)
    {
        await args.UpdateCheckpointAsync();
        _eventCount = 0;
    }
};
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
