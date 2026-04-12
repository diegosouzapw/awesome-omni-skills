# Image Delivery Patterns

Use this reference when image work is the main bottleneck or when a likely LCP image loads too late.

## Goals

- discover the likely LCP image early
- deliver the right size for the viewport
- preserve layout stability
- lazy-load only offscreen media

## Safe baseline patterns

### Likely LCP image

```html
<img
  src="/images/hero-1200.avif"
  srcset="/images/hero-640.avif 640w, /images/hero-1200.avif 1200w, /images/hero-1800.avif 1800w"
  sizes="100vw"
  alt="Product hero"
  width="1200"
  height="675"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>
```

Use this pattern when the image is likely in the initial viewport and important to first paint.

### Offscreen image

```html
<img
  src="/images/gallery-800.webp"
  srcset="/images/gallery-400.webp 400w, /images/gallery-800.webp 800w"
  sizes="(min-width: 1024px) 400px, 50vw"
  alt="Gallery item"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
/>
```

Use lazy loading only for content that is not likely to be visible at initial load.

### Art direction with `picture`

```html
<picture>
  <source media="(min-width: 900px)" srcset="/images/hero-wide.avif" />
  <source media="(min-width: 600px)" srcset="/images/hero-tablet.avif" />
  <img
    src="/images/hero-mobile.avif"
    alt="Hero"
    width="1200"
    height="675"
    loading="eager"
    fetchpriority="high"
  />
</picture>
```

## Common mistakes

- lazy-loading the hero image
- using a CSS background image for critical content that should be discovered as a normal image
- omitting `width` and `height`
- shipping only one oversized image to all breakpoints
- preloading many images instead of prioritizing the one likely LCP image

## Triage checklist

1. Identify the likely LCP element.
2. Check whether it is an `<img>`, framework image component, or CSS background.
3. Confirm it is not lazy-loaded.
4. Confirm dimensions are explicit.
5. Confirm responsive variants exist where useful.
6. Check whether document or server delay dominates before the image can even be requested.

## Notes

- `fetchpriority="high"` is useful for the likely LCP image, not for many images.
- Modern formats help transfer size, but slow discovery or server delay can still dominate.
- If a framework provides an image priority feature, prefer the framework-supported path for that stack.
