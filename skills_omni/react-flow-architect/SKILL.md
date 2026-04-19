---
name: "react-flow-architect"
description: "ReactFlow Architect workflow skill. Use this skill when the user needs to build production-ready React Flow applications with hierarchical navigation, performance optimization, and advanced state management, and the operator should use the packaged workflow, support files, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "react-flow-architect"
  - "build"
  - "production-ready"
  - "reactflow"
  - "applications"
  - "hierarchical"
  - "navigation"
  - "performance"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "react-flow-architect"
family_name: "ReactFlow Architect"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/react-flow-architect"
upstream_skill: "skills/react-flow-architect"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "react-flow-architect"
---

# ReactFlow Architect

## Overview

This skill packages the upstream `react-flow-architect` workflow from `sickn33/antigravity-awesome-skills` into an operator-ready Omni Skills format without hiding its origin.

Use it when you need to design or improve a serious React Flow application rather than a demo: large diagrams, custom nodes and edges, synchronized side panels, hierarchical drill-down, persistence, and interaction performance that must hold up under real usage.

The skill preserves the upstream intent while adding execution guidance for:

- controlled graph state and clear data boundaries
- hierarchical navigation with explicit parent/group semantics
- performance work driven by profiling, not guesswork
- viewport and layout timing stability
- persistence, versioning, and migration safety
- troubleshooting common production failures

Open the local support files when you need a compact implementation checklist or a realistic worked example:

- `references/reactflow-production-notes.md`
- `examples/worked-example.md`

## When to Use This Skill

Use this skill when the request is primarily about building, refactoring, or debugging a React Flow editor with production concerns.

Typical triggers:

- the user needs a graph editor with custom nodes, custom edges, panels, forms, or persistence
- the graph must support hierarchy, grouping, parent/child navigation, or drill-down behavior
- performance is degrading as node count, custom rendering, or side-panel logic grows
- graph edits must synchronize reliably across canvas, inspector, outline, or toolbar
- save/restore, autosave, import/export, or schema migration matters
- the operator needs to preserve upstream workflow intent and provenance while still delivering concrete implementation help

Do not use this skill as the primary router when:

- the task is generic React UI work with no meaningful React Flow architecture
- the user only needs a toy demo and does not need production state, persistence, or performance guidance
- the main problem is backend API design, auth, or infrastructure rather than the graph editor itself

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Simple prototype with limited interactions | `useNodesState` / `useEdgesState` style controlled flow | Fastest safe path when the editor is small and local state is enough |
| Medium editor with custom panels and save/restore | This `SKILL.md` workflow | Helps define schema, state boundaries, persistence, and performance checkpoints before coding deeper features |
| Multi-panel, persistent, collaborative, or undo/redo-heavy editor | Controlled React Flow plus an external store with selector-based subscriptions | Reduces duplicated state and gives one mutation path for canvas, forms, and persistence |
| Hierarchical editor | `### Hierarchical Tree Navigation` and `examples/worked-example.md` | Prevents relying on visual nesting alone and gives a concrete synchronized tree + canvas pattern |
| Re-render or drag-performance issues | `### Performance Optimization` and `references/reactflow-production-notes.md` | Provides a profile-first checklist for memoization, selectors, stable props, and hidden subtrees |
| Viewport, `fitView`, or layout instability | `## Troubleshooting` and `references/reactflow-production-notes.md` | Helps diagnose container sizing, async layout timing, and repeated viewport updates |
| Save/restore or import compatibility work | `## Workflow` step 6 and `examples/worked-example.md` | Keeps canonical graph data versioned and separates persisted data from transient UI state |
| Reviewer needs provenance and architecture rationale | This file plus upstream provenance files | Preserves source identity while making the implementation path auditable |

## Workflow

1. **Confirm the graph product shape**
   - Identify whether the user needs a freeform graph, hierarchical process map, nested editor, or drill-down explorer.
   - Confirm expected scale: rough node count, edge count, custom-node complexity, and whether multiple panels read/write graph state.
   - Decide whether hierarchy is semantic, visual, or both.

2. **Design the graph contract before coding interactions**
   - Define node types, edge types, required data fields, and stable id rules.
   - Decide which fields are canonical and persisted versus UI-only and recomputed.
   - Keep ids stable across editing, layout recomputation, save/restore, and imports.
   - Do not generate ids during render.

3. **Choose the smallest state model that will survive expected complexity**
   - For prototypes and isolated editors, controlled hooks may be enough.
   - For editors with sidebars, toolbars, undo/redo, autosave, or synchronized navigation, use a central store with selector-based subscriptions.
   - Keep one source of truth for nodes and edges. Do not mirror the same graph truth across local component state, form state, and canvas state.

