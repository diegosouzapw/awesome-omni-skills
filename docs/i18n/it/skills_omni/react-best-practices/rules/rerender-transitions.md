# rerender-transitions.md (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-transitions.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-transitions.md)

---

---
title: Use Transitions for Non-Urgent Updates
impact: MEDIUM
impactDescription: maintains UI responsiveness
tags: rerender, transitions, startTransition, performance
---

## Use Transitions for Non-Urgent Updates

Mark frequent, non-urgent state updates as transitions to maintain UI responsiveness.

**Incorrect (blocks UI on every scroll):**

```tsx
function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
}
```

**Correct (non-blocking updates):**

```tsx
import { startTransition } from 'react'

function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handler = () => {
      startTransition(() => setScrollY(window.scrollY))
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
}
```
