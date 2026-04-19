---
name: robius-event-action
description: "Robius Event and Action Patterns Skill workflow skill. Use this skill when the user needs | and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["robius-event-action", "development"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Robius Event and Action Patterns Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/robius-event-action` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Robius Event and Action Patterns Skill Best practices for event handling and action patterns in Makepad applications based on Robrix and Moly codebases. Source codebases: - Robrix: Matrix chat client - MessageAction, RoomsListAction, AppStateAction - Moly: AI chat application - StoreAction, ChatAction, NavigationAction, Timer patterns

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Custom Action Pattern, Centralized Action Handling in App, Action Types, Event Handling Patterns, Action Chaining Pattern, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Implementing custom actions in Makepad
- Handling events in widgets
- Centralizing action handling in App
- Widget-to-widget communication
- Keywords: makepad action, makepad event, widget action, handleactions, cx.widgetaction
- Use when the request clearly matches the imported source intent: |.

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

#### Imported: Custom Action Pattern

### Defining Domain-Specific Actions

```rust
use makepad_widgets::*;

/// Actions emitted by the Message widget
#[derive(Clone, DefaultNone, Debug)]
pub enum MessageAction {
    /// User wants to react to a message
    React { details: MessageDetails, reaction: String },
    /// User wants to reply to a message
    Reply(MessageDetails),
    /// User wants to edit a message
    Edit(MessageDetails),
    /// User wants to delete a message
    Delete(MessageDetails),
    /// User requested to open context menu
    OpenContextMenu { details: MessageDetails, abs_pos: DVec2 },
    /// Required default variant
    None,
}

/// Data associated with a message action
#[derive(Clone, Debug)]
pub struct MessageDetails {
    pub room_id: OwnedRoomId,
    pub event_id: OwnedEventId,
    pub content: String,
    pub sender_id: OwnedUserId,
}
```

### Emitting Actions from Widgets

```rust
impl Widget for Message {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
        self.view.handle_event(cx, event, scope);

        let area = self.view.area();
        match event.hits(cx, area) {
            Hit::FingerDown(_fe) => {
                cx.set_key_focus(area);
            }
            Hit::FingerUp(fe) => {
                if fe.is_over && fe.is_primary_hit() && fe.was_tap() {
                    // Emit widget action
                    cx.widget_action(
                        self.widget_uid(),
                        &scope.path,
                        MessageAction::Reply(self.get_details()),
                    );
                }
            }
            Hit::FingerLongPress(lpe) => {
                cx.widget_action(
                    self.widget_uid(),
                    &scope.path,
                    MessageAction::OpenContextMenu {
                        details: self.get_details(),
                        abs_pos: lpe.abs,
                    },
                );
            }
            _ => {}
        }
    }
}
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @robius-event-action to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @robius-event-action against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @robius-event-action for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @robius-event-action using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use DefaultNone derive: All action enums must have a None variant
- Use continue after handling: Prevents unnecessary processing
- Downcast pattern for async actions: Posted actions are not widget actions
- Widget action cast for UI actions: Use aswidgetaction().cast()
- Always call SignalToUI::setuisignal(): After posting actions from async
- Centralize in App::handle_actions: Keep action handling in one place
- Use descriptive action names: MessageAction::Reply not MessageAction::Action1

### Imported Operating Notes

#### Imported: Best Practices

1. **Use `DefaultNone` derive**: All action enums must have a `None` variant
2. **Use `continue` after handling**: Prevents unnecessary processing
3. **Downcast pattern for async actions**: Posted actions are not widget actions
4. **Widget action cast for UI actions**: Use `as_widget_action().cast()`
5. **Always call `SignalToUI::set_ui_signal()`**: After posting actions from async
6. **Centralize in App::handle_actions**: Keep action handling in one place
7. **Use descriptive action names**: `MessageAction::Reply` not `MessageAction::Action1`

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/robius-event-action`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Files

