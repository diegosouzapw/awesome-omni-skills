---
name: azure-mgmt-botservice-dotnet
description: "Azure.ResourceManager.BotService (.NET) workflow skill. Use this skill when the user needs Azure Resource Manager SDK for Bot Service in .NET. Management plane operations for creating and managing Azure Bot resources, channels (Teams, DirectLine, Slack), and connection settings and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-mgmt-botservice-dotnet", "azure", "resource", "manager", "sdk", "for", "bot", "service"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Azure.ResourceManager.BotService (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-botservice-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.ResourceManager.BotService (.NET) Management plane SDK for provisioning and managing Azure Bot Service resources via Azure Resource Manager.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Supported Channel Types, BotServiceKind Values, BotServiceSkuName Values, BotMsaAppType Values.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Resource Manager SDK for Bot Service in .NET. Management plane operations for creating and managing Azure Bot resources, channels (Teams, DirectLine, Slack), and connection settings.
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

1. `bash dotnet add package Azure.ResourceManager.BotService dotnet add package Azure.Identity Current Versions: Stable v1.1.1, Preview v1.1.0-beta.1 ### 1.
2. Create Bot Resource csharp using Azure.ResourceManager.BotService; using Azure.ResourceManager.BotService.Models; // Create bot data var botData = new BotData(AzureLocation.WestUS2) { Kind = BotServiceKind.Azurebot, Sku = new BotServiceSku(BotServiceSkuName.F0), Properties = new BotProperties( displayName: "MyBot", endpoint: new Uri("https://mybot.azurewebsites.net/api/messages"), msaAppId: "<your-msa-app-id>") { Description = "My Azure Bot", MsaAppType = BotMsaAppType.MultiTenant } }; // Create or update the bot ArmOperation<BotResource> operation = await botCollection.CreateOrUpdateAsync( WaitUntil.Completed, "myBotName", botData); BotResource bot = operation.Value; Console.WriteLine($"Bot created: {bot.Data.Name}"); ### 2.
3. Configure DirectLine Channel csharp // Get the bot BotResource bot = await resourceGroup.GetBots().GetAsync("myBotName"); // Get channel collection BotChannelCollection channels = bot.GetBotChannels(); // Create DirectLine channel configuration var channelData = new BotChannelData(AzureLocation.WestUS2) { Properties = new DirectLineChannel() { Properties = new DirectLineChannelProperties() { Sites = { new DirectLineSite("Default Site") { IsEnabled = true, IsV1Enabled = false, IsV3Enabled = true, IsSecureSiteEnabled = true } } } } }; // Create or update the channel ArmOperation<BotChannelResource> channelOp = await channels.CreateOrUpdateAsync( WaitUntil.Completed, BotChannelName.DirectLineChannel, channelData); Console.WriteLine("DirectLine channel configured"); ### 3.
4. Configure Microsoft Teams Channel csharp var teamsChannelData = new BotChannelData(AzureLocation.WestUS2) { Properties = new MsTeamsChannel() { Properties = new MsTeamsChannelProperties() { IsEnabled = true, EnableCalling = false } } }; await channels.CreateOrUpdateAsync( WaitUntil.Completed, BotChannelName.MsTeamsChannel, teamsChannelData); ### 4.
5. Configure Web Chat Channel csharp var webChatChannelData = new BotChannelData(AzureLocation.WestUS2) { Properties = new WebChatChannel() { Properties = new WebChatChannelProperties() { Sites = { new WebChatSite("Default Site") { IsEnabled = true } } } } }; await channels.CreateOrUpdateAsync( WaitUntil.Completed, BotChannelName.WebChatChannel, webChatChannelData); ### 5.
6. Get Bot and List Channels csharp // Get bot BotResource bot = await botCollection.GetAsync("myBotName"); Console.WriteLine($"Bot: {bot.Data.Properties.DisplayName}"); Console.WriteLine($"Endpoint: {bot.Data.Properties.Endpoint}"); // List channels await foreach (BotChannelResource channel in bot.GetBotChannels().GetAllAsync()) { Console.WriteLine($"Channel: {channel.Data.Name}"); } ### 6.
7. Regenerate DirectLine Keys csharp var regenerateRequest = new BotChannelRegenerateKeysContent(BotChannelName.DirectLineChannel) { SiteName = "Default Site" }; BotChannelResource channelWithKeys = await bot.GetBotChannelWithRegenerateKeysAsync(regenerateRequest); ### 7.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.ResourceManager.BotService
dotnet add package Azure.Identity
```

**Current Versions**: Stable v1.1.1, Preview v1.1.0-beta.1

#### Imported: Core Workflows

### 1. Create Bot Resource

```csharp
using Azure.ResourceManager.BotService;
using Azure.ResourceManager.BotService.Models;

// Create bot data
var botData = new BotData(AzureLocation.WestUS2)
{
    Kind = BotServiceKind.Azurebot,
    Sku = new BotServiceSku(BotServiceSkuName.F0),
    Properties = new BotProperties(
        displayName: "MyBot",
        endpoint: new Uri("https://mybot.azurewebsites.net/api/messages"),
        msaAppId: "<your-msa-app-id>")
    {
        Description = "My Azure Bot",
        MsaAppType = BotMsaAppType.MultiTenant
    }
};

// Create or update the bot
ArmOperation<BotResource> operation = await botCollection.CreateOrUpdateAsync(
    WaitUntil.Completed,
    "myBotName",
    botData);

BotResource bot = operation.Value;
Console.WriteLine($"Bot created: {bot.Data.Name}");
```

### 2. Configure DirectLine Channel

```csharp
// Get the bot
BotResource bot = await resourceGroup.GetBots().GetAsync("myBotName");

// Get channel collection
BotChannelCollection channels = bot.GetBotChannels();

// Create DirectLine channel configuration
var channelData = new BotChannelData(AzureLocation.WestUS2)
{
    Properties = new DirectLineChannel()
    {
        Properties = new DirectLineChannelProperties()
        {
            Sites =
            {
                new DirectLineSite("Default Site")
                {
                    IsEnabled = true,
                    IsV1Enabled = false,
                    IsV3Enabled = true,
                    IsSecureSiteEnabled = true
                }
            }
        }
    }
};

// Create or update the channel
ArmOperation<BotChannelResource> channelOp = await channels.CreateOrUpdateAsync(
    WaitUntil.Completed,
    BotChannelName.DirectLineChannel,
    channelData);

Console.WriteLine("DirectLine channel configured");
```

### 3. Configure Microsoft Teams Channel

```csharp
var teamsChannelData = new BotChannelData(AzureLocation.WestUS2)
{
    Properties = new MsTeamsChannel()
    {
        Properties = new MsTeamsChannelProperties()
        {
            IsEnabled = true,
            EnableCalling = false
        }
    }
};

await channels.CreateOrUpdateAsync(
    WaitUntil.Completed,
    BotChannelName.MsTeamsChannel,
    teamsChannelData);
```

### 4. Configure Web Chat Channel

```csharp
var webChatChannelData = new BotChannelData(AzureLocation.WestUS2)
{
    Properties = new WebChatChannel()
    {
        Properties = new WebChatChannelProperties()
        {
            Sites =
            {
                new WebChatSite("Default Site")
                {
                    IsEnabled = true
                }
            }
        }
    }
};

await channels.CreateOrUpdateAsync(
    WaitUntil.Completed,
    BotChannelName.WebChatChannel,
    webChatChannelData);
```

### 5. Get Bot and List Channels

```csharp
// Get bot
BotResource bot = await botCollection.GetAsync("myBotName");
Console.WriteLine($"Bot: {bot.Data.Properties.DisplayName}");
Console.WriteLine($"Endpoint: {bot.Data.Properties.Endpoint}");

// List channels
await foreach (BotChannelResource channel in bot.GetBotChannels().GetAllAsync())
{
    Console.WriteLine($"Channel: {channel.Data.Name}");
}
```

### 6. Regenerate DirectLine Keys

```csharp
var regenerateRequest = new BotChannelRegenerateKeysContent(BotChannelName.DirectLineChannel)
{
    SiteName = "Default Site"
};

BotChannelResource channelWithKeys = await bot.GetBotChannelWithRegenerateKeysAsync(regenerateRequest);
```

### 7. Update Bot

```csharp
BotResource bot = await botCollection.GetAsync("myBotName");

// Update using patch
var updateData = new BotData(bot.Data.Location)
{
    Properties = new BotProperties(
        displayName: "Updated Bot Name",
        endpoint: bot.Data.Properties.Endpoint,
        msaAppId: bot.Data.Properties.MsaAppId)
    {
        Description = "Updated description"
    }
};

await bot.UpdateAsync(updateData);
```

### 8. Delete Bot

```csharp
BotResource bot = await botCollection.GetAsync("myBotName");
await bot.DeleteAsync(WaitUntil.Completed);
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
Use @azure-mgmt-botservice-dotnet to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-mgmt-botservice-dotnet against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-mgmt-botservice-dotnet for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-botservice-dotnet using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always use DefaultAzureCredential — supports multiple auth methods
- Use WaitUntil.Completed for synchronous operations
- Handle RequestFailedException for API errors
- Use async methods (*Async) for all operations
- Store MSA App credentials securely — use Key Vault for secrets
- Use managed identity (BotMsaAppType.UserAssignedMSI) for production bots
- Enable secure sites for DirectLine channels in production

### Imported Operating Notes

#### Imported: Best Practices

1. **Always use `DefaultAzureCredential`** — supports multiple auth methods
2. **Use `WaitUntil.Completed`** for synchronous operations
3. **Handle `RequestFailedException`** for API errors
4. **Use async methods** (`*Async`) for all operations
5. **Store MSA App credentials securely** — use Key Vault for secrets
6. **Use managed identity** (`BotMsaAppType.UserAssignedMSI`) for production bots
7. **Enable secure sites** for DirectLine channels in production

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-mgmt-botservice-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
        └── BotResource
            ├── BotChannelResource (DirectLine, Teams, Slack, etc.)
            ├── BotConnectionSettingResource (OAuth connections)
            └── BotServicePrivateEndpointConnectionResource
```

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `ArmClient` | Entry point for all ARM operations |
| `BotResource` | Represents an Azure Bot resource |
| `BotCollection` | Collection for bot CRUD |
| `BotData` | Bot resource definition |
| `BotProperties` | Bot configuration properties |
| `BotChannelResource` | Channel configuration |
| `BotChannelCollection` | Collection of channels |
| `BotChannelData` | Channel configuration data |
| `BotConnectionSettingResource` | OAuth connection settings |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.ResourceManager.BotService |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.resourcemanager.botservice |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/botservice/Azure.ResourceManager.BotService |
| Azure Bot Service Docs | https://learn.microsoft.com/azure/bot-service/ |

#### Imported: Authentication

```csharp
using Azure.Identity;
using Azure.ResourceManager;
using Azure.ResourceManager.BotService;

// Authenticate using DefaultAzureCredential
var credential = new DefaultAzureCredential();
ArmClient armClient = new ArmClient(credential);

// Get subscription and resource group
SubscriptionResource subscription = await armClient.GetDefaultSubscriptionAsync();
ResourceGroupResource resourceGroup = await subscription.GetResourceGroups().GetAsync("myResourceGroup");

// Access bot collection
BotCollection botCollection = resourceGroup.GetBots();
```

#### Imported: Supported Channel Types

| Channel | Constant | Class |
|---------|----------|-------|
| Direct Line | `BotChannelName.DirectLineChannel` | `DirectLineChannel` |
| Direct Line Speech | `BotChannelName.DirectLineSpeechChannel` | `DirectLineSpeechChannel` |
| Microsoft Teams | `BotChannelName.MsTeamsChannel` | `MsTeamsChannel` |
| Web Chat | `BotChannelName.WebChatChannel` | `WebChatChannel` |
| Slack | `BotChannelName.SlackChannel` | `SlackChannel` |
| Facebook | `BotChannelName.FacebookChannel` | `FacebookChannel` |
| Email | `BotChannelName.EmailChannel` | `EmailChannel` |
| Telegram | `BotChannelName.TelegramChannel` | `TelegramChannel` |
| Telephony | `BotChannelName.TelephonyChannel` | `TelephonyChannel` |

#### Imported: BotServiceKind Values

| Value | Description |
|-------|-------------|
| `BotServiceKind.Azurebot` | Azure Bot (recommended) |
| `BotServiceKind.Bot` | Legacy Bot Framework bot |
| `BotServiceKind.Designer` | Composer bot |
| `BotServiceKind.Function` | Function bot |
| `BotServiceKind.Sdk` | SDK bot |

#### Imported: BotServiceSkuName Values

| Value | Description |
|-------|-------------|
| `BotServiceSkuName.F0` | Free tier |
| `BotServiceSkuName.S1` | Standard tier |

#### Imported: BotMsaAppType Values

| Value | Description |
|-------|-------------|
| `BotMsaAppType.MultiTenant` | Multi-tenant app |
| `BotMsaAppType.SingleTenant` | Single-tenant app |
| `BotMsaAppType.UserAssignedMSI` | User-assigned managed identity |

#### Imported: Error Handling

```csharp
using Azure;

try
{
    var operation = await botCollection.CreateOrUpdateAsync(
        WaitUntil.Completed,
        botName,
        botData);
}
catch (RequestFailedException ex) when (ex.Status == 409)
{
    Console.WriteLine("Bot already exists");
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
