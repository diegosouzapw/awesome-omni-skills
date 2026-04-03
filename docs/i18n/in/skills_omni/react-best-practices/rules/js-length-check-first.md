# js-length-check-first.md (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-length-check-first.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-length-check-first.md)

---

---
title: Early Length Check for Array Comparisons
impact: MEDIUM-HIGH
impactDescription: avoids expensive operations when lengths differ
tags: javascript, arrays, performance, optimization, comparison
---

## Early Length Check for Array Comparisons

When comparing arrays with expensive operations (sorting, deep equality, serialization), check lengths first. If lengths differ, the arrays cannot be equal.

In real-world applications, this optimization is especially valuable when the comparison runs in hot paths (event handlers, render loops).

**Incorrect (always runs expensive comparison):**

```typescript
function hasChanges(current: string[], original: string[]) {
  // Always sorts and joins, even when lengths differ
  return current.sort().join() !== original.sort().join()
}
```

Two O(n log n) sorts run even when `current.length` is 5 and `original.length` is 100. There is also overhead of joining the arrays and comparing the strings.

**Correct (O(1) length check first):**

```typescript
function hasChanges(current: string[], original: string[]) {
  // Early return if lengths differ
  if (current.length !== original.length) {
    return true
  }
  // Only sort when lengths match
  const currentSorted = current.toSorted()
  const originalSorted = original.toSorted()
  for (let i = 0; i < currentSorted.length; i++) {
    if (currentSorted[i] !== originalSorted[i]) {
      return true
    }
  }
  return false
}
```

This new approach is more efficient because:
- It avoids the overhead of sorting and joining the arrays when lengths differ
- It avoids consuming memory for the joined strings (especially important for large arrays)
- It avoids mutating the original arrays
- It returns early when a difference is found
