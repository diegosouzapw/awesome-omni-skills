# Example: Fix a Request Waterfall with Suspense

## Problem

A page waits for one fetch before starting another independent fetch, so users wait for the whole route.

## Before

```tsx
export default async function DashboardPage() {
  const user = await getUser()
  const alerts = await getAlerts()

  return (
    <main>
      <Header user={user} />
      <Alerts alerts={alerts} />
    </main>
  )
}
```

## After

```tsx
import { Suspense } from 'react'

async function AlertsSection() {
  const alerts = await getAlerts()
  return <Alerts alerts={alerts} />
}

export default async function DashboardPage() {
  const userPromise = getUser()

  return (
    <main>
      <Header user={await userPromise} />
      <Suspense fallback={<div>Loading alerts…</div>}>
        <AlertsSection />
      </Suspense>
    </main>
  )
}
```

## Why this helps

- independent work no longer waits behind unrelated work
- useful UI can render earlier
- Suspense allows a slower region to stream separately

## Verify

- compare TTFB and perceived load timing
- confirm fallback UI is acceptable
- verify that requests actually start earlier in the new structure
