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
