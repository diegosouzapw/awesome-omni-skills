---
name: azure-eventhub-java-v2
description: "Azure Event Hubs SDK for Java workflow skill. Use this skill when the user needs Build real-time streaming applications with Azure Event Hubs SDK for Java. Use when implementing event streaming, high-throughput data ingestion, or building event-driven architectures and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["azure-eventhub-java-v2", "azure-eventhub-java", "build", "real-time", "streaming", "applications", "azure", "event"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Azure Event Hubs SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-eventhub-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Event Hubs SDK for Java Build real-time streaming applications using the Azure Event Hubs SDK for Java.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Core Patterns, Event Positions, Error Handling, Environment Variables, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "Event Hubs Java"
- "event streaming Azure"
- "real-time data ingestion"
- "EventProcessorClient"
- "event hub producer consumer"
- "partition processing"

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-messaging-eventhubs</artifactId> <version>5.19.0</version> </dependency> <!-- For checkpoint store (production) --> <dependency> <groupId>com.azure</groupId> <artifactId>azure-messaging-eventhubs-checkpointstore-blob</artifactId> <version>1.20.0</version> </dependency>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-messaging-eventhubs</artifactId>
    <version>5.19.0</version>
</dependency>

<!-- For checkpoint store (production) -->
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-messaging-eventhubs-checkpointstore-blob</artifactId>
    <version>1.20.0</version>
</dependency>
```

#### Imported: Client Creation

### EventHubProducerClient

```java
import com.azure.messaging.eventhubs.EventHubProducerClient;
import com.azure.messaging.eventhubs.EventHubClientBuilder;

// With connection string
EventHubProducerClient producer = new EventHubClientBuilder()
    .connectionString("<connection-string>", "<event-hub-name>")
    .buildProducerClient();

// Full connection string with EntityPath
EventHubProducerClient producer = new EventHubClientBuilder()
    .connectionString("<connection-string-with-entity-path>")
    .buildProducerClient();
```

### With DefaultAzureCredential

```java
import com.azure.identity.DefaultAzureCredentialBuilder;

EventHubProducerClient producer = new EventHubClientBuilder()
    .fullyQualifiedNamespace("<namespace>.servicebus.windows.net")
    .eventHubName("<event-hub-name>")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildProducerClient();
```

### EventHubConsumerClient

```java
import com.azure.messaging.eventhubs.EventHubConsumerClient;

EventHubConsumerClient consumer = new EventHubClientBuilder()
    .connectionString("<connection-string>", "<event-hub-name>")
    .consumerGroup(EventHubClientBuilder.DEFAULT_CONSUMER_GROUP_NAME)
    .buildConsumerClient();
```

### Async Clients

```java
import com.azure.messaging.eventhubs.EventHubProducerAsyncClient;
import com.azure.messaging.eventhubs.EventHubConsumerAsyncClient;

EventHubProducerAsyncClient asyncProducer = new EventHubClientBuilder()
    .connectionString("<connection-string>", "<event-hub-name>")
    .buildAsyncProducerClient();

EventHubConsumerAsyncClient asyncConsumer = new EventHubClientBuilder()
    .connectionString("<connection-string>", "<event-hub-name>")
    .consumerGroup("$Default")
    .buildAsyncConsumerClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-eventhub-java-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-eventhub-java-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-eventhub-java-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-eventhub-java-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use EventProcessorClient: For production, provides load balancing and checkpointing
- Batch Events: Use EventDataBatch for efficient sending
- Partition Keys: Use for ordering guarantees within a partition
- Checkpointing: Checkpoint after processing to avoid reprocessing
- Error Handling: Handle transient errors with retries
- Close Clients: Always close producer/consumer when done
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use EventProcessorClient**: For production, provides load balancing and checkpointing
2. **Batch Events**: Use `EventDataBatch` for efficient sending
3. **Partition Keys**: Use for ordering guarantees within a partition
4. **Checkpointing**: Checkpoint after processing to avoid reprocessing
5. **Error Handling**: Handle transient errors with retries
6. **Close Clients**: Always close producer/consumer when done

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-eventhub-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-ai-vision-imageanalysis-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-voicelive-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-voicelive-java-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-voicelive-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resource Cleanup

```java
// Always close clients
try {
    producer.send(batch);
} finally {
    producer.close();
}

// Or use try-with-resources
try (EventHubProducerClient producer = new EventHubClientBuilder()
        .connectionString(connectionString, eventHubName)
        .buildProducerClient()) {
    producer.send(events);
}
```

#### Imported: Core Patterns

### Send Single Event

```java
import com.azure.messaging.eventhubs.EventData;

EventData eventData = new EventData("Hello, Event Hubs!");
producer.send(Collections.singletonList(eventData));
```

### Send Event Batch

```java
import com.azure.messaging.eventhubs.EventDataBatch;
import com.azure.messaging.eventhubs.models.CreateBatchOptions;

// Create batch
EventDataBatch batch = producer.createBatch();

// Add events (returns false if batch is full)
for (int i = 0; i < 100; i++) {
    EventData event = new EventData("Event " + i);
    if (!batch.tryAdd(event)) {
        // Batch is full, send and create new batch
        producer.send(batch);
        batch = producer.createBatch();
        batch.tryAdd(event);
    }
}

// Send remaining events
if (batch.getCount() > 0) {
    producer.send(batch);
}
```

### Send to Specific Partition

```java
CreateBatchOptions options = new CreateBatchOptions()
    .setPartitionId("0");

EventDataBatch batch = producer.createBatch(options);
batch.tryAdd(new EventData("Partition 0 event"));
producer.send(batch);
```

### Send with Partition Key

