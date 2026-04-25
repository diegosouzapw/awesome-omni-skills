---
name: vercel-ai-sdk-expert-v2
description: "Vercel AI SDK Expert workflow skill. Use this skill when the user needs Expert in the Vercel AI SDK. Covers Core API (generateText, streamText), UI hooks (useChat, useCompletion), tool calling, and streaming UI components with React and Next.js and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["vercel-ai-sdk-expert-v2", "vercel-ai-sdk-expert", "expert", "the", "vercel", "sdk", "covers", "core"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Vercel AI SDK Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/vercel-ai-sdk-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Vercel AI SDK Expert You are a production-grade Vercel AI SDK expert. You help developers build AI-powered applications, chatbots, and generative UI experiences primarily using Next.js and React. You are an expert in both the ai (AI SDK Core) and @ai-sdk/react (AI SDK UI) packages. You understand streaming, language model integration, system prompts, tool calling (function calling), and structured data generation.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Server-Side Generation (Core API), Frontend UI Hooks, Tool Calling (Function Calling), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when adding AI chat or text generation features to a React or Next.js app
- Use when streaming LLM responses to a frontend UI
- Use when implementing tool calling / function calling with an LLM
- Use when returning structured data (JSON) from an LLM using generateObject
- Use when building AI-powered generative UIs (streaming React components)
- Use when migrating from direct OpenAI/Anthropic API calls to the unified AI SDK

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Core Concepts

### Why Vercel AI SDK?

The Vercel AI SDK is a unified framework that abstracts away provider-specific APIs (OpenAI, Anthropic, Google Gemini, Mistral). It provides two main layers:
1. **AI SDK Core (`ai`)**: Server-side functions to interact with LLMs (`generateText`, `streamText`, `generateObject`).
2. **AI SDK UI (`@ai-sdk/react`)**: Frontend hooks to manage chat state and streaming (`useChat`, `useCompletion`).

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @vercel-ai-sdk-expert-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @vercel-ai-sdk-expert-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @vercel-ai-sdk-expert-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @vercel-ai-sdk-expert-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use openai('gpt-4o') or anthropic('claude-3-5-sonnet-20240620') format (from specific provider packages like @ai-sdk/openai) instead of the older edge runtime wrappers.
- ✅ Do: Provide a strict Zod schema and a clear system prompt when using generateObject().
- ✅ Do: Set maxDuration = 30 (or higher if on Pro) in Next.js API routes that use streamText, as LLMs take time to stream responses and Vercel's default is 10-15s.
- ✅ Do: Use tool() with comprehensive description tags on Zod parameters, as the LLM relies entirely on those strings to understand when and how to call the tool.
- ✅ Do: Enable maxSteps: 5 (or similar) when providing tools, otherwise the LLM won't be able to reply to the user after seeing the tool result!
- ❌ Don't: Forget to return result.toDataStreamResponse() in Next.js App Router API routes when using streamText; standard JSON responses will break chunking.
- ❌ Don't: Blindly trust the output of generateObject without validation, even though Zod forces the shape — always handle failure states using try/catch.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `openai('gpt-4o')` or `anthropic('claude-3-5-sonnet-20240620')` format (from specific provider packages like `@ai-sdk/openai`) instead of the older edge runtime wrappers.
- ✅ **Do:** Provide a strict Zod `schema` and a clear `system` prompt when using `generateObject()`.
- ✅ **Do:** Set `maxDuration = 30` (or higher if on Pro) in Next.js API routes that use `streamText`, as LLMs take time to stream responses and Vercel's default is 10-15s.
- ✅ **Do:** Use `tool()` with comprehensive `description` tags on Zod parameters, as the LLM relies entirely on those strings to understand when and how to call the tool.
- ✅ **Do:** Enable `maxSteps: 5` (or similar) when providing tools, otherwise the LLM won't be able to reply to the user *after* seeing the tool result!
- ❌ **Don't:** Forget to return `result.toDataStreamResponse()` in Next.js App Router API routes when using `streamText`; standard JSON responses will break chunking.
- ❌ **Don't:** Blindly trust the output of `generateObject` without validation, even though Zod forces the shape — always handle failure states using `try/catch`.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/vercel-ai-sdk-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** The streaming chat cuts off abruptly after 10-15 seconds.
**Solution:** The serverless function timed out. Add `export const maxDuration = 30;` (or whatever your plan limit is) to the Next.js API route file.

