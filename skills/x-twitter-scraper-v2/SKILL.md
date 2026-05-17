---
name: x-twitter-scraper-v2
description: "X (Twitter) Scraper - Xquik workflow skill. Use this skill when the user needs X/Twitter automation skill for tweet search, follower export, posting, DMs, webhooks, MCP, SDKs, Hermes Tweet, and TweetClaw and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["twitter", "x-api", "tweet-search", "twitter-api", "twitter-scraper", "follower-export", "automation", "mcp"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-05-17"
---

# X (Twitter) Scraper - Xquik

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/x-twitter-scraper` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# X (Twitter) Scraper - Xquik

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Repository, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User needs to search X/Twitter for tweets by keyword, hashtag, or user
- User asks for advanced Twitter search, profile tweets, or user timeline data
- User wants to look up a user profile (bio, follower counts, etc.)
- User needs engagement metrics for a specific tweet (likes, retweets, views)
- User wants to check if one account follows another
- User needs to extract followers, replies, retweets, quotes, or community members in bulk

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

1. Sign up at xquik.com
2. Generate an API key from the dashboard
3. Set it as an environment variable or pass it directly
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview and provenance files before loading any copied upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: Setup

### Install the Skill

```bash
npx skills add Xquik-dev/x-twitter-scraper
```

Or clone manually into your agent's skills directory:

```bash
# Claude Code
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .claude/skills/x-twitter-scraper

# Cursor / Codex / Gemini CLI / Copilot
git clone https://github.com/Xquik-dev/x-twitter-scraper.git .agents/skills/x-twitter-scraper
```

### Use the Hermes Agent Plugin

For Hermes Agent runtime tools, install Hermes Tweet. It wraps the same Xquik API with `tweet_explore` for endpoint discovery, `tweet_read` for read-only calls, and approval-gated `tweet_action` for writes and private actions.

```bash
hermes plugins install Xquik-dev/hermes-tweet --enable
```

Use Hermes Tweet when a Hermes Agent should search Twitter/X, read tweet replies, look up users, export followers, monitor tweets, post tweets, post replies, send DMs, or automate X actions with explicit approval gates.

### Use the OpenClaw Plugin

For OpenClaw runtime tools, install TweetClaw. It wraps the same Xquik API with `explore` for endpoint discovery and `tweetclaw` for approved calls.

```bash
openclaw plugins install @xquik/tweetclaw
```

Use TweetClaw when the agent should search tweets, post tweets, post replies, send DMs, export followers, download media, create monitors, deliver webhooks, or run giveaway draws from OpenClaw.

### Get an API Key

1. Sign up at [xquik.com](https://xquik.com)
2. Generate an API key from the dashboard
3. Set it as an environment variable or pass it directly

```bash
export XQUIK_API_KEY="xq_YOUR_KEY_HERE"
```

#### Imported: Overview

Gives AI agents X (Twitter) data and automation workflows through the Xquik platform. Covers tweet search, advanced Twitter search, profile tweets, user lookup, follower export, media download, posting, replies, DMs, giveaway draws, account monitoring, webhooks, 23 bulk extraction tools, MCP, official SDKs, the Hermes Tweet Hermes Agent plugin, and the TweetClaw OpenClaw plugin.

#### Imported: Capabilities

| Capability | Description |
|---|---|
| Tweet Search | Find tweets by keyword, hashtag, from:user, "exact phrase", and advanced operators |
| User Lookup | Profile info, bio, follower/following counts |
| Tweet Lookup | Full metrics: likes, retweets, replies, quotes, views, bookmarks |
| Follow Check | Check if A follows B (both directions) |
| Trending Topics | Top trends by region (free, no quota) |
| Account Monitoring | Track new tweets, replies, retweets, quotes, follower changes |
| Webhooks | HMAC-signed real-time event delivery to your endpoint |
| Giveaway Draws | Random winner selection from tweet replies with filters |
| 23 Extraction Tools | Followers, following, verified followers, mentions, posts, replies, reposts, quotes, threads, articles, communities, lists, Spaces, people search, media, likes, and more |
| Write Actions | Send tweets, post replies, like, repost, follow, unfollow, and send DMs after explicit approval |
| SDKs | Official TypeScript, Python, Ruby, Go, Kotlin, Java, PHP, C#, CLI, and Terraform clients |
| MCP Server | StreamableHTTP endpoint for AI-native integrations |
| Hermes Tweet Hermes Agent Plugin | Installable `hermes-tweet` runtime with `tweet_explore`, `tweet_read`, and approval-gated `tweet_action` tools |
| TweetClaw OpenClaw Plugin | Installable `@xquik/tweetclaw` runtime with `explore` and `tweetclaw` tools |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @x-twitter-scraper-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @x-twitter-scraper-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @x-twitter-scraper-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @x-twitter-scraper-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

**Search tweets:**
```
"Search X for tweets about 'claude code' from the last week"
```

**Look up a user:**
```
"Who is @elonmusk? Show me their profile and follower count"
```

**Check engagement:**
```
"How many likes and retweets does this tweet have? https://x.com/..."
```

**Run a giveaway:**
```
"Pick 3 random winners from the replies to this tweet"
```

**Monitor an account:**
```
"Monitor @openai for new tweets and notify me via webhook"
```

**Use Hermes Agent:**
```
"Use Hermes Tweet to search Twitter/X for this launch, read the tweet replies, and prepare a draft reply for approval"
```

**Bulk extraction:**
```
"Extract all followers of @anthropic"
```

**Post a reply:**
```
"Draft and post a reply to this tweet after I approve the final text"
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/x-twitter-scraper`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-search-documents-py-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@backend-dev-guidelines-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@browser-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@cc-skill-security-review-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: API Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/x/tweets/{id}` | GET | Single tweet with full metrics |
| `/x/tweets/search` | GET | Search tweets |
| `/x/users/{username}` | GET | User profile |
| `/x/followers/check` | GET | Follow relationship |
| `/trends` | GET | Trending topics |
| `/monitors` | POST | Create monitor |
| `/events` | GET | Poll monitored events |
| `/webhooks` | POST | Register webhook |
| `/draws` | POST | Run giveaway draw |
| `/extractions` | POST | Start bulk extraction |
| `/extractions/estimate` | POST | Estimate extraction cost |
| `/drafts` | POST | Create tweet drafts |
| `/styles` | POST | Analyze or apply tweet style |
| `/account` | GET | Account & usage info |

**Base URL:** `https://xquik.com/api/v1`
**Auth:** `x-api-key: xq_...` header
**MCP:** `https://xquik.com/mcp` (StreamableHTTP, same API key)

#### Imported: Repository

https://github.com/Xquik-dev/x-twitter-scraper

Hermes Tweet Hermes Agent plugin: https://github.com/Xquik-dev/hermes-tweet

TweetClaw OpenClaw plugin: https://github.com/Xquik-dev/tweetclaw

**Maintained By:** [Xquik](https://xquik.com)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
