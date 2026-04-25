---
name: azure-mgmt-mongodbatlas-dotnet-v2
description: "Azure.ResourceManager.MongoDBAtlas SDK workflow skill. Use this skill when the user needs Manage MongoDB Atlas Organizations as Azure ARM resources with unified billing through Azure Marketplace and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-mgmt-mongodbatlas-dotnet-v2", "azure-mgmt-mongodbatlas-dotnet", "manage", "mongodb", "atlas", "organizations", "azure", "arm"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Azure.ResourceManager.MongoDBAtlas SDK

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-mgmt-mongodbatlas-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.MongoDBAtlas SDK Manage MongoDB Atlas Organizations as Azure ARM resources with unified billing through Azure Marketplace.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Package Information, Important Scope Limitation, Authentication, Core Types, Provisioning States, Marketplace Subscription Status.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Manage MongoDB Atlas Organizations as Azure ARM resources with unified billing through Azure Marketplace.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash dotnet add package Azure.ResourceManager.MongoDBAtlas dotnet add package Azure.Identity dotnet add package Azure.ResourceManager ### Get Organization Collection csharp // Get resource group var subscription = await armClient.GetDefaultSubscriptionAsync(); var resourceGroup = await subscription.GetResourceGroupAsync("my-resource-group"); // Get organizations collection MongoDBAtlasOrganizationCollection organizations = resourceGroup.Value.GetMongoDBAtlasOrganizations(); ### Create Organization csharp var organizationName = "my-atlas-org"; var location = AzureLocation.EastUS2; // Build organization data var organizationData = new MongoDBAtlasOrganizationData(location) { Properties = new MongoDBAtlasOrganizationProperties( marketplace: new MongoDBAtlasMarketplaceDetails( subscriptionId: "your-azure-subscription-id", offerDetails: new MongoDBAtlasOfferDetails( publisherId: "mongodb", offerId: "mongodbatlasazurenativeprod", planId: "private_plan", planName: "Pay as You Go (Free) (Private)", termUnit: "P1M", termId: "gmz7xq9ge3py" ) ), user: new MongoDBAtlasUserDetails( emailAddress: "admin@example.com", upn: "admin@example.com" ) { FirstName = "Admin", LastName = "User" } ) { PartnerProperties = new MongoDBAtlasPartnerProperties { OrganizationName = organizationName } }, Tags = { ["Environment"] = "Production" } }; // Create the organization (long-running operation) var operation = await organizations.CreateOrUpdateAsync( WaitUntil.Completed, organizationName, organizationData ); MongoDBAtlasOrganizationResource organization = operation.Value; Console.WriteLine($"Created: {organization.Id}"); ### Get Existing Organization csharp // Option 1: From collection MongoDBAtlasOrganizationResource org = await organizations.GetAsync("my-atlas-org"); // Option 2: From resource identifier var resourceId = MongoDBAtlasOrganizationResource.CreateResourceIdentifier( subscriptionId: "subscription-id", resourceGroupName: "my-resource-group", organizationName: "my-atlas-org" ); MongoDBAtlasOrganizationResource org2 = armClient.GetMongoDBAtlasOrganizationResource(resourceId); await org2.GetAsync(); // Fetch data ### List Organizations csharp // List in resource group await foreach (var org in organizations.GetAllAsync()) { Console.WriteLine($"Org: {org.Data.Name}"); Console.WriteLine($" Location: {org.Data.Location}"); Console.WriteLine($" State: {org.Data.Properties?.ProvisioningState}"); } // List across subscription await foreach (var org in subscription.GetMongoDBAtlasOrganizationsAsync()) { Console.WriteLine($"Org: {org.Data.Name} in {org.Data.Id}"); } ### Update Tags csharp // Add a single tag await organization.AddTagAsync("CostCenter", "12345"); // Replace all tags await organization.SetTagsAsync(new Dictionary<string, string> { ["Environment"] = "Production", ["Team"] = "Platform" }); // Remove a tag await organization.RemoveTagAsync("OldTag"); ### Update Organization Properties csharp var patch = new MongoDBAtlasOrganizationPatch { Tags = { ["UpdatedAt"] = DateTime.UtcNow.ToString("o") }, Properties = new MongoDBAtlasOrganizationUpdateProperties { // Update user details if needed User = new MongoDBAtlasUserDetails( emailAddress: "newadmin@example.com", upn: "newadmin@example.com" ) } }; var updateOperation = await organization.UpdateAsync( WaitUntil.Completed, patch ); ### Delete Organization csharp // Delete (long-running operation) await organization.DeleteAsync(WaitUntil.Completed);
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.MongoDBAtlas
dotnet add package Azure.Identity
dotnet add package Azure.ResourceManager
```

#### Imported: Workflows

### Get Organization Collection

```csharp
// Get resource group
var subscription = await armClient.GetDefaultSubscriptionAsync();
var resourceGroup = await subscription.GetResourceGroupAsync("my-resource-group");

