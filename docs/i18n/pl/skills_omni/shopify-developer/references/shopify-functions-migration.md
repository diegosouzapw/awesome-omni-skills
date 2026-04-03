# Shopify Functions Migration (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-functions-migration.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-functions-migration.md)

---


Use this reference when the task involves Shopify Scripts replacement or new commerce logic.

## Decision rule

- If the request is for new discount, validation, or commerce logic, start with Shopify Functions.
- If the request is for legacy Scripts maintenance, answer in migration terms unless the user explicitly needs short-term legacy support.

## Migration checklist

1. Identify the current Script behavior clearly.
2. Determine the desired target behavior, not just the old implementation shape.
3. Confirm a supported Shopify Function target exists.
4. Map any parity gaps explicitly.
5. Test the behavior in the real commerce flow.
6. Record unsupported assumptions during handoff.

## Common migration risks

- assuming the old Script maps 1:1 to Functions
- targeting the wrong Function capability
- validating only build success rather than checkout or discount behavior
- overlooking app configuration required to activate the Function

## Safer operator wording

Say:
- "This legacy Script should be assessed for Functions migration."
- "This behavior may need redesign if parity is not available."

Avoid saying:
- "Just replace Scripts with Functions directly" unless parity is already confirmed.
