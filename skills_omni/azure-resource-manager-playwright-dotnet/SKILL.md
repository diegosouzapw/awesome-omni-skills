---
name: "azure-resource-manager-playwright-dotnet"
description: "Azure.ResourceManager.Playwright (.NET) workflow skill. Use this skill when the user needs Azure Resource Manager SDK for Microsoft Playwright Testing in .NET and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "testing-security"
tags:
  - "azure-resource-manager-playwright-dotnet"
  - "azure"
  - "resource"
  - "manager"
  - "sdk"
  - "for"
  - "microsoft"
  - "playwright"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "azure-resource-manager-playwright-dotnet"
family_name: "Azure.ResourceManager.Playwright (.NET)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/azure-resource-manager-playwright-dotnet"
upstream_skill: "skills/azure-resource-manager-playwright-dotnet"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "azure-resource-manager-playwright-dotnet"
---

# Azure.ResourceManager.Playwright (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-resource-manager-playwright-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.Playwright (.NET) Management plane SDK for provisioning and managing Microsoft Playwright Testing workspaces via Azure Resource Manager. > ⚠️ Management vs Test Execution > - This SDK (Azure.ResourceManager.Playwright): Create workspaces, manage quotas, check name availability > - Test Execution SDK (Azure.Developer.MicrosoftPlaywrightTesting.NUnit): Run Playwright tests at scale on cloud browsers

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Workspace Properties, Error Handling, Integration with Test Execution, API Information.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for Microsoft Playwright Testing in .NET.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. `bash dotnet add package Azure.ResourceManager.Playwright dotnet add package Azure.Identity Current Versions: Stable v1.0.0, Preview v1.0.0-beta.1 ### 1.
2. Create Playwright Workspace csharp using Azure.ResourceManager.Playwright; using Azure.ResourceManager.Playwright.Models; // Get resource group var resourceGroup = await subscription .GetResourceGroupAsync("my-resource-group"); // Define workspace var workspaceData = new PlaywrightWorkspaceData(AzureLocation.WestUS3) { // Optional: Configure regional affinity and local auth RegionalAffinity = PlaywrightRegionalAffinity.Enabled, LocalAuth = PlaywrightLocalAuth.Enabled, Tags = { ["Team"] = "Dev Exp", ["Environment"] = "Production" } }; // Create workspace (long-running operation) var workspaceCollection = resourceGroup.Value.GetPlaywrightWorkspaces(); var operation = await workspaceCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-playwright-workspace", workspaceData); PlaywrightWorkspaceResource workspace = operation.Value; // Get the data plane URI for running tests Console.WriteLine($"Data Plane URI: {workspace.Data.DataplaneUri}"); Console.WriteLine($"Workspace ID: {workspace.Data.WorkspaceId}"); ### 2.
3. Get Existing Workspace csharp // Get by name var workspace = await workspaceCollection.GetAsync("my-playwright-workspace"); // Or check if exists first bool exists = await workspaceCollection.ExistsAsync("my-playwright-workspace"); if (exists) { var existingWorkspace = await workspaceCollection.GetAsync("my-playwright-workspace"); Console.WriteLine($"Workspace found: {existingWorkspace.Value.Data.Name}"); } ### 3.
4. List Workspaces csharp // List in resource group await foreach (var workspace in workspaceCollection.GetAllAsync()) { Console.WriteLine($"Workspace: {workspace.Data.Name}"); Console.WriteLine($" Location: {workspace.Data.Location}"); Console.WriteLine($" State: {workspace.Data.ProvisioningState}"); Console.WriteLine($" Data Plane URI: {workspace.Data.DataplaneUri}"); } // List across subscription await foreach (var workspace in subscription.GetPlaywrightWorkspacesAsync()) { Console.WriteLine($"Workspace: {workspace.Data.Name}"); } ### 4.
5. Update Workspace csharp var patch = new PlaywrightWorkspacePatch { Tags = { ["Team"] = "Dev Exp", ["Environment"] = "Staging", ["UpdatedAt"] = DateTime.UtcNow.ToString("o") } }; var updatedWorkspace = await workspace.Value.UpdateAsync(patch); ### 5.
6. Check Name Availability csharp using Azure.ResourceManager.Playwright.Models; var checkRequest = new PlaywrightCheckNameAvailabilityContent { Name = "my-new-workspace", ResourceType = "Microsoft.LoadTestService/playwrightWorkspaces" }; var result = await subscription.CheckPlaywrightNameAvailabilityAsync(checkRequest); if (result.Value.IsNameAvailable == true) { Console.WriteLine("Name is available!"); } else { Console.WriteLine($"Name unavailable: {result.Value.Message}"); Console.WriteLine($"Reason: {result.Value.Reason}"); } ### 6.
7. Get Quota Information csharp // Subscription-level quotas await foreach (var quota in subscription.GetPlaywrightQuotasAsync(AzureLocation.WestUS3)) { Console.WriteLine($"Quota: {quota.Data.Name}"); Console.WriteLine($" Limit: {quota.Data.Limit}"); Console.WriteLine($" Used: {quota.Data.Used}"); } // Workspace-level quotas var workspaceQuotas = workspace.Value.GetAllPlaywrightWorkspaceQuota(); await foreach (var quota in workspaceQuotas.GetAllAsync()) { Console.WriteLine($"Workspace Quota: {quota.Data.Name}"); } ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.Playwright
dotnet add package Azure.Identity
```

