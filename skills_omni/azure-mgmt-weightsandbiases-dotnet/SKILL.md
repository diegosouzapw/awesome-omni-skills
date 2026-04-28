---
name: "azure-mgmt-weightsandbiases-dotnet"
description: "Azure.ResourceManager.WeightsAndBiases (.NET) workflow skill. Use this skill when the user needs Azure Weights & Biases SDK for .NET. ML experiment tracking and model management via Azure Marketplace. Use for creating W&B instances, managing SSO, marketplace integration, and ML observability and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "azure-mgmt-weightsandbiases-dotnet"
  - "azure"
  - "weights"
  - "biases"
  - "sdk"
  - "for"
  - "net"
  - "experiment"
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
family_id: "azure-mgmt-weightsandbiases-dotnet"
family_name: "Azure.ResourceManager.WeightsAndBiases (.NET)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/azure-mgmt-weightsandbiases-dotnet"
upstream_skill: "skills/azure-mgmt-weightsandbiases-dotnet"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "azure-mgmt-weightsandbiases-dotnet"
---

# Azure.ResourceManager.WeightsAndBiases (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-weightsandbiases-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.WeightsAndBiases (.NET) Azure Resource Manager SDK for deploying and managing Weights & Biases ML experiment tracking instances via Azure Marketplace.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Available Regions, Marketplace Offer Details, Error Handling, Integration with W&B SDK.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Weights & Biases SDK for .NET. ML experiment tracking and model management via Azure Marketplace. Use for creating W&B instances, managing SSO, marketplace integration, and ML observability.
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

1. `bash dotnet add package Azure.ResourceManager.WeightsAndBiases --prerelease dotnet add package Azure.Identity Current Version: v1.0.0-beta.1 (preview) API Version: 2024-09-18-preview ### 1.
2. Create Weights & Biases Instance csharp using Azure.ResourceManager.WeightsAndBiases; using Azure.ResourceManager.WeightsAndBiases.Models; ResourceGroupResource resourceGroup = await client .GetDefaultSubscriptionAsync() .Result .GetResourceGroupAsync("my-resource-group"); WeightsAndBiasesInstanceCollection instances = resourceGroup.GetWeightsAndBiasesInstances(); WeightsAndBiasesInstanceData data = new WeightsAndBiasesInstanceData(AzureLocation.EastUS) { Properties = new WeightsAndBiasesInstanceProperties { // Marketplace configuration Marketplace = new WeightsAndBiasesMarketplaceDetails { SubscriptionId = "<marketplace-subscription-id>", OfferDetails = new WeightsAndBiasesOfferDetails { PublisherId = "wandb", OfferId = "wandb-pay-as-you-go", PlanId = "wandb-payg", PlanName = "Pay As You Go", TermId = "monthly", TermUnit = "P1M" } }, // Admin user User = new WeightsAndBiasesUserDetails { FirstName = "Admin", LastName = "User", EmailAddress = "admin@example.com", Upn = "admin@example.com" }, // W&B-specific configuration PartnerProperties = new WeightsAndBiasesPartnerProperties { Region = WeightsAndBiasesRegion.EastUS, Subdomain = "my-company-wandb" } }, // Optional: Enable managed identity Identity = new ManagedServiceIdentity(ManagedServiceIdentityType.SystemAssigned) }; ArmOperation<WeightsAndBiasesInstanceResource> operation = await instances .CreateOrUpdateAsync(WaitUntil.Completed, "my-wandb-instance", data); WeightsAndBiasesInstanceResource instance = operation.Value; Console.WriteLine($"W&B Instance created: {instance.Data.Name}"); Console.WriteLine($"Provisioning state: {instance.Data.Properties.ProvisioningState}"); ### 2.
3. Get Existing Instance csharp WeightsAndBiasesInstanceResource instance = await resourceGroup .GetWeightsAndBiasesInstanceAsync("my-wandb-instance"); Console.WriteLine($"Instance: {instance.Data.Name}"); Console.WriteLine($"Location: {instance.Data.Location}"); Console.WriteLine($"State: {instance.Data.Properties.ProvisioningState}"); if (instance.Data.Properties.PartnerProperties != null) { Console.WriteLine($"Region: {instance.Data.Properties.PartnerProperties.Region}"); Console.WriteLine($"Subdomain: {instance.Data.Properties.PartnerProperties.Subdomain}"); } ### 3.
4. List All Instances csharp // List in resource group await foreach (WeightsAndBiasesInstanceResource instance in resourceGroup.GetWeightsAndBiasesInstances()) { Console.WriteLine($"Instance: {instance.Data.Name}"); Console.WriteLine($" Location: {instance.Data.Location}"); Console.WriteLine($" State: {instance.Data.Properties.ProvisioningState}"); } // List in subscription SubscriptionResource subscription = await client.GetDefaultSubscriptionAsync(); await foreach (WeightsAndBiasesInstanceResource instance in subscription.GetWeightsAndBiasesInstancesAsync()) { Console.WriteLine($"{instance.Data.Name} in {instance.Id.ResourceGroupName}"); } ### 4.
5. Configure Single Sign-On (SSO) csharp WeightsAndBiasesInstanceResource instance = await resourceGroup .GetWeightsAndBiasesInstanceAsync("my-wandb-instance"); // Update with SSO configuration WeightsAndBiasesInstanceData updateData = instance.Data; updateData.Properties.SingleSignOnPropertiesV2 = new WeightsAndBiasSingleSignOnPropertiesV2 { Type = WeightsAndBiasSingleSignOnType.Saml, State = WeightsAndBiasSingleSignOnState.Enable, EnterpriseAppId = "<entra-app-id>", AadDomains = { "example.com", "contoso.com" } }; ArmOperation<WeightsAndBiasesInstanceResource> operation = await resourceGroup .GetWeightsAndBiasesInstances() .CreateOrUpdateAsync(WaitUntil.Completed, "my-wandb-instance", updateData); ### 5.
6. Update Instance csharp WeightsAndBiasesInstanceResource instance = await resourceGroup .GetWeightsAndBiasesInstanceAsync("my-wandb-instance"); // Update tags WeightsAndBiasesInstancePatch patch = new WeightsAndBiasesInstancePatch { Tags = { { "environment", "production" }, { "team", "ml-platform" }, { "costCenter", "CC-ML-001" } } }; instance = await instance.UpdateAsync(patch); Console.WriteLine($"Updated instance: {instance.Data.Name}"); ### 6.
7. Delete Instance csharp WeightsAndBiasesInstanceResource instance = await resourceGroup .GetWeightsAndBiasesInstanceAsync("my-wandb-instance"); await instance.DeleteAsync(WaitUntil.Completed); Console.WriteLine("Instance deleted"); ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.WeightsAndBiases --prerelease
dotnet add package Azure.Identity
```

