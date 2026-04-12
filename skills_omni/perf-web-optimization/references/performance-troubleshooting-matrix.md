# Performance Troubleshooting Matrix

| Problem | Likely causes | First checks | Typical fixes |
| --- | --- | --- | --- |
| Hero image still slow | Late discovery, lazy loading, CSS background, server/document delay | Request start time, markup pattern, priority | Use normal image element or framework priority feature, add `fetchpriority`, remove lazy loading above the fold |
| Smaller bundle, same slowness | Parse/execute cost, hydration, third parties | Main-thread trace, long tasks, third-party scripts | Reduce startup work, split hydration boundaries, defer non-essential vendors |
| CLS after optimization | Missing dimensions, font metric mismatch, dynamic embeds | Element shift sources, image dimensions, font changes | Restore reserved space, adjust fallback fonts, reserve embed slots |
| Repeat visits not improving | Missing cache rules, no fingerprinting, CDN override | `curl -I`, network cache status | Add correct `Cache-Control`, fingerprint assets, align CDN behavior |
| Lazy loading caused pop-in | Above-the-fold media deferred, no reserved space | Element position, load timing, viewport visibility | Remove lazy loading for visible content, preserve dimensions |
| Font optimization backfired | Too many variants, preload misuse, fallback mismatch | Font waterfall, render behavior, layout movement | Subset, reduce variants, revisit `font-display` and preload use |

## Usage note

Start from the user-visible symptom, then verify one bottleneck family at a time. Do not change images, fonts, caching, and JS all in one pass unless the task explicitly requires a broad refactor.
