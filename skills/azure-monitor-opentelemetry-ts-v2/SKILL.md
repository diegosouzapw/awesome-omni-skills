---
name: azure-monitor-opentelemetry-ts-v2
description: "Azure Monitor OpenTelemetry SDK for TypeScript workflow skill. Use this skill when the user needs Auto-instrument Node.js applications with distributed tracing, metrics, and logs and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-monitor-opentelemetry-ts-v2", "azure-monitor-opentelemetry-ts", "auto-instrument", "node", "applications", "distributed", "tracing", "metrics"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Monitor OpenTelemetry SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-monitor-opentelemetry-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Monitor OpenTelemetry SDK for TypeScript Auto-instrument Node.js applications with distributed tracing, metrics, and logs.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Quick Start (Auto-Instrumentation), ESM Support (Node.js 18.19+), Full Configuration, Custom Traces, Custom Metrics.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Auto-instrument Node.js applications with distributed tracing, metrics, and logs.
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

1. bash # Distro (recommended - auto-instrumentation) npm install @azure/monitor-opentelemetry # Low-level exporters (custom OpenTelemetry setup) npm install @azure/monitor-opentelemetry-exporter # Custom logs ingestion npm install @azure/monitor-ingestion ### Trace Exporter typescript import { AzureMonitorTraceExporter } from "@azure/monitor-opentelemetry-exporter"; import { NodeTracerProvider, BatchSpanProcessor } from "@opentelemetry/sdk-trace-node"; const exporter = new AzureMonitorTraceExporter({ connectionString: process.env.APPLICATIONINSIGHTSCONNECTIONSTRING }); const provider = new NodeTracerProvider({ spanProcessors: [new BatchSpanProcessor(exporter)] }); provider.register(); ### Metric Exporter typescript import { AzureMonitorMetricExporter } from "@azure/monitor-opentelemetry-exporter"; import { PeriodicExportingMetricReader, MeterProvider } from "@opentelemetry/sdk-metrics"; import { metrics } from "@opentelemetry/api"; const exporter = new AzureMonitorMetricExporter({ connectionString: process.env.APPLICATIONINSIGHTSCONNECTIONSTRING }); const meterProvider = new MeterProvider({ readers: [new PeriodicExportingMetricReader({ exporter })] }); metrics.setGlobalMeterProvider(meterProvider); ### Log Exporter typescript import { AzureMonitorLogExporter } from "@azure/monitor-opentelemetry-exporter"; import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs"; import { logs } from "@opentelemetry/api-logs"; const exporter = new AzureMonitorLogExporter({ connectionString: process.env.APPLICATIONINSIGHTSCONNECTIONSTRING }); const loggerProvider = new LoggerProvider(); loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(exporter)); logs.setGlobalLoggerProvider(loggerProvider); typescript import { SpanProcessor, ReadableSpan } from "@opentelemetry/sdk-trace-base"; import { Span, Context, SpanKind, TraceFlags } from "@opentelemetry/api"; import { useAzureMonitor } from "@azure/monitor-opentelemetry"; class FilteringSpanProcessor implements SpanProcessor { forceFlush(): Promise<void> { return Promise.resolve(); } shutdown(): Promise<void> { return Promise.resolve(); } onStart(span: Span, context: Context): void {} onEnd(span: ReadableSpan): void { // Add custom attributes span.attributes["CustomDimension"] = "value"; // Filter out internal spans if (span.kind === SpanKind.INTERNAL) { span.spanContext().traceFlags = TraceFlags.NONE; } } } useAzureMonitor({ spanProcessors: [new FilteringSpanProcessor()] });
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Distro (recommended - auto-instrumentation)
npm install @azure/monitor-opentelemetry

# Low-level exporters (custom OpenTelemetry setup)
npm install @azure/monitor-opentelemetry-exporter

