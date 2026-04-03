# Hydrogen Storefront Loader Example (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/examples/hydrogen-storefront-loader-example.md)

---


Use this example to explain a minimal Storefront API data-loading pattern in Hydrogen-style server code.

```javascript
export async function loader({ context, params }) {
  const { storefront } = context

  const response = await storefront.query(
    `#graphql
    query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
      }
    }
    `,
    {
      variables: { handle: params.handle }
    }
  )

  return response
}
```

Checklist:

- keep Storefront API usage separate from Admin API logic
- confirm environment configuration in local and Oxygen deployments
- inspect caching and route loader behavior when debugging stale data
