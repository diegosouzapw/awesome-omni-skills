---
name: robius-matrix-integration
description: "Robius Matrix SDK Integration Skill workflow skill. Use this skill when the user needs | and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["robius-matrix-integration", "backend"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Robius Matrix SDK Integration Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/robius-matrix-integration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Robius Matrix SDK Integration Skill Best practices for integrating external APIs with Makepad applications based on Robrix and Moly codebases. Source codebases: - Robrix: Matrix SDK integration - sliding sync, timeline subscriptions, real-time updates - Moly: OpenAI/LLM API integration - SSE streaming, MCP protocol, multi-provider support

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Worker Task Handler, Timeline Updates, Room List Updates, Client Build Pattern, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Integrating Matrix SDK with Makepad
- Building a Matrix client with Makepad
- Implementing Matrix features (rooms, timelines, messages)
- Handling Matrix SDK async operations in UI
- Keywords: matrix-sdk, matrix client, robrix, matrix timeline, matrix room, sliding sync
- Use when the request clearly matches the imported source intent: |.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
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

#### Imported: Overview

Robrix uses the `matrix-sdk` and `matrix-sdk-ui` crates to connect to Matrix homeservers. The key architectural decisions:

1. **Sliding Sync**: Uses native sliding sync for efficient room list updates
2. **Separate Runtime**: Tokio runtime runs Matrix operations, Makepad handles UI
3. **Request/Response Pattern**: UI sends requests, receives actions/updates back
4. **Per-Room Background Tasks**: Each room has dedicated timeline subscriber task

#### Imported: Worker Task Handler

```rust
async fn matrix_worker_task(
    mut request_receiver: UnboundedReceiver<MatrixRequest>,
    login_sender: Sender<LoginRequest>,
) -> Result<()> {
    while let Some(request) = request_receiver.recv().await {
        match request {
            MatrixRequest::PaginateRoomTimeline { room_id, num_events, direction } => {
                let (timeline, sender) = {
                    let rooms = ALL_JOINED_ROOMS.lock().unwrap();
                    let Some(room_info) = rooms.get(&room_id) else {
                        continue;  // Room not ready yet
                    };
                    (room_info.timeline.clone(), room_info.update_sender.clone())
                };

                // Spawn dedicated task for this operation
                Handle::current().spawn(async move {
                    // Notify UI pagination is starting
                    sender.send(TimelineUpdate::PaginationRunning(direction)).unwrap();
                    SignalToUI::set_ui_signal();

                    // Perform pagination
                    let res = if direction == PaginationDirection::Forwards {
                        timeline.paginate_forwards(num_events).await
                    } else {
                        timeline.paginate_backwards(num_events).await
                    };

                    // Send result to UI
                    match res {
                        Ok(fully_paginated) => {
                            sender.send(TimelineUpdate::PaginationIdle {
                                fully_paginated,
                                direction,
                            }).unwrap();
                        }
                        Err(error) => {
                            sender.send(TimelineUpdate::PaginationError {
                                error,
                                direction,
                            }).unwrap();
                        }
                    }
                    SignalToUI::set_ui_signal();
                });
            }

            MatrixRequest::JoinRoom { room_id } => {
                let Some(client) = get_client() else { continue };

                Handle::current().spawn(async move {
                    let result_action = if let Some(room) = client.get_room(&room_id) {
                        match room.join().await {
                            Ok(()) => JoinRoomResultAction::Joined { room_id },
                            Err(e) => JoinRoomResultAction::Failed { room_id, error: e },
                        }
                    } else {
                        match client.join_room_by_id(&room_id).await {
                            Ok(_) => JoinRoomResultAction::Joined { room_id },
                            Err(e) => JoinRoomResultAction::Failed { room_id, error: e },
                        }
                    };
                    Cx::post_action(result_action);
                });
            }
            // ... handle other requests
        }
    }
    Ok(())
}
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @robius-matrix-integration to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @robius-matrix-integration against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @robius-matrix-integration for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @robius-matrix-integration using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always spawn tasks: Don't block the worker task receiver loop
- Use crossbeam channels for per-room updates: More efficient than global queue
- Always call SignalToUI::setuisignal(): After enqueueing any update
- Handle room not ready: Skip requests for rooms not yet in ALLJOINEDROOMS
- Cleanup on drop: Abort background tasks when rooms are closed
- Use Cx::postaction for results: Posted actions are handled in App::handleactions
- Use SegQueue for high-frequency updates: Lock-free for room list updates

### Imported Operating Notes

#### Imported: Best Practices

1. **Always spawn tasks**: Don't block the worker task receiver loop
2. **Use crossbeam channels for per-room updates**: More efficient than global queue
3. **Always call SignalToUI::set_ui_signal()**: After enqueueing any update
4. **Handle room not ready**: Skip requests for rooms not yet in `ALL_JOINED_ROOMS`
5. **Cleanup on drop**: Abort background tasks when rooms are closed
6. **Use Cx::post_action for results**: Posted actions are handled in App::handle_actions
7. **Use SegQueue for high-frequency updates**: Lock-free for room list updates

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/robius-matrix-integration`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: MatrixRequest Pattern

