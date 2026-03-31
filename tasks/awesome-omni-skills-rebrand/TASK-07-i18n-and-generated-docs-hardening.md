# TASK-07 i18n And Generated Docs Hardening

Read this file before starting implementation.

## Goal

Stop the translation and doc-generation pipeline from freezing stale brand, version, and count values.

## Scope

- update `generate_i18n.py` to read generated manifests
- ensure English docs render before i18n sync
- define policy for translated snapshot freshness
- align doc generation order in CI and release flows

## Deliverables

- i18n generator no longer hardcodes project name and version
- reproducible docs generation order
- explicit policy for when translated docs must be refreshed

## Acceptance

- i18n output reflects the current English project identity
- version drift no longer comes from hardcoded constants

## Status

Completed on 2026-03-31.

## Outcome

- `generate_i18n.py` now reads `data/project_identity.json` and `data/project_status.json`, refreshes English generated docs before translation output, and emits explicit snapshot/provenance markers
- `sync_i18n.py` is now a real CLI wrapper around the canonical generator instead of a hand-edited script with hardcoded paths
- `generate_project_status.py` now derives `generated_at` from current generated manifests instead of the static fallback timestamp
- `sync_repo_version.py` now refreshes registry and i18n output so version bumps do not leave translated docs stale
- `package.json` build flow now treats `i18n` as a first-class generated artifact with `i18n:render` and `i18n:check`
- `validate.yml` now checks rendered docs, translated docs, registry, and project status drift as committed artifacts
- `docs/i18n/*` was fully regenerated to the current `awesome-omni-skills` branding and release snapshot
