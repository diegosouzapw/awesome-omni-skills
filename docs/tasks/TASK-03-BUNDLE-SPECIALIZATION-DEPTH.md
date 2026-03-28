# TASK-03 — Bundle Specialization Depth

## Status

Completed on `2026-03-28`.

Implemented additions:

- `auth-flows` for `full-stack`
- `threat-modeling` for `security`
- `release-engineering` for `devops`
- `context-engineering` for `ai-engineer`

## Objective

Move bundles from “fully covered” to “meaningfully deep” by adding more specialized skills inside the highest-value tracks.

Coverage is already complete. The next gain is depth and nuance.

## Current State

Every bundle has at least viable backing, but some tracks still rely on a small set of broad skills rather than a richer internal ladder.

Primary references:

- [../users/BUNDLES.md](../users/BUNDLES.md)
- [../architecture/AGENT-NATIVE-ROADMAP.md](../architecture/AGENT-NATIVE-ROADMAP.md)
- [../architecture/CODEBASE-ANALYSIS.md](../architecture/CODEBASE-ANALYSIS.md)

## Goals

- identify which bundles most need specialist depth
- define candidate skill slots before authoring anything
- grow the catalog in a way that improves real install outcomes and enhancer coverage
- avoid bloating bundles with overlapping or redundant skills

## Non-Goals

- adding skills just to inflate counts
- replacing existing strong general-purpose skills
- reopening the bundle taxonomy from scratch

## Priority Tracks

The likely highest-value tracks for one more specialization pass are:

- `devops`
- `security`
- `ai-engineer`
- `full-stack`

## Implementation Steps

1. Inventory current bundle members and overlap.
2. Identify missing specialist roles inside each priority bundle.
3. Write a short skill-slot proposal before authoring any new skill.
4. Create only the slots that add clear new utility.
5. Validate new skills through the public PR flow and enhancer review path.
6. Update bundle docs and generated artifacts.

## Files Likely To Change

- `skills/`
- `skills_omni/`
- `data/bundles.json`
- `metadata.json`
- `skills_index.json`
- `dist/catalog.json`
- `dist/bundles.json`
- `docs/CATALOG.md`
- `docs/users/BUNDLES.md`

## Acceptance Criteria

- priority bundles have visibly deeper specialization, not just more skill count
- new bundle members add distinct workflows or expertise
- install recommendations gain useful variety
- docs and generated artifacts stay coherent after the additions
