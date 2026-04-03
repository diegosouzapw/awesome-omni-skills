# Example: Reduce an oversized client boundary (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/examples/app-router-server-vs-client-boundary.md)

---


## Before

```tsx
'use client'

import { useState } from 'react'
import ProductGrid from './ProductGrid'
import ProductFilters from './ProductFilters'

export default function ProductsPage({ products }) {
  const [filters, setFilters] = useState({ q: '' })

  return (
    <div>
      <ProductFilters filters={filters} setFilters={setFilters} />
      <ProductGrid products={products} filters={filters} />
    </div>
  )
}
```

## Issue

The entire page becomes a Client Component even though only the filters need client interactivity.

## After

```tsx
import ProductGrid from './ProductGrid'
import ProductFiltersClient from './ProductFiltersClient'

export default function ProductsPage({ products }) {
  return (
    <div>
      <ProductFiltersClient />
      <ProductGrid products={products} />
    </div>
  )
}
```

```tsx
'use client'

import { useState } from 'react'

export default function ProductFiltersClient() {
  const [filters, setFilters] = useState({ q: '' })

  return <div>{/* interactive controls */}</div>
}
```

## Why this helps

- Keeps the page shell and data rendering on the server.
- Reduces client JavaScript scope.
- Avoids serializing more props than needed across the boundary.
