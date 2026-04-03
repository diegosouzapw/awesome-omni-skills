# Accessibility Router (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/accessibility/agents/accessibility-router.md) · 🇪🇸 [es](../../../../es/skills_omni/accessibility/agents/accessibility-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/accessibility/agents/accessibility-router.md) · 🇩🇪 [de](../../../../de/skills_omni/accessibility/agents/accessibility-router.md) · 🇮🇹 [it](../../../../it/skills_omni/accessibility/agents/accessibility-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/accessibility/agents/accessibility-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/accessibility/agents/accessibility-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/accessibility/agents/accessibility-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/accessibility/agents/accessibility-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/accessibility/agents/accessibility-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/accessibility/agents/accessibility-router.md) · 🇮🇳 [in](../../../../in/skills_omni/accessibility/agents/accessibility-router.md) · 🇹🇭 [th](../../../../th/skills_omni/accessibility/agents/accessibility-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/accessibility/agents/accessibility-router.md) · 🇮🇩 [id](../../../../id/skills_omni/accessibility/agents/accessibility-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/accessibility/agents/accessibility-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/accessibility/agents/accessibility-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/accessibility/agents/accessibility-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/accessibility/agents/accessibility-router.md) · 🇳🇴 [no](../../../../no/skills_omni/accessibility/agents/accessibility-router.md) · 🇩🇰 [da](../../../../da/skills_omni/accessibility/agents/accessibility-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/accessibility/agents/accessibility-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/accessibility/agents/accessibility-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/accessibility/agents/accessibility-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/accessibility/agents/accessibility-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/accessibility/agents/accessibility-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/accessibility/agents/accessibility-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/accessibility/agents/accessibility-router.md) · 🇮🇱 [he](../../../../he/skills_omni/accessibility/agents/accessibility-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/accessibility/agents/accessibility-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/accessibility/agents/accessibility-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/accessibility/agents/accessibility-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/accessibility/agents/accessibility-router.md)

---


Use this note to keep task boundaries clear.

## Stay in `@accessibility` when

- the user wants an accessibility audit or remediation plan
- the work is about keyboard, focus, semantics, forms, screen readers, contrast, media alternatives, or accessible components
- the output should be findings, fixes, or verification notes tied to WCAG

## Hand off to adjacent skills when

- the request expands into a broad site review across multiple quality domains -> `@web-quality-audit`
- the main problem is performance, rendering speed, or Core Web Vitals -> `@core-web-vitals`
- the issue is broader UI logic or application debugging -> `@frontend-debugging`
- the main deliverable becomes reusable component governance -> `@design-system`
- the main deliverable becomes Playwright or CI automation setup -> `@playwright`
- the request is primarily SEO rather than accessibility -> `@seo`

## Handoff note format

Include:

- what accessibility issue was observed
- what was already tested
- whether any WCAG mapping exists
- whether code changes were attempted
- what the next skill should own
