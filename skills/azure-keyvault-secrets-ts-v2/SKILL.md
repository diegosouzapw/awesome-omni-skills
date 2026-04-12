---
name: azure-keyvault-secrets-ts-v2
description: "Azure Key Vault Secrets SDK for TypeScript workflow skill. Use this skill when the user needs Manage secrets using Azure Key Vault Secrets SDK for JavaScript (@azure/keyvault-secrets). Use when storing and retrieving application secrets or configuration values and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-keyvault-secrets-ts-v2", "azure-keyvault-secrets-ts", "manage", "secrets", "using", "azure", "key", "vault"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Key Vault Secrets SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-keyvault-secrets-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Key Vault Secrets SDK for TypeScript Manage secrets with Azure Key Vault.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Secrets Operations, Keys Operations, Cryptographic Operations, Backup and Restore.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Manage secrets using Azure Key Vault Secrets SDK for JavaScript (@azure/keyvault-secrets). Use when storing and retrieving application secrets or configuration values.
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

1. bash # Secrets SDK npm install @azure/keyvault-secrets @azure/identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Secrets SDK
npm install @azure/keyvault-secrets @azure/identity
```

#### Imported: Environment Variables

```bash
KEY_VAULT_URL=https://<vault-name>.vault.azure.net
# Or
AZURE_KEYVAULT_NAME=<vault-name>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-keyvault-secrets-ts-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-keyvault-secrets-ts-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-keyvault-secrets-ts-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-keyvault-secrets-ts-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use DefaultAzureCredential - Works across dev and production
- Enable soft-delete - Required for production vaults
- Set expiration dates - On both keys and secrets
- Use key rotation policies - Automate key rotation
- Limit key operations - Only grant needed operations (encrypt, sign, etc.)
- Browser not supported - These SDKs are Node.js only
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** - Works across dev and production
2. **Enable soft-delete** - Required for production vaults
3. **Set expiration dates** - On both keys and secrets
4. **Use key rotation policies** - Automate key rotation
5. **Limit key operations** - Only grant needed operations (encrypt, sign, etc.)
6. **Browser not supported** - These SDKs are Node.js only

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-keyvault-secrets-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Authentication

```typescript
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();
const vaultUrl = `https://${process.env.AZURE_KEYVAULT_NAME}.vault.azure.net`;

const keyClient = new KeyClient(vaultUrl, credential);
const secretClient = new SecretClient(vaultUrl, credential);
```

#### Imported: Secrets Operations

### Create/Set Secret

```typescript
const secret = await secretClient.setSecret("MySecret", "secret-value");

// With attributes
const secretWithAttrs = await secretClient.setSecret("MySecret", "value", {
  enabled: true,
  expiresOn: new Date("2025-12-31"),
  contentType: "application/json",
  tags: { environment: "production" }
});
```

### Get Secret

```typescript
// Get latest version
const secret = await secretClient.getSecret("MySecret");
console.log(secret.value);

// Get specific version
const specificSecret = await secretClient.getSecret("MySecret", {
  version: secret.properties.version
});
```

### List Secrets

```typescript
for await (const secretProperties of secretClient.listPropertiesOfSecrets()) {
  console.log(secretProperties.name);
}

// List versions
for await (const version of secretClient.listPropertiesOfSecretVersions("MySecret")) {
  console.log(version.version);
}
```

### Delete Secret

```typescript
// Soft delete
const deletePoller = await secretClient.beginDeleteSecret("MySecret");
await deletePoller.pollUntilDone();

// Purge (permanent)
await secretClient.purgeDeletedSecret("MySecret");

// Recover
const recoverPoller = await secretClient.beginRecoverDeletedSecret("MySecret");
await recoverPoller.pollUntilDone();
```

#### Imported: Keys Operations

### Create Keys

```typescript
// Generic key
const key = await keyClient.createKey("MyKey", "RSA");

// RSA key with size
const rsaKey = await keyClient.createRsaKey("MyRsaKey", { keySize: 2048 });

// Elliptic Curve key
const ecKey = await keyClient.createEcKey("MyEcKey", { curve: "P-256" });

// With attributes
const keyWithAttrs = await keyClient.createKey("MyKey", "RSA", {
  enabled: true,
  expiresOn: new Date("2025-12-31"),
  tags: { purpose: "encryption" },
  keyOps: ["encrypt", "decrypt", "sign", "verify"]
});
```

### Get Key

```typescript
const key = await keyClient.getKey("MyKey");
console.log(key.name, key.keyType);
```

### List Keys

```typescript
for await (const keyProperties of keyClient.listPropertiesOfKeys()) {
  console.log(keyProperties.name);
}
```

### Rotate Key

```typescript
// Manual rotation
const rotatedKey = await keyClient.rotateKey("MyKey");

// Set rotation policy
await keyClient.updateKeyRotationPolicy("MyKey", {
  lifetimeActions: [{ action: "Rotate", timeBeforeExpiry: "P30D" }],
  expiresIn: "P90D"
});
```

### Delete Key

```typescript
const deletePoller = await keyClient.beginDeleteKey("MyKey");
await deletePoller.pollUntilDone();

// Purge
await keyClient.purgeDeletedKey("MyKey");
```

#### Imported: Cryptographic Operations

### Create CryptographyClient

```typescript
import { CryptographyClient } from "@azure/keyvault-keys";

// From key object
const cryptoClient = new CryptographyClient(key, credential);

// From key ID
const cryptoClient = new CryptographyClient(key.id!, credential);
```

### Encrypt/Decrypt

```typescript
// Encrypt
const encryptResult = await cryptoClient.encrypt({
  algorithm: "RSA-OAEP",
  plaintext: Buffer.from("My secret message")
});

// Decrypt
const decryptResult = await cryptoClient.decrypt({
  algorithm: "RSA-OAEP",
  ciphertext: encryptResult.result
});

console.log(decryptResult.result.toString());
```

### Sign/Verify

```typescript
import { createHash } from "node:crypto";

// Create digest
const hash = createHash("sha256").update("My message").digest();

// Sign
const signResult = await cryptoClient.sign("RS256", hash);

// Verify
const verifyResult = await cryptoClient.verify("RS256", hash, signResult.result);
console.log("Valid:", verifyResult.result);
```

### Wrap/Unwrap Keys

```typescript
// Wrap a key (encrypt it for storage)
const wrapResult = await cryptoClient.wrapKey("RSA-OAEP", Buffer.from("key-material"));

// Unwrap
const unwrapResult = await cryptoClient.unwrapKey("RSA-OAEP", wrapResult.result);
```

#### Imported: Backup and Restore

```typescript
// Backup
const keyBackup = await keyClient.backupKey("MyKey");
const secretBackup = await secretClient.backupSecret("MySecret");

// Restore (can restore to different vault)
const restoredKey = await keyClient.restoreKeyBackup(keyBackup!);
const restoredSecret = await secretClient.restoreSecretBackup(secretBackup!);
```

#### Imported: Key Types

```typescript
import {
  KeyClient,
  KeyVaultKey,
  KeyProperties,
  DeletedKey,
  CryptographyClient,
  KnownEncryptionAlgorithms,
  KnownSignatureAlgorithms
} from "@azure/keyvault-keys";

import {
  SecretClient,
  KeyVaultSecret,
  SecretProperties,
  DeletedSecret
} from "@azure/keyvault-secrets";
```

#### Imported: Error Handling

```typescript
try {
  const secret = await secretClient.getSecret("NonExistent");
} catch (error: any) {
  if (error.code === "SecretNotFound") {
    console.log("Secret does not exist");
  } else {
    throw error;
  }
}
```
