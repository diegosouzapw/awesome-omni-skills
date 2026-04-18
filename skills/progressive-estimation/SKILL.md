---
name: progressive-estimation
description: "Progressive Estimation workflow skill. Use this skill when the user needs Estimate AI-assisted and hybrid human+agent development work with research-backed PERT statistics and calibration feedback loops and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["estimation", "project-management", "pert", "sprint-planning", "ai-agents", "progressive-estimation", "estimate", "ai-assisted"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Enreign"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Progressive Estimation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/progressive-estimation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Progressive Estimation Estimate AI-assisted and hybrid human+agent development work using research-backed formulas with PERT statistics, confidence bands, and calibration feedback loops.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Estimating development tasks where AI agents handle part of the work
- Sprint planning with hybrid human+agent teams
- Batch sizing a backlog (handles 5 or 500 issues)
- Staffing and capacity planning with agent multipliers
- Release date forecasting with confidence intervals
- Use when the request clearly matches the imported source intent: Estimate AI-assisted and hybrid human+agent development work with research-backed PERT statistics and calibration feedback loops.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Progressive Estimation adapts to your team's working mode — human-only, hybrid, or agent-first — applying the right velocity model and multipliers for each. It produces statistical estimates rather than gut feelings.

#### Imported: How It Works

1. **Mode Detection** — Determines if the team works human-only, hybrid, or agent-first
2. **Task Classification** — Categorizes by size (XS–XL), complexity, and risk
3. **Formula Application** — Applies research-backed multipliers grounded in empirical studies
4. **PERT Calculation** — Produces expected values using three-point estimation
5. **Confidence Bands** — Generates P50, P75, P90 intervals
6. **Output Formatting** — Formats for Linear, JIRA, ClickUp, GitHub Issues, Monday, or GitLab
7. **Calibration** — Feeds back actuals to improve future estimates

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @progressive-estimation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @progressive-estimation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @progressive-estimation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @progressive-estimation using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

**Single task:**
> "Estimate building a REST API with authentication using Claude Code"

**Batch mode:**
> "Estimate these 12 JIRA tickets for our next sprint"

**With context:**
> "We have 3 developers using AI agents for ~60% of implementation. Estimate this feature."

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Start with a single task to calibrate before moving to batch mode
- Feed back actual completion times to improve the calibration system
- Use "instant mode" for quick T-shirt sizing without full PERT analysis
- Be explicit about team composition and agent usage percentage
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Start with a single task to calibrate before moving to batch mode
- Feed back actual completion times to improve the calibration system
- Use "instant mode" for quick T-shirt sizing without full PERT analysis
- Be explicit about team composition and agent usage percentage

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/progressive-estimation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@office-productivity` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@on-call-handoff-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@onboarding-cro` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@onboarding-psychologist` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- [Source Repository](https://github.com/Enreign/progressive-estimation)
- [Installation Guide](https://github.com/Enreign/progressive-estimation/blob/main/INSTALLATION.md)
- [Research References](https://github.com/Enreign/progressive-estimation/tree/main/references)

#### Imported: Common Pitfalls

- **Problem:** Overconfident estimates
  **Solution:** Use P75 or P90 for commitments, not P50

- **Problem:** Missing context
  **Solution:** The skill asks clarifying questions — provide team size and agent usage

- **Problem:** Stale calibration
  **Solution:** Re-calibrate when team composition or tooling changes significantly

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
