---
name: azure-mgmt-fabric-dotnet
description: "Azure.ResourceManager.Fabric (.NET) workflow skill. Use this skill when the user needs Azure Resource Manager SDK for Fabric in .NET and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-mgmt-fabric-dotnet", "azure", "resource", "manager", "sdk", "for", "fabric", "net"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure.ResourceManager.Fabric (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-fabric-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.Fabric (.NET) Management plane SDK for provisioning and managing Microsoft Fabric capacity resources via Azure Resource Manager. > Management Plane Only > This SDK manages Fabric capacities (compute resources). For working with Fabric workspaces, lakehouses, warehouses, and data items, use the Microsoft Fabric REST API or data plane SDKs.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Error Handling, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for Fabric in .NET.
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

1. `bash dotnet add package Azure.ResourceManager.Fabric dotnet add package Azure.Identity Current Version: 1.0.0 (GA - September 2025) API Version: 2023-11-01 Target Frameworks: .NET 8.0, .NET Standard 2.0 ### 1.
2. Create Fabric Capacity csharp using Azure.ResourceManager.Fabric; using Azure.ResourceManager.Fabric.Models; using Azure.Core; // Get resource group var resourceGroup = await subscription.GetResourceGroupAsync("my-resource-group"); // Define capacity configuration var administration = new FabricCapacityAdministration( new[] { "admin@contoso.com" } // Capacity administrators (UPNs or object IDs) ); var properties = new FabricCapacityProperties(administration); var sku = new FabricSku("F64", FabricSkuTier.Fabric); var capacityData = new FabricCapacityData( AzureLocation.WestUS2, properties, sku) { Tags = { ["Environment"] = "Production" } }; // Create capacity (long-running operation) var capacityCollection = resourceGroup.Value.GetFabricCapacities(); var operation = await capacityCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-fabric-capacity", capacityData); FabricCapacityResource capacity = operation.Value; Console.WriteLine($"Created capacity: {capacity.Data.Name}"); Console.WriteLine($"State: {capacity.Data.Properties.State}"); ### 2.
3. Get Fabric Capacity csharp // Get existing capacity var capacity = await resourceGroup.Value .GetFabricCapacityAsync("my-fabric-capacity"); Console.WriteLine($"Name: {capacity.Value.Data.Name}"); Console.WriteLine($"Location: {capacity.Value.Data.Location}"); Console.WriteLine($"SKU: {capacity.Value.Data.Sku.Name}"); Console.WriteLine($"State: {capacity.Value.Data.Properties.State}"); Console.WriteLine($"Provisioning State: {capacity.Value.Data.Properties.ProvisioningState}"); ### 3.
4. Update Capacity (Scale SKU or Change Admins) csharp var capacity = await resourceGroup.Value .GetFabricCapacityAsync("my-fabric-capacity"); var patch = new FabricCapacityPatch { Sku = new FabricSku("F128", FabricSkuTier.Fabric), // Scale up Properties = new FabricCapacityUpdateProperties { Administration = new FabricCapacityAdministration( new[] { "admin@contoso.com", "newadmin@contoso.com" } ) } }; var updateOperation = await capacity.Value.UpdateAsync( WaitUntil.Completed, patch); Console.WriteLine($"Updated SKU: {updateOperation.Value.Data.Sku.Name}"); ### 4.
5. Suspend and Resume Capacity `csharp // Suspend capacity (stop billing for compute) await capacity.Value.SuspendAsync(WaitUntil.Completed); Console.WriteLine("Capacity suspended"); // Resume capacity var resumeOperation = await capacity.Value.ResumeAsync(WaitUntil.Completed); Console.WriteLine($"Capacity resumed.
6. State: {resumeOperation.Value.Data.Properties.State}"); ` ### 5.
7. Delete Capacity csharp await capacity.Value.DeleteAsync(WaitUntil.Completed); Console.WriteLine("Capacity deleted"); ### 6.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.Fabric
dotnet add package Azure.Identity
```

**Current Version**: 1.0.0 (GA - September 2025)  
**API Version**: 2023-11-01  
**Target Frameworks**: .NET 8.0, .NET Standard 2.0

#### Imported: Core Workflows

### 1. Create Fabric Capacity

```csharp
using Azure.ResourceManager.Fabric;
using Azure.ResourceManager.Fabric.Models;
using Azure.Core;

// Get resource group
var resourceGroup = await subscription.GetResourceGroupAsync("my-resource-group");

// Define capacity configuration
var administration = new FabricCapacityAdministration(
    new[] { "admin@contoso.com" }  // Capacity administrators (UPNs or object IDs)
);

var properties = new FabricCapacityProperties(administration);

var sku = new FabricSku("F64", FabricSkuTier.Fabric);

var capacityData = new FabricCapacityData(
    AzureLocation.WestUS2,
    properties,
    sku)
{
    Tags = { ["Environment"] = "Production" }
};

// Create capacity (long-running operation)
var capacityCollection = resourceGroup.Value.GetFabricCapacities();
var operation = await capacityCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-fabric-capacity",
    capacityData);

