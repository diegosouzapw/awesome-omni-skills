---
name: azure-data-tables-java
description: "Azure Tables SDK for Java workflow skill. Use this skill when the user needs Build table storage applications using the Azure Tables SDK for Java. Works with both Azure Table Storage and Cosmos DB Table API and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-data-tables-java", "build", "table", "storage", "applications", "using", "the", "azure"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure Tables SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-data-tables-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Tables SDK for Java Build table storage applications using the Azure Tables SDK for Java. Works with both Azure Table Storage and Cosmos DB Table API.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Key Concepts, Core Patterns, Typed Entities, Error Handling, Environment Variables.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "Azure Tables Java"
- "table storage SDK"
- "Cosmos DB Table API"
- "NoSQL key-value storage"
- "partition key row key"
- "table entity CRUD"

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-data-tables</artifactId> <version>12.6.0-beta.1</version> </dependency>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
  <groupId>com.azure</groupId>
  <artifactId>azure-data-tables</artifactId>
  <version>12.6.0-beta.1</version>
</dependency>
```

#### Imported: Client Creation

### With Connection String

```java
import com.azure.data.tables.TableServiceClient;
import com.azure.data.tables.TableServiceClientBuilder;
import com.azure.data.tables.TableClient;

TableServiceClient serviceClient = new TableServiceClientBuilder()
    .connectionString("<your-connection-string>")
    .buildClient();
```

### With Shared Key

```java
import com.azure.core.credential.AzureNamedKeyCredential;

AzureNamedKeyCredential credential = new AzureNamedKeyCredential(
    "<account-name>",
    "<account-key>");

TableServiceClient serviceClient = new TableServiceClientBuilder()
    .endpoint("<your-table-account-url>")
    .credential(credential)
    .buildClient();
```

### With SAS Token

```java
TableServiceClient serviceClient = new TableServiceClientBuilder()
    .endpoint("<your-table-account-url>")
    .sasToken("<sas-token>")
    .buildClient();
```

### With DefaultAzureCredential (Storage only)

```java
import com.azure.identity.DefaultAzureCredentialBuilder;

TableServiceClient serviceClient = new TableServiceClientBuilder()
    .endpoint("<your-table-account-url>")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-data-tables-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-data-tables-java against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-data-tables-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-data-tables-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Partition Key Design: Choose keys that distribute load evenly
- Batch Operations: Use transactions for atomic multi-entity updates
- Query Optimization: Always filter by PartitionKey when possible
- Select Projection: Only select needed properties for performance
- Entity Size: Keep entities under 1MB (Storage) or 2MB (Cosmos)
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Partition Key Design**: Choose keys that distribute load evenly
2. **Batch Operations**: Use transactions for atomic multi-entity updates
3. **Query Optimization**: Always filter by PartitionKey when possible
4. **Select Projection**: Only select needed properties for performance
5. **Entity Size**: Keep entities under 1MB (Storage) or 2MB (Cosmos)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-data-tables-java`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Key Concepts

- **TableServiceClient**: Manage tables (create, list, delete)
- **TableClient**: Manage entities within a table (CRUD)
- **Partition Key**: Groups entities for efficient queries
- **Row Key**: Unique identifier within a partition
- **Entity**: A row with up to 252 properties (1MB Storage, 2MB Cosmos)

#### Imported: Core Patterns

### Create Table

```java
// Create table (throws if exists)
TableClient tableClient = serviceClient.createTable("mytable");

// Create if not exists (no exception)
TableClient tableClient = serviceClient.createTableIfNotExists("mytable");
```

### Get Table Client

```java
// From service client
TableClient tableClient = serviceClient.getTableClient("mytable");

// Direct construction
TableClient tableClient = new TableClientBuilder()
    .connectionString("<connection-string>")
    .tableName("mytable")
    .buildClient();
```

### Create Entity

```java
import com.azure.data.tables.models.TableEntity;

TableEntity entity = new TableEntity("partitionKey", "rowKey")
    .addProperty("Name", "Product A")
    .addProperty("Price", 29.99)
    .addProperty("Quantity", 100)
    .addProperty("IsAvailable", true);

tableClient.createEntity(entity);
```

### Get Entity

```java
TableEntity entity = tableClient.getEntity("partitionKey", "rowKey");

String name = (String) entity.getProperty("Name");
Double price = (Double) entity.getProperty("Price");
System.out.printf("Product: %s, Price: %.2f%n", name, price);
```

### Update Entity

```java
import com.azure.data.tables.models.TableEntityUpdateMode;

// Merge (update only specified properties)
TableEntity updateEntity = new TableEntity("partitionKey", "rowKey")
    .addProperty("Price", 24.99);
tableClient.updateEntity(updateEntity, TableEntityUpdateMode.MERGE);

