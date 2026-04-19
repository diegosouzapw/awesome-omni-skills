# React Flow Production Notes

Use this file as a compact implementation and debugging reference while applying the main workflow.

## 1) State model decision matrix

| Situation | Recommended approach | Why |
| --- | --- | --- |
| Small prototype, single canvas, limited editing | Controlled local state with React Flow helper hooks | Lowest complexity, enough for demos and small tools |
| Moderate editor with custom nodes, inspector, and save/restore | Controlled state with clear mutation helpers | Keeps ownership explicit without introducing a larger store too early |
| Multi-panel editor, undo/redo, autosave, collaboration, or synchronized tree + canvas | Controlled React Flow with an external store and selector-based subscriptions | Prevents duplicated state and limits unnecessary subscriptions |

Guardrails:

- Keep one canonical source of truth for nodes and edges.
- Do not keep the same node data in both form-local state and graph state longer than necessary.
- Centralize graph mutations so later undo/redo or audit features are possible.

## 2) Stable identity rules

Treat ids as durable document identifiers.

- Generate node and edge ids outside render.
- Do not regenerate ids during layout, expand/collapse, or import normalization.
- Use persisted ids in the outline/tree, breadcrumbs, inspector, and canvas.
- If the graph is imported from external systems, normalize ids before rendering and keep a collision policy.

Failure signatures:

- selection jumps to the wrong item after reload
- edges disappear after restore
- hierarchy panel selection no longer maps to canvas nodes
- child nodes appear duplicated after migration or import

## 3) Persistence and migration checklist

Persist only canonical data unless the product explicitly requires more.

Recommended saved fields:

- `schemaVersion`
- canonical `nodes`
- canonical `edges`
- optional saved viewport if reopening the prior user view is required
- hierarchy metadata such as `parentId`, group membership, or collapse intent if it is a real product concept

Usually avoid persisting blindly:

- hover state
- dragging state
- temporary search matches
- inspector tab selection
- temporary layout caches
- render-only flags that can be recomputed safely

Before loading saved data:

1. validate top-level shape
2. confirm `schemaVersion`
3. run migrations if needed
4. verify id uniqueness
5. verify required fields for each node type
6. recompute transient caches after load

## 4) Viewport and container timing checklist

A common failure mode is correct graph data with incorrect viewport timing.

Sequence:

1. mount a container with real dimensions
2. load nodes and edges
3. complete async layout or measurement work
4. ensure hidden panels/tabs have become visible if they affect size
5. call `fitView` or equivalent viewport update once
6. re-run only on meaningful container or graph changes

Use container observation when the editor lives inside:

- split panes
- accordions
- tabs
- resizable sidebars
- async-loaded dashboards

Failure signatures:

- `fitView` zooms too far out or too far in
- initial viewport centers on empty space
- viewport works after a window resize but not on first render
- graph jumps after data load or panel expansion

## 5) Performance traps worth checking first

Check these before deeper rewrites:

- `nodeTypes` or `edgeTypes` recreated every render
- custom nodes not wrapped in `memo` when they are expensive
- callbacks recreated on hot interaction paths and passed into many children
- side panels subscribing to the full nodes or edges arrays
- expensive derived graph calculations running during drag
- full-tree layout rerun for local edits
- large hidden subtrees still rendered when they could be collapsed or omitted

## 6) Hierarchy and accessibility checks

Hierarchy is not only visual nesting.

Recommended pattern:

- canvas for spatial editing
- companion tree/outline for keyboard navigation and context
- breadcrumbs for current location in nested structures
- reveal/zoom action from tree to canvas

Checks:

- parent/child semantics are stored explicitly
- tree and canvas use the same ids
- expanded/collapsed state is synchronized
- focus is visible in the tree
- keyboard users can navigate structure without panning the canvas alone

## 7) Quick debugging map

| Symptom | First checks |
| --- | --- |
| Dragging one node re-renders everything | broad subscriptions, unstable props, non-memoized custom nodes |
| Sidebar edits lag or appear late | duplicated state, stale selectors, mutation-in-place |
| Child nodes lose context | inconsistent hierarchy metadata, unsynchronized selection state |
| Restore breaks positions or edges | schema mismatch, id collisions, missing migrated fields |
| Viewport jumps | zero-size container, fit timing, repeated viewport writes |

## Primary references

- React Flow docs: https://reactflow.dev/
- Performance: https://reactflow.dev/learn/advanced-use/performance
- State management: https://reactflow.dev/learn/advanced-use/state-management
- Sub flows: https://reactflow.dev/learn/layouting/sub-flows
- Save and restore: https://reactflow.dev/learn/advanced-use/save-and-restore
- React Flow instance API: https://reactflow.dev/api-reference/types/react-flow-instance
- React memo: https://react.dev/reference/react/memo
- React useCallback: https://react.dev/reference/react/useCallback
- React useMemo: https://react.dev/reference/react/useMemo
- MDN ResizeObserver: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
- WAI-ARIA tree view pattern: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
