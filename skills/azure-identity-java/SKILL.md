---
name: azure-identity-java
description: "Azure Identity (Java) workflow skill. Use this skill when the user needs Authenticate Java applications with Azure services using Microsoft Entra ID (Azure AD) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["azure-identity-java", "authenticate", "java", "applications", "azure", "services", "using", "microsoft"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Azure Identity (Java)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-identity-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Identity (Java) Authenticate Java applications with Azure services using Microsoft Entra ID (Azure AD).

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Key Concepts, DefaultAzureCredential (Recommended), Managed Identity, Service Principal with Secret, Service Principal with Certificate, Environment Credential.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "Azure authentication Java", "DefaultAzureCredential Java"
- "managed identity Java", "service principal Java"
- "Azure login Java", "Azure credentials Java"
- "AZURECLIENTID", "AZURETENANTID"
- Use when the request clearly matches the imported source intent: Authenticate Java applications with Azure services using Microsoft Entra ID (Azure AD).
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-identity</artifactId> <version>1.15.0</version> </dependency>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-identity</artifactId>
    <version>1.15.0</version>
</dependency>
```

#### Imported: Key Concepts

| Credential | Use Case |
|------------|----------|
| `DefaultAzureCredential` | **Recommended** - Works in dev and production |
| `ManagedIdentityCredential` | Azure-hosted apps (App Service, Functions, VMs) |
| `EnvironmentCredential` | CI/CD pipelines with env vars |
| `ClientSecretCredential` | Service principals with secret |
| `ClientCertificateCredential` | Service principals with certificate |
| `AzureCliCredential` | Local dev using `az login` |
| `InteractiveBrowserCredential` | Interactive login flow |
| `DeviceCodeCredential` | Headless device authentication |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-identity-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-identity-java against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-identity-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-identity-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultAzureCredential - Works seamlessly from dev to production
- Managed Identity in Production - No secrets to manage, automatic rotation
- Azure CLI for Local Dev - Run az login before running your app
- Least Privilege - Grant only required permissions to service principals
- Token Caching - Enabled by default, reduces auth round-trips
- Environment Variables - Use for CI/CD, not hardcoded secrets
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** - Works seamlessly from dev to production
2. **Managed Identity in Production** - No secrets to manage, automatic rotation
3. **Azure CLI for Local Dev** - Run `az login` before running your app
4. **Least Privilege** - Grant only required permissions to service principals
5. **Token Caching** - Enabled by default, reduces auth round-trips
6. **Environment Variables** - Use for CI/CD, not hardcoded secrets

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-identity-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@astro` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Credential Selection Matrix

| Environment | Recommended Credential |
|-------------|----------------------|
| Local Development | `DefaultAzureCredential` (uses Azure CLI) |
| Azure App Service | `DefaultAzureCredential` (uses Managed Identity) |
| Azure Functions | `DefaultAzureCredential` (uses Managed Identity) |
| Azure Kubernetes Service | `WorkloadIdentityCredential` |
| Azure VMs | `DefaultAzureCredential` (uses Managed Identity) |
| CI/CD Pipeline | `EnvironmentCredential` |
| Desktop App | `InteractiveBrowserCredential` |
| CLI Tool | `DeviceCodeCredential` |

#### Imported: DefaultAzureCredential (Recommended)

The `DefaultAzureCredential` tries multiple authentication methods in order:

1. Environment variables
2. Workload Identity
3. Managed Identity
4. Azure CLI
5. Azure PowerShell
6. Azure Developer CLI

```java
import com.azure.identity.DefaultAzureCredential;
import com.azure.identity.DefaultAzureCredentialBuilder;

// Simple usage
DefaultAzureCredential credential = new DefaultAzureCredentialBuilder().build();

// Use with any Azure client
BlobServiceClient blobClient = new BlobServiceClientBuilder()
    .endpoint("https://<storage-account>.blob.core.windows.net")
    .credential(credential)
    .buildClient();

KeyClient keyClient = new KeyClientBuilder()
    .vaultUrl("https://<vault-name>.vault.azure.net")
    .credential(credential)
    .buildClient();
```