// Replace (replace entire entity)
TableEntity replaceEntity = new TableEntity("partitionKey", "rowKey")
    .addProperty("Name", "Product A Updated")
    .addProperty("Price", 24.99)
    .addProperty("Quantity", 150);
tableClient.updateEntity(replaceEntity, TableEntityUpdateMode.REPLACE);
```

### Upsert Entity

```java
// Insert or update (merge mode)
tableClient.upsertEntity(entity, TableEntityUpdateMode.MERGE);

// Insert or replace
tableClient.upsertEntity(entity, TableEntityUpdateMode.REPLACE);
```

### Delete Entity

```java
tableClient.deleteEntity("partitionKey", "rowKey");
```

### List Entities

```java
import com.azure.data.tables.models.ListEntitiesOptions;

// List all entities
for (TableEntity entity : tableClient.listEntities()) {
    System.out.printf("%s - %s%n",
        entity.getPartitionKey(),
        entity.getRowKey());
}

// With filtering and selection
ListEntitiesOptions options = new ListEntitiesOptions()
    .setFilter("PartitionKey eq 'sales'")
    .setSelect("Name", "Price");

for (TableEntity entity : tableClient.listEntities(options, null, null)) {
    System.out.printf("%s: %.2f%n",
        entity.getProperty("Name"),
        entity.getProperty("Price"));
}
```

### Query with OData Filter

```java
// Filter by partition key
ListEntitiesOptions options = new ListEntitiesOptions()
    .setFilter("PartitionKey eq 'electronics'");

// Filter with multiple conditions
options.setFilter("PartitionKey eq 'electronics' and Price gt 100");

// Filter with comparison operators
options.setFilter("Quantity ge 10 and Quantity le 100");

// Top N results
options.setTop(10);

for (TableEntity entity : tableClient.listEntities(options, null, null)) {
    System.out.println(entity.getRowKey());
}
```

### Batch Operations (Transactions)

```java
import com.azure.data.tables.models.TableTransactionAction;
import com.azure.data.tables.models.TableTransactionActionType;
import java.util.Arrays;

// All entities must have same partition key
List<TableTransactionAction> actions = Arrays.asList(
    new TableTransactionAction(
        TableTransactionActionType.CREATE,
        new TableEntity("batch", "row1").addProperty("Name", "Item 1")),
    new TableTransactionAction(
        TableTransactionActionType.CREATE,
        new TableEntity("batch", "row2").addProperty("Name", "Item 2")),
    new TableTransactionAction(
        TableTransactionActionType.UPSERT_MERGE,
        new TableEntity("batch", "row3").addProperty("Name", "Item 3"))
);

tableClient.submitTransaction(actions);
```

### List Tables

```java
import com.azure.data.tables.models.TableItem;
import com.azure.data.tables.models.ListTablesOptions;

// List all tables
for (TableItem table : serviceClient.listTables()) {
    System.out.println(table.getName());
}

// Filter tables
ListTablesOptions options = new ListTablesOptions()
    .setFilter("TableName eq 'mytable'");

for (TableItem table : serviceClient.listTables(options, null, null)) {
    System.out.println(table.getName());
}
```

### Delete Table

```java
serviceClient.deleteTable("mytable");
```

#### Imported: Typed Entities

```java
public class Product implements TableEntity {
    private String partitionKey;
    private String rowKey;
    private OffsetDateTime timestamp;
    private String eTag;
    private String name;
    private double price;
    
    // Getters and setters for all fields
    @Override
    public String getPartitionKey() { return partitionKey; }
    @Override
    public void setPartitionKey(String partitionKey) { this.partitionKey = partitionKey; }
    @Override
    public String getRowKey() { return rowKey; }
    @Override
    public void setRowKey(String rowKey) { this.rowKey = rowKey; }
    // ... other getters/setters
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}

// Usage
Product product = new Product();
product.setPartitionKey("electronics");
product.setRowKey("laptop-001");
product.setName("Laptop");
product.setPrice(999.99);

tableClient.createEntity(product);
```

#### Imported: Error Handling

```java
import com.azure.data.tables.models.TableServiceException;

try {
    tableClient.createEntity(entity);
} catch (TableServiceException e) {
    System.out.println("Status: " + e.getResponse().getStatusCode());
    System.out.println("Error: " + e.getMessage());
    // 409 = Conflict (entity exists)
    // 404 = Not Found
}
```

#### Imported: Environment Variables

```bash
# Storage Account
AZURE_TABLES_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...
AZURE_TABLES_ENDPOINT=https://<account>.table.core.windows.net

# Cosmos DB Table API
COSMOS_TABLE_ENDPOINT=https://<account>.table.cosmosdb.azure.com
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