### Request Enum Definition

```rust
/// All async requests that can be made to the Matrix worker task
pub enum MatrixRequest {
    /// Login requests
    Login(LoginRequest),
    Logout { is_desktop: bool },

    /// Timeline operations
    PaginateRoomTimeline {
        room_id: OwnedRoomId,
        num_events: u16,
        direction: PaginationDirection,
    },
    SendMessage {
        room_id: OwnedRoomId,
        message: RoomMessageEventContent,
        replied_to: Option<Reply>,
    },
    EditMessage {
        room_id: OwnedRoomId,
        timeline_event_item_id: TimelineEventItemId,
        edited_content: EditedContent,
    },
    RedactMessage {
        room_id: OwnedRoomId,
        timeline_event_id: TimelineEventItemId,
        reason: Option<String>,
    },

    /// Room operations
    JoinRoom { room_id: OwnedRoomId },
    LeaveRoom { room_id: OwnedRoomId },
    GetRoomMembers {
        room_id: OwnedRoomId,
        memberships: RoomMemberships,
        local_only: bool,
    },

    /// User operations
    GetUserProfile {
        user_id: OwnedUserId,
        room_id: Option<OwnedRoomId>,
        local_only: bool,
    },
    IgnoreUser {
        ignore: bool,
        room_member: RoomMember,
        room_id: OwnedRoomId,
    },

    /// Media operations
    FetchAvatar {
        mxc_uri: OwnedMxcUri,
        on_fetched: fn(AvatarUpdate),
    },
    FetchMedia {
        media_request: MediaRequestParameters,
        on_fetched: OnMediaFetchedFn,
        destination: MediaCacheEntryRef,
        update_sender: Option<crossbeam_channel::Sender<TimelineUpdate>>,
    },

    /// Typing/read indicators
    SendTypingNotice { room_id: OwnedRoomId, typing: bool },
    ReadReceipt { room_id: OwnedRoomId, event_id: OwnedEventId },
    FullyReadReceipt { room_id: OwnedRoomId, event_id: OwnedEventId },

    /// Reactions
    ToggleReaction {
        room_id: OwnedRoomId,
        timeline_event_id: TimelineEventItemId,
        reaction: String,
    },

    /// Subscriptions
    SubscribeToTypingNotices { room_id: OwnedRoomId, subscribe: bool },
    SubscribeToPinnedEvents { room_id: OwnedRoomId, subscribe: bool },
}
```

### Submit Pattern

```rust
static REQUEST_SENDER: Mutex<Option<UnboundedSender<MatrixRequest>>> = Mutex::new(None);

/// Submit request from UI thread to async runtime
pub fn submit_async_request(req: MatrixRequest) {
    if let Some(sender) = REQUEST_SENDER.lock().unwrap().as_ref() {
        sender.send(req).expect("BUG: matrix worker task receiver died!");
    }
}

// Usage in UI
submit_async_request(MatrixRequest::SendMessage {
    room_id: room_id.clone(),
    message: RoomMessageEventContent::text_plain(&text),
    replied_to: self.reply_to.take(),
});
```

#### Imported: Reference Files

- `references/matrix-client.md` - Matrix client setup and login patterns (Robrix)
- `references/timeline-handling.md` - Matrix timeline subscription patterns (Robrix)
- `references/moly-api-integration.md` - Moly API integration patterns
  - OpenAI client with SSE streaming
  - Platform-agnostic async streams
  - MCP (Model Context Protocol) integration
  - Tool approval flow
  - MolyClient for local server
  - BotContext for multi-provider support

#### Imported: Timeline Updates

### TimelineUpdate Enum

```rust
pub enum TimelineUpdate {
    /// New items added to timeline
    NewItems {
        new_items: Vector<Arc<TimelineItem>>,
        changed_indices: BTreeSet<usize>,
        is_append: bool,
    },
    /// Pagination state changes
    PaginationRunning(PaginationDirection),
    PaginationIdle {
        fully_paginated: bool,
        direction: PaginationDirection,
    },
    PaginationError {
        error: Error,
        direction: PaginationDirection,
    },
    /// Message edit result
    MessageEdited {
        timeline_event_id: TimelineEventItemId,
        result: Result<(), Error>,
    },
    /// Room members fetched
    RoomMembersListFetched {
        members: Vec<RoomMember>,
        sort: PrecomputedMemberSort,
        is_local_fetch: bool,
    },
    /// Unread count updated
    NewUnreadMessagesCount(UnreadMessageCount),
    /// User power levels fetched
    UserPowerLevels(UserPowerLevels),
}
```

### Per-Room Update Flow

