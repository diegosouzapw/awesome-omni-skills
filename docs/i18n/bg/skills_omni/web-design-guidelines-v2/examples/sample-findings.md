# Sample Findings (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇪🇸 [es](../../../../es/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇩🇪 [de](../../../../de/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇮🇹 [it](../../../../it/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇮🇳 [in](../../../../in/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇹🇭 [th](../../../../th/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇮🇩 [id](../../../../id/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇳🇴 [no](../../../../no/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇩🇰 [da](../../../../da/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇮🇱 [he](../../../../he/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-design-guidelines-v2/examples/sample-findings.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-design-guidelines-v2/examples/sample-findings.md)

---


Use these as style references for terse, high-signal review output.

```text
src/components/Modal.tsx:84 [high][dialog] Focus does not move into the dialog when it opens.
src/components/Modal.tsx:113 [high][focus] Close button focus ring is removed with no visible replacement.
src/components/ProfileForm.tsx:57 [medium][forms] Email field has placeholder text but no associated label.
src/components/ProfileForm.tsx:132 [medium][status-messaging] Save success is shown visually only; no status message is announced.
src/components/Tabs.tsx:49 [medium][navigation-state] Selected tab state is not reflected in the URL, so the view cannot be shared or restored.
src/layout/Header.tsx:101 [medium][responsive] Header actions overflow horizontally under narrow widths and long localized labels.
src/theme/DarkCard.tsx:28 [low][theming] Border color becomes indistinguishable from the background in dark mode.
```

## Notes

- Keep the line specific when possible.
- Mention the affected state when it matters.
- Skip long explanations unless the remediation direction is non-obvious.
- Group by file in the final output if there are multiple findings.
