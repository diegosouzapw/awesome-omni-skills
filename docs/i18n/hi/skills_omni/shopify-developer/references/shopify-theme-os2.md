# Shopify Theme OS 2.0 Guide (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-theme-os2.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-theme-os2.md)

---


Use this reference for current theme architecture decisions.

## Architecture defaults

For modern Shopify theme work, start from Online Store 2.0 concepts:

- JSON templates
- sections
- blocks
- schema-driven settings
- app blocks where relevant
- merchant-configurable content instead of hardcoded markup where possible

## Operator checklist

1. Identify the file type involved: layout, template, section, snippet, asset, or config.
2. Decide whether the change belongs in a section or block instead of a fixed template edit.
3. Verify that schema settings are valid and merchant-friendly.
4. If the request affects editor behavior, inspect section schema and block definitions first.
5. Use `render` for modular snippet composition where appropriate.
6. Validate JSON template structure before assuming runtime issues.

## Common failure modes

### Section settings do not appear

**Symptoms:** Merchant controls do not show in the theme editor.

**Likely causes:**
- invalid or misplaced schema
- incorrect setting definition
- wrong file type for the change

**Recovery:** Validate the section schema structure and confirm the setting is defined in the correct section file.

### Template appears broken after edit

**Symptoms:** Theme preview fails or content disappears after changing a JSON template.

**Likely causes:**
- malformed JSON
- missing section reference
- block or section IDs misconfigured

**Recovery:** Reduce to a minimal valid template, then add sections back incrementally.

## Performance note

Theme correctness and theme performance are linked. Avoid large loops, excessive section nesting, and unnecessary third-party scripts when implementing storefront changes.
