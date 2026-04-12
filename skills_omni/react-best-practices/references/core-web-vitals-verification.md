# Core Web Vitals Verification

Use this guide after making React or Next.js performance changes.

## 1. Match the optimization to the metric

### LCP

Often affected by:

- hero image size or loading behavior
- font loading
- render-blocking client JavaScript
- client-only rendering of above-the-fold content

### CLS

Often affected by:

- missing image dimensions
- layout shifts from late-loading content
- unstable font swaps or injected UI

### INP

Often affected by:

- heavy client JavaScript
- long-running event handlers
- synchronous work during interaction
- expensive rerender paths

### TTFB

Often affected by:

- server waterfalls
- slow data fetching
- missing deduplication
- overly dynamic rendering

## 2. Verify with before/after evidence

Collect at least one of:

- Lighthouse comparison
- route timing comparison
- Web Vitals capture
- bundle-size comparison
- runtime telemetry after deployment

## 3. If using Next.js Web Vitals reporting

Use built-in reporting hooks or your app's existing telemetry path to capture metrics consistently.

Record:

- route or page affected
- metric improved
- environment used for comparison
- known limitations of the test

## 4. Do not overclaim

A code refactor is not a verified optimization until:

- correctness is preserved
- the target metric or symptom improved
- regressions were checked in adjacent behavior
