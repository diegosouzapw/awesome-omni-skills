---
name: ai-md
description: "AI.MD v4 \u2014 The Complete AI-Native Conversion System workflow skill. Use this skill when the user needs Convert human-written CLAUDE.md into AI-native structured-label format. Battle-tested across 4 models. Same rules, fewer tokens, higher compliance and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["ai-md", "convert", "human-written", "claude", "ai-native", "structured-label", "format", "battle-tested"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# AI.MD v4 — The Complete AI-Native Conversion System

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ai-md` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# AI.MD v4 — The Complete AI-Native Conversion System

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What Is AI.MD?, Special Techniques Discovered During Battle-Testing, AI-Native Template, Anti-Patterns, Real-World Results, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when your CLAUDE.md is long but AI still ignores your rules
- Use when token usage is too high from verbose system instructions
- Use when you want to optimize any LLM system prompt for compliance
- Use when migrating rules between AI tools (Claude, Codex, Gemini, Grok)
- Is this a TRIGGER? (What input activates this behavior?)
- Is this an ACTION? (What should the AI do?)

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

1. Backup: cp ~/.claude/CLAUDE.md ~/.claude/CLAUDE.md.bak-pre-distill
2. Phase 1-5: Run the full conversion process above
3. Phase 6: Run multi-model test (minimum 2 models, 8 questions)
4. Report: Show before/after scores
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Why It Works: How LLMs Actually Process Instructions

LLMs don't "read" — they **attend**. Understanding this changes everything.

### Mechanism 1: Attention Splitting

When multiple rules share one line, the model's attention distributes across all tokens equally.
Each rule gets a fraction of the attention weight. Some rules get lost.

When each rule has its own line, the model processes it as a distinct unit.
Full attention weight on each rule.

```
# ONE LINE = attention splits 5 ways (some rules drop to near-zero weight)
EVIDENCE: no-fabricate no-guess | 禁用詞:應該是/可能是 → 先拿數據 | Read/Grep→行號 curl→數據 | "好像"/"覺得"→自己先跑test | guess=shame-wall

