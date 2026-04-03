# js-index-maps.md (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-index-maps.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-index-maps.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-index-maps.md)

---

---
title: Build Index Maps for Repeated Lookups
impact: LOW-MEDIUM
impactDescription: 1M ops to 2K ops
tags: javascript, map, indexing, optimization, performance
---

## Build Index Maps for Repeated Lookups

Multiple `.find()` calls by the same key should use a Map.

**Incorrect (O(n) per lookup):**

```typescript
function processOrders(orders: Order[], users: User[]) {
  return orders.map(order => ({
    ...order,
    user: users.find(u => u.id === order.userId)
  }))
}
```

**Correct (O(1) per lookup):**

```typescript
function processOrders(orders: Order[], users: User[]) {
  const userById = new Map(users.map(u => [u.id, u]))

  return orders.map(order => ({
    ...order,
    user: userById.get(order.userId)
  }))
}
```

Build map once (O(n)), then all lookups are O(1).
For 1000 orders × 1000 users: 1M ops → 2K ops.