**Problem:** "Tool execution failed" or the LLM didn't return an answer after using a tool.
**Solution:** `streamText` stops immediately after a tool call completes unless you provide `maxSteps`. Set `maxSteps: 2` (or higher) to let the LLM see the tool result and construct a final text response.

## Related Skills

- `@ui-skills-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-tokens-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-ux-designer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-ux-pro-max-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Server-Side Generation (Core API)

### Basic Text Generation

```typescript
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

// Returns the full string once completion is done (no streaming)
const { text, usage } = await generateText({
  model: openai("gpt-4o"),
  system: "You are a helpful assistant evaluating code.",
  prompt: "Review the following python code...",
});

console.log(text);
console.log(`Tokens used: ${usage.totalTokens}`);
```

### Streaming Text

```typescript
// app/api/chat/route.ts (Next.js App Router API Route)
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'You are a friendly customer support bot.',
    messages,
  });

  // Automatically converts the stream to a readable web stream
  return result.toDataStreamResponse();
}
```

### Structured Data (JSON) Generation

```typescript
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

const { object } = await generateObject({
  model: openai('gpt-4o-2024-08-06'), // Use models good at structured output
  system: 'Extract information from the receipt text.',
  prompt: receiptText,
  // Pass a Zod schema to enforce output structure
  schema: z.object({
    storeName: z.string(),
    totalAmount: z.number(),
    items: z.array(z.object({
      name: z.string(),
      price: z.number(),
    })),
    date: z.string().describe("ISO 8601 date format"),
  }),
});

// `object` is automatically fully typed according to the Zod schema!
console.log(object.totalAmount);
```

#### Imported: Frontend UI Hooks

### `useChat` (Conversational UI)

```tsx
// app/page.tsx (Next.js Client Component)
"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat", // Points to the streamText route created above
    // Optional callbacks
    onFinish: (message) => console.log("Done streaming:", message),
    onError: (error) => console.error(error)
  });

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto p-4">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m) => (
          <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`p-2 rounded-lg inline-block ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {m.target || m.content}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          className="flex-1 p-2 border rounded"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading} className="bg-black text-white p-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
```

#### Imported: Tool Calling (Function Calling)

Tools allow the LLM to interact with your code, fetching external data or performing actions before responding to the user.

### Server-Side Tool Definition

```typescript
// app/api/chat/route.ts
import { streamText, tool } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages,
    tools: {
      getWeather: tool({
        description: 'Get the current weather in a given location',
        parameters: z.object({
          location: z.string().describe('The city and state, e.g. San Francisco, CA'),
          unit: z.enum(['celsius', 'fahrenheit']).optional(),
        }),
        // Execute runs when the LLM decides to call this tool
        execute: async ({ location, unit = 'celsius' }) => {
          // Fetch from your actual weather API or database
          const temp = location.includes("San Francisco") ? 15 : 22;
          return `The weather in ${location} is ${temp}° ${unit}.`;
        },
      }),
    },
    // Allows the LLM to call tools automatically in a loop until it has the answer
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
```

### UI for Multi-Step Tool Calls

When using `maxSteps`, the `useChat` hook will display intermediate tool calls if you handle them in the UI.

```tsx
// Inside the `useChat` messages.map loop
{m.role === 'assistant' && m.toolInvocations?.map((toolInvocation) => (
  <div key={toolInvocation.toolCallId} className="text-sm text-gray-500">
    {toolInvocation.state === 'result' ? (
      <p>✅ Fetched weather for {toolInvocation.args.location}</p>
    ) : (
      <p>⏳ Fetching weather for {toolInvocation.args.location}...</p>
    )}
  </div>
))}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
