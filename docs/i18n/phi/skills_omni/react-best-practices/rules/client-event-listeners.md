# client-event-listeners.md (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/client-event-listeners.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/client-event-listeners.md)

---

---
title: Deduplicate Global Event Listeners
impact: LOW
impactDescription: single listener for N components
tags: client, swr, event-listeners, subscription
---

## Deduplicate Global Event Listeners

Use `useSWRSubscription()` to share global event listeners across component instances.

**Incorrect (N instances = N listeners):**

```tsx
function useKeyboardShortcut(key: string, callback: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === key) {
        callback()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [key, callback])
}
```

When using the `useKeyboardShortcut` hook multiple times, each instance will register a new listener.

**Correct (N instances = 1 listener):**

```tsx
import useSWRSubscription from 'swr/subscription'

// Module-level Map to track callbacks per key
const keyCallbacks = new Map<string, Set<() => void>>()

function useKeyboardShortcut(key: string, callback: () => void) {
  // Register this callback in the Map
  useEffect(() => {
    if (!keyCallbacks.has(key)) {
      keyCallbacks.set(key, new Set())
    }
    keyCallbacks.get(key)!.add(callback)

    return () => {
      const set = keyCallbacks.get(key)
      if (set) {
        set.delete(callback)
        if (set.size === 0) {
          keyCallbacks.delete(key)
        }
      }
    }
  }, [key, callback])

  useSWRSubscription('global-keydown', () => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey && keyCallbacks.has(e.key)) {
        keyCallbacks.get(e.key)!.forEach(cb => cb())
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })
}

function Profile() {
  // Multiple shortcuts will share the same listener
  useKeyboardShortcut('p', () => { /* ... */ }) 
  useKeyboardShortcut('k', () => { /* ... */ })
  // ...
}
```
