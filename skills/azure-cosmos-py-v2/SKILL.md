---
name: azure-cosmos-py-v2
description: "Azure Cosmos DB SDK for Python workflow skill. Use this skill when the user needs Azure Cosmos DB SDK for Python (NoSQL API). Use for document CRUD, queries, containers, and globally distributed data and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-cosmos-py-v2", "azure-cosmos-py", "azure", "cosmos", "sdk", "for", "python", "nosql"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# Azure Cosmos DB SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-cosmos-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Cosmos DB SDK for Python Client library for Azure Cosmos DB NoSQL API — globally distributed, multi-model database.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Queries, Partition Keys, Throughput.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Cosmos DB SDK for Python (NoSQL API). Use for document CRUD, queries, containers, and globally distributed data.
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

1. bash pip install azure-cosmos azure-identity ### Setup Database and Container python # Get or create database database = client.createdatabaseifnotexists(id="mydb") # Get or create container with partition key container = database.createcontainerifnotexists( id="mycontainer", partitionkey=PartitionKey(path="/category") ) # Get existing database = client.getdatabaseclient("mydb") container = database.getcontainerclient("mycontainer") ### Create Item python item = { "id": "item-001", # Required: unique within partition "category": "electronics", # Partition key value "name": "Laptop", "price": 999.99, "tags": ["computer", "portable"] } created = container.createitem(body=item) print(f"Created: {created['id']}") ### Read Item python # Read requires id AND partition key item = container.readitem( item="item-001", partitionkey="electronics" ) print(f"Name: {item['name']}") ### Update Item (Replace) python item = container.readitem(item="item-001", partitionkey="electronics") item["price"] = 899.99 item["onsale"] = True updated = container.replaceitem(item=item["id"], body=item) ### Upsert Item python # Create if not exists, replace if exists item = { "id": "item-002", "category": "electronics", "name": "Tablet", "price": 499.99 } result = container.upsertitem(body=item) ### Delete Item python container.deleteitem( item="item-001", partition_key="electronics" )
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-cosmos azure-identity
```

#### Imported: Core Workflow

### Setup Database and Container

```python
# Get or create database
database = client.create_database_if_not_exists(id="mydb")

# Get or create container with partition key
container = database.create_container_if_not_exists(
    id="mycontainer",
    partition_key=PartitionKey(path="/category")
)

# Get existing
database = client.get_database_client("mydb")
container = database.get_container_client("mycontainer")
```

### Create Item

```python
item = {
    "id": "item-001",           # Required: unique within partition
    "category": "electronics",   # Partition key value
    "name": "Laptop",
    "price": 999.99,
    "tags": ["computer", "portable"]
}

created = container.create_item(body=item)
print(f"Created: {created['id']}")
```

### Read Item

```python
# Read requires id AND partition key
item = container.read_item(
    item="item-001",
    partition_key="electronics"
)
print(f"Name: {item['name']}")
```

### Update Item (Replace)

```python
item = container.read_item(item="item-001", partition_key="electronics")
item["price"] = 899.99
item["on_sale"] = True

updated = container.replace_item(item=item["id"], body=item)
```

### Upsert Item

```python
# Create if not exists, replace if exists
item = {
    "id": "item-002",
    "category": "electronics",
    "name": "Tablet",
    "price": 499.99
}

result = container.upsert_item(body=item)
```

### Delete Item

```python
container.delete_item(
    item="item-001",
    partition_key="electronics"
)
```

#### Imported: Environment Variables

```bash
COSMOS_ENDPOINT=https://<account>.documents.azure.com:443/
COSMOS_DATABASE=mydb
COSMOS_CONTAINER=mycontainer
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-cosmos-py-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-cosmos-py-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-cosmos-py-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-cosmos-py-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always specify partition key for point reads and queries
- Use parameterized queries to prevent injection and improve caching
- Avoid cross-partition queries when possible
- Use upsert_item for idempotent writes
- Use async client for high-throughput scenarios
- Design partition key for even data distribution
- Use read_item instead of query for single document retrieval

### Imported Operating Notes

#### Imported: Best Practices

