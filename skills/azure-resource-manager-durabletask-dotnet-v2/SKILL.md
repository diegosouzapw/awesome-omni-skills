---
name: azure-resource-manager-durabletask-dotnet-v2
description: "Azure.ResourceManager.DurableTask (.NET) workflow skill. Use this skill when the user needs Azure Resource Manager SDK for Durable Task Scheduler in .NET and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-resource-manager-durabletask-dotnet-v2", "azure-resource-manager-durabletask-dotnet", "azure", "resource", "manager", "sdk", "for", "durable"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure.ResourceManager.DurableTask (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-resource-manager-durabletask-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.ResourceManager.DurableTask (.NET) Management plane SDK for provisioning and managing Azure Durable Task Scheduler resources via Azure Resource Manager. > ⚠️ Management vs Data Plane > - This SDK (Azure.ResourceManager.DurableTask): Create schedulers, task hubs, configure retention policies > - Data Plane SDK (Microsoft.DurableTask.Client.AzureManaged): Start orchestrations, query instances, send events

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, SKU Options, Extension Methods, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for Durable Task Scheduler in .NET.
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

1. `bash dotnet add package Azure.ResourceManager.DurableTask dotnet add package Azure.Identity Current Versions: Stable v1.0.0 (2025-11-03), Preview v1.0.0-beta.1 (2025-04-24) API Version: 2025-11-01 ### 1.
2. Create Durable Task Scheduler csharp using Azure.ResourceManager.DurableTask; using Azure.ResourceManager.DurableTask.Models; // Get resource group var resourceGroup = await subscription .GetResourceGroupAsync("my-resource-group"); // Define scheduler with Dedicated SKU var schedulerData = new DurableTaskSchedulerData(AzureLocation.EastUS) { Properties = new DurableTaskSchedulerProperties { Sku = new DurableTaskSchedulerSku(DurableTaskSchedulerSkuName.Dedicated) { Capacity = 1 // Number of instances }, // Optional: IP allowlist for network security IPAllowlist = { "10.0.0.0/24", "192.168.1.0/24" } } }; // Create scheduler (long-running operation) var schedulerCollection = resourceGroup.Value.GetDurableTaskSchedulers(); var operation = await schedulerCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-scheduler", schedulerData); DurableTaskSchedulerResource scheduler = operation.Value; Console.WriteLine($"Scheduler created: {scheduler.Data.Name}"); Console.WriteLine($"Endpoint: {scheduler.Data.Properties.Endpoint}"); ### 2.
3. Create Scheduler with Consumption SKU csharp // Consumption SKU (serverless) var consumptionSchedulerData = new DurableTaskSchedulerData(AzureLocation.EastUS) { Properties = new DurableTaskSchedulerProperties { Sku = new DurableTaskSchedulerSku(DurableTaskSchedulerSkuName.Consumption) // No capacity needed for consumption } }; var operation = await schedulerCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-serverless-scheduler", consumptionSchedulerData); ### 3.
4. Create Task Hub csharp // Task hubs are created under a scheduler var taskHubData = new DurableTaskHubData { // Properties are optional for basic task hub }; var taskHubCollection = scheduler.GetDurableTaskHubs(); var hubOperation = await taskHubCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-taskhub", taskHubData); DurableTaskHubResource taskHub = hubOperation.Value; Console.WriteLine($"Task Hub created: {taskHub.Data.Name}"); ### 4.
5. List Schedulers csharp // List all schedulers in subscription await foreach (var sched in subscription.GetDurableTaskSchedulersAsync()) { Console.WriteLine($"Scheduler: {sched.Data.Name}"); Console.WriteLine($" Location: {sched.Data.Location}"); Console.WriteLine($" SKU: {sched.Data.Properties.Sku?.Name}"); Console.WriteLine($" Endpoint: {sched.Data.Properties.Endpoint}"); } // List schedulers in resource group var schedulers = resourceGroup.Value.GetDurableTaskSchedulers(); await foreach (var sched in schedulers.GetAllAsync()) { Console.WriteLine($"Scheduler: {sched.Data.Name}"); } ### 5.
6. Get Scheduler by Name csharp // Get existing scheduler var existingScheduler = await schedulerCollection.GetAsync("my-scheduler"); Console.WriteLine($"Found: {existingScheduler.Value.Data.Name}"); // Or use extension method var schedulerResource = armClient.GetDurableTaskSchedulerResource( DurableTaskSchedulerResource.CreateResourceIdentifier( subscriptionId, "my-resource-group", "my-scheduler")); var scheduler = await schedulerResource.GetAsync(); ### 6.
7. Update Scheduler csharp // Get current scheduler var scheduler = await schedulerCollection.GetAsync("my-scheduler"); // Update with new configuration var updateData = new DurableTaskSchedulerData(scheduler.Value.Data.Location) { Properties = new DurableTaskSchedulerProperties { Sku = new DurableTaskSchedulerSku(DurableTaskSchedulerSkuName.Dedicated) { Capacity = 2 // Scale up }, IPAllowlist = { "10.0.0.0/16" } // Update IP allowlist } }; var updateOperation = await schedulerCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-scheduler", updateData); ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.DurableTask
dotnet add package Azure.Identity
```

**Current Versions**: Stable v1.0.0 (2025-11-03), Preview v1.0.0-beta.1 (2025-04-24)
**API Version**: 2025-11-01

#### Imported: Core Workflow

### 1. Create Durable Task Scheduler

```csharp
using Azure.ResourceManager.DurableTask;
using Azure.ResourceManager.DurableTask.Models;

// Get resource group
var resourceGroup = await subscription
    .GetResourceGroupAsync("my-resource-group");

// Define scheduler with Dedicated SKU
var schedulerData = new DurableTaskSchedulerData(AzureLocation.EastUS)
{
    Properties = new DurableTaskSchedulerProperties
    {
        Sku = new DurableTaskSchedulerSku(DurableTaskSchedulerSkuName.Dedicated)
        {
            Capacity = 1  // Number of instances
        },
        // Optional: IP allowlist for network security
        IPAllowlist = { "10.0.0.0/24", "192.168.1.0/24" }
    }
};

// Create scheduler (long-running operation)
var schedulerCollection = resourceGroup.Value.GetDurableTaskSchedulers();
var operation = await schedulerCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-scheduler",
    schedulerData);

DurableTaskSchedulerResource scheduler = operation.Value;
Console.WriteLine($"Scheduler created: {scheduler.Data.Name}");
Console.WriteLine($"Endpoint: {scheduler.Data.Properties.Endpoint}");
```

### 2. Create Scheduler with Consumption SKU

```csharp
// Consumption SKU (serverless)
var consumptionSchedulerData = new DurableTaskSchedulerData(AzureLocation.EastUS)
{
    Properties = new DurableTaskSchedulerProperties
    {
        Sku = new DurableTaskSchedulerSku(DurableTaskSchedulerSkuName.Consumption)
        // No capacity needed for consumption
    }
};

var operation = await schedulerCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-serverless-scheduler",
    consumptionSchedulerData);
```

### 3. Create Task Hub

```csharp
// Task hubs are created under a scheduler
var taskHubData = new DurableTaskHubData
{
    // Properties are optional for basic task hub
};

var taskHubCollection = scheduler.GetDurableTaskHubs();
var hubOperation = await taskHubCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-taskhub",
    taskHubData);

DurableTaskHubResource taskHub = hubOperation.Value;
Console.WriteLine($"Task Hub created: {taskHub.Data.Name}");
```

### 4. List Schedulers

```csharp
// List all schedulers in subscription
await foreach (var sched in subscription.GetDurableTaskSchedulersAsync())
{
    Console.WriteLine($"Scheduler: {sched.Data.Name}");
    Console.WriteLine($"  Location: {sched.Data.Location}");
    Console.WriteLine($"  SKU: {sched.Data.Properties.Sku?.Name}");
    Console.WriteLine($"  Endpoint: {sched.Data.Properties.Endpoint}");
}

// List schedulers in resource group
var schedulers = resourceGroup.Value.GetDurableTaskSchedulers();
await foreach (var sched in schedulers.GetAllAsync())
{
    Console.WriteLine($"Scheduler: {sched.Data.Name}");
}
```

### 5. Get Scheduler by Name

```csharp
// Get existing scheduler
var existingScheduler = await schedulerCollection.GetAsync("my-scheduler");
Console.WriteLine($"Found: {existingScheduler.Value.Data.Name}");

// Or use extension method
var schedulerResource = armClient.GetDurableTaskSchedulerResource(
    DurableTaskSchedulerResource.CreateResourceIdentifier(
        subscriptionId,
        "my-resource-group",
        "my-scheduler"));
var scheduler = await schedulerResource.GetAsync();
```

### 6. Update Scheduler

```csharp
// Get current scheduler
var scheduler = await schedulerCollection.GetAsync("my-scheduler");

// Update with new configuration
var updateData = new DurableTaskSchedulerData(scheduler.Value.Data.Location)
{
    Properties = new DurableTaskSchedulerProperties
    {
        Sku = new DurableTaskSchedulerSku(DurableTaskSchedulerSkuName.Dedicated)
        {
            Capacity = 2  // Scale up
        },
        IPAllowlist = { "10.0.0.0/16" }  // Update IP allowlist
    }
};

var updateOperation = await schedulerCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-scheduler",
    updateData);
```

### 7. Delete Resources

```csharp
// Delete task hub first
var taskHub = await scheduler.GetDurableTaskHubs().GetAsync("my-taskhub");
await taskHub.Value.DeleteAsync(WaitUntil.Completed);

// Then delete scheduler
await scheduler.DeleteAsync(WaitUntil.Completed);
```

### 8. Manage Retention Policies

```csharp
// Get retention policy collection
var retentionPolicies = scheduler.GetDurableTaskRetentionPolicies();

// Create or update retention policy
var retentionData = new DurableTaskRetentionPolicyData
{
    Properties = new DurableTaskRetentionPolicyProperties
    {
        // Configure retention settings
    }
};

var retentionOperation = await retentionPolicies.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "default",  // Policy name
    retentionData);
```

#### Imported: Environment Variables

```bash
AZURE_SUBSCRIPTION_ID=<your-subscription-id>
AZURE_RESOURCE_GROUP=<your-resource-group>
# For service principal auth (optional)
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_SECRET=<client-secret>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-resource-manager-durabletask-dotnet-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-resource-manager-durabletask-dotnet-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-resource-manager-durabletask-dotnet-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-resource-manager-durabletask-dotnet-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Complete Example

```csharp
using Azure;
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.DurableTask;
using Azure.ResourceManager.DurableTask.Models;
using Azure.ResourceManager.Resources;

// Setup
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);

