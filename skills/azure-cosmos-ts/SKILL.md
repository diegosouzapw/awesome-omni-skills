---
name: azure-cosmos-ts
description: "@azure/cosmos (TypeScript/JavaScript) workflow skill. Use this skill when the user needs Azure Cosmos DB JavaScript/TypeScript SDK (@azure/cosmos) for data plane operations. Use for CRUD operations on documents, queries, bulk operations, and container management and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-cosmos-ts", "azure", "cosmos", "javascript", "typescript", "sdk", "for", "data"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# @azure/cosmos (TypeScript/JavaScript)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-cosmos-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# @azure/cosmos (TypeScript/JavaScript) Data plane SDK for Azure Cosmos DB NoSQL API operations — CRUD on documents, queries, bulk operations. > ⚠️ Data vs Management Plane > - This SDK (@azure/cosmos): CRUD operations on documents, queries, stored procedures > - Management SDK (@azure/arm-cosmosdb): Create accounts, databases, containers via ARM

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Core Operations, Queries, Bulk Operations, Partition Keys.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Cosmos DB JavaScript/TypeScript SDK (@azure/cosmos) for data plane operations. Use for CRUD operations on documents, queries, bulk operations, and container management.
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

1. bash npm install @azure/cosmos @azure/identity Current Version: 4.9.0 Node.js: >= 20.0.0
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/cosmos @azure/identity
```

**Current Version**: 4.9.0  
**Node.js**: >= 20.0.0

#### Imported: Environment Variables

```bash
COSMOS_ENDPOINT=https://<account>.documents.azure.com:443/
COSMOS_DATABASE=<database-name>
COSMOS_CONTAINER=<container-name>
# For key-based auth only (prefer AAD)
COSMOS_KEY=<account-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-cosmos-ts to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-cosmos-ts/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-cosmos-ts/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-cosmos-ts using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use AAD authentication — Prefer DefaultAzureCredential over keys
- Always use parameterized queries — Prevents injection, improves plan caching
- Specify partition key — Avoid cross-partition queries when possible
- Use bulk operations — For multiple writes, use executeBulkOperations
- Handle 429 errors — Implement retry logic with exponential backoff
- Use ETags for concurrency — Prevent lost updates in concurrent scenarios
- Close client on shutdown — Call client.dispose() in cleanup

### Imported Operating Notes

#### Imported: Best Practices

1. **Use AAD authentication** — Prefer `DefaultAzureCredential` over keys
2. **Always use parameterized queries** — Prevents injection, improves plan caching
3. **Specify partition key** — Avoid cross-partition queries when possible
4. **Use bulk operations** — For multiple writes, use `executeBulkOperations`
5. **Handle 429 errors** — Implement retry logic with exponential backoff
6. **Use ETags for concurrency** — Prevent lost updates in concurrent scenarios
7. **Close client on shutdown** — Call `client.dispose()` in cleanup

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-cosmos-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Resource Hierarchy

```
CosmosClient
└── Database
    └── Container
        ├── Items (documents)
        ├── Scripts (stored procedures, triggers, UDFs)
        └── Conflicts
```

#### Imported: TypeScript Types Reference

```typescript
import {
  // Client & Resources
  CosmosClient,
  Database,
  Container,
  Item,
  Items,
  
  // Operations
  OperationInput,
  BulkOperationType,
  PatchOperation,
  
  // Queries
  SqlQuerySpec,
  SqlParameter,
  FeedOptions,
  
  // Partition Keys
  PartitionKeyDefinition,
  PartitionKeyDefinitionVersion,
  PartitionKeyKind,
  
  // Responses
  ItemResponse,
  FeedResponse,
  ResourceResponse,
  
  // Errors
  ErrorResponse,
} from "@azure/cosmos";
```

#### Imported: Authentication

### AAD with DefaultAzureCredential (Recommended)

```typescript
import { CosmosClient } from "@azure/cosmos";
import { DefaultAzureCredential } from "@azure/identity";

const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT!,
  aadCredentials: new DefaultAzureCredential(),
});
```

