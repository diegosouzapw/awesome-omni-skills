# rerender-use-ref-transient-values.md (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-use-ref-transient-values.md)

---

---
title: Use useRef for Transient Values
impact: MEDIUM
impactDescription: avoids unnecessary re-renders on frequent updates
tags: rerender, useref, state, performance
---

## Use useRef for Transient Values

When a value changes frequently and you don't want a re-render on every update (e.g., mouse trackers, intervals, transient flags), store it in `useRef` instead of `useState`. Keep component state for UI; use refs for temporary DOM-adjacent values. Updating a ref does not trigger a re-render.

**Incorrect (renders every update):**

```tsx
function Tracker() {
  const [lastX, setLastX] = useState(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => setLastX(e.clientX)
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: lastX,
        width: 8,
        height: 8,
        background: 'black',
      }}
    />
  )
}
```

**Correct (no re-render for tracking):**

```tsx
function Tracker() {
  const lastXRef = useRef(0)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      lastXRef.current = e.clientX
      const node = dotRef.current
      if (node) {
        node.style.transform = `translateX(${e.clientX}px)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        background: 'black',
        transform: 'translateX(0px)',
      }}
    />
  )
}
```
