# server-serialization.md (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/server-serialization.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/server-serialization.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/server-serialization.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/server-serialization.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/server-serialization.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/server-serialization.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/server-serialization.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/server-serialization.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/server-serialization.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/server-serialization.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/server-serialization.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/server-serialization.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/server-serialization.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/server-serialization.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/server-serialization.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/server-serialization.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/server-serialization.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/server-serialization.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/server-serialization.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/server-serialization.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/server-serialization.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/server-serialization.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/server-serialization.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/server-serialization.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/server-serialization.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/server-serialization.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/server-serialization.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/server-serialization.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/server-serialization.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/server-serialization.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/server-serialization.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/server-serialization.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/server-serialization.md)

---

---
title: Minimize Serialization at RSC Boundaries
impact: HIGH
impactDescription: reduces data transfer size
tags: server, rsc, serialization, props
---

## Minimize Serialization at RSC Boundaries

The React Server/Client boundary serializes all object properties into strings and embeds them in the HTML response and subsequent RSC requests. This serialized data directly impacts page weight and load time, so **size matters a lot**. Only pass fields that the client actually uses.

**Incorrect (serializes all 50 fields):**

```tsx
async function Page() {
  const user = await fetchUser()  // 50 fields
  return <Profile user={user} />
}

'use client'
function Profile({ user }: { user: User }) {
  return <div>{user.name}</div>  // uses 1 field
}
```

**Correct (serializes only 1 field):**

```tsx
async function Page() {
  const user = await fetchUser()
  return <Profile name={user.name} />
}

'use client'
function Profile({ name }: { name: string }) {
  return <div>{name}</div>
}
```
