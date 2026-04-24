---
name: issues
description: "issues workflow skill. Use this skill when the user needs Interact with GitHub issues - create, list, and view issues and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["issues", "interact", "github", "create", "list", "and", "view", "cli-automation"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Shpigford"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# issues

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/issues` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Interact with GitHub issues - create, list, and view issues.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: If "Create new issue" selected:, Description, Actual Behavior, Description, Use Case, Description.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The user wants to create, list, inspect, or otherwise work with GitHub issues.
- The task involves issue intake or repository issue management through the GitHub CLI workflow.
- You need a guided issue flow that gathers titles, descriptions, and action selection before running commands.
- Use when the request clearly matches the imported source intent: Interact with GitHub issues - create, list, and view issues.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. question: "What would you like to do with GitHub issues?"
2. header: "Action"
3. multiSelect: false
4. options:
5. label: "Create new issue"
6. label: "List issues"
7. label: "View issue"

### Imported Workflow Notes

#### Imported: Instructions

This command helps you work with GitHub issues using the `gh` CLI.

### Step 1: Determine Action

Use AskUserQuestion to ask what the user wants to do:

**Question:**
- question: "What would you like to do with GitHub issues?"
- header: "Action"
- multiSelect: false
- options:
  - label: "Create new issue"
    description: "Open a new issue with title, body, and optional labels"
  - label: "List issues"
    description: "View open issues in the current repository"
  - label: "View issue"
    description: "See details of a specific issue by number"

---

#### Imported: Steps to Reproduce

[User's reproduction steps or "Not easily reproducible"]

#### Imported: If "Create new issue" selected:

### Step 2a: Get Issue Title

Use AskUserQuestion to get the issue title:

**Question:**
- question: "What's a short, scannable title for this issue? Keep it brief (5-10 words max) - details go in the body. (Use 'Other' to type your title)"
- header: "Title"
- multiSelect: false
- options:
  - label: "I'll type a title"
    description: "Enter a concise title like 'Login button unresponsive' or 'Add dark mode support'"

**Title guidelines:**
- Keep titles SHORT and scannable (5-10 words max)
- Good: "Fix broken password reset flow"
- Bad: "When I try to reset my password and click the button nothing happens and I get an error"
- The description/body is where details belong, not the title

If the user provides a long title, help them shorten it and move the details to the body.

### Step 3a: Get Issue Body

Use AskUserQuestion to gather the issue body content:

**Question 1 - Issue type context:**
- question: "What type of issue is this?"
- header: "Type"
- multiSelect: false
- options:
  - label: "Bug"
    description: "Something broken that needs fixing"
  - label: "Enhancement"
    description: "Improvement to existing functionality"
  - label: "New feature"
    description: "Brand new functionality"
  - label: "Task"
    description: "General work item or chore"

**Question 2 - Description:**
- question: "Now provide the full details. This is where you explain context, background, and specifics that didn't fit in the title. (Use 'Other' to type your description)"
- header: "Description"
- multiSelect: false
- options:
  - label: "I'll describe it in detail"
    description: "Provide context, steps, examples, and any relevant information"

The user will select "Other" here to provide their full description.

**Description guidelines:**
- This is where ALL the detail goes - be thorough
- Include context: what were you doing, what's the background?
- Include specifics: error messages, URLs, versions, etc.
- The more detail here, the better - unlike the title which should be brief

**Question 3 - For bugs, ask about reproduction:**
If issue type is "Bug", use AskUserQuestion:

- question: "Can you provide steps to reproduce this bug? (Use 'Other' to type steps)"
- header: "Repro steps"
- multiSelect: false
- options:
  - label: "Provide steps"
    description: "I'll describe how to reproduce the issue"
  - label: "Not reproducible"
    description: "The bug is intermittent or hard to reproduce"

**Question 4 - Expected vs actual behavior (for bugs):**
If issue type is "Bug", use AskUserQuestion:

- question: "What did you expect to happen vs what actually happened? (Use 'Other' to describe)"
- header: "Behavior"
- multiSelect: false
- options:
  - label: "Describe behavior"
    description: "I'll explain expected vs actual behavior"

### Step 4a: Get Labels (Optional)

Use AskUserQuestion to select labels:

- question: "Which labels should we add? (if any)"
- header: "Labels"
- multiSelect: true
- options:
  - label: "bug"
    description: "Something isn't working"
  - label: "enhancement"
    description: "New feature or request"
  - label: "documentation"
    description: "Improvements to docs"
  - label: "good first issue"
    description: "Good for newcomers"

### Step 5a: Create the Issue

Construct the issue body based on the type:

**For Bug reports:**
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @issues to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @issues against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @issues for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @issues using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/issues`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ilya-sutskever` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Description

[User's description]

#### Imported: Actual Behavior

[What actually happens]
```

**For Feature requests/Enhancements:**
```

#### Imported: Description

[User's description]

#### Imported: Use Case

[Why this would be useful]
```

**For Tasks/Other:**
```

#### Imported: Description

[User's description]
```

Run the gh command to create the issue:
```bash
gh issue create --title "[title]" --body "[constructed body]" --label "[labels]"
```

Report the issue URL back to the user.

---

#### Imported: If "List issues" selected:

### Step 2b: Filter Options

Use AskUserQuestion to determine filtering:

- question: "How would you like to filter issues?"
- header: "Filter"
- multiSelect: false
- options:
  - label: "All open issues"
    description: "Show all open issues"
  - label: "Assigned to me"
    description: "Issues assigned to the current user"
  - label: "Created by me"
    description: "Issues I created"
  - label: "With specific label"
    description: "Filter by a label"

If "With specific label" selected, use AskUserQuestion:

- question: "Which label to filter by? (Use 'Other' for custom label)"
- header: "Label"
- multiSelect: false
- options:
  - label: "bug"
    description: "Bug reports"
  - label: "enhancement"
    description: "Feature requests"
  - label: "documentation"
    description: "Documentation issues"

### Step 3b: List Issues

Run the appropriate gh command:
- All open: `gh issue list`
- Assigned to me: `gh issue list --assignee @me`
- Created by me: `gh issue list --author @me`
- With label: `gh issue list --label "[label]"`

Display the results in a clean format.

---

#### Imported: If "View issue" selected:

### Step 2c: Get Issue Number

Use AskUserQuestion:

- question: "Which issue number would you like to view? (Use 'Other' to enter the number)"
- header: "Issue #"
- multiSelect: false
- options:
  - label: "Enter issue number"
    description: "I'll type the issue number"

### Step 3c: View Issue

Run: `gh issue view [number]`

Display the issue details including title, body, labels, assignees, and comments.

---

#### Imported: Error Handling

If `gh` command fails:
1. Check if user is authenticated: `gh auth status`
2. If not authenticated, inform user to run `gh auth login`
3. Check if in a git repository with a GitHub remote
4. Report specific error message to user

#### Imported: Important Notes

- **Titles should be succinct** (5-10 words) - if a user provides a long title, help shorten it and move details to body
- **Bodies should be detailed** - encourage users to provide thorough context, steps, and specifics
- Always confirm the issue was created successfully by showing the URL
- For issue bodies, preserve user's formatting and newlines
- If the user provides minimal information, that's okay - create the issue with what they gave
- Use HEREDOC for the body to preserve formatting:
  ```bash
  gh issue create --title "Title" --body "$(cat <<'EOF'
  Body content here
  EOF
  )"
  ```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
