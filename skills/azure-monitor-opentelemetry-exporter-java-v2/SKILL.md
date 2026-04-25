---
name: azure-monitor-opentelemetry-exporter-java-v2
description: "Azure Monitor OpenTelemetry Exporter for Java workflow skill. Use this skill when the user needs Azure Monitor OpenTelemetry Exporter for Java. Export OpenTelemetry traces, metrics, and logs to Azure Monitor/Application Insights and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["azure-monitor-opentelemetry-exporter-java-v2", "azure-monitor-opentelemetry-exporter-java", "azure", "monitor", "opentelemetry", "exporter", "for", "java"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-25"
---

# Azure Monitor OpenTelemetry Exporter for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-monitor-opentelemetry-exporter-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Monitor OpenTelemetry Exporter for Java > ⚠️ DEPRECATION NOTICE: This package is deprecated. Migrate to azure-monitor-opentelemetry-autoconfigure. > > See Migration Guide for detailed instructions. Export OpenTelemetry telemetry data to Azure Monitor / Application Insights.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Recommended: Use Autoconfigure Instead, Environment Variables, Creating Spans, Adding Span Attributes, Nested Spans, Recording Exceptions.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Monitor OpenTelemetry Exporter for Java. Export OpenTelemetry traces, metrics, and logs to Azure Monitor/Application Insights.
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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-monitor-opentelemetry-exporter</artifactId> <version>1.0.0-beta.x</version> </dependency> ### Using Environment Variable java import io.opentelemetry.sdk.autoconfigure.AutoConfiguredOpenTelemetrySdk; import io.opentelemetry.sdk.autoconfigure.AutoConfiguredOpenTelemetrySdkBuilder; import io.opentelemetry.api.OpenTelemetry; import com.azure.monitor.opentelemetry.exporter.AzureMonitorExporter; // Connection string from APPLICATIONINSIGHTSCONNECTIONSTRING env var AutoConfiguredOpenTelemetrySdkBuilder sdkBuilder = AutoConfiguredOpenTelemetrySdk.builder(); AzureMonitorExporter.customize(sdkBuilder); OpenTelemetry openTelemetry = sdkBuilder.build().getOpenTelemetrySdk(); ### With Explicit Connection String java AutoConfiguredOpenTelemetrySdkBuilder sdkBuilder = AutoConfiguredOpenTelemetrySdk.builder(); AzureMonitorExporter.customize(sdkBuilder, "{connection-string}"); OpenTelemetry openTelemetry = sdkBuilder.build().getOpenTelemetrySdk(); java import io.opentelemetry.sdk.trace.SpanProcessor; import io.opentelemetry.sdk.trace.ReadWriteSpan; import io.opentelemetry.sdk.trace.ReadableSpan; import io.opentelemetry.context.Context; private static final AttributeKey<String> CUSTOMATTR = AttributeKey.stringKey("custom.attribute"); SpanProcessor customProcessor = new SpanProcessor() { @Override public void onStart(Context context, ReadWriteSpan span) { // Add custom attribute to every span span.setAttribute(CUSTOMATTR, "customValue"); } @Override public boolean isStartRequired() { return true; } @Override public void onEnd(ReadableSpan span) { // Post-processing if needed } @Override public boolean isEndRequired() { return false; } }; // Register processor AutoConfiguredOpenTelemetrySdkBuilder sdkBuilder = AutoConfiguredOpenTelemetrySdk.builder(); AzureMonitorExporter.customize(sdkBuilder); sdkBuilder.addTracerProviderCustomizer( (sdkTracerProviderBuilder, configProperties) -> sdkTracerProviderBuilder.addSpanProcessor(customProcessor) ); OpenTelemetry openTelemetry = sdkBuilder.build().getOpenTelemetrySdk();
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation (Deprecated)

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-monitor-opentelemetry-exporter</artifactId>
    <version>1.0.0-beta.x</version>
</dependency>
```

#### Imported: Basic Setup with Autoconfigure (Recommended)

### Using Environment Variable

```java
import io.opentelemetry.sdk.autoconfigure.AutoConfiguredOpenTelemetrySdk;
import io.opentelemetry.sdk.autoconfigure.AutoConfiguredOpenTelemetrySdkBuilder;
import io.opentelemetry.api.OpenTelemetry;
import com.azure.monitor.opentelemetry.exporter.AzureMonitorExporter;

