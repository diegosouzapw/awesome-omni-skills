# LCP runbook

Use this runbook when Largest Contentful Paint is the primary failing metric.

## Step 1: identify the actual LCP element

Confirm whether the LCP element is:

- hero image
- poster image or video frame
- large text block
- background image
- SVG or other prominent rendered element

Do not assume the largest asset is the LCP element.

## Step 2: classify the dominant delay

| Symptom | Likely cause | What to inspect |
| --- | --- | --- |
| Nothing starts quickly | high TTFB | redirects, server latency, cache misses |
| Hero discovered late | discovery delay | HTML structure, JS-inserted content, preload gaps |
| Hero starts but takes too long to download | transfer duration | bytes, formats, responsive sizing, network priority |
| Hero downloaded but painted late | render delay | CSS blocking, font delay, JS execution, hydration |

## Step 3: collect evidence

Capture:

- network waterfall
- trace showing LCP timing
- LCP element identity
- whether the resource was lazy-loaded
- whether CSS or JS delayed render

## Fix patterns

### A. TTFB is too high

Prefer:

- cache headers and CDN use
- reduced redirects
- backend query optimization
- server-side or edge rendering improvements

### B. LCP resource is discovered too late

Prefer:

- including the LCP element in initial HTML
- avoiding client-only insertion of hero content
- preloading the correct resource only when needed
- using `fetchpriority="high"` on the actual hero image

Avoid:

- lazy-loading the likely LCP image
- preloading many speculative images

### C. LCP resource is too heavy

Prefer:

- AVIF/WebP where appropriate
- right-sized responsive images
- compression and byte reduction
- reducing unnecessary variants or oversized source files

### D. Render delay dominates

Prefer:

- reducing render-blocking CSS and JS
- unblocking text rendering and font loading
- minimizing hydration before the LCP element appears
- sending critical content in server-rendered HTML

## Quick checks

- Is the LCP image lazy-loaded? If yes, fix that first.
- Is the LCP element text? Investigate CSS/fonts before image work.
- Is preload used correctly and only for the true critical resource?
- Did bytes improve, but timing not improve? Look at discovery and render delay.

## Safe validation

After each change, compare:

- LCP timing
- LCP element identity
- request priority and discovery timing
- regressions to CLS, accessibility, or responsive behavior
