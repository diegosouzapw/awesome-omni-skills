---
name: "perf-web-optimization"
description: "Web Performance Optimization workflow skill. Use this skill when the user needs implementation-focused web performance improvements for bundle size, images, caching, lazy loading, fonts, third-party scripts, and page speed. Use when a site is slow, bundles are too large, hero images load late, repeat visits do not cache well, layout shifts appear after frontend changes, or JavaScript cost delays rendering and interaction. Do NOT use this skill for Lighthouse audit execution or report interpretation (use perf-lighthouse), Core Web Vitals-specific diagnosis (use core-web-vitals), or Astro-specific optimization (use perf-astro)."
version: "0.0.1"
category: "frontend"
tags:
  - "perf-web-optimization"
  - "web-performance"
  - "bundle-size"
  - "images"
  - "caching"
  - "lazy-loading"
  - "fonts"
  - "third-party-scripts"
  - "page-speed"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "perf-web-optimization"
family_name: "Web Performance Optimization"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/perf-web-optimization"
upstream_skill: "skills/perf-web-optimization"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "perf-web-optimization"
---

# Web Performance Optimization

## Overview

Use this skill to implement practical web performance fixes after a slowdown or bottleneck is already suspected or observed.

This skill focuses on execution: reducing JavaScript cost, improving image and font delivery, tightening CSS loading, applying safe caching and compression policies, and controlling third-party impact. It is intended for framework-agnostic optimization work that can be verified with narrow before/after evidence.

Keep changes incremental. Do not change every performance layer at once. Start with a baseline, classify the bottleneck, apply the smallest likely high-impact fix, then verify that load, rendering, and interaction actually improved without introducing regressions such as CLS, stale caching, or broken hydration.

This curated version preserves the original skill intent while replacing import-wrapper material with an implementation-first playbook and local support references.

## When to Use This Skill

Use this skill when the user needs implementation-focused optimization for:

- oversized JavaScript bundles or slow route loads
- slow hero or other image-heavy pages
- poor asset caching or repeat-visit performance
- lazy-loading strategy fixes
- font loading and render delay reduction
- third-party script containment
- CSS delivery improvements
- general page speed work where the likely causes are asset, loading, caching, or execution related

Use this skill when symptoms include:

- “the site feels slow even on good devices”
- “the homepage image loads too late”
- “the bundle is too big”
- “repeat visits still redownload static assets”
- “we introduced layout shift after image or font changes”
- “interaction is sluggish because too much JavaScript runs on startup”

Do **not** use this skill when:

- the user primarily wants a Lighthouse audit run or report interpretation; use `@perf-lighthouse`
- the task is primarily diagnosing Core Web Vitals metrics such as LCP/CLS/INP root causes as a vitals-specific workflow; use `@core-web-vitals`
- the task is specifically Astro implementation work; use `@perf-astro`
- the task is mostly backend/database/server tuning unrelated to frontend delivery

## Operating Table

| Symptom or situation | First checks | Typical fixes | Verify with |
| --- | --- | --- | --- |
| Hero image loads late | Is the likely LCP image discovered early? Is it lazily loaded? Is it a CSS background? | Use normal `<img>`/framework image component when possible, add `fetchpriority="high"`, avoid lazy-loading above the fold, ensure dimensions are set | Network waterfall, element timing, visual load comparison |
| Bundle is too large | Which routes or chunks dominate? Are large dependencies or duplicate libraries present? | Route/component splitting, dynamic imports, dependency replacement, tree-shaking verification | Build output diff, chunk graph, DevTools coverage |
| Page still feels slow after bundle reduction | Is main-thread execution still heavy? Is hydration or third-party JS dominant? | Reduce startup JS, defer non-essential scripts, trim client rendering, move work off initial path | Performance trace, long-task review |
| Layout shifts after optimization | Were image dimensions removed? Did fonts or embeds change metrics? | Restore `width`/`height` or `aspect-ratio`, reserve embed/ad space, revisit font loading choices | Layout shift debugging in DevTools, visual comparison |
| Repeat visits still redownload assets | Are cache headers correct? Are filenames fingerprinted? Is CDN behavior overriding origin? | Immutable caching for hashed assets, revalidation for HTML, CDN rule fixes | `curl -I`, browser network cache inspection |
| Too many requests block first render | Are CSS, fonts, and scripts competing early? Are too many assets preloaded? | Reduce render-blocking CSS/JS, remove unnecessary preloads, preconnect only where justified | Waterfall and priority inspection |

## Workflow

1. **Establish a narrow baseline**
   - Collect the smallest useful evidence before changing code.
   - Record affected pages, device/network assumptions, and whether the issue is first-load, repeat-load, or interaction related.
   - If no evidence exists yet, gather a lightweight baseline rather than guessing.

2. **Classify the bottleneck**
   - Decide whether the main issue is primarily images, JavaScript, CSS, fonts, caching/compression, network delivery, or third-party scripts.
   - Avoid broad “optimize everything” passes. Pick the dominant problem class first.

