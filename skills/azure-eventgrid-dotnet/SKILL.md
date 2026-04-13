---
name: azure-eventgrid-dotnet
description: "Azure.Messaging.EventGrid (.NET) workflow skill. Use this skill when the user needs Azure Event Grid SDK for .NET. Client library for publishing and consuming events with Azure Event Grid. Use for event-driven architectures, pub/sub messaging, CloudEvents, and EventGridEvents and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["azure-eventgrid-dotnet", "azure", "event", "grid", "sdk", "for", "net", "client"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure.Messaging.EventGrid (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-eventgrid-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.Messaging.EventGrid (.NET) Client library for publishing events to Azure Event Grid topics, domains, and namespaces.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Client Hierarchy, Authentication, Publishing Events, Pull Delivery (Namespaces), Consuming Events (Azure Functions).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Event Grid SDK for .NET. Client library for publishing and consuming events with Azure Event Grid. Use for event-driven architectures, pub/sub messaging, CloudEvents, and EventGridEvents.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. bash # For topics and domains (push delivery) dotnet add package Azure.Messaging.EventGrid # For namespaces (pull delivery) dotnet add package Azure.Messaging.EventGrid.Namespaces # For CloudNative CloudEvents interop dotnet add package Microsoft.Azure.Messaging.EventGrid.CloudNativeCloudEvents Current Version: 4.28.0 (stable)
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# For topics and domains (push delivery)
dotnet add package Azure.Messaging.EventGrid

# For namespaces (pull delivery)
dotnet add package Azure.Messaging.EventGrid.Namespaces

# For CloudNative CloudEvents interop
dotnet add package Microsoft.Azure.Messaging.EventGrid.CloudNativeCloudEvents
```

**Current Version**: 4.28.0 (stable)

#### Imported: Environment Variables

```bash
# Topic/Domain endpoint
EVENT_GRID_TOPIC_ENDPOINT=https://<topic-name>.<region>.eventgrid.azure.net/api/events
EVENT_GRID_TOPIC_KEY=<access-key>

# Namespace endpoint (for pull delivery)
EVENT_GRID_NAMESPACE_ENDPOINT=https://<namespace>.<region>.eventgrid.azure.net
EVENT_GRID_TOPIC_NAME=<topic-name>
EVENT_GRID_SUBSCRIPTION_NAME=<subscription-name>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-eventgrid-dotnet to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-eventgrid-dotnet/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-eventgrid-dotnet/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-eventgrid-dotnet using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use CloudEvents — Prefer CloudEvents for new implementations (industry standard)
- Batch events — Send multiple events in one call for efficiency
- Use Entra ID — Prefer managed identity over access keys
- Idempotent handlers — Events may be delivered more than once
- Set event TTL — Configure time-to-live for namespace events
- Handle partial failures — Acknowledge/release events individually
- Use dead-letter — Configure dead-letter for failed events

### Imported Operating Notes

#### Imported: Best Practices

1. **Use CloudEvents** — Prefer CloudEvents for new implementations (industry standard)
2. **Batch events** — Send multiple events in one call for efficiency
3. **Use Entra ID** — Prefer managed identity over access keys
4. **Idempotent handlers** — Events may be delivered more than once
5. **Set event TTL** — Configure time-to-live for namespace events
6. **Handle partial failures** — Acknowledge/release events individually
7. **Use dead-letter** — Configure dead-letter for failed events
8. **Validate schemas** — Validate event data before processing

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-eventgrid-dotnet`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `EventGridPublisherClient` | Publish to topics/domains |
| `EventGridSenderClient` | Send to namespace topics |
| `EventGridReceiverClient` | Receive from namespace subscriptions |
| `EventGridEvent` | Event Grid native schema |
| `CloudEvent` | CloudEvents 1.0 schema |
| `ReceiveResult` | Pull delivery response |
| `ReceiveDetails` | Event with broker properties |
| `BrokerProperties` | Lock token, delivery count |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.Messaging.EventGrid |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.messaging.eventgrid |
| Quickstart | https://learn.microsoft.com/azure/event-grid/custom-event-quickstart |
| Pull Delivery | https://learn.microsoft.com/azure/event-grid/pull-delivery-overview |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/eventgrid/Azure.Messaging.EventGrid |

#### Imported: Client Hierarchy

```
Push Delivery (Topics/Domains)
└── EventGridPublisherClient
    ├── SendEventAsync(EventGridEvent)
    ├── SendEventsAsync(IEnumerable<EventGridEvent>)
    ├── SendEventAsync(CloudEvent)
    └── SendEventsAsync(IEnumerable<CloudEvent>)

Pull Delivery (Namespaces)
├── EventGridSenderClient
│   └── SendAsync(CloudEvent)
└── EventGridReceiverClient
    ├── ReceiveAsync()
    ├── AcknowledgeAsync()
    ├── ReleaseAsync()
    └── RejectAsync()
```

#### Imported: Authentication

### API Key Authentication

```csharp
using Azure;
using Azure.Messaging.EventGrid;

