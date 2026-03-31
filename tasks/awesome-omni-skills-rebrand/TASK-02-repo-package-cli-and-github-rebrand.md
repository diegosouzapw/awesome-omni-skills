# TASK-02 Repo Package CLI And GitHub Rebrand

Read this file before starting implementation.

## Goal

Apply the external-facing rename from `omni-skills` to `awesome-omni-skills` without breaking current users abruptly.

## Scope

- root package rename
- npm description update
- homepage and issues URLs
- README badges and links
- GitHub repository description and topics
- CLI help text and install examples
- optional legacy binary alias support

## Deliverables

- updated `package.json`
- updated CLI/bin help text
- updated workflow and release references where needed
- documented migration path for old and new commands

## Acceptance

- primary docs show `awesome-omni-skills`
- legacy command path still works during migration
- package and docs no longer disagree on project identity

## Output

- package and docs updated for `awesome-omni-skills`
- GitHub repository renamed to `diegosouzapw/awesome-omni-skills`
- legacy CLI alias preserved: `npx omni-skills`

## Status

- completed on `2026-03-31`
