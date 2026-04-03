# rerender-defer-reads.md (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-defer-reads.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-defer-reads.md)

---

---
title: Defer State Reads to Usage Point
impact: MEDIUM
impactDescription: avoids unnecessary subscriptions
tags: rerender, searchParams, localStorage, optimization
---

## Defer State Reads to Usage Point

Don't subscribe to dynamic state (searchParams, localStorage) if you only read it inside callbacks.

**Incorrect (subscribes to all searchParams changes):**

```tsx
function ShareButton({ chatId }: { chatId: string }) {
  const searchParams = useSearchParams()

  const handleShare = () => {
    const ref = searchParams.get('ref')
    shareChat(chatId, { ref })
  }

  return <button onClick={handleShare}>Share</button>
}
```

**Correct (reads on demand, no subscription):**

```tsx
function ShareButton({ chatId }: { chatId: string }) {
  const handleShare = () => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    shareChat(chatId, { ref })
  }

  return <button onClick={handleShare}>Share</button>
}
```
