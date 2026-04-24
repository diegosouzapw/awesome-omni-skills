---
name: azure-security-keyvault-keys-dotnet-v2
description: "Azure.Security.KeyVault.Keys (.NET) workflow skill. Use this skill when the user needs Azure Key Vault Keys SDK for .NET. Client library for managing cryptographic keys in Azure Key Vault and Managed HSM. Use for key creation, rotation, encryption, decryption, signing, and verification and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["azure-security-keyvault-keys-dotnet-v2", "azure-security-keyvault-keys-dotnet", "azure", "key", "vault", "keys", "sdk", "for"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-24"
---

# Azure.Security.KeyVault.Keys (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-security-keyvault-keys-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.Security.KeyVault.Keys (.NET) Client library for managing cryptographic keys in Azure Key Vault and Managed HSM.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Client Hierarchy, Authentication, Key Management, Cryptographic Operations, Key Resolver.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Key Vault Keys SDK for .NET. Client library for managing cryptographic keys in Azure Key Vault and Managed HSM. Use for key creation, rotation, encryption, decryption, signing, and verification.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash dotnet add package Azure.Security.KeyVault.Keys dotnet add package Azure.Identity Current Version: 4.7.0 (stable)
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.Security.KeyVault.Keys
dotnet add package Azure.Identity
```

**Current Version**: 4.7.0 (stable)

#### Imported: Environment Variables

```bash
KEY_VAULT_NAME=<your-key-vault-name>
# Or full URI
AZURE_KEYVAULT_URL=https://<vault-name>.vault.azure.net
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-security-keyvault-keys-dotnet-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-security-keyvault-keys-dotnet-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-security-keyvault-keys-dotnet-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-security-keyvault-keys-dotnet-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use Managed Identity — Prefer DefaultAzureCredential over secrets
- Enable soft-delete — Protect against accidental deletion
- Use HSM-backed keys — Set HardwareProtected = true for sensitive keys
- Implement key rotation — Use automatic rotation policies
- Limit key operations — Only enable required KeyOperations
- Set expiration dates — Always set ExpiresOn for keys
- Use specific versions — Pin to versions in production

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Managed Identity** — Prefer `DefaultAzureCredential` over secrets
2. **Enable soft-delete** — Protect against accidental deletion
3. **Use HSM-backed keys** — Set `HardwareProtected = true` for sensitive keys
4. **Implement key rotation** — Use automatic rotation policies
5. **Limit key operations** — Only enable required `KeyOperations`
6. **Set expiration dates** — Always set `ExpiresOn` for keys
7. **Use specific versions** — Pin to versions in production
8. **Cache CryptographyClient** — Reuse for multiple operations

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-security-keyvault-keys-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-maps-search-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-messaging-webpubsub-java-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-messaging-webpubsubservice-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apicenter-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `KeyClient` | Key management operations |
| `CryptographyClient` | Cryptographic operations |
| `KeyResolver` | Resolve key ID to CryptographyClient |
| `KeyVaultKey` | Key with cryptographic material |
| `KeyProperties` | Key metadata (no crypto material) |
| `CreateRsaKeyOptions` | RSA key creation options |
| `CreateEcKeyOptions` | EC key creation options |
| `CreateOctKeyOptions` | Symmetric key options |
| `EncryptResult` | Encryption result |
| `DecryptResult` | Decryption result |
| `SignResult` | Signing result |
| `VerifyResult` | Verification result |
| `WrapResult` | Key wrap result |
| `UnwrapResult` | Key unwrap result |

#### Imported: Algorithms Reference

### Encryption Algorithms
| Algorithm | Key Type | Description |
|-----------|----------|-------------|
| `RsaOaep` | RSA | RSA-OAEP |
| `RsaOaep256` | RSA | RSA-OAEP-256 |
| `Rsa15` | RSA | RSA 1.5 (legacy) |
| `A128Gcm` | Oct | AES-128-GCM |
| `A256Gcm` | Oct | AES-256-GCM |

### Signature Algorithms
| Algorithm | Key Type | Description |
|-----------|----------|-------------|
| `RS256` | RSA | RSASSA-PKCS1-v1_5 SHA-256 |
| `RS384` | RSA | RSASSA-PKCS1-v1_5 SHA-384 |
| `RS512` | RSA | RSASSA-PKCS1-v1_5 SHA-512 |
| `PS256` | RSA | RSASSA-PSS SHA-256 |
| `ES256` | EC | ECDSA P-256 SHA-256 |
| `ES384` | EC | ECDSA P-384 SHA-384 |
| `ES512` | EC | ECDSA P-521 SHA-512 |

### Key Wrap Algorithms
| Algorithm | Key Type | Description |
|-----------|----------|-------------|
| `RsaOaep` | RSA | RSA-OAEP |
| `RsaOaep256` | RSA | RSA-OAEP-256 |
| `A128KW` | Oct | AES-128 Key Wrap |
| `A256KW` | Oct | AES-256 Key Wrap |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.Security.KeyVault.Keys |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.security.keyvault.keys |
| Quickstart | https://learn.microsoft.com/azure/key-vault/keys/quick-create-net |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/keyvault/Azure.Security.KeyVault.Keys |