1. **Always specify partition key** for point reads and queries
2. **Use parameterized queries** to prevent injection and improve caching
3. **Avoid cross-partition queries** when possible
4. **Use `upsert_item`** for idempotent writes
5. **Use async client** for high-throughput scenarios
6. **Design partition key** for even data distribution
7. **Use `read_item`** instead of query for single document retrieval

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-cosmos-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-ai-contentunderstanding-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-document-intelligence-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-document-intelligence-ts-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-formrecognizer-java-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| references/partitioning.md | Partition key strategies, hierarchical keys, hot partition detection and mitigation |
| references/query-patterns.md | Query optimization, aggregations, pagination, transactions, change feed |
| scripts/setup_cosmos_container.py | CLI tool for creating containers with partitioning, throughput, and indexing |

#### Imported: Authentication

```python
from azure.identity import DefaultAzureCredential
from azure.cosmos import CosmosClient

credential = DefaultAzureCredential()
endpoint = "https://<account>.documents.azure.com:443/"

client = CosmosClient(url=endpoint, credential=credential)
```

#### Imported: Client Hierarchy

| Client | Purpose | Get From |
|--------|---------|----------|
| `CosmosClient` | Account-level operations | Direct instantiation |
| `DatabaseProxy` | Database operations | `client.get_database_client()` |
| `ContainerProxy` | Container/item operations | `database.get_container_client()` |

#### Imported: Queries

### Basic Query

```python
# Query within a partition (efficient)
query = "SELECT * FROM c WHERE c.price < @max_price"
items = container.query_items(
    query=query,
    parameters=[{"name": "@max_price", "value": 500}],
    partition_key="electronics"
)

for item in items:
    print(f"{item['name']}: ${item['price']}")
```

### Cross-Partition Query

```python
# Cross-partition (more expensive, use sparingly)
query = "SELECT * FROM c WHERE c.price < @max_price"
items = container.query_items(
    query=query,
    parameters=[{"name": "@max_price", "value": 500}],
    enable_cross_partition_query=True
)

for item in items:
    print(item)
```

### Query with Projection

```python
query = "SELECT c.id, c.name, c.price FROM c WHERE c.category = @category"
items = container.query_items(
    query=query,
    parameters=[{"name": "@category", "value": "electronics"}],
    partition_key="electronics"
)
```

### Read All Items

```python
# Read all in a partition
items = container.read_all_items()  # Cross-partition
# Or with partition key
items = container.query_items(
    query="SELECT * FROM c",
    partition_key="electronics"
)
```

#### Imported: Partition Keys

**Critical**: Always include partition key for efficient operations.

```python
from azure.cosmos import PartitionKey

# Single partition key
container = database.create_container_if_not_exists(
    id="orders",
    partition_key=PartitionKey(path="/customer_id")
)

# Hierarchical partition key (preview)
container = database.create_container_if_not_exists(
    id="events",
    partition_key=PartitionKey(path=["/tenant_id", "/user_id"])
)
```

#### Imported: Throughput

```python
# Create container with provisioned throughput
container = database.create_container_if_not_exists(
    id="mycontainer",
    partition_key=PartitionKey(path="/pk"),
    offer_throughput=400  # RU/s
)

# Read current throughput
offer = container.read_offer()
print(f"Throughput: {offer.offer_throughput} RU/s")

# Update throughput
container.replace_throughput(throughput=1000)
```

#### Imported: Async Client

```python
from azure.cosmos.aio import CosmosClient
from azure.identity.aio import DefaultAzureCredential

async def cosmos_operations():
    credential = DefaultAzureCredential()

    async with CosmosClient(endpoint, credential=credential) as client:
        database = client.get_database_client("mydb")
        container = database.get_container_client("mycontainer")

        # Create
        await container.create_item(body={"id": "1", "pk": "test"})

        # Read
        item = await container.read_item(item="1", partition_key="test")

        # Query
        async for item in container.query_items(
            query="SELECT * FROM c",
            partition_key="test"
        ):
            print(item)

import asyncio
asyncio.run(cosmos_operations())
```

#### Imported: Error Handling

```python
from azure.cosmos.exceptions import CosmosHttpResponseError

try:
    item = container.read_item(item="nonexistent", partition_key="pk")
except CosmosHttpResponseError as e:
    if e.status_code == 404:
        print("Item not found")
    elif e.status_code == 429:
        print(f"Rate limited. Retry after: {e.headers.get('x-ms-retry-after-ms')}ms")
    else:
        raise
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
