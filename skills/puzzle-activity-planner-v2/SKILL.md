---
name: puzzle-activity-planner-v2
description: "Puzzle Activity Planner workflow skill. Use this skill when the user needs Plan puzzle-based activities for classrooms, parties, and events with pre-configured generator links and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["education", "puzzle", "classroom", "activity-planning", "event", "puzzle-activity-planner-v2", "puzzle-activity-planner", "plan"]
complexity: beginner
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "fruitwyatt"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Puzzle Activity Planner

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/puzzle-activity-planner` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Puzzle Activity Planner

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Puzzle Types Supported, URL Parameters, Output Format, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Planning a classroom lesson with puzzle activities
- Organizing party games involving puzzles
- Creating team-building sessions with multiple puzzle types
- Preparing educational activities for kids, students, or adults
- Use when the request clearly matches the imported source intent: Plan puzzle-based activities for classrooms, parties, and events with pre-configured generator links.
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

1. Understand the event - audience, group size, duration, theme
2. Select puzzle types - match difficulty and format to the audience
3. Build timeline - minute-by-minute flow with transitions
4. Generate links - pre-configured URLs with theme content baked in
5. Create prep checklist - print quantities and materials needed
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Process

1. **Understand the event** - audience, group size, duration, theme
2. **Select puzzle types** - match difficulty and format to the audience
3. **Build timeline** - minute-by-minute flow with transitions
4. **Generate links** - pre-configured URLs with theme content baked in
5. **Create prep checklist** - print quantities and materials needed

#### Imported: Overview

Plans engaging puzzle-based activities for classrooms, parties, team-building sessions, and events. Given an event description, audience, and goal, produces a structured activity plan with pre-configured generator links that include URL parameters for one-click ready-to-use puzzles.

#### Imported: Puzzle Types Supported

- **Word Search** - vocabulary building, warm-ups, brain training
- **Crossword** - vocabulary review, test prep, party games
- **Sudoku** - math warm-ups, logic training, focus time
- **Bingo** - group games, classroom review, holiday celebrations
- **Jigsaw** - ice-breakers, collaborative activities, crafts

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @puzzle-activity-planner-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @puzzle-activity-planner-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @puzzle-activity-planner-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @puzzle-activity-planner-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Match puzzle difficulty to the audience
- Suggest 2-3 puzzle types per activity for variety
- Include timing buffers for transitions
- Apply the user's theme consistently across all puzzles
- Always use URL parameters with pre-filled content
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Rules

- Match puzzle difficulty to the audience
- Suggest 2-3 puzzle types per activity for variety
- Include timing buffers for transitions
- Apply the user's theme consistently across all puzzles
- Always use URL parameters with pre-filled content

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/puzzle-activity-planner`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: URL Parameters

All generator links include pre-filled parameters so users get ready-to-use puzzles in one click. The skill generates theme-appropriate content (words, clues, items) and embeds them directly in the URL.

Example:
```
https://jigsawmake.com/word-search-maker?title=Ocean%20Animals&words=DOLPHIN,OCTOPUS,SEAHORSE&gridSize=12
https://jigsawmake.com/crossword-puzzle-maker?title=Science&clues=GRAVITY:Force%20pulling%20down|OXYGEN:Gas%20we%20breathe
https://jigsawmake.com/bingo-card-generator?title=Party%20Bingo&items=Dance,Laugh,Sing&cardCount=25
```

#### Imported: Output Format

Each plan includes:
- Activity header (occasion, audience, duration, difficulty)
- Objectives (2-3 learning or engagement goals)
- Puzzle menu table with generator links
- Minute-by-minute timeline
- Materials and prep checklist with print quantities
- Differentiation tips (easier/harder adaptations)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
