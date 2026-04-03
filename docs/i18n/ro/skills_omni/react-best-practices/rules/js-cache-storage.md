# js-cache-storage.md (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-cache-storage.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-cache-storage.md)

---

---
title: Cache Storage API Calls
impact: LOW-MEDIUM
impactDescription: reduces expensive I/O
tags: javascript, localStorage, storage, caching, performance
---

## Cache Storage API Calls

`localStorage`, `sessionStorage`, and `document.cookie` are synchronous and expensive. Cache reads in memory.

**Incorrect (reads storage on every call):**

```typescript
function getTheme() {
  return localStorage.getItem('theme') ?? 'light'
}
// Called 10 times = 10 storage reads
```

**Correct (Map cache):**

```typescript
const storageCache = new Map<string, string | null>()

function getLocalStorage(key: string) {
  if (!storageCache.has(key)) {
    storageCache.set(key, localStorage.getItem(key))
  }
  return storageCache.get(key)
}

function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value)
  storageCache.set(key, value)  // keep cache in sync
}
```

Use a Map (not a hook) so it works everywhere: utilities, event handlers, not just React components.

**Cookie caching:**

```typescript
let cookieCache: Record<string, string> | null = null

function getCookie(name: string) {
  if (!cookieCache) {
    cookieCache = Object.fromEntries(
      document.cookie.split('; ').map(c => c.split('='))
    )
  }
  return cookieCache[name]
}
```

**Important (invalidate on external changes):**

If storage can change externally (another tab, server-set cookies), invalidate cache:

```typescript
window.addEventListener('storage', (e) => {
  if (e.key) storageCache.delete(e.key)
})

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    storageCache.clear()
  }
})
```
