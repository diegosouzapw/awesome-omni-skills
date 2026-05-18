---
name: mcp-tool-developer-v2
description: "MCP Tool Developer workflow skill. Use this skill when the user needs Build Model Context Protocol (MCP) servers and tools from scratch. Full-stack MCP development with TypeScript/Python, testing, deployment, and registry publishing and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["mcp", "ai-agent", "tool-development", "typescript", "python", "llm", "model-context-protocol", "mcp-tool-developer-v2"]
complexity: intermediate
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "yundu-ai"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# MCP Tool Developer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/mcp-tool-developer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# MCP Tool Developer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security and Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building a new MCP server from scratch
- Use when wrapping an existing API as an MCP tool
- Use when debugging MCP server issues
- Use when designing the tool schema for an MCP server
- Use when publishing an MCP server to a registry
- Use when the request clearly matches the imported source intent: Build Model Context Protocol (MCP) servers and tools from scratch. Full-stack MCP development with TypeScript/Python, testing, deployment, and registry publishing.

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

#### Imported: Overview

Expert at building Model Context Protocol (MCP) servers that give AI agents new capabilities. Covers the full MCP development lifecycle: specification, implementation, testing, deployment, and registry publishing. Supports both TypeScript and Python with production-ready patterns.

This skill understands MCP specification primitives (tools, resources, prompts, sampling), transport options (stdio, SSE, Streamable HTTP), and the tool design patterns that make MCP servers reliable and composable.

#### Imported: How It Works

### Step 1: Define the MCP Server Scope

Identify what capabilities the server should expose:
- **Tools** - Functions the LLM can call (primary use case)
- **Resources** - Data the LLM can read (files, APIs, databases)
- **Prompts** - Reusable prompt templates

Choose the transport:
- **stdio** - For local CLI tools (Claude Code, Cursor)
- **SSE (Server-Sent Events)** - For remote/hosted tools
- **Streamable HTTP** - New in MCP spec for modern deployments

### Step 2: Design the Tool Schema

Define input/output schemas before writing implementation:

```typescript
{
  name: "tool_name",
  description: "What this tool does (visible to the LLM)",
  inputSchema: {
    type: "object",
    properties: { ... },
    required: [ ... ]
  }
}
```

### Step 3: Implement the Server

Create the server with proper error handling, validation, and logging. Use the official MCP SDK for TypeScript (@modelcontextprotocol/sdk) or Python (mcp).

### Step 4: Test and Deploy

Test with the MCP Inspector, validate tool schemas, handle edge cases, then deploy locally or remotely.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @mcp-tool-developer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @mcp-tool-developer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @mcp-tool-developer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @mcp-tool-developer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: TypeScript MCP Server

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({ name: "my-tools", version: "1.0.0" });

server.tool("greet", "Greet someone by name",
  { name: z.string().describe("Person's name") },
  async ({ name }) => ({ content: [{ type: "text", text: `Hello, ${name}!` }] })
);

const transport = new StdioServerTransport();
await server.connect(transport);
```

### Example 2: API Wrapper Pattern

Wrap an external API as an MCP tool with auth, rate limiting, and error handling:
- Map API endpoints to tools
- Handle auth via environment variables
- Transform API responses to LLM-friendly format
- Add retry logic with exponential backoff

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Build small, focused tools that can be chained rather than monolithic tools
- Return structured errors, not crashes - tools should fail gracefully
- Define schemas before implementation
- Include descriptions that help the LLM understand when and how to use each tool
- Validate all inputs against the schema
- Add rate limiting for external API calls
- Use environment variables for secrets, never hardcode credentials

### Imported Operating Notes

#### Imported: Best Practices

- Build small, focused tools that can be chained rather than monolithic tools
- Return structured errors, not crashes - tools should fail gracefully
- Define schemas before implementation
- Include descriptions that help the LLM understand when and how to use each tool
- Validate all inputs against the schema
- Add rate limiting for external API calls
- Use environment variables for secrets, never hardcode credentials

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/mcp-tool-developer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@cred-omega-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@customs-trade-compliance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@docker-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ejentum-reasoning-harness-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- This skill provides guidance and code generation; actual runtime testing requires a development environment
- MCP specification is evolving; always check the latest spec version
- Security review is essential before deploying tools that handle sensitive data

#### Imported: Security and Safety Notes

- Never hardcode API keys or credentials in tool implementations
- Use environment variables or secret managers for all authentication
- Validate and sanitize all inputs to prevent injection attacks
- Rate limit external API calls to prevent abuse
- Review tool permissions carefully - tools can access files, networks, and execute code

#### Imported: Common Pitfalls

- **Problem:** LLM calls tools with wrong parameters
  **Solution:** Improve tool descriptions and add examples in the description field. The LLM reads descriptions to decide how to call tools.

- **Problem:** Tool times out on large inputs
  **Solution:** Add input size validation and pagination. Stream large responses instead of buffering.
