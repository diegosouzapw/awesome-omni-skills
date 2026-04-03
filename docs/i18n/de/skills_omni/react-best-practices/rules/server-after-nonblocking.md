# server-after-nonblocking.md (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/server-after-nonblocking.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/server-after-nonblocking.md)

---

---
title: Use after() for Non-Blocking Operations
impact: MEDIUM
impactDescription: faster response times
tags: server, async, logging, analytics, side-effects
---

## Use after() for Non-Blocking Operations

Use Next.js's `after()` to schedule work that should execute after a response is sent. This prevents logging, analytics, and other side effects from blocking the response.

**Incorrect (blocks response):**

```tsx
import { logUserAction } from '@/app/utils'

export async function POST(request: Request) {
  // Perform mutation
  await updateDatabase(request)
  
  // Logging blocks the response
  const userAgent = request.headers.get('user-agent') || 'unknown'
  await logUserAction({ userAgent })
  
  return new Response(JSON.stringify({ status: 'success' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
```

**Correct (non-blocking):**

```tsx
import { after } from 'next/server'
import { headers, cookies } from 'next/headers'
import { logUserAction } from '@/app/utils'

export async function POST(request: Request) {
  // Perform mutation
  await updateDatabase(request)
  
  // Log after response is sent
  after(async () => {
    const userAgent = (await headers()).get('user-agent') || 'unknown'
    const sessionCookie = (await cookies()).get('session-id')?.value || 'anonymous'
    
    logUserAction({ sessionCookie, userAgent })
  })
  
  return new Response(JSON.stringify({ status: 'success' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
```

The response is sent immediately while logging happens in the background.

**Common use cases:**

- Analytics tracking
- Audit logging
- Sending notifications
- Cache invalidation
- Cleanup tasks

**Important notes:**

- `after()` runs even if the response fails or redirects
- Works in Server Actions, Route Handlers, and Server Components

Reference: [https://nextjs.org/docs/app/api-reference/functions/after](https://nextjs.org/docs/app/api-reference/functions/after)
