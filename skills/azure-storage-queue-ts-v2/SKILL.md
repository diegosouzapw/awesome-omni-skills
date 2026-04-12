---
name: azure-storage-queue-ts-v2
description: "@azure/storage-queue (TypeScript/JavaScript) workflow skill. Use this skill when the user needs Azure Queue Storage JavaScript/TypeScript SDK (@azure/storage-queue) for message queue operations. Use for sending, receiving, peeking, and deleting messages in queues and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["azure-storage-queue-ts-v2", "azure-storage-queue-ts", "azure", "queue", "storage", "javascript", "typescript", "sdk"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# @azure/storage-queue (TypeScript/JavaScript)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-storage-queue-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# @azure/storage-queue (TypeScript/JavaScript) SDK for Azure Queue Storage operations — send, receive, peek, and manage messages in queues.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Queue Operations, Message Operations, Message Encoding.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Queue Storage JavaScript/TypeScript SDK (@azure/storage-queue) for message queue operations. Use for sending, receiving, peeking, and deleting messages in queues.
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

1. bash npm install @azure/storage-queue @azure/identity Current Version: 12.x Node.js: >= 18.0.0 ### Basic Worker Pattern typescript async function processQueue(queueClient: QueueClient): Promise<void> { while (true) { const response = await queueClient.receiveMessages({ numberOfMessages: 10, visibilityTimeout: 30, }); if (response.receivedMessageItems.length === 0) { // No messages, wait before polling again await sleep(5000); continue; } for (const message of response.receivedMessageItems) { try { await processMessage(message.messageText); await queueClient.deleteMessage(message.messageId, message.popReceipt); } catch (error) { console.error(Failed to process message ${message.messageId}:, error); // Message will become visible again after timeout } } } } async function processMessage(content: string): Promise<void> { const task = JSON.parse(content); // Process task...
2. } function sleep(ms: number): Promise<void> { return new Promise((resolve) => setTimeout(resolve, ms)); } ### Poison Message Handling typescript const MAXDEQUEUECOUNT = 5; async function processWithPoisonHandling( queueClient: QueueClient, poisonQueueClient: QueueClient ): Promise<void> { const response = await queueClient.receiveMessages({ numberOfMessages: 10, visibilityTimeout: 30, }); for (const message of response.receivedMessageItems) { if (message.dequeueCount > MAXDEQUEUECOUNT) { // Move to poison queue await poisonQueueClient.sendMessage(message.messageText); await queueClient.deleteMessage(message.messageId, message.popReceipt); console.log(Moved message ${message.messageId} to poison queue); continue; } try { await processMessage(message.messageText); await queueClient.deleteMessage(message.messageId, message.popReceipt); } catch (error) { console.error(Processing failed (attempt ${message.dequeueCount}):, error); } } } ### Batch Processing with Visibility Extension typescript async function processBatchWithExtension(queueClient: QueueClient): Promise<void> { const response = await queueClient.receiveMessages({ numberOfMessages: 1, visibilityTimeout: 60, }); const message = response.receivedMessageItems[0]; if (!message) return; let popReceipt = message.popReceipt; // Start visibility extension timer const extensionInterval = setInterval(async () => { try { const updateResponse = await queueClient.updateMessage( message.messageId, popReceipt, message.messageText, 60 // Extend by another 60 seconds ); popReceipt = updateResponse.popReceipt; } catch (error) { console.error("Failed to extend visibility:", error); } }, 45000); // Extend every 45 seconds try { await longRunningProcess(message.messageText); await queueClient.deleteMessage(message.messageId, popReceipt); } finally { clearInterval(extensionInterval); } } ``
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview, playbook, and source summary before loading any upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the checklist, rubric, and expected evidence for the task.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/storage-queue @azure/identity
```

**Current Version**: 12.x  
**Node.js**: >= 18.0.0

#### Imported: Message Processing Patterns

### Basic Worker Pattern

```typescript
async function processQueue(queueClient: QueueClient): Promise<void> {
  while (true) {
    const response = await queueClient.receiveMessages({
      numberOfMessages: 10,
      visibilityTimeout: 30,
    });

    if (response.receivedMessageItems.length === 0) {
      // No messages, wait before polling again
      await sleep(5000);
      continue;
    }

    for (const message of response.receivedMessageItems) {
      try {
        await processMessage(message.messageText);
        await queueClient.deleteMessage(message.messageId, message.popReceipt);
      } catch (error) {
        console.error(`Failed to process message ${message.messageId}:`, error);
        // Message will become visible again after timeout
      }
    }
  }
}

