---
name: github-issue-creator
description: "GitHub Issue Creator workflow skill. Use this skill when the user needs Turn error logs, screenshots, voice notes, and rough bug reports into crisp, developer-ready GitHub issues with repro steps, impact, and evidence and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["github-issue-creator", "turn", "error", "logs", "screenshots", "voice", "notes", "and"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# GitHub Issue Creator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/github-issue-creator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# GitHub Issue Creator Transform messy input (error logs, voice notes, screenshots) into clean, actionable GitHub issues.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Template, Environment, Actual Behavior, Error Details, Visual Evidence, Impact.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- [What should happen] Agent appears in list with deployment status, errors shown if deployment fails Agent publishes successfully to Teams channel Use this skill when you have unstructured bug input such as pasted errors, support notes, screenshots, or voice dictation and need to turn it into a clean GitHub issue with a summary, reproduction steps, expected vs actual behavior, impact, and attachment references.
- Use when the request clearly matches the imported source intent: Turn error logs, screenshots, voice notes, and rough bug reports into crisp, developer-ready GitHub issues with repro steps, impact, and evidence.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. [Step]
2. Navigate to agent deployment
3. Configure and deploy agent
4. Observe workflow completes
5. Check agent list
6. Configure agent for Teams channel
7. Attempt to publish

### Imported Workflow Notes

#### Imported: Reproduction Steps

1. [Step]
2. [Step]
3. [Step]

#### Imported: Reproduction Steps

1. Navigate to agent deployment
2. Configure and deploy agent
3. Observe workflow completes
4. Check agent list

#### Imported: Reproduction Steps

1. Configure agent for Teams channel
2. Attempt to publish

#### Imported: Summary

[One-line description of the issue]

#### Imported: Summary

Agent deployment fails silently - no error displayed, agent disappears from list

#### Imported: Summary

403 PERMISSION_DENIED error when publishing to Teams channel

#### Imported: Output Template

```markdown

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @github-issue-creator to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @github-issue-creator against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @github-issue-creator for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @github-issue-creator using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

**Input (voice dictation)**:
> so I was trying to deploy the agent and it just failed silently no error nothing the workflow ran but then poof gone from the list had to refresh and try again three times

**Output**:
```markdown

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Critical: Service down, data loss, security issue
- High: Major feature broken, no workaround
- Medium: Feature impaired, workaround exists
- Low: Minor inconvenience, cosmetic
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Guidelines

**Be crisp**: No fluff. Every word should add value.

**Extract structure from chaos**: Voice dictation and raw notes often contain the facts buried in casual language. Pull them out.

**Infer missing context**: If user mentions "same project" or "the dashboard", use context from conversation or memory to fill in specifics.

**Placeholder sensitive data**: Use `[PROJECT_NAME]`, `[USER_ID]`, etc. for anything that might be sensitive.

**Match severity to impact**:
- Critical: Service down, data loss, security issue
- High: Major feature broken, no workaround
- Medium: Feature impaired, workaround exists
- Low: Minor inconvenience, cosmetic

**Image/GIF handling**: Reference attachments inline. Format: `!Description`

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/github-issue-creator`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitops-workflow` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Environment

- **Product/Service**: 
- **Region/Version**: 
- **Browser/OS**: (if relevant)

#### Imported: Actual Behavior

[What actually happens]

#### Imported: Error Details

```
[Error message/code if applicable]
```

#### Imported: Visual Evidence

[Reference to attached screenshots/GIFs]

#### Imported: Impact

[Severity: Critical/High/Medium/Low + brief explanation]

#### Imported: Additional Context

[Any other relevant details]
```

#### Imported: Output Location

**Create issues as markdown files** in `/issues/` directory at the repo root. Use naming convention: `YYYY-MM-DD-short-description.md`

#### Imported: Environment

- **Product/Service**: Azure AI Foundry
- **Region/Version**: westus2

#### Imported: Actual Behavior

Agent disappears from list. No error message. Requires page refresh and retry.

#### Imported: Impact

**High** - Blocks agent deployment workflow, no feedback on failure cause

#### Imported: Additional Context

Required 3 retry attempts before successful deployment
```

---

**Input (error paste)**:
> Error: PERMISSION_DENIED when publishing to Teams channel. Code: 403. Was working yesterday.

**Output**:
```markdown

#### Imported: Environment

- **Product/Service**: Copilot Studio → Teams integration
- **Region/Version**: [REGION]

#### Imported: Actual Behavior

Returns `PERMISSION_DENIED` with code 403

#### Imported: Error Details

```
Error: PERMISSION_DENIED
Code: 403
```

#### Imported: Impact

**High** - Blocks Teams integration, regression from previous working state

#### Imported: Additional Context

Was working yesterday - possible permission/config change or service regression
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
