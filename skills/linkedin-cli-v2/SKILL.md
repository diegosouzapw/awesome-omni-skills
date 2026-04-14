---
name: linkedin-cli-v2
description: "LinkedIn Skill workflow skill. Use this skill when the user needs automating LinkedIn via CLI: fetch profiles, search people/companies, send messages, manage connections, create posts, and Sales Navigator and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["linkedin-cli-v2", "linkedin-cli", "automating", "linkedin", "via", "cli", "fetch", "profiles"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# LinkedIn Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/linkedin-cli` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Authentication, Global Flags, Output Format, Important Behavior, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building outreach, research, or recruiting workflows that rely on LinkedIn data and messaging.
- Enriching leads or accounts by fetching people and company profiles in bulk.
- Coordinating multi-step Sales Navigator or workflow runs where JSON output and exit codes are required.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Authentication

If a command fails with exit code 2 (authentication error), ask the user to set up their account:

1. Go to [app.linkedapi.io](https://app.linkedapi.io) and sign up or log in
2. Connect their LinkedIn account
3. Copy the **Linked API Token** and **Identification Token** from the dashboard

Once the user provides the tokens, run:

```bash
linkedin setup --linked-api-token=TOKEN --identification-token=TOKEN
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @linkedin-cli-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/linkedin-cli-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/linkedin-cli-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @linkedin-cli-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Commands

### Fetch a Person Profile

```bash
linkedin person fetch <url> [flags] --json -q
```

Optional flags to include additional data:

- `--experience` – work history
- `--education` – education history
- `--skills` – skills list
- `--languages` – languages
- `--posts` – recent posts (with `--posts-limit N`, `--posts-since TIMESTAMP`)
- `--comments` – recent comments (with `--comments-limit N`, `--comments-since TIMESTAMP`)
- `--reactions` – recent reactions (with `--reactions-limit N`, `--reactions-since TIMESTAMP`)

Only request additional data when needed – each flag increases execution time.

```bash
# Basic profile
linkedin person fetch https://www.linkedin.com/in/username --json -q

# With experience and education
linkedin person fetch https://www.linkedin.com/in/username --experience --education --json -q

# With last 5 posts
linkedin person fetch https://www.linkedin.com/in/username --posts --posts-limit 5 --json -q
```

### Search People

```bash
linkedin person search [flags] --json -q
```

| Flag                   | Description                            |
| ---------------------- | -------------------------------------- |
| `--term`               | Search keyword or phrase               |
| `--limit`              | Max results                            |
| `--first-name`         | Filter by first name                   |
| `--last-name`          | Filter by last name                    |
| `--position`           | Filter by job position                 |
| `--locations`          | Comma-separated locations              |
| `--industries`         | Comma-separated industries             |
| `--current-companies`  | Comma-separated current company names  |
| `--previous-companies` | Comma-separated previous company names |
| `--schools`            | Comma-separated school names           |

```bash
linkedin person search --term "product manager" --locations "San Francisco" --json -q
linkedin person search --current-companies "Google" --position "Engineer" --limit 20 --json -q
```

### Fetch a Company

```bash
linkedin company fetch <url> [flags] --json -q
```

Optional flags:

- `--employees` – include employees
- `--dms` – include decision makers
- `--posts` – include company posts

Employee filters (require `--employees`):

| Flag                     | Description                  |
| ------------------------ | ---------------------------- |
| `--employees-limit`      | Max employees to retrieve    |
| `--employees-first-name` | Filter by first name         |
| `--employees-last-name`  | Filter by last name          |
| `--employees-position`   | Filter by position           |
| `--employees-locations`  | Comma-separated locations    |
| `--employees-industries` | Comma-separated industries   |
| `--employees-schools`    | Comma-separated school names |

| Flag            | Description                                        |
| --------------- | -------------------------------------------------- |
| `--dms-limit`   | Max decision makers to retrieve (requires `--dms`) |
| `--posts-limit` | Max posts to retrieve (requires `--posts`)         |
| `--posts-since` | Posts since ISO timestamp (requires `--posts`)     |

```bash
# Basic company info
linkedin company fetch https://www.linkedin.com/company/name --json -q

# With employees filtered by position
linkedin company fetch https://www.linkedin.com/company/name --employees --employees-position "Engineer" --json -q

# With decision makers and posts
linkedin company fetch https://www.linkedin.com/company/name --dms --posts --posts-limit 10 --json -q
```

### Search Companies

```bash
linkedin company search [flags] --json -q
```

| Flag           | Description                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| `--term`       | Search keyword                                                                                               |
| `--limit`      | Max results                                                                                                  |
| `--sizes`      | Comma-separated sizes: `1-10`, `11-50`, `51-200`, `201-500`, `501-1000`, `1001-5000`, `5001-10000`, `10001+` |
| `--locations`  | Comma-separated locations                                                                                    |
| `--industries` | Comma-separated industries                                                                                   |

```bash
linkedin company search --term "fintech" --sizes "11-50,51-200" --json -q
```

### Send a Message

```bash
linkedin message send <person-url> '<text>' --json -q
```

Text up to 1900 characters. Wrap the message in single quotes to avoid shell interpretation issues.

```bash
linkedin message send https://www.linkedin.com/in/username 'Hey, loved your latest post!' --json -q
```

### Get Conversation

```bash
linkedin message get <person-url> [--since TIMESTAMP] --json -q
```

The first call for a conversation triggers a background sync and may take longer. Subsequent calls are faster.

```bash
linkedin message get https://www.linkedin.com/in/username --json -q
linkedin message get https://www.linkedin.com/in/username --since 2024-01-15T10:30:00Z --json -q
```

### Connection Management

#### Check connection status

```bash
linkedin connection status <url> --json -q
```

#### Send connection request

```bash
linkedin connection send <url> [--note 'text'] [--email user@example.com] --json -q
```

#### List connections

```bash
linkedin connection list [flags] --json -q
```

| Flag                   | Description                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------ |
| `--limit`              | Max connections to return                                                            |
| `--since`              | Only connections made since ISO timestamp (only works when no filter flags are used) |
| `--first-name`         | Filter by first name                                                                 |
| `--last-name`          | Filter by last name                                                                  |
| `--position`           | Filter by job position                                                               |
| `--locations`          | Comma-separated locations                                                            |
| `--industries`         | Comma-separated industries                                                           |
| `--current-companies`  | Comma-separated current company names                                                |
| `--previous-companies` | Comma-separated previous company names                                               |
| `--schools`            | Comma-separated school names                                                         |

```bash
linkedin connection list --limit 50 --json -q
linkedin connection list --current-companies "Google" --position "Engineer" --json -q
linkedin connection list --since 2024-01-01T00:00:00Z --json -q
```

#### List pending outgoing requests

```bash
linkedin connection pending --json -q
```

#### Withdraw a pending request

```bash
linkedin connection withdraw <url> [--no-unfollow] --json -q
```

By default, withdrawing also unfollows the person. Use `--no-unfollow` to keep following.

#### Remove a connection

```bash
linkedin connection remove <url> --json -q
```

### Posts

#### Fetch a post

```bash
linkedin post fetch <url> [flags] --json -q
```

| Flag                 | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `--comments`         | Include comments                                                   |
| `--reactions`        | Include reactions                                                  |
| `--comments-limit`   | Max comments to retrieve (requires `--comments`)                   |
| `--comments-sort`    | Sort order: `mostRelevant` or `mostRecent` (requires `--comments`) |
| `--comments-replies` | Include replies to comments (requires `--comments`)                |
| `--reactions-limit`  | Max reactions to retrieve (requires `--reactions`)                 |

```bash
linkedin post fetch https://www.linkedin.com/posts/username_activity-123 --json -q

# With comments sorted by most recent, including replies
linkedin post fetch https://www.linkedin.com/posts/username_activity-123 \
  --comments --comments-sort mostRecent --comments-replies --json -q
```

#### Create a post

```bash
linkedin post create '<text>' [flags] --json -q
```

| Flag            | Description                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `--company-url` | Post on behalf of a company page (requires admin access)                                                           |
| `--attachments` | Attachment as `url:type` or `url:type:name`. Types: `image`, `video`, `document`. Can be specified multiple times. |

Attachment limits: up to 9 images, or 1 video, or 1 document. Cannot mix types.

```bash
linkedin post create 'Excited to share our latest update!' --json -q

# With a document
linkedin post create 'Our Q4 report' \
  --attachments "https://example.com/report.pdf:document:Q4 Report" --json -q

# Post as a company
linkedin post create 'Company announcement' \
  --company-url https://www.linkedin.com/company/name --json -q
```

#### React to a post

```bash
linkedin post react <url> --type <reaction> [--company-url <url>] --json -q
```

Reaction types: `like`, `love`, `support`, `celebrate`, `insightful`, `funny`.

```bash
linkedin post react https://www.linkedin.com/posts/username_activity-123 --type like --json -q

# React on behalf of a company
linkedin post react https://www.linkedin.com/posts/username_activity-123 --type celebrate \
  --company-url https://www.linkedin.com/company/name --json -q
```

#### Comment on a post

```bash
linkedin post comment <url> '<text>' [--company-url <url>] --json -q
```

Text up to 1000 characters.

```bash
linkedin post comment https://www.linkedin.com/posts/username_activity-123 'Great insights!' --json -q

# Comment on behalf of a company
linkedin post comment https://www.linkedin.com/posts/username_activity-123 'Well said!' \
  --company-url https://www.linkedin.com/company/name --json -q
```

### Statistics

```bash
# Social Selling Index
linkedin stats ssi --json -q

# Performance analytics (profile views, post impressions, search appearances)
linkedin stats performance --json -q

# API usage for a date range
linkedin stats usage --start 2024-01-01T00:00:00Z --end 2024-01-31T00:00:00Z --json -q
```

### Sales Navigator

Requires a LinkedIn Sales Navigator subscription. Uses hashed URLs for person/company lookups.

#### Fetch person

```bash
linkedin navigator person fetch <hashed-url> --json -q
```

#### Search people

```bash
linkedin navigator person search [flags] --json -q
```

| Flag                    | Description                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| `--term`                | Search keyword or phrase                                                                    |
| `--limit`               | Max results                                                                                 |
| `--first-name`          | Filter by first name                                                                        |
| `--last-name`           | Filter by last name                                                                         |
| `--position`            | Filter by job position                                                                      |
| `--locations`           | Comma-separated locations                                                                   |
| `--industries`          | Comma-separated industries                                                                  |
| `--current-companies`   | Comma-separated current company names                                                       |
| `--previous-companies`  | Comma-separated previous company names                                                      |
| `--schools`             | Comma-separated school names                                                                |
| `--years-of-experience` | Comma-separated ranges: `lessThanOne`, `oneToTwo`, `threeToFive`, `sixToTen`, `moreThanTen` |

```bash
linkedin navigator person search --term "VP Marketing" --locations "United States" --json -q
linkedin navigator person search --years-of-experience "moreThanTen" --position "CEO" --json -q
```

#### Fetch company

```bash
linkedin navigator company fetch <hashed-url> [flags] --json -q
```

Optional flags:

- `--employees` – include employees
- `--dms` – include decision makers

Employee filters (require `--employees`):

| Flag                              | Description                                        |
| --------------------------------- | -------------------------------------------------- |
| `--employees-limit`               | Max employees to retrieve                          |
| `--employees-first-name`          | Filter by first name                               |
| `--employees-last-name`           | Filter by last name                                |
| `--employees-positions`           | Comma-separated positions                          |
| `--employees-locations`           | Comma-separated locations                          |
| `--employees-industries`          | Comma-separated industries                         |
| `--employees-schools`             | Comma-separated school names                       |
| `--employees-years-of-experience` | Comma-separated experience ranges                  |
| `--dms-limit`                     | Max decision makers to retrieve (requires `--dms`) |

```bash
linkedin navigator company fetch https://www.linkedin.com/sales/company/97ural --employees --dms --json -q
linkedin navigator company fetch https://www.linkedin.com/sales/company/97ural \
  --employees --employees-positions "Engineer,Designer" --employees-locations "Europe" --json -q
```

#### Search companies

```bash
linkedin navigator company search [flags] --json -q
```

| Flag            | Description                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| `--term`        | Search keyword                                                                                               |
| `--limit`       | Max results                                                                                                  |
| `--sizes`       | Comma-separated sizes: `1-10`, `11-50`, `51-200`, `201-500`, `501-1000`, `1001-5000`, `5001-10000`, `10001+` |
| `--locations`   | Comma-separated locations                                                                                    |
| `--industries`  | Comma-separated industries                                                                                   |
| `--revenue-min` | Min annual revenue in M USD: `0`, `0.5`, `1`, `2.5`, `5`, `10`, `20`, `50`, `100`, `500`, `1000`             |
| `--revenue-max` | Max annual revenue in M USD: `0.5`, `1`, `2.5`, `5`, `10`, `20`, `50`, `100`, `500`, `1000`, `1000+`         |

```bash
linkedin navigator company search --term "fintech" --sizes "11-50,51-200" --json -q
linkedin navigator company search --revenue-min 10 --revenue-max 100 --locations "United States" --json -q
```

#### Send InMail

```bash
linkedin navigator message send <person-url> '<text>' --subject '<subject>' --json -q
```

Text up to 1900 characters. Subject up to 80 characters.

```bash
linkedin navigator message send https://www.linkedin.com/in/username \
  'Would love to chat about API integrations' --subject 'Partnership Opportunity' --json -q
```

#### Get Sales Navigator conversation

```bash
linkedin navigator message get <person-url> [--since TIMESTAMP] --json -q
```

### Custom Workflows

Execute a custom workflow definition from a file, stdin, or inline:

```bash
# From file
linkedin workflow run --file workflow.json --json -q

# From stdin
cat workflow.json | linkedin workflow run --json -q

# Inline
echo '{"actions":[...]}' | linkedin workflow run --json -q
```

Check workflow status or wait for completion:

```bash
linkedin workflow status <id> --json -q
linkedin workflow status <id> --wait --json -q
```

See [Building Workflows](https://linkedapi.io/docs/building-workflows/) for the workflow JSON schema.

### Account Management

```bash
linkedin account list                            # List accounts (* = active)
linkedin account switch "Name"                   # Switch active account
linkedin account rename "Name" --name "New Name" # Rename account
linkedin reset                                   # Remove active account
linkedin reset --all                             # Remove all accounts
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/linkedin-cli`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Global Flags

Always use `--json` and `-q` for machine-readable output:

```bash
linkedin <command> --json -q
```

| Flag                    | Description                             |
| ----------------------- | --------------------------------------- |
| `--json`                | Structured JSON output                  |
| `--quiet` / `-q`        | Suppress stderr progress messages       |
| `--fields name,url,...` | Select specific fields in output        |
| `--no-color`            | Disable colors                          |
| `--account "Name"`      | Use a specific account for this command |

#### Imported: Output Format

Success:

```json
{ "success": true, "data": { "name": "John Doe", "headline": "Engineer" } }
```

Error:

```json
{
  "success": false,
  "error": { "type": "personNotFound", "message": "Person not found" }
}
```

Exit code 0 means the API call succeeded – always check the `success` field for the action outcome. Non-zero exit codes indicate infrastructure errors:

| Exit Code | Meaning                                                                                     |
| --------- | ------------------------------------------------------------------------------------------- |
| 0         | Success (check `success` field – action may have returned an error like "person not found") |
| 1         | General/unexpected error                                                                    |
| 2         | Missing or invalid tokens                                                                   |
| 3         | Subscription/plan required                                                                  |
| 4         | LinkedIn account issue                                                                      |
| 5         | Invalid arguments                                                                           |
| 6         | Rate limited                                                                                |
| 7         | Network error                                                                               |
| 8         | Workflow timeout (workflowId returned for recovery)                                         |

#### Imported: Important Behavior

- **Sequential execution.** All operations for an account run one at a time. Multiple requests queue up.
- **Not instant.** A real browser navigates LinkedIn – expect 30 seconds to several minutes per operation.
- **Timestamps in UTC.** All dates and times are in UTC.
- **Single quotes for text arguments.** Use single quotes around message text, post text, and comments to avoid shell interpretation issues with special characters.
- **Action limits.** Per-account limits are configurable on the platform. A `limitExceeded` error means the limit was reached.
- **URL normalization.** All LinkedIn URLs in responses are normalized to `https://www.linkedin.com/...` format without trailing slashes.
- **Null fields.** Fields that are unavailable are returned as `null` or `[]`, not omitted.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
