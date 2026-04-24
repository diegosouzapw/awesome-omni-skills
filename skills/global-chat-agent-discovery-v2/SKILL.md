---
name: global-chat-agent-discovery-v2
description: "Global Chat Agent Discovery workflow skill. Use this skill when the user needs Discover and search 18K+ MCP servers and AI agents across 6+ registries using Global Chat's cross-protocol directory and MCP server and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["mcp", "ai-agents", "agent-discovery", "agents-txt", "a2a", "developer-tools", "global-chat-agent-discovery-v2", "global-chat-agent-discovery"]
complexity: intermediate
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "pumanitro"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# Global Chat Agent Discovery

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/global-chat-agent-discovery` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Global Chat Agent Discovery

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to find an MCP server for a specific capability (e.g., database access, file conversion, API integration)
- Use when evaluating which agent registries carry tools for your use case
- Use when you want to search across multiple protocols (MCP, A2A, agents.txt) simultaneously
- Use when setting up agent-to-agent communication and need to discover available endpoints
- Use when the request clearly matches the imported source intent: Discover and search 18K+ MCP servers and AI agents across 6+ registries using Global Chat's cross-protocol directory and MCP server.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Global Chat is a cross-protocol AI agent discovery platform that aggregates MCP servers and AI agents from 6+ registries into a single searchable directory. This skill helps you find the right MCP server, A2A agent, or agents.txt endpoint for any task by searching across 18,000+ indexed entries. It also provides an MCP server (`@global-chat/mcp-server`) for programmatic access to the directory from any MCP-compatible client.

#### Imported: How It Works

### Option 1: Use the MCP Server (Recommended for Agents)

Install the Global Chat MCP server to search the directory programmatically from Claude Code, Cursor, or any MCP client.

```bash
npm install -g @global-chat/mcp-server
```

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "global-chat": {
      "command": "npx",
      "args": ["-y", "@global-chat/mcp-server"]
    }
  }
}
```

Then ask your agent to search for tools:

```
Search Global Chat for MCP servers that handle PostgreSQL database queries.
```

### Option 2: Use the Web Directory

Browse the full directory at [https://global-chat.io](https://global-chat.io):

1. Visit the search page and enter your query
2. Filter by protocol (MCP, A2A, agents.txt)
3. Filter by registry source
4. View server details, capabilities, and installation instructions

### Option 3: Validate Your agents.txt

If you maintain an `agents.txt` file, use the free validator:

1. Go to [https://global-chat.io/validate](https://global-chat.io/validate)
2. Enter your domain or paste your agents.txt content
3. Get instant feedback on format compliance and discoverability

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @global-chat-agent-discovery-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @global-chat-agent-discovery-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @global-chat-agent-discovery-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @global-chat-agent-discovery-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Find MCP Servers for a Task

```
You: "Find MCP servers that can convert PDF files to text"
Agent (via Global Chat MCP): Searching across 6 registries...
  - @anthropic/pdf-tools (mcpservers.org) — PDF parsing and text extraction
  - pdf-converter-mcp (mcp.so) — Convert PDF to text, markdown, or HTML
  - ...
```

### Example 2: Discover A2A Agents

```
You: "What A2A agents are available for code review?"
Agent (via Global Chat MCP): Found 12 A2A agents for code review across 3 registries...
```

### Example 3: Check Agent Protocol Coverage

```
You: "How many registries list tools for Kubernetes management?"
Agent (via Global Chat MCP): 4 registries carry Kubernetes-related agents (23 total entries)...
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use the MCP server for automated workflows and agent-to-agent discovery
- Use the web directory for manual exploration and comparison
- Validate your agents.txt before publishing to ensure maximum discoverability
- Check multiple registries — coverage varies significantly by domain
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Use the MCP server for automated workflows and agent-to-agent discovery
- Use the web directory for manual exploration and comparison
- Validate your agents.txt before publishing to ensure maximum discoverability
- Check multiple registries — coverage varies significantly by domain

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/global-chat-agent-discovery`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@gitlab-ci-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitops-workflow-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gmail-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@go-concurrency-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Common Pitfalls

- **Problem:** Search returns too many results
  **Solution:** Add protocol or registry filters to narrow the scope

- **Problem:** MCP server not connecting
  **Solution:** Ensure `npx` is available and run `npx -y @global-chat/mcp-server` manually first to verify

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
