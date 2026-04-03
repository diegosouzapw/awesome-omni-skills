# Shopify Security (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-security.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-security.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-security.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-security.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-security.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-security.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-security.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-security.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-security.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-security.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-security.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-security.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-security.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-security.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-security.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-security.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-security.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-security.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-security.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-security.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-security.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-security.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-security.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-security.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-security.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-security.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-security.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-security.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-security.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-security.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-security.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-security.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-security.md)

---


Use this reference for app auth, webhook verification, token handling, and protected-data boundaries.

## Core guardrails

- Keep Admin API tokens server-side only.
- Do not expose app secrets, Admin tokens, or private webhook material in theme code or browser code.
- Minimize OAuth scopes to the smallest set required.
- Verify webhook HMAC signatures against the raw request body.
- Treat embedded app session handling as a distinct concern from OAuth install flow.
- Call out protected customer data handling explicitly when relevant.

## Operator checklist

1. Confirm whether the task uses Admin API, Storefront API, theme code, or embedded app code.
2. Verify which credentials are required and where they may safely live.
3. Check requested scopes against the exact feature being implemented.
4. For webhooks, confirm raw-body access before HMAC verification.
5. For embedded apps, confirm session-token assumptions instead of relying on older auth patterns.
6. If protected customer data is involved, state that compliance and review constraints may apply.

## Red flags

- Admin API calls from browser JavaScript
- tokens committed to theme files, snippets, or static assets
- examples that tell the user to paste secrets into source code
- webhook handlers that parse JSON before verifying the signature
- broad scopes with no feature justification

## Safe example patterns

- use `<ADMIN_TOKEN>` and `<SHOPIFY_API_SECRET>` placeholders
- refer to environment variables without naming real secrets
- recommend least-privilege scopes in prose
- keep privileged requests in backend or approved app server code

## Protected customer data note

If the task touches customer records, orders, or other sensitive personal data, note that implementation guidance may also require Shopify review, policy checks, or internal compliance review beyond this skill.
