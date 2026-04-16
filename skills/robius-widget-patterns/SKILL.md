---
name: robius-widget-patterns
description: "Robius Widget Patterns Skill workflow skill. Use this skill when the user needs | and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["robius-widget-patterns", "tools"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Robius Widget Patterns Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/robius-widget-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Robius Widget Patterns Skill Best practices for designing reusable Makepad widgets based on Robrix and Moly codebase patterns. Source codebases: - Robrix: Matrix chat client - Avatar, RoomsList, RoomScreen widgets - Moly: AI chat application - Slot, ChatLine, PromptInput, AdaptiveView widgets

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Production Patterns, Standard Widget Structure, Text/Image Toggle Pattern, Dynamic Styling with apply_over, Collapsible/Expandable Pattern, Loading State Pattern.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating reusable Makepad widgets
- Designing widget component APIs
- Implementing text/image toggle patterns
- Dynamic styling in Makepad
- Keywords: robrix widget, makepad component, reusable widget, widget design pattern
- Use when the request clearly matches the imported source intent: |.

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

#### Imported: Production Patterns

For production-ready widget patterns, see the `_base/` directory:

| Pattern | Description |
|---------|-------------|
| 01-widget-extension | Add helper methods to widget references |
| 02-modal-overlay | Popups, dialogs using DrawList2d overlay |
| 03-collapsible | Expandable/collapsible sections |
| 04-list-template | Dynamic lists with LivePtr templates |
| 05-lru-view-cache | Memory-efficient view caching |
| 14-callout-tooltip | Tooltips with arrow positioning |
| 20-redraw-optimization | Efficient redraw patterns |
| 15-dock-studio-layout | IDE-style resizable panels |
| 16-hover-effect | Hover effects with instance variables |
| 17-row-based-grid-layout | Dynamic grid layouts |
| 18-drag-drop-reorder | Drag-and-drop widget reordering |
| 19-pageflip-optimization | PageFlip 切换优化，即刻销毁/缓存模式 |
| 21-collapsible-row-portal-list | Auto-grouping consecutive items in portal lists with FoldHeader |
| 22-dropdown-overlay | Dropdown popups using DrawList2d overlay (no layout push) |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @robius-widget-patterns to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @robius-widget-patterns against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @robius-widget-patterns for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @robius-widget-patterns using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use #[deref] for delegation: Delegate to inner View for standard behavior
- Separate DSL properties (#[live]) from Rust state (#[rust])
- Implement both inner methods and Ref wrappers*
- Use apply_over for dynamic runtime styling
- Use flow: Overlay for toggle/swap patterns
- Use set_visible() to toggle between alternative views
- Always call redraw(cx) after state changes

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `#[deref]` for delegation**: Delegate to inner View for standard behavior
2. **Separate DSL properties (`#[live]`) from Rust state (`#[rust]`)**
3. **Implement both inner methods and `*Ref` wrappers**
4. **Use `apply_over` for dynamic runtime styling**
5. **Use `flow: Overlay` for toggle/swap patterns**
6. **Use `set_visible()` to toggle between alternative views**
7. **Always call `redraw(cx)` after state changes**

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/robius-widget-patterns`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@puzzle-activity-planner` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pydantic-ai` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pydantic-models-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pypict-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Widget Reference Pattern

Implement `*Ref` methods for external API:

```rust
impl AvatarRef {
    /// See [`Avatar::show_text()`].
    pub fn show_text<T: AsRef<str>>(
        &self,
        cx: &mut Cx,
        bg_color: Option<Vec4>,
        info: Option<AvatarTextInfo>,
        username: T,
    ) {
        if let Some(mut inner) = self.borrow_mut() {
            inner.show_text(cx, bg_color, info, username);
        }
    }

    /// See [`Avatar::show_image()`].
    pub fn show_image<F, E>(
        &self,
        cx: &mut Cx,
        info: Option<AvatarImageInfo>,
        image_set_fn: F,
    ) -> Result<(), E>
    where
        F: FnOnce(&mut Cx, ImageRef) -> Result<(), E>
    {
        if let Some(mut inner) = self.borrow_mut() {
            inner.show_image(cx, info, image_set_fn)
        } else {
            Ok(())
        }
    }
}
```

#### Imported: Reference Files

- `references/widget-patterns.md` - Additional widget patterns (Robrix)
- `references/styling-patterns.md` - Dynamic styling patterns (Robrix)
- `references/moly-widget-patterns.md` - Moly-specific patterns
  - `Slot` widget for runtime content replacement
  - `MolyRoot` conditional rendering wrapper
  - `AdaptiveView` for responsive Mobile/Desktop layouts
  - Chat line variants (UserLine, BotLine, ErrorLine, etc.)
  - `CommandTextInput` with action buttons
  - Sidebar navigation with radio buttons

#### Imported: Standard Widget Structure

```rust
use makepad_widgets::*;

live_design! {
    use link::theme::*;
    use link::widgets::*;

    pub MyWidget = {{MyWidget}} {
        width: Fill, height: Fit,
        flow: Down,

        // Child widgets defined in DSL
        inner_view = <View> {
            // ...
        }
    }
}

#[derive(Live, LiveHook, Widget)]
pub struct MyWidget {
    #[deref] view: View,              // Delegate to inner View

    #[live] some_property: f64,       // DSL-configurable property
    #[live(100.0)] default_val: f64,  // With default value

    #[rust] internal_state: State,    // Rust-only state (not in DSL)

    #[animator] animator: Animator,   // For animations
}

impl Widget for MyWidget {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
        self.view.handle_event(cx, event, scope);
        // Custom event handling...
    }

    fn draw_walk(&mut self, cx: &mut Cx2d, scope: &mut Scope, walk: Walk) -> DrawStep {
        self.view.draw_walk(cx, scope, walk)
    }
}
```

#### Imported: Text/Image Toggle Pattern

A common pattern for widgets that show either text or an image (like avatars):

```rust
live_design! {
    pub Avatar = {{Avatar}} {
        width: 36.0, height: 36.0,
        align: { x: 0.5, y: 0.5 }
        flow: Overlay,  // Stack views on top of each other

        text_view = <View> {
            visible: true,  // Default visible
            show_bg: true,
            draw_bg: {
                uniform background_color: #888888
                fn pixel(self) -> vec4 {
                    let sdf = Sdf2d::viewport(self.pos * self.rect_size);
                    let c = self.rect_size * 0.5;
                    sdf.circle(c.x, c.x, c.x)
                    sdf.fill_keep(self.background_color);
                    return sdf.result
                }
            }
            text = <Label> {
                text: "?"
            }
        }

        img_view = <View> {
            visible: false,  // Hidden by default
            img = <Image> {
                fit: Stretch,
                width: Fill, height: Fill,
            }
        }
    }
}

