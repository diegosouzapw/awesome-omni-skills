# Page type SEO matrix (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/seo/references/page-type-seo-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/seo/references/page-type-seo-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/seo/references/page-type-seo-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/seo/references/page-type-seo-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/seo/references/page-type-seo-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/seo/references/page-type-seo-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/seo/references/page-type-seo-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/seo/references/page-type-seo-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/seo/references/page-type-seo-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/seo/references/page-type-seo-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/seo/references/page-type-seo-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/seo/references/page-type-seo-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/seo/references/page-type-seo-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/seo/references/page-type-seo-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/seo/references/page-type-seo-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/seo/references/page-type-seo-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/seo/references/page-type-seo-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/seo/references/page-type-seo-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/seo/references/page-type-seo-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/seo/references/page-type-seo-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/seo/references/page-type-seo-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/seo/references/page-type-seo-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/seo/references/page-type-seo-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/seo/references/page-type-seo-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/seo/references/page-type-seo-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/seo/references/page-type-seo-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/seo/references/page-type-seo-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/seo/references/page-type-seo-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/seo/references/page-type-seo-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/seo/references/page-type-seo-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/seo/references/page-type-seo-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/seo/references/page-type-seo-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/seo/references/page-type-seo-matrix.md)

---


Use this matrix to decide which SEO elements are usually expected by page type.

| Page type | Title / description | Canonical | Sitemap | Structured data | `hreflang` | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Homepage | Yes | Yes | Yes | `Organization` | If localized | Keep host/protocol signals consistent |
| Article / blog post | Yes | Yes | Yes | `Article`, `BreadcrumbList` | If localized equivalent exists | Match schema to visible editorial content |
| Product detail page | Yes | Yes | Yes | `Product`, `BreadcrumbList` | If localized equivalent exists | Offers, price, availability must match visible data |
| Category / collection page | Yes | Yes | Usually yes | `BreadcrumbList` | If localized equivalent exists | Avoid product markup on listing pages unless justified |
| Marketing landing page | Yes | Yes | Maybe | Usually none or `BreadcrumbList` | If localized equivalent exists | Keep focus on canonical/indexability |
| Filtered / faceted page | Case-by-case | Case-by-case | Usually no unless intentionally indexable | Usually none | Rare | Decide based on unique search value |
| PDF / media asset | Limited | Usually n/a | Usually no | n/a | Rare | Use `X-Robots-Tag` for indexing control when needed |

## Quick rules

- If a page should rank independently, it usually needs a stable canonical URL, discoverable internal links, and clear metadata.
- If a page is a duplicate, redirect or canonicalize instead of optimizing every duplicate variant.
- If structured data is added, validate feature eligibility, not just schema syntax.
- If localized pages are not true equivalents, do not connect them with `hreflang`.
