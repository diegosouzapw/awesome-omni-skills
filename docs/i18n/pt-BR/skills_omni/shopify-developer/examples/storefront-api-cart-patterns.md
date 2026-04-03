# Storefront API Cart Patterns (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/examples/storefront-api-cart-patterns.md)

---


Use this file for headless storefront cart guidance.

## Create a cart

```graphql
mutation CartCreate($lines: [CartLineInput!]) {
  cartCreate(input: { lines: $lines }) {
    cart {
      id
      checkoutUrl
      totalQuantity
    }
    userErrors {
      field
      message
    }
  }
}
```

Variables:

```json
{
  "lines": [
    {
      "merchandiseId": "gid://shopify/ProductVariant/1234567890",
      "quantity": 1
    }
  ]
}
```

## Update cart lines

```graphql
mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      id
      totalQuantity
    }
    userErrors {
      field
      message
    }
  }
}
```

## Operator notes

- Use Storefront API for headless customer-facing cart flows.
- Do not substitute Admin API for browser-visible cart operations.
- Keep boundary decisions explicit: theme carts may use Ajax API, headless carts should use Storefront API.
- Inspect `userErrors` and session/cart persistence behavior in local and deployed environments.
