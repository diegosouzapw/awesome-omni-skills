# Catalog API Surface

This document describes the initial read-only HTTP API exposed by `@omni-skills/server-api`.

## Status

Implemented and wired into the unified CLI, smoke checks, and generated catalog artifacts.

Current limitations:

- read-only only
- no auth or rate limiting yet
- catalog size still reflects the small published skill set

## Purpose

The API provides a registry-style surface for:

- listing skills
- fetching manifests
- searching and comparing skills
- listing bundles
- generating read-only install plans
- downloading generated catalog artifacts and skill files

## Runtime

Start the server from the repo root:

```bash
npm run api
```

Or through the published package:

```bash
npx omni-skills api --port 3333
```

Defaults:

- host: `127.0.0.1`
- port: `3333`

Override with:

```bash
HOST=0.0.0.0 PORT=3333 npm run api
```

## Endpoints

### Health and schema

- `GET /healthz`
- `GET /openapi.json`

### Catalog and skills

- `GET /v1/skills`
- `GET /v1/skills/:id`
- `GET /v1/search`
- `GET /v1/compare?ids=id1,id2`
- `GET /v1/bundles`
- `POST /v1/install/plan`

The `POST /v1/install/plan` body may include:

- `skill_ids`
- `bundle_ids`
- `tools`
- `target_path`
- `dry_run`

The install plan reflects current installer behavior honestly:

- full install is the default when no selectors are provided
- `skill_ids` and `bundle_ids` generate selective commands
- bundle warnings surface missing or unpublished members

### Artifact downloads

- `GET /v1/catalog/download`
- `GET /v1/skills/:id/artifacts`
- `GET /v1/skills/:id/downloads`
- `GET /v1/skills/:id/download/manifest`
- `GET /v1/skills/:id/download/entrypoint`
- `GET /v1/skills/:id/download/artifact?path=<repo-relative-artifact-path>`

## Link Enrichment

When requests are handled through the API, the server enriches manifests, artifact listings, and install plans with absolute URLs derived from the incoming request origin.

Examples:

- manifest URL
- entrypoint download URL
- artifact download URLs
- catalog download URL in install plans

This is runtime enrichment, not a build-time field baked into `dist/manifests/*.json`.

## Install Plan Notes

Install plans are previews, not remote writes.

The API never installs onto the caller's machine. It only returns:

- selected skill metadata
- warnings
- concrete CLI commands
- public download URLs when request origin data is available

## Relationship to MCP

The MCP read-only server can reuse the same public API URLs when `OMNI_SKILLS_API_BASE_URL` is configured.

Example:

```bash
OMNI_SKILLS_API_BASE_URL=http://127.0.0.1:3333 npm run mcp:http
```

This allows MCP install previews to return concrete manifest and artifact URLs instead of only local repo paths.
