# TASK-01 — MCP Client Expansion

## Status

Completed in the current 0.1.x round.

Outcome:

- Goose was promoted to first-class support as `goose-user`
- the matrix now closes at 16 config-capable clients and 33 first-class config targets
- JetBrains AI Assistant and Postman remain manual/snippet-only
- Roo Code remains candidate-only until its file-contract story is stronger
- the expansion phase is now considered complete for now unless another client clears the same public-contract bar

## Objective

Close the MCP client-support expansion phase in a disciplined way by adding support only for clients that expose stable, public, documented configuration contracts.

This task is not about chasing every MCP-capable product. It is about finishing the matrix with confidence and then treating the surface as intentionally complete.

## Current State

The project already supports a broad first-class set of install-capable and config-capable clients. The open question is no longer “can we support more?” but “which remaining clients are stable enough to deserve long-term maintenance?”

Primary source of truth:

- [../specs/CLIENT-SUPPORT-MATRIX.md](../specs/CLIENT-SUPPORT-MATRIX.md)
- [../specs/LOCAL-MCP-SIDECAR.md](../specs/LOCAL-MCP-SIDECAR.md)
- [../architecture/AGENT-NATIVE-ROADMAP.md](../architecture/AGENT-NATIVE-ROADMAP.md)

## Goals

- review current supported and candidate clients against official docs
- add 1 to 2 remaining clients only if their config shapes and paths are publicly stable
- document every supported target with exact writer family and recipe status
- explicitly classify non-supported clients as manual-only or unsupported, with rationale
- end this work with a closed expansion list, not a vague “maybe later”

## Non-Goals

- inventing config formats for clients without public docs
- turning every MCP-capable app into a skill-install target
- adding low-confidence writers that will break quietly

## Candidate Evaluation Rubric

A client should only become first-class if all of the following hold:

1. public documentation describes the config structure
2. public documentation or product behavior makes the file path or settings location reasonably stable
3. the config shape can be represented by one of the project’s canonical writer families
4. the sidecar can preview and write it without widening the filesystem allowlist dangerously
5. the support cost is proportional to actual user value

If any of those fail, the client should remain `manual/snippet`, `candidate`, or `unsupported`.

## Implementation Steps

1. Re-audit the current matrix and normalize terminology.
2. Re-check all candidate clients against official docs.
3. Choose at most two additions for this closing pass.
4. Implement writer/profile support in `packages/server-mcp/src/local-sidecar.js`.
5. Expose any new targets in CLI/UI flows where appropriate.
6. Update the support matrix and sidecar docs.
7. Add test coverage for preview and write paths.
8. Record which candidates were intentionally left out and why.

## Files Likely To Change

- `packages/server-mcp/src/local-sidecar.js`
- `packages/server-mcp/src/server.js`
- `tools/bin/cli.js`
- `tools/bin/ui.mjs`
- `docs/specs/CLIENT-SUPPORT-MATRIX.md`
- `docs/specs/LOCAL-MCP-SIDECAR.md`
- `docs/operations/RUNBOOK.md`
- `docs/README.md`
- `README.md`

## Acceptance Criteria

- every supported client in the matrix has a documented official source
- every writer family used by the sidecar is intentional and explained
- candidate clients are clearly marked as out-of-scope when not safe enough
- tests cover every new writer path introduced in this round
- the team can declare MCP expansion “complete for now” without ambiguity
