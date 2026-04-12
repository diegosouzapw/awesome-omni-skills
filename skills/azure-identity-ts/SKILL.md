---
name: azure-identity-ts
description: "Azure Identity SDK for TypeScript workflow skill. Use this skill when the user needs Authenticate to Azure services with various credential types and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["azure-identity-ts", "authenticate", "azure", "services", "various", "credential", "types", "tools"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Identity SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-identity-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Identity SDK for TypeScript Authenticate to Azure services with various credential types.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, DefaultAzureCredential (Recommended), Managed Identity, Service Principal, Interactive Authentication, Custom Credential Chain.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Authenticate to Azure services with various credential types.
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

1. bash npm install @azure/identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/identity
```

#### Imported: Environment Variables

### Service Principal (Secret)

```bash
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_SECRET=<client-secret>
```

### Service Principal (Certificate)

```bash
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_CLIENT_CERTIFICATE_PATH=/path/to/cert.pem
AZURE_CLIENT_CERTIFICATE_PASSWORD=<optional-password>
```

### Workload Identity (Kubernetes)

```bash
AZURE_TENANT_ID=<tenant-id>
AZURE_CLIENT_ID=<client-id>
AZURE_FEDERATED_TOKEN_FILE=/var/run/secrets/tokens/azure-identity
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-identity-ts to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-identity-ts/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-identity-ts/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-identity-ts using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use DefaultAzureCredential - Works in development (CLI) and production (managed identity)
- Never hardcode credentials - Use environment variables or managed identity
- Prefer managed identity - No secrets to manage in production
- Scope credentials appropriately - Use user-assigned identity for multi-tenant scenarios
- Handle token refresh - Azure SDK handles this automatically
- Use ChainedTokenCredential - For custom fallback scenarios
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** - Works in development (CLI) and production (managed identity)
2. **Never hardcode credentials** - Use environment variables or managed identity
3. **Prefer managed identity** - No secrets to manage in production
4. **Scope credentials appropriately** - Use user-assigned identity for multi-tenant scenarios
5. **Handle token refresh** - Azure SDK handles this automatically
6. **Use ChainedTokenCredential** - For custom fallback scenarios

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-identity-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: DefaultAzureCredential (Recommended)

```typescript
import { DefaultAzureCredential } from "@azure/identity";

const credential = new DefaultAzureCredential();

// Use with any Azure SDK client
import { BlobServiceClient } from "@azure/storage-blob";
const blobClient = new BlobServiceClient(
  "https://<account>.blob.core.windows.net",
  credential
);
```

**Credential Chain Order:**
1. EnvironmentCredential
2. WorkloadIdentityCredential
3. ManagedIdentityCredential
4. VisualStudioCodeCredential
5. AzureCliCredential
6. AzurePowerShellCredential
7. AzureDeveloperCliCredential

#### Imported: Managed Identity

### System-Assigned

```typescript
import { ManagedIdentityCredential } from "@azure/identity";

const credential = new ManagedIdentityCredential();
```

### User-Assigned (by Client ID)

```typescript
const credential = new ManagedIdentityCredential({
  clientId: "<user-assigned-client-id>"
});
```

### User-Assigned (by Resource ID)

```typescript
const credential = new ManagedIdentityCredential({
  resourceId: "/subscriptions/<sub>/resourceGroups/<rg>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/<name>"
});
```

#### Imported: Service Principal

### Client Secret

```typescript
import { ClientSecretCredential } from "@azure/identity";

const credential = new ClientSecretCredential(
  "<tenant-id>",
  "<client-id>",
  "<client-secret>"
);
```

### Client Certificate

```typescript
import { ClientCertificateCredential } from "@azure/identity";

const credential = new ClientCertificateCredential(
  "<tenant-id>",
  "<client-id>",
  { certificatePath: "/path/to/cert.pem" }
);

// With password
const credentialWithPwd = new ClientCertificateCredential(
  "<tenant-id>",
  "<client-id>",
  { 
    certificatePath: "/path/to/cert.pem",
    certificatePassword: "<password>"
  }
);
```

