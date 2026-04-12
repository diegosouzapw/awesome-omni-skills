# Optional Integrations: astro-critters and @playform/compress

These integrations can help in some Astro projects, but they should be treated as optional.

## Use them only after Astro-native tuning

Try these first:

- reduce hydration
- optimize images and LCP resource discovery
- improve font loading
- reduce CSS scope and unnecessary global styles
- delay or remove non-critical scripts

## `astro-critters`

Potential benefit:

- can inline critical CSS for above-the-fold content

Risks:

- duplicated or unstable CSS output
- marginal gains if Astro's normal output is already sufficient
- styling differences between environments if not validated carefully

## `@playform/compress`

Potential benefit:

- final asset minification and compression-related build optimizations

Risks:

- limited real-world gain if transfer or execution is not the actual bottleneck
- output changes that need regression checking

## Safe evaluation process

1. Capture a before state.
2. Add one integration at a time.
3. Rebuild and preview.
4. Compare output size and page behavior.
5. Keep the integration only if the gain is measurable and the output remains stable.

## Minimal install example

```bash
npm install astro-critters @playform/compress
```

## Example config

```js
import { defineConfig } from 'astro/config';
import critters from 'astro-critters';
import compress from '@playform/compress';

export default defineConfig({
  integrations: [
    critters(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: false,
    }),
  ],
});
```

Do not present this as the default Astro optimization path.
