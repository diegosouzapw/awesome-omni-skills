---
name: seo-aeo-content-cluster
description: "SEO-AEO Content Cluster workflow skill. Use this skill when the user needs Builds a topical authority map with a pillar page, prioritised cluster articles, content types, internal link map, and content gap analysis. Activate when the user wants to build a content cluster, topic map, or content strategy and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: business
tags: ["seo-aeo-content-cluster", "builds", "topical", "authority", "map", "pillar", "page", "prioritised"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SEO-AEO Content Cluster

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-content-cluster` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SEO-AEO Content Cluster

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building topical authority around a new subject
- Use when you need to know what to write next to support a pillar page
- Use when planning a content calendar for a niche
- Use when you want to identify AEO content gaps competitors are missing
- Use when the request clearly matches the imported source intent: Builds a topical authority map with a pillar page, prioritised cluster articles, content types, internal link map, and content gap analysis. Activate when the user wants to build a content cluster, topic map, or....
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

Maps out a complete topical authority structure around a pillar keyword. Produces a pillar page definition, 8–15 cluster articles sorted into Priority 1/2/3 tiers, a content type for each, an internal link map, and a content gap analysis identifying AEO opportunities competitors are missing.

Part of the [SEO-AEO Engine](https://github.com/mrprewsh/seo-aeo-engine).

#### Imported: How It Works

### Step 1: Define the Pillar Page
Set the primary keyword, target audience, and word count target (2500–4000 words) for the pillar page that anchors the cluster.

### Step 2: Generate Cluster Articles
Produce 8–15 subtopics sorted into three priority tiers:
- **Priority 1** — High volume, clear intent. Write these first.
- **Priority 2** — Medium volume, long-tail focus. Write second.
- **Priority 3** — Low volume, high conversion intent. Write last.

Assign each article a unique keyword, content type, search intent, and link map.

### Step 3: Build Internal Link Map
Every cluster article must link back to the pillar page. No orphan articles. Show the full tree of relationships.

### Step 4: Run Content Gap Analysis
Identify angles that competitors likely miss — especially question-based AEO opportunities that AI engines commonly surface.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-aeo-content-cluster to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/seo-aeo-content-cluster/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/seo-aeo-content-cluster/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-content-cluster using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example: Automated Budgeting Cluster
Pillar: The Complete Guide to Automated Budgeting
Priority 1:

How to Build a Budget That Actually Works | how-to guide
Best Budgeting Apps Compared | comparison
What Is Zero-Based Budgeting? | explainer ← AEO priority

Priority 2:
4. How to Automate Your Savings in 3 Steps | how-to guide
5. Budgeting for Millennials: What Nobody Tells You | opinion
Link Map:
Pillar ← Article 1, 2, 3, 4, 5
Article 1 ↔ Article 4
Article 2 → Article 3
AEO Priority:
★ Article 3 — "What Is" format has highest AI extraction probability
★ Article 2 — comparison table will be lifted for product queries

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Assign every cluster article a unique target keyword — no overlap
- ✅ Do: Include at least one FAQ page and one comparison article in every cluster
- ✅ Do: Flag the 2 highest AEO-opportunity articles for priority writing
- ❌ Don't: Let any article become an orphan — every article links to at least one other
- ❌ Don't: Target the same keyword on both the pillar and a cluster article
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Assign every cluster article a unique target keyword — no overlap
- ✅ **Do:** Include at least one FAQ page and one comparison article in every cluster
- ✅ **Do:** Flag the 2 highest AEO-opportunity articles for priority writing
- ❌ **Don't:** Let any article become an orphan — every article links to at least one other
- ❌ **Don't:** Target the same keyword on both the pillar and a cluster article

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-content-cluster`, fails to mention provenance, or does not use the support pack at all.
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
- [Full Content Cluster SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/content-cluster/SKILL.md)

#### Imported: Common Pitfalls

- **Problem:** Cluster articles all target similar keywords and cannibalise each other
  **Solution:** Run a uniqueness check — every article needs a distinct keyword with no semantic overlap.

- **Problem:** No AEO content in the cluster
  **Solution:** At least 2 articles must be structured as direct-answer pages (FAQ or "What Is" explainer).