#### Imported: Interactive Authentication

### Browser-Based Login

```typescript
import { InteractiveBrowserCredential } from "@azure/identity";

const credential = new InteractiveBrowserCredential({
  clientId: "<client-id>",
  tenantId: "<tenant-id>",
  loginHint: "user@example.com"
});
```

### Device Code Flow

```typescript
import { DeviceCodeCredential } from "@azure/identity";

const credential = new DeviceCodeCredential({
  clientId: "<client-id>",
  tenantId: "<tenant-id>",
  userPromptCallback: (info) => {
    console.log(info.message);
    // "To sign in, use a web browser to open..."
  }
});
```

#### Imported: Custom Credential Chain

```typescript
import { 
  ChainedTokenCredential,
  ManagedIdentityCredential,
  AzureCliCredential
} from "@azure/identity";

// Try managed identity first, fall back to CLI
const credential = new ChainedTokenCredential(
  new ManagedIdentityCredential(),
  new AzureCliCredential()
);
```

#### Imported: Developer Credentials

### Azure CLI

```typescript
import { AzureCliCredential } from "@azure/identity";

const credential = new AzureCliCredential();
// Uses: az login
```

### Azure Developer CLI

```typescript
import { AzureDeveloperCliCredential } from "@azure/identity";

const credential = new AzureDeveloperCliCredential();
// Uses: azd auth login
```

### Azure PowerShell

```typescript
import { AzurePowerShellCredential } from "@azure/identity";

const credential = new AzurePowerShellCredential();
// Uses: Connect-AzAccount
```

#### Imported: Sovereign Clouds

```typescript
import { ClientSecretCredential, AzureAuthorityHosts } from "@azure/identity";

// Azure Government
const credential = new ClientSecretCredential(
  "<tenant>", "<client>", "<secret>",
  { authorityHost: AzureAuthorityHosts.AzureGovernment }
);

// Azure China
const credentialChina = new ClientSecretCredential(
  "<tenant>", "<client>", "<secret>",
  { authorityHost: AzureAuthorityHosts.AzureChina }
);
```

#### Imported: Bearer Token Provider

```typescript
import { DefaultAzureCredential, getBearerTokenProvider } from "@azure/identity";

const credential = new DefaultAzureCredential();

// Create a function that returns tokens
const getAccessToken = getBearerTokenProvider(
  credential,
  "https://cognitiveservices.azure.com/.default"
);

// Use with APIs that need bearer tokens
const token = await getAccessToken();
```

#### Imported: Key Types

```typescript
import type { 
  TokenCredential, 
  AccessToken, 
  GetTokenOptions 
} from "@azure/core-auth";

import {
  DefaultAzureCredential,
  DefaultAzureCredentialOptions,
  ManagedIdentityCredential,
  ClientSecretCredential,
  ClientCertificateCredential,
  InteractiveBrowserCredential,
  ChainedTokenCredential,
  AzureCliCredential,
  AzurePowerShellCredential,
  AzureDeveloperCliCredential,
  DeviceCodeCredential,
  AzureAuthorityHosts
} from "@azure/identity";
```

#### Imported: Custom Credential Implementation

```typescript
import type { TokenCredential, AccessToken, GetTokenOptions } from "@azure/core-auth";

class CustomCredential implements TokenCredential {
  async getToken(
    scopes: string | string[],
    options?: GetTokenOptions
  ): Promise<AccessToken | null> {
    // Custom token acquisition logic
    return {
      token: "<access-token>",
      expiresOnTimestamp: Date.now() + 3600000
    };
  }
}
```

#### Imported: Debugging

```typescript
import { setLogLevel, AzureLogger } from "@azure/logger";

setLogLevel("verbose");

// Custom log handler
AzureLogger.log = (...args) => {
  console.log("[Azure]", ...args);
};
```
