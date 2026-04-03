# Jira Troubleshooting Matrix (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/jira-assistant/references/jira-troubleshooting-matrix.md)

---


## Unauthorized or forbidden

**Symptoms:** Requests fail with 401 or 403, or read operations work while write operations fail.

**Likely causes:**
- wrong Jira site or `cloudId`
- expired or invalid token/session
- missing scopes
- insufficient project permissions for edit, transition, assign, or sprint operations

**Operator actions:**
- verify the correct site and `cloudId`
- confirm that the caller is authenticated for that site
- compare read vs write behavior to isolate permission gaps
- ask the user to verify access if the project is private or restricted

## Project or issue not found

**Symptoms:** Direct lookup fails, or search cannot find a supposedly valid issue.

**Likely causes:**
- wrong site
- wrong project key
- issue belongs to another project or site
- missing visibility permissions

**Operator actions:**
- confirm the project key and issue key
- ask for a link if the user has one
- test with broader search before retrying direct mutation

## Required field or invalid value

**Symptoms:** Create or edit fails with validation errors.

**Likely causes:**
- custom required fields
- invalid option values for a select field
- wrong issue type for the project

**Operator actions:**
- re-fetch issue-type metadata
- inspect required fields and allowed values
- ask the user for any missing required data

## Transition not available

**Symptoms:** Desired status is not listed as a valid transition, or transition fails unexpectedly.

**Likely causes:**
- workflow does not expose that transition from the current state
- validator blocks the move
- required fields are missing
- insufficient permissions

**Operator actions:**
- get available transitions first
- map intent to a valid transition name or id
- explain if an intermediate transition is required
- inspect blockers before retrying

## Search returns no useful results

**Symptoms:** Natural-language search is vague, or JQL returns empty results.

**Likely causes:**
- missing project scope
- over-constrained query
- wrong field names or status names
- issue is outside the user's visibility

**Operator actions:**
- simplify the query
- add or remove project scope deliberately
- validate status names and filters
- present a few search refinements to the user

## Subtask creation fails

**Symptoms:** Subtask request fails despite valid-looking summary and description.

**Likely causes:**
- missing or invalid parent issue key
- selected issue type is not a subtask type
- project or workflow restrictions

**Operator actions:**
- retrieve and validate the parent issue first
- verify that the issue type is a subtask-capable type
- retry only after confirming parent context

## Sprint operation fails

**Symptoms:** Cannot inspect sprint, add issue to sprint, or expected issue is absent from board views.

**Likely causes:**
- wrong board context
- no active sprint
- missing Jira Software permissions
- issue excluded by board filter

**Operator actions:**
- confirm board identity
- inspect active/future sprint availability
- verify that the issue is eligible for the board and sprint
