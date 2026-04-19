---
name: azure-resource-manager-cosmosdb-dotnet
description: "Azure.ResourceManager.CosmosDB (.NET) workflow skill. Use this skill when the user needs Azure Resource Manager SDK for Cosmos DB in .NET and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-resource-manager-cosmosdb-dotnet", "azure", "resource", "manager", "sdk", "for", "cosmos", "net"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure.ResourceManager.CosmosDB (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-resource-manager-cosmosdb-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.CosmosDB (.NET) Management plane SDK for provisioning and managing Azure Cosmos DB resources via Azure Resource Manager. > ⚠️ Management vs Data Plane > - This SDK (Azure.ResourceManager.CosmosDB): Create accounts, databases, containers, configure throughput, manage RBAC > - Data Plane SDK (Microsoft.Azure.Cosmos): CRUD operations on documents, queries, stored procedures execution

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for Cosmos DB in .NET.
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

1. `bash dotnet add package Azure.ResourceManager.CosmosDB dotnet add package Azure.Identity Current Versions: Stable v1.4.0, Preview v1.4.0-beta.13 ### 1.
2. Create Cosmos DB Account csharp using Azure.ResourceManager.CosmosDB; using Azure.ResourceManager.CosmosDB.Models; // Get resource group var resourceGroup = await subscription .GetResourceGroupAsync("my-resource-group"); // Define account var accountData = new CosmosDBAccountCreateOrUpdateContent( location: AzureLocation.EastUS, locations: new[] { new CosmosDBAccountLocation { LocationName = AzureLocation.EastUS, FailoverPriority = 0, IsZoneRedundant = false } }) { Kind = CosmosDBAccountKind.GlobalDocumentDB, ConsistencyPolicy = new ConsistencyPolicy(DefaultConsistencyLevel.Session), EnableAutomaticFailover = true }; // Create account (long-running operation) var accountCollection = resourceGroup.Value.GetCosmosDBAccounts(); var operation = await accountCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-cosmos-account", accountData); CosmosDBAccountResource account = operation.Value; ### 2.
3. Create SQL Database csharp var databaseData = new CosmosDBSqlDatabaseCreateOrUpdateContent( new CosmosDBSqlDatabaseResourceInfo("my-database")); var databaseCollection = account.GetCosmosDBSqlDatabases(); var dbOperation = await databaseCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-database", databaseData); CosmosDBSqlDatabaseResource database = dbOperation.Value; ### 3.
4. Create SQL Container csharp var containerData = new CosmosDBSqlContainerCreateOrUpdateContent( new CosmosDBSqlContainerResourceInfo("my-container") { PartitionKey = new CosmosDBContainerPartitionKey { Paths = { "/partitionKey" }, Kind = CosmosDBPartitionKind.Hash }, IndexingPolicy = new CosmosDBIndexingPolicy { Automatic = true, IndexingMode = CosmosDBIndexingMode.Consistent }, DefaultTtl = 86400 // 24 hours }); var containerCollection = database.GetCosmosDBSqlContainers(); var containerOperation = await containerCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-container", containerData); CosmosDBSqlContainerResource container = containerOperation.Value; ### 4.
5. Configure Throughput csharp // Manual throughput var throughputData = new ThroughputSettingsUpdateData( new ThroughputSettingsResourceInfo { Throughput = 400 }); // Autoscale throughput var autoscaleData = new ThroughputSettingsUpdateData( new ThroughputSettingsResourceInfo { AutoscaleSettings = new AutoscaleSettingsResourceInfo { MaxThroughput = 4000 } }); // Apply to database await database.CreateOrUpdateCosmosDBSqlDatabaseThroughputAsync( WaitUntil.Completed, throughputData); ### 5.
6. Get Connection Information csharp // Get keys var keys = await account.GetKeysAsync(); Console.WriteLine($"Primary Key: {keys.Value.PrimaryMasterKey}"); // Get connection strings var connectionStrings = await account.GetConnectionStringsAsync(); foreach (var cs in connectionStrings.Value.ConnectionStrings) { Console.WriteLine($"{cs.Description}: {cs.ConnectionString}"); } `
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.CosmosDB
dotnet add package Azure.Identity
```

**Current Versions**: Stable v1.4.0, Preview v1.4.0-beta.13

#### Imported: Core Workflow

### 1. Create Cosmos DB Account

```csharp
using Azure.ResourceManager.CosmosDB;
using Azure.ResourceManager.CosmosDB.Models;

// Get resource group
var resourceGroup = await subscription
    .GetResourceGroupAsync("my-resource-group");

// Define account
var accountData = new CosmosDBAccountCreateOrUpdateContent(
    location: AzureLocation.EastUS,
    locations: new[]
    {
        new CosmosDBAccountLocation
        {
            LocationName = AzureLocation.EastUS,
            FailoverPriority = 0,
            IsZoneRedundant = false
        }
    })
{
    Kind = CosmosDBAccountKind.GlobalDocumentDB,
    ConsistencyPolicy = new ConsistencyPolicy(DefaultConsistencyLevel.Session),
    EnableAutomaticFailover = true
};

// Create account (long-running operation)
var accountCollection = resourceGroup.Value.GetCosmosDBAccounts();
var operation = await accountCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-cosmos-account",
    accountData);

CosmosDBAccountResource account = operation.Value;
```

### 2. Create SQL Database

```csharp
var databaseData = new CosmosDBSqlDatabaseCreateOrUpdateContent(
    new CosmosDBSqlDatabaseResourceInfo("my-database"));

