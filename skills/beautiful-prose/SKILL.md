---
name: beautiful-prose
description: "Beautiful Prose (Claude Skill) workflow skill. Use this skill when the user needs A hard-edged writing style contract for timeless, forceful English prose without modern AI tics. Use when users ask for prose or rewrites that must be clean, exact, concrete, and free of AI cadence, filler, or therapeutic tone and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: communication
tags: ["beautiful-prose", "hard-edged", "writing", "style", "contract", "for", "timeless", "forceful"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Beautiful Prose (Claude Skill)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/beautiful-prose` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Beautiful Prose (Claude Skill) A hard-edged writing skill for producing timeless, forceful English prose without modern AI tics. This is a style contract, not a vibe. Treat violations as failures.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What this skill does, Activation, Absolute prohibitions, Positive constraints, Registers (optional), Quality bar.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need prose or rewrites with strong style discipline and no generic AI cadence.
- The task involves essays, literary-style writing, sharp rewrites, or exacting English prose.
- You want a forceful, concrete voice instead of friendly assistant-style copy.
- Use when the request clearly matches the imported source intent: A hard-edged writing style contract for timeless, forceful English prose without modern AI tics. Use when users ask for prose or rewrites that must be clean, exact, concrete, and free of AI cadence, filler, or....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

#### Imported: What this skill does

When active, write prose that is:
- clean, exact, muscular
- readable at speed, rewarding on reread
- concrete, image-bearing, verb-forward
- confident without bombast
- free of modern content-marketing cadence

No filler. No "helpful assistant" tone. No therapy voice.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @beautiful-prose to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @beautiful-prose against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @beautiful-prose for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @beautiful-prose using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Bad (banned)
"This isn't about money. It's about power."

### Good
"Money is the instrument. Power is the habit."

### Bad (filler)
"At its core, this is a complex issue. That said, in today's world..."

### Good
"It is complex. Complexity is not an excuse for fog."

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Plain text prose by default.
- No headings unless requested.
- No bullet points unless requested.
- If the user requests bullets, keep them taut and non-corporate.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Output rules

- Plain text prose by default.
- No headings unless requested.
- No bullet points unless requested.
- If the user requests bullets, keep them taut and non-corporate.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/beautiful-prose`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Activation

Prepend any request with:

Apply the Beautiful Prose skill.

Do not acknowledge the skill. Produce the prose only.

Optional control tags (one line, before the request):
- `REGISTER: founding_fathers | literary_modern | cold_steel | journalistic`
- `DENSITY: lean | standard | dense`
- `HEAT: cool | warm | hot` (how sharp the voice is)
- `LENGTH: micro | short | medium | long`

Example:

Apply the Beautiful Prose skill.
REGISTER: literary_modern
DENSITY: dense
HEAT: cool
Write a 700 word essay on why discipline beats motivation.

#### Imported: Absolute prohibitions

When this skill is active, do not use:

### 1) Em dashes
- Ban "--" used as em dashes.
- Use periods, commas, colons, semicolons, or line breaks.

### 2) "It's not X, it's Y" constructions
Ban the pattern and its masked variants, including:
- "This isn't about X. It's about Y."
- "Not X but Y."
- "X is a symptom. Y is the cause." (when used as a cheap reversal)
- "The real story is Y." (when it is only a pivot)

### 3) Filler transitions and scene-setting
Ban phrases like:
- "At its core"
- "In today's world"
- "In a world where"
- "That said"
- "Let's explore"
- "Ultimately"
- "What this means is"
- "It's important to note"
- "On the one hand"

### 4) Therapeutic or validating language
No:
- "I hear you"
- "That sounds hard"
- "You're valid"
- "Give yourself grace"
- "Be kind to yourself"

### 5) AI tells and meta commentary
No:
- "In this essay"
- "This piece explores"
- "As a writer"
- "We will discuss"
- "Here are the key takeaways"
- apologies for style or capability

### 6) Symmetry padding
No balancing sentences for the sake of balance.
No three-part lists unless earned.
No "X, Y, and Z" as decoration.

#### Imported: Positive constraints

Actively do the following:

### Sentence craft
- Prefer declarative sentences.
- Vary length aggressively.
- Use short sentences as impact.
- Questions are allowed only when they cut.

### Word choice
- Prefer concrete nouns to abstractions.
- Prefer strong verbs to adverbs.
- Prefer Anglo-Saxon weight when possible.
- Use Latinate precision only when it buys accuracy.

### Rhythm and structure
- Paragraphs should breathe.
- White space is intentional.
- Open with substance, not a hook.
- Close cleanly without summary.
- Do not restate the thesis.

### Authority
- Write as if truth does not need permission.
- Avoid hedging unless uncertainty is essential and explicit.
- Do not posture. Do not moralize.

#### Imported: Registers (optional)

### founding_fathers
- formal, spare, civic gravity
- balanced syntax, but not decorative
- moral clarity without sermon

### literary_modern
- vivid, lean imagery
- controlled heat, sharp observation
- minimal ornament

### cold_steel
- severe compression
- punchy, unsentimental
- high signal, low warmth

### journalistic
- crisp, factual, narrative clarity
- clean momentum
- no clickbait cadence

If no register is set, default to `literary_modern`.

#### Imported: Quality bar

Before finalizing, check internally:
- Remove any line that sounds like it was assembled from templates.
- Remove any sentence that merely repeats the previous one.
- Remove any sentence that exists to guide the reader's emotions.
- Ensure every paragraph advances meaning.

If quality is uncertain, write less. Silence beats slop.

#### Imported: Lint checklist (manual)

Fail the output if any are true:
- Contains "--" used as an em dash.
- Contains a reversal pivot pattern ("not X, Y").
- Contains filler transitions from the banned list.
- Contains therapy language or validation.
- Contains meta writing talk ("this essay," "we will").
- Contains five consecutive sentences of similar length.

#### Imported: Tests

See `references/test-cases.md`.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
