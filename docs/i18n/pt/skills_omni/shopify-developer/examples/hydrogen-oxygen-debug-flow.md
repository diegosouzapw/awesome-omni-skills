# Hydrogen and Oxygen Debug Flow (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/examples/hydrogen-oxygen-debug-flow.md)

---


Use this flow when a Hydrogen storefront behaves differently locally and in Oxygen.

## 1. Environment check

- Compare environment variables between local and deployed runtime.
- Confirm Storefront API domain and token values.
- Separate server-only values from client-visible values.

## 2. Data loading check

- Verify route loader/action behavior.
- Confirm the failing route is using the expected Storefront API call.
- Inspect whether stale data is actually a cache issue.

## 3. Cart and session check

- Confirm cart/session behavior is consistent across environments.
- Check whether cookies, sessions, or cart identifiers are handled differently after deploy.

## 4. Deployment check

- Confirm the current deployed build matches the expected code.
- Re-check Oxygen configuration assumptions.

## 5. Boundary review

- Is this a Storefront API problem, a routing/data problem, or an environment/config problem?
- Avoid blaming the API first if local and deployment differ materially.
