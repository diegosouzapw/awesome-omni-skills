---
name: buywhere-product-catalog-v2
description: "BuyWhere Product Catalog workflow skill. Use this skill when the user needs Use BuyWhere's MCP and API surfaces to add product search, price comparison, and deal discovery to AI shopping agents and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: product
tags: ["buywhere", "ecommerce", "shopping", "mcp", "api", "product-catalog", "buywhere-product-catalog-v2", "buywhere-product-catalog"]
complexity: intermediate
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "BuyWhere"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# BuyWhere Product Catalog

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/buywhere-product-catalog` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# BuyWhere Product Catalog

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security & Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you want to add structured product search to an AI shopping or recommendation agent.
- Use when the user asks for BuyWhere MCP setup in Cursor, Claude Desktop, or a custom agent runtime.
- Use when you need a concrete onboarding path for BuyWhere API keys, MCP configuration, or plugin discovery.
- Use when the request clearly matches the imported source intent: Use BuyWhere's MCP and API surfaces to add product search, price comparison, and deal discovery to AI shopping agents.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

BuyWhere gives AI agents a product-catalog surface for shopping flows, price comparison, and deal discovery. Use this skill when you want an agent to connect product search or merchant-aware commerce actions through BuyWhere's MCP setup path or API onboarding flow.

The safest public starting points are the live developer portal, API key signup flow, MCP guide, and the official Cursor plugin repository.

#### Imported: How It Works

### Step 1: Choose the integration surface

Start from the public BuyWhere entry point that matches the user's setup:

- Developer portal: `https://buywhere.ai/developers/`
- API key signup: `https://buywhere.ai/api-keys/`
- MCP integration guide: `https://api.buywhere.ai/docs/guides/mcp`
- Cursor plugin repo: `https://github.com/BuyWhere/buywhere-cursor-plugin`

### Step 2: Confirm the user's runtime

Ask which host the user is integrating with before giving setup instructions:

- Cursor or another MCP-capable coding assistant
- Claude Desktop
- A custom MCP client
- A direct REST API integration

Do not assume the same config file or launch command works across all hosts.

### Step 3: Guide the first successful connection

Prefer a minimal first-run path:

1. Get a BuyWhere API key.
2. Follow the MCP or plugin setup path for the host runtime.
3. Run one simple product-search request before expanding to comparison or deal workflows.

### Step 4: Expand into commerce workflows

Once the first query works, help the user branch into the next layer:

- product search and discovery
- price comparison across merchants
- deal discovery flows
- shopping-agent orchestration that routes users to merchant destinations

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @buywhere-product-catalog-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @buywhere-product-catalog-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @buywhere-product-catalog-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @buywhere-product-catalog-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Cursor plugin discovery

```text
Use BuyWhere Product Catalog to help me connect BuyWhere inside Cursor and verify one product-search query.
```

### Example 2: MCP onboarding

```text
Use BuyWhere Product Catalog to set up BuyWhere MCP for my shopping agent and keep the first test minimal.
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Start from the live developer portal or API key flow before giving configuration details.
- ✅ Keep the first proof of integration to one successful query.
- ✅ Ask which MCP host or API runtime the user is using.
- ❌ Do not claim a specific product-count or retailer-count unless you have current runtime evidence.
- ❌ Do not send users to deprecated or broken documentation surfaces when a working public page exists.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Start from the live developer portal or API key flow before giving configuration details.
- ✅ Keep the first proof of integration to one successful query.
- ✅ Ask which MCP host or API runtime the user is using.
- ❌ Do not claim a specific product-count or retailer-count unless you have current runtime evidence.
- ❌ Do not send users to deprecated or broken documentation surfaces when a working public page exists.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/buywhere-product-catalog`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- This skill does not replace environment-specific validation inside the target MCP host or API client.
- Public BuyWhere surfaces can change, so re-check live URLs when precise setup details matter.

#### Imported: Security & Safety Notes

- Treat API keys as secrets. Use placeholders in examples and never paste live credentials into chat, docs, or screenshots.
- Confirm the user's target host before suggesting filesystem paths, launch commands, or local config edits.

#### Imported: Common Pitfalls

- **Problem:** The user wants BuyWhere setup help but has not created an API key yet.
  **Solution:** Start at `https://buywhere.ai/api-keys/` and only move to config after that step is complete.

- **Problem:** A documentation hostname is unavailable.
  **Solution:** Prefer the live developer portal, API key flow, MCP guide on `api.buywhere.ai`, and the official GitHub plugin repo.
