# Example: Hydration mismatch fixes (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/examples/hydration-mismatch-fixes.md)

---


## Before

```tsx
export default function Greeting() {
  return <p>{new Date().toLocaleTimeString()}</p>
}
```

## Issue

The server-rendered time can differ from the first client-rendered time.

## Safer fix: stable server render, client enhancement later

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function Greeting() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(new Date().toLocaleTimeString())
  }, [])

  return <p>{time ?? '—'}</p>
}
```

## Narrow use of suppressHydrationWarning

```tsx
export default function Greeting({ serverFormattedTime }) {
  return (
    <time suppressHydrationWarning>
      {serverFormattedTime}
    </time>
  )
}
```

Use this only when the mismatch is expected, narrow, and harmless.
