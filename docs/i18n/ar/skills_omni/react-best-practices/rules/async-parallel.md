# async-parallel.md (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/async-parallel.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/async-parallel.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/async-parallel.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/async-parallel.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/async-parallel.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/async-parallel.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/async-parallel.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/async-parallel.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/async-parallel.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/async-parallel.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/async-parallel.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/async-parallel.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/async-parallel.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/async-parallel.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/async-parallel.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/async-parallel.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/async-parallel.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/async-parallel.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/async-parallel.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/async-parallel.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/async-parallel.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/async-parallel.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/async-parallel.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/async-parallel.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/async-parallel.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/async-parallel.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/async-parallel.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/async-parallel.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/async-parallel.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/async-parallel.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/async-parallel.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/async-parallel.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/async-parallel.md)

---

---
title: Promise.all() for Independent Operations
impact: CRITICAL
impactDescription: 2-10× improvement
tags: async, parallelization, promises, waterfalls
---

## Promise.all() for Independent Operations

When async operations have no interdependencies, execute them concurrently using `Promise.all()`.

**Incorrect (sequential execution, 3 round trips):**

```typescript
const user = await fetchUser()
const posts = await fetchPosts()
const comments = await fetchComments()
```

**Correct (parallel execution, 1 round trip):**

```typescript
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
])
```
