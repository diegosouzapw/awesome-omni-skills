---
name: recsys-pipeline-architect-v2
description: "recsys-pipeline-architect workflow skill. Use this skill when the user needs Designs composable recommendation, ranking, and feed pipelines using the six-stage Source\u2192Hydrator\u2192Filter\u2192Scorer\u2192Selector\u2192SideEffect framework and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["recommender-system", "ranking", "feed-algorithm", "recsys", "personalization", "for-you-feed", "rag-reranker", "pipeline-architecture"]
complexity: advanced
risk: caution
tools: ["cursor", "opencode", "codex-cli", "claude-code", "gemini-cli"]
source: community
author: "mturac"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# recsys-pipeline-architect

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/recsys-pipeline-architect` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# recsys-pipeline-architect

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security & Safety Notes, Common Pitfalls, Upstream.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user wants to build any system that picks "the top K items for a user/context"
- Use when the user asks "how should I rank X" or describes a feed/personalization problem
- Use when the user has a scoring function and needs the pipeline plumbing around it
- Use when the user wants to migrate from a single relevance score to multi-action prediction with tunable weights
- Use when the user is wrapping an LLM/ML scorer and needs filters, hydrators, side-effects, and a runnable scaffold in their stack (TypeScript / Go / Python)
- Use when the request clearly matches the imported source intent: Designs composable recommendation, ranking, and feed pipelines using the six-stage Source→Hydrator→Filter→Scorer→Selector→SideEffect framework.

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

A spec-and-scaffold skill for building composable recommendation, ranking, and feed pipelines. It encodes the six-stage **Source → Hydrator → Filter → Scorer → Selector → SideEffect** framework popularized by xAI's open-sourced [For You algorithm](https://github.com/xai-org/x-algorithm) (Apache 2.0). This skill is an independent reimplementation of the *pattern* — no code is copied from the original — licensed MIT. Use it whenever you need "the top K items for a (user, context)": social feeds, content CMSs, RAG rerankers, task prioritizers, notification triage, search reranking, ad ranking.

#### Imported: How It Works

### Step 1: Clarify the use case

Ask the user three questions (only what is missing):

1. What are the items being ranked? (posts, products, tasks, alerts, documents...)
2. What is the input context? (user ID, search query, current document, time window...)
3. What language / runtime? (TypeScript/Node, Go, Python, Rust...)

### Step 2: Walk the eight steps of the spec

The full SKILL walks through: clarify use case → identify candidate sources → list required hydrations → list filters → design scorer chain → selector → side effects → generate scaffold. Each step surfaces the architectural trade-offs (multi-action vs single-score, candidate isolation vs joint scoring, online vs offline batch) so the user makes them explicitly rather than defaulting silently.

### Step 3: Emit a runnable scaffold

The upstream repository ships three runnable example scaffolds — every one green on its test suite:

- **Strapi v5 plugin** (TypeScript, Jest, 3/3 pass) — adds `GET /api/feed/for-you` with multi-action scoring and author diversity
- **Zentra-compatible pipeline** (Go with generics, 3/3 pass) — engine.Module-compatible, standalone-usable
- **PMAI task prioritizer** (Python / FastAPI / pytest, 3/3 pass) — `GET /tasks/next?user_id=42&limit=10`

When the user's stack doesn't match, the skill generates from scratch following the interface definitions in `references/interfaces.md` (TypeScript, Go, Python, Rust).

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @recsys-pipeline-architect-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @recsys-pipeline-architect-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @recsys-pipeline-architect-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @recsys-pipeline-architect-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Strapi content feed

User: "I'm running a Strapi v5 instance with 50k articles. I want a 'for you' feed personalized to each logged-in user based on their reading history."

Skill walks through the 8 steps, generates a Strapi plugin scaffold using the Strapi example as the template.

### Example 2: RAG retrieval reranker

User: "My RAG returns top-50 chunks from a vector DB. I want to rerank them with a more expensive scorer and return top-5."

Skill recognizes this as a single-source pipeline with a scorer chain (cheap retrieval + expensive rerank). Generates a Python async pipeline.

### Example 3: Notification triage

User: "We send too many notifications. I want a daily digest that picks the top 10 from the last 24h queue."

Skill identifies this as an offline-batch pipeline. Generates a scheduled job scaffold.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Surface the multi-action vs single-score trade-off explicitly — don't default silently
- ✅ Order filters by cost (cheap before expensive); universal filters before user-specific
- ✅ Wrap side effects in fire-and-forget patterns (goroutines / promises without await / asyncio tasks) — never block the response
- ✅ Keep scoring deterministic and cacheable; do diversity reranking as a separate stage
- ✅ Attribute the pattern as "popularized by xAI's open-sourced For You algorithm" when generating output
- ❌ Don't invent benchmark or latency numbers — say "depends on workload, run it yourself"
- ❌ Don't name the user's generated artifact "X-like" or use "For You" branding — the pattern is free, the brand is not

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Surface the multi-action vs single-score trade-off explicitly — don't default silently
- ✅ Order filters by cost (cheap before expensive); universal filters before user-specific
- ✅ Wrap side effects in fire-and-forget patterns (goroutines / promises without await / asyncio tasks) — never block the response
- ✅ Keep scoring deterministic and cacheable; do diversity reranking as a separate stage
- ✅ Attribute the pattern as "popularized by xAI's open-sourced For You algorithm" when generating output
- ❌ Don't invent benchmark or latency numbers — say "depends on workload, run it yourself"
- ❌ Don't name the user's generated artifact "X-like" or use "For You" branding — the pattern is free, the brand is not
- ❌ Don't conflate this with model architecture: this skill is pipeline plumbing *around* the scorer, not the scorer itself

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/recsys-pipeline-architect`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@production-audit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@production-scheduling-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@quality-nonconformance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@react-best-practices-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- This skill scaffolds pipeline plumbing; it does not train ML models — the scoring function is the user's responsibility
- It does not operate deployed pipelines (no monitoring, no autoscaling decisions)
- It does not predict pipeline performance (depends on data, hardware, traffic)
- It does not choose infrastructure (vector DB, cache, queue) — those are outside scope

