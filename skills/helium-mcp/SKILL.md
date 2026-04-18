---
name: helium-mcp
description: "Helium MCP workflow skill. Use this skill when the user needs Connect to Helium's MCP server for news research, media bias analysis, balanced perspectives, stock/options data, and semantic meme search across 3.2M+ articles and 5,000+ sources and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["mcp", "news", "media-bias", "stocks", "options", "finance", "research", "helium-mcp"]
complexity: intermediate
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "connerlambden"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Helium MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/helium-mcp` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Helium MCP

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: MCP Configuration, Available Tools, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to search or analyze news articles with bias-aware context
- Use when researching media bias for a specific source or article URL
- Use when you want balanced left/right/center perspectives on a topic
- Use when looking up live stock, ETF, or crypto data with AI bull/bear cases
- Use when pricing options or evaluating trading strategies
- Use when searching for memes by semantic meaning

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

Helium MCP provides AI coding assistants with access to news intelligence, media bias analysis, financial market data, and meme search through 9 tools exposed via the Model Context Protocol. It covers 3.2M+ articles from 5,000+ news sources with 15+ bias dimensions, live stock/ETF/crypto data with AI-generated analysis, and ML-predicted options pricing.

#### Imported: MCP Configuration

Add the Helium MCP server to your client configuration. The endpoint uses streamable HTTP and requires no authentication.

### Claude Desktop / Cursor / Windsurf

```json
{
  "mcpServers": {
    "helium": {
      "url": "https://heliumtrades.com/mcp"
    }
  }
}
```

No API key or authentication is required.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @helium-mcp to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @helium-mcp against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @helium-mcp for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @helium-mcp using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Balanced News Research

Ask your AI assistant:

> "Search for balanced news coverage on climate policy and show me how left, right, and center sources frame the issue differently."

The assistant will call `search_balanced_news` and present synthesized perspectives from across the political spectrum.

### Example 2: Source Credibility Check

> "What is the media bias profile for The New York Times?"

The assistant will call `get_source_bias` and return the full bias breakdown including political lean, factual reporting, and other dimensions.

### Example 3: Stock Research with Options

> "Give me the bull and bear case for NVDA, then find the best options strategies."

The assistant will call `get_ticker` for market data and AI analysis, then `get_top_trading_strategies` for ranked strategy recommendations.

### Example 4: Article Bias Analysis

> "Analyze the bias of this article: https://example.com/politics/story"

The assistant will call `get_bias_from_url` to return source-level and article-level bias indicators.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Start broad, then narrow: Use searchnews for discovery, then getbiasfromurl for deep analysis on specific articles
- Cross-reference perspectives: Combine searchbalancednews with getsourcebias to understand why sources frame topics differently
- Pair market tools: Use getticker for the fundamental view, then getoptionprice or gettoptradingstrategies for actionable trades
- No auth needed: The endpoint works immediately with no API keys or setup beyond adding the MCP config
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- **Start broad, then narrow:** Use `search_news` for discovery, then `get_bias_from_url` for deep analysis on specific articles
- **Cross-reference perspectives:** Combine `search_balanced_news` with `get_source_bias` to understand why sources frame topics differently
- **Pair market tools:** Use `get_ticker` for the fundamental view, then `get_option_price` or `get_top_trading_strategies` for actionable trades
- **No auth needed:** The endpoint works immediately with no API keys or setup beyond adding the MCP config

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/helium-mcp`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Additional Resources

- [Helium MCP Page](https://heliumtrades.com/mcp-page/)
- [GitHub Repository](https://github.com/connerlambden/helium-mcp)
- [MCP Protocol Specification](https://modelcontextprotocol.io/)

#### Imported: Available Tools

### News & Media Bias

#### `search_news`
Search 3.2M+ articles from 5,000+ sources with 15+ bias dimensions. Filter by topic, source, date range, and bias attributes.

```
search_news({ query: "artificial intelligence regulation" })
```

#### `search_balanced_news`
Get AI-synthesized balanced articles presenting left, right, and center perspectives on any topic.

```
search_balanced_news({ query: "immigration policy" })
```

#### `get_source_bias`
Retrieve the detailed bias profile for any news source, including political lean, factual reporting score, and 15+ bias dimensions.

```
get_source_bias({ source: "reuters" })
```

#### `get_all_source_biases`
Get bias data for all 5,000+ tracked news sources in a single call.

```
get_all_source_biases()
```

#### `get_bias_from_url`
Run a full bias analysis on a specific article URL, returning the source bias profile and article-level bias indicators.

```
get_bias_from_url({ url: "https://example.com/article" })
```

### Finance & Markets

#### `get_ticker`
Get live stock, ETF, or crypto data including price, volume, AI-generated bull/bear cases, and forecasts.

```
get_ticker({ ticker: "AAPL" })
```

#### `get_option_price`
Get ML-predicted fair value and probability of finishing in-the-money for a specific options contract.

```
get_option_price({ ticker: "AAPL", strike: 200, expiration: "2026-06-19", type: "call" })
```

#### `get_top_trading_strategies`
Get top-ranked options strategies for a ticker with risk/reward analysis.

```
get_top_trading_strategies({ ticker: "TSLA" })
```

### Memes

#### `search_memes`
Semantic meme search — find memes by meaning rather than exact keywords.

```
search_memes({ query: "debugging at 3am" })
```

#### Imported: Common Pitfalls

- **Problem:** Tool calls return empty results for very niche queries
  **Solution:** Broaden the search terms — Helium indexes mainstream and mid-tier sources, so hyper-local topics may have limited coverage

- **Problem:** Options data unavailable for a ticker
  **Solution:** Verify the ticker has listed options — some small-cap stocks and most crypto assets do not have options markets

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
