# TASK-01 Brand Inventory And Compatibility Contract

Read this file before starting implementation.

## Goal

Map every visible `omni-skills` identity surface and define the migration contract before any rename lands.

## Scope

- public package name
- bin names
- repo URLs
- README and docs references
- workflow text
- release scripts
- internal workspace names
- public runtime names visible to users
- private automation references to the public repo

## Deliverables

- complete inventory of visible brand references
- decision table: rename now, alias, or defer
- compatibility contract for:
  - `npx omni-skills`
  - package install paths
  - repo redirects
  - docs migration text

## Acceptance

- no major user-visible identity surface is left unclassified
- migration window is explicitly defined
- deferred items are documented instead of implicitly ignored

## Output

- inventory and compatibility contract: [docs/architecture/AWESOME-OMNI-SKILLS-BRAND-INVENTORY.md](/home/diegosouzapw/dev/ai/omni-skills/docs/architecture/AWESOME-OMNI-SKILLS-BRAND-INVENTORY.md)

## Status

- completed on `2026-03-31`
