---
name: azure-resource-manager-mysql-dotnet-v2
description: "Azure.ResourceManager.MySql (.NET) workflow skill. Use this skill when the user needs Azure MySQL Flexible Server SDK for .NET. Database management for MySQL Flexible Server deployments and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-resource-manager-mysql-dotnet-v2", "azure-resource-manager-mysql-dotnet", "azure", "mysql", "flexible", "server", "sdk", "for"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-19"
---

# Azure.ResourceManager.MySql (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-resource-manager-mysql-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.MySql (.NET) Azure Resource Manager SDK for managing MySQL Flexible Server deployments.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, SKU Tiers, High Availability Modes, Error Handling, Connection String.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure MySQL Flexible Server SDK for .NET. Database management for MySQL Flexible Server deployments.
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

1. `bash dotnet add package Azure.ResourceManager.MySql dotnet add package Azure.Identity Current Version: v1.2.0 (GA) API Version: 2023-12-30 > Note: This skill focuses on MySQL Flexible Server.
2. Single Server is deprecated and scheduled for retirement.
3. Create MySQL Flexible Server csharp using Azure.ResourceManager.MySql.FlexibleServers; using Azure.ResourceManager.MySql.FlexibleServers.Models; ResourceGroupResource resourceGroup = await client .GetDefaultSubscriptionAsync() .Result .GetResourceGroupAsync("my-resource-group"); MySqlFlexibleServerCollection servers = resourceGroup.GetMySqlFlexibleServers(); MySqlFlexibleServerData data = new MySqlFlexibleServerData(AzureLocation.EastUS) { Sku = new MySqlFlexibleServerSku("StandardD2dsv4", MySqlFlexibleServerSkuTier.GeneralPurpose), AdministratorLogin = "mysqladmin", AdministratorLoginPassword = "YourSecurePassword123!", Version = MySqlFlexibleServerVersion.Ver8021, Storage = new MySqlFlexibleServerStorage { StorageSizeInGB = 128, AutoGrow = MySqlFlexibleServerEnableStatusEnum.Enabled, Iops = 3000 }, Backup = new MySqlFlexibleServerBackupProperties { BackupRetentionDays = 7, GeoRedundantBackup = MySqlFlexibleServerEnableStatusEnum.Disabled }, HighAvailability = new MySqlFlexibleServerHighAvailability { Mode = MySqlFlexibleServerHighAvailabilityMode.ZoneRedundant, StandbyAvailabilityZone = "2" }, AvailabilityZone = "1" }; ArmOperation<MySqlFlexibleServerResource> operation = await servers .CreateOrUpdateAsync(WaitUntil.Completed, "my-mysql-server", data); MySqlFlexibleServerResource server = operation.Value; Console.WriteLine($"Server created: {server.Data.FullyQualifiedDomainName}"); ### 2.
4. Create Database csharp MySqlFlexibleServerResource server = await resourceGroup .GetMySqlFlexibleServerAsync("my-mysql-server"); MySqlFlexibleServerDatabaseCollection databases = server.GetMySqlFlexibleServerDatabases(); MySqlFlexibleServerDatabaseData dbData = new MySqlFlexibleServerDatabaseData { Charset = "utf8mb4", Collation = "utf8mb4unicodeci" }; ArmOperation<MySqlFlexibleServerDatabaseResource> operation = await databases .CreateOrUpdateAsync(WaitUntil.Completed, "myappdb", dbData); MySqlFlexibleServerDatabaseResource database = operation.Value; Console.WriteLine($"Database created: {database.Data.Name}"); ### 3.
5. Configure Firewall Rules csharp MySqlFlexibleServerFirewallRuleCollection firewallRules = server.GetMySqlFlexibleServerFirewallRules(); // Allow specific IP range MySqlFlexibleServerFirewallRuleData ruleData = new MySqlFlexibleServerFirewallRuleData { StartIPAddress = System.Net.IPAddress.Parse("10.0.0.1"), EndIPAddress = System.Net.IPAddress.Parse("10.0.0.255") }; ArmOperation<MySqlFlexibleServerFirewallRuleResource> operation = await firewallRules .CreateOrUpdateAsync(WaitUntil.Completed, "allow-internal", ruleData); // Allow Azure services MySqlFlexibleServerFirewallRuleData azureServicesRule = new MySqlFlexibleServerFirewallRuleData { StartIPAddress = System.Net.IPAddress.Parse("0.0.0.0"), EndIPAddress = System.Net.IPAddress.Parse("0.0.0.0") }; await firewallRules.CreateOrUpdateAsync(WaitUntil.Completed, "AllowAllAzureServicesAndResourcesWithinAzureIps", azureServicesRule); ### 4.
6. Update Server Configuration csharp MySqlFlexibleServerConfigurationCollection configurations = server.GetMySqlFlexibleServerConfigurations(); // Get current configuration MySqlFlexibleServerConfigurationResource config = await configurations .GetAsync("maxconnections"); // Update configuration MySqlFlexibleServerConfigurationData configData = new MySqlFlexibleServerConfigurationData { Value = "500", Source = MySqlFlexibleServerConfigurationSource.UserOverride }; ArmOperation<MySqlFlexibleServerConfigurationResource> operation = await configurations .CreateOrUpdateAsync(WaitUntil.Completed, "maxconnections", configData); // Common configurations to tune string[] commonParams = { "maxconnections", "innodbbufferpoolsize", "slowquerylog", "longquerytime" }; ### 5.
7. Configure Entra ID Administrator csharp MySqlFlexibleServerAadAdministratorCollection admins = server.GetMySqlFlexibleServerAadAdministrators(); MySqlFlexibleServerAadAdministratorData adminData = new MySqlFlexibleServerAadAdministratorData { AdministratorType = MySqlFlexibleServerAdministratorType.ActiveDirectory, Login = "aad-admin@contoso.com", Sid = Guid.Parse("<entra-object-id>"), TenantId = Guid.Parse("<tenant-id>"), IdentityResourceId = new ResourceIdentifier("/subscriptions/.../userAssignedIdentities/mysql-identity") }; ArmOperation<MySqlFlexibleServerAadAdministratorResource> operation = await admins .CreateOrUpdateAsync(WaitUntil.Completed, "ActiveDirectory", adminData); ### 6.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.MySql
dotnet add package Azure.Identity
```

