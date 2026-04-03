# js-cache-property-access.md (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-cache-property-access.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-cache-property-access.md)

---

---
title: Cache Property Access in Loops
impact: LOW-MEDIUM
impactDescription: reduces lookups
tags: javascript, loops, optimization, caching
---

## Cache Property Access in Loops

Cache object property lookups in hot paths.

**Incorrect (3 lookups × N iterations):**

```typescript
for (let i = 0; i < arr.length; i++) {
  process(obj.config.settings.value)
}
```

**Correct (1 lookup total):**

```typescript
const value = obj.config.settings.value
const len = arr.length
for (let i = 0; i < len; i++) {
  process(value)
}
```