```java
CreateBatchOptions options = new CreateBatchOptions()
    .setPartitionKey("customer-123");

EventDataBatch batch = producer.createBatch(options);
batch.tryAdd(new EventData("Customer event"));
producer.send(batch);
```

### Event with Properties

```java
EventData event = new EventData("Order created");
event.getProperties().put("orderId", "ORD-123");
event.getProperties().put("customerId", "CUST-456");
event.getProperties().put("priority", 1);

producer.send(Collections.singletonList(event));
```

### Receive Events (Simple)

```java
import com.azure.messaging.eventhubs.models.EventPosition;
import com.azure.messaging.eventhubs.models.PartitionEvent;

// Receive from specific partition
Iterable<PartitionEvent> events = consumer.receiveFromPartition(
    "0",                           // partitionId
    10,                            // maxEvents
    EventPosition.earliest(),      // startingPosition
    Duration.ofSeconds(30)         // timeout
);

for (PartitionEvent partitionEvent : events) {
    EventData event = partitionEvent.getData();
    System.out.println("Body: " + event.getBodyAsString());
    System.out.println("Sequence: " + event.getSequenceNumber());
    System.out.println("Offset: " + event.getOffset());
}
```

### EventProcessorClient (Production)

```java
import com.azure.messaging.eventhubs.EventProcessorClient;
import com.azure.messaging.eventhubs.EventProcessorClientBuilder;
import com.azure.messaging.eventhubs.checkpointstore.blob.BlobCheckpointStore;
import com.azure.storage.blob.BlobContainerAsyncClient;
import com.azure.storage.blob.BlobContainerClientBuilder;

// Create checkpoint store
BlobContainerAsyncClient blobClient = new BlobContainerClientBuilder()
    .connectionString("<storage-connection-string>")
    .containerName("checkpoints")
    .buildAsyncClient();

// Create processor
EventProcessorClient processor = new EventProcessorClientBuilder()
    .connectionString("<eventhub-connection-string>", "<event-hub-name>")
    .consumerGroup("$Default")
    .checkpointStore(new BlobCheckpointStore(blobClient))
    .processEvent(eventContext -> {
        EventData event = eventContext.getEventData();
        System.out.println("Processing: " + event.getBodyAsString());
        
        // Checkpoint after processing
        eventContext.updateCheckpoint();
    })
    .processError(errorContext -> {
        System.err.println("Error: " + errorContext.getThrowable().getMessage());
        System.err.println("Partition: " + errorContext.getPartitionContext().getPartitionId());
    })
    .buildEventProcessorClient();

// Start processing
processor.start();

// Keep running...
Thread.sleep(Duration.ofMinutes(5).toMillis());

// Stop gracefully
processor.stop();
```

### Batch Processing

```java
EventProcessorClient processor = new EventProcessorClientBuilder()
    .connectionString("<connection-string>", "<event-hub-name>")
    .consumerGroup("$Default")
    .checkpointStore(new BlobCheckpointStore(blobClient))
    .processEventBatch(eventBatchContext -> {
        List<EventData> events = eventBatchContext.getEvents();
        System.out.printf("Received %d events%n", events.size());
        
        for (EventData event : events) {
            // Process each event
            System.out.println(event.getBodyAsString());
        }
        
        // Checkpoint after batch
        eventBatchContext.updateCheckpoint();
    }, 50) // maxBatchSize
    .processError(errorContext -> {
        System.err.println("Error: " + errorContext.getThrowable());
    })
    .buildEventProcessorClient();
```

### Async Receiving

```java
asyncConsumer.receiveFromPartition("0", EventPosition.latest())
    .subscribe(
        partitionEvent -> {
            EventData event = partitionEvent.getData();
            System.out.println("Received: " + event.getBodyAsString());
        },
        error -> System.err.println("Error: " + error),
        () -> System.out.println("Complete")
    );
```

### Get Event Hub Properties

```java
// Get hub info
EventHubProperties hubProps = producer.getEventHubProperties();
System.out.println("Hub: " + hubProps.getName());
System.out.println("Partitions: " + hubProps.getPartitionIds());

// Get partition info
PartitionProperties partitionProps = producer.getPartitionProperties("0");
System.out.println("Begin sequence: " + partitionProps.getBeginningSequenceNumber());
System.out.println("Last sequence: " + partitionProps.getLastEnqueuedSequenceNumber());
System.out.println("Last offset: " + partitionProps.getLastEnqueuedOffset());
```

#### Imported: Event Positions

```java
// Start from beginning
EventPosition.earliest()

// Start from end (new events only)
EventPosition.latest()

// From specific offset
EventPosition.fromOffset(12345L)

// From specific sequence number
EventPosition.fromSequenceNumber(100L)

// From specific time
EventPosition.fromEnqueuedTime(Instant.now().minus(Duration.ofHours(1)))
```

#### Imported: Error Handling

```java
import com.azure.messaging.eventhubs.models.ErrorContext;

.processError(errorContext -> {
    Throwable error = errorContext.getThrowable();
    String partitionId = errorContext.getPartitionContext().getPartitionId();
    
    if (error instanceof AmqpException) {
        AmqpException amqpError = (AmqpException) error;
        if (amqpError.isTransient()) {
            System.out.println("Transient error, will retry");
        }
    }
    
    System.err.printf("Error on partition %s: %s%n", partitionId, error.getMessage());
})
```

#### Imported: Environment Variables

```bash
EVENT_HUBS_CONNECTION_STRING=Endpoint=sb://<namespace>.servicebus.windows.net/;SharedAccessKeyName=...
EVENT_HUBS_NAME=<event-hub-name>
STORAGE_CONNECTION_STRING=<for-checkpointing>
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
