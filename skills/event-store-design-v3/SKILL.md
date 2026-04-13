---
name: event-store-design-v3
description: "Event Store Design workflow skill. Use this skill when the user needs Design and implement event stores for event-sourced systems. Use when building event sourcing infrastructure, choosing event store technologies, or implementing event persistence patterns and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["event-store-design-v3", "event-store-design", "design", "and", "implement", "event", "stores", "for"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Event Store Design

## Overview

This public intake copy packages `plugins/antigravity-bundle-ddd-evented-architecture/skills/event-store-design` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Event Store Design Comprehensive guide to designing event stores for event-sourced applications.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Technology Comparison, Templates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to event store design
- You need a different domain or tool outside this scope
- Designing event sourcing infrastructure
- Choosing between event store technologies
- Implementing custom event stores
- Optimizing event storage and retrieval

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Core Concepts

### 1. Event Store Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Event Store                       │
├─────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │   Stream 1   │  │   Stream 2   │  │   Stream 3   │ │
│  │ (Aggregate)  │  │ (Aggregate)  │  │ (Aggregate)  │ │
│  ├─────────────┤  ├─────────────┤  ├─────────────┤ │
│  │ Event 1     │  │ Event 1     │  │ Event 1     │ │
│  │ Event 2     │  │ Event 2     │  │ Event 2     │ │
│  │ Event 3     │  │ ...         │  │ Event 3     │ │
│  │ ...         │  │             │  │ Event 4     │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
├─────────────────────────────────────────────────────┤
│  Global Position: 1 → 2 → 3 → 4 → 5 → 6 → ...     │
└─────────────────────────────────────────────────────┘
```

### 2. Event Store Requirements

| Requirement       | Description                        |
| ----------------- | ---------------------------------- |
| **Append-only**   | Events are immutable, only appends |
| **Ordered**       | Per-stream and global ordering     |
| **Versioned**     | Optimistic concurrency control     |
| **Subscriptions** | Real-time event notifications      |
| **Idempotent**    | Handle duplicate writes safely     |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @event-store-design-v3 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/event-store-design-v3/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/event-store-design-v3/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @event-store-design-v3 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use stream IDs that include aggregate type - Order-{uuid}
- Include correlation/causation IDs - For tracing
- Version events from day one - Plan for schema evolution
- Implement idempotency - Use event IDs for deduplication
- Index appropriately - For your query patterns
- Don't update or delete events - They're immutable facts
- Don't store large payloads - Keep events small

### Imported Operating Notes

#### Imported: Best Practices

### Do's

- **Use stream IDs that include aggregate type** - `Order-{uuid}`
- **Include correlation/causation IDs** - For tracing
- **Version events from day one** - Plan for schema evolution
- **Implement idempotency** - Use event IDs for deduplication
- **Index appropriately** - For your query patterns

### Don'ts

- **Don't update or delete events** - They're immutable facts
- **Don't store large payloads** - Keep events small
- **Don't skip optimistic concurrency** - Prevents data corruption
- **Don't ignore backpressure** - Handle slow consumers

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-ddd-evented-architecture/skills/event-store-design`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Resources

