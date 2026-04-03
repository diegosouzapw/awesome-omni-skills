# Shopify Troubleshooting Runbooks (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-troubleshooting-runbooks.md)

---


Use this file when the first fix attempt would otherwise be speculative.

## Runbook: GraphQL throttling or unstable queries

**Symptoms:** `THROTTLED` errors, intermittent failures, stalled pagination.

**Inspect:**
- response `errors`
- `extensions` or cost metadata
- fields requested
- pagination design
- API version used

**Fix direction:** Reduce cost, paginate correctly, pin the intended version, and avoid over-fetching.

## Runbook: Webhook signature failures

**Symptoms:** 401 or verification mismatch on inbound webhook requests.

**Inspect:**
- raw body handling
- shared secret source
- framework middleware behavior
- environment-specific config

**Fix direction:** Verify HMAC against the raw body and align secret/config handling across environments.

## Runbook: Theme preview mismatch

**Symptoms:** Theme editor output differs from storefront preview, or changes do not appear.

**Inspect:**
- active theme/preview target
- JSON template validity
- section schema
- local sync or CLI state

**Fix direction:** Validate the target theme, schema, and template structure before changing Liquid logic.

## Runbook: Liquid object or snippet scope bug

**Symptoms:** Variables are missing, snippet output is blank, or template context assumptions fail.

**Inspect:**
- object availability for the current template
- variables passed into `render`
- shadowed variables
- nil guards

**Fix direction:** Pass explicit variables into snippets and re-check the current object context.

## Runbook: App install or auth callback mismatch

**Symptoms:** Install flow fails, tokens are missing, or callback handling breaks by environment.

**Inspect:**
- app URL and callback config
- environment variables
- requested scopes
- auth model assumptions

**Fix direction:** Reconcile environment-specific app config and confirm the current Shopify auth flow is being followed.

## Runbook: Scripts migration parity gap

**Symptoms:** A legacy Script behavior cannot be reproduced exactly with the proposed Function design.

**Inspect:**
- desired business behavior
- target Function capability
- app configuration and activation path

**Fix direction:** Document the gap clearly and propose a supported redesign if exact parity is unavailable.

## Runbook: Storefront API unauthorized or empty responses

**Symptoms:** Headless storefront queries return unauthorized responses or missing data.

**Inspect:**
- Storefront token configuration
- store domain
- endpoint version
- route loader usage
- environment differences

**Fix direction:** Correct the Storefront API configuration first, then re-check query shape and data loading behavior.
