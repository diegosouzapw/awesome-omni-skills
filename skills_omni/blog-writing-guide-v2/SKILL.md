---
name: "blog-writing-guide-v2"
description: "Sentry Blog Writing Skill workflow skill. Use this skill when the user needs This skill enforces Sentry's blog writing standards across every post \\u2014 whether you're helping an engineer write their first blog post or a marketer draft a product announcement and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "content-media"
tags:
  - "blog-writing-guide-v2"
  - "blog-writing-guide"
  - "enforces"
  - "sentry"
  - "blog"
  - "writing"
  - "standards"
  - "across"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-19"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "blog-writing-guide-v2"
family_name: "Sentry Blog Writing Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/blog-writing-guide-v2"
upstream_skill: "skills/blog-writing-guide-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "blog-writing-guide-v2"
---

# Sentry Blog Writing Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/blog-writing-guide` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Sentry Blog Writing Skill This skill enforces Sentry's blog writing standards across every post — whether you're helping an engineer write their first blog post or a marketer draft a product announcement. The bar: Every Sentry blog post should be something a senior engineer would share in their team's Slack, or reference in a technical decision. What follows are the core principles to internalize and apply to every piece of content.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: The Sentry Voice, Banned Language, The Opening (First 2-3 Sentences), Structure: Follow the Reader's Questions, Section Headings Must Convey Information, Technical Quality Standards.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to draft or edit a Sentry blog post.
- The task involves technical storytelling, product announcements, or engineering deep-dives in Sentry's blog voice.
- You want blog content that is opinionated, specific, and technically credible rather than generic marketing copy.
- All technical claims accurate
- Code samples work
- Architecture descriptions match reality

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

#### Imported: The Sentry Voice

**We sound like:** A senior developer at a conference afterparty explaining something they're genuinely excited about — smart, specific, a little irreverent, deeply knowledgeable.

**We don't sound like:** A corporate blog, a press release, a sales deck, or an AI-generated summary.

Be technically precise, opinionated, and direct. Humor is welcome but should serve the content, not replace it. Sarcasm works. One good joke per post is plenty.

Use "we" (Sentry) and "you" (the reader). This is a conversation, not a paper.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @blog-writing-guide-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @blog-writing-guide-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @blog-writing-guide-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @blog-writing-guide-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- "The metrics product we built worked. But we killed it and started over anyway"
- "How we reduced release delays by 5% by fixing Salt"
- "Your JavaScript bundle has 47% dead code. Here's how to find it."
- "Introducing our new metrics product"
- "Performance improvements in Sentry"
- "AI-powered debugging with Seer"
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Title Guidelines

The title is the highest-leverage sentence in the post. It must stop a developer scrolling through their RSS feed or Twitter.

**Strong titles** make a specific claim, tell a story, or promise a specific payoff:
- "The metrics product we built worked. But we killed it and started over anyway"
- "How we reduced release delays by 5% by fixing Salt"
- "Your JavaScript bundle has 47% dead code. Here's how to find it."

