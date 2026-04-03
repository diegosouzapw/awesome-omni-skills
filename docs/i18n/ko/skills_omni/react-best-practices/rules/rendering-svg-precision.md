# rendering-svg-precision.md (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-svg-precision.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-svg-precision.md)

---

---
title: Optimize SVG Precision
impact: LOW
impactDescription: reduces file size
tags: rendering, svg, optimization, svgo
---

## Optimize SVG Precision

Reduce SVG coordinate precision to decrease file size. The optimal precision depends on the viewBox size, but in general reducing precision should be considered.

**Incorrect (excessive precision):**

```svg
<path d="M 10.293847 20.847362 L 30.938472 40.192837" />
```

**Correct (1 decimal place):**

```svg
<path d="M 10.3 20.8 L 30.9 40.2" />
```

**Automate with SVGO:**

```bash
npx svgo --precision=1 --multipass icon.svg
```
