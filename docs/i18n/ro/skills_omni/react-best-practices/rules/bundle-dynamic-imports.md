# bundle-dynamic-imports.md (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/bundle-dynamic-imports.md)

---

---
title: Dynamic Imports for Heavy Components
impact: CRITICAL
impactDescription: directly affects TTI and LCP
tags: bundle, dynamic-import, code-splitting, next-dynamic
---

## Dynamic Imports for Heavy Components

Use `next/dynamic` to lazy-load large components not needed on initial render.

**Incorrect (Monaco bundles with main chunk ~300KB):**

```tsx
import { MonacoEditor } from './monaco-editor'

function CodePanel({ code }: { code: string }) {
  return <MonacoEditor value={code} />
}
```

**Correct (Monaco loads on demand):**

```tsx
import dynamic from 'next/dynamic'

const MonacoEditor = dynamic(
  () => import('./monaco-editor').then(m => m.MonacoEditor),
  { ssr: false }
)

function CodePanel({ code }: { code: string }) {
  return <MonacoEditor value={code} />
}
```
