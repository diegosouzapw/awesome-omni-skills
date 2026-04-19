---
name: not-human-search-mcp
description: "Not Human Search MCP workflow skill. Use this skill when the user needs Search AI-ready websites, inspect indexed site details, verify MCP endpoints, and discover tools and APIs using the Not Human Search MCP server and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["mcp", "search", "ai-discovery", "api-discovery", "mcp-verification", "agent-tools", "not-human-search-mcp", "ai-ready"]
complexity: intermediate
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "unitedideas"
date_added: "2026-04-18"
date_updated: "2026-04-19"
---

# Not Human Search MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/not-human-search-mcp` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Not Human Search MCP

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: MCP Configuration, Available Tools, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when an AI agent needs to discover tools, APIs, or MCP servers for a specific task
- Use when you want to check whether a website exposes machine-readable endpoints (llms.txt, OpenAPI, MCP)
- Use when verifying that an MCP endpoint is actually responding to JSON-RPC
- Use when building agent workflows that need to find and connect to external services dynamically
- Use when the request clearly matches the imported source intent: Search AI-ready websites, inspect indexed site details, verify MCP endpoints, and discover tools and APIs using the Not Human Search MCP server.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Not Human Search is a remote MCP server that lets AI agents search a curated index of 1,750+ AI-ready websites, inspect indexed site details, submit new sites for analysis, and verify live MCP endpoints via JSON-RPC probe. It is designed for AI agents that need to discover tools, APIs, and services at runtime without relying on hardcoded lists.

#### Imported: MCP Configuration

Add the Not Human Search MCP server to your client configuration. The endpoint uses streamable HTTP and requires no authentication.

### Claude Desktop / Cursor / Windsurf

```json
{
  "mcpServers": {
    "not-human-search": {
      "url": "https://nothumansearch.ai/mcp"
    }
  }
}
```

No API key or authentication is required.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @not-human-search-mcp to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @not-human-search-mcp against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @not-human-search-mcp for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @not-human-search-mcp using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Discover Code Review Tools

```text
Use @not-human-search-mcp to find code review tools that expose MCP or API endpoints.
```

The agent will call `search_agents({ query: "code review", limit: 10 })` and return ranked results with scores and endpoint details.

### Example 2: Check if a Site is AI-Ready

```text
Use @not-human-search-mcp to check the AI-readiness of linear.app.
```

The agent will call `get_site_details({ domain: "linear.app" })` and return the site's score breakdown.

### Example 3: Verify an MCP Endpoint

```text
Use @not-human-search-mcp to verify that https://heliumtrades.com/mcp is a working MCP server.
```

The agent will call `verify_mcp({ url: "https://heliumtrades.com/mcp" })` and confirm whether it responds to JSON-RPC.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use searchagents for broad discovery, then getsite_details for detailed analysis of specific indexed results
- Use verify_mcp to confirm an MCP endpoint is live before wiring it into an agent workflow
- Use submit_site when a relevant site is absent from the index and the user wants it analyzed
- Use register_monitor only with an email address the user explicitly provides for monitoring
- Combine with other MCP skills to build dynamic tool-discovery pipelines
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- Use `search_agents` for broad discovery, then `get_site_details` for detailed analysis of specific indexed results
- Use `verify_mcp` to confirm an MCP endpoint is live before wiring it into an agent workflow
- Use `submit_site` when a relevant site is absent from the index and the user wants it analyzed
- Use `register_monitor` only with an email address the user explicitly provides for monitoring
- Combine with other MCP skills to build dynamic tool-discovery pipelines

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/not-human-search-mcp`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@monte-carlo-monitor-creation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-prevent` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-push-ingestion` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-validation-notebook` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Available Tools

### `search_agents`

Search the index of 1,750+ AI-ready websites by keyword. Returns ranked results with scores, categories, and available endpoints.

```
search_agents({ query: "code review tools", limit: 10 })
```

### `get_site_details`

Check a specific domain's AI-readiness score and available machine-readable endpoints.

```
get_site_details({ domain: "linear.app" })
```

### `get_stats`

Get aggregate index statistics, including total indexed sites, categories, and endpoint coverage.

```
get_stats({})
```

### `submit_site`

Submit a URL for crawling and AI-readiness analysis.

```
submit_site({ url: "https://example.com" })
```

### `verify_mcp`

Verify whether a URL is a live MCP endpoint by sending a JSON-RPC probe and checking for a valid response.

```
verify_mcp({ url: "https://example.com/mcp" })
```

### `list_categories`

List available discovery categories for narrowing searches.

```
list_categories({})
```

### `get_top_sites`

Retrieve top-ranked indexed sites.

```
get_top_sites({ limit: 10 })
```

### `register_monitor`

Register a domain monitor using a user-provided email address.

```
register_monitor({ domain: "example.com", email: "user@example.com" })
```

#### Imported: Limitations

- The search index covers 1,750+ sites and is updated regularly, but may not include every site on the internet.
- Scoring reflects machine-readable signals (llms.txt, OpenAPI, MCP, structured data) rather than content quality.
- `verify_mcp` sends a JSON-RPC probe to the target URL; only use it on URLs you expect to be MCP endpoints.
- `register_monitor` requires a user-provided email address and consent to receive monitoring notifications.