- `references/action-patterns.md` - Additional action patterns (Robrix)
- `references/event-handling.md` - Event handling reference (Robrix)
- `references/moly-action-patterns.md` - Moly-specific patterns
  - Store-based action forwarding
  - Timer-based retry pattern
  - Radio button navigation
  - External link handling
  - Platform-conditional actions (#[cfg])
  - UiRunner event handling

#### Imported: Centralized Action Handling in App

### Using MatchEvent Trait

```rust
impl MatchEvent for App {
    fn handle_startup(&mut self, cx: &mut Cx) {
        // Called once on app startup
        self.initialize(cx);
    }

    fn handle_actions(&mut self, cx: &mut Cx, actions: &Actions) {
        for action in actions {
            // Pattern 1: Direct downcast for non-widget actions
            if let Some(action) = action.downcast_ref::<LoginAction>() {
                match action {
                    LoginAction::LoginSuccess => {
                        self.app_state.logged_in = true;
                        self.update_ui_visibility(cx);
                    }
                    LoginAction::LoginFailure(error) => {
                        self.show_error(cx, error);
                    }
                }
                continue;  // Action handled
            }

            // Pattern 2: Widget action cast
            if let MessageAction::OpenContextMenu { details, abs_pos } =
                action.as_widget_action().cast()
            {
                self.show_context_menu(cx, details, abs_pos);
                continue;
            }

            // Pattern 3: Match on downcast_ref for enum variants
            match action.downcast_ref() {
                Some(AppStateAction::RoomFocused(room)) => {
                    self.app_state.selected_room = Some(room.clone());
                    continue;
                }
                Some(AppStateAction::NavigateToRoom { destination }) => {
                    self.navigate_to_room(cx, destination);
                    continue;
                }
                _ => {}
            }

            // Pattern 4: Modal actions
            match action.downcast_ref() {
                Some(ModalAction::Open { kind }) => {
                    self.ui.modal(ids!(my_modal)).open(cx);
                    continue;
                }
                Some(ModalAction::Close { was_internal }) => {
                    if *was_internal {
                        self.ui.modal(ids!(my_modal)).close(cx);
                    }
                    continue;
                }
                _ => {}
            }
        }
    }
}

impl AppMain for App {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event) {
        // Forward to MatchEvent
        self.match_event(cx, event);

        // Pass events to widget tree
        let scope = &mut Scope::with_data(&mut self.app_state);
        self.ui.handle_event(cx, event, scope);
    }
}
```

#### Imported: Action Types

### Widget Actions (UI Thread)

Emitted by widgets, handled in the same frame:

```rust
// Emitting
cx.widget_action(
    self.widget_uid(),
    &scope.path,
    MyAction::Something,
);

// Handling (two patterns)
// Pattern A: Direct cast for widget actions
if let MyAction::Something = action.as_widget_action().cast() {
    // handle...
}

// Pattern B: With widget UID matching
if let Some(uid) = action.as_widget_action().widget_uid() {
    if uid == my_expected_uid {
        if let MyAction::Something = action.as_widget_action().cast() {
            // handle...
        }
    }
}
```

### Posted Actions (From Async)

Posted from async tasks, received in next event cycle:

```rust
// In async task
Cx::post_action(DataFetchedAction { data });
SignalToUI::set_ui_signal();  // Wake UI thread

// Handling in App (NOT widget actions)
if let Some(action) = action.downcast_ref::<DataFetchedAction>() {
    self.process_data(&action.data);
}
```

### Global Actions

For app-wide state changes:

```rust
// Using cx.action() for global actions
cx.action(NavigationAction::GoBack);

// Handling
if let Some(NavigationAction::GoBack) = action.downcast_ref() {
    self.navigate_back(cx);
}
```

#### Imported: Event Handling Patterns

### Hit Testing

```rust
impl Widget for MyWidget {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
        let area = self.view.area();
        match event.hits(cx, area) {
            Hit::FingerDown(fe) => {
                cx.set_key_focus(area);
                // Start drag, capture, etc.
            }
            Hit::FingerUp(fe) => {
                if fe.is_over && fe.is_primary_hit() {
                    if fe.was_tap() {
                        // Single tap
                    }
                    if fe.was_long_press() {
                        // Long press
                    }
                }
            }
            Hit::FingerMove(fe) => {
                // Drag handling
            }
            Hit::FingerHoverIn(_) => {
                self.animator_play(cx, id!(hover.on));
            }
            Hit::FingerHoverOut(_) => {
                self.animator_play(cx, id!(hover.off));
            }
            Hit::FingerScroll(se) => {
                // Scroll handling
            }
            _ => {}
        }
    }
}
```

### Keyboard Events

```rust
fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
    if let Event::KeyDown(ke) = event {
        match ke.key_code {
            KeyCode::Return if !ke.modifiers.shift => {
                self.submit(cx);
            }
            KeyCode::Escape => {
                self.cancel(cx);
            }
            KeyCode::KeyC if ke.modifiers.control || ke.modifiers.logo => {
                self.copy_to_clipboard(cx);
            }
            _ => {}
        }
    }
}
```

### Signal Events

For handling async updates:

```rust
fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
    if let Event::Signal = event {
        // Poll update queues
        while let Some(update) = PENDING_UPDATES.pop() {
            self.apply_update(cx, update);
        }
    }
}
```

#### Imported: Action Chaining Pattern

Widget emits action → Parent catches and re-emits with more context:

```rust
// In child widget
cx.widget_action(
    self.widget_uid(),
    &scope.path,
    ItemAction::Selected(item_id),
);

// In parent widget's handle_event
if let ItemAction::Selected(item_id) = action.as_widget_action().cast() {
    // Add context and forward to App
    cx.widget_action(
        self.widget_uid(),
        &scope.path,
        ListAction::ItemSelected {
            list_id: self.list_id.clone(),
            item_id,
        },
    );
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
