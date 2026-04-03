# Shopify Task Router (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-task-router.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-task-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-task-router.md)

---


Use this file to classify a Shopify request before choosing tools, APIs, or implementation patterns.

## 1. What is the user actually trying to change?

### A. Theme rendering, layout, or merchant-editable storefront UI
Use:
- Liquid
- Online Store 2.0 theme architecture
- Sections, blocks, snippets, templates, schema

Start with:
- `references/theme-development.md`
- `references/liquid-syntax.md`
- `references/liquid-objects.md`

Usually not:
- Admin API
- Hydrogen
- checkout.liquid for new work

### B. Theme-side cart interactions on a classic storefront
Use:
- Ajax API where appropriate
- theme JavaScript + Liquid

Start with:
- `references/api-storefront.md`
- `references/theme-development.md`

Usually not:
- Admin API for customer cart UI
- Storefront API unless the storefront is headless

### C. Merchant or admin data operations
Use:
- Admin GraphQL API

Start with:
- `references/api-admin.md`
- `examples/admin-graphql-query-patterns.md`

Examples:
- products, orders, inventory, metafields, admin automation

Rules:
- keep tokens server-side
- pin API version
- inspect scopes, errors, pagination, and throttle cost

### D. Customer-facing headless storefront
Use:
- Storefront API
- Hydrogen if the implementation is Shopify headless
- Oxygen for deployment/runtime context

Start with:
- `references/hydrogen.md`
- `references/api-storefront.md`
- `examples/storefront-api-cart-patterns.md`

Rule:
- do not recommend headless by default if a theme can satisfy the requirement

### E. App, extension, webhook, or embedded app work
Use:
- Shopify app development workflow
- Shopify CLI
- extension-specific guidance
- webhook auth and verification

Start with:
- `references/app-development.md`
- `references/shopify-security-checklist.md`
- `examples/webhook-verification-snippets.md`

### F. Discounts, validation, or custom commerce logic
Use:
- Shopify Functions

Start with:
- `references/functions.md`
- `examples/functions-migration-playbook.md`
- `references/shopify-deprecation-migration-matrix.md`

Rule:
- do not recommend Shopify Scripts for new work

### G. Checkout customization
Use:
- checkout extensibility / checkout UI extensions

Start with:
- `references/app-development.md`
- `references/shopify-deprecation-migration-matrix.md`

Rule:
- do not suggest `checkout.liquid` for new implementations

## 2. Quick boundary checks

Ask these before proceeding:

- Is the storefront theme-based or headless?
- Is this customer-facing or admin-only?
- Does this require server-side privileges?
- Is checkout involved?
- Is the user maintaining a legacy implementation or building something new?
- Does the request touch a deprecated surface?

## 3. Fast anti-pattern detector

If you see this request... | Be careful because...
--- | ---
"Use Admin API from theme JavaScript" | Admin API credentials must not be exposed client-side
"Customize checkout.liquid" | Deprecated for new implementation paths
"Use Scripts for discount logic" | New work should target Shopify Functions
"Use Hydrogen for a small theme tweak" | Headless may be unnecessary complexity
"Use Storefront API for admin inventory updates" | Wrong API boundary; use Admin GraphQL instead

## 4. Escalate or hand off when

Hand off to adjacent specialties when the problem becomes primarily:
- React architecture beyond Shopify specifics
- GraphQL client architecture beyond Shopify API usage
- accessibility auditing
- broader performance engineering
- deep security review beyond scopes, tokens, and webhooks
