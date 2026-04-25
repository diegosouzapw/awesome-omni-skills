---
name: m365-agents-ts-v2
description: "Microsoft 365 Agents SDK (TypeScript) workflow skill. Use this skill when the user needs Microsoft 365 Agents SDK for TypeScript/Node.js and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["m365-agents-ts-v2", "m365-agents-ts", "microsoft", "sdk", "for", "typescript", "node", "ai-agents"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Microsoft 365 Agents SDK (TypeScript)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/m365-agents-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Microsoft 365 Agents SDK (TypeScript) Build enterprise agents for Microsoft 365, Teams, and Copilot Studio using the Microsoft 365 Agents SDK with Express hosting, AgentApplication routing, streaming responses, and Copilot Studio client integrations.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before implementation, Environment Variables, Streaming responses with Azure OpenAI, Copilot Studio client (Direct to Engine), Copilot Studio WebChat integration, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Microsoft 365 Agents SDK for TypeScript/Node.js.
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

1. bash npm install @microsoft/agents-hosting @microsoft/agents-hosting-express @microsoft/agents-activity npm install @microsoft/agents-copilotstudio-client typescript import { AgentApplication, TurnContext, TurnState } from "@microsoft/agents-hosting"; import { startServer } from "@microsoft/agents-hosting-express"; const agent = new AgentApplication<TurnState>(); agent.onConversationUpdate("membersAdded", async (context: TurnContext) => { await context.sendActivity("Welcome to the agent."); }); agent.onMessage("hello", async (context: TurnContext) => { await context.sendActivity(Echo: ${context.activity.text}); }); startServer(agent);
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @microsoft/agents-hosting @microsoft/agents-hosting-express @microsoft/agents-activity
npm install @microsoft/agents-copilotstudio-client
```

#### Imported: Core Workflow: Express-hosted AgentApplication

```typescript
import { AgentApplication, TurnContext, TurnState } from "@microsoft/agents-hosting";
import { startServer } from "@microsoft/agents-hosting-express";

const agent = new AgentApplication<TurnState>();

agent.onConversationUpdate("membersAdded", async (context: TurnContext) => {
  await context.sendActivity("Welcome to the agent.");
});

agent.onMessage("hello", async (context: TurnContext) => {
  await context.sendActivity(`Echo: ${context.activity.text}`);
});

startServer(agent);
```

#### Imported: Before implementation

- Use the microsoft-docs MCP to verify the latest API signatures for AgentApplication, startServer, and CopilotStudioClient.
- Confirm package versions on npm before wiring up samples or templates.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @m365-agents-ts-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @m365-agents-ts-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @m365-agents-ts-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @m365-agents-ts-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Invoke activity handling

```typescript
import { Activity, ActivityTypes } from "@microsoft/agents-activity";
import { AgentApplication, TurnContext, TurnState } from "@microsoft/agents-hosting";

const agent = new AgentApplication<TurnState>();

