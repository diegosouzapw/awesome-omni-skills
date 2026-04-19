---
name: daily-gift-v2
description: "Daily Gift workflow skill. Use this skill when the user needs Relationship-aware daily gift engine with five-stage creative pipeline \u2014 editorial judgment, synthesis, concept generation, visual strategy, and rendering in H5, image, or video and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["creative", "gift", "personalization", "h5", "image-generation", "video-generation", "relationship", "daily-gift-v2"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "jiawei248"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Daily Gift

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/daily-gift` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Daily Gift

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Key Features, Limitations, Security & Safety Notes.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the agent should autonomously decide whether today deserves a personalized gift
- Use when a milestone, anniversary, or emotionally meaningful moment should be marked with a creative artifact
- Use when the user manually requests a visual gift from a quote, poem, or creative brief
- Use when you want a daily cron-triggered creative output that avoids repetition and template fatigue
- Use when the request clearly matches the imported source intent: Relationship-aware daily gift engine with five-stage creative pipeline — editorial judgment, synthesis, concept generation, visual strategy, and rendering in H5, image, or video.
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

A relationship-aware gift engine that decides *whether* a gift should exist before deciding *what* it should be. Uses a five-stage creative pipeline to generate personalized daily gifts in H5 (interactive web pages), AI-generated images, or AI-generated videos. The core design principle is "idea before medium" — the creative concept is locked before the output format is chosen.

Published on ClawHub: https://clawhub.ai/jiawei248/daily-gift

#### Imported: How It Works

### Stage 1: Editorial Judgment

Decide whether a gift should exist today, how heavy it should be (skip / nudge / light / standard / heavy), and what content direction to take (reflect, extension, compass, mirror, play, curation, utility, etc.). Format is NOT chosen here.

### Stage 2: Synthesis + Gift Thesis

Extract six content slots from conversation context (today_theme, emotion_peaks, historical_echo, open_loop, lobster_judgment, preference_hint). Form a gift thesis = anchor (which moment deserves the center) + return (what new perspective the agent gives back). If the thesis has no return, it's not a gift — it's a decorated log entry.

### Stage 2.5: Creative Concept

Generate 5+ concept candidates using seven thinking angles (metaphor flip, format mashup, impossible action, scale shift, role reversal, time distortion, cultural remix). Cross-pollinate with a library of 73 creative seeds across 8 categories. Run three quality checks: concept quality, concept diversity (8 families), and visual/theme collision detection.

### Format Selection

Only after the concept is locked does the system choose the output format (H5, image, or video) based on what best serves the concept.

### Stage 3: Visual Strategy

Choose visual approach, plan assets (pure code, generated background, hybrid), select visual style, and run pre-visualization checks against recent gifts for anti-repetition.

### Stage 4: Rendering

Produce the final artifact. H5 gifts use p5.js/canvas with a quality floor set by built-in templates (300-400 lines of tuned code). Image and video gifts use AI generation APIs. All formats have fallback chains.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @daily-gift-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @daily-gift-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @daily-gift-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @daily-gift-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Let the editorial judgment decide — not every day needs a gift
- ✅ Generate 5+ concept candidates before selecting one
- ✅ Check recent gifts for visual and thematic collision before rendering
- ✅ Use the taste profile to personalize over time
- ❌ Don't skip straight from thesis to rendering without a real creative concept
- ❌ Don't default to "reflect on today" every time — vary content direction
- ❌ Don't choose the format before locking the concept

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Let the editorial judgment decide — not every day needs a gift
- ✅ Generate 5+ concept candidates before selecting one
- ✅ Check recent gifts for visual and thematic collision before rendering
- ✅ Use the taste profile to personalize over time
- ❌ Don't skip straight from thesis to rendering without a real creative concept
- ❌ Don't default to "reflect on today" every time — vary content direction
- ❌ Don't choose the format before locking the concept

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/daily-gift`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@customer-support-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@customs-trade-compliance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-news-report-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Key Features

- **Five-stage creative pipeline** with explicit quality gates between stages
- **Multi-layer anti-repetition**: concept family, visual elements, theme, style, content direction — each tracked across sliding windows of recent gifts
- **Three-layer user taste profile**: Layer 1 (identity — stable), Layer 2 (context — updates every 5-7 gifts), Layer 3 (signals — auto-appended after every gift)
- **Three runtime modes**: onboarding setup, daily cron, and manual trigger
- **11 content directions**: reflect, extension, compass, mirror, gift-from-elsewhere, play, real-world-nudge, curation, delayed-payoff, openclaw-inner-life, utility
- **8 concept families**: borrowed-media, interactive-object, transformation, narrative, data-viz, game-puzzle, real-world, poetic-literary

#### Imported: Limitations

- Requires API keys for image/video generation (optional — H5 works without them)
- Cron mode runs in the agent's main session for full conversation context access
- Shell scripts make external API calls for rendering and asset fetching
- The skill creates and manages local workspace files for state, history, and taste profiling

#### Imported: Security & Safety Notes

- The skill creates a recurring cron job for daily gift delivery. Review and approve the cron setup step.
- Shell scripts in `scripts/` call external APIs (image generation, video generation, asset hosting). Supply API keys only after reviewing which scripts use them.
- User taste data and gift history are stored locally in `workspace/daily-gift/`. No data is sent to external services beyond the configured rendering APIs.
- The skill reads conversation context and memory files to inform editorial judgment — this is core to personalization but means it has broad read access within the agent's workspace.
