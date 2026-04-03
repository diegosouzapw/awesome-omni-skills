# client-passive-event-listeners.md (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/client-passive-event-listeners.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/client-passive-event-listeners.md)

---

---
title: Use Passive Event Listeners for Scrolling Performance
impact: MEDIUM
impactDescription: eliminates scroll delay caused by event listeners
tags: client, event-listeners, scrolling, performance, touch, wheel
---

## Use Passive Event Listeners for Scrolling Performance

Add `{ passive: true }` to touch and wheel event listeners to enable immediate scrolling. Browsers normally wait for listeners to finish to check if `preventDefault()` is called, causing scroll delay.

**Incorrect:**

```typescript
useEffect(() => {
  const handleTouch = (e: TouchEvent) => console.log(e.touches[0].clientX)
  const handleWheel = (e: WheelEvent) => console.log(e.deltaY)
  
  document.addEventListener('touchstart', handleTouch)
  document.addEventListener('wheel', handleWheel)
  
  return () => {
    document.removeEventListener('touchstart', handleTouch)
    document.removeEventListener('wheel', handleWheel)
  }
}, [])
```

**Correct:**

```typescript
useEffect(() => {
  const handleTouch = (e: TouchEvent) => console.log(e.touches[0].clientX)
  const handleWheel = (e: WheelEvent) => console.log(e.deltaY)
  
  document.addEventListener('touchstart', handleTouch, { passive: true })
  document.addEventListener('wheel', handleWheel, { passive: true })
  
  return () => {
    document.removeEventListener('touchstart', handleTouch)
    document.removeEventListener('wheel', handleWheel)
  }
}, [])
```

**Use passive when:** tracking/analytics, logging, any listener that doesn't call `preventDefault()`.

**Don't use passive when:** implementing custom swipe gestures, custom zoom controls, or any listener that needs `preventDefault()`.
