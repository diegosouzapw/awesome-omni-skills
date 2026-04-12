---
name: robius-state-management
description: "Robius State Management Skill workflow skill. Use this skill when the user needs | and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["robius-state-management", "development", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Robius State Management Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/robius-state-management` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Robius State Management Skill Best practices for state management and persistence in Makepad applications based on Robrix and Moly codebases. Source codebases: - Robrix: Matrix chat client - AppState, SelectedRoom, persistence via serde - Moly: AI chat application - Central Store pattern, async initialization, Preferences

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Production Patterns, AppState Structure, State Propagation via Scope, Persistence Layer, Thread-Local State (UI-Only).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing application state structure
- Implementing state persistence
- Passing state through widget tree
- Managing UI state across sessions
- Keywords: app state, makepad state, persistence, Scope::with_data, save state, load state
- Use when the request clearly matches the imported source intent: |.

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

For production-ready state management patterns, see the `_base/` directory:

| Pattern | Description |
|---------|-------------|
| 06-global-registry | Global widget registry with Cx::set_global |
| 07-radio-navigation | Tab-style navigation with radio buttons |
| 10-state-machine | Enum-based state machine widgets |
| 11-theme-switching | Multi-theme support with apply_over |
| 12-local-persistence | Save/load user preferences |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @robius-state-management to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/robius-state-management/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/robius-state-management/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @robius-state-management using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Separate persistent vs runtime state: Use #[serde(skip)] for non-persistent fields
- Use Scope::with_data() for tree propagation: Don't pass state through widget refs
- Graceful deserialization fallback: Handle format changes between versions
- Backup old state files: Preserve user data when format changes
- User-specific persistent paths: Separate state per user account
- Sync window state, async app state: Window geometry loads sync on UI thread
- Thread-local for UI-only caches: Use thread_local! with Cx parameter guard

### Imported Operating Notes

#### Imported: Best Practices

1. **Separate persistent vs runtime state**: Use `#[serde(skip)]` for non-persistent fields
2. **Use Scope::with_data() for tree propagation**: Don't pass state through widget refs
3. **Graceful deserialization fallback**: Handle format changes between versions
4. **Backup old state files**: Preserve user data when format changes
5. **User-specific persistent paths**: Separate state per user account
6. **Sync window state, async app state**: Window geometry loads sync on UI thread
7. **Thread-local for UI-only caches**: Use `thread_local!` with Cx parameter guard

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/robius-state-management`, fails to mention provenance, or does not use the support pack at all.
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

- `references/persistence-patterns.md` - Additional persistence patterns (Robrix)
- `references/state-structures.md` - State structure examples (Robrix)
- `references/moly-state-patterns.md` - Moly-specific patterns
  - Central Store struct containing all state
  - Async Store initialization with `load_into_app()`
  - App state check pattern (early return if not loaded)
  - Submodule state managers (Search, Downloads, Chats)
  - Provider syncing status tracking
  - Store action forwarding to submodules

#### Imported: AppState Structure

### Core State Definition

```rust
use serde::{Serialize, Deserialize};
use std::collections::HashMap;
use matrix_sdk::ruma::OwnedRoomId;

/// App-wide state that is stored persistently across multiple app runs
/// and shared/updated across various parts of the app.
#[derive(Clone, Default, Debug, Serialize, Deserialize)]
pub struct AppState {
    /// The currently-selected room
    pub selected_room: Option<SelectedRoom>,

    /// Saved UI layout state for main view
    pub saved_layout_state: SavedLayoutState,

    /// Per-item saved states (e.g., per-space dock layouts)
    pub saved_state_per_item: HashMap<OwnedRoomId, SavedLayoutState>,

    /// Whether a user is currently logged in
    #[serde(skip)]  // Don't persist login state
    pub logged_in: bool,
}

/// Represents a currently selected item
#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum SelectedRoom {
    JoinedRoom { room_name_id: RoomNameId },
    InvitedRoom { room_name_id: RoomNameId },
    Space { space_name_id: RoomNameId },
}

impl SelectedRoom {
    pub fn room_id(&self) -> &OwnedRoomId {
        match self {
            Self::JoinedRoom { room_name_id } => room_name_id.room_id(),
            Self::InvitedRoom { room_name_id } => room_name_id.room_id(),
            Self::Space { space_name_id } => space_name_id.room_id(),
        }
    }

