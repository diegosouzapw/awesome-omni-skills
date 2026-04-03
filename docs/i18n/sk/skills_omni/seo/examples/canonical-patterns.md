# Canonical implementation patterns (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/seo/examples/canonical-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/seo/examples/canonical-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/seo/examples/canonical-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/seo/examples/canonical-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/seo/examples/canonical-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/seo/examples/canonical-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/seo/examples/canonical-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/seo/examples/canonical-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/seo/examples/canonical-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/seo/examples/canonical-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/seo/examples/canonical-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/seo/examples/canonical-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/seo/examples/canonical-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/seo/examples/canonical-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/seo/examples/canonical-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/seo/examples/canonical-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/seo/examples/canonical-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/seo/examples/canonical-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/seo/examples/canonical-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/seo/examples/canonical-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/seo/examples/canonical-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/seo/examples/canonical-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/seo/examples/canonical-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/seo/examples/canonical-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/seo/examples/canonical-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/seo/examples/canonical-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/seo/examples/canonical-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/seo/examples/canonical-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/seo/examples/canonical-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/seo/examples/canonical-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/seo/examples/canonical-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/seo/examples/canonical-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/seo/examples/canonical-patterns.md)

---


## Self-referencing canonical

```html
<link rel="canonical" href="https://example.com/products/blue-widget" />
```

Use on the preferred URL itself.

## Parameter cleanup

Preferred URL:

```html
<link rel="canonical" href="https://example.com/products/blue-widget" />
```

Duplicate visited as:

`https://example.com/products/blue-widget?ref=homepage`

Expected behavior:
- canonical points to clean URL
- sitemap contains only clean URL
- internal links prefer clean URL

## HTTP to HTTPS migration

- redirect `http://example.com/page` to `https://example.com/page`
- canonical on destination points to `https://example.com/page`
- sitemap includes only HTTPS URLs

## Faceted navigation

Do not blindly canonicalize every filtered result to the parent category. First decide whether the filtered page has unique search value and should be indexable.

## Cross-domain duplicates

Use cautiously. Only declare a cross-domain canonical when the preferred source is intentional and under appropriate control.
