# Example: Sprint Update Flow (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇪🇸 [es](../../../../es/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇩🇪 [de](../../../../de/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇮🇹 [it](../../../../it/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇮🇳 [in](../../../../in/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇹🇭 [th](../../../../th/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇮🇩 [id](../../../../id/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇳🇴 [no](../../../../no/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇩🇰 [da](../../../../da/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇮🇱 [he](../../../../he/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/jira-assistant/examples/sprint-update-flow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/jira-assistant/examples/sprint-update-flow.md)

---


## User request

```text
Update my sprint.
```

## Safe interpretation

The request is ambiguous. Do not mutate anything yet.

## Good clarification

```text
Which Jira project or board should I use? If you know the board, send that too. I can check the active sprint, show the current issues, and then help move or update the right ticket.
```

## If the user replies with board context

Example:

```text
Use the Payments board.
```

Then proceed to:

1. identify the board
2. inspect the active sprint
3. summarize sprint contents
4. ask what specific change is desired if not already clear
5. perform only the requested sprint-safe action

## Example outcome

```text
Active sprint found for Payments board. Top open items: PAY-101, PAY-118, PAY-132. One blocker appears high priority. Tell me which issue you want to move or update.
```
