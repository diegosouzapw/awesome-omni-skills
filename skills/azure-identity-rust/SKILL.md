---
name: azure-identity-rust
description: "Azure Identity SDK for Rust workflow skill. Use this skill when the user needs Azure Identity SDK for Rust authentication. Use for DeveloperToolsCredential, ManagedIdentityCredential, ClientSecretCredential, and token-based authentication and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["azure-identity-rust", "azure", "identity", "sdk", "for", "rust", "authentication", "use"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Azure Identity SDK for Rust

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-identity-rust` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Identity SDK for Rust Authentication library for Azure SDK clients using Microsoft Entra ID (formerly Azure AD).

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, DeveloperToolsCredential, Credential Types, ManagedIdentityCredential, ClientSecretCredential, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Identity SDK for Rust authentication. Use for DeveloperToolsCredential, ManagedIdentityCredential, ClientSecretCredential, and token-based authentication.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. sh cargo add azure_identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```sh
cargo add azure_identity
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
Use @azure-identity-rust to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-identity-rust against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-identity-rust for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-identity-rust using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DeveloperToolsCredential for local dev — automatically picks up Azure CLI
- Use ManagedIdentityCredential in production — no secrets to manage
- Clone credentials — credentials are Arc-wrapped and cheap to clone
- Reuse credential instances — same credential can be used with multiple clients
- Use tokio feature — cargo add azure_identity --features tokio
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `DeveloperToolsCredential` for local dev** — automatically picks up Azure CLI
2. **Use `ManagedIdentityCredential` in production** — no secrets to manage
3. **Clone credentials** — credentials are `Arc`-wrapped and cheap to clone
4. **Reuse credential instances** — same credential can be used with multiple clients
5. **Use `tokio` feature** — `cargo add azure_identity --features tokio`

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-identity-rust`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Links

| Resource | Link |
|----------|------|
| API Reference | https://docs.rs/azure_identity |
| Source Code | https://github.com/Azure/azure-sdk-for-rust/tree/main/sdk/identity/azure_identity |
| crates.io | https://crates.io/crates/azure_identity |

#### Imported: DeveloperToolsCredential

The recommended credential for local development. Tries developer tools in order (Azure CLI, Azure Developer CLI):

```rust
use azure_identity::DeveloperToolsCredential;
use azure_security_keyvault_secrets::SecretClient;

let credential = DeveloperToolsCredential::new(None)?;
let client = SecretClient::new(
    "https://my-vault.vault.azure.net/",
    credential.clone(),
    None,
)?;
```

### Credential Chain Order

| Order | Credential | Environment |
|-------|-----------|-------------|
| 1 | AzureCliCredential | `az login` |
| 2 | AzureDeveloperCliCredential | `azd auth login` |

#### Imported: Credential Types

| Credential | Usage |
|------------|-------|
| `DeveloperToolsCredential` | Local development - tries CLI tools |
| `ManagedIdentityCredential` | Azure VMs, App Service, Functions, AKS |
| `WorkloadIdentityCredential` | Kubernetes workload identity |
| `ClientSecretCredential` | Service principal with secret |
| `ClientCertificateCredential` | Service principal with certificate |
| `AzureCliCredential` | Direct Azure CLI auth |
| `AzureDeveloperCliCredential` | Direct azd CLI auth |
| `AzurePipelinesCredential` | Azure Pipelines service connection |
| `ClientAssertionCredential` | Custom assertions (federated identity) |

#### Imported: ManagedIdentityCredential

For Azure-hosted resources:

```rust
use azure_identity::ManagedIdentityCredential;

// System-assigned managed identity
let credential = ManagedIdentityCredential::new(None)?;

// User-assigned managed identity
let options = ManagedIdentityCredentialOptions {
    client_id: Some("<user-assigned-mi-client-id>".into()),
    ..Default::default()
};
let credential = ManagedIdentityCredential::new(Some(options))?;
```

#### Imported: ClientSecretCredential

For service principal with secret:

```rust
use azure_identity::ClientSecretCredential;

let credential = ClientSecretCredential::new(
    "<tenant-id>".into(),
    "<client-id>".into(),
    "<client-secret>".into(),
    None,
)?;
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