**Current Versions**: Stable v1.0.0, Preview v1.0.0-beta.1

#### Imported: Core Workflow

### 1. Create Playwright Workspace

```csharp
using Azure.ResourceManager.Playwright;
using Azure.ResourceManager.Playwright.Models;

// Get resource group
var resourceGroup = await subscription
    .GetResourceGroupAsync("my-resource-group");

// Define workspace
var workspaceData = new PlaywrightWorkspaceData(AzureLocation.WestUS3)
{
    // Optional: Configure regional affinity and local auth
    RegionalAffinity = PlaywrightRegionalAffinity.Enabled,
    LocalAuth = PlaywrightLocalAuth.Enabled,
    Tags =
    {
        ["Team"] = "Dev Exp",
        ["Environment"] = "Production"
    }
};

// Create workspace (long-running operation)
var workspaceCollection = resourceGroup.Value.GetPlaywrightWorkspaces();
var operation = await workspaceCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-playwright-workspace",
    workspaceData);

PlaywrightWorkspaceResource workspace = operation.Value;

// Get the data plane URI for running tests
Console.WriteLine($"Data Plane URI: {workspace.Data.DataplaneUri}");
Console.WriteLine($"Workspace ID: {workspace.Data.WorkspaceId}");
```

### 2. Get Existing Workspace

```csharp
// Get by name
var workspace = await workspaceCollection.GetAsync("my-playwright-workspace");

// Or check if exists first
bool exists = await workspaceCollection.ExistsAsync("my-playwright-workspace");
if (exists)
{
    var existingWorkspace = await workspaceCollection.GetAsync("my-playwright-workspace");
    Console.WriteLine($"Workspace found: {existingWorkspace.Value.Data.Name}");
}
```

### 3. List Workspaces

```csharp
// List in resource group
await foreach (var workspace in workspaceCollection.GetAllAsync())
{
    Console.WriteLine($"Workspace: {workspace.Data.Name}");
    Console.WriteLine($"  Location: {workspace.Data.Location}");
    Console.WriteLine($"  State: {workspace.Data.ProvisioningState}");
    Console.WriteLine($"  Data Plane URI: {workspace.Data.DataplaneUri}");
}

// List across subscription
await foreach (var workspace in subscription.GetPlaywrightWorkspacesAsync())
{
    Console.WriteLine($"Workspace: {workspace.Data.Name}");
}
```

### 4. Update Workspace

```csharp
var patch = new PlaywrightWorkspacePatch
{
    Tags =
    {
        ["Team"] = "Dev Exp",
        ["Environment"] = "Staging",
        ["UpdatedAt"] = DateTime.UtcNow.ToString("o")
    }
};

var updatedWorkspace = await workspace.Value.UpdateAsync(patch);
```

### 5. Check Name Availability

```csharp
using Azure.ResourceManager.Playwright.Models;

var checkRequest = new PlaywrightCheckNameAvailabilityContent
{
    Name = "my-new-workspace",
    ResourceType = "Microsoft.LoadTestService/playwrightWorkspaces"
};

var result = await subscription.CheckPlaywrightNameAvailabilityAsync(checkRequest);

if (result.Value.IsNameAvailable == true)
{
    Console.WriteLine("Name is available!");
}
else
{
    Console.WriteLine($"Name unavailable: {result.Value.Message}");
    Console.WriteLine($"Reason: {result.Value.Reason}");
}
```

### 6. Get Quota Information

```csharp
// Subscription-level quotas
await foreach (var quota in subscription.GetPlaywrightQuotasAsync(AzureLocation.WestUS3))
{
    Console.WriteLine($"Quota: {quota.Data.Name}");
    Console.WriteLine($"  Limit: {quota.Data.Limit}");
    Console.WriteLine($"  Used: {quota.Data.Used}");
}

// Workspace-level quotas
var workspaceQuotas = workspace.Value.GetAllPlaywrightWorkspaceQuota();
await foreach (var quota in workspaceQuotas.GetAllAsync())
{
    Console.WriteLine($"Workspace Quota: {quota.Data.Name}");
}
```

### 7. Delete Workspace