#### Imported: Client Hierarchy

```
KeyClient (key management)
├── CreateKey / CreateRsaKey / CreateEcKey
├── GetKey / GetKeys
├── UpdateKeyProperties
├── DeleteKey / PurgeDeletedKey
├── BackupKey / RestoreKey
└── GetCryptographyClient() → CryptographyClient

CryptographyClient (cryptographic operations)
├── Encrypt / Decrypt
├── WrapKey / UnwrapKey
├── Sign / Verify
└── SignData / VerifyData

KeyResolver (key resolution)
└── Resolve(keyId) → CryptographyClient
```

#### Imported: Authentication

### DefaultAzureCredential (Recommended)

```csharp
using Azure.Identity;
using Azure.Security.KeyVault.Keys;

var keyVaultName = Environment.GetEnvironmentVariable("KEY_VAULT_NAME");
var kvUri = $"https://{keyVaultName}.vault.azure.net";

var client = new KeyClient(new Uri(kvUri), new DefaultAzureCredential());
```

### Service Principal

```csharp
var credential = new ClientSecretCredential(
    tenantId: "<tenant-id>",
    clientId: "<client-id>",
    clientSecret: "<client-secret>");

var client = new KeyClient(new Uri(kvUri), credential);
```

#### Imported: Key Management

### Create Keys

```csharp
// Create RSA key
KeyVaultKey rsaKey = await client.CreateKeyAsync("my-rsa-key", KeyType.Rsa);
Console.WriteLine($"Created key: {rsaKey.Name}, Type: {rsaKey.KeyType}");

// Create RSA key with options
var rsaOptions = new CreateRsaKeyOptions("my-rsa-key-2048")
{
    KeySize = 2048,
    HardwareProtected = false, // true for HSM-backed
    ExpiresOn = DateTimeOffset.UtcNow.AddYears(1),
    NotBefore = DateTimeOffset.UtcNow,
    Enabled = true
};
rsaOptions.KeyOperations.Add(KeyOperation.Encrypt);
rsaOptions.KeyOperations.Add(KeyOperation.Decrypt);

KeyVaultKey rsaKey2 = await client.CreateRsaKeyAsync(rsaOptions);

// Create EC key
var ecOptions = new CreateEcKeyOptions("my-ec-key")
{
    CurveName = KeyCurveName.P256,
    HardwareProtected = true // HSM-backed
};
KeyVaultKey ecKey = await client.CreateEcKeyAsync(ecOptions);

// Create Oct (symmetric) key for wrap/unwrap
var octOptions = new CreateOctKeyOptions("my-oct-key")
{
    KeySize = 256,
    HardwareProtected = true
};
KeyVaultKey octKey = await client.CreateOctKeyAsync(octOptions);
```

### Retrieve Keys

```csharp
// Get specific key (latest version)
KeyVaultKey key = await client.GetKeyAsync("my-rsa-key");
Console.WriteLine($"Key ID: {key.Id}");
Console.WriteLine($"Key Type: {key.KeyType}");
Console.WriteLine($"Version: {key.Properties.Version}");

// Get specific version
KeyVaultKey keyVersion = await client.GetKeyAsync("my-rsa-key", "version-id");

// List all keys
await foreach (KeyProperties keyProps in client.GetPropertiesOfKeysAsync())
{
    Console.WriteLine($"Key: {keyProps.Name}, Enabled: {keyProps.Enabled}");
}

// List key versions
await foreach (KeyProperties version in client.GetPropertiesOfKeyVersionsAsync("my-rsa-key"))
{
    Console.WriteLine($"Version: {version.Version}, Created: {version.CreatedOn}");
}
```

### Update Key Properties

```csharp
KeyVaultKey key = await client.GetKeyAsync("my-rsa-key");

key.Properties.ExpiresOn = DateTimeOffset.UtcNow.AddYears(2);
key.Properties.Tags["environment"] = "production";

KeyVaultKey updatedKey = await client.UpdateKeyPropertiesAsync(key.Properties);
```

### Delete and Purge Keys

```csharp
// Start delete operation
DeleteKeyOperation operation = await client.StartDeleteKeyAsync("my-rsa-key");

// Wait for deletion to complete (required before purge)
await operation.WaitForCompletionAsync();
Console.WriteLine($"Deleted key scheduled purge date: {operation.Value.ScheduledPurgeDate}");

// Purge immediately (if soft-delete is enabled)
await client.PurgeDeletedKeyAsync("my-rsa-key");

// Or recover deleted key
KeyVaultKey recoveredKey = await client.StartRecoverDeletedKeyAsync("my-rsa-key");
```

### Backup and Restore

