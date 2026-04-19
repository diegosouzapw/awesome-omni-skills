---
name: "rayden-code"
description: "Rayden Code Skill workflow skill. Use this skill when the user needs Generate React code with Rayden UI components using correct props, tokens, and premium layout patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "react"
  - "tailwind"
  - "design-system"
  - "ui"
  - "components"
  - "vibe-coding"
  - "rayden"
  - "rayna-ui"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
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
family_id: "rayden-code"
family_name: "Rayden Code Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/rayden-code"
upstream_skill: "skills/rayden-code"
upstream_author: "Leslie Williams"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "rayden-code"
---

# Rayden Code Skill

## Overview

This skill packages the upstream `rayden-code` workflow into a clearer execution format while preserving its provenance and intent.

Use it when the operator must generate React UI that stays inside the Rayden or Rayna design-system boundary instead of inventing components, props, styling primitives, or interaction behavior. The central rule is evidence-backed generation: only use Rayden components, props, tokens, variants, and layout patterns that can be traced to local code, stories, bundled upstream references, or user-provided documentation.

If the request requires undocumented Rayden APIs, large-scale design-system refactoring, or custom widget behavior that is not supported by the design system, stop and ask for source references or route to a different skill.

Support files for this skill:
- `references/domain-notes.md` — compact execution checklist for source-of-truth collection, token discipline, state coverage, and semantic review
- `examples/worked-example.md` — one end-to-end example showing clarifying questions, an assumptions block, a generation plan, and a review checklist

## When to Use This Skill

Use this skill when:
- You are generating a new React page or feature using Rayden UI components.
- You need design-system-constrained output rather than generic React or Tailwind markup.
- You are building a dashboard, settings page, auth flow, landing page, table view, or similar UI where layout quality and component correctness matter.
- The user can provide, or the repository already contains, the Rayden source of truth: local component code, stories, examples, token docs, or upstream bundled references.
- You need a workflow that includes planning, generation, and review before handoff.

Do not use this skill as the only tool when:
- The task is mainly form validation architecture, test strategy, accessibility remediation across an app, or component-library maintenance.
- The user expects you to invent missing Rayden components or undocumented props.
- The work is primarily backend, data modeling, routing architecture, or framework migration.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First pass on a request | `SKILL.md` | Establishes activation boundaries, workflow, and stop conditions before code generation |
| Need a quick execution checklist | `references/domain-notes.md` | Keeps required inputs, token rules, semantics, and review gates visible during work |
| Need a concrete pattern to follow | `examples/worked-example.md` | Shows how to turn a vague request into a constrained, reviewable generation plan |
| Missing Rayden docs or uncertain component usage | `references/domain-notes.md` → “Missing source-of-truth decision tree” | Prevents hallucinated components, props, and variants |
| Handoff or review | `SKILL.md` → “Review before handoff” | Confirms evidence, state coverage, semantics, and unresolved assumptions |

## Workflow

1. **Confirm scope and route correctly**
   - Identify the page or feature type.
   - Confirm the request is specifically about generating Rayden-compliant React UI.
   - If the real task is broader than UI generation, route to a more suitable skill.

2. **Lock the source of truth before writing code**
   Collect or verify:
   - Rayden or Rayna component references available in the repo or user-provided docs
   - supported component names and props
   - token names, theme variables, variants, and spacing conventions
   - local examples, stories, screenshots, or existing page patterns
   - framework context such as routing, server/client boundaries, and data-loading expectations

   If you do not have enough evidence to name a component, prop, token, or variant confidently, do not guess. Ask for the missing reference or inspect the local repository first.

3. **Clarify the request before generation**
   Ask only for information that changes the result materially:
   - target page or feature
   - required sections and actions
   - data shape and empty/loading/error states
   - permissions or role-based differences
   - responsiveness requirements
   - whether the output should be static scaffold, interactive feature shell, or production-ready integration

4. **Map the UI states**
   Before drafting code, identify the states that matter:
   - default or success state
   - loading or skeleton state
   - empty state
   - error state
   - disabled and busy states for actions
   - selection, pagination, filter, dialog, menu, or tab states when relevant

   Do not ship a happy-path-only layout for interfaces that clearly require state handling.

