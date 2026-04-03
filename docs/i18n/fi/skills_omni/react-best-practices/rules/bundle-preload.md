# bundle-preload.md (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/bundle-preload.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/bundle-preload.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/bundle-preload.md)

---

---
title: Preload Based on User Intent
impact: MEDIUM
impactDescription: reduces perceived latency
tags: bundle, preload, user-intent, hover
---

## Preload Based on User Intent

Preload heavy bundles before they're needed to reduce perceived latency.

**Example (preload on hover/focus):**

```tsx
function EditorButton({ onClick }: { onClick: () => void }) {
  const preload = () => {
    if (typeof window !== 'undefined') {
      void import('./monaco-editor')
    }
  }

  return (
    <button
      onMouseEnter={preload}
      onFocus={preload}
      onClick={onClick}
    >
      Open Editor
    </button>
  )
}
```

**Example (preload when feature flag is enabled):**

```tsx
function FlagsProvider({ children, flags }: Props) {
  useEffect(() => {
    if (flags.editorEnabled && typeof window !== 'undefined') {
      void import('./monaco-editor').then(mod => mod.init())
    }
  }, [flags.editorEnabled])

  return <FlagsContext.Provider value={flags}>
    {children}
  </FlagsContext.Provider>
}
```

The `typeof window !== 'undefined'` check prevents bundling preloaded modules for SSR, optimizing server bundle size and build speed.
