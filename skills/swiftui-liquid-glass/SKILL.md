---
name: swiftui-liquid-glass
description: "SwiftUI Liquid Glass workflow skill. Use this skill when the user needs Implement or review SwiftUI Liquid Glass APIs with correct fallbacks and modifier order and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["swiftui-liquid-glass", "implement", "review", "swiftui", "liquid", "glass", "apis", "correct"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# SwiftUI Liquid Glass

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/swiftui-liquid-glass` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# SwiftUI Liquid Glass

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Review Checklist, Implementation Checklist, Quick Snippets, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user wants to adopt or review Liquid Glass in SwiftUI UI.
- When you need correct API usage, fallback handling, or modifier ordering for Liquid Glass.
- Use when the request clearly matches the imported source intent: Implement or review SwiftUI Liquid Glass APIs with correct fallbacks and modifier order.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/liquid-glass.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `agents/openai.yaml` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Inspect where Liquid Glass should be used and where it should not.
2. Verify correct modifier order, shape usage, and container placement.
3. Check for iOS 26+ availability handling and sensible fallbacks.
4. Identify target components for glass treatment (surfaces, chips, buttons, cards).
5. Refactor to use GlassEffectContainer where multiple glass elements appear.
6. Introduce interactive glass only for tappable or focusable elements.
7. Design the glass surfaces and interactions first (shape, prominence, grouping).

### Imported Workflow Notes

#### Imported: Workflow Decision Tree

Choose the path that matches the request:

### 1) Review an existing feature
- Inspect where Liquid Glass should be used and where it should not.
- Verify correct modifier order, shape usage, and container placement.
- Check for iOS 26+ availability handling and sensible fallbacks.

### 2) Improve a feature using Liquid Glass
- Identify target components for glass treatment (surfaces, chips, buttons, cards).
- Refactor to use `GlassEffectContainer` where multiple glass elements appear.
- Introduce interactive glass only for tappable or focusable elements.

### 3) Implement a new feature using Liquid Glass
- Design the glass surfaces and interactions first (shape, prominence, grouping).
- Add glass modifiers after layout/appearance modifiers.
- Add morphing transitions only when the view hierarchy changes with animation.

#### Imported: Overview

Use this skill to build or review SwiftUI features that fully align with the iOS 26+ Liquid Glass API. Prioritize native APIs (`glassEffect`, `GlassEffectContainer`, glass button styles) and Apple design guidance. Keep usage consistent, interactive where needed, and performance aware.

#### Imported: Review Checklist

- **Availability**: `#available(iOS 26, *)` present with fallback UI.
- **Composition**: Multiple glass views wrapped in `GlassEffectContainer`.
- **Modifier order**: `glassEffect` applied after layout/appearance modifiers.
- **Interactivity**: `interactive()` only where user interaction exists.
- **Transitions**: `glassEffectID` used with `@Namespace` for morphing.
- **Consistency**: Shapes, tinting, and spacing align across the feature.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @swiftui-liquid-glass to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @swiftui-liquid-glass against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @swiftui-liquid-glass for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @swiftui-liquid-glass using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Prefer native Liquid Glass APIs over custom blurs.
- Use GlassEffectContainer when multiple glass elements coexist.
- Apply .glassEffect(...) after layout and visual modifiers.
- Use .interactive() for elements that respond to touch/pointer.
- Keep shapes consistent across related elements for a cohesive look.
- Gate with #available(iOS 26, *) and provide a non-glass fallback.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Core Guidelines

- Prefer native Liquid Glass APIs over custom blurs.
- Use `GlassEffectContainer` when multiple glass elements coexist.
- Apply `.glassEffect(...)` after layout and visual modifiers.
- Use `.interactive()` for elements that respond to touch/pointer.
- Keep shapes consistent across related elements for a cohesive look.
- Gate with `#available(iOS 26, *)` and provide a non-glass fallback.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/swiftui-liquid-glass`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@steve-jobs` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stitch-design-taste` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stitch-loop` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stitch-ui-design` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/liquid-glass.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/openai.yaml` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [liquid-glass.md](references/liquid-glass.md)
- [openai.yaml](agents/openai.yaml)
- [openai.yaml](agents/openai.yaml)
- [liquid-glass.md](references/liquid-glass.md)

### Imported Reference Notes

#### Imported: Resources

- Reference guide: `references/liquid-glass.md`
- Prefer Apple docs for up-to-date API details.

#### Imported: Implementation Checklist

- Define target elements and desired glass prominence.
- Wrap grouped glass elements in `GlassEffectContainer` and tune spacing.
- Use `.glassEffect(.regular.tint(...).interactive(), in: .rect(cornerRadius: ...))` as needed.
- Use `.buttonStyle(.glass)` / `.buttonStyle(.glassProminent)` for actions.
- Add morphing transitions with `glassEffectID` when hierarchy changes.
- Provide fallback materials and visuals for earlier iOS versions.

#### Imported: Quick Snippets

Use these patterns directly and tailor shapes/tints/spacing.

```swift
if #available(iOS 26, *) {
    Text("Hello")
        .padding()
        .glassEffect(.regular.interactive(), in: .rect(cornerRadius: 16))
} else {
    Text("Hello")
        .padding()
        .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 16))
}
```

```swift
GlassEffectContainer(spacing: 24) {
    HStack(spacing: 24) {
        Image(systemName: "scribble.variable")
            .frame(width: 72, height: 72)
            .font(.system(size: 32))
            .glassEffect()
        Image(systemName: "eraser.fill")
            .frame(width: 72, height: 72)
            .font(.system(size: 32))
            .glassEffect()
    }
}
```

```swift
Button("Confirm") { }
    .buttonStyle(.glassProminent)
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
