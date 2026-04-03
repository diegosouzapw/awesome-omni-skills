# Shopify Performance Checklist (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-performance-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-performance-checklist.md)

---


Use this reference before declaring theme or storefront work complete.

## Theme and storefront validation checklist

- Check whether images are sized and loaded appropriately for the surface.
- Reduce unnecessary third-party scripts and embeds.
- Review JavaScript and CSS payload growth caused by the change.
- Avoid unnecessarily large Liquid loops.
- Use pagination where resource collections are large.
- Confirm snippets and sections do not duplicate expensive rendering work.
- Inspect product and collection templates for payload-heavy additions.
- Review Core Web Vitals impact where the task changes critical storefront paths.

## Common Shopify-specific regressions

### Slow collection or product pages

**Likely causes:**
- oversized Liquid loops
- too many synchronous scripts
- media bloat
- repeated section rendering work

**Recovery:** Reduce loop size, defer or remove noncritical scripts, optimize media, and simplify template rendering.

### Theme looks correct but feels sluggish

**Likely causes:**
- added app embeds or third-party scripts
- large assets loaded on every page

**Recovery:** Identify what the recent change added to the critical path before rewriting Liquid unnecessarily.