    /// Upgrade from invited to joined state
    pub fn upgrade_invite_to_joined(&mut self, room_id: &RoomId) -> bool {
        match self {
            Self::InvitedRoom { room_name_id } if room_name_id.room_id() == room_id => {
                let name = room_name_id.clone();
                *self = Self::JoinedRoom { room_name_id: name };
                true
            }
            _ => false,
        }
    }
}

// Equality based on room_id only
impl PartialEq for SelectedRoom {
    fn eq(&self, other: &Self) -> bool {
        self.room_id() == other.room_id()
    }
}
impl Eq for SelectedRoom {}
```

### Layout/Dock State Persistence

```rust
/// A snapshot of UI layout state for restoration
#[derive(Clone, Default, Debug, Serialize, Deserialize)]
pub struct SavedLayoutState {
    /// All items contained in the layout, keyed by ID
    pub layout_items: HashMap<LiveIdSerde, LayoutItemSerde>,

    /// Items currently open, keyed by ID
    pub open_items: HashMap<LiveIdSerde, SelectedRoom>,

    /// Order items were opened (chronological)
    pub item_order: Vec<SelectedRoom>,

    /// Currently selected item when state was saved
    pub selected_item: Option<SelectedRoom>,
}

/// Serializable wrapper for LiveId
#[derive(Clone, Debug, Hash, Eq, PartialEq, Serialize, Deserialize)]
pub struct LiveIdSerde(pub u64);

impl From<LiveId> for LiveIdSerde {
    fn from(id: LiveId) -> Self {
        Self(id.0)
    }
}

impl From<LiveIdSerde> for LiveId {
    fn from(s: LiveIdSerde) -> Self {
        LiveId(s.0)
    }
}
```

#### Imported: State Propagation via Scope

### Passing State Through Widget Tree

```rust
impl AppMain for App {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event) {
        // Forward to MatchEvent
        self.match_event(cx, event);

        // Create Scope with AppState data
        let scope = &mut Scope::with_data(&mut self.app_state);

        // Pass to widget tree - all children can access AppState
        self.ui.handle_event(cx, event, scope);
    }
}
```

### Accessing State in Child Widgets

```rust
impl Widget for RoomScreen {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
        // Access AppState from scope
        if let Some(app_state) = scope.data.get::<AppState>() {
            if let Some(selected) = &app_state.selected_room {
                self.update_for_room(cx, selected);
            }
        }

        self.view.handle_event(cx, event, scope);
    }
}
```

### Modifying State

```rust
impl Widget for RoomsList {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
        // Mutable access to AppState
        if let Some(app_state) = scope.data.get_mut::<AppState>() {
            if self.selection_changed {
                app_state.selected_room = self.get_selected();
            }
        }
    }
}
```

#### Imported: Persistence Layer

### File Paths

```rust
use std::path::{Path, PathBuf};

const LATEST_APP_STATE_FILE_NAME: &str = "latest_app_state.json";
const WINDOW_GEOM_STATE_FILE_NAME: &str = "window_geom_state.json";

/// Get user-specific persistent state directory
fn persistent_state_dir(user_id: &UserId) -> PathBuf {
    app_data_dir()
        .join("users")
        .join(user_id.to_string().replace(':', "_"))
}

/// Get app-wide data directory
fn app_data_dir() -> &'static Path {
    // Platform-specific app data location
    static APP_DATA_DIR: OnceLock<PathBuf> = OnceLock::new();
    APP_DATA_DIR.get_or_init(|| {
        dirs::data_dir()
            .unwrap_or_else(|| PathBuf::from("."))
            .join("myapp")
    })
}
```

### Saving State

```rust
use std::io::Write;

pub fn save_app_state(
    app_state: AppState,
    user_id: OwnedUserId,
) -> anyhow::Result<()> {
    let file = std::fs::File::create(
        persistent_state_dir(&user_id).join(LATEST_APP_STATE_FILE_NAME)
    )?;
    let mut writer = std::io::BufWriter::new(file);
    serde_json::to_writer(&mut writer, &app_state)?;
    writer.flush()?;
    log!("Successfully saved app state to persistent storage.");
    Ok(())
}

