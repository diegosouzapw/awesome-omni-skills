---
name: azure-data-tables-py
description: "Azure Tables SDK for Python workflow skill. Use this skill when the user needs Azure Tables SDK for Python (Storage and Cosmos DB). Use for NoSQL key-value storage, entity CRUD, and batch operations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-data-tables-py", "azure", "tables", "sdk", "for", "python", "storage", "and"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-20"
---

# Azure Tables SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-data-tables-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Tables SDK for Python NoSQL key-value store for structured data (Azure Storage Tables or Cosmos DB Table API).

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Types, Table Operations, Entity Operations, Query Entities.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Tables SDK for Python (Storage and Cosmos DB). Use for NoSQL key-value storage, entity CRUD, and batch operations.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash pip install azure-data-tables azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-data-tables azure-identity
```

#### Imported: Environment Variables

```bash
# Azure Storage Tables
AZURE_STORAGE_ACCOUNT_URL=https://<account>.table.core.windows.net

# Cosmos DB Table API
COSMOS_TABLE_ENDPOINT=https://<account>.table.cosmos.azure.com
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-data-tables-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-data-tables-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-data-tables-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-data-tables-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Design partition keys for query patterns and even distribution
- Query within partitions whenever possible (cross-partition is expensive)
- Use batch operations for multiple entities in same partition
- Use upsert_entity for idempotent writes
- Use parameterized queries to prevent injection
- Keep entities small — max 1MB per entity
- Use async client for high-throughput scenarios

### Imported Operating Notes

#### Imported: Best Practices

1. **Design partition keys** for query patterns and even distribution
2. **Query within partitions** whenever possible (cross-partition is expensive)
3. **Use batch operations** for multiple entities in same partition
4. **Use `upsert_entity`** for idempotent writes
5. **Use parameterized queries** to prevent injection
6. **Keep entities small** — max 1MB per entity
7. **Use async client** for high-throughput scenarios

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-data-tables-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

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
from azure.data.tables import TableServiceClient, TableClient

credential = DefaultAzureCredential()
endpoint = "https://<account>.table.core.windows.net"

# Service client (manage tables)
service_client = TableServiceClient(endpoint=endpoint, credential=credential)

# Table client (work with entities)
table_client = TableClient(endpoint=endpoint, table_name="mytable", credential=credential)
```

#### Imported: Client Types

| Client | Purpose |
|--------|---------|
| `TableServiceClient` | Create/delete tables, list tables |
| `TableClient` | Entity CRUD, queries |

#### Imported: Table Operations

```python
# Create table
service_client.create_table("mytable")

# Create if not exists
service_client.create_table_if_not_exists("mytable")

# Delete table
service_client.delete_table("mytable")

# List tables
for table in service_client.list_tables():
    print(table.name)

# Get table client
table_client = service_client.get_table_client("mytable")
```

#### Imported: Entity Operations

**Important**: Every entity requires `PartitionKey` and `RowKey` (together form unique ID).

### Create Entity

```python
entity = {
    "PartitionKey": "sales",
    "RowKey": "order-001",
    "product": "Widget",
    "quantity": 5,
    "price": 9.99,
    "shipped": False
}

# Create (fails if exists)
table_client.create_entity(entity=entity)

# Upsert (create or replace)
table_client.upsert_entity(entity=entity)
```

### Get Entity

```python
# Get by key (fastest)
entity = table_client.get_entity(
    partition_key="sales",
    row_key="order-001"
)
print(f"Product: {entity['product']}")
```

### Update Entity

```python
# Replace entire entity
entity["quantity"] = 10
table_client.update_entity(entity=entity, mode="replace")

# Merge (update specific fields only)
update = {
    "PartitionKey": "sales",
    "RowKey": "order-001",
    "shipped": True
}
table_client.update_entity(entity=update, mode="merge")
```

### Delete Entity

```python
table_client.delete_entity(
    partition_key="sales",
    row_key="order-001"
)
```

#### Imported: Query Entities

### Query Within Partition

```python
# Query by partition (efficient)
entities = table_client.query_entities(
    query_filter="PartitionKey eq 'sales'"
)
for entity in entities:
    print(entity)
```

### Query with Filters

```python
# Filter by properties
entities = table_client.query_entities(
    query_filter="PartitionKey eq 'sales' and quantity gt 3"
)

# With parameters (safer)
entities = table_client.query_entities(
    query_filter="PartitionKey eq @pk and price lt @max_price",
    parameters={"pk": "sales", "max_price": 50.0}
)
```

### Select Specific Properties

```python
entities = table_client.query_entities(
    query_filter="PartitionKey eq 'sales'",
    select=["RowKey", "product", "price"]
)
```

### List All Entities

```python
# List all (cross-partition - use sparingly)
for entity in table_client.list_entities():
    print(entity)
```

#### Imported: Batch Operations

```python
from azure.data.tables import TableTransactionError

# Batch operations (same partition only!)
operations = [
    ("create", {"PartitionKey": "batch", "RowKey": "1", "data": "first"}),
    ("create", {"PartitionKey": "batch", "RowKey": "2", "data": "second"}),
    ("upsert", {"PartitionKey": "batch", "RowKey": "3", "data": "third"}),
]

try:
    table_client.submit_transaction(operations)
except TableTransactionError as e:
    print(f"Transaction failed: {e}")
```

#### Imported: Async Client

```python
from azure.data.tables.aio import TableServiceClient, TableClient
from azure.identity.aio import DefaultAzureCredential

async def table_operations():
    credential = DefaultAzureCredential()
    
    async with TableClient(
        endpoint="https://<account>.table.core.windows.net",
        table_name="mytable",
        credential=credential
    ) as client:
        # Create
        await client.create_entity(entity={
            "PartitionKey": "async",
            "RowKey": "1",
            "data": "test"
        })
        
        # Query
        async for entity in client.query_entities("PartitionKey eq 'async'"):
            print(entity)

import asyncio
asyncio.run(table_operations())
```

#### Imported: Data Types

| Python Type | Table Storage Type |
|-------------|-------------------|
| `str` | String |
| `int` | Int64 |
| `float` | Double |
| `bool` | Boolean |
| `datetime` | DateTime |
| `bytes` | Binary |
| `UUID` | Guid |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
