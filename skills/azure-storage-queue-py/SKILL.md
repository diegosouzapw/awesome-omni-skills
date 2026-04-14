---
name: azure-storage-queue-py
description: "Azure Queue Storage SDK for Python workflow skill. Use this skill when the user needs Azure Queue Storage SDK for Python. Use for reliable message queuing, task distribution, and asynchronous processing and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["azure-storage-queue-py", "azure", "queue", "storage", "sdk", "for", "python", "use"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure Queue Storage SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-storage-queue-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Queue Storage SDK for Python Simple, cost-effective message queuing for asynchronous communication.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Queue Operations, Send Messages, Receive Messages, Peek Messages.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Queue Storage SDK for Python. Use for reliable message queuing, task distribution, and asynchronous processing.
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

1. bash pip install azure-storage-queue azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-storage-queue azure-identity
```

#### Imported: Environment Variables

```bash
AZURE_STORAGE_ACCOUNT_URL=https://<account>.queue.core.windows.net
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-storage-queue-py to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-storage-queue-py/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-storage-queue-py/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-storage-queue-py using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Delete messages after processing to prevent reprocessing
- Set appropriate visibility timeout based on processing time
- Handle dequeue_count for poison message detection
- Use async client for high-throughput scenarios
- Use peek_messages for monitoring without affecting queue
- Set timetolive to prevent stale messages
- Consider Service Bus for advanced features (sessions, topics)

### Imported Operating Notes

#### Imported: Best Practices

1. **Delete messages after processing** to prevent reprocessing
2. **Set appropriate visibility timeout** based on processing time
3. **Handle `dequeue_count`** for poison message detection
4. **Use async client** for high-throughput scenarios
5. **Use `peek_messages`** for monitoring without affecting queue
6. **Set `time_to_live`** to prevent stale messages
7. **Consider Service Bus** for advanced features (sessions, topics)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-storage-queue-py`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Authentication

```python
from azure.identity import DefaultAzureCredential
from azure.storage.queue import QueueServiceClient, QueueClient

credential = DefaultAzureCredential()
account_url = "https://<account>.queue.core.windows.net"

# Service client
service_client = QueueServiceClient(account_url=account_url, credential=credential)

# Queue client
queue_client = QueueClient(account_url=account_url, queue_name="myqueue", credential=credential)
```

#### Imported: Queue Operations

```python
# Create queue
service_client.create_queue("myqueue")

# Get queue client
queue_client = service_client.get_queue_client("myqueue")

# Delete queue
service_client.delete_queue("myqueue")

# List queues
for queue in service_client.list_queues():
    print(queue.name)
```

#### Imported: Send Messages

```python
# Send message (string)
queue_client.send_message("Hello, Queue!")

# Send with options
queue_client.send_message(
    content="Delayed message",
    visibility_timeout=60,  # Hidden for 60 seconds
    time_to_live=3600       # Expires in 1 hour
)

# Send JSON
import json
data = {"task": "process", "id": 123}
queue_client.send_message(json.dumps(data))
```

#### Imported: Receive Messages

```python
# Receive messages (makes them invisible temporarily)
messages = queue_client.receive_messages(
    messages_per_page=10,
    visibility_timeout=30  # 30 seconds to process
)

for message in messages:
    print(f"ID: {message.id}")
    print(f"Content: {message.content}")
    print(f"Dequeue count: {message.dequeue_count}")
    
    # Process message...
    
    # Delete after processing
    queue_client.delete_message(message)
```

#### Imported: Peek Messages

```python
# Peek without hiding (doesn't affect visibility)
messages = queue_client.peek_messages(max_messages=5)

for message in messages:
    print(message.content)
```

#### Imported: Update Message

```python
# Extend visibility or update content
messages = queue_client.receive_messages()
for message in messages:
    # Extend timeout (need more time)
    queue_client.update_message(
        message,
        visibility_timeout=60
    )
    
    # Update content and timeout
    queue_client.update_message(
        message,
        content="Updated content",
        visibility_timeout=60
    )
```

#### Imported: Delete Message

```python
# Delete after successful processing
messages = queue_client.receive_messages()
for message in messages:
    try:
        # Process...
        queue_client.delete_message(message)
    except Exception:
        # Message becomes visible again after timeout
        pass
```

#### Imported: Clear Queue

```python
# Delete all messages
queue_client.clear_messages()
```

#### Imported: Queue Properties

```python
# Get queue properties
properties = queue_client.get_queue_properties()
print(f"Approximate message count: {properties.approximate_message_count}")

# Set/get metadata
queue_client.set_queue_metadata(metadata={"environment": "production"})
properties = queue_client.get_queue_properties()
print(properties.metadata)
```

#### Imported: Async Client

```python
from azure.storage.queue.aio import QueueServiceClient, QueueClient
from azure.identity.aio import DefaultAzureCredential

async def queue_operations():
    credential = DefaultAzureCredential()
    
    async with QueueClient(
        account_url="https://<account>.queue.core.windows.net",
        queue_name="myqueue",
        credential=credential
    ) as client:
        # Send
        await client.send_message("Async message")
        
        # Receive
        async for message in client.receive_messages():
            print(message.content)
            await client.delete_message(message)

import asyncio
asyncio.run(queue_operations())
```

#### Imported: Base64 Encoding

```python
from azure.storage.queue import QueueClient, BinaryBase64EncodePolicy, BinaryBase64DecodePolicy

# For binary data
queue_client = QueueClient(
    account_url=account_url,
    queue_name="myqueue",
    credential=credential,
    message_encode_policy=BinaryBase64EncodePolicy(),
    message_decode_policy=BinaryBase64DecodePolicy()
)

# Send bytes
queue_client.send_message(b"Binary content")
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
