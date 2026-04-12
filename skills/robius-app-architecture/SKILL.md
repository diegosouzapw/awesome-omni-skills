---
name: robius-app-architecture
description: "Robius App Architecture Skill workflow skill. Use this skill when the user needs | and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["robius-app-architecture", "development", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Robius App Architecture Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/robius-app-architecture` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Robius App Architecture Skill Best practices for structuring Makepad applications based on the Robrix and Moly codebases - production applications built with Makepad and Robius framework. Source codebases: - Robrix: Matrix chat client - complex sync/async with background subscriptions - Moly: AI chat application - cross-platform (native + WASM) with streaming APIs

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Production Patterns, Core Architecture Pattern, App Structure, Tokio Runtime Integration, Lock-Free Update Queue Pattern, Startup Sequence.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building a Makepad application with async backend integration
- Designing sync/async communication patterns in Makepad
- Structuring a Robius-style application
- Keywords: robrix, robius, makepad app structure, async makepad, tokio makepad
- Use when the request clearly matches the imported source intent: |.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Production Patterns

For production-ready async patterns, see the `_base/` directory:

| Pattern | Description |
|---------|-------------|
| 08-async-loading | Async data loading with loading states |
| 09-streaming-results | Incremental results with SignalToUI |
| 13-tokio-integration | Full tokio runtime integration |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @robius-app-architecture to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/robius-app-architecture/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/robius-app-architecture/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @robius-app-architecture using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Separation of Concerns: Keep UI logic on the main thread, async operations in Tokio runtime
- Request/Response Pattern: Use typed enums for requests and actions
- Lock-Free Updates: Use crossbeam::SegQueue for high-frequency background updates
- SignalToUI: Always call SignalToUI::setuisignal() after enqueueing updates
- Cx::post_action(): Use for async task results that need action handling
- Scope::with_data(): Pass shared state through widget tree
- Module Registration Order: Register base widgets before dependent modules in live_register()

### Imported Operating Notes

#### Imported: Best Practices

1. **Separation of Concerns**: Keep UI logic on the main thread, async operations in Tokio runtime
2. **Request/Response Pattern**: Use typed enums for requests and actions
3. **Lock-Free Updates**: Use `crossbeam::SegQueue` for high-frequency background updates
4. **SignalToUI**: Always call `SignalToUI::set_ui_signal()` after enqueueing updates
5. **Cx::post_action()**: Use for async task results that need action handling
6. **Scope::with_data()**: Pass shared state through widget tree
7. **Module Registration Order**: Register base widgets before dependent modules in `live_register()`

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/robius-app-architecture`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Reference Files

- `references/tokio-integration.md` - Detailed Tokio runtime patterns (Robrix)
- `references/channel-patterns.md` - Channel communication patterns (Robrix)
- `references/moly-async-patterns.md` - Cross-platform async patterns (Moly)
  - `PlatformSend` trait for native/WASM compatibility
  - `UiRunner` for async defer operations
  - `AbortOnDropHandle` for task cancellation
  - `ThreadToken` for non-Send types on WASM
  - `spawn()` platform-agnostic function

#### Imported: Core Architecture Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                     UI Thread (Makepad)                     │
│  ┌─────────┐     ┌──────────┐     ┌──────────────────────┐ │
│  │   App   │────▶│ WidgetRef │────▶│ Widget Tree (View)  │ │
│  │ State   │     │    ui     │     │ Scope::with_data()  │ │
│  └────┬────┘     └──────────┘     └──────────────────────┘ │
│       │                                                     │
│       │ submit_async_request()                              │
│       ▼                                                     │
│  ┌─────────────────┐          ┌─────────────────────────┐  │
│  │ REQUEST_SENDER  │─────────▶│  Crossbeam SegQueue     │  │
│  │ (MPSC Channel)  │          │  (Lock-free Updates)    │  │
│  └─────────────────┘          └─────────────────────────┘  │
└───────────────────────────────────┬─────────────────────────┘
                                    │
                    SignalToUI::set_ui_signal()
                                    │
┌───────────────────────────────────┴─────────────────────────┐
│                   Tokio Runtime (Async)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           worker_task (Request Handler)               │   │
│  │  - Receives Request from UI                           │   │
│  │  - Spawns async tasks per request                     │   │
│  │  - Posts actions back via Cx::post_action()           │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Per-Item Subscriber Tasks                     │   │
│  │  - Listens to external data stream                    │   │
│  │  - Sends Update via crossbeam channel                 │   │
│  │  - Calls SignalToUI::set_ui_signal() to wake UI       │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

#### Imported: App Structure

### Top-Level App Definition

```rust
use makepad_widgets::*;

live_design! {
    use link::theme::*;
    use link::widgets::*;

    App = {{App}} {
        ui: <Root>{
            main_window = <Window> {
                window: {inner_size: vec2(1280, 800), title: "MyApp"},
                body = {
                    // Main content here
                }
            }
        }
    }
}

app_main!(App);

#[derive(Live)]
pub struct App {
    #[live] ui: WidgetRef,
    #[rust] app_state: AppState,
}

impl LiveRegister for App {
    fn live_register(cx: &mut Cx) {
        // Order matters: register base widgets first
        makepad_widgets::live_design(cx);
        // Then shared/common widgets
        crate::shared::live_design(cx);
        // Then feature modules
        crate::home::live_design(cx);
    }
}

