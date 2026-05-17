---
name: rich-elicitation-v2
description: "Rich Elicitation Skill workflow skill. Use this skill when the user needs Asks clarifying questions in multiple rounds before starting ambiguous tasks. Fires when 2+ task dimensions each have 3+ viable answers and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["elicitation", "clarifying-questions", "ambiguity", "multi-round", "prompt-engineering", "rich-elicitation-v2", "rich-elicitation", "asks"]
complexity: advanced
risk: safe
tools: ["antigravity", "codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "abubakar"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Rich Elicitation Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/rich-elicitation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Rich Elicitation Skill

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security & Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a request has 2 or more dimensions that are ambiguous and each has 3+ viable options
- Use when the user's likely intent is unclear across scope, audience, tone, format, or strategy
- Use when an early answer would meaningfully change the structure or direction of the output
- Use when working on writing, planning, design, recommendations, or creative tasks with open-ended scope
- Use when a Round 1 answer unlocks a new set of meaningful choices that need resolving before proceeding
- Simple factual lookups or math

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

This skill governs how Antigravity resolves task ambiguity before starting work. When a user's request has too many unanswered dimensions — each with several reasonable answers — Antigravity asks targeted clarifying questions across multiple rounds rather than silently picking defaults.

The goal is a correct first draft, not a generic answer that requires three revision cycles. Rounds are capped at three; anything still unclear after Round 3 gets a stated assumption and Antigravity proceeds.

---

#### Imported: How It Works

### Step 1: Run the Trigger Checklist

Before starting any task, mentally check how many of these apply:

| Signal | Action |
|---|---|
| Multiple valid output formats | Ask about format |
| Audience is unknown | Ask about audience |
| Tone is ambiguous | Ask about tone |
| Scope could be narrow or broad | Ask about depth/length |
| Technical vs. simple treatment unclear | Ask about technical level |
| Multiple strategic directions exist | Ask which direction |
| User's constraints are unknown | Ask about constraints |

**If 2+ rows apply → trigger this skill.**

### Step 2: Ask Round 1 Questions

Ask up to 3 questions using `ask_user_input_v0`. Group related questions in a single call. Lead with 1–2 sentences explaining why you're asking. Mark one option per question as **(Recommended)**.

### Step 3: Re-run the Checklist

After Round 1 answers, re-run the checklist on what's still unresolved. If 2+ rows still apply, run Round 2. Otherwise, proceed.

### Step 4: Run Follow-up Rounds (if needed)

| Round | Purpose | Max questions |
|---|---|---|
| Round 1 | Blocking questions — shape the entire output | 3 |
| Round 2 | Follow-ups unlocked by Round 1 answers | 3 |
| Round 3 | Final details — use sparingly | 2 |

Transition between rounds naturally. Don't announce "Round 2" mechanically. Use phrasing like:
> "Got it — that helps a lot. One more thing before I start:"

### Step 5: Proceed

After Round 3 (or earlier, if enough context exists), state any remaining assumptions briefly and begin the task.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @rich-elicitation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @rich-elicitation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @rich-elicitation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @rich-elicitation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Multi-Round — Investor Pitch Deck

**User:** "Help me create a presentation for my project."

**Round 1** — Three blocking questions:

```
Framing: "This could go a lot of different ways. Quick questions before I start:"

Q1: Who is the audience?
  - Internal team / colleagues
  - External clients or partners
  - Investors or stakeholders (Recommended)
  - General / public audience

Q2: What's the primary goal?
  - Inform and update
  - Persuade and drive a decision (Recommended)
  - Teach or explain a concept
  - Pitch and raise funding

Q3: How much content do you already have?
  - Starting from scratch
  - Rough notes or an outline (Recommended)
  - Full draft — just needs polish
  - Previous version to update
```

*User answers: Investors | Pitch | Rough notes → Round 2 is warranted.*

**Round 2** — Unlocked by Round 1:

```
Framing: "Perfect — investor pitch it is. A couple more things:"

Q1: What stage is this raise?
  - Pre-seed / idea stage
  - Seed round (Recommended)
  - Series A or later
  - Strategic partnership / grant

Q2: How long should the deck be?
  - Short and punchy, 8–10 slides (Recommended)
  - Standard, 12–15 slides
  - Comprehensive, 20+ slides
```

*No Round 3 needed — proceed.*

---

### Example 2: Single-Round — Business Email

**User:** "Write a business email to follow up on a proposal."

**Round 1 only:**

```
Framing: "Two quick questions to nail the tone:"

Q1: What tone should this email strike?
  - Formal and professional (Recommended)
  - Friendly but direct
  - Urgent and firm
  - Warm and relationship-focused

Q2: What's the primary goal?
  - Request action / get a response (Recommended)
  - Share information only
  - Repair or maintain the relationship
  - Negotiate or push back
```

*Enough context. No Round 2 needed.*

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Always mark one option per question as (Recommended)
- ✅ Lead with a 1–2 sentence framing before the question widget
- ✅ Group up to 3 related questions in a single askuserinput_v0 call
- ✅ Re-evaluate after each round — stop as soon as you have enough context
- ✅ Use singleselect for mutually exclusive choices, multiselect when combinations are valid
- ✅ State remaining assumptions explicitly before proceeding after Round 3
- ❌ Don't ask 6 separate question calls when 2 grouped calls would do

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Always mark one option per question as **(Recommended)**
- ✅ Lead with a 1–2 sentence framing before the question widget
- ✅ Group up to 3 related questions in a single `ask_user_input_v0` call
- ✅ Re-evaluate after each round — stop as soon as you have enough context
- ✅ Use `single_select` for mutually exclusive choices, `multi_select` when combinations are valid
- ✅ State remaining assumptions explicitly before proceeding after Round 3
- ❌ Don't ask 6 separate question calls when 2 grouped calls would do
- ❌ Don't mark two options as Recommended in the same question
- ❌ Don't use vague option labels like "Other" or "It depends" without elaborating
- ❌ Don't mechanically label rounds in the UI ("Round 1:", "Round 2:")
- ❌ Don't run a follow-up round for minor details that have safe defaults

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/rich-elicitation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@production-audit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@production-scheduling-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@quality-nonconformance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@react-best-practices-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- This skill does not validate whether the user's answers are internally consistent — it trusts them as given.
- Round structure is a guideline, not a rigid contract; judgment is required on when to stop.
- Works best with `ask_user_input_v0` — in environments without that tool, question quality may degrade.
- Does not handle tasks where ambiguity can only be resolved by fetching external information (e.g., reading a file the user hasn't uploaded).
- Not designed for real-time or high-latency-sensitive workflows where any question overhead is unacceptable.

---

#### Imported: Security & Safety Notes

This skill is pure reasoning — it issues no shell commands, reads no files, makes no network requests, and mutates no state. Risk level is `none`.

No `npm run security:docs` review is required for this skill.

---

#### Imported: Common Pitfalls

- **Problem:** Antigravity asks one good question, gets an answer, then proceeds without checking if new unknowns emerged.
  **Solution:** Always re-run the trigger checklist mentally after each round before deciding to proceed.

- **Problem:** All options in a question look equally valid so Antigravity marks none as Recommended.
  **Solution:** Pick the option that works for most users or is lowest-risk and mark it. "No preference" is rarely true.

- **Problem:** Antigravity runs 4+ rounds trying to eliminate every unknown.
  **Solution:** Hard cap at 3 rounds. After Round 3, state assumptions and proceed.

- **Problem:** Round 2 questions cover the same category as Round 1 (e.g., tone again).
  **Solution:** Each round should unlock new dimensions, not re-ask resolved ones.

---
