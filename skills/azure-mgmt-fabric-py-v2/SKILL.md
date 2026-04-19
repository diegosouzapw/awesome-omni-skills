---
name: azure-mgmt-fabric-py-v2
description: "Azure Fabric Management SDK for Python workflow skill. Use this skill when the user needs Azure Fabric Management SDK for Python. Use for managing Microsoft Fabric capacities and resources and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-mgmt-fabric-py-v2", "azure-mgmt-fabric-py", "azure", "fabric", "management", "sdk", "for", "python"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Azure Fabric Management SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-mgmt-fabric-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Fabric Management SDK for Python Manage Microsoft Fabric capacities and resources programmatically.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Create Fabric Capacity, Get Capacity Details, List All Capacities in Subscription, Update Capacity.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Fabric Management SDK for Python. Use for managing Microsoft Fabric capacities and resources.
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

1. bash pip install azure-mgmt-fabric pip install azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-mgmt-fabric
pip install azure-identity
```

#### Imported: Environment Variables

```bash
AZURE_SUBSCRIPTION_ID=<your-subscription-id>
AZURE_RESOURCE_GROUP=<your-resource-group>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-mgmt-fabric-py-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-mgmt-fabric-py-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-mgmt-fabric-py-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-mgmt-fabric-py-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultAzureCredential for authentication
- Suspend unused capacities to reduce costs
- Start with smaller SKUs and scale up as needed
- Use tags for cost tracking and organization
- Check name availability before creating capacities
- Handle LRO properly — don't assume immediate completion
- Set up capacity admins — specify users who can manage workspaces

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** for authentication
2. **Suspend unused capacities** to reduce costs
3. **Start with smaller SKUs** and scale up as needed
4. **Use tags** for cost tracking and organization
5. **Check name availability** before creating capacities
6. **Handle LRO properly** — don't assume immediate completion
7. **Set up capacity admins** — specify users who can manage workspaces
8. **Monitor capacity usage** via Azure Monitor metrics

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-mgmt-fabric-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: List Capacities in Resource Group

```python
capacities = client.fabric_capacities.list_by_resource_group(
    resource_group_name=resource_group
)

for capacity in capacities:
    print(f"Capacity: {capacity.name} - SKU: {capacity.sku.name}")
```

#### Imported: Authentication

```python
from azure.identity import DefaultAzureCredential
from azure.mgmt.fabric import FabricMgmtClient
import os

credential = DefaultAzureCredential()
client = FabricMgmtClient(
    credential=credential,
    subscription_id=os.environ["AZURE_SUBSCRIPTION_ID"]
)
```

#### Imported: Create Fabric Capacity

```python
from azure.mgmt.fabric import FabricMgmtClient
from azure.mgmt.fabric.models import FabricCapacity, FabricCapacityProperties, CapacitySku
from azure.identity import DefaultAzureCredential
import os

credential = DefaultAzureCredential()
client = FabricMgmtClient(
    credential=credential,
    subscription_id=os.environ["AZURE_SUBSCRIPTION_ID"]
)

resource_group = os.environ["AZURE_RESOURCE_GROUP"]
capacity_name = "myfabriccapacity"

capacity = client.fabric_capacities.begin_create_or_update(
    resource_group_name=resource_group,
    capacity_name=capacity_name,
    resource=FabricCapacity(
        location="eastus",
        sku=CapacitySku(
            name="F2",  # Fabric SKU
            tier="Fabric"
        ),
        properties=FabricCapacityProperties(
            administration=FabricCapacityAdministration(
                members=["user@contoso.com"]
            )
        )
    )
).result()

print(f"Capacity created: {capacity.name}")
```

#### Imported: Get Capacity Details

```python
capacity = client.fabric_capacities.get(
    resource_group_name=resource_group,
    capacity_name=capacity_name
)

print(f"Capacity: {capacity.name}")
print(f"SKU: {capacity.sku.name}")
print(f"State: {capacity.properties.state}")
print(f"Location: {capacity.location}")
```

#### Imported: List All Capacities in Subscription

```python
all_capacities = client.fabric_capacities.list_by_subscription()

for capacity in all_capacities:
    print(f"Capacity: {capacity.name} in {capacity.location}")
```

#### Imported: Update Capacity

```python
from azure.mgmt.fabric.models import FabricCapacityUpdate, CapacitySku

updated = client.fabric_capacities.begin_update(
    resource_group_name=resource_group,
    capacity_name=capacity_name,
    properties=FabricCapacityUpdate(
        sku=CapacitySku(
            name="F4",  # Scale up
            tier="Fabric"
        ),
        tags={"environment": "production"}
    )
).result()

print(f"Updated SKU: {updated.sku.name}")
```

#### Imported: Suspend Capacity

Pause capacity to stop billing:

```python
client.fabric_capacities.begin_suspend(
    resource_group_name=resource_group,
    capacity_name=capacity_name
).result()

print("Capacity suspended")
```

#### Imported: Resume Capacity

Resume a paused capacity:

```python
client.fabric_capacities.begin_resume(
    resource_group_name=resource_group,
    capacity_name=capacity_name
).result()

print("Capacity resumed")
```

#### Imported: Delete Capacity

```python
client.fabric_capacities.begin_delete(
    resource_group_name=resource_group,
    capacity_name=capacity_name
).result()

print("Capacity deleted")
```

#### Imported: Check Name Availability

```python
from azure.mgmt.fabric.models import CheckNameAvailabilityRequest

result = client.fabric_capacities.check_name_availability(
    location="eastus",
    body=CheckNameAvailabilityRequest(
        name="my-new-capacity",
        type="Microsoft.Fabric/capacities"
    )
)

if result.name_available:
    print("Name is available")
else:
    print(f"Name not available: {result.reason}")
```

#### Imported: List Available SKUs

```python
skus = client.fabric_capacities.list_skus(
    resource_group_name=resource_group,
    capacity_name=capacity_name
)

for sku in skus:
    print(f"SKU: {sku.name} - Tier: {sku.tier}")
```

#### Imported: Client Operations

| Operation | Method |
|-----------|--------|
| `client.fabric_capacities` | Capacity CRUD operations |
| `client.operations` | List available operations |

#### Imported: Fabric SKUs

| SKU | Description | CUs |
|-----|-------------|-----|
| `F2` | Entry level | 2 Capacity Units |
| `F4` | Small | 4 Capacity Units |
| `F8` | Medium | 8 Capacity Units |
| `F16` | Large | 16 Capacity Units |
| `F32` | X-Large | 32 Capacity Units |
| `F64` | 2X-Large | 64 Capacity Units |
| `F128` | 4X-Large | 128 Capacity Units |
| `F256` | 8X-Large | 256 Capacity Units |
| `F512` | 16X-Large | 512 Capacity Units |
| `F1024` | 32X-Large | 1024 Capacity Units |
| `F2048` | 64X-Large | 2048 Capacity Units |

#### Imported: Capacity States

| State | Description |
|-------|-------------|
| `Active` | Capacity is running |
| `Paused` | Capacity is suspended (no billing) |
| `Provisioning` | Being created |
| `Updating` | Being modified |
| `Deleting` | Being removed |
| `Failed` | Operation failed |

#### Imported: Long-Running Operations

All mutating operations are long-running (LRO). Use `.result()` to wait:

```python
# Synchronous wait
capacity = client.fabric_capacities.begin_create_or_update(...).result()

# Or poll manually
poller = client.fabric_capacities.begin_create_or_update(...)
while not poller.done():
    print(f"Status: {poller.status()}")
    time.sleep(5)
capacity = poller.result()
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
