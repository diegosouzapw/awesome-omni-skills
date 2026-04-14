---
name: vr-ar
description: "VR/AR Development workflow skill. Use this skill when the user needs VR/AR development principles. Comfort, interaction, performance requirements and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["vr-ar", "development", "principles", "comfort", "interaction", "performance", "requirements", "frontend"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# VR/AR Development

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/game-development/vr-ar` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# VR/AR Development > Immersive experience principles. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. Platform Selection, 3. Performance Requirements, 5. Spatial Design, 6. Anti-Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: VR/AR development principles. Comfort, interaction, performance requirements.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: 1. Platform Selection

### VR Platforms

| Platform | Use Case |
|----------|----------|
| **Quest** | Standalone, wireless |
| **PCVR** | High fidelity |
| **PSVR** | Console market |
| **WebXR** | Browser-based |

### AR Platforms

| Platform | Use Case |
|----------|----------|
| **ARKit** | iOS devices |
| **ARCore** | Android devices |
| **WebXR** | Browser AR |
| **HoloLens** | Enterprise |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @vr-ar to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @vr-ar against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @vr-ar for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @vr-ar using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Cause - Solution
- Locomotion - Teleport, snap turn
- Low FPS - Maintain 90 FPS
- Camera shake - Avoid or minimize
- Rapid acceleration - Gradual movement
- Vignette during movement
- Snap vs smooth turning

### Imported Operating Notes

#### Imported: 2. Comfort Principles

### Motion Sickness Prevention

| Cause | Solution |
|-------|----------|
| **Locomotion** | Teleport, snap turn |
| **Low FPS** | Maintain 90 FPS |
| **Camera shake** | Avoid or minimize |
| **Rapid acceleration** | Gradual movement |

### Comfort Settings

- Vignette during movement
- Snap vs smooth turning
- Seated vs standing modes
- Height calibration

---

#### Imported: 4. Interaction Principles

### Controller Interaction

| Type | Use |
|------|-----|
| **Point + click** | UI, distant objects |
| **Grab** | Manipulation |
| **Gesture** | Magic, special actions |
| **Physical** | Throwing, swinging |

### Hand Tracking

- More immersive but less precise
- Good for: social, casual
- Challenging for: action, precision

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/game-development/vr-ar`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ffuf-web-fuzzing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@figma-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 3. Performance Requirements

### Target Metrics

| Platform | FPS | Resolution |
|----------|-----|------------|
| Quest 2 | 72-90 | 1832x1920 |
| Quest 3 | 90-120 | 2064x2208 |
| PCVR | 90 | 2160x2160+ |
| PSVR2 | 90-120 | 2000x2040 |

### Frame Budget

- VR requires consistent frame times
- Single dropped frame = visible judder
- 90 FPS = 11.11ms budget

---

#### Imported: 5. Spatial Design

### World Scale

- 1 unit = 1 meter (critical)
- Objects must feel right size
- Test with real measurements

### Depth Cues

| Cue | Importance |
|-----|------------|
| Stereo | Primary depth |
| Motion parallax | Secondary |
| Shadows | Grounding |
| Occlusion | Layering |

---

#### Imported: 6. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Move camera without player | Player controls camera |
| Drop below 90 FPS | Maintain frame rate |
| Use tiny UI text | Large, readable text |
| Ignore arm length | Scale to player reach |

---

> **Remember:** Comfort is not optional. Sick players don't play.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
