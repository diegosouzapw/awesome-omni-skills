# Core Web Vitals workflow (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/references/cwv-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/references/cwv-workflow.md)

---


Use this workflow when the ask is specifically about LCP, INP, or CLS.

## 1. Confirm the field regression

Collect one or more of:

- Search Console Core Web Vitals report
- PageSpeed Insights field data
- CrUX origin or URL data
- internal RUM data

Record:

- metric affected
- device segment
- URL or template scope
- time window
- whether the issue is origin-level or page-level

## 2. Pick one representative URL

Do not debug a whole site at once unless field data shows the same problem across a shared template.

Choose:

- one representative URL
- one device strategy, usually mobile first
- one environment matching production behavior as closely as possible

## 3. Diagnose with lab tools

Use Chrome DevTools, Lighthouse, or WebPageTest to understand why the metric is poor.

- For **LCP**, identify the actual LCP element and classify the delay by subpart.
- For **INP**, identify the slow interaction and whether time is lost before handler start, inside JS, or before the next paint.
- For **CLS**, identify what moved, when it moved, and whether the movement was expected.

## 4. Apply a narrow fix

Prefer the smallest credible change tied to the measured cause.

Examples:

- improve the priority or discovery of the real LCP resource
- split long tasks and defer non-visual INP work
- reserve space for banners, embeds, ads, or media causing CLS

## 5. Validate in lab

Compare before and after on the same URL and same scenario.

Capture:

- trace or audit evidence
- code diff summary
- any tradeoffs introduced

## 6. Watch field recovery

Do not claim success based on one local run.

Use:

- Search Console for grouped URLs and validation state
- PSI or CrUX for public field trends
- internal RUM for faster release-specific confirmation

## Evidence checklist

A good handoff note includes:

- failing metric and threshold
- affected pages or template
- field source used
- lab artifact reviewed
- likely root cause
- fix applied
- what still needs field confirmation
