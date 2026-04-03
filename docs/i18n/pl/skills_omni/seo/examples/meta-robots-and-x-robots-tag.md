# Meta robots and X-Robots-Tag examples (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇪🇸 [es](../../../../es/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇫🇷 [fr](../../../../fr/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇩🇪 [de](../../../../de/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇮🇹 [it](../../../../it/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇷🇺 [ru](../../../../ru/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇯🇵 [ja](../../../../ja/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇰🇷 [ko](../../../../ko/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇸🇦 [ar](../../../../ar/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇮🇳 [hi](../../../../hi/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇮🇳 [in](../../../../in/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇹🇭 [th](../../../../th/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇻🇳 [vi](../../../../vi/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇮🇩 [id](../../../../id/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇲🇾 [ms](../../../../ms/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇳🇱 [nl](../../../../nl/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇵🇱 [pl](../../../../pl/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇸🇪 [sv](../../../../sv/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇳🇴 [no](../../../../no/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇩🇰 [da](../../../../da/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇫🇮 [fi](../../../../fi/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇵🇹 [pt](../../../../pt/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇷🇴 [ro](../../../../ro/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇭🇺 [hu](../../../../hu/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇧🇬 [bg](../../../../bg/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇸🇰 [sk](../../../../sk/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇮🇱 [he](../../../../he/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇵🇭 [phi](../../../../phi/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇨🇿 [cs](../../../../cs/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md) · 🇹🇷 [tr](../../../../tr/skills_omni/seo/examples/meta-robots-and-x-robots-tag.md)

---


## Indexable HTML page

```html
<meta name="robots" content="index,follow" />
```

## Prevent indexing of an HTML page

```html
<meta name="robots" content="noindex,follow" />
```

## Limit snippets

```html
<meta name="robots" content="max-snippet:120,max-image-preview:large" />
```

## Prevent indexing of a PDF via HTTP header

```text
X-Robots-Tag: noindex
```

## Prevent indexing of an image via HTTP header

```text
X-Robots-Tag: noindex
```

## Important reminder

`robots.txt` controls crawling access, while `noindex` controls indexing. They are related but not interchangeable.