FabricCapacityResource capacity = operation.Value;
Console.WriteLine($"Created capacity: {capacity.Data.Name}");
Console.WriteLine($"State: {capacity.Data.Properties.State}");
```

### 2. Get Fabric Capacity

```csharp
// Get existing capacity
var capacity = await resourceGroup.Value
    .GetFabricCapacityAsync("my-fabric-capacity");

Console.WriteLine($"Name: {capacity.Value.Data.Name}");
Console.WriteLine($"Location: {capacity.Value.Data.Location}");
Console.WriteLine($"SKU: {capacity.Value.Data.Sku.Name}");
Console.WriteLine($"State: {capacity.Value.Data.Properties.State}");
Console.WriteLine($"Provisioning State: {capacity.Value.Data.Properties.ProvisioningState}");
```

### 3. Update Capacity (Scale SKU or Change Admins)

```csharp
var capacity = await resourceGroup.Value
    .GetFabricCapacityAsync("my-fabric-capacity");

var patch = new FabricCapacityPatch
{
    Sku = new FabricSku("F128", FabricSkuTier.Fabric),  // Scale up
    Properties = new FabricCapacityUpdateProperties
    {
        Administration = new FabricCapacityAdministration(
            new[] { "admin@contoso.com", "newadmin@contoso.com" }
        )
    }
};

var updateOperation = await capacity.Value.UpdateAsync(
    WaitUntil.Completed,
    patch);

Console.WriteLine($"Updated SKU: {updateOperation.Value.Data.Sku.Name}");
```

### 4. Suspend and Resume Capacity

```csharp
// Suspend capacity (stop billing for compute)
await capacity.Value.SuspendAsync(WaitUntil.Completed);
Console.WriteLine("Capacity suspended");

// Resume capacity
var resumeOperation = await capacity.Value.ResumeAsync(WaitUntil.Completed);
Console.WriteLine($"Capacity resumed. State: {resumeOperation.Value.Data.Properties.State}");
```

### 5. Delete Capacity

```csharp
await capacity.Value.DeleteAsync(WaitUntil.Completed);
Console.WriteLine("Capacity deleted");
```

### 6. List All Capacities

```csharp
// In a resource group
await foreach (var cap in resourceGroup.Value.GetFabricCapacities())
{
    Console.WriteLine($"- {cap.Data.Name} ({cap.Data.Sku.Name})");
}

// In a subscription
await foreach (var cap in subscription.GetFabricCapacitiesAsync())
{
    Console.WriteLine($"- {cap.Data.Name} in {cap.Data.Location}");
}
```

### 7. Check Name Availability

```csharp
var checkContent = new FabricNameAvailabilityContent
{
    Name = "my-new-capacity",
    ResourceType = "Microsoft.Fabric/capacities"
};

var result = await subscription.CheckFabricCapacityNameAvailabilityAsync(
    AzureLocation.WestUS2,
    checkContent);

if (result.Value.IsNameAvailable == true)
{
    Console.WriteLine("Name is available!");
}
else
{
    Console.WriteLine($"Name unavailable: {result.Value.Reason} - {result.Value.Message}");
}
```

### 8. List Available SKUs

```csharp
// List all SKUs available in subscription
await foreach (var skuDetails in subscription.GetSkusFabricCapacitiesAsync())
{
    Console.WriteLine($"SKU: {skuDetails.Name}");
    Console.WriteLine($"  Resource Type: {skuDetails.ResourceType}");
    foreach (var location in skuDetails.Locations)
    {
        Console.WriteLine($"  Location: {location}");
    }
}

