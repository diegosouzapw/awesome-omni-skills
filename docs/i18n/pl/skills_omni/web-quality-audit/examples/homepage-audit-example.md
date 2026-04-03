# Example: Homepage audit (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇪🇸 [es](../../../../es/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇩🇪 [de](../../../../de/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇮🇹 [it](../../../../it/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇮🇳 [in](../../../../in/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇹🇭 [th](../../../../th/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇮🇩 [id](../../../../id/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇳🇴 [no](../../../../no/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇩🇰 [da](../../../../da/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇮🇱 [he](../../../../he/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-quality-audit/examples/homepage-audit-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-quality-audit/examples/homepage-audit-example.md)

---


## Scope

- Target: public marketing site homepage
- Goal: identify broad quality issues across performance, accessibility, SEO, and best practices

## Evidence collected

- Homepage URL audited on mobile assumptions
- Lighthouse category outputs recorded
- Manual keyboard pass completed
- Title, meta description, canonical, and robots observations recorded
- Console checked for visible runtime issues

## Example findings

1. **High - Performance:** LCP image discovered late due to missing preload and oversized source asset.
2. **High - Accessibility:** Primary navigation dropdown not fully keyboard operable.
3. **Medium - SEO:** Meta description duplicated with another high-value page.
4. **Medium - Best practices:** Console shows repeated third-party script errors affecting trust and noise.

## Top recommendations

- Fix the navigation keyboard behavior first because it blocks access to core paths.
- Improve LCP resource discovery on the homepage template.
- clean up duplicated metadata on priority landing pages.
- Remove or contain noisy third-party errors.
