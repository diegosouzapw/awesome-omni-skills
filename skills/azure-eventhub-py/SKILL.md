---
name: azure-eventhub-py
description: "Azure Event Hubs SDK for Python workflow skill. Use this skill when the user needs Azure Event Hubs SDK for Python streaming. Use for high-throughput event ingestion, producers, consumers, and checkpointing and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["azure-eventhub-py", "azure", "event", "hubs", "sdk", "for", "python", "streaming"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure Event Hubs SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-eventhub-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Event Hubs SDK for Python Big data streaming platform for high-throughput event ingestion.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Types, Send Events, Receive Events, Async Client.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Event Hubs SDK for Python streaming. Use for high-throughput event ingestion, producers, consumers, and checkpointing.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash pip install azure-eventhub azure-identity # For checkpointing with blob storage pip install azure-eventhub-checkpointstoreblob-aio
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-eventhub azure-identity
# For checkpointing with blob storage
pip install azure-eventhub-checkpointstoreblob-aio
```

#### Imported: Environment Variables

```bash
EVENT_HUB_FULLY_QUALIFIED_NAMESPACE=<namespace>.servicebus.windows.net
EVENT_HUB_NAME=my-eventhub
STORAGE_ACCOUNT_URL=https://<account>.blob.core.windows.net
CHECKPOINT_CONTAINER=checkpoints
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-eventhub-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-eventhub-py against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-eventhub-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-eventhub-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use batches for sending multiple events
- Use checkpoint store in production for reliable processing
- Use async client for high-throughput scenarios
- Use partition keys for ordered delivery within a partition
- Handle batch size limits — catch ValueError when batch is full
- Use context managers (with/async with) for proper cleanup
- Set appropriate consumer groups for different applications

### Imported Operating Notes

#### Imported: Best Practices

1. **Use batches** for sending multiple events
2. **Use checkpoint store** in production for reliable processing
3. **Use async client** for high-throughput scenarios
4. **Use partition keys** for ordered delivery within a partition
5. **Handle batch size limits** — catch ValueError when batch is full
6. **Use context managers** (`with`/`async with`) for proper cleanup
7. **Set appropriate consumer groups** for different applications

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-eventhub-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Reference Files

| File | Contents |
|------|----------|
| references/checkpointing.md | Checkpoint store patterns, blob checkpointing, checkpoint strategies |
| references/partitions.md | Partition management, load balancing, starting positions |
| scripts/setup_consumer.py | CLI for Event Hub info, consumer setup, and event sending/receiving |

#### Imported: Authentication

```python
from azure.identity import DefaultAzureCredential
from azure.eventhub import EventHubProducerClient, EventHubConsumerClient

credential = DefaultAzureCredential()
namespace = "<namespace>.servicebus.windows.net"
eventhub_name = "my-eventhub"

# Producer
producer = EventHubProducerClient(
    fully_qualified_namespace=namespace,
    eventhub_name=eventhub_name,
    credential=credential
)

# Consumer
consumer = EventHubConsumerClient(
    fully_qualified_namespace=namespace,
    eventhub_name=eventhub_name,
    consumer_group="$Default",
    credential=credential
)
```

#### Imported: Client Types

| Client | Purpose |
|--------|---------|
| `EventHubProducerClient` | Send events to Event Hub |
| `EventHubConsumerClient` | Receive events from Event Hub |
| `BlobCheckpointStore` | Track consumer progress |

#### Imported: Send Events

```python
from azure.eventhub import EventHubProducerClient, EventData
from azure.identity import DefaultAzureCredential

producer = EventHubProducerClient(
    fully_qualified_namespace="<namespace>.servicebus.windows.net",
    eventhub_name="my-eventhub",
    credential=DefaultAzureCredential()
)

with producer:
    # Create batch (handles size limits)
    event_data_batch = producer.create_batch()
    
    for i in range(10):
        try:
            event_data_batch.add(EventData(f"Event {i}"))
        except ValueError:
            # Batch is full, send and create new one
            producer.send_batch(event_data_batch)
            event_data_batch = producer.create_batch()
            event_data_batch.add(EventData(f"Event {i}"))
    
    # Send remaining
    producer.send_batch(event_data_batch)
```

### Send to Specific Partition

```python
# By partition ID
event_data_batch = producer.create_batch(partition_id="0")

# By partition key (consistent hashing)
event_data_batch = producer.create_batch(partition_key="user-123")
```

#### Imported: Receive Events

### Simple Receive

```python
from azure.eventhub import EventHubConsumerClient

def on_event(partition_context, event):
    print(f"Partition: {partition_context.partition_id}")
    print(f"Data: {event.body_as_str()}")
    partition_context.update_checkpoint(event)

consumer = EventHubConsumerClient(
    fully_qualified_namespace="<namespace>.servicebus.windows.net",
    eventhub_name="my-eventhub",
    consumer_group="$Default",
    credential=DefaultAzureCredential()
)

with consumer:
    consumer.receive(
        on_event=on_event,
        starting_position="-1",  # Beginning of stream
    )
```

### With Blob Checkpoint Store (Production)

```python
from azure.eventhub import EventHubConsumerClient
from azure.eventhub.extensions.checkpointstoreblob import BlobCheckpointStore
from azure.identity import DefaultAzureCredential

checkpoint_store = BlobCheckpointStore(
    blob_account_url="https://<account>.blob.core.windows.net",
    container_name="checkpoints",
    credential=DefaultAzureCredential()
)

consumer = EventHubConsumerClient(
    fully_qualified_namespace="<namespace>.servicebus.windows.net",
    eventhub_name="my-eventhub",
    consumer_group="$Default",
    credential=DefaultAzureCredential(),
    checkpoint_store=checkpoint_store
)

def on_event(partition_context, event):
    print(f"Received: {event.body_as_str()}")
    # Checkpoint after processing
    partition_context.update_checkpoint(event)

with consumer:
    consumer.receive(on_event=on_event)
```

#### Imported: Async Client

```python
from azure.eventhub.aio import EventHubProducerClient, EventHubConsumerClient
from azure.identity.aio import DefaultAzureCredential
import asyncio

async def send_events():
    credential = DefaultAzureCredential()
    
    async with EventHubProducerClient(
        fully_qualified_namespace="<namespace>.servicebus.windows.net",
        eventhub_name="my-eventhub",
        credential=credential
    ) as producer:
        batch = await producer.create_batch()
        batch.add(EventData("Async event"))
        await producer.send_batch(batch)

async def receive_events():
    async def on_event(partition_context, event):
        print(event.body_as_str())
        await partition_context.update_checkpoint(event)
    
    async with EventHubConsumerClient(
        fully_qualified_namespace="<namespace>.servicebus.windows.net",
        eventhub_name="my-eventhub",
        consumer_group="$Default",
        credential=DefaultAzureCredential()
    ) as consumer:
        await consumer.receive(on_event=on_event)

asyncio.run(send_events())
```

#### Imported: Event Properties

```python
event = EventData("My event body")

# Set properties
event.properties = {"custom_property": "value"}
event.content_type = "application/json"

# Read properties (on receive)
print(event.body_as_str())
print(event.sequence_number)
print(event.offset)
print(event.enqueued_time)
print(event.partition_key)
```

#### Imported: Get Event Hub Info

```python
with producer:
    info = producer.get_eventhub_properties()
    print(f"Name: {info['name']}")
    print(f"Partitions: {info['partition_ids']}")
    
    for partition_id in info['partition_ids']:
        partition_info = producer.get_partition_properties(partition_id)
        print(f"Partition {partition_id}: {partition_info['last_enqueued_sequence_number']}")
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
