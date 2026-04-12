# Framework fix patterns

Use these as starting points, not guarantees. Always verify against the actual metric and framework behavior.

## Next.js

### LCP

- Prefer server-rendered hero content when possible.
- Use `next/image` correctly for the likely LCP image.
- Avoid lazy loading the above-the-fold hero.
- Use priority behavior only for the true critical image.

### INP

- Reduce hydration and client-side work on initial interactive views.
- Dynamically import heavy client-only components when they are not needed immediately.
- Review expensive state updates and rerender patterns.

### CLS

- Ensure image and media components reserve space.
- Watch for route-transition placeholders that do not match final layout.

## React

### LCP

- Avoid making hero content depend on late client effects.
- Keep the likely LCP element in initial markup where possible.

### INP

- Reduce rerenders in interactive paths.
- Memoize only where profiling shows benefit.
- Avoid large synchronous work inside event handlers.

### CLS

- Reserve dimensions for media.
- Avoid injecting banners or notices above visible content without reserved space.

## Vue / Nuxt

### LCP

- Ensure critical hero content is discoverable in initial HTML.
- Use image helpers carefully; do not accidentally lazy-load the LCP asset.

### INP

- Defer heavy components when they are not needed for the first interaction.
- Review watcher and computed chains triggered by user input.

### CLS

- Use stable media containers and `aspect-ratio`.
- Test route transitions and async component resolution for post-load shifts.

## Rule of thumb

Framework conveniences can help, but they do not replace trace-based diagnosis. Measure first, then apply the smallest framework-specific fix that addresses the proven cause.
