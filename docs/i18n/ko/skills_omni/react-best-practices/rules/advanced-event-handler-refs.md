# advanced-event-handler-refs.md (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/advanced-event-handler-refs.md)

---

---
title: Store Event Handlers in Refs
impact: LOW
impactDescription: stable subscriptions
tags: advanced, hooks, refs, event-handlers, optimization
---

## Store Event Handlers in Refs

Store callbacks in refs when used in effects that shouldn't re-subscribe on callback changes.

**Incorrect (re-subscribes on every render):**

```tsx
function useWindowEvent(event: string, handler: (e) => void) {
  useEffect(() => {
    window.addEventListener(event, handler)
    return () => window.removeEventListener(event, handler)
  }, [event, handler])
}
```

**Correct (stable subscription):**

```tsx
function useWindowEvent(event: string, handler: (e) => void) {
  const handlerRef = useRef(handler)
  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    const listener = (e) => handlerRef.current(e)
    window.addEventListener(event, listener)
    return () => window.removeEventListener(event, listener)
  }, [event])
}
```

**Alternative: use `useEffectEvent` if you're on latest React:**

```tsx
import { useEffectEvent } from 'react'

function useWindowEvent(event: string, handler: (e) => void) {
  const onEvent = useEffectEvent(handler)

  useEffect(() => {
    window.addEventListener(event, onEvent)
    return () => window.removeEventListener(event, onEvent)
  }, [event])
}
```

`useEffectEvent` provides a cleaner API for the same pattern: it creates a stable function reference that always calls the latest version of the handler.
