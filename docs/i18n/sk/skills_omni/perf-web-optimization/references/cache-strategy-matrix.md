# Cache Strategy Matrix (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-web-optimization/references/cache-strategy-matrix.md)

---


Use this matrix to choose safer caching behavior and to avoid stale-asset incidents.

| Resource type | Typical strategy | Notes |
| --- | --- | --- |
| Fingerprinted static JS/CSS/images/fonts | `public, max-age=31536000, immutable` | Safe when filenames change on content change |
| HTML documents | Revalidate rather than long immutable caching | Helps clients discover new asset URLs after deploy |
| Personalized API responses | Usually private or revalidated | Depends on sensitivity and freshness needs |
| Public API responses | Case by case | Avoid copying static-asset rules blindly |

## Verification checklist

- Confirm actual response headers in the browser.
- Confirm the CDN serves the same headers as origin.
- Confirm stable assets use fingerprinted filenames.
- Confirm HTML updates to reference new asset names after deploy.
- Confirm repeat visits reuse cached assets as expected.

## Common stale-asset causes

- unhashed filenames with long-lived cache directives
- CDN serving outdated HTML
- invalidation not performed after release
- service worker serving older assets
- query-string churn causing cache misses
