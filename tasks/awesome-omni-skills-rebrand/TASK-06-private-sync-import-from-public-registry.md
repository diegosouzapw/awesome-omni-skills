# TASK-06 Private Sync Import From Public Registry

Read this file before starting implementation.

## Goal

Teach the private external-sync runtime to import the public repository registry markdown into SQLite and the dashboard.

## Scope

- fetch public `REPOSITORY-SOURCES.md`
- parse registry section
- validate rows
- upsert into private SQLite
- expose imported candidates in dashboard
- preserve operator review gate before live sync

## Deliverables

- parser in private repo
- import command or scheduled importer
- dashboard visibility for public-registry sources
- provenance metadata for imported registry rows

## Acceptance

- merged public registry entries appear in private operations without manual shell registration
- new rows do not bypass operator review
- parse and sync failures are visible in dashboard or logs
