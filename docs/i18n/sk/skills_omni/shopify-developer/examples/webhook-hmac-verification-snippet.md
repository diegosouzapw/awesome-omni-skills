# Webhook HMAC Verification Snippet (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/examples/webhook-hmac-verification-snippet.md)

---


Use this example to explain the verification shape. Adapt it to the server framework in use.

```javascript
import crypto from 'node:crypto'

function verifyShopifyWebhook({ rawBody, hmacHeader, secret }) {
  const digest = crypto
    .createHmac('sha256', secret)
    .update(rawBody, 'utf8')
    .digest('base64')

  return crypto.timingSafeEqual(
    Buffer.from(digest, 'utf8'),
    Buffer.from(hmacHeader || '', 'utf8')
  )
}
```

Checklist:

- verify against the raw request body, not a re-serialized object
- load the secret from a safe server-side source
- reject invalid signatures cleanly
- make the handler idempotent because Shopify may retry deliveries

Use placeholders like `<SHOPIFY_API_SECRET>` in prose, never real values.
