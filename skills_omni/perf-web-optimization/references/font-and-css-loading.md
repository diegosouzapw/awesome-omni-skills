# Font and CSS Loading

Use this reference when render-blocking styles, fonts, text flashes, or layout shifts are part of the problem.

## CSS guidance

### Prefer

- keep critical CSS small
- inline only truly critical rules
- load the main stylesheet in a way that matches the stack and is easy to verify
- remove unused CSS when practical

### Use caution with

Patterns such as stylesheet preload or `media="print"` plus `onload` can help in some stacks, but they are not universal defaults. Test carefully for ordering, failure behavior, and maintainability.

Example pattern:

```html
<link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
<noscript><link rel="stylesheet" href="/styles.css" /></noscript>
```

Do not preload many stylesheets or styles for routes the user is unlikely to need immediately.

## Font guidance

### Safe defaults

- self-host fonts when practical
- subset fonts to the glyphs actually needed
- limit the number of families, weights, and styles
- use `font-display` deliberately
- preconnect only when the origin is actually needed early

Example:

```css
@font-face {
  font-family: 'InterSubset';
  src: url('/fonts/inter-subset.woff2') format('woff2');
  font-display: swap;
  font-weight: 400;
  font-style: normal;
}
```

### When to preload fonts

Preload only fonts that are definitely needed in the first render and likely to improve real rendering. Over-preloading can compete with more important resources.

```html
<link rel="preload" href="/fonts/inter-subset.woff2" as="font" type="font/woff2" crossorigin />
```

## CLS safety checks

- verify fallback font metrics are not dramatically different
- verify line-height and spacing do not change significantly after the font swaps in
- avoid unnecessary late style injections
- reserve space for embeds or dynamic UI that appears after styles finish loading

## Troubleshooting hints

### Text flashes too aggressively

Check whether `font-display` is appropriate and whether the font is actually needed on initial paint.

### Text shifts after the font loads

Check fallback metrics, subset choice, weights, and whether a preload was added without benefit.

### CSS optimization broke styling order

Check load order, route-specific stylesheet assumptions, and whether a preload hack introduced race conditions.
