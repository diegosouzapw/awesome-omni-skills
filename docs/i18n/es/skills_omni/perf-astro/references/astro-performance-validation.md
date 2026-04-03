# Astro Performance Validation Guide (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-astro/references/astro-performance-validation.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-astro/references/astro-performance-validation.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-astro/references/astro-performance-validation.md)

---


Use this file to document evidence for a PR, handoff, or review.

## Minimum evidence

Record all of the following:

1. affected pages or templates
2. baseline observation
3. changes made
4. after-change observation
5. known tradeoffs or open questions

## Compare like with like

Use the same:

- page type
- device profile
- network assumptions
- environment as much as practical

## Metrics to capture when available

- LCP
- CLS
- INP
- TTFB if SSR is involved
- total JS shipped
- image bytes for key pages
- count or size of third-party requests

## What to avoid

- comparing different templates and calling it improvement
- using a single score without context
- claiming success from package installation alone
- ignoring field data when it exists

## Suggested PR summary format

- **Target pages:** home page, landing page, docs article template
- **Primary issue:** slow LCP from hero image and excessive hydration
- **Changes:** moved hero to `astro:assets`, reduced client islands, self-hosted primary font
- **Result:** improved LCP and reduced shipped JS on tested pages
- **Tradeoffs:** analytics still deferred only after consent-safe point; SSR route not changed yet