- [EventStoreDB](https://www.eventstore.com/)
- [Marten Events](https://martendb.io/events/)
- [Event Sourcing Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing)

#### Imported: Technology Comparison

| Technology       | Best For                  | Limitations                      |
| ---------------- | ------------------------- | -------------------------------- |
| **EventStoreDB** | Pure event sourcing       | Single-purpose                   |
| **PostgreSQL**   | Existing Postgres stack   | Manual implementation            |
| **Kafka**        | High-throughput streaming | Not ideal for per-stream queries |
| **DynamoDB**     | Serverless, AWS-native    | Query limitations                |
| **Marten**       | .NET ecosystems           | .NET specific                    |

#### Imported: Templates

### Template 1: PostgreSQL Event Store Schema

```sql
-- Events table
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stream_id VARCHAR(255) NOT NULL,
    stream_type VARCHAR(255) NOT NULL,
    event_type VARCHAR(255) NOT NULL,
    event_data JSONB NOT NULL,
    metadata JSONB DEFAULT '{}',
    version BIGINT NOT NULL,
    global_position BIGSERIAL,
    created_at TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT unique_stream_version UNIQUE (stream_id, version)
);

-- Index for stream queries
CREATE INDEX idx_events_stream_id ON events(stream_id, version);

-- Index for global subscription
CREATE INDEX idx_events_global_position ON events(global_position);

-- Index for event type queries
CREATE INDEX idx_events_event_type ON events(event_type);

-- Index for time-based queries
CREATE INDEX idx_events_created_at ON events(created_at);

-- Snapshots table
CREATE TABLE snapshots (
    stream_id VARCHAR(255) PRIMARY KEY,
    stream_type VARCHAR(255) NOT NULL,
    snapshot_data JSONB NOT NULL,
    version BIGINT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Subscriptions checkpoint table
CREATE TABLE subscription_checkpoints (
    subscription_id VARCHAR(255) PRIMARY KEY,
    last_position BIGINT NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Template 2: Python Event Store Implementation

```python
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Optional, List
from uuid import UUID, uuid4
import json
import asyncpg

@dataclass
class Event:
    stream_id: str
    event_type: str
    data: dict
    metadata: dict = field(default_factory=dict)
    event_id: UUID = field(default_factory=uuid4)
    version: Optional[int] = None
    global_position: Optional[int] = None
    created_at: datetime = field(default_factory=datetime.utcnow)


class EventStore:
    def __init__(self, pool: asyncpg.Pool):
        self.pool = pool

    async def append_events(
        self,
        stream_id: str,
        stream_type: str,
        events: List[Event],
        expected_version: Optional[int] = None
    ) -> List[Event]:
        """Append events to a stream with optimistic concurrency."""
        async with self.pool.acquire() as conn:
            async with conn.transaction():
                # Check expected version
                if expected_version is not None:
                    current = await conn.fetchval(
                        "SELECT MAX(version) FROM events WHERE stream_id = $1",
                        stream_id
                    )
                    current = current or 0
                    if current != expected_version:
                        raise ConcurrencyError(
                            f"Expected version {expected_version}, got {current}"
                        )

                # Get starting version
                start_version = await conn.fetchval(
                    "SELECT COALESCE(MAX(version), 0) + 1 FROM events WHERE stream_id = $1",
                    stream_id
                )

                # Insert events
                saved_events = []
                for i, event in enumerate(events):
                    event.version = start_version + i
                    row = await conn.fetchrow(
                        """
                        INSERT INTO events (id, stream_id, stream_type, event_type,
                                          event_data, metadata, version, created_at)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                        RETURNING global_position
                        """,
                        event.event_id,
                        stream_id,
                        stream_type,
                        event.event_type,
                        json.dumps(event.data),
                        json.dumps(event.metadata),
                        event.version,
                        event.created_at
                    )
                    event.global_position = row['global_position']
                    saved_events.append(event)

                return saved_events

    async def read_stream(
        self,
        stream_id: str,
        from_version: int = 0,
        limit: int = 1000
    ) -> List[Event]:
        """Read events from a stream."""
        async with self.pool.acquire() as conn:
            rows = await conn.fetch(
                """
                SELECT id, stream_id, event_type, event_data, metadata,
                       version, global_position, created_at
                FROM events
                WHERE stream_id = $1 AND version >= $2
                ORDER BY version
                LIMIT $3
                """,
                stream_id, from_version, limit
            )
            return [self._row_to_event(row) for row in rows]

    async def read_all(
        self,
        from_position: int = 0,
        limit: int = 1000
    ) -> List[Event]:
        """Read all events globally."""
        async with self.pool.acquire() as conn:
            rows = await conn.fetch(
                """
                SELECT id, stream_id, event_type, event_data, metadata,
                       version, global_position, created_at
                FROM events
                WHERE global_position > $1
                ORDER BY global_position
                LIMIT $2
                """,
                from_position, limit
            )
            return [self._row_to_event(row) for row in rows]

    async def subscribe(
        self,
        subscription_id: str,
        handler,
        from_position: int = 0,
        batch_size: int = 100
    ):
        """Subscribe to all events from a position."""
        # Get checkpoint
        async with self.pool.acquire() as conn:
            checkpoint = await conn.fetchval(
                """
                SELECT last_position FROM subscription_checkpoints
                WHERE subscription_id = $1
                """,
                subscription_id
            )
            position = checkpoint or from_position

        while True:
            events = await self.read_all(position, batch_size)
            if not events:
                await asyncio.sleep(1)  # Poll interval
                continue

            for event in events:
                await handler(event)
                position = event.global_position

            # Save checkpoint
            async with self.pool.acquire() as conn:
                await conn.execute(
                    """
                    INSERT INTO subscription_checkpoints (subscription_id, last_position)
                    VALUES ($1, $2)
                    ON CONFLICT (subscription_id)
                    DO UPDATE SET last_position = $2, updated_at = NOW()
                    """,
                    subscription_id, position
                )

    def _row_to_event(self, row) -> Event:
        return Event(
            event_id=row['id'],
            stream_id=row['stream_id'],
            event_type=row['event_type'],
            data=json.loads(row['event_data']),
            metadata=json.loads(row['metadata']),
            version=row['version'],
            global_position=row['global_position'],
            created_at=row['created_at']
        )


class ConcurrencyError(Exception):
    """Raised when optimistic concurrency check fails."""
    pass
```

### Template 3: EventStoreDB Usage

```python
from esdbclient import EventStoreDBClient, NewEvent, StreamState
import json

# Connect
client = EventStoreDBClient(uri="esdb://localhost:2113?tls=false")

# Append events
def append_events(stream_name: str, events: list, expected_revision=None):
    new_events = [
        NewEvent(
            type=event['type'],
            data=json.dumps(event['data']).encode(),
            metadata=json.dumps(event.get('metadata', {})).encode()
        )
        for event in events
    ]

    if expected_revision is None:
        state = StreamState.ANY
    elif expected_revision == -1:
        state = StreamState.NO_STREAM
    else:
        state = expected_revision

    return client.append_to_stream(
        stream_name=stream_name,
        events=new_events,
        current_version=state
    )

# Read stream
def read_stream(stream_name: str, from_revision: int = 0):
    events = client.get_stream(
        stream_name=stream_name,
        stream_position=from_revision
    )
    return [
        {
            'type': event.type,
            'data': json.loads(event.data),
            'metadata': json.loads(event.metadata) if event.metadata else {},
            'stream_position': event.stream_position,
            'commit_position': event.commit_position
        }
        for event in events
    ]

# Subscribe to all
async def subscribe_to_all(handler, from_position: int = 0):
    subscription = client.subscribe_to_all(commit_position=from_position)
    async for event in subscription:
        await handler({
            'type': event.type,
            'data': json.loads(event.data),
            'stream_id': event.stream_name,
            'position': event.commit_position
        })

# Category projection ($ce-Category)
def read_category(category: str):
    """Read all events for a category using system projection."""
    return read_stream(f"$ce-{category}")
```

### Template 4: DynamoDB Event Store

```python
import boto3
from boto3.dynamodb.conditions import Key
from datetime import datetime
import json
import uuid

class DynamoEventStore:
    def __init__(self, table_name: str):
        self.dynamodb = boto3.resource('dynamodb')
        self.table = self.dynamodb.Table(table_name)

    def append_events(self, stream_id: str, events: list, expected_version: int = None):
        """Append events with conditional write for concurrency."""
        with self.table.batch_writer() as batch:
            for i, event in enumerate(events):
                version = (expected_version or 0) + i + 1
                item = {
                    'PK': f"STREAM#{stream_id}",
                    'SK': f"VERSION#{version:020d}",
                    'GSI1PK': 'EVENTS',
                    'GSI1SK': datetime.utcnow().isoformat(),
                    'event_id': str(uuid.uuid4()),
                    'stream_id': stream_id,
                    'event_type': event['type'],
                    'event_data': json.dumps(event['data']),
                    'version': version,
                    'created_at': datetime.utcnow().isoformat()
                }
                batch.put_item(Item=item)
        return events

    def read_stream(self, stream_id: str, from_version: int = 0):
        """Read events from a stream."""
        response = self.table.query(
            KeyConditionExpression=Key('PK').eq(f"STREAM#{stream_id}") &
                                  Key('SK').gte(f"VERSION#{from_version:020d}")
        )
        return [
            {
                'event_type': item['event_type'],
                'data': json.loads(item['event_data']),
                'version': item['version']
            }
            for item in response['Items']
        ]

# Table definition (CloudFormation/Terraform)
"""
DynamoDB Table:
  - PK (Partition Key): String
  - SK (Sort Key): String
  - GSI1PK, GSI1SK for global ordering

Capacity: On-demand or provisioned based on throughput needs
"""
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
