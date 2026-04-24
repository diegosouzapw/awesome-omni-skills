---
name: azure-storage-blob-py-v2
description: "Azure Blob Storage SDK for Python workflow skill. Use this skill when the user needs Azure Blob Storage SDK for Python. Use for uploading, downloading, listing blobs, managing containers, and blob lifecycle and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["azure-storage-blob-py-v2", "azure-storage-blob-py", "azure", "blob", "storage", "sdk", "for", "python"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-24"
---

# Azure Blob Storage SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-storage-blob-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Blob Storage SDK for Python Client library for Azure Blob Storage — object storage for unstructured data.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Performance Tuning, SAS Tokens, Blob Properties and Metadata.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Blob Storage SDK for Python. Use for uploading, downloading, listing blobs, managing containers, and blob lifecycle.
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

1. bash pip install azure-storage-blob azure-identity ### Create Container python containerclient = blobserviceclient.getcontainerclient("mycontainer") containerclient.createcontainer() ### Upload Blob python # From file path blobclient = blobserviceclient.getblobclient( container="mycontainer", blob="sample.txt" ) with open("./local-file.txt", "rb") as data: blobclient.uploadblob(data, overwrite=True) # From bytes/string blobclient.uploadblob(b"Hello, World!", overwrite=True) # From stream import io stream = io.BytesIO(b"Stream content") blobclient.uploadblob(stream, overwrite=True) ### Download Blob python blobclient = blobserviceclient.getblobclient( container="mycontainer", blob="sample.txt" ) # To file with open("./downloaded.txt", "wb") as file: downloadstream = blobclient.downloadblob() file.write(downloadstream.readall()) # To memory downloadstream = blobclient.downloadblob() content = downloadstream.readall() # bytes # Read into existing buffer stream = io.BytesIO() numbytes = blobclient.downloadblob().readinto(stream) ### List Blobs python containerclient = blobserviceclient.getcontainerclient("mycontainer") # List all blobs for blob in containerclient.listblobs(): print(f"{blob.name} - {blob.size} bytes") # List with prefix (folder-like) for blob in containerclient.listblobs(namestartswith="logs/"): print(blob.name) # Walk blob hierarchy (virtual directories) for item in containerclient.walkblobs(delimiter="/"): if item.get("prefix"): print(f"Directory: {item['prefix']}") else: print(f"Blob: {item.name}") ### Delete Blob python blobclient.deleteblob() # Delete with snapshots blobclient.deleteblob(deletesnapshots="include")
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-storage-blob azure-identity
```

#### Imported: Core Workflow

### Create Container

```python
container_client = blob_service_client.get_container_client("mycontainer")
container_client.create_container()
```

### Upload Blob

```python
# From file path
blob_client = blob_service_client.get_blob_client(
    container="mycontainer",
    blob="sample.txt"
)

with open("./local-file.txt", "rb") as data:
    blob_client.upload_blob(data, overwrite=True)

# From bytes/string
blob_client.upload_blob(b"Hello, World!", overwrite=True)

# From stream
import io
stream = io.BytesIO(b"Stream content")
blob_client.upload_blob(stream, overwrite=True)
```

### Download Blob

```python
blob_client = blob_service_client.get_blob_client(
    container="mycontainer",
    blob="sample.txt"
)

# To file
with open("./downloaded.txt", "wb") as file:
    download_stream = blob_client.download_blob()
    file.write(download_stream.readall())

# To memory
download_stream = blob_client.download_blob()
content = download_stream.readall()  # bytes

# Read into existing buffer
stream = io.BytesIO()
num_bytes = blob_client.download_blob().readinto(stream)
```

### List Blobs

```python
container_client = blob_service_client.get_container_client("mycontainer")

# List all blobs
for blob in container_client.list_blobs():
    print(f"{blob.name} - {blob.size} bytes")

# List with prefix (folder-like)
for blob in container_client.list_blobs(name_starts_with="logs/"):
    print(blob.name)

# Walk blob hierarchy (virtual directories)
for item in container_client.walk_blobs(delimiter="/"):
    if item.get("prefix"):
        print(f"Directory: {item['prefix']}")
    else:
        print(f"Blob: {item.name}")
