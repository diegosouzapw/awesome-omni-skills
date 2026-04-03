# Hreflang implementation patterns (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/seo/references/hreflang-implementation-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/seo/references/hreflang-implementation-patterns.md)

---


Use `hreflang` only for alternate localized versions of the same page intent.

## Rules

- Each localized page should include a self-reference.
- Alternate references should be reciprocal.
- Locale codes must be valid, such as `en`, `en-GB`, `es`, `es-MX`.
- Use `x-default` for a fallback or selector page where appropriate.
- Canonical tags should not collapse all locales onto one URL unless that is truly the intended canonical strategy.

## Subfolder example

```html
<link rel="alternate" hreflang="en" href="https://example.com/products/blue-widget" />
<link rel="alternate" hreflang="en-GB" href="https://example.com/uk/products/blue-widget" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/produits/widget-bleu" />
<link rel="alternate" hreflang="x-default" href="https://example.com/products/blue-widget" />
```

## Subdomain example

```html
<link rel="alternate" hreflang="en" href="https://en.example.com/page" />
<link rel="alternate" hreflang="de" href="https://de.example.com/page" />
<link rel="alternate" hreflang="x-default" href="https://www.example.com/language-selector" />
```

## ccTLD example

```html
<link rel="alternate" hreflang="en-US" href="https://example.com/page" />
<link rel="alternate" hreflang="en-GB" href="https://example.co.uk/page" />
<link rel="alternate" hreflang="de-DE" href="https://example.de/seite" />
```

## Common failures

- Missing return links
- Invalid locale codes
- Connecting non-equivalent pages
- Canonical pointing to another locale
- One locale omitted from the reciprocal set
