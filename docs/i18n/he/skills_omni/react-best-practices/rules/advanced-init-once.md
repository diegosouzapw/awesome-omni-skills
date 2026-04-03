# advanced-init-once.md (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/advanced-init-once.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/advanced-init-once.md)

---

---
title: Initialize App Once, Not Per Mount
impact: LOW-MEDIUM
impactDescription: avoids duplicate init in development
tags: initialization, useEffect, app-startup, side-effects
---

## Initialize App Once, Not Per Mount

Do not put app-wide initialization that must run once per app load inside `useEffect([])` of a component. Components can remount and effects will re-run. Use a module-level guard or top-level init in the entry module instead.

**Incorrect (runs twice in dev, re-runs on remount):**

```tsx
function Comp() {
  useEffect(() => {
    loadFromStorage()
    checkAuthToken()
  }, [])

  // ...
}
```

**Correct (once per app load):**

```tsx
let didInit = false

function Comp() {
  useEffect(() => {
    if (didInit) return
    didInit = true
    loadFromStorage()
    checkAuthToken()
  }, [])

  // ...
}
```

Reference: [Initializing the application](https://react.dev/learn/you-might-not-need-an-effect#initializing-the-application)