impl LiveHook for App {
    fn after_new_from_doc(&mut self, cx: &mut Cx) {
        // One-time initialization after widget tree is created
    }
}
```

### AppMain Implementation

```rust
impl AppMain for App {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event) {
        // Forward to MatchEvent trait
        self.match_event(cx, event);

        // Pass AppState through widget tree via Scope
        let scope = &mut Scope::with_data(&mut self.app_state);
        self.ui.handle_event(cx, event, scope);
    }
}
```

#### Imported: Tokio Runtime Integration

### Static Runtime Initialization

```rust
use std::sync::Mutex;
use tokio::sync::mpsc::{UnboundedReceiver, UnboundedSender};

static TOKIO_RUNTIME: Mutex<Option<tokio::runtime::Runtime>> = Mutex::new(None);
static REQUEST_SENDER: Mutex<Option<UnboundedSender<AppRequest>>> = Mutex::new(None);

pub fn start_async_runtime() -> Result<tokio::runtime::Handle> {
    let (request_sender, request_receiver) = tokio::sync::mpsc::unbounded_channel();

    let rt_handle = TOKIO_RUNTIME.lock().unwrap()
        .get_or_insert_with(|| {
            tokio::runtime::Runtime::new()
                .expect("Failed to create Tokio runtime")
        })
        .handle()
        .clone();

    // Store sender for UI thread to use
    *REQUEST_SENDER.lock().unwrap() = Some(request_sender);

    // Spawn the main worker task
    rt_handle.spawn(worker_task(request_receiver));

    Ok(rt_handle)
}
```

### Request Submission Pattern

```rust
pub enum AppRequest {
    FetchData { id: String },
    SendMessage { content: String },
    // ... other request types
}

/// Submit a request from UI thread to async runtime
pub fn submit_async_request(req: AppRequest) {
    if let Some(sender) = REQUEST_SENDER.lock().unwrap().as_ref() {
        sender.send(req)
            .expect("BUG: worker task receiver has died!");
    }
}
```

### Worker Task Pattern

```rust
async fn worker_task(mut request_receiver: UnboundedReceiver<AppRequest>) -> Result<()> {
    while let Some(request) = request_receiver.recv().await {
        match request {
            AppRequest::FetchData { id } => {
                // Spawn a new task for each request
                let _task = tokio::spawn(async move {
                    let result = fetch_data(&id).await;
                    // Post result back to UI thread
                    Cx::post_action(DataFetchedAction { id, result });
                });
            }
            AppRequest::SendMessage { content } => {
                let _task = tokio::spawn(async move {
                    match send_message(&content).await {
                        Ok(()) => Cx::post_action(MessageSentAction::Success),
                        Err(e) => Cx::post_action(MessageSentAction::Failed(e)),
                    }
                });
            }
        }
    }
    Ok(())
}
```

#### Imported: Lock-Free Update Queue Pattern

For high-frequency updates from background tasks:

```rust
use crossbeam_queue::SegQueue;
use makepad_widgets::SignalToUI;

pub enum DataUpdate {
    NewItem { item: Item },
    ItemChanged { id: String, changes: Changes },
    Status { message: String },
}

static PENDING_UPDATES: SegQueue<DataUpdate> = SegQueue::new();

/// Called from background async tasks
pub fn enqueue_update(update: DataUpdate) {
    PENDING_UPDATES.push(update);
    SignalToUI::set_ui_signal();  // Wake UI thread
}

// In widget's handle_event:
impl Widget for MyWidget {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
        // Poll for updates on Signal events
        if let Event::Signal = event {
            while let Some(update) = PENDING_UPDATES.pop() {
                match update {
                    DataUpdate::NewItem { item } => {
                        self.items.push(item);
                        self.redraw(cx);
                    }
                    // ... handle other updates
                }
            }
        }
    }
}
```

#### Imported: Startup Sequence

```rust
impl MatchEvent for App {
    fn handle_startup(&mut self, cx: &mut Cx) {
        // 1. Initialize logging
        let _ = tracing_subscriber::fmt::try_init();

        // 2. Initialize app data directory
        let _app_data_dir = crate::app_data_dir();

        // 3. Load persisted state
        if let Err(e) = persistence::load_window_state(
            self.ui.window(ids!(main_window)), cx
        ) {
            error!("Failed to load window state: {}", e);
        }

        // 4. Update UI based on loaded state
        self.update_ui_visibility(cx);

        // 5. Start async runtime
        let _rt_handle = crate::start_async_runtime().unwrap();
    }
}
```

#### Imported: Shutdown Sequence

```rust
impl AppMain for App {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event) {
        if let Event::Shutdown = event {
            // Save window geometry
            let window_ref = self.ui.window(ids!(main_window));
            if let Err(e) = persistence::save_window_state(window_ref, cx) {
                error!("Failed to save window state: {e}");
            }

            // Save app state
            if let Some(user_id) = current_user_id() {
                if let Err(e) = persistence::save_app_state(
                    self.app_state.clone(), user_id
                ) {
                    error!("Failed to save app state: {e}");
                }
            }
        }
        // ... rest of event handling
    }
}
```
