# Example: Parallel fetching and Suspense (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/examples/parallel-fetching-and-suspense.md)

---


## Before

```tsx
export default async function Page() {
  const user = await getUser()
  const notifications = await getNotifications()

  return <Dashboard user={user} notifications={notifications} />
}
```

## Issue

If `getUser()` and `getNotifications()` are independent, the second request starts too late.

## After

```tsx
export default async function Page() {
  const userPromise = getUser()
  const notificationsPromise = getNotifications()

  const [user, notifications] = await Promise.all([
    userPromise,
    notificationsPromise,
  ])

  return <Dashboard user={user} notifications={notifications} />
}
```

## Streaming variation

```tsx
import { Suspense } from 'react'

export default async function Page() {
  const user = await getUser()

  return (
    <>
      <Profile user={user} />
      <Suspense fallback={<NotificationsSkeleton />}>
        <NotificationsSection />
      </Suspense>
    </>
  )
}

async function NotificationsSection() {
  const notifications = await getNotifications()
  return <NotificationsList notifications={notifications} />
}
```

## Why this helps

- Starts independent work in parallel.
- Lets slower sections stream behind a fallback when appropriate.
- Makes true dependencies easier to distinguish from accidental waterfalls.
