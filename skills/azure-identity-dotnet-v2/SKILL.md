---
name: azure-identity-dotnet-v2
description: "Azure.Identity (.NET) workflow skill. Use this skill when the user needs Azure Identity SDK for .NET. Authentication library for Azure SDK clients using Microsoft Entra ID. Use for DefaultAzureCredential, managed identity, service principals, and developer credentials and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["azure-identity-dotnet-v2", "azure-identity-dotnet", "azure", "identity", "sdk", "for", "net", "authentication"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure.Identity (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-identity-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.Identity (.NET) Authentication library for Azure SDK clients using Microsoft Entra ID (formerly Azure AD).

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, DefaultAzureCredential, Credential Types, Environment-Based Configuration, Sovereign Clouds, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Identity SDK for .NET. Authentication library for Azure SDK clients using Microsoft Entra ID. Use for DefaultAzureCredential, managed identity, service principals, and developer credentials.
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

1. bash dotnet add package Azure.Identity # For ASP.NET Core dotnet add package Microsoft.Extensions.Azure # For brokered authentication (Windows) dotnet add package Azure.Identity.Broker Current Versions: Stable v1.17.1, Preview v1.18.0-beta.2
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.Identity

# For ASP.NET Core
dotnet add package Microsoft.Extensions.Azure

# For brokered authentication (Windows)
dotnet add package Azure.Identity.Broker
```

**Current Versions**: Stable v1.17.1, Preview v1.18.0-beta.2

#### Imported: Environment Variables

### Service Principal with Secret
```bash
AZURE_CLIENT_ID=<application-client-id>
AZURE_TENANT_ID=<directory-tenant-id>
AZURE_CLIENT_SECRET=<client-secret-value>
```

### Service Principal with Certificate
```bash
AZURE_CLIENT_ID=<application-client-id>
AZURE_TENANT_ID=<directory-tenant-id>
AZURE_CLIENT_CERTIFICATE_PATH=<path-to-pfx-or-pem>
AZURE_CLIENT_CERTIFICATE_PASSWORD=<certificate-password>  # Optional
```

### Managed Identity
```bash
AZURE_CLIENT_ID=<user-assigned-managed-identity-client-id>  # Only for user-assigned
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-identity-dotnet-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-identity-dotnet-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-identity-dotnet-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-identity-dotnet-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use Deterministic Credentials in Production `csharp // Development var devCredential = new DefaultAzureCredential(); // Production - use specific credential var prodCredential = new ManagedIdentityCredential("<client-id>"); ### 2.
- Reuse Credential Instances csharp // Good: Single credential instance shared across clients var credential = new DefaultAzureCredential(); var blobClient = new BlobServiceClient(blobUri, credential); var secretClient = new SecretClient(vaultUri, credential); ### 3.
- Configure Retry Policies csharp var options = new ManagedIdentityCredentialOptions( ManagedIdentityId.FromUserAssignedClientId(clientId)) { Retry = { MaxRetries = 3, Delay = TimeSpan.FromSeconds(0.5), } }; var credential = new ManagedIdentityCredential(options); ### 4.
- Enable Logging for Debugging csharp using Azure.Core.Diagnostics; using AzureEventSourceListener listener = new((args, message) => { if (args is { EventSource.Name: "Azure-Identity" }) { Console.WriteLine(message); } }, EventLevel.LogAlways); `
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

### 1. Use Deterministic Credentials in Production

```csharp
// Development
var devCredential = new DefaultAzureCredential();

// Production - use specific credential
var prodCredential = new ManagedIdentityCredential("<client-id>");
```

### 2. Reuse Credential Instances

```csharp
// Good: Single credential instance shared across clients
var credential = new DefaultAzureCredential();
var blobClient = new BlobServiceClient(blobUri, credential);
var secretClient = new SecretClient(vaultUri, credential);
```

### 3. Configure Retry Policies

```csharp
var options = new ManagedIdentityCredentialOptions(
    ManagedIdentityId.FromUserAssignedClientId(clientId))
{
    Retry =
    {
        MaxRetries = 3,
        Delay = TimeSpan.FromSeconds(0.5),
    }
};
var credential = new ManagedIdentityCredential(options);
```

### 4. Enable Logging for Debugging

```csharp
using Azure.Core.Diagnostics;

using AzureEventSourceListener listener = new((args, message) =>
{
    if (args is { EventSource.Name: "Azure-Identity" })
    {
        Console.WriteLine(message);
    }
}, EventLevel.LogAlways);
```

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-identity-dotnet`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Credential Types Reference

| Category | Credential | Purpose |
|----------|------------|---------|
| **Chains** | `DefaultAzureCredential` | Preconfigured chain for dev-to-prod |
| | `ChainedTokenCredential` | Custom credential chain |
| **Azure-Hosted** | `ManagedIdentityCredential` | Azure managed identity |
| | `WorkloadIdentityCredential` | Kubernetes workload identity |
| | `EnvironmentCredential` | Environment variables |
| **Service Principal** | `ClientSecretCredential` | Client ID + secret |
| | `ClientCertificateCredential` | Client ID + certificate |
| | `ClientAssertionCredential` | Signed client assertion |
| **User** | `InteractiveBrowserCredential` | Browser-based auth |
| | `DeviceCodeCredential` | Device code flow |
| | `OnBehalfOfCredential` | Delegated identity |
| **Developer** | `AzureCliCredential` | Azure CLI |
| | `AzurePowerShellCredential` | Azure PowerShell |
| | `AzureDeveloperCliCredential` | Azure Developer CLI |
| | `VisualStudioCredential` | Visual Studio |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.Identity |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.identity |
| Credential Chains | https://learn.microsoft.com/dotnet/azure/sdk/authentication/credential-chains |
| Best Practices | https://learn.microsoft.com/dotnet/azure/sdk/authentication/best-practices |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/identity/Azure.Identity |

#### Imported: DefaultAzureCredential

The recommended credential for most scenarios. Tries multiple authentication methods in order:

| Order | Credential | Enabled by Default |
|-------|------------|-------------------|
| 1 | EnvironmentCredential | Yes |
| 2 | WorkloadIdentityCredential | Yes |
| 3 | ManagedIdentityCredential | Yes |
| 4 | VisualStudioCredential | Yes |
| 5 | VisualStudioCodeCredential | Yes |
| 6 | AzureCliCredential | Yes |
| 7 | AzurePowerShellCredential | Yes |
| 8 | AzureDeveloperCliCredential | Yes |
| 9 | InteractiveBrowserCredential | **No** |

### Basic Usage

```csharp
using Azure.Identity;
using Azure.Storage.Blobs;