async function processMessage(content: string): Promise<void> {
  const task = JSON.parse(content);
  // Process task...
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

### Poison Message Handling

```typescript
const MAX_DEQUEUE_COUNT = 5;

async function processWithPoisonHandling(
  queueClient: QueueClient,
  poisonQueueClient: QueueClient
): Promise<void> {
  const response = await queueClient.receiveMessages({
    numberOfMessages: 10,
    visibilityTimeout: 30,
  });

  for (const message of response.receivedMessageItems) {
    if (message.dequeueCount > MAX_DEQUEUE_COUNT) {
      // Move to poison queue
      await poisonQueueClient.sendMessage(message.messageText);
      await queueClient.deleteMessage(message.messageId, message.popReceipt);
      console.log(`Moved message ${message.messageId} to poison queue`);
      continue;
    }

    try {
      await processMessage(message.messageText);
      await queueClient.deleteMessage(message.messageId, message.popReceipt);
    } catch (error) {
      console.error(`Processing failed (attempt ${message.dequeueCount}):`, error);
    }
  }
}
```

### Batch Processing with Visibility Extension

```typescript
async function processBatchWithExtension(queueClient: QueueClient): Promise<void> {
  const response = await queueClient.receiveMessages({
    numberOfMessages: 1,
    visibilityTimeout: 60,
  });

  const message = response.receivedMessageItems[0];
  if (!message) return;

  let popReceipt = message.popReceipt;

  // Start visibility extension timer
  const extensionInterval = setInterval(async () => {
    try {
      const updateResponse = await queueClient.updateMessage(
        message.messageId,
        popReceipt,
        message.messageText,
        60 // Extend by another 60 seconds
      );
      popReceipt = updateResponse.popReceipt;
    } catch (error) {
      console.error("Failed to extend visibility:", error);
    }
  }, 45000); // Extend every 45 seconds

  try {
    await longRunningProcess(message.messageText);
    await queueClient.deleteMessage(message.messageId, popReceipt);
  } finally {
    clearInterval(extensionInterval);
  }
}
```

#### Imported: Environment Variables

```bash
AZURE_STORAGE_ACCOUNT_NAME=<account-name>
AZURE_STORAGE_ACCOUNT_KEY=<account-key>
# OR connection string
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-storage-queue-ts-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-storage-queue-ts-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-storage-queue-ts-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-storage-queue-ts-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use DefaultAzureCredential — Prefer AAD over connection strings/keys
- Always delete after processing — Prevent duplicate processing
- Handle poison messages — Move failed messages to a dead-letter queue
- Use appropriate visibility timeout — Set based on expected processing time
- Extend visibility for long tasks — Update message to prevent timeout
- Use JSON for structured data — Serialize objects to JSON strings
- Check dequeueCount — Detect repeatedly failing messages

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** — Prefer AAD over connection strings/keys
2. **Always delete after processing** — Prevent duplicate processing
3. **Handle poison messages** — Move failed messages to a dead-letter queue
4. **Use appropriate visibility timeout** — Set based on expected processing time
5. **Extend visibility for long tasks** — Update message to prevent timeout
6. **Use JSON for structured data** — Serialize objects to JSON strings
7. **Check dequeueCount** — Detect repeatedly failing messages
8. **Use batch receive** — Receive multiple messages for efficiency

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-storage-queue-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: TypeScript Types Reference

```typescript
import {
  // Clients
  QueueServiceClient,
  QueueClient,

  // Authentication
  StorageSharedKeyCredential,
  AnonymousCredential,

  // SAS
  QueueSASPermissions,
  AccountSASPermissions,
  AccountSASServices,
  AccountSASResourceTypes,
  generateQueueSASQueryParameters,
  generateAccountSASQueryParameters,

  // Messages
  DequeuedMessageItem,
  PeekedMessageItem,
  QueueSendMessageResponse,
  QueueReceiveMessageResponse,
  QueueUpdateMessageResponse,

  // Queue
  QueueItem,
  QueueGetPropertiesResponse,

  // Errors
  RestError,
} from "@azure/storage-queue";
```

#### Imported: Authentication

### DefaultAzureCredential (Recommended)

```typescript
import { QueueServiceClient } from "@azure/storage-queue";
import { DefaultAzureCredential } from "@azure/identity";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const client = new QueueServiceClient(
  `https://${accountName}.queue.core.windows.net`,
  new DefaultAzureCredential()
);
```

### Connection String

```typescript
import { QueueServiceClient } from "@azure/storage-queue";

const client = QueueServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING!
);
```

### StorageSharedKeyCredential (Node.js only)

```typescript
import { QueueServiceClient, StorageSharedKeyCredential } from "@azure/storage-queue";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY!;

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const client = new QueueServiceClient(
  `https://${accountName}.queue.core.windows.net`,
  sharedKeyCredential
);
```

### SAS Token

```typescript
import { QueueServiceClient } from "@azure/storage-queue";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const sasToken = process.env.AZURE_STORAGE_SAS_TOKEN!;

