---
name: azure-eventgrid-py
description: "Azure Event Grid SDK for Python workflow skill. Use this skill when the user needs Azure Event Grid SDK for Python. Use for publishing events, handling CloudEvents, and event-driven architectures and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["azure-eventgrid-py", "azure", "event", "grid", "sdk", "for", "python", "use"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure Event Grid SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-eventgrid-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Event Grid SDK for Python Event routing service for building event-driven applications with pub/sub semantics.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Event Types, Publish CloudEvents, Publish EventGridEvents, Event Properties.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Event Grid SDK for Python. Use for publishing events, handling CloudEvents, and event-driven architectures.
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

1. bash pip install azure-eventgrid azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-eventgrid azure-identity
```

#### Imported: Environment Variables

```bash
EVENTGRID_TOPIC_ENDPOINT=https://<topic-name>.<region>.eventgrid.azure.net/api/events
EVENTGRID_NAMESPACE_ENDPOINT=https://<namespace>.<region>.eventgrid.azure.net
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-eventgrid-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-eventgrid-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-eventgrid-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-eventgrid-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use CloudEvents for new applications (industry standard)
- Batch events when publishing multiple events
- Include meaningful subjects for filtering
- Use async client for high-throughput scenarios
- Handle retries — Event Grid has built-in retry
- Set appropriate event types for routing and filtering
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use CloudEvents** for new applications (industry standard)
2. **Batch events** when publishing multiple events
3. **Include meaningful subjects** for filtering
4. **Use async client** for high-throughput scenarios
5. **Handle retries** — Event Grid has built-in retry
6. **Set appropriate event types** for routing and filtering

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-eventgrid-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

```python
from azure.identity import DefaultAzureCredential
from azure.eventgrid import EventGridPublisherClient

credential = DefaultAzureCredential()
endpoint = "https://<topic-name>.<region>.eventgrid.azure.net/api/events"

client = EventGridPublisherClient(endpoint, credential)
```

#### Imported: Event Types

| Format | Class | Use Case |
|--------|-------|----------|
| Cloud Events 1.0 | `CloudEvent` | Standard, interoperable (recommended) |
| Event Grid Schema | `EventGridEvent` | Azure-native format |

#### Imported: Publish CloudEvents

```python
from azure.eventgrid import EventGridPublisherClient, CloudEvent
from azure.identity import DefaultAzureCredential

client = EventGridPublisherClient(endpoint, DefaultAzureCredential())

# Single event
event = CloudEvent(
    type="MyApp.Events.OrderCreated",
    source="/myapp/orders",
    data={"order_id": "12345", "amount": 99.99}
)
client.send(event)

# Multiple events
events = [
    CloudEvent(
        type="MyApp.Events.OrderCreated",
        source="/myapp/orders",
        data={"order_id": f"order-{i}"}
    )
    for i in range(10)
]
client.send(events)
```

#### Imported: Publish EventGridEvents

```python
from azure.eventgrid import EventGridEvent
from datetime import datetime, timezone

event = EventGridEvent(
    subject="/myapp/orders/12345",
    event_type="MyApp.Events.OrderCreated",
    data={"order_id": "12345", "amount": 99.99},
    data_version="1.0"
)

client.send(event)
```

#### Imported: Event Properties

### CloudEvent Properties

```python
event = CloudEvent(
    type="MyApp.Events.ItemCreated",      # Required: event type
    source="/myapp/items",                 # Required: event source
    data={"key": "value"},                 # Event payload
    subject="items/123",                   # Optional: subject/path
    datacontenttype="application/json",   # Optional: content type
    dataschema="https://schema.example",  # Optional: schema URL
    time=datetime.now(timezone.utc),      # Optional: timestamp
    extensions={"custom": "value"}         # Optional: custom attributes
)
```

### EventGridEvent Properties

```python
event = EventGridEvent(
    subject="/myapp/items/123",            # Required: subject
    event_type="MyApp.ItemCreated",        # Required: event type
    data={"key": "value"},                 # Required: event payload
    data_version="1.0",                    # Required: schema version
    topic="/subscriptions/.../topics/...", # Optional: auto-set
    event_time=datetime.now(timezone.utc)  # Optional: timestamp
)
```

#### Imported: Async Client

```python
from azure.eventgrid.aio import EventGridPublisherClient
from azure.identity.aio import DefaultAzureCredential

async def publish_events():
    credential = DefaultAzureCredential()
    
    async with EventGridPublisherClient(endpoint, credential) as client:
        event = CloudEvent(
            type="MyApp.Events.Test",
            source="/myapp",
            data={"message": "hello"}
        )
        await client.send(event)

import asyncio
asyncio.run(publish_events())
```

#### Imported: Namespace Topics (Event Grid Namespaces)

For Event Grid Namespaces (pull delivery):

```python
from azure.eventgrid.aio import EventGridPublisherClient

# Namespace endpoint (different from custom topic)
namespace_endpoint = "https://<namespace>.<region>.eventgrid.azure.net"
topic_name = "my-topic"

async with EventGridPublisherClient(
    endpoint=namespace_endpoint,
    credential=DefaultAzureCredential()
) as client:
    await client.send(
        event,
        namespace_topic=topic_name
    )
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
