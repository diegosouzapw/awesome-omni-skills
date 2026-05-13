# Frontend Design Domain Notes

Use this file as a compact decision aid while applying `frontend-design-v3`.

## 1) Responsiveness: Prefer component rules before page breakpoints

### Use container queries when
- the same component can appear in different layout regions
- a sidebar, card rail, drawer, modal, or dashboard panel changes available width independently of the viewport
- the component should adapt based on its own space, not the whole page

### Prefer viewport breakpoints when
- the change is truly page-level: shell navigation, global columns, or major layout mode changes

### Quick checks
- Does the component still work in a narrow column?
- Does text wrap without destroying actions?
- Do controls remain tappable and legible at zoomed sizes?

## 2) CSS architecture: Use layers to reduce override debt

A safe mental model:
- `reset`
- `tokens`
- `base`
- `components`
- `utilities`
- `overrides`

Use cascade layers when you need predictable precedence across these concerns. Avoid using them as extra complexity for tiny files with no ownership problem.

### Warning signs
- repeated `!important`
- selectors that keep getting longer
- component styles breaking when utilities are added
- theme or variant changes requiring file-order guessing

## 3) Semantics first: ARIA is support, not a repair kit

Prefer native elements whenever they match the job:
- `button` for actions
- `a` for navigation
- `dialog` or a proven dialog pattern for modal behavior
- proper heading levels for hierarchy
- `label` + form control association for forms
- table markup for actual tabular data

### ARIA smell test
If a component needs many ARIA attributes just to act like a basic control, the structure may be wrong. Fix markup before layering ARIA onto it.

## 4) Accessibility gates that should block sign-off

Do not treat these as optional polish:
- visible keyboard focus on all interactive elements
- keyboard reachability and logical order
- adequate touch/click target sizing
- reduced-motion-safe behavior
- labels, descriptions, and errors that make sense without visual inference
- state changes that remain understandable without hover

## 5) Focus appearance

A good focus style should:
- be clearly visible on light, dark, tinted, and image-backed surfaces
- not rely on subtle color shift alone
- survive component states like error, selected, or disabled-adjacent presentation

If brand styling hides the default outline, replace it with something stronger, not weaker.

## 6) Target sizing and dense interfaces

In dense settings panels, dashboards, or tables:
- keep primary actions easy to hit
- avoid tiny icon-only controls without strong affordance
- ensure spacing does not create accidental taps
- check coarse pointer scenarios, not just desktop mouse use

## 7) Motion and transitions

Use motion to support hierarchy or continuity, not to decorate everything.

Reduce or remove:
- large parallax effects
- constant motion in dashboards
- long easing chains on common interactions
- animations tied to expensive layout or paint work

When reduced motion is requested, the UI should still feel intentional, not broken or abrupt.

## 8) Dialogs, menus, and disclosures

Before custom-building interactive overlays, confirm:
- focus enters and exits predictably
- escape and close behavior are consistent
- trigger and content are correctly associated
- labels and titles are explicit
- hidden content is not still exposed in confusing ways

If behavior is fragile, simplify the pattern before restyling it.

## 9) Performance-sensitive design choices

Design can create runtime cost. Re-check decisions involving:
- very large blurred shadows
- stacked filters and backdrops
- heavy glassmorphism on repeated elements
- excessive DOM depth for decorative wrappers
- animations of layout-affecting properties
- large below-the-fold content rendered eagerly

### Practical interventions
- simplify expensive effects on repeated UI
- use containment where isolation helps
- use `content-visibility` carefully for large offscreen sections
- size media intentionally
- avoid turning every hover or scroll behavior into a JS-driven animation

## 10) Quick review checklist

Before handoff or sign-off, ask:
- Is the visual direction distinctive for a reason, not just different?
- Is the content hierarchy obvious within 3 seconds?
- Do semantics match the UI structure?
- Does the component work in multiple container widths?
- Is focus visible everywhere?
- Are hover-only cues backed by persistent affordances?
- Would reduced motion users still get a coherent experience?
- Did styling choices introduce likely responsiveness or INP problems?
