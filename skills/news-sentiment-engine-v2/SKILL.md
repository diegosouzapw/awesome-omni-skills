---
name: news-sentiment-engine-v2
description: "News Sentiment Engine (Free) workflow skill. Use this skill when the user needs Multi-source RSS news aggregation with Claude-powered sentiment analysis and structured briefing output and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["news", "rss", "sentiment-analysis", "briefing", "research", "news-sentiment-engine-v2", "news-sentiment-engine", "multi-source"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tellmefrankie"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# News Sentiment Engine (Free)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/news-sentiment-engine` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# News Sentiment Engine (Free) Collect and analyze AI/tech news from multiple sources with Claude-powered sentiment analysis. Open source lite version.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What it does, Output Format, Limitations, Pro Version, Author.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when preparing a concise AI or technology news briefing from multiple RSS sources.
- Use when you need ranked article summaries with sentiment, tags, and impact scoring.
- Use when monitoring industry changes across product launches, policy moves, and infrastructure shifts.
- Use when deduplicating overlapping coverage before writing a daily or weekly briefing.
- Use when the request clearly matches the imported source intent: Multi-source RSS news aggregation with Claude-powered sentiment analysis and structured briefing output.
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

1. bash git clone https://github.com/tellmefrankie/news-engine cd news-engine pnpm install cp .env.example .env # Requires: ANTHROPICAPIKEY pnpm dev -- --collect-only No paid APIs required for free tier.
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Setup

```bash
git clone https://github.com/tellmefrankie/news-engine
cd news-engine
pnpm install
cp .env.example .env
# Requires: ANTHROPIC_API_KEY
pnpm dev -- --collect-only
```

No paid APIs required for free tier. Anthropic API key only.

#### Imported: What it does

- Collects news from 4+ RSS feeds (TechCrunch, The Verge, Ars Technica, Hacker News)
- Deduplicates articles across sources
- Ranks by importance (industry impact, technology trends, policy changes)
- Generates structured briefing with sentiment tags
- Outputs formatted briefing card

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @news-sentiment-engine-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @news-sentiment-engine-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @news-sentiment-engine-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @news-sentiment-engine-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Usage

```
Collect latest AI/tech news from RSS feeds.
Rank top 5 by importance to the tech industry.
For each: summary (2-3 sentences), sentiment (positive/negative/neutral),
impact score (1-5), industry tags, one-sentence commentary.
Output as a structured briefing card.
```

#### Imported: Example Output

```
AI/Tech News Briefing — 2026-05-13

1. OpenAI announces GPT-5 with 2M context window
   Source: TechCrunch | Impact: 5/5
   Tags: #AI #LLM #OpenAI
   Sentiment: Positive

   Summary: OpenAI unveiled GPT-5 with a 2M token context window and
   improved reasoning. Enterprise pricing starts at $0.03/1k tokens.

   Commentary: Direct competitive pressure on Anthropic Claude 3.5.
   Enterprise deals may shift in H2 2026.

2. EU AI Act enforcement begins for high-risk systems
   Source: The Verge | Impact: 4/5
   Tags: #Regulation #EU #Compliance
   Sentiment: Neutral
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/news-sentiment-engine`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Output Format

For each article:
- Title + source + publish date
- Summary (2-3 sentences)
- Industry tags: [AI, Semiconductor, Cloud, etc.]
- Sentiment: Positive/Negative/Neutral
- Impact score: 1-5
- Commentary: 1-sentence industry perspective

#### Imported: Limitations

- RSS feeds can lag, disappear, throttle, or duplicate syndicated coverage.
- Sentiment and impact scores are briefing aids, not authoritative market or policy analysis.
- The example setup runs third-party code; review the repository and environment variables before use.
- Outputs should be cross-checked against original article sources before publication or investment use.

#### Imported: Pro Version

Free tier covers news collection and basic analysis.

**Full bundle — $29 one-time**: Investment-grade analysis (portfolio impact scoring, options flow correlation, earnings catalyst detection), Telegram auto-delivery.
→ https://jaehyunpark.gumroad.com/l/tcyahy

#### Imported: Author

Core module from a production news analysis engine processing 50+ articles daily since 2026.
