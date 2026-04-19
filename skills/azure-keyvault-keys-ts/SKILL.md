---
name: azure-keyvault-keys-ts
description: "Azure Key Vault Keys SDK for TypeScript workflow skill. Use this skill when the user needs Manage cryptographic keys using Azure Key Vault Keys SDK for JavaScript (@azure/keyvault-keys). Use when creating, encrypting/decrypting, signing, or rotating keys and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-keyvault-keys-ts", "manage", "cryptographic", "keys", "using", "azure", "key", "vault"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure Key Vault Keys SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-keyvault-keys-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Key Vault Keys SDK for TypeScript Manage cryptographic keys with Azure Key Vault.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Secrets Operations, Keys Operations, Cryptographic Operations, Backup and Restore.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Manage cryptographic keys using Azure Key Vault Keys SDK for JavaScript (@azure/keyvault-keys). Use when creating, encrypting/decrypting, signing, or rotating keys.
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

1. bash # Keys SDK npm install @azure/keyvault-keys @azure/identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Keys SDK
npm install @azure/keyvault-keys @azure/identity
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
Use @azure-keyvault-keys-ts to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-keyvault-keys-ts against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-keyvault-keys-ts for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-keyvault-keys-ts using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-keyvault-keys-ts`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Authentication

```typescript
import { DefaultAzureCredential } from "@azure/identity";
import { KeyClient, CryptographyClient } from "@azure/keyvault-keys";

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