EventGridPublisherClient client = new(
    new Uri("https://mytopic.eastus-1.eventgrid.azure.net/api/events"),
    new AzureKeyCredential("<access-key>"));
```

### Microsoft Entra ID (Recommended)

```csharp
using Azure.Identity;
using Azure.Messaging.EventGrid;

EventGridPublisherClient client = new(
    new Uri("https://mytopic.eastus-1.eventgrid.azure.net/api/events"),
    new DefaultAzureCredential());
```

### SAS Token Authentication

```csharp
string sasToken = EventGridPublisherClient.BuildSharedAccessSignature(
    new Uri(topicEndpoint),
    DateTimeOffset.UtcNow.AddHours(1),
    new AzureKeyCredential(topicKey));

var sasCredential = new AzureSasCredential(sasToken);
EventGridPublisherClient client = new(
    new Uri(topicEndpoint),
    sasCredential);
```

#### Imported: Publishing Events

### EventGridEvent Schema

```csharp
EventGridPublisherClient client = new(
    new Uri(topicEndpoint),
    new AzureKeyCredential(topicKey));

// Single event
EventGridEvent egEvent = new(
    subject: "orders/12345",
    eventType: "Order.Created",
    dataVersion: "1.0",
    data: new { OrderId = "12345", Amount = 99.99 });

await client.SendEventAsync(egEvent);

// Batch of events
List<EventGridEvent> events = new()
{
    new EventGridEvent(
        subject: "orders/12345",
        eventType: "Order.Created",
        dataVersion: "1.0",
        data: new OrderData { OrderId = "12345", Amount = 99.99 }),
    new EventGridEvent(
        subject: "orders/12346",
        eventType: "Order.Created",
        dataVersion: "1.0",
        data: new OrderData { OrderId = "12346", Amount = 149.99 })
};

await client.SendEventsAsync(events);
```

### CloudEvent Schema

```csharp
CloudEvent cloudEvent = new(
    source: "/orders/system",
    type: "Order.Created",
    data: new { OrderId = "12345", Amount = 99.99 });

cloudEvent.Subject = "orders/12345";
cloudEvent.Id = Guid.NewGuid().ToString();
cloudEvent.Time = DateTimeOffset.UtcNow;

await client.SendEventAsync(cloudEvent);

// Batch of CloudEvents
List<CloudEvent> cloudEvents = new()
{
    new CloudEvent("/orders", "Order.Created", new { OrderId = "1" }),
    new CloudEvent("/orders", "Order.Updated", new { OrderId = "2" })
};

await client.SendEventsAsync(cloudEvents);
```

### Publishing to Event Grid Domain

```csharp
// Events must specify the Topic property for domain routing
List<EventGridEvent> events = new()
{
    new EventGridEvent(
        subject: "orders/12345",
        eventType: "Order.Created",
        dataVersion: "1.0",
        data: new { OrderId = "12345" })
    {
        Topic = "orders-topic"  // Domain topic name
    },
    new EventGridEvent(
        subject: "inventory/item-1",
        eventType: "Inventory.Updated",
        dataVersion: "1.0",
        data: new { ItemId = "item-1" })
    {
        Topic = "inventory-topic"
    }
};

await client.SendEventsAsync(events);
```

### Custom Serialization

```csharp
using System.Text.Json;

var serializerOptions = new JsonSerializerOptions
{
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
};

var customSerializer = new JsonObjectSerializer(serializerOptions);

EventGridEvent egEvent = new(
    subject: "orders/12345",
    eventType: "Order.Created",
    dataVersion: "1.0",
    data: customSerializer.Serialize(new OrderData { OrderId = "12345" }));

await client.SendEventAsync(egEvent);
```

#### Imported: Pull Delivery (Namespaces)

### Send Events to Namespace Topic

```csharp
using Azure;
using Azure.Messaging;
using Azure.Messaging.EventGrid.Namespaces;

var senderClient = new EventGridSenderClient(
    new Uri(namespaceEndpoint),
    topicName,
    new AzureKeyCredential(topicKey));

// Send single event
CloudEvent cloudEvent = new("employee_source", "Employee.Created", 
    new { Name = "John", Age = 30 });
await senderClient.SendAsync(cloudEvent);

// Send batch
await senderClient.SendAsync(new[]
{
    new CloudEvent("source", "type", new { Name = "Alice" }),
    new CloudEvent("source", "type", new { Name = "Bob" })
});
```

### Receive and Process Events

```csharp
var receiverClient = new EventGridReceiverClient(
    new Uri(namespaceEndpoint),
    topicName,
    subscriptionName,
    new AzureKeyCredential(topicKey));

// Receive events
ReceiveResult result = await receiverClient.ReceiveAsync(maxEvents: 10);

List<string> lockTokensToAck = new();
List<string> lockTokensToRelease = new();

