# Theme Validation Checklist (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/theme-validation-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/theme-validation-checklist.md)

---


Use this checklist before handoff or deployment for Shopify theme changes.

## Structure and architecture

- Confirm the change belongs in the theme, not in a headless or app-only surface.
- Prefer sections, blocks, snippets, and JSON templates over brittle hardcoding.
- Confirm merchant-configurable settings are exposed through schema when appropriate.

## Liquid correctness

- Validate object availability for the template context.
- Guard optional values and metafields safely.
- Reduce complex logic where possible.
- Reuse snippets with clear inputs.

## Theme tooling

- Run Theme Check if available in the workflow.
- Fix meaningful findings before handoff.
- Re-check any warnings related to schema, Liquid, or theme structure.

## Preview verification

- Confirm you are inspecting the correct theme preview.
- Verify the changed template, section, or block visually.
- Test merchant settings interactions in the theme editor if relevant.
- Verify cart/product/collection behavior for the exact affected flow.

## JSON and schema checks

- Validate JSON template syntax.
- Validate section schema shape and setting definitions.
- Confirm blocks, presets, and settings are wired correctly.

## Performance review

- Review image sizes and loading strategy.
- Minimize unnecessary third-party scripts.
- Avoid excessive Liquid loops or repeated expensive rendering.
- Check impact on key storefront paths, not just the edited component.

## Handoff notes

Record:
- files changed
- preview or theme context used
- validation steps completed
- known limitations or merchant setup assumptions
