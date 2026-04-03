# Shopify Security Checklist (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-security-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-security-checklist.md)

---


Use this checklist before shipping Shopify app, API, webhook, or headless changes.

## Credentials and token handling

- Keep Admin API access tokens server-side only.
- Do not place Admin tokens in theme files, browser code, screenshots, examples, or logs.
- Use placeholders such as `<ADMIN_TOKEN>` in examples.
- Prefer environment variables or approved secret storage.
- Separate development, staging, and production secrets clearly.

## Access boundaries

- Use Admin API only from a secure server-side context.
- Treat Storefront API access as a different trust boundary than Admin API access.
- Do not confuse public storefront access with privileged merchant operations.
- Minimize app scopes to least privilege.

## App auth and session assumptions

- Confirm the app auth flow matches the installation and runtime model.
- Document any online/offline session assumptions when relevant.
- Re-check scopes when a query works in one environment but not another.

## Webhooks

- Verify Shopify webhook HMAC signatures.
- Verify against the raw request body.
- Confirm the webhook secret matches the environment.
- Make handlers idempotent because deliveries may retry.
- Return timely responses and do follow-up work asynchronously when needed.

## Theme and storefront safety

- Never embed Admin credentials in Liquid or storefront JavaScript.
- Avoid unnecessary client-visible data exposure.
- Validate third-party scripts and storefront performance impact.

## Headless and Hydrogen

- Separate server-only and client-visible environment variables.
- Confirm Storefront API domain/token configuration.
- Review cache assumptions before exposing sensitive or stale data patterns.

## Review prompts for handoff

Before merge or handoff, answer:

- Which API is being used: Admin, Storefront, or Ajax?
- Which credentials are involved, and where are they stored?
- Are scopes minimal?
- Is any privileged action exposed client-side by mistake?
- Are webhook signatures verified?
- Are retries/idempotency handled?
- Does the answer accidentally recommend a deprecated or insecure pattern?
