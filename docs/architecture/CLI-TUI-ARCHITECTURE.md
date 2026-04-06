# CLI TUI Architecture

This document is the implementation contract for the 2026 visual TUI refresh.

It is the concrete output of `TASK-01` in
[_tasks/visual-tui-implementation-2026/TASK-01-architecture-and-dependency-contract.md](/home/diegosouzapw/dev/ai/omni-skills/_tasks/visual-tui-implementation-2026/TASK-01-architecture-and-dependency-contract.md).

## Goals

The visual shell must stay:

- install-first for published skills and bundles
- operator-friendly for MCP, API, and A2A launch flows
- maintainable as the catalog grows
- explicit about accessibility and preview-before-write behavior

## Module Boundary

The target ownership model is:

- `tools/bin/ui.mjs`
  - bootstraps the visual shell
  - loads runtime data and persisted state
  - configures Ink render mode
  - performs final subprocess handoff
- `tools/tui/theme.mjs`
  - owns theme tokens and tone helpers
- `tools/tui/layout.mjs`
  - owns shell chrome, panel frames, split layouts, badges, summary rails, and empty states
- `tools/tui/controls.mjs`
  - owns reusable focus-aware selection and input controls
  - wraps maintained text input behavior
- `tools/tui/activity.mjs`
  - owns immutable activity rendering and progress summaries
- `tools/tui/catalog.mjs`
  - owns catalog-specific query normalization and bundle search scoring
- `tools/tui/install-flow.mjs`
  - owns install-target normalization, argument builders, install record shaping, and known target registry
- `tools/tui/runtime-flow.mjs`
  - owns MCP, API, A2A, and MCP-config launch builders plus runtime draft defaults
- `tools/tui/screens.mjs`
  - owns presentational screens for the home hub, catalog explorer, and settings shell
- `tools/lib/cli-state.js`
  - owns persisted recents, presets, favorites, and view preferences

`tools/bin/ui.mjs` may still own:

- route orchestration
- preview assembly
- integration with existing installer and runtime launch builders
- final subprocess handoff

## State Model

The shell state is divided into these buckets:

- route state
  - navigation stack
  - current screen id
  - route payload when a screen needs contextual data
- focus state
  - active focus zone id
  - focus transitions driven by `Tab` and `Shift+Tab`
- install draft state
  - target tool or custom path
  - scope
  - chosen skill or bundle
  - query text for search-led flows
- service draft state
  - service family
  - transport, host, port, auth, persistence, executor, and config-write choices
- transient activity state
  - append-only session events for previews, saves, launches, and toggles
  - current progress metadata for the active draft or handoff
- persisted preference state
  - theme
  - compact mode
  - screen reader mode

## Dependency Policy

### Adopt now

- `ink-text-input`
  - reason: maintained, cursor-aware, and solves text entry better than ad-hoc `useInput`
  - use through local wrappers only
- `ink-testing-library`
  - reason: the official testing direction for Ink interactions

### Keep custom behind local primitives

- list selection
  - reason: the app needs section headers, metadata rows, numeric shortcuts, focus cues, and windowed rendering
- shell chrome
  - reason: brand styling and split-panel layout are specific to this project
- preview and activity surfaces
  - reason: they are tightly coupled to install and runtime flows

### Defer for now

- `ink-select-input`
  - reason: useful, but a custom list primitive is a better fit for grouped metadata-heavy menus today
- `@inkjs/ui`
  - reason: good ecosystem signal, but not needed while the project already owns a strong custom shell
- `ink-progress-bar`
  - reason: the current progress model is mostly step-based and textual; custom summaries plus `<Static>` are sufficient
- `ink-task-list`
  - reason: same reason as above
- `ink-scroll-list` or `ink-virtual-list`
  - reason: deferred until catalog scale or TTY performance makes search-first windowing insufficient

## Keyboard Contract

The canonical keyboard model is:

- `Up` / `Down`
  - move within the active selectable list
- `Tab` / `Shift+Tab`
  - move focus between focus zones on multi-control screens
- `Enter`
  - activate the focused selection or submit the focused text input
- `Esc`
  - go back from the current route when available
- `Ctrl+C`
  - exit the TUI
- `1..9`
  - activate visible list entries directly when a selection list is focused

## Long-List Strategy

The current large-catalog strategy is:

- search-first exploration
- favorites and curated shortcuts on the home screen
- windowed result rendering for long lists
- capped result sets for install search flows

This is explicit and intentional. The project is not adopting virtualization in this slice.

## Accessibility Contract

The TUI must support:

- auto-detected screen reader mode
- user-forced screen reader mode through persisted preferences
- text alternatives for visual-only widgets
- visible focus cues separate from selection highlights
- semantic labels on panels and controls where practical

## Test Contract

The test story is split into:

- repository integration checks in `tools/scripts/tests/run_tests.js`
- focused TUI interaction coverage in `tools/scripts/tests/tui_tests.mjs`
- focused Ink component and stdin interaction tests through `ink-testing-library`
- manual real-TTY smoke notes for behavior that cannot be trusted in CI snapshots alone
