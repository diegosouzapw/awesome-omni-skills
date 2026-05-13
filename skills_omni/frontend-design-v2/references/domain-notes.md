# Frontend Design Domain Notes

Use this file during implementation or review when the main skill needs more concrete production rules.

## Semantics First

- Use native HTML elements for the job before reaching for ARIA: `button`, `a`, `nav`, `main`, `header`, `footer`, `form`, `label`, `table`, and heading levels in order.
- A visually custom control should still preserve native behavior whenever possible.
- Prefer real lists for repeated navigation items, features, steps, or cards when the content is conceptually a list.
- Keep heading hierarchy meaningful. Skipping levels is less important than preserving a coherent document outline, but avoid using headings purely for visual size.

Primary sources:
- MDN, HTML basics and semantic structure: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content
- MDN, HTML elements reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

## ARIA Boundary

- Do not replace native semantics with ARIA when a native element already provides the role and behavior.
- Use ARIA to supplement custom widgets only when native HTML cannot express the required interaction.
- If a custom widget is necessary, implement keyboard behavior, state announcement, naming, and focus management as part of the component definition, not as a later patch.

Primary sources:
- MDN, ARIA overview: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- WAI-ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/

## Responsive and Maintainable CSS

- Prefer flexible layout primitives: Grid, Flexbox, intrinsic sizing, `minmax()`, `clamp()`, and logical properties.
- Use container queries for component-level adaptation when components appear in different shells or columns.
- Use cascade layers to separate reset/base/components/utilities and reduce specificity fights.
- Avoid hard-coding many viewport breakpoints when the component can adapt based on available inline size.

Primary sources:
- MDN, CSS container queries: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries
- MDN, CSS cascade layers: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers
- MDN, `clamp()`: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

## Tokens and Theming

- Promote repeated decisions into tokens: color roles, spacing scale, radius, border widths, shadows, motion durations, type sizes, and breakpoints or container thresholds.
- Use semantic token names when possible (`--color-surface-emphasis`, `--space-300`) instead of screen- or component-specific names.
- Keep aliases and component tokens separate where the project supports it.
- Distinctive design scales better when the visual language is encoded, not manually restyled component by component.

Primary sources:
- Design Tokens Community Group format module: https://www.designtokens.org/TR/drafts/format/

## Accessibility Gates

Review these before handoff:

- keyboard access works without pointer input
- focus appearance is visible and not suppressed
- color contrast is sufficient for text and essential UI affordances
- target size is reasonable for touch and mixed-input use
- status, error, and validation messaging is not color-only
- reduced-motion preferences are respected when motion is non-essential
- zoom and reflow do not break content or controls

Primary sources:
- WCAG understanding docs: https://www.w3.org/WAI/WCAG22/Understanding/
- MDN accessibility overview: https://developer.mozilla.org/en-US/docs/Web/Accessibility

## Performance Gates

Distinctive UI often regresses performance through decoration, animation, or media. Check:

- **LCP risk:** large hero media, render-blocking fonts, oversized background images
- **CLS risk:** missing intrinsic media sizes, delayed UI insertion, async content that shifts layout
- **interaction cost:** heavy shadows, filters, and JavaScript-driven animations on many elements
- **font strategy:** unnecessary font families, weights, or late swaps that alter layout

Primary sources:
- web.dev Core Web Vitals: https://web.dev/explore/learn-core-web-vitals
- web.dev CLS: https://web.dev/articles/cls
- web.dev responsive design basics: https://web.dev/responsive-web-design-basics/

## Practical Review Prompt

Use this compact review pass before finalizing:

1. Is the structure semantic without relying on styling?
2. Are the main visual decisions reusable as tokens or component rules?
3. Does the component adapt to container width, not only viewport width?
4. Are hover, focus, active, disabled, loading, empty, and error states covered where relevant?
5. Have likely LCP and CLS regressions been avoided or explicitly noted?
