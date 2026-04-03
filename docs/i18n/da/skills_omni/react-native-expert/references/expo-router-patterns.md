# Expo Router Patterns (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-native-expert/references/expo-router-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-native-expert/references/expo-router-patterns.md)

---


Use this guide when the task involves navigation, route structure, auth flow, layouts, params, or deep linking in an Expo Router app.

## Default operating model

Prefer Expo Router's file-based conventions over ad hoc navigation setup when the project already uses Expo Router.

Start by identifying:

- `app/` route structure
- existing `_layout.tsx` files
- route groups such as `(auth)` or `(tabs)`
- whether typed routes are enabled
- where auth/session state currently lives

## Notation quick guide

| Pattern | Meaning | Typical use |
| --- | --- | --- |
| `app/index.tsx` | root route | home screen |
| `app/_layout.tsx` | shared layout wrapper | stack, tabs, providers |
| `app/profile/[id].tsx` | dynamic segment | user or item detail |
| `app/(tabs)/_layout.tsx` | grouped routes with shared navigator | tab shell |
| `app/+not-found.tsx` | unmatched route handling | fallback screen |

## Recommended workflow

1. Sketch the route tree before coding.
2. Decide which layouts own auth checks, stacks, or tabs.
3. Prefer route groups for organization rather than overloading screen files with routing logic.
4. Use `Link` for declarative navigation when suitable.
5. Use `router.push`, `router.replace`, or redirects deliberately for imperative flows.
6. Pass route params explicitly and keep their types narrow.

## Auth and protected routes

Typical pattern:

- public screens live in one route group
- authenticated screens live in another
- a layout or gate checks session state
- unauthorized users are redirected to sign-in

Avoid scattering auth redirects across many leaf screens when a layout-level decision is clearer.

## URL params

Distinguish between:

- route params from dynamic segments
- search params from the URL/query string

Be explicit about whether the screen needs local params only or global search param observation.

## Typed routes

If the project enables typed routes, prefer them for:

- route hrefs
- route params
- links in reusable components

This reduces stringly-typed navigation mistakes.

## Common mistakes

- Building manual navigation state where file-based routing already solves it.
- Using inconsistent route names between files and links.
- Putting too much auth logic in each screen instead of a layout or guard.
- Mixing route params and search params carelessly.
- Renaming route files without updating links and redirects.

## Return format for routing tasks

When implementing routing changes, return:

1. the proposed route tree
2. files added or changed
3. redirect/protection logic
4. params and typed-route implications
5. platform-specific test notes if relevant