**Current Version**: v1.0.0-beta.1 (preview)  
**API Version**: 2024-09-18-preview

#### Imported: Core Workflows

### 1. Create Weights & Biases Instance

```csharp
using Azure.ResourceManager.WeightsAndBiases;
using Azure.ResourceManager.WeightsAndBiases.Models;

ResourceGroupResource resourceGroup = await client
    .GetDefaultSubscriptionAsync()
    .Result
    .GetResourceGroupAsync("my-resource-group");

WeightsAndBiasesInstanceCollection instances = resourceGroup.GetWeightsAndBiasesInstances();

WeightsAndBiasesInstanceData data = new WeightsAndBiasesInstanceData(AzureLocation.EastUS)
{
    Properties = new WeightsAndBiasesInstanceProperties
    {
        // Marketplace configuration
        Marketplace = new WeightsAndBiasesMarketplaceDetails
        {
            SubscriptionId = "<marketplace-subscription-id>",
            OfferDetails = new WeightsAndBiasesOfferDetails
            {
                PublisherId = "wandb",
                OfferId = "wandb-pay-as-you-go",
                PlanId = "wandb-payg",
                PlanName = "Pay As You Go",
                TermId = "monthly",
                TermUnit = "P1M"
            }
        },
        // Admin user
        User = new WeightsAndBiasesUserDetails
        {
            FirstName = "Admin",
            LastName = "User",
            EmailAddress = "admin@example.com",
            Upn = "admin@example.com"
        },
        // W&B-specific configuration
        PartnerProperties = new WeightsAndBiasesPartnerProperties
        {
            Region = WeightsAndBiasesRegion.EastUS,
            Subdomain = "my-company-wandb"
        }
    },
    // Optional: Enable managed identity
    Identity = new ManagedServiceIdentity(ManagedServiceIdentityType.SystemAssigned)
};

ArmOperation<WeightsAndBiasesInstanceResource> operation = await instances
    .CreateOrUpdateAsync(WaitUntil.Completed, "my-wandb-instance", data);

WeightsAndBiasesInstanceResource instance = operation.Value;

Console.WriteLine($"W&B Instance created: {instance.Data.Name}");
Console.WriteLine($"Provisioning state: {instance.Data.Properties.ProvisioningState}");
```