3. **Inspect the critical path**
   - For load issues, check what blocks rendering and when the user-visible content becomes discoverable.
   - For interaction issues, check startup JS, hydration, long tasks, event handlers, and third-party work.
   - For repeat-visit issues, inspect HTTP caching, content hashes, and compression.

4. **Choose the smallest high-impact fix**
   - Prioritize changes that improve user-visible speed without risky architecture churn.
   - Prefer one bottleneck family at a time: for example, fix the hero image discovery path before rewriting chunking strategy.

5. **Implement safely**
   - Keep changes reversible.
   - Avoid speculative preloads, broad lazy-loading, or cache rules that can produce stale assets.
   - Preserve visual stability and functional correctness while optimizing.

6. **Verify before and after**
   - Compare transfer size, request ordering, render timing, and user-visible behavior.
   - Confirm that improvements did not introduce regressions such as CLS, font flash problems, broken styling, or delayed above-the-fold content.

7. **Document follow-ups**
   - Note what improved, what remains, and which adjacent skill should be used if the task has shifted into audit interpretation or vitals-specific diagnosis.

### Performance Targets Reference

These target ranges are useful context, but this skill is for implementing fixes rather than running the full audit workflow.

| Metric | Good | Needs work | Poor |
| --- | --- | --- | --- |
| LCP | < 2.5s | 2.5-4s | > 4s |
| INP | < 200ms | 200-500ms | > 500ms |
| CLS | < 0.1 | 0.1-0.25 | > 0.25 |
| TTFB | < 800ms | 800ms-1.8s | > 1.8s |

## Implementation Playbook

### 1. Images

Focus on discovery, sizing, and responsive delivery, not just format conversion.

- Prioritize the likely LCP image.
- Do **not** lazy-load above-the-fold images.
- Always reserve space with `width`/`height` or CSS `aspect-ratio`.
- Use `srcset` and `sizes` for responsive delivery.
- Prefer modern formats where supported, but do not assume format conversion alone fixes slow rendering.

See: [references/image-delivery-patterns.md](references/image-delivery-patterns.md)

### 2. JavaScript and third parties

Treat transfer size and execution cost as separate problems.

- Reduce shipped JS.
- Split by route and expensive component boundaries.
- Remove or replace heavy dependencies when justified.
- Defer or isolate non-essential third-party scripts.
- Re-check hydration/client-rendering cost if the bundle shrinks but the page still feels slow.

See: [references/javascript-cost-triage.md](references/javascript-cost-triage.md)

### 3. CSS and fonts

Optimize the render path without causing visual instability.

- Inline only truly critical CSS.
- Reduce blocking stylesheet cost where safe.
- Limit font families, weights, and styles.
- Use `font-display` deliberately.
- Preload fonts sparingly and only when strongly justified.

See: [references/font-and-css-loading.md](references/font-and-css-loading.md)

### 4. Caching and compression

Use explicit, correct semantics by resource type.

- Cache fingerprinted static assets aggressively.
- Revalidate HTML instead of treating it like immutable static content.
- Set API caching based on data sensitivity and freshness needs.
- Verify Brotli or Gzip is actually active.

See: [references/caching-and-compression.md](references/caching-and-compression.md)

## Examples

### Example 1: Fix a slow hero image

```text
Use @perf-web-optimization to improve a slow homepage hero image. Check whether the likely LCP image is lazy-loaded, hidden behind CSS background usage, or discovered late. Apply the smallest safe fix, keep dimensions explicit, and verify the image starts earlier without causing CLS.
```

Worked example: [examples/fix-hero-image.md](examples/fix-hero-image.md)

### Example 2: Reduce startup JavaScript and third-party cost

```text
Use @perf-web-optimization to reduce page startup cost. Identify whether the main issue is transfer size, parse/execute time, hydration, or third-party scripts. Split non-critical code paths, remove heavy dependencies where justified, and defer non-essential third-party loading.
```

Worked example: [examples/reduce-bundle-and-third-party-cost.md](examples/reduce-bundle-and-third-party-cost.md)

### Example 3: Verify cache behavior safely

```bash
curl -I https://example.com/
curl -I https://example.com/assets/app.abcd1234.js
curl -I --compressed https://example.com/assets/app.abcd1234.js
```

Use this to inspect HTML caching, immutable asset caching, and compression headers before changing server or CDN rules.

Worked example: [examples/cache-header-recipes.md](examples/cache-header-recipes.md)

### Example 4: Check bundle composition with common tooling

```bash
# Webpack
npx webpack-bundle-analyzer dist/stats.json

# Vite
npx vite-bundle-visualizer

# Package size estimate before installing a dependency
npx bundlephobia-cli react-charting-library
```

Use framework-specific tooling only if it matches the project stack.

## Best Practices

### Do

