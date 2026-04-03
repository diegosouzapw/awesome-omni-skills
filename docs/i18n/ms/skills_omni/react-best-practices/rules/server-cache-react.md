# server-cache-react.md (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/server-cache-react.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/server-cache-react.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/server-cache-react.md)

---

---
title: Per-Request Deduplication with React.cache()
impact: MEDIUM
impactDescription: deduplicates within request
tags: server, cache, react-cache, deduplication
---

## Per-Request Deduplication with React.cache()

Use `React.cache()` for server-side request deduplication. Authentication and database queries benefit most.

**Usage:**

```typescript
import { cache } from 'react'

export const getCurrentUser = cache(async () => {
  const session = await auth()
  if (!session?.user?.id) return null
  return await db.user.findUnique({
    where: { id: session.user.id }
  })
})
```

Within a single request, multiple calls to `getCurrentUser()` execute the query only once.

**Avoid inline objects as arguments:**

`React.cache()` uses shallow equality (`Object.is`) to determine cache hits. Inline objects create new references each call, preventing cache hits.

**Incorrect (always cache miss):**

```typescript
const getUser = cache(async (params: { uid: number }) => {
  return await db.user.findUnique({ where: { id: params.uid } })
})

// Each call creates new object, never hits cache
getUser({ uid: 1 })
getUser({ uid: 1 })  // Cache miss, runs query again
```

**Correct (cache hit):**

```typescript
const getUser = cache(async (uid: number) => {
  return await db.user.findUnique({ where: { id: uid } })
})

// Primitive args use value equality
getUser(1)
getUser(1)  // Cache hit, returns cached result
```

If you must pass objects, pass the same reference:

```typescript
const params = { uid: 1 }
getUser(params)  // Query runs
getUser(params)  // Cache hit (same reference)
```

**Next.js-Specific Note:**

In Next.js, the `fetch` API is automatically extended with request memoization. Requests with the same URL and options are automatically deduplicated within a single request, so you don't need `React.cache()` for `fetch` calls. However, `React.cache()` is still essential for other async tasks:

- Database queries (Prisma, Drizzle, etc.)
- Heavy computations
- Authentication checks
- File system operations
- Any non-fetch async work

Use `React.cache()` to deduplicate these operations across your component tree.

Reference: [React.cache documentation](https://react.dev/reference/react/cache)
