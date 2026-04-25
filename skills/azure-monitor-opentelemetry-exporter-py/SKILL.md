---
name: azure-monitor-opentelemetry-exporter-py
description: "Azure Monitor OpenTelemetry Exporter for Python workflow skill. Use this skill when the user needs Azure Monitor OpenTelemetry Exporter for Python. Use for low-level OpenTelemetry export to Application Insights and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-monitor-opentelemetry-exporter-py", "azure", "monitor", "opentelemetry", "exporter", "for", "python", "use"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Azure Monitor OpenTelemetry Exporter for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-monitor-opentelemetry-exporter-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Monitor OpenTelemetry Exporter for Python Low-level exporter for sending OpenTelemetry traces, metrics, and logs to Application Insights.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Trace Exporter, Metric Exporter, Log Exporter, From Environment Variable, Azure AD Authentication.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Scenario - Use
- Quick setup, auto-instrumentation - azure-monitor-opentelemetry (distro)
- Custom OpenTelemetry pipeline - azure-monitor-opentelemetry-exporter (this)
- Fine-grained control over telemetry - azure-monitor-opentelemetry-exporter (this)
- Use when the request clearly matches the imported source intent: Azure Monitor OpenTelemetry Exporter for Python. Use for low-level OpenTelemetry export to Application Insights.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. bash pip install azure-monitor-opentelemetry-exporter
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install azure-monitor-opentelemetry-exporter
```

#### Imported: Environment Variables

```bash
APPLICATIONINSIGHTS_CONNECTION_STRING=InstrumentationKey=xxx;IngestionEndpoint=https://xxx.in.applicationinsights.azure.com/
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-monitor-opentelemetry-exporter-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-monitor-opentelemetry-exporter-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-monitor-opentelemetry-exporter-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-monitor-opentelemetry-exporter-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use BatchSpanProcessor for production (not SimpleSpanProcessor)
- Use ApplicationInsightsSampler for consistent sampling across services
- Enable offline storage for reliability in production
- Use AAD authentication instead of instrumentation keys
- Set export intervals appropriate for your workload
- Use the distro (azure-monitor-opentelemetry) unless you need custom pipelines
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use BatchSpanProcessor** for production (not SimpleSpanProcessor)
2. **Use ApplicationInsightsSampler** for consistent sampling across services
3. **Enable offline storage** for reliability in production
4. **Use AAD authentication** instead of instrumentation keys
5. **Set export intervals** appropriate for your workload
6. **Use the distro** (`azure-monitor-opentelemetry`) unless you need custom pipelines

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-monitor-opentelemetry-exporter-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Trace Exporter

```python
from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter

# Create exporter
exporter = AzureMonitorTraceExporter(
    connection_string="InstrumentationKey=xxx;..."
)

# Configure tracer provider
trace.set_tracer_provider(TracerProvider())
trace.get_tracer_provider().add_span_processor(
    BatchSpanProcessor(exporter)
)

# Use tracer
tracer = trace.get_tracer(__name__)
with tracer.start_as_current_span("my-span"):
    print("Hello, World!")
```

#### Imported: Metric Exporter

```python
from opentelemetry import metrics
from opentelemetry.sdk.metrics import MeterProvider
from opentelemetry.sdk.metrics.export import PeriodicExportingMetricReader
from azure.monitor.opentelemetry.exporter import AzureMonitorMetricExporter

# Create exporter
exporter = AzureMonitorMetricExporter(
    connection_string="InstrumentationKey=xxx;..."
)

# Configure meter provider
reader = PeriodicExportingMetricReader(exporter, export_interval_millis=60000)
metrics.set_meter_provider(MeterProvider(metric_readers=[reader]))

# Use meter
meter = metrics.get_meter(__name__)
counter = meter.create_counter("requests_total")
counter.add(1, {"route": "/api/users"})
```

#### Imported: Log Exporter

```python
import logging
from opentelemetry._logs import set_logger_provider
from opentelemetry.sdk._logs import LoggerProvider, LoggingHandler
from opentelemetry.sdk._logs.export import BatchLogRecordProcessor
from azure.monitor.opentelemetry.exporter import AzureMonitorLogExporter

# Create exporter
exporter = AzureMonitorLogExporter(
    connection_string="InstrumentationKey=xxx;..."
)

# Configure logger provider
logger_provider = LoggerProvider()
logger_provider.add_log_record_processor(BatchLogRecordProcessor(exporter))
set_logger_provider(logger_provider)

# Add handler to Python logging
handler = LoggingHandler(level=logging.INFO, logger_provider=logger_provider)
logging.getLogger().addHandler(handler)

# Use logging
logger = logging.getLogger(__name__)
logger.info("This will be sent to Application Insights")
```

#### Imported: From Environment Variable

Exporters read `APPLICATIONINSIGHTS_CONNECTION_STRING` automatically:

```python
from azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter

# Connection string from environment
exporter = AzureMonitorTraceExporter()
```

#### Imported: Azure AD Authentication

```python
from azure.identity import DefaultAzureCredential
from azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter

exporter = AzureMonitorTraceExporter(
    credential=DefaultAzureCredential()
)
```

#### Imported: Sampling

Use `ApplicationInsightsSampler` for consistent sampling:

```python
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.sampling import ParentBasedTraceIdRatio
from azure.monitor.opentelemetry.exporter import ApplicationInsightsSampler

# Sample 10% of traces
sampler = ApplicationInsightsSampler(sampling_ratio=0.1)

trace.set_tracer_provider(TracerProvider(sampler=sampler))
```

#### Imported: Offline Storage

Configure offline storage for retry:

```python
from azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter

exporter = AzureMonitorTraceExporter(
    connection_string="...",
    storage_directory="/path/to/storage",  # Custom storage path
    disable_offline_storage=False  # Enable retry (default)
)
```

#### Imported: Disable Offline Storage

```python
exporter = AzureMonitorTraceExporter(
    connection_string="...",
    disable_offline_storage=True  # No retry on failure
)
```

#### Imported: Sovereign Clouds

```python
from azure.identity import AzureAuthorityHosts, DefaultAzureCredential
from azure.monitor.opentelemetry.exporter import AzureMonitorTraceExporter

# Azure Government
credential = DefaultAzureCredential(authority=AzureAuthorityHosts.AZURE_GOVERNMENT)
exporter = AzureMonitorTraceExporter(
    connection_string="InstrumentationKey=xxx;IngestionEndpoint=https://xxx.in.applicationinsights.azure.us/",
    credential=credential
)
```

#### Imported: Exporter Types

| Exporter | Telemetry Type | Application Insights Table |
|----------|---------------|---------------------------|
| `AzureMonitorTraceExporter` | Traces/Spans | requests, dependencies, exceptions |
| `AzureMonitorMetricExporter` | Metrics | customMetrics, performanceCounters |
| `AzureMonitorLogExporter` | Logs | traces, customEvents |

#### Imported: Configuration Options

| Parameter | Description | Default |
|-----------|-------------|---------|
| `connection_string` | Application Insights connection string | From env var |
| `credential` | Azure credential for AAD auth | None |
| `disable_offline_storage` | Disable retry storage | False |
| `storage_directory` | Custom storage path | Temp directory |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
