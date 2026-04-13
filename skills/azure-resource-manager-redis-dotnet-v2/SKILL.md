---
name: azure-resource-manager-redis-dotnet-v2
description: "Azure.ResourceManager.Redis (.NET) workflow skill. Use this skill when the user needs Azure Resource Manager SDK for Redis in .NET and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-resource-manager-redis-dotnet-v2", "azure-resource-manager-redis-dotnet", "azure", "resource", "manager", "sdk", "for", "redis"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure.ResourceManager.Redis (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-resource-manager-redis-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.ResourceManager.Redis (.NET) Management plane SDK for provisioning and managing Azure Cache for Redis resources via Azure Resource Manager. > ⚠️ Management vs Data Plane > - This SDK (Azure.ResourceManager.Redis): Create caches, configure firewall rules, manage access keys, set up geo-replication > - Data Plane SDK (StackExchange.Redis): Get/set keys, pub/sub, streams, Lua scripts

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Error Handling, Common Pitfalls, Connecting with StackExchange.Redis (Data Plane), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for Redis in .NET.
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

1. `bash dotnet add package Azure.ResourceManager.Redis dotnet add package Azure.Identity Current Version: 1.5.1 (Stable) API Version: 2024-11-01 Target Frameworks: .NET 8.0, .NET Standard 2.0 ### 1.
2. Create Redis Cache csharp using Azure.ResourceManager.Redis; using Azure.ResourceManager.Redis.Models; // Get resource group var resourceGroup = await subscription .GetResourceGroupAsync("my-resource-group"); // Define cache configuration var cacheData = new RedisCreateOrUpdateContent( location: AzureLocation.EastUS, sku: new RedisSku(RedisSkuName.Standard, RedisSkuFamily.BasicOrStandard, 1)) { EnableNonSslPort = false, MinimumTlsVersion = RedisTlsVersion.Tls1_2, RedisConfiguration = new RedisCommonConfiguration { MaxMemoryPolicy = "volatile-lru" }, Tags = { ["environment"] = "production" } }; // Create cache (long-running operation) var cacheCollection = resourceGroup.Value.GetAllRedis(); var operation = await cacheCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-redis-cache", cacheData); RedisResource cache = operation.Value; Console.WriteLine($"Cache created: {cache.Data.HostName}"); ### 2.
3. Get Redis Cache csharp // Get existing cache var cache = await resourceGroup.Value .GetRedisAsync("my-redis-cache"); Console.WriteLine($"Host: {cache.Value.Data.HostName}"); Console.WriteLine($"Port: {cache.Value.Data.Port}"); Console.WriteLine($"SSL Port: {cache.Value.Data.SslPort}"); Console.WriteLine($"Provisioning State: {cache.Value.Data.ProvisioningState}"); ### 3.
4. Update Redis Cache csharp var patchData = new RedisPatch { Sku = new RedisSku(RedisSkuName.Standard, RedisSkuFamily.BasicOrStandard, 2), RedisConfiguration = new RedisCommonConfiguration { MaxMemoryPolicy = "allkeys-lru" } }; var updateOperation = await cache.Value.UpdateAsync( WaitUntil.Completed, patchData); ### 4.
5. Delete Redis Cache csharp await cache.Value.DeleteAsync(WaitUntil.Completed); ### 5.
6. Get Access Keys csharp var keys = await cache.Value.GetKeysAsync(); Console.WriteLine($"Primary Key: {keys.Value.PrimaryKey}"); Console.WriteLine($"Secondary Key: {keys.Value.SecondaryKey}"); ### 6.
7. Regenerate Access Keys csharp var regenerateContent = new RedisRegenerateKeyContent(RedisRegenerateKeyType.Primary); var newKeys = await cache.Value.RegenerateKeyAsync(regenerateContent); Console.WriteLine($"New Primary Key: {newKeys.Value.PrimaryKey}"); ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.Redis
dotnet add package Azure.Identity
```

**Current Version**: 1.5.1 (Stable)  
**API Version**: 2024-11-01  
**Target Frameworks**: .NET 8.0, .NET Standard 2.0

#### Imported: Core Workflows

### 1. Create Redis Cache

```csharp
using Azure.ResourceManager.Redis;
using Azure.ResourceManager.Redis.Models;

// Get resource group
var resourceGroup = await subscription
    .GetResourceGroupAsync("my-resource-group");

// Define cache configuration
var cacheData = new RedisCreateOrUpdateContent(
    location: AzureLocation.EastUS,
    sku: new RedisSku(RedisSkuName.Standard, RedisSkuFamily.BasicOrStandard, 1))
{
    EnableNonSslPort = false,
    MinimumTlsVersion = RedisTlsVersion.Tls1_2,
    RedisConfiguration = new RedisCommonConfiguration
    {
        MaxMemoryPolicy = "volatile-lru"
    },
    Tags =
    {
        ["environment"] = "production"
    }
};

// Create cache (long-running operation)
var cacheCollection = resourceGroup.Value.GetAllRedis();
var operation = await cacheCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-redis-cache",
    cacheData);

RedisResource cache = operation.Value;
Console.WriteLine($"Cache created: {cache.Data.HostName}");
```

### 2. Get Redis Cache

```csharp
// Get existing cache
var cache = await resourceGroup.Value
    .GetRedisAsync("my-redis-cache");

Console.WriteLine($"Host: {cache.Value.Data.HostName}");
Console.WriteLine($"Port: {cache.Value.Data.Port}");
Console.WriteLine($"SSL Port: {cache.Value.Data.SslPort}");
Console.WriteLine($"Provisioning State: {cache.Value.Data.ProvisioningState}");
```

### 3. Update Redis Cache

```csharp
var patchData = new RedisPatch
{
    Sku = new RedisSku(RedisSkuName.Standard, RedisSkuFamily.BasicOrStandard, 2),
    RedisConfiguration = new RedisCommonConfiguration
    {
        MaxMemoryPolicy = "allkeys-lru"
    }
};

var updateOperation = await cache.Value.UpdateAsync(
    WaitUntil.Completed,
    patchData);
```

### 4. Delete Redis Cache

```csharp
await cache.Value.DeleteAsync(WaitUntil.Completed);
```

### 5. Get Access Keys

```csharp
var keys = await cache.Value.GetKeysAsync();
Console.WriteLine($"Primary Key: {keys.Value.PrimaryKey}");
Console.WriteLine($"Secondary Key: {keys.Value.SecondaryKey}");
```

### 6. Regenerate Access Keys

```csharp
var regenerateContent = new RedisRegenerateKeyContent(RedisRegenerateKeyType.Primary);
var newKeys = await cache.Value.RegenerateKeyAsync(regenerateContent);
Console.WriteLine($"New Primary Key: {newKeys.Value.PrimaryKey}");
```

### 7. Manage Firewall Rules

```csharp
// Create firewall rule
var firewallData = new RedisFirewallRuleData(
    startIP: System.Net.IPAddress.Parse("10.0.0.1"),
    endIP: System.Net.IPAddress.Parse("10.0.0.255"));

var firewallCollection = cache.Value.GetRedisFirewallRules();
var firewallOperation = await firewallCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "allow-internal-network",
    firewallData);

// List all firewall rules
await foreach (var rule in firewallCollection.GetAllAsync())
{
    Console.WriteLine($"Rule: {rule.Data.Name} ({rule.Data.StartIP} - {rule.Data.EndIP})");
}

// Delete firewall rule
var ruleToDelete = await firewallCollection.GetAsync("allow-internal-network");
await ruleToDelete.Value.DeleteAsync(WaitUntil.Completed);
```

### 8. Configure Patch Schedule (Premium SKU)

```csharp
// Patch schedules require Premium SKU
var scheduleData = new RedisPatchScheduleData(
    new[]
    {
        new RedisPatchScheduleSetting(RedisDayOfWeek.Saturday, 2) // 2 AM Saturday
        {
            MaintenanceWindow = TimeSpan.FromHours(5)
        },
        new RedisPatchScheduleSetting(RedisDayOfWeek.Sunday, 2) // 2 AM Sunday
        {
            MaintenanceWindow = TimeSpan.FromHours(5)
        }
    });

var scheduleCollection = cache.Value.GetRedisPatchSchedules();
await scheduleCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    RedisPatchScheduleDefaultName.Default,
    scheduleData);
```

### 9. Import/Export Data (Premium SKU)

```csharp
// Import data from blob storage
var importContent = new ImportRdbContent(
    files: new[] { "https://mystorageaccount.blob.core.windows.net/container/dump.rdb" },
    format: "RDB");

await cache.Value.ImportDataAsync(WaitUntil.Completed, importContent);

// Export data to blob storage
var exportContent = new ExportRdbContent(
    prefix: "backup",
    container: "https://mystorageaccount.blob.core.windows.net/container?sastoken",
    format: "RDB");

await cache.Value.ExportDataAsync(WaitUntil.Completed, exportContent);
```

### 10. Force Reboot

```csharp
var rebootContent = new RedisRebootContent
{
    RebootType = RedisRebootType.AllNodes,
    ShardId = 0 // For clustered caches
};

await cache.Value.ForceRebootAsync(rebootContent);
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
Use @azure-resource-manager-redis-dotnet-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-resource-manager-redis-dotnet-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-resource-manager-redis-dotnet-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-resource-manager-redis-dotnet-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use WaitUntil.Completed for operations that must finish before proceeding
- Use WaitUntil.Started when you want to poll manually or run operations in parallel
- Always use DefaultAzureCredential — never hardcode keys
- Handle RequestFailedException for ARM API errors
- Use CreateOrUpdateAsync for idempotent operations
- Navigate hierarchy via Get* methods (e.g., cache.GetRedisFirewallRules())
- Use Premium SKU for production workloads requiring geo-replication, clustering, or persistence

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `WaitUntil.Completed`** for operations that must finish before proceeding
2. **Use `WaitUntil.Started`** when you want to poll manually or run operations in parallel
3. **Always use `DefaultAzureCredential`** — never hardcode keys
4. **Handle `RequestFailedException`** for ARM API errors
5. **Use `CreateOrUpdateAsync`** for idempotent operations
6. **Navigate hierarchy** via `Get*` methods (e.g., `cache.GetRedisFirewallRules()`)
7. **Use Premium SKU** for production workloads requiring geo-replication, clustering, or persistence
8. **Enable TLS 1.2 minimum** — set `MinimumTlsVersion = RedisTlsVersion.Tls1_2`
9. **Disable non-SSL port** — set `EnableNonSslPort = false` for security
10. **Rotate keys regularly** — use `RegenerateKeyAsync` and update connection strings

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-resource-manager-redis-dotnet`, fails to mention provenance, or does not use the support pack at all.
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
ArmClient
└── SubscriptionResource
    └── ResourceGroupResource
        └── RedisResource
            ├── RedisFirewallRuleResource
            ├── RedisPatchScheduleResource
            ├── RedisLinkedServerWithPropertyResource
            ├── RedisPrivateEndpointConnectionResource
            └── RedisCacheAccessPolicyResource
```

#### Imported: SKU Reference

| SKU | Family | Capacity | Features |
|-----|--------|----------|----------|
| Basic | C | 0-6 | Single node, no SLA, dev/test only |
| Standard | C | 0-6 | Two nodes (primary/replica), SLA |
| Premium | P | 1-5 | Clustering, geo-replication, VNet, persistence |

**Capacity Sizes (Family C - Basic/Standard)**:
- C0: 250 MB
- C1: 1 GB
- C2: 2.5 GB
- C3: 6 GB
- C4: 13 GB
- C5: 26 GB
- C6: 53 GB

**Capacity Sizes (Family P - Premium)**:
- P1: 6 GB per shard
- P2: 13 GB per shard
- P3: 26 GB per shard
- P4: 53 GB per shard
- P5: 120 GB per shard

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ArmClient` | Entry point for all ARM operations |
| `RedisResource` | Represents a Redis cache instance |
| `RedisCollection` | Collection for cache CRUD operations |
| `RedisFirewallRuleResource` | Firewall rule for IP filtering |
| `RedisPatchScheduleResource` | Maintenance window configuration |
| `RedisLinkedServerWithPropertyResource` | Geo-replication linked server |
| `RedisPrivateEndpointConnectionResource` | Private endpoint connection |
| `RedisCacheAccessPolicyResource` | RBAC access policy |
| `RedisCreateOrUpdateContent` | Cache creation payload |
| `RedisPatch` | Cache update payload |
| `RedisSku` | SKU configuration (name, family, capacity) |
| `RedisAccessKeys` | Primary and secondary access keys |
| `RedisRegenerateKeyContent` | Key regeneration request |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Redis;

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
    var operation = await cacheCollection.CreateOrUpdateAsync(
        WaitUntil.Completed, cacheName, cacheData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Cache already exists");
}
catch (RequestFailedException ex) when (ex.Status == 400)
{
    Console.WriteLine($"Invalid configuration: {ex.Message}");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"ARM Error: {ex.Status} - {ex.ErrorCode}: {ex.Message}");
}
```

#### Imported: Common Pitfalls

1. **SKU downgrades not allowed** — You cannot downgrade from Premium to Standard/Basic
2. **Clustering requires Premium** — Shard configuration only available on Premium SKU
3. **Geo-replication requires Premium** — Linked servers only work with Premium caches
4. **VNet injection requires Premium** — Virtual network support is Premium-only
5. **Patch schedules require Premium** — Maintenance windows only configurable on Premium
6. **Cache name globally unique** — Redis cache names must be unique across all Azure subscriptions
7. **Long provisioning times** — Cache creation can take 15-20 minutes; use `WaitUntil.Started` for async patterns

#### Imported: Connecting with StackExchange.Redis (Data Plane)

After creating the cache with this management SDK, use StackExchange.Redis for data operations:

```csharp
using StackExchange.Redis;

// Get connection info from management SDK
var cache = await resourceGroup.Value.GetRedisAsync("my-redis-cache");
var keys = await cache.Value.GetKeysAsync();

// Connect with StackExchange.Redis
var connectionString = $"{cache.Value.Data.HostName}:{cache.Value.Data.SslPort},password={keys.Value.PrimaryKey},ssl=True,abortConnect=False";
var connection = ConnectionMultiplexer.Connect(connectionString);
var db = connection.GetDatabase();

// Data operations
await db.StringSetAsync("key", "value");
var value = await db.StringGetAsync("key");
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
