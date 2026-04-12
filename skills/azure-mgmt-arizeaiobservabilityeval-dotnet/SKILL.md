---
name: azure-mgmt-arizeaiobservabilityeval-dotnet
description: "Azure.ResourceManager.ArizeAIObservabilityEval workflow skill. Use this skill when the user needs Azure Resource Manager SDK for Arize AI Observability and Evaluation (.NET) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-mgmt-arizeaiobservabilityeval-dotnet", "azure", "resource", "manager", "sdk", "for", "arize", "observability"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure.ResourceManager.ArizeAIObservabilityEval

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-arizeaiobservabilityeval-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.ResourceManager.ArizeAIObservabilityEval .NET SDK for managing Arize AI Observability and Evaluation resources on Azure.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Package Info, Environment Variables, Authentication, Key Types, Enums, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for Arize AI Observability and Evaluation (.NET).
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

1. bash dotnet add package Azure.ResourceManager.ArizeAIObservabilityEval --version 1.0.0 ### Create an Arize AI Organization csharp using Azure.Core; using Azure.ResourceManager.Resources; using Azure.ResourceManager.ArizeAIObservabilityEval; using Azure.ResourceManager.ArizeAIObservabilityEval.Models; // Get subscription and resource group var subscriptionId = Environment.GetEnvironmentVariable("AZURESUBSCRIPTIONID"); var subscription = await armClient.GetSubscriptionResource( SubscriptionResource.CreateResourceIdentifier(subscriptionId)).GetAsync(); var resourceGroup = await subscription.Value.GetResourceGroupAsync("my-resource-group"); // Get the organization collection var collection = resourceGroup.Value.GetArizeAIObservabilityEvalOrganizations(); // Create organization data var data = new ArizeAIObservabilityEvalOrganizationData(AzureLocation.EastUS) { Properties = new ArizeAIObservabilityEvalOrganizationProperties { Marketplace = new ArizeAIObservabilityEvalMarketplaceDetails { SubscriptionId = "marketplace-subscription-id", OfferDetails = new ArizeAIObservabilityEvalOfferDetails { PublisherId = "arikimlabs1649082416596", OfferId = "arize-liftr-1", PlanId = "arize-liftr-1-plan", PlanName = "Arize AI Plan", TermUnit = "P1M", TermId = "term-id" } }, User = new ArizeAIObservabilityEvalUserDetails { FirstName = "John", LastName = "Doe", EmailAddress = "john.doe@example.com" } }, Tags = { ["environment"] = "production" } }; // Create (long-running operation) var operation = await collection.CreateOrUpdateAsync( WaitUntil.Completed, "my-arize-org", data); var organization = operation.Value; Console.WriteLine($"Created: {organization.Data.Name}"); ### Get an Organization csharp // Option 1: From collection var org = await collection.GetAsync("my-arize-org"); // Option 2: Check if exists first var exists = await collection.ExistsAsync("my-arize-org"); if (exists.Value) { var org = await collection.GetAsync("my-arize-org"); } // Option 3: GetIfExists (returns null if not found) var response = await collection.GetIfExistsAsync("my-arize-org"); if (response.HasValue) { var org = response.Value; } ### List Organizations csharp // List in resource group await foreach (var org in collection.GetAllAsync()) { Console.WriteLine($"Org: {org.Data.Name}, State: {org.Data.Properties?.ProvisioningState}"); } // List in subscription await foreach (var org in subscription.Value.GetArizeAIObservabilityEvalOrganizationsAsync()) { Console.WriteLine($"Org: {org.Data.Name}"); } ### Update an Organization csharp // Update tags var org = await collection.GetAsync("my-arize-org"); var updateData = new ArizeAIObservabilityEvalOrganizationPatch { Tags = { ["environment"] = "staging", ["team"] = "ml-ops" } }; var updated = await org.Value.UpdateAsync(updateData); ### Delete an Organization csharp var org = await collection.GetAsync("my-arize-org"); await org.Value.DeleteAsync(WaitUntil.Completed);
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.ArizeAIObservabilityEval --version 1.0.0
```

#### Imported: Core Workflow

### Create an Arize AI Organization

```csharp
using Azure.Core;
using Azure.ResourceManager.Resources;
using Azure.ResourceManager.ArizeAIObservabilityEval;
using Azure.ResourceManager.ArizeAIObservabilityEval.Models;

