---
name: writing-skills
description: "Writing Skills (Excellence) workflow skill. Use this skill when the user needs creating, updating, or improving agent skills and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: communication
tags: ["writing-skills", "creating", "updating", "improving", "communication", "anthropic-best-practices-md", "examples-md", "gotchas-md"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Writing Skills (Excellence)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/writing-skills` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Writing Skills (Excellence) Dispatcher for skill creation excellence. Use the decision tree below to find the right template and standards.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: ⚡ Quick Decision Tree, 🛠️ Templates, How It Works, ✅ Pre-Deploy Checklist, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating a NEW skill from scratch
- Improving an EXISTING skill that agents ignore
- Debugging why a skill isn't being triggered
- Standardizing skills across a team
- [Symptom A]
- [Error message]

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/anti-rationalization/README.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/cso/README.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: ⚡ Quick Decision Tree

### What do you need to do?

1. **Create a NEW skill:**
   - Is it simple (single file, <200 lines)? → [Tier 1 Architecture](references/tier-1-simple/README.md)
   - Is it complex (multi-concept, 200-1000 lines)? → [Tier 2 Architecture](references/tier-2-expanded/README.md)
   - Is it a massive platform (10+ products, AWS, Convex)? → [Tier 3 Architecture](references/tier-3-platform/README.md)

2. **Improve an EXISTING skill:**
   - Fix "it's too long" -> [Modularize (Tier 3)](references/templates/tier-3-platform.md)
   - Fix "AI ignores rules" -> [Anti-Rationalization](references/anti-rationalization/README.md)
   - Fix "users can't find it" -> [CSO (Search Optimization)](references/cso/README.md)

3. **Verify Compliance:**
   - Check metadata/naming -> [Standards](references/standards/README.md)
   - Add tests -> [Testing Guide](references/testing/README.md)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @writing-skills to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @writing-skills against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @writing-skills for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @writing-skills using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Example

```yaml
---
name: my-technique
description: Use when [specific symptom occurs].
metadata:
  category: technique
  triggers: error-text, symptom, tool-name
---

# My Technique

#### Imported: Examples

**Create a Tier 1 skill:**
```bash
mkdir -p ~/.config/opencode/skills/my-technique
touch ~/.config/opencode/skills/my-technique/SKILL.md
```

**Create a Tier 2 skill:**
```bash
mkdir -p ~/.config/opencode/skills/my-skill/references/core
touch ~/.config/opencode/skills/my-skill/{SKILL.md,gotchas.md}
touch ~/.config/opencode/skills/my-skill/references/core/README.md
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/writing-skills`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common Mistakes

| Mistake | Fix |
|---------|-----|
| Description summarizes workflow | Use "Use when..." triggers only |
| No `metadata.triggers` | Add 3+ keywords |
| Generic name ("helper") | Use gerund (`creating-skills`) |
| Long monolithic SKILL.md | Split into `references/` |

See [gotchas.md](gotchas.md) for more.

## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/anti-rationalization/README.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [anti-rationalization/README.md](references/anti-rationalization/README.md)
- [cso/README.md](references/cso/README.md)
- [standards/README.md](references/standards/README.md)
- [standards/metadata-standard.md](references/standards/metadata-standard.md)
- [anthropic-best-practices.md](anthropic-best-practices.md)
- [examples.md](examples.md)

### Imported Reference Notes

#### Imported: 📚 Component Index

| Component | Purpose |
|-----------|---------|
| **[CSO](references/cso/README.md)** | "SEO for LLMs". How to write descriptions that trigger. |
| **[Standards](references/standards/README.md)** | File naming, YAML frontmatter, directory structure. |
| **[Anti-Rationalization](references/anti-rationalization/README.md)**| How to write rules that agents won't ignore. |
| **[Testing](references/testing/README.md)** | How to ensure your skill actually works. |

#### Imported: 🛠️ Templates

- [Technique Skill](references/templates/technique.md) (How-to)
- [Reference Skill](references/templates/reference.md) (Docs)
- [Discipline Skill](references/templates/discipline.md) (Rules)
- [Pattern Skill](references/templates/pattern.md) (Design Patterns)

#### Imported: How It Works

1. **Identify goal** → Use decision tree above
2. **Select template** → From `references/templates/`
3. **Apply CSO** → Optimize description for discovery
4. **Add anti-rationalization** → For discipline skills
5. **Test** → RED-GREEN-REFACTOR cycle

#### Imported: ✅ Pre-Deploy Checklist

Before deploying any skill:

- [ ] `name` field matches directory name exactly
- [ ] `SKILL.md` filename is ALL CAPS
- [ ] Description starts with "Use when..."
- [ ] `metadata.triggers` has 3+ keywords
- [ ] Total lines < 500 (use `references/` for more)
- [ ] No `@` force-loading in cross-references
- [ ] Tested with real scenarios

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
