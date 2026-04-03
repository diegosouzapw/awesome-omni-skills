# Example: Console and Network Triage (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇪🇸 [es](../../../../es/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇫🇷 [fr](../../../../fr/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇩🇪 [de](../../../../de/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇮🇹 [it](../../../../it/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇷🇺 [ru](../../../../ru/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇯🇵 [ja](../../../../ja/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇰🇷 [ko](../../../../ko/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇸🇦 [ar](../../../../ar/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇮🇳 [hi](../../../../hi/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇮🇳 [in](../../../../in/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇹🇭 [th](../../../../th/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇻🇳 [vi](../../../../vi/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇮🇩 [id](../../../../id/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇲🇾 [ms](../../../../ms/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇳🇱 [nl](../../../../nl/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇵🇱 [pl](../../../../pl/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇸🇪 [sv](../../../../sv/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇳🇴 [no](../../../../no/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇩🇰 [da](../../../../da/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇫🇮 [fi](../../../../fi/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇵🇹 [pt](../../../../pt/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇷🇴 [ro](../../../../ro/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇭🇺 [hu](../../../../hu/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇧🇬 [bg](../../../../bg/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇸🇰 [sk](../../../../sk/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇮🇱 [he](../../../../he/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇵🇭 [phi](../../../../phi/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇨🇿 [cs](../../../../cs/skills_omni/chrome-devtools/examples/console-network-triage.md) · 🇹🇷 [tr](../../../../tr/skills_omni/chrome-devtools/examples/console-network-triage.md)

---


## Scenario

The user reports: "Checkout fails after I click Pay Now."

## Investigation shape

1. Confirm the correct page.
2. Reproduce the failure once.
3. Inspect console output.
4. Inspect network requests triggered by the action.
5. Summarize the likely cause with evidence.

## Example result format

- **Page:** `/checkout`
- **Repro:** Clicked `Pay Now` after completing required form fields.
- **Console evidence:** `TypeError` thrown in checkout submission handler.
- **Network evidence:** `POST /api/checkout` returned `500`.
- **Likely cause:** Frontend error handling is weak, but the primary failure appears to be the backend checkout endpoint returning `500`.
- **Confidence:** Medium, because both console and network signals align.

## Notes

If request details include tokens, cookies, or personal data, redact them before returning the summary.
