# async-defer-await.md (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/async-defer-await.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/async-defer-await.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/async-defer-await.md)

---

---
title: Defer Await Until Needed
impact: HIGH
impactDescription: avoids blocking unused code paths
tags: async, await, conditional, optimization
---

## Defer Await Until Needed

Move `await` operations into the branches where they're actually used to avoid blocking code paths that don't need them.

**Incorrect (blocks both branches):**

```typescript
async function handleRequest(userId: string, skipProcessing: boolean) {
  const userData = await fetchUserData(userId)
  
  if (skipProcessing) {
    // Returns immediately but still waited for userData
    return { skipped: true }
  }
  
  // Only this branch uses userData
  return processUserData(userData)
}
```

**Correct (only blocks when needed):**

```typescript
async function handleRequest(userId: string, skipProcessing: boolean) {
  if (skipProcessing) {
    // Returns immediately without waiting
    return { skipped: true }
  }
  
  // Fetch only when needed
  const userData = await fetchUserData(userId)
  return processUserData(userData)
}
```

**Another example (early return optimization):**

```typescript
// Incorrect: always fetches permissions
async function updateResource(resourceId: string, userId: string) {
  const permissions = await fetchPermissions(userId)
  const resource = await getResource(resourceId)
  
  if (!resource) {
    return { error: 'Not found' }
  }
  
  if (!permissions.canEdit) {
    return { error: 'Forbidden' }
  }
  
  return await updateResourceData(resource, permissions)
}

// Correct: fetches only when needed
async function updateResource(resourceId: string, userId: string) {
  const resource = await getResource(resourceId)
  
  if (!resource) {
    return { error: 'Not found' }
  }
  
  const permissions = await fetchPermissions(userId)
  
  if (!permissions.canEdit) {
    return { error: 'Forbidden' }
  }
  
  return await updateResourceData(resource, permissions)
}
```

This optimization is especially valuable when the skipped branch is frequently taken, or when the deferred operation is expensive.
