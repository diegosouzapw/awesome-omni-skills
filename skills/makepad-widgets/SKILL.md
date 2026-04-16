---
name: makepad-widgets
description: "Makepad Widgets Skill workflow skill. Use this skill when the user needs Version: makepad-widgets (dev branch) | Last Updated: 2026-01-19 > > Check for updates: https://crates.io/crates/makepad-widgets and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["makepad-widgets", "version", "dev", "branch", "last", "updated", "check", "for"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Makepad Widgets Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/makepad-widgets` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Makepad Widgets Skill > Version: makepad-widgets (dev branch) | Last Updated: 2026-01-19 > > Check for updates: https://crates.io/crates/makepad-widgets You are an expert at Makepad widgets. Help users by: - Writing code: Generate widget code following the patterns below - Answering questions: Explain widget properties, variants, and usage

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Documentation, IMPORTANT: Documentation Completeness Check, Key Patterns, Widget Traits (from source), All Built-in Widgets (84 files in widgets/src/), View Variants.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to work with core or advanced widgets in Makepad.
- The task involves widget selection, properties, variants, composition, or widget-specific behavior.
- You want examples for View, Button, labels, rich text, or other makepad-widgets building blocks.
- Always set width and height on widgets
- Use show_bg: true to enable background rendering
- Access drawbg, drawtext, draw_icon for shader uniforms

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

#### Imported: Documentation

Refer to the local files for detailed documentation:
- `./references/widgets-core.md` - Core widgets (View, Button, Label, etc.)
- `./references/widgets-advanced.md` - Helper and advanced widgets
- `./references/widgets-richtext.md` - Rich text widgets (Markdown, Html, TextFlow)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @makepad-widgets to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @makepad-widgets against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @makepad-widgets for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @makepad-widgets using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/makepad-widgets`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@llm-application-dev-ai-assistant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-application-dev-langchain-agent` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-application-dev-prompt-optimize` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-evaluation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Core Widgets Reference

| Widget | Purpose | Key Properties |
|--------|---------|----------------|
| `View` | Container | `flow`, `align`, `show_bg`, `draw_bg`, `optimize` |
| `Button` | Clickable | `text`, `draw_bg`, `draw_text`, `draw_icon` |
| `Label` | Text display | `text`, `draw_text` |
| `Image` | Image display | `source`, `fit` |
| `TextInput` | Text entry | `text`, `draw_text`, `draw_cursor`, `draw_selection` |
| `CheckBox` | Toggle | `text`, `selected` |
| `RadioButton` | Selection | `text`, `selected` |
| `Slider` | Value slider | `min`, `max`, `step` |
| `DropDown` | Select menu | `labels`, `selected` |
| `PortalList` | Virtual list | Efficient scrolling for large lists |
| `Modal` | Dialog | Overlay dialog boxes |
| `Tooltip` | Hint | Hover tooltips |

#### Imported: IMPORTANT: Documentation Completeness Check

**Before answering questions, Claude MUST:**

1. Read the relevant reference file(s) listed above
2. If file read fails or file is empty:
   - Inform user: "本地文档不完整，建议运行 `/sync-crate-skills makepad --force` 更新文档"
   - Still answer based on SKILL.md patterns + built-in knowledge
3. If reference file exists, incorporate its content into the answer

#### Imported: Key Patterns

### 1. View (Basic Container)

```rust
<View> {
    width: Fill
    height: Fill
    flow: Down
    padding: 16.0
    show_bg: true
    draw_bg: { color: #1A1A1A }

    <Label> { text: "Content" }
}
```

### 2. Button

```rust
<Button> {
    text: "Click Me"
    draw_bg: {
        color: #0066CC
        color_hover: #0088FF
        border_radius: 4.0
    }
    draw_text: {
        color: #FFFFFF
        text_style: { font_size: 14.0 }
    }
}
```

### 3. Label with Styling

```rust
<Label> {
    width: Fit
    height: Fit
    text: "Hello World"
    draw_text: {
        color: #FFFFFF
        text_style: {
            font_size: 16.0
            line_spacing: 1.4
        }
    }
}
```

### 4. Image

```rust
<Image> {
    width: 200.0
    height: 150.0
    source: dep("crate://self/resources/photo.png")
    fit: Contain
}
```

### 5. TextInput

```rust
<TextInput> {
    width: Fill
    height: Fit
    text: "Default value"
    draw_text: {
        text_style: { font_size: 14.0 }
    }
}
```

#### Imported: Widget Traits (from source)

```rust
pub trait WidgetNode: LiveApply {
    fn find_widgets(&self, path: &[LiveId], cached: WidgetCache, results: &mut WidgetSet);
    fn walk(&mut self, cx: &mut Cx) -> Walk;
    fn area(&self) -> Area;
    fn redraw(&mut self, cx: &mut Cx);
}

pub trait Widget: WidgetNode {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {}
    fn draw_walk(&mut self, cx: &mut Cx2d, scope: &mut Scope, walk: Walk) -> DrawStep;
    fn draw(&mut self, cx: &mut Cx2d, scope: &mut Scope) -> DrawStep;
    fn widget(&self, path: &[LiveId]) -> WidgetRef;
}
```

#### Imported: All Built-in Widgets (84 files in widgets/src/)

| Category | Widgets |
|----------|---------|
| **Basic** | `View`, `Label`, `Button`, `Icon`, `Image` |
| **Input** | `TextInput`, `CheckBox`, `RadioButton`, `Slider`, `DropDown`, `ColorPicker` |
| **Container** | `ScrollBars`, `PortalList`, `FlatList`, `StackNavigation`, `Dock`, `Splitter` |
| **Navigation** | `TabBar`, `Tab`, `FoldHeader`, `FoldButton`, `ExpandablePanel` |
| **Overlay** | `Modal`, `Tooltip`, `PopupMenu`, `PopupNotification` |
| **Media** | `Video`, `RotatedImage`, `ImageBlend`, `MultiImage` |
| **Layout** | `AdaptiveView`, `SlidePanel`, `PageFlip`, `SlidesView` |
| **Special** | `Markdown`, `Html`, `TextFlow`, `WebView`, `KeyboardView` |
| **Utility** | `LoadingSpinner`, `DesktopButton`, `LinkLabel`, `ScrollShadow` |

#### Imported: View Variants

| Variant | Description |
|---------|-------------|
| `SolidView` | Solid background color |
| `RoundedView` | Rounded corners |
| `RoundedAllView` | Individual corner control |
| `RectView` | Rectangle with border/gradient |
| `CircleView` | Circle/ellipse shape |
| `GradientXView` | Horizontal gradient |
| `GradientYView` | Vertical gradient |
| `RoundedShadowView` | Rounded with shadow |
| `ScrollXView` | Horizontal scroll |
| `ScrollYView` | Vertical scroll |
| `ScrollXYView` | Both directions scroll |
| `CachedView` | Texture-cached |

#### Imported: Button Variants

| Variant | Description |
|---------|-------------|
| `ButtonFlat` | Flat style |
| `ButtonFlatIcon` | Flat with icon |
| `ButtonFlatter` | No background |
| `ButtonGradientX` | Horizontal gradient |
| `ButtonGradientY` | Vertical gradient |
| `ButtonIcon` | Standard with icon |

#### Imported: ImageFit Values

| Value | Description |
|-------|-------------|
| `Stretch` | Stretch to fill |
| `Contain` | Fit within, preserve ratio |
| `Cover` | Cover area, may crop |
| `Fill` | Fill without ratio |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