const client = new QueueServiceClient(
  `https://${accountName}.queue.core.windows.net${sasToken}`
);
```

#### Imported: Client Hierarchy

```
QueueServiceClient (account level)
└── QueueClient (queue level)
    └── Messages (send, receive, peek, delete)
```

#### Imported: Queue Operations

### Create Queue

```typescript
const queueClient = client.getQueueClient("my-queue");
await queueClient.create();

// Or create if not exists
await queueClient.createIfNotExists();
```

### List Queues

```typescript
for await (const queue of client.listQueues()) {
  console.log(queue.name);
}

// With prefix filter
for await (const queue of client.listQueues({ prefix: "task-" })) {
  console.log(queue.name);
}
```

### Delete Queue

```typescript
await queueClient.delete();

// Or delete if exists
await queueClient.deleteIfExists();
```

### Get Queue Properties

```typescript
const properties = await queueClient.getProperties();
console.log("Approximate message count:", properties.approximateMessagesCount);
console.log("Metadata:", properties.metadata);
```

### Set Queue Metadata

```typescript
await queueClient.setMetadata({
  department: "engineering",
  priority: "high",
});
```

#### Imported: Message Operations

### Send Message

```typescript
const queueClient = client.getQueueClient("my-queue");

// Simple message
await queueClient.sendMessage("Hello, World!");

// With options
await queueClient.sendMessage("Delayed message", {
  visibilityTimeout: 60, // Hidden for 60 seconds
  messageTimeToLive: 3600, // Expires in 1 hour
});

// JSON message (must be string)
const task = { type: "process", data: { id: 123 } };
await queueClient.sendMessage(JSON.stringify(task));
```

### Receive Messages

```typescript
// Receive up to 32 messages (default: 1)
const response = await queueClient.receiveMessages({
  numberOfMessages: 10,
  visibilityTimeout: 30, // 30 seconds to process
});

for (const message of response.receivedMessageItems) {
  console.log("Message ID:", message.messageId);
  console.log("Content:", message.messageText);
  console.log("Dequeue Count:", message.dequeueCount);
  console.log("Pop Receipt:", message.popReceipt);
  
  // Process the message...
  
  // Delete after processing
  await queueClient.deleteMessage(message.messageId, message.popReceipt);
}
```

### Peek Messages

Peek without removing from queue (no visibility timeout).

```typescript
const response = await queueClient.peekMessages({
  numberOfMessages: 5,
});

for (const message of response.peekedMessageItems) {
  console.log("Message ID:", message.messageId);
  console.log("Content:", message.messageText);
  // Note: No popReceipt - cannot delete peeked messages
}
```

### Update Message

Extend visibility timeout or update content.

```typescript
// Receive a message
const response = await queueClient.receiveMessages();
const message = response.receivedMessageItems[0];

