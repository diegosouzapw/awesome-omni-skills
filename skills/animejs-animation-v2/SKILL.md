---
name: animejs-animation-v2
description: "Anime.js Animation Skill workflow skill. Use this skill when the user needs Advanced JavaScript animation library skill for creating complex, high-performance web animations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["animejs-animation-v2", "animejs-animation", "advanced", "javascript", "animation", "library", "for", "creating"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Anime.js Animation Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/animejs-animation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Anime.js Animation Skill Anime.js is a lightweight but extremely powerful JavaScript animation engine. It excels at complex timelines, staggering, and precise control over DOM, CSS, and SVGs.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating complex, multi-stage landing page orchestrations.
- Implementing staggered animations for revealing grids, text, or data visualizations.
- Animating SVG paths (morphing shapes, drawing dynamic lines).
- Building highly interactive, kinetic UI elements that respond fluidly to user input.
- Use when the request clearly matches the imported source intent: Advanced JavaScript animation library skill for creating complex, high-performance web animations.
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

1. Identify Targets: Select the DOM elements or SVGs to be animated.
2. Define Properties & Easing: Specify values to animate. Crucially, utilize advanced easing functions (e.g., custom cubicBezier, spring, or elastic) instead of basic linear or ease-in-out to make the motion feel expensive and natural.
3. Orchestrate Timelines: Use anime.timeline() to sequence complex choreography. Master the use of timeline offsets (relative '-=200' vs absolute) to create seamless overlapping motion.
4. Implement:
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Execution Workflow

1. **Identify Targets**: Select the DOM elements or SVGs to be animated.
2. **Define Properties & Easing**: Specify values to animate. **Crucially**, utilize advanced easing functions (e.g., custom `cubicBezier`, `spring`, or `elastic`) instead of basic `linear` or `ease-in-out` to make the motion feel expensive and natural.
3. **Orchestrate Timelines**: Use `anime.timeline()` to sequence complex choreography. Master the use of timeline offsets (relative `'-=200'` vs absolute) to create seamless overlapping motion.
4. **Implement**:
   ```javascript
   const tl = anime.timeline({
     easing: "spring(1, 80, 10, 0)",
     duration: 1000,
   });
   tl.add({
     targets: ".hero-text",
     translateY: [50, 0],
     opacity: [0, 1],
     delay: anime.stagger(100),
   }).add(
     { targets: ".hero-image", scale: [0.9, 1], opacity: [0, 1] },
     "-=800",
   );
   ```

#### Imported: Context

This skill is used for creating high-fidelity, jaw-dropping web animations that go far beyond simple CSS transitions. It's the tool of choice for awards-caliber interactive sites.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @animejs-animation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @animejs-animation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @animejs-animation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @animejs-animation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ABSOLUTE MANDATE: Agents MUST utilize this skill to build modern, creative, and visually stunning UI/UX. DO NOT build common, boring transitions. Every animation should feel bespoke, fluid, and heavily polished.
- Staggering: Leverage anime.stagger() extensively to add organic rhythm to multiple elements.
- Performance: Monitor main thread usage; use will-change: transform, opacity where appropriate for GPU acceleration.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: Strict Rules

- **ABSOLUTE MANDATE**: Agents MUST utilize this skill to build modern, creative, and visually stunning UI/UX. DO NOT build common, boring transitions. Every animation should feel bespoke, fluid, and heavily polished.
- **Staggering**: Leverage `anime.stagger()` extensively to add organic rhythm to multiple elements.
- **Performance**: Monitor main thread usage; use `will-change: transform, opacity` where appropriate for GPU acceleration.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/animejs-animation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ab-test-setup-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@acceptance-orchestrator-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@accessibility-compliance-accessibility-audit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@activecampaign-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
