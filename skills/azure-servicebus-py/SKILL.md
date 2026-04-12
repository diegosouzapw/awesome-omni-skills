---
name: azure-servicebus-py
description: "Azure Service Bus SDK for Python workflow skill. Use this skill when the user needs Azure Service Bus SDK for Python messaging. Use for queues, topics, subscriptions, and enterprise messaging patterns and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-servicebus-py", "azure", "service", "bus", "sdk", "for", "python", "messaging"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Service Bus SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-servicebus-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Service Bus SDK for Python Enterprise messaging for reliable cloud communication with queues and pub/sub topics.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Types, Send Messages (Async), Receive Messages (Async), Receive Modes.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Service Bus SDK for Python messaging. Use for queues, topics, subscriptions, and enterprise messaging patterns.
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

1. bash pip install azure-servicebus azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-servicebus azure-identity
```

#### Imported: Environment Variables

```bash
SERVICEBUS_FULLY_QUALIFIED_NAMESPACE=<namespace>.servicebus.windows.net
SERVICEBUS_QUEUE_NAME=myqueue
SERVICEBUS_TOPIC_NAME=mytopic
SERVICEBUS_SUBSCRIPTION_NAME=mysubscription
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-servicebus-py to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-servicebus-py/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-servicebus-py/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-servicebus-py using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use async client for production workloads
- Use context managers (async with) for proper cleanup
- Complete messages after successful processing
- Use dead-letter queue for poison messages
- Use sessions for ordered, FIFO processing
- Use message batches for high-throughput scenarios
- Set maxwaittime to avoid infinite blocking

### Imported Operating Notes

#### Imported: Best Practices

1. **Use async client** for production workloads
2. **Use context managers** (`async with`) for proper cleanup
3. **Complete messages** after successful processing
4. **Use dead-letter queue** for poison messages
5. **Use sessions** for ordered, FIFO processing
6. **Use message batches** for high-throughput scenarios
7. **Set `max_wait_time`** to avoid infinite blocking

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-servicebus-py`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Reference Files

| File | Contents |
|------|----------|
| references/patterns.md | Competing consumers, sessions, retry patterns, request-response, transactions |
| references/dead-letter.md | DLQ handling, poison messages, reprocessing strategies |
| scripts/setup_servicebus.py | CLI for queue/topic/subscription management and DLQ monitoring |

#### Imported: Authentication

```python
from azure.identity import DefaultAzureCredential
from azure.servicebus import ServiceBusClient

credential = DefaultAzureCredential()
namespace = "<namespace>.servicebus.windows.net"

client = ServiceBusClient(
    fully_qualified_namespace=namespace,
    credential=credential
)
```

#### Imported: Client Types

| Client | Purpose | Get From |
|--------|---------|----------|
| `ServiceBusClient` | Connection management | Direct instantiation |
| `ServiceBusSender` | Send messages | `client.get_queue_sender()` / `get_topic_sender()` |
| `ServiceBusReceiver` | Receive messages | `client.get_queue_receiver()` / `get_subscription_receiver()` |

#### Imported: Send Messages (Async)

```python
import asyncio
from azure.servicebus.aio import ServiceBusClient
from azure.servicebus import ServiceBusMessage
from azure.identity.aio import DefaultAzureCredential

async def send_messages():
    credential = DefaultAzureCredential()
    
    async with ServiceBusClient(
        fully_qualified_namespace="<namespace>.servicebus.windows.net",
        credential=credential
    ) as client:
        sender = client.get_queue_sender(queue_name="myqueue")
        
        async with sender:
            # Single message
            message = ServiceBusMessage("Hello, Service Bus!")
            await sender.send_messages(message)
            
            # Batch of messages
            messages = [ServiceBusMessage(f"Message {i}") for i in range(10)]
            await sender.send_messages(messages)
            
            # Message batch (for size control)
            batch = await sender.create_message_batch()
            for i in range(100):
                try:
                    batch.add_message(ServiceBusMessage(f"Batch message {i}"))
                except ValueError:  # Batch full
                    await sender.send_messages(batch)
                    batch = await sender.create_message_batch()
                    batch.add_message(ServiceBusMessage(f"Batch message {i}"))
            await sender.send_messages(batch)