if (message) {
  // Update content and extend visibility
  const updateResponse = await queueClient.updateMessage(
    message.messageId,
    message.popReceipt,
    "Updated content",
    60 // New visibility timeout in seconds
  );
  
  // Use new popReceipt for subsequent operations
  console.log("New pop receipt:", updateResponse.popReceipt);
}
```

### Delete Message

```typescript
// After receiving
const response = await queueClient.receiveMessages();
const message = response.receivedMessageItems[0];

if (message) {
  await queueClient.deleteMessage(message.messageId, message.popReceipt);
}
```

### Clear All Messages

```typescript
await queueClient.clearMessages();
```

#### Imported: Message Encoding

By default, messages are Base64 encoded. You can customize this:

```typescript
import { QueueClient } from "@azure/storage-queue";

// Custom encoder/decoder for plain text
const queueClient = new QueueClient(
  `https://${accountName}.queue.core.windows.net/my-queue`,
  credential,
  {
    messageEncoding: "text", // "base64" (default) or "text"
  }
);

// Or with custom encoder
const customQueueClient = new QueueClient(
  `https://${accountName}.queue.core.windows.net/my-queue`,
  credential,
  {
    messageEncoding: {
      encode: (message: string) => Buffer.from(message).toString("base64"),
      decode: (message: string) => Buffer.from(message, "base64").toString(),
    },
  }
);
```

#### Imported: SAS Token Generation (Node.js only)

### Generate Queue SAS

```typescript
import {
  QueueSASPermissions,
  generateQueueSASQueryParameters,
  StorageSharedKeyCredential,
} from "@azure/storage-queue";

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

const sasToken = generateQueueSASQueryParameters(
  {
    queueName: "my-queue",
    permissions: QueueSASPermissions.parse("raup"), // read, add, update, process
    startsOn: new Date(),
    expiresOn: new Date(Date.now() + 3600 * 1000), // 1 hour
  },
  sharedKeyCredential
).toString();

const sasUrl = `https://${accountName}.queue.core.windows.net/my-queue?${sasToken}`;
```

### Generate Account SAS

```typescript
import {
  AccountSASPermissions,
  AccountSASResourceTypes,
  AccountSASServices,
  generateAccountSASQueryParameters,
} from "@azure/storage-queue";

const sasToken = generateAccountSASQueryParameters(
  {
    services: AccountSASServices.parse("q").toString(), // queue
    resourceTypes: AccountSASResourceTypes.parse("sco").toString(),
    permissions: AccountSASPermissions.parse("rwdlacupi"),
    expiresOn: new Date(Date.now() + 24 * 3600 * 1000),
  },
  sharedKeyCredential
).toString();
```

#### Imported: Error Handling

```typescript
import { RestError } from "@azure/storage-queue";

try {
  await queueClient.sendMessage("test");
} catch (error) {
  if (error instanceof RestError) {
    switch (error.statusCode) {
      case 404:
        console.log("Queue not found");
        break;
      case 400:
        console.log("Bad request - message too large or invalid");
        break;
      case 403:
        console.log("Access denied");
        break;
      case 409:
        console.log("Queue already exists or being deleted");
        break;
      default:
        console.error(`Storage error ${error.statusCode}: ${error.message}`);
    }
  }
  throw error;
}
```

#### Imported: Message Limits

| Limit | Value |
|-------|-------|
| Max message size | 64 KB |
| Max visibility timeout | 7 days |
| Max time-to-live | 7 days (or -1 for infinite) |
| Max messages per receive | 32 |
| Default visibility timeout | 30 seconds |

#### Imported: Platform Differences

| Feature | Node.js | Browser |
|---------|---------|---------|
| `StorageSharedKeyCredential` | ✅ | ❌ |
| SAS generation | ✅ | ❌ |
| DefaultAzureCredential | ✅ | ❌ |
| Anonymous/SAS access | ✅ | ✅ |
| All message operations | ✅ | ✅ |