4. **Define hierarchy explicitly**
   - Use parent/group metadata or equivalent explicit relationships.
   - Do not infer hierarchy from x/y position alone.
   - Pair the canvas with a synchronized outline or tree for keyboard-first navigation and context retention.
   - Keep selection, focus, and expand/collapse semantics synchronized between the tree and the canvas.

5. **Build incrementally and keep render identity stable**
   - Keep `nodeTypes` and `edgeTypes` stable by defining them outside render or memoizing them.
   - Memoize expensive custom nodes, edges, toolbars, and panels.
   - Memoize handlers passed into React Flow when unstable callbacks are causing churn.
   - Add one interaction path at a time: selection, editing, expand/collapse, persistence, then layout refinements.

6. **Separate persistence from transient UI state**
   - Persist canonical graph data, viewport only if needed, and a schema version.
   - Avoid persisting temporary hover state, drag state, ephemeral panel visibility, or computed caches unless there is a clear product requirement.
   - Validate imported payloads before loading them.
   - Add migration logic before accepting old saved diagrams.

7. **Stabilize viewport lifecycle**
   - Ensure the React Flow container has real dimensions before calling `fitView`.
   - Load nodes and edges, then complete any async layout or measurement work, then update the viewport.
   - If the editor is inside resizable panes, tabs, or accordions, re-run viewport logic only when the container and layout are ready.
   - Avoid calling viewport updates on every render or inside tight loops.

8. **Profile before optimizing**
   - Use React DevTools Profiler or equivalent observation to identify which interactions re-render too much.
   - Focus first on node drag, selection, panel edits, expand/collapse, and autosave triggers.
   - Apply memoization, selectors, or subtree hiding only where you can point to an actual hotspot.

9. **Validate the finished architecture**
   - Dragging a node should not force unrelated side panels or all custom nodes to re-render.
   - Save/restore should preserve ids, hierarchy relationships, and expected viewport behavior.
   - Keyboard users should be able to navigate hierarchy through the companion tree or outline.
   - The graph should still behave correctly after reload, import, collapse/expand, and schema migration.

### Hierarchical Tree Navigation

Use a combined pattern instead of treating the canvas as the whole hierarchy UI:

- **Canvas:** spatial editing and visual relationships
- **Outline/tree:** keyboard-friendly structure and quick navigation
- **Breadcrumbs:** current context when drilling into a subtree or grouped region
- **Zoom-to-selection / reveal action:** fast synchronization from outline to canvas

Recommended behaviors:

- selecting an item in the tree highlights or centers the corresponding node in the canvas
- selecting a node in the canvas updates the tree selection
- collapsing a branch updates both the outline state and the canvas visibility state
- parent context remains visible through breadcrumbs or an always-available outline path
- keyboard navigation works in the tree even if the canvas itself is not a full hierarchy control

Accessibility guardrails:

- do not imply the canvas alone satisfies hierarchical navigation needs
- provide visible focus treatment in the tree/outline
- expose expanded/collapsed state through proper semantics
- keep selection synchronization predictable and reversible

#### Node Schema

Define node and hierarchy structure explicitly.

Minimum schema guidance:

- `id`: stable, persisted, unique across the graph
- `type`: renderer contract
- `position`: canvas placement or layout result
- `data`: business payload needed by the custom node
- hierarchy metadata such as `parentId`, group membership, or equivalent explicit relationship fields
- optional UI flags such as `collapsed` or `hidden`, if your app intentionally controls subtree visibility

Recommended separation:

- **Persisted:** ids, labels, domain payload, hierarchy metadata, canonical positions if user-authored, saved viewport if product-required, schema version
- **Transient/UI-only:** hover, in-progress drag state, active resize handles, temporary inspector tabs, optimistic flags, derived search matches, computed layout caches

Guardrails:

- do not derive true parentage only from screen coordinates
- do not change ids as part of relayout or expand/collapse
- keep hierarchy metadata compatible with save/restore and import/export

#### Incremental Node Building

Build custom nodes in layers:

1. static rendering with typed `data`
2. selection and hover behavior
3. inline editing or inspector synchronization
4. parent/child grouping semantics
5. collapse/expand behavior
6. persistence and migration coverage
7. performance hardening for the expensive pieces only

This order reduces debugging ambiguity. If you add layout logic, persistence, and rich inline editing all at once, identity and render bugs become much harder to isolate.

### Performance Optimization

Use a profile-first checklist.

**Stabilize render inputs**

- keep `nodeTypes` and `edgeTypes` stable
- avoid inline object and function creation when those props flow into many nodes
- memoize expensive custom nodes, edges, inspectors, and toolbars

**Reduce broad subscriptions**

