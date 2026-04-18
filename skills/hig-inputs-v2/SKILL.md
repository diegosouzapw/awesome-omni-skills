---
name: hig-inputs-v2
description: "Apple HIG: Inputs workflow skill. Use this skill when the user needs Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["hig-inputs-v2", "hig-inputs", "check", "for", "claude", "apple-design-context", "asking", "questions"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Apple HIG: Inputs

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hig-inputs` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Inputs Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/apple-pencil-and-scribble.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/camera-control.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Output Format

1. **Input method recommendations by platform** and how they interact.
2. **Gesture specification table** -- standard and custom gestures with expected behaviors.
3. **Keyboard shortcut recommendations** following system conventions.
4. **Accessibility input alternatives** for VoiceOver, Switch Control, etc.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-inputs-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-inputs-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-inputs-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-inputs-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Support multiple input methods. Touch, pointer, keyboard, pencil, voice, eyes, hands, controllers. Design for the inputs available on each platform. On iPadOS, support both touch and pointer; on macOS, both pointer and keyboard.
- Consistent feedback for every input action. Visible, audible, or haptic response.
- Standard gestures must behave consistently. Tap to activate, swipe to scroll/navigate, pinch to zoom, long press for context menus, drag to move. Don't override system gestures (edge swipes for back, Home, notifications).
- Use standard recognizers; keep custom gestures discoverable. Apple's built-in recognizers handle edge cases and accessibility. If you add non-standard gestures, provide hints or coaching to teach them.
- Precision drawing, markup, and selection. Support pressure, tilt, and hover. Distinguish finger from Pencil when appropriate (finger pans, Pencil draws).
- Support Scribble in text fields. Users expect to write with Pencil in any text input.
- Keyboard shortcuts and full navigation. Standard shortcuts (Cmd+C/V/Z) plus custom ones visible in the iPadOS Command key overlay. Logical tab order.

### Imported Operating Notes

#### Imported: Key Principles

### General

1. **Support multiple input methods.** Touch, pointer, keyboard, pencil, voice, eyes, hands, controllers. Design for the inputs available on each platform. On iPadOS, support both touch and pointer; on macOS, both pointer and keyboard.

2. **Consistent feedback for every input action.** Visible, audible, or haptic response.

### Gestures

3. **Standard gestures must behave consistently.** Tap to activate, swipe to scroll/navigate, pinch to zoom, long press for context menus, drag to move. Don't override system gestures (edge swipes for back, Home, notifications).

4. **Use standard recognizers; keep custom gestures discoverable.** Apple's built-in recognizers handle edge cases and accessibility. If you add non-standard gestures, provide hints or coaching to teach them.

### Apple Pencil

5. **Precision drawing, markup, and selection.** Support pressure, tilt, and hover. Distinguish finger from Pencil when appropriate (finger pans, Pencil draws).

6. **Support Scribble in text fields.** Users expect to write with Pencil in any text input.

### Keyboards

7. **Keyboard shortcuts and full navigation.** Standard shortcuts (Cmd+C/V/Z) plus custom ones visible in the iPadOS Command key overlay. Logical tab order.

8. **Respect the software keyboard.** Adjust layout when keyboard appears. Use keyboard-avoidance APIs.

### Game Controllers

9. **MFi controllers with on-screen fallbacks.** Map to extended gamepad profile, sensible defaults, remappable. Always offer touch or keyboard alternatives.

### Pointer and Trackpad

10. **Native feel.** Hover effects, pointer shape adaptation, standard cursor behaviors. Two-finger scroll, pinch to zoom, swipe to navigate.

### Digital Crown

11. **Primary scrolling and value-adjustment input on watchOS.** Scrolling lists, adjusting values, navigating views. Haptic feedback at detents.

### Eyes and Spatial (visionOS)

12. **Look and pinch.** Generous hit targets (eye tracking is less precise than touch). Avoid sustained gaze for activation. Direct hand manipulation in immersive experiences.

### Focus System

13. **Critical for tvOS and visionOS.** Predictable focus movement. Every interactive element focusable. Clear visual indicators (scale, highlight, elevation). Logical focus groups.

### Remotes

14. **Siri Remote: limited surface.** Touch area for swiping, clickpad for selection, few physical buttons. Keep interactions simple.

### Motion and Nearby

15. **Gyroscope, accelerometer, UWB: use judiciously.** Suits gaming, fitness, AR. Not for essential tasks. Provide calibration and reset. For UWB, communicate distance and direction with visual or haptic cues.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hig-inputs`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@grafana-dashboards-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@graphql-architect-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@graphql-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@growth-engine-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/apple-pencil-and-scribble.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [apple-pencil-and-scribble.md](references/apple-pencil-and-scribble.md)
- [camera-control.md](references/camera-control.md)
- [digital-crown.md](references/digital-crown.md)
- [eyes.md](references/eyes.md)
- [apple-pencil-and-scribble.md](references/apple-pencil-and-scribble.md)
- [camera-control.md](references/camera-control.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [gestures.md](references/gestures.md) | Touch gestures | Tap, swipe, pinch, long press, drag, system gestures |
| [apple-pencil-and-scribble.md](references/apple-pencil-and-scribble.md) | Apple Pencil | Precision, pressure, tilt, hover, handwriting |
| [keyboards.md](references/keyboards.md) | Keyboards | Shortcuts, navigation, software keyboard, Command key |
| [game-controls.md](references/game-controls.md) | Game controllers | MFi, extended gamepad, remapping, fallbacks |
| [pointing-devices.md](references/pointing-devices.md) | Pointer/trackpad | Hover, cursor morphing, trackpad gestures |
| [digital-crown.md](references/digital-crown.md) | Digital Crown | Scrolling, value adjustment, haptic detents |
| [eyes.md](references/eyes.md) | Eye tracking | Look and tap, gaze targeting, hit target sizing |
| [spatial-interactions.md](references/spatial-interactions.md) | Spatial input | Hand gestures, direct manipulation, immersive input |
| [focus-and-selection.md](references/focus-and-selection.md) | Focus system | tvOS/visionOS navigation, focus indicators, groups |
| [remotes.md](references/remotes.md) | Remotes | Touch surface, clickpad, simple interactions |
| [gyro-and-accelerometer.md](references/gyro-and-accelerometer.md) | Motion sensors | Gyroscope, accelerometer, calibration, gaming |
| [nearby-interactions.md](references/nearby-interactions.md) | Nearby interactions | U1 chip, directional finding, proximity triggers |
| [camera-control.md](references/camera-control.md) | Camera Control | iPhone camera hardware button, quick launch |

#### Imported: Questions to Ask

1. Which platforms and input devices?
2. Productivity or casual app?
3. Custom gestures in the design?
4. Game controller support needed?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
