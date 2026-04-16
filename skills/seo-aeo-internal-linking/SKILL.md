---
name: seo-aeo-internal-linking
description: "SEO-AEO Internal Linking workflow skill. Use this skill when the user needs Maps internal link opportunities between pages with anchor text, placement instructions, orphan page detection, and cannibalization checks. Activate when the user wants to build an internal linking strategy or find link opportunities and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["seo-aeo-internal-linking", "maps", "internal", "link", "opportunities", "between", "pages", "anchor"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# SEO-AEO Internal Linking

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-internal-linking` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# SEO-AEO Internal Linking

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building internal links between a new pillar page and its cluster articles
- Use when auditing an existing site for orphan pages
- Use after content-cluster generates a topic map
- Use when you need anchor text suggestions with placement context
- Use when the request clearly matches the imported source intent: Maps internal link opportunities between pages with anchor text, placement instructions, orphan page detection, and cannibalization checks. Activate when the user wants to build an internal linking strategy or find....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

Analyses a set of pages and produces a prioritised list of internal link opportunities with exact anchor text, a context sentence showing where each link should appear, orphan page detection, anchor text cannibalization warnings, and a link equity map showing how authority flows across the content.

Part of the [SEO-AEO Engine](https://github.com/mrprewsh/seo-aeo-engine).

#### Imported: How It Works

### Step 1: Detect Orphan Pages
Flag any page with zero incoming internal links. These are invisible to search engines and must be linked immediately.

### Step 2: Build Semantic Overlap Matrix
Match pages by primary keyword similarity and content summary to identify natural linking opportunities.

### Step 3: Assign Link Types
Every suggestion gets one of four labels:
- **Cluster → Pillar** — highest priority, consolidates authority upward
- **Pillar → Cluster** — distributes authority downward
- **Cluster → Cluster** — builds semantic depth
- **Contextual Boost** — concentrates equity on a focus page

### Step 4: Write Context Sentences
For every link opportunity, write the sentence the anchor text should appear in — naturally placed, not forced.

### Step 5: Check Anchor Text
Flag any exact-match anchor used more than once for the same target page as a cannibalization risk. Never use generic anchors like "click here".

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-aeo-internal-linking to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @seo-aeo-internal-linking against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @seo-aeo-internal-linking for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-internal-linking using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example: Link Opportunity Output
🔴 High Priority — Link 1
Type: Cluster → Pillar
Source: "How to Build a Budget That Actually Works"
Target: "The Complete Guide to Automated Budgeting"
Anchor: "automated budgeting guide"
Context: "For a full breakdown of every method available,
see our [automated budgeting guide]."
Impact: Consolidates topical authority on pillar page.
Orphan Alert:
"PennyWise Pricing Page" has no incoming links.
Fix: Add link from comparison table in Article 2.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Every cluster article must have at least one Cluster → Pillar link
- ✅ Do: Write a context sentence for every suggestion — anchor text needs natural placement
- ✅ Do: Fix orphan pages before adding any new links
- ❌ Don't: Use the same exact-match anchor for the same target page more than once
- ❌ Don't: Use "click here", "read more", or "learn more" as anchor text — ever
- ❌ Don't: Add more than 100 outgoing internal links on any single page
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Every cluster article must have at least one Cluster → Pillar link
- ✅ **Do:** Write a context sentence for every suggestion — anchor text needs natural placement
- ✅ **Do:** Fix orphan pages before adding any new links
- ❌ **Don't:** Use the same exact-match anchor for the same target page more than once
- ❌ **Don't:** Use "click here", "read more", or "learn more" as anchor text — ever
- ❌ **Don't:** Add more than 100 outgoing internal links on any single page

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-internal-linking`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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
- `@scikit-learn` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
- [Full Internal Linking SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/internal-linking/SKILL.md)

#### Imported: Common Pitfalls

- **Problem:** All cluster articles link to the pillar but not to each other
  **Solution:** Add Cluster → Cluster links between semantically related articles to build depth.

- **Problem:** Same anchor text used across multiple pages for the same target
  **Solution:** Use partial match and branded anchors for subsequent links after the first exact-match use.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