### Configure DefaultAzureCredential

```java
DefaultAzureCredential credential = new DefaultAzureCredentialBuilder()
    .managedIdentityClientId("<user-assigned-identity-client-id>")  // For user-assigned MI
    .tenantId("<tenant-id>")                                        // Limit to specific tenant
    .excludeEnvironmentCredential()                                 // Skip env vars
    .excludeAzureCliCredential()                                    // Skip Azure CLI
    .build();
```

#### Imported: Managed Identity

For Azure-hosted applications (App Service, Functions, AKS, VMs).

```java
import com.azure.identity.ManagedIdentityCredential;
import com.azure.identity.ManagedIdentityCredentialBuilder;

// System-assigned managed identity
ManagedIdentityCredential credential = new ManagedIdentityCredentialBuilder()
    .build();

// User-assigned managed identity (by client ID)
ManagedIdentityCredential credential = new ManagedIdentityCredentialBuilder()
    .clientId("<user-assigned-client-id>")
    .build();

// User-assigned managed identity (by resource ID)
ManagedIdentityCredential credential = new ManagedIdentityCredentialBuilder()
    .resourceId("/subscriptions/<sub>/resourceGroups/<rg>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/<name>")
    .build();
```

#### Imported: Service Principal with Secret

```java
import com.azure.identity.ClientSecretCredential;
import com.azure.identity.ClientSecretCredentialBuilder;

ClientSecretCredential credential = new ClientSecretCredentialBuilder()
    .tenantId("<tenant-id>")
    .clientId("<client-id>")
    .clientSecret("<client-secret>")
    .build();
```

#### Imported: Service Principal with Certificate

```java
import com.azure.identity.ClientCertificateCredential;
import com.azure.identity.ClientCertificateCredentialBuilder;

// From PEM file
ClientCertificateCredential credential = new ClientCertificateCredentialBuilder()
    .tenantId("<tenant-id>")
    .clientId("<client-id>")
    .pemCertificate("<path-to-cert.pem>")
    .build();

// From PFX file with password
ClientCertificateCredential credential = new ClientCertificateCredentialBuilder()
    .tenantId("<tenant-id>")
    .clientId("<client-id>")
    .pfxCertificate("<path-to-cert.pfx>", "<pfx-password>")
    .build();

// Send certificate chain for SNI
ClientCertificateCredential credential = new ClientCertificateCredentialBuilder()
    .tenantId("<tenant-id>")
    .clientId("<client-id>")
    .pemCertificate("<path-to-cert.pem>")
    .sendCertificateChain(true)
    .build();
```

#### Imported: Environment Credential

Reads credentials from environment variables.

```java
import com.azure.identity.EnvironmentCredential;
import com.azure.identity.EnvironmentCredentialBuilder;

EnvironmentCredential credential = new EnvironmentCredentialBuilder().build();
```

### Required Environment Variables

**For service principal with secret:**
```bash
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_SECRET=<client-secret>
```

**For service principal with certificate:**
```bash
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_CERTIFICATE_PATH=/path/to/cert.pem
AZURE_CLIENT_CERTIFICATE_PASSWORD=<optional-password>
```

**For username/password:**
```bash
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_USERNAME=<username>
AZURE_PASSWORD=<password>
```

#### Imported: Azure CLI Credential

For local development using `az login`.

```java
import com.azure.identity.AzureCliCredential;
import com.azure.identity.AzureCliCredentialBuilder;

AzureCliCredential credential = new AzureCliCredentialBuilder()
    .tenantId("<tenant-id>")  // Optional: specific tenant
    .build();
```

#### Imported: Interactive Browser

For desktop applications requiring user login.

```java
import com.azure.identity.InteractiveBrowserCredential;
import com.azure.identity.InteractiveBrowserCredentialBuilder;

InteractiveBrowserCredential credential = new InteractiveBrowserCredentialBuilder()
    .clientId("<client-id>")
    .redirectUrl("http://localhost:8080")  // Must match app registration
    .build();
```

