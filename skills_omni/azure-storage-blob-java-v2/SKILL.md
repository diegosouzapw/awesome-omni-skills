---
name: "azure-storage-blob-java-v2"
description: "Azure Storage Blob SDK for Java workflow skill. Use this skill when the user needs Build blob storage applications using the Azure Storage Blob SDK for Java and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "azure-storage-blob-java-v2"
  - "azure-storage-blob-java"
  - "build"
  - "blob"
  - "storage"
  - "applications"
  - "using"
  - "the"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-19"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "azure-storage-blob-java-v2"
family_name: "Azure Storage Blob SDK for Java"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/azure-storage-blob-java-v2"
upstream_skill: "skills/azure-storage-blob-java-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "azure-storage-blob-java-v2"
---

# Azure Storage Blob SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-storage-blob-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Storage Blob SDK for Java Build blob storage applications using the Azure Storage Blob SDK for Java.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Core Patterns, Error Handling, Proxy Configuration, Environment Variables, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "Azure Blob Storage Java"
- "upload download blob"
- "blob container SDK"
- "storage streaming"
- "SAS token generation"
- "blob metadata properties"

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-storage-blob</artifactId> <version>12.33.0</version> </dependency>
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
    <artifactId>azure-storage-blob</artifactId>
    <version>12.33.0</version>
</dependency>
```

#### Imported: Client Creation

### BlobServiceClient

```java
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;

// With SAS token
BlobServiceClient serviceClient = new BlobServiceClientBuilder()
    .endpoint("<storage-account-url>")
    .sasToken("<sas-token>")
    .buildClient();

// With connection string
BlobServiceClient serviceClient = new BlobServiceClientBuilder()
    .connectionString("<connection-string>")
    .buildClient();
```

### With DefaultAzureCredential

```java
import com.azure.identity.DefaultAzureCredentialBuilder;

BlobServiceClient serviceClient = new BlobServiceClientBuilder()
    .endpoint("<storage-account-url>")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();
```

### BlobContainerClient

```java
import com.azure.storage.blob.BlobContainerClient;

// From service client
BlobContainerClient containerClient = serviceClient.getBlobContainerClient("mycontainer");

// Direct construction
BlobContainerClient containerClient = new BlobContainerClientBuilder()
    .connectionString("<connection-string>")
    .containerName("mycontainer")
    .buildClient();
```

### BlobClient

```java
import com.azure.storage.blob.BlobClient;

// From container client
BlobClient blobClient = containerClient.getBlobClient("myblob.txt");

// With directory structure
BlobClient blobClient = containerClient.getBlobClient("folder/subfolder/myblob.txt");

// Direct construction
BlobClient blobClient = new BlobClientBuilder()
    .connectionString("<connection-string>")
    .containerName("mycontainer")
    .blobName("myblob.txt")
    .buildClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-storage-blob-java-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-storage-blob-java-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-storage-blob-java-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-storage-blob-java-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-storage-blob-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Core Patterns

### Create Container

```java
// Create container
serviceClient.createBlobContainer("mycontainer");

// Create if not exists
BlobContainerClient container = serviceClient.createBlobContainerIfNotExists("mycontainer");

// From container client
containerClient.create();
containerClient.createIfNotExists();
```

### Upload Data

```java
import com.azure.core.util.BinaryData;

// Upload string
String data = "Hello, Azure Blob Storage!";
blobClient.upload(BinaryData.fromString(data));

// Upload with overwrite
blobClient.upload(BinaryData.fromString(data), true);
```

### Upload from File

```java
blobClient.uploadFromFile("local-file.txt");

// With overwrite
blobClient.uploadFromFile("local-file.txt", true);
```

### Upload from Stream

```java
import com.azure.storage.blob.specialized.BlockBlobClient;

BlockBlobClient blockBlobClient = blobClient.getBlockBlobClient();

try (ByteArrayInputStream dataStream = new ByteArrayInputStream(data.getBytes())) {
    blockBlobClient.upload(dataStream, data.length());
}
```

### Upload with Options

```java
import com.azure.storage.blob.models.BlobHttpHeaders;
import com.azure.storage.blob.options.BlobParallelUploadOptions;

BlobHttpHeaders headers = new BlobHttpHeaders()
    .setContentType("text/plain")
    .setCacheControl("max-age=3600");

Map<String, String> metadata = Map.of("author", "john", "version", "1.0");

try (InputStream stream = new FileInputStream("large-file.bin")) {
    BlobParallelUploadOptions options = new BlobParallelUploadOptions(stream)
        .setHeaders(headers)
        .setMetadata(metadata);

    blobClient.uploadWithResponse(options, null, Context.NONE);
}
```

### Upload if Not Exists

```java
import com.azure.storage.blob.models.BlobRequestConditions;

BlobParallelUploadOptions options = new BlobParallelUploadOptions(inputStream, length)
    .setRequestConditions(new BlobRequestConditions().setIfNoneMatch("*"));

blobClient.uploadWithResponse(options, null, Context.NONE);
```

### Download Data

```java
// Download to BinaryData
BinaryData content = blobClient.downloadContent();
String text = content.toString();

// Download to file
blobClient.downloadToFile("downloaded-file.txt");
```

### Download to Stream

```java
try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
    blobClient.downloadStream(outputStream);
    byte[] data = outputStream.toByteArray();
}
```

### Download with InputStream