**Current Version**: v1.2.0 (GA)  
**API Version**: 2023-12-30

> **Note**: This skill focuses on MySQL Flexible Server. Single Server is deprecated and scheduled for retirement.

#### Imported: Core Workflows

### 1. Create MySQL Flexible Server

```csharp
using Azure.ResourceManager.MySql.FlexibleServers;
using Azure.ResourceManager.MySql.FlexibleServers.Models;

ResourceGroupResource resourceGroup = await client
    .GetDefaultSubscriptionAsync()
    .Result
    .GetResourceGroupAsync("my-resource-group");

MySqlFlexibleServerCollection servers = resourceGroup.GetMySqlFlexibleServers();

MySqlFlexibleServerData data = new MySqlFlexibleServerData(AzureLocation.EastUS)
{
    Sku = new MySqlFlexibleServerSku("Standard_D2ds_v4", MySqlFlexibleServerSkuTier.GeneralPurpose),
    AdministratorLogin = "mysqladmin",
    AdministratorLoginPassword = "YourSecurePassword123!",
    Version = MySqlFlexibleServerVersion.Ver8_0_21,
    Storage = new MySqlFlexibleServerStorage
    {
        StorageSizeInGB = 128,
        AutoGrow = MySqlFlexibleServerEnableStatusEnum.Enabled,
        Iops = 3000
    },
    Backup = new MySqlFlexibleServerBackupProperties
    {
        BackupRetentionDays = 7,
        GeoRedundantBackup = MySqlFlexibleServerEnableStatusEnum.Disabled
    },
    HighAvailability = new MySqlFlexibleServerHighAvailability
    {
        Mode = MySqlFlexibleServerHighAvailabilityMode.ZoneRedundant,
        StandbyAvailabilityZone = "2"
    },
    AvailabilityZone = "1"
};

ArmOperation<MySqlFlexibleServerResource> operation = await servers
    .CreateOrUpdateAsync(WaitUntil.Completed, "my-mysql-server", data);

MySqlFlexibleServerResource server = operation.Value;
Console.WriteLine($"Server created: {server.Data.FullyQualifiedDomainName}");
```

