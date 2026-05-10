---
name: "frontend-design-v3"
description: "Use this skill when the user needs to design, refine, or implement a distinctive production-ready frontend: define visual direction, build or restyle components and pages, improve responsive behavior, strengthen accessibility, and translate design intent into maintainable code without defaulting to generic AI-generated UI patterns."
version: "0.0.1"
category: "frontend"
tags:
  - "frontend-design-v3"
  - "frontend-design"
  - "design-systems"
  - "ui-implementation"
  - "accessibility"
  - "responsive-design"
  - "performance"
  - "css-architecture"
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
license: "Unknown"
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "frontend-design-v3"
family_name: "Frontend Design (Distinctive, Production-Grade)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/frontend-design-v3"
upstream_skill: "skills/frontend-design-v3"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "frontend-design-v3"
---

# Frontend Design (Distinctive, Production-Grade)

## Overview

This skill preserves the upstream `frontend-design` identity while making it operational for production work.

Use it when the task is not just to "make a UI," but to create a frontend with:
- a clear visual point of view
- semantic structure that matches the content and interaction model
- responsive behavior that works at the component level, not only at viewport breakpoints
- accessibility that survives keyboard, zoom, reduced-motion, and touch usage
- CSS architecture that stays maintainable as the interface grows
- performance and responsiveness that remain acceptable in real product conditions

This is a designer-engineer workflow. Do not generate decorative layouts first and retrofit usability later.

## When to Use

Use this skill when the user asks for any of the following:
- design or redesign a page, flow, dashboard, landing page, or application shell
- implement a UI from rough direction, screenshots, wireframes, or product requirements
- make a frontend feel distinctive instead of generic or framework-default
- improve an existing interface without breaking production behavior
- fix weak responsiveness, poor hierarchy, confusing states, or inconsistent component styling
- strengthen accessibility, semantics, keyboard support, motion behavior, or touch usability
- convert design intent into maintainable HTML, CSS, and component structure

Do **not** use this skill as the primary workflow when the task is mainly:
- backend logic, APIs, authentication internals, or database design
- brand strategy without implementation expectations
- one-off image generation or purely visual mockups with no production path
- generic refactoring unrelated to UI behavior or design quality

## Workflow

1. **Clarify the interface goal**
   - Identify the user task, primary content, success state, and constraints.
   - Determine whether the work is new UI, redesign, polish, or remediation.
   - Capture brand signals: tone, density, contrast, shape language, motion style, and what should feel distinctive.

2. **Inspect the current system before changing it**
   - Review existing layout structure, components, tokens, CSS organization, and interaction states.
   - Look for hidden constraints: framework primitives, design system rules, SSR/CSR boundaries, existing breakpoints, dialog patterns, and form handling.
   - If working from screenshots or vague requests, infer the minimum stable information before coding.

3. **Define the design direction in implementation terms**
   - Choose the intended hierarchy, spacing rhythm, type scale, surface treatment, and interaction tone.
   - Decide what should remain restrained so the distinctive elements have contrast.
   - Convert abstract design language into concrete component decisions: card structure, navigation pattern, empty states, forms, tables, overlays, and feedback states.

4. **Build semantic structure first**
   - Start with HTML or component structure that expresses landmarks, headings, lists, buttons, links, forms, tables, and dialogs correctly.
   - Prefer native elements before ARIA-heavy custom widgets.
   - Ensure the tab order, labels, headings, and reading order make sense before visual styling.

5. **Make responsiveness component-first**
   - Favor intrinsic sizing, flexible layouts, and container-query thinking over viewport-only breakpoint stacking.
   - Check what happens when components live in narrow sidebars, wide content columns, dense dashboards, and zoomed layouts.
   - Treat text wrapping, truncation, target sizing, and control grouping as first-class design decisions.

6. **Apply CSS architecture deliberately**
   - Use tokens, variables, and predictable naming or layering instead of ad hoc overrides.
   - Use cascade layers when they reduce specificity conflicts between reset, tokens, base, components, utilities, and overrides.
   - Avoid brittle selectors, `!important` escalation, and one-off styles that encode accidental layout dependencies.

7. **Design interaction states and accessibility together**
   - Define hover, focus, active, disabled, loading, error, success, and empty states.
   - Keep visible focus appearance, keyboard reachability, and reduced-motion handling non-negotiable.
   - Ensure dialogs, disclosures, menus, and forms have predictable behavior and semantics.

8. **Treat performance as a design acceptance criterion**
   - Avoid visual decisions that create heavy runtime cost without product value.
   - Watch for large DOMs, expensive shadows or filters, layout thrash, unnecessary observers, and animation tied to expensive properties.
   - Consider containment, content-visibility, asset sizing, and rendering cost where the UI is dense or repeated.

9. **Validate in realistic conditions**
   - Check keyboard use, zoom, narrow containers, coarse pointer use, reduced motion, and content extremes.
   - Verify the interface still communicates clearly with long labels, empty data, errors, and loading states.
   - If modifying existing code, confirm you did not regress semantics or interaction behavior.

10. **Deliver the result with rationale**
   - Explain the visual direction, structural decisions, accessibility choices, responsiveness approach, and tradeoffs.
   - Call out any assumptions, unresolved risks, or follow-up checks.
   - If the task was partial, state what remains before the UI should be considered production-ready.