#### Imported: Security & Safety Notes

- The generated scaffolds are framework code, not application logic — no shell commands, no network fetches, no credential handling
- Filters in the generated cookbook include eligibility/paywall/geo-restriction checks; the skill recommends putting these *before* scoring (so blocked content is never scored)
- Side-effect stages are always async / fire-and-forget; the skill documents this explicitly in the generated README to prevent users from accidentally blocking the response with cache writes or event emissions

#### Imported: Common Pitfalls

- **Problem:** Single-score model gets overfit to one metric (clicks) and degrades on others (long sessions, retention)
  **Solution:** Skill recommends multi-action prediction with tunable weights — change behavior by changing weights, no retraining

- **Problem:** Joint scoring (transformer over the whole batch) is non-deterministic and uncacheable
  **Solution:** Skill defaults to candidate isolation via attention masking; recommends joint only when there's a specific reason (e.g., batch-aware diversity)

- **Problem:** Side effects (cache writes, impression emits) block the response
  **Solution:** Skill generates fire-and-forget patterns and documents the constraint

#### Imported: Upstream

This skill is a thin adapter to the upstream repository. For the full SKILL.md content, 5 reference documents (interfaces in 4 languages, multi-action scoring, candidate isolation, filter cookbook, scorer cookbook), and 3 runnable example scaffolds with passing test suites:

- **Repository:** https://github.com/mturac/recsys-pipeline-architect
- **Release:** v0.1.0
- **Install via skills.sh:** `npx skills add mturac/recsys-pipeline-architect`
- **Pattern source:** https://github.com/xai-org/x-algorithm (Apache 2.0; this skill is MIT)
