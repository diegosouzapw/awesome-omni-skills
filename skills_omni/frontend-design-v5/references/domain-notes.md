# Frontend Design Domain Notes

Use this file as a compact decision aid while executing `frontend-design-v5`.

## 1) Semantic structure first

Choose the simplest native structure that matches the job:

| Need | Prefer | Notes |
| --- | --- | --- |
| Primary page content | `main` | One primary `main` landmark per page view |
| Section with heading | `section` + heading | Use when the content needs a named subsection |
| Site or in-page navigation | `nav` | Label multiple nav regions clearly |
| Actions | `button` | Use `a` only for navigation to a URL |
| Data entry | `form`, `label`, native inputs | Keep labels programmatically associated |
| Expand/collapse disclosure | native button + controlled region | Do not use plain text or icons as the only trigger |
| Modal interaction | `dialog` pattern or equivalent accessible dialog behavior | Must handle focus, close controls, and background inertness appropriately |
| Lists of peer items | `ul` / `ol` / `dl` as appropriate | Avoid `div` grids when the content is conceptually a list |

### Native-first rule

Prefer native behavior before custom ARIA-heavy recreation. Add ARIA to clarify or extend semantics, not to patch avoidable structural mistakes.

## 2) State coverage checklist

Before calling a frontend component complete, verify:

- default state
- hover state where hover exists
- visible focus state
- active/pressed state where relevant
- selected state where relevant
- disabled state
- loading state
- success/confirmation state if applicable
- empty state
- error state
- reduced-motion path
- long-text and short-text behavior

If a state is required but visually undefined, define it before shipping.

## 3) Container queries vs. media queries

Use this quick rule:

| Situation | Prefer | Why |
| --- | --- | --- |
| Component changes based on its own rendered width | Container query | Makes the component reusable in multiple layouts |
| Whole-page layout changes based on viewport/device width | Media query | Appropriate for global layout shifts |
| A card must adapt inside different parent shells | Container query | Prevents page-level assumptions from leaking into the component |
| Typography or spacing system changes across the entire app shell | Media query, sometimes tokens | Easier to coordinate globally |

### Practical guidance

- If a component breaks when dropped into a sidebar, modal, or dashboard column, that is usually a container problem.
- If the entire navigation model changes between compact and wide application shells, that is usually a viewport problem.
- Do not stack large numbers of overlapping breakpoints when two or three structural shifts will do.

## 4) Cascade layer ordering

A safe default mental model:

1. tokens / theme variables
2. reset or normalize
3. base element styles
4. layout primitives
5. components
6. utilities / overrides

### Use layers to reduce fights, not to hide them

- Keep selector specificity low.
- Avoid escalating with repeated nesting or `!important` unless containment is impossible.
- If utilities are overriding component intent unpredictably, fix the layer strategy before adding more overrides.

## 5) Accessibility thresholds and guardrails

### Contrast

- Normal text should meet at least **4.5:1** contrast.
- Large text can use **3:1** where allowed.
- Non-text UI indicators still need sufficient visual distinction.
- Do not rely on color alone for error, selected, or success states.

### Keyboard behavior

- Every interactive element must be reachable and usable from the keyboard.
- Focus order should match reading/task order.
- Focus must remain visible.
- Custom widgets must implement the expected arrow-key, Escape, Enter, and Space behaviors for their pattern.

### Motion safety

- Respect `prefers-reduced-motion`.
- Essential understanding must not depend on animation.
- Use motion to explain changes in state or spatial continuity, not as decoration that delays use.

### Source order

- Keep DOM order meaningful for assistive technology and narrow layouts.
- Avoid visually reordering core content in ways that break reading comprehension.

## 6) Progressive enhancement and feature adoption

Use a progressive-enhancement stance:

- Core content and actions should work without advanced effects.
- Newer visual features should improve the experience, not gate it.
- Treat flashy transitions or cutting-edge effects as optional unless the project explicitly accepts narrower support.
- Check current platform maturity before making a new CSS or platform feature a dependency.

### Good candidates for enhancement-only use

- advanced view transitions
- decorative blend/mask effects
- complex scroll-linked motion
- non-essential backdrop-heavy presentation layers

## 7) Performance guardrails

### Protect layout stability

- Reserve space for images, embeds, async panels, and skeleton replacements.
- Avoid injecting content above the user's current reading position unless necessary.

### Protect interaction quality

- Keep event handlers lean.
- Avoid expensive visual effects on large scrolling surfaces.
- Prefer simpler DOM and state transitions over deeply nested wrappers plus layered effects.

### Image and asset handling

- Use the right image dimensions and formats for the display need.
- Do not load oversized hero assets just to scale them down in CSS.
- Defer non-critical media when possible.

## 8) Quick review pass before handoff

Ask these yes/no questions:

- Does the structure still make sense with CSS disabled?
- Can I use every control with keyboard only?
- Are empty, loading, and error states designed, not implied?
- Does the component still work in a narrower parent than the happy-path mockup?
- Is reduced motion handled without breaking comprehension?
- Are contrast and focus states visible enough to survive real use?
- Is any visual flourish introducing measurable fragility or performance risk?

If any answer is "no" or "not sure," the implementation is not production-ready yet.