## Output Expectations

A strong result usually includes:
- the implemented or proposed UI changes
- a short explanation of the design direction
- semantic and accessibility notes for key components
- responsiveness notes for major layout transitions or container conditions
- any performance-sensitive decisions that influenced the design
- concrete follow-up items when information is missing

## Best Practices

### Do
- start from user task, hierarchy, and interaction model before styling details
- preserve a clear aesthetic opinion, but express it through reusable system choices
- use semantic HTML first; treat ARIA as support, not a substitute for native structure
- prefer component resilience over pixel-perfect screenshots at one viewport size
- make focus appearance obvious and intentional, not an afterthought
- test states with real or realistic content lengths
- use CSS variables, tokens, and layers to reduce override debt
- make motion opt-in enough that reduced-motion users still get a coherent experience
- document where the design intentionally breaks from framework defaults

### Do Not
- generate visually busy interfaces with no hierarchy discipline
- hide interaction affordances behind hover-only behavior
- remove outlines without providing a stronger focus treatment
- rely only on viewport breakpoints when components can appear in multiple container widths
- build custom buttons, links, selects, dialogs, or menus when native elements solve the problem
- use ARIA to patch incorrect structure that should be fixed in markup
- accept inaccessible target sizes, low-contrast focus states, or motion-heavy transitions as polish
- solve CSS conflicts primarily with specificity escalation or `!important`
- ignore responsiveness and input latency until after the visual direction is finalized

## Troubleshooting

**Symptoms:** The UI looks polished at one screen size but breaks when the same component is placed in a narrower column or sidebar.

**Solution:** Rework the component using intrinsic layout rules and container-aware behavior. Reduce dependence on page-level breakpoints. Verify wrapping, control grouping, and media sizing inside the component itself.

**Symptoms:** The design feels generic even though colors and spacing changed.

**Solution:** Adjust structural signals, not just surface styling. Revisit type scale, spacing rhythm, edge treatment, density, contrast strategy, and interaction tone. A distinctive frontend usually comes from consistent system choices, not isolated decoration.

**Symptoms:** Keyboard users can reach controls, but focus is hard to see or disappears on branded surfaces.

**Solution:** Add a visible, high-contrast focus treatment that survives all themes and states. Test with keyboard only across links, buttons, form controls, dialogs, and composite components.

**Symptoms:** A custom widget needs many ARIA attributes and still behaves inconsistently.

**Solution:** Step back and ask whether a native element or simpler pattern can replace it. If not, implement the full keyboard and state model intentionally instead of partial ARIA decoration.

**Symptoms:** CSS changes keep causing regressions or require repeated overrides.

**Solution:** Introduce clearer layering and ownership boundaries. Separate reset/base/component/utility/override concerns, reduce selector brittleness, and move repeated values into tokens or variables.

**Symptoms:** The interface becomes sluggish after adding visual richness or dense repeated cards.

**Solution:** Audit expensive rendering decisions. Simplify deep shadows, large blur effects, continuous animations, and unnecessary DOM depth. Consider containment or content-visibility where repeated offscreen content is involved.

**Symptoms:** A modal, menu, or disclosure looks correct but behaves unpredictably with keyboard or screen readers.

**Solution:** Re-check semantics, focus management, labeling, and escape/close behavior. Use a native or well-understood pattern before inventing interaction rules.

## Examples

### Example 1: Redesign request with implementation direction

**Input**
```text
Make this analytics dashboard feel premium and less template-like. Keep it production-ready and accessible.
```

**Expected approach**
```text
- Identify what currently makes the dashboard feel generic: flat card repetition, weak type hierarchy, uniform spacing, and framework-default controls.
- Propose a design direction: sharper data emphasis, stronger typography contrast, restrained accent usage, and more deliberate panel grouping.
- Preserve semantic structure for navigation, tables, filters, and chart regions.
- Improve responsiveness by letting summary cards and filter groups adapt to container width rather than only viewport breakpoints.
- Define visible focus styles, larger click targets, and reduced-motion-safe transitions.
- Explain CSS architecture changes needed to avoid override sprawl.
```

### Example 2: Existing component polish without breaking semantics

**Input**
```text
Restyle this settings form so it feels more modern, but do not sacrifice usability.
```

**Expected approach**
```text
- Keep labels, descriptions, validation, and field grouping explicit.
- Improve spacing rhythm, control sizing, and section hierarchy.
- Ensure form actions remain obvious and keyboard reachable.
- Add strong focus treatment and error/success states.
- Check long labels, helper text, and mobile stacking behavior before finalizing the visual treatment.
```

For a worked before/after style execution example, open [`examples/worked-example.md`](examples/worked-example.md).

## Additional Resources

- [`references/domain-notes.md`](references/domain-notes.md) — Open this during implementation when you need compact decision rules for container queries, cascade layers, semantic-first accessibility, focus appearance, target sizing, reduced motion, dialog behavior, and performance-sensitive UI choices.
- [`examples/worked-example.md`](examples/worked-example.md) — Open this when you want a concrete prompt-to-output pattern showing how to transform a generic request into a production-grade frontend design response.

## Related Skills

No verified related local skills were provided in the source context.
