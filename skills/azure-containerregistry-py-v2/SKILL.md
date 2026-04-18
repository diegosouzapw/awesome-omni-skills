---
name: azure-containerregistry-py-v2
description: "Azure Container Registry SDK for Python workflow skill. Use this skill when the user needs Azure Container Registry SDK for Python. Use for managing container images, artifacts, and repositories and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["azure-containerregistry-py-v2", "azure-containerregistry-py", "azure", "container", "registry", "sdk", "for", "python"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Azure Container Registry SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-containerregistry-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Container Registry SDK for Python Manage container images, artifacts, and repositories in Azure Container Registry.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, List Repositories, Repository Operations, List Tags, Manifest Operations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Container Registry SDK for Python. Use for managing container images, artifacts, and repositories.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash pip install azure-containerregistry
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-containerregistry
```

#### Imported: Environment Variables

```bash
AZURE_CONTAINERREGISTRY_ENDPOINT=https://<registry-name>.azurecr.io
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-containerregistry-py-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-containerregistry-py-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-containerregistry-py-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-containerregistry-py-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use Entra ID for authentication in production
- Delete by digest not tag to avoid orphaned images
- Lock production images with can_delete=False
- Clean up untagged manifests regularly
- Use async client for high-throughput operations
- Order by last_updated to find recent/old images
- Check manifest.tags before deleting to avoid removing tagged images

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Entra ID** for authentication in production
2. **Delete by digest** not tag to avoid orphaned images
3. **Lock production images** with can_delete=False
4. **Clean up untagged manifests** regularly
5. **Use async client** for high-throughput operations
6. **Order by last_updated** to find recent/old images
7. **Check manifest.tags** before deleting to avoid removing tagged images

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-containerregistry-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-ai-vision-imageanalysis-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-voicelive-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-voicelive-java-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-voicelive-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### Entra ID (Recommended)

```python
from azure.containerregistry import ContainerRegistryClient
from azure.identity import DefaultAzureCredential

client = ContainerRegistryClient(
    endpoint=os.environ["AZURE_CONTAINERREGISTRY_ENDPOINT"],
    credential=DefaultAzureCredential()
)
```

### Anonymous Access (Public Registry)

```python
from azure.containerregistry import ContainerRegistryClient

client = ContainerRegistryClient(
    endpoint="https://mcr.microsoft.com",
    credential=None,
    audience="https://mcr.microsoft.com"
)
```

#### Imported: List Repositories

```python
client = ContainerRegistryClient(endpoint, DefaultAzureCredential())

for repository in client.list_repository_names():
    print(repository)
```

#### Imported: Repository Operations

### Get Repository Properties

```python
properties = client.get_repository_properties("my-image")
print(f"Created: {properties.created_on}")
print(f"Modified: {properties.last_updated_on}")
print(f"Manifests: {properties.manifest_count}")
print(f"Tags: {properties.tag_count}")
```

### Update Repository Properties

```python
from azure.containerregistry import RepositoryProperties

client.update_repository_properties(
    "my-image",
    properties=RepositoryProperties(
        can_delete=False,
        can_write=False
    )
)
```

### Delete Repository

```python
client.delete_repository("my-image")
```

#### Imported: List Tags

```python
for tag in client.list_tag_properties("my-image"):
    print(f"{tag.name}: {tag.created_on}")
```

### Filter by Order

```python
from azure.containerregistry import ArtifactTagOrder

# Most recent first
for tag in client.list_tag_properties(
    "my-image",
    order_by=ArtifactTagOrder.LAST_UPDATED_ON_DESCENDING
):
    print(f"{tag.name}: {tag.last_updated_on}")
```

#### Imported: Manifest Operations

### List Manifests

```python
from azure.containerregistry import ArtifactManifestOrder

for manifest in client.list_manifest_properties(
    "my-image",
    order_by=ArtifactManifestOrder.LAST_UPDATED_ON_DESCENDING
):
    print(f"Digest: {manifest.digest}")
    print(f"Tags: {manifest.tags}")
    print(f"Size: {manifest.size_in_bytes}")
```

### Get Manifest Properties

```python
manifest = client.get_manifest_properties("my-image", "latest")
print(f"Digest: {manifest.digest}")
print(f"Architecture: {manifest.architecture}")
print(f"OS: {manifest.operating_system}")
```

### Update Manifest Properties

```python
from azure.containerregistry import ArtifactManifestProperties

client.update_manifest_properties(
    "my-image",
    "latest",
    properties=ArtifactManifestProperties(
        can_delete=False,
        can_write=False
    )
)
```

### Delete Manifest

```python
# Delete by digest
client.delete_manifest("my-image", "sha256:abc123...")

# Delete by tag
manifest = client.get_manifest_properties("my-image", "old-tag")
client.delete_manifest("my-image", manifest.digest)
```

#### Imported: Tag Operations

### Get Tag Properties

```python
tag = client.get_tag_properties("my-image", "latest")
print(f"Digest: {tag.digest}")
print(f"Created: {tag.created_on}")
```

### Delete Tag

```python
client.delete_tag("my-image", "old-tag")
```

#### Imported: Upload and Download Artifacts

```python
from azure.containerregistry import ContainerRegistryClient

client = ContainerRegistryClient(endpoint, DefaultAzureCredential())

# Download manifest
manifest = client.download_manifest("my-image", "latest")
print(f"Media type: {manifest.media_type}")
print(f"Digest: {manifest.digest}")

# Download blob
blob = client.download_blob("my-image", "sha256:abc123...")
with open("layer.tar.gz", "wb") as f:
    for chunk in blob:
        f.write(chunk)
```

#### Imported: Async Client

```python
from azure.containerregistry.aio import ContainerRegistryClient
from azure.identity.aio import DefaultAzureCredential

async def list_repos():
    credential = DefaultAzureCredential()
    client = ContainerRegistryClient(endpoint, credential)
    
    async for repo in client.list_repository_names():
        print(repo)
    
    await client.close()
    await credential.close()
```

#### Imported: Clean Up Old Images

```python
from datetime import datetime, timedelta, timezone

cutoff = datetime.now(timezone.utc) - timedelta(days=30)

for manifest in client.list_manifest_properties("my-image"):
    if manifest.last_updated_on < cutoff and not manifest.tags:
        print(f"Deleting {manifest.digest}")
        client.delete_manifest("my-image", manifest.digest)
```

#### Imported: Client Operations

| Operation | Description |
|-----------|-------------|
| `list_repository_names` | List all repositories |
| `get_repository_properties` | Get repository metadata |
| `delete_repository` | Delete repository and all images |
| `list_tag_properties` | List tags in repository |
| `get_tag_properties` | Get tag metadata |
| `delete_tag` | Delete specific tag |
| `list_manifest_properties` | List manifests in repository |
| `get_manifest_properties` | Get manifest metadata |
| `delete_manifest` | Delete manifest by digest |
| `download_manifest` | Download manifest content |
| `download_blob` | Download layer blob |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