// Get subscription and resource group
var subscriptionId = Environment.GetEnvironmentVariable("AZURE_SUBSCRIPTION_ID");
var subscription = await armClient.GetSubscriptionResource(
    SubscriptionResource.CreateResourceIdentifier(subscriptionId)).GetAsync();
var resourceGroup = await subscription.Value.GetResourceGroupAsync("my-resource-group");

// Get the organization collection
var collection = resourceGroup.Value.GetArizeAIObservabilityEvalOrganizations();

// Create organization data
var data = new ArizeAIObservabilityEvalOrganizationData(AzureLocation.EastUS)
{
    Properties = new ArizeAIObservabilityEvalOrganizationProperties
    {
        Marketplace = new ArizeAIObservabilityEvalMarketplaceDetails
        {
            SubscriptionId = "marketplace-subscription-id",
            OfferDetails = new ArizeAIObservabilityEvalOfferDetails
            {
                PublisherId = "arikimlabs1649082416596",
                OfferId = "arize-liftr-1",
                PlanId = "arize-liftr-1-plan",
                PlanName = "Arize AI Plan",
                TermUnit = "P1M",
                TermId = "term-id"
            }
        },
        User = new ArizeAIObservabilityEvalUserDetails
        {
            FirstName = "John",
            LastName = "Doe",
            EmailAddress = "john.doe@example.com"
        }
    },
    Tags = { ["environment"] = "production" }
};

// Create (long-running operation)
var operation = await collection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-arize-org",
    data);

var organization = operation.Value;
Console.WriteLine($"Created: {organization.Data.Name}");
```

### Get an Organization

```csharp
// Option 1: From collection
var org = await collection.GetAsync("my-arize-org");

// Option 2: Check if exists first
var exists = await collection.ExistsAsync("my-arize-org");
if (exists.Value)
{
    var org = await collection.GetAsync("my-arize-org");
}

// Option 3: GetIfExists (returns null if not found)
var response = await collection.GetIfExistsAsync("my-arize-org");
if (response.HasValue)
{
    var org = response.Value;
}
```

### List Organizations

```csharp
// List in resource group
await foreach (var org in collection.GetAllAsync())
{
    Console.WriteLine($"Org: {org.Data.Name}, State: {org.Data.Properties?.ProvisioningState}");
}

// List in subscription
await foreach (var org in subscription.Value.GetArizeAIObservabilityEvalOrganizationsAsync())
{
    Console.WriteLine($"Org: {org.Data.Name}");
}
```

### Update an Organization

```csharp
// Update tags
var org = await collection.GetAsync("my-arize-org");
var updateData = new ArizeAIObservabilityEvalOrganizationPatch
{
    Tags = { ["environment"] = "staging", ["team"] = "ml-ops" }
};
var updated = await org.Value.UpdateAsync(updateData);
```

### Delete an Organization

```csharp
var org = await collection.GetAsync("my-arize-org");
await org.Value.DeleteAsync(WaitUntil.Completed);
```

#### Imported: Package Info

| Property | Value |
|----------|-------|
| Package | `Azure.ResourceManager.ArizeAIObservabilityEval` |
| Version | `1.0.0` (GA) |
| API Version | `2024-10-01` |
| ARM Type | `ArizeAi.ObservabilityEval/organizations` |
| Dependencies | `Azure.Core` >= 1.46.2, `Azure.ResourceManager` >= 1.13.1 |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-mgmt-arizeaiobservabilityeval-dotnet to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-mgmt-arizeaiobservabilityeval-dotnet/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-mgmt-arizeaiobservabilityeval-dotnet/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-arizeaiobservabilityeval-dotnet using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use async methods — All operations support async/await
- Handle long-running operations — Use WaitUntil.Completed or poll manually
- Use GetIfExistsAsync — Avoid exceptions for conditional logic
- Implement retry policies — Configure via ArmClientOptions
- Use resource identifiers — For direct resource access without listing
- Close clients properly — Use using statements or dispose explicitly
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use async methods** — All operations support async/await
2. **Handle long-running operations** — Use `WaitUntil.Completed` or poll manually
3. **Use GetIfExistsAsync** — Avoid exceptions for conditional logic
4. **Implement retry policies** — Configure via `ArmClientOptions`
5. **Use resource identifiers** — For direct resource access without listing
6. **Close clients properly** — Use `using` statements or dispose explicitly

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-arizeaiobservabilityeval-dotnet`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Direct Resource Access

