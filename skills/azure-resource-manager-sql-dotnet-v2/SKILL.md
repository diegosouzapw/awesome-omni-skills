---
name: azure-resource-manager-sql-dotnet-v2
description: "Azure.ResourceManager.Sql (.NET) workflow skill. Use this skill when the user needs Azure Resource Manager SDK for Azure SQL in .NET and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-resource-manager-sql-dotnet-v2", "azure-resource-manager-sql-dotnet", "azure", "resource", "manager", "sdk", "for", "sql"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Azure.ResourceManager.Sql (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-resource-manager-sql-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.Sql (.NET) Management plane SDK for provisioning and managing Azure SQL resources via Azure Resource Manager. > ⚠️ Management vs Data Plane > - This SDK (Azure.ResourceManager.Sql): Create servers, databases, elastic pools, configure firewall rules, manage failover groups > - Data Plane SDK (Microsoft.Data.SqlClient): Execute queries, stored procedures, manage connections

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Common SKUs, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for Azure SQL in .NET.
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

1. `bash dotnet add package Azure.ResourceManager.Sql dotnet add package Azure.Identity Current Versions: Stable v1.3.0, Preview v1.4.0-beta.3 ### 1.
2. Create SQL Server csharp using Azure.ResourceManager.Sql; using Azure.ResourceManager.Sql.Models; // Get resource group var resourceGroup = await subscription .GetResourceGroupAsync("my-resource-group"); // Define server var serverData = new SqlServerData(AzureLocation.EastUS) { AdministratorLogin = "sqladmin", AdministratorLoginPassword = "YourSecurePassword123!", Version = "12.0", MinimalTlsVersion = SqlMinimalTlsVersion.Tls12, PublicNetworkAccess = ServerNetworkAccessFlag.Enabled }; // Create server (long-running operation) var serverCollection = resourceGroup.Value.GetSqlServers(); var operation = await serverCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-sql-server", serverData); SqlServerResource server = operation.Value; ### 2.
3. Create SQL Database csharp var databaseData = new SqlDatabaseData(AzureLocation.EastUS) { Sku = new SqlSku("S0") { Tier = "Standard" }, MaxSizeBytes = 2L 1024 1024 * 1024, // 2 GB Collation = "SQLLatin1GeneralCP1CIAS", RequestedBackupStorageRedundancy = SqlBackupStorageRedundancy.Local }; var databaseCollection = server.GetSqlDatabases(); var dbOperation = await databaseCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-database", databaseData); SqlDatabaseResource database = dbOperation.Value; ### 3.
4. Create Elastic Pool csharp var poolData = new ElasticPoolData(AzureLocation.EastUS) { Sku = new SqlSku("StandardPool") { Tier = "Standard", Capacity = 100 // 100 eDTUs }, PerDatabaseSettings = new ElasticPoolPerDatabaseSettings { MinCapacity = 0, MaxCapacity = 100 } }; var poolCollection = server.GetElasticPools(); var poolOperation = await poolCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-elastic-pool", poolData); ElasticPoolResource pool = poolOperation.Value; ### 4.
5. Add Database to Elastic Pool csharp var databaseData = new SqlDatabaseData(AzureLocation.EastUS) { ElasticPoolId = pool.Id }; await databaseCollection.CreateOrUpdateAsync( WaitUntil.Completed, "pooled-database", databaseData); ### 5.
6. Configure Firewall Rules csharp // Allow Azure services var azureServicesRule = new SqlFirewallRuleData { StartIPAddress = "0.0.0.0", EndIPAddress = "0.0.0.0" }; var firewallCollection = server.GetSqlFirewallRules(); await firewallCollection.CreateOrUpdateAsync( WaitUntil.Completed, "AllowAzureServices", azureServicesRule); // Allow specific IP range var clientRule = new SqlFirewallRuleData { StartIPAddress = "203.0.113.0", EndIPAddress = "203.0.113.255" }; await firewallCollection.CreateOrUpdateAsync( WaitUntil.Completed, "AllowClientIPs", clientRule); ### 6.
7. List Resources csharp // List all servers in subscription await foreach (var srv in subscription.GetSqlServersAsync()) { Console.WriteLine($"Server: {srv.Data.Name} in {srv.Data.Location}"); } // List databases in a server await foreach (var db in server.GetSqlDatabases()) { Console.WriteLine($"Database: {db.Data.Name}, SKU: {db.Data.Sku?.Name}"); } // List elastic pools await foreach (var ep in server.GetElasticPools()) { Console.WriteLine($"Pool: {ep.Data.Name}, DTU: {ep.Data.Sku?.Capacity}"); } ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.Sql
dotnet add package Azure.Identity
```

**Current Versions**: Stable v1.3.0, Preview v1.4.0-beta.3

#### Imported: Core Workflow

### 1. Create SQL Server

```csharp
using Azure.ResourceManager.Sql;
using Azure.ResourceManager.Sql.Models;

// Get resource group
var resourceGroup = await subscription
    .GetResourceGroupAsync("my-resource-group");

// Define server
var serverData = new SqlServerData(AzureLocation.EastUS)
{
    AdministratorLogin = "sqladmin",
    AdministratorLoginPassword = "YourSecurePassword123!",
    Version = "12.0",
    MinimalTlsVersion = SqlMinimalTlsVersion.Tls1_2,
    PublicNetworkAccess = ServerNetworkAccessFlag.Enabled
};

// Create server (long-running operation)
var serverCollection = resourceGroup.Value.GetSqlServers();
var operation = await serverCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-sql-server",
    serverData);

SqlServerResource server = operation.Value;
```

### 2. Create SQL Database

```csharp
var databaseData = new SqlDatabaseData(AzureLocation.EastUS)
{
    Sku = new SqlSku("S0") { Tier = "Standard" },
    MaxSizeBytes = 2L * 1024 * 1024 * 1024, // 2 GB
    Collation = "SQL_Latin1_General_CP1_CI_AS",
    RequestedBackupStorageRedundancy = SqlBackupStorageRedundancy.Local
};

var databaseCollection = server.GetSqlDatabases();
var dbOperation = await databaseCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-database",
    databaseData);

SqlDatabaseResource database = dbOperation.Value;
```

### 3. Create Elastic Pool

```csharp
var poolData = new ElasticPoolData(AzureLocation.EastUS)
{
    Sku = new SqlSku("StandardPool")
    {
        Tier = "Standard",
        Capacity = 100 // 100 eDTUs
    },
    PerDatabaseSettings = new ElasticPoolPerDatabaseSettings
    {
        MinCapacity = 0,
        MaxCapacity = 100
    }
};

var poolCollection = server.GetElasticPools();
var poolOperation = await poolCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-elastic-pool",
    poolData);

ElasticPoolResource pool = poolOperation.Value;
```

### 4. Add Database to Elastic Pool

```csharp
var databaseData = new SqlDatabaseData(AzureLocation.EastUS)
{
    ElasticPoolId = pool.Id
};

await databaseCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "pooled-database",
    databaseData);
```

### 5. Configure Firewall Rules

```csharp
// Allow Azure services
var azureServicesRule = new SqlFirewallRuleData
{
    StartIPAddress = "0.0.0.0",
    EndIPAddress = "0.0.0.0"
};

var firewallCollection = server.GetSqlFirewallRules();
await firewallCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "AllowAzureServices",
    azureServicesRule);

// Allow specific IP range
var clientRule = new SqlFirewallRuleData
{
    StartIPAddress = "203.0.113.0",
    EndIPAddress = "203.0.113.255"
};

await firewallCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "AllowClientIPs",
    clientRule);
```

### 6. List Resources

```csharp
// List all servers in subscription
await foreach (var srv in subscription.GetSqlServersAsync())
{
    Console.WriteLine($"Server: {srv.Data.Name} in {srv.Data.Location}");
}

// List databases in a server
await foreach (var db in server.GetSqlDatabases())
{
    Console.WriteLine($"Database: {db.Data.Name}, SKU: {db.Data.Sku?.Name}");
}

// List elastic pools
await foreach (var ep in server.GetElasticPools())
{
    Console.WriteLine($"Pool: {ep.Data.Name}, DTU: {ep.Data.Sku?.Capacity}");
}
```

### 7. Get Connection String

```csharp
// Build connection string (server FQDN is predictable)
var serverFqdn = $"{server.Data.Name}.database.windows.net";
var connectionString = $"Server=tcp:{serverFqdn},1433;" +
    $"Initial Catalog={database.Data.Name};" +
    "Persist Security Info=False;" +
    $"User ID={server.Data.AdministratorLogin};" +
    "Password=<your-password>;" +
    "MultipleActiveResultSets=False;" +
    "Encrypt=True;" +
    "TrustServerCertificate=False;" +
    "Connection Timeout=30;";
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
Use @azure-resource-manager-sql-dotnet-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-resource-manager-sql-dotnet-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-resource-manager-sql-dotnet-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-resource-manager-sql-dotnet-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use WaitUntil.Completed for operations that must finish before proceeding
- Use WaitUntil.Started when you want to poll manually or run operations in parallel
- Always use DefaultAzureCredential — never hardcode passwords in production
- Handle RequestFailedException for ARM API errors
- Use CreateOrUpdateAsync for idempotent operations
- Navigate hierarchy via Get* methods (e.g., server.GetSqlDatabases())
- Use elastic pools for cost optimization when managing multiple databases

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `WaitUntil.Completed`** for operations that must finish before proceeding
2. **Use `WaitUntil.Started`** when you want to poll manually or run operations in parallel
3. **Always use `DefaultAzureCredential`** — never hardcode passwords in production
4. **Handle `RequestFailedException`** for ARM API errors
5. **Use `CreateOrUpdateAsync`** for idempotent operations
6. **Navigate hierarchy** via `Get*` methods (e.g., `server.GetSqlDatabases()`)
7. **Use elastic pools** for cost optimization when managing multiple databases
8. **Configure firewall rules** before attempting connections

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-resource-manager-sql-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-microsoft-playwright-testing-ts-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-monitor-ingestion-java-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-monitor-ingestion-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-monitor-opentelemetry-exporter-java-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
        └── SqlServerResource
            ├── SqlDatabaseResource
            ├── ElasticPoolResource
            │   └── ElasticPoolDatabaseResource
            ├── SqlFirewallRuleResource
            ├── FailoverGroupResource
            ├── ServerBlobAuditingPolicyResource
            ├── EncryptionProtectorResource
            └── VirtualNetworkRuleResource
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ArmClient` | Entry point for all ARM operations |
| `SqlServerResource` | Represents an Azure SQL server |
| `SqlServerCollection` | Collection for server CRUD |
| `SqlDatabaseResource` | Represents a SQL database |
| `SqlDatabaseCollection` | Collection for database CRUD |
| `ElasticPoolResource` | Represents an elastic pool |
| `ElasticPoolCollection` | Collection for elastic pool CRUD |
| `SqlFirewallRuleResource` | Represents a firewall rule |
| `SqlFirewallRuleCollection` | Collection for firewall rule CRUD |
| `SqlServerData` | Server creation/update payload |
| `SqlDatabaseData` | Database creation/update payload |
| `ElasticPoolData` | Elastic pool creation/update payload |
| `SqlFirewallRuleData` | Firewall rule creation/update payload |
| `SqlSku` | SKU configuration (tier, capacity) |

#### Imported: Reference Files

| File | When to Read |
|------|--------------|
| references/server-management.md | Server CRUD, admin credentials, Azure AD auth, networking |
| references/database-operations.md | Database CRUD, scaling, backup, restore, copy |
| references/elastic-pools.md | Pool management, adding/removing databases, scaling |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Sql;

// Always use DefaultAzureCredential
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);

