# Example: Reduce Bundle Size with Dynamic Imports

## Problem

A heavy chart library is loaded on first render even though the chart is below the fold and optional.

## Before

```tsx
'use client'

import SalesChart from './SalesChart'

export default function AnalyticsPanel() {
  return <SalesChart />
}
```

## After

```tsx
'use client'

import dynamic from 'next/dynamic'

const SalesChart = dynamic(() => import('./SalesChart'), {
  loading: () => <div>Loading chart…</div>,
})

export default function AnalyticsPanel({ showChart }) {
  if (!showChart) return null
  return <SalesChart />
}
```

## Why this helps

- heavy client code is deferred until needed
- initial route JS can shrink
- loading behavior is explicit

## Important constraint

If the parent route is client-only unnecessarily, fix that first. Dynamic import is a targeted delivery optimization, not a substitute for a better server/client boundary.

## Verify

- compare initial JS before and after
- confirm the chart is not needed for first meaningful paint
- test the loading state and interaction path
