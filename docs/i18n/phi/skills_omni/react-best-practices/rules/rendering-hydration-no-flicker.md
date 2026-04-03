# rendering-hydration-no-flicker.md (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-hydration-no-flicker.md)

---

---
title: Prevent Hydration Mismatch Without Flickering
impact: MEDIUM
impactDescription: avoids visual flicker and hydration errors
tags: rendering, ssr, hydration, localStorage, flicker
---

## Prevent Hydration Mismatch Without Flickering

When rendering content that depends on client-side storage (localStorage, cookies), avoid both SSR breakage and post-hydration flickering by injecting a synchronous script that updates the DOM before React hydrates.

**Incorrect (breaks SSR):**

```tsx
function ThemeWrapper({ children }: { children: ReactNode }) {
  // localStorage is not available on server - throws error
  const theme = localStorage.getItem('theme') || 'light'
  
  return (
    <div className={theme}>
      {children}
    </div>
  )
}
```

Server-side rendering will fail because `localStorage` is undefined.

**Incorrect (visual flickering):**

```tsx
function ThemeWrapper({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    // Runs after hydration - causes visible flash
    const stored = localStorage.getItem('theme')
    if (stored) {
      setTheme(stored)
    }
  }, [])
  
  return (
    <div className={theme}>
      {children}
    </div>
  )
}
```

Component first renders with default value (`light`), then updates after hydration, causing a visible flash of incorrect content.

**Correct (no flicker, no hydration mismatch):**

```tsx
function ThemeWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div id="theme-wrapper">
        {children}
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme') || 'light';
                var el = document.getElementById('theme-wrapper');
                if (el) el.className = theme;
              } catch (e) {}
            })();
          `,
        }}
      />
    </>
  )
}
```

The inline script executes synchronously before showing the element, ensuring the DOM already has the correct value. No flickering, no hydration mismatch.

This pattern is especially useful for theme toggles, user preferences, authentication states, and any client-only data that should render immediately without flashing default values.
