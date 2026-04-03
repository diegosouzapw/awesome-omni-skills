# Image Delivery Playbook (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-web-optimization/references/image-delivery-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-web-optimization/references/image-delivery-playbook.md)

---


## Goals

Improve perceived speed and reduce transfer size without delaying the most important visual content.

## Rules of thumb

### Likely hero or LCP image

- do not lazy-load it
- provide explicit dimensions
- use responsive sources where appropriate
- consider `fetchpriority="high"` if it is clearly the key image
- verify it is requested early in the waterfall

Example:

```html
<img
  src="/hero-1200.webp"
  srcset="/hero-640.webp 640w, /hero-960.webp 960w, /hero-1200.webp 1200w"
  sizes="100vw"
  alt="Hero"
  width="1200"
  height="675"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>
```

### Below-the-fold images

- use `loading="lazy"`
- still provide dimensions
- still use responsive sizing
- avoid shipping originals that are much larger than displayed size

### Galleries and cards

- use `srcset` and `sizes`
- avoid one-size-fits-all image exports
- verify mobile layouts do not receive desktop-sized files

## Format and payload guidance

- prefer modern formats where your delivery stack supports them reliably
- compress aggressively enough to reduce bytes without damaging visible quality unacceptably
- replace decorative animations or GIF-like content with video where appropriate

## Common mistakes

- lazy-loading the hero image
- omitting `width` and `height`
- serving a single oversized source to every viewport
- preloading multiple alternative image formats for the same image
- assuming compression alone fixes late discovery or low priority