```csharp
// Access resource directly by ID (without listing)
var resourceId = ArizeAIObservabilityEvalOrganizationResource.CreateResourceIdentifier(
    subscriptionId,
    "my-resource-group",
    "my-arize-org");

var org = armClient.GetArizeAIObservabilityEvalOrganizationResource(resourceId);
var data = await org.GetAsync();
```

#### Imported: Environment Variables

```bash
AZURE_SUBSCRIPTION_ID=<your-subscription-id>
AZURE_TENANT_ID=<your-tenant-id>
AZURE_CLIENT_ID=<your-client-id>
AZURE_CLIENT_SECRET=<your-client-secret>
```

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.ArizeAIObservabilityEval;

// Always use DefaultAzureCredential
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);
```

#### Imported: Key Types

| Type | Purpose |
|------|---------|
| `ArizeAIObservabilityEvalOrganizationResource` | Main ARM resource for Arize organizations |
| `ArizeAIObservabilityEvalOrganizationCollection` | Collection for CRUD operations |
| `ArizeAIObservabilityEvalOrganizationData` | Resource data model |
| `ArizeAIObservabilityEvalOrganizationProperties` | Organization properties |
| `ArizeAIObservabilityEvalMarketplaceDetails` | Azure Marketplace subscription info |
| `ArizeAIObservabilityEvalOfferDetails` | Marketplace offer configuration |
| `ArizeAIObservabilityEvalUserDetails` | User contact information |
| `ArizeAIObservabilityEvalOrganizationPatch` | Patch model for updates |
| `ArizeAIObservabilityEvalSingleSignOnPropertiesV2` | SSO configuration |

#### Imported: Enums

| Enum | Values |
|------|--------|
| `ArizeAIObservabilityEvalOfferProvisioningState` | `Succeeded`, `Failed`, `Canceled`, `Provisioning`, `Updating`, `Deleting`, `Accepted` |
| `ArizeAIObservabilityEvalMarketplaceSubscriptionStatus` | `PendingFulfillmentStart`, `Subscribed`, `Suspended`, `Unsubscribed` |
| `ArizeAIObservabilityEvalSingleSignOnState` | `Initial`, `Enable`, `Disable` |
| `ArizeAIObservabilityEvalSingleSignOnType` | `Saml`, `OpenId` |

#### Imported: Error Handling

```csharp
try
{
    var org = await collection.GetAsync("my-arize-org");
}
catch (Azure.RequestFailedException ex) when (ex.Status == 404)
{
    Console.WriteLine("Organization not found");
}
catch (Azure.RequestFailedException ex)
{
    Console.WriteLine($"Azure error: {ex.Message}");
}
```

#### Imported: Links

- [NuGet Package](https://www.nuget.org/packages/Azure.ResourceManager.ArizeAIObservabilityEval)
- [Azure SDK for .NET](https://github.com/Azure/azure-sdk-for-net)
- [Arize AI](https://arize.com/)
