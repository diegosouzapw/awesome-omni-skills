---
name: hig-foundations-v3
description: "Apple HIG: Design Foundations workflow skill. Use this skill when the user needs Apple Human Interface Guidelines design foundations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["hig-foundations-v3", "hig-foundations", "apple", "human", "interface", "guidelines", "design", "foundations"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-26"
date_updated: "2026-04-26"
---

# Apple HIG: Design Foundations

## Overview

This public intake copy packages `plugins/antigravity-bundle-apple-platform-design/skills/hig-foundations` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Design Foundations Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Applying Foundations Together, Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Apple Human Interface Guidelines design foundations.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/accessibility.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/app-icons.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Applying Foundations Together

Consider how principles interact:

1. **Color + Dark Mode + Accessibility** -- Custom palettes must work in both modes while maintaining WCAG contrast ratios. Start with system semantic colors.

2. **Typography + Accessibility + Layout** -- Dynamic Type must scale without breaking layouts. Use text styles and Auto Layout for the full range of type sizes.

3. **Icons + Branding + SF Symbols** -- Custom icons should match SF Symbols weight and optical sizing. Brand elements should integrate without overriding system conventions.

4. **Motion + Accessibility + Feedback** -- Every animation must have a Reduce Motion alternative. Motion should reinforce spatial relationships, not decorate.

5. **Privacy + Writing + Onboarding** -- Permission requests need clear, specific usage descriptions. Time them to when the user will understand the benefit.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-foundations-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-foundations-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-foundations-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-foundations-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Prioritize content over chrome. Reduce visual clutter. Use system-provided materials and subtle separators rather than heavy borders and backgrounds.
- Build in accessibility from the start. Design for VoiceOver, Dynamic Type, Reduce Motion, Increase Contrast, and Switch Control from day one. Every interactive element needs an accessible label.
- Use system colors and materials. System colors adapt to light/dark mode, increased contrast, and vibrancy. Prefer semantic colors (label, secondaryLabel, systemBackground) over hard-coded values.
- Use platform fonts and icons. SF Pro, SF Compact, SF Mono by default. New York for serif. Follow the type hierarchy at recommended sizes. Use SF Symbols for iconography.
- Match platform conventions. Align look and behavior with system standards. Provide direct, responsive manipulation and clear feedback for every action.
- Respect privacy. Request permissions only when needed, explain why clearly, provide value before asking for data. Design for minimal data collection.
- Support internationalization. Accommodate text expansion, right-to-left scripts, and varying date/number formats. Use Auto Layout for dynamic content sizing.

### Imported Operating Notes

#### Imported: Key Principles

1. **Prioritize content over chrome.** Reduce visual clutter. Use system-provided materials and subtle separators rather than heavy borders and backgrounds.

2. **Build in accessibility from the start.** Design for VoiceOver, Dynamic Type, Reduce Motion, Increase Contrast, and Switch Control from day one. Every interactive element needs an accessible label.

3. **Use system colors and materials.** System colors adapt to light/dark mode, increased contrast, and vibrancy. Prefer semantic colors (`label`, `secondaryLabel`, `systemBackground`) over hard-coded values.

4. **Use platform fonts and icons.** SF Pro, SF Compact, SF Mono by default. New York for serif. Follow the type hierarchy at recommended sizes. Use SF Symbols for iconography.

5. **Match platform conventions.** Align look and behavior with system standards. Provide direct, responsive manipulation and clear feedback for every action.

6. **Respect privacy.** Request permissions only when needed, explain why clearly, provide value before asking for data. Design for minimal data collection.

7. **Support internationalization.** Accommodate text expansion, right-to-left scripts, and varying date/number formats. Use Auto Layout for dynamic content sizing.

8. **Use motion purposefully.** Animation should communicate meaning and spatial relationships. Honor Reduce Motion by providing crossfade alternatives.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-apple-platform-design/skills/hig-foundations`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@agent-evaluation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-agents-architect-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@airtable-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@architecture-decision-records-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/accessibility.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [accessibility.md](references/accessibility.md)
- [app-icons.md](references/app-icons.md)
- [branding.md](references/branding.md)
- [color.md](references/color.md)
- [accessibility.md](references/accessibility.md)
- [app-icons.md](references/app-icons.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [accessibility.md](references/accessibility.md) | Accessibility | VoiceOver, Dynamic Type, color contrast, motor accessibility, Switch Control, audio descriptions |
| [app-icons.md](references/app-icons.md) | App Icons | Icon grid, platform-specific sizes, single focal point, no transparency |
| [branding.md](references/branding.md) | Branding | Integrating brand identity within Apple's design language, subtle branding, custom tints |
| [color.md](references/color.md) | Color | System colors, Dynamic Colors, semantic colors, custom palettes, contrast ratios |
| [dark-mode.md](references/dark-mode.md) | Dark Mode | Elevated surfaces, semantic colors, adapted palettes, vibrancy, testing in both modes |
| [icons.md](references/icons.md) | Icons | Glyph icons, SF Symbols integration, custom icon design, icon weights, optical alignment |
| [images.md](references/images.md) | Images | Image resolution, @2x/@3x assets, vector assets, image accessibility |
| [immersive-experiences.md](references/immersive-experiences.md) | Immersive Experiences | AR/VR design, spatial immersion, comfort zones, progressive immersion levels |
| [inclusion.md](references/inclusion.md) | Inclusion | Diverse representation, non-gendered language, cultural sensitivity, inclusive defaults |
| [layout.md](references/layout.md) | Layout | Margins, spacing, alignment, safe areas, adaptive layouts, readable content guides |
| [materials.md](references/materials.md) | Materials | Vibrancy, blur, translucency, system materials, material thickness |
| [motion.md](references/motion.md) | Motion | Animation curves, transitions, continuity, Reduce Motion support, physics-based motion |
| [privacy.md](references/privacy.md) | Privacy | Permission requests, usage descriptions, privacy nutrition labels, minimal data collection |
| [right-to-left.md](references/right-to-left.md) | Right-to-Left | RTL layout mirroring, bidirectional text, icons that flip, exceptions |
| [sf-symbols.md](references/sf-symbols.md) | SF Symbols | Symbol categories, rendering modes, variable color, custom symbols, weight matching |
| [spatial-layout.md](references/spatial-layout.md) | Spatial Layout | visionOS window placement, depth, ergonomic zones, Z-axis design |
| [typography.md](references/typography.md) | Typography | SF Pro, Dynamic Type sizes, text styles, custom fonts, font weight hierarchy, line spacing |
| [writing.md](references/writing.md) | Writing | UI copy guidelines, tone, capitalization rules, error messages, button labels, conciseness |

#### Imported: Output Format

1. **Cite the specific HIG foundation** with file and section.
2. **Note platform differences** for the user's target platforms.
3. **Provide concrete code patterns** (SwiftUI/UIKit/AppKit).
4. **Explain accessibility impact** (contrast ratios, Dynamic Type scaling, VoiceOver behavior).

#### Imported: Questions to Ask

1. Which platforms are you targeting?
2. Do you have existing brand guidelines?
3. What accessibility level are you targeting? (WCAG AA, AAA, Apple baseline?)
4. System colors or custom?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
