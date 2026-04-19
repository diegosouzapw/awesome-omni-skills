---
name: azure-ai-agents-persistent-java
description: "Azure AI Agents Persistent SDK for Java workflow skill. Use this skill when the user needs Azure AI Agents Persistent SDK for Java. Low-level SDK for creating and managing AI agents with threads, messages, runs, and tools and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["azure-ai-agents-persistent-java", "azure", "persistent", "sdk", "for", "java", "low-level", "creating"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Azure AI Agents Persistent SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-agents-persistent-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure AI Agents Persistent SDK for Java Low-level SDK for creating and managing persistent AI agents with threads, messages, runs, and tools.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Key Concepts, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Agents Persistent SDK for Java. Low-level SDK for creating and managing AI agents with threads, messages, runs, and tools.
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

1. `xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-ai-agents-persistent</artifactId> <version>1.0.0-beta.1</version> </dependency> ### 1.
2. Create Agent java // Create agent with tools PersistentAgent agent = client.createAgent( modelDeploymentName, "Math Tutor", "You are a personal math tutor." ); ### 2.
3. Create Thread java PersistentAgentThread thread = client.createThread(); ### 3.
4. Add Message java client.createMessage( thread.getId(), MessageRole.USER, "I need help with equations." ); ### 4.
5. Run Agent java ThreadRun run = client.createRun(thread.getId(), agent.getId()); // Poll for completion while (run.getStatus() == RunStatus.QUEUED || run.getStatus() == RunStatus.IN_PROGRESS) { Thread.sleep(500); run = client.getRun(thread.getId(), run.getId()); } ### 5.
6. Get Response java PagedIterable<PersistentThreadMessage> messages = client.listMessages(thread.getId()); for (PersistentThreadMessage message : messages) { System.out.println(message.getRole() + ": " + message.getContent()); } ### 6.
7. Cleanup java client.deleteThread(thread.getId()); client.deleteAgent(agent.getId()); `

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-ai-agents-persistent</artifactId>
    <version>1.0.0-beta.1</version>
</dependency>
```

#### Imported: Core Workflow

### 1. Create Agent

```java
// Create agent with tools
PersistentAgent agent = client.createAgent(
    modelDeploymentName,
    "Math Tutor",
    "You are a personal math tutor."
);
```

### 2. Create Thread

```java
PersistentAgentThread thread = client.createThread();
```

### 3. Add Message

```java
client.createMessage(
    thread.getId(),
    MessageRole.USER,
    "I need help with equations."
);
```

### 4. Run Agent

```java
ThreadRun run = client.createRun(thread.getId(), agent.getId());

// Poll for completion
while (run.getStatus() == RunStatus.QUEUED || run.getStatus() == RunStatus.IN_PROGRESS) {
    Thread.sleep(500);
    run = client.getRun(thread.getId(), run.getId());
}
```

### 5. Get Response

```java
PagedIterable<PersistentThreadMessage> messages = client.listMessages(thread.getId());
for (PersistentThreadMessage message : messages) {
    System.out.println(message.getRole() + ": " + message.getContent());
}
```

### 6. Cleanup

```java
client.deleteThread(thread.getId());
client.deleteAgent(agent.getId());
```

#### Imported: Environment Variables

```bash
PROJECT_ENDPOINT=https://<resource>.services.ai.azure.com/api/projects/<project>
MODEL_DEPLOYMENT_NAME=gpt-4o-mini
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-agents-persistent-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-agents-persistent-java against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-agents-persistent-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-agents-persistent-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultAzureCredential for production authentication
- Poll with appropriate delays — 500ms recommended between status checks
- Clean up resources — Delete threads and agents when done
- Handle all run statuses — Check for RequiresAction, Failed, Cancelled
- Use async client for better throughput in high-concurrency scenarios
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use DefaultAzureCredential** for production authentication
2. **Poll with appropriate delays** — 500ms recommended between status checks
3. **Clean up resources** — Delete threads and agents when done
4. **Handle all run statuses** — Check for RequiresAction, Failed, Cancelled
5. **Use async client** for better throughput in high-concurrency scenarios

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-agents-persistent-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Maven Package | https://central.sonatype.com/artifact/com.azure/azure-ai-agents-persistent |
| GitHub Source | https://github.com/Azure/azure-sdk-for-java/tree/main/sdk/ai/azure-ai-agents-persistent |

#### Imported: Authentication

```java
import com.azure.ai.agents.persistent.PersistentAgentsClient;
import com.azure.ai.agents.persistent.PersistentAgentsClientBuilder;
import com.azure.identity.DefaultAzureCredentialBuilder;

String endpoint = System.getenv("PROJECT_ENDPOINT");
PersistentAgentsClient client = new PersistentAgentsClientBuilder()
    .endpoint(endpoint)
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();
```

#### Imported: Key Concepts

The Azure AI Agents Persistent SDK provides a low-level API for managing persistent agents that can be reused across sessions.

### Client Hierarchy

| Client | Purpose |
|--------|---------|
| `PersistentAgentsClient` | Sync client for agent operations |
| `PersistentAgentsAsyncClient` | Async client for agent operations |

#### Imported: Error Handling

```java
import com.azure.core.exception.HttpResponseException;

try {
    PersistentAgent agent = client.createAgent(modelName, name, instructions);
} catch (HttpResponseException e) {
    System.err.println("Error: " + e.getResponse().getStatusCode() + " - " + e.getMessage());
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
