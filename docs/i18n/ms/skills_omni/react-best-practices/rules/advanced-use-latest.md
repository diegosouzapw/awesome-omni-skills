# advanced-use-latest.md (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/advanced-use-latest.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/advanced-use-latest.md)

---

---
title: useEffectEvent for Stable Callback Refs
impact: LOW
impactDescription: prevents effect re-runs
tags: advanced, hooks, useEffectEvent, refs, optimization
---

## useEffectEvent for Stable Callback Refs

Access latest values in callbacks without adding them to dependency arrays. Prevents effect re-runs while avoiding stale closures.

**Incorrect (effect re-runs on every callback change):**

```tsx
function SearchInput({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => onSearch(query), 300)
    return () => clearTimeout(timeout)
  }, [query, onSearch])
}
```

**Correct (using React's useEffectEvent):**

```tsx
import { useEffectEvent } from 'react';

function SearchInput({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState('')
  const onSearchEvent = useEffectEvent(onSearch)

  useEffect(() => {
    const timeout = setTimeout(() => onSearchEvent(query), 300)
    return () => clearTimeout(timeout)
  }, [query])
}
```
