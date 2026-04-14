---
name: seo-aeo-keyword-research-v2
description: "SEO-AEO Keyword Research workflow skill. Use this skill when the user needs Researches and prioritises SEO keywords with AEO question queries, difficulty tiers, cannibalization checks, and a content map. Activate when the user wants to find keywords, research search terms, or build a keyword strategy and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: business
tags: ["seo-aeo-keyword-research-v2", "seo-aeo-keyword-research", "researches", "and", "prioritises", "seo", "keywords", "aeo"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# SEO-AEO Keyword Research

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/seo-aeo-keyword-research` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SEO-AEO Keyword Research

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to build a keyword strategy for a new topic or niche
- Use when you want to find AEO question queries for AI engine citation
- Use when you need to prioritise which keywords to target first
- Use when you want to check for keyword cannibalization before writing content
- Use when the request clearly matches the imported source intent: Researches and prioritises SEO keywords with AEO question queries, difficulty tiers, cannibalization checks, and a content map. Activate when the user wants to find keywords, research search terms, or build a keyword....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

Identifies high-value SEO keywords and AEO question-based queries for a topic. Produces keyword tiers (easy wins to long-term goals), search intent classification, cannibalization checks, and a content production map — all from a single topic input.

Part of the [SEO-AEO Engine](https://github.com/mrprewsh/seo-aeo-engine) — an open-source AI-powered content growth system.

#### Imported: How It Works

### Step 1: Extract Seed Keywords
Identify 3–5 core terms that anchor the topic's search territory. Go beyond the obvious head term to include adjacent terms the audience actually uses.

### Step 2: Expand Into Tiers
Sort all keywords into three tiers:
- **Tier 1** — Low-to-moderate difficulty. Target first.
- **Tier 2** — Medium difficulty. Build toward after Tier 1 content is live.
- **Tier 3** — High difficulty. Long-term goals only.

### Step 3: Generate AEO Keywords
Produce question-based keywords that AI engines surface in direct answers and People Also Ask boxes. For each AEO keyword, specify the answer format to use (definition sentence, numbered steps, comparison table, direct number).

### Step 4: Run Cannibalization Check
Flag any two keywords similar enough to split traffic if targeted on separate pages. Recommend which page should own which term.

### Step 5: Build Content Map
Recommend content type and production order for all Tier 1 and Tier 2 keywords.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-aeo-keyword-research-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/seo-aeo-keyword-research-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/seo-aeo-keyword-research-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-keyword-research-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: SaaS Product
Input: topic = "remote project management software"
audience = "engineering managers and startup founders"
goal = "convert"
Output:
Tier 1 Keywords:

"remote project management software" | Medium volume | Difficulty: 38
"project management tool remote teams" | Low volume | Difficulty: 29

AEO Keywords:

"What is the best project management software for remote teams?"
→ Answer format: Comparison table
"How does remote project management work?"
→ Answer format: Numbered steps

Content Map:

Landing page → "remote project management software"
Pillar blog → "complete guide to remote project management"
Cluster article → "how to manage remote engineering teams"


### Example 2: Fintech App
Input: topic = "automated budgeting app"
audience = "millennials managing personal finances"
goal = "all"
Output:
Tier 1 Keywords:

"automated budgeting app" | Medium volume | Difficulty: 33
"automatic savings app" | Low volume | Difficulty: 24

AEO Keywords:

"What is the best budgeting app for millennials?"
→ Answer format: Comparison table
"How does automated budgeting work?"
→ Answer format: Numbered steps

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Target Tier 1 keywords first — build authority before going after competitive terms
- ✅ Do: Use AEO keywords in FAQ sections and definition blocks for AI engine citation
- ✅ Do: Validate estimated volume and difficulty with a live tool (Ahrefs, SEMrush) before committing
- ❌ Don't: Target two keywords on the same page if cannibalization is flagged
- ❌ Don't: Use volume as the only prioritisation signal — difficulty and intent matter more
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Target Tier 1 keywords first — build authority before going after competitive terms
- ✅ **Do:** Use AEO keywords in FAQ sections and definition blocks for AI engine citation
- ✅ **Do:** Validate estimated volume and difficulty with a live tool (Ahrefs, SEMrush) before committing
- ❌ **Don't:** Target two keywords on the same page if cannibalization is flagged
- ❌ **Don't:** Use volume as the only prioritisation signal — difficulty and intent matter more

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/seo-aeo-keyword-research`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Additional Resources

- [SEO-AEO Engine Repository](https://github.com/mrprewsh/seo-aeo-engine)
- [Full Keyword Research SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/keyword-research/SKILL.md)

#### Imported: Common Pitfalls

- **Problem:** High-volume keyword chosen but impossible to rank for early on
  **Solution:** Always cross-check volume with difficulty. Tier 1 should have difficulty under 45.

- **Problem:** AEO keywords ignored in favour of traditional search terms
  **Solution:** AEO keywords drive AI engine citation — include at least 5 in every research run.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
