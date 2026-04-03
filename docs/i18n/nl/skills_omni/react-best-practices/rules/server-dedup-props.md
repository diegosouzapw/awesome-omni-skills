# server-dedup-props.md (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/server-dedup-props.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/server-dedup-props.md)

---

---
title: Avoid Duplicate Serialization in RSC Props
impact: LOW
impactDescription: reduces network payload by avoiding duplicate serialization
tags: server, rsc, serialization, props, client-components
---

## Avoid Duplicate Serialization in RSC Props

**Impact: LOW (reduces network payload by avoiding duplicate serialization)**

RSC→client serialization deduplicates by object reference, not value. Same reference = serialized once; new reference = serialized again. Do transformations (`.toSorted()`, `.filter()`, `.map()`) in client, not server.

**Incorrect (duplicates array):**

```tsx
// RSC: sends 6 strings (2 arrays × 3 items)
<ClientList usernames={usernames} usernamesOrdered={usernames.toSorted()} />
```

**Correct (sends 3 strings):**

```tsx
// RSC: send once
<ClientList usernames={usernames} />

// Client: transform there
'use client'
const sorted = useMemo(() => [...usernames].sort(), [usernames])
```

**Nested deduplication behavior:**

Deduplication works recursively. Impact varies by data type:

- `string[]`, `number[]`, `boolean[]`: **HIGH impact** - array + all primitives fully duplicated
- `object[]`: **LOW impact** - array duplicated, but nested objects deduplicated by reference

```tsx
// string[] - duplicates everything
usernames={['a','b']} sorted={usernames.toSorted()} // sends 4 strings

// object[] - duplicates array structure only
users={[{id:1},{id:2}]} sorted={users.toSorted()} // sends 2 arrays + 2 unique objects (not 4)
```

**Operations breaking deduplication (create new references):**

- Arrays: `.toSorted()`, `.filter()`, `.map()`, `.slice()`, `[...arr]`
- Objects: `{...obj}`, `Object.assign()`, `structuredClone()`, `JSON.parse(JSON.stringify())`

**More examples:**

```tsx
// ❌ Bad
<C users={users} active={users.filter(u => u.active)} />
<C product={product} productName={product.name} />

// ✅ Good
<C users={users} />
<C product={product} />
// Do filtering/destructuring in client
```

**Exception:** Pass derived data when transformation is expensive or client doesn't need original.
