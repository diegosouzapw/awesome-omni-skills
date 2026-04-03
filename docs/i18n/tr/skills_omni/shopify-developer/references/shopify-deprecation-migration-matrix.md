# Shopify Deprecation and Migration Matrix (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-deprecation-migration-matrix.md)

---


Use this file when a request involves an older Shopify implementation or asks for a pattern that should no longer be recommended for new work.

| Older surface or pattern | Preferred current direction | Operator guidance |
| --- | --- | --- |
| Shopify Scripts | Shopify Functions | For new logic, target Functions. For migration, map behavior carefully and document parity gaps rather than assuming 1:1 replacement. |
| `checkout.liquid` customization | Checkout extensibility | Do not recommend `checkout.liquid` for new implementations. Reframe as checkout extensibility or checkout UI extension work. |
| REST-heavy Admin API usage | Admin GraphQL API | Prefer GraphQL as the main admin integration surface unless the task is explicitly constrained by an existing legacy implementation. |
| Legacy custom app auth model assumptions | Current Shopify app auth guidance | Re-check scopes, sessions, and install/auth flow assumptions instead of copying old app patterns. |
| Polaris React migration contexts | Polaris Web Components or currently supported app UI patterns | Confirm the actual app UI stack in use before prescribing migration work. |
| Older Hydrogen/Remix-era patterns | Current Hydrogen guidance in the React Router era | Verify runtime, routing, and deployment assumptions before applying older examples. |

## Operator rules

- If the user asks for a deprecated approach, answer in migration terms unless the task is strictly about legacy maintenance.
- Do not present deprecated patterns as the default or recommended path.
- When parity is incomplete, say so explicitly.
- Separate "legacy support" from "new implementation guidance" in the answer.

## Migration review questions

- Is the current implementation legacy-only, or can it be replaced now?
- Which supported Shopify surface replaces it?
- Are there feature gaps or behavior changes?
- Does the migration affect auth, deployment, or merchant configuration?
- What needs real-store validation after migration?