### Key-Based Authentication

```typescript
import { CosmosClient } from "@azure/cosmos";

// Option 1: Endpoint + Key
const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT!,
  key: process.env.COSMOS_KEY!,
});

// Option 2: Connection String
const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING!);
```

#### Imported: Core Operations

### Database & Container Setup

```typescript
const { database } = await client.databases.createIfNotExists({
  id: "my-database",
});

const { container } = await database.containers.createIfNotExists({
  id: "my-container",
  partitionKey: { paths: ["/partitionKey"] },
});
```

### Create Document

```typescript
interface Product {
  id: string;
  partitionKey: string;
  name: string;
  price: number;
}

const item: Product = {
  id: "product-1",
  partitionKey: "electronics",
  name: "Laptop",
  price: 999.99,
};

const { resource } = await container.items.create<Product>(item);
```

### Read Document

```typescript
const { resource } = await container
  .item("product-1", "electronics") // id, partitionKey
  .read<Product>();

if (resource) {
  console.log(resource.name);
}
```

### Update Document (Replace)

```typescript
const { resource: existing } = await container
  .item("product-1", "electronics")
  .read<Product>();

if (existing) {
  existing.price = 899.99;
  const { resource: updated } = await container
    .item("product-1", "electronics")
    .replace<Product>(existing);
}
```

### Upsert Document

```typescript
const item: Product = {
  id: "product-1",
  partitionKey: "electronics",
  name: "Laptop Pro",
  price: 1299.99,
};

const { resource } = await container.items.upsert<Product>(item);
```

### Delete Document

```typescript
await container.item("product-1", "electronics").delete();
```

### Patch Document (Partial Update)

```typescript
import { PatchOperation } from "@azure/cosmos";

const operations: PatchOperation[] = [
  { op: "replace", path: "/price", value: 799.99 },
  { op: "add", path: "/discount", value: true },
  { op: "remove", path: "/oldField" },
];

const { resource } = await container
  .item("product-1", "electronics")
  .patch<Product>(operations);
```

#### Imported: Queries

### Simple Query

```typescript
const { resources } = await container.items
  .query<Product>("SELECT * FROM c WHERE c.price < 1000")
  .fetchAll();
```

### Parameterized Query (Recommended)

```typescript
import { SqlQuerySpec } from "@azure/cosmos";

const querySpec: SqlQuerySpec = {
  query: "SELECT * FROM c WHERE c.partitionKey = @category AND c.price < @maxPrice",
  parameters: [
    { name: "@category", value: "electronics" },
    { name: "@maxPrice", value: 1000 },
  ],
};

const { resources } = await container.items
  .query<Product>(querySpec)
  .fetchAll();
```

### Query with Pagination

```typescript
const queryIterator = container.items.query<Product>(querySpec, {
  maxItemCount: 10, // Items per page
});

while (queryIterator.hasMoreResults()) {
  const { resources, continuationToken } = await queryIterator.fetchNext();
  console.log(`Page with ${resources?.length} items`);
  // Use continuationToken for next page if needed
}
```

### Cross-Partition Query

```typescript
const { resources } = await container.items
  .query<Product>(
    "SELECT * FROM c WHERE c.price > 500",
    { enableCrossPartitionQuery: true }
  )
  .fetchAll();
```

#### Imported: Bulk Operations

### Execute Bulk Operations

```typescript
import { BulkOperationType, OperationInput } from "@azure/cosmos";

const operations: OperationInput[] = [
  {
    operationType: BulkOperationType.Create,
    resourceBody: { id: "1", partitionKey: "cat-a", name: "Item 1" },
  },
  {
    operationType: BulkOperationType.Upsert,
    resourceBody: { id: "2", partitionKey: "cat-a", name: "Item 2" },
  },
  {
    operationType: BulkOperationType.Read,
    id: "3",
    partitionKey: "cat-b",
  },
  {
    operationType: BulkOperationType.Replace,
    id: "4",
    partitionKey: "cat-b",
    resourceBody: { id: "4", partitionKey: "cat-b", name: "Updated" },
  },
  {
    operationType: BulkOperationType.Delete,
    id: "5",
    partitionKey: "cat-c",
  },
  {
    operationType: BulkOperationType.Patch,
    id: "6",
    partitionKey: "cat-c",
    resourceBody: {
      operations: [{ op: "replace", path: "/name", value: "Patched" }],
    },
  },
];

const response = await container.items.executeBulkOperations(operations);

response.forEach((result, index) => {
  if (result.statusCode >= 200 && result.statusCode < 300) {
    console.log(`Operation ${index} succeeded`);
  } else {
    console.error(`Operation ${index} failed: ${result.statusCode}`);
  }
});
```

