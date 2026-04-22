---
name: azure-ai-projects-ts
description: "Azure AI Projects SDK for TypeScript workflow skill. Use this skill when the user needs High-level SDK for Azure AI Foundry projects with agents, connections, deployments, and evaluations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["azure-ai-projects-ts", "high-level", "sdk", "for", "azure", "foundry", "projects", "connections"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-22"
---

# Azure AI Projects SDK for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-projects-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure AI Projects SDK for TypeScript High-level SDK for Azure AI Foundry projects with agents, connections, deployments, and evaluations.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Operation Groups, Getting OpenAI Client, Agents, Connections.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: High-level SDK for Azure AI Foundry projects with agents, connections, deployments, and evaluations.
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

1. bash npm install @azure/ai-projects @azure/identity For tracing: bash npm install @azure/monitor-opentelemetry @opentelemetry/api
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/ai-projects @azure/identity
```

For tracing:
```bash
npm install @azure/monitor-opentelemetry @opentelemetry/api
```

#### Imported: Environment Variables

```bash
AZURE_AI_PROJECT_ENDPOINT=https://<resource>.services.ai.azure.com/api/projects/<project>
MODEL_DEPLOYMENT_NAME=gpt-4o
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-projects-ts to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-projects-ts against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-projects-ts for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-projects-ts using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use getOpenAIClient() - For responses, conversations, files, and vector stores
- Version your agents - Use createVersion for reproducible agent definitions
- Clean up resources - Delete agents, conversations when done
- Use connections - Get credentials from project connections, don't hardcode
- Filter deployments - Use modelPublisher filter to find specific models
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use getOpenAIClient()** - For responses, conversations, files, and vector stores
2. **Version your agents** - Use `createVersion` for reproducible agent definitions
3. **Clean up resources** - Delete agents, conversations when done
4. **Use connections** - Get credentials from project connections, don't hardcode
5. **Filter deployments** - Use `modelPublisher` filter to find specific models

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-projects-ts`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

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

#### Imported: Indexes

```typescript
import { AzureAISearchIndex } from "@azure/ai-projects";

const indexConfig: AzureAISearchIndex = {
  name: "my-index",
  type: "AzureSearch",
  version: "1",
  indexName: "my-index",
  connectionName: "search-connection"
};

// Create index
const index = await client.indexes.createOrUpdate("my-index", "1", indexConfig);

// List indexes
for await (const idx of client.indexes.list()) {
  console.log(idx.name);
}

