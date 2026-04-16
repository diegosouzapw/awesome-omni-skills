---
name: azure-cosmos-java
description: "Azure Cosmos DB SDK for Java workflow skill. Use this skill when the user needs Azure Cosmos DB SDK for Java. NoSQL database operations with global distribution, multi-model support, and reactive patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-cosmos-java", "azure", "cosmos", "sdk", "for", "java", "nosql", "database"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Azure Cosmos DB SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-cosmos-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Cosmos DB SDK for Java Client library for Azure Cosmos DB NoSQL API with global distribution and reactive patterns.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Key Concepts, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Cosmos DB SDK for Java. NoSQL database operations with global distribution, multi-model support, and reactive patterns.
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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-cosmos</artifactId> <version>LATEST</version> </dependency> Or use Azure SDK BOM: xml <dependencyManagement> <dependencies> <dependency> <groupId>com.azure</groupId> <artifactId>azure-sdk-bom</artifactId> <version>{bom_version}</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.azure</groupId> <artifactId>azure-cosmos</artifactId> </dependency> </dependencies> ### Create Database java // Sync client.createDatabaseIfNotExists("myDatabase") .map(response -> client.getDatabase(response.getProperties().getId())); // Async with chaining asyncClient.createDatabaseIfNotExists("myDatabase") .map(response -> asyncClient.getDatabase(response.getProperties().getId())) .subscribe(database -> System.out.println("Created: " + database.getId())); ### Create Container java asyncClient.createDatabaseIfNotExists("myDatabase") .flatMap(dbResponse -> { String databaseId = dbResponse.getProperties().getId(); return asyncClient.getDatabase(databaseId) .createContainerIfNotExists("myContainer", "/partitionKey") .map(containerResponse -> asyncClient.getDatabase(databaseId) .getContainer(containerResponse.getProperties().getId())); }) .subscribe(container -> System.out.println("Container: " + container.getId())); ### CRUD Operations java import com.azure.cosmos.models.PartitionKey; CosmosAsyncContainer container = asyncClient .getDatabase("myDatabase") .getContainer("myContainer"); // Create container.createItem(new User("1", "John Doe", "john@example.com")) .flatMap(response -> { System.out.println("Created: " + response.getItem()); // Read return container.readItem( response.getItem().getId(), new PartitionKey(response.getItem().getId()), User.class); }) .flatMap(response -> { System.out.println("Read: " + response.getItem()); // Update User user = response.getItem(); user.setEmail("john.doe@example.com"); return container.replaceItem( user, user.getId(), new PartitionKey(user.getId())); }) .flatMap(response -> { // Delete return container.deleteItem( response.getItem().getId(), new PartitionKey(response.getItem().getId())); }) .block(); ### Query Documents java import com.azure.cosmos.models.CosmosQueryRequestOptions; import com.azure.cosmos.util.CosmosPagedIterable; CosmosContainer container = client.getDatabase("myDatabase").getContainer("myContainer"); String query = "SELECT * FROM c WHERE c.status = @status"; CosmosQueryRequestOptions options = new CosmosQueryRequestOptions(); CosmosPagedIterable<User> results = container.queryItems( query, options, User.class ); results.forEach(user -> System.out.println("User: " + user.getName()));
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
    <artifactId>azure-cosmos</artifactId>
    <version>LATEST</version>
</dependency>
```

Or use Azure SDK BOM:

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.azure</groupId>
            <artifactId>azure-sdk-bom</artifactId>
            <version>{bom_version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>com.azure</groupId>
        <artifactId>azure-cosmos</artifactId>
    </dependency>
</dependencies>
```

#### Imported: Core Workflow

### Create Database

```java
// Sync
client.createDatabaseIfNotExists("myDatabase")
    .map(response -> client.getDatabase(response.getProperties().getId()));

// Async with chaining
asyncClient.createDatabaseIfNotExists("myDatabase")
    .map(response -> asyncClient.getDatabase(response.getProperties().getId()))
    .subscribe(database -> System.out.println("Created: " + database.getId()));
```

### Create Container

```java
asyncClient.createDatabaseIfNotExists("myDatabase")
    .flatMap(dbResponse -> {
        String databaseId = dbResponse.getProperties().getId();
        return asyncClient.getDatabase(databaseId)
            .createContainerIfNotExists("myContainer", "/partitionKey")
            .map(containerResponse -> asyncClient.getDatabase(databaseId)
                .getContainer(containerResponse.getProperties().getId()));
    })
    .subscribe(container -> System.out.println("Container: " + container.getId()));
```

### CRUD Operations

```java
import com.azure.cosmos.models.PartitionKey;

CosmosAsyncContainer container = asyncClient
    .getDatabase("myDatabase")
    .getContainer("myContainer");

// Create
container.createItem(new User("1", "John Doe", "john@example.com"))
    .flatMap(response -> {
        System.out.println("Created: " + response.getItem());
        // Read
        return container.readItem(
            response.getItem().getId(),
            new PartitionKey(response.getItem().getId()),
            User.class);
    })
    .flatMap(response -> {
        System.out.println("Read: " + response.getItem());
        // Update
        User user = response.getItem();
        user.setEmail("john.doe@example.com");
        return container.replaceItem(
            user,
            user.getId(),
            new PartitionKey(user.getId()));
    })
    .flatMap(response -> {
        // Delete
        return container.deleteItem(
            response.getItem().getId(),
            new PartitionKey(response.getItem().getId()));
    })
    .block();
```

