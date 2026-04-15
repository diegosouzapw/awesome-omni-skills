---
name: azure-monitor-ingestion-java
description: "Azure Monitor Ingestion SDK for Java workflow skill. Use this skill when the user needs Azure Monitor Ingestion SDK for Java. Send custom logs to Azure Monitor via Data Collection Rules (DCR) and Data Collection Endpoints (DCE) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["azure-monitor-ingestion-java", "azure", "monitor", "ingestion", "sdk", "for", "java", "send"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Azure Monitor Ingestion SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-monitor-ingestion-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Monitor Ingestion SDK for Java Client library for sending custom logs to Azure Monitor using the Logs Ingestion API via Data Collection Rules.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Environment Variables, Client Creation, Key Concepts, Core Operations, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Monitor Ingestion SDK for Java. Send custom logs to Azure Monitor via Data Collection Rules (DCR) and Data Collection Endpoints (DCE).
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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-monitor-ingestion</artifactId> <version>1.2.11</version> </dependency> Or use Azure SDK BOM: xml <dependencyManagement> <dependencies> <dependency> <groupId>com.azure</groupId> <artifactId>azure-sdk-bom</artifactId> <version>{bom_version}</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.azure</groupId> <artifactId>azure-monitor-ingestion</artifactId> </dependency> </dependencies>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-monitor-ingestion</artifactId>
    <version>1.2.11</version>
</dependency>
```

Or use Azure SDK BOM:

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.azure</groupId>
            <artifactId>azure-sdk-bom</artifactId>
            <version>{bom_version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>com.azure</groupId>
        <artifactId>azure-monitor-ingestion</artifactId>
    </dependency>
</dependencies>
```

#### Imported: Prerequisites

- Data Collection Endpoint (DCE)
- Data Collection Rule (DCR)
- Log Analytics workspace
- Target table (custom or built-in: CommonSecurityLog, SecurityEvents, Syslog, WindowsEvents)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-monitor-ingestion-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-monitor-ingestion-java against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-monitor-ingestion-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-monitor-ingestion-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Log Entry Model Example

```java
public class MyLogEntry {
    private String timeGenerated;
    private String level;
    private String message;
    
    public MyLogEntry(String timeGenerated, String level, String message) {
        this.timeGenerated = timeGenerated;
        this.level = level;
        this.message = message;
    }
    
    // Getters required for JSON serialization
    public String getTimeGenerated() { return timeGenerated; }
    public String getLevel() { return level; }
    public String getMessage() { return message; }
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Batch logs — Upload in batches rather than one at a time
- Use concurrency — Set maxConcurrency for large uploads
- Handle partial failures — Use error consumer to log failed entries
- Match DCR schema — Log entry fields must match DCR transformation expectations
- Include TimeGenerated — Most tables require a timestamp field
- Reuse client — Create once, reuse throughout application
- Use async for high throughput — LogsIngestionAsyncClient for reactive patterns

### Imported Operating Notes

#### Imported: Best Practices

1. **Batch logs** — Upload in batches rather than one at a time
2. **Use concurrency** — Set `maxConcurrency` for large uploads
3. **Handle partial failures** — Use error consumer to log failed entries
4. **Match DCR schema** — Log entry fields must match DCR transformation expectations
5. **Include TimeGenerated** — Most tables require a timestamp field
6. **Reuse client** — Create once, reuse throughout application
7. **Use async for high throughput** — `LogsIngestionAsyncClient` for reactive patterns

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-monitor-ingestion-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Maven Package | https://central.sonatype.com/artifact/com.azure/azure-monitor-ingestion |
| GitHub | https://github.com/Azure/azure-sdk-for-java/tree/main/sdk/monitor/azure-monitor-ingestion |
| Product Docs | https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview |
| DCE Overview | https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-endpoint-overview |
| DCR Overview | https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview |
| Troubleshooting | https://github.com/Azure/azure-sdk-for-java/blob/main/sdk/monitor/azure-monitor-ingestion/TROUBLESHOOTING.md |

#### Imported: Environment Variables

```bash
DATA_COLLECTION_ENDPOINT=https://<dce-name>.<region>.ingest.monitor.azure.com
DATA_COLLECTION_RULE_ID=dcr-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
STREAM_NAME=Custom-MyTable_CL
```

#### Imported: Client Creation

### Synchronous Client

```java
import com.azure.identity.DefaultAzureCredential;
import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.monitor.ingestion.LogsIngestionClient;
import com.azure.monitor.ingestion.LogsIngestionClientBuilder;

