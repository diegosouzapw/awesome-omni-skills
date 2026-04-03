# Functions Migration Playbook (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/examples/functions-migration-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/examples/functions-migration-playbook.md)

---


Use this playbook when a request asks to migrate Shopify Scripts behavior or design new commerce logic.

## Migration steps

1. Identify the exact behavior implemented today.
2. Determine whether the behavior maps to a supported Shopify Function target.
3. Separate truly supported parity from assumptions or custom edge cases.
4. Implement the new logic in the app/function workflow.
5. Validate behavior in the real checkout or commerce path.
6. Document any gaps clearly.

## Common operator mistakes

- assuming every Script pattern has a direct Function equivalent
- validating build success but not runtime behavior
- forgetting configuration or target selection
- describing Scripts as acceptable for new work

## Review template

- Legacy behavior:
- Desired new behavior:
- Function target selected:
- Known parity gaps:
- Validation still required:
