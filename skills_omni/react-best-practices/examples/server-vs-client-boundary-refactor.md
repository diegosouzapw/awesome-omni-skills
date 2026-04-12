# Example: Narrow a Server vs Client Boundary

## Problem

A whole route is marked `use client`, but only a search box is interactive.

## Before

```tsx
'use client'

import { useState } from 'react'

export default function ProductsPage({ products }) {
  const [query, setQuery] = useState('')
  const filtered = products.filter((p) => p.name.includes(query))

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

## After

Server page:

```tsx
import SearchBox from './SearchBox'
import { getProducts } from '@/lib/data'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <SearchBox products={products.map((p) => ({ id: p.id, name: p.name }))} />
    </div>
  )
}
```

Client leaf:

```tsx
'use client'

import { useState } from 'react'

export default function SearchBox({ products }) {
  const [query, setQuery] = useState('')
  const filtered = products.filter((p) => p.name.includes(query))

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  )
}
```

## Why this helps

- the route can stay server-rendered by default
- fetching remains on the server
- only the interactive leaf ships client JavaScript
- props crossing the boundary are smaller and already shaped

## Verify

- compare route JS before and after
- confirm page still renders correctly without client-only errors
- check whether hydration work decreased on the route
