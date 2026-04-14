---
name: azure-mgmt-apimanagement-dotnet
description: "Azure.ResourceManager.ApiManagement (.NET) workflow skill. Use this skill when the user needs Azure Resource Manager SDK for API Management in .NET and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-mgmt-apimanagement-dotnet", "azure", "resource", "manager", "sdk", "for", "api", "management"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure.ResourceManager.ApiManagement (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-apimanagement-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.ResourceManager.ApiManagement (.NET) Management plane SDK for provisioning and managing Azure API Management resources via Azure Resource Manager. > ⚠️ Management vs Data Plane > - This SDK (Azure.ResourceManager.ApiManagement): Create services, APIs, products, subscriptions, policies, users, groups > - Data Plane: Direct API calls to your APIM gateway endpoints

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, SKU Types, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for API Management in .NET.
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

1. `bash dotnet add package Azure.ResourceManager.ApiManagement dotnet add package Azure.Identity Current Version: v1.3.0 ### 1.
2. Create API Management Service csharp using Azure.ResourceManager.ApiManagement; using Azure.ResourceManager.ApiManagement.Models; // Get resource group var resourceGroup = await subscription .GetResourceGroupAsync("my-resource-group"); // Define service var serviceData = new ApiManagementServiceData( location: AzureLocation.EastUS, sku: new ApiManagementServiceSkuProperties( ApiManagementServiceSkuType.Developer, capacity: 1), publisherEmail: "admin@contoso.com", publisherName: "Contoso"); // Create service (long-running operation - can take 30+ minutes) var serviceCollection = resourceGroup.Value.GetApiManagementServices(); var operation = await serviceCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-apim-service", serviceData); ApiManagementServiceResource service = operation.Value; ### 2.
3. Create an API csharp var apiData = new ApiCreateOrUpdateContent { DisplayName = "My API", Path = "myapi", Protocols = { ApiOperationInvokableProtocol.Https }, ServiceUri = new Uri("https://backend.contoso.com/api") }; var apiCollection = service.GetApis(); var apiOperation = await apiCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-api", apiData); ApiResource api = apiOperation.Value; ### 3.
4. Create a Product csharp var productData = new ApiManagementProductData { DisplayName = "Starter", Description = "Starter tier with limited access", IsSubscriptionRequired = true, IsApprovalRequired = false, SubscriptionsLimit = 1, State = ApiManagementProductState.Published }; var productCollection = service.GetApiManagementProducts(); var productOperation = await productCollection.CreateOrUpdateAsync( WaitUntil.Completed, "starter", productData); ApiManagementProductResource product = productOperation.Value; // Add API to product await product.GetProductApis().CreateOrUpdateAsync( WaitUntil.Completed, "my-api"); ### 4.
5. Create a Subscription csharp var subscriptionData = new ApiManagementSubscriptionCreateOrUpdateContent { DisplayName = "My Subscription", Scope = $"/products/{product.Data.Name}", State = ApiManagementSubscriptionState.Active }; var subscriptionCollection = service.GetApiManagementSubscriptions(); var subOperation = await subscriptionCollection.CreateOrUpdateAsync( WaitUntil.Completed, "my-subscription", subscriptionData); ApiManagementSubscriptionResource subscription = subOperation.Value; // Get subscription keys var keys = await subscription.GetSecretsAsync(); Console.WriteLine($"Primary Key: {keys.Value.PrimaryKey}"); ### 5.
6. Set API Policy csharp var policyXml = @" <policies> <inbound> <rate-limit calls=""100"" renewal-period=""60"" /> <set-header name=""X-Custom-Header"" exists-action=""override""> <value>CustomValue</value> </set-header> <base /> </inbound> <backend> <base /> </backend> <outbound> <base /> </outbound> <on-error> <base /> </on-error> </policies>"; var policyData = new PolicyContractData { Value = policyXml, Format = PolicyContentFormat.Xml }; await api.GetApiPolicy().CreateOrUpdateAsync( WaitUntil.Completed, policyData); ### 6.
7. Backup and Restore csharp // Backup var backupParams = new ApiManagementServiceBackupRestoreContent( storageAccount: "mystorageaccount", containerName: "apim-backups", backupName: "backup-2024-01-15") { AccessType = StorageAccountAccessType.SystemAssignedManagedIdentity }; await service.BackupAsync(WaitUntil.Completed, backupParams); // Restore await service.RestoreAsync(WaitUntil.Completed, backupParams); `

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.ApiManagement
dotnet add package Azure.Identity
```

**Current Version**: v1.3.0

#### Imported: Core Workflow

### 1. Create API Management Service

```csharp
using Azure.ResourceManager.ApiManagement;
using Azure.ResourceManager.ApiManagement.Models;

// Get resource group
var resourceGroup = await subscription
    .GetResourceGroupAsync("my-resource-group");

// Define service
var serviceData = new ApiManagementServiceData(
    location: AzureLocation.EastUS,
    sku: new ApiManagementServiceSkuProperties(
        ApiManagementServiceSkuType.Developer, 
        capacity: 1),
    publisherEmail: "admin@contoso.com",
    publisherName: "Contoso");

// Create service (long-running operation - can take 30+ minutes)
var serviceCollection = resourceGroup.Value.GetApiManagementServices();
var operation = await serviceCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-apim-service",
    serviceData);

