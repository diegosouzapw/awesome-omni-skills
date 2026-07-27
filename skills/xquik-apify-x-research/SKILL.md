---
name: xquik-apify-x-research
description: "X research and audience workflow using Xquik Apify Actors. Use this Skill for public tweet research, profiles, lists, followers, communities, and audience overlap with bounded inputs and explicit diagnostics."
version: "0.1.0"
category: data-ai
tags: ["apify", "x", "twitter", "tweet-research", "followers", "audience-analysis", "social-listening", "osint"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Xquik"
date_added: "2026-07-27"
date_updated: "2026-07-27"
---

# Xquik Apify X Research

## Overview

Research public X content and audiences with two focused Apify Actors:

- [Xquik X Tweet Scraper](https://apify.com/xquik/x-tweet-scraper)
- [Xquik X Follower Scraper](https://apify.com/xquik/x-follower-scraper)

Use the Tweet Scraper for posts, profiles, lists, threads, and engagement routes.
Use the Follower Scraper for account relations, communities, and audience overlap.

Always fetch current schemas and pricing before any billable run.
Never bypass private profiles, access controls, or platform restrictions.

## When to Use This Skill

- Research public posts with X advanced-search syntax.
- Collect public profile timelines, replies, media, likes, or list posts.
- Read threads, quotes, replies, articles, retweeters, or favoriters.
- Compare public followers or following across several accounts.
- Collect public list members, list followers, or community members.
- Preserve source targets and diagnostic rows for auditable analysis.

Do not use this Skill for private data, credential collection, or access bypass.

## Actor Decision Map

| Goal | Actor | Route |
|:-----|:------|:------|
| Search posts or monitor terms | `xquik/x-tweet-scraper` | `search` |
| Read a profile timeline | `xquik/x-tweet-scraper` | `profileTweets` |
| Read a post, thread, reply tree, quote set, or article | `xquik/x-tweet-scraper` | matching direct mode |
| Read a list timeline | `xquik/x-tweet-scraper` | `listTweets` |
| Collect followers, following, or verified followers | `xquik/x-follower-scraper` | matching relation |
| Collect list or community members | `xquik/x-follower-scraper` | `list_members` or `community_members` |
| Compare audience overlap | `xquik/x-follower-scraper` | `overlapMode: true` |

Read [Actor Contracts](references/actor-contracts.md) before choosing fields.

## Workflow

### 1. Frame the Question

Record:

1. The public targets or search terms.
2. The required relation or tweet route.
3. The total result cap.
4. Any per-target fairness cap.
5. The output shape and field naming.
6. The analysis boundary and excluded inferences.

Use user IDs or normalized handles when identity accuracy matters.
Never compare display names as stable identifiers.

### 2. Inspect the Live Contract

Fetch current public Actor details without starting a run:

```bash
apify actors info "xquik/x-tweet-scraper" --input --json
apify actors info "xquik/x-follower-scraper" --input --json
```

Stop unless both commands return their input schemas successfully.

Confirm these items before execution:

- The Actor is public and not deprecated.
- Every input field exists in the current schema.
- The selected route supports the target type.
- `maxItems` is explicit.
- Current pricing fits the approved budget.

Do not hardcode prices. Treat each Actor listing as authoritative.

### 3. Build a Bounded Input

Start with the smallest useful result cap.

For multi-query tweet searches, use the run-wide `maxItems` field.
It covers the whole run.
It does not create an independent quota per search term.

For follower relations, use `maxItemsPerTarget` to balance targets.
Retain `includeTargetMetadata: true` to preserve sources.
For other explicit multi-target routes, use it only when the live schema permits it.

Use the schema-checked inputs in [Worked Examples](examples/research-and-overlap.md).

### 4. Confirm the External Run

Before starting any billable run:

1. Present the Actor ID.
2. Present the target count.
3. Present the result limits.
4. Present the current pricing source.
5. Ask for explicit approval.

Keep `APIFY_TOKEN` in the environment.
Never place tokens in Actor input, output, logs, or saved examples.

### 5. Execute and Retrieve Results

Run only after approval:

```bash
apify actors call "ACTOR_ID" -i 'JSON_INPUT' --json --output-dataset
```

For long runs, start asynchronously and poll the returned run ID.
Fetch results from the run's default dataset.

Do not retry automatically after billable partial success.
Inspect the run, limits, and diagnostics before another attempt.

### 6. Validate Rows Before Analysis

Separate data rows from diagnostic rows.
A row containing `status` and `message` may describe an unavailable target.

For tweet research:

- Preserve `searchTerm` when several searches share one run.
- Keep post IDs and canonical URLs.
- Report incomplete or unavailable targets separately.

For audience research:

- Preserve target and relation metadata.
- Keep `overlapCount` and source arrays in merge mode.
- Report filtered, duplicate, and unavailable profiles separately.

Read [Safety and Diagnostics](references/safety-and-diagnostics.md) before conclusions.

### 7. Deliver an Auditable Result

Report:

- Actor ID and route.
- Inputs, result limits, and retrieval time.
- Returned, filtered, duplicate, and diagnostic row counts.
- Dataset or artifact location.
- Analysis limitations.
- Any skipped target and its diagnostic message.

Distinguish observed public data from interpretation.
A follow does not prove endorsement, intent, or current interest.

## Examples

### Example 1: Bounded Topic Research

```text
Use @xquik-apify-x-research to collect 100 public posts about two product terms.
Preserve each search term, use rich camelCase output, and separate diagnostics.
```

### Example 2: Audience Overlap

```text
Use @xquik-apify-x-research to compare public followers for two accounts.
Cap the complete run at 200 profiles and each account at 100 profiles.
Return merged overlaps with source-target metadata.
```

### Example 3: List and Community Audit

```text
Use @xquik-apify-x-research to collect public list members and community members.
Run each relation separately and preserve source IDs for auditability.
```

See [Worked Examples](examples/research-and-overlap.md) for exact JSON inputs.

## Best Practices

- ✅ **Do:** Fetch the current schema before each workflow.
- ✅ **Do:** Set global and per-target limits explicitly.
- ✅ **Do:** Confirm current costs before a billable run.
- ✅ **Do:** Preserve source metadata and diagnostic rows.
- ✅ **Do:** Normalize handles or IDs before comparing audiences.
- ✅ **Do:** State uncertainty and platform visibility limits.
- ❌ **Don't:** Infer endorsement from a follow.
- ❌ **Don't:** Treat display names as stable identifiers.
- ❌ **Don't:** Hide unavailable, filtered, or duplicate rows.
- ❌ **Don't:** retry a chargeable run without review.

## Troubleshooting

### Problem: The dataset contains fewer rows than requested

**Symptoms:** Returned rows fall below `maxItems`.

**Solution:** Inspect diagnostic rows and target visibility. Confirm the query,
relation, and public availability before changing limits.

### Problem: One target consumes most results

**Symptoms:** A multi-target run produces an unbalanced dataset.

**Solution:** Use a route-supported per-target cap. Run targets separately when
each needs an independent quota.

### Problem: Overlap counts look inconsistent

**Symptoms:** The same profile appears several times or lacks source arrays.

**Solution:** Use `overlapMode: true` or `dedupeMode: "merge"`. Preserve target
metadata and compare stable user IDs.

### Problem: A row has no expected tweet or profile fields

**Symptoms:** The row contains `status`, `message`, or unavailable markers.

**Solution:** Classify it as diagnostic. Do not include it in content metrics.

### Problem: A schema example stops validating

**Symptoms:** The Actor rejects a documented field or value.

**Solution:** Fetch the live input schema. Update the input before running.

## Related Skills

- `@apify-ultimate-scraper` for broad Actor discovery across platforms.
- `@apify-audience-analysis` for cross-platform audience workflows.
- `@apify-content-analytics` for cross-platform content performance.
- `@apify-trend-analysis` for multi-platform trend research.

## Additional Resources

- [Actor Contracts](references/actor-contracts.md)
- [Safety and Diagnostics](references/safety-and-diagnostics.md)
- [Worked Examples](examples/research-and-overlap.md)
- [Xquik X Tweet Scraper listing](https://apify.com/xquik/x-tweet-scraper)
- [Xquik X Follower Scraper listing](https://apify.com/xquik/x-follower-scraper)

Xquik is an independent third-party service. Not affiliated with X Corp. "Twitter" and "X" are trademarks of X Corp.
