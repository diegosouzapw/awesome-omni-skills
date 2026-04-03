# bundle-barrel-imports.md (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/bundle-barrel-imports.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/bundle-barrel-imports.md)

---

---
title: Avoid Barrel File Imports
impact: CRITICAL
impactDescription: 200-800ms import cost, slow builds
tags: bundle, imports, tree-shaking, barrel-files, performance
---

## Avoid Barrel File Imports

Import directly from source files instead of barrel files to avoid loading thousands of unused modules. **Barrel files** are entry points that re-export multiple modules (e.g., `index.js` that does `export * from './module'`).

Popular icon and component libraries can have **up to 10,000 re-exports** in their entry file. For many React packages, **it takes 200-800ms just to import them**, affecting both development speed and production cold starts.

**Why tree-shaking doesn't help:** When a library is marked as external (not bundled), the bundler can't optimize it. If you bundle it to enable tree-shaking, builds become substantially slower analyzing the entire module graph.

**Incorrect (imports entire library):**

```tsx
import { Check, X, Menu } from 'lucide-react'
// Loads 1,583 modules, takes ~2.8s extra in dev
// Runtime cost: 200-800ms on every cold start

import { Button, TextField } from '@mui/material'
// Loads 2,225 modules, takes ~4.2s extra in dev
```

**Correct (imports only what you need):**

```tsx
import Check from 'lucide-react/dist/esm/icons/check'
import X from 'lucide-react/dist/esm/icons/x'
import Menu from 'lucide-react/dist/esm/icons/menu'
// Loads only 3 modules (~2KB vs ~1MB)

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
// Loads only what you use
```

**Alternative (Next.js 13.5+):**

```js
// next.config.js - use optimizePackageImports
module.exports = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@mui/material']
  }
}

// Then you can keep the ergonomic barrel imports:
import { Check, X, Menu } from 'lucide-react'
// Automatically transformed to direct imports at build time
```

Direct imports provide 15-70% faster dev boot, 28% faster builds, 40% faster cold starts, and significantly faster HMR.

Libraries commonly affected: `lucide-react`, `@mui/material`, `@mui/icons-material`, `@tabler/icons-react`, `react-icons`, `@headlessui/react`, `@radix-ui/react-*`, `lodash`, `ramda`, `date-fns`, `rxjs`, `react-use`.

Reference: [How we optimized package imports in Next.js](https://vercel.com/blog/how-we-optimized-package-imports-in-next-js)