- subscribe panels and widgets to the smallest state slice they need
- avoid components reading the entire nodes or edges array unless they genuinely need it
- prefer selector-based subscriptions for counts, selected ids, branch state, or a single node record

**Control hierarchy cost**

- collapse or hide off-focus branches in large graphs
- avoid expensive relayout of the entire graph for a local change when a branch-level update is enough
- apply `fitView` after subtree changes only when necessary

**Centralize mutation paths**

- update nodes and edges through a small set of actions
- keep immutable updates predictable so React Flow and side panels observe the same changes
- structure this now if undo/redo or auditability is likely

**Verify with evidence**

- compare before/after profiling for drag, selection, and expand/collapse
- keep optimization changes that fix observed hotspots
- remove speculative complexity that does not change measured behavior

## Troubleshooting

### Dragging one node makes the whole canvas feel slow

Check for:

- non-memoized custom nodes or edges
- unstable `nodeTypes` / `edgeTypes`
- inline callbacks recreated every render
- panels subscribing to the entire graph state
- expensive derived computations running on each drag frame

Fix path:

1. profile the drag interaction
2. memoize custom node/edge components that are actually expensive
3. stabilize handler identity where it affects many children
4. move broad subscribers to narrow selectors
5. hide or collapse irrelevant subtrees if scale is the real issue

### Sidebar edits only appear after another interaction

Check for:

- duplicated graph truth in local state and store state
- stale selectors or stale closures
- mutation-in-place instead of immutable updates
- inspector forms writing to a shadow copy that never updates the canonical graph

Fix path:

- choose one source of truth for nodes/edges
- route edits through shared mutation actions
- verify the canvas and inspector subscribe to the same canonical record

### Child nodes appear detached or hierarchy navigation loses context

Check for:

- missing or inconsistent parent/group metadata
- hierarchy inferred only from position
- tree selection and canvas selection using different ids or different sources of truth
- collapse state stored separately in unsynchronized places

Fix path:

- normalize hierarchy metadata
- make expand/collapse and selection state explicit
- keep tree, breadcrumbs, and canvas synchronized from shared state

### `fitView` zooms incorrectly, jumps, or does nothing useful

Check for:

- zero-height or hidden containers
- calling viewport logic before nodes are loaded or measured
- graph inside tabs, accordions, or resizable panes without container observation
- repeated viewport updates fighting each other

Fix path:

1. verify the container has settled dimensions
2. wait for graph data and layout work to complete
3. call viewport updates once per meaningful transition
4. if needed, observe container size changes and re-run at controlled times

See `references/reactflow-production-notes.md` for a compact timing checklist.

### Saved flows reload with missing nodes, wrong positions, or broken edges

Check for:

- schema version mismatch
- id collisions or regenerated ids
- saved payload missing hierarchy metadata or required node data
- transient layout/cache fields treated as canonical data
- migration not applied before load

Fix path:

- version the saved graph object
- validate payload shape before import
- migrate old payloads explicitly
- recompute transient caches after load instead of persisting them blindly

## Additional Resources

Local operator aids:

- `references/reactflow-production-notes.md` — compact production checklist, state decision matrix, failure signatures, and viewport/persistence notes
- `examples/worked-example.md` — concrete hierarchical editor example with state boundaries, tree synchronization, save/restore payload, and a targeted performance fix

Primary documentation:

- React Flow docs: `https://reactflow.dev/`
- React Flow performance: `https://reactflow.dev/learn/advanced-use/performance`
- React Flow state management: `https://reactflow.dev/learn/advanced-use/state-management`
- React Flow sub-flows / grouping: `https://reactflow.dev/learn/layouting/sub-flows`
- React Flow save and restore: `https://reactflow.dev/learn/advanced-use/save-and-restore`
- React Flow instance API: `https://reactflow.dev/api-reference/types/react-flow-instance`
- React `memo`: `https://react.dev/reference/react/memo`
- React `useCallback`: `https://react.dev/reference/react/useCallback`
- React `useMemo`: `https://react.dev/reference/react/useMemo`
- MDN `ResizeObserver`: `https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver`
- WAI-ARIA tree view pattern: `https://www.w3.org/WAI/ARIA/apg/patterns/treeview/`

If you choose an external store, treat Zustand or similar libraries as implementation options, not mandatory dependencies.

## Related Skills

Use a related skill instead when the task shifts away from React Flow architecture itself, for example:

- generic React component design without graph-editor concerns
- data-modeling or backend API work that only indirectly supports the editor
- pure accessibility remediation outside the graph-navigation pattern
- pure performance profiling work not centered on React Flow state and rendering

When in doubt, keep this skill as the primary router only if React Flow architecture, hierarchy, persistence, or graph-editor behavior remains the core problem.