### 2. Get Existing Instance

```csharp
WeightsAndBiasesInstanceResource instance = await resourceGroup
    .GetWeightsAndBiasesInstanceAsync("my-wandb-instance");

Console.WriteLine($"Instance: {instance.Data.Name}");
Console.WriteLine($"Location: {instance.Data.Location}");
Console.WriteLine($"State: {instance.Data.Properties.ProvisioningState}");

if (instance.Data.Properties.PartnerProperties != null)
{
    Console.WriteLine($"Region: {instance.Data.Properties.PartnerProperties.Region}");
    Console.WriteLine($"Subdomain: {instance.Data.Properties.PartnerProperties.Subdomain}");
}
```

### 3. List All Instances

```csharp
// List in resource group
await foreach (WeightsAndBiasesInstanceResource instance in 
    resourceGroup.GetWeightsAndBiasesInstances())
{
    Console.WriteLine($"Instance: {instance.Data.Name}");
    Console.WriteLine($"  Location: {instance.Data.Location}");
    Console.WriteLine($"  State: {instance.Data.Properties.ProvisioningState}");
}

// List in subscription
SubscriptionResource subscription = await client.GetDefaultSubscriptionAsync();
await foreach (WeightsAndBiasesInstanceResource instance in 
    subscription.GetWeightsAndBiasesInstancesAsync())
{
    Console.WriteLine($"{instance.Data.Name} in {instance.Id.ResourceGroupName}");
}
```

### 4. Configure Single Sign-On (SSO)

```csharp
WeightsAndBiasesInstanceResource instance = await resourceGroup
    .GetWeightsAndBiasesInstanceAsync("my-wandb-instance");

// Update with SSO configuration
WeightsAndBiasesInstanceData updateData = instance.Data;

updateData.Properties.SingleSignOnPropertiesV2 = new WeightsAndBiasSingleSignOnPropertiesV2
{
    Type = WeightsAndBiasSingleSignOnType.Saml,
    State = WeightsAndBiasSingleSignOnState.Enable,
    EnterpriseAppId = "<entra-app-id>",
    AadDomains = { "example.com", "contoso.com" }
};

ArmOperation<WeightsAndBiasesInstanceResource> operation = await resourceGroup
    .GetWeightsAndBiasesInstances()
    .CreateOrUpdateAsync(WaitUntil.Completed, "my-wandb-instance", updateData);
```

### 5. Update Instance

```csharp
WeightsAndBiasesInstanceResource instance = await resourceGroup
    .GetWeightsAndBiasesInstanceAsync("my-wandb-instance");

// Update tags
WeightsAndBiasesInstancePatch patch = new WeightsAndBiasesInstancePatch
{
    Tags =
    {
        { "environment", "production" },
        { "team", "ml-platform" },
        { "costCenter", "CC-ML-001" }
    }
};

instance = await instance.UpdateAsync(patch);
Console.WriteLine($"Updated instance: {instance.Data.Name}");
```

### 6. Delete Instance

```csharp
WeightsAndBiasesInstanceResource instance = await resourceGroup
    .GetWeightsAndBiasesInstanceAsync("my-wandb-instance");

await instance.DeleteAsync(WaitUntil.Completed);
Console.WriteLine("Instance deleted");
```

### 7. Check Resource Name Availability

```csharp
// Check if name is available before creating
// (Implement via direct ARM call if SDK doesn't expose this)
try
{
    await resourceGroup.GetWeightsAndBiasesInstanceAsync("desired-name");
    Console.WriteLine("Name is already taken");
}
catch (RequestFailedException ex) when (ex.Status == 404)
{
    Console.WriteLine("Name is available");
}
```

#### Imported: Environment Variables