var credential = new DefaultAzureCredential();
var blobClient = new BlobServiceClient(
    new Uri("https://myaccount.blob.core.windows.net"),
    credential);
```

### ASP.NET Core with Dependency Injection

```csharp
using Azure.Identity;
using Microsoft.Extensions.Azure;

builder.Services.AddAzureClients(clientBuilder =>
{
    clientBuilder.AddBlobServiceClient(
        new Uri("https://myaccount.blob.core.windows.net"));
    clientBuilder.AddSecretClient(
        new Uri("https://myvault.vault.azure.net"));
    
    // Uses DefaultAzureCredential by default
    clientBuilder.UseCredential(new DefaultAzureCredential());
});
```

### Customizing DefaultAzureCredential

```csharp
var credential = new DefaultAzureCredential(
    new DefaultAzureCredentialOptions
    {
        ExcludeEnvironmentCredential = true,
        ExcludeManagedIdentityCredential = false,
        ExcludeVisualStudioCredential = false,
        ExcludeAzureCliCredential = false,
        ExcludeInteractiveBrowserCredential = false, // Enable interactive
        TenantId = "<tenant-id>",
        ManagedIdentityClientId = "<user-assigned-mi-client-id>"
    });
```

#### Imported: Credential Types

### ManagedIdentityCredential (Production)

```csharp
// System-assigned managed identity
var credential = new ManagedIdentityCredential(ManagedIdentityId.SystemAssigned);

// User-assigned by client ID
var credential = new ManagedIdentityCredential(
    ManagedIdentityId.FromUserAssignedClientId("<client-id>"));

// User-assigned by resource ID
var credential = new ManagedIdentityCredential(
    ManagedIdentityId.FromUserAssignedResourceId("<resource-id>"));
```

### ClientSecretCredential

```csharp
var credential = new ClientSecretCredential(
    tenantId: "<tenant-id>",
    clientId: "<client-id>",
    clientSecret: "<client-secret>");

var client = new SecretClient(
    new Uri("https://myvault.vault.azure.net"),
    credential);
```

### ClientCertificateCredential

```csharp
var certificate = X509CertificateLoader.LoadCertificateFromFile("MyCertificate.pfx");
var credential = new ClientCertificateCredential(
    tenantId: "<tenant-id>",
    clientId: "<client-id>",
    certificate);
```

### ChainedTokenCredential (Custom Chain)

```csharp
var credential = new ChainedTokenCredential(
    new ManagedIdentityCredential(),
    new AzureCliCredential());

var client = new SecretClient(
    new Uri("https://myvault.vault.azure.net"),
    credential);
```

### Developer Credentials

```csharp
// Azure CLI
var credential = new AzureCliCredential();

// Azure PowerShell
var credential = new AzurePowerShellCredential();

// Azure Developer CLI (azd)
var credential = new AzureDeveloperCliCredential();

// Visual Studio
var credential = new VisualStudioCredential();

// Interactive Browser
var credential = new InteractiveBrowserCredential();
```

#### Imported: Environment-Based Configuration

```csharp
// Production vs Development
TokenCredential credential = builder.Environment.IsProduction()
    ? new ManagedIdentityCredential("<client-id>")
    : new DefaultAzureCredential();
```

#### Imported: Sovereign Clouds

```csharp
var credential = new DefaultAzureCredential(
    new DefaultAzureCredentialOptions
    {
        AuthorityHost = AzureAuthorityHosts.AzureGovernment
    });

// Available authority hosts:
// AzureAuthorityHosts.AzurePublicCloud (default)
// AzureAuthorityHosts.AzureGovernment
// AzureAuthorityHosts.AzureChina
// AzureAuthorityHosts.AzureGermany
```

#### Imported: Error Handling

```csharp
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var client = new SecretClient(
    new Uri("https://myvault.vault.azure.net"),
    new DefaultAzureCredential());

try
{
    KeyVaultSecret secret = await client.GetSecretAsync("secret1");
}
catch (AuthenticationFailedException e)
{
    Console.WriteLine($"Authentication Failed: {e.Message}");
}
catch (CredentialUnavailableException e)
{
    Console.WriteLine($"Credential Unavailable: {e.Message}");
}
```

#### Imported: Key Exceptions

| Exception | Description |
|-----------|-------------|
| `AuthenticationFailedException` | Base exception for authentication errors |
| `CredentialUnavailableException` | Credential cannot authenticate in current environment |
| `AuthenticationRequiredException` | Interactive authentication is required |

#### Imported: Managed Identity Support

Supported Azure services:
- Azure App Service and Azure Functions
- Azure Arc
- Azure Cloud Shell
- Azure Kubernetes Service (AKS)
- Azure Service Fabric
- Azure Virtual Machines
- Azure Virtual Machine Scale Sets

#### Imported: Thread Safety

All credential implementations are thread-safe. A single credential instance can be safely shared across multiple clients and threads.
