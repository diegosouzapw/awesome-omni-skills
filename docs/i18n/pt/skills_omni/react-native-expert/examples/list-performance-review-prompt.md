# List Performance Review Prompt (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇪🇸 [es](../../../../es/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇩🇪 [de](../../../../de/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇮🇹 [it](../../../../it/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇮🇳 [in](../../../../in/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇹🇭 [th](../../../../th/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇮🇩 [id](../../../../id/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇳🇴 [no](../../../../no/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇩🇰 [da](../../../../da/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇮🇱 [he](../../../../he/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-native-expert/examples/list-performance-review-prompt.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-native-expert/examples/list-performance-review-prompt.md)

---


```text
Review this React Native list screen for performance problems.

Goals:
- identify whether virtualization is correct
- find obvious render-path waste
- check image and row complexity
- recommend FlatList tuning before switching libraries
- suggest FlashList only if the measured scenario justifies it

Return:
1. likely bottlenecks
2. highest-confidence code changes
3. release-mode validation steps
4. whether the issue is JS-thread, rendering, image, or list-configuration related
```
