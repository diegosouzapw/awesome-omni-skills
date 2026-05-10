---
name: "azure-storage-file-share-ts-v2"
description: "@azure/storage-file-share (TypeScript/JavaScript) workflow skill. Use this skill when the user needs Azure File Share JavaScript/TypeScript SDK (@azure/storage-file-share) for SMB file share operations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "azure-storage-file-share-ts-v2"
  - "azure-storage-file-share-ts"
  - "azure"
  - "file"
  - "share"
  - "javascript"
  - "typescript"
  - "sdk"
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
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "azure-storage-file-share-ts-v2"
family_name: "@azure/storage-file-share (TypeScript/JavaScript)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/azure-storage-file-share-ts-v2"
upstream_skill: "skills/azure-storage-file-share-ts-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "azure-storage-file-share-ts-v2"
---

# @azure/storage-file-share (TypeScript/JavaScript)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-storage-file-share-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# @azure/storage-file-share (TypeScript/JavaScript) SDK for Azure File Share operations — SMB file shares, directories, and file operations.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Share Operations, Directory Operations, File Operations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure File Share JavaScript/TypeScript SDK (@azure/storage-file-share) for SMB file share operations.
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

1. bash npm install @azure/storage-file-share @azure/identity Current Version: 12.x Node.js: >= 18.0.0
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/storage-file-share @azure/identity
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
Use @azure-storage-file-share-ts-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-storage-file-share-ts-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-storage-file-share-ts-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-storage-file-share-ts-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use connection strings for simplicity — Easiest setup for development
- Use DefaultAzureCredential for production — Enable managed identity in Azure
- Set quotas on shares — Prevent unexpected storage costs
- Use streaming for large files — uploadStream/downloadToFile for files > 256MB
- Use ranges for partial updates — More efficient than full file replacement
- Create snapshots before major changes — Point-in-time recovery
- Handle errors gracefully — Check RestError.statusCode for specific handling

### Imported Operating Notes

#### Imported: Best Practices

1. **Use connection strings for simplicity** — Easiest setup for development
2. **Use DefaultAzureCredential for production** — Enable managed identity in Azure
3. **Set quotas on shares** — Prevent unexpected storage costs
4. **Use streaming for large files** — `uploadStream`/`downloadToFile` for files > 256MB
5. **Use ranges for partial updates** — More efficient than full file replacement
6. **Create snapshots before major changes** — Point-in-time recovery
7. **Handle errors gracefully** — Check `RestError.statusCode` for specific handling
8. **Use `*IfExists` methods** — For idempotent operations

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-storage-file-share-ts`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: TypeScript Types Reference

```typescript
import {
  // Clients
  ShareServiceClient,
  ShareClient,
  ShareDirectoryClient,
  ShareFileClient,

  // Authentication
  StorageSharedKeyCredential,
  AnonymousCredential,

  // SAS
  FileSASPermissions,
  ShareSASPermissions,
  AccountSASPermissions,
  AccountSASServices,
  AccountSASResourceTypes,
  generateFileSASQueryParameters,
  generateAccountSASQueryParameters,

  // Options & Responses
  ShareCreateResponse,
  FileDownloadResponseModel,
  DirectoryItem,
  FileItem,
  ShareProperties,
  FileProperties,

  // Errors
  RestError,
} from "@azure/storage-file-share";
```

#### Imported: Authentication

### Connection String (Simplest)

```typescript
import { ShareServiceClient } from "@azure/storage-file-share";

const client = ShareServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING!
);
```

### StorageSharedKeyCredential (Node.js only)

```typescript
import { ShareServiceClient, StorageSharedKeyCredential } from "@azure/storage-file-share";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY!;

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const client = new ShareServiceClient(
  `https://${accountName}.file.core.windows.net`,
  sharedKeyCredential
);
```

### DefaultAzureCredential

```typescript
import { ShareServiceClient } from "@azure/storage-file-share";
import { DefaultAzureCredential } from "@azure/identity";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const client = new ShareServiceClient(
  `https://${accountName}.file.core.windows.net`,
  new DefaultAzureCredential()
);
```

### SAS Token

```typescript
import { ShareServiceClient } from "@azure/storage-file-share";

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
const sasToken = process.env.AZURE_STORAGE_SAS_TOKEN!;

