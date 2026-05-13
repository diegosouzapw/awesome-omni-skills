---
name: "bulletmind-v2"
description: "Bulletmind workflow skill. Use this skill when the user needs Convert input into clean, structured, hierarchical bullet points for summarization, note-taking, and structured thinking and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "communication"
tags:
  - "writing"
  - "summarization"
  - "note-taking"
  - "formatting"
  - "structured-output"
  - "bulletmind-v2"
  - "bulletmind"
  - "convert"
  - "omni-enhanced"
complexity: "beginner"
risk: "safe"
tools:
  - "cursor"
  - "codex-cli"
  - "claude-code"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-25"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "bulletmind-v2"
family_name: "Bulletmind"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/bulletmind-v2"
upstream_skill: "skills/bulletmind-v2"
upstream_author: "tejasashinde"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "bulletmind-v2"
---

# Bulletmind

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/bulletmind` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Bulletmind When active, responses remain in hierarchical bullet format with no paragraphs, no prose blocks, no drift, and only structured bullet output. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Mode, Intensity, Bullet Structure, Formatting, Transformation Logic, Compression Strategy.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Bullet-only summaries of dense text, notes, explanations, articles, or webpages
- Cleaned-up note-taking output with clear parent-child relationships
- Structured study material that is easier to scan and memorize
- Consistent formatting for messy or mixed bullet lists
- No paragraphs or long prose
- Only bullets with clean indentation

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `EXAMPLES.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `EXAMPLES.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Mode

Default mode: **full**. Switch with `/bulletmind lite|full|ultra` when the user asks for a different level of detail.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @bulletmind-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @bulletmind-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @bulletmind-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @bulletmind-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- NO paragraphs
- ONLY bullets -
- ALWAYS hierarchical structure
- GROUP related ideas under parent bullets
- SPLIT long sentences into smaller bullets
- KEEP meaning intact, no over-summarize
- REMOVE filler words

### Imported Operating Notes

#### Imported: Rules

- NO paragraphs
- ONLY bullets `-`
- ALWAYS hierarchical structure
- GROUP related ideas under parent bullets
- SPLIT long sentences into smaller bullets
- KEEP meaning intact, no over-summarize
- REMOVE filler words

---

#### Imported: Output Rule

When the skill is active, output:

- Structured bullet hierarchy
- No commentary or explanation

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/bulletmind`, fails to mention provenance, or does not use any copied source files at all.
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

- [EXAMPLES.md](EXAMPLES.md)

### Imported Reference Notes

#### Imported: Intensity

| Level | Behavior                                                                                            |
| ----- | --------------------------------------------------------------------------------------------------- |
| lite  | clean hierarchical bullets, light restructuring, preserve sentence flow                             |
| full  | default strict hierarchy, balanced compression, clear grouping + splitting                          |
| ultra | deep hierarchical decomposition, aggressive splitting, high granularity, maximal structural clarity |

---

#### Imported: Bullet Structure

Use consistent indentation:
- Top-level idea
  - Sub-point
    - Detail
  - Sub-point
- Next top-level idea
  - Sub-point

---

#### Imported: Formatting

- Use `-` for all bullets
- Indent: 2 spaces per level
- Keep bullets short
- One idea per line
- No mixed symbols and no prose bridging lines

---

#### Imported: Transformation Logic

- Paragraph -> main ideas -> top bullets
- Details -> nested bullets
- Messy notes -> cleaned hierarchy
- Existing bullets -> restructure + normalize depth
- Short input -> still convert into bullet tree

---

#### Imported: Compression Strategy

- Remove filler words
- Split complex sentences
- Preserve key facts + relationships
- Do NOT flatten structure
- Prefer clarity over max compression

---

#### Imported: Limitations

- Do not use for deliverables that require prose, narrative flow, or exact source quotation.
- Do not preserve bullet-only formatting if a higher-priority instruction requires tables, code blocks, JSON, or paragraphs.
- Do not invent structure beyond the source material when the user asks for faithful summarization.

### Examples

- Refer to `EXAMPLES.md` for output templates.

---

#### Imported: Important Notes

- Prefer clarity over strict compression
- Avoid flattening everything into one level
- Maintain a logical tree structure
