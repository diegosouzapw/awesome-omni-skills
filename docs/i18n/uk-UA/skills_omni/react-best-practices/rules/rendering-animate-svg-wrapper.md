# rendering-animate-svg-wrapper.md (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-animate-svg-wrapper.md)

---

---
title: Animate SVG Wrapper Instead of SVG Element
impact: LOW
impactDescription: enables hardware acceleration
tags: rendering, svg, css, animation, performance
---

## Animate SVG Wrapper Instead of SVG Element

Many browsers don't have hardware acceleration for CSS3 animations on SVG elements. Wrap SVG in a `<div>` and animate the wrapper instead.

**Incorrect (animating SVG directly - no hardware acceleration):**

```tsx
function LoadingSpinner() {
  return (
    <svg 
      className="animate-spin"
      width="24" 
      height="24" 
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
    </svg>
  )
}
```

**Correct (animating wrapper div - hardware accelerated):**

```tsx
function LoadingSpinner() {
  return (
    <div className="animate-spin">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
      </svg>
    </div>
  )
}
```

This applies to all CSS transforms and transitions (`transform`, `opacity`, `translate`, `scale`, `rotate`). The wrapper div allows browsers to use GPU acceleration for smoother animations.