### Query Documents

```java
import com.azure.cosmos.models.CosmosQueryRequestOptions;
import com.azure.cosmos.util.CosmosPagedIterable;

CosmosContainer container = client.getDatabase("myDatabase").getContainer("myContainer");

String query = "SELECT * FROM c WHERE c.status = @status";
CosmosQueryRequestOptions options = new CosmosQueryRequestOptions();

CosmosPagedIterable<User> results = container.queryItems(
    query,
    options,
    User.class
);

results.forEach(user -> System.out.println("User: " + user.getName()));
```

#### Imported: Environment Variables

```bash
COSMOS_ENDPOINT=https://<account>.documents.azure.com:443/
COSMOS_KEY=<your-primary-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-cosmos-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-cosmos-java against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-cosmos-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-cosmos-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Reuse CosmosClient — Create once, reuse throughout application
- Use async client for high-throughput scenarios
- Choose partition key carefully — Affects performance and scalability
- Enable content response on write for immediate access to created items
- Configure preferred regions for geo-distributed applications
- Handle 429 errors with retry policies (built-in by default)
- Use direct mode for lowest latency in production

### Imported Operating Notes

#### Imported: Best Practices

1. **Reuse CosmosClient** — Create once, reuse throughout application
2. **Use async client** for high-throughput scenarios
3. **Choose partition key carefully** — Affects performance and scalability
4. **Enable content response on write** for immediate access to created items
5. **Configure preferred regions** for geo-distributed applications
6. **Handle 429 errors** with retry policies (built-in by default)
7. **Use direct mode** for lowest latency in production

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-cosmos-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@astro` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| Maven Package | https://central.sonatype.com/artifact/com.azure/azure-cosmos |
| API Documentation | https://azuresdkdocs.z19.web.core.windows.net/java/azure-cosmos/latest/index.html |
| Product Docs | https://learn.microsoft.com/azure/cosmos-db/ |
| Samples | https://github.com/Azure-Samples/azure-cosmos-java-sql-api-samples |
| Performance Guide | https://learn.microsoft.com/azure/cosmos-db/performance-tips-java-sdk-v4-sql |
| Troubleshooting | https://learn.microsoft.com/azure/cosmos-db/troubleshoot-java-sdk-v4-sql |

#### Imported: Authentication

### Key-based Authentication

```java
import com.azure.cosmos.CosmosClient;
import com.azure.cosmos.CosmosClientBuilder;

CosmosClient client = new CosmosClientBuilder()
    .endpoint(System.getenv("COSMOS_ENDPOINT"))
    .key(System.getenv("COSMOS_KEY"))
    .buildClient();
```

### Async Client

```java
import com.azure.cosmos.CosmosAsyncClient;

CosmosAsyncClient asyncClient = new CosmosClientBuilder()
    .endpoint(serviceEndpoint)
    .key(key)
    .buildAsyncClient();
```

### With Customizations

```java
import com.azure.cosmos.ConsistencyLevel;
import java.util.Arrays;

CosmosClient client = new CosmosClientBuilder()
    .endpoint(serviceEndpoint)
    .key(key)
    .directMode(directConnectionConfig, gatewayConnectionConfig)
    .consistencyLevel(ConsistencyLevel.SESSION)
    .connectionSharingAcrossClientsEnabled(true)
    .contentResponseOnWriteEnabled(true)
    .userAgentSuffix("my-application")
    .preferredRegions(Arrays.asList("West US", "East US"))
    .buildClient();
```

#### Imported: Client Hierarchy

| Class | Purpose |
|-------|---------|
| `CosmosClient` / `CosmosAsyncClient` | Account-level operations |
| `CosmosDatabase` / `CosmosAsyncDatabase` | Database operations |
| `CosmosContainer` / `CosmosAsyncContainer` | Container/item operations |

#### Imported: Key Concepts

### Partition Keys

Choose a partition key with:
- High cardinality (many distinct values)
- Even distribution of data and requests
- Frequently used in queries

### Consistency Levels

| Level | Guarantee |
|-------|-----------|
| Strong | Linearizability |
| Bounded Staleness | Consistent prefix with bounded lag |
| Session | Consistent prefix within session |
| Consistent Prefix | Reads never see out-of-order writes |
| Eventual | No ordering guarantee |

### Request Units (RUs)

All operations consume RUs. Check response headers:

```java
CosmosItemResponse<User> response = container.createItem(user);
System.out.println("RU charge: " + response.getRequestCharge());
```

#### Imported: Error Handling

```java
import com.azure.cosmos.CosmosException;

try {
    container.createItem(item);
} catch (CosmosException e) {
    System.err.println("Status: " + e.getStatusCode());
    System.err.println("Message: " + e.getMessage());
    System.err.println("Request charge: " + e.getRequestCharge());
    
    if (e.getStatusCode() == 409) {
        System.err.println("Item already exists");
    } else if (e.getStatusCode() == 429) {
        System.err.println("Rate limited, retry after: " + e.getRetryAfterDuration());
    }
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