# Custom logs ingestion
npm install @azure/monitor-ingestion
```

#### Imported: Manual Exporter Setup

### Trace Exporter

```typescript
import { AzureMonitorTraceExporter } from "@azure/monitor-opentelemetry-exporter";
import { NodeTracerProvider, BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";

const exporter = new AzureMonitorTraceExporter({
  connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING
});

const provider = new NodeTracerProvider({
  spanProcessors: [new BatchSpanProcessor(exporter)]
});

provider.register();
```

### Metric Exporter

```typescript
import { AzureMonitorMetricExporter } from "@azure/monitor-opentelemetry-exporter";
import { PeriodicExportingMetricReader, MeterProvider } from "@opentelemetry/sdk-metrics";
import { metrics } from "@opentelemetry/api";

const exporter = new AzureMonitorMetricExporter({
  connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING
});

const meterProvider = new MeterProvider({
  readers: [new PeriodicExportingMetricReader({ exporter })]
});

metrics.setGlobalMeterProvider(meterProvider);
```

### Log Exporter

```typescript
import { AzureMonitorLogExporter } from "@azure/monitor-opentelemetry-exporter";
import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";
import { logs } from "@opentelemetry/api-logs";

const exporter = new AzureMonitorLogExporter({
  connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING
});

const loggerProvider = new LoggerProvider();
loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(exporter));

logs.setGlobalLoggerProvider(loggerProvider);
```

#### Imported: Custom Span Processor

```typescript
import { SpanProcessor, ReadableSpan } from "@opentelemetry/sdk-trace-base";
import { Span, Context, SpanKind, TraceFlags } from "@opentelemetry/api";
import { useAzureMonitor } from "@azure/monitor-opentelemetry";

class FilteringSpanProcessor implements SpanProcessor {
  forceFlush(): Promise<void> { return Promise.resolve(); }
  shutdown(): Promise<void> { return Promise.resolve(); }
  onStart(span: Span, context: Context): void {}
  
  onEnd(span: ReadableSpan): void {
    // Add custom attributes
    span.attributes["CustomDimension"] = "value";
    
    // Filter out internal spans
    if (span.kind === SpanKind.INTERNAL) {
      span.spanContext().traceFlags = TraceFlags.NONE;
    }
  }
}

useAzureMonitor({
  spanProcessors: [new FilteringSpanProcessor()]
});
```

#### Imported: Environment Variables

```bash
APPLICATIONINSIGHTS_CONNECTION_STRING=InstrumentationKey=...;IngestionEndpoint=...
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-monitor-opentelemetry-ts-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-monitor-opentelemetry-ts-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-monitor-opentelemetry-ts-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-monitor-opentelemetry-ts-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Call useAzureMonitor() first - Before importing other modules
- Use ESM loader for ESM projects - --import @azure/monitor-opentelemetry/loader
- Enable offline storage - For reliable telemetry in disconnected scenarios
- Set sampling ratio - For high-traffic applications
- Add custom dimensions - Use span processors for enrichment
- Graceful shutdown - Call shutdownAzureMonitor() to flush telemetry
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Call useAzureMonitor() first** - Before importing other modules
2. **Use ESM loader for ESM projects** - `--import @azure/monitor-opentelemetry/loader`
3. **Enable offline storage** - For reliable telemetry in disconnected scenarios
4. **Set sampling ratio** - For high-traffic applications
5. **Add custom dimensions** - Use span processors for enrichment
6. **Graceful shutdown** - Call `shutdownAzureMonitor()` to flush telemetry

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-monitor-opentelemetry-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Quick Start (Auto-Instrumentation)

**IMPORTANT:** Call `useAzureMonitor()` BEFORE importing other modules.

```typescript
import { useAzureMonitor } from "@azure/monitor-opentelemetry";

useAzureMonitor({
  azureMonitorExporterOptions: {
    connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING
  }
});

// Now import your application
import express from "express";
const app = express();
```

#### Imported: ESM Support (Node.js 18.19+)

```bash
node --import @azure/monitor-opentelemetry/loader ./dist/index.js
```

**package.json:**
```json
{
  "scripts": {
    "start": "node --import @azure/monitor-opentelemetry/loader ./dist/index.js"
  }
}
```

#### Imported: Full Configuration