var subscriptionId = Environment.GetEnvironmentVariable("AZURE_SUBSCRIPTION_ID")!;
var resourceGroupName = Environment.GetEnvironmentVariable("AZURE_RESOURCE_GROUP")!;

var subscription = armClient.GetSubscriptionResource(
    new ResourceIdentifier($"/subscriptions/{subscriptionId}"));
var resourceGroup = await subscription.GetResourceGroupAsync(resourceGroupName);

// Create scheduler
var schedulerData = new DurableTaskSchedulerData(AzureLocation.EastUS)
{
    Properties = new DurableTaskSchedulerProperties
    {
        Sku = new DurableTaskSchedulerSku(DurableTaskSchedulerSkuName.Dedicated)
        {
            Capacity = 1
        }
    }
};

var schedulerCollection = resourceGroup.Value.GetDurableTaskSchedulers();
var schedulerOp = await schedulerCollection.CreateOrUpdateAsync(
    WaitUntil.Completed, "my-scheduler", schedulerData);
var scheduler = schedulerOp.Value;

Console.WriteLine($"Scheduler endpoint: {scheduler.Data.Properties.Endpoint}");

// Create task hub
var taskHubData = new DurableTaskHubData();
var taskHubOp = await scheduler.GetDurableTaskHubs().CreateOrUpdateAsync(
    WaitUntil.Completed, "my-taskhub", taskHubData);
