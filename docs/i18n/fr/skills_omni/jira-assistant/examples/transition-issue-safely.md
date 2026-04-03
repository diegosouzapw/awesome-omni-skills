# Example: Transition Issue Safely (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇪🇸 [es](../../../../es/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇫🇷 [fr](../../../../fr/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇩🇪 [de](../../../../de/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇮🇹 [it](../../../../it/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇷🇺 [ru](../../../../ru/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇯🇵 [ja](../../../../ja/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇰🇷 [ko](../../../../ko/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇸🇦 [ar](../../../../ar/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇮🇳 [hi](../../../../hi/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇮🇳 [in](../../../../in/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇹🇭 [th](../../../../th/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇻🇳 [vi](../../../../vi/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇮🇩 [id](../../../../id/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇲🇾 [ms](../../../../ms/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇳🇱 [nl](../../../../nl/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇵🇱 [pl](../../../../pl/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇸🇪 [sv](../../../../sv/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇳🇴 [no](../../../../no/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇩🇰 [da](../../../../da/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇫🇮 [fi](../../../../fi/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇵🇹 [pt](../../../../pt/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇷🇴 [ro](../../../../ro/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇭🇺 [hu](../../../../hu/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇧🇬 [bg](../../../../bg/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇸🇰 [sk](../../../../sk/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇮🇱 [he](../../../../he/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇵🇭 [phi](../../../../phi/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇨🇿 [cs](../../../../cs/skills_omni/jira-assistant/examples/transition-issue-safely.md) · 🇹🇷 [tr](../../../../tr/skills_omni/jira-assistant/examples/transition-issue-safely.md)

---


## User request

```text
Move PAY-456 to Done.
```

## Safe agent flow

1. Retrieve available transitions for `PAY-456`.
2. Check whether a transition equivalent to the user's intent exists.
3. If multiple end states are plausible, ask the user to choose.
4. Apply the transition.
5. Verify the resulting status.
6. Report the final state.

## Good response if transition is direct

```text
Moved PAY-456 to Done.
```

## Good response if transition is not direct

```text
PAY-456 cannot move directly to Done from its current state. Available transitions are "Start Progress" and "Ready for QA". Which one do you want?
```

## Why this matters

Workflow transitions are Jira-instance specific. Status names are not universal, and validators may block the move.
