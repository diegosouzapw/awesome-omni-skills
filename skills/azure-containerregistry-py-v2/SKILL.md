---
name: azure-containerregistry-py-v2
description: "Azure Container Registry SDK for Python workflow skill. Use this skill when the user needs Azure Container Registry SDK for Python. Use for managing container images, artifacts, and repositories and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["azure-containerregistry-py-v2", "azure-containerregistry-py", "azure", "container", "registry", "sdk", "for", "python"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Container Registry SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-containerregistry-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Container Registry SDK for Python Manage container images, artifacts, and repositories in Azure Container Registry.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, List Repositories, Repository Operations, List Tags, Manifest Operations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Container Registry SDK for Python. Use for managing container images, artifacts, and repositories.
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

1. bash pip install azure-containerregistry
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
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
Use @azure-containerregistry-py-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-containerregistry-py-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-containerregistry-py-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-containerregistry-py-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-containerregistry-py`, fails to mention provenance, or does not use the support pack at all.
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
