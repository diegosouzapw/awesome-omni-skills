---
name: ai-dev-jobs-mcp
description: "AI Dev Jobs MCP workflow skill. Use this skill when the user needs Search 8,400+ AI and ML jobs across 489 companies, inspect listings and employers, match roles, and view salary and market stats via AI Dev Jobs MCP and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["mcp", "jobs", "ai-jobs", "ml-jobs", "recruiting", "job-search", "career", "ai-dev-jobs-mcp"]
complexity: intermediate
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "unitedideas"
date_added: "2026-04-18"
date_updated: "2026-04-18"
---

# AI Dev Jobs MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ai-dev-jobs-mcp` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# AI Dev Jobs MCP

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: MCP Configuration, Available Tools, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when helping a user search for AI or ML engineering jobs
- Use when an agent needs to look up which companies are hiring for specific AI roles
- Use when building recruiting or talent-matching workflows
- Use when analyzing the AI job market (open positions, top companies, role distribution)
- Use when the request clearly matches the imported source intent: Search 8,400+ AI and ML jobs across 489 companies, inspect listings and employers, match roles, and view salary and market stats via AI Dev Jobs MCP.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

AI Dev Jobs is a remote MCP server that gives AI agents access to a live index of AI and ML job listings. As of April 17, 2026, the live MCP stats report 8,405 active roles across 489 companies, a $213,500 median salary, and 600 new jobs this week. Agents can search jobs by role, location, or company, retrieve full job details, list hiring companies, match roles to a profile, and get salary or aggregate market statistics. It is designed for AI agents that assist with job searching, recruiting, or labor market analysis.

#### Imported: MCP Configuration

Add the AI Dev Jobs MCP server to your client configuration. The endpoint uses streamable HTTP and requires no authentication.

### Claude Desktop / Cursor / Windsurf

```json
{
  "mcpServers": {
    "ai-dev-jobs": {
      "url": "https://aidevboard.com/mcp"
    }
  }
}
```

No API key or authentication is required.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-dev-jobs-mcp to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ai-dev-jobs-mcp against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ai-dev-jobs-mcp for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ai-dev-jobs-mcp using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Find Remote ML Jobs

```text
Use @ai-dev-jobs-mcp to find remote machine learning engineer positions.
```

The agent will call `search_jobs({ query: "machine learning engineer", location: "remote" })` and return matching listings.

### Example 2: Check Which Companies Are Hiring

```text
Use @ai-dev-jobs-mcp to list all companies currently hiring for AI roles.
```

The agent will call `list_companies({})` and return companies sorted by number of open positions.

### Example 3: Get Job Market Overview

```text
Use @ai-dev-jobs-mcp to show current AI job market statistics.
```

The agent will call `get_stats({})` and return aggregate data on listings, top employers, and role distribution.

### Example 4: Get Full Job Details

```text
Use @ai-dev-jobs-mcp to get the full details for job ID abc123.
```

The agent will call `get_job({ id: "abc123" })` and return the complete listing with requirements and application link.

### Example 5: Match Jobs to a Candidate Profile

```text
Use @ai-dev-jobs-mcp to match remote LLM roles to a senior Python and PyTorch profile.
```

The agent will call `match_jobs({ skills: ["python", "llm", "pytorch"], workplace: "remote" })` and return suitable listings.

### Example 6: Compare Salary Data

```text
Use @ai-dev-jobs-mcp to compare senior LLM salary data.
```

The agent will call `get_salary_data({ tag: "llm", level: "senior" })` and summarize available compensation ranges.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use search_jobs with specific keywords for targeted results rather than broad queries
- Use listcompanies to discover companies, then searchjobs filtered by company name for focused searches
- Use get_stats to provide users with market context before diving into specific listings
- Use match_jobs when the user gives skills, seniority, location, or work arrangement preferences
- Use getsalarydata only as market context; remind users that listings and compensation change quickly
- Combine with resume or cover letter skills to create end-to-end job application workflows
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- Use `search_jobs` with specific keywords for targeted results rather than broad queries
- Use `list_companies` to discover companies, then `search_jobs` filtered by company name for focused searches
- Use `get_stats` to provide users with market context before diving into specific listings
- Use `match_jobs` when the user gives skills, seniority, location, or work arrangement preferences
- Use `get_salary_data` only as market context; remind users that listings and compensation change quickly
- Combine with resume or cover letter skills to create end-to-end job application workflows

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ai-dev-jobs-mcp`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@astro` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### `search_jobs`

Search the job index by keyword, location, company, or work arrangement. Returns matching listings with title, company, location, and salary information.

```
search_jobs({ query: "machine learning engineer", location: "remote" })
```

### `get_job`

Retrieve full details for a specific job listing by ID, including description, requirements, salary range, and application link.

```
get_job({ id: "abc123" })
```

### `list_companies`

List all companies in the index with their open position counts. Useful for discovering which companies are actively hiring.

```
list_companies({})
```

### `get_company`

Retrieve details for a specific company, including available AI roles when exposed by the endpoint.

```
get_company({ id: "openai" })
```

### `get_stats`

Get aggregate statistics about the job market: total listings, top companies by open roles, role distribution, and location breakdown.

```
get_stats({})
```

### `match_jobs`

Match jobs against a candidate profile, skills list, or preferences.

```
match_jobs({ skills: ["python", "llm", "pytorch"], workplace: "remote" })
```

### `get_salary_data`

Retrieve salary statistics for roles, tags, levels, or locations when available.

```
get_salary_data({ tag: "llm", level: "senior" })
```

### `list_tags`

List indexed tags that can be used to filter searches or salary analysis.

```
list_tags({})
```

#### Imported: Limitations

- The index covers AI and ML roles specifically; general software engineering jobs outside the AI space may not be included.
- Job listings are refreshed regularly but may have a short delay before new postings appear.
- Salary data is available when companies provide it; not all listings include salary information.
- Counts and salary medians are live market data and should be refreshed with `get_stats` before quoting them in user-facing output.