#[derive(LiveHook, Live, Widget)]
pub struct Avatar {
    #[deref] view: View,
    #[rust] info: Option<UserInfo>,
}

impl Avatar {
    /// Show text content, hiding the image
    pub fn show_text<T: AsRef<str>>(
        &mut self,
        cx: &mut Cx,
        bg_color: Option<Vec4>,
        info: Option<AvatarTextInfo>,
        username: T,
    ) {
        self.info = info.map(|i| i.into());

        // Get first character
        let first_char = utils::first_letter(username.as_ref())
            .unwrap_or("?").to_uppercase();
        self.label(ids!(text_view.text)).set_text(cx, &first_char);

        // Toggle visibility
        self.view(ids!(text_view)).set_visible(cx, true);
        self.view(ids!(img_view)).set_visible(cx, false);

        // Apply optional background color
        if let Some(color) = bg_color {
            self.view(ids!(text_view)).apply_over(cx, live! {
                draw_bg: { background_color: (color) }
            });
        }
    }

    /// Show image content, hiding the text
    pub fn show_image<F, E>(
        &mut self,
        cx: &mut Cx,
        info: Option<AvatarImageInfo>,
        image_set_fn: F,
    ) -> Result<(), E>
    where
        F: FnOnce(&mut Cx, ImageRef) -> Result<(), E>
    {
        let img_ref = self.image(ids!(img_view.img));
        let res = image_set_fn(cx, img_ref);

        if res.is_ok() {
            self.view(ids!(img_view)).set_visible(cx, true);
            self.view(ids!(text_view)).set_visible(cx, false);
            self.info = info.map(|i| i.into());
        }
        res
    }

