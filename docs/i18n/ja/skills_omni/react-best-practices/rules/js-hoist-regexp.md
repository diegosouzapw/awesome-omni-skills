# js-hoist-regexp.md (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-hoist-regexp.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-hoist-regexp.md)

---

---
title: Hoist RegExp Creation
impact: LOW-MEDIUM
impactDescription: avoids recreation
tags: javascript, regexp, optimization, memoization
---

## Hoist RegExp Creation

Don't create RegExp inside render. Hoist to module scope or memoize with `useMemo()`.

**Incorrect (new RegExp every render):**

```tsx
function Highlighter({ text, query }: Props) {
  const regex = new RegExp(`(${query})`, 'gi')
  const parts = text.split(regex)
  return <>{parts.map((part, i) => ...)}</>
}
```

**Correct (memoize or hoist):**

```tsx
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Highlighter({ text, query }: Props) {
  const regex = useMemo(
    () => new RegExp(`(${escapeRegex(query)})`, 'gi'),
    [query]
  )
  const parts = text.split(regex)
  return <>{parts.map((part, i) => ...)}</>
}
```

**Warning (global regex has mutable state):**

Global regex (`/g`) has mutable `lastIndex` state:

```typescript
const regex = /foo/g
regex.test('foo')  // true, lastIndex = 3
regex.test('foo')  // false, lastIndex = 0
```