### 2. Create Database

```csharp
MySqlFlexibleServerResource server = await resourceGroup
    .GetMySqlFlexibleServerAsync("my-mysql-server");

MySqlFlexibleServerDatabaseCollection databases = server.GetMySqlFlexibleServerDatabases();

MySqlFlexibleServerDatabaseData dbData = new MySqlFlexibleServerDatabaseData
{
    Charset = "utf8mb4",
    Collation = "utf8mb4_unicode_ci"
};

ArmOperation<MySqlFlexibleServerDatabaseResource> operation = await databases
    .CreateOrUpdateAsync(WaitUntil.Completed, "myappdb", dbData);

MySqlFlexibleServerDatabaseResource database = operation.Value;
Console.WriteLine($"Database created: {database.Data.Name}");
```

### 3. Configure Firewall Rules

```csharp
MySqlFlexibleServerFirewallRuleCollection firewallRules = server.GetMySqlFlexibleServerFirewallRules();

// Allow specific IP range
MySqlFlexibleServerFirewallRuleData ruleData = new MySqlFlexibleServerFirewallRuleData
{
    StartIPAddress = System.Net.IPAddress.Parse("10.0.0.1"),
    EndIPAddress = System.Net.IPAddress.Parse("10.0.0.255")
};

ArmOperation<MySqlFlexibleServerFirewallRuleResource> operation = await firewallRules
    .CreateOrUpdateAsync(WaitUntil.Completed, "allow-internal", ruleData);

// Allow Azure services
MySqlFlexibleServerFirewallRuleData azureServicesRule = new MySqlFlexibleServerFirewallRuleData
{
    StartIPAddress = System.Net.IPAddress.Parse("0.0.0.0"),
    EndIPAddress = System.Net.IPAddress.Parse("0.0.0.0")
};

await firewallRules.CreateOrUpdateAsync(WaitUntil.Completed, "AllowAllAzureServicesAndResourcesWithinAzureIps", azureServicesRule);
```

### 4. Update Server Configuration

```csharp
MySqlFlexibleServerConfigurationCollection configurations = server.GetMySqlFlexibleServerConfigurations();

// Get current configuration
MySqlFlexibleServerConfigurationResource config = await configurations
    .GetAsync("max_connections");

// Update configuration
MySqlFlexibleServerConfigurationData configData = new MySqlFlexibleServerConfigurationData
{
    Value = "500",
    Source = MySqlFlexibleServerConfigurationSource.UserOverride
};

ArmOperation<MySqlFlexibleServerConfigurationResource> operation = await configurations
    .CreateOrUpdateAsync(WaitUntil.Completed, "max_connections", configData);

// Common configurations to tune
string[] commonParams = { "max_connections", "innodb_buffer_pool_size", "slow_query_log", "long_query_time" };
```

### 5. Configure Entra ID Administrator

```csharp
MySqlFlexibleServerAadAdministratorCollection admins = server.GetMySqlFlexibleServerAadAdministrators();

MySqlFlexibleServerAadAdministratorData adminData = new MySqlFlexibleServerAadAdministratorData
{
    AdministratorType = MySqlFlexibleServerAdministratorType.ActiveDirectory,
    Login = "aad-admin@contoso.com",
    Sid = Guid.Parse("<entra-object-id>"),
    TenantId = Guid.Parse("<tenant-id>"),
    IdentityResourceId = new ResourceIdentifier("/subscriptions/.../userAssignedIdentities/mysql-identity")
};

ArmOperation<MySqlFlexibleServerAadAdministratorResource> operation = await admins
    .CreateOrUpdateAsync(WaitUntil.Completed, "ActiveDirectory", adminData);
```

### 6. List and Manage Servers

