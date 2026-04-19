---
name: seo-aeo-landing-page-writer
description: "SEO-AEO Landing Page Writer workflow skill. Use this skill when the user needs Writes complete, structured landing pages optimized for SEO ranking, AEO citation, and visitor conversion. Activate when the user wants to write or generate a landing page for a product, service, or offer and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["seo-aeo-landing-page-writer", "writes", "complete", "structured", "landing", "pages", "optimized", "for"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# SEO-AEO Landing Page Writer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-landing-page-writer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# SEO-AEO Landing Page Writer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building a landing page for a new product or service
- Use when an existing landing page needs a full SEO and AEO rewrite
- Use when you need a page that can be cited by AI engines like Perplexity or ChatGPT
- Use when you want conversion copy that leads with pain before pitching the product
- Use when the request clearly matches the imported source intent: Writes complete, structured landing pages optimized for SEO ranking, AEO citation, and visitor conversion. Activate when the user wants to write or generate a landing page for a product, service, or offer.
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

Generates a full, publish-ready landing page following a defined section order with SEO heading structure, AEO extraction blocks, FAQ section, comparison table, social proof, and conversion-focused CTAs. Every section serves a specific purpose in a narrative arc that moves the visitor from awareness to action.

Part of the [SEO-AEO Engine](https://github.com/mrprewsh/seo-aeo-engine).

#### Imported: How It Works

### Step 1: Map Inputs
Extract product name, audience, primary keyword, pain points, features, benefits, USPs, social proof, and CTAs. Map every feature to a user outcome before writing any copy.

### Step 2: Write AEO Extraction Sentence
Write one 25–40 word sentence that answers "What is [product]?" — standalone, no jargon, placed in a blockquote immediately after the H1. This is the sentence AI engines extract.

### Step 3: Follow the Narrative Arc
Write sections in this exact order:
1. Hero — H1 + AEO sentence + CTA
2. Problem — audience pain, no product mention yet
3. Solution — introduce product as the answer
4. Features as Benefits — table format
5. Social Proof — testimonials, logos, stats
6. Mid-page CTA
7. How It Works — numbered steps
8. Comparison — table with honest competitor comparison
9. FAQ — minimum 6 entries, each under 50 words
10. Trust Signals
11. Final CTA

### Step 4: Run SEO and AEO Checklists
Verify keyword placement, heading hierarchy, FAQ count, AEO block presence, and meta description placeholder before outputting.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-aeo-landing-page-writer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @seo-aeo-landing-page-writer against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @seo-aeo-landing-page-writer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-landing-page-writer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Hero Section Output
Ship Faster With Your Remote Team

Syncro is a remote-first project management platform that helps
distributed engineering teams track work, communicate
asynchronously, and ship without the chaos of email and
scattered spreadsheets.

[Start Free Trial]  [See How It Works]
"4,000+ remote teams" · "40% fewer status meetings" · "4.8/5 on G2"

### Example 2: FAQ Section Output
Q: What is Syncro?
A: Syncro is a remote-first project management platform for
distributed engineering teams. It centralises task tracking,
async communication, and sprint planning in one tool.
Q: How much does Syncro cost?
A: Syncro offers a flat-rate plan at $49/month for unlimited
users. A 14-day free trial is available — no credit card required.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Write the problem section before mentioning the product — empathy first
- ✅ Do: Place the AEO extraction sentence in a blockquote immediately after H1
- ✅ Do: Write FAQ answers as standalone — each must make sense without context
- ✅ Do: Include at least one honest point in the comparison table where the alternative wins
- ❌ Don't: Use "revolutionary", "game-changing", or "best-in-class" anywhere
- ❌ Don't: Use "Submit" or "Click Here" as CTA button text
- ❌ Don't: Write paragraphs longer than 4 lines

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Write the problem section before mentioning the product — empathy first
- ✅ **Do:** Place the AEO extraction sentence in a blockquote immediately after H1
- ✅ **Do:** Write FAQ answers as standalone — each must make sense without context
- ✅ **Do:** Include at least one honest point in the comparison table where the alternative wins
- ❌ **Don't:** Use "revolutionary", "game-changing", or "best-in-class" anywhere
- ❌ **Don't:** Use "Submit" or "Click Here" as CTA button text
- ❌ **Don't:** Write paragraphs longer than 4 lines

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-landing-page-writer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
- [Full Landing Page Writer SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/landing-page-writer/SKILL.md)

#### Imported: Common Pitfalls

- **Problem:** Product mentioned in the pain section
  **Solution:** The pain section exists to build empathy. Save the product introduction for the solution section.

- **Problem:** FAQ answers are too long to be extracted by AI engines
  **Solution:** Every FAQ answer must be under 50 words and self-contained.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
