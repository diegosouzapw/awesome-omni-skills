---
name: "rayden-use"
description: "Rayden UI Design Skill workflow skill. Use this skill when the user needs to build or maintain Rayden UI components and screens in Figma through an MCP-enabled workflow, with token enforcement, safe library usage, and clear provenance before merge or handoff."
version: "0.0.1"
category: "design"
tags:
  - "figma"
  - "design-system"
  - "ui"
  - "components"
  - "mcp"
  - "rayden"
  - "rayna-ui"
  - "rayden-use"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "rayden-use"
family_name: "Rayden UI Design Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/rayden-use"
upstream_skill: "skills/rayden-use"
upstream_author: "Leslie Williams"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "rayden-use"
---

# Rayden UI Design Skill

## Overview

Use this skill for **Rayden UI work in Figma when the task is design-system-aware and tool-mediated**, not just visual exploration.

This skill preserves the upstream intent: build and maintain Rayden UI components and screens in Figma, using an MCP-enabled workflow, while keeping provenance explicit and avoiding destructive design-system changes.

The enhanced version strengthens the original by making these boundaries explicit:

- inspect before editing
- prefer existing library assets over new local artifacts
- enforce tokens through variables and modes when available
- isolate shared-system changes in a branch or equivalent reviewable path
- distinguish component maintenance from screen composition
- leave a handoff record that explains what changed, what was reused, and what still needs review

If your environment exposes Figma through MCP, use the equivalent read/list/update actions available in that client. Do **not** assume a specific command name or server capability that you have not verified.

## When to Use This Skill

Activate this skill when the user needs one or more of the following:

- Build or revise a **Rayden component** in Figma.
- Add or clean up **variants, properties, or slots** in an existing Rayden component set.
- Compose a **screen or flow** from Rayden components while preserving system structure.
- Audit a Figma file for **library usage, token usage, variant consistency, or accessibility issues**.
- Prepare a design-system-safe handoff after a Rayden UI change.

Do **not** use this skill as the primary workflow when:

- The task is mostly **frontend implementation** or code generation.
- The user wants broad **visual ideation** without a design-system target.
- The request is mainly **brand creation**, illustration, or marketing art direction.
- You cannot verify the target file, page, component scope, library source, or token context.
- The work would require unsupported bulk refactors or undocumented MCP behavior.

If the request drifts into implementation, accessibility escalation, or governance-sensitive library publishing, use the routing guidance in `agents/handoff-router.md`.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Unsure whether to inspect, edit, branch, or stop | `references/tool-boundaries.md` | Defines safe MCP operating boundaries before you mutate shared design assets |
| Updating a component or composing a screen | `## Workflow` | Gives the minimum reliable sequence from intake through handoff |
| Need a concrete model of good execution | `examples/tooling-worked-example.md` | Shows a Rayden-style worked example with inspection, decisions, and handoff notes |
| The task may need escalation | `agents/handoff-router.md` | Routes implementation-only follow-up, accessibility findings, and governance-sensitive changes |
| Reviewing completion quality | `## Workflow` phase 5 and `## Troubleshooting` | Helps catch unresolved variables, overrides, drift, and review blockers before handoff |

## Workflow

### 1. Intake and scope

Confirm all of the following before making changes:

- target Figma file
- target page or frame
- whether the task affects a **shared system component** or only a local screen composition
- whether a Rayden library is already connected
- whether variable collections and modes are visible and usable in the file
- whether the requested outcome is a component update, new component, audit, or screen composition

If any of those are unclear, stop and ask for clarification before editing.

### 2. Preflight inspection

Inspect the current state before mutation.

Check for:

- existing Rayden components or instances already solving the request
- the source library and publication state, if visible
- existing component sets, variant axes, and component properties
- variable collections, modes, aliases, and obvious token gaps
- local overrides that could hide library behavior
- whether the change belongs in a branch or another isolated review path

Use `references/tool-boundaries.md` to decide whether to:

- reuse an existing component
- add a property
- add a variant axis or variant value
- create a new component
- stop because the library or token state is too unclear to modify safely

### 3. Choose the safest change surface

Prefer the narrowest safe change.

#### For component maintenance

1. Reuse the existing Rayden component set if one exists.
2. Prefer **component properties** for controllable text, booleans, or instance swaps when that avoids variant explosion.
3. Prefer **variants** for meaningful state or style differences that must be selectable and reviewable.
4. Create a separate component only when the behavior, anatomy, or semantics are materially different.

Do **not** routinely:

- detach instances
- flatten layers
- replace tokenized values with local raw values
- duplicate a component set just to get one more state

#### For screen composition

- use library-backed instances where possible
- use auto layout for structures that should adapt to content or screen size
- keep realistic content and state examples
- label intentional local exceptions so they can be reviewed later
- avoid turning a screen-only adjustment into an unreviewed design-system change

### 4. Implement with token and library discipline