```

### Delete Blob

```python
blob_client.delete_blob()

# Delete with snapshots
blob_client.delete_blob(delete_snapshots="include")
```

#### Imported: Environment Variables

```bash
AZURE_STORAGE_ACCOUNT_NAME=<your-storage-account>
# Or use full URL
AZURE_STORAGE_ACCOUNT_URL=https://<account>.blob.core.windows.net
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-storage-blob-py-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-storage-blob-py-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-storage-blob-py-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-storage-blob-py-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultAzureCredential instead of connection strings
- Use context managers for async clients
- Set overwrite=True explicitly when re-uploading
- Use max_concurrency for large file transfers
- Prefer readinto() over readall() for memory efficiency
- Use walk_blobs() for hierarchical listing
- Set appropriate content types for web-served blobs

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** instead of connection strings
2. **Use context managers** for async clients
3. **Set `overwrite=True`** explicitly when re-uploading
4. **Use `max_concurrency`** for large file transfers
5. **Prefer `readinto()`** over `readall()` for memory efficiency
6. **Use `walk_blobs()`** for hierarchical listing
7. **Set appropriate content types** for web-served blobs

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-storage-blob-py`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Authentication

```python
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient

credential = DefaultAzureCredential()
account_url = "https://<account>.blob.core.windows.net"

blob_service_client = BlobServiceClient(account_url, credential=credential)
```

#### Imported: Client Hierarchy

| Client | Purpose | Get From |
|--------|---------|----------|
| `BlobServiceClient` | Account-level operations | Direct instantiation |
| `ContainerClient` | Container operations | `blob_service_client.get_container_client()` |
| `BlobClient` | Single blob operations | `container_client.get_blob_client()` |

#### Imported: Performance Tuning

```python
# Configure chunk sizes for large uploads/downloads
blob_client = BlobClient(
    account_url=account_url,
    container_name="mycontainer",
    blob_name="large-file.zip",
    credential=credential,
    max_block_size=4 * 1024 * 1024,  # 4 MiB blocks
    max_single_put_size=64 * 1024 * 1024  # 64 MiB single upload limit
)

# Parallel upload
blob_client.upload_blob(data, max_concurrency=4)

# Parallel download
download_stream = blob_client.download_blob(max_concurrency=4)
```

#### Imported: SAS Tokens

```python
from datetime import datetime, timedelta, timezone
from azure.storage.blob import generate_blob_sas, BlobSasPermissions

sas_token = generate_blob_sas(
    account_name="<account>",
    container_name="mycontainer",
    blob_name="sample.txt",
    account_key="<account-key>",  # Or use user delegation key
    permission=BlobSasPermissions(read=True),
    expiry=datetime.now(timezone.utc) + timedelta(hours=1)
)

# Use SAS token
blob_url = f"https://<account>.blob.core.windows.net/mycontainer/sample.txt?{sas_token}"
```

#### Imported: Blob Properties and Metadata

```python
# Get properties
properties = blob_client.get_blob_properties()
print(f"Size: {properties.size}")
print(f"Content-Type: {properties.content_settings.content_type}")
print(f"Last modified: {properties.last_modified}")

# Set metadata
blob_client.set_blob_metadata(metadata={"category": "logs", "year": "2024"})

# Set content type
from azure.storage.blob import ContentSettings
blob_client.set_http_headers(
    content_settings=ContentSettings(content_type="application/json")
)
```

#### Imported: Async Client

```python
from azure.identity.aio import DefaultAzureCredential
from azure.storage.blob.aio import BlobServiceClient

async def upload_async():
    credential = DefaultAzureCredential()

    async with BlobServiceClient(account_url, credential=credential) as client:
        blob_client = client.get_blob_client("mycontainer", "sample.txt")

        with open("./file.txt", "rb") as data:
            await blob_client.upload_blob(data, overwrite=True)

# Download async
async def download_async():
    async with BlobServiceClient(account_url, credential=credential) as client:
        blob_client = client.get_blob_client("mycontainer", "sample.txt")

        stream = await blob_client.download_blob()
        data = await stream.readall()
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
