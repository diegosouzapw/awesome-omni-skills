---
name: "frontend-design-v2"
description: "Use this skill when the user needs production-ready frontend design and implementation: designing or refining components, defining a visual system, building responsive layouts, implementing polished interactions, improving accessibility, reducing generic AI-looking UI, or preparing distinctive UI changes for review, merge, or handoff while preserving upstream workflow, copied support files, and provenance."
version: "0.0.1"
category: "frontend"
license: "Unknown"
tags:
  - "frontend-design-v2"
  - "frontend-design"
  - "design-systems"
  - "accessibility"
  - "responsive-design"
  - "performance"
  - "ui-implementation"
  - "interaction-design"
  - "omni-enhanced"
complexity: "intermediate"
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
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "frontend-design-v2"
family_name: "Frontend Design (Distinctive, Production-Grade)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/frontend-design-v2"
upstream_skill: "skills/frontend-design-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "frontend-design-v2"
---

# Frontend Design (Distinctive, Production-Grade)

## Overview

Use this skill when the task requires both design judgment and implementation discipline. The goal is not to generate a generic layout, but to produce a distinctive interface that is semantically sound, accessible, responsive, maintainable, and ready for real review or handoff.

Preserve the upstream identity and provenance. Keep copied support files intact unless the task explicitly requires changes, and do not hide the source workflow when handing work back.

## When to Use

Use this skill when the user needs to:

- design or refine a UI with a clear visual point of view
- implement production-grade frontend components, screens, or flows
- replace generic or template-like styling with intentional systemized design
- improve accessibility, semantics, interaction quality, or responsive behavior
- encode visual decisions into reusable tokens, layers, and component rules
- prepare frontend work for review, merge, or handoff with explicit quality gates

Do **not** use this skill as the primary workflow when the task is mainly:

- backend-only work
- copywriting without UI implementation
- logo or brand exploration with no frontend output
- quick throwaway mockups where production constraints do not matter

## Workflow

1. **Clarify the product and interaction constraints**
   - Identify the page, component, or flow being changed.
   - Capture target users, key actions, states, and device contexts.
   - Note hard constraints: framework, design system, browser support, performance budget, and existing tokens.
   - Ask what must stay stable versus what can change visually.

2. **Audit the current interface before redesigning**
   - Inspect structure, semantics, and existing components.
   - Find generic patterns, duplicated styles, inaccessible controls, layout fragility, and performance risks.
   - Record what already works so redesign does not erase useful behavior.

3. **Define the design direction in system terms**
   - Describe the intended aesthetic using concrete implementation levers: spacing rhythm, type scale, density, contrast model, border treatment, motion style, elevation, and color roles.
   - Convert one-off visual ideas into reusable tokens or component rules.
   - Prefer a small number of strong, repeatable decisions over decorative noise.

4. **Build semantic structure before ornament**
   - Start with correct landmarks, headings, lists, buttons, links, forms, and status messaging.
   - Ensure the interface still makes sense with styles reduced.
   - Use native elements first; add ARIA only where native HTML cannot express the needed behavior.

5. **Implement responsive layout with modern CSS primitives**
   - Use layout systems that adapt by container or content, not only by viewport.
   - Prefer flex, grid, intrinsic sizing, `clamp()`, and container queries where supported by project constraints.
   - Use cascade layers and predictable selectors to avoid style collisions.

6. **Design interactions and states explicitly**
   - Implement hover, focus, active, disabled, loading, empty, error, and success states.
   - Make focus appearance obvious and keyboard traversal coherent.
   - Keep motion subtle, purposeful, and respectful of reduced-motion preferences.

7. **Run production gates before handoff**
   - Check keyboard access, visible focus, contrast, target size, responsive breakpoints or containers, content reflow, and state coverage.
   - Review likely performance regressions, especially LCP and CLS risks from fonts, images, and late-loading UI.
   - Confirm the final output preserves provenance and any upstream support files required by the source workflow.

## Output Expectations

When executing this skill, the final work should usually include:

- the implemented UI change or component code
- a brief explanation of the design direction
- any new or modified tokens, variables, or component conventions
- accessibility notes for semantics, keyboard behavior, and state handling
- responsive notes for layout adaptation
- known tradeoffs, constraints, or follow-up items

## Best Practices

Do:

- make the structure correct before styling it
- use native controls for buttons, links, inputs, dialogs, and disclosure patterns whenever possible
- encode repeated visual choices as tokens, utilities, or component-level rules
- use container-aware layout logic when components live in multiple contexts
- verify empty, loading, error, and disabled states instead of styling only the default happy path
- keep distinctive design grounded in hierarchy, rhythm, contrast, and interaction clarity
- check whether fonts, media, shadows, animation, or script-driven layout changes could hurt performance

Do not:

- fake buttons or links with non-semantic elements unless there is a justified accessibility-safe pattern
- rely on placeholder text, color alone, or motion alone to communicate critical state
- add visual complexity that introduces layout shift, weakens readability, or hides task priority
- hard-code one-off spacing, colors, or breakpoints when the decision should become a reusable token
- treat accessibility as a post-processing step after the interface is already shaped
- assume viewport breakpoints alone are enough for reusable components

## Troubleshooting

**Symptoms:** The UI looks polished visually but keyboard navigation fails or focus disappears.

**Solution:** Replace fake controls with native elements where possible, restore visible focus styles, verify tab order, and ensure interactive elements are reachable and operable without a pointer.

**Symptoms:** The design feels distinctive in one screen size but breaks when embedded in a narrower panel or card.

**Solution:** Rework the component around intrinsic sizing, flex/grid constraints, and container-based behavior. Remove assumptions tied only to full-page viewport width.

**Symptoms:** Styles become hard to override or small changes trigger regressions elsewhere.

**Solution:** Move repeated choices into tokens, reduce selector specificity, and separate reset/base/component/utility concerns with cascade layers or equivalent project structure.

**Symptoms:** Rich visuals cause cumulative layout shift or slow first render.

**Solution:** Reserve space for media, avoid late dimension changes, review font loading strategy, reduce unnecessary animation on load, and inspect whether decorative assets are affecting LCP.

**Symptoms:** The interface passes visually but still feels generic.

**Solution:** Tighten a few core system choices instead of adding more decoration: type hierarchy, spacing rhythm, corner and border language, contrast strategy, motion behavior, and component density.

## Examples

### Example 1: Replace a generic card grid with a reusable, production-ready system

**Input**

```text
Create a pricing section with three cards. Make it modern.
```

**Better execution**

```text
Design and implement a pricing section with three plans using semantic headings, list-based feature groups, a clear primary plan, visible keyboard focus, and responsive behavior that works both full-width and inside a narrower marketing shell. Define spacing, radius, border, and color decisions as reusable tokens instead of one-off values. Include hover, focus, disabled, and reduced-motion-safe interaction states.
```

**Expected outcome**

- one plan has clear emphasis without breaking contrast or readability
- cards stack or reflow cleanly in narrow containers
- CTA controls are real buttons or links with visible focus
- spacing and color values are reusable in nearby sections

### Example 2: Improve an existing component instead of repainting it

**Input**

```text
Make this dashboard sidebar look less boring.
```

**Better execution**

```text
Audit the existing dashboard sidebar and improve it without changing information architecture. Preserve working navigation behavior, then refine hierarchy, spacing rhythm, icon alignment, active-state treatment, and focus appearance. Remove generic framework defaults, convert repeated style decisions into tokens, and verify the sidebar remains usable at narrower container widths.
```

**Expected outcome**

- navigation remains structurally stable
- active, hover, and focus states are differentiated clearly
- the sidebar looks intentional rather than template-derived
- no regressions in keyboard use or responsive containment

Open `examples/worked-example.md` for a concrete before/after implementation pattern.

## Additional Resources

- `references/domain-notes.md` - Open this during implementation or review for compact production guidance on semantics, accessibility, responsive CSS, tokens, and performance checks.
- `examples/worked-example.md` - Open this when you want a concrete transformation from a generic UI request into a production-grade implementation plan and acceptance criteria.

## Related Skills

No local related skills were provided in the source context. Do not invent substitutes.