// Connection string from APPLICATIONINSIGHTS_CONNECTION_STRING env var
AutoConfiguredOpenTelemetrySdkBuilder sdkBuilder = AutoConfiguredOpenTelemetrySdk.builder();
AzureMonitorExporter.customize(sdkBuilder);
OpenTelemetry openTelemetry = sdkBuilder.build().getOpenTelemetrySdk();
```

### With Explicit Connection String

```java
AutoConfiguredOpenTelemetrySdkBuilder sdkBuilder = AutoConfiguredOpenTelemetrySdk.builder();
AzureMonitorExporter.customize(sdkBuilder, "{connection-string}");
OpenTelemetry openTelemetry = sdkBuilder.build().getOpenTelemetrySdk();
```

#### Imported: Custom Span Processor

```java
import io.opentelemetry.sdk.trace.SpanProcessor;
import io.opentelemetry.sdk.trace.ReadWriteSpan;
import io.opentelemetry.sdk.trace.ReadableSpan;
import io.opentelemetry.context.Context;

private static final AttributeKey<String> CUSTOM_ATTR = AttributeKey.stringKey("custom.attribute");

SpanProcessor customProcessor = new SpanProcessor() {
    @Override
    public void onStart(Context context, ReadWriteSpan span) {
        // Add custom attribute to every span
        span.setAttribute(CUSTOM_ATTR, "customValue");
    }

    @Override
    public boolean isStartRequired() {
        return true;
    }

    @Override
    public void onEnd(ReadableSpan span) {
        // Post-processing if needed
    }

    @Override
    public boolean isEndRequired() {
        return false;
    }
};

// Register processor
AutoConfiguredOpenTelemetrySdkBuilder sdkBuilder = AutoConfiguredOpenTelemetrySdk.builder();
AzureMonitorExporter.customize(sdkBuilder);

sdkBuilder.addTracerProviderCustomizer(
    (sdkTracerProviderBuilder, configProperties) ->
        sdkTracerProviderBuilder.addSpanProcessor(customProcessor)
);

OpenTelemetry openTelemetry = sdkBuilder.build().getOpenTelemetrySdk();
```

#### Imported: Recommended: Use Autoconfigure Instead

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-monitor-opentelemetry-autoconfigure</artifactId>
    <version>LATEST</version>
</dependency>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-monitor-opentelemetry-exporter-java-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-monitor-opentelemetry-exporter-java-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-monitor-opentelemetry-exporter-java-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-monitor-opentelemetry-exporter-java-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use autoconfigure — Migrate to azure-monitor-opentelemetry-autoconfigure
- Set meaningful span names — Use descriptive operation names
- Add relevant attributes — Include contextual data for debugging
- Handle exceptions — Always record exceptions on spans
- Use semantic conventions — Follow OpenTelemetry semantic conventions
- End spans in finally — Ensure spans are always ended
- Use try-with-resources — Scope management with try-with-resources pattern

### Imported Operating Notes

#### Imported: Best Practices

1. **Use autoconfigure** — Migrate to `azure-monitor-opentelemetry-autoconfigure`
2. **Set meaningful span names** — Use descriptive operation names
3. **Add relevant attributes** — Include contextual data for debugging
4. **Handle exceptions** — Always record exceptions on spans
5. **Use semantic conventions** — Follow OpenTelemetry semantic conventions
6. **End spans in finally** — Ensure spans are always ended
7. **Use try-with-resources** — Scope management with try-with-resources pattern

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-monitor-opentelemetry-exporter-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-keyvault-secrets-ts-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-maps-search-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-messaging-webpubsub-java-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-messaging-webpubsubservice-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| Maven Package | https://central.sonatype.com/artifact/com.azure/azure-monitor-opentelemetry-exporter |
| GitHub | https://github.com/Azure/azure-sdk-for-java/tree/main/sdk/monitor/azure-monitor-opentelemetry-exporter |
| Migration Guide | https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/monitor/azure-monitor-opentelemetry-exporter/MIGRATION.md |
| Autoconfigure Package | https://central.sonatype.com/artifact/com.azure/azure-monitor-opentelemetry-autoconfigure |
| OpenTelemetry Java | https://opentelemetry.io/docs/languages/java/ |
| Application Insights | https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview |

#### Imported: Environment Variables

```bash
APPLICATIONINSIGHTS_CONNECTION_STRING=InstrumentationKey=xxx;IngestionEndpoint=https://xxx.in.applicationinsights.azure.com/
```

#### Imported: Creating Spans

```java
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.context.Scope;

