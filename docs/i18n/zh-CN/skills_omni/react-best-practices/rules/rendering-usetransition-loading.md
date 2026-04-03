# rendering-usetransition-loading.md (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-usetransition-loading.md)

---

---
title: Use useTransition Over Manual Loading States
impact: LOW
impactDescription: reduces re-renders and improves code clarity
tags: rendering, transitions, useTransition, loading, state
---

## Use useTransition Over Manual Loading States

Use `useTransition` instead of manual `useState` for loading states. This provides built-in `isPending` state and automatically manages transitions.

**Incorrect (manual loading state):**

```tsx
function SearchResults() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (value: string) => {
    setIsLoading(true)
    setQuery(value)
    const data = await fetchResults(value)
    setResults(data)
    setIsLoading(false)
  }

  return (
    <>
      <input onChange={(e) => handleSearch(e.target.value)} />
      {isLoading && <Spinner />}
      <ResultsList results={results} />
    </>
  )
}
```

**Correct (useTransition with built-in pending state):**

```tsx
import { useTransition, useState } from 'react'

function SearchResults() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isPending, startTransition] = useTransition()

  const handleSearch = (value: string) => {
    setQuery(value) // Update input immediately
    
    startTransition(async () => {
      // Fetch and update results
      const data = await fetchResults(value)
      setResults(data)
    })
  }

  return (
    <>
      <input onChange={(e) => handleSearch(e.target.value)} />
      {isPending && <Spinner />}
      <ResultsList results={results} />
    </>
  )
}
```

**Benefits:**

- **Automatic pending state**: No need to manually manage `setIsLoading(true/false)`
- **Error resilience**: Pending state correctly resets even if the transition throws
- **Better responsiveness**: Keeps the UI responsive during updates
- **Interrupt handling**: New transitions automatically cancel pending ones

Reference: [useTransition](https://react.dev/reference/react/useTransition)
