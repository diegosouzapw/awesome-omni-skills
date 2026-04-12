---
name: seo-aeo-blog-writer
description: "SEO-AEO Blog Writer workflow skill. Use this skill when the user needs Writes long-form blog posts with TL;DR block, definition sentence, comparison table, and 5-question FAQ for SEO ranking and AEO citation. Activate when the user wants to write a blog post, article, or long-form content piece and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["seo-aeo-blog-writer", "writes", "long-form", "blog", "posts", "block", "definition", "sentence"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SEO-AEO Blog Writer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-blog-writer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SEO-AEO Blog Writer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when writing a cluster article from a content cluster map
- Use when creating a long-form guide to build topical authority
- Use when you need content that can be cited by AI engines like Perplexity or ChatGPT
- Use when you need a blog post that follows a consistent, auditable structure
- Use when the request clearly matches the imported source intent: Writes long-form blog posts with TL;DR block, definition sentence, comparison table, and 5-question FAQ for SEO ranking and AEO citation. Activate when the user wants to write a blog post, article, or long-form content....
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

Writes structured long-form blog posts (800–3000 words) that satisfy both SEO ranking signals and AEO citation requirements. Every post includes a TL;DR direct-answer block, a definition sentence, structured H2/H3 hierarchy, a comparison table where relevant, and exactly 5 FAQ entries written for AI extraction.

Part of the [SEO-AEO Engine](https://github.com/mrprewsh/seo-aeo-engine).

#### Imported: How It Works

### Step 1: Write the TL;DR Block First
Write a 2–3 sentence direct answer to the article's core question. Place it immediately after the H1 in a blockquote. This is the first block AI engines attempt to extract.

### Step 2: Build the Heading Skeleton
Set H1, H2s (4–6), and H3s before writing any body content. The first H2 must be a "What Is" section with a clean definition sentence as its opening line.

### Step 3: Write Body Sections
Follow the section order: What Is → Why It Matters → How It Works (with H3 sub-concepts) → Practical Steps → Common Mistakes → FAQ → Conclusion.

### Step 4: Write 5 FAQ Entries
Use long-tail and secondary keywords as questions. Each answer must be under 50 words and self-contained — readable without any surrounding context.

### Step 5: Run AEO and SEO Checklists
Verify TL;DR presence, definition sentence, FAQ count, keyword placement, and heading structure before outputting.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-aeo-blog-writer to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/seo-aeo-blog-writer/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/seo-aeo-blog-writer/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-blog-writer using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example: TL;DR Block
How to Manage a Remote Engineering Team

TL;DR: Managing a remote engineering team requires async
communication tools, clear documentation standards, and
timezone-aware sprint planning. Teams that nail these three
areas ship consistently regardless of where members are located.


### Example: FAQ Section
Q: What is the biggest challenge of remote engineering teams?
A: Async communication. Without shared hours, decisions slow down
and context gets lost. Teams that document decisions in writing
and use structured standup tools close this gap fastest.
Q: How do you run a daily standup with a remote team?
A: Use async video or text standups posted at the start of each
member's day. Tools like Loom or Slack threads work well.
Avoid live calls across more than 2 timezones.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Write the TL;DR block before writing anything else — it anchors the article
- ✅ Do: Make the "What Is" definition sentence extractable on its own — one clean sentence
- ✅ Do: Use secondary keywords as FAQ questions to capture long-tail traffic
- ❌ Don't: Write FAQ answers longer than 50 words — AI engines skip long answers
- ❌ Don't: Use duplicate H2 headings anywhere in the article
- ❌ Don't: Skip the comparison table if the topic involves comparing options
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Write the TL;DR block before writing anything else — it anchors the article
- ✅ **Do:** Make the "What Is" definition sentence extractable on its own — one clean sentence
- ✅ **Do:** Use secondary keywords as FAQ questions to capture long-tail traffic
- ❌ **Don't:** Write FAQ answers longer than 50 words — AI engines skip long answers
- ❌ **Don't:** Use duplicate H2 headings anywhere in the article
- ❌ **Don't:** Skip the comparison table if the topic involves comparing options

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-blog-writer`, fails to mention provenance, or does not use the support pack at all.
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
- [Full Blog Writer SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/blog-writer/SKILL.md)

#### Imported: Common Pitfalls

- **Problem:** TL;DR block is too vague to be extracted as a direct answer
  **Solution:** The TL;DR must answer the article's core question in 2–3 sentences. If it doesn't answer a specific question, rewrite it.

- **Problem:** FAQ answers reference "as mentioned above" or other context
  **Solution:** Every FAQ answer must stand completely alone — no references to other parts of the article.
