---
name: humanize-chinese
description: "Humanize Chinese workflow skill. Use this skill when the user needs Detect and rewrite AI-like Chinese text with a practical workflow for scoring, humanization, academic AIGC reduction, and style conversion. Use when the user asks to \u53bbAI\u5473, \u964dAIGC, \u53bb\u9664AI\u75d5\u8ff9, \u8bba\u6587\u964d\u91cd, \u77e5\u7f51\u68c0\u6d4b, \u7ef4\u666e\u68c0\u6d4b, humanize chinese, detect AI text, or make Chinese text sound more natural and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["chinese", "writing", "editing", "aigc", "academic", "style-transfer", "humanize-chinese", "detect"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Humanize Chinese

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/humanize-chinese` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Humanize Chinese Use this skill when you need to detect AI-like Chinese writing, rewrite it to feel less synthetic, reduce AIGC signals in academic prose, or convert the text into a more specific Chinese writing style.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Optional CLI Flow, Manual Rewrite Playbook, Academic AIGC Reduction, Style Conversion, Source, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user says 去AI味, 降AIGC, 去除AI痕迹, 让文字更自然, 改成人话, or 降低AI率
- Use when the user wants a Chinese text checked for AI-writing patterns or suspicious phrasing
- Use when the user wants academic-paper-specific AIGC reduction for CNKI, VIP, or Wanfang-style checks
- Use when the user wants Chinese text rewritten into a different style such as zhihu, xiaohongshu, wechat, weibo, literary, or academic
- Use when the request clearly matches the imported source intent: Detect and rewrite AI-like Chinese text with a practical workflow for scoring, humanization, academic AIGC reduction, and style conversion. Use when the user asks to 去AI味, 降AIGC, 去除AI痕迹, 论文降重, 知网检测, 维普检测, humanize....
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

1. rigid first/second/finally structures
2. mechanical connectors such as 综上所述, 值得注意的是, 由此可见
3. abstract grandiose wording with low information density
4. repeated sentence rhythm and paragraph length
5. academic prose that sounds too complete, too certain, or too template-driven
6. remove formulaic connectors rather than paraphrasing every sentence
7. vary sentence length and paragraph rhythm

### Imported Workflow Notes

#### Imported: Core Workflow

### 1. Detect Before Rewriting

Start by identifying the most obvious AI markers instead of rewriting blindly:

- rigid `first/second/finally` structures
- mechanical connectors such as `综上所述`, `值得注意的是`, `由此可见`
- abstract grandiose wording with low information density
- repeated sentence rhythm and paragraph length
- academic prose that sounds too complete, too certain, or too template-driven

If the user provides a short sample, call out the suspicious phrases directly before rewriting.

### 2. Rewrite in the Smallest Useful Pass

Prefer targeted rewrites over total regeneration:

- remove formulaic connectors rather than paraphrasing every sentence
- vary sentence length and paragraph rhythm
- replace repeated verbs and noun phrases
- swap abstract summaries for concrete observations where possible
- keep the original claims, facts, citations, and terminology intact

### 3. Validate the Result

After rewriting, verify that the text:

- still says the same thing
- sounds less templated
- uses more natural rhythm
- does not introduce factual drift
- stays in the correct register for the target audience

For academic text, preserve a scholarly tone. Do not over-casualize.

#### Imported: Optional CLI Flow

If the user has a local clone of the source toolkit, these examples are useful:

```bash
python3 scripts/detect_cn.py text.txt -v
python3 scripts/compare_cn.py text.txt -a -o clean.txt
python3 scripts/academic_cn.py paper.txt -o clean.txt --compare
python3 scripts/style_cn.py text.txt --style xiaohongshu -o out.txt
```

Use this CLI sequence when available:

1. detect and inspect suspicious sentences
2. rewrite or compare
3. rerun detection on the cleaned file
4. optionally convert into a target style

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @humanize-chinese to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @humanize-chinese against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @humanize-chinese for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @humanize-chinese using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Show the main AI-like patterns you found
- Explain the rewrite strategy in 1-3 short bullets
- Return the rewritten Chinese text
- If helpful, include a short note on remaining weak spots
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Output Rules

- Show the main AI-like patterns you found
- Explain the rewrite strategy in 1-3 short bullets
- Return the rewritten Chinese text
- If helpful, include a short note on remaining weak spots

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/humanize-chinese`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitops-workflow` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@global-chat-agent-discovery` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Manual Rewrite Playbook

If the scripts are unavailable, use this manual process.

### Common AI Markers

- numbered or mirrored structures that feel too symmetrical
- filler transitions that add no meaning
- repeated stock phrases
- overly even sentence length
- conclusions that sound final, polished, and risk-free

### Rewrite Moves

- delete weak transitions first
- collapse repetitive phrases into one stronger sentence
- split sentences at natural turns instead of forcing long balanced structures
- merge choppy sentences when they feel robotic
- replace generic abstractions with concrete wording
- introduce light variation in cadence so the prose does not march at a constant tempo

#### Imported: Academic AIGC Reduction

For papers, reports, or theses:

- keep discipline-specific terminology unchanged
- replace AI-academic stock phrases with more grounded scholarly phrasing
- reduce absolute certainty with measured hedging where appropriate
- vary paragraph structure so each section does not read like the same template
- add limitations or uncertainty if the conclusion feels unnaturally complete

Examples of safer direction changes:

- `本文旨在` -> `本文尝试` or `本研究关注`
- `具有重要意义` -> `值得关注` or `有一定参考价值`
- `研究表明` -> `前人研究发现` or `已有文献显示`

Do not invent citations, evidence, or data.

#### Imported: Style Conversion

Use style conversion only after the base text is readable and natural.

Supported style directions from the source workflow:

- `casual`
- `zhihu`
- `xiaohongshu`
- `wechat`
- `academic`
- `literary`
- `weibo`

When switching style, keep the user's meaning stable and change only tone, structure, and surface wording.

#### Imported: Source

Adapted from the `voidborne-d/humanize-chinese` project and its CLI/script workflow for Chinese AI-text detection and rewriting.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
