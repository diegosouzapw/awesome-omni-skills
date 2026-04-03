# async-api-routes.md (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/async-api-routes.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/async-api-routes.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/async-api-routes.md)

---

---
title: Prevent Waterfall Chains in API Routes
impact: CRITICAL
impactDescription: 2-10× improvement
tags: api-routes, server-actions, waterfalls, parallelization
---

## Prevent Waterfall Chains in API Routes

In API routes and Server Actions, start independent operations immediately, even if you don't await them yet.

**Incorrect (config waits for auth, data waits for both):**

```typescript
export async function GET(request: Request) {
  const session = await auth()
  const config = await fetchConfig()
  const data = await fetchData(session.user.id)
  return Response.json({ data, config })
}
```

**Correct (auth and config start immediately):**

```typescript
export async function GET(request: Request) {
  const sessionPromise = auth()
  const configPromise = fetchConfig()
  const session = await sessionPromise
  const [config, data] = await Promise.all([
    configPromise,
    fetchData(session.user.id)
  ])
  return Response.json({ data, config })
}
```

For operations with more complex dependency chains, use `better-all` to automatically maximize parallelism (see Dependency-Based Parallelization).