const client = new ShareServiceClient(
  `https://${accountName}.file.core.windows.net${sasToken}`
);
```

#### Imported: Client Hierarchy

```
ShareServiceClient (account level)
└── ShareClient (share level)
    └── ShareDirectoryClient (directory level)
        └── ShareFileClient (file level)
```

#### Imported: Share Operations

### Create Share

```typescript
const shareClient = client.getShareClient("my-share");
await shareClient.create();

// Create with quota (in GB)
await shareClient.create({ quota: 100 });
```

### List Shares

```typescript
for await (const share of client.listShares()) {
  console.log(share.name, share.properties.quota);
}

// With prefix filter
for await (const share of client.listShares({ prefix: "logs-" })) {
  console.log(share.name);
}
```

### Delete Share

```typescript
await shareClient.delete();

// Delete if exists
await shareClient.deleteIfExists();
```

### Get Share Properties

```typescript
const properties = await shareClient.getProperties();
console.log("Quota:", properties.quota, "GB");
console.log("Last Modified:", properties.lastModified);
```

### Set Share Quota

```typescript
await shareClient.setQuota(200); // 200 GB
```

#### Imported: Directory Operations

### Create Directory

```typescript
const directoryClient = shareClient.getDirectoryClient("my-directory");
await directoryClient.create();

// Create nested directory
const nestedDir = shareClient.getDirectoryClient("parent/child/grandchild");
await nestedDir.create();
```

### List Directories and Files

```typescript
const directoryClient = shareClient.getDirectoryClient("my-directory");

for await (const item of directoryClient.listFilesAndDirectories()) {
  if (item.kind === "directory") {
    console.log(`[DIR] ${item.name}`);
  } else {
    console.log(`[FILE] ${item.name} (${item.properties.contentLength} bytes)`);
  }
}
```

### Delete Directory

```typescript
await directoryClient.delete();

// Delete if exists
await directoryClient.deleteIfExists();
```

### Check if Directory Exists

```typescript
const exists = await directoryClient.exists();
if (!exists) {
  await directoryClient.create();
}
```

#### Imported: File Operations

### Upload File (Simple)

```typescript
const fileClient = shareClient
  .getDirectoryClient("my-directory")
  .getFileClient("my-file.txt");

// Upload string
const content = "Hello, World!";
await fileClient.create(content.length);
await fileClient.uploadRange(content, 0, content.length);
```

### Upload File (Node.js - from local file)

```typescript
import * as fs from "fs";
import * as path from "path";

const fileClient = shareClient.rootDirectoryClient.getFileClient("uploaded.txt");
const localFilePath = "/path/to/local/file.txt";
const fileSize = fs.statSync(localFilePath).size;

await fileClient.create(fileSize);
await fileClient.uploadFile(localFilePath);
```

### Upload File (Buffer)

```typescript
const buffer = Buffer.from("Hello, Azure Files!");
const fileClient = shareClient.rootDirectoryClient.getFileClient("buffer-file.txt");

await fileClient.create(buffer.length);
await fileClient.uploadRange(buffer, 0, buffer.length);
```

### Upload File (Stream)

```typescript
import * as fs from "fs";

const fileClient = shareClient.rootDirectoryClient.getFileClient("streamed.txt");
const readStream = fs.createReadStream("/path/to/local/file.txt");
const fileSize = fs.statSync("/path/to/local/file.txt").size;

await fileClient.create(fileSize);
await fileClient.uploadStream(readStream, fileSize, 4 * 1024 * 1024, 4); // 4MB buffer, 4 concurrency
```

### Download File

```typescript
const fileClient = shareClient
  .getDirectoryClient("my-directory")
  .getFileClient("my-file.txt");

const downloadResponse = await fileClient.download();

