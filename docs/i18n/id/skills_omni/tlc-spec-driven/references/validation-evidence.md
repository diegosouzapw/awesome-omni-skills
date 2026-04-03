# Validation Evidence Guide (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/validation-evidence.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/validation-evidence.md)

---


Use the lightest evidence that credibly proves the change.

## Evidence selection

| Change type | Preferred evidence | Notes |
| --- | --- | --- |
| Pure logic change | unit tests | Fastest and most targeted proof |
| Cross-component behavior | integration tests | Use when boundaries or persistence matter |
| UI copy or simple rendering change | manual verification or UI test | Record exact steps or screenshots when needed |
| User workflow or acceptance behavior | manual/UAT evidence | Useful for user-facing flows with multiple steps |
| Config or operational change | command output, smoke check, or manual confirmation | Keep proof narrow and reproducible |

## Task-level fields

Every meaningful task should include:

- **Done when:** a crisp completion statement
- **How verified:** test, command, manual step, or evidence type

## Evidence notes

Good evidence is:

- directly tied to the claimed behavior
- easy for a reviewer to understand
- proportionate to the risk and scope

Weak evidence includes:

- vague statements like "should work"
- claiming success with no test or observable proof
- only relying on broad end-to-end checks when a smaller, clearer test would be stronger