5. **Plan with tokens and system primitives first**
   - Prefer documented Rayden components over custom HTML structures.
   - Prefer approved variants, slots, and layout patterns over ad hoc wrappers.
   - Prefer design tokens or theme values over hard-coded colors, spacing, radii, and shadows.
   - If the implementation uses Tailwind or theme variables, use the approved theme scale instead of arbitrary values unless explicitly requested.

6. **Generate evidence-backed React code**
   - Use only verified components and prop patterns.
   - Use native semantic elements for buttons, links, forms, and lists unless the design-system component already provides that behavior.
   - Wire real event handlers and state placeholders clearly; avoid vague `TODO` behavior unless the operator explicitly requests a stub.
   - For repeated content, use stable keys and clear data mapping.
   - Keep assumptions visible when you must proceed with partial information.

7. **Review before handoff**
   Check that:
   - every Rayden component, prop, variant, and token can be traced to evidence
   - the page includes required UI states
   - interactive controls use semantic elements or verified design-system abstractions
   - layout and styling use system tokens instead of arbitrary values where possible
   - any assumptions, unknowns, or unresolved gaps are called out explicitly

8. **Record provenance and limits**
   In your handoff, state:
   - which local files, stories, or docs you used as the source of truth
   - any assumptions you made
   - any missing Rayden references that still need confirmation
   - what was intentionally left as a stub or placeholder

## Imported Workflow Notes

The upstream skill intent is preserved: generate production-quality React UI using the Rayden component library and its design-system rules rather than generic AI-generated markup. If the bundled upstream package includes files such as `RAYDEN_RULES.md`, stories, API notes, or anti-pattern lists, treat them as higher-priority evidence than guesswork.

Where the upstream package claims a known component inventory or token set, use that inventory only when it is actually present in the available files. Do not restate undocumented Rayden API details from memory.

## Troubleshooting

### A component or prop does not appear to exist
- Search local stories, examples, or component source before proceeding.
- Check whether the behavior should be composed from smaller supported components instead of a single missing one.
- Remove or replace unverified props rather than shipping speculative API usage.
- If evidence is still missing, ask the user for the Rayden reference and mark the gap clearly.

### The layout looks plausible but breaks design-system consistency
- Replace hard-coded spacing, colors, radii, or shadows with documented tokens or variants.
- Re-check whether wrappers or utility classes are duplicating behavior the component already provides.
- Compare with nearby local examples or stories to confirm intended composition patterns.

### Interactions are present but semantically wrong
- Replace clickable `div` or `span` patterns with native `button`, `a`, or form elements unless a verified component abstraction already handles semantics.
- Confirm focus, keyboard support, and disabled or busy states for dialogs, menus, tabs, and similar controls.
- Do not add ad hoc ARIA-heavy custom widgets when a standard element or documented component is available.

### Repeated rows, cards, or nav items behave inconsistently
- Check for unstable or missing React keys.
- Keep list identity tied to stable data, not array position when possible.
- Verify selection and expansion state live at the correct level in the tree.

### Hydration or client-boundary issues appear in app frameworks
- Verify whether the generated code introduced client-side state or event handlers inside a server-oriented file.
- Separate static layout from interactive regions when the framework requires it.
- Avoid unnecessary client behavior in purely presentational sections.

### The request is too vague to generate safely
- Pause generation.
- Ask for the exact page goal, required sections, states, and Rayden references.
- Use the worked example in `examples/worked-example.md` as the interview pattern.

## Examples

Use `examples/worked-example.md` for a full end-to-end pattern. In short, a strong request for this skill should include:
- the page or feature type
- the target user and primary actions
- required components or local examples
- expected states
- data shape or content model
- token, theme, or branding constraints

## Additional Resources

- `references/domain-notes.md`
- React docs on conditional rendering, rendering lists, and responding to events
- MDN guidance on semantic controls and ARIA button usage
- WAI-ARIA Authoring Practices for advanced interaction patterns
- Storybook stories or equivalent local component examples

## Related Skills

Switch or expand to a different skill when you need:
- deep accessibility remediation or audit work
- form architecture and validation flows
- frontend testing or visual regression coverage
- component-library maintenance or token refactoring
- application architecture beyond page-level UI generation

## Safety and Quality Boundaries

- Do not claim support for Rayden components or props that are not verified in available references.
- Do not replace missing design-system capability with broad custom implementation unless the user explicitly approves that change.
- Keep commands and edits narrow, reversible, and easy to review.
- Prefer explicit assumptions and evidence over confident invention.
