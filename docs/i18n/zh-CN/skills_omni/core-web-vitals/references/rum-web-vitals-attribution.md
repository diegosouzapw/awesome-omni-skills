# RUM with web-vitals attribution (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/references/rum-web-vitals-attribution.md)

---


Use this when field data shows a CWV problem but ownership is unclear.

## Why attribution matters

Attribution helps answer:

- which element became LCP
- which interaction contributed to poor INP
- which nodes or regions were associated with layout shifts

## Safe instrumentation rules

Prefer sending:

- metric name and value
- page URL or route identifier
- device class if already part of analytics
- coarse element metadata such as tag name, stable selector, or component name

Avoid sending:

- raw user input
- full page text
- sensitive DOM content
- identifiers not already approved for analytics use

## Minimal pattern

Use the attribution build of `web-vitals`:

```javascript
import { onCLS, onINP, onLCP } from 'web-vitals/attribution'
```

Then send a narrow payload to analytics.

See [examples/web-vitals-analytics-snippet.js](../examples/web-vitals-analytics-snippet.js).

## When to add it

Add attribution when:

- field data is bad but lab reproduction is weak
- the LCP element changes by breakpoint or template
- INP is affected only on mobile or low-end devices
- CLS appears after user flows, consent UI, ads, or route changes