foreach (ReceiveDetails detail in result.Details)
{
    CloudEvent cloudEvent = detail.Event;
    string lockToken = detail.BrokerProperties.LockToken;
    
    try
    {
        // Process the event
        Console.WriteLine($"Event: {cloudEvent.Type}, Data: {cloudEvent.Data}");
        lockTokensToAck.Add(lockToken);
    }
    catch (Exception)
    {
        // Release for retry
        lockTokensToRelease.Add(lockToken);
    }
}

// Acknowledge successfully processed events
if (lockTokensToAck.Any())
{
    await receiverClient.AcknowledgeAsync(lockTokensToAck);
}

// Release events for retry
if (lockTokensToRelease.Any())
{
    await receiverClient.ReleaseAsync(lockTokensToRelease);
}
```

### Reject Events (Dead Letter)

```csharp
// Reject events that cannot be processed
await receiverClient.RejectAsync(new[] { lockToken });
```

#### Imported: Consuming Events (Azure Functions)

### EventGridEvent Trigger

```csharp
using Azure.Messaging.EventGrid;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.EventGrid;

public static class EventGridFunction
{
    [FunctionName("ProcessEventGridEvent")]
    public static void Run(
        [EventGridTrigger] EventGridEvent eventGridEvent,
        ILogger log)
    {
        log.LogInformation($"Event Type: {eventGridEvent.EventType}");
        log.LogInformation($"Subject: {eventGridEvent.Subject}");
        log.LogInformation($"Data: {eventGridEvent.Data}");
    }
}
```

### CloudEvent Trigger

```csharp
using Azure.Messaging;
using Microsoft.Azure.Functions.Worker;

public class CloudEventFunction
{
    [Function("ProcessCloudEvent")]
    public void Run(
        [EventGridTrigger] CloudEvent cloudEvent,
        FunctionContext context)
    {
        var logger = context.GetLogger("ProcessCloudEvent");
        logger.LogInformation($"Event Type: {cloudEvent.Type}");
        logger.LogInformation($"Source: {cloudEvent.Source}");
        logger.LogInformation($"Data: {cloudEvent.Data}");
    }
}
```

#### Imported: Parsing Events

### Parse EventGridEvent

```csharp
// From JSON string
string json = "..."; // Event Grid webhook payload
EventGridEvent[] events = EventGridEvent.ParseMany(BinaryData.FromString(json));

foreach (EventGridEvent egEvent in events)
{
    if (egEvent.TryGetSystemEventData(out object systemEvent))
    {
        // Handle system event
        switch (systemEvent)
        {
            case StorageBlobCreatedEventData blobCreated:
                Console.WriteLine($"Blob created: {blobCreated.Url}");
                break;
        }
    }
    else
    {
        // Handle custom event
        var customData = egEvent.Data.ToObjectFromJson<MyCustomData>();
    }
}
```

### Parse CloudEvent

```csharp
CloudEvent[] cloudEvents = CloudEvent.ParseMany(BinaryData.FromString(json));

foreach (CloudEvent cloudEvent in cloudEvents)
{
    var data = cloudEvent.Data.ToObjectFromJson<MyEventData>();
    Console.WriteLine($"Type: {cloudEvent.Type}, Data: {data}");
}
```

#### Imported: System Events

```csharp
// Common system event types
using Azure.Messaging.EventGrid.SystemEvents;

// Storage events
StorageBlobCreatedEventData blobCreated;
StorageBlobDeletedEventData blobDeleted;

// Resource events
ResourceWriteSuccessEventData resourceCreated;
ResourceDeleteSuccessEventData resourceDeleted;

// App Service events
WebAppUpdatedEventData webAppUpdated;

// Container Registry events
ContainerRegistryImagePushedEventData imagePushed;

// IoT Hub events
IotHubDeviceCreatedEventData deviceCreated;
```

#### Imported: Event Schemas Comparison

| Feature | EventGridEvent | CloudEvent |
|---------|----------------|------------|
| Standard | Azure-specific | CNCF standard |
| Required fields | subject, eventType, dataVersion, data | source, type |
| Extensibility | Limited | Extension attributes |
| Interoperability | Azure only | Cross-platform |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    await client.SendEventAsync(cloudEvent);
}
catch (RequestFailedException ex) when (ex.Status == 401)
{
    Console.WriteLine("Authentication failed - check credentials");
}
catch (RequestFailedException ex) when (ex.Status == 403)
{
    Console.WriteLine("Authorization failed - check RBAC permissions");
}
catch (RequestFailedException ex) when (ex.Status == 413)
{
    Console.WriteLine("Payload too large - max 1MB per event, 1MB total batch");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Event Grid error: {ex.Status} - {ex.Message}");
}
```

#### Imported: Failover Pattern

```csharp
try
{
    var primaryClient = new EventGridPublisherClient(primaryUri, primaryKey);
    await primaryClient.SendEventsAsync(events);
}
catch (RequestFailedException)
{
    // Failover to secondary region
    var secondaryClient = new EventGridPublisherClient(secondaryUri, secondaryKey);
    await secondaryClient.SendEventsAsync(events);
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
