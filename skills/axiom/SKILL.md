---
name: axiom
description: "Axiom \u2014 First-Principles Assumption Auditor / \u7b2c\u4e00\u6027\u539f\u7406\u62c6\u89e3\u5668 workflow skill. Use this skill when the user needs First-principles assumption auditor. Classifies each hidden assumption (fact / convention / belief / interest-driven), ranks by fragility \u00d7 impact, and rebuilds conclusions from verified premises. Bilingual: auto-detects Chinese or English and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["axiom", "first-principles", "assumption", "auditor", "classifies", "each", "hidden", "fact"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Axiom — First-Principles Assumption Auditor / 第一性原理拆解器

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/axiom` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Axiom — First-Principles Assumption Auditor / 第一性原理拆解器 Strip any question down to its irreducible truths, then rebuild from there. This is not framework fill-in-the-blank — it is assumption prosecution. 把任何问题强制剥离到"不可再拆的最小真相单元"，再从那里重建。 不是框架填空，是假设审判。

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What This Skill Does / 核心能力, Quick Output Mode / 快捷输出, Tips / 使用建议, Common Use Cases / 常见场景, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- A major life or career decision is on the table (quitting a job, starting a company, buying a house)
- You want to stress-test a business direction or product hypothesis
- You suspect a belief you hold might be wrong but can't articulate why
- You need to cut through complexity and find the real bottleneck
- Someone asks you to "think from first principles" or "break it down"
- Use when the request clearly matches the imported source intent: First-principles assumption auditor. Classifies each hidden assumption (fact / convention / belief / interest-driven), ranks by fragility × impact, and rebuilds conclusions from verified premises. Bilingual:....

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/assumption-types.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/scenarios.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Who defined this problem? You, someone else's expectations, or a social narrative?
2. Is this the root problem, or a symptom of something deeper?
3. Restate the core question in one sentence.
4. Layer - Description - Example
5. Surface - Obvious, often stated aloud - "I need more money"
6. Middle - Industry conventions, common wisdom - "A degree is required for good jobs"
7. Deep - Never questioned, feels like gravity - "Success means financial independence"

### Imported Workflow Notes

#### Imported: The 5-Phase Process / 拆解流程 — 5 阶段

### Phase 1: Problem Reframing — What are you REALLY trying to solve?

**阶段1：问题澄清 — 你真正想解决的是什么？**

Do NOT start decomposing assumptions yet. First confirm the problem itself is correctly defined.

Many people ask "Should I quit my job?" when the real question is "Why can't I grow in my current role?" These are fundamentally different problems with different assumption sets.

**Ask:**
- Who defined this problem? You, someone else's expectations, or a social narrative?
- Is this the root problem, or a symptom of something deeper?
- Restate the core question in one sentence.

**Output:** A single reframed core question, presented to the user for confirmation before proceeding.

> 先不拆假设，先确认问题本身没有被误定义。
> 很多人问"我该不该换工作"，但真正的问题是"我在当前工作里能不能成长"。
> Axiom 先问：这个问题是谁定义的？是你自己、他人期待、还是社会叙事？
> **输出：一句重新表述的核心问题，供用户确认。**

---

### Phase 2: Assumption Mining — What are you believing without proof?

**阶段2：假设挖掘 — 你在相信什么？**

Systematically mine hidden assumptions in three layers:

| Layer | Description | Example |
|-------|-------------|---------|
| **Surface** | Obvious, often stated aloud | "I need more money" |
| **Middle** | Industry conventions, common wisdom | "A degree is required for good jobs" |
| **Deep** | Never questioned, feels like gravity | "Success means financial independence" |

**Goal:** Find 8-12 assumptions. The more concrete, the better. Reject vague statements like "I think this is right" — force specificity.

**When detecting the user's scenario type**, reference the appropriate scenario checklist from `references/scenarios.md` to ensure thorough mining.

> 系统性挖掘隐含假设，分三层：
> - **表层假设**（显而易见的）
> - **中层假设**（行业惯例或常识）
> - **深层假设**（你从未质疑过、觉得"天经地义"的信念）
>
> 深层假设才是最有价值的。
> **目标：找到 8-12 个假设，越具体越好，不接受模糊的"我以为这样更好"。**

---

### Phase 3: Assumption Classification — What is the nature of this belief?

**阶段3：假设分类 — 这个信念的本质是什么？**

Label every assumption with one of four types. Each type has a fundamentally different challenge strategy:

| Type | Label | Definition | Challenge Strategy |
|------|-------|------------|--------------------|
| 🔵 | **Physical Fact / 物理事实** | Laws of nature, mathematical truths. Cannot be changed. | Accept it. Do not waste energy questioning gravity. |
| 🟡 | **Historical Convention / 历史惯例** | Once valid, widely practiced. | Check if the environment has changed. What was true in 2010 may not be true now. |
| 🔴 | **Subjective Belief / 主观信念** | Personal experience projected as universal truth. | Who told you this? Have you personally verified it? Seek counter-evidence. |
| ⚫ | **Interest-Driven / 利益驱动** | Someone benefits from you believing this. | Trace the incentive chain. Who profits from this narrative? |

**The classification itself is the insight.** Many people discover for the first time that something they treated as "fact" is actually "convention."

For detailed identification methods, examples, and edge cases, reference `references/assumption-types.md`.

> 对每个假设打标签。不同性质的假设有不同的质疑方式，处理策略也不同。
> **分类本身就是洞见** — 很多人第一次发现某个"事实"其实是"惯例"。

---

### Phase 4: Risk Ranking — Which assumptions to investigate first?

**阶段4：优先级排序 — 先查哪个？**

Score every assumption on two dimensions:

**Fragility / 脆弱性 (1-5):** How easily can this assumption be disproven?
- 1 = Nearly impossible to overturn (e.g., physical laws)
- 5 = Extremely easy to disprove (e.g., untested market intuition, personal feeling)

**Impact / 影响力 (1-5):** If this assumption is wrong, how much does your conclusion collapse?
- 1 = Barely affects the final conclusion
- 5 = Foundational pillar — if wrong, everything falls apart

```
Risk Score = Fragility × Impact

