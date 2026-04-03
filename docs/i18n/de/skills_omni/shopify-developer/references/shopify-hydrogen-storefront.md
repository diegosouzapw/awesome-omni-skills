# Shopify Hydrogen and Storefront Workflow (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/references/shopify-hydrogen-storefront.md)

---


Use this reference when the request is about headless storefronts, Hydrogen, or Storefront API architecture.

## Route selection

Choose this path when:

- the storefront is headless
- the user needs a custom React storefront on Shopify
- data loading, cart behavior, or Oxygen deployment is part of the task

Do not choose this path for normal theme customization unless the storefront is actually headless.

## Operator checklist

1. Confirm that headless is the real architecture.
2. Separate Storefront API use from Admin API use.
3. Keep privileged admin actions out of client storefront code.
4. Verify route loaders, actions, and cart/session behavior.
5. Compare local and Oxygen environments when debugging deployment differences.
6. Review caching before assuming stale data is a schema issue.

## Common failure modes

### Local works, Oxygen differs

**Likely causes:**
- environment mismatch
- cache behavior differences
- wrong Storefront API domain or token setup

**Recovery:** Compare deployed configuration first, then inspect loader/action assumptions.

### Wrong API boundary

**Symptoms:** Proposed Hydrogen solution uses Admin API directly from the client.

**Recovery:** Move privileged admin work to a secure server-side boundary and keep storefront data access on the correct surface.
