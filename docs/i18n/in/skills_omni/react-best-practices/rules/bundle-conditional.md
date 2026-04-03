# bundle-conditional.md (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/bundle-conditional.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/bundle-conditional.md)

---

---
title: Conditional Module Loading
impact: HIGH
impactDescription: loads large data only when needed
tags: bundle, conditional-loading, lazy-loading
---

## Conditional Module Loading

Load large data or modules only when a feature is activated.

**Example (lazy-load animation frames):**

```tsx
function AnimationPlayer({ enabled, setEnabled }: { enabled: boolean; setEnabled: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [frames, setFrames] = useState<Frame[] | null>(null)

  useEffect(() => {
    if (enabled && !frames && typeof window !== 'undefined') {
      import('./animation-frames.js')
        .then(mod => setFrames(mod.frames))
        .catch(() => setEnabled(false))
    }
  }, [enabled, frames, setEnabled])

  if (!frames) return <Skeleton />
  return <Canvas frames={frames} />
}
```

The `typeof window !== 'undefined'` check prevents bundling this module for SSR, optimizing server bundle size and build speed.
