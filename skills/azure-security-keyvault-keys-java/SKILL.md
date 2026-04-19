---
name: azure-security-keyvault-keys-java
description: "Azure Key Vault Keys (Java) workflow skill. Use this skill when the user needs Azure Key Vault Keys Java SDK for cryptographic key management. Use when creating, managing, or using RSA/EC keys, performing encrypt/decrypt/sign/verify operations, or working with HSM-backed keys and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["azure-security-keyvault-keys-java", "azure", "key", "vault", "keys", "java", "sdk", "for"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure Key Vault Keys (Java)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-security-keyvault-keys-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Key Vault Keys (Java) Manage cryptographic keys and perform cryptographic operations in Azure Key Vault and Managed HSM.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Key Types, Create Keys, Get Key, Update Key Properties, List Keys.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "Key Vault keys Java", "cryptographic keys Java"
- "encrypt decrypt Java", "sign verify Java"
- "RSA key", "EC key", "HSM key"
- "key rotation", "wrap unwrap key"
- Use when the request clearly matches the imported source intent: Azure Key Vault Keys Java SDK for cryptographic key management. Use when creating, managing, or using RSA/EC keys, performing encrypt/decrypt/sign/verify operations, or working with HSM-backed keys.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-security-keyvault-keys</artifactId> <version>4.9.0</version> </dependency>
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
    <artifactId>azure-security-keyvault-keys</artifactId>
    <version>4.9.0</version>
</dependency>
```

#### Imported: Client Creation

```java
import com.azure.security.keyvault.keys.KeyClient;
import com.azure.security.keyvault.keys.KeyClientBuilder;
import com.azure.security.keyvault.keys.cryptography.CryptographyClient;
import com.azure.security.keyvault.keys.cryptography.CryptographyClientBuilder;
import com.azure.identity.DefaultAzureCredentialBuilder;

// Key management client
KeyClient keyClient = new KeyClientBuilder()
    .vaultUrl("https://<vault-name>.vault.azure.net")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();

// Async client
KeyAsyncClient keyAsyncClient = new KeyClientBuilder()
    .vaultUrl("https://<vault-name>.vault.azure.net")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildAsyncClient();

// Cryptography client (for encrypt/decrypt/sign/verify)
CryptographyClient cryptoClient = new CryptographyClientBuilder()
    .keyIdentifier("https://<vault-name>.vault.azure.net/keys/<key-name>/<key-version>")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-security-keyvault-keys-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-security-keyvault-keys-java against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-security-keyvault-keys-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-security-keyvault-keys-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use HSM Keys for Production - Set setHardwareProtected(true) for sensitive keys
- Enable Soft Delete - Protects against accidental deletion
- Key Rotation - Set up automatic rotation policies
- Least Privilege - Use separate keys for different operations
- Local Crypto When Possible - Use CryptographyClient with local key material to reduce round-trips
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use HSM Keys for Production** - Set `setHardwareProtected(true)` for sensitive keys
2. **Enable Soft Delete** - Protects against accidental deletion
3. **Key Rotation** - Set up automatic rotation policies
4. **Least Privilege** - Use separate keys for different operations
5. **Local Crypto When Possible** - Use `CryptographyClient` with local key material to reduce round-trips

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-security-keyvault-keys-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Key Types

| Type | Description |
|------|-------------|
| `RSA` | RSA key (2048, 3072, 4096 bits) |
| `RSA_HSM` | RSA key in HSM |
| `EC` | Elliptic Curve key |
| `EC_HSM` | Elliptic Curve key in HSM |
| `OCT` | Symmetric key (Managed HSM only) |
| `OCT_HSM` | Symmetric key in HSM |

#### Imported: Create Keys

### Create RSA Key

```java
import com.azure.security.keyvault.keys.models.*;

// Simple RSA key
KeyVaultKey rsaKey = keyClient.createRsaKey(new CreateRsaKeyOptions("my-rsa-key")
    .setKeySize(2048));

System.out.println("Key name: " + rsaKey.getName());
System.out.println("Key ID: " + rsaKey.getId());
System.out.println("Key type: " + rsaKey.getKeyType());

// RSA key with options
KeyVaultKey rsaKeyWithOptions = keyClient.createRsaKey(new CreateRsaKeyOptions("my-rsa-key-2")
    .setKeySize(4096)
    .setExpiresOn(OffsetDateTime.now().plusYears(1))
    .setNotBefore(OffsetDateTime.now())
    .setEnabled(true)
    .setKeyOperations(KeyOperation.ENCRYPT, KeyOperation.DECRYPT, 
                       KeyOperation.WRAP_KEY, KeyOperation.UNWRAP_KEY)
    .setTags(Map.of("environment", "production")));

// HSM-backed RSA key
KeyVaultKey hsmKey = keyClient.createRsaKey(new CreateRsaKeyOptions("my-hsm-key")
    .setKeySize(2048)
    .setHardwareProtected(true));
```

