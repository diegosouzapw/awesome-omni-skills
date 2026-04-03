# Functions Migration Example (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/examples/functions-migration-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/examples/functions-migration-example.md)

---


Use this example to frame migration safely.

## Legacy request

"We have a Shopify Script that applies discount behavior based on cart conditions. Can we move it to Shopify Functions?"

## Safe operator response shape

1. Identify the exact business rule, not just the old Script file.
2. Confirm the supported Function target for that behavior.
3. Map any configuration required in the app.
4. Call out parity gaps explicitly.
5. Validate the result in the real cart or checkout flow.

## Example migration summary

```text
This should be treated as a Scripts-to-Functions migration. The next step is to map the existing discount rule to a supported Shopify Function target, verify whether the full behavior is supported, and document any parity gaps before implementation. Do not assume a 1:1 replacement until the target capability is confirmed.
```
