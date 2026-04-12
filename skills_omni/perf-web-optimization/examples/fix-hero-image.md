# Example: Fix a Slow Hero Image

## Scenario

The homepage hero image looks visually important but begins loading late, and converting it to a smaller format did not produce enough improvement.

## Checks

1. Confirm the hero image is the likely LCP element.
2. Check whether it is rendered as a CSS background instead of a normal image element.
3. Check whether `loading="lazy"` is set incorrectly.
4. Check whether dimensions are present.
5. Check whether the browser discovers the image only after client-side rendering.

## Before

```html
<div class="hero" style="background-image:url('/hero.webp')"></div>
```

This can delay discovery relative to a normal image element.

## Safer after

```html
<img
  src="/hero-1200.avif"
  srcset="/hero-640.avif 640w, /hero-1200.avif 1200w, /hero-1800.avif 1800w"
  sizes="100vw"
  alt="Hero banner"
  width="1200"
  height="675"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>
```

## Verify

- the hero request starts earlier in the waterfall
- the page does not gain layout shift
- above-the-fold rendering is visibly improved
- no unnecessary extra preload was added
