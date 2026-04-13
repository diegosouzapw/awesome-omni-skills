---
name: azure-mgmt-apicenter-dotnet
description: "Azure.ResourceManager.ApiCenter (.NET) workflow skill. Use this skill when the user needs Azure API Center SDK for .NET. Centralized API inventory management with governance, versioning, and discovery and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-mgmt-apicenter-dotnet", "azure", "api", "center", "sdk", "for", "net", "centralized"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure.ResourceManager.ApiCenter (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-apicenter-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.ResourceManager.ApiCenter (.NET) Centralized API inventory and governance SDK for managing APIs across your organization.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure API Center SDK for .NET. Centralized API inventory management with governance, versioning, and discovery.
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

1. `bash dotnet add package Azure.ResourceManager.ApiCenter dotnet add package Azure.Identity Current Version: v1.0.0 (GA) API Version: 2024-03-01 ### 1.
2. Create API Center Service csharp using Azure.ResourceManager.ApiCenter; using Azure.ResourceManager.ApiCenter.Models; ResourceGroupResource resourceGroup = await client .GetDefaultSubscriptionAsync() .Result .GetResourceGroupAsync("my-resource-group"); ApiCenterServiceCollection services = resourceGroup.GetApiCenterServices(); ApiCenterServiceData data = new ApiCenterServiceData(AzureLocation.EastUS) { Identity = new ManagedServiceIdentity(ManagedServiceIdentityType.SystemAssigned) }; ArmOperation<ApiCenterServiceResource> operation = await services .CreateOrUpdateAsync(WaitUntil.Completed, "my-api-center", data); ApiCenterServiceResource service = operation.Value; ### 2.
3. Create Workspace csharp ApiCenterWorkspaceCollection workspaces = service.GetApiCenterWorkspaces(); ApiCenterWorkspaceData workspaceData = new ApiCenterWorkspaceData { Title = "Engineering APIs", Description = "APIs owned by the engineering team" }; ArmOperation<ApiCenterWorkspaceResource> operation = await workspaces .CreateOrUpdateAsync(WaitUntil.Completed, "engineering", workspaceData); ApiCenterWorkspaceResource workspace = operation.Value; ### 3.
4. Create API csharp ApiCenterApiCollection apis = workspace.GetApiCenterApis(); ApiCenterApiData apiData = new ApiCenterApiData { Title = "Orders API", Description = "API for managing customer orders", Kind = ApiKind.Rest, LifecycleStage = ApiLifecycleStage.Production, TermsOfService = new ApiTermsOfService { Uri = new Uri("https://example.com/terms") }, ExternalDocumentation = { new ApiExternalDocumentation { Title = "Documentation", Uri = new Uri("https://docs.example.com/orders") } }, Contacts = { new ApiContact { Name = "API Support", Email = "api-support@example.com" } } }; // Add custom metadata apiData.CustomProperties = BinaryData.FromObjectAsJson(new { team = "orders-team", costCenter = "CC-1234" }); ArmOperation<ApiCenterApiResource> operation = await apis .CreateOrUpdateAsync(WaitUntil.Completed, "orders-api", apiData); ApiCenterApiResource api = operation.Value; ### 4.
5. Create API Version csharp ApiCenterApiVersionCollection versions = api.GetApiCenterApiVersions(); ApiCenterApiVersionData versionData = new ApiCenterApiVersionData { Title = "v1.0.0", LifecycleStage = ApiLifecycleStage.Production }; ArmOperation<ApiCenterApiVersionResource> operation = await versions .CreateOrUpdateAsync(WaitUntil.Completed, "v1-0-0", versionData); ApiCenterApiVersionResource version = operation.Value; ### 5.
6. Create API Definition (Upload OpenAPI Spec) csharp ApiCenterApiDefinitionCollection definitions = version.GetApiCenterApiDefinitions(); ApiCenterApiDefinitionData definitionData = new ApiCenterApiDefinitionData { Title = "OpenAPI Specification", Description = "Orders API OpenAPI 3.0 definition" }; ArmOperation<ApiCenterApiDefinitionResource> operation = await definitions .CreateOrUpdateAsync(WaitUntil.Completed, "openapi", definitionData); ApiCenterApiDefinitionResource definition = operation.Value; // Import specification string openApiSpec = await File.ReadAllTextAsync("orders-api.yaml"); ApiSpecImportContent importContent = new ApiSpecImportContent { Format = ApiSpecImportSourceFormat.Inline, Value = openApiSpec, Specification = new ApiSpecImportSpecification { Name = "openapi", Version = "3.0.1" } }; await definition.ImportSpecificationAsync(WaitUntil.Completed, importContent); ### 6.
7. Export API Specification csharp ApiCenterApiDefinitionResource definition = await client .GetApiCenterApiDefinitionResource(definitionResourceId) .GetAsync(); ArmOperation<ApiSpecExportResult> operation = await definition .ExportSpecificationAsync(WaitUntil.Completed); ApiSpecExportResult result = operation.Value; // result.Format - e.g., "inline" // result.Value - the specification content ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.ApiCenter
dotnet add package Azure.Identity
```

**Current Version**: v1.0.0 (GA)  
**API Version**: 2024-03-01

#### Imported: Core Workflows

### 1. Create API Center Service

```csharp
using Azure.ResourceManager.ApiCenter;
using Azure.ResourceManager.ApiCenter.Models;

ResourceGroupResource resourceGroup = await client
    .GetDefaultSubscriptionAsync()
    .Result
    .GetResourceGroupAsync("my-resource-group");

ApiCenterServiceCollection services = resourceGroup.GetApiCenterServices();

ApiCenterServiceData data = new ApiCenterServiceData(AzureLocation.EastUS)
{
    Identity = new ManagedServiceIdentity(ManagedServiceIdentityType.SystemAssigned)
};

ArmOperation<ApiCenterServiceResource> operation = await services
    .CreateOrUpdateAsync(WaitUntil.Completed, "my-api-center", data);

ApiCenterServiceResource service = operation.Value;
```

### 2. Create Workspace

```csharp
ApiCenterWorkspaceCollection workspaces = service.GetApiCenterWorkspaces();

ApiCenterWorkspaceData workspaceData = new ApiCenterWorkspaceData
{
    Title = "Engineering APIs",
    Description = "APIs owned by the engineering team"
};

ArmOperation<ApiCenterWorkspaceResource> operation = await workspaces
    .CreateOrUpdateAsync(WaitUntil.Completed, "engineering", workspaceData);

ApiCenterWorkspaceResource workspace = operation.Value;
```

### 3. Create API

```csharp
ApiCenterApiCollection apis = workspace.GetApiCenterApis();

ApiCenterApiData apiData = new ApiCenterApiData
{
    Title = "Orders API",
    Description = "API for managing customer orders",
    Kind = ApiKind.Rest,
    LifecycleStage = ApiLifecycleStage.Production,
    TermsOfService = new ApiTermsOfService
    {
        Uri = new Uri("https://example.com/terms")
    },
    ExternalDocumentation = 
    {
        new ApiExternalDocumentation
        {
            Title = "Documentation",
            Uri = new Uri("https://docs.example.com/orders")
        }
    },
    Contacts =
    {
        new ApiContact
        {
            Name = "API Support",
            Email = "api-support@example.com"
        }
    }
};

// Add custom metadata
apiData.CustomProperties = BinaryData.FromObjectAsJson(new
{
    team = "orders-team",
    costCenter = "CC-1234"
});

ArmOperation<ApiCenterApiResource> operation = await apis
    .CreateOrUpdateAsync(WaitUntil.Completed, "orders-api", apiData);

ApiCenterApiResource api = operation.Value;
```

### 4. Create API Version

```csharp
ApiCenterApiVersionCollection versions = api.GetApiCenterApiVersions();

ApiCenterApiVersionData versionData = new ApiCenterApiVersionData
{
    Title = "v1.0.0",
    LifecycleStage = ApiLifecycleStage.Production
};

ArmOperation<ApiCenterApiVersionResource> operation = await versions
    .CreateOrUpdateAsync(WaitUntil.Completed, "v1-0-0", versionData);

ApiCenterApiVersionResource version = operation.Value;
```

### 5. Create API Definition (Upload OpenAPI Spec)

```csharp
ApiCenterApiDefinitionCollection definitions = version.GetApiCenterApiDefinitions();

ApiCenterApiDefinitionData definitionData = new ApiCenterApiDefinitionData
{
    Title = "OpenAPI Specification",
    Description = "Orders API OpenAPI 3.0 definition"
};

ArmOperation<ApiCenterApiDefinitionResource> operation = await definitions
    .CreateOrUpdateAsync(WaitUntil.Completed, "openapi", definitionData);

ApiCenterApiDefinitionResource definition = operation.Value;

// Import specification
string openApiSpec = await File.ReadAllTextAsync("orders-api.yaml");

ApiSpecImportContent importContent = new ApiSpecImportContent
{
    Format = ApiSpecImportSourceFormat.Inline,
    Value = openApiSpec,
    Specification = new ApiSpecImportSpecification
    {
        Name = "openapi",
        Version = "3.0.1"
    }
};

await definition.ImportSpecificationAsync(WaitUntil.Completed, importContent);
```

### 6. Export API Specification

```csharp
ApiCenterApiDefinitionResource definition = await client
    .GetApiCenterApiDefinitionResource(definitionResourceId)
    .GetAsync();

ArmOperation<ApiSpecExportResult> operation = await definition
    .ExportSpecificationAsync(WaitUntil.Completed);

ApiSpecExportResult result = operation.Value;

// result.Format - e.g., "inline"
// result.Value - the specification content
```

### 7. Create Environment

```csharp
ApiCenterEnvironmentCollection environments = workspace.GetApiCenterEnvironments();

ApiCenterEnvironmentData envData = new ApiCenterEnvironmentData
{
    Title = "Production",
    Description = "Production environment",
    Kind = ApiCenterEnvironmentKind.Production,
    Server = new ApiCenterEnvironmentServer
    {
        ManagementPortalUris = { new Uri("https://portal.azure.com") }
    },
    Onboarding = new EnvironmentOnboardingModel
    {
        Instructions = "Contact platform team for access",
        DeveloperPortalUris = { new Uri("https://developer.example.com") }
    }
};

ArmOperation<ApiCenterEnvironmentResource> operation = await environments
    .CreateOrUpdateAsync(WaitUntil.Completed, "production", envData);
```

### 8. Create Deployment

```csharp
ApiCenterDeploymentCollection deployments = workspace.GetApiCenterDeployments();

// Get environment resource ID
ResourceIdentifier envResourceId = ApiCenterEnvironmentResource.CreateResourceIdentifier(
    subscriptionId, resourceGroupName, serviceName, workspaceName, "production");

// Get API definition resource ID
ResourceIdentifier definitionResourceId = ApiCenterApiDefinitionResource.CreateResourceIdentifier(
    subscriptionId, resourceGroupName, serviceName, workspaceName, 
    "orders-api", "v1-0-0", "openapi");

ApiCenterDeploymentData deploymentData = new ApiCenterDeploymentData
{
    Title = "Orders API - Production",
    Description = "Production deployment of Orders API v1.0.0",
    EnvironmentId = envResourceId,
    DefinitionId = definitionResourceId,
    State = ApiCenterDeploymentState.Active,
    Server = new ApiCenterDeploymentServer
    {
        RuntimeUris = { new Uri("https://api.example.com/orders") }
    }
};

ArmOperation<ApiCenterDeploymentResource> operation = await deployments
    .CreateOrUpdateAsync(WaitUntil.Completed, "orders-api-prod", deploymentData);
```

### 9. Create Metadata Schema

```csharp
ApiCenterMetadataSchemaCollection schemas = service.GetApiCenterMetadataSchemas();

string jsonSchema = """
{
    "type": "object",
    "properties": {
        "team": {
            "type": "string",
            "title": "Owning Team"
        },
        "costCenter": {
            "type": "string",
            "title": "Cost Center"
        },
        "dataClassification": {
            "type": "string",
            "enum": ["public", "internal", "confidential"],
            "title": "Data Classification"
        }
    },
    "required": ["team"]
}
""";

ApiCenterMetadataSchemaData schemaData = new ApiCenterMetadataSchemaData
{
    Schema = jsonSchema,
    AssignedTo =
    {
        new MetadataAssignment
        {
            Entity = MetadataAssignmentEntity.Api,
            Required = true
        }
    }
};

ArmOperation<ApiCenterMetadataSchemaResource> operation = await schemas
    .CreateOrUpdateAsync(WaitUntil.Completed, "api-metadata", schemaData);
```

### 10. List and Search APIs

```csharp
// List all APIs in a workspace
ApiCenterWorkspaceResource workspace = await client
    .GetApiCenterWorkspaceResource(workspaceResourceId)
    .GetAsync();

await foreach (ApiCenterApiResource api in workspace.GetApiCenterApis())
{
    Console.WriteLine($"API: {api.Data.Title}");
    Console.WriteLine($"  Kind: {api.Data.Kind}");
    Console.WriteLine($"  Stage: {api.Data.LifecycleStage}");
    
    // List versions
    await foreach (ApiCenterApiVersionResource version in api.GetApiCenterApiVersions())
    {
        Console.WriteLine($"  Version: {version.Data.Title}");
    }
}

// List environments
await foreach (ApiCenterEnvironmentResource env in workspace.GetApiCenterEnvironments())
{
    Console.WriteLine($"Environment: {env.Data.Title} ({env.Data.Kind})");
}

// List deployments
await foreach (ApiCenterDeploymentResource deployment in workspace.GetApiCenterDeployments())
{
    Console.WriteLine($"Deployment: {deployment.Data.Title}");
    Console.WriteLine($"  State: {deployment.Data.State}");
}
```

#### Imported: Environment Variables

```bash
AZURE_SUBSCRIPTION_ID=<your-subscription-id>
AZURE_RESOURCE_GROUP=<your-resource-group>
AZURE_APICENTER_SERVICE_NAME=<your-apicenter-service>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-mgmt-apicenter-dotnet to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-mgmt-apicenter-dotnet/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-mgmt-apicenter-dotnet/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-apicenter-dotnet using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Organize with workspaces — Group APIs by team, domain, or product
- Use metadata schemas — Define custom properties for governance
- Track lifecycle stages — Keep API status current (design → production → deprecated)
- Document environments — Include onboarding instructions and portal URIs
- Version consistently — Use semantic versioning for API versions
- Import specifications — Upload OpenAPI/GraphQL specs for discovery
- Link deployments — Connect APIs to their runtime environments

### Imported Operating Notes

#### Imported: Best Practices

1. **Organize with workspaces** — Group APIs by team, domain, or product
2. **Use metadata schemas** — Define custom properties for governance
3. **Track lifecycle stages** — Keep API status current (design → production → deprecated)
4. **Document environments** — Include onboarding instructions and portal URIs
5. **Version consistently** — Use semantic versioning for API versions
6. **Import specifications** — Upload OpenAPI/GraphQL specs for discovery
7. **Link deployments** — Connect APIs to their runtime environments
8. **Use managed identity** — Enable SystemAssigned identity for secure integrations

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-apicenter-dotnet`, fails to mention provenance, or does not use the support pack at all.
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
Subscription
└── ResourceGroup
    └── ApiCenterService                    # API inventory service
        ├── Workspace                       # Logical grouping of APIs
        │   ├── Api                         # API definition
        │   │   └── ApiVersion              # Version of the API
        │   │       └── ApiDefinition       # OpenAPI/GraphQL/etc specification
        │   ├── Environment                 # Deployment target (dev/staging/prod)
        │   └── Deployment                  # API deployed to environment
        └── MetadataSchema                  # Custom metadata definitions
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ApiCenterServiceResource` | API Center service instance |
| `ApiCenterWorkspaceResource` | Logical grouping of APIs |
| `ApiCenterApiResource` | Individual API |
| `ApiCenterApiVersionResource` | Version of an API |
| `ApiCenterApiDefinitionResource` | API specification (OpenAPI, etc.) |
| `ApiCenterEnvironmentResource` | Deployment environment |
| `ApiCenterDeploymentResource` | API deployment to environment |
| `ApiCenterMetadataSchemaResource` | Custom metadata schema |
| `ApiKind` | rest, graphql, grpc, soap, webhook, websocket, mcp |
| `ApiLifecycleStage` | design, development, testing, preview, production, deprecated, retired |
| `ApiCenterEnvironmentKind` | development, testing, staging, production |
| `ApiCenterDeploymentState` | active, inactive |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.ResourceManager.ApiCenter |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.resourcemanager.apicenter |
| Product Documentation | https://learn.microsoft.com/azure/api-center/ |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/apicenter/Azure.ResourceManager.ApiCenter |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.ApiCenter;

ArmClient client = new ArmClient(new DefaultAzureCredential());
```

#### Imported: Error Handling

```csharp
using Azure;

try
{
    ArmOperation<ApiCenterApiResource> operation = await apis
        .CreateOrUpdateAsync(WaitUntil.Completed, "my-api", apiData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("API already exists with conflicting configuration");
}
catch (RequestFailedException ex) when (ex.Status == 400)
{
    Console.WriteLine($"Invalid request: {ex.Message}");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Azure error: {ex.Status} - {ex.Message}");
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