// Get subscription
var subscriptionId = Environment.GetEnvironmentVariable("AZURE_SUBSCRIPTION_ID");
var subscription = armClient.GetSubscriptionResource(
    new ResourceIdentifier($"/subscriptions/{subscriptionId}"));
```

#### Imported: Common SKUs

### Database SKUs

| SKU Name | Tier | Description |
|----------|------|-------------|
| `Basic` | Basic | 5 DTUs, 2 GB max |
| `S0`-`S12` | Standard | 10-3000 DTUs |
| `P1`-`P15` | Premium | 125-4000 DTUs |
| `GP_Gen5_2` | GeneralPurpose | vCore-based, 2 vCores |
| `BC_Gen5_2` | BusinessCritical | vCore-based, 2 vCores |
| `HS_Gen5_2` | Hyperscale | vCore-based, 2 vCores |

### Elastic Pool SKUs

| SKU Name | Tier | Description |
|----------|------|-------------|
| `BasicPool` | Basic | 50-1600 eDTUs |
| `StandardPool` | Standard | 50-3000 eDTUs |
| `PremiumPool` | Premium | 125-4000 eDTUs |
| `GP_Gen5_2` | GeneralPurpose | vCore-based |
| `BC_Gen5_2` | BusinessCritical | vCore-based |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var operation = await serverCollection.CreateOrUpdateAsync(
        WaitUntil.Completed, serverName, serverData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Server already exists");
}
catch (RequestFailedException ex) when (ex.Status == 400)
{
    Console.WriteLine($"Invalid request: {ex.Message}");
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
