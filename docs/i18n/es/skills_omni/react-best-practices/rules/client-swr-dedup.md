# client-swr-dedup.md (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/client-swr-dedup.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/client-swr-dedup.md)

---

---
title: Use SWR for Automatic Deduplication
impact: MEDIUM-HIGH
impactDescription: automatic deduplication
tags: client, swr, deduplication, data-fetching
---

## Use SWR for Automatic Deduplication

SWR enables request deduplication, caching, and revalidation across component instances.

**Incorrect (no deduplication, each instance fetches):**

```tsx
function UserList() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(setUsers)
  }, [])
}
```

**Correct (multiple instances share one request):**

```tsx
import useSWR from 'swr'

function UserList() {
  const { data: users } = useSWR('/api/users', fetcher)
}
```

**For immutable data:**

```tsx
import { useImmutableSWR } from '@/lib/swr'

function StaticContent() {
  const { data } = useImmutableSWR('/api/config', fetcher)
}
```

**For mutations:**

```tsx
import { useSWRMutation } from 'swr/mutation'

function UpdateButton() {
  const { trigger } = useSWRMutation('/api/user', updateUser)
  return <button onClick={() => trigger()}>Update</button>
}
```

Reference: [https://swr.vercel.app](https://swr.vercel.app)
