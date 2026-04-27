---
name: "mmx-cli"
description: "MiniMax CLI \\u2014 Agent Skill Guide workflow skill. Use this skill when the user needs Use mmx to generate text, images, video, speech, and music via the MiniMax AI platform. Use when the user wants to create media content, chat with MiniMax models, perform web search, or manage MiniMax API resources from the terminal and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "content-media"
tags:
  - "mmx-cli"
  - "use"
  - "mmx"
  - "generate"
  - "text"
  - "images"
  - "video"
  - "speech"
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
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "mmx-cli"
family_name: "MiniMax CLI \u2014 Agent Skill Guide"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/mmx-cli"
upstream_skill: "skills/mmx-cli"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "261"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "9e212f60f996b5db014190498c8bb4f66624629d"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "mmx-cli"
---

# MiniMax CLI — Agent Skill Guide

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/mmx-cli` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# MiniMax CLI — Agent Skill Guide Use mmx to generate text, images, video, speech, music, and perform web search via the MiniMax AI platform.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Agent Flags, Piping Patterns, Exit Codes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when the user wants to generate or inspect text, images, video, speech, music, web-search results, or MiniMax API resources through the mmx terminal CLI.
- Use when the request clearly matches the imported source intent: Use mmx to generate text, images, video, speech, and music via the MiniMax AI platform. Use when the user wants to create media content, chat with MiniMax models, perform web search, or manage MiniMax API resources....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: Prerequisites

```bash
# Install
npm install -g mmx-cli

# Auth (OAuth persists to ~/.mmx/credentials.json, API key persists to ~/.mmx/config.json)
mmx auth login --api-key sk-xxxxx

# Verify active auth source
mmx auth status

# Or pass per-call
mmx text chat --api-key sk-xxxxx --message "Hello"
```

Region is auto-detected. Override with `--region global` or `--region cn`.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @mmx-cli to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @mmx-cli against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @mmx-cli for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @mmx-cli using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Commands

### text chat

Chat completion. Default model: `MiniMax-M2.7`.

```bash
mmx text chat --message <text> [flags]
```

```bash
# Single message
mmx text chat --message "user:What is MiniMax?" --output json --quiet

# Multi-turn with system prompt
mmx text chat \
  --system "You are a coding assistant." \
  --message "user:Write fizzbuzz in Python" \
  --output json

# From file
cat conversation.json | mmx text chat --messages-file - --output json
```

---

### image generate

Generate images. Model: `image-01`.

```bash
mmx image generate --prompt <text> [flags]
```

```bash
mmx image generate --prompt "A cat in a spacesuit" --output json --quiet
mmx image generate --prompt "Logo" --n 3 --out-dir ./gen/ --quiet
```

---

### video generate

Generate video. Default model: `MiniMax-Hailuo-2.3`. Async task — polls until completion by default.

```bash
mmx video generate --prompt <text> [flags]
```

```bash
# Non-blocking: get task ID
mmx video generate --prompt "A robot." --async --quiet

# Blocking: wait and save file
mmx video generate --prompt "Ocean waves." --download ocean.mp4 --quiet
```

---

### speech synthesize

Text-to-speech. Default model: `speech-2.8-hd`. Max 10k chars.

```bash
mmx speech synthesize --text <text> [flags]
```

```bash
mmx speech synthesize --text "Hello world" --out hello.mp3 --quiet
echo "Breaking news." | mmx speech synthesize --text-file - --out news.mp3
```

---

### music generate

Generate music. Model: `music-2.6-free`.

```bash
mmx music generate --prompt <text> [--lyrics <text>] [flags]
```

```bash
# Instrumental
mmx music generate --prompt "Cinematic orchestral, building tension" --instrumental --out bgm.mp3 --quiet

# With auto-generated lyrics
mmx music generate --prompt "Upbeat pop about summer" --lyrics-optimizer --out summer.mp3 --quiet
```

---

### search query

Web search via MiniMax.

```bash
mmx search query --q "MiniMax AI" --output json --quiet
```

---

### vision describe

Image understanding via VLM.

```bash
mmx vision describe --image photo.jpg --prompt "What breed?" --output json
```

---

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/mmx-cli`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@changelog-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@commit-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@create-pr-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@distributed-tracing-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Agent Flags

Always use these flags in non-interactive (agent/CI) contexts:

| Flag | Purpose |
|---|---|
| `--non-interactive` | Fail fast on missing args instead of prompting |
| `--quiet` | Suppress spinners/progress; stdout is pure data |
| `--output json` | Machine-readable JSON output |
| `--async` | Return task ID immediately (video generation) |
| `--dry-run` | Preview the API request without executing |
| `--yes` | Skip confirmation prompts |

---

#### Imported: Piping Patterns

```bash
# Chain: generate image → describe it
URL=$(mmx image generate --prompt "A sunset" --quiet)
mmx vision describe --image "$URL" --quiet

# Async video workflow
TASK=$(mmx video generate --prompt "A robot" --async --quiet | jq -r '.taskId')
mmx video task get --task-id "$TASK" --output json
mmx video download --task-id "$TASK" --out robot.mp4
```

---

#### Imported: Exit Codes

| Code | Meaning |
|---|---|
| 0 | Success |
| 1 | General error |
| 2 | Usage error |
| 3 | Authentication error |
| 4 | Quota exceeded |
| 5 | Timeout |
| 10 | Content filter triggered |

---

#### Imported: Limitations

- Requires a configured MiniMax account and valid authentication before any API-backed command will work.
- Media-generation tasks can be async, quota-limited, or region-constrained; agents should handle delayed completion and provider-side failures explicitly.
- This skill documents CLI usage only and does not replace provider policy review, content-safety checks, or downstream file validation.
