# Browser Compatibility Workflow (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/best-practices/references/browser-compatibility-baseline-workflow.md)

---


Use this workflow when a feature appears modern but support assumptions may be wrong.

## Review sequence

1. Define supported browsers, device classes, and runtime environments.
2. Identify the exact API, CSS feature, or platform behavior in question.
3. Check whether support is broad enough for the target audience.
4. Prefer feature detection over browser detection.
5. Add fallback behavior or progressive enhancement where necessary.
6. Add a polyfill only when target support requires it and the operational cost is justified.

## Preferred patterns

### JavaScript

```javascript
if ('IntersectionObserver' in window) {
  enableObserverMode()
} else {
  enableFallbackMode()
}
```

### CSS

```css
@supports (display: grid) {
  .layout { display: grid; }
}

@supports not (display: grid) {
  .layout { display: flex; }
}
```

## Avoid

- UA sniffing as a first-choice compatibility strategy
- assuming one evergreen browser result generalizes everywhere
- adding broad polyfill bundles without proving the need

## Review questions

- What exact browsers must be supported?
- Is the feature essential or progressive?
- What is the fallback when unsupported?
- Is a polyfill cheaper than maintaining a simpler fallback?