ApiManagementServiceResource service = operation.Value;
```

### 2. Create an API

```csharp
var apiData = new ApiCreateOrUpdateContent
{
    DisplayName = "My API",
    Path = "myapi",
    Protocols = { ApiOperationInvokableProtocol.Https },
    ServiceUri = new Uri("https://backend.contoso.com/api")
};

var apiCollection = service.GetApis();
var apiOperation = await apiCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-api",
    apiData);

ApiResource api = apiOperation.Value;
```

### 3. Create a Product

```csharp
var productData = new ApiManagementProductData
{
    DisplayName = "Starter",
    Description = "Starter tier with limited access",
    IsSubscriptionRequired = true,
    IsApprovalRequired = false,
    SubscriptionsLimit = 1,
    State = ApiManagementProductState.Published
};

var productCollection = service.GetApiManagementProducts();
var productOperation = await productCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "starter",
    productData);

ApiManagementProductResource product = productOperation.Value;

// Add API to product
await product.GetProductApis().CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-api");
```

### 4. Create a Subscription

```csharp
var subscriptionData = new ApiManagementSubscriptionCreateOrUpdateContent
{
    DisplayName = "My Subscription",
    Scope = $"/products/{product.Data.Name}",
    State = ApiManagementSubscriptionState.Active
};

var subscriptionCollection = service.GetApiManagementSubscriptions();
var subOperation = await subscriptionCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "my-subscription",
    subscriptionData);

ApiManagementSubscriptionResource subscription = subOperation.Value;

// Get subscription keys
var keys = await subscription.GetSecretsAsync();
Console.WriteLine($"Primary Key: {keys.Value.PrimaryKey}");
```

### 5. Set API Policy

```csharp
var policyXml = @"
<policies>
    <inbound>
        <rate-limit calls=""100"" renewal-period=""60"" />
        <set-header name=""X-Custom-Header"" exists-action=""override"">
            <value>CustomValue</value>
        </set-header>
        <base />
    </inbound>
    <backend>
        <base />
    </backend>
    <outbound>
        <base />
    </outbound>
    <on-error>
        <base />
    </on-error>
</policies>";

var policyData = new PolicyContractData
{
    Value = policyXml,
    Format = PolicyContentFormat.Xml
};

await api.GetApiPolicy().CreateOrUpdateAsync(
    WaitUntil.Completed,
    policyData);
```

### 6. Backup and Restore

```csharp
// Backup
var backupParams = new ApiManagementServiceBackupRestoreContent(
    storageAccount: "mystorageaccount",
    containerName: "apim-backups",
    backupName: "backup-2024-01-15")
{
    AccessType = StorageAccountAccessType.SystemAssignedManagedIdentity
};

await service.BackupAsync(WaitUntil.Completed, backupParams);

