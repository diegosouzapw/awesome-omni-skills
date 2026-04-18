---
name: makepad-event-action
description: "Makepad Event/Action Skill workflow skill. Use this skill when the user needs | and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["makepad-event-action", "development"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Makepad Event/Action Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/makepad-event-action` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Makepad Event/Action Skill > Version: makepad-widgets (dev branch) | Last Updated: 2026-01-19 > > Check for updates: https://crates.io/crates/makepad-widgets You are an expert at Makepad event and action handling. Help users by: - Handling events: Mouse, keyboard, touch, lifecycle events - Creating actions: Widget-to-parent communication - Event flow: Understanding event propagation

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Documentation, IMPORTANT: Documentation Completeness Check, Event Enum (Key Variants), Handling Events in Widgets, Hit Enum, Action System.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to handle input, lifecycle, or UI interaction events in Makepad.
- The task involves handle_event, Event variants, Hit processing, or widget action propagation.
- You need to design or debug Makepad event/action flow between widgets and parents.
- Use event.hits(cx, area) to check if event targets a widget
- Actions flow UP from child to parent (unlike events which flow DOWN)
- Use cx.capture_actions() to intercept child actions

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
- `./references/event-system.md` - Event enum and handling
- `./references/action-system.md` - Action trait and patterns

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @makepad-event-action to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @makepad-event-action against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @makepad-event-action for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @makepad-event-action using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/makepad-event-action`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@lint-and-validate` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-shell-scripting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-troubleshooting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-app-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: IMPORTANT: Documentation Completeness Check

**Before answering questions, Claude MUST:**

1. Read the relevant reference file(s) listed above
2. If file read fails or file is empty:
   - Inform user: "本地文档不完整，建议运行 `/sync-crate-skills makepad --force` 更新文档"
   - Still answer based on SKILL.md patterns + built-in knowledge
3. If reference file exists, incorporate its content into the answer

#### Imported: Event Enum (Key Variants)

```rust
pub enum Event {
    // Lifecycle
    Startup,
    Shutdown,
    Foreground,
    Background,
    Resume,
    Pause,

    // Drawing
    Draw(DrawEvent),
    LiveEdit,

    // Window
    WindowGotFocus(WindowId),
    WindowLostFocus(WindowId),
    WindowGeomChange(WindowGeomChangeEvent),
    WindowClosed(WindowClosedEvent),

    // Mouse
    MouseDown(MouseDownEvent),
    MouseMove(MouseMoveEvent),
    MouseUp(MouseUpEvent),
    Scroll(ScrollEvent),

    // Touch
    TouchUpdate(TouchUpdateEvent),

    // Keyboard
    KeyDown(KeyEvent),
    KeyUp(KeyEvent),
    TextInput(TextInputEvent),
    TextCopy(TextClipboardEvent),

    // Timer
    Timer(TimerEvent),
    NextFrame(NextFrameEvent),

    // Network
    HttpResponse(HttpResponse),

    // Widget Actions
    Actions(ActionsBuf),
}
```

#### Imported: Handling Events in Widgets

```rust
impl Widget for MyWidget {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
        // Check if event hits this widget's area
        match event.hits(cx, self.area()) {
            Hit::FingerDown(fe) => {
                // Mouse/touch down on this widget
                cx.action(MyWidgetAction::Pressed);
            }
            Hit::FingerUp(fe) => {
                if fe.is_over {
                    // Released while still over widget = click
                    cx.action(MyWidgetAction::Clicked);
                }
            }
            Hit::FingerHoverIn(_) => {
                self.animator_play(cx, id!(hover.on));
            }
            Hit::FingerHoverOut(_) => {
                self.animator_play(cx, id!(hover.off));
            }
            Hit::KeyDown(ke) => {
                if ke.key_code == KeyCode::Return {
                    cx.action(MyWidgetAction::Submitted);
                }
            }
            _ => {}
        }
    }
}
```

#### Imported: Hit Enum

```rust
pub enum Hit {
    // Finger/Mouse
    FingerDown(FingerDownEvent),
    FingerUp(FingerUpEvent),
    FingerMove(FingerMoveEvent),
    FingerHoverIn(FingerHoverEvent),
    FingerHoverOver(FingerHoverEvent),
    FingerHoverOut(FingerHoverEvent),
    FingerLongPress(FingerLongPressEvent),

    // Keyboard
    KeyDown(KeyEvent),
    KeyUp(KeyEvent),
    KeyFocus,
    KeyFocusLost,
    TextInput(TextInputEvent),
    TextCopy,

    // Nothing
    Nothing,
}
```

#### Imported: Action System

### Defining Actions

```rust
#[derive(Clone, Debug, DefaultNone)]
pub enum ButtonAction {
    None,
    Clicked,
    Pressed,
    Released,
}

// DefaultNone derives Default returning None variant
```

### Emitting Actions

```rust
// From main thread (in handle_event)
cx.action(ButtonAction::Clicked);

// From any thread (thread-safe)
Cx::post_action(MyAction::DataLoaded(data));
```

### Handling Actions

```rust
fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
    // Handle child widget actions
    let actions = cx.capture_actions(|cx| {
        self.button.handle_event(cx, event, scope);
    });

    // Check for specific action
    if self.button(id!(my_button)).clicked(&actions) {
        // Button was clicked
    }

    // Or iterate actions
    for action in actions.iter() {
        if let Some(ButtonAction::Clicked) = action.downcast_ref() {
            // Handle click
        }
    }
}
```

#### Imported: Widget Action Helpers

```rust
// Common widget action checks
impl ButtonRef {
    fn clicked(&self, actions: &ActionsBuf) -> bool;
    fn pressed(&self, actions: &ActionsBuf) -> bool;
    fn released(&self, actions: &ActionsBuf) -> bool;
}

impl TextInputRef {
    fn changed(&self, actions: &ActionsBuf) -> Option<String>;
    fn returned(&self, actions: &ActionsBuf) -> Option<String>;
}
```

#### Imported: Event Flow

1. **Event arrives** from platform layer
2. **Root widget** receives event first
3. **Propagates down** to children via `handle_event`
4. **Widgets emit actions** via `cx.action()`
5. **Parent captures actions** via `cx.capture_actions()`
6. **App handles** remaining actions

#### Imported: Timer and NextFrame

```rust
// Start a timer
let timer = cx.start_timer(1.0); // 1 second

// In handle_event
if let Event::Timer(te) = event {
    if te.timer_id == self.timer {
        // Timer fired
    }
}

// Request next frame callback
let next_frame = cx.new_next_frame();

// In handle_event
if let Event::NextFrame(ne) = event {
    if ne.frame_id == self.next_frame {
        // Next frame arrived
    }
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
