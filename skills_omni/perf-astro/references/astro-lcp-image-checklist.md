# Astro LCP Image Checklist

Use this checklist when the likely LCP element is an image.

## Confirm the candidate

- Verify the real LCP element first.
- Confirm whether it is an `<img>`, optimized Astro image output, or a CSS background image.
- If it is not an image, use a different optimization path.

## Image delivery checks

- Is the image above the fold?
- Is it being lazy-loaded accidentally?
- Does it have explicit dimensions?
- Is it larger than needed for the rendered size?
- Is it using a modern format where appropriate?
- Is the browser discovering it early enough?

## Astro-specific checks

- Prefer Astro image handling for local assets where feasible.
- Generate responsive variants instead of shipping a single oversized file.
- Use accurate `sizes` values so the browser picks an appropriate candidate.

## Priority hints

Use these only when justified:

- `loading="eager"` for the real above-the-fold LCP image
- `fetchpriority="high"` when the browser should prioritize the key image
- `<link rel="preload" as="image">` only if resource discovery is delayed and the preload target is correct

## Avoid

- lazy-loading the hero image
- preloading multiple competing images
- preloading an image that is already discovered early enough
- relying on preload to compensate for poor sizing or oversized assets
