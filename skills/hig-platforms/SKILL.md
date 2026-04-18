---
name: hig-platforms
description: "Apple HIG: Platform Design workflow skill. Use this skill when the user needs Apple Human Interface Guidelines for platform-specific design and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-platforms", "apple", "human", "interface", "guidelines", "for", "platform-specific", "design"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Apple HIG: Platform Design

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hig-platforms` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Platform Design Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Decision Framework, Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apple Human Interface Guidelines for platform-specific design.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/designing-for-games.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/designing-for-ios.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Decision Framework

1. **Identify the primary use context.** On the go (iOS/watchOS), at a desk (macOS), on the couch (tvOS), spatial environment (visionOS)?

2. **Match input to interaction.** Touch for direct manipulation, pointer for precision, gaze+gesture for spatial, Digital Crown for quick scrolling, remote for focus navigation.

3. **Adapt, don't replicate.** A macOS sidebar becomes a tab bar on iPhone. A visionOS volume has no equivalent on watchOS. Translate intent, not implementation.

4. **Leverage platform strengths.** Live Activities on iOS, Desktop Widgets on macOS, complications on watchOS, immersive spaces on visionOS.

5. **Maintain brand consistency** while respecting each platform's visual language and interaction patterns.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-platforms to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-platforms against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-platforms for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-platforms using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Each platform has a distinct identity. Do not port designs between platforms. Respect each platform's conventions, interaction models, and user expectations.
- iOS: touch-first. Direct manipulation on a handheld screen. Optimize for one-handed use. Navigation uses tab bars and push/pop stacks.
- iPadOS: expanded canvas. Support Split View, Slide Over, and Stage Manager. Use sidebars and multi-column layouts. Support pointer and keyboard alongside touch.
- macOS: pointer and keyboard. Dense information display is acceptable. Use menu bars, toolbars, and keyboard shortcuts extensively. Windows are resizable with precise control.
- tvOS: remote and focus. Viewed from a distance. Design for the Siri Remote with focus-based navigation. Large text, simple layouts, linear navigation.
- visionOS: spatial interaction. 3D environment using windows, volumes, and spaces. Eye tracking for targeting, indirect gestures for interaction. Respect ergonomic comfort zones.
- watchOS: glanceable and brief. Information consumable at a glance. Brief interactions. Digital Crown, haptics, and complications for timely content.

### Imported Operating Notes

#### Imported: Key Principles

1. **Each platform has a distinct identity.** Do not port designs between platforms. Respect each platform's conventions, interaction models, and user expectations.

2. **iOS: touch-first.** Direct manipulation on a handheld screen. Optimize for one-handed use. Navigation uses tab bars and push/pop stacks.

3. **iPadOS: expanded canvas.** Support Split View, Slide Over, and Stage Manager. Use sidebars and multi-column layouts. Support pointer and keyboard alongside touch.

4. **macOS: pointer and keyboard.** Dense information display is acceptable. Use menu bars, toolbars, and keyboard shortcuts extensively. Windows are resizable with precise control.

5. **tvOS: remote and focus.** Viewed from a distance. Design for the Siri Remote with focus-based navigation. Large text, simple layouts, linear navigation.

6. **visionOS: spatial interaction.** 3D environment using windows, volumes, and spaces. Eye tracking for targeting, indirect gestures for interaction. Respect ergonomic comfort zones.

7. **watchOS: glanceable and brief.** Information consumable at a glance. Brief interactions. Digital Crown, haptics, and complications for timely content.

8. **Games: own paradigm.** Free to define in-game interaction models, but still respect platform conventions for system interactions (notifications, accessibility, controllers).

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hig-platforms`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/designing-for-games.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [designing-for-games.md](references/designing-for-games.md)
- [designing-for-ios.md](references/designing-for-ios.md)
- [designing-for-ipados.md](references/designing-for-ipados.md)
- [designing-for-macos.md](references/designing-for-macos.md)
- [designing-for-games.md](references/designing-for-games.md)
- [designing-for-ios.md](references/designing-for-ios.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [designing-for-ios.md](references/designing-for-ios.md) | iOS | Touch, tab bars, navigation stacks, gestures, screen sizes, safe areas |
| [designing-for-ipados.md](references/designing-for-ipados.md) | iPadOS | Multitasking, sidebars, pointer, keyboard, Apple Pencil, Stage Manager |
| [designing-for-macos.md](references/designing-for-macos.md) | macOS | Menu bars, toolbars, window management, keyboard shortcuts, dense layouts, Dock |
| [designing-for-tvos.md](references/designing-for-tvos.md) | tvOS | Focus engine, Siri Remote, lean-back experience, content-forward, parallax |
| [designing-for-visionos.md](references/designing-for-visionos.md) | visionOS | Spatial computing, windows/volumes/spaces, eye tracking, hand gestures, depth |
| [designing-for-watchos.md](references/designing-for-watchos.md) | watchOS | Glanceable UI, Digital Crown, complications, notifications, haptics |
| [designing-for-games.md](references/designing-for-games.md) | Games | Controllers, immersive experiences, platform-specific conventions, accessibility |

#### Imported: Output Format

1. **Platform-specific recommendations** citing relevant HIG sections.
2. **Platform differences table** comparing navigation, input, layout, and conventions.
3. **Implementation notes** per platform including recommended APIs and adaptation strategies.

#### Imported: Questions to Ask

1. Which platforms are you targeting?
2. New app or adapting an existing one? If existing, which platform is the base?
3. SwiftUI or UIKit/AppKit?
4. Need to support older OS versions?
5. Primary use context? (On the go, desk, couch, spatial, glanceable?)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
