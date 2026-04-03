# Sitemap rules and validation (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇪🇸 [es](../../../../es/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇫🇷 [fr](../../../../fr/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇩🇪 [de](../../../../de/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇮🇹 [it](../../../../it/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇷🇺 [ru](../../../../ru/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇯🇵 [ja](../../../../ja/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇰🇷 [ko](../../../../ko/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇸🇦 [ar](../../../../ar/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇮🇳 [hi](../../../../hi/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇮🇳 [in](../../../../in/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇹🇭 [th](../../../../th/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇻🇳 [vi](../../../../vi/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇮🇩 [id](../../../../id/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇲🇾 [ms](../../../../ms/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇳🇱 [nl](../../../../nl/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇵🇱 [pl](../../../../pl/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇸🇪 [sv](../../../../sv/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇳🇴 [no](../../../../no/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇩🇰 [da](../../../../da/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇫🇮 [fi](../../../../fi/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇵🇹 [pt](../../../../pt/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇷🇴 [ro](../../../../ro/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇭🇺 [hu](../../../../hu/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇧🇬 [bg](../../../../bg/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇸🇰 [sk](../../../../sk/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇮🇱 [he](../../../../he/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇵🇭 [phi](../../../../phi/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇨🇿 [cs](../../../../cs/skills_omni/seo/references/sitemap-rules-and-validation.md) · 🇹🇷 [tr](../../../../tr/skills_omni/seo/references/sitemap-rules-and-validation.md)

---


## Core rules

- Include only URLs you want crawled and considered for indexing.
- Prefer canonical URLs only.
- Exclude redirected, blocked, duplicate, error, and `noindex` URLs.
- A sitemap file can contain up to 50,000 URLs or be up to 50MB uncompressed.
- Use sitemap index files for larger sites.

## Important notes

- `priority` and `changefreq` are not useful optimization levers for Google.
- `lastmod` is helpful only when it is maintained accurately.
- Keep protocol, host, and trailing slash conventions consistent with canonicals and redirects.

## Validation steps

1. Sample URLs from the sitemap.
2. Confirm they return `200`.
3. Confirm they are canonical and indexable.
4. Confirm they are not blocked by `robots.txt` if crawl is desired.
5. Confirm sitemap URLs match preferred site architecture.
6. If Search Console is available, review sitemap submission and indexing patterns.

## Typical sitemap quality failures

- parameterized URLs included as canonical pages
- redirected URLs left in the sitemap
- `noindex` pages included
- locale duplicates competing with canonical targets
- stale URLs that no longer return `200`
