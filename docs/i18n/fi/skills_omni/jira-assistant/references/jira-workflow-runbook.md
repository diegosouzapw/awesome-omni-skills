# Jira Workflow Runbook (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇪🇸 [es](../../../../es/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇩🇪 [de](../../../../de/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇮🇹 [it](../../../../it/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇮🇳 [in](../../../../in/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇹🇭 [th](../../../../th/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇮🇩 [id](../../../../id/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇳🇴 [no](../../../../no/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇩🇰 [da](../../../../da/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇮🇱 [he](../../../../he/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/jira-assistant/references/jira-workflow-runbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/jira-assistant/references/jira-workflow-runbook.md)

---


Use this runbook for Jira issue operations through Atlassian MCP.

## 1. Discover context

Gather as much of the following as possible before acting:

- `cloudId`
- `projectKey`
- Jira site URL
- board URL or board identity for sprint work
- issue key, issue id, or ARI if the target is already known

Preferred order:

1. read workspace guidance if present
2. use Jira search to discover accessible projects when needed
3. ask the user to confirm ambiguous scope

## 2. Choose the right entry point

### If the user knows the issue key

- retrieve the issue directly
- inspect current fields and status
- then choose edit, comment, assign, or transition

### If the user does not know the issue key

- start with broad search
- summarize the top matches
- ask the user to confirm the intended issue if multiple candidates remain

### If the user wants a new issue

- confirm project
- list issue types
- inspect required fields
- ask for missing required values
- create the issue

### If the user wants sprint work

- identify board context first
- inspect active or future sprint state
- then inspect or move issues

## 3. Search flow

Use natural-language search for discovery-oriented requests.

Examples:

```text
search("issues in PAY project related to authentication")
search("my blockers in the current sprint")
search("open bugs updated this week")
```

Use JQL for exact filters.

Examples:

```jql
project = PAY AND assignee = currentUser() AND status = "In Progress"
project = PAY AND type = Bug AND priority = High
```

Guidance:

- include project scoping when the task is project-specific
- allow cross-project search when the user explicitly asks for it
- report top matches if results are long or paginated

## 4. Create flow

1. get valid issue types for the target project
2. get field metadata for the selected issue type
3. inspect required fields and allowed values
4. ask for missing data
5. create the issue
6. report the new issue key and summary

Representative sequence:

```text
getJiraProjectIssueTypesMetadata(cloudId="{CLOUD_ID}", projectKey="{PROJECT_KEY}")
getJiraIssueTypeMetaWithFields(cloudId="{CLOUD_ID}", projectKey="{PROJECT_KEY}", issueTypeId="{ISSUE_TYPE_ID}")
createJiraIssue(...)
```

## 5. Edit/comment/assign flow

### Edit fields

Use field edits for structured data changes.

```text
editJiraIssue(cloudId, issueKey, fields)
```

### Add comment

Use comments for narrative progress updates or collaboration.

```text
addCommentToJiraIssue(cloudId, issueKey, comment)
```

### Assign

Only assign when the intended assignee is clear.

## 6. Transition flow

Never assume a status transition exists.

1. get available transitions
2. map the user's desired state to a valid transition
3. confirm if the change is impactful or ambiguous
4. apply the transition
5. verify the new status

Representative sequence:

```text
getTransitionsForJiraIssue(cloudId, issueKey)
transitionJiraIssue(cloudId, issueKey, transitionId)
```

## 7. Sprint flow

Sprint work requires board context.

1. identify board or sprint context
2. inspect active or future sprint availability
3. inspect sprint issues
4. move or update issues only after confirming the target sprint

Common sprint questions:

- what is in the current sprint?
- which issues are blocked?
- move `PAY-123` into the current sprint

## 8. Result contract

End with a concise summary that includes:

- issue key(s)
- action taken
- resulting status or field values
- blockers or follow-up questions
- any assumptions made during execution
