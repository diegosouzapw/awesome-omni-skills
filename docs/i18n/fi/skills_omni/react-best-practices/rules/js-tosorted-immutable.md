# js-tosorted-immutable.md (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-tosorted-immutable.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-tosorted-immutable.md)

---

---
title: Use toSorted() Instead of sort() for Immutability
impact: MEDIUM-HIGH
impactDescription: prevents mutation bugs in React state
tags: javascript, arrays, immutability, react, state, mutation
---

## Use toSorted() Instead of sort() for Immutability

`.sort()` mutates the array in place, which can cause bugs with React state and props. Use `.toSorted()` to create a new sorted array without mutation.

**Incorrect (mutates original array):**

```typescript
function UserList({ users }: { users: User[] }) {
  // Mutates the users prop array!
  const sorted = useMemo(
    () => users.sort((a, b) => a.name.localeCompare(b.name)),
    [users]
  )
  return <div>{sorted.map(renderUser)}</div>
}
```

**Correct (creates new array):**

```typescript
function UserList({ users }: { users: User[] }) {
  // Creates new sorted array, original unchanged
  const sorted = useMemo(
    () => users.toSorted((a, b) => a.name.localeCompare(b.name)),
    [users]
  )
  return <div>{sorted.map(renderUser)}</div>
}
```

**Why this matters in React:**

1. Props/state mutations break React's immutability model - React expects props and state to be treated as read-only
2. Causes stale closure bugs - Mutating arrays inside closures (callbacks, effects) can lead to unexpected behavior

**Browser support (fallback for older browsers):**

`.toSorted()` is available in all modern browsers (Chrome 110+, Safari 16+, Firefox 115+, Node.js 20+). For older environments, use spread operator:

```typescript
// Fallback for older browsers
const sorted = [...items].sort((a, b) => a.value - b.value)
```

**Other immutable array methods:**

- `.toSorted()` - immutable sort
- `.toReversed()` - immutable reverse
- `.toSpliced()` - immutable splice
- `.with()` - immutable element replacement
