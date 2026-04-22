---
name: "azure-mgmt-applicationinsights-dotnet"
description: "Azure.ResourceManager.ApplicationInsights (.NET) workflow skill. Use this skill when the user needs Azure Application Insights SDK for .NET. Application performance monitoring and observability resource management and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "azure-mgmt-applicationinsights-dotnet"
  - "azure"
  - "application"
  - "insights"
  - "sdk"
  - "for"
  - "net"
  - "performance"
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
date_updated: "2026-04-20"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "azure-mgmt-applicationinsights-dotnet"
family_name: "Azure.ResourceManager.ApplicationInsights (.NET)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/azure-mgmt-applicationinsights-dotnet"
upstream_skill: "skills/azure-mgmt-applicationinsights-dotnet"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "85"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "azure-mgmt-applicationinsights-dotnet"
---

# Azure.ResourceManager.ApplicationInsights (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-applicationinsights-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.ApplicationInsights (.NET) Azure Resource Manager SDK for managing Application Insights resources for application performance monitoring.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Application Types, Web Test Locations, Error Handling, SDK Integration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Application Insights SDK for .NET. Application performance monitoring and observability resource management.
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

1. `bash dotnet add package Azure.ResourceManager.ApplicationInsights dotnet add package Azure.Identity Current Version: v1.0.0 (GA) API Version: 2022-06-15 ### 1.
2. Create Application Insights Component (Workspace-based) csharp using Azure.ResourceManager.ApplicationInsights; using Azure.ResourceManager.ApplicationInsights.Models; ResourceGroupResource resourceGroup = await client .GetDefaultSubscriptionAsync() .Result .GetResourceGroupAsync("my-resource-group"); ApplicationInsightsComponentCollection components = resourceGroup.GetApplicationInsightsComponents(); // Workspace-based Application Insights (recommended) ApplicationInsightsComponentData data = new ApplicationInsightsComponentData( AzureLocation.EastUS, ApplicationInsightsApplicationType.Web) { Kind = "web", WorkspaceResourceId = new ResourceIdentifier( "/subscriptions/<sub-id>/resourceGroups/<rg>/providers/Microsoft.OperationalInsights/workspaces/<workspace-name>"), IngestionMode = IngestionMode.LogAnalytics, PublicNetworkAccessForIngestion = PublicNetworkAccessType.Enabled, PublicNetworkAccessForQuery = PublicNetworkAccessType.Enabled, RetentionInDays = 90, SamplingPercentage = 100, DisableIPMasking = false, ImmediatePurgeDataOn30Days = false, Tags = { { "environment", "production" }, { "application", "mywebapp" } } }; ArmOperation<ApplicationInsightsComponentResource> operation = await components .CreateOrUpdateAsync(WaitUntil.Completed, "my-appinsights", data); ApplicationInsightsComponentResource component = operation.Value; Console.WriteLine($"Component created: {component.Data.Name}"); Console.WriteLine($"Instrumentation Key: {component.Data.InstrumentationKey}"); Console.WriteLine($"Connection String: {component.Data.ConnectionString}"); ### 2.
3. Get Connection String and Keys csharp ApplicationInsightsComponentResource component = await resourceGroup .GetApplicationInsightsComponentAsync("my-appinsights"); // Get connection string for SDK configuration string connectionString = component.Data.ConnectionString; string instrumentationKey = component.Data.InstrumentationKey; string appId = component.Data.AppId; Console.WriteLine($"Connection String: {connectionString}"); Console.WriteLine($"Instrumentation Key: {instrumentationKey}"); Console.WriteLine($"App ID: {appId}"); ### 3.
4. Create API Key `csharp ApplicationInsightsComponentResource component = await resourceGroup .GetApplicationInsightsComponentAsync("my-appinsights"); ApplicationInsightsComponentApiKeyCollection apiKeys = component.GetApplicationInsightsComponentApiKeys(); // API key for reading telemetry ApplicationInsightsApiKeyContent keyContent = new ApplicationInsightsApiKeyContent { Name = "ReadTelemetryKey", LinkedReadProperties = { $"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{component.Data.Name}/api", $"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{component.Data.Name}/agentconfig" } }; ApplicationInsightsComponentApiKeyResource apiKey = await apiKeys .CreateOrUpdateAsync(WaitUntil.Completed, keyContent); Console.WriteLine($"API Key Name: {apiKey.Data.Name}"); Console.WriteLine($"API Key: {apiKey.Data.ApiKey}"); // Only shown once!
5. Create Web Test (Availability Test) csharp WebTestCollection webTests = resourceGroup.GetWebTests(); // URL Ping Test WebTestData urlPingTest = new WebTestData(AzureLocation.EastUS) { Kind = WebTestKind.Ping, SyntheticMonitorId = "webtest-ping-myapp", WebTestName = "Homepage Availability", Description = "Checks if homepage is available", IsEnabled = true, Frequency = 300, // 5 minutes Timeout = 120, // 2 minutes WebTestKind = WebTestKind.Ping, IsRetryEnabled = true, Locations = { new WebTestGeolocation { WebTestLocationId = "us-ca-sjc-azr" }, // West US new WebTestGeolocation { WebTestLocationId = "us-tx-sn1-azr" }, // South Central US new WebTestGeolocation { WebTestLocationId = "us-il-ch1-azr" }, // North Central US new WebTestGeolocation { WebTestLocationId = "emea-gb-db3-azr" }, // UK South new WebTestGeolocation { WebTestLocationId = "apac-sg-sin-azr" } // Southeast Asia }, Configuration = new WebTestConfiguration { WebTest = """ <WebTest Name="Homepage" Enabled="True" Timeout="120" xmlns="http://microsoft.com/schemas/VisualStudio/TeamTest/2010"> <Items> <Request Method="GET" Version="1.1" Url="https://myapp.example.com" ThinkTime="0" Timeout="120" ParseDependentRequests="False" FollowRedirects="True" RecordResult="True" Cache="False" ResponseTimeGoal="0" Encoding="utf-8" ExpectedHttpStatusCode="200" /> </Items> </WebTest> """ }, Tags = { { $"hidden-link:/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/my-appinsights", "Resource" } } }; ArmOperation<WebTestResource> operation = await webTests .CreateOrUpdateAsync(WaitUntil.Completed, "webtest-homepage", urlPingTest); WebTestResource webTest = operation.Value; Console.WriteLine($"Web test created: {webTest.Data.Name}"); ### 5.
6. Create Multi-Step Web Test csharp WebTestData multiStepTest = new WebTestData(AzureLocation.EastUS) { Kind = WebTestKind.MultiStep, SyntheticMonitorId = "webtest-multistep-login", WebTestName = "Login Flow Test", Description = "Tests login functionality", IsEnabled = true, Frequency = 900, // 15 minutes Timeout = 300, // 5 minutes WebTestKind = WebTestKind.MultiStep, IsRetryEnabled = true, Locations = { new WebTestGeolocation { WebTestLocationId = "us-ca-sjc-azr" } }, Configuration = new WebTestConfiguration { WebTest = """ <WebTest Name="LoginFlow" Enabled="True" Timeout="300" xmlns="http://microsoft.com/schemas/VisualStudio/TeamTest/2010"> <Items> <Request Method="GET" Version="1.1" Url="https://myapp.example.com/login" ThinkTime="0" Timeout="60" /> <Request Method="POST" Version="1.1" Url="https://myapp.example.com/api/auth" ThinkTime="0" Timeout="60"> <Headers> <Header Name="Content-Type" Value="application/json" /> </Headers> <Body>{"username":"testuser","password":"{{TestPassword}}"}</Body> </Request> </Items> </WebTest> """ }, Tags = { { $"hidden-link:/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/my-appinsights", "Resource" } } }; await webTests.CreateOrUpdateAsync(WaitUntil.Completed, "webtest-login-flow", multiStepTest); ### 6.
7. Create Workbook csharp WorkbookCollection workbooks = resourceGroup.GetWorkbooks(); WorkbookData workbookData = new WorkbookData(AzureLocation.EastUS) { DisplayName = "Application Performance Dashboard", Category = "workbook", Kind = WorkbookSharedTypeKind.Shared, SerializedData = """ { "version": "Notebook/1.0", "items": [ { "type": 1, "content": { "json": "# Application Performance\n\nThis workbook shows application performance metrics." }, "name": "header" }, { "type": 3, "content": { "version": "KqlItem/1.0", "query": "requests\n| summarize count() by bin(timestamp, 1h)\n| render timechart", "size": 0, "title": "Requests per Hour", "timeContext": { "durationMs": 86400000 }, "queryType": 0, "resourceType": "microsoft.insights/components" }, "name": "requestsChart" } ], "isLocked": false } """, SourceId = component.Id, Tags = { { "environment", "production" } } }; // Note: Workbook ID should be a new GUID string workbookId = Guid.NewGuid().ToString(); ArmOperation<WorkbookResource> operation = await workbooks .CreateOrUpdateAsync(WaitUntil.Completed, workbookId, workbookData); WorkbookResource workbook = operation.Value; Console.WriteLine($"Workbook created: {workbook.Data.DisplayName}"); ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.ApplicationInsights
dotnet add package Azure.Identity
```

**Current Version**: v1.0.0 (GA)  
**API Version**: 2022-06-15

#### Imported: Core Workflows

### 1. Create Application Insights Component (Workspace-based)

```csharp
using Azure.ResourceManager.ApplicationInsights;
using Azure.ResourceManager.ApplicationInsights.Models;

ResourceGroupResource resourceGroup = await client
    .GetDefaultSubscriptionAsync()
    .Result
    .GetResourceGroupAsync("my-resource-group");

ApplicationInsightsComponentCollection components = resourceGroup.GetApplicationInsightsComponents();

// Workspace-based Application Insights (recommended)
ApplicationInsightsComponentData data = new ApplicationInsightsComponentData(
    AzureLocation.EastUS,
    ApplicationInsightsApplicationType.Web)
{
    Kind = "web",
    WorkspaceResourceId = new ResourceIdentifier(
        "/subscriptions/<sub-id>/resourceGroups/<rg>/providers/Microsoft.OperationalInsights/workspaces/<workspace-name>"),
    IngestionMode = IngestionMode.LogAnalytics,
    PublicNetworkAccessForIngestion = PublicNetworkAccessType.Enabled,
    PublicNetworkAccessForQuery = PublicNetworkAccessType.Enabled,
    RetentionInDays = 90,
    SamplingPercentage = 100,
    DisableIPMasking = false,
    ImmediatePurgeDataOn30Days = false,
    Tags =
    {
        { "environment", "production" },
        { "application", "mywebapp" }
    }
};

ArmOperation<ApplicationInsightsComponentResource> operation = await components
    .CreateOrUpdateAsync(WaitUntil.Completed, "my-appinsights", data);

ApplicationInsightsComponentResource component = operation.Value;

Console.WriteLine($"Component created: {component.Data.Name}");
Console.WriteLine($"Instrumentation Key: {component.Data.InstrumentationKey}");
Console.WriteLine($"Connection String: {component.Data.ConnectionString}");
```

### 2. Get Connection String and Keys

```csharp
ApplicationInsightsComponentResource component = await resourceGroup
    .GetApplicationInsightsComponentAsync("my-appinsights");

// Get connection string for SDK configuration
string connectionString = component.Data.ConnectionString;
string instrumentationKey = component.Data.InstrumentationKey;
string appId = component.Data.AppId;

Console.WriteLine($"Connection String: {connectionString}");
Console.WriteLine($"Instrumentation Key: {instrumentationKey}");
Console.WriteLine($"App ID: {appId}");
```

### 3. Create API Key

```csharp
ApplicationInsightsComponentResource component = await resourceGroup
    .GetApplicationInsightsComponentAsync("my-appinsights");

ApplicationInsightsComponentApiKeyCollection apiKeys = component.GetApplicationInsightsComponentApiKeys();

// API key for reading telemetry
ApplicationInsightsApiKeyContent keyContent = new ApplicationInsightsApiKeyContent
{
    Name = "ReadTelemetryKey",
    LinkedReadProperties =
    {
        $"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{component.Data.Name}/api",
        $"/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{component.Data.Name}/agentconfig"
    }
};

ApplicationInsightsComponentApiKeyResource apiKey = await apiKeys
    .CreateOrUpdateAsync(WaitUntil.Completed, keyContent);

Console.WriteLine($"API Key Name: {apiKey.Data.Name}");
Console.WriteLine($"API Key: {apiKey.Data.ApiKey}"); // Only shown once!
```

### 4. Create Web Test (Availability Test)

```csharp
WebTestCollection webTests = resourceGroup.GetWebTests();

// URL Ping Test
WebTestData urlPingTest = new WebTestData(AzureLocation.EastUS)
{
    Kind = WebTestKind.Ping,
    SyntheticMonitorId = "webtest-ping-myapp",
    WebTestName = "Homepage Availability",
    Description = "Checks if homepage is available",
    IsEnabled = true,
    Frequency = 300, // 5 minutes
    Timeout = 120,   // 2 minutes
    WebTestKind = WebTestKind.Ping,
    IsRetryEnabled = true,
    Locations =
    {
        new WebTestGeolocation { WebTestLocationId = "us-ca-sjc-azr" },  // West US
        new WebTestGeolocation { WebTestLocationId = "us-tx-sn1-azr" },  // South Central US
        new WebTestGeolocation { WebTestLocationId = "us-il-ch1-azr" },  // North Central US
        new WebTestGeolocation { WebTestLocationId = "emea-gb-db3-azr" }, // UK South
        new WebTestGeolocation { WebTestLocationId = "apac-sg-sin-azr" }  // Southeast Asia
    },
    Configuration = new WebTestConfiguration
    {
        WebTest = """
            <WebTest Name="Homepage" Enabled="True" Timeout="120" 
                     xmlns="http://microsoft.com/schemas/VisualStudio/TeamTest/2010">
                <Items>
                    <Request Method="GET" Version="1.1" Url="https://myapp.example.com" 
                             ThinkTime="0" Timeout="120" ParseDependentRequests="False" 
                             FollowRedirects="True" RecordResult="True" Cache="False" 
                             ResponseTimeGoal="0" Encoding="utf-8" ExpectedHttpStatusCode="200" />
                </Items>
            </WebTest>
        """
    },
    Tags =
    {
        { $"hidden-link:/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/my-appinsights", "Resource" }
    }
};

ArmOperation<WebTestResource> operation = await webTests
    .CreateOrUpdateAsync(WaitUntil.Completed, "webtest-homepage", urlPingTest);

WebTestResource webTest = operation.Value;
Console.WriteLine($"Web test created: {webTest.Data.Name}");
```

### 5. Create Multi-Step Web Test

```csharp
WebTestData multiStepTest = new WebTestData(AzureLocation.EastUS)
{
    Kind = WebTestKind.MultiStep,
    SyntheticMonitorId = "webtest-multistep-login",
    WebTestName = "Login Flow Test",
    Description = "Tests login functionality",
    IsEnabled = true,
    Frequency = 900, // 15 minutes
    Timeout = 300,   // 5 minutes
    WebTestKind = WebTestKind.MultiStep,
    IsRetryEnabled = true,
    Locations =
    {
        new WebTestGeolocation { WebTestLocationId = "us-ca-sjc-azr" }
    },
    Configuration = new WebTestConfiguration
    {
        WebTest = """
            <WebTest Name="LoginFlow" Enabled="True" Timeout="300"
                     xmlns="http://microsoft.com/schemas/VisualStudio/TeamTest/2010">
                <Items>
                    <Request Method="GET" Version="1.1" Url="https://myapp.example.com/login" 
                             ThinkTime="0" Timeout="60" />
                    <Request Method="POST" Version="1.1" Url="https://myapp.example.com/api/auth" 
                             ThinkTime="0" Timeout="60">
                        <Headers>
                            <Header Name="Content-Type" Value="application/json" />
                        </Headers>
                        <Body>{"username":"testuser","password":"{{TestPassword}}"}</Body>
                    </Request>
                </Items>
            </WebTest>
        """
    },
    Tags =
    {
        { $"hidden-link:/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/my-appinsights", "Resource" }
    }
};

await webTests.CreateOrUpdateAsync(WaitUntil.Completed, "webtest-login-flow", multiStepTest);
```

### 6. Create Workbook

```csharp
WorkbookCollection workbooks = resourceGroup.GetWorkbooks();

WorkbookData workbookData = new WorkbookData(AzureLocation.EastUS)
{
    DisplayName = "Application Performance Dashboard",
    Category = "workbook",
    Kind = WorkbookSharedTypeKind.Shared,
    SerializedData = """
    {
        "version": "Notebook/1.0",
        "items": [
            {
                "type": 1,
                "content": {
                    "json": "# Application Performance\n\nThis workbook shows application performance metrics."
                },
                "name": "header"
            },
            {
                "type": 3,
                "content": {
                    "version": "KqlItem/1.0",
                    "query": "requests\n| summarize count() by bin(timestamp, 1h)\n| render timechart",
                    "size": 0,
                    "title": "Requests per Hour",
                    "timeContext": {
                        "durationMs": 86400000
                    },
                    "queryType": 0,
                    "resourceType": "microsoft.insights/components"
                },
                "name": "requestsChart"
            }
        ],
        "isLocked": false
    }
    """,
    SourceId = component.Id,
    Tags =
    {
        { "environment", "production" }
    }
};

// Note: Workbook ID should be a new GUID
string workbookId = Guid.NewGuid().ToString();

ArmOperation<WorkbookResource> operation = await workbooks
    .CreateOrUpdateAsync(WaitUntil.Completed, workbookId, workbookData);

WorkbookResource workbook = operation.Value;
Console.WriteLine($"Workbook created: {workbook.Data.DisplayName}");
```

### 7. Link Storage Account

```csharp
ApplicationInsightsComponentResource component = await resourceGroup
    .GetApplicationInsightsComponentAsync("my-appinsights");

ComponentLinkedStorageAccountCollection linkedStorage = component.GetComponentLinkedStorageAccounts();

ComponentLinkedStorageAccountData storageData = new ComponentLinkedStorageAccountData
{
    LinkedStorageAccount = new ResourceIdentifier(
        "/subscriptions/<sub-id>/resourceGroups/<rg>/providers/Microsoft.Storage/storageAccounts/<storage-account>")
};

ArmOperation<ComponentLinkedStorageAccountResource> operation = await linkedStorage
    .CreateOrUpdateAsync(WaitUntil.Completed, StorageType.ServiceProfiler, storageData);
```

### 8. List and Manage Components

```csharp
// List all Application Insights components in resource group
await foreach (ApplicationInsightsComponentResource component in 
    resourceGroup.GetApplicationInsightsComponents())
{
    Console.WriteLine($"Component: {component.Data.Name}");
    Console.WriteLine($"  App ID: {component.Data.AppId}");
    Console.WriteLine($"  Type: {component.Data.ApplicationType}");
    Console.WriteLine($"  Ingestion Mode: {component.Data.IngestionMode}");
    Console.WriteLine($"  Retention: {component.Data.RetentionInDays} days");
}

// List web tests
await foreach (WebTestResource webTest in resourceGroup.GetWebTests())
{
    Console.WriteLine($"Web Test: {webTest.Data.WebTestName}");
    Console.WriteLine($"  Enabled: {webTest.Data.IsEnabled}");
    Console.WriteLine($"  Frequency: {webTest.Data.Frequency}s");
}

// List workbooks
await foreach (WorkbookResource workbook in resourceGroup.GetWorkbooks())
{
    Console.WriteLine($"Workbook: {workbook.Data.DisplayName}");
}
```

### 9. Update Component

```csharp
ApplicationInsightsComponentResource component = await resourceGroup
    .GetApplicationInsightsComponentAsync("my-appinsights");

// Update using full data (PUT operation)
ApplicationInsightsComponentData updateData = component.Data;
updateData.RetentionInDays = 180;
updateData.SamplingPercentage = 50;
updateData.Tags["updated"] = "true";

ArmOperation<ApplicationInsightsComponentResource> operation = await resourceGroup
    .GetApplicationInsightsComponents()
    .CreateOrUpdateAsync(WaitUntil.Completed, "my-appinsights", updateData);
```

### 10. Delete Resources

```csharp
// Delete Application Insights component
ApplicationInsightsComponentResource component = await resourceGroup
    .GetApplicationInsightsComponentAsync("my-appinsights");
await component.DeleteAsync(WaitUntil.Completed);

// Delete web test
WebTestResource webTest = await resourceGroup.GetWebTestAsync("webtest-homepage");
await webTest.DeleteAsync(WaitUntil.Completed);
```

#### Imported: Environment Variables

```bash
AZURE_SUBSCRIPTION_ID=<your-subscription-id>
AZURE_RESOURCE_GROUP=<your-resource-group>
AZURE_APPINSIGHTS_NAME=<your-appinsights-component>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-mgmt-applicationinsights-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-mgmt-applicationinsights-dotnet against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-mgmt-applicationinsights-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-applicationinsights-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use workspace-based — Workspace-based App Insights is the current standard
- Link to Log Analytics — Store data in Log Analytics for better querying
- Set appropriate retention — Balance cost vs. data availability
- Use sampling — Reduce costs for high-volume applications
- Store connection string securely — Use Key Vault or managed identity
- Enable multiple test locations — For accurate availability monitoring
- Use workbooks — For custom dashboards and analysis

### Imported Operating Notes

#### Imported: Best Practices

1. **Use workspace-based** — Workspace-based App Insights is the current standard
2. **Link to Log Analytics** — Store data in Log Analytics for better querying
3. **Set appropriate retention** — Balance cost vs. data availability
4. **Use sampling** — Reduce costs for high-volume applications
5. **Store connection string securely** — Use Key Vault or managed identity
6. **Enable multiple test locations** — For accurate availability monitoring
7. **Use workbooks** — For custom dashboards and analysis
8. **Set up alerts** — Based on availability tests and metrics
9. **Tag resources** — For cost allocation and organization
10. **Use private endpoints** — For secure data ingestion

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-applicationinsights-dotnet`, fails to mention provenance, or does not use any copied source files at all.
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
    └── ApplicationInsightsComponent          # App Insights resource
        ├── ApplicationInsightsComponentApiKey  # API keys for programmatic access
        ├── ComponentLinkedStorageAccount      # Linked storage for data export
        └── (via component ID)
            ├── WebTest                        # Availability tests
            ├── Workbook                       # Workbooks for analysis
            ├── WorkbookTemplate               # Workbook templates
            └── MyWorkbook                     # Private workbooks
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ApplicationInsightsComponentResource` | App Insights component |
| `ApplicationInsightsComponentData` | Component configuration |
| `ApplicationInsightsComponentCollection` | Collection of components |
| `ApplicationInsightsComponentApiKeyResource` | API key for programmatic access |
| `WebTestResource` | Availability/web test |
| `WebTestData` | Web test configuration |
| `WorkbookResource` | Analysis workbook |
| `WorkbookData` | Workbook configuration |
| `ComponentLinkedStorageAccountResource` | Linked storage for exports |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.ResourceManager.ApplicationInsights |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.resourcemanager.applicationinsights |
| Product Documentation | https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/applicationinsights/Azure.ResourceManager.ApplicationInsights |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.ApplicationInsights;

ArmClient client = new ArmClient(new DefaultAzureCredential());
```

#### Imported: Application Types

| Type | Enum Value |
|------|------------|
| Web Application | `Web` |
| iOS Application | `iOS` |
| Java Application | `Java` |
| Node.js Application | `NodeJS` |
| .NET Application | `MRT` |
| Other | `Other` |

#### Imported: Web Test Locations

| Location ID | Region |
|-------------|--------|
| `us-ca-sjc-azr` | West US |
| `us-tx-sn1-azr` | South Central US |
| `us-il-ch1-azr` | North Central US |
| `us-va-ash-azr` | East US |
| `emea-gb-db3-azr` | UK South |
| `emea-nl-ams-azr` | West Europe |
| `emea-fr-pra-edge` | France Central |
| `apac-sg-sin-azr` | Southeast Asia |
| `apac-hk-hkn-azr` | East Asia |
| `apac-jp-kaw-edge` | Japan East |
| `latam-br-gru-edge` | Brazil South |
| `emea-au-syd-edge` | Australia East |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    ArmOperation<ApplicationInsightsComponentResource> operation = await components
        .CreateOrUpdateAsync(WaitUntil.Completed, "my-appinsights", data);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Component already exists");
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

#### Imported: SDK Integration

Use the connection string with Application Insights SDK:

```csharp
// Program.cs in ASP.NET Core
builder.Services.AddApplicationInsightsTelemetry(options =>
{
    options.ConnectionString = configuration["ApplicationInsights:ConnectionString"];
});

// Or set via environment variable
// APPLICATIONINSIGHTS_CONNECTION_STRING=InstrumentationKey=...;IngestionEndpoint=...
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
