# Technical SEO checklist (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/seo/references/technical-seo-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/seo/references/technical-seo-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/seo/references/technical-seo-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/seo/references/technical-seo-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/seo/references/technical-seo-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/seo/references/technical-seo-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/seo/references/technical-seo-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/seo/references/technical-seo-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/seo/references/technical-seo-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/seo/references/technical-seo-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/seo/references/technical-seo-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/seo/references/technical-seo-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/seo/references/technical-seo-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/seo/references/technical-seo-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/seo/references/technical-seo-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/seo/references/technical-seo-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/seo/references/technical-seo-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/seo/references/technical-seo-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/seo/references/technical-seo-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/seo/references/technical-seo-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/seo/references/technical-seo-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/seo/references/technical-seo-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/seo/references/technical-seo-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/seo/references/technical-seo-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/seo/references/technical-seo-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/seo/references/technical-seo-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/seo/references/technical-seo-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/seo/references/technical-seo-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/seo/references/technical-seo-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/seo/references/technical-seo-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/seo/references/technical-seo-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/seo/references/technical-seo-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/seo/references/technical-seo-checklist.md)

---


Use this checklist before and after implementation. Apply only the items relevant to the affected page type.

## 1. URL and response checks

- [ ] URL returns the expected status code (`200` for indexable pages)
- [ ] No accidental redirect chains
- [ ] Preferred protocol and host are consistent (`https`, `www` or non-`www`)
- [ ] No obvious soft-404 behavior

## 2. Crawl and index controls

- [ ] `robots.txt` does not block required crawl paths
- [ ] Important pages are not unintentionally `noindex`
- [ ] Non-HTML assets use `X-Robots-Tag` when index control is needed
- [ ] Snippet directives are intentional, not inherited accidentally

## 3. Canonicalization

- [ ] Canonical points to the intended preferred URL
- [ ] Canonical page uses self-referencing canonical where appropriate
- [ ] Redirects, canonicals, internal links, and sitemap entries agree
- [ ] Parameter or faceted duplicates do not compete with the canonical URL

## 4. On-page search signals

- [ ] Title is unique and descriptive
- [ ] Meta description is useful and matches page intent
- [ ] Main heading reflects the page topic
- [ ] Internal links use descriptive anchor text

## 5. Structured data

- [ ] Markup matches visible content
- [ ] Google-supported schema type is appropriate for the page
- [ ] Required properties are present
- [ ] Rich Results Test passes for intended enhancements
- [ ] Schema validator shows no structural issues

## 6. Sitemap checks

- [ ] URL belongs in the sitemap
- [ ] URL is canonical, indexable, and returns `200`
- [ ] Redirected, blocked, duplicate, or `noindex` URLs are excluded
- [ ] `lastmod` is used honestly when maintained

## 7. International SEO

- [ ] `hreflang` alternates are equivalent localized pages
- [ ] Each page references itself
- [ ] Alternate annotations are reciprocal
- [ ] Locale codes are valid
- [ ] Canonicals do not collapse locale variants unintentionally

## 8. Validation evidence to capture

- [ ] Rendered HTML snippet or source excerpt
- [ ] Relevant headers
- [ ] Search Console observation if available
- [ ] Rich Results Test result if structured data changed
- [ ] Sitemap location and inclusion decision
