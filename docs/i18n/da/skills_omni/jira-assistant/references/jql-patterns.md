# JQL Patterns (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/jira-assistant/references/jql-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/jira-assistant/references/jql-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/jira-assistant/references/jql-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/jira-assistant/references/jql-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/jira-assistant/references/jql-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/jira-assistant/references/jql-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/jira-assistant/references/jql-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/jira-assistant/references/jql-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/jira-assistant/references/jql-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/jira-assistant/references/jql-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/jira-assistant/references/jql-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/jira-assistant/references/jql-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/jira-assistant/references/jql-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/jira-assistant/references/jql-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/jira-assistant/references/jql-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/jira-assistant/references/jql-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/jira-assistant/references/jql-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/jira-assistant/references/jql-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/jira-assistant/references/jql-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/jira-assistant/references/jql-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/jira-assistant/references/jql-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/jira-assistant/references/jql-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/jira-assistant/references/jql-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/jira-assistant/references/jql-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/jira-assistant/references/jql-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/jira-assistant/references/jql-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/jira-assistant/references/jql-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/jira-assistant/references/jql-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/jira-assistant/references/jql-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/jira-assistant/references/jql-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/jira-assistant/references/jql-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/jira-assistant/references/jql-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/jira-assistant/references/jql-patterns.md)

---


Use these examples when precise filtering is needed.

## Guidance

- Include `project = KEY` when the request is project-specific.
- Do not force project scoping for explicitly cross-project searches.
- Quote status names and other values when needed.
- If results are large, summarize the top matches and mention that more may exist.

## Common patterns

### My current work

```jql
project = PAY AND assignee = currentUser() AND status = "In Progress"
```

### Recent issues

```jql
project = PAY AND created >= -7d
```

### High-priority bugs

```jql
project = PAY AND type = Bug AND priority = High
```

### Open epics

```jql
project = PAY AND type = Epic AND status != "Done"
```

### Unassigned tasks

```jql
project = PAY AND assignee is EMPTY AND status = "To Do"
```

### Recently updated work

```jql
project = PAY AND updated >= startOfWeek()
```

### Sprint blockers

```jql
project = PAY AND sprint in openSprints() AND status != "Done" AND priority in (Highest, High)
```

### Cross-project search

```jql
assignee = currentUser() AND statusCategory != Done ORDER BY updated DESC
```

## Recovery tips

If a JQL query fails or returns nothing:

- verify the field names and values
- check whether the request should be cross-project
- confirm status names for the target workflow
- reduce the query to a simpler version, then add filters back one by one
