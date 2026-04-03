# Example: Authenticated app audit (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇪🇸 [es](../../../../es/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇩🇪 [de](../../../../de/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇮🇹 [it](../../../../it/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇮🇳 [in](../../../../in/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇹🇭 [th](../../../../th/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇮🇩 [id](../../../../id/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇳🇴 [no](../../../../no/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇩🇰 [da](../../../../da/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇮🇱 [he](../../../../he/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-quality-audit/examples/authenticated-app-audit-example.md)

---


## Scope

- Target: logged-in SaaS application
- Pages: sign-in, dashboard, settings
- Notes: personalized content and feature flags present

## Evidence collected

- Authenticated route list
- Session assumptions documented
- Manual keyboard/focus checks across dashboard widgets and settings forms
- Console review on major routes
- Lighthouse run on sign-in page and dashboard shell where practical

## Example findings

1. **Critical - Accessibility:** Modal dialog traps focus incorrectly and prevents keyboard escape on settings.
2. **High - Performance:** Dashboard interaction latency suggests heavy main-thread work after widget load.
3. **Medium - Best practices:** Permission prompt appears before user intent is established.
4. **Low - SEO:** Public sign-in page metadata can be improved, but this is not a primary risk.

## Handoff notes

- Route the modal remediation to `@web-accessibility` if deeper widget review is needed.
- Route interaction latency analysis to `@core-web-vitals` for INP-focused follow-up.