var databaseCollection = account.GetCosmosDBSqlDatabases();
var dbOperation = await databaseCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-database",
    databaseData);

CosmosDBSqlDatabaseResource database = dbOperation.Value;
```

### 3. Create SQL Container

```csharp
var containerData = new CosmosDBSqlContainerCreateOrUpdateContent(
    new CosmosDBSqlContainerResourceInfo("my-container")
    {
        PartitionKey = new CosmosDBContainerPartitionKey
        {
            Paths = { "/partitionKey" },
            Kind = CosmosDBPartitionKind.Hash
        },
        IndexingPolicy = new CosmosDBIndexingPolicy
        {
            Automatic = true,
            IndexingMode = CosmosDBIndexingMode.Consistent
        },
        DefaultTtl = 86400 // 24 hours
    });

var containerCollection = database.GetCosmosDBSqlContainers();
var containerOperation = await containerCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-container",
    containerData);

CosmosDBSqlContainerResource container = containerOperation.Value;
```

### 4. Configure Throughput

```csharp
// Manual throughput
var throughputData = new ThroughputSettingsUpdateData(
    new ThroughputSettingsResourceInfo
    {
        Throughput = 400
    });

// Autoscale throughput
var autoscaleData = new ThroughputSettingsUpdateData(
    new ThroughputSettingsResourceInfo
    {
        AutoscaleSettings = new AutoscaleSettingsResourceInfo
        {
            MaxThroughput = 4000
        }
    });

// Apply to database
await database.CreateOrUpdateCosmosDBSqlDatabaseThroughputAsync(
    WaitUntil.Completed,
    throughputData);
```

### 5. Get Connection Information

```csharp
// Get keys
var keys = await account.GetKeysAsync();
Console.WriteLine($"Primary Key: {keys.Value.PrimaryMasterKey}");

// Get connection strings
var connectionStrings = await account.GetConnectionStringsAsync();
foreach (var cs in connectionStrings.Value.ConnectionStrings)
{
    Console.WriteLine($"{cs.Description}: {cs.ConnectionString}");
}
```

#### Imported: Environment Variables

```bash
AZURE_SUBSCRIPTION_ID=<your-subscription-id>
# For service principal auth (optional)
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_SECRET=<client-secret>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-resource-manager-cosmosdb-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-resource-manager-cosmosdb-dotnet against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-resource-manager-cosmosdb-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-resource-manager-cosmosdb-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use WaitUntil.Completed for operations that must finish before proceeding
- Use WaitUntil.Started when you want to poll manually or run operations in parallel
- Always use DefaultAzureCredential — never hardcode keys
- Handle RequestFailedException for ARM API errors
- Use CreateOrUpdateAsync for idempotent operations
- Navigate hierarchy via Get* methods (e.g., account.GetCosmosDBSqlDatabases())
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `WaitUntil.Completed`** for operations that must finish before proceeding
2. **Use `WaitUntil.Started`** when you want to poll manually or run operations in parallel
3. **Always use `DefaultAzureCredential`** — never hardcode keys
4. **Handle `RequestFailedException`** for ARM API errors
5. **Use `CreateOrUpdateAsync`** for idempotent operations
6. **Navigate hierarchy** via `Get*` methods (e.g., `account.GetCosmosDBSqlDatabases()`)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-resource-manager-cosmosdb-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resource Hierarchy

```
ArmClient
└── SubscriptionResource
    └── ResourceGroupResource
        └── CosmosDBAccountResource
            ├── CosmosDBSqlDatabaseResource
            │   └── CosmosDBSqlContainerResource
            │       ├── CosmosDBSqlStoredProcedureResource
            │       ├── CosmosDBSqlTriggerResource
            │       └── CosmosDBSqlUserDefinedFunctionResource
            ├── CassandraKeyspaceResource
            ├── GremlinDatabaseResource
            ├── MongoDBDatabaseResource
            └── CosmosDBTableResource
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ArmClient` | Entry point for all ARM operations |
| `CosmosDBAccountResource` | Represents a Cosmos DB account |
| `CosmosDBAccountCollection` | Collection for account CRUD |
| `CosmosDBSqlDatabaseResource` | SQL API database |
| `CosmosDBSqlContainerResource` | SQL API container |
| `CosmosDBAccountCreateOrUpdateContent` | Account creation payload |
| `CosmosDBSqlDatabaseCreateOrUpdateContent` | Database creation payload |
| `CosmosDBSqlContainerCreateOrUpdateContent` | Container creation payload |
| `ThroughputSettingsUpdateData` | Throughput configuration |

#### Imported: Reference Files

| File | When to Read |
|------|--------------|
| references/account-management.md | Account CRUD, failover, keys, connection strings, networking |
| references/sql-resources.md | SQL databases, containers, stored procedures, triggers, UDFs |
| references/throughput.md | Manual/autoscale throughput, migration between modes |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.CosmosDB;

// Always use DefaultAzureCredential
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);

// Get subscription
var subscriptionId = Environment.GetEnvironmentVariable("AZURE_SUBSCRIPTION_ID");
var subscription = armClient.GetSubscriptionResource(
    new ResourceIdentifier($"/subscriptions/{subscriptionId}"));
```

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var operation = await accountCollection.CreateOrUpdateAsync(
        WaitUntil.Completed, accountName, accountData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Account already exists");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"ARM Error: {ex.Status} - {ex.ErrorCode}: {ex.Message}");
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
