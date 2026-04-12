---
name: oss-hunter
description: "OSS Hunter \ud83c\udfaf workflow skill. Use this skill when the user needs Automatically hunt for high-impact OSS contribution opportunities in trending repositories and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["oss-hunter", "automatically", "hunt", "for", "high-impact", "oss", "contribution", "opportunities"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# OSS Hunter 🎯

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/oss-hunter` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# OSS Hunter 🎯 A precision skill for agents to find, analyze, and strategize for high-impact Open Source contributions. This skill helps you become a top-tier contributor by identifying the most "mergeable" and influential issues in trending repositories.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user asks to find open source issues to work on.
- Use when searching for "help wanted" or "good first issue" tasks in specific domains like AI or Web3.
- Use to generate a "Contribution Dossier" with ready-to-execute strategies for trending projects.
- Use when the request clearly matches the imported source intent: Automatically hunt for high-impact OSS contribution opportunities in trending repositories.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Stars > 1000
2. Recent activity (pushed within 24 hours)
3. Relevant topics (AI, Agentic, Web3, Tooling)
4. help-wanted
5. good-first-issue
6. bug
7. v1 / roadmap

### Imported Workflow Notes

#### Imported: Workflow

When hunting for contributions, the agent follows this multi-stage protocol:

### Phase 1: Repository Discovery
Use `web_search` or `gh api` to find trending repositories.
Focus on:
- Stars > 1000
- Recent activity (pushed within 24 hours)
- Relevant topics (AI, Agentic, Web3, Tooling)

### Phase 2: Issue Extraction
Search for specific labels:
- `help-wanted`
- `good-first-issue`
- `bug`
- `v1` / `roadmap`

```bash
gh issue list --repo owner/repo --label "help wanted" --limit 10
```

### Phase 3: Feasibility Analysis
Analyze the issue:
1. **Reproducibility**: Is there a code snippet to reproduce the bug?
2. **Impact**: How many users does this affect?
3. **Mergeability**: Check recent PR history. Does the maintainer merge community PRs quickly?
4. **Complexity**: Can this be solved by an agent with the current tools?

### Phase 4: The Dossier
Generate a structured report for the human:
- **Project Name & Stars**
- **Issue Link & Description**
- **Root Cause Analysis** (based on code inspection)
- **Proposed Fix Strategy**
- **Confidence Score** (1-10)

#### Imported: Limitations

- Accuracy depends on the availability of `gh` CLI or `web_search` tools.
- Analysis is limited by context window when reading very large repositories.
- Cannot guarantee PR acceptance (maintainer discretion).

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @oss-hunter to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/oss-hunter/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/oss-hunter/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @oss-hunter using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

Ask your agent:
- "Find me some help-wanted issues in trending AI repositories."
- "Hunt for bug fixes in langchain-ai/langchain that are suitable for a quick PR."
- "Generate a contribution dossier for the most recent trending projects on GitHub."

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/oss-hunter`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Contributing to the Matrix

Build a better hunter by adding new heuristics to Phase 3. Submit your improvements to the [ClawForge](https://github.com/jackjin1997/ClawForge).

*Powered by OpenClaw & ClawForge.*
