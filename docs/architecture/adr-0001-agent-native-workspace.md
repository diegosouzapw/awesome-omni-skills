# ADR-0001: Agent-Native Workspace Foundation

## Status

Accepted

## Context

Omni Skills started as an installer-first repository. That was enough to distribute `SKILL.md` content, but it was not enough to expose the catalog to agents through protocol-native surfaces.

We needed a foundation that could support:

- a read-only HTTP catalog API
- a read-only MCP server
- an A2A-facing agent surface
- future local install sidecars

The critical constraint was to avoid reparsing repo files independently in each new service.

## Decision

Adopt a workspace-oriented structure with a shared catalog core and protocol-specific packages:

- root package `omni-skills`: existing CLI installer and repo scripts
- `@omni-skills/catalog-core`: shared catalog loading, search, recommendation, comparison, bundles, and install-plan primitives
- `@omni-skills/server-api`: read-only REST API
- `@omni-skills/server-mcp`: MCP server with `stdio`, `stream`, and `sse` entry points plus optional local sidecar mode
- `@omni-skills/server-a2a`: initial A2A scaffold with Agent Card and `message/send`

The catalog core reads generated artifacts from:

- `dist/catalog.json`
- `dist/manifests/<skill>.json`
- `skills_index.json`

## Consequences

### Positive

- API, MCP, and A2A now share one data contract.
- The published root CLI now exposes install, API, MCP, A2A, diagnostics, and smoke flows behind one binary.
- New protocol surfaces can be iterated without coupling to installer internals.
- The repository now includes a working local write-capable MCP sidecar behind an allowlist.

### Negative

- There is temporary duplication between Python build metadata and JavaScript runtime metadata.
- A2A support is intentionally partial for now; it is a useful scaffold, not a complete task lifecycle implementation.
- The installer now supports selective skill and bundle installation, so the catalog contract must keep commands, manifests, and docs aligned.
- Bundle metadata can currently outpace the published catalog, so the docs and API need to be explicit about missing members.

## Follow-Up

1. Add remote MCP authentication and rate limiting.
2. Improve generic local MCP config writing into more client-specific outputs.
3. Move from raw tagged artifact downloads to signed release artifacts or per-skill archives.
4. Upgrade the A2A scaffold from message-only responses to task-aware execution.
5. Expand the published catalog so bundle metadata maps to more real installable skills.
