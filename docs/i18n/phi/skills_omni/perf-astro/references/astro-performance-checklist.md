# Astro Performance Checklist (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-astro/references/astro-performance-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-astro/references/astro-performance-checklist.md)

---


Use this checklist while implementing or reviewing changes.

## Scope

- [ ] Confirm the site and affected pages are Astro-based.
- [ ] Identify target templates or route groups.
- [ ] State the primary metric goal: LCP, CLS, INP, TTFB, or overall score.

## Render mode

- [ ] Confirm whether each target page is prerendered or SSR.
- [ ] Prefer prerendering for content routes unless dynamic behavior is required.

## Images

- [ ] Identify the likely LCP image on key pages.
- [ ] Use `astro:assets` where practical.
- [ ] Provide width and height or stable aspect ratio.
- [ ] Generate responsive variants for large images.
- [ ] Use `fetchpriority="high"` only for the actual LCP image when justified.
- [ ] Avoid eager loading for decorative images.

## Fonts

- [ ] Prefer self-hosted or Astro-aligned font loading.
- [ ] Use intentional `font-display`.
- [ ] Preload only the most important font files.
- [ ] Limit `preconnect` to critical origins only.
- [ ] Verify no new FOIT/FOUT or font-driven CLS was introduced.

## Scripts and hydration

- [ ] Inventory `client:*` directives.
- [ ] Remove unnecessary hydration.
- [ ] Keep scripts processed by Astro unless `is:inline` is required.
- [ ] Review third-party scripts for delay, reduction, or isolation.
- [ ] Verify critical consent or analytics flows still work as intended.

## CSS and build output

- [ ] Check whether route CSS is actually large enough to justify critical CSS inlining.
- [ ] Avoid optional compression plugins if hosting/build tooling already covers the same work.
- [ ] Validate generated output size instead of assuming improvements.

## Validation

- [ ] Capture before/after evidence on the same page type.
- [ ] Record metric deltas and major asset changes.
- [ ] Note tradeoffs, especially if UX or observability behavior changed.
