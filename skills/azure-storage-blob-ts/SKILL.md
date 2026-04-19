---
name: azure-storage-blob-ts
description: "@azure/storage-blob (TypeScript/JavaScript) workflow skill. Use this skill when the user needs Azure Blob Storage JavaScript/TypeScript SDK (@azure/storage-blob) for blob operations. Use for uploading, downloading, listing, and managing blobs and containers and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["azure-storage-blob-ts", "azure", "blob", "storage", "javascript", "typescript", "sdk", "storage-blob"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# @azure/storage-blob (TypeScript/JavaScript)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-storage-blob-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# @azure/storage-blob (TypeScript/JavaScript) SDK for Azure Blob Storage operations — upload, download, list, and manage blobs and containers.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Container Operations, Blob Operations, Blob Properties & Metadata.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Blob Storage JavaScript/TypeScript SDK (@azure/storage-blob) for blob operations. Use for uploading, downloading, listing, and managing blobs and containers.
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

1. bash npm install @azure/storage-blob @azure/identity Current Version: 12.x Node.js: >= 18.0.0
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/storage-blob @azure/identity
```

**Current Version**: 12.x  
**Node.js**: >= 18.0.0

#### Imported: Environment Variables

```bash
AZURE_STORAGE_ACCOUNT_NAME=<account-name>
AZURE_STORAGE_ACCOUNT_KEY=<account-key>
# OR connection string
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-storage-blob-ts to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-storage-blob-ts against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-storage-blob-ts for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-storage-blob-ts using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultAzureCredential — Prefer AAD over connection strings/keys
- Use streaming for large files — uploadStream/downloadToFile for files > 256MB
- Set appropriate content types — Use setHTTPHeaders for correct MIME types
- Use SAS tokens for client access — Generate short-lived tokens for browser uploads
- Handle errors gracefully — Check RestError.statusCode for specific handling
- Use IfNotExists methods* — For idempotent container/blob creation
- Close clients — Not required but good practice in long-running apps

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** — Prefer AAD over connection strings/keys
2. **Use streaming for large files** — `uploadStream`/`downloadToFile` for files > 256MB
3. **Set appropriate content types** — Use `setHTTPHeaders` for correct MIME types
4. **Use SAS tokens for client access** — Generate short-lived tokens for browser uploads
5. **Handle errors gracefully** — Check `RestError.statusCode` for specific handling
6. **Use `*IfNotExists` methods** — For idempotent container/blob creation
7. **Close clients** — Not required but good practice in long-running apps

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-storage-blob-ts`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: TypeScript Types Reference

```typescript
import {
  // Clients
  BlobServiceClient,
  ContainerClient,
  BlobClient,
  BlockBlobClient,
  AppendBlobClient,
  PageBlobClient,

  // Authentication
  StorageSharedKeyCredential,
  AnonymousCredential,

  // SAS
  BlobSASPermissions,
  ContainerSASPermissions,
  AccountSASPermissions,
  AccountSASServices,
  AccountSASResourceTypes,
  generateBlobSASQueryParameters,
  generateAccountSASQueryParameters,

  // Options & Responses
  BlobDownloadResponseParsed,
  BlobUploadCommonResponse,
  ContainerCreateResponse,
  BlobItem,
  ContainerItem,

  // Errors
  RestError,
} from "@azure/storage-blob";
```

#### Imported: Authentication

### DefaultAzureCredential (Recommended)

```typescript
import { BlobServiceClient } from "@azure/storage-blob";
import { DefaultAzureCredential } from "@azure/identity";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const client = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  new DefaultAzureCredential()
);
```

### Connection String

```typescript
import { BlobServiceClient } from "@azure/storage-blob";

const client = BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING!
);
```

### StorageSharedKeyCredential (Node.js only)

```typescript
import { BlobServiceClient, StorageSharedKeyCredential } from "@azure/storage-blob";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY!;

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const client = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
);
```

### SAS Token

```typescript
import { BlobServiceClient } from "@azure/storage-blob";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const sasToken = process.env.AZURE_STORAGE_SAS_TOKEN!; // starts with "?"

const client = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net${sasToken}`
);
```

#### Imported: Client Hierarchy

```
BlobServiceClient (account level)
└── ContainerClient (container level)
    └── BlobClient (blob level)
        ├── BlockBlobClient (block blobs - most common)
        ├── AppendBlobClient (append-only blobs)
        └── PageBlobClient (page blobs - VHDs)
```

