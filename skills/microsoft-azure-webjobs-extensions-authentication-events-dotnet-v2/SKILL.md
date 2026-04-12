---
name: microsoft-azure-webjobs-extensions-authentication-events-dotnet-v2
description: "Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents (.NET) workflow skill. Use this skill when the user needs Microsoft Entra Authentication Events SDK for .NET. Azure Functions triggers for custom authentication extensions and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["microsoft-azure-webjobs-extensions-authentication-events-dotnet-v2", "microsoft-azure-webjobs-extensions-authentication-events-dotnet", "microsoft", "entra", "authentication", "events", "sdk", "for"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents (.NET) Azure Functions extension for handling Microsoft Entra ID custom authentication events.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Supported Events, Entra ID Configuration, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Microsoft Entra Authentication Events SDK for .NET. Azure Functions triggers for custom authentication extensions.
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

1. `bash dotnet add package Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents Current Version: v1.1.0 (stable) ### 1.
2. Token Enrichment (Add Custom Claims) Add custom claims to access or ID tokens during sign-in.
3. csharp using Microsoft.Azure.WebJobs; using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents; using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents.TokenIssuanceStart; using Microsoft.Extensions.Logging; public static class TokenEnrichmentFunction { [FunctionName("OnTokenIssuanceStart")] public static WebJobsAuthenticationEventResponse Run( [WebJobsAuthenticationEventsTrigger] WebJobsTokenIssuanceStartRequest request, ILogger log) { log.LogInformation("Token issuance event for user: {UserId}", request.Data?.AuthenticationContext?.User?.Id); // Create response with custom claims var response = new WebJobsTokenIssuanceStartResponse(); // Add claims to the token response.Actions.Add(new WebJobsProvideClaimsForToken { Claims = new Dictionary<string, string> { { "customClaim1", "customValue1" }, { "department", "Engineering" }, { "costCenter", "CC-12345" }, { "apiVersion", "v2" } } }); return response; } } ### 2.
4. Token Enrichment with External Data Fetch claims from external systems (databases, APIs).
5. `csharp using Microsoft.Azure.WebJobs; using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents; using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents.TokenIssuanceStart; using Microsoft.Extensions.Logging; using System.Net.Http; using System.Text.Json; public static class TokenEnrichmentWithExternalData { private static readonly HttpClient httpClient = new(); [FunctionName("OnTokenIssuanceStartExternal")] public static async Task<WebJobsAuthenticationEventResponse> Run( [WebJobsAuthenticationEventsTrigger] WebJobsTokenIssuanceStartRequest request, ILogger log) { string?
6. userId = request.Data?.AuthenticationContext?.User?.Id; if (string.IsNullOrEmpty(userId)) { log.LogWarning("No user ID in request"); return new WebJobsTokenIssuanceStartResponse(); } // Fetch user data from external API var userProfile = await GetUserProfileAsync(userId); var response = new WebJobsTokenIssuanceStartResponse(); response.Actions.Add(new WebJobsProvideClaimsForToken { Claims = new Dictionary<string, string> { { "employeeId", userProfile.EmployeeId }, { "department", userProfile.Department }, { "roles", string.Join(",", userProfile.Roles) } } }); return response; } private static async Task<UserProfile> GetUserProfileAsync(string userId) { var response = await httpClient.GetAsync($"https://api.example.com/users/{userId}"); response.EnsureSuccessStatusCode(); var json = await response.Content.ReadAsStringAsync(); return JsonSerializer.Deserialize<UserProfile>(json)!; } } public record UserProfile(string EmployeeId, string Department, string[] Roles); ` ### 3.
7. Attribute Collection - Customize UI (Start Event) Customize the attribute collection page before it's displayed.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents
```

**Current Version**: v1.1.0 (stable)

#### Imported: Core Workflows

### 1. Token Enrichment (Add Custom Claims)

Add custom claims to access or ID tokens during sign-in.

```csharp
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents.TokenIssuanceStart;
using Microsoft.Extensions.Logging;

public static class TokenEnrichmentFunction
{
    [FunctionName("OnTokenIssuanceStart")]
    public static WebJobsAuthenticationEventResponse Run(
        [WebJobsAuthenticationEventsTrigger] WebJobsTokenIssuanceStartRequest request,
        ILogger log)
    {
        log.LogInformation("Token issuance event for user: {UserId}", 
            request.Data?.AuthenticationContext?.User?.Id);

        // Create response with custom claims
        var response = new WebJobsTokenIssuanceStartResponse();
        
        // Add claims to the token
        response.Actions.Add(new WebJobsProvideClaimsForToken
        {
            Claims = new Dictionary<string, string>
            {
                { "customClaim1", "customValue1" },
                { "department", "Engineering" },
                { "costCenter", "CC-12345" },
                { "apiVersion", "v2" }
            }
        });

        return response;
    }
}
```

### 2. Token Enrichment with External Data

Fetch claims from external systems (databases, APIs).

```csharp
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents.TokenIssuanceStart;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using System.Text.Json;

public static class TokenEnrichmentWithExternalData
{
    private static readonly HttpClient _httpClient = new();

    [FunctionName("OnTokenIssuanceStartExternal")]
    public static async Task<WebJobsAuthenticationEventResponse> Run(
        [WebJobsAuthenticationEventsTrigger] WebJobsTokenIssuanceStartRequest request,
        ILogger log)
    {
        string? userId = request.Data?.AuthenticationContext?.User?.Id;
        
        if (string.IsNullOrEmpty(userId))
        {
            log.LogWarning("No user ID in request");
            return new WebJobsTokenIssuanceStartResponse();
        }

        // Fetch user data from external API
        var userProfile = await GetUserProfileAsync(userId);
        
        var response = new WebJobsTokenIssuanceStartResponse();
        response.Actions.Add(new WebJobsProvideClaimsForToken
        {
            Claims = new Dictionary<string, string>
            {
                { "employeeId", userProfile.EmployeeId },
                { "department", userProfile.Department },
                { "roles", string.Join(",", userProfile.Roles) }
            }
        });

        return response;
    }

    private static async Task<UserProfile> GetUserProfileAsync(string userId)
    {
        var response = await _httpClient.GetAsync($"https://api.example.com/users/{userId}");
        response.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<UserProfile>(json)!;
    }
}

public record UserProfile(string EmployeeId, string Department, string[] Roles);
```

### 3. Attribute Collection - Customize UI (Start Event)

Customize the attribute collection page before it's displayed.

```csharp
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents.Framework;
using Microsoft.Extensions.Logging;

public static class AttributeCollectionStartFunction
{
    [FunctionName("OnAttributeCollectionStart")]
    public static WebJobsAuthenticationEventResponse Run(
        [WebJobsAuthenticationEventsTrigger] WebJobsAttributeCollectionStartRequest request,
        ILogger log)
    {
        log.LogInformation("Attribute collection start for correlation: {CorrelationId}",
            request.Data?.AuthenticationContext?.CorrelationId);

        var response = new WebJobsAttributeCollectionStartResponse();

        // Option 1: Continue with default behavior
        response.Actions.Add(new WebJobsContinueWithDefaultBehavior());

        // Option 2: Prefill attributes
        // response.Actions.Add(new WebJobsSetPrefillValues
        // {
        //     Attributes = new Dictionary<string, string>
        //     {
        //         { "city", "Seattle" },
        //         { "country", "USA" }
        //     }
        // });

        // Option 3: Show blocking page (prevent sign-up)
        // response.Actions.Add(new WebJobsShowBlockPage
        // {
        //     Message = "Sign-up is currently disabled."
        // });

        return response;
    }
}
```

### 4. Attribute Collection - Validate Submission (Submit Event)

Validate and modify attributes after user submission.

```csharp
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents.Framework;
using Microsoft.Extensions.Logging;

public static class AttributeCollectionSubmitFunction
{
    [FunctionName("OnAttributeCollectionSubmit")]
    public static WebJobsAuthenticationEventResponse Run(
        [WebJobsAuthenticationEventsTrigger] WebJobsAttributeCollectionSubmitRequest request,
        ILogger log)
    {
        var response = new WebJobsAttributeCollectionSubmitResponse();

        // Access submitted attributes
        var attributes = request.Data?.UserSignUpInfo?.Attributes;
        
        string? email = attributes?["email"]?.ToString();
        string? displayName = attributes?["displayName"]?.ToString();

        // Validation example: block certain email domains
        if (email?.EndsWith("@blocked.com") == true)
        {
            response.Actions.Add(new WebJobsShowBlockPage
            {
                Message = "Sign-up from this email domain is not allowed."
            });
            return response;
        }

        // Validation example: show validation error
        if (string.IsNullOrEmpty(displayName) || displayName.Length < 3)
        {
            response.Actions.Add(new WebJobsShowValidationError
            {
                Message = "Display name must be at least 3 characters.",
                AttributeErrors = new Dictionary<string, string>
                {
                    { "displayName", "Name is too short" }
                }
            });
            return response;
        }

        // Modify attributes before saving
        response.Actions.Add(new WebJobsModifyAttributeValues
        {
            Attributes = new Dictionary<string, string>
            {
                { "displayName", displayName.Trim() },
                { "city", attributes?["city"]?.ToString()?.ToUpperInvariant() ?? "" }
            }
        });

        return response;
    }
}
```

### 5. Custom OTP Delivery

Send one-time passwords via custom channels (SMS, email, push notification).

```csharp
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents;
using Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents.Framework;
using Microsoft.Extensions.Logging;

public static class CustomOtpFunction
{
    [FunctionName("OnOtpSend")]
    public static async Task<WebJobsAuthenticationEventResponse> Run(
        [WebJobsAuthenticationEventsTrigger] WebJobsOnOtpSendRequest request,
        ILogger log)
    {
        var response = new WebJobsOnOtpSendResponse();

        string? phoneNumber = request.Data?.OtpContext?.Identifier;
        string? otp = request.Data?.OtpContext?.OneTimeCode;

        if (string.IsNullOrEmpty(phoneNumber) || string.IsNullOrEmpty(otp))
        {
            log.LogError("Missing phone number or OTP");
            response.Actions.Add(new WebJobsOnOtpSendFailed
            {
                Error = "Missing required data"
            });
            return response;
        }

        try
        {
            // Send OTP via your SMS provider
            await SendSmsAsync(phoneNumber, $"Your verification code is: {otp}");
            
            response.Actions.Add(new WebJobsOnOtpSendSuccess());
            log.LogInformation("OTP sent successfully to {PhoneNumber}", phoneNumber);
        }
        catch (Exception ex)
        {
            log.LogError(ex, "Failed to send OTP");
            response.Actions.Add(new WebJobsOnOtpSendFailed
            {
                Error = "Failed to send verification code"
            });
        }

        return response;
    }

    private static async Task SendSmsAsync(string phoneNumber, string message)
    {
        // Implement your SMS provider integration (Twilio, Azure Communication Services, etc.)
        await Task.CompletedTask;
    }
}
```

### 6. Function App Configuration

Configure the Function App for authentication events.

```csharp
// Program.cs (Isolated worker model)
using Microsoft.Extensions.Hosting;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .Build();

host.Run();
```

```json
// host.json
{
  "version": "2.0",
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true
      }
    }
  },
  "extensions": {
    "http": {
      "routePrefix": ""
    }
  }
}
```

```json
// local.settings.json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet"
  }
}
```

#### Imported: Supported Events

| Event | Purpose |
|-------|---------|
| `OnTokenIssuanceStart` | Add custom claims to tokens during issuance |
| `OnAttributeCollectionStart` | Customize attribute collection UI before display |
| `OnAttributeCollectionSubmit` | Validate/modify attributes after user submission |
| `OnOtpSend` | Custom OTP delivery (SMS, email, etc.) |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @microsoft-azure-webjobs-extensions-authentication-events-dotnet-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @microsoft-azure-webjobs-extensions-authentication-events-dotnet-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Validate all inputs — Never trust request data; validate before processing
- Handle errors gracefully — Return appropriate error responses
- Log correlation IDs — Use CorrelationId for troubleshooting
- Keep functions fast — Authentication events have timeout limits
- Use managed identity — Access Azure resources securely
- Cache external data — Avoid slow lookups on every request
- Test locally — Use Azure Functions Core Tools with sample payloads

### Imported Operating Notes

#### Imported: Best Practices

1. **Validate all inputs** — Never trust request data; validate before processing
2. **Handle errors gracefully** — Return appropriate error responses
3. **Log correlation IDs** — Use `CorrelationId` for troubleshooting
4. **Keep functions fast** — Authentication events have timeout limits
5. **Use managed identity** — Access Azure resources securely
6. **Cache external data** — Avoid slow lookups on every request
7. **Test locally** — Use Azure Functions Core Tools with sample payloads
8. **Monitor with App Insights** — Track function execution and errors

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/microsoft-azure-webjobs-extensions-authentication-events-dotnet`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `WebJobsAuthenticationEventsTriggerAttribute` | Function trigger attribute |
| `WebJobsTokenIssuanceStartRequest` | Token issuance event request |
| `WebJobsTokenIssuanceStartResponse` | Token issuance event response |
| `WebJobsProvideClaimsForToken` | Action to add claims |
| `WebJobsAttributeCollectionStartRequest` | Attribute collection start request |
| `WebJobsAttributeCollectionStartResponse` | Attribute collection start response |
| `WebJobsAttributeCollectionSubmitRequest` | Attribute submission request |
| `WebJobsAttributeCollectionSubmitResponse` | Attribute submission response |
| `WebJobsSetPrefillValues` | Prefill form values |
| `WebJobsShowBlockPage` | Block user with message |
| `WebJobsShowValidationError` | Show validation errors |
| `WebJobsModifyAttributeValues` | Modify submitted values |
| `WebJobsOnOtpSendRequest` | OTP send event request |
| `WebJobsOnOtpSendResponse` | OTP send event response |
| `WebJobsOnOtpSendSuccess` | OTP sent successfully |
| `WebJobsOnOtpSendFailed` | OTP send failed |
| `WebJobsContinueWithDefaultBehavior` | Continue with default flow |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents |
| Custom Extensions Overview | https://learn.microsoft.com/entra/identity-platform/custom-extension-overview |
| Token Issuance Events | https://learn.microsoft.com/entra/identity-platform/custom-extension-tokenissuancestart-setup |
| Attribute Collection Events | https://learn.microsoft.com/entra/identity-platform/custom-extension-attribute-collection |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/entra/Microsoft.Azure.WebJobs.Extensions.AuthenticationEvents |