# FIVE LINES = each rule gets full attention
EVIDENCE:
  core: no-fabricate | no-guess | unsure=say-so
  banned: 應該是/可能是/感覺是/推測 → 先拿數據
  proof: all-claims-need(data/line#/source) | Read/Grep→行號 | curl→數據
  hear-doubt: "好像"/"覺得" → self-test(curl/benchmark) → 禁反問user
  violation: guess → shame-wall
```

### Mechanism 2: Zero-Inference Labels

Natural language forces the model to INFER meaning from context.
Labels DECLARE meaning explicitly. No inference needed = no misinterpretation.

```
# AI must infer: what does (防搞混) modify? what does 例外 apply to?
GATE-1: 收到任務→先用一句話複述(防搞混)(長對話中每個新任務都重新觸發) | 例外: signals命中「處理一下」=直接執行

# AI reads labels directly: trigger→action→exception. Zero ambiguity.
GATE-1 複述:
  trigger: new-task
  action: first-sentence="你要我做的是___"
  persist: 長對話中每個新任務都重新觸發
  exception: signal=處理一下 → skip
  yields-to: GATE-3
```

Key insight: Labels like `trigger:` `action:` `exception:` work across ALL languages.
The model doesn't need to parse Chinese/Japanese/English grammar to understand structure.
**Labels are the universal language between humans and AI.**

### Mechanism 3: Semantic Anchoring

Labeled sub-items create **matchable tags**. When a user's input contains a keyword,
the model matches it directly to the corresponding label — like a hash table lookup
instead of a full-text search.

```
# BURIED: AI scans the whole sentence, might miss the connection
加新功能→第一句問schema | 新增API/endpoint=必確認health-check.py覆蓋

# ANCHORED: label "new-api:" directly matches user saying "加個 API"
MOAT:
  new-feature: 第一句問schema/契約/關聯
  new-api: 必確認health-check.py覆蓋(GATE-5)
```

**Real proof:** This specific technique fixed a test case that failed 5 consecutive times
across all models. The label `new-api:` raised Codex T5 from ❌→✅ on first try.

---

#### Imported: Two-Stage Workflow

### Stage 1: PREVIEW — Measure, Don't Touch

```bash
echo "=== Current Token Burn ==="
claude_md=$(wc -c < ~/.claude/CLAUDE.md 2>/dev/null || echo 0)
rules=$(cat ~/.claude/rules/*.md 2>/dev/null | wc -c || echo 0)
total=$((claude_md + rules))
tokens=$((total / 4))
echo "CLAUDE.md:     $claude_md bytes"
echo "rules/*.md:    $rules bytes"
echo "Total:         $total bytes ≈ $tokens tokens/turn"
echo "50-turn session: ≈ $((tokens * 50)) tokens on instructions alone"
```

Then: Read all auto-loaded files. Identify redundancy, prose overhead, and duplicate rules.

**Ask user before proceeding: "Want to distill?"**

### Stage 2: DISTILL — Convert with Safety Net

1. **Backup**: `cp ~/.claude/CLAUDE.md ~/.claude/CLAUDE.md.bak-pre-distill`
2. **Phase 1-5**: Run the full conversion process above
3. **Phase 6**: Run multi-model test (minimum 2 models, 8 questions)
4. **Report**: Show before/after scores

```
=== AI.MD Conversion Complete ===

Before: {old} bytes ({old_score} compliance)
After:  {new} bytes ({new_score} compliance)
Saved:  {percent}% bytes, +{delta} compliance points

Backup: ~/.claude/CLAUDE.md.bak-pre-distill
Restore: cp ~/.claude/CLAUDE.md.bak-pre-distill ~/.claude/CLAUDE.md
```

---

#### Imported: What Is AI.MD?

AI.MD is a methodology for converting human-written `CLAUDE.md` (or any LLM system instructions)
into a structured-label format that AI models follow more reliably, using fewer tokens.

**The paradox we proved:** Adding more rules in natural language DECREASES compliance.
Converting the same rules to structured format RESTORES and EXCEEDS it.

```
Human prose (6 rules, 1 line)  → AI follows 4 of them
Structured labels (6 rules, 6 lines) → AI follows all 6
Same content. Different format. Different results.
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-md to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ai-md against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ai-md for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ai-md using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ai-md`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Special Techniques Discovered During Battle-Testing

### Technique 1: Bilingual Label Strategy

Labels in English, output strings in the user's language.
English labels are shorter AND more universally understood by all models.
But the actual text the AI produces must stay in the user's language.

```
action: first-sentence="你要我做的是___"    ← AI outputs Chinese
format: must-be-line-1                      ← structural constraint in English
banned: 應該是/可能是                        ← forbidden words stay in original language
```

**Why this works:** English label vocabulary (`trigger`, `action`, `exception`) maps directly
to concepts in every model's training data. Chinese grammar labels (觸發條件, 執行動作, 例外情況)
are less standardized across models.

### Technique 2: State Machine Gates

Instead of treating rules as a flat list, model them as a **state machine**:
- Each gate has a `trigger` (input state)
- Each gate has an `action` (transition)
- Gates have `priority` (which fires first when multiple match)
- Gates have `yields-to` (explicit conflict resolution)

This gives AI a clear execution model:
```
Input arrives → Check GATE-3 first (highest priority) → Check GATE-1 → Check GATE-2 → ...
```

Instead of:
```
Input arrives → Read all rules → Try to figure out which one applies → Maybe miss one
```

### Technique 3: XML Section Tags for Semantic Boundaries

Using `<gates>`, `<rules>`, `<rhythm>`, `<conn>` as section delimiters
creates hard boundaries that prevent rule-bleed (where the model confuses
which section a rule belongs to).

```xml
<gates label="硬性閘門 | 優先序: gates>rules>rhythm | 缺一項=STOP">
...gates here...
</gates>

<rules>
...rules here...
</rules>
```

The `label` attribute on the opening tag serves as a section-level instruction:
"these are hard gates, this is their priority, missing = stop"

### Technique 4: Cross-Reference Instead of Duplicate

When the same concept appears in multiple rules, DON'T repeat it.
Use a cross-reference label.

```
# BAD: health-check mentioned in 3 places
GATE-5: ...check health-check.py...
MOAT: ...must check health-check.py...
SCOPE: ...verify health-check.py exists...

# GOOD: single source of truth + cross-reference
GATE-5 驗收:
  checks:
    新增API → 確認health-check.py覆蓋

MOAT:
  new-api: 必確認health-check.py覆蓋(GATE-5)    ← cross-ref, not duplicate
```

### Technique 5: The "What Not Why" Principle

Delete ALL text that exists to explain WHY a rule exists.
AI needs WHAT to do, not WHY.

```
# DELETE these human explanations:
(防搞混)                     → motivation
(不是大爆破,是每次順手一點)    → metaphor
(想清楚100倍後才做現在的)     → backstory
(因為用戶是非工程師)          → justification

# KEEP only the actionable instruction:
action: first-sentence="你要我做的是___"
refactor: 同區塊連續第3次修改 → extract
```

Every deleted explanation saves tokens AND removes noise that could confuse the model
about what it should actually DO.

---

#### Imported: AI-Native Template

```xml
# PROJECT-NAME | lang:xx | for-AI-parsing | optimize=results-over-format

<user>
identity, tone, signals, decision-style (key: value pairs)
</user>

<gates label="硬性閘門 | 優先序: gates>rules>rhythm | 缺一項=STOP">

GATE-1 name:
  trigger: ...
  action: ...
  exception: ...
  yields-to: ...

GATE-2 name:
  trigger: ...
  action: ...
  policy: ...

</gates>

<rules>

RULE-NAME:
  core: ...
  banned: ...
  hear-X: ... → action
  violation: ...

</rules>

<rhythm>
workflow patterns as key: value pairs
</rhythm>

<conn>
connection strings (keep exact — NEVER compress facts/credentials/URLs)
</conn>

<ref label="on-demand Read only">
file-path → purpose
</ref>

<learn>
how system evolves over time
</learn>
```

---

#### Imported: Anti-Patterns

| Don't | Do Instead | Why |
|-------|------------|-----|
| Human prose in CLAUDE.md | Structured labels | Prose requires inference; labels are direct |
| Multiple rules on one line | One concept per line | Attention splits across dense lines |
| Parenthetical explanations | Remove them | AI needs "what" not "why" |
| Same rule in 3 places | Single source + cross-ref | Duplicates can diverge and confuse |
| 20+ flat rules | 5-7 domains with sub-items | Hierarchy helps model organize behavior |
| Compress without testing | Validate with 2+ models | What works for Claude might fail for GPT |
| Assume format doesn't matter | Test it — it does | Same content, different format = different compliance |
| Chinese-only labels | English labels + native output | English labels are more universal across models |
| Flat rule list | State machine with priorities | Clear execution order prevents missed rules |

---

#### Imported: Real-World Results

Tested 2026-03, washinmura.jp CLAUDE.md, 5 rounds, 4 models:

| Round | Change | Codex (GPT-5.3) | Gemini 2.5 Pro | Claude Opus 4.6 |
|-------|--------|-----------------|----------------|-----------------|
| R1 (baseline prose) | — | 8/8 | 7/8 | 8/8 |
| R2 (added rules) | +gates +examples | 7/8 | 6/8 | — |
| R3 (refined prose) | +exceptions +non-triggers | 6/8 | 6.5/8 | — |
| R4 (AI-native convert) | structured labels | **8/8** | **7/8** | **8/8** |

Key findings:
1. **More prose rules = worse compliance** (R1→R3: scores dropped as rules grew)
2. **Structured format = restored + exceeded** (R4: back to max despite more rules)
3. **Cross-model consistency**: Format that works for one model works for all (except Grok)
4. **Semantic anchoring**: The `new-api:` label fix was the single most impactful change

**The uncomfortable truth: Your beautiful, carefully-written CLAUDE.md
might be HURTING your AI's performance. Structure > Prose. Always.**

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
