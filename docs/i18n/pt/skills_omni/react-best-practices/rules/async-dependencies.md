# async-dependencies.md (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/async-dependencies.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/async-dependencies.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/async-dependencies.md)

---

---
title: Dependency-Based Parallelization
impact: CRITICAL
impactDescription: 2-10× improvement
tags: async, parallelization, dependencies, better-all
---

## Dependency-Based Parallelization

For operations with partial dependencies, use `better-all` to maximize parallelism. It automatically starts each task at the earliest possible moment.

**Incorrect (profile waits for config unnecessarily):**

```typescript
const [user, config] = await Promise.all([
  fetchUser(),
  fetchConfig()
])
const profile = await fetchProfile(user.id)
```

**Correct (config and profile run in parallel):**

```typescript
import { all } from 'better-all'

const { user, config, profile } = await all({
  async user() { return fetchUser() },
  async config() { return fetchConfig() },
  async profile() {
    return fetchProfile((await this.$.user).id)
  }
})
```

**Alternative without extra dependencies:**

We can also create all the promises first, and do `Promise.all()` at the end.

```typescript
const userPromise = fetchUser()
const profilePromise = userPromise.then(user => fetchProfile(user.id))

const [user, config, profile] = await Promise.all([
  userPromise,
  fetchConfig(),
  profilePromise
])
```

Reference: [https://github.com/shuding/better-all](https://github.com/shuding/better-all)
