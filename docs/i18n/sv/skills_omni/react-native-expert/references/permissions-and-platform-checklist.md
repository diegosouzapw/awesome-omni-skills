# Permissions and Platform Checklist (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-native-expert/references/permissions-and-platform-checklist.md)

---


Use this checklist before merging platform-sensitive React Native or Expo changes.

## Permissions

- confirm which permissions are required on iOS and Android
- verify app config/native declarations are present
- verify runtime prompt timing is appropriate
- test denial, retry, and settings-recovery flows
- retest in a built app, not only in development

## Safe areas and device chrome

- verify notch and status bar overlap
- verify bottom insets on gesture-navigation devices
- verify scroll containers respect content insets where needed
- verify modal and sheet layouts on smaller devices

## Keyboard behavior

- test forms on iOS and Android
- verify focused input remains visible
- use `KeyboardAvoidingView` or established project-safe pattern as needed
- test submit and dismissal flows

## Android back behavior

- test hardware back on custom navigation flows
- confirm it dismisses overlays or returns to the expected screen
- do not break system expectations with over-aggressive interception

## Platform-specific code

Use platform splits only when justified:

- `Component.ios.tsx`
- `Component.android.tsx`
- `Platform.select(...)`

Avoid forking code unnecessarily when a shared implementation is good enough.

## Presentation differences

Check:

- modal style and dismissal
- sheet behavior
- status bar readability
- haptics or gesture interactions if used

## Before handoff

Return:

1. permissions involved
2. declarations added or verified
3. platform-specific behaviors tested
4. anything still requiring real-device confirmation
