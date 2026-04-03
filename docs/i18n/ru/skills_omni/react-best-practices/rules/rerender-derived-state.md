# rerender-derived-state.md (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-derived-state.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-derived-state.md)

---

---
title: Subscribe to Derived State
impact: MEDIUM
impactDescription: reduces re-render frequency
tags: rerender, derived-state, media-query, optimization
---

## Subscribe to Derived State

Subscribe to derived boolean state instead of continuous values to reduce re-render frequency.

**Incorrect (re-renders on every pixel change):**

```tsx
function Sidebar() {
  const width = useWindowWidth()  // updates continuously
  const isMobile = width < 768
  return <nav className={isMobile ? 'mobile' : 'desktop'} />
}
```

**Correct (re-renders only when boolean changes):**

```tsx
function Sidebar() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return <nav className={isMobile ? 'mobile' : 'desktop'} />
}
```