#### Imported: Container Operations

### Create Container

```typescript
const containerClient = client.getContainerClient("my-container");
await containerClient.create();

// Or create if not exists
await containerClient.createIfNotExists();
```

### List Containers

```typescript
for await (const container of client.listContainers()) {
  console.log(container.name);
}

// With prefix filter
for await (const container of client.listContainers({ prefix: "logs-" })) {
  console.log(container.name);
}
```

### Delete Container

```typescript
await containerClient.delete();
// Or delete if exists
await containerClient.deleteIfExists();
```

#### Imported: Blob Operations

### Upload Blob (Simple)

```typescript
const containerClient = client.getContainerClient("my-container");
const blockBlobClient = containerClient.getBlockBlobClient("my-file.txt");

// Upload string
await blockBlobClient.upload("Hello, World!", 13);

// Upload Buffer
const buffer = Buffer.from("Hello, World!");
await blockBlobClient.upload(buffer, buffer.length);
```

### Upload from File (Node.js only)

```typescript
const blockBlobClient = containerClient.getBlockBlobClient("uploaded-file.txt");
await blockBlobClient.uploadFile("/path/to/local/file.txt");
```

### Upload from Stream (Node.js only)

```typescript
import * as fs from "fs";

const blockBlobClient = containerClient.getBlockBlobClient("streamed-file.txt");
const readStream = fs.createReadStream("/path/to/local/file.txt");

await blockBlobClient.uploadStream(readStream, 4 * 1024 * 1024, 5, {
  // bufferSize: 4MB, maxConcurrency: 5
  onProgress: (progress) => console.log(`Uploaded ${progress.loadedBytes} bytes`),
});
```

### Upload from Browser

```typescript
const blockBlobClient = containerClient.getBlockBlobClient("browser-upload.txt");

// From File input
const fileInput = document.getElementById("fileInput") as HTMLInputElement;
const file = fileInput.files![0];
await blockBlobClient.uploadData(file);

// From Blob/ArrayBuffer
const arrayBuffer = new ArrayBuffer(1024);
await blockBlobClient.uploadData(arrayBuffer);
```

### Download Blob

```typescript
const blobClient = containerClient.getBlobClient("my-file.txt");
const downloadResponse = await blobClient.download();

// Read as string (browser & Node.js)
const downloaded = await streamToText(downloadResponse.readableStreamBody!);

async function streamToText(readable: NodeJS.ReadableStream): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of readable) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString("utf-8");
}
```

### Download to File (Node.js only)

```typescript
const blockBlobClient = containerClient.getBlockBlobClient("my-file.txt");
await blockBlobClient.downloadToFile("/path/to/local/destination.txt");
```

### Download to Buffer (Node.js only)

```typescript
const blockBlobClient = containerClient.getBlockBlobClient("my-file.txt");
const buffer = await blockBlobClient.downloadToBuffer();
console.log(buffer.toString());
```

### List Blobs

```typescript
// List all blobs
for await (const blob of containerClient.listBlobsFlat()) {
  console.log(blob.name, blob.properties.contentLength);
}

// List with prefix
for await (const blob of containerClient.listBlobsFlat({ prefix: "logs/" })) {
  console.log(blob.name);
}

// List by hierarchy (virtual directories)
for await (const item of containerClient.listBlobsByHierarchy("/")) {
  if (item.kind === "prefix") {
    console.log(`Directory: ${item.name}`);
  } else {
    console.log(`Blob: ${item.name}`);
  }
}
```

### Delete Blob

```typescript
const blobClient = containerClient.getBlobClient("my-file.txt");
await blobClient.delete();

// Delete if exists
await blobClient.deleteIfExists();

// Delete with snapshots
await blobClient.delete({ deleteSnapshots: "include" });
```

### Copy Blob

```typescript
const sourceBlobClient = containerClient.getBlobClient("source.txt");
const destBlobClient = containerClient.getBlobClient("destination.txt");

// Start copy operation
const copyPoller = await destBlobClient.beginCopyFromURL(sourceBlobClient.url);
await copyPoller.pollUntilDone();
```

#### Imported: Blob Properties & Metadata

### Get Properties

```typescript
const blobClient = containerClient.getBlobClient("my-file.txt");
const properties = await blobClient.getProperties();

console.log("Content-Type:", properties.contentType);
console.log("Content-Length:", properties.contentLength);
console.log("Last Modified:", properties.lastModified);
console.log("ETag:", properties.etag);
```