// Restore
await service.RestoreAsync(WaitUntil.Completed, backupParams);
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
Use @azure-mgmt-apimanagement-dotnet to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-mgmt-apimanagement-dotnet/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-mgmt-apimanagement-dotnet/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-apimanagement-dotnet using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use WaitUntil.Completed for operations that must finish before proceeding
- Use WaitUntil.Started for long operations like service creation (30+ min)
- Always use DefaultAzureCredential — never hardcode keys
- Handle RequestFailedException for ARM API errors
- Use CreateOrUpdateAsync for idempotent operations
- Navigate hierarchy via Get* methods (e.g., service.GetApis())
- Policy format — Use XML format for policies; JSON is also supported

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `WaitUntil.Completed`** for operations that must finish before proceeding
2. **Use `WaitUntil.Started`** for long operations like service creation (30+ min)
3. **Always use `DefaultAzureCredential`** — never hardcode keys
4. **Handle `RequestFailedException`** for ARM API errors
5. **Use `CreateOrUpdateAsync`** for idempotent operations
6. **Navigate hierarchy** via `Get*` methods (e.g., `service.GetApis()`)
7. **Policy format** — Use XML format for policies; JSON is also supported
8. **Service creation** — Developer SKU is fastest for testing (~15-30 min)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-apimanagement-dotnet`, fails to mention provenance, or does not use the support pack at all.
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
        └── ApiManagementServiceResource
            ├── ApiResource
            │   ├── ApiOperationResource
            │   │   └── ApiOperationPolicyResource
            │   ├── ApiPolicyResource
            │   ├── ApiSchemaResource
            │   └── ApiDiagnosticResource
            ├── ApiManagementProductResource
            │   ├── ProductApiResource
            │   ├── ProductGroupResource
            │   └── ProductPolicyResource
            ├── ApiManagementSubscriptionResource
            ├── ApiManagementPolicyResource
            ├── ApiManagementUserResource
            ├── ApiManagementGroupResource
            ├── ApiManagementBackendResource
            ├── ApiManagementGatewayResource
            ├── ApiManagementCertificateResource
            ├── ApiManagementNamedValueResource
            └── ApiManagementLoggerResource
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ArmClient` | Entry point for all ARM operations |
| `ApiManagementServiceResource` | Represents an APIM service instance |
| `ApiManagementServiceCollection` | Collection for service CRUD |
| `ApiResource` | Represents an API |
| `ApiManagementProductResource` | Represents a product |
| `ApiManagementSubscriptionResource` | Represents a subscription |
| `ApiManagementPolicyResource` | Service-level policy |
| `ApiPolicyResource` | API-level policy |
| `ApiManagementUserResource` | Represents a user |
| `ApiManagementGroupResource` | Represents a group |
| `ApiManagementBackendResource` | Represents a backend service |
| `ApiManagementGatewayResource` | Represents a self-hosted gateway |

#### Imported: Reference Files

| File | When to Read |
|------|--------------|
| references/service-management.md | Service CRUD, SKUs, networking, backup/restore |
| references/apis-operations.md | APIs, operations, schemas, versioning |
| references/products-subscriptions.md | Products, subscriptions, access control |
| references/policies.md | Policy XML patterns, scopes, common policies |

#### Imported: Related Resources

| Resource | Purpose |
|----------|---------|
| [API Management Documentation](https://learn.microsoft.com/en-us/azure/api-management/) | Official Azure docs |
| [Policy Reference](https://learn.microsoft.com/en-us/azure/api-management/api-management-policies) | Complete policy reference |
| [SDK Reference](https://learn.microsoft.com/en-us/dotnet/api/azure.resourcemanager.apimanagement) | .NET API reference |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.ApiManagement;

// Always use DefaultAzureCredential
var credential = new DefaultAzureCredential();
var armClient = new ArmClient(credential);

// Get subscription
var subscriptionId = Environment.GetEnvironmentVariable("AZURE_SUBSCRIPTION_ID");
var subscription = armClient.GetSubscriptionResource(
    new ResourceIdentifier($"/subscriptions/{subscriptionId}"));
```

#### Imported: SKU Types

| SKU | Purpose | Capacity |
|-----|---------|----------|
| `Developer` | Development/testing (no SLA) | 1 |
| `Basic` | Entry-level production | 1-2 |
| `Standard` | Medium workloads | 1-4 |
| `Premium` | High availability, multi-region | 1-12 per region |
| `Consumption` | Serverless, pay-per-call | N/A |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var operation = await serviceCollection.CreateOrUpdateAsync(
        WaitUntil.Completed, serviceName, serviceData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Service already exists");
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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