#### Imported: Partition Keys

### Simple Partition Key

```typescript
const { container } = await database.containers.createIfNotExists({
  id: "products",
  partitionKey: { paths: ["/category"] },
});
```

### Hierarchical Partition Key (MultiHash)

```typescript
import { PartitionKeyDefinitionVersion, PartitionKeyKind } from "@azure/cosmos";

const { container } = await database.containers.createIfNotExists({
  id: "orders",
  partitionKey: {
    paths: ["/tenantId", "/userId", "/sessionId"],
    version: PartitionKeyDefinitionVersion.V2,
    kind: PartitionKeyKind.MultiHash,
  },
});

// Operations require array of partition key values
const { resource } = await container.items.create({
  id: "order-1",
  tenantId: "tenant-a",
  userId: "user-123",
  sessionId: "session-xyz",
  total: 99.99,
});

// Read with hierarchical partition key
const { resource: order } = await container
  .item("order-1", ["tenant-a", "user-123", "session-xyz"])
  .read();
```

#### Imported: Error Handling

```typescript
import { ErrorResponse } from "@azure/cosmos";

try {
  const { resource } = await container.item("missing", "pk").read();
} catch (error) {
  if (error instanceof ErrorResponse) {
    switch (error.code) {
      case 404:
        console.log("Document not found");
        break;
      case 409:
        console.log("Conflict - document already exists");
        break;
      case 412:
        console.log("Precondition failed (ETag mismatch)");
        break;
      case 429:
        console.log("Rate limited - retry after:", error.retryAfterInMs);
        break;
      default:
        console.error(`Cosmos error ${error.code}: ${error.message}`);
    }
  }
  throw error;
}
```

#### Imported: Optimistic Concurrency (ETags)

```typescript
// Read with ETag
const { resource, etag } = await container
  .item("product-1", "electronics")
  .read<Product>();

if (resource && etag) {
  resource.price = 899.99;
  
  try {
    // Replace only if ETag matches
    await container.item("product-1", "electronics").replace(resource, {
      accessCondition: { type: "IfMatch", condition: etag },
    });
  } catch (error) {
    if (error instanceof ErrorResponse && error.code === 412) {
      console.log("Document was modified by another process");
    }
  }
}
```

#### Imported: Common Patterns

### Service Layer Pattern

```typescript
export class ProductService {
  private container: Container;

  constructor(client: CosmosClient) {
    this.container = client
      .database(process.env.COSMOS_DATABASE!)
      .container(process.env.COSMOS_CONTAINER!);
  }

  async getById(id: string, category: string): Promise<Product | null> {
    try {
      const { resource } = await this.container
        .item(id, category)
        .read<Product>();
      return resource ?? null;
    } catch (error) {
      if (error instanceof ErrorResponse && error.code === 404) {
        return null;
      }
      throw error;
    }
  }

  async create(product: Omit<Product, "id">): Promise<Product> {
    const item = { ...product, id: crypto.randomUUID() };
    const { resource } = await this.container.items.create<Product>(item);
    return resource!;
  }

  async findByCategory(category: string): Promise<Product[]> {
    const querySpec: SqlQuerySpec = {
      query: "SELECT * FROM c WHERE c.partitionKey = @category",
      parameters: [{ name: "@category", value: category }],
    };
    const { resources } = await this.container.items
      .query<Product>(querySpec)
      .fetchAll();
    return resources;
  }
}
```
