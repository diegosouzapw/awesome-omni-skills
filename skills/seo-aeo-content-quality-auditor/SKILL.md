---
name: seo-aeo-content-quality-auditor
description: "SEO-AEO Content Quality Auditor workflow skill. Use this skill when the user needs Audits content for SEO and AEO performance with scored reports, severity-ranked fix lists, and projected scores after fixes. Activate when the user wants to audit, review, or score content for SEO or AEO compliance and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["seo-aeo-content-quality-auditor", "audits", "content", "for", "seo", "and", "aeo", "performance"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# SEO-AEO Content Quality Auditor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-content-quality-auditor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# SEO-AEO Content Quality Auditor

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Scoring System, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when auditing a landing page or blog post before publishing
- Use after the blog-writer or landing-page-writer skill outputs content
- Use when diagnosing why existing content is underperforming in search
- Use when you need a scored, actionable SEO and AEO report
- Use when the request clearly matches the imported source intent: Audits content for SEO and AEO performance with scored reports, severity-ranked fix lists, and projected scores after fixes. Activate when the user wants to audit, review, or score content for SEO or AEO compliance.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Runs a dual SEO + AEO audit on any landing page or blog post. Produces an overall score, SEO score, AEO score, and readability score — each out of 100 — with severity-ranked issue lists (Critical / Warning / Polish), exact fix instructions for every issue, and projected scores after all fixes are applied.

Part of the [SEO-AEO Engine](https://github.com/mrprewsh/seo-aeo-engine).

#### Imported: How It Works

### Step 1: Run SEO Checks
Verify keyword density, H1/H2/H3 structure, meta elements, word count, sentence length, and paragraph density. Flag every issue with its severity.

### Step 2: Run AEO Checks
Check for TL;DR block, definition sentence, FAQ section (minimum 4 entries), bullet and numbered lists, comparison table, and extractable direct answers. Score each signal as found or missing.

### Step 3: Run Readability Checks
Check passive voice ratio, transition word presence, wall-of-text paragraphs, subheading frequency, and reading level.

### Step 4: Score and Prioritise
Calculate three scores out of 100. Sort all issues into Critical (fix before publishing), Important (fix soon), and Polish (optional improvements). Generate projected scores after all fixes are applied.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-aeo-content-quality-auditor to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @seo-aeo-content-quality-auditor against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @seo-aeo-content-quality-auditor for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-content-quality-auditor using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example: Audit Summary
Overall Score:    84/100  ⚠️ Acceptable
SEO Score:        88/100  ✅ Pass
AEO Score:        74/100  ⚠️ Acceptable
Readability:      91/100  ✅ Pass
Verdict: Strong SEO foundation. AEO needs a TL;DR block
and one more FAQ entry before publishing.
🔴 Critical (fix before publishing):

AEO: No TL;DR block found
Fix: Add a 2–3 sentence direct-answer block in a
blockquote immediately after the H1.

🟡 Important (fix soon):
2. AEO: FAQ has 3 entries — minimum is 4
Fix: Add one more FAQ entry using a secondary keyword
as the question.
Projected score after fixes: 93/100 ✅

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Fix all Critical issues before publishing — they block AEO extraction
- ✅ Do: Use the projected score to prioritise which fixes to make first
- ✅ Do: Run the audit on both the landing page and blog post in the same session
- ❌ Don't: Publish content scoring below 50/100 overall
- ❌ Don't: Ignore AEO warnings — they directly affect AI engine citation probability
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Fix all Critical issues before publishing — they block AEO extraction
- ✅ **Do:** Use the projected score to prioritise which fixes to make first
- ✅ **Do:** Run the audit on both the landing page and blog post in the same session
- ❌ **Don't:** Publish content scoring below 50/100 overall
- ❌ **Don't:** Ignore AEO warnings — they directly affect AI engine citation probability

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-content-quality-auditor`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@aws-compliance-checker` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aws-iam-best-practices` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aws-security-audit` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@saga-orchestration` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Additional Resources

- [SEO-AEO Engine Repository](https://github.com/mrprewsh/seo-aeo-engine)
- [Full Content Quality Auditor SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/content-quality-auditor/SKILL.md)

#### Imported: Scoring System

| Score | Status | Label |
|-------|--------|-------|
| 85–100 | ✅ Pass | Strong |
| 70–84 | ⚠️ Warn | Acceptable |
| 50–69 | 🔶 Weak | Needs work |
| 0–49 | ❌ Fail | Do not publish |

#### Imported: Common Pitfalls

- **Problem:** SEO score is high but AEO score is low
  **Solution:** Traditional SEO tools miss AEO signals entirely. Run the AEO checklist separately and treat it as equally important.

- **Problem:** Fix list is long and overwhelming
  **Solution:** Work through Critical issues only first, re-run the audit, then tackle Important issues.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
