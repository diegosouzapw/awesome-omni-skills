# js-set-map-lookups.md (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-set-map-lookups.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-set-map-lookups.md)

---

---
title: Use Set/Map for O(1) Lookups
impact: LOW-MEDIUM
impactDescription: O(n) to O(1)
tags: javascript, set, map, data-structures, performance
---

## Use Set/Map for O(1) Lookups

Convert arrays to Set/Map for repeated membership checks.

**Incorrect (O(n) per check):**

```typescript
const allowedIds = ['a', 'b', 'c', ...]
items.filter(item => allowedIds.includes(item.id))
```

**Correct (O(1) per check):**

```typescript
const allowedIds = new Set(['a', 'b', 'c', ...])
items.filter(item => allowedIds.has(item.id))
```