// Get organizations collection
MongoDBAtlasOrganizationCollection organizations =
    resourceGroup.Value.GetMongoDBAtlasOrganizations();
```

### Create Organization

```csharp
var organizationName = "my-atlas-org";
var location = AzureLocation.EastUS2;

// Build organization data
var organizationData = new MongoDBAtlasOrganizationData(location)
{
    Properties = new MongoDBAtlasOrganizationProperties(
        marketplace: new MongoDBAtlasMarketplaceDetails(
            subscriptionId: "your-azure-subscription-id",
            offerDetails: new MongoDBAtlasOfferDetails(
                publisherId: "mongodb",
                offerId: "mongodb_atlas_azure_native_prod",
                planId: "private_plan",
                planName: "Pay as You Go (Free) (Private)",
                termUnit: "P1M",
                termId: "gmz7xq9ge3py"
            )
        ),
        user: new MongoDBAtlasUserDetails(
            emailAddress: "admin@example.com",
            upn: "admin@example.com"
        )
        {
            FirstName = "Admin",
            LastName = "User"
        }
    )
    {
        PartnerProperties = new MongoDBAtlasPartnerProperties
        {
            OrganizationName = organizationName
        }
    },
    Tags = { ["Environment"] = "Production" }
};

// Create the organization (long-running operation)
var operation = await organizations.CreateOrUpdateAsync(
    WaitUntil.Completed,
    organizationName,
    organizationData
);

MongoDBAtlasOrganizationResource organization = operation.Value;
Console.WriteLine($"Created: {organization.Id}");
```

### Get Existing Organization

```csharp
// Option 1: From collection
MongoDBAtlasOrganizationResource org =
    await organizations.GetAsync("my-atlas-org");

// Option 2: From resource identifier
var resourceId = MongoDBAtlasOrganizationResource.CreateResourceIdentifier(
    subscriptionId: "subscription-id",
    resourceGroupName: "my-resource-group",
    organizationName: "my-atlas-org"
);
MongoDBAtlasOrganizationResource org2 =
    armClient.GetMongoDBAtlasOrganizationResource(resourceId);
await org2.GetAsync(); // Fetch data
```

### List Organizations

```csharp
// List in resource group
await foreach (var org in organizations.GetAllAsync())
{
    Console.WriteLine($"Org: {org.Data.Name}");
    Console.WriteLine($"  Location: {org.Data.Location}");
    Console.WriteLine($"  State: {org.Data.Properties?.ProvisioningState}");
}

// List across subscription
await foreach (var org in subscription.GetMongoDBAtlasOrganizationsAsync())
{
    Console.WriteLine($"Org: {org.Data.Name} in {org.Data.Id}");
}
```

### Update Tags

```csharp
// Add a single tag
await organization.AddTagAsync("CostCenter", "12345");

// Replace all tags
await organization.SetTagsAsync(new Dictionary<string, string>
{
    ["Environment"] = "Production",
    ["Team"] = "Platform"
});

// Remove a tag
await organization.RemoveTagAsync("OldTag");
```

### Update Organization Properties

```csharp
var patch = new MongoDBAtlasOrganizationPatch
{
    Tags = { ["UpdatedAt"] = DateTime.UtcNow.ToString("o") },
    Properties = new MongoDBAtlasOrganizationUpdateProperties
    {
        // Update user details if needed
        User = new MongoDBAtlasUserDetails(
            emailAddress: "newadmin@example.com",
            upn: "newadmin@example.com"
        )
    }
};

