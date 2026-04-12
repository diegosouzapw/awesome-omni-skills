---
name: azure-servicebus-dotnet
description: "Azure.Messaging.ServiceBus (.NET) workflow skill. Use this skill when the user needs Azure Service Bus SDK for .NET. Enterprise messaging with queues, topics, subscriptions, and sessions and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-servicebus-dotnet", "azure", "service", "bus", "sdk", "for", "net", "enterprise"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure.Messaging.ServiceBus (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-servicebus-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.Messaging.ServiceBus (.NET) Enterprise messaging SDK for reliable message delivery with queues, topics, subscriptions, and sessions.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Service Bus SDK for .NET. Enterprise messaging with queues, topics, subscriptions, and sessions.
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

1. `bash dotnet add package Azure.Messaging.ServiceBus dotnet add package Azure.Identity Current Version: v7.20.1 (stable) ### 1.
2. Send Messages csharp await using ServiceBusClient client = new(fullyQualifiedNamespace, new DefaultAzureCredential()); ServiceBusSender sender = client.CreateSender("my-queue"); // Single message ServiceBusMessage message = new("Hello world!"); await sender.SendMessageAsync(message); // Safe batching (recommended) using ServiceBusMessageBatch batch = await sender.CreateMessageBatchAsync(); if (batch.TryAddMessage(new ServiceBusMessage("Message 1"))) { // Message added successfully } if (batch.TryAddMessage(new ServiceBusMessage("Message 2"))) { // Message added successfully } await sender.SendMessagesAsync(batch); ### 2.
3. Receive Messages csharp ServiceBusReceiver receiver = client.CreateReceiver("my-queue"); // Single message ServiceBusReceivedMessage message = await receiver.ReceiveMessageAsync(); string body = message.Body.ToString(); Console.WriteLine(body); // Complete the message (removes from queue) await receiver.CompleteMessageAsync(message); // Batch receive IReadOnlyList<ServiceBusReceivedMessage> messages = await receiver.ReceiveMessagesAsync(maxMessages: 10); foreach (var msg in messages) { Console.WriteLine(msg.Body.ToString()); await receiver.CompleteMessageAsync(msg); } ### 3.
4. Message Settlement csharp // Complete - removes message from queue await receiver.CompleteMessageAsync(message); // Abandon - releases lock, message can be received again await receiver.AbandonMessageAsync(message); // Defer - prevents normal receive, use ReceiveDeferredMessageAsync await receiver.DeferMessageAsync(message); // Dead Letter - moves to dead letter subqueue await receiver.DeadLetterMessageAsync(message, "InvalidFormat", "Message body was not valid JSON"); ### 4.
5. Background Processing with Processor `csharp ServiceBusProcessor processor = client.CreateProcessor("my-queue", new ServiceBusProcessorOptions { AutoCompleteMessages = false, MaxConcurrentCalls = 2 }); processor.ProcessMessageAsync += async (args) => { try { string body = args.Message.Body.ToString(); Console.WriteLine($"Received: {body}"); await args.CompleteMessageAsync(args.Message); } catch (Exception ex) { Console.WriteLine($"Error processing: {ex.Message}"); await args.AbandonMessageAsync(args.Message); } }; processor.ProcessErrorAsync += (args) => { Console.WriteLine($"Error source: {args.ErrorSource}"); Console.WriteLine($"Entity: {args.EntityPath}"); Console.WriteLine($"Exception: {args.Exception}"); return Task.CompletedTask; }; await processor.StartProcessingAsync(); // ...
6. application runs await processor.StopProcessingAsync(); ` ### 5.
7. Sessions (Ordered Processing) csharp // Send session message ServiceBusMessage message = new("Hello") { SessionId = "order-123" }; await sender.SendMessageAsync(message); // Receive from next available session ServiceBusSessionReceiver receiver = await client.AcceptNextSessionAsync("my-queue"); // Or receive from specific session ServiceBusSessionReceiver receiver = await client.AcceptSessionAsync("my-queue", "order-123"); // Session state management await receiver.SetSessionStateAsync(new BinaryData("processing")); BinaryData state = await receiver.GetSessionStateAsync(); // Renew session lock await receiver.RenewSessionLockAsync(); ### 6.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.Messaging.ServiceBus
dotnet add package Azure.Identity
```

**Current Version**: v7.20.1 (stable)

#### Imported: Core Workflows

### 1. Send Messages

```csharp
await using ServiceBusClient client = new(fullyQualifiedNamespace, new DefaultAzureCredential());
ServiceBusSender sender = client.CreateSender("my-queue");

// Single message
ServiceBusMessage message = new("Hello world!");
await sender.SendMessageAsync(message);

// Safe batching (recommended)
using ServiceBusMessageBatch batch = await sender.CreateMessageBatchAsync();
if (batch.TryAddMessage(new ServiceBusMessage("Message 1")))
{
    // Message added successfully
}
if (batch.TryAddMessage(new ServiceBusMessage("Message 2")))
{
    // Message added successfully
}
await sender.SendMessagesAsync(batch);
```

### 2. Receive Messages

```csharp
ServiceBusReceiver receiver = client.CreateReceiver("my-queue");

// Single message
ServiceBusReceivedMessage message = await receiver.ReceiveMessageAsync();
string body = message.Body.ToString();
Console.WriteLine(body);

// Complete the message (removes from queue)
await receiver.CompleteMessageAsync(message);

// Batch receive
IReadOnlyList<ServiceBusReceivedMessage> messages = await receiver.ReceiveMessagesAsync(maxMessages: 10);
foreach (var msg in messages)
{
    Console.WriteLine(msg.Body.ToString());
    await receiver.CompleteMessageAsync(msg);
}
```

### 3. Message Settlement

```csharp
// Complete - removes message from queue
await receiver.CompleteMessageAsync(message);

// Abandon - releases lock, message can be received again
await receiver.AbandonMessageAsync(message);

// Defer - prevents normal receive, use ReceiveDeferredMessageAsync
await receiver.DeferMessageAsync(message);

// Dead Letter - moves to dead letter subqueue
await receiver.DeadLetterMessageAsync(message, "InvalidFormat", "Message body was not valid JSON");
```

### 4. Background Processing with Processor

```csharp
ServiceBusProcessor processor = client.CreateProcessor("my-queue", new ServiceBusProcessorOptions
{
    AutoCompleteMessages = false,
    MaxConcurrentCalls = 2
});

processor.ProcessMessageAsync += async (args) =>
{
    try
    {
        string body = args.Message.Body.ToString();
        Console.WriteLine($"Received: {body}");
        await args.CompleteMessageAsync(args.Message);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error processing: {ex.Message}");
        await args.AbandonMessageAsync(args.Message);
    }
};

processor.ProcessErrorAsync += (args) =>
{
    Console.WriteLine($"Error source: {args.ErrorSource}");
    Console.WriteLine($"Entity: {args.EntityPath}");
    Console.WriteLine($"Exception: {args.Exception}");
    return Task.CompletedTask;
};

await processor.StartProcessingAsync();
// ... application runs
await processor.StopProcessingAsync();
```

### 5. Sessions (Ordered Processing)

```csharp
// Send session message
ServiceBusMessage message = new("Hello")
{
    SessionId = "order-123"
};
await sender.SendMessageAsync(message);

// Receive from next available session
ServiceBusSessionReceiver receiver = await client.AcceptNextSessionAsync("my-queue");

// Or receive from specific session
ServiceBusSessionReceiver receiver = await client.AcceptSessionAsync("my-queue", "order-123");

// Session state management
await receiver.SetSessionStateAsync(new BinaryData("processing"));
BinaryData state = await receiver.GetSessionStateAsync();

// Renew session lock
await receiver.RenewSessionLockAsync();
```

### 6. Dead Letter Queue

```csharp
// Receive from dead letter queue
ServiceBusReceiver dlqReceiver = client.CreateReceiver("my-queue", new ServiceBusReceiverOptions
{
    SubQueue = SubQueue.DeadLetter
});

ServiceBusReceivedMessage dlqMessage = await dlqReceiver.ReceiveMessageAsync();

// Access dead letter metadata
string reason = dlqMessage.DeadLetterReason;
string description = dlqMessage.DeadLetterErrorDescription;
Console.WriteLine($"Dead letter reason: {reason} - {description}");
```

### 7. Topics and Subscriptions

```csharp
// Send to topic
ServiceBusSender topicSender = client.CreateSender("my-topic");
await topicSender.SendMessageAsync(new ServiceBusMessage("Broadcast message"));

// Receive from subscription
ServiceBusReceiver subReceiver = client.CreateReceiver("my-topic", "my-subscription");
var message = await subReceiver.ReceiveMessageAsync();
```

### 8. Administration (CRUD)

```csharp
var adminClient = new ServiceBusAdministrationClient(
    fullyQualifiedNamespace, 
    new DefaultAzureCredential());

// Create queue
var options = new CreateQueueOptions("my-queue")
{
    MaxDeliveryCount = 10,
    LockDuration = TimeSpan.FromSeconds(30),
    RequiresSession = true,
    DeadLetteringOnMessageExpiration = true
};
QueueProperties queue = await adminClient.CreateQueueAsync(options);

// Update queue
queue.LockDuration = TimeSpan.FromSeconds(60);
await adminClient.UpdateQueueAsync(queue);

// Create topic and subscription
await adminClient.CreateTopicAsync(new CreateTopicOptions("my-topic"));
await adminClient.CreateSubscriptionAsync(new CreateSubscriptionOptions("my-topic", "my-subscription"));

// Delete
await adminClient.DeleteQueueAsync("my-queue");
```

### 9. Cross-Entity Transactions

```csharp
var options = new ServiceBusClientOptions { EnableCrossEntityTransactions = true };
await using var client = new ServiceBusClient(connectionString, options);

ServiceBusReceiver receiverA = client.CreateReceiver("queueA");
ServiceBusSender senderB = client.CreateSender("queueB");

ServiceBusReceivedMessage receivedMessage = await receiverA.ReceiveMessageAsync();

using (var ts = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
{
    await receiverA.CompleteMessageAsync(receivedMessage);
    await senderB.SendMessageAsync(new ServiceBusMessage("Forwarded"));
    ts.Complete();
}
```

#### Imported: Environment Variables

```bash
AZURE_SERVICEBUS_FULLY_QUALIFIED_NAMESPACE=<namespace>.servicebus.windows.net
# Or connection string (less secure)
AZURE_SERVICEBUS_CONNECTION_STRING=Endpoint=sb://...
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-servicebus-dotnet to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-servicebus-dotnet/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-servicebus-dotnet/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-servicebus-dotnet using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use singletons — Clients, senders, receivers, and processors are thread-safe
- Always dispose — Use await using or call DisposeAsync()
- Dispose order — Close senders/receivers/processors first, then client
- Use DefaultAzureCredential — Prefer over connection strings for production
- Use processors for background work — Handles lock renewal automatically
- Use safe batching — CreateMessageBatchAsync() and TryAddMessage()
- Handle transient errors — Use ServiceBusException.Reason

### Imported Operating Notes

#### Imported: Best Practices

1. **Use singletons** — Clients, senders, receivers, and processors are thread-safe
2. **Always dispose** — Use `await using` or call `DisposeAsync()`
3. **Dispose order** — Close senders/receivers/processors first, then client
4. **Use DefaultAzureCredential** — Prefer over connection strings for production
5. **Use processors for background work** — Handles lock renewal automatically
6. **Use safe batching** — `CreateMessageBatchAsync()` and `TryAddMessage()`
7. **Handle transient errors** — Use `ServiceBusException.Reason`
8. **Configure transport** — Use `AmqpWebSockets` if ports 5671/5672 are blocked
9. **Set appropriate lock duration** — Default is 30 seconds
10. **Use sessions for ordering** — FIFO within a session

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-servicebus-dotnet`, fails to mention provenance, or does not use the support pack at all.
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
| `ServiceBusClient` | Main entry point, manages connection |
| `ServiceBusSender` | Sends messages to queues/topics |
| `ServiceBusReceiver` | Receives messages from queues/subscriptions |
| `ServiceBusSessionReceiver` | Receives session messages |
| `ServiceBusProcessor` | Background message processing |
| `ServiceBusSessionProcessor` | Background session processing |
| `ServiceBusAdministrationClient` | CRUD for queues/topics/subscriptions |
| `ServiceBusMessage` | Message to send |
| `ServiceBusReceivedMessage` | Received message with metadata |
| `ServiceBusMessageBatch` | Batch of messages |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.Messaging.ServiceBus |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.messaging.servicebus |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/servicebus/Azure.Messaging.ServiceBus |
| Troubleshooting | https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/servicebus/Azure.Messaging.ServiceBus/TROUBLESHOOTING.md |

#### Imported: Authentication

### Microsoft Entra ID (Recommended)

```csharp
using Azure.Identity;
using Azure.Messaging.ServiceBus;

string fullyQualifiedNamespace = "<namespace>.servicebus.windows.net";
await using ServiceBusClient client = new(fullyQualifiedNamespace, new DefaultAzureCredential());
```

### Connection String

```csharp
string connectionString = "<connection_string>";
await using ServiceBusClient client = new(connectionString);
```

### ASP.NET Core Dependency Injection

```csharp
services.AddAzureClients(builder =>
{
    builder.AddServiceBusClientWithNamespace("<namespace>.servicebus.windows.net");
    builder.UseCredential(new DefaultAzureCredential());
});
```

#### Imported: Client Hierarchy

```
ServiceBusClient
├── CreateSender(queueOrTopicName)      → ServiceBusSender
├── CreateReceiver(queueName)           → ServiceBusReceiver
├── CreateReceiver(topicName, subName)  → ServiceBusReceiver
├── AcceptNextSessionAsync(queueName)   → ServiceBusSessionReceiver
├── CreateProcessor(queueName)          → ServiceBusProcessor
└── CreateSessionProcessor(queueName)   → ServiceBusSessionProcessor

ServiceBusAdministrationClient (separate client for CRUD)
```

#### Imported: Error Handling

```csharp
try
{
    await sender.SendMessageAsync(message);
}
catch (ServiceBusException ex) when (ex.Reason == ServiceBusFailureReason.ServiceBusy)
{
    // Retry with backoff
}
catch (ServiceBusException ex)
{
    Console.WriteLine($"Service Bus Error: {ex.Reason} - {ex.Message}");
}
```
