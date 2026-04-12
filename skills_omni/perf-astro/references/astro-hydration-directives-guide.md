# Astro Hydration Directives Guide

Astro performance often improves most when unnecessary hydration is removed or delayed.

## Directive quick map

| Directive | Use when | Performance tradeoff |
| --- | --- | --- |
| `client:load` | Component must hydrate immediately on page load | Highest startup cost |
| `client:idle` | Component can wait until the browser is idle | Lower startup contention |
| `client:visible` | Component is only needed when it enters the viewport | Good for below-the-fold UI |
| `client:media` | Component is only needed under a media query condition | Useful for conditional experiences |

## Review process

For each hydrated component, ask:

1. Does this need client-side JavaScript at all?
2. If yes, does it need to hydrate immediately?
3. Can hydration wait for idle time, visibility, or a media condition?
4. Is a smaller interactive island possible?

## Common conversions

### From eager load to delayed hydration

```astro
<ThemeToggle client:load />
```

Prefer:

```astro
<ThemeToggle client:idle />
```

when the control does not need immediate startup interaction.

### From startup hydration to viewport-triggered hydration

```astro
<NewsletterSignup client:load />
```

Prefer:

```astro
<NewsletterSignup client:visible />
```

when the component is below the fold.

## Warning signs

- many components use `client:load`
- large JS bundle despite mostly static content
- interaction latency worsens after page load
- third-party widgets are wrapped into eagerly loaded islands

## Safer pattern

Hydrate the smallest interactive unit, not the whole section or page shell.