#### Imported: Device Code

For headless devices (IoT, CLI tools).

```java
import com.azure.identity.DeviceCodeCredential;
import com.azure.identity.DeviceCodeCredentialBuilder;

DeviceCodeCredential credential = new DeviceCodeCredentialBuilder()
    .clientId("<client-id>")
    .challengeConsumer(challenge -> {
        // Display to user
        System.out.println(challenge.getMessage());
    })
    .build();
```

#### Imported: Chained Credential

Create custom authentication chains.

```java
import com.azure.identity.ChainedTokenCredential;
import com.azure.identity.ChainedTokenCredentialBuilder;

ChainedTokenCredential credential = new ChainedTokenCredentialBuilder()
    .addFirst(new ManagedIdentityCredentialBuilder().build())
    .addLast(new AzureCliCredentialBuilder().build())
    .build();
```

#### Imported: Workload Identity (AKS)

For Azure Kubernetes Service with workload identity.

```java
import com.azure.identity.WorkloadIdentityCredential;
import com.azure.identity.WorkloadIdentityCredentialBuilder;

// Reads from AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_FEDERATED_TOKEN_FILE
WorkloadIdentityCredential credential = new WorkloadIdentityCredentialBuilder().build();

// Or explicit configuration
WorkloadIdentityCredential credential = new WorkloadIdentityCredentialBuilder()
    .tenantId("<tenant-id>")
    .clientId("<client-id>")
    .tokenFilePath("/var/run/secrets/azure/tokens/azure-identity-token")
    .build();
```

#### Imported: Token Caching

Enable persistent token caching for better performance.

```java
// Enable token caching (in-memory by default)
DefaultAzureCredential credential = new DefaultAzureCredentialBuilder()
    .enableAccountIdentifierLogging()
    .build();

// With shared token cache (for multi-credential scenarios)
SharedTokenCacheCredential credential = new SharedTokenCacheCredentialBuilder()
    .clientId("<client-id>")
    .build();
```

#### Imported: Sovereign Clouds

```java
import com.azure.identity.AzureAuthorityHosts;

// Azure Government
DefaultAzureCredential govCredential = new DefaultAzureCredentialBuilder()
    .authorityHost(AzureAuthorityHosts.AZURE_GOVERNMENT)
    .build();

// Azure China
DefaultAzureCredential chinaCredential = new DefaultAzureCredentialBuilder()
    .authorityHost(AzureAuthorityHosts.AZURE_CHINA)
    .build();
```

#### Imported: Error Handling

```java
import com.azure.identity.CredentialUnavailableException;
import com.azure.core.exception.ClientAuthenticationException;

try {
    DefaultAzureCredential credential = new DefaultAzureCredentialBuilder().build();
    AccessToken token = credential.getToken(new TokenRequestContext()
        .addScopes("https://management.azure.com/.default"));
} catch (CredentialUnavailableException e) {
    // No credential could authenticate
    System.out.println("Authentication failed: " + e.getMessage());
} catch (ClientAuthenticationException e) {
    // Authentication error (wrong credentials, expired, etc.)
    System.out.println("Auth error: " + e.getMessage());
}
```

#### Imported: Logging

Enable authentication logging for debugging.

```java
// Via environment variable
// AZURE_LOG_LEVEL=verbose

// Or programmatically
DefaultAzureCredential credential = new DefaultAzureCredentialBuilder()
    .enableAccountIdentifierLogging()  // Log account info
    .build();
```

#### Imported: Environment Variables

```bash
# DefaultAzureCredential configuration
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_SECRET=<client-secret>

# Managed Identity
AZURE_CLIENT_ID=<user-assigned-mi-client-id>

# Workload Identity (AKS)
AZURE_FEDERATED_TOKEN_FILE=/var/run/secrets/azure/tokens/azure-identity-token

# Logging
AZURE_LOG_LEVEL=verbose

# Authority host
AZURE_AUTHORITY_HOST=https://login.microsoftonline.com/
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
