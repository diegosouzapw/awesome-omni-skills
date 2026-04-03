# Shopify Router (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/agents/shopify-router.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/agents/shopify-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/agents/shopify-router.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/agents/shopify-router.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/agents/shopify-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/agents/shopify-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/agents/shopify-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/agents/shopify-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/agents/shopify-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/agents/shopify-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/agents/shopify-router.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/agents/shopify-router.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/agents/shopify-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/agents/shopify-router.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/agents/shopify-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/agents/shopify-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/agents/shopify-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/agents/shopify-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/agents/shopify-router.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/agents/shopify-router.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/agents/shopify-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/agents/shopify-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/agents/shopify-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/agents/shopify-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/agents/shopify-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/agents/shopify-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/agents/shopify-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/agents/shopify-router.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/agents/shopify-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/agents/shopify-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/agents/shopify-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/agents/shopify-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/agents/shopify-router.md)

---


Use this router before implementation when the correct Shopify surface is unclear.

## Route by request type

### Theme and Liquid

Choose this path if the task mentions:
- `.liquid` files
- sections, blocks, templates, snippets
- theme editor behavior
- storefront markup in a non-headless shop

Start with:
- `references/theme-development.md`
- `references/liquid-syntax.md`
- `references/shopify-theme-os2.md`

### Admin API or app backend

Choose this path if the task mentions:
- products, orders, customers, inventory, admin automation
- app scopes
- GraphQL mutations or admin queries
- webhooks or OAuth

Start with:
- `references/api-admin.md`
- `references/shopify-graphql-admin-patterns.md`
- `references/shopify-security.md`

### Storefront API or Hydrogen

Choose this path if the task mentions:
- headless storefronts
- Hydrogen
- Oxygen
- custom React storefront architecture

Start with:
- `references/api-storefront.md`
- `references/hydrogen.md`
- `references/shopify-hydrogen-storefront.md`

### Functions or checkout extensibility

Choose this path if the task mentions:
- discounts
- validations
- Shopify Scripts migration
- checkout extensions
- `checkout.liquid`

Start with:
- `references/functions.md`
- `references/shopify-functions-migration.md`
- `references/shopify-checkout-extensibility.md`

### Troubleshooting and validation

Choose this path if the user already has failing behavior and needs diagnosis.

Start with:
- `references/debugging.md`
- `references/shopify-troubleshooting-runbooks.md`
- `references/shopify-performance-checklist.md`

## Handoff triggers

Consider handing off to adjacent skills when:
- the issue is generic React or TypeScript rather than Shopify-specific
- the request becomes a deep security review or compliance task
- the request is broad frontend performance work after Shopify-specific bottlenecks are isolated
- the problem is generic GraphQL client architecture rather than Shopify surface selection
