---
name: azure-monitor-ingestion-py
description: "Azure Monitor Ingestion SDK for Python workflow skill. Use this skill when the user needs Azure Monitor Ingestion SDK for Python. Use for sending custom logs to Log Analytics workspace via Logs Ingestion API and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-monitor-ingestion-py", "azure", "monitor", "ingestion", "sdk", "for", "python", "use"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Monitor Ingestion SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-monitor-ingestion-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Monitor Ingestion SDK for Python Send custom logs to Azure Monitor Log Analytics workspace using the Logs Ingestion API.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Prerequisites, Authentication, Upload Custom Logs, Upload from JSON File, Custom Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Monitor Ingestion SDK for Python. Use for sending custom logs to Log Analytics workspace via Logs Ingestion API.
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

1. bash pip install azure-monitor-ingestion pip install azure-identity
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-monitor-ingestion
pip install azure-identity
```

#### Imported: Environment Variables

```bash
# Data Collection Endpoint (DCE)
AZURE_DCE_ENDPOINT=https://<dce-name>.<region>.ingest.monitor.azure.com

# Data Collection Rule (DCR) immutable ID
AZURE_DCR_RULE_ID=dcr-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Stream name from DCR
AZURE_DCR_STREAM_NAME=Custom-MyTable_CL
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-monitor-ingestion-py to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-monitor-ingestion-py/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-monitor-ingestion-py/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-monitor-ingestion-py using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use DefaultAzureCredential for authentication
- Handle errors gracefully — use on_error callback for partial failures
- Include TimeGenerated — Required field for all logs
- Match DCR schema — Log fields must match DCR column definitions
- Use async client for high-throughput scenarios
- Batch uploads — SDK handles batching, but send reasonable chunks
- Monitor ingestion — Check Log Analytics for ingestion status

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** for authentication
2. **Handle errors gracefully** — use `on_error` callback for partial failures
3. **Include TimeGenerated** — Required field for all logs
4. **Match DCR schema** — Log fields must match DCR column definitions
5. **Use async client** for high-throughput scenarios
6. **Batch uploads** — SDK handles batching, but send reasonable chunks
7. **Monitor ingestion** — Check Log Analytics for ingestion status
8. **Use context manager** — Ensures proper client cleanup

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-monitor-ingestion-py`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Prerequisites

Before using this SDK, you need:

1. **Log Analytics Workspace** — Target for your logs
2. **Data Collection Endpoint (DCE)** — Ingestion endpoint
3. **Data Collection Rule (DCR)** — Defines schema and destination
4. **Custom Table** — In Log Analytics (created via DCR or manually)

#### Imported: Authentication

```python
from azure.monitor.ingestion import LogsIngestionClient
from azure.identity import DefaultAzureCredential
import os

client = LogsIngestionClient(
    endpoint=os.environ["AZURE_DCE_ENDPOINT"],
    credential=DefaultAzureCredential()
)
```

#### Imported: Upload Custom Logs

```python
from azure.monitor.ingestion import LogsIngestionClient
from azure.identity import DefaultAzureCredential
import os

client = LogsIngestionClient(
    endpoint=os.environ["AZURE_DCE_ENDPOINT"],
    credential=DefaultAzureCredential()
)

rule_id = os.environ["AZURE_DCR_RULE_ID"]
stream_name = os.environ["AZURE_DCR_STREAM_NAME"]

logs = [
    {"TimeGenerated": "2024-01-15T10:00:00Z", "Computer": "server1", "Message": "Application started"},
    {"TimeGenerated": "2024-01-15T10:01:00Z", "Computer": "server1", "Message": "Processing request"},
    {"TimeGenerated": "2024-01-15T10:02:00Z", "Computer": "server2", "Message": "Connection established"}
]

client.upload(rule_id=rule_id, stream_name=stream_name, logs=logs)
```

#### Imported: Upload from JSON File

```python
import json

with open("logs.json", "r") as f:
    logs = json.load(f)

client.upload(rule_id=rule_id, stream_name=stream_name, logs=logs)
```

#### Imported: Custom Error Handling

Handle partial failures with a callback:

```python
failed_logs = []

def on_error(error):
    print(f"Upload failed: {error.error}")
    failed_logs.extend(error.failed_logs)

client.upload(
    rule_id=rule_id,
    stream_name=stream_name,
    logs=logs,
    on_error=on_error
)

# Retry failed logs
if failed_logs:
    print(f"Retrying {len(failed_logs)} failed logs...")
    client.upload(rule_id=rule_id, stream_name=stream_name, logs=failed_logs)
```

#### Imported: Ignore Errors

```python
def ignore_errors(error):
    pass  # Silently ignore upload failures

client.upload(
    rule_id=rule_id,
    stream_name=stream_name,
    logs=logs,
    on_error=ignore_errors
)
```

#### Imported: Async Client

```python
import asyncio
from azure.monitor.ingestion.aio import LogsIngestionClient
from azure.identity.aio import DefaultAzureCredential

async def upload_logs():
    async with LogsIngestionClient(
        endpoint=endpoint,
        credential=DefaultAzureCredential()
    ) as client:
        await client.upload(
            rule_id=rule_id,
            stream_name=stream_name,
            logs=logs
        )

asyncio.run(upload_logs())
```

#### Imported: Sovereign Clouds

```python
from azure.identity import AzureAuthorityHosts, DefaultAzureCredential
from azure.monitor.ingestion import LogsIngestionClient

# Azure Government
credential = DefaultAzureCredential(authority=AzureAuthorityHosts.AZURE_GOVERNMENT)
client = LogsIngestionClient(
    endpoint="https://example.ingest.monitor.azure.us",
    credential=credential,
    credential_scopes=["https://monitor.azure.us/.default"]
)
```

#### Imported: Batching Behavior

The SDK automatically:
- Splits logs into chunks of 1MB or less
- Compresses each chunk with gzip
- Uploads chunks in parallel

No manual batching needed for large log sets.

#### Imported: Client Types

| Client | Purpose |
|--------|---------|
| `LogsIngestionClient` | Sync client for uploading logs |
| `LogsIngestionClient` (aio) | Async client for uploading logs |

#### Imported: Key Concepts

| Concept | Description |
|---------|-------------|
| **DCE** | Data Collection Endpoint — ingestion URL |
| **DCR** | Data Collection Rule — defines schema, transformations, destination |
| **Stream** | Named data flow within a DCR |
| **Custom Table** | Target table in Log Analytics (ends with `_CL`) |

#### Imported: DCR Stream Name Format

Stream names follow patterns:
- `Custom-<TableName>_CL` — For custom tables
- `Microsoft-<TableName>` — For built-in tables
