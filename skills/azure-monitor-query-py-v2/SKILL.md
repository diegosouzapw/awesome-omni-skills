---
name: azure-monitor-query-py-v2
description: "Azure Monitor Query SDK for Python workflow skill. Use this skill when the user needs Azure Monitor Query SDK for Python. Use for querying Log Analytics workspaces and Azure Monitor metrics and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["azure-monitor-query-py-v2", "azure-monitor-query-py", "azure", "monitor", "query", "sdk", "for", "python"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Monitor Query SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-monitor-query-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Monitor Query SDK for Python Query logs and metrics from Azure Monitor and Log Analytics workspaces.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Logs Query Client, Metrics Query Client, Async Clients, Common Kusto Queries.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Monitor Query SDK for Python. Use for querying Log Analytics workspaces and Azure Monitor metrics.
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

1. bash pip install azure-monitor-query
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-monitor-query
```

#### Imported: Environment Variables

```bash
# Log Analytics
AZURE_LOG_ANALYTICS_WORKSPACE_ID=<workspace-id>

# Metrics
AZURE_METRICS_RESOURCE_URI=/subscriptions/<sub>/resourceGroups/<rg>/providers/<provider>/<type>/<name>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-monitor-query-py-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-monitor-query-py-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-monitor-query-py-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-monitor-query-py-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use timedelta for relative time ranges
- Handle partial results for large queries
- Use batch queries when running multiple queries
- Set appropriate granularity for metrics to reduce data points
- Convert to DataFrame for easier data analysis
- Use aggregations to summarize metric data
- Filter by dimensions to narrow metric results

### Imported Operating Notes

#### Imported: Best Practices

1. **Use timedelta** for relative time ranges
2. **Handle partial results** for large queries
3. **Use batch queries** when running multiple queries
4. **Set appropriate granularity** for metrics to reduce data points
5. **Convert to DataFrame** for easier data analysis
6. **Use aggregations** to summarize metric data
7. **Filter by dimensions** to narrow metric results

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-monitor-query-py`, fails to mention provenance, or does not use the support pack at all.
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

credential = DefaultAzureCredential()
```

#### Imported: Logs Query Client

### Basic Query

```python
from azure.monitor.query import LogsQueryClient
from datetime import timedelta

client = LogsQueryClient(credential)

query = """
AppRequests
| where TimeGenerated > ago(1h)
| summarize count() by bin(TimeGenerated, 5m), ResultCode
| order by TimeGenerated desc
"""

response = client.query_workspace(
    workspace_id=os.environ["AZURE_LOG_ANALYTICS_WORKSPACE_ID"],
    query=query,
    timespan=timedelta(hours=1)
)

for table in response.tables:
    for row in table.rows:
        print(row)
```

### Query with Time Range

```python
from datetime import datetime, timezone

response = client.query_workspace(
    workspace_id=workspace_id,
    query="AppRequests | take 10",
    timespan=(
        datetime(2024, 1, 1, tzinfo=timezone.utc),
        datetime(2024, 1, 2, tzinfo=timezone.utc)
    )
)
```

### Convert to DataFrame

```python
import pandas as pd

response = client.query_workspace(workspace_id, query, timespan=timedelta(hours=1))

if response.tables:
    table = response.tables[0]
    df = pd.DataFrame(data=table.rows, columns=[col.name for col in table.columns])
    print(df.head())
```

### Batch Query

```python
from azure.monitor.query import LogsBatchQuery

queries = [
    LogsBatchQuery(workspace_id=workspace_id, query="AppRequests | take 5", timespan=timedelta(hours=1)),
    LogsBatchQuery(workspace_id=workspace_id, query="AppExceptions | take 5", timespan=timedelta(hours=1))
]

responses = client.query_batch(queries)

for response in responses:
    if response.tables:
        print(f"Rows: {len(response.tables[0].rows)}")
```

### Handle Partial Results

```python
from azure.monitor.query import LogsQueryStatus

response = client.query_workspace(workspace_id, query, timespan=timedelta(hours=24))

if response.status == LogsQueryStatus.PARTIAL:
    print(f"Partial results: {response.partial_error}")
elif response.status == LogsQueryStatus.FAILURE:
    print(f"Query failed: {response.partial_error}")
```

#### Imported: Metrics Query Client

### Query Resource Metrics

```python
from azure.monitor.query import MetricsQueryClient
from datetime import timedelta

metrics_client = MetricsQueryClient(credential)

response = metrics_client.query_resource(
    resource_uri=os.environ["AZURE_METRICS_RESOURCE_URI"],
    metric_names=["Percentage CPU", "Network In Total"],
    timespan=timedelta(hours=1),
    granularity=timedelta(minutes=5)
)

for metric in response.metrics:
    print(f"{metric.name}:")
    for time_series in metric.timeseries:
        for data in time_series.data:
            print(f"  {data.timestamp}: {data.average}")
```

### Aggregations

```python
from azure.monitor.query import MetricAggregationType

response = metrics_client.query_resource(
    resource_uri=resource_uri,
    metric_names=["Requests"],
    timespan=timedelta(hours=1),
    aggregations=[
        MetricAggregationType.AVERAGE,
        MetricAggregationType.MAXIMUM,
        MetricAggregationType.MINIMUM,
        MetricAggregationType.COUNT
    ]
)
```

### Filter by Dimension

```python
response = metrics_client.query_resource(
    resource_uri=resource_uri,
    metric_names=["Requests"],
    timespan=timedelta(hours=1),
    filter="ApiName eq 'GetBlob'"
)
```

### List Metric Definitions

```python
definitions = metrics_client.list_metric_definitions(resource_uri)
for definition in definitions:
    print(f"{definition.name}: {definition.unit}")
```

### List Metric Namespaces

```python
namespaces = metrics_client.list_metric_namespaces(resource_uri)
for ns in namespaces:
    print(ns.fully_qualified_namespace)
```

#### Imported: Async Clients

```python
from azure.monitor.query.aio import LogsQueryClient, MetricsQueryClient
from azure.identity.aio import DefaultAzureCredential

async def query_logs():
    credential = DefaultAzureCredential()
    client = LogsQueryClient(credential)
    
    response = await client.query_workspace(
        workspace_id=workspace_id,
        query="AppRequests | take 10",
        timespan=timedelta(hours=1)
    )
    
    await client.close()
    await credential.close()
    return response
```

#### Imported: Common Kusto Queries

```kusto
// Requests by status code
AppRequests
| summarize count() by ResultCode
| order by count_ desc

// Exceptions over time
AppExceptions
| summarize count() by bin(TimeGenerated, 1h)

// Slow requests
AppRequests
| where DurationMs > 1000
| project TimeGenerated, Name, DurationMs
| order by DurationMs desc

// Top errors
AppExceptions
| summarize count() by ExceptionType
| top 10 by count_
```

#### Imported: Client Types

| Client | Purpose |
|--------|---------|
| `LogsQueryClient` | Query Log Analytics workspaces |
| `MetricsQueryClient` | Query Azure Monitor metrics |