```csharp
// Delete (long-running operation)
await workspace.Value.DeleteAsync(WaitUntil.Completed);
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
Use @azure-resource-manager-playwright-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-resource-manager-playwright-dotnet against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-resource-manager-playwright-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-resource-manager-playwright-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use WaitUntil.Completed for operations that must finish before proceeding
- Use WaitUntil.Started when you want to poll manually or run operations in parallel
- Always use DefaultAzureCredential — never hardcode keys
- Handle RequestFailedException for ARM API errors
- Use CreateOrUpdateAsync for idempotent operations
- Navigate hierarchy via Get* methods (e.g., resourceGroup.GetPlaywrightWorkspaces())
- Store the DataplaneUri after workspace creation for test execution configuration

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `WaitUntil.Completed`** for operations that must finish before proceeding
2. **Use `WaitUntil.Started`** when you want to poll manually or run operations in parallel
3. **Always use `DefaultAzureCredential`** — never hardcode keys
4. **Handle `RequestFailedException`** for ARM API errors
5. **Use `CreateOrUpdateAsync`** for idempotent operations
6. **Navigate hierarchy** via `Get*` methods (e.g., `resourceGroup.GetPlaywrightWorkspaces()`)
7. **Store the DataplaneUri** after workspace creation for test execution configuration

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-resource-manager-playwright-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
    ├── PlaywrightQuotaResource (subscription-level quotas)
    └── ResourceGroupResource
        └── PlaywrightWorkspaceResource
            └── PlaywrightWorkspaceQuotaResource (workspace-level quotas)
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ArmClient` | Entry point for all ARM operations |
| `PlaywrightWorkspaceResource` | Represents a Playwright Testing workspace |
| `PlaywrightWorkspaceCollection` | Collection for workspace CRUD |
| `PlaywrightWorkspaceData` | Workspace creation/response payload |
| `PlaywrightWorkspacePatch` | Workspace update payload |
| `PlaywrightQuotaResource` | Subscription-level quota information |
| `PlaywrightWorkspaceQuotaResource` | Workspace-level quota information |
| `PlaywrightExtensions` | Extension methods for ARM resources |
| `PlaywrightCheckNameAvailabilityContent` | Name availability check request |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.Playwright;

// Always use DefaultAzureCredential
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);

// Get subscription
var subscriptionId = Environment.GetEnvironmentVariable("AZURE_SUBSCRIPTION_ID");
var subscription = armClient.GetSubscriptionResource(
    new ResourceIdentifier($"/subscriptions/{subscriptionId}"));
```

#### Imported: Workspace Properties

| Property | Description |
|----------|-------------|
| `DataplaneUri` | URI for running tests (e.g., `https://api.dataplane.{guid}.domain.com`) |
| `WorkspaceId` | Unique workspace identifier (GUID) |
| `RegionalAffinity` | Enable/disable regional affinity for test execution |
| `LocalAuth` | Enable/disable local authentication (access tokens) |
| `ProvisioningState` | Current provisioning state (Succeeded, Failed, etc.) |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var operation = await workspaceCollection.CreateOrUpdateAsync(
        WaitUntil.Completed, workspaceName, workspaceData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Workspace already exists");
}
catch (RequestFailedException ex) when (ex.Status == 400)
{
    Console.WriteLine($"Bad request: {ex.Message}");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"ARM Error: {ex.Status} - {ex.ErrorCode}: {ex.Message}");
}
```

#### Imported: Integration with Test Execution

After creating a workspace, use the `DataplaneUri` to configure your Playwright tests:

```csharp
// 1. Create workspace (this SDK)
var workspace = await workspaceCollection.CreateOrUpdateAsync(
    WaitUntil.Completed, "my-workspace", workspaceData);

// 2. Get the service URL
var serviceUrl = workspace.Value.Data.DataplaneUri;

// 3. Set environment variable for test execution
Environment.SetEnvironmentVariable("PLAYWRIGHT_SERVICE_URL", serviceUrl.ToString());

// 4. Run tests using Azure.Developer.MicrosoftPlaywrightTesting.NUnit
// (separate package for test execution)
```

#### Imported: API Information

- **Resource Provider**: `Microsoft.LoadTestService`
- **Default API Version**: `2025-09-01`
- **Resource Type**: `Microsoft.LoadTestService/playwrightWorkspaces`

#### Imported: Documentation Links

- [Azure.ResourceManager.Playwright API Reference](https://learn.microsoft.com/en-us/dotnet/api/azure.resourcemanager.playwright)
- [Microsoft Playwright Testing Overview](https://learn.microsoft.com/en-us/azure/playwright-testing/overview-what-is-microsoft-playwright-testing)
- [Quickstart: Run Playwright Tests at Scale](https://learn.microsoft.com/en-us/azure/playwright-testing/quickstart-run-end-to-end-tests)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
