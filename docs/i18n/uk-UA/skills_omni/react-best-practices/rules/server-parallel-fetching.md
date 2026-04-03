# server-parallel-fetching.md (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/server-parallel-fetching.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/server-parallel-fetching.md)

---

---
title: Parallel Data Fetching with Component Composition
impact: CRITICAL
impactDescription: eliminates server-side waterfalls
tags: server, rsc, parallel-fetching, composition
---

## Parallel Data Fetching with Component Composition

React Server Components execute sequentially within a tree. Restructure with composition to parallelize data fetching.

**Incorrect (Sidebar waits for Page's fetch to complete):**

```tsx
export default async function Page() {
  const header = await fetchHeader()
  return (
    <div>
      <div>{header}</div>
      <Sidebar />
    </div>
  )
}

async function Sidebar() {
  const items = await fetchSidebarItems()
  return <nav>{items.map(renderItem)}</nav>
}
```

**Correct (both fetch simultaneously):**

```tsx
async function Header() {
  const data = await fetchHeader()
  return <div>{data}</div>
}

async function Sidebar() {
  const items = await fetchSidebarItems()
  return <nav>{items.map(renderItem)}</nav>
}

export default function Page() {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  )
}
```

**Alternative with children prop:**

```tsx
async function Header() {
  const data = await fetchHeader()
  return <div>{data}</div>
}

async function Sidebar() {
  const items = await fetchSidebarItems()
  return <nav>{items.map(renderItem)}</nav>
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <Layout>
      <Sidebar />
    </Layout>
  )
}
```
