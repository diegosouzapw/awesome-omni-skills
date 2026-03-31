# TASK-04 Project Identity Status And Doc Renderer

Read this file before starting implementation.

## Goal

Replace scattered manual status edits with generated, bounded doc blocks backed by shared manifests.

## Scope

- add `data/project_identity.json`
- add generated `data/project_status.json`
- add a docs renderer script
- add generated markers to protected docs
- fold or supersede narrow regex-only version sync logic

## Deliverables

- identity manifest
- status manifest
- doc renderer
- generated blocks in top-level docs

## Acceptance

- README and docs index counts come from generated data
- version and release references do not need ad hoc hand edits in multiple files
- renderer fails when markers are missing or stale