    /// Check current display status
    pub fn status(&mut self) -> DisplayStatus {
        if self.view(ids!(img_view)).visible() {
            DisplayStatus::Image
        } else {
            DisplayStatus::Text
        }
    }
}
```

#### Imported: Dynamic Styling with apply_over

Apply dynamic styles at runtime:

```rust
// Apply single property
self.view(ids!(content)).apply_over(cx, live! {
    draw_bg: { color: #ff0000 }
});

// Apply multiple properties
self.view(ids!(message)).apply_over(cx, live! {
    padding: { left: 20, right: 20 }
    margin: { top: 10 }
});

// Apply with variables
let highlight_color = if is_selected { vec4(1.0, 0.0, 0.0, 1.0) } else { vec4(0.5, 0.5, 0.5, 1.0) };
self.view(ids!(item)).apply_over(cx, live! {
    draw_bg: { color: (highlight_color) }
});
```

#### Imported: Collapsible/Expandable Pattern

```rust
live_design! {
    pub CollapsibleSection = {{CollapsibleSection}} {
        flow: Down,

        header = <View> {
            cursor: Hand,
            icon = <Icon> { }
            title = <Label> { text: "Section" }
        }

        content = <View> {
            visible: false,
            // Expandable content here
        }
    }
}

#[derive(Live, LiveHook, Widget)]
pub struct CollapsibleSection {
    #[deref] view: View,
    #[rust] is_expanded: bool,
}

impl CollapsibleSection {
    pub fn toggle(&mut self, cx: &mut Cx) {
        self.is_expanded = !self.is_expanded;
        self.view(ids!(content)).set_visible(cx, self.is_expanded);

        // Rotate icon
        let rotation = if self.is_expanded { 90.0 } else { 0.0 };
        self.view(ids!(header.icon)).apply_over(cx, live! {
            draw_icon: { rotation: (rotation) }
        });

        self.redraw(cx);
    }
}
```

#### Imported: Loading State Pattern

```rust
live_design! {
    pub LoadableContent = {{LoadableContent}} {
        flow: Overlay,

        content = <View> {
            visible: true,
            // Main content
        }

        loading_overlay = <View> {
            visible: false,
            show_bg: true,
            draw_bg: { color: #00000088 }
            align: { x: 0.5, y: 0.5 }
            <BouncingDots> { }
        }

        error_view = <View> {
            visible: false,
            error_label = <Label> { }
        }
    }
}

#[derive(Live, LiveHook, Widget)]
pub struct LoadableContent {
    #[deref] view: View,
    #[rust] state: LoadingState,
}

pub enum LoadingState {
    Idle,
    Loading,
    Loaded,
    Error(String),
}

impl LoadableContent {
    pub fn set_state(&mut self, cx: &mut Cx, state: LoadingState) {
        self.state = state;
        match &self.state {
            LoadingState::Idle | LoadingState::Loaded => {
                self.view(ids!(content)).set_visible(cx, true);
                self.view(ids!(loading_overlay)).set_visible(cx, false);
                self.view(ids!(error_view)).set_visible(cx, false);
            }
            LoadingState::Loading => {
                self.view(ids!(content)).set_visible(cx, true);
                self.view(ids!(loading_overlay)).set_visible(cx, true);
                self.view(ids!(error_view)).set_visible(cx, false);
            }
            LoadingState::Error(msg) => {
                self.view(ids!(content)).set_visible(cx, false);
                self.view(ids!(loading_overlay)).set_visible(cx, false);
                self.view(ids!(error_view)).set_visible(cx, true);
                self.label(ids!(error_view.error_label)).set_text(cx, msg);
            }
        }
        self.redraw(cx);
    }
}
```

#### Imported: PortalList Item Pattern

For virtual list items:

```rust
live_design! {
    pub ItemsList = {{ItemsList}} {
        list = <PortalList> {
            keep_invisible: false,
            auto_tail: false,
            width: Fill, height: Fill,
            flow: Down,

            // Item templates
            item_entry = <ItemEntry> {}
            header = <SectionHeader> {}
            empty = <View> {}
        }
    }
}

impl Widget for ItemsList {
    fn draw_walk(&mut self, cx: &mut Cx2d, scope: &mut Scope, walk: Walk) -> DrawStep {
        while let Some(item) = self.view.draw_walk(cx, scope, walk).step() {
            if let Some(mut list) = item.as_portal_list().borrow_mut() {
                list.set_item_range(cx, 0, self.items.len());

                while let Some(item_id) = list.next_visible_item(cx) {
                    let item = list.item(cx, item_id, live_id!(item_entry));
                    // Populate item with data
                    self.populate_item(cx, item, &self.items[item_id]);
                    item.draw_all(cx, scope);
                }
            }
        }
        DrawStep::done()
    }
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
