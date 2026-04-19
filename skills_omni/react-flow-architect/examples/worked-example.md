# Worked Example: Hierarchical Workflow Editor

This example shows one realistic implementation shape for a production-oriented React Flow editor with hierarchy, synchronized navigation, persistence, and a targeted performance fix.

## Goal

Build a workflow editor with:

- a canvas for editing nodes and edges
- a left outline tree for hierarchy navigation
- parent/child grouping for phases and steps
- an inspector panel for selected node details
- save/restore with a schema version
- acceptable drag performance on medium-sized graphs

## Architecture sketch

**Canonical graph state**

- `nodes`
- `edges`
- `schemaVersion`
- `selectedNodeId`
- `expandedNodeIds`

**Transient UI state**

- `isSaving`
- active inspector tab
- search input text
- hover state

**Key rule**

The tree, inspector, and canvas all reference the same `selectedNodeId` and the same canonical node records.

## Example graph data

### Nodes

```json
[
  {
    "id": "phase:ingest",
    "type": "group",
    "position": { "x": 0, "y": 0 },
    "data": { "label": "Ingestion Phase" }
  },
  {
    "id": "step:fetch",
    "type": "task",
    "position": { "x": 80, "y": 80 },
    "parentId": "phase:ingest",
    "data": {
      "label": "Fetch Source File",
      "owner": "pipeline",
      "status": "ready"
    }
  },
  {
    "id": "step:validate",
    "type": "task",
    "position": { "x": 320, "y": 80 },
    "parentId": "phase:ingest",
    "data": {
      "label": "Validate Schema",
      "owner": "pipeline",
      "status": "ready"
    }
  },
  {
    "id": "phase:publish",
    "type": "group",
    "position": { "x": 0, "y": 260 },
    "data": { "label": "Publishing Phase" }
  },
  {
    "id": "step:export",
    "type": "task",
    "position": { "x": 100, "y": 340 },
    "parentId": "phase:publish",
    "data": {
      "label": "Export Artifact",
      "owner": "release",
      "status": "blocked"
    }
  }
]
```

### Edges

```json
[
  {
    "id": "edge:fetch-validate",
    "source": "step:fetch",
    "target": "step:validate",
    "type": "smoothstep"
  },
  {
    "id": "edge:validate-export",
    "source": "step:validate",
    "target": "step:export",
    "type": "smoothstep"
  }
]
```

## Outline tree derived from canonical graph

Expected tree structure:

```text
Ingestion Phase
├── Fetch Source File
└── Validate Schema
Publishing Phase
└── Export Artifact
```

Interaction expectations:

- clicking `Validate Schema` in the tree selects `step:validate` in the graph
- selecting `step:validate` in the graph highlights the same item in the tree
- breadcrumbs for `step:validate` read `Ingestion Phase / Validate Schema`

## Expand/collapse behavior

Store collapse intent explicitly, for example:

```json
{
  "expandedNodeIds": ["phase:ingest"]
}
```

Expected behavior:

- `phase:ingest` children remain visible
- `phase:publish` children are hidden in both tree and canvas until expanded
- selecting `step:export` from a search result auto-expands `phase:publish`, updates breadcrumbs, and reveals the node in the viewport

## Save payload

Example versioned payload:

```json
{
  "schemaVersion": 2,
  "documentId": "workflow:demo-001",
  "viewport": { "x": 0, "y": 0, "zoom": 0.9 },
  "nodes": [
    { "id": "phase:ingest", "type": "group", "position": { "x": 0, "y": 0 }, "data": { "label": "Ingestion Phase" } },
    { "id": "step:fetch", "type": "task", "position": { "x": 80, "y": 80 }, "parentId": "phase:ingest", "data": { "label": "Fetch Source File", "owner": "pipeline", "status": "ready" } },
    { "id": "step:validate", "type": "task", "position": { "x": 320, "y": 80 }, "parentId": "phase:ingest", "data": { "label": "Validate Schema", "owner": "pipeline", "status": "ready" } },
    { "id": "phase:publish", "type": "group", "position": { "x": 0, "y": 260 }, "data": { "label": "Publishing Phase" } },
    { "id": "step:export", "type": "task", "position": { "x": 100, "y": 340 }, "parentId": "phase:publish", "data": { "label": "Export Artifact", "owner": "release", "status": "blocked" } }
  ],
  "edges": [
    { "id": "edge:fetch-validate", "source": "step:fetch", "target": "step:validate", "type": "smoothstep" },
    { "id": "edge:validate-export", "source": "step:validate", "target": "step:export", "type": "smoothstep" }
  ],
  "ui": {
    "expandedNodeIds": ["phase:ingest"]
  }
}
```

## Migration example

If version 1 stored `parent` instead of `parentId`, migrate before load.

Before:

```json
{ "id": "step:fetch", "type": "task", "parent": "phase:ingest", "data": { "label": "Fetch Source File" } }
```

After migration:

```json
{ "id": "step:fetch", "type": "task", "parentId": "phase:ingest", "data": { "label": "Fetch Source File" } }
```

Expected result:

- hierarchy tree renders correctly
- node selection sync continues working
- no ids change during migration

## Before/after performance fix

### Before

Observed symptom:

- dragging `step:fetch` makes the inspector panel, outline tree, and most custom nodes re-render

Root causes:

- `nodeTypes` declared inside the canvas component render
- inspector subscribed to full `nodes`
- outline tree subscribed to entire graph instead of just hierarchy and selection slices
- custom task node not memoized

### After

Changes:

- moved `nodeTypes` to a stable module-level definition
- wrapped heavy task node component in `memo`
- changed inspector subscription from full `nodes` array to selected node record only
- changed outline subscription to `selectedNodeId` and derived tree data only

Expected outcome:

- dragging `step:fetch` re-renders the dragged node and only directly affected UI
- inspector remains responsive without refreshing unrelated details
- outline tree updates selection without recomputing from every drag frame

## Implementation checkpoints

1. Render graph with stable ids and explicit `parentId` metadata.
2. Add synchronized tree selection.
3. Add breadcrumbs from hierarchy metadata.
4. Add expand/collapse state shared by tree and canvas.
5. Add versioned save payload.
6. Add migration path for old payloads.
7. Profile drag interaction and apply only the needed performance fixes.

## Acceptance criteria

- tree and canvas selection always refer to the same node id
- collapsing a phase hides descendants consistently
- restoring a saved document preserves hierarchy and edge connectivity
- migration from v1 to v2 preserves ids and parent relationships
- drag interaction no longer causes broad unrelated re-renders
