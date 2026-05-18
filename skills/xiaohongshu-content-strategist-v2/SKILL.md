---
name: xiaohongshu-content-strategist-v2
description: "Xiaohongshu Content Strategist workflow skill. Use this skill when the user needs Create viral Xiaohongshu (\u5c0f\u7ea2\u4e66) content with platform-native strategy, save-rate optimization, trending formats, and search SEO for China's #1 lifestyle platform and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["xiaohongshu", "chinese-market", "content-strategy", "social-media", "marketing", "source", "xiaohongshu-content-strategist-v2", "xiaohongshu-content-strategist"]
complexity: intermediate
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "yundu-ai"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Xiaohongshu Content Strategist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/xiaohongshu-content-strategist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Xiaohongshu Content Strategist

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security and Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when creating content for Xiaohongshu
- Use when optimizing existing content for better Xiaohongshu performance
- Use when planning a Xiaohongshu content calendar or strategy
- Use when adapting international brand content for the Chinese market via Xiaohongshu
- Use when analyzing Xiaohongshu competitors
- Use when the request clearly matches the imported source intent: Create viral Xiaohongshu (小红书) content with platform-native strategy, save-rate optimization, trending formats, and search SEO for China's #1 lifestyle platform.

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

Expert content strategist for Xiaohongshu (小红书), China's most influential lifestyle and shopping platform with 300M+ monthly active users. Creates platform-native content optimized for the unique Xiaohongshu algorithm, which prioritizes saves over likes. Bilingual Chinese/English output with cultural sensitivity.

This skill understands Xiaohongshu's search-first traffic model, cover image plus title CTR mechanics, and the conversion path from save to sale.

#### Imported: How It Works

### Step 1: Analyze the Topic

Understand the target audience, product, or message. Identify primary keywords for Xiaohongshu's search algorithm. Research trending formats in the relevant category.

### Step 2: Choose the Content Format

Select from proven formats based on the topic:

| Format | Best For | Example |
|--------|----------|---------|
| Before/After | Transformations |妆前妆后、装修前后 |
| Step-by-Step | Tutorials | 5步学会xxx |
| Comparison | Decisions | A vs B 实测 |
| Hidden Gems | Discovery | 被低估的xxx |
| List/Rankings | Quick value | 2025必买的10件 |

### Step 3: Generate the Content Package

For each post, provide:
1. **Cover Image Brief** - Visual concept, text overlay under 10 chars, color mood
2. **Title** (2-3 options) - Primary keyword in first 8 chars, emotional trigger, 18-22 chars optimal
3. **Body Content** - Hook sentence, short paragraphs, strategic emoji, highlighted key info, CTA
4. **Hashtags** - 3-5 mix of high-volume and niche tags
5. **Comment Engagement Plan** - Seed comments and anticipated Q&A

### Step 4: Optimize for the Algorithm

Apply these ranking factors in priority order:
1. Save rate - number one ranking signal, content must be reference-worthy
2. Click-through rate - driven by cover image plus title
3. Comment depth - conversation quality over count
4. Completion rate - users who read to the end

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @xiaohongshu-content-strategist-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @xiaohongshu-content-strategist-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @xiaohongshu-content-strategist-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @xiaohongshu-content-strategist-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Beauty Product Review

Title: 用了28天，皮肤真的变好了｜实测这款平价精华
Cover: Before/After face photo with product in corner, soft pink overlay
Body: 这款精华我用了整整28天，今天来交作业...
Hashtags: #平价护肤 #精华推荐 #28天打卡
Seed Comment: "姐妹们，我油皮可以用吗？"

### Example 2: Travel Destination

Title: 上海被低估的咖啡馆！拍照绝了
Cover: Cafe interior shot with warm tones, location pin overlay
Body: 周末不想人挤人？这家藏在法租界的小店...
Hashtags: #上海咖啡 #周末去哪 #小众探店
Seed Comment: "地址在哪里呀？"

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Sound like a real person sharing a discovery, not a brand broadcasting
- Front-load keywords in titles (first 8 characters)
- Use numbers and specific results in titles
- Keep paragraphs to 2-3 sentences max
- Include a clear save-worthy takeaway
- Do not use corporate marketing language
- Do not ignore mobile formatting (most users are on phones)

### Imported Operating Notes

#### Imported: Best Practices

- Sound like a real person sharing a discovery, not a brand broadcasting
- Front-load keywords in titles (first 8 characters)
- Use numbers and specific results in titles
- Keep paragraphs to 2-3 sentences max
- Include a clear save-worthy takeaway
- Do not use corporate marketing language
- Do not ignore mobile formatting (most users are on phones)
- Do not post without relevant hashtags

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/xiaohongshu-content-strategist`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-search-documents-py-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@backend-dev-guidelines-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@browser-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@cc-skill-security-review-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- This skill generates text content strategy; actual image/video creation requires additional tools
- Trending topics and algorithm details may shift; always validate with current platform data
- Cultural nuances in specific sub-communities may require human review

#### Imported: Security and Safety Notes

- This skill generates content strategy and copy. It does not access Xiaohongshu APIs or user accounts.
- All content should comply with Chinese advertising law and platform community guidelines.

#### Imported: Common Pitfalls

- **Problem:** Low engagement despite good content
  **Solution:** Check title CTR - the cover image plus title combo drives 80 percent of click-through. A/B test 2-3 title options.

- **Problem:** Content gets flagged or removed
  **Solution:** Avoid absolute claims and ensure product reviews disclose sponsorships per platform rules.
