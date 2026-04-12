---
name: seo-aeo-meta-description-generator
description: "SEO-AEO Meta Description Generator workflow skill. Use this skill when the user needs Writes 3 title tag variants and 3 meta description variants per page with SERP preview, OG tags, and Twitter Card tags. Activate when the user wants to write meta tags, title tags, or social sharing tags for any page and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["seo-aeo-meta-description-generator", "writes", "title", "tag", "variants", "and", "meta", "description"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SEO-AEO Meta Description Generator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-meta-description-generator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SEO-AEO Meta Description Generator

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a page needs a title tag and meta description written or optimised
- Use when preparing social sharing tags for LinkedIn, X, or WhatsApp
- Use when A/B testing CTR on search results
- Use after the landing-page-writer or blog-writer skill completes
- Use when the request clearly matches the imported source intent: Writes 3 title tag variants and 3 meta description variants per page with SERP preview, OG tags, and Twitter Card tags. Activate when the user wants to write meta tags, title tags, or social sharing tags for any page.
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

Produces 3 title tag variants and 3 meta description variants for any page, each using a different CTR mechanic (benefit lead, question hook, social proof). Also generates Open Graph and Twitter Card tags. Includes a SERP preview block and a variant comparison table with a recommended selection.

Part of the [SEO-AEO Engine](https://github.com/mrprewsh/seo-aeo-engine).

#### Imported: How It Works

### Step 1: Identify CTR Angle Per Variant
- **V1 Benefit Lead** — leads with the outcome or benefit
- **V2 Question Hook** — opens with the question the searcher is asking
- **V3 Social Proof / Specificity** — leads with a number, stat, or specific claim

### Step 2: Apply Character Limits
- Title tag: 50–60 characters (hard limit: 60)
- Meta description: 140–155 characters (hard limit: 160)
- Never end a description mid-sentence near the limit

### Step 3: Apply CTR Rules
- Primary keyword in first 3 words of every title variant
- Primary keyword in first half of every description variant
- At least one power word per description
- Every description ends with a CTA verb
- Never use "click here", passive openers, or all-caps

### Step 4: Write Social Tags
OG and Twitter tags can be more conversational than SERP tags. Write them as distinct copy — not copy-pastes of the meta description.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-aeo-meta-description-generator to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/seo-aeo-meta-description-generator/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/seo-aeo-meta-description-generator/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-meta-description-generator using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Landing Page Variants
Title V1: Remote Project Management Software | Syncro
(51 chars) — Keyword first, brand at end
Title V2: Manage Remote Teams Without the Chaos | Syncro
(54 chars) — Pain-point led with power word
Description V1 (Benefit Lead):
Ship faster with your distributed team. Syncro centralises
tasks, async updates, and sprints in one tool. Start free today.
(141 chars) ✅
Description V2 (Question Hook):
Struggling to keep your remote team aligned? Syncro replaces
scattered tools with one async-first workspace. Try it free.
(140 chars) ✅

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Write 3 variants — always give the user options to test
- ✅ Do: Keep OG and Twitter descriptions more conversational than SERP versions
- ✅ Do: Verify character count on every variant before outputting
- ❌ Don't: Use the same exact-match anchor or keyword more than once per description
- ❌ Don't: Copy-paste the meta description into the OG description
- ❌ Don't: Let any description end mid-sentence near the character limit
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Write 3 variants — always give the user options to test
- ✅ **Do:** Keep OG and Twitter descriptions more conversational than SERP versions
- ✅ **Do:** Verify character count on every variant before outputting
- ❌ **Don't:** Use the same exact-match anchor or keyword more than once per description
- ❌ **Don't:** Copy-paste the meta description into the OG description
- ❌ **Don't:** Let any description end mid-sentence near the character limit

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-meta-description-generator`, fails to mention provenance, or does not use the support pack at all.
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
- [Full Meta Description Generator SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/meta-description-generator/SKILL.md)

#### Imported: Common Pitfalls

- **Problem:** Description truncates mid-word in search results
  **Solution:** Always trim a clause rather than letting natural truncation cut the sentence.

- **Problem:** All 3 variants sound identical
  **Solution:** Each variant must use a genuinely different CTR mechanic — not just rearranged words.
