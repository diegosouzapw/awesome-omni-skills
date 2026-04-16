---
name: vibers-code-review
description: "Vibers \u2014 Human Code Review for AI-Generated Projects workflow skill. Use this skill when the user needs Human review workflow for AI-generated GitHub projects with spec-based feedback, security review, and follow-up PRs from the Vibers service and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["vibers-code-review", "human", "review", "for", "ai-generated", "github", "projects", "spec-based"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Vibers — Human Code Review for AI-Generated Projects

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/vibers-code-review` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Vibers — Human Code Review for AI-Generated Projects You push code. We review it against your spec, fix issues, and send a PR.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Commit messages, Limitations, Pricing, Feedback & Support, FAQ.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You want human review for AI-generated code pushed to GitHub
- You have a project spec and want reviewers to check implementation against it
- You want review feedback delivered as a follow-up PR with suggested fixes
- You are comfortable granting the Vibers service collaborator access to the repository
- Use when the request clearly matches the imported source intent: Human review workflow for AI-generated GitHub projects with spec-based feedback, security review, and follow-up PRs from the Vibers service.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. uses: actions/checkout@v4
2. uses: marsiandeployer/vibers-action@v1
3. Parameter - What it does
4. spec_url - Link to your spec (Google Doc, Notion, etc.). Must be publicly accessible (or "anyone with the link can view"). Without access to spec, review is impossible.
5. review_scope - full (default), security, or spec-compliance
6. telegram_contact - Your Telegram — we'll message you when review is ready
7. You push code → GitHub Action sends us the commit details

### Imported Workflow Notes

#### Imported: Quick Start (3 steps)

### Step 1. Add collaborator

Go to your repo → Settings → Collaborators → Add **`marsiandeployer`**

### Step 2. Add GitHub Action

Create `.github/workflows/vibers.yml`:

```yaml
name: Vibers Code Review
on:
  push:
    branches: [main]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 2
      - uses: marsiandeployer/vibers-action@v1
        with:
          spec_url: 'https://docs.google.com/document/d/YOUR_SPEC_ID/edit'
          telegram_contact: '@your_telegram'
```

| Parameter | What it does |
|-----------|-------------|
| `spec_url` | Link to your spec (Google Doc, Notion, etc.). **Must be publicly accessible** (or "anyone with the link can view"). Without access to spec, review is impossible. |
| `review_scope` | `full` (default), `security`, or `spec-compliance` |
| `telegram_contact` | Your Telegram — we'll message you when review is ready |

### Step 3. Add commit rules to your AI agent

Add this block to your project's `CLAUDE.md`, `.cursorrules`, or `AGENTS.md`:

```markdown

#### Imported: What Happens After Setup

1. You push code → GitHub Action sends us the commit details
2. We read your spec and review changed files
3. We fix issues directly in code and submit a PR
4. You review the PR, merge or comment

We check: spec compliance, security (OWASP top 10), AI hallucinations (fake APIs/imports), logic bugs, UI issues.

We don't check: code style (use ESLint/Prettier), performance benchmarks, full QA (use Playwright/Cypress).

#### Imported: Commit messages

Every commit MUST include a "How to test" section in the body:
- Live URL to open and verify the change
- Step-by-step what to click/check
- Test credentials if login is required
- Expected result for each step

Example:
  feat: Add user registration form

  How to test:
  - Open https://myapp.vercel.app/register
  - Fill in email/password, submit
  - Check that confirmation email arrives
  - Try submitting with invalid email — should show error
  - Login: test@example.com / demo123
```

Without "How to test" the reviewer has to guess what to verify, and the review takes longer.

**Done.** Now every push triggers a notification. You'll get a PR with fixes, usually within 24 hours.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @vibers-code-review to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @vibers-code-review against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @vibers-code-review for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @vibers-code-review using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/vibers-code-review`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@typescript-pro` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-a11y` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-component` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-page` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Requires a GitHub repository and adding `marsiandeployer` as a collaborator
- The referenced spec must be accessible to the review workflow
- The service is not a replacement for full QA, benchmark testing, or local security review
- Turnaround depends on the external Vibers review service

#### Imported: Pricing

| Plan | Rate | Details |
|------|------|---------|
| **Promo** | $1/hour | Full review + PRs with fixes. We ask for honest feedback in return. |
| **Standard** | $15/hour | Full review + security audit + priority turnaround. |

No subscriptions. No contracts. Pay per review.

#### Imported: Feedback & Support

Send feedback directly from your agent:

```bash
curl -X POST https://vibers.onout.org/feedback \
  -H 'Content-Type: application/json' \
  -d '{"message": "Your question or issue", "repo": "https://github.com/you/your-repo"}'
```

Both `message` and `repo` are required. Response: `{"status": "accepted"}`.

Contacts:
- Telegram: [@onoutnoxon](https://t.me/onoutnoxon)
- Moltbook: [moltbook.com](https://moltbook.com) — user **noxon**
- GitHub: [marsiandeployer](https://github.com/marsiandeployer)

#### Imported: FAQ

**Do I need an API key?**
No. Add collaborator + action, that's it.

**What languages?**
JS/TS, Python, React, Next.js, Django, Flask, and more. If it's on GitHub, we review it.

**What if I disagree with a fix?**
Comment on the PR. We discuss and adjust.

**Can I use this without GitHub?**
Yes — write to Telegram with your code and spec.
