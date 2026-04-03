# Security and Storage (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-native-expert/references/security-storage.md) · 🇪🇸 [es](../../../../es/skills_omni/react-native-expert/references/security-storage.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-native-expert/references/security-storage.md) · 🇩🇪 [de](../../../../de/skills_omni/react-native-expert/references/security-storage.md) · 🇮🇹 [it](../../../../it/skills_omni/react-native-expert/references/security-storage.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-native-expert/references/security-storage.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-native-expert/references/security-storage.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-native-expert/references/security-storage.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-native-expert/references/security-storage.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-native-expert/references/security-storage.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-native-expert/references/security-storage.md) · 🇮🇳 [in](../../../../in/skills_omni/react-native-expert/references/security-storage.md) · 🇹🇭 [th](../../../../th/skills_omni/react-native-expert/references/security-storage.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-native-expert/references/security-storage.md) · 🇮🇩 [id](../../../../id/skills_omni/react-native-expert/references/security-storage.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-native-expert/references/security-storage.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-native-expert/references/security-storage.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-native-expert/references/security-storage.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-native-expert/references/security-storage.md) · 🇳🇴 [no](../../../../no/skills_omni/react-native-expert/references/security-storage.md) · 🇩🇰 [da](../../../../da/skills_omni/react-native-expert/references/security-storage.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-native-expert/references/security-storage.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-native-expert/references/security-storage.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-native-expert/references/security-storage.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-native-expert/references/security-storage.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-native-expert/references/security-storage.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-native-expert/references/security-storage.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-native-expert/references/security-storage.md) · 🇮🇱 [he](../../../../he/skills_omni/react-native-expert/references/security-storage.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-native-expert/references/security-storage.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-native-expert/references/security-storage.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-native-expert/references/security-storage.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-native-expert/references/security-storage.md)

---


Use this guide when the task involves auth tokens, credentials, environment variables, persistence, or release-time secret handling.

## Core rules

- Do not put private secrets in `EXPO_PUBLIC_` variables.
- Do not assume any value shipped in the client bundle is secret.
- Prefer backend-managed credentials and short-lived tokens.
- Use on-device storage intentionally and classify data by sensitivity.

## Storage decision table

| Data type | Recommended handling |
| --- | --- |
| API secret or signing secret | keep on the server only |
| session token or sensitive credential that must exist on-device | prefer SecureStore |
| non-sensitive cached preferences | MMKV or other local store can be appropriate |
| derived UI state | compute or persist only if needed |

## SecureStore boundary

SecureStore is appropriate for sensitive values that must be stored locally, but it does not make a client app a trusted secret environment.

If a value would be dangerous to expose from a client app, it should not live there in the first place.

## MMKV boundary

MMKV is useful for fast local persistence and app state, but treat it as non-secret storage unless the project has an explicitly reviewed security model.

## Environment variables

Client-exposed environment values are configuration, not secret management.

Safe examples:

- public API base URL
- feature flags intended for the client
- non-sensitive analytics toggles

Unsafe examples:

- private API keys
- service account credentials
- database secrets
- signing secrets

## Release considerations

- restrict access to signing credentials
- avoid spreading credentials across local machines unnecessarily
- document who owns rotation and recovery
- keep production secrets outside the mobile bundle

## Return format for security-sensitive tasks

State:

1. what data is sensitive
2. what must stay server-side
3. what local storage is acceptable
4. what environment variables are safe to expose
