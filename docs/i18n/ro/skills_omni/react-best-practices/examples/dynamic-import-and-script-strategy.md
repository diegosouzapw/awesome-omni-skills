# Example: Dynamic import and script strategy (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/examples/dynamic-import-and-script-strategy.md)

---


## Dynamic import for a heavy interactive widget

```tsx
'use client'

import dynamic from 'next/dynamic'

const ChartEditor = dynamic(() => import('./ChartEditor'), {
  loading: () => <p>Loading editor…</p>,
})

export default function AnalyticsPanel({ canEdit }) {
  return <>{canEdit ? <ChartEditor /> : null}</>
}
```

## Why this helps

The editor code is only loaded when the interactive feature is actually used.

## Next.js Script strategy for third-party code

```tsx
import Script from 'next/script'

export default function Page() {
  return (
    <>
      <Script
        src="https://example.com/analytics.js"
        strategy="afterInteractive"
      />
    </>
  )
}
```

## Why this helps

- Avoids blocking the most important initial rendering path.
- Makes third-party loading behavior explicit and reviewable.