var updateOperation = await organization.UpdateAsync(
    WaitUntil.Completed,
    patch
);
```

### Delete Organization

```csharp
// Delete (long-running operation)
await organization.DeleteAsync(WaitUntil.Completed);
```

#### Imported: Package Information

| Property | Value |
|----------|-------|
| Package | `Azure.ResourceManager.MongoDBAtlas` |
| Version | 1.0.0 (GA) |
| API Version | 2025-06-01 |
| Resource Type | `MongoDB.Atlas/organizations` |
| NuGet | [Azure.ResourceManager.MongoDBAtlas](https://www.nuget.org/packages/Azure.ResourceManager.MongoDBAtlas) |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-mgmt-mongodbatlas-dotnet-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-mgmt-mongodbatlas-dotnet-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-mgmt-mongodbatlas-dotnet-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-mongodbatlas-dotnet-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ### Use Async Methods csharp // Prefer async for all operations var org = await organizations.GetAsync("my-org"); await org.Value.AddTagAsync("key", "value"); ### Handle Long-Running Operations csharp // Wait for completion var operation = await organizations.CreateOrUpdateAsync( WaitUntil.Completed, // Blocks until done name, data ); // Or start and poll later var operation = await organizations.CreateOrUpdateAsync( WaitUntil.Started, // Returns immediately name, data ); // Poll for completion while (!operation.HasCompleted) { await Task.Delay(TimeSpan.FromSeconds(5)); await operation.UpdateStatusAsync(); } ### Check Provisioning State csharp var org = await organizations.GetAsync("my-org"); if (org.Value.Data.Properties?.ProvisioningState == MongoDBAtlasResourceProvisioningState.Succeeded) { Console.WriteLine("Organization is ready"); } ### Use Resource Identifiers csharp // Create identifier without API call var resourceId = MongoDBAtlasOrganizationResource.CreateResourceIdentifier( subscriptionId, resourceGroupName, organizationName ); // Get resource handle (no data yet) var orgResource = armClient.GetMongoDBAtlasOrganizationResource(resourceId); // Fetch data when needed var response = await orgResource.GetAsync();
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.

### Imported Operating Notes

#### Imported: Best Practices

### Use Async Methods

```csharp
// Prefer async for all operations
var org = await organizations.GetAsync("my-org");
await org.Value.AddTagAsync("key", "value");
```

### Handle Long-Running Operations

```csharp
// Wait for completion
var operation = await organizations.CreateOrUpdateAsync(
    WaitUntil.Completed,  // Blocks until done
    name,
    data
);

// Or start and poll later
var operation = await organizations.CreateOrUpdateAsync(
    WaitUntil.Started,  // Returns immediately
    name,
    data
);

// Poll for completion
while (!operation.HasCompleted)
{
    await Task.Delay(TimeSpan.FromSeconds(5));
    await operation.UpdateStatusAsync();
}
```

### Check Provisioning State

```csharp
var org = await organizations.GetAsync("my-org");
if (org.Value.Data.Properties?.ProvisioningState ==
    MongoDBAtlasResourceProvisioningState.Succeeded)
{
    Console.WriteLine("Organization is ready");
}
```

### Use Resource Identifiers

```csharp
// Create identifier without API call
var resourceId = MongoDBAtlasOrganizationResource.CreateResourceIdentifier(
    subscriptionId,
    resourceGroupName,
    organizationName
);

// Get resource handle (no data yet)
var orgResource = armClient.GetMongoDBAtlasOrganizationResource(resourceId);