### Set Metadata

```typescript
await blobClient.setMetadata({
  author: "John Doe",
  category: "documents",
});
```

### Set HTTP Headers

```typescript
await blobClient.setHTTPHeaders({
  blobContentType: "text/plain",
  blobCacheControl: "max-age=3600",
  blobContentDisposition: "attachment; filename=download.txt",
});
```

#### Imported: SAS Token Generation (Node.js only)

### Generate Blob SAS

```typescript
import {
  BlobSASPermissions,
  generateBlobSASQueryParameters,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

const sasToken = generateBlobSASQueryParameters(
  {
    containerName: "my-container",
    blobName: "my-file.txt",
    permissions: BlobSASPermissions.parse("r"), // read only
    startsOn: new Date(),
    expiresOn: new Date(Date.now() + 3600 * 1000), // 1 hour
  },
  sharedKeyCredential
).toString();

const sasUrl = `https://${accountName}.blob.core.windows.net/my-container/my-file.txt?${sasToken}`;
```

### Generate Container SAS

```typescript
import { ContainerSASPermissions, generateBlobSASQueryParameters } from "@azure/storage-blob";

const sasToken = generateBlobSASQueryParameters(
  {
    containerName: "my-container",
    permissions: ContainerSASPermissions.parse("racwdl"), // read, add, create, write, delete, list
    expiresOn: new Date(Date.now() + 24 * 3600 * 1000), // 24 hours
  },
  sharedKeyCredential
).toString();
```

### Generate Account SAS

```typescript
import {
  AccountSASPermissions,
  AccountSASResourceTypes,
  AccountSASServices,
  generateAccountSASQueryParameters,
} from "@azure/storage-blob";

const sasToken = generateAccountSASQueryParameters(
  {
    services: AccountSASServices.parse("b").toString(), // blob
    resourceTypes: AccountSASResourceTypes.parse("sco").toString(), // service, container, object
    permissions: AccountSASPermissions.parse("rwdlacupi"), // all permissions
    expiresOn: new Date(Date.now() + 24 * 3600 * 1000),
  },
  sharedKeyCredential
).toString();
```

#### Imported: Blob Types

### Block Blob (Default)

Most common type for text and binary files.

```typescript
const blockBlobClient = containerClient.getBlockBlobClient("document.pdf");
await blockBlobClient.uploadFile("/path/to/document.pdf");
```

### Append Blob

Optimized for append operations (logs, audit trails).

```typescript
const appendBlobClient = containerClient.getAppendBlobClient("app.log");

// Create the append blob
await appendBlobClient.create();

// Append data
await appendBlobClient.appendBlock("Log entry 1\n", 12);
await appendBlobClient.appendBlock("Log entry 2\n", 12);
```

### Page Blob

Fixed-size blobs for random read/write (VHDs).

```typescript
const pageBlobClient = containerClient.getPageBlobClient("disk.vhd");

// Create 512-byte aligned page blob
await pageBlobClient.create(1024 * 1024); // 1MB

// Write pages (must be 512-byte aligned)
const buffer = Buffer.alloc(512);
await pageBlobClient.uploadPages(buffer, 0, 512);
```

#### Imported: Error Handling

```typescript
import { RestError } from "@azure/storage-blob";

try {
  await containerClient.create();
} catch (error) {
  if (error instanceof RestError) {
    switch (error.statusCode) {
      case 404:
        console.log("Container not found");
        break;
      case 409:
        console.log("Container already exists");
        break;
      case 403:
        console.log("Access denied");
        break;
      default:
        console.error(`Storage error ${error.statusCode}: ${error.message}`);
    }
  }
  throw error;
}
```

#### Imported: Platform Differences

| Feature | Node.js | Browser |
|---------|---------|---------|
| `StorageSharedKeyCredential` | ✅ | ❌ |
| `uploadFile()` | ✅ | ❌ |
| `uploadStream()` | ✅ | ❌ |
| `downloadToFile()` | ✅ | ❌ |
| `downloadToBuffer()` | ✅ | ❌ |
| `uploadData()` | ✅ | ✅ |
| SAS generation | ✅ | ❌ |
| DefaultAzureCredential | ✅ | ❌ |
| Anonymous/SAS access | ✅ | ✅ |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
