# Example: User-flow audit (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇪🇸 [es](../../../../es/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇩🇪 [de](../../../../de/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇮🇹 [it](../../../../it/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇮🇳 [in](../../../../in/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇹🇭 [th](../../../../th/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇮🇩 [id](../../../../id/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇳🇴 [no](../../../../no/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇩🇰 [da](../../../../da/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇮🇱 [he](../../../../he/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-quality-audit/examples/user-flow-audit-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-quality-audit/examples/user-flow-audit-example.md)

---


## Flow

Landing page -> search -> detail page -> checkout

## Why flow auditing matters

A homepage-only audit would miss:

- interaction latency during search
- layout shifts on product detail
- form accessibility issues during checkout
- cross-step trust and runtime issues

## Example findings

1. **High - Performance:** Search results update triggers long tasks and delayed interaction feedback.
2. **High - Accessibility:** Checkout validation errors are not programmatically associated with fields.
3. **High - SEO:** Product detail pages emit inconsistent canonical tags.
4. **Medium - Best practices:** Checkout includes mixed-content requests from a third-party asset.

## Priority

1. Fix checkout accessibility and mixed-content issues first.
2. Fix canonical inconsistency on detail pages.
3. Investigate search interaction latency with deeper performance tooling.