// List SKUs available for an existing capacity (for scaling)
await foreach (var skuDetails in capacity.Value.GetSkusForCapacityAsync())
{
    Console.WriteLine($"Can scale to: {skuDetails.Sku.Name}");
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
Use @azure-mgmt-fabric-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-mgmt-fabric-dotnet against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-mgmt-fabric-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-fabric-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use WaitUntil.Completed for operations that must finish before proceeding
- Use WaitUntil.Started when you want to poll manually or run operations in parallel
- Always use DefaultAzureCredential — never hardcode credentials
- Handle RequestFailedException for ARM API errors
- Use CreateOrUpdateAsync for idempotent operations
- Suspend when not in use — Fabric capacities bill for compute even when idle
- Check provisioning state before performing operations on a capacity

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `WaitUntil.Completed`** for operations that must finish before proceeding
2. **Use `WaitUntil.Started`** when you want to poll manually or run operations in parallel
3. **Always use `DefaultAzureCredential`** — never hardcode credentials
4. **Handle `RequestFailedException`** for ARM API errors
5. **Use `CreateOrUpdateAsync`** for idempotent operations
6. **Suspend when not in use** — Fabric capacities bill for compute even when idle
7. **Check provisioning state** before performing operations on a capacity
8. **Use appropriate SKU** — Start small (F2/F4) for dev/test, scale up for production

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-fabric-dotnet`, fails to mention provenance, or does not use any copied source files at all.
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
        └── FabricCapacityResource
```

#### Imported: SKU Reference

| SKU Name | Capacity Units (CU) | Power BI Equivalent |
|----------|---------------------|---------------------|
| F2 | 2 | - |
| F4 | 4 | - |
| F8 | 8 | EM1/A1 |
| F16 | 16 | EM2/A2 |
| F32 | 32 | EM3/A3 |
| F64 | 64 | P1/A4 |
| F128 | 128 | P2/A5 |
| F256 | 256 | P3/A6 |
| F512 | 512 | P4/A7 |
| F1024 | 1024 | P5/A8 |
| F2048 | 2048 | - |

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ArmClient` | Entry point for all ARM operations |
| `FabricCapacityResource` | Represents a Fabric capacity instance |
| `FabricCapacityCollection` | Collection for capacity CRUD operations |
| `FabricCapacityData` | Capacity creation/read data model |
| `FabricCapacityPatch` | Capacity update payload |
| `FabricCapacityProperties` | Capacity properties (administration, state) |
| `FabricCapacityAdministration` | Admin members configuration |
| `FabricSku` | SKU configuration (name and tier) |
| `FabricSkuTier` | Pricing tier (currently only "Fabric") |
| `FabricProvisioningState` | Provisioning states (Succeeded, Failed, etc.) |
| `FabricResourceState` | Resource states (Active, Suspended, etc.) |
| `FabricNameAvailabilityContent` | Name availability check request |
| `FabricNameAvailabilityResult` | Name availability check response |

#### Imported: Provisioning and Resource States

### Provisioning States (`FabricProvisioningState`)
- `Succeeded` - Operation completed successfully
- `Failed` - Operation failed
- `Canceled` - Operation was canceled
- `Deleting` - Capacity is being deleted
- `Provisioning` - Initial provisioning in progress
- `Updating` - Update operation in progress

### Resource States (`FabricResourceState`)
- `Active` - Capacity is running and available
- `Provisioning` - Being provisioned
- `Failed` - In failed state
- `Updating` - Being updated
- `Deleting` - Being deleted
- `Suspending` - Transitioning to suspended
- `Suspended` - Suspended (not billing for compute)
- `Pausing` - Transitioning to paused
- `Paused` - Paused
- `Resuming` - Resuming from suspended/paused
- `Scaling` - Scaling to different SKU
- `Preparing` - Preparing resources

#### Imported: References

- [Azure.ResourceManager.Fabric NuGet](https://www.nuget.org/packages/Azure.ResourceManager.Fabric)
- [GitHub Source](https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/fabric/Azure.ResourceManager.Fabric)
- [Microsoft Fabric Documentation](https://learn.microsoft.com/fabric/)
- [Fabric Capacity Management](https://learn.microsoft.com/fabric/admin/service-admin-portal-capacity-settings)

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Fabric;

// Always use DefaultAzureCredential
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);

// Get subscription
var subscription = await armClient.GetDefaultSubscriptionAsync();
```

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var operation = await capacityCollection.CreateOrUpdateAsync(
        WaitUntil.Completed, capacityName, capacityData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Capacity already exists or conflict");
}
catch (RequestFailedException ex) when (ex.Status == 400)
{
    Console.WriteLine($"Invalid configuration: {ex.Message}");
}
catch (RequestFailedException ex) when (ex.Status == 403)
{
    Console.WriteLine("Insufficient permissions or quota exceeded");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"ARM Error: {ex.Status} - {ex.ErrorCode}: {ex.Message}");
}
```

#### Imported: Common Pitfalls

1. **Capacity names must be globally unique** — Fabric capacity names must be unique across all Azure subscriptions
2. **Suspend doesn't delete** — Suspended capacities still exist but don't bill for compute
3. **SKU changes may require downtime** — Scaling operations can take several minutes
4. **Admin UPNs must be valid** — Capacity administrators must be valid Azure AD users
5. **Location constraints** — Not all SKUs are available in all regions; use `GetSkusFabricCapacitiesAsync` to check
6. **Long provisioning times** — Capacity creation can take 5-15 minutes

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
