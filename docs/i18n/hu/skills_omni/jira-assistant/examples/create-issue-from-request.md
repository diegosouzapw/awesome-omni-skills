# Example: Create Issue From Request (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇪🇸 [es](../../../../es/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇫🇷 [fr](../../../../fr/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇩🇪 [de](../../../../de/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇮🇹 [it](../../../../it/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇷🇺 [ru](../../../../ru/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇯🇵 [ja](../../../../ja/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇰🇷 [ko](../../../../ko/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇸🇦 [ar](../../../../ar/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇮🇳 [hi](../../../../hi/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇮🇳 [in](../../../../in/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇹🇭 [th](../../../../th/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇻🇳 [vi](../../../../vi/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇮🇩 [id](../../../../id/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇲🇾 [ms](../../../../ms/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇳🇱 [nl](../../../../nl/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇵🇱 [pl](../../../../pl/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇸🇪 [sv](../../../../sv/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇳🇴 [no](../../../../no/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇩🇰 [da](../../../../da/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇫🇮 [fi](../../../../fi/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇵🇹 [pt](../../../../pt/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇷🇴 [ro](../../../../ro/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇭🇺 [hu](../../../../hu/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇧🇬 [bg](../../../../bg/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇸🇰 [sk](../../../../sk/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇮🇱 [he](../../../../he/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇵🇭 [phi](../../../../phi/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇨🇿 [cs](../../../../cs/skills_omni/jira-assistant/examples/create-issue-from-request.md) · 🇹🇷 [tr](../../../../tr/skills_omni/jira-assistant/examples/create-issue-from-request.md)

---


## User request

```text
Create a Jira task in PAY for implementing user authentication.
```

## Safe agent flow

1. Confirm or discover `cloudId` and `projectKey = PAY`.
2. Retrieve valid issue types for PAY.
3. Inspect required fields for the selected issue type.
4. If custom required fields exist, ask for the missing values.
5. Build a short summary and structured Markdown description.
6. Create the issue.
7. Return the issue key and summary.

## Example description

```markdown
## Context
The API needs authentication before wider rollout.

## Objective
Implement user authentication for protected endpoints.

## Technical Requirements
- [ ] Add authentication middleware
- [ ] Generate JWT tokens on login
- [ ] Validate tokens on protected routes

## Acceptance Criteria
- [ ] Users can log in successfully
- [ ] Protected endpoints reject invalid tokens
- [ ] Authentication flow is documented in the ticket
```

## Expected response shape

```text
Created PAY-123: Implement user authentication for protected endpoints.
```
