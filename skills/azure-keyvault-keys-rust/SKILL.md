---
name: azure-keyvault-keys-rust
description: "Azure Key Vault Keys SDK for Rust workflow skill. Use this skill when the user needs Azure Key Vault Keys SDK for Rust. Use for creating, managing, and using cryptographic keys. Triggers: \"keyvault keys rust\", \"KeyClient rust\", \"create key rust\", \"encrypt rust\", \"sign rust\" and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-keyvault-keys-rust", "azure", "key", "vault", "keys", "sdk", "for", "rust"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Key Vault Keys SDK for Rust

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-keyvault-keys-rust` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Key Vault Keys SDK for Rust Client library for Azure Key Vault Keys — secure storage and management of cryptographic keys.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Key Types, Core Operations, Cryptographic Operations, RBAC Permissions.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Key Vault Keys SDK for Rust. Use for creating, managing, and using cryptographic keys. Triggers: "keyvault keys rust", "KeyClient rust", "create key rust", "encrypt rust", "sign rust".
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

1. sh cargo add azuresecuritykeyvaultkeys azureidentity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```sh
cargo add azure_security_keyvault_keys azure_identity
```

#### Imported: Environment Variables

```bash
AZURE_KEYVAULT_URL=https://<vault-name>.vault.azure.net/
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-keyvault-keys-rust to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-keyvault-keys-rust/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-keyvault-keys-rust/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-keyvault-keys-rust using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use Entra ID auth — DeveloperToolsCredential for dev, ManagedIdentityCredential for production
- Use HSM keys for sensitive workloads — hardware-protected keys
- Use EC for signing — more efficient than RSA
- Use RSA for encryption — when encrypting data
- Backup keys — for disaster recovery
- Enable soft delete — required for production vaults
- Use key rotation — create new versions periodically

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Entra ID auth** — `DeveloperToolsCredential` for dev, `ManagedIdentityCredential` for production
2. **Use HSM keys for sensitive workloads** — hardware-protected keys
3. **Use EC for signing** — more efficient than RSA
4. **Use RSA for encryption** — when encrypting data
5. **Backup keys** — for disaster recovery
6. **Enable soft delete** — required for production vaults
7. **Use key rotation** — create new versions periodically

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-keyvault-keys-rust`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Reference Links

| Resource | Link |
|----------|------|
| API Reference | https://docs.rs/azure_security_keyvault_keys |
| Source Code | https://github.com/Azure/azure-sdk-for-rust/tree/main/sdk/keyvault/azure_security_keyvault_keys |
| crates.io | https://crates.io/crates/azure_security_keyvault_keys |

#### Imported: Authentication

```rust
use azure_identity::DeveloperToolsCredential;
use azure_security_keyvault_keys::KeyClient;

let credential = DeveloperToolsCredential::new(None)?;
let client = KeyClient::new(
    "https://<vault-name>.vault.azure.net/",
    credential.clone(),
    None,
)?;
```

#### Imported: Key Types

| Type | Description |
|------|-------------|
| RSA | RSA keys (2048, 3072, 4096 bits) |
| EC | Elliptic curve keys (P-256, P-384, P-521) |
| RSA-HSM | HSM-protected RSA keys |
| EC-HSM | HSM-protected EC keys |

#### Imported: Core Operations

### Get Key

```rust
let key = client
    .get_key("key-name", None)
    .await?
    .into_model()?;

println!("Key ID: {:?}", key.key.as_ref().map(|k| &k.kid));
```

### Create Key

```rust
use azure_security_keyvault_keys::models::{CreateKeyParameters, KeyType};

let params = CreateKeyParameters {
    kty: KeyType::Rsa,
    key_size: Some(2048),
    ..Default::default()
};

let key = client
    .create_key("key-name", params.try_into()?, None)
    .await?
    .into_model()?;
```

### Create EC Key

```rust
use azure_security_keyvault_keys::models::{CreateKeyParameters, KeyType, CurveName};

let params = CreateKeyParameters {
    kty: KeyType::Ec,
    curve: Some(CurveName::P256),
    ..Default::default()
};

let key = client
    .create_key("ec-key", params.try_into()?, None)
    .await?
    .into_model()?;
```

### Delete Key

```rust
client.delete_key("key-name", None).await?;
```

### List Keys

```rust
use azure_security_keyvault_keys::ResourceExt;
use futures::TryStreamExt;

let mut pager = client.list_key_properties(None)?.into_stream();
while let Some(key) = pager.try_next().await? {
    let name = key.resource_id()?.name;
    println!("Key: {}", name);
}
```

### Backup Key

```rust
let backup = client.backup_key("key-name", None).await?;
// Store backup.value safely
```

### Restore Key

```rust
use azure_security_keyvault_keys::models::RestoreKeyParameters;

let params = RestoreKeyParameters {
    key_bundle_backup: backup_bytes,
};

client.restore_key(params.try_into()?, None).await?;
```

#### Imported: Cryptographic Operations

Key Vault can perform crypto operations without exposing the private key:

```rust
// For cryptographic operations, use the key's operations
// Available operations depend on key type and permissions:
// - encrypt/decrypt (RSA)
// - sign/verify (RSA, EC)
// - wrapKey/unwrapKey (RSA)
```

#### Imported: RBAC Permissions

Assign these Key Vault roles:
- `Key Vault Crypto User` — use keys for crypto operations
- `Key Vault Crypto Officer` — full CRUD on keys
