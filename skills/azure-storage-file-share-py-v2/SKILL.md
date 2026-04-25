---
name: azure-storage-file-share-py-v2
description: "Azure Storage File Share SDK for Python workflow skill. Use this skill when the user needs Azure Storage File Share SDK for Python. Use for SMB file shares, directories, and file operations in the cloud and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["azure-storage-file-share-py-v2", "azure-storage-file-share-py", "azure", "storage", "file", "share", "sdk", "for"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-25"
---

# Azure Storage File Share SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-storage-file-share-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Storage File Share SDK for Python Manage SMB file shares for cloud-native and lift-and-shift scenarios.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Share Operations, Directory Operations, File Operations, Range Operations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Storage File Share SDK for Python. Use for SMB file shares, directories, and file operations in the cloud.
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

1. bash pip install azure-storage-file-share
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-storage-file-share
```

#### Imported: Environment Variables

```bash
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=...;AccountKey=...
# Or
AZURE_STORAGE_ACCOUNT_URL=https://<account>.file.core.windows.net
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-storage-file-share-py-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-storage-file-share-py-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-storage-file-share-py-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-storage-file-share-py-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use connection string for simplest setup
- Use Entra ID for production with RBAC
- Stream large files using chunks() to avoid memory issues
- Create snapshots before major changes
- Set quotas to prevent unexpected storage costs
- Use ranges for partial file updates
- Close async clients explicitly

### Imported Operating Notes

#### Imported: Best Practices

1. **Use connection string** for simplest setup
2. **Use Entra ID** for production with RBAC
3. **Stream large files** using chunks() to avoid memory issues
4. **Create snapshots** before major changes
5. **Set quotas** to prevent unexpected storage costs
6. **Use ranges** for partial file updates
7. **Close async clients** explicitly

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-storage-file-share-py`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Authentication

### Connection String

```python
from azure.storage.fileshare import ShareServiceClient

service = ShareServiceClient.from_connection_string(
    os.environ["AZURE_STORAGE_CONNECTION_STRING"]
)
```

### Entra ID

```python
from azure.storage.fileshare import ShareServiceClient
from azure.identity import DefaultAzureCredential

service = ShareServiceClient(
    account_url=os.environ["AZURE_STORAGE_ACCOUNT_URL"],
    credential=DefaultAzureCredential()
)
```

#### Imported: Share Operations

### Create Share

```python
share = service.create_share("my-share")
```

### List Shares

```python
for share in service.list_shares():
    print(f"{share.name}: {share.quota} GB")
```

### Get Share Client

```python
share_client = service.get_share_client("my-share")
```

### Delete Share

```python
service.delete_share("my-share")
```

#### Imported: Directory Operations

### Create Directory

```python
share_client = service.get_share_client("my-share")
share_client.create_directory("my-directory")

# Nested directory
share_client.create_directory("my-directory/sub-directory")
```

### List Directories and Files

```python
directory_client = share_client.get_directory_client("my-directory")

for item in directory_client.list_directories_and_files():
    if item["is_directory"]:
        print(f"[DIR] {item['name']}")
    else:
        print(f"[FILE] {item['name']} ({item['size']} bytes)")
```

### Delete Directory

```python
share_client.delete_directory("my-directory")
```

#### Imported: File Operations

### Upload File

```python
file_client = share_client.get_file_client("my-directory/file.txt")

# From string
file_client.upload_file("Hello, World!")

# From file
with open("local-file.txt", "rb") as f:
    file_client.upload_file(f)

# From bytes
file_client.upload_file(b"Binary content")
```

### Download File

```python
file_client = share_client.get_file_client("my-directory/file.txt")

# To bytes
data = file_client.download_file().readall()

# To file
with open("downloaded.txt", "wb") as f:
    data = file_client.download_file()
    data.readinto(f)

# Stream chunks
download = file_client.download_file()
for chunk in download.chunks():
    process(chunk)
```

### Get File Properties

```python
properties = file_client.get_file_properties()
print(f"Size: {properties.size}")
print(f"Content type: {properties.content_settings.content_type}")
print(f"Last modified: {properties.last_modified}")
```

### Delete File

```python
file_client.delete_file()
```

### Copy File

```python
source_url = "https://account.file.core.windows.net/share/source.txt"
dest_client = share_client.get_file_client("destination.txt")
dest_client.start_copy_from_url(source_url)
```

#### Imported: Range Operations

### Upload Range

```python
# Upload to specific range
file_client.upload_range(data=b"content", offset=0, length=7)
```

### Download Range

```python
# Download specific range
download = file_client.download_file(offset=0, length=100)
data = download.readall()
```

#### Imported: Snapshot Operations

### Create Snapshot

```python
snapshot = share_client.create_snapshot()
print(f"Snapshot: {snapshot['snapshot']}")
```

### Access Snapshot

```python
snapshot_client = service.get_share_client(
    "my-share",
    snapshot=snapshot["snapshot"]
)
```

#### Imported: Async Client

```python
from azure.storage.fileshare.aio import ShareServiceClient
from azure.identity.aio import DefaultAzureCredential

async def upload_file():
    credential = DefaultAzureCredential()
    service = ShareServiceClient(account_url, credential=credential)

    share = service.get_share_client("my-share")
    file_client = share.get_file_client("test.txt")

    await file_client.upload_file("Hello!")

    await service.close()
    await credential.close()
```

#### Imported: Client Types

| Client | Purpose |
|--------|---------|
| `ShareServiceClient` | Account-level operations |
| `ShareClient` | Share operations |
| `ShareDirectoryClient` | Directory operations |
| `ShareFileClient` | File operations |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