// Read as string
const chunks: Buffer[] = [];
for await (const chunk of downloadResponse.readableStreamBody!) {
  chunks.push(Buffer.from(chunk));
}
const content = Buffer.concat(chunks).toString("utf-8");
```

### Download to File (Node.js)

```typescript
const fileClient = shareClient.rootDirectoryClient.getFileClient("my-file.txt");
await fileClient.downloadToFile("/path/to/local/destination.txt");
```

### Download to Buffer (Node.js)

```typescript
const fileClient = shareClient.rootDirectoryClient.getFileClient("my-file.txt");
const buffer = await fileClient.downloadToBuffer();
console.log(buffer.toString());
```

### Delete File

```typescript
const fileClient = shareClient.rootDirectoryClient.getFileClient("my-file.txt");
await fileClient.delete();

// Delete if exists
await fileClient.deleteIfExists();
```

### Copy File

```typescript
const sourceUrl = "https://account.file.core.windows.net/share/source.txt";
const destFileClient = shareClient.rootDirectoryClient.getFileClient("destination.txt");

// Start copy operation
const copyPoller = await destFileClient.startCopyFromURL(sourceUrl);
await copyPoller.pollUntilDone();
```

#### Imported: File Properties & Metadata

### Get File Properties

```typescript
const fileClient = shareClient.rootDirectoryClient.getFileClient("my-file.txt");
const properties = await fileClient.getProperties();

console.log("Content-Length:", properties.contentLength);
console.log("Content-Type:", properties.contentType);
console.log("Last Modified:", properties.lastModified);
console.log("ETag:", properties.etag);
```

### Set Metadata

```typescript
await fileClient.setMetadata({
  author: "John Doe",
  category: "documents",
});
```

### Set HTTP Headers

```typescript
await fileClient.setHttpHeaders({
  fileContentType: "text/plain",
  fileCacheControl: "max-age=3600",
  fileContentDisposition: "attachment; filename=download.txt",
});
```

#### Imported: Range Operations

### Upload Range

```typescript
const data = Buffer.from("partial content");
await fileClient.uploadRange(data, 100, data.length); // Write at offset 100
```

### Download Range

```typescript
const downloadResponse = await fileClient.download(100, 50); // offset 100, length 50
```

### Clear Range

```typescript
await fileClient.clearRange(0, 100); // Clear first 100 bytes
```

#### Imported: Snapshot Operations

### Create Snapshot

```typescript
const snapshotResponse = await shareClient.createSnapshot();
console.log("Snapshot:", snapshotResponse.snapshot);
```

### Access Snapshot

```typescript
const snapshotShareClient = shareClient.withSnapshot(snapshotResponse.snapshot!);
const snapshotFileClient = snapshotShareClient.rootDirectoryClient.getFileClient("file.txt");
const content = await snapshotFileClient.downloadToBuffer();
```

### Delete Snapshot

```typescript
await shareClient.delete({ deleteSnapshots: "include" });
```

#### Imported: SAS Token Generation (Node.js only)

### Generate File SAS

```typescript
import {
  generateFileSASQueryParameters,
  FileSASPermissions,
  StorageSharedKeyCredential,
} from "@azure/storage-file-share";

const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

const sasToken = generateFileSASQueryParameters(
  {
    shareName: "my-share",
    filePath: "my-directory/my-file.txt",
    permissions: FileSASPermissions.parse("r"), // read only
    expiresOn: new Date(Date.now() + 3600 * 1000), // 1 hour
  },
  sharedKeyCredential
).toString();

const sasUrl = `https://${accountName}.file.core.windows.net/my-share/my-directory/my-file.txt?${sasToken}`;
```

### Generate Share SAS

```typescript
import { ShareSASPermissions, generateFileSASQueryParameters } from "@azure/storage-file-share";

const sasToken = generateFileSASQueryParameters(
  {
    shareName: "my-share",
    permissions: ShareSASPermissions.parse("rcwdl"), // read, create, write, delete, list
    expiresOn: new Date(Date.now() + 24 * 3600 * 1000), // 24 hours
  },
  sharedKeyCredential
).toString();
```

#### Imported: Error Handling

```typescript
import { RestError } from "@azure/storage-file-share";

try {
  await shareClient.create();
} catch (error) {
  if (error instanceof RestError) {
    switch (error.statusCode) {
      case 404:
        console.log("Share not found");
        break;
      case 409:
        console.log("Share already exists");
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
| SAS generation | ✅ | ❌ |
| DefaultAzureCredential | ✅ | ❌ |
| Anonymous/SAS access | ✅ | ✅ |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
