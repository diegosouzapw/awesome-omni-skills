# Native Module Integration Checklist (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-native-expert/examples/native-module-integration-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-native-expert/examples/native-module-integration-checklist.md)

---


Use this when adding a package or capability that may cross the Expo native boundary.

## Questions to answer

- Does this dependency require native code not available in Expo Go?
- Does it add or modify a config plugin?
- Does it require permissions declarations?
- Does it change `app.json` or `app.config.*` output?
- Does it require rebuilding an existing development build?

## Expected conclusion format

```text
Runtime decision:
- Expo Go sufficient: yes/no
- Development build required: yes/no
- Prebuild/rebuild required: yes/no

Why:
- <brief explanation>

Operator follow-up:
- <commands or rebuild notes, kept narrow and safe>
```
