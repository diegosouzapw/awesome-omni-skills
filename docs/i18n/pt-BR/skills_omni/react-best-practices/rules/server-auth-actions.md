# server-auth-actions.md (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/server-auth-actions.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/server-auth-actions.md)

---

---
title: Authenticate Server Actions Like API Routes
impact: CRITICAL
impactDescription: prevents unauthorized access to server mutations
tags: server, server-actions, authentication, security, authorization
---

## Authenticate Server Actions Like API Routes

**Impact: CRITICAL (prevents unauthorized access to server mutations)**

Server Actions (functions with `"use server"`) are exposed as public endpoints, just like API routes. Always verify authentication and authorization **inside** each Server Action—do not rely solely on middleware, layout guards, or page-level checks, as Server Actions can be invoked directly.

Next.js documentation explicitly states: "Treat Server Actions with the same security considerations as public-facing API endpoints, and verify if the user is allowed to perform a mutation."

**Incorrect (no authentication check):**

```typescript
'use server'

export async function deleteUser(userId: string) {
  // Anyone can call this! No auth check
  await db.user.delete({ where: { id: userId } })
  return { success: true }
}
```

**Correct (authentication inside the action):**

```typescript
'use server'

import { verifySession } from '@/lib/auth'
import { unauthorized } from '@/lib/errors'

export async function deleteUser(userId: string) {
  // Always check auth inside the action
  const session = await verifySession()
  
  if (!session) {
    throw unauthorized('Must be logged in')
  }
  
  // Check authorization too
  if (session.user.role !== 'admin' && session.user.id !== userId) {
    throw unauthorized('Cannot delete other users')
  }
  
  await db.user.delete({ where: { id: userId } })
  return { success: true }
}
```

**With input validation:**

```typescript
'use server'

import { verifySession } from '@/lib/auth'
import { z } from 'zod'

const updateProfileSchema = z.object({
  userId: z.string().uuid(),
  name: z.string().min(1).max(100),
  email: z.string().email()
})

export async function updateProfile(data: unknown) {
  // Validate input first
  const validated = updateProfileSchema.parse(data)
  
  // Then authenticate
  const session = await verifySession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  
  // Then authorize
  if (session.user.id !== validated.userId) {
    throw new Error('Can only update own profile')
  }
  
  // Finally perform the mutation
  await db.user.update({
    where: { id: validated.userId },
    data: {
      name: validated.name,
      email: validated.email
    }
  })
  
  return { success: true }
}
```

Reference: [https://nextjs.org/docs/app/guides/authentication](https://nextjs.org/docs/app/guides/authentication)
