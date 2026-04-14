---
name: azure-servicebus-ts
description: "Azure Service Bus SDK for TypeScript workflow skill. Use this skill when the user needs Enterprise messaging with queues, topics, and subscriptions and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-servicebus-ts", "enterprise", "messaging", "queues", "topics", "and", "subscriptions", "cli-automation"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure Service Bus SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-servicebus-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Service Bus SDK for TypeScript Enterprise messaging with queues, topics, and subscriptions.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Message Sessions, Dead-Letter Handling, Scheduled Messages, Message Deferral.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Enterprise messaging with queues, topics, and subscriptions.
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

1. bash npm install @azure/service-bus @azure/identity ### Send Messages to Queue typescript const sender = client.createSender("my-queue"); // Single message await sender.sendMessages({ body: { orderId: "12345", amount: 99.99 }, contentType: "application/json", }); // Batch messages const batch = await sender.createMessageBatch(); batch.tryAddMessage({ body: "Message 1" }); batch.tryAddMessage({ body: "Message 2" }); await sender.sendMessages(batch); await sender.close(); ### Receive Messages from Queue typescript const receiver = client.createReceiver("my-queue"); // Receive batch const messages = await receiver.receiveMessages(10, { maxWaitTimeInMs: 5000 }); for (const message of messages) { console.log(Received: ${message.body}); await receiver.completeMessage(message); } await receiver.close(); ### Subscribe to Messages (Event-Driven) typescript const receiver = client.createReceiver("my-queue"); const subscription = receiver.subscribe({ processMessage: async (message) => { console.log(Processing: ${message.body}); // Message auto-completed on success }, processError: async (args) => { console.error(Error: ${args.error}); }, }); // Stop after some time setTimeout(async () => { await subscription.close(); await receiver.close(); }, 60000); ### Topics and Subscriptions typescript // Send to topic const topicSender = client.createSender("my-topic"); await topicSender.sendMessages({ body: { event: "order.created", data: { orderId: "123" } }, applicationProperties: { eventType: "order.created" }, }); // Receive from subscription const subscriptionReceiver = client.createReceiver("my-topic", "my-subscription"); const messages = await subscriptionReceiver.receiveMessages(10);
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/service-bus @azure/identity
```

#### Imported: Core Workflow

### Send Messages to Queue

```typescript
const sender = client.createSender("my-queue");

// Single message
await sender.sendMessages({
  body: { orderId: "12345", amount: 99.99 },
  contentType: "application/json",
});

// Batch messages
const batch = await sender.createMessageBatch();
batch.tryAddMessage({ body: "Message 1" });
batch.tryAddMessage({ body: "Message 2" });
await sender.sendMessages(batch);

await sender.close();
```

### Receive Messages from Queue

```typescript
const receiver = client.createReceiver("my-queue");

// Receive batch
const messages = await receiver.receiveMessages(10, { maxWaitTimeInMs: 5000 });
for (const message of messages) {
  console.log(`Received: ${message.body}`);
  await receiver.completeMessage(message);
}

await receiver.close();
```

### Subscribe to Messages (Event-Driven)

```typescript
const receiver = client.createReceiver("my-queue");

const subscription = receiver.subscribe({
  processMessage: async (message) => {
    console.log(`Processing: ${message.body}`);
    // Message auto-completed on success
  },
  processError: async (args) => {
    console.error(`Error: ${args.error}`);
  },
});

// Stop after some time
setTimeout(async () => {
  await subscription.close();
  await receiver.close();
}, 60000);
```

### Topics and Subscriptions

```typescript
// Send to topic
const topicSender = client.createSender("my-topic");
await topicSender.sendMessages({
  body: { event: "order.created", data: { orderId: "123" } },
  applicationProperties: { eventType: "order.created" },
});

