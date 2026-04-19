---
name: bdistill-behavioral-xray
description: "Behavioral X-Ray workflow skill. Use this skill when the user needs X-ray any AI model's behavioral patterns \u2014 refusal boundaries, hallucination tendencies, reasoning style, formatting defaults. No API key needed and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["ai", "testing", "behavioral-analysis", "model-evaluation", "red-team", "compliance", "mcp", "bdistill-behavioral-xray"]
complexity: beginner
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "FrancyJGLisboa"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Behavioral X-Ray

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/bdistill-behavioral-xray` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Behavioral X-Ray Systematically probe an AI model's behavioral patterns and generate a visual report. The AI agent probes itself — no API key or external setup needed.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Probe Dimensions, Output, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you want to understand how your AI model actually behaves (not how it claims to)
- Use when choosing between models for a specific task
- Use when debugging unexpected refusals, hallucinations, or formatting issues
- Use for compliance auditing — documenting model behavior at deployment boundaries
- Use for red team assessments — systematic boundary mapping across safety dimensions
- Use when the request clearly matches the imported source intent: X-ray any AI model's behavioral patterns — refusal boundaries, hallucination tendencies, reasoning style, formatting defaults. No API key needed.

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

#### Imported: Overview

bdistill's Behavioral X-Ray runs 30 carefully designed probe questions across 6 dimensions, auto-tags each response with behavioral metadata, and compiles results into a styled HTML report with radar charts and actionable insights.

Use it to understand your model before building with it, compare models for task selection, or track behavioral drift over time.

#### Imported: How It Works

### Step 1: Install

```bash
pip install bdistill
claude mcp add bdistill -- bdistill-mcp   # Claude Code
```

For other tools, add bdistill-mcp as an MCP server in your project config.

### Step 2: Run the probe

In Claude Code:
```
/xray                          # Full behavioral probe (30 questions)
/xray --dimensions refusal     # Probe just one dimension
/xray-report                   # Generate report from completed probe
```

In any tool with MCP:
```
"X-ray your behavioral patterns"
"Test your refusal boundaries"
"Generate a behavioral report"
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @bdistill-behavioral-xray to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @bdistill-behavioral-xray against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @bdistill-behavioral-xray for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @bdistill-behavioral-xray using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Answer probe questions honestly — the value is in authentic behavioral data
- Run probes on the same model periodically to track behavioral drift
- Compare reports across models to make informed selection decisions
- Use adversarial knowledge extraction (/distill --adversarial) alongside behavioral probes for complete model profiling
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Answer probe questions honestly — the value is in authentic behavioral data
- Run probes on the same model periodically to track behavioral drift
- Compare reports across models to make informed selection decisions
- Use adversarial knowledge extraction (`/distill --adversarial`) alongside behavioral probes for complete model profiling

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/bdistill-behavioral-xray`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Probe Dimensions

| Dimension | What it measures |
|-----------|-----------------|
| **tool_use** | When does it call tools vs. answer from knowledge? |
| **refusal** | Where does it draw safety boundaries? Does it over-refuse? |
| **formatting** | Lists vs. prose? Code blocks? Length calibration? |
| **reasoning** | Does it show chain-of-thought? Handle trick questions? |
| **persona** | Identity, tone matching, composure under hostility |
| **grounding** | Hallucination resistance, fabrication traps, knowledge limits |

#### Imported: Output

A styled HTML report showing:
- Refusal rate, hedge rate, chain-of-thought usage
- Per-dimension breakdown with bar charts
- Notable response examples with behavioral tags
- Actionable insights (e.g., "you already show CoT 85% of the time, no need to prompt for it")

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
