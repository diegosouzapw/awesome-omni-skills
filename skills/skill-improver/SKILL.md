---
name: skill-improver
description: "Skill Improvement Methodology workflow skill. Use this skill when the user needs Iteratively improve a Claude Code skill using the skill-reviewer agent until it meets quality standards. Use when improving a skill with multiple quality issues, iterating on a new skill until it meets standards, or automated fix-review cycles instead of manual editing and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["skill-improver", "iteratively", "improve", "claude", "using", "the", "skill-reviewer", "until"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Skill Improvement Methodology

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/skill-improver` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Skill Improvement Methodology Iteratively improve a Claude Code skill using the skill-reviewer agent until it meets quality standards.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Core Loop, Issue Categorization, Minor Issue Evaluation, Invoking skill-reviewer, Completion Criteria.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Improving a skill with multiple quality issues
- Iterating on a new skill until it meets standards
- Automated fix-review cycles instead of manual editing
- Consistent quality enforcement across skills
- One-time review: Use /skill-reviewer directly instead
- Quick single fixes: Edit the file directly

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Prerequisites

Requires the `plugin-dev` plugin which provides the `skill-reviewer` agent.

Verify it's enabled: run `/plugins` — `plugin-dev` should appear in the list. If missing, install from the Trail of Bits plugin repository.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-improver to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @skill-improver against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @skill-improver for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @skill-improver using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Fix Cycle

**Iteration 1 — skill-reviewer output:**
```text
Critical: SKILL.md:1 - Missing required 'name' field in frontmatter
Major: SKILL.md:3 - Description uses second person ("you should use")
Major: Missing "When NOT to Use" section
Minor: Line 45 is verbose
```

**Fixes applied:**
- Added name field to frontmatter
- Rewrote description in third person
- Added "When NOT to Use" section

**Iteration 2 — run skill-reviewer again to verify fixes:**
```text
Minor: Line 45 is verbose
```

**Minor issue evaluation:**
Line 45 communicates effectively as-is. The verbosity provides useful context. Skip.

**All critical/major issues resolved. Output the completion marker:**
```
<skill-improvement-complete>
```

Note: The marker MUST appear in the output. Statements like "quality bar met" or "looks good" will NOT stop the loop.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/skill-improver`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@server-management` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-observability` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sexual-health-analyzer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Core Loop

1. **Review** - Call skill-reviewer on the target skill
2. **Categorize** - Parse issues by severity
3. **Fix** - Address critical and major issues
4. **Evaluate** - Check minor issues for validity before fixing
5. **Repeat** - Continue until quality bar is met

#### Imported: Issue Categorization

### Critical Issues (MUST fix immediately)

These block skill loading or cause runtime failures:

- Missing required frontmatter fields (name, description) — Claude cannot index or trigger the skill
- Invalid YAML frontmatter syntax — Parsing fails, skill won't load
- Referenced files that don't exist — Runtime errors when Claude follows links
- Broken file paths — Same as above, leads to tool failures

### Major Issues (MUST fix)

These significantly degrade skill effectiveness:

- Weak or vague trigger descriptions — Claude may not recognize when to use the skill
- Wrong writing voice (second person "you" instead of imperative) — Inconsistent with Claude's execution model
- SKILL.md exceeds 500 lines without using references/ — Overloads context, reduces comprehension
- Missing "When to Use" or "When NOT to Use" sections — Required by project quality standards
- Description doesn't specify when to trigger — Skill may never be selected

### Minor Issues (Evaluate before fixing)

These are polish items that may or may not improve the skill:

- Subjective style preferences — Reviewer may have different taste than author
- Optional enhancements — May add complexity without proportional value
- "Nice to have" improvements — Consider cost-benefit before implementing
- Formatting suggestions — Often valid but low impact

#### Imported: Minor Issue Evaluation

Before implementing any minor issue fix, evaluate:

1. **Is this a genuine improvement?** - Does it add real value or just satisfy a preference?
2. **Could this be a false positive?** - Is the reviewer misunderstanding context?
3. **Would this actually help Claude use the skill?** - Focus on functional improvements

Only implement minor fixes that are clearly beneficial. Skill-reviewer may produce false positives.

#### Imported: Invoking skill-reviewer

Use the skill-reviewer agent from the plugin-dev plugin. Request a review by asking Claude to:

> Review the skill at [SKILL_PATH] using the plugin-dev:skill-reviewer agent. Provide a detailed quality assessment with issues categorized by severity.

Replace `[SKILL_PATH]` with the absolute path to the skill directory (e.g., `/path/to/plugins/my-plugin/skills/my-skill`).

#### Imported: Completion Criteria

**CRITICAL**: The stop hook ONLY checks for the explicit marker below. No other signal will terminate the loop.

Output this marker when done:

```
<skill-improvement-complete>
```

**When to output the marker:**

1. **skill-reviewer reports "Pass"** or **no issues found** → output marker immediately
2. **All critical and major issues are fixed** AND you've verified the fixes → output marker
3. **Remaining issues are only minor** AND you've evaluated them as false positives or not worth fixing → output marker

**When NOT to output the marker:**

- Any critical issue remains unfixed
- Any major issue remains unfixed
- You haven't run skill-reviewer to verify your fixes worked

The marker is the ONLY way to complete the loop. Natural language like "looks good" or "quality bar met" will NOT stop the loop.

#### Imported: Rationalizations to Reject

- "I'll just mark it complete and come back later" - Fix issues now
- "This minor issue seems wrong, I'll skip all of them" - Evaluate each one individually
- "The reviewer is being too strict" - The quality bar exists for a reason
- "It's good enough" - If there are major issues, it's not good enough

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
