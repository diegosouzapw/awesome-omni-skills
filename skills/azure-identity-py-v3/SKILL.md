---
name: azure-identity-py-v3
description: "Azure Identity SDK for Python workflow skill. Use this skill when the user needs Azure Identity SDK for Python authentication. Use for DefaultAzureCredential, managed identity, service principals, and token caching and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["azure-identity-py-v3", "azure-identity-py", "azure", "identity", "sdk", "for", "python", "authentication"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure Identity SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-bundle-azure-ai-cloud/skills/azure-identity-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Identity SDK for Python Authentication library for Azure SDK clients using Microsoft Entra ID (formerly Azure AD).

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, DefaultAzureCredential, Specific Credential Types, Credential Types Table, Getting Tokens Directly, Async Client.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Identity SDK for Python authentication. Use for DefaultAzureCredential, managed identity, service principals, and token caching.
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

1. bash pip install azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-identity
```

#### Imported: Environment Variables

```bash
# Service Principal (for production/CI)
AZURE_TENANT_ID=<your-tenant-id>
AZURE_CLIENT_ID=<your-client-id>
AZURE_CLIENT_SECRET=<your-client-secret>

# User-assigned Managed Identity (optional)
AZURE_CLIENT_ID=<managed-identity-client-id>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-identity-py-v3 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-identity-py-v3/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-identity-py-v3/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-identity-py-v3 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use DefaultAzureCredential for code that runs locally and in Azure
- Never hardcode credentials — use environment variables or managed identity
- Prefer managed identity in production Azure deployments
- Use ChainedTokenCredential when you need a custom credential order
- Close async credentials explicitly or use context managers
- Set AZURECLIENTID for user-assigned managed identities
- Exclude unused credentials to speed up authentication

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** for code that runs locally and in Azure
2. **Never hardcode credentials** — use environment variables or managed identity
3. **Prefer managed identity** in production Azure deployments
4. **Use ChainedTokenCredential** when you need a custom credential order
5. **Close async credentials** explicitly or use context managers
6. **Set AZURE_CLIENT_ID** for user-assigned managed identities
7. **Exclude unused credentials** to speed up authentication

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-azure-ai-cloud/skills/azure-identity-py`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: DefaultAzureCredential

The recommended credential for most scenarios. Tries multiple authentication methods in order:

```python
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient

# Works in local dev AND production without code changes
credential = DefaultAzureCredential()

client = BlobServiceClient(
    account_url="https://<account>.blob.core.windows.net",
    credential=credential
)
```

### Credential Chain Order

| Order | Credential | Environment |
|-------|-----------|-------------|
| 1 | EnvironmentCredential | CI/CD, containers |
| 2 | WorkloadIdentityCredential | Kubernetes |
| 3 | ManagedIdentityCredential | Azure VMs, App Service, Functions |
| 4 | SharedTokenCacheCredential | Windows only |
| 5 | VisualStudioCodeCredential | VS Code with Azure extension |
| 6 | AzureCliCredential | `az login` |
| 7 | AzurePowerShellCredential | `Connect-AzAccount` |
| 8 | AzureDeveloperCliCredential | `azd auth login` |

### Customizing DefaultAzureCredential

```python
# Exclude credentials you don't need
credential = DefaultAzureCredential(
    exclude_environment_credential=True,
    exclude_shared_token_cache_credential=True,
    managed_identity_client_id="<user-assigned-mi-client-id>"  # For user-assigned MI
)

# Enable interactive browser (disabled by default)
credential = DefaultAzureCredential(
    exclude_interactive_browser_credential=False
)
```

#### Imported: Specific Credential Types

### ManagedIdentityCredential

For Azure-hosted resources (VMs, App Service, Functions, AKS):

```python
from azure.identity import ManagedIdentityCredential

# System-assigned managed identity
credential = ManagedIdentityCredential()

# User-assigned managed identity
credential = ManagedIdentityCredential(
    client_id="<user-assigned-mi-client-id>"
)
```

### ClientSecretCredential

For service principal with secret:

```python
from azure.identity import ClientSecretCredential

credential = ClientSecretCredential(
    tenant_id=os.environ["AZURE_TENANT_ID"],
    client_id=os.environ["AZURE_CLIENT_ID"],
    client_secret=os.environ["AZURE_CLIENT_SECRET"]
)
```

### AzureCliCredential

Uses the account from `az login`:

```python
from azure.identity import AzureCliCredential

credential = AzureCliCredential()
```

### ChainedTokenCredential

Custom credential chain:

```python
from azure.identity import (
    ChainedTokenCredential,
    ManagedIdentityCredential,
    AzureCliCredential
)

# Try managed identity first, fall back to CLI
credential = ChainedTokenCredential(
    ManagedIdentityCredential(client_id="<user-assigned-mi-client-id>"),
    AzureCliCredential()
)
```

#### Imported: Credential Types Table

| Credential | Use Case | Auth Method |
|------------|----------|-------------|
| `DefaultAzureCredential` | Most scenarios | Auto-detect |
| `ManagedIdentityCredential` | Azure-hosted apps | Managed Identity |
| `ClientSecretCredential` | Service principal | Client secret |
| `ClientCertificateCredential` | Service principal | Certificate |
| `AzureCliCredential` | Local development | Azure CLI |
| `AzureDeveloperCliCredential` | Local development | Azure Developer CLI |
| `InteractiveBrowserCredential` | User sign-in | Browser OAuth |
| `DeviceCodeCredential` | Headless/SSH | Device code flow |

#### Imported: Getting Tokens Directly

```python
from azure.identity import DefaultAzureCredential

credential = DefaultAzureCredential()

# Get token for a specific scope
token = credential.get_token("https://management.azure.com/.default")
print(f"Token expires: {token.expires_on}")

# For Azure Database for PostgreSQL
token = credential.get_token("https://ossrdbms-aad.database.windows.net/.default")
```

#### Imported: Async Client

```python
from azure.identity.aio import DefaultAzureCredential
from azure.storage.blob.aio import BlobServiceClient

async def main():
    credential = DefaultAzureCredential()
    
    async with BlobServiceClient(
        account_url="https://<account>.blob.core.windows.net",
        credential=credential
    ) as client:
        # ... async operations
        pass
    
    await credential.close()
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