**Weak titles** are vague announcements:
- "Introducing our new metrics product"
- "Performance improvements in Sentry"
- "AI-powered debugging with Seer"

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/blog-writing-guide`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Non-Negotiables (Quick Reference)

1. Never publish without a real person's name on it. No "The Sentry Team" bylines.
2. Never publish code that doesn't work.
3. Never say "we're excited to announce." Just announce it.
4. If you describe a system, include a diagram.
5. If you make a performance claim, include the number.
6. If you discuss a decision, explain what you didn't choose and why.
7. Every post must have a clear "who is this for" in the author's mind before writing.
8. Changelogs belong in the changelog. Blog posts should offer something more.
9. When in doubt, go deeper. The risk of being too shallow is far greater than being too detailed.
10. Write the post you wish existed when you were trying to solve this problem.

#### Imported: Banned Language

Never use these. They are automatic red flags:

- "We're excited/thrilled to announce" — just announce it
- "Best-in-class" / "industry-leading" / "cutting-edge" — show, don't tell
- "Seamless" / "seamlessly" — nothing is seamless
- "Empower" / "leverage" / "unlock" — say what you actually mean
- "Robust" — describe what makes it robust instead
- "At [Company], we believe..." — just state the belief
- "Streamline" — everyone is streamlining, stop
- Filler transitions: "That being said," "It's worth noting that," "At the end of the day," "Without further ado," "As you might know"
- "In this blog post, we will explore..." — be direct, just start

#### Imported: The Opening (First 2-3 Sentences)

The opening must do one of two things: **state the problem** or **state the conclusion**. Never start with background, company history, or hype.

**Good:** "Two weeks before launch, we killed our entire metrics product. Here's why pre-aggregating time-series metrics breaks down for debugging, and how we rebuilt the system from scratch."

**Bad:** "At Sentry, we're always looking for ways to improve the developer experience. Today, we're thrilled to share some exciting updates to our metrics product that we think you'll love."

#### Imported: Structure: Follow the Reader's Questions

Structure every post around what the reader is actually wondering, not your internal narrative:

1. **What problem does this solve?** (1-2 paragraphs max)
2. **How does it actually work?** Not buttons-you-click, but underlying technology. (Bulk of the post — be specific)
3. **What were the trade-offs or alternatives?** (This separates good from great)
4. **How do I use/try/implement this?** (Concrete next steps)

For engineering deep-dives, also address:
5. **What did we try that didn't work?** (Builds trust)
6. **What are the known limitations?** (Shows intellectual honesty)

#### Imported: Section Headings Must Convey Information

**Weak:** "Background," "Architecture," "Results," "Conclusion"

**Strong:** "Why time-series pre-aggregation destroys debugging context," "The scatter-gather approach to distributed GROUP BY," "Where this breaks down: the cardinality wall"

#### Imported: Technical Quality Standards

**Numbers over adjectives.** If you make a performance claim, include the number.
- Bad: "This significantly reduced our error processing time."
- Good: "This reduced our p99 error processing time from 340ms to 45ms — a 7.5× improvement."

**Code must work.** If a post includes code, test it. Include imports, configuration, and context. Comments should explain *why*, not *what*.

**Diagrams for systems.** If you describe a system with more than two interacting components, include a diagram. Label with real service names, not generic boxes.

**Honesty over hype.** Never overstate what a feature does. Acknowledge limitations. If something is in beta, say so. If a competitor does something well, it's okay to note that. Do not claim AI features are more capable than they are — "Seer suggests a likely root cause" ≠ "Seer finds the root cause."

#### Imported: The Closing

End with something useful — a link to docs, a way to try it, a call to give feedback. Never end with generic hype ("We can't wait to see what you build!") or recaps of what you just said.

#### Imported: Post Types

Here's the quick map by post type:

| Type | Goal | Byline |
|------|------|--------|
| Engineering Deep Dive | Explain a technical system/decision so other engineers learn | The engineer(s) who built it. Always. |
| Product Launch | Explain what shipped, why it matters, how to use it | PM, engineer, or DevEx. Not PMM unless marketing built it. |
| Postmortem | Transparent failure analysis with timeline and fixes | Engineering leadership |
| Data / Research | Original insights from Sentry's unique data position | Data team, engineering, or research |
| Tutorial / Guide | Help a developer accomplish something specific | DevEx, engineer, or community contributor |

#### Imported: The "Would I Share This?" Test

Before publishing, ask: Would a developer share this post? Does it have a shot at getting on Hacker News? If the answer is no, the post either needs more depth, more original insight, or it belongs in the changelog instead.

Posts worth sharing contain at least one of:
- A technical decision explained with trade-offs
- Original data or research not found elsewhere
- A real-world debugging story with specific details
- An honest accounting of something that went wrong
- A how-to that saves the reader real time

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
