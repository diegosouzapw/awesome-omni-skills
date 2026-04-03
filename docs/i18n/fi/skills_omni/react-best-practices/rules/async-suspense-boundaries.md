# async-suspense-boundaries.md (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/async-suspense-boundaries.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/async-suspense-boundaries.md)

---

---
title: Strategic Suspense Boundaries
impact: HIGH
impactDescription: faster initial paint
tags: async, suspense, streaming, layout-shift
---

## Strategic Suspense Boundaries

Instead of awaiting data in async components before returning JSX, use Suspense boundaries to show the wrapper UI faster while data loads.

**Incorrect (wrapper blocked by data fetching):**

```tsx
async function Page() {
  const data = await fetchData() // Blocks entire page
  
  return (
    <div>
      <div>Sidebar</div>
      <div>Header</div>
      <div>
        <DataDisplay data={data} />
      </div>
      <div>Footer</div>
    </div>
  )
}
```

The entire layout waits for data even though only the middle section needs it.

**Correct (wrapper shows immediately, data streams in):**

```tsx
function Page() {
  return (
    <div>
      <div>Sidebar</div>
      <div>Header</div>
      <div>
        <Suspense fallback={<Skeleton />}>
          <DataDisplay />
        </Suspense>
      </div>
      <div>Footer</div>
    </div>
  )
}

async function DataDisplay() {
  const data = await fetchData() // Only blocks this component
  return <div>{data.content}</div>
}
```

Sidebar, Header, and Footer render immediately. Only DataDisplay waits for data.

**Alternative (share promise across components):**

```tsx
function Page() {
  // Start fetch immediately, but don't await
  const dataPromise = fetchData()
  
  return (
    <div>
      <div>Sidebar</div>
      <div>Header</div>
      <Suspense fallback={<Skeleton />}>
        <DataDisplay dataPromise={dataPromise} />
        <DataSummary dataPromise={dataPromise} />
      </Suspense>
      <div>Footer</div>
    </div>
  )
}

function DataDisplay({ dataPromise }: { dataPromise: Promise<Data> }) {
  const data = use(dataPromise) // Unwraps the promise
  return <div>{data.content}</div>
}

function DataSummary({ dataPromise }: { dataPromise: Promise<Data> }) {
  const data = use(dataPromise) // Reuses the same promise
  return <div>{data.summary}</div>
}
```

Both components share the same promise, so only one fetch occurs. Layout renders immediately while both components wait together.

**When NOT to use this pattern:**

- Critical data needed for layout decisions (affects positioning)
- SEO-critical content above the fold
- Small, fast queries where suspense overhead isn't worth it
- When you want to avoid layout shift (loading → content jump)

**Trade-off:** Faster initial paint vs potential layout shift. Choose based on your UX priorities.
