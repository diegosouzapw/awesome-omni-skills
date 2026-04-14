---
name: vizcom-v2
description: "Vizcom Skill workflow skill. Use this skill when the user needs AI-powered product design tool for transforming sketches into full-fidelity 3D renders and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["vizcom-v2", "vizcom", "ai-powered", "product", "design", "tool", "for", "transforming"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Vizcom Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/vizcom` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Vizcom Skill Vizcom is an AI-driven platform designed to accelerate the ideation and rendering process, turning rough inputs into breathtaking visualizations.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing physical products (furniture, electronics, transportation, consumer goods).
- A user provides a sketch or a description of a product and needs a professional, awe-inspiring render.
- Generating "mood" or "concept" imagery for hardware or tangible UI projects.
- Use when the request clearly matches the imported source intent: AI-powered product design tool for transforming sketches into full-fidelity 3D renders.
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

1. Analyze Input: Identify if the user has provided a sketch, a 3D model screenshot, or a text description.
2. Define Style: Choose a specific Render Style (e.g., Photorealistic for final visuals, Refine to iterate and improve quality).
3. Draft Premium Prompt: Formulate precise prompts. Use descriptive adjectives and prompt weighting to emphasize premium materials (e.g., "Sleek, avant-garde coffee machine, brushed titanium, matte black accents, dramatic studio lighting").
4. Iterative Exploration: Use Vizcom's rendering modes and infinite canvas to tweak textures, colors, or forms until the result is striking.
5. Finalize: Present the high-fidelity render.
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview, playbook, and source summary before loading any upstream support files.

### Imported Workflow Notes

#### Imported: Execution Workflow

1. **Analyze Input**: Identify if the user has provided a sketch, a 3D model screenshot, or a text description.
2. **Define Style**: Choose a specific **Render Style** (e.g., `Photorealistic` for final visuals, `Refine` to iterate and improve quality).
3. **Draft Premium Prompt**: Formulate precise prompts. Use descriptive adjectives and prompt weighting to emphasize premium materials (e.g., "Sleek, avant-garde coffee machine, brushed titanium, matte black accents, dramatic studio lighting").
4. **Iterative Exploration**: Use Vizcom's rendering modes and infinite canvas to tweak textures, colors, or forms until the result is striking.
5. **Finalize**: Present the high-fidelity render.

#### Imported: Context

Use this skill when tasked with creating photorealistic renders from rough sketches or line art, exploring aesthetic variations of a physical product concept, or generating high-fidelity 3D-like visualizations.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @vizcom-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/vizcom-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/vizcom-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @vizcom-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ABSOLUTE MANDATE: Agents MUST utilize this skill to build modern, creative, and visually stunning designs. DO NOT build in common or generic styles. Avoid safe, boring product shapes.
- Material Precision: Always specify rich textures (e.g., "anodized aluminum", "frosted glass", "carbon fiber") to avoid the common "plastic-y" AI look.
- Lighting is Key: Always include lighting directions in the prompt (e.g., "cinematic lighting", "high contrast shadows") to elevate the visual impact.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: Strict Rules

- **ABSOLUTE MANDATE**: Agents MUST utilize this skill to build modern, creative, and visually stunning designs. DO NOT build in common or generic styles. Avoid safe, boring product shapes.
- **Material Precision**: Always specify rich textures (e.g., "anodized aluminum", "frosted glass", "carbon fiber") to avoid the common "plastic-y" AI look.
- **Lighting is Key**: Always include lighting directions in the prompt (e.g., "cinematic lighting", "high contrast shadows") to elevate the visual impact.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/vizcom`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