```java
import com.azure.storage.blob.specialized.BlobInputStream;

try (BlobInputStream blobIS = blobClient.openInputStream()) {
    byte[] buffer = new byte[1024];
    int bytesRead;
    while ((bytesRead = blobIS.read(buffer)) != -1) {
        // Process buffer
    }
}
```

### Upload via OutputStream

```java
import com.azure.storage.blob.specialized.BlobOutputStream;

try (BlobOutputStream blobOS = blobClient.getBlockBlobClient().getBlobOutputStream()) {
    blobOS.write("Data to upload".getBytes());
}
```

### List Blobs

```java
import com.azure.storage.blob.models.BlobItem;

// List all blobs
for (BlobItem blobItem : containerClient.listBlobs()) {
    System.out.println("Blob: " + blobItem.getName());
}

// List with prefix (virtual directory)
import com.azure.storage.blob.models.ListBlobsOptions;

ListBlobsOptions options = new ListBlobsOptions().setPrefix("folder/");
for (BlobItem blobItem : containerClient.listBlobs(options, null)) {
    System.out.println("Blob: " + blobItem.getName());
}
```

### List Blobs by Hierarchy

```java
import com.azure.storage.blob.models.BlobListDetails;

String delimiter = "/";
ListBlobsOptions options = new ListBlobsOptions()
    .setPrefix("data/")
    .setDetails(new BlobListDetails().setRetrieveMetadata(true));

for (BlobItem item : containerClient.listBlobsByHierarchy(delimiter, options, null)) {
    if (item.isPrefix()) {
        System.out.println("Directory: " + item.getName());
    } else {
        System.out.println("Blob: " + item.getName());
    }
}
```

### Delete Blob

```java
blobClient.delete();

// Delete if exists
blobClient.deleteIfExists();

// Delete with snapshots
import com.azure.storage.blob.models.DeleteSnapshotsOptionType;
blobClient.deleteWithResponse(DeleteSnapshotsOptionType.INCLUDE, null, null, Context.NONE);
```

### Copy Blob

```java
import com.azure.storage.blob.models.BlobCopyInfo;
import com.azure.core.util.polling.SyncPoller;

// Async copy (for large blobs or cross-account)
SyncPoller<BlobCopyInfo, Void> poller = blobClient.beginCopy("<source-blob-url>", Duration.ofSeconds(1));
poller.waitForCompletion();

// Sync copy from URL (for same account)
blobClient.copyFromUrl("<source-blob-url>");
```

### Generate SAS Token

```java
import com.azure.storage.blob.sas.*;
import java.time.OffsetDateTime;

// Blob-level SAS
BlobSasPermission permissions = new BlobSasPermission().setReadPermission(true);
OffsetDateTime expiry = OffsetDateTime.now().plusDays(1);

BlobServiceSasSignatureValues sasValues = new BlobServiceSasSignatureValues(expiry, permissions);
String sasToken = blobClient.generateSas(sasValues);

// Container-level SAS
BlobContainerSasPermission containerPermissions = new BlobContainerSasPermission()
    .setReadPermission(true)
    .setListPermission(true);

BlobServiceSasSignatureValues containerSasValues = new BlobServiceSasSignatureValues(expiry, containerPermissions);
String containerSas = containerClient.generateSas(containerSasValues);
```

### Blob Properties and Metadata

```java
import com.azure.storage.blob.models.BlobProperties;

// Get properties
BlobProperties properties = blobClient.getProperties();
System.out.println("Size: " + properties.getBlobSize());
System.out.println("Content-Type: " + properties.getContentType());
System.out.println("Last Modified: " + properties.getLastModified());

// Set metadata
Map<String, String> metadata = Map.of("key1", "value1", "key2", "value2");
blobClient.setMetadata(metadata);

// Set HTTP headers
BlobHttpHeaders headers = new BlobHttpHeaders()
    .setContentType("application/json")
    .setCacheControl("max-age=86400");
blobClient.setHttpHeaders(headers);
```

### Lease Blob

```java
import com.azure.storage.blob.specialized.BlobLeaseClient;
import com.azure.storage.blob.specialized.BlobLeaseClientBuilder;

BlobLeaseClient leaseClient = new BlobLeaseClientBuilder()
    .blobClient(blobClient)
    .buildClient();

// Acquire lease (-1 for infinite)
String leaseId = leaseClient.acquireLease(60);

// Renew lease
leaseClient.renewLease();

// Release lease
leaseClient.releaseLease();
```

#### Imported: Error Handling

```java
import com.azure.storage.blob.models.BlobStorageException;

try {
    blobClient.download(outputStream);
} catch (BlobStorageException e) {
    System.out.println("Status: " + e.getStatusCode());
    System.out.println("Error code: " + e.getErrorCode());
    // 404 = Blob not found
    // 409 = Conflict (lease, etc.)
}
```

#### Imported: Proxy Configuration

```java
import com.azure.core.http.ProxyOptions;
import com.azure.core.http.netty.NettyAsyncHttpClientBuilder;
import java.net.InetSocketAddress;

ProxyOptions proxyOptions = new ProxyOptions(
    ProxyOptions.Type.HTTP,
    new InetSocketAddress("localhost", 8888));

BlobServiceClient client = new BlobServiceClientBuilder()
    .endpoint("<endpoint>")
    .sasToken("<sas-token>")
    .httpClient(new NettyAsyncHttpClientBuilder().proxy(proxyOptions).build())
    .buildClient();
```

#### Imported: Environment Variables

```bash
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...
AZURE_STORAGE_ACCOUNT_URL=https://<account>.blob.core.windows.net
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