### Create EC Key

```java
// EC key with P-256 curve
KeyVaultKey ecKey = keyClient.createEcKey(new CreateEcKeyOptions("my-ec-key")
    .setCurveName(KeyCurveName.P_256));

// EC key with other curves
KeyVaultKey ecKey384 = keyClient.createEcKey(new CreateEcKeyOptions("my-ec-key-384")
    .setCurveName(KeyCurveName.P_384));

KeyVaultKey ecKey521 = keyClient.createEcKey(new CreateEcKeyOptions("my-ec-key-521")
    .setCurveName(KeyCurveName.P_521));

// HSM-backed EC key
KeyVaultKey ecHsmKey = keyClient.createEcKey(new CreateEcKeyOptions("my-ec-hsm-key")
    .setCurveName(KeyCurveName.P_256)
    .setHardwareProtected(true));
```

### Create Symmetric Key (Managed HSM only)

```java
KeyVaultKey octKey = keyClient.createOctKey(new CreateOctKeyOptions("my-symmetric-key")
    .setKeySize(256)
    .setHardwareProtected(true));
```

#### Imported: Get Key

```java
// Get latest version
KeyVaultKey key = keyClient.getKey("my-key");

// Get specific version
KeyVaultKey keyVersion = keyClient.getKey("my-key", "<version-id>");

// Get only key properties (no key material)
KeyProperties keyProps = keyClient.getKey("my-key").getProperties();
```

#### Imported: Update Key Properties

```java
KeyVaultKey key = keyClient.getKey("my-key");

// Update properties
key.getProperties()
    .setEnabled(false)
    .setExpiresOn(OffsetDateTime.now().plusMonths(6))
    .setTags(Map.of("status", "archived"));

KeyVaultKey updatedKey = keyClient.updateKeyProperties(key.getProperties(),
    KeyOperation.ENCRYPT, KeyOperation.DECRYPT);
```

#### Imported: List Keys

```java
import com.azure.core.util.paging.PagedIterable;

// List all keys
for (KeyProperties keyProps : keyClient.listPropertiesOfKeys()) {
    System.out.println("Key: " + keyProps.getName());
    System.out.println("  Enabled: " + keyProps.isEnabled());
    System.out.println("  Created: " + keyProps.getCreatedOn());
}

// List key versions
for (KeyProperties version : keyClient.listPropertiesOfKeyVersions("my-key")) {
    System.out.println("Version: " + version.getVersion());
    System.out.println("Created: " + version.getCreatedOn());
}
```

#### Imported: Delete Key

```java
import com.azure.core.util.polling.SyncPoller;

// Begin delete (soft-delete enabled vaults)
SyncPoller<DeletedKey, Void> deletePoller = keyClient.beginDeleteKey("my-key");

// Wait for deletion
DeletedKey deletedKey = deletePoller.poll().getValue();
System.out.println("Deleted: " + deletedKey.getDeletedOn());

deletePoller.waitForCompletion();

// Purge deleted key (permanent deletion)
keyClient.purgeDeletedKey("my-key");

// Recover deleted key
SyncPoller<KeyVaultKey, Void> recoverPoller = keyClient.beginRecoverDeletedKey("my-key");
recoverPoller.waitForCompletion();
```

#### Imported: Cryptographic Operations

### Encrypt/Decrypt

```java
import com.azure.security.keyvault.keys.cryptography.models.*;

CryptographyClient cryptoClient = new CryptographyClientBuilder()
    .keyIdentifier("https://<vault>.vault.azure.net/keys/<key-name>")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();

byte[] plaintext = "Hello, World!".getBytes(StandardCharsets.UTF_8);

// Encrypt
EncryptResult encryptResult = cryptoClient.encrypt(EncryptionAlgorithm.RSA_OAEP, plaintext);
byte[] ciphertext = encryptResult.getCipherText();
System.out.println("Ciphertext length: " + ciphertext.length);

// Decrypt
DecryptResult decryptResult = cryptoClient.decrypt(EncryptionAlgorithm.RSA_OAEP, ciphertext);
String decrypted = new String(decryptResult.getPlainText(), StandardCharsets.UTF_8);
System.out.println("Decrypted: " + decrypted);
```

### Sign/Verify

