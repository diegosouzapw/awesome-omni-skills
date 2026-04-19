---
name: "radix-ui-design-system"
description: "Radix UI Design System workflow skill. Use this skill when the user needs Build accessible design systems with Radix UI primitives. Headless component customization, theming strategies, and compound component patterns for production-grade UI libraries and the operator should preserve semantics, verify interactive behavior in a real browser, and keep provenance clear before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "radix-ui-design-system"
  - "build"
  - "accessible"
  - "design"
  - "systems"
  - "radix"
  - "primitives"
  - "headless"
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
family_id: "radix-ui-design-system"
family_name: "Radix UI Design System"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/radix-ui-design-system"
upstream_skill: "skills/radix-ui-design-system"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "radix-ui-design-system"
---

# Radix UI Design System

## Overview

Use this skill when the task is to build, harden, or review an accessible design system built on Radix UI Primitives.

The core operating model is:

1. start from the primitive contract, not a visual mock alone
2. preserve semantics and interaction behavior while customizing appearance
3. treat `asChild`, prop spreading, and ref forwarding as high-risk composition points
4. validate the result in a real browser before calling the component production-ready

Radix helps with accessibility and composability, but it does not make heavy customization automatically safe. If a team replaces semantic elements, suppresses focus styles, breaks ref forwarding, or tests only with brittle selectors, the result can still regress.

This skill keeps the design-system focus of the upstream material while adding a browser-verification layer for the failures that usually appear only during real interaction: keyboard navigation, focus movement, dismissable layers, portals, collision handling, and SSR hydration behavior.

## When to Use This Skill

Use this skill when the user needs to:

- build a reusable component library on top of Radix Primitives
- wrap Radix primitives in a stable internal design-system API
- customize headless components without losing keyboard or screen-reader behavior
- design theming and variant strategies around Radix state attributes and tokens
- debug broken overlays, focus traps, custom triggers, or portal layering
- review whether a Radix-based component is safe for production use
- verify interactive behavior in a browser with role/name-based assertions

Do **not** use this skill as the main router when the task is primarily:

- static presentational styling with no interactive primitive behavior
- a non-Radix widget implementation from first principles
- broad visual branding work with no component API or accessibility scope
- a generic frontend test setup unrelated to Radix interaction patterns

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Choosing a primitive or wrapper API | `## Workflow` | Prevents starting from visual styling before the primitive anatomy and interaction contract are clear |
| Custom trigger or wrapper uses `asChild` | `## Composition Rules` | Missing prop spread or ref forwarding is a common cause of silent Radix breakage |
| Need a real interaction check | `examples/browser-flow-example.md` | Gives a concrete browser flow for keyboard, focus, dismissal, and portal validation |
| Need quick browser-verification guidance by primitive family | `references/browser-automation-notes.md` | Lists Radix-specific checks, common state attributes, and reliable locator patterns |
| Unsure whether browser validation is runnable in the current workspace | `scripts/validate-playwright-env.py` | Reports whether Playwright and at least one actionable target are available without changing the environment |
| SSR or hydration-sensitive app | `## SSR and Hydration` | Radix overlays, labels, ids, and portal timing should be checked against built output, not only dev mode |
| Review before merge | `## Accessibility Verification` and `## Troubleshooting` | Ensures the component is validated by behavior, not only by code inspection |

## Workflow

1. **Clarify the component boundary**
   - Identify the primitive family involved: dialog, dropdown menu, popover, tabs, tooltip, select, checkbox, etc.
   - Define whether the deliverable is:
     - a thin wrapper around primitives
     - a higher-level design-system component with opinionated API
     - a migration from an existing styled component library
   - Decide early whether the component will support controlled, uncontrolled, or both state models.

2. **Map product requirements to Radix anatomy**
   - Identify the required parts such as trigger, content, overlay, item, title, description, close action, or portal.
   - Verify that the intended UX matches the primitive's interaction model instead of forcing a different widget into the wrong primitive.
   - Keep public API decisions stable even if internal styling or tokens may evolve later.

