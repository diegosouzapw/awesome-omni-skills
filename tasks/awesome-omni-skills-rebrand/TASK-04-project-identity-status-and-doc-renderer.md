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

## Output

- [data/project_identity.json](/home/diegosouzapw/dev/ai/omni-skills/data/project_identity.json)
- [data/project_status.json](/home/diegosouzapw/dev/ai/omni-skills/data/project_status.json)
- [tools/scripts/generate_project_status.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/generate_project_status.py)
- [tools/scripts/render_project_docs.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/render_project_docs.py)
- [tools/scripts/sync_repo_version.py](/home/diegosouzapw/dev/ai/omni-skills/tools/scripts/sync_repo_version.py)
- [package.json](/home/diegosouzapw/dev/ai/omni-skills/package.json)
- [packages/server-mcp/src/local-sidecar.js](/home/diegosouzapw/dev/ai/omni-skills/packages/server-mcp/src/local-sidecar.js)
- [README.md](/home/diegosouzapw/dev/ai/omni-skills/README.md)
- [docs/README.md](/home/diegosouzapw/dev/ai/omni-skills/docs/README.md)
- [CONTRIBUTING.md](/home/diegosouzapw/dev/ai/omni-skills/CONTRIBUTING.md)
- [docs/users/GETTING-STARTED.md](/home/diegosouzapw/dev/ai/omni-skills/docs/users/GETTING-STARTED.md)
- [docs/users/USAGE.md](/home/diegosouzapw/dev/ai/omni-skills/docs/users/USAGE.md)
- [docs/contributors/QUALITY-BAR.md](/home/diegosouzapw/dev/ai/omni-skills/docs/contributors/QUALITY-BAR.md)
- [docs/contributors/HIGH-SCORE-PLAYBOOK.md](/home/diegosouzapw/dev/ai/omni-skills/docs/contributors/HIGH-SCORE-PLAYBOOK.md)
- [docs/specs/SKILL-CLASSIFICATION.md](/home/diegosouzapw/dev/ai/omni-skills/docs/specs/SKILL-CLASSIFICATION.md)
- [docs/architecture/CODEBASE-ANALYSIS.md](/home/diegosouzapw/dev/ai/omni-skills/docs/architecture/CODEBASE-ANALYSIS.md)
- [docs/specs/SKILL-MANIFEST.md](/home/diegosouzapw/dev/ai/omni-skills/docs/specs/SKILL-MANIFEST.md)
- [docs/contributors/SKILL-ANATOMY.md](/home/diegosouzapw/dev/ai/omni-skills/docs/contributors/SKILL-ANATOMY.md)
- [docs/specs/LOCAL-MCP-SIDECAR.md](/home/diegosouzapw/dev/ai/omni-skills/docs/specs/LOCAL-MCP-SIDECAR.md)
- [.github/workflows/auto-release-skill-merges.yml](/home/diegosouzapw/dev/ai/omni-skills/.github/workflows/auto-release-skill-merges.yml)

## Status

Completed on 2026-03-31.