```rust
struct JoinedRoomDetails {
    room_id: OwnedRoomId,
    timeline: Arc<Timeline>,
    timeline_update_sender: crossbeam_channel::Sender<TimelineUpdate>,
    timeline_subscriber_handler_task: JoinHandle<()>,
    typing_notice_subscriber: Option<EventHandlerDropGuard>,
}

impl Drop for JoinedRoomDetails {
    fn drop(&mut self) {
        // Cleanup background tasks when room closes
        self.timeline_subscriber_handler_task.abort();
        drop(self.typing_notice_subscriber.take());
    }
}

// Spawn subscriber for a room
async fn spawn_timeline_subscriber(
    room_id: OwnedRoomId,
    timeline: Arc<Timeline>,
    sender: crossbeam_channel::Sender<TimelineUpdate>,
) -> JoinHandle<()> {
    tokio::spawn(async move {
        let (items, mut stream) = timeline.subscribe().await;

        // Send initial items
        sender.send(TimelineUpdate::NewItems {
            new_items: items,
            changed_indices: BTreeSet::new(),
            is_append: false,
        }).unwrap();
        SignalToUI::set_ui_signal();

        // Listen for updates
        while let Some(diff) = stream.next().await {
            let update = process_timeline_diff(diff);
            sender.send(update).unwrap();
            SignalToUI::set_ui_signal();
        }
    })
}
```

### Handling Updates in UI

```rust
impl Widget for RoomScreen {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event, scope: &mut Scope) {
        // Poll timeline updates on Signal events
        if let Event::Signal = event {
            while let Ok(update) = self.timeline_state.update_receiver.try_recv() {
                match update {
                    TimelineUpdate::NewItems { new_items, changed_indices, is_append } => {
                        self.apply_new_items(cx, new_items, changed_indices, is_append);
                    }
                    TimelineUpdate::PaginationIdle { fully_paginated, direction } => {
                        self.set_pagination_idle(cx, direction, fully_paginated);
                    }
                    TimelineUpdate::PaginationError { error, direction } => {
                        self.show_pagination_error(cx, direction, &error);
                    }
                    // ... handle other updates
                }
            }
        }

        self.view.handle_event(cx, event, scope);
    }
}
```

#### Imported: Room List Updates

### RoomsListUpdate Enum

```rust
pub enum RoomsListUpdate {
    NotLoaded,
    LoadedRooms { max_rooms: Option<u32> },
    AddInvitedRoom(InvitedRoomInfo),
    AddJoinedRoom(JoinedRoomInfo),
    ClearRooms,
    UpdateLatestEvent {
        room_id: OwnedRoomId,
        timestamp: MilliSecondsSinceUnixEpoch,
        latest_message_text: String,
    },
    UpdateNumUnreadMessages {
        room_id: OwnedRoomId,
        unread_messages: UnreadMessageCount,
        unread_mentions: u64,
    },
    UpdateRoomName { new_room_name: RoomNameId },
    UpdateRoomAvatar { room_id: OwnedRoomId, avatar: FetchedRoomAvatar },
    RemoveRoom { room_id: OwnedRoomId, new_state: RoomState },
    Status { status: String },
    ScrollToRoom(OwnedRoomId),
}

static PENDING_ROOM_UPDATES: SegQueue<RoomsListUpdate> = SegQueue::new();

pub fn enqueue_rooms_list_update(update: RoomsListUpdate) {
    PENDING_ROOM_UPDATES.push(update);
    SignalToUI::set_ui_signal();
}
```

#### Imported: Client Build Pattern

```rust
async fn build_client(
    homeserver_url: &str,
    data_dir: &Path,
) -> Result<(Client, ClientSessionPersisted)> {
    // Generate unique subfolder for this session
    let db_subfolder = format!("db_{}", chrono::Local::now().format("%F_%H_%M_%S_%f"));
    let db_path = data_dir.join(db_subfolder);

    // Generate random passphrase for encryption
    let passphrase: String = {
        use rand::{Rng, thread_rng};
        thread_rng()
            .sample_iter(rand::distributions::Alphanumeric)
            .take(32)
            .map(char::from)
            .collect()
    };

    let client = Client::builder()
        .server_name_or_homeserver_url(homeserver_url)
        .sqlite_store(&db_path, Some(&passphrase))
        .sliding_sync_version_builder(VersionBuilder::DiscoverNative)
        .with_decryption_settings(DecryptionSettings {
            sender_device_trust_requirement: TrustRequirement::Untrusted,
        })
        .with_encryption_settings(EncryptionSettings {
            auto_enable_cross_signing: true,
            backup_download_strategy: BackupDownloadStrategy::OneShot,
            auto_enable_backups: true,
        })
        .request_config(
            RequestConfig::new().timeout(Duration::from_secs(60))
        )
        .build()
        .await?;

    Ok((client, ClientSessionPersisted { homeserver: homeserver_url.to_string(), db_path, passphrase }))
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