agent.onActivity("invoke", async (context: TurnContext) => {
  const invokeResponse = Activity.fromObject({
    type: ActivityTypes.InvokeResponse,
    value: { status: 200 },
  });

  await context.sendActivity(invokeResponse);
  await context.sendActivity("Thanks for submitting your feedback.");
});
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use AgentApplication for routing and keep handlers focused on one responsibility.
- Prefer streamingResponse for long-running completions and call endStream in finally blocks.
- Keep secrets out of source code; load tokens from environment variables or secure stores.
- Reuse CopilotStudioClient instances and cache tokens in your token provider.
- Validate invoke payloads before logging or persisting feedback.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. Use AgentApplication for routing and keep handlers focused on one responsibility.
2. Prefer streamingResponse for long-running completions and call endStream in finally blocks.
3. Keep secrets out of source code; load tokens from environment variables or secure stores.
4. Reuse CopilotStudioClient instances and cache tokens in your token provider.
5. Validate invoke payloads before logging or persisting feedback.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/m365-agents-ts`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@local-legal-seo-audit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@local-llm-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@logistics-exception-management-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@loss-aversion-designer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Files

| File | Contents |
| --- | --- |
| references/acceptance-criteria.md | Import paths, hosting pipeline, streaming, and Copilot Studio patterns |

#### Imported: Reference Links

| Resource | URL |
| --- | --- |
| Microsoft 365 Agents SDK | https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/ |
| JavaScript SDK overview | https://learn.microsoft.com/en-us/javascript/api/overview/agents-overview?view=agents-sdk-js-latest |
| @microsoft/agents-hosting-express | https://learn.microsoft.com/en-us/javascript/api/%40microsoft/agents-hosting-express?view=agents-sdk-js-latest |
| @microsoft/agents-copilotstudio-client | https://learn.microsoft.com/en-us/javascript/api/%40microsoft/agents-copilotstudio-client?view=agents-sdk-js-latest |
| Integrate with Copilot Studio | https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/integrate-with-mcs |
| GitHub samples | https://github.com/microsoft/Agents/tree/main/samples/nodejs |

#### Imported: Environment Variables

```bash
PORT=3978
AZURE_RESOURCE_NAME=<azure-openai-resource>
AZURE_API_KEY=<azure-openai-key>
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4o-mini

TENANT_ID=<tenant-id>
CLIENT_ID=<client-id>
CLIENT_SECRET=<client-secret>

COPILOT_ENVIRONMENT_ID=<environment-id>
COPILOT_SCHEMA_NAME=<schema-name>
COPILOT_CLIENT_ID=<copilot-app-client-id>
COPILOT_BEARER_TOKEN=<copilot-jwt>
```

#### Imported: Streaming responses with Azure OpenAI

```typescript
import { azure } from "@ai-sdk/azure";
import { AgentApplication, TurnContext, TurnState } from "@microsoft/agents-hosting";
import { startServer } from "@microsoft/agents-hosting-express";
import { streamText } from "ai";

const agent = new AgentApplication<TurnState>();

agent.onMessage("poem", async (context: TurnContext) => {
  context.streamingResponse.setFeedbackLoop(true);
  context.streamingResponse.setGeneratedByAILabel(true);
  context.streamingResponse.setSensitivityLabel({
    type: "https://schema.org/Message",
    "@type": "CreativeWork",
    name: "Internal",
  });

  await context.streamingResponse.queueInformativeUpdate("starting a poem...");

  const { fullStream } = streamText({
    model: azure(process.env.AZURE_OPENAI_DEPLOYMENT_NAME || "gpt-4o-mini"),
    system: "You are a creative assistant.",
    prompt: "Write a poem about Apollo.",
  });

  try {
    for await (const part of fullStream) {
      if (part.type === "text-delta" && part.text.length > 0) {
        await context.streamingResponse.queueTextChunk(part.text);
      }
      if (part.type === "error") {
        throw new Error(`Streaming error: ${part.error}`);
      }
    }
  } finally {
    await context.streamingResponse.endStream();
  }
});

startServer(agent);
```

#### Imported: Copilot Studio client (Direct to Engine)

```typescript
import { CopilotStudioClient } from "@microsoft/agents-copilotstudio-client";

const settings = {
  environmentId: process.env.COPILOT_ENVIRONMENT_ID!,
  schemaName: process.env.COPILOT_SCHEMA_NAME!,
  clientId: process.env.COPILOT_CLIENT_ID!,
};

const tokenProvider = async (): Promise<string> => {
  return process.env.COPILOT_BEARER_TOKEN!;
};

const client = new CopilotStudioClient(settings, tokenProvider);

const conversation = await client.startConversationAsync();
const reply = await client.askQuestionAsync("Hello!", conversation.id);
console.log(reply);
```

#### Imported: Copilot Studio WebChat integration

```typescript
import { CopilotStudioWebChat } from "@microsoft/agents-copilotstudio-client";

const directLine = CopilotStudioWebChat.createConnection(client, {
  showTyping: true,
});

window.WebChat.renderWebChat({
  directLine,
}, document.getElementById("webchat")!);
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
