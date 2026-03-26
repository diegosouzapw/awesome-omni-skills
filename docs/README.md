<!-- omni-skills: version=1.0.0; skills=2; updated_at=2026-03-26 -->
# Omni Skills Documentation

This directory is the technical and user-facing documentation hub for Omni Skills. Repository-standard community files now live in the root again:

- [`README.md`](../README.md)
- [`CONTRIBUTING.md`](../CONTRIBUTING.md)
- [`SECURITY.md`](../SECURITY.md)
- [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

## Status Snapshot

Current repository state:

- the runtime foundation is in place
- the public catalog currently contains 2 published skills: `omni-figma` and `find-skills`
- selective install by skill and bundle is implemented
- the API is implemented and read-only
- the MCP server supports `stdio`, `stream`, and `sse`
- local MCP sidecar mode is implemented with allowlisted writes, dry-run defaults, and client-aware config generation
- skills are now classified locally with canonical taxonomy, maturity level, best practices score, quality score, and security score
- per-skill archives are generated in `dist/archives/` as `zip`, `tar.gz`, and checksum manifests
- the validator can optionally enrich security metadata with ClamAV and VirusTotal hash lookups
- hosted API and MCP HTTP modes now support optional auth, rate limiting, and audit logging
- the A2A surface exists as a scaffold, not as a full task system
- smoke and publish checks validate the package before release

Current gaps:

- most bundle members are still roadmap metadata, not published skills
- stronger hosted governance beyond the current auth, rate limit, and audit-log baseline is still pending
- CI-managed signing keys and enforced release signatures are still pending
- A2A task lifecycle is still pending
- MCP config coverage still needs to expand beyond the current JSON and TOML targets

## Start Here

### If You Want to Use the Project

- [Getting Started](users/getting-started.md)
- [Usage Guide](users/usage.md)
- [Bundles](users/bundles.md)
- [Catalog](CATALOG.md)
- [System Runbook](operations/runbook.md)

### If You Want to Understand the Runtime

- [Agent-Native Roadmap](architecture/agent-native-roadmap.md)
- [ADR-0001: Agent-Native Workspace Foundation](architecture/adr-0001-agent-native-workspace.md)
- [Catalog API Surface](specs/catalog-api.md)
- [Local MCP Sidecar](specs/local-mcp-sidecar.md)
- [Skill Classification and Metadata](specs/skill-classification.md)
- [Security Validation and Distribution](specs/security-validation.md)
- [Skill Manifest Specification](specs/skill-manifest.md)

### If You Want to Contribute

- [Contributing Guide](../CONTRIBUTING.md)
- [Skill Template](contributors/skill-template.md)
- [Skill Anatomy](contributors/skill-anatomy.md)
- [Quality Bar](contributors/quality-bar.md)

## Runtime Surfaces

### CLI

The published `omni-skills` binary is the main operational entrypoint.

Examples:

```bash
npx omni-skills --cursor --skill omni-figma
npx omni-skills find figma
npx omni-skills find mcp --sort quality --min-quality 80 --min-security 90
npx omni-skills find figma --tool cursor --install --yes
npx omni-skills find foundation --bundle essentials --install --yes
npx omni-skills recategorize
npx omni-skills recategorize --write
npx omni-skills mcp stream --local
npx omni-skills api --port 3333
npx omni-skills a2a --port 3335
npx omni-skills smoke
```

### Generated Catalog

The catalog contract is emitted into:

- `skills_index.json`
- `dist/catalog.json`
- `dist/bundles.json`
- `dist/manifests/<skill>.json`
- `dist/archives/<skill>.zip`
- `dist/archives/<skill>.tar.gz`
- `dist/archives/<skill>.checksums.txt`

These generated artifacts drive:

- selective installs
- API responses
- MCP read-only discovery
- A2A recommendation and install-plan flows
- archive downloads and checksum verification

### API

The read-only HTTP API serves skills, bundles, search, comparison, install plans, and artifact downloads.

Repo command:

```bash
npm run api
```

Package command:

```bash
npx omni-skills api --port 3333
```

### MCP

The MCP runtime supports three transports:

- `stdio`
- `stream`
- `sse`

Repo commands:

```bash
npm run mcp
npm run mcp:stream
npm run mcp:sse
```

Package commands:

```bash
npx omni-skills mcp stdio
npx omni-skills mcp stream
npx omni-skills mcp sse
```

Local mode:

```bash
npx omni-skills mcp stream --local
```

### A2A

The A2A service is present for discovery and install-plan handoff, but it is still a scaffold rather than a full long-running task system.

## Repository Map

| Path | Purpose |
| :--- | :------ |
| `skills/` | Canonical authored skills |
| `docs/users/` | End-user docs |
| `docs/contributors/` | Contributor templates and guidance |
| `docs/architecture/` | Roadmap and ADRs |
| `docs/operations/` | Runbooks and operational guides |
| `docs/specs/` | Protocol and artifact contracts |
| `docs/CATALOG.md` | Generated skill catalog |
| `dist/` | Generated machine-readable artifacts |
| `packages/catalog-core/` | Shared catalog runtime |
| `packages/server-api/` | Read-only HTTP API |
| `packages/server-mcp/` | MCP runtime with local sidecar mode |
| `packages/server-a2a/` | A2A scaffold |
| `tools/bin/` | CLI entrypoints |
| `tools/lib/` | Installer helpers |
| `tools/scripts/` | Validation, generation, and test scripts |

## Release Validation

Recommended local preflight:

```bash
npm run smoke
```

That smoke run currently checks:

- validation
- artifact generation
- archive verification
- generated catalog markdown
- automated tests
- `npm pack --dry-run`
- API boot
- MCP boot in `stdio`, `stream`, and `sse`
- A2A boot