3. **Choose a styling and theming strategy**
   - Prefer styling through documented Radix state attributes such as `data-state`, `data-side`, `data-disabled`, and similar primitive-specific attributes.
   - Use design tokens or CSS variables for colors, spacing, radius, motion, and focus treatment.
   - Treat Radix Themes as optional. Use it only when the project intentionally wants that dependency; do not assume it is required to use Primitives well.

4. **Implement composition safely**
   - If using `asChild`, make sure the child component spreads incoming props to the underlying DOM element.
   - Forward refs anywhere Radix needs measurement, focus management, or trigger/content coordination.
   - Preserve native semantics where possible. If a trigger behaves like a button, prefer an actual `<button>` unless there is a strong reason not to.

5. **Verify interaction behavior in a real browser**
   - Use role/name locators rather than CSS classes or exact DOM structure.
   - Validate keyboard activation, focus movement, open and close behavior, dismissal paths, visible state changes, and focus return.
   - For overlays and positioned content, verify portal rendering, clipping, z-index, and collision behavior in an actual browser viewport.
   - Use `examples/browser-flow-example.md` as the starting point for a concrete validation flow.

6. **Check accessibility and failure modes**
   - Confirm that accessible names, labels, and descriptions still resolve after customization.
   - Confirm that disabled items are non-interactive and visually represented as disabled without misleading focus behavior.
   - Confirm that focus indicators remain visible and that keyboard-only users can complete the full task path.

7. **Check SSR or hydration-sensitive paths**
   - If the app server-renders, validate the built output rather than relying on dev mode alone.
   - Re-check trigger/content associations, focus behavior after mount, portal timing, and initial open/closed state.
   - Watch for bugs that only appear after hydration or in production builds.

8. **Document merge readiness**
   - Record which interaction flows were verified.
   - Record any deliberate deviations from native semantics.
   - Record whether the component remains a primitive wrapper or exposes a broader design-system abstraction.

## Composition Rules

Treat these as operating rules, not optional style advice.

### 1. `asChild` is powerful and easy to break

When a Radix part is rendered with `asChild`, the child must cooperate with Radix behavior.

Minimum requirements:

- spread received props onto the underlying DOM element
- forward refs when the primitive depends on focus or measurement
- preserve semantics appropriate to the interaction model
- do not swallow event handlers Radix needs for state changes or dismissal

High-risk signs:

- the trigger renders visually but does not open reliably
- keyboard activation works on click but not on Enter or Space
- focus does not move into content or return to the trigger on close
- accessible name or role becomes incorrect after wrapping

### 2. Prefer semantic elements over clever wrappers

If a trigger acts like a button, prefer a real button. Replacing a semantic element with a generic element plus manual ARIA is more fragile and easier to regress.

### 3. Keep wrapper APIs narrow

A design-system wrapper should expose the project's stable API, not every primitive implementation detail by default. Overexposing internals makes later refactors harder and increases misuse.

### 4. Keep identity stable in dynamic lists

If a component instance lives in a list or repeated layout, keep keys stable. Identity churn can break focus retention, open-state behavior, or controlled/uncontrolled transitions.

## Accessibility Verification

Validate behavior, not only types and screenshots.

### Required browser checks

For any interactive Radix-based component under review, verify at least:

- **Role and accessible name**: trigger and interactive items can be located by role and name
- **Keyboard activation**: Enter and Space behave correctly for triggers that should support them
- **Focus movement**: opening the component moves focus appropriately when expected
- **Dismissal**: Escape and outside click behave correctly for the primitive family
- **Focus return**: closing an overlay returns focus to the trigger or a deliberate next target
- **Disabled behavior**: disabled items are not accidentally clickable or tabbable beyond the primitive contract
- **Visible state**: open/closed and selected/checked states are reflected through user-visible behavior and documented state attributes

### Locator guidance

Prefer:

- `getByRole(...)`
- `getByLabel(...)`
- `getByText(...)` only when text is the actual user-facing contract