#### Imported: Entra ID Configuration

After deploying your Function App, configure the custom extension in Entra ID:

1. **Register the API** in Entra ID → App registrations
2. **Create Custom Authentication Extension** in Entra ID → External Identities → Custom authentication extensions
3. **Link to User Flow** in Entra ID → External Identities → User flows

### Required App Registration Settings

```
Expose an API:
  - Application ID URI: api://<your-function-app-name>.azurewebsites.net
  - Scope: CustomAuthenticationExtension.Receive.Payload

API Permissions:
  - Microsoft Graph: User.Read (delegated)
```

#### Imported: Error Handling

```csharp
[FunctionName("OnTokenIssuanceStart")]
public static WebJobsAuthenticationEventResponse Run(
    [WebJobsAuthenticationEventsTrigger] WebJobsTokenIssuanceStartRequest request,
    ILogger log)
{
    try
    {
        // Your logic here
        var response = new WebJobsTokenIssuanceStartResponse();
        response.Actions.Add(new WebJobsProvideClaimsForToken
        {
            Claims = new Dictionary<string, string> { { "claim", "value" } }
        });
        return response;
    }
    catch (Exception ex)
    {
        log.LogError(ex, "Error processing token issuance event");
        
        // Return empty response - authentication continues without custom claims
        // Do NOT throw - this would fail the authentication
        return new WebJobsTokenIssuanceStartResponse();
    }
}
```
