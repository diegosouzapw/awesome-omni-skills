# Router Auth Flow Example (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇪🇸 [es](../../../../es/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇩🇪 [de](../../../../de/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇮🇹 [it](../../../../it/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇮🇳 [in](../../../../in/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇹🇭 [th](../../../../th/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇮🇩 [id](../../../../id/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇳🇴 [no](../../../../no/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇩🇰 [da](../../../../da/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇮🇱 [he](../../../../he/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-native-expert/examples/router-auth-flow-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-native-expert/examples/router-auth-flow-example.md)

---


Use this packet when the user asks for protected routes in an Expo Router app.

## Example request

```text
Implement an authenticated area in an Expo Router app.
Use route groups and redirects instead of scattered imperative navigation.
Assume there is a session provider already available.
Return the route tree, layout strategy, screen changes, and validation notes.
```

## Expected implementation shape

- public route group such as `(public)`
- protected route group such as `(app)`
- layout-level auth gate or redirect
- typed links if the project supports typed routes
- clear handling for logged-out and logged-in startup states

## Agent output checklist

1. proposed folders and route files
2. auth decision location
3. redirect logic
4. params or typed-route notes
5. iOS and Android validation notes
