# RUM attribution guide for Core Web Vitals (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/references/rum-attribution-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/references/rum-attribution-guide.md)

---


When ownership is unclear, add production instrumentation before broad refactors.

## Why attribution matters

Attribution helps answer:

- which element became the LCP candidate
- which interaction produced poor INP
- which nodes were involved in a layout shift

Without attribution, teams often optimize the wrong part of the page.

## Recommended approach

Use the official `web-vitals` package attribution build.

Typical pattern:

1. collect LCP, INP, and CLS in production
2. include page template, route, device class, and release metadata
3. send metric values plus attribution details to analytics or logs
4. aggregate by template and release to identify stable regressions

## What to capture

At minimum:

- metric name and value
- rating
- URL or route name
- page template or screen type
- device class if available
- attribution payload from the metric
- application version or release identifier

## Cautions

- avoid collecting sensitive user content from DOM text or form input
- sample if volume is high
- separate debug-only payloads from standard analytics if needed
- document the lag between deployment and field confirmation