```csharp
// Backup key
byte[] backup = await client.BackupKeyAsync("my-rsa-key");
await File.WriteAllBytesAsync("key-backup.bin", backup);

// Restore key
byte[] backupData = await File.ReadAllBytesAsync("key-backup.bin");
KeyVaultKey restoredKey = await client.RestoreKeyBackupAsync(backupData);
```

#### Imported: Cryptographic Operations

### Get CryptographyClient

```csharp
// From KeyClient
KeyVaultKey key = await client.GetKeyAsync("my-rsa-key");
CryptographyClient cryptoClient = client.GetCryptographyClient(
    key.Name,
    key.Properties.Version);

// Or create directly with key ID
CryptographyClient cryptoClient = new CryptographyClient(
    new Uri("https://myvault.vault.azure.net/keys/my-rsa-key/version"),
    new DefaultAzureCredential());
```

### Encrypt and Decrypt

```csharp
byte[] plaintext = Encoding.UTF8.GetBytes("Secret message to encrypt");

// Encrypt
EncryptResult encryptResult = await cryptoClient.EncryptAsync(
    EncryptionAlgorithm.RsaOaep256,
    plaintext);
Console.WriteLine($"Encrypted: {Convert.ToBase64String(encryptResult.Ciphertext)}");

// Decrypt
DecryptResult decryptResult = await cryptoClient.DecryptAsync(
    EncryptionAlgorithm.RsaOaep256,
    encryptResult.Ciphertext);
string decrypted = Encoding.UTF8.GetString(decryptResult.Plaintext);
Console.WriteLine($"Decrypted: {decrypted}");
```

### Wrap and Unwrap Keys

```csharp
// Key to wrap (e.g., AES key)
byte[] keyToWrap = new byte[32]; // 256-bit key
RandomNumberGenerator.Fill(keyToWrap);

// Wrap key
WrapResult wrapResult = await cryptoClient.WrapKeyAsync(
    KeyWrapAlgorithm.RsaOaep256,
    keyToWrap);

// Unwrap key
UnwrapResult unwrapResult = await cryptoClient.UnwrapKeyAsync(
    KeyWrapAlgorithm.RsaOaep256,
    wrapResult.EncryptedKey);
```

### Sign and Verify

```csharp
// Data to sign
byte[] data = Encoding.UTF8.GetBytes("Data to sign");

// Sign data (computes hash internally)
SignResult signResult = await cryptoClient.SignDataAsync(
    SignatureAlgorithm.RS256,
    data);

// Verify signature
VerifyResult verifyResult = await cryptoClient.VerifyDataAsync(
    SignatureAlgorithm.RS256,
    data,
    signResult.Signature);
Console.WriteLine($"Signature valid: {verifyResult.IsValid}");

// Or sign pre-computed hash
using var sha256 = SHA256.Create();
byte[] hash = sha256.ComputeHash(data);

SignResult signHashResult = await cryptoClient.SignAsync(
    SignatureAlgorithm.RS256,
    hash);
```

#### Imported: Key Resolver

```csharp
using Azure.Security.KeyVault.Keys.Cryptography;

var resolver = new KeyResolver(new DefaultAzureCredential());

// Resolve key by ID to get CryptographyClient
CryptographyClient cryptoClient = await resolver.ResolveAsync(
    new Uri("https://myvault.vault.azure.net/keys/my-key/version"));

// Use for encryption
EncryptResult result = await cryptoClient.EncryptAsync(
    EncryptionAlgorithm.RsaOaep256,
    plaintext);
```

#### Imported: Key Rotation

```csharp
// Rotate key (creates new version)
KeyVaultKey rotatedKey = await client.RotateKeyAsync("my-rsa-key");
Console.WriteLine($"New version: {rotatedKey.Properties.Version}");

// Get rotation policy
KeyRotationPolicy policy = await client.GetKeyRotationPolicyAsync("my-rsa-key");

// Update rotation policy
policy.ExpiresIn = "P90D"; // 90 days
policy.LifetimeActions.Add(new KeyRotationLifetimeAction
{
    Action = KeyRotationPolicyAction.Rotate,
    TimeBeforeExpiry = "P30D" // Rotate 30 days before expiry
});

await client.UpdateKeyRotationPolicyAsync("my-rsa-key", policy);
```

#### Imported: Error Handling

```csharp
using Azure;

try
{
    KeyVaultKey key = await client.GetKeyAsync("my-key");
}
catch (RequestFailedException ex) when (ex.Status == 404)
{
    Console.WriteLine("Key not found");
}
catch (RequestFailedException ex) when (ex.Status == 403)
{
    Console.WriteLine("Access denied - check RBAC permissions");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Key Vault error: {ex.Status} - {ex.Message}");
}
```

#### Imported: Required RBAC Roles

| Role | Permissions |
|------|-------------|
| Key Vault Crypto Officer | Full key management |
| Key Vault Crypto User | Use keys for crypto operations |
| Key Vault Reader | Read key metadata |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