```bash
AZURE_SUBSCRIPTION_ID=<your-subscription-id>
AZURE_RESOURCE_GROUP=<your-resource-group>
AZURE_WANDB_INSTANCE_NAME=<your-wandb-instance>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-mgmt-weightsandbiases-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-mgmt-weightsandbiases-dotnet against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-mgmt-weightsandbiases-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-weightsandbiases-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultAzureCredential — Supports multiple auth methods automatically
- Enable managed identity — For secure access to other Azure resources
- Configure SSO — Enable Entra ID SSO for enterprise security
- Tag resources — Use tags for cost tracking and organization
- Check provisioning state — Wait for Succeeded before using instance
- Use appropriate region — Choose region closest to your compute
- Monitor with Azure — Use Azure Monitor for resource health

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** — Supports multiple auth methods automatically
2. **Enable managed identity** — For secure access to other Azure resources
3. **Configure SSO** — Enable Entra ID SSO for enterprise security
4. **Tag resources** — Use tags for cost tracking and organization
5. **Check provisioning state** — Wait for `Succeeded` before using instance
6. **Use appropriate region** — Choose region closest to your compute
7. **Monitor with Azure** — Use Azure Monitor for resource health

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-weightsandbiases-dotnet`, fails to mention provenance, or does not use any copied source files at all.
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
Subscription
└── ResourceGroup
    └── WeightsAndBiasesInstance    # W&B deployment from Azure Marketplace
        ├── Properties
        │   ├── Marketplace          # Offer details, plan, publisher
        │   ├── User                 # Admin user info
        │   ├── PartnerProperties    # W&B-specific config (region, subdomain)
        │   └── SingleSignOnPropertiesV2  # Entra ID SSO configuration
        └── Identity                 # Managed identity (optional)
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `WeightsAndBiasesInstanceResource` | W&B instance resource |
| `WeightsAndBiasesInstanceData` | Instance configuration data |
| `WeightsAndBiasesInstanceCollection` | Collection of instances |
| `WeightsAndBiasesInstanceProperties` | Instance properties |
| `WeightsAndBiasesMarketplaceDetails` | Marketplace subscription info |
| `WeightsAndBiasesOfferDetails` | Marketplace offer details |
| `WeightsAndBiasesUserDetails` | Admin user information |
| `WeightsAndBiasesPartnerProperties` | W&B-specific configuration |
| `WeightsAndBiasSingleSignOnPropertiesV2` | SSO configuration |
| `WeightsAndBiasesInstancePatch` | Patch for updates |
| `WeightsAndBiasesRegion` | Supported regions enum |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.ResourceManager.WeightsAndBiases |
| W&B Documentation | https://docs.wandb.ai/ |
| Azure Marketplace | https://azuremarketplace.microsoft.com/marketplace/apps/wandb.wandb-pay-as-you-go |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/weightsandbiases |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.WeightsAndBiases;

ArmClient client = new ArmClient(new DefaultAzureCredential());
```

#### Imported: Available Regions

| Region Enum | Azure Region |
|-------------|--------------|
| `WeightsAndBiasesRegion.EastUS` | East US |
| `WeightsAndBiasesRegion.CentralUS` | Central US |
| `WeightsAndBiasesRegion.WestUS` | West US |
| `WeightsAndBiasesRegion.WestEurope` | West Europe |
| `WeightsAndBiasesRegion.JapanEast` | Japan East |
| `WeightsAndBiasesRegion.KoreaCentral` | Korea Central |

#### Imported: Marketplace Offer Details

For Azure Marketplace integration:

| Property | Value |
|----------|-------|
| Publisher ID | `wandb` |
| Offer ID | `wandb-pay-as-you-go` |
| Plan ID | `wandb-payg` (Pay As You Go) |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    ArmOperation<WeightsAndBiasesInstanceResource> operation = await instances
        .CreateOrUpdateAsync(WaitUntil.Completed, "my-wandb", data);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Instance already exists or name conflict");
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

#### Imported: Integration with W&B SDK

After creating the Azure resource, use the W&B Python SDK for experiment tracking:

```python
# Install: pip install wandb
import wandb

# Login with your W&B API key from the Azure-deployed instance
wandb.login(host="https://my-company-wandb.wandb.ai")

# Initialize a run
run = wandb.init(project="my-ml-project")

# Log metrics
wandb.log({"accuracy": 0.95, "loss": 0.05})

# Finish run
run.finish()
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
