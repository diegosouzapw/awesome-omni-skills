# js-min-max-loop.md (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-min-max-loop.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-min-max-loop.md)

---

---
title: Use Loop for Min/Max Instead of Sort
impact: LOW
impactDescription: O(n) instead of O(n log n)
tags: javascript, arrays, performance, sorting, algorithms
---

## Use Loop for Min/Max Instead of Sort

Finding the smallest or largest element only requires a single pass through the array. Sorting is wasteful and slower.

**Incorrect (O(n log n) - sort to find latest):**

```typescript
interface Project {
  id: string
  name: string
  updatedAt: number
}

function getLatestProject(projects: Project[]) {
  const sorted = [...projects].sort((a, b) => b.updatedAt - a.updatedAt)
  return sorted[0]
}
```

Sorts the entire array just to find the maximum value.

**Incorrect (O(n log n) - sort for oldest and newest):**

```typescript
function getOldestAndNewest(projects: Project[]) {
  const sorted = [...projects].sort((a, b) => a.updatedAt - b.updatedAt)
  return { oldest: sorted[0], newest: sorted[sorted.length - 1] }
}
```

Still sorts unnecessarily when only min/max are needed.

**Correct (O(n) - single loop):**

```typescript
function getLatestProject(projects: Project[]) {
  if (projects.length === 0) return null
  
  let latest = projects[0]
  
  for (let i = 1; i < projects.length; i++) {
    if (projects[i].updatedAt > latest.updatedAt) {
      latest = projects[i]
    }
  }
  
  return latest
}

function getOldestAndNewest(projects: Project[]) {
  if (projects.length === 0) return { oldest: null, newest: null }
  
  let oldest = projects[0]
  let newest = projects[0]
  
  for (let i = 1; i < projects.length; i++) {
    if (projects[i].updatedAt < oldest.updatedAt) oldest = projects[i]
    if (projects[i].updatedAt > newest.updatedAt) newest = projects[i]
  }
  
  return { oldest, newest }
}
```

Single pass through the array, no copying, no sorting.

**Alternative (Math.min/Math.max for small arrays):**

```typescript
const numbers = [5, 2, 8, 1, 9]
const min = Math.min(...numbers)
const max = Math.max(...numbers)
```

This works for small arrays, but can be slower or just throw an error for very large arrays due to spread operator limitations. Maximal array length is approximately 124000 in Chrome 143 and 638000 in Safari 18; exact numbers may vary - see [the fiddle](https://jsfiddle.net/qw1jabsx/4/). Use the loop approach for reliability.
