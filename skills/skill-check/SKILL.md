---
name: skill-check
description: "SkillCheck workflow skill. Use this skill when the user needs Validate Claude Code skills against the agentskills specification. Catches structural, semantic, and naming issues before users do and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["validation", "linter", "agentskills", "skill-authoring", "code-quality", "skill-check", "validate", "claude"]
complexity: advanced
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "olgasafonova"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# SkillCheck

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/skill-check` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SkillCheck

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, weekly-report Check Results [FREE], Limitations, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when user says "check skill", "skillcheck", or "validate SKILL.md"
- Use when reviewing a skill before publishing to a marketplace
- Use when debugging why a skill doesn't trigger correctly
- Use when onboarding a team to skill authoring standards
- Do NOT use for anti-slop detection, security scanning, or token analysis; use SkillCheck Pro for those
- Use when the request clearly matches the imported source intent: Validate Claude Code skills against the agentskills specification. Catches structural, semantic, and naming issues before users do.

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

#### Imported: Overview

Validate SKILL.md files against the [agentskills specification](https://agentskills.io) and Anthropic best practices. Catches structural errors, semantic contradictions, naming anti-patterns, and quality gaps in a single read-only pass.

#### Imported: How It Works

### Step 1: Parse

Read the target SKILL.md file and extract YAML frontmatter.

### Step 2: Validate

Apply all Free tier checks in order:

| Category | Checks | What it catches |
|----------|--------|----------------|
| Structure (1.x) | Name format, description WHAT+WHEN, allowed-tools, categories, XML injection | Malformed frontmatter, missing fields |
| Body (2.x) | Line count, hardcoded paths, stale dates, empty sections, deprecated syntax, MCP tool qualification | Content quality issues |
| Naming (3.x) | Vague terms, single-word names, gerund suggestions | Poor discoverability |
| Semantic (4.x) | Contradictions, ambiguous terms, missing output format, wisdom/platitudes, misplaced triggers | Logical inconsistencies |
| Quality (8.x) | Examples, error handling, triggers, output format, prerequisites, negative triggers | Strengths (positive patterns) |

### Step 3: Score

Calculate overall score (0-100). Penalties: critical = -20, warning = -5, suggestion = -1.

### Step 4: Report

Return structured results: score, grade (Excellent/Good/Needs Work/Poor), issue list with check IDs, line numbers, messages, and fix suggestions.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-check to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/skill-check/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/skill-check/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @skill-check using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Validating a skill

```
User: check my skill at ~/.claude/skills/weekly-report/SKILL.md

SkillCheck output:

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Run SkillCheck before submitting skills to any marketplace
- Fix all critical and warning issues; suggestions are optional
- Use the check ID (e.g., 1.2-desc-when) to find the exact rule in the skill body
- Re-run after fixes to confirm the score improved
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- Run SkillCheck before submitting skills to any marketplace
- Fix all critical and warning issues; suggestions are optional
- Use the check ID (e.g., `1.2-desc-when`) to find the exact rule in the skill body
- Re-run after fixes to confirm the score improved

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/skill-check`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: weekly-report Check Results [FREE]

Score: 85/100 (Good)

### Warnings (2)
  - 1.2-desc-when (line 3): Description missing WHEN clause
  - 4.5-desc-no-triggers (line 3): Description lacks triggering conditions

### Suggestions (1)
  - 3.4-gerund-naming (line 2): Skill name could use gerund form

### Passed Checks: 28
```

### Example 2: Clean skill passes all checks

```
User: skillcheck ~/.claude/skills/processing-pdfs/SKILL.md

Score: 100/100 (Excellent)
All 31 checks passed. No issues found.
```

#### Imported: Limitations

- Read-only: does not modify any files
- Free tier covers structural, semantic, and naming checks only
- Anti-slop, security, WCAG, token, enterprise, and workflow checks require [SkillCheck Pro](https://getskillcheck.com)
- Semantic checks (contradiction detection, wisdom/platitude) are heuristic with ~5% false positive rate
- Does not validate referenced files or scripts; only checks SKILL.md content
- Single-file validation; does not cross-check against other skills in the same directory

#### Imported: Common Pitfalls

- **Problem:** Score seems low due to many suggestions
  **Solution:** Suggestions cap at -15 points total. Focus on warnings and criticals first.

- **Problem:** False positive on ambiguous terms inside code blocks
  **Solution:** SkillCheck skips code blocks and inline code. If you still see false positives, wrap the term in backticks.

- **Problem:** Wisdom/platitude check flags legitimate instructions
  **Solution:** Rephrase generic advice ("Remember that testing is important") as concrete directives ("Run tests before committing").
