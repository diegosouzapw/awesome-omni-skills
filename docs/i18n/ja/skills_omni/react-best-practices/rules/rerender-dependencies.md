# rerender-dependencies.md (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-dependencies.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-dependencies.md)

---

---
title: Narrow Effect Dependencies
impact: LOW
impactDescription: minimizes effect re-runs
tags: rerender, useEffect, dependencies, optimization
---

## Narrow Effect Dependencies

Specify primitive dependencies instead of objects to minimize effect re-runs.

**Incorrect (re-runs on any user field change):**

```tsx
useEffect(() => {
  console.log(user.id)
}, [user])
```

**Correct (re-runs only when id changes):**

```tsx
useEffect(() => {
  console.log(user.id)
}, [user.id])
```

**For derived state, compute outside effect:**

```tsx
// Incorrect: runs on width=767, 766, 765...
useEffect(() => {
  if (width < 768) {
    enableMobileMode()
  }
}, [width])

// Correct: runs only on boolean transition
const isMobile = width < 768
useEffect(() => {
  if (isMobile) {
    enableMobileMode()
  }
}, [isMobile])
```
