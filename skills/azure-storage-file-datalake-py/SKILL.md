---
name: azure-storage-file-datalake-py
description: "Azure Data Lake Storage Gen2 SDK for Python workflow skill. Use this skill when the user needs Azure Data Lake Storage Gen2 SDK for Python. Use for hierarchical file systems, big data analytics, and file/directory operations and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["azure-storage-file-datalake-py", "azure", "data", "lake", "storage", "gen2", "sdk", "for"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure Data Lake Storage Gen2 SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-storage-file-datalake-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Data Lake Storage Gen2 SDK for Python Hierarchical file system for big data analytics workloads.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, File System Operations, Directory Operations, File Operations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Data Lake Storage Gen2 SDK for Python. Use for hierarchical file systems, big data analytics, and file/directory operations.
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

1. bash pip install azure-storage-file-datalake azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-storage-file-datalake azure-identity
```

#### Imported: Environment Variables

```bash
AZURE_STORAGE_ACCOUNT_URL=https://<account>.dfs.core.windows.net
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-storage-file-datalake-py to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-storage-file-datalake-py/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-storage-file-datalake-py/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-storage-file-datalake-py using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use hierarchical namespace for file system semantics
- Use appenddata + flushdata for large file uploads
- Set ACLs at directory level and inherit to children
- Use async client for high-throughput scenarios
- Use get_paths with recursive=True for full directory listing
- Set metadata for custom file attributes
- Consider Blob API for simple object storage use cases

### Imported Operating Notes

#### Imported: Best Practices

1. **Use hierarchical namespace** for file system semantics
2. **Use `append_data` + `flush_data`** for large file uploads
3. **Set ACLs at directory level** and inherit to children
4. **Use async client** for high-throughput scenarios
5. **Use `get_paths` with `recursive=True`** for full directory listing
6. **Set metadata** for custom file attributes
7. **Consider Blob API** for simple object storage use cases

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-storage-file-datalake-py`, fails to mention provenance, or does not use the support pack at all.
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

```python
from azure.identity import DefaultAzureCredential
from azure.storage.filedatalake import DataLakeServiceClient

credential = DefaultAzureCredential()
account_url = "https://<account>.dfs.core.windows.net"

service_client = DataLakeServiceClient(account_url=account_url, credential=credential)
```

#### Imported: Client Hierarchy

| Client | Purpose |
|--------|---------|
| `DataLakeServiceClient` | Account-level operations |
| `FileSystemClient` | Container (file system) operations |
| `DataLakeDirectoryClient` | Directory operations |
| `DataLakeFileClient` | File operations |

#### Imported: File System Operations

```python
# Create file system (container)
file_system_client = service_client.create_file_system("myfilesystem")

# Get existing
file_system_client = service_client.get_file_system_client("myfilesystem")

# Delete
service_client.delete_file_system("myfilesystem")

# List file systems
for fs in service_client.list_file_systems():
    print(fs.name)
```

#### Imported: Directory Operations

```python
file_system_client = service_client.get_file_system_client("myfilesystem")

# Create directory
directory_client = file_system_client.create_directory("mydir")

# Create nested directories
directory_client = file_system_client.create_directory("path/to/nested/dir")

# Get directory client
directory_client = file_system_client.get_directory_client("mydir")

# Delete directory
directory_client.delete_directory()

# Rename/move directory
directory_client.rename_directory(new_name="myfilesystem/newname")
```

#### Imported: File Operations

### Upload File

```python
# Get file client
file_client = file_system_client.get_file_client("path/to/file.txt")

# Upload from local file
with open("local-file.txt", "rb") as data:
    file_client.upload_data(data, overwrite=True)

# Upload bytes
file_client.upload_data(b"Hello, Data Lake!", overwrite=True)

# Append data (for large files)
file_client.append_data(data=b"chunk1", offset=0, length=6)
file_client.append_data(data=b"chunk2", offset=6, length=6)
file_client.flush_data(12)  # Commit the data
```

### Download File

```python
file_client = file_system_client.get_file_client("path/to/file.txt")

# Download all content
download = file_client.download_file()
content = download.readall()

# Download to file
with open("downloaded.txt", "wb") as f:
    download = file_client.download_file()
    download.readinto(f)

# Download range
download = file_client.download_file(offset=0, length=100)
```

### Delete File

```python
file_client.delete_file()
```

#### Imported: List Contents

```python
# List paths (files and directories)
for path in file_system_client.get_paths():
    print(f"{'DIR' if path.is_directory else 'FILE'}: {path.name}")

# List paths in directory
for path in file_system_client.get_paths(path="mydir"):
    print(path.name)

# Recursive listing
for path in file_system_client.get_paths(path="mydir", recursive=True):
    print(path.name)
```

#### Imported: File/Directory Properties

```python
# Get properties
properties = file_client.get_file_properties()
print(f"Size: {properties.size}")
print(f"Last modified: {properties.last_modified}")

# Set metadata
file_client.set_metadata(metadata={"processed": "true"})
```

#### Imported: Access Control (ACL)

```python
# Get ACL
acl = directory_client.get_access_control()
print(f"Owner: {acl['owner']}")
print(f"Permissions: {acl['permissions']}")

# Set ACL
directory_client.set_access_control(
    owner="user-id",
    permissions="rwxr-x---"
)

# Update ACL entries
from azure.storage.filedatalake import AccessControlChangeResult
directory_client.update_access_control_recursive(
    acl="user:user-id:rwx"
)
```

#### Imported: Async Client

```python
from azure.storage.filedatalake.aio import DataLakeServiceClient
from azure.identity.aio import DefaultAzureCredential

async def datalake_operations():
    credential = DefaultAzureCredential()
    
    async with DataLakeServiceClient(
        account_url="https://<account>.dfs.core.windows.net",
        credential=credential
    ) as service_client:
        file_system_client = service_client.get_file_system_client("myfilesystem")
        file_client = file_system_client.get_file_client("test.txt")
        
        await file_client.upload_data(b"async content", overwrite=True)
        
        download = await file_client.download_file()
        content = await download.readall()

import asyncio
asyncio.run(datalake_operations())
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
