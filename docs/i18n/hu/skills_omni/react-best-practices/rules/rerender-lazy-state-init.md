# rerender-lazy-state-init.md (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-lazy-state-init.md)

---

---
title: Use Lazy State Initialization
impact: MEDIUM
impactDescription: wasted computation on every render
tags: react, hooks, useState, performance, initialization
---

## Use Lazy State Initialization

Pass a function to `useState` for expensive initial values. Without the function form, the initializer runs on every render even though the value is only used once.

**Incorrect (runs on every render):**

```tsx
function FilteredList({ items }: { items: Item[] }) {
  // buildSearchIndex() runs on EVERY render, even after initialization
  const [searchIndex, setSearchIndex] = useState(buildSearchIndex(items))
  const [query, setQuery] = useState('')
  
  // When query changes, buildSearchIndex runs again unnecessarily
  return <SearchResults index={searchIndex} query={query} />
}

function UserProfile() {
  // JSON.parse runs on every render
  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem('settings') || '{}')
  )
  
  return <SettingsForm settings={settings} onChange={setSettings} />
}
```

**Correct (runs only once):**

```tsx
function FilteredList({ items }: { items: Item[] }) {
  // buildSearchIndex() runs ONLY on initial render
  const [searchIndex, setSearchIndex] = useState(() => buildSearchIndex(items))
  const [query, setQuery] = useState('')
  
  return <SearchResults index={searchIndex} query={query} />
}

function UserProfile() {
  // JSON.parse runs only on initial render
  const [settings, setSettings] = useState(() => {
    const stored = localStorage.getItem('settings')
    return stored ? JSON.parse(stored) : {}
  })
  
  return <SettingsForm settings={settings} onChange={setSettings} />
}
```

Use lazy initialization when computing initial values from localStorage/sessionStorage, building data structures (indexes, maps), reading from the DOM, or performing heavy transformations.

For simple primitives (`useState(0)`), direct references (`useState(props.value)`), or cheap literals (`useState({})`), the function form is unnecessary.