```typescript
import { useAzureMonitor, AzureMonitorOpenTelemetryOptions } from "@azure/monitor-opentelemetry";
import { resourceFromAttributes } from "@opentelemetry/resources";

const options: AzureMonitorOpenTelemetryOptions = {
  azureMonitorExporterOptions: {
    connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING,
    storageDirectory: "/path/to/offline/storage",
    disableOfflineStorage: false
  },
  
  // Sampling
  samplingRatio: 1.0,  // 0-1, percentage of traces
  
  // Features
  enableLiveMetrics: true,
  enableStandardMetrics: true,
  enablePerformanceCounters: true,
  
  // Instrumentation libraries
  instrumentationOptions: {
    azureSdk: { enabled: true },
    http: { enabled: true },
    mongoDb: { enabled: true },
    mySql: { enabled: true },
    postgreSql: { enabled: true },
    redis: { enabled: true },
    bunyan: { enabled: false },
    winston: { enabled: false }
  },
  
  // Custom resource
  resource: resourceFromAttributes({ "service.name": "my-service" })
};

useAzureMonitor(options);
```

#### Imported: Custom Traces

```typescript
import { trace } from "@opentelemetry/api";

const tracer = trace.getTracer("my-tracer");

const span = tracer.startSpan("doWork");
try {
  span.setAttribute("component", "worker");
  span.setAttribute("operation.id", "42");
  span.addEvent("processing started");
  
  // Your work here
  
} catch (error) {
  span.recordException(error as Error);
  span.setStatus({ code: 2, message: (error as Error).message });
} finally {
  span.end();
}
```

#### Imported: Custom Metrics

```typescript
import { metrics } from "@opentelemetry/api";

const meter = metrics.getMeter("my-meter");

// Counter
const counter = meter.createCounter("requests_total");
counter.add(1, { route: "/api/users", method: "GET" });

// Histogram
const histogram = meter.createHistogram("request_duration_ms");
histogram.record(150, { route: "/api/users" });

// Observable Gauge
const gauge = meter.createObservableGauge("active_connections");
gauge.addCallback((result) => {
  result.observe(getActiveConnections(), { pool: "main" });
});
```

#### Imported: Custom Logs Ingestion

```typescript
import { DefaultAzureCredential } from "@azure/identity";
import { LogsIngestionClient, isAggregateLogsUploadError } from "@azure/monitor-ingestion";

const endpoint = "https://<dce>.ingest.monitor.azure.com";
const ruleId = "<data-collection-rule-id>";
const streamName = "Custom-MyTable_CL";

const client = new LogsIngestionClient(endpoint, new DefaultAzureCredential());

const logs = [
  {
    Time: new Date().toISOString(),
    Computer: "Server1",
    Message: "Application started",
    Level: "Information"
  }
];

try {
  await client.upload(ruleId, streamName, logs);
} catch (error) {
  if (isAggregateLogsUploadError(error)) {
    for (const uploadError of error.errors) {
      console.error("Failed logs:", uploadError.failedLogs);
    }
  }
}
```

#### Imported: Sampling

```typescript
import { ApplicationInsightsSampler } from "@azure/monitor-opentelemetry-exporter";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";

// Sample 75% of traces
const sampler = new ApplicationInsightsSampler(0.75);

const provider = new NodeTracerProvider({ sampler });
```

#### Imported: Shutdown

```typescript
import { useAzureMonitor, shutdownAzureMonitor } from "@azure/monitor-opentelemetry";

useAzureMonitor();

// On application shutdown
process.on("SIGTERM", async () => {
  await shutdownAzureMonitor();
  process.exit(0);
});
```

#### Imported: Key Types

```typescript
import {
  useAzureMonitor,
  shutdownAzureMonitor,
  AzureMonitorOpenTelemetryOptions,
  InstrumentationOptions
} from "@azure/monitor-opentelemetry";

import {
  AzureMonitorTraceExporter,
  AzureMonitorMetricExporter,
  AzureMonitorLogExporter,
  ApplicationInsightsSampler,
  AzureMonitorExporterOptions
} from "@azure/monitor-opentelemetry-exporter";

import {
  LogsIngestionClient,
  isAggregateLogsUploadError
} from "@azure/monitor-ingestion";
```
