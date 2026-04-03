# server-cache-lru.md (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/server-cache-lru.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/server-cache-lru.md)

---

---
title: Cross-Request LRU Caching
impact: HIGH
impactDescription: caches across requests
tags: server, cache, lru, cross-request
---

## Cross-Request LRU Caching

`React.cache()` only works within one request. For data shared across sequential requests (user clicks button A then button B), use an LRU cache.

**Implementation:**

```typescript
import { LRUCache } from 'lru-cache'

const cache = new LRUCache<string, any>({
  max: 1000,
  ttl: 5 * 60 * 1000  // 5 minutes
})

export async function getUser(id: string) {
  const cached = cache.get(id)
  if (cached) return cached

  const user = await db.user.findUnique({ where: { id } })
  cache.set(id, user)
  return user
}

// Request 1: DB query, result cached
// Request 2: cache hit, no DB query
```

Use when sequential user actions hit multiple endpoints needing the same data within seconds.

**With Vercel's [Fluid Compute](https://vercel.com/docs/fluid-compute):** LRU caching is especially effective because multiple concurrent requests can share the same function instance and cache. This means the cache persists across requests without needing external storage like Redis.

**In traditional serverless:** Each invocation runs in isolation, so consider Redis for cross-process caching.

Reference: [https://github.com/isaacs/node-lru-cache](https://github.com/isaacs/node-lru-cache)