asyncio.run(send_messages())
```

#### Imported: Receive Messages (Async)

```python
async def receive_messages():
    credential = DefaultAzureCredential()
    
    async with ServiceBusClient(
        fully_qualified_namespace="<namespace>.servicebus.windows.net",
        credential=credential
    ) as client:
        receiver = client.get_queue_receiver(queue_name="myqueue")
        
        async with receiver:
            # Receive batch
            messages = await receiver.receive_messages(
                max_message_count=10,
                max_wait_time=5  # seconds
            )
            
            for msg in messages:
                print(f"Received: {str(msg)}")
                await receiver.complete_message(msg)  # Remove from queue

asyncio.run(receive_messages())
```

#### Imported: Receive Modes

| Mode | Behavior | Use Case |
|------|----------|----------|
| `PEEK_LOCK` (default) | Message locked, must complete/abandon | Reliable processing |
| `RECEIVE_AND_DELETE` | Removed immediately on receive | At-most-once delivery |

```python
from azure.servicebus import ServiceBusReceiveMode

receiver = client.get_queue_receiver(
    queue_name="myqueue",
    receive_mode=ServiceBusReceiveMode.RECEIVE_AND_DELETE
)
```

#### Imported: Message Settlement

```python
async with receiver:
    messages = await receiver.receive_messages(max_message_count=1)
    
    for msg in messages:
        try:
            # Process message...
            await receiver.complete_message(msg)  # Success - remove from queue
        except ProcessingError:
            await receiver.abandon_message(msg)  # Retry later
        except PermanentError:
            await receiver.dead_letter_message(
                msg,
                reason="ProcessingFailed",
                error_description="Could not process"
            )
```

| Action | Effect |
|--------|--------|
| `complete_message()` | Remove from queue (success) |
| `abandon_message()` | Release lock, retry immediately |
| `dead_letter_message()` | Move to dead-letter queue |
| `defer_message()` | Set aside, receive by sequence number |

#### Imported: Topics and Subscriptions

```python
# Send to topic
sender = client.get_topic_sender(topic_name="mytopic")
async with sender:
    await sender.send_messages(ServiceBusMessage("Topic message"))

# Receive from subscription
receiver = client.get_subscription_receiver(
    topic_name="mytopic",
    subscription_name="mysubscription"
)
async with receiver:
    messages = await receiver.receive_messages(max_message_count=10)
```

#### Imported: Sessions (FIFO)

```python
# Send with session
message = ServiceBusMessage("Session message")
message.session_id = "order-123"
await sender.send_messages(message)

# Receive from specific session
receiver = client.get_queue_receiver(
    queue_name="session-queue",
    session_id="order-123"
)

# Receive from next available session
from azure.servicebus import NEXT_AVAILABLE_SESSION
receiver = client.get_queue_receiver(
    queue_name="session-queue",
    session_id=NEXT_AVAILABLE_SESSION
)
```

#### Imported: Scheduled Messages

```python
from datetime import datetime, timedelta, timezone

message = ServiceBusMessage("Scheduled message")
scheduled_time = datetime.now(timezone.utc) + timedelta(minutes=10)

# Schedule message
sequence_number = await sender.schedule_messages(message, scheduled_time)

# Cancel scheduled message
await sender.cancel_scheduled_messages(sequence_number)
```

#### Imported: Dead-Letter Queue

```python
from azure.servicebus import ServiceBusSubQueue

# Receive from dead-letter queue
dlq_receiver = client.get_queue_receiver(
    queue_name="myqueue",
    sub_queue=ServiceBusSubQueue.DEAD_LETTER
)

async with dlq_receiver:
    messages = await dlq_receiver.receive_messages(max_message_count=10)
    for msg in messages:
        print(f"Dead-lettered: {msg.dead_letter_reason}")
        await dlq_receiver.complete_message(msg)
```

#### Imported: Sync Client (for simple scripts)

```python
from azure.servicebus import ServiceBusClient, ServiceBusMessage
from azure.identity import DefaultAzureCredential

with ServiceBusClient(
    fully_qualified_namespace="<namespace>.servicebus.windows.net",
    credential=DefaultAzureCredential()
) as client:
    with client.get_queue_sender("myqueue") as sender:
        sender.send_messages(ServiceBusMessage("Sync message"))
    
    with client.get_queue_receiver("myqueue") as receiver:
        for msg in receiver:
            print(str(msg))
            receiver.complete_message(msg)
```