- Start from a visible symptom and gather minimal evidence first.
- Optimize one bottleneck family at a time so results stay attributable.
- Prioritize user-visible rendering and interaction over score chasing.
- Use `fetchpriority="high"` or equivalent framework priority controls for the likely LCP image when appropriate.
- Lazy-load only offscreen images and other non-critical content.
- Keep image dimensions explicit to prevent layout shifts.
- Split JavaScript on route or expensive component boundaries.
- Treat third-party scripts as optional until proven necessary on the initial path.
- Use immutable caching only for fingerprinted assets.
- Verify compression and cache headers with actual requests, not assumptions.

### Don't

- Do not lazy-load the hero image or other likely in-viewport content.
- Do not preload many resources “just in case”; excess preload can hurt prioritization.
- Do not assume a smaller bundle guarantees better interaction performance.
- Do not mark non-versioned assets as immutable.
- Do not remove dimensions from images to “simplify” markup.
- Do not apply aggressive caching to HTML unless the deployment model clearly supports it.
- Do not turn this skill into a Lighthouse reporting workflow or a Core Web Vitals diagnosis workflow.

## Troubleshooting

### Problem: Hero image is still slow after converting to WebP or AVIF

**Symptoms:** The main visual image appears late even after file size reduction.

**Solution:** Check whether the image is discovered too late, loaded as a CSS background, missing `fetchpriority="high"`, or accidentally lazy-loaded. Also confirm server/document delays are not hiding the improvement. See [references/image-delivery-patterns.md](references/image-delivery-patterns.md) and [examples/fix-hero-image.md](examples/fix-hero-image.md).

### Problem: Bundle is smaller but the page still feels slow

**Symptoms:** Build size improved, but startup or interaction is still sluggish.

**Solution:** Investigate parse/execute time, hydration, long tasks, and third-party work. The bottleneck may be main-thread execution rather than transfer size. See [references/javascript-cost-triage.md](references/javascript-cost-triage.md) and [examples/reduce-bundle-and-third-party-cost.md](examples/reduce-bundle-and-third-party-cost.md).

### Problem: CLS worsened after image or font changes

**Symptoms:** Content shifts after introducing image optimization, new font loading, or embed changes.

**Solution:** Restore reserved space for media, confirm image dimensions or `aspect-ratio`, review `font-display` and fallback metric changes, and reserve space for embeds/ads. See [references/font-and-css-loading.md](references/font-and-css-loading.md) and [references/performance-troubleshooting-matrix.md](references/performance-troubleshooting-matrix.md).

### Problem: Static assets still redownload on repeat visits

**Symptoms:** Fingerprinted assets are requested again or show ineffective cache behavior.

**Solution:** Inspect `Cache-Control`, verify filenames are actually versioned, and confirm CDN behavior is not overriding origin headers. Use `curl -I` and browser network inspection. See [references/caching-and-compression.md](references/caching-and-compression.md) and [examples/cache-header-recipes.md](examples/cache-header-recipes.md).

### Problem: Lazy loading caused visible pop-in or delayed above-the-fold content

**Symptoms:** Important content appears too late, especially on initial load.

**Solution:** Remove lazy loading from likely in-viewport content, keep it for below-the-fold media, and confirm placeholders or reserved layout space remain stable. See [references/image-delivery-patterns.md](references/image-delivery-patterns.md).

### Problem: Font optimization caused flash, mismatch, or layout movement

**Symptoms:** Text flashes unexpectedly, shifts after the web font loads, or initial rendering looks unstable.

**Solution:** Revisit font subsetting, weight/style count, `font-display`, preload usage, and fallback font metrics. Optimize for both render speed and layout stability. See [references/font-and-css-loading.md](references/font-and-css-loading.md).

## Related Skills

- `@core-web-vitals` - Use when the task is primarily metric-specific diagnosis and remediation of LCP, CLS, or INP.
- `@perf-lighthouse` - Use when the user needs audits, report interpretation, budgets, or measurement workflow.
- `@perf-astro` - Use when the implementation is Astro-specific rather than framework-agnostic.

## Additional Resources

### Local references

- [Image delivery patterns](references/image-delivery-patterns.md)
- [Font and CSS loading](references/font-and-css-loading.md)
- [JavaScript cost triage](references/javascript-cost-triage.md)
- [Caching and compression](references/caching-and-compression.md)
- [Performance troubleshooting matrix](references/performance-troubleshooting-matrix.md)

### Worked examples

- [Fix hero image](examples/fix-hero-image.md)
- [Reduce bundle and third-party cost](examples/reduce-bundle-and-third-party-cost.md)
- [Cache header recipes](examples/cache-header-recipes.md)

### External provenance links

These sources informed the enhanced guidance and align with current browser and web performance best practices:

- MDN: Lazy loading
- MDN: Responsive images
- MDN: `rel=preload`
- MDN: `fetchPriority`
- MDN: `Cache-Control`
- MDN: HTTP compression
- web.dev: Optimize LCP
- web.dev: Optimize CLS
- web.dev: Optimize INP
- web.dev: Font best practices
- web.dev: Third parties