var taskHub = taskHubOp.Value;

Console.WriteLine($"Task Hub: {taskHub.Data.Name}");

// Cleanup
await taskHub.DeleteAsync(WaitUntil.Completed);
await scheduler.DeleteAsync(WaitUntil.Completed);
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use WaitUntil.Completed for operations that must finish before proceeding
- Use WaitUntil.Started when you want to poll manually or run operations in parallel
- Always use DefaultAzureCredential — never hardcode keys
- Handle RequestFailedException for ARM API errors
- Use CreateOrUpdateAsync for idempotent operations
- Delete task hubs before schedulers — schedulers with task hubs cannot be deleted
- Use IP allowlists for network security in production

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `WaitUntil.Completed`** for operations that must finish before proceeding
2. **Use `WaitUntil.Started`** when you want to poll manually or run operations in parallel
3. **Always use `DefaultAzureCredential`** — never hardcode keys
4. **Handle `RequestFailedException`** for ARM API errors
5. **Use `CreateOrUpdateAsync`** for idempotent operations
6. **Delete task hubs before schedulers** — schedulers with task hubs cannot be deleted
7. **Use IP allowlists** for network security in production

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-resource-manager-durabletask-dotnet`, fails to mention provenance, or does not use the support pack at all.
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
        └── DurableTaskSchedulerResource
            ├── DurableTaskHubResource
            └── DurableTaskRetentionPolicyResource
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ArmClient` | Entry point for all ARM operations |
| `DurableTaskSchedulerResource` | Represents a Durable Task Scheduler |
| `DurableTaskSchedulerCollection` | Collection for scheduler CRUD |
| `DurableTaskSchedulerData` | Scheduler creation/update payload |
| `DurableTaskSchedulerProperties` | Scheduler configuration (SKU, IPAllowlist) |
| `DurableTaskSchedulerSku` | SKU configuration (Name, Capacity, RedundancyState) |
| `DurableTaskSchedulerSkuName` | SKU options: `Dedicated`, `Consumption` |
| `DurableTaskHubResource` | Represents a Task Hub |
| `DurableTaskHubCollection` | Collection for task hub CRUD |
| `DurableTaskHubData` | Task hub creation payload |
| `DurableTaskRetentionPolicyResource` | Retention policy management |
| `DurableTaskRetentionPolicyData` | Retention policy configuration |
| `DurableTaskExtensions` | Extension methods for ARM client |