// Receive from subscription
const subscriptionReceiver = client.createReceiver("my-topic", "my-subscription");
const messages = await subscriptionReceiver.receiveMessages(10);
```

#### Imported: Environment Variables

```bash
SERVICEBUS_NAMESPACE=<namespace>.servicebus.windows.net
SERVICEBUS_QUEUE_NAME=my-queue
SERVICEBUS_TOPIC_NAME=my-topic
SERVICEBUS_SUBSCRIPTION_NAME=my-subscription
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-servicebus-ts to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-servicebus-ts/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-servicebus-ts/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-servicebus-ts using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use Entra ID auth - Avoid connection strings in production
- Reuse clients - Create ServiceBusClient once, share across senders/receivers
- Close resources - Always close senders/receivers when done
- Handle errors - Implement processError callback for subscription receivers
- Use sessions for ordering - When message order matters within a group
- Configure dead-letter - Always handle DLQ messages
- Batch sends - Use createMessageBatch() for multiple messages

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Entra ID auth** - Avoid connection strings in production
2. **Reuse clients** - Create `ServiceBusClient` once, share across senders/receivers
3. **Close resources** - Always close senders/receivers when done
4. **Handle errors** - Implement `processError` callback for subscription receivers
5. **Use sessions for ordering** - When message order matters within a group
6. **Configure dead-letter** - Always handle DLQ messages
7. **Batch sends** - Use `createMessageBatch()` for multiple messages

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-servicebus-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Reference Documentation

For detailed patterns, see:

- Queues vs Topics Patterns - Queue/topic patterns, sessions, receive modes, message settlement
- Error Handling and Reliability - ServiceBusError codes, DLQ handling, lock renewal, graceful shutdown

#### Imported: Authentication

```typescript
import { ServiceBusClient } from "@azure/service-bus";
import { DefaultAzureCredential } from "@azure/identity";

const fullyQualifiedNamespace = process.env.SERVICEBUS_NAMESPACE!;
const client = new ServiceBusClient(fullyQualifiedNamespace, new DefaultAzureCredential());
```

#### Imported: Message Sessions

```typescript
// Send session message
const sender = client.createSender("session-queue");
await sender.sendMessages({
  body: { step: 1, data: "First step" },
  sessionId: "workflow-123",
});

// Receive session messages
const sessionReceiver = await client.acceptSession("session-queue", "workflow-123");
const messages = await sessionReceiver.receiveMessages(10);

// Get/set session state
const state = await sessionReceiver.getSessionState();
await sessionReceiver.setSessionState(Buffer.from(JSON.stringify({ progress: 50 })));

await sessionReceiver.close();
```

#### Imported: Dead-Letter Handling

```typescript
// Move to dead-letter
await receiver.deadLetterMessage(message, {
  deadLetterReason: "Validation failed",
  deadLetterErrorDescription: "Missing required field: orderId",
});

// Process dead-letter queue
const dlqReceiver = client.createReceiver("my-queue", { subQueueType: "deadLetter" });
const dlqMessages = await dlqReceiver.receiveMessages(10);
for (const msg of dlqMessages) {
  console.log(`DLQ Reason: ${msg.deadLetterReason}`);
  // Reprocess or log
  await dlqReceiver.completeMessage(msg);
}
```

#### Imported: Scheduled Messages

```typescript
const sender = client.createSender("my-queue");

// Schedule for future delivery
const scheduledTime = new Date(Date.now() + 60000); // 1 minute from now
const sequenceNumber = await sender.scheduleMessages(
  { body: "Delayed message" },
  scheduledTime
);

// Cancel scheduled message
await sender.cancelScheduledMessages(sequenceNumber);
```

#### Imported: Message Deferral

```typescript
// Defer message for later
await receiver.deferMessage(message);

// Receive deferred message by sequence number
const deferredMessage = await receiver.receiveDeferredMessages(message.sequenceNumber!);
await receiver.completeMessage(deferredMessage[0]);
```

#### Imported: Peek Messages (Non-Destructive)

```typescript
const receiver = client.createReceiver("my-queue");

// Peek without removing
const peekedMessages = await receiver.peekMessages(10);
for (const msg of peekedMessages) {
  console.log(`Peeked: ${msg.body}`);
}
```

#### Imported: Key Types

```typescript
import {
  ServiceBusClient,
  ServiceBusSender,
  ServiceBusReceiver,
  ServiceBusSessionReceiver,
  ServiceBusMessage,
  ServiceBusReceivedMessage,
  ProcessMessageCallback,
  ProcessErrorCallback,
} from "@azure/service-bus";
```

#### Imported: Receive Modes

```typescript
// Peek-Lock (default) - message locked until completed/abandoned
const receiver = client.createReceiver("my-queue", { receiveMode: "peekLock" });
await receiver.completeMessage(message);   // Remove from queue
await receiver.abandonMessage(message);    // Return to queue
await receiver.deferMessage(message);      // Defer for later
await receiver.deadLetterMessage(message); // Move to DLQ

// Receive-and-Delete - message removed immediately
const receiver = client.createReceiver("my-queue", { receiveMode: "receiveAndDelete" });
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
