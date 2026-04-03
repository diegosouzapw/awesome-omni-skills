# Browser Debugging Workflow (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/chrome-devtools/references/browser-debugging-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/chrome-devtools/references/browser-debugging-workflow.md)

---


Use this playbook for live Chrome DevTools MCP investigations.

## Default triage sequence

1. Confirm the correct browser page with `list_pages` and `select_page`.
2. Reproduce the issue once with the fewest side effects possible.
3. Capture a fresh `take_snapshot` before interaction-heavy work.
4. Inspect console output.
5. Inspect network activity.
6. Use `evaluate_script` only for narrow state checks.
7. Capture a screenshot if visual evidence matters.
8. Run a performance trace if the issue is about speed or responsiveness.
9. Summarize findings with evidence and uncertainty.

## Quick paths by task

### Console-first debugging

Use when the page shows visible breakage, blank sections, script errors, or warnings.

- Check `list_console_messages`.
- Note the message type, affected file, stack, and timing.
- Confirm whether the error aligns with the visible issue.
- If needed, inspect related state with `evaluate_script`.

### Network-first debugging

Use when data fails to load, API calls appear broken, or the UI shows generic backend-like failures.

- Reproduce the action.
- Run `list_network_requests`.
- Inspect failed or suspicious requests with `get_network_request`.
- Capture status, method, endpoint, timing, and blocked indicators.
- Compare against console output.

### Snapshot-first interaction debugging

Use when clicking, filling, hovering, or dialog handling is involved.

- Use `take_snapshot`.
- Find the current `uid` for the target element.
- Perform the interaction.
- Refresh the snapshot after rerenders, navigation, hydration, modal transitions, or route changes.

### Screenshot workflow

Use when the user needs visual proof.

- Reproduce the exact state.
- Set viewport or emulation first if relevant.
- Capture the screenshot.
- Pair it with a brief note: what the user should notice and how it was reproduced.

### Performance workflow

Use when the issue is speed, jank, layout shift, or interaction lag.

- For load issues, trace with reload.
- For interaction issues, trace the exact lagging action.
- Review insights for long tasks, rendering work, layout shifts, heavy JavaScript, and user-facing metrics.
- Report likely bottleneck and likely next fix area.

## Evidence checklist

Collect only what helps the user decide next steps:

- page or route inspected
- exact repro action
- console message or request details
- screenshot if relevant
- trace observation if performance-related
- likely cause and confidence level

## Redaction reminder

Before returning evidence, remove or mask:

- cookies
- bearer tokens
- session identifiers
- personal data
- internal-only URLs or payloads when they are not needed