#### Imported: Source Reference

- [GitHub: Azure.ResourceManager.DurableTask](https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/durabletask/Azure.ResourceManager.DurableTask)
- [NuGet: Azure.ResourceManager.DurableTask](https://www.nuget.org/packages/Azure.ResourceManager.DurableTask)

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.DurableTask;

// Always use DefaultAzureCredential
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);

// Get subscription
var subscriptionId = Environment.GetEnvironmentVariable("AZURE_SUBSCRIPTION_ID");
var subscription = armClient.GetSubscriptionResource(
    new ResourceIdentifier($"/subscriptions/{subscriptionId}"));
```

#### Imported: SKU Options

| SKU | Description | Use Case |
|-----|-------------|----------|
| `Dedicated` | Fixed capacity with configurable instances | Production workloads, predictable performance |
| `Consumption` | Serverless, auto-scaling | Development, variable workloads |

#### Imported: Extension Methods

The SDK provides extension methods on `SubscriptionResource` and `ResourceGroupResource`:

```csharp
// On SubscriptionResource
subscription.GetDurableTaskSchedulers();           // List all in subscription
subscription.GetDurableTaskSchedulersAsync();      // Async enumerable

// On ResourceGroupResource  
resourceGroup.GetDurableTaskSchedulers();          // Get collection
resourceGroup.GetDurableTaskSchedulerAsync(name);  // Get by name

// On ArmClient
armClient.GetDurableTaskSchedulerResource(id);     // Get by resource ID
armClient.GetDurableTaskHubResource(id);           // Get task hub by ID
```

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var operation = await schedulerCollection.CreateOrUpdateAsync(
        WaitUntil.Completed, schedulerName, schedulerData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Scheduler already exists");
}
catch (RequestFailedException ex) when (ex.Status == 404)
{
    Console.WriteLine("Resource group not found");
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