Avoid making correctness depend on:

- CSS utility classes
- exact DOM nesting
- generated ids not guaranteed by the public contract
- implementation-only wrappers introduced by styling libraries

### State styling guidance

Use documented Radix data attributes as the styling contract wherever possible. Examples include state, side, orientation, highlighted, disabled, or checked attributes depending on the primitive. Style against those attributes; do not rely on brittle descendant selectors that assume a fixed DOM structure.

## SSR and Hydration

If the app is server-rendered, treat browser verification against production-like output as mandatory for overlays and labeled controls.

Check for:

- trigger and content relationships remaining correct after hydration
- labels and descriptions resolving as expected in the hydrated tree
- dialogs, menus, and popovers opening consistently after first paint
- focus trap or focus return behavior remaining correct in the built app
- portals rendering at the intended layer without clipping or timing issues

Practical rule:

- if the component is only tested in local dev mode, SSR validation is incomplete
- run checks against the built application or the closest production-like environment available

## Troubleshooting

### Custom trigger renders but does not open or behaves inconsistently

Likely causes:

- child component under `asChild` does not spread props
- ref is not forwarded
- semantic element was replaced with a less suitable element
- wrapper swallows pointer or keyboard handlers

What to check:

- inspect the trigger wrapper for prop pass-through
- verify `ref` reaches the underlying DOM element
- test Enter, Space, click, Escape, and focus return in a real browser

### Focus does not move correctly or does not return on close

Likely causes:

- broken ref forwarding
- custom close path bypasses primitive expectations
- focus styling was removed and the issue is mistaken for missing focus
- portal layering or unmount timing interferes with the expected return target

What to check:

- visible focus indicator before and after open/close
- active element transitions during keyboard interaction
- whether a custom close button or outside-dismiss override changed the normal flow

### Overlay content appears clipped, hidden, or behind layout chrome

Likely causes:

- portal container or stacking context issue
- ancestor overflow clipping when content is not portaled as expected
- z-index policy conflicts in the design system
- collision handling or side placement not tested in realistic viewport sizes

What to check:

- whether content renders in a portal
- whether it remains visible near viewport edges
- whether keyboard navigation still works when placement changes
- whether visible content and hit targets stay aligned

### Component works in dev but breaks after hydration or only in production

Likely causes:

- SSR/hydration mismatch
- first-render timing differences for portal content
- generated relationships or labels not matching expectations after hydration
- custom wrappers reading browser-only state too early

What to check:

- compare dev server behavior with built output
- re-run keyboard and label checks after hydration completes
- verify initial open state, title/description associations, and focus management in production-like output

### Accessibility regressed during visual customization

Likely causes:

- focus ring removed without a replacement
- accessible label hidden or detached from the trigger/content pair
- semantic trigger replaced with a generic element and incomplete ARIA repair
- test coverage checks visuals but not keyboard or announcement behavior

What to check:

- role/name locator still works
- keyboard-only user can complete the main task path
- visible focus remains clear on all interactive states
- screen-reader labels and descriptions still resolve as intended

## Additional Resources

- `references/browser-automation-notes.md` - Radix-specific browser checks, state attributes, locator guidance, and recurring failure modes
- `examples/browser-flow-example.md` - concrete browser verification flow for a Radix dropdown menu with portal and keyboard checks
- `scripts/validate-playwright-env.py` - non-destructive environment check for Playwright and runnable browser targets

## Related Skills

Consider handing off when the task moves primarily into:

- framework-specific SSR debugging beyond component scope
- broad visual regression infrastructure work unrelated to Radix semantics
- generic accessibility audits for large applications rather than component-library development

## Source Notes

This skill preserves the upstream intent: building production-ready, accessible design systems with Radix UI primitives. The enhanced version adds stricter composition rules, stronger browser verification guidance, and clearer SSR and troubleshooting paths so operators can validate real behavior rather than relying on assumptions about headless primitives alone.
