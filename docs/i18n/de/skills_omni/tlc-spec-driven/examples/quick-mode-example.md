# Quick Mode Example (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/examples/quick-mode-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/examples/quick-mode-example.md)

---


## Request

"Fix the app so production logs are not shown in the local debug banner."

## Right-sized approach

- Scope: one small UI condition change
- Mode: Quick mode

## Example packet

```md
# TASK

## Scope
Hide production log details from the local debug banner.

## Atomic steps
1. Find the banner visibility condition.
2. Update the condition so production logs are excluded.
3. Verify the banner still appears for local debug cases only.

## Verification
- Run the targeted UI test if it exists, or
- manually confirm banner behavior in local and production-like modes
```

## Example summary

```md
# SUMMARY

Changed the debug banner condition to exclude production log details.
Verified by checking that the banner still appears in local debug mode and does not appear for production-like data.
```