// Get tracer
Tracer tracer = openTelemetry.getTracer("com.example.myapp");

// Create span
Span span = tracer.spanBuilder("myOperation").startSpan();

try (Scope scope = span.makeCurrent()) {
    // Your application logic
    doWork();
} catch (Throwable t) {
    span.recordException(t);
    throw t;
} finally {
    span.end();
}
```

#### Imported: Adding Span Attributes

```java
import io.opentelemetry.api.common.AttributeKey;
import io.opentelemetry.api.common.Attributes;

Span span = tracer.spanBuilder("processOrder")
    .setAttribute("order.id", "12345")
    .setAttribute("customer.tier", "premium")
    .startSpan();

try (Scope scope = span.makeCurrent()) {
    // Add attributes during execution
    span.setAttribute("items.count", 3);
    span.setAttribute("total.amount", 99.99);

    processOrder();
} finally {
    span.end();
}
```

#### Imported: Nested Spans

```java
public void parentOperation() {
    Span parentSpan = tracer.spanBuilder("parentOperation").startSpan();
    try (Scope scope = parentSpan.makeCurrent()) {
        childOperation();
    } finally {
        parentSpan.end();
    }
}

public void childOperation() {
    // Automatically links to parent via Context
    Span childSpan = tracer.spanBuilder("childOperation").startSpan();
    try (Scope scope = childSpan.makeCurrent()) {
        // Child work
    } finally {
        childSpan.end();
    }
}
```

#### Imported: Recording Exceptions

```java
Span span = tracer.spanBuilder("riskyOperation").startSpan();
try (Scope scope = span.makeCurrent()) {
    performRiskyWork();
} catch (Exception e) {
    span.recordException(e);
    span.setStatus(StatusCode.ERROR, e.getMessage());
    throw e;
} finally {
    span.end();
}
```

#### Imported: Metrics (via OpenTelemetry)

```java
import io.opentelemetry.api.metrics.Meter;
import io.opentelemetry.api.metrics.LongCounter;
import io.opentelemetry.api.metrics.LongHistogram;

Meter meter = openTelemetry.getMeter("com.example.myapp");

// Counter
LongCounter requestCounter = meter.counterBuilder("http.requests")
    .setDescription("Total HTTP requests")
    .setUnit("requests")
    .build();

requestCounter.add(1, Attributes.of(
    AttributeKey.stringKey("http.method"), "GET",
    AttributeKey.longKey("http.status_code"), 200L
));

// Histogram
LongHistogram latencyHistogram = meter.histogramBuilder("http.latency")
    .setDescription("Request latency")
    .setUnit("ms")
    .ofLongs()
    .build();

latencyHistogram.record(150, Attributes.of(
    AttributeKey.stringKey("http.route"), "/api/users"
));
```

#### Imported: Key Concepts

| Concept | Description |
|---------|-------------|
| Connection String | Application Insights connection string with instrumentation key |
| Tracer | Creates spans for distributed tracing |
| Span | Represents a unit of work with timing and attributes |
| SpanProcessor | Intercepts span lifecycle for customization |
| Exporter | Sends telemetry to Azure Monitor |

#### Imported: Migration to Autoconfigure

The `azure-monitor-opentelemetry-autoconfigure` package provides:
- Automatic instrumentation of common libraries
- Simplified configuration
- Better integration with OpenTelemetry SDK

### Migration Steps

1. Replace dependency:
   ```xml
   <!-- Remove -->
   <dependency>
       <groupId>com.azure</groupId>
       <artifactId>azure-monitor-opentelemetry-exporter</artifactId>
   </dependency>

   <!-- Add -->
   <dependency>
       <groupId>com.azure</groupId>
       <artifactId>azure-monitor-opentelemetry-autoconfigure</artifactId>
   </dependency>
   ```

2. Update initialization code per [Migration Guide](https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/monitor/azure-monitor-opentelemetry-exporter/MIGRATION.md)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
