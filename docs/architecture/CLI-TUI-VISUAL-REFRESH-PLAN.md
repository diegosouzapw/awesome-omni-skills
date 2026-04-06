# CLI TUI Visual Refresh Plan

> Adaptation plan for bringing the visual language and component structure of the `omniFlow` TUI into `awesome-omni-skills` without rewriting the install, catalog, or service backend logic.

## Why This Exists

The current `awesome-omni-skills` TUI already has the hard parts:

- guided install flows
- catalog search
- bundle install
- MCP, API, and A2A launch flows
- local state for recents, presets, and favorites

The weak spot is presentation and maintainability:

- `tools/bin/ui.mjs` is monolithic
- the shell is functional but not premium
- action detail and orientation are too shallow
- the install and runtime cockpit look more like a utility than a product

The `omniFlow` plan in `/home/diegosouzapw/dev/ai/omniFlow/_tasks/visual-tui` is the right reference for the next step because it solves the same UI problem with a cleaner shell:

- theme system
- split layout
- richer header and status bar
- grouped menu and detail panel
- better execution visibility

## Adaptation Principles

1. Reuse the current install and runtime engine.
   `tools/bin/install.js`, `tools/lib/catalog-client.js`, `tools/lib/cli-state.js`, and `tools/bin/cli.js` stay authoritative.

2. Refactor the TUI around those actions.
   The TUI should orchestrate existing actions, not invent new business logic.

3. Improve shell quality before touching deeper flows.
   Theme, layout, detail panels, and navigation should change first because they improve every screen.

4. Keep the published package safe.
   Any new TUI module must stay inside the npm `files` allowlist.

## OmniFlow Task Mapping

### Phase 1: Foundation Shell

Mapped from omniFlow tasks:

- T01 design system/theme
- T02 logo/header
- T03 status bar
- T07 split layout
- T08 app refactor

Awesome Omni Skills scope:

- create `tools/tui/theme.mjs`
- move visual tokens and shell behavior out of raw inline styles
- introduce richer header, status bar, and split layout
- keep `tools/bin/ui.mjs` as entrypoint bridge

### Phase 2: Navigation and Decision Surfaces

Mapped from omniFlow tasks:

- T04 grouped menu
- T05 detail panel

Awesome Omni Skills scope:

- grouped home actions for install, operate, and utilities
- right-side detail panel that explains the focused choice
- richer preview for install targets, bundles, skills, and service presets

### Phase 3: Install and Download Cockpit

Awesome Omni Skills specific:

- make the install path selection feel like a product funnel
- surface known clients more clearly
- highlight install command preview, resolved path, and bundle contents
- add a better “download and install skills” narrative to the TUI itself

### Phase 4: Runtime Hub Refresh

Mapped from omniFlow tasks:

- T09 chat redesign
- T10 tool panel
- T11 progress/execution summary

Awesome Omni Skills scope:

- improve MCP, API, and A2A flow previews
- add runtime summary cards
- expose richer preview for generated config and launch commands
- eventually surface long-running progress for runtime actions

### Phase 5: Preferences and Polish

Mapped from omniFlow tasks:

- T12 settings
- T13 final polish

Awesome Omni Skills scope:

- optional theme selection and persistence
- smarter empty states
- more polished copy and keyboard hints
- tighter docs and screenshot coverage

## Delivered State

The visual refresh is no longer just a first slice. The repository now ships:

- a componentized `tools/tui/` surface:
  - `theme.mjs`
  - `layout.mjs`
  - `controls.mjs`
  - `activity.mjs`
  - `catalog.mjs`
  - `install-flow.mjs`
  - `runtime-flow.mjs`
  - `screens.mjs`
- a smaller `tools/bin/ui.mjs` focused on orchestration, route state, and subprocess handoff
- a stronger home hub with grouped actions, state snapshot, progress, activity, and install-surface preview
- a search-first catalog explorer with favorites and detail-on-focus
- richer install and runtime preview surfaces with step rails and shared progress panels
- persisted settings for theme, compact mode, and screen reader preference
- automated TUI coverage through `ink-testing-library`

## Remaining Evolution After This Refresh

Future improvements should now be incremental rather than architectural:

1. Consider virtualization only if catalog scale or TTY performance makes windowed search insufficient.
2. Add richer progress emission from long-running real subprocesses once the install/runtime backends expose more granular events.
3. Add screenshot or asciinema capture to the documentation site if release/docs workflow starts to depend on visual evidence.