// Fetch data when needed
var response = await orgResource.GetAsync();
```

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-mgmt-mongodbatlas-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-keyvault-secrets-ts-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-maps-search-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-messaging-webpubsub-java-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-messaging-webpubsubservice-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Model Properties Reference

### MongoDBAtlasOrganizationProperties

| Property | Type | Description |
|----------|------|-------------|
| `Marketplace` | `MongoDBAtlasMarketplaceDetails` | Required. Marketplace subscription details |
| `User` | `MongoDBAtlasUserDetails` | Required. Organization admin user |
| `PartnerProperties` | `MongoDBAtlasPartnerProperties` | MongoDB-specific properties |
| `ProvisioningState` | `MongoDBAtlasResourceProvisioningState` | Read-only. Current provisioning state |

### MongoDBAtlasMarketplaceDetails

| Property | Type | Description |
|----------|------|-------------|
| `SubscriptionId` | `string` | Required. Azure subscription ID for billing |
| `OfferDetails` | `MongoDBAtlasOfferDetails` | Required. Marketplace offer configuration |
| `SubscriptionStatus` | `MarketplaceSubscriptionStatus` | Read-only. Subscription status |

### MongoDBAtlasOfferDetails

| Property | Type | Description |
|----------|------|-------------|
| `PublisherId` | `string` | Required. Publisher ID (typically "mongodb") |
| `OfferId` | `string` | Required. Offer ID |
| `PlanId` | `string` | Required. Plan ID |
| `PlanName` | `string` | Required. Display name of the plan |
| `TermUnit` | `string` | Required. Billing term unit (e.g., "P1M") |
| `TermId` | `string` | Required. Term identifier |

### MongoDBAtlasUserDetails

| Property | Type | Description |
|----------|------|-------------|
| `EmailAddress` | `string` | Required. User email address |
| `Upn` | `string` | Required. User principal name |
| `FirstName` | `string` | Optional. User first name |
| `LastName` | `string` | Optional. User last name |

### MongoDBAtlasPartnerProperties

| Property | Type | Description |
|----------|------|-------------|
| `OrganizationName` | `string` | Name of the MongoDB Atlas organization |
| `OrganizationId` | `string` | Read-only. MongoDB Atlas organization ID |

#### Imported: Related Resources

- [Microsoft Learn: MongoDB Atlas on Azure](https://learn.microsoft.com/en-us/azure/partner-solutions/mongodb-atlas/)
- [API Reference](https://learn.microsoft.com/en-us/dotnet/api/azure.resourcemanager.mongodbatlas)
- [Azure SDK for .NET](https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/mongodbatlas)

#### Imported: Important Scope Limitation

This SDK manages **MongoDB Atlas Organizations as Azure ARM resources** for marketplace integration. It does NOT directly manage:
- Atlas clusters
- Databases
- Collections
- Users/roles

For cluster management, use the MongoDB Atlas API directly after creating the organization.

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.MongoDBAtlas;
using Azure.ResourceManager.MongoDBAtlas.Models;

// Create ARM client with DefaultAzureCredential
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);
```

#### Imported: Core Types

| Type | Purpose |
|------|---------|
| `MongoDBAtlasOrganizationResource` | ARM resource representing an Atlas organization |
| `MongoDBAtlasOrganizationCollection` | Collection of organizations in a resource group |
| `MongoDBAtlasOrganizationData` | Data model for organization resource |
| `MongoDBAtlasOrganizationProperties` | Organization-specific properties |
| `MongoDBAtlasMarketplaceDetails` | Azure Marketplace subscription details |
| `MongoDBAtlasOfferDetails` | Marketplace offer configuration |
| `MongoDBAtlasUserDetails` | User information for the organization |
| `MongoDBAtlasPartnerProperties` | MongoDB-specific properties (org name, ID) |

#### Imported: Provisioning States

| State | Description |
|-------|-------------|
| `Succeeded` | Resource provisioned successfully |
| `Failed` | Provisioning failed |
| `Canceled` | Provisioning was canceled |
| `Provisioning` | Resource is being provisioned |
| `Updating` | Resource is being updated |
| `Deleting` | Resource is being deleted |
| `Accepted` | Request accepted, provisioning starting |

#### Imported: Marketplace Subscription Status

| Status | Description |
|--------|-------------|
| `PendingFulfillmentStart` | Subscription pending activation |
| `Subscribed` | Active subscription |
| `Suspended` | Subscription suspended |
| `Unsubscribed` | Subscription canceled |

#### Imported: Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `ResourceNotFound` | Organization doesn't exist | Verify name and resource group |
| `AuthorizationFailed` | Insufficient permissions | Check RBAC roles on resource group |
| `InvalidParameter` | Missing required properties | Ensure all required fields are set |
| `MarketplaceError` | Marketplace subscription issue | Verify offer details and subscription |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
