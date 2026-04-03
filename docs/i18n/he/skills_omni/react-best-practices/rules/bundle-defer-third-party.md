# bundle-defer-third-party.md (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/bundle-defer-third-party.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/bundle-defer-third-party.md)

---

---
title: Defer Non-Critical Third-Party Libraries
impact: MEDIUM
impactDescription: loads after hydration
tags: bundle, third-party, analytics, defer
---

## Defer Non-Critical Third-Party Libraries

Analytics, logging, and error tracking don't block user interaction. Load them after hydration.

**Incorrect (blocks initial bundle):**

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Correct (loads after hydration):**

```tsx
import dynamic from 'next/dynamic'

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(m => m.Analytics),
  { ssr: false }
)

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```