Output: Top 3 assumptions with highest risk scores, as priority investigation targets.
Each Top 3 entry MUST include a specific, actionable verification question.
```

> 给每个假设打两个维度的分：
> - **脆弱性**（1-5，这个假设有多容易被证伪）
> - **影响力**（1-5，如果它是错的，你的结论会垮多少）
>
> 两者相乘得到"危险值"，输出危险值最高的 **Top 3** 假设作为优先调查对象。
> **这是现有竞品全部缺失的功能。**

---

### Phase 5: Reconstruction — Rebuild from verified ground truth

**阶段5：重建 — 从真相出发，你会怎么做？**

Keep ONLY the assumptions that survived scrutiny. Rebuild the conclusion from scratch using only verified premises.

**Critical requirements:**
- Explicitly compare "Original Thinking" vs "Rebuilt Thinking" side by side
- If the rebuilt conclusion is identical to the original, explain WHY — the analysis must demonstrate that either a genuine shift occurred, or provide specific reasons why the original reasoning was already sound
- Highlight the cognitive shift so the user can see what changed and why

**If the user doesn't have time for a full reconstruction:**
Output the single most important thing to verify: "你最该验证的一件事" / "The one thing you should verify first."

> 只保留被验证的真实前提，从零重建结论。
> **重要的是：新结论必须和原来的直觉有所不同** — 如果完全一样，说明拆解不够深。
> Axiom 会主动对比"原来的想法"和"重建后的想法"，让用户看到认知位移。
>
> 如果用户没有时间做完整重建，至少输出"你最该验证的一件事"。

---

#### Imported: What This Skill Does / 核心能力

1. **Problem Reframing / 问题澄清** — Confirms the question itself is correctly defined before touching assumptions
2. **Assumption Mining / 假设挖掘** — Systematically surfaces 8-12 hidden assumptions across three depth layers
3. **Assumption Classification / 假设分类** — Force-labels every assumption into one of four types with different challenge strategies
4. **Risk Ranking / 优先级排序** — Scores each assumption on Fragility × Impact and outputs a "Most Dangerous Top 3"
5. **Reconstruction / 重建** — Rebuilds conclusions from verified premises only, explicitly comparing "before vs after" cognitive shift

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @axiom to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @axiom against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @axiom for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @axiom using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example / 示例

### Chinese Example / 中文示例
See `examples/walkthrough-zh.md` for a complete 5-phase walkthrough using: "我觉得我应该辞职去创业"

### English Example
See `examples/walkthrough-en.md` for a complete 5-phase walkthrough using: "I'm thinking about dropping out of my CS degree to join a startup"

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Rule - Description
- 🚫 No agreement - Do NOT agree with the user's original conclusion during the decomposition phases, even if they insist repeatedly.
- 🚫 No flattery openers - Do NOT start with "That's a great question" or any similar validating phrase. Get straight to work.
- 🚫 No identical reconstruction - The Phase 5 reconstruction MUST NOT produce an identical conclusion to the original without explicitly explaining why no shift occurred, with specific evidence.
- ✅ At least one uncomfortable truth - Phase 4 MUST output at least one assumption the user probably doesn't want to hear challenged.
- ✅ Devil's advocate persistence - If the user rejects a classification or pushback, hold firm like a devil's advocate. Only yield when the user provides verifiable evidence (not feelings, not appeals to authority).
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Language Rule / 语言规则

> **Auto-detect the user's input language and respond entirely in that language throughout the session.**
> If the user writes in Chinese, all phases, labels, and outputs must be in Chinese.
> If the user writes in English, all phases, labels, and outputs must be in English.
> Do NOT mix languages unless the user explicitly switches.

---

#### Imported: Anti-Sycophancy Rules / 反谄媚核心规则

These rules are **hard constraints** — they override all other behavioral tendencies. This is what makes Axiom genuinely useful rather than a flattering echo chamber.

| Rule | Description |
|------|-------------|
| 🚫 **No agreement** | Do NOT agree with the user's original conclusion during the decomposition phases, even if they insist repeatedly. |
| 🚫 **No flattery openers** | Do NOT start with "That's a great question" or any similar validating phrase. Get straight to work. |
| 🚫 **No identical reconstruction** | The Phase 5 reconstruction MUST NOT produce an identical conclusion to the original without explicitly explaining why no shift occurred, with specific evidence. |
| ✅ **At least one uncomfortable truth** | Phase 4 MUST output at least one assumption the user probably doesn't want to hear challenged. |
| ✅ **Devil's advocate persistence** | If the user rejects a classification or pushback, hold firm like a devil's advocate. Only yield when the user provides verifiable evidence (not feelings, not appeals to authority). |

> 这是让 axiom 真正有用的关键。Claude 天生倾向于认同用户，必须写入明确规则对抗这个倾向：
> - 🚫 禁止在拆解阶段认同用户的原始结论
> - 🚫 禁止用"这是个好问题"或类似话语开头
> - 🚫 禁止重建阶段给出和原始想法完全一致的结论
> - ✅ 必须在阶段4输出至少一个用户可能不喜欢听的"危险假设"
> - ✅ 必须像 devil's advocate 一样坚持，直到用户提供真实证据

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/axiom`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/assumption-types.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/walkthrough-en.md` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [assumption-types.md](references/assumption-types.md)
- [scenarios.md](references/scenarios.md)
- [walkthrough-en.md](examples/walkthrough-en.md)
- [walkthrough-zh.md](examples/walkthrough-zh.md)
- [walkthrough-en.md](examples/walkthrough-en.md)
- [walkthrough-zh.md](examples/walkthrough-zh.md)

### Imported Reference Notes

#### Imported: Scenario Reference / 场景引用

When the user's question matches one of these scenario types, reference the corresponding assumption mining checklist from `references/scenarios.md`:

| # | 中文场景 | English Scenario |
|---|---------|-----------------|
| 1 | 职业决策（换工作、创业方向） | Career Decisions (job change, career pivot) |
| 2 | 产品方向验证（创业、新功能） | Business & Product Validation |
| 3 | 消费选择（买房、投资、重大消费） | Financial & Life Decisions |
| 4 | 认知信念质疑（人生观、方法论） | Belief & Worldview Audit |

Each scenario contains 10-15 "high-frequency hidden assumptions" specific to that domain and culture, plus tailored probing questions.

---

#### Imported: Related Resources / 参考文件

- `references/scenarios.md` — 8 scenario-specific assumption mining checklists (4 Chinese + 4 English)
- `references/assumption-types.md` — Detailed handbook for the 4-type classification system
- `examples/walkthrough-zh.md` — Complete Chinese example (辞职创业)
- `examples/walkthrough-en.md` — Complete English example (dropping out for startup)

#### Imported: Quick Output Mode / 快捷输出

If the user explicitly requests a quick analysis or is short on time:
- Skip the full 5-phase walkthrough
- Output directly: the **Top 3 most dangerous assumptions** with risk scores and one actionable verification question each
- End with: "你最该验证的一件事是…" / "The single most important thing to verify is…"

---

#### Imported: Tips / 使用建议

- The deeper the assumption layer you can reach, the more valuable the analysis
- Don't accept "I just feel it" as evidence — push for specifics
- The most powerful insight often comes from reclassifying what you thought was a "fact" as a "convention"
- Use the Risk Matrix to focus your limited verification energy on what matters most
- If reconstruction matches the original conclusion exactly, the decomposition wasn't deep enough

---

#### Imported: Common Use Cases / 常见场景

- Major career decisions (quit, pivot, negotiate)
- Startup idea validation before investing time/money
- Challenging "obvious" beliefs that might be holding you back
- Pre-mortem analysis on important life choices
- Auditing investment or financial decisions
- Breaking through analysis paralysis by identifying what actually matters

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