```csharp
// List servers in resource group
await foreach (MySqlFlexibleServerResource server in resourceGroup.GetMySqlFlexibleServers())
{
    Console.WriteLine($"Server: {server.Data.Name}");
    Console.WriteLine($"  FQDN: {server.Data.FullyQualifiedDomainName}");
    Console.WriteLine($"  Version: {server.Data.Version}");
    Console.WriteLine($"  State: {server.Data.State}");
    Console.WriteLine($"  SKU: {server.Data.Sku.Name} ({server.Data.Sku.Tier})");
}

// List databases in server
await foreach (MySqlFlexibleServerDatabaseResource db in server.GetMySqlFlexibleServerDatabases())
{
    Console.WriteLine($"Database: {db.Data.Name}");
}
```

### 7. Backup and Restore

```csharp
// List available backups
await foreach (MySqlFlexibleServerBackupResource backup in server.GetMySqlFlexibleServerBackups())
{
    Console.WriteLine($"Backup: {backup.Data.Name}");
    Console.WriteLine($"  Type: {backup.Data.BackupType}");
    Console.WriteLine($"  Completed: {backup.Data.CompletedOn}");
}

// Point-in-time restore
MySqlFlexibleServerData restoreData = new MySqlFlexibleServerData(AzureLocation.EastUS)
{
    CreateMode = MySqlFlexibleServerCreateMode.PointInTimeRestore,
    SourceServerResourceId = server.Id,
    RestorePointInTime = DateTimeOffset.UtcNow.AddHours(-2)
};

ArmOperation<MySqlFlexibleServerResource> operation = await servers
    .CreateOrUpdateAsync(WaitUntil.Completed, "my-mysql-restored", restoreData);
```

### 8. Stop and Start Server

```csharp
MySqlFlexibleServerResource server = await resourceGroup
    .GetMySqlFlexibleServerAsync("my-mysql-server");

// Stop server (saves costs when not in use)
await server.StopAsync(WaitUntil.Completed);

// Start server
await server.StartAsync(WaitUntil.Completed);

// Restart server
await server.RestartAsync(WaitUntil.Completed, new MySqlFlexibleServerRestartParameter
{
    RestartWithFailover = MySqlFlexibleServerEnableStatusEnum.Enabled,
    MaxFailoverSeconds = 60
});
```

### 9. Update Server (Scale)

```csharp
MySqlFlexibleServerResource server = await resourceGroup
    .GetMySqlFlexibleServerAsync("my-mysql-server");

MySqlFlexibleServerPatch patch = new MySqlFlexibleServerPatch
{
    Sku = new MySqlFlexibleServerSku("Standard_D4ds_v4", MySqlFlexibleServerSkuTier.GeneralPurpose),
    Storage = new MySqlFlexibleServerStorage
    {
        StorageSizeInGB = 256,
        Iops = 6000
    }
};

ArmOperation<MySqlFlexibleServerResource> operation = await server
    .UpdateAsync(WaitUntil.Completed, patch);
```

### 10. Delete Server

```csharp
MySqlFlexibleServerResource server = await resourceGroup
    .GetMySqlFlexibleServerAsync("my-mysql-server");

await server.DeleteAsync(WaitUntil.Completed);
```

#### Imported: Environment Variables

