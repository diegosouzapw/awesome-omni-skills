---
name: seo-aeo-blog-writer
description: "SEO-AEO Blog Writer workflow skill. Use this skill when the user needs Writes long-form blog posts with TL;DR block, definition sentence, comparison table, and 5-question FAQ for SEO ranking and AEO citation. Activate when the user wants to write a blog post, article, or long-form content piece and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["seo-aeo-blog-writer", "writes", "long-form", "blog", "posts", "block", "definition", "sentence"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# SEO-AEO Blog Writer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-blog-writer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# SEO-AEO Blog Writer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls, Limitations.

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
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
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
Use @seo-aeo-blog-writer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @seo-aeo-blog-writer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @seo-aeo-blog-writer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-blog-writer using the copied upstream files plus provenance, then summarize any gaps before merge.
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

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-blog-writer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

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
- `@saga-orchestration` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
- [Full Blog Writer SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/blog-writer/SKILL.md)

#### Imported: Common Pitfalls

- **Problem:** TL;DR block is too vague to be extracted as a direct answer
  **Solution:** The TL;DR must answer the article's core question in 2–3 sentences. If it doesn't answer a specific question, rewrite it.

- **Problem:** FAQ answers reference "as mentioned above" or other context
  **Solution:** Every FAQ answer must stand completely alone — no references to other parts of the article.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
