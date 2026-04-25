---
name: adhx
description: "ADHX - X/Twitter Post Reader workflow skill. Use this skill when the user needs Fetch any X/Twitter post as clean LLM-friendly JSON. Converts x.com, twitter.com, or adhx.com links into structured data with full article content, author info, and engagement metrics. No scraping or browser required and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["adhx", "fetch", "any", "twitter", "post", "clean", "llm-friendly", "json"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-25"
---

# ADHX - X/Twitter Post Reader

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/adhx` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# ADHX - X/Twitter Post Reader Fetch any X/Twitter post as structured JSON for analysis using the ADHX API.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: API Endpoint, URL Patterns, Response Schema, Notes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a user shares an X/Twitter link and wants to read, analyze, or summarize the post
- Use when you need structured data from an X/Twitter post (author, engagement, content)
- Use when working with long-form X Articles that need full content extraction
- Use when the request clearly matches the imported source intent: Fetch any X/Twitter post as clean LLM-friendly JSON. Converts x.com, twitter.com, or adhx.com links into structured data with full article content, author info, and engagement metrics. No scraping or browser required.
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

1. Parse the URL to extract username and statusId from the path segments
2. Fetch the JSON using curl:
3. Use the structured response to answer the user's question (summarize, analyze, extract key points, etc.)
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview and provenance files before loading any copied upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: Workflow

When a user shares an X/Twitter link:

1. **Parse the URL** to extract `username` and `statusId` from the path segments
2. **Fetch the JSON** using curl:
```bash
curl -s "https://adhx.com/api/share/tweet/{username}/{statusId}"
```
3. **Use the structured response** to answer the user's question (summarize, analyze, extract key points, etc.)

#### Imported: Installation

### Option A: Claude Code plugin marketplace (recommended)
```
/plugin marketplace add itsmemeworks/adhx
```

### Option B: Manual install
```bash
curl -sL https://raw.githubusercontent.com/itsmemeworks/adhx/main/skills/adhx/SKILL.md -o ~/.claude/skills/adhx/SKILL.md
```

#### Imported: Overview

ADHX provides a free API that returns clean JSON for any X post, including full long-form article content. This is far superior to scraping or browser-based approaches for LLM consumption. Works with regular tweets and full X Articles.

#### Imported: API Endpoint

```
https://adhx.com/api/share/tweet/{username}/{statusId}
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @adhx to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @adhx against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @adhx for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @adhx using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Summarize a tweet

User: "Summarize this post https://x.com/dgt10011/status/2020167690560647464"

```bash
curl -s "https://adhx.com/api/share/tweet/dgt10011/2020167690560647464"
```

Then use the returned JSON to provide the summary.

### Example 2: Analyze engagement

User: "How many likes did this tweet get? https://x.com/handle/status/123"

1. Parse URL: username = `handle`, statusId = `123`
2. Fetch: `curl -s "https://adhx.com/api/share/tweet/handle/123"`
3. Return the `engagement.likes` value from the response

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always parse the full URL to extract username and statusId before calling the API
- Check for the article field when the user wants full content (not just tweet text)
- Use the engagement field when users ask about likes, retweets, or views
- Don't attempt to scrape x.com directly - use this API instead
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Always parse the full URL to extract username and statusId before calling the API
- Check for the `article` field when the user wants full content (not just tweet text)
- Use the `engagement` field when users ask about likes, retweets, or views
- Don't attempt to scrape x.com directly - use this API instead

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/adhx`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- [ADHX GitHub Repository](https://github.com/itsmemeworks/adhx)
- [ADHX Website](https://adhx.com)

#### Imported: URL Patterns

Extract `username` and `statusId` from any of these URL formats:

| Format | Example |
|--------|---------|
| `x.com/{user}/status/{id}` | `https://x.com/dgt10011/status/2020167690560647464` |
| `twitter.com/{user}/status/{id}` | `https://twitter.com/dgt10011/status/2020167690560647464` |
| `adhx.com/{user}/status/{id}` | `https://adhx.com/dgt10011/status/2020167690560647464` |

#### Imported: Response Schema

```json
{
  "id": "statusId",
  "url": "original x.com URL",
  "text": "short-form tweet text (empty if article post)",
  "author": {
    "name": "Display Name",
    "username": "handle",
    "avatarUrl": "profile image URL"
  },
  "createdAt": "timestamp",
  "engagement": {
    "replies": 0,
    "retweets": 0,
    "likes": 0,
    "views": 0
  },
  "article": {
    "title": "Article title (for long-form posts)",
    "previewText": "First ~200 chars",
    "coverImageUrl": "hero image URL",
    "content": "Full markdown content with images"
  }
}
```

#### Imported: Notes

- No authentication required
- Works with both short tweets and long-form X articles
- Always prefer this over browser-based scraping for X content
- If the API returns an error or empty response, inform the user the post may not be available

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