Apply Rayden conventions **if present in the connected file or library**. Do not invent undocumented Rayden rules.

Token enforcement means:

- use variables for tokenized values where the file supports them
- preserve collection and mode intent
- prefer aliases over copy-pasted raw values when that relationship exists
- keep naming and type consistency with the local system
- if a required token is missing, flag it instead of silently creating a one-off local value unless the user explicitly requests exploratory work

Review at least these token categories when relevant:

- color
- spacing
- radius
- typography
- stroke or border
- effects
- state-specific values across modes or themes

### 5. Audit before handoff

Before you hand off or declare completion, verify:

- the edited object still uses the correct library pattern
- variants and properties are coherent and not redundant
- default values make sense
- instance overrides are intentional
- auto layout behavior is stable for realistic content
- visible states such as hover, focus, disabled, selected, error, or loading are consistent when relevant
- contrast and state visibility issues have been checked and noted
- any unresolved token, library, or branching questions are documented

### 6. Record provenance and handoff notes

Leave a compact handoff summary covering:

- what file and page were edited
- what component or screen was changed
- whether the change was local composition or system-level maintenance
- what existing components, variants, properties, and variables were reused
- any missing token, accessibility, implementation, or governance follow-up
- whether branch review, publish review, or additional approval is still required

Use `agents/handoff-router.md` if follow-up should move outside this skill.

## Troubleshooting

### Variables are missing, unresolved, or inconsistent

**Symptoms**
- Expected token variables are not available.
- A layer shows local styling that should have been tokenized.
- Different modes or themes produce inconsistent appearance.

**Likely causes**
- Wrong library or collection is active.
- The file is not connected to the expected variables.
- The component was edited locally with raw values.
- A variable alias target changed or is no longer available.

**Safe checks**
- Confirm which library and collection the file is using.
- Inspect whether the value is variable-bound or hard coded.
- Check whether the intended mode exists in the current file context.

**Recovery**
- Rebind to the correct variable when available.
- Replace raw local values with the intended variable references.
- If the needed token does not exist, document the gap and route for design-system review instead of inventing a silent workaround.

### Library updates are not reflecting in instances

**Symptoms**
- Instances do not match expected system changes.
- A screen appears visually stale after a component update.
- Reviewers cannot tell whether the issue is a local override or an unpublished library change.

**Likely causes**
- Local overrides mask the library state.
- The source library change is not published or not accepted in the consumer file.
- The edited object is a duplicate local component rather than the shared asset.

**Safe checks**
- Inspect whether the item is a true instance, local component, or detached artifact.
- Review override state and publication status if visible.
- Verify whether the file consumes the intended library.

**Recovery**
- Remove accidental local duplication from the workflow.
- Reconnect the screen to the correct library asset where possible.
- If publication state is unclear, stop and hand off for governance review rather than forcing alignment manually.

### Variants or properties drift into inconsistent states

**Symptoms**
- The component set contains overlapping states.
- Some states can only be reached through duplicate components.
- Property defaults and variant labels are hard to understand.

**Likely causes**
- Variants were added without a clear axis.
- Properties that should control content or icon visibility were modeled as separate variants.
- One-off edits created impossible or redundant combinations.

**Safe checks**
- List the current axes and values.
- Check which differences are structural versus configurable.
- Compare defaults and slot behavior across the set.

**Recovery**
- Consolidate content toggles into properties where appropriate.
- Reserve variants for real state or style distinctions.
- If the cleanup affects a published shared component, isolate the work in a branch or equivalent review path.

### Branch, review, or merge path is unclear

**Symptoms**
- You are changing a shared component but do not know whether direct editing is acceptable.
- The team expects review before publish.
- Conflicts exist between local screen needs and system-wide behavior.

**Likely causes**
- Governance rules are not documented in the task.
- The change affects multiple consumers.
- The file mixes exploratory work with library maintenance.

**Safe checks**
- Determine whether the change is local composition or shared-system maintenance.
- Check whether a branch or isolated review path exists for this workspace.
- Confirm whether publishing is in scope for the current request.

**Recovery**
- Move the change into a reviewable branch path when available.
- Separate screen composition from system maintenance.
- Hand off when publish authority, governance, or merge conflict ownership is unclear.

## Examples

See `examples/tooling-worked-example.md` for a full worked example covering:

- request intake
- MCP-safe inspection
- decision between property and variant
- variable-backed token enforcement
- screen composition discipline
- final handoff summary

## Additional Resources

- `references/tool-boundaries.md` for tool-aware mutation policy
- Figma guidance on components, component properties, variables, libraries, branches, and auto layout
- WCAG 2.2 quick reference for contrast and state visibility checks
- Design Tokens Community Group format draft for token terminology and provenance language

## Related Skills

Use a different or additional skill when the work is primarily:

- frontend implementation
- accessibility remediation beyond design review
- design-system governance or publish approval

If your repository does not define dedicated related skills, keep the handoff generic and explain the follow-up needed in plain language.