```java
import java.security.MessageDigest;

// Create digest of data
byte[] data = "Data to sign".getBytes(StandardCharsets.UTF_8);
MessageDigest md = MessageDigest.getInstance("SHA-256");
byte[] digest = md.digest(data);

// Sign
SignResult signResult = cryptoClient.sign(SignatureAlgorithm.RS256, digest);
byte[] signature = signResult.getSignature();

// Verify
VerifyResult verifyResult = cryptoClient.verify(SignatureAlgorithm.RS256, digest, signature);
System.out.println("Valid signature: " + verifyResult.isValid());
```

### Wrap/Unwrap Key

```java
// Key to wrap (e.g., AES key)
byte[] keyToWrap = new byte[32];  // 256-bit key
new SecureRandom().nextBytes(keyToWrap);

// Wrap
WrapResult wrapResult = cryptoClient.wrapKey(KeyWrapAlgorithm.RSA_OAEP, keyToWrap);
byte[] wrappedKey = wrapResult.getEncryptedKey();

// Unwrap
UnwrapResult unwrapResult = cryptoClient.unwrapKey(KeyWrapAlgorithm.RSA_OAEP, wrappedKey);
byte[] unwrappedKey = unwrapResult.getKey();
```

#### Imported: Backup and Restore

```java
// Backup
byte[] backup = keyClient.backupKey("my-key");

// Save backup to file
Files.write(Paths.get("key-backup.blob"), backup);

// Restore
byte[] backupData = Files.readAllBytes(Paths.get("key-backup.blob"));
KeyVaultKey restoredKey = keyClient.restoreKeyBackup(backupData);
```

#### Imported: Key Rotation

```java
// Rotate to new version
KeyVaultKey rotatedKey = keyClient.rotateKey("my-key");
System.out.println("New version: " + rotatedKey.getProperties().getVersion());

// Set rotation policy
KeyRotationPolicy policy = new KeyRotationPolicy()
    .setExpiresIn("P90D")  // Expire after 90 days
    .setLifetimeActions(Arrays.asList(
        new KeyRotationLifetimeAction(KeyRotationPolicyAction.ROTATE)
            .setTimeBeforeExpiry("P30D")));  // Rotate 30 days before expiry

keyClient.updateKeyRotationPolicy("my-key", policy);

// Get rotation policy
KeyRotationPolicy currentPolicy = keyClient.getKeyRotationPolicy("my-key");
```

#### Imported: Import Key

```java
import com.azure.security.keyvault.keys.models.ImportKeyOptions;
import com.azure.security.keyvault.keys.models.JsonWebKey;

// Import existing key material
JsonWebKey jsonWebKey = new JsonWebKey()
    .setKeyType(KeyType.RSA)
    .setN(modulus)
    .setE(exponent)
    .setD(privateExponent)
    // ... other RSA components
    ;

ImportKeyOptions importOptions = new ImportKeyOptions("imported-key", jsonWebKey)
    .setHardwareProtected(false);

KeyVaultKey importedKey = keyClient.importKey(importOptions);
```

#### Imported: Encryption Algorithms

| Algorithm | Key Type | Description |
|-----------|----------|-------------|
| `RSA1_5` | RSA | RSAES-PKCS1-v1_5 |
| `RSA_OAEP` | RSA | RSAES with OAEP (recommended) |
| `RSA_OAEP_256` | RSA | RSAES with OAEP using SHA-256 |
| `A128GCM` | OCT | AES-GCM 128-bit |
| `A256GCM` | OCT | AES-GCM 256-bit |
| `A128CBC` | OCT | AES-CBC 128-bit |
| `A256CBC` | OCT | AES-CBC 256-bit |

#### Imported: Signature Algorithms

| Algorithm | Key Type | Hash |
|-----------|----------|------|
| `RS256` | RSA | SHA-256 |
| `RS384` | RSA | SHA-384 |
| `RS512` | RSA | SHA-512 |
| `PS256` | RSA | SHA-256 (PSS) |
| `ES256` | EC P-256 | SHA-256 |
| `ES384` | EC P-384 | SHA-384 |
| `ES512` | EC P-521 | SHA-512 |

#### Imported: Error Handling

```java
import com.azure.core.exception.HttpResponseException;
import com.azure.core.exception.ResourceNotFoundException;

try {
    KeyVaultKey key = keyClient.getKey("non-existent-key");
} catch (ResourceNotFoundException e) {
    System.out.println("Key not found: " + e.getMessage());
} catch (HttpResponseException e) {
    System.out.println("HTTP error " + e.getResponse().getStatusCode());
    System.out.println("Message: " + e.getMessage());
}
```

#### Imported: Environment Variables

```bash
AZURE_KEYVAULT_URL=https://<vault-name>.vault.azure.net
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
