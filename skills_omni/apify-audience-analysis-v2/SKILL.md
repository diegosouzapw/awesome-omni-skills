---
name: "apify-audience-analysis-v2"
description: "Audience Analysis workflow skill. Use this skill when the user needs Understand audience demographics, preferences, behavior patterns, and engagement quality across Facebook, Instagram, YouTube, and TikTok and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "backend"
tags:
  - "apify-audience-analysis-v2"
  - "apify-audience-analysis"
  - "understand"
  - "audience"
  - "demographics"
  - "preferences"
  - "behavior"
  - "patterns"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-18"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "apify-audience-analysis-v2"
family_name: "Audience Analysis"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/apify-audience-analysis-v2"
upstream_skill: "skills/apify-audience-analysis-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "71"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "apify-audience-analysis-v2"
---

# Audience Analysis

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/apify-audience-analysis` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Audience Analysis Analyze and understand your audience using Apify Actors to extract follower demographics, engagement patterns, and behavior data from multiple platforms.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need audience demographics, engagement patterns, or follower behavior from social platforms.
- The task is to choose and run Apify Actors for audience analysis across Facebook, Instagram, YouTube, or TikTok.
- You need structured extraction plus a summarized interpretation of audience findings.
- Use when the request clearly matches the imported source intent: Understand audience demographics, preferences, behavior patterns, and engagement quality across Facebook, Instagram, YouTube, and TikTok.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `reference/scripts/run_actor.js` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `reference/scripts/run_actor.js` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. [ ] Step 1: Identify audience analysis type (select Actor)
2. [ ] Step 2: Fetch Actor schema via mcpc
3. [ ] Step 3: Ask user preferences (format, filename)
4. [ ] Step 4: Run the analysis script
5. [ ] Step 5: Summarize findings
6. User Need - Actor ID - Best For
7. Facebook follower demographics - apify/facebook-followers-following-scraper - FB followers/following lists

### Imported Workflow Notes

#### Imported: Workflow

Copy this checklist and track progress:

```
Task Progress:
- [ ] Step 1: Identify audience analysis type (select Actor)
- [ ] Step 2: Fetch Actor schema via mcpc
- [ ] Step 3: Ask user preferences (format, filename)
- [ ] Step 4: Run the analysis script
- [ ] Step 5: Summarize findings
```

### Step 1: Identify Audience Analysis Type

Select the appropriate Actor based on analysis needs:

| User Need | Actor ID | Best For |
|-----------|----------|----------|
| Facebook follower demographics | `apify/facebook-followers-following-scraper` | FB followers/following lists |
| Facebook engagement behavior | `apify/facebook-likes-scraper` | FB post likes analysis |
| Facebook video audience | `apify/facebook-reels-scraper` | FB Reels viewers |
| Facebook comment analysis | `apify/facebook-comments-scraper` | FB post/video comments |
| Facebook content engagement | `apify/facebook-posts-scraper` | FB post engagement metrics |
| Instagram audience sizing | `apify/instagram-profile-scraper` | IG profile demographics |
| Instagram location-based | `apify/instagram-search-scraper` | IG geo-tagged audience |
| Instagram tagged network | `apify/instagram-tagged-scraper` | IG tag network analysis |
| Instagram comprehensive | `apify/instagram-scraper` | Full IG audience data |
| Instagram API-based | `apify/instagram-api-scraper` | IG API access |
| Instagram follower counts | `apify/instagram-followers-count-scraper` | IG follower tracking |
| Instagram comment export | `apify/export-instagram-comments-posts` | IG comment bulk export |
| Instagram comment analysis | `apify/instagram-comment-scraper` | IG comment sentiment |
| YouTube viewer feedback | `streamers/youtube-comments-scraper` | YT comment analysis |
| YouTube channel audience | `streamers/youtube-channel-scraper` | YT channel subscribers |
| TikTok follower demographics | `clockworks/tiktok-followers-scraper` | TT follower lists |
| TikTok profile analysis | `clockworks/tiktok-profile-scraper` | TT profile demographics |
| TikTok comment analysis | `clockworks/tiktok-comments-scraper` | TT comment engagement |

### Step 2: Fetch Actor Schema

Fetch the Actor's input schema and details dynamically using mcpc:

```bash
export $(grep APIFY_TOKEN .env | xargs) && mcpc --json mcp.apify.com --header "Authorization: Bearer $APIFY_TOKEN" tools-call fetch-actor-details actor:="ACTOR_ID" | jq -r ".content"
```

Replace `ACTOR_ID` with the selected Actor (e.g., `apify/facebook-followers-following-scraper`).

This returns:
- Actor description and README
- Required and optional input parameters
- Output fields (if available)

### Step 3: Ask User Preferences

Before running, ask:
1. **Output format**:
   - **Quick answer** - Display top few results in chat (no file saved)
   - **CSV** - Full export with all fields
   - **JSON** - Full export in JSON format
2. **Number of results**: Based on character of use case

### Step 4: Run the Script

**Quick answer (display in chat, no file):**
```bash
node --env-file=.env ${CLAUDE_PLUGIN_ROOT}/reference/scripts/run_actor.js \
  --actor "ACTOR_ID" \
  --input 'JSON_INPUT'
```

**CSV:**
```bash
node --env-file=.env ${CLAUDE_PLUGIN_ROOT}/reference/scripts/run_actor.js \
  --actor "ACTOR_ID" \
  --input 'JSON_INPUT' \
  --output YYYY-MM-DD_OUTPUT_FILE.csv \
  --format csv
```

**JSON:**
```bash
node --env-file=.env ${CLAUDE_PLUGIN_ROOT}/reference/scripts/run_actor.js \
  --actor "ACTOR_ID" \
  --input 'JSON_INPUT' \
  --output YYYY-MM-DD_OUTPUT_FILE.json \
  --format json
```

### Step 5: Summarize Findings

After completion, report:
- Number of audience members/profiles analyzed
- File location and name
- Key demographic insights
- Suggested next steps (deeper analysis, segmentation)

#### Imported: Prerequisites

(No need to check it upfront)

- `.env` file with `APIFY_TOKEN`
- Node.js 20.6+ (for native `--env-file` support)
- `mcpc` CLI tool: `npm install -g @apify/mcpc`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @apify-audience-analysis-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @apify-audience-analysis-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @apify-audience-analysis-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @apify-audience-analysis-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/apify-audience-analysis`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [scripts/run_actor.js](reference/scripts/run_actor.js)

### Imported Reference Notes

#### Imported: Error Handling

`APIFY_TOKEN not found` - Ask user to create `.env` with `APIFY_TOKEN=your_token`
`mcpc not found` - Ask user to install `npm install -g @apify/mcpc`
`Actor not found` - Check Actor ID spelling
`Run FAILED` - Ask user to check Apify console link in error output
`Timeout` - Reduce input size or increase `--timeout`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