/// Save window geometry state (user-agnostic)
pub fn save_window_state(window_ref: WindowRef, cx: &Cx) -> anyhow::Result<()> {
    let inner_size = window_ref.get_inner_size(cx);
    let position = window_ref.get_position(cx);
    let window_geom = WindowGeomState {
        inner_size: (inner_size.x, inner_size.y),
        position: (position.x, position.y),
        is_fullscreen: window_ref.is_fullscreen(cx),
    };
    std::fs::write(
        app_data_dir().join(WINDOW_GEOM_STATE_FILE_NAME),
        serde_json::to_string(&window_geom)?,
    )?;
    Ok(())
}
```

### Loading State

```rust
/// Load app state with graceful fallback
pub async fn load_app_state(user_id: &UserId) -> anyhow::Result<AppState> {
    let state_path = persistent_state_dir(user_id).join(LATEST_APP_STATE_FILE_NAME);

    // Read file
    let file_bytes = match tokio::fs::read(&state_path).await {
        Ok(fb) => fb,
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => {
            log!("No saved app state found, using default.");
            return Ok(AppState::default());
        }
        Err(e) => return Err(e.into()),
    };

    // Deserialize with fallback
    match serde_json::from_slice(&file_bytes) {
        Ok(app_state) => {
            log!("Successfully loaded app state.");
            Ok(app_state)
        }
        Err(e) => {
            error!("Failed to deserialize: {e}. May be incompatible format.");

            // Backup old file
            let backup_path = state_path.with_extension("json.bak");
            if let Err(backup_err) = tokio::fs::rename(&state_path, &backup_path).await {
                error!("Failed to backup old state: {}", backup_err);
            } else {
                log!("Old state backed up to: {:?}", backup_path);
            }

            log!("Using default app state.");
            Ok(AppState::default())
        }
    }
}

/// Load window geometry (synchronous, on UI thread)
pub fn load_window_state(window_ref: WindowRef, cx: &mut Cx) -> anyhow::Result<()> {
    let file = match std::fs::File::open(app_data_dir().join(WINDOW_GEOM_STATE_FILE_NAME)) {
        Ok(file) => file,
        Err(e) if e.kind() == std::io::ErrorKind::NotFound => return Ok(()),
        Err(e) => return Err(e.into()),
    };

    let window_geom: WindowGeomState = serde_json::from_reader(file)?;
    log!("Restoring window geometry: {window_geom:?}");

    window_ref.configure_window(
        cx,
        dvec2(window_geom.inner_size.0, window_geom.inner_size.1),
        dvec2(window_geom.position.0, window_geom.position.1),
        window_geom.is_fullscreen,
        "MyApp".to_string(),
    );
    Ok(())
}
```

### Startup/Shutdown Integration

```rust
impl MatchEvent for App {
    fn handle_startup(&mut self, cx: &mut Cx) {
        // Load window geometry (sync, on UI thread)
        if let Err(e) = persistence::load_window_state(
            self.ui.window(ids!(main_window)), cx
        ) {
            error!("Failed to load window state: {}", e);
        }

        // Trigger async app state load
        let user_id = get_current_user_id();
        tokio::spawn(async move {
            match persistence::load_app_state(&user_id).await {
                Ok(app_state) => {
                    Cx::post_action(AppStateAction::RestoreFromPersistence(app_state));
                    SignalToUI::set_ui_signal();
                }
                Err(e) => error!("Failed to load app state: {}", e),
            }
        });
    }
}

impl AppMain for App {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event) {
        if let Event::Shutdown = event {
            // Save window state (sync)
            if let Err(e) = persistence::save_window_state(
                self.ui.window(ids!(main_window)), cx
            ) {
                error!("Failed to save window state: {e}");
            }

            // Save app state (sync)
            if let Some(user_id) = current_user_id() {
                if let Err(e) = persistence::save_app_state(
                    self.app_state.clone(), user_id
                ) {
                    error!("Failed to save app state: {e}");
                }
            }
        }
        // ...
    }
}
```

#### Imported: Thread-Local State (UI-Only)

```rust
use std::{cell::RefCell, rc::Rc, collections::HashMap};

thread_local! {
    /// UI-thread-only cache
    static UI_CACHE: Rc<RefCell<HashMap<OwnedRoomId, CachedData>>> =
        Rc::new(RefCell::new(HashMap::new()));
}

/// Get cache reference (requires Cx to ensure UI thread)
pub fn get_ui_cache(_cx: &mut Cx) -> Rc<RefCell<HashMap<OwnedRoomId, CachedData>>> {
    UI_CACHE.with(Rc::clone)
}

/// Clear cache (requires Cx)
pub fn clear_ui_cache(_cx: &mut Cx) {
    UI_CACHE.with(|cache| cache.borrow_mut().clear());
}
```