DefaultAzureCredential credential = new DefaultAzureCredentialBuilder().build();

LogsIngestionClient client = new LogsIngestionClientBuilder()
    .endpoint("<data-collection-endpoint>")
    .credential(credential)
    .buildClient();
```

### Asynchronous Client

```java
import com.azure.monitor.ingestion.LogsIngestionAsyncClient;

LogsIngestionAsyncClient asyncClient = new LogsIngestionClientBuilder()
    .endpoint("<data-collection-endpoint>")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildAsyncClient();
```

#### Imported: Key Concepts

| Concept | Description |
|---------|-------------|
| Data Collection Endpoint (DCE) | Ingestion endpoint URL for your region |
| Data Collection Rule (DCR) | Defines data transformation and routing to tables |
| Stream Name | Target stream in the DCR (e.g., `Custom-MyTable_CL`) |
| Log Analytics Workspace | Destination for ingested logs |

#### Imported: Core Operations

### Upload Custom Logs

```java
import java.util.List;
import java.util.ArrayList;

List<Object> logs = new ArrayList<>();
logs.add(new MyLogEntry("2024-01-15T10:30:00Z", "INFO", "Application started"));
logs.add(new MyLogEntry("2024-01-15T10:30:05Z", "DEBUG", "Processing request"));

client.upload("<data-collection-rule-id>", "<stream-name>", logs);
System.out.println("Logs uploaded successfully");
```

### Upload with Concurrency

For large log collections, enable concurrent uploads:

```java
import com.azure.monitor.ingestion.models.LogsUploadOptions;
import com.azure.core.util.Context;

List<Object> logs = getLargeLogs(); // Large collection

LogsUploadOptions options = new LogsUploadOptions()
    .setMaxConcurrency(3);

client.upload("<data-collection-rule-id>", "<stream-name>", logs, options, Context.NONE);
```

### Upload with Error Handling

Handle partial upload failures gracefully:

```java
LogsUploadOptions options = new LogsUploadOptions()
    .setLogsUploadErrorConsumer(uploadError -> {
        System.err.println("Upload error: " + uploadError.getResponseException().getMessage());
        System.err.println("Failed logs count: " + uploadError.getFailedLogs().size());
        
        // Option 1: Log and continue
        // Option 2: Throw to abort remaining uploads
        // throw uploadError.getResponseException();
    });

client.upload("<data-collection-rule-id>", "<stream-name>", logs, options, Context.NONE);
```

### Async Upload with Reactor

```java
import reactor.core.publisher.Mono;

List<Object> logs = getLogs();

asyncClient.upload("<data-collection-rule-id>", "<stream-name>", logs)
    .doOnSuccess(v -> System.out.println("Upload completed"))
    .doOnError(e -> System.err.println("Upload failed: " + e.getMessage()))
    .subscribe();
```

#### Imported: Error Handling

```java
import com.azure.core.exception.HttpResponseException;

try {
    client.upload(ruleId, streamName, logs);
} catch (HttpResponseException e) {
    System.err.println("HTTP Status: " + e.getResponse().getStatusCode());
    System.err.println("Error: " + e.getMessage());
    
    if (e.getResponse().getStatusCode() == 403) {
        System.err.println("Check DCR permissions and managed identity");
    } else if (e.getResponse().getStatusCode() == 404) {
        System.err.println("Verify DCE endpoint and DCR ID");
    }
}
```

#### Imported: Querying Uploaded Logs

Use azure-monitor-query to query ingested logs:

```java
// See azure-monitor-query skill for LogsQueryClient usage
String query = "MyTable_CL | where TimeGenerated > ago(1h) | limit 10";
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
