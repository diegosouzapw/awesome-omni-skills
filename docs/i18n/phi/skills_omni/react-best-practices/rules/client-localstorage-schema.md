# client-localstorage-schema.md (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/client-localstorage-schema.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/client-localstorage-schema.md)

---

---
title: Version and Minimize localStorage Data
impact: MEDIUM
impactDescription: prevents schema conflicts, reduces storage size
tags: client, localStorage, storage, versioning, data-minimization
---

## Version and Minimize localStorage Data

Add version prefix to keys and store only needed fields. Prevents schema conflicts and accidental storage of sensitive data.

**Incorrect:**

```typescript
// No version, stores everything, no error handling
localStorage.setItem('userConfig', JSON.stringify(fullUserObject))
const data = localStorage.getItem('userConfig')
```

**Correct:**

```typescript
const VERSION = 'v2'

function saveConfig(config: { theme: string; language: string }) {
  try {
    localStorage.setItem(`userConfig:${VERSION}`, JSON.stringify(config))
  } catch {
    // Throws in incognito/private browsing, quota exceeded, or disabled
  }
}

function loadConfig() {
  try {
    const data = localStorage.getItem(`userConfig:${VERSION}`)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

// Migration from v1 to v2
function migrate() {
  try {
    const v1 = localStorage.getItem('userConfig:v1')
    if (v1) {
      const old = JSON.parse(v1)
      saveConfig({ theme: old.darkMode ? 'dark' : 'light', language: old.lang })
      localStorage.removeItem('userConfig:v1')
    }
  } catch {}
}
```

**Store minimal fields from server responses:**

```typescript
// User object has 20+ fields, only store what UI needs
function cachePrefs(user: FullUser) {
  try {
    localStorage.setItem('prefs:v1', JSON.stringify({
      theme: user.preferences.theme,
      notifications: user.preferences.notifications
    }))
  } catch {}
}
```

**Always wrap in try-catch:** `getItem()` and `setItem()` throw in incognito/private browsing (Safari, Firefox), when quota exceeded, or when disabled.

**Benefits:** Schema evolution via versioning, reduced storage size, prevents storing tokens/PII/internal flags.