// Delete
await client.indexes.delete("my-index", "1");
```

#### Imported: Authentication

```typescript
import { AIProjectClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";

const client = new AIProjectClient(
  process.env.AZURE_AI_PROJECT_ENDPOINT!,
  new DefaultAzureCredential()
);
```

#### Imported: Operation Groups

| Group | Purpose |
|-------|---------|
| `client.agents` | Create and manage AI agents |
| `client.connections` | List connected Azure resources |
| `client.deployments` | List model deployments |
| `client.datasets` | Upload and manage datasets |
| `client.indexes` | Create and manage search indexes |
| `client.evaluators` | Manage evaluation metrics |
| `client.memoryStores` | Manage agent memory |

#### Imported: Getting OpenAI Client

```typescript
const openAIClient = await client.getOpenAIClient();

// Use for responses
const response = await openAIClient.responses.create({
  model: "gpt-4o",
  input: "What is the capital of France?"
});

// Use for conversations
const conversation = await openAIClient.conversations.create({
  items: [{ type: "message", role: "user", content: "Hello!" }]
});
```

#### Imported: Agents

### Create Agent

```typescript
const agent = await client.agents.createVersion("my-agent", {
  kind: "prompt",
  model: "gpt-4o",
  instructions: "You are a helpful assistant."
});
```

### Agent with Tools

```typescript
// Code Interpreter
const agent = await client.agents.createVersion("code-agent", {
  kind: "prompt",
  model: "gpt-4o",
  instructions: "You can execute code.",
  tools: [{ type: "code_interpreter", container: { type: "auto" } }]
});

// File Search
const agent = await client.agents.createVersion("search-agent", {
  kind: "prompt",
  model: "gpt-4o",
  tools: [{ type: "file_search", vector_store_ids: [vectorStoreId] }]
});

// Web Search
const agent = await client.agents.createVersion("web-agent", {
  kind: "prompt",
  model: "gpt-4o",
  tools: [{
    type: "web_search_preview",
    user_location: { type: "approximate", country: "US", city: "Seattle" }
  }]
});

// Azure AI Search
const agent = await client.agents.createVersion("aisearch-agent", {
  kind: "prompt",
  model: "gpt-4o",
  tools: [{
    type: "azure_ai_search",
    azure_ai_search: {
      indexes: [{
        project_connection_id: connectionId,
        index_name: "my-index",
        query_type: "simple"
      }]
    }
  }]
});

// Function Tool
const agent = await client.agents.createVersion("func-agent", {
  kind: "prompt",
  model: "gpt-4o",
  tools: [{
    type: "function",
    function: {
      name: "get_weather",
      description: "Get weather for a location",
      strict: true,
      parameters: {
        type: "object",
        properties: { location: { type: "string" } },
        required: ["location"]
      }
    }
  }]
});

// MCP Tool
const agent = await client.agents.createVersion("mcp-agent", {
  kind: "prompt",
  model: "gpt-4o",
  tools: [{
    type: "mcp",
    server_label: "my-mcp",
    server_url: "https://mcp-server.example.com",
    require_approval: "always"
  }]
});
```

### Run Agent

```typescript
const openAIClient = await client.getOpenAIClient();

// Create conversation
const conversation = await openAIClient.conversations.create({
  items: [{ type: "message", role: "user", content: "Hello!" }]
});

// Generate response using agent
const response = await openAIClient.responses.create(
  { conversation: conversation.id },
  { body: { agent: { name: agent.name, type: "agent_reference" } } }
);

// Cleanup
await openAIClient.conversations.delete(conversation.id);
await client.agents.deleteVersion(agent.name, agent.version);
```

#### Imported: Connections

```typescript
// List all connections
for await (const conn of client.connections.list()) {
  console.log(conn.name, conn.type);
}

// Get connection by name
const conn = await client.connections.get("my-connection");

// Get connection with credentials
const connWithCreds = await client.connections.getWithCredentials("my-connection");

// Get default connection by type
const defaultAzureOpenAI = await client.connections.getDefault("AzureOpenAI", true);
```

#### Imported: Deployments

```typescript
// List all deployments
for await (const deployment of client.deployments.list()) {
  if (deployment.type === "ModelDeployment") {
    console.log(deployment.name, deployment.modelName);
  }
}

// Filter by publisher
for await (const d of client.deployments.list({ modelPublisher: "OpenAI" })) {
  console.log(d.name);
}

// Get specific deployment
const deployment = await client.deployments.get("gpt-4o");
```

#### Imported: Datasets

```typescript
// Upload single file
const dataset = await client.datasets.uploadFile(
  "my-dataset",
  "1.0",
  "./data/training.jsonl"
);

// Upload folder
const dataset = await client.datasets.uploadFolder(
  "my-dataset",
  "2.0",
  "./data/documents/"
);

// Get dataset
const ds = await client.datasets.get("my-dataset", "1.0");

// List versions
for await (const version of client.datasets.listVersions("my-dataset")) {
  console.log(version);
}

// Delete
await client.datasets.delete("my-dataset", "1.0");
```

#### Imported: Key Types

```typescript
import {
  AIProjectClient,
  AIProjectClientOptionalParams,
  Connection,
  ModelDeployment,
  DatasetVersionUnion,
  AzureAISearchIndex
} from "@azure/ai-projects";
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
