# js-early-exit.md (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-early-exit.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-early-exit.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-early-exit.md)

---

---
title: Early Return from Functions
impact: LOW-MEDIUM
impactDescription: avoids unnecessary computation
tags: javascript, functions, optimization, early-return
---

## Early Return from Functions

Return early when result is determined to skip unnecessary processing.

**Incorrect (processes all items even after finding answer):**

```typescript
function validateUsers(users: User[]) {
  let hasError = false
  let errorMessage = ''
  
  for (const user of users) {
    if (!user.email) {
      hasError = true
      errorMessage = 'Email required'
    }
    if (!user.name) {
      hasError = true
      errorMessage = 'Name required'
    }
    // Continues checking all users even after error found
  }
  
  return hasError ? { valid: false, error: errorMessage } : { valid: true }
}
```

**Correct (returns immediately on first error):**

```typescript
function validateUsers(users: User[]) {
  for (const user of users) {
    if (!user.email) {
      return { valid: false, error: 'Email required' }
    }
    if (!user.name) {
      return { valid: false, error: 'Name required' }
    }
  }

  return { valid: true }
}
```
