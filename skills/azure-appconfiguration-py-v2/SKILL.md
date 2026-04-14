---
name: azure-appconfiguration-py-v2
description: "Azure App Configuration SDK for Python workflow skill. Use this skill when the user needs Azure App Configuration SDK for Python. Use for centralized configuration management, feature flags, and dynamic settings and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["azure-appconfiguration-py-v2", "azure-appconfiguration-py", "azure", "app", "configuration", "sdk", "for", "python"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure App Configuration SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-appconfiguration-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure App Configuration SDK for Python Centralized configuration management with feature flags and dynamic settings.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Configuration Settings, List Settings, Feature Flags, Read-Only Settings.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure App Configuration SDK for Python. Use for centralized configuration management, feature flags, and dynamic settings.
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

1. bash pip install azure-appconfiguration
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-appconfiguration
```

#### Imported: Environment Variables

```bash
AZURE_APPCONFIGURATION_CONNECTION_STRING=Endpoint=https://<name>.azconfig.io;Id=...;Secret=...
# Or for Entra ID:
AZURE_APPCONFIGURATION_ENDPOINT=https://<name>.azconfig.io
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-appconfiguration-py-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-appconfiguration-py-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-appconfiguration-py-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-appconfiguration-py-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use labels for environment separation (dev, staging, prod)
- Use key prefixes for logical grouping (app:database:, app:cache:)
- Make production settings read-only to prevent accidental changes
- Create snapshots before deployments for rollback capability
- Use Entra ID instead of connection strings in production
- Refresh settings periodically in long-running applications
- Use feature flags for gradual rollouts and A/B testing

### Imported Operating Notes

#### Imported: Best Practices

1. **Use labels** for environment separation (dev, staging, prod)
2. **Use key prefixes** for logical grouping (app:database:*, app:cache:*)
3. **Make production settings read-only** to prevent accidental changes
4. **Create snapshots** before deployments for rollback capability
5. **Use Entra ID** instead of connection strings in production
6. **Refresh settings periodically** in long-running applications
7. **Use feature flags** for gradual rollouts and A/B testing

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-appconfiguration-py`, fails to mention provenance, or does not use the support pack at all.
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

### Connection String

```python
from azure.appconfiguration import AzureAppConfigurationClient

client = AzureAppConfigurationClient.from_connection_string(
    os.environ["AZURE_APPCONFIGURATION_CONNECTION_STRING"]
)
```

### Entra ID

```python
from azure.appconfiguration import AzureAppConfigurationClient
from azure.identity import DefaultAzureCredential

client = AzureAppConfigurationClient(
    base_url=os.environ["AZURE_APPCONFIGURATION_ENDPOINT"],
    credential=DefaultAzureCredential()
)
```

#### Imported: Configuration Settings

### Get Setting

```python
setting = client.get_configuration_setting(key="app:settings:message")
print(f"{setting.key} = {setting.value}")
```

### Get with Label

```python
# Labels allow environment-specific values
setting = client.get_configuration_setting(
    key="app:settings:message",
    label="production"
)
```

### Set Setting

```python
from azure.appconfiguration import ConfigurationSetting

setting = ConfigurationSetting(
    key="app:settings:message",
    value="Hello, World!",
    label="development",
    content_type="text/plain",
    tags={"environment": "dev"}
)

client.set_configuration_setting(setting)
```

### Delete Setting

```python
client.delete_configuration_setting(
    key="app:settings:message",
    label="development"
)
```

#### Imported: List Settings

### All Settings

```python
settings = client.list_configuration_settings()
for setting in settings:
    print(f"{setting.key} [{setting.label}] = {setting.value}")
```

### Filter by Key Prefix

```python
settings = client.list_configuration_settings(
    key_filter="app:settings:*"
)
```

### Filter by Label

```python
settings = client.list_configuration_settings(
    label_filter="production"
)
```

#### Imported: Feature Flags

### Set Feature Flag

```python
from azure.appconfiguration import ConfigurationSetting
import json

feature_flag = ConfigurationSetting(
    key=".appconfig.featureflag/beta-feature",
    value=json.dumps({
        "id": "beta-feature",
        "enabled": True,
        "conditions": {
            "client_filters": []
        }
    }),
    content_type="application/vnd.microsoft.appconfig.ff+json;charset=utf-8"
)

client.set_configuration_setting(feature_flag)
```

### Get Feature Flag

```python
setting = client.get_configuration_setting(
    key=".appconfig.featureflag/beta-feature"
)
flag_data = json.loads(setting.value)
print(f"Feature enabled: {flag_data['enabled']}")
```

### List Feature Flags

```python
flags = client.list_configuration_settings(
    key_filter=".appconfig.featureflag/*"
)
for flag in flags:
    data = json.loads(flag.value)
    print(f"{data['id']}: {'enabled' if data['enabled'] else 'disabled'}")
```

#### Imported: Read-Only Settings

```python
# Make setting read-only
client.set_read_only(
    configuration_setting=setting,
    read_only=True
)

# Remove read-only
client.set_read_only(
    configuration_setting=setting,
    read_only=False
)
```

#### Imported: Snapshots

### Create Snapshot

```python
from azure.appconfiguration import ConfigurationSnapshot, ConfigurationSettingFilter

snapshot = ConfigurationSnapshot(
    name="v1-snapshot",
    filters=[
        ConfigurationSettingFilter(key="app:*", label="production")
    ]
)

created = client.begin_create_snapshot(
    name="v1-snapshot",
    snapshot=snapshot
).result()
```

### List Snapshot Settings

```python
settings = client.list_configuration_settings(
    snapshot_name="v1-snapshot"
)
```

#### Imported: Async Client

```python
from azure.appconfiguration.aio import AzureAppConfigurationClient
from azure.identity.aio import DefaultAzureCredential

async def main():
    credential = DefaultAzureCredential()
    client = AzureAppConfigurationClient(
        base_url=endpoint,
        credential=credential
    )
    
    setting = await client.get_configuration_setting(key="app:message")
    print(setting.value)
    
    await client.close()
    await credential.close()
```

#### Imported: Client Operations

| Operation | Description |
|-----------|-------------|
| `get_configuration_setting` | Get single setting |
| `set_configuration_setting` | Create or update setting |
| `delete_configuration_setting` | Delete setting |
| `list_configuration_settings` | List with filters |
| `set_read_only` | Lock/unlock setting |
| `begin_create_snapshot` | Create point-in-time snapshot |
| `list_snapshots` | List all snapshots |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
