# Example: Fix a Hydration Mismatch

## Problem

The component reads browser-only state and time-dependent values during render.

## Before

```tsx
'use client'

export default function Greeting() {
  const theme = localStorage.getItem('theme')
  const now = Date.now()

  return <div data-theme={theme}>Rendered at {now}</div>
}
```

## After

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function Greeting() {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    setTheme(window.localStorage.getItem('theme'))
  }, [])

  return <div data-theme={theme ?? 'system'}>Welcome</div>
}
```

## Why this helps

- browser-only reads no longer happen during the render that must match server output
- time-dependent output is removed from the initial markup
- the first client render is deterministic

## Verify

- confirm hydration warnings disappear
- confirm first paint no longer flickers
- use `suppressHydrationWarning` only if divergence is intentional and tightly scoped