```bash
AZURE_SUBSCRIPTION_ID=<your-subscription-id>
AZURE_RESOURCE_GROUP=<your-resource-group>
AZURE_MYSQL_SERVER_NAME=<your-mysql-server>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-resource-manager-mysql-dotnet-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-resource-manager-mysql-dotnet-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-resource-manager-mysql-dotnet-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-resource-manager-mysql-dotnet-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use Flexible Server — Single Server is deprecated
- Enable zone-redundant HA — For production workloads
- Use DefaultAzureCredential — Prefer over connection strings
- Configure Entra ID authentication — More secure than SQL auth
- Enable auto-grow storage — Prevents out-of-space issues
- Set appropriate backup retention — 7-35 days based on compliance
- Use private endpoints — For secure network access

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Flexible Server** — Single Server is deprecated
2. **Enable zone-redundant HA** — For production workloads
3. **Use DefaultAzureCredential** — Prefer over connection strings
4. **Configure Entra ID authentication** — More secure than SQL auth
5. **Enable auto-grow storage** — Prevents out-of-space issues
6. **Set appropriate backup retention** — 7-35 days based on compliance
7. **Use private endpoints** — For secure network access
8. **Tune server parameters** — Based on workload characteristics
9. **Monitor with Azure Monitor** — Enable metrics and logs
10. **Stop dev/test servers** — Save costs when not in use

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-resource-manager-mysql-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-applicationinsights-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-arizeaiobservabilityeval-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-botservice-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-botservice-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
Subscription
└── ResourceGroup
    └── MySqlFlexibleServer                 # MySQL Flexible Server instance
        ├── MySqlFlexibleServerDatabase     # Database within the server
        ├── MySqlFlexibleServerFirewallRule # IP firewall rules
        ├── MySqlFlexibleServerConfiguration # Server parameters
        ├── MySqlFlexibleServerBackup       # Backup information
        ├── MySqlFlexibleServerMaintenanceWindow # Maintenance schedule
        └── MySqlFlexibleServerAadAdministrator # Entra ID admin
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `MySqlFlexibleServerResource` | Flexible Server instance |
| `MySqlFlexibleServerData` | Server configuration data |
| `MySqlFlexibleServerCollection` | Collection of servers |
| `MySqlFlexibleServerDatabaseResource` | Database within server |
| `MySqlFlexibleServerFirewallRuleResource` | IP firewall rule |
| `MySqlFlexibleServerConfigurationResource` | Server parameter |
| `MySqlFlexibleServerBackupResource` | Backup metadata |
| `MySqlFlexibleServerAadAdministratorResource` | Entra ID admin |
| `MySqlFlexibleServerSku` | SKU (compute tier + size) |
| `MySqlFlexibleServerStorage` | Storage configuration |
| `MySqlFlexibleServerHighAvailability` | HA configuration |
| `MySqlFlexibleServerBackupProperties` | Backup settings |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.ResourceManager.MySql |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.resourcemanager.mysql |
| Product Documentation | https://learn.microsoft.com/azure/mysql/flexible-server/ |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/mysql/Azure.ResourceManager.MySql |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.MySql;
using Azure.ResourceManager.MySql.FlexibleServers;

ArmClient client = new ArmClient(new DefaultAzureCredential());
```

#### Imported: SKU Tiers

| Tier | Use Case | SKU Examples |
|------|----------|--------------|
| `Burstable` | Dev/test, light workloads | Standard_B1ms, Standard_B2s |
| `GeneralPurpose` | Production workloads | Standard_D2ds_v4, Standard_D4ds_v4 |
| `MemoryOptimized` | High memory requirements | Standard_E2ds_v4, Standard_E4ds_v4 |

#### Imported: High Availability Modes

| Mode | Description |
|------|-------------|
| `Disabled` | No HA (single server) |
| `SameZone` | HA within same availability zone |
| `ZoneRedundant` | HA across availability zones |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    ArmOperation<MySqlFlexibleServerResource> operation = await servers
        .CreateOrUpdateAsync(WaitUntil.Completed, "my-mysql", data);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Server already exists");
}
catch (RequestFailedException ex) when (ex.Status == 400)
{
    Console.WriteLine($"Invalid configuration: {ex.Message}");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Azure error: {ex.Status} - {ex.Message}");
}
```

#### Imported: Connection String

After creating the server, connect using:

```csharp
// ADO.NET connection string
string connectionString = $"Server={server.Data.FullyQualifiedDomainName};" +
    "Database=myappdb;" +
    "User Id=mysqladmin;" +
    "Password=YourSecurePassword123!;" +
    "SslMode=Required;";

// With Entra ID token (recommended)
var credential = new DefaultAzureCredential();
var token = await credential.GetTokenAsync(
    new TokenRequestContext(new[] { "https://ossrdbms-aad.database.windows.net/.default" }));

string connectionString = $"Server={server.Data.FullyQualifiedDomainName};" +
    "Database=myappdb;" +
    $"User Id=aad-admin@contoso.com;" +
    $"Password={token.Token};" +
    "SslMode=Required;";
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
