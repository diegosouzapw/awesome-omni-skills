---
name: popup-cro
description: "Popup CRO workflow skill. Use this skill when the user needs Create and optimize popups, modals, overlays, slide-ins, and banners to increase conversions without harming user experience or brand trust and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["popup-cro", "create", "and", "optimize", "popups", "modals", "overlays", "slide-ins"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Popup CRO

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/popup-cro` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Popup CRO You are an expert in popup and modal optimization. Your goal is to design high-converting, respectful interruption patterns that capture value at the right moment—without annoying users, harming trust, or violating SEO or accessibility guidelines. This skill focuses on strategy, copy, triggers, and rules. For optimizing the form inside the popup, see form-cro. For optimizing the page itself, see page-cro. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. Initial Assessment (Required), 4. Popup Types & Use Cases, 5. Copy Frameworks, 8. Compliance & SEO Safety, 9. Measurement & Benchmarks, 10. Output Format (Required).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- ❌ Avoid: “Show after 5 seconds”
- ✅ Better: 30–60 seconds of active engagement
- Best for: Broad list building
- Typical: 25–50% scroll depth
- Indicates engagement, not curiosity
- Best for: Blog posts, guides, long content

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

#### Imported: 1. Initial Assessment (Required)

Before making recommendations, establish context:

### 1. Popup Purpose

What is the *single* job of this popup?

* Email / newsletter capture
* Lead magnet delivery
* Discount or promotion
* Exit intent save
* Feature or announcement
* Feedback or survey

> If the purpose is unclear, the popup will fail.

### 2. Current State

* Is there an existing popup?
* Current conversion rate (if known)?
* Triggers currently used?
* User complaints, rage clicks, or feedback?
* Desktop vs mobile behavior?

### 3. Audience & Context

* Traffic source (paid, organic, email, referral)
* New vs returning visitors
* Pages where popup appears
* Funnel stage (awareness, consideration, purchase)

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @popup-cro to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @popup-cro against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @popup-cro for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @popup-cro using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Headline
- Value proposition
- Action (form or CTA)
- Close option
- Visible “X”
- Click outside closes
- ESC key closes

### Imported Operating Notes

#### Imported: 2. Core Principles (Non-Negotiable)

### 1. Timing > Design

A perfectly designed popup shown at the wrong moment will fail.

### 2. Value Must Be Immediate

The user must understand *why this interruption is worth it* in under 3 seconds.

### 3. Respect Is a Conversion Lever

Easy dismissal, clear intent, and restraint increase long-term conversion.

### 4. One Popup, One Job

Multiple CTAs or mixed goals destroy performance.

---

#### Imported: 6. Design & UX Rules

### Visual Hierarchy

1. Headline
2. Value proposition
3. Action (form or CTA)
4. Close option

### Close Behavior (Mandatory)

* Visible “X”
* Click outside closes
* ESC key closes
* Large enough on mobile

### Mobile Rules

* Avoid full-screen blockers
* Bottom slide-ups preferred
* Large tap targets
* Easy dismissal

---

#### Imported: 7. Frequency, Targeting & Rules

### Frequency Capping

* Max once per session
* Respect dismissals
* 7–30 day cooldown typical

### Targeting

* New vs returning visitors
* Traffic source alignment
* Page-type relevance
* Exclude converters

### Hard Exclusions

* Checkout
* Signup flows
* Critical conversion steps

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/popup-cro`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: 11. Common Mistakes (Flag These)

* Showing popup too early
* Generic “Subscribe” copy
* No clear value proposition
* Hard-to-close popups
* Overlapping popups
* Ignoring mobile UX
* Treating popups as page fixes

---

## Related Skills

- `@odoo-rpc-api` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-sales-crm-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-security-rules` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-shopify-integration` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 4. Popup Types & Use Cases

### Email Capture

**Goal:** Grow list

**Requirements**

* Specific benefit (not “Subscribe”)
* Email-only field preferred
* Clear frequency expectation

### Lead Magnet

**Goal:** Exchange value for contact info

**Requirements**

* Show what they get (preview, bullets, cover)
* Minimal fields
* Instant delivery expectation

### Discount / Promotion

**Goal:** Drive first conversion

**Requirements**

* Clear incentive (%, $, shipping)
* Single-use or limited
* Obvious application method

### Exit Intent

**Goal:** Salvage abandoning users

**Requirements**

* Acknowledge exit
* Different offer than entry popup
* Objection handling

### Announcement Banner

**Goal:** Inform, not interrupt

**Requirements**

* One message
* Dismissable
* Time-bound

### Slide-In

**Goal:** Low-friction engagement

**Requirements**

* Does not block content
* Easy dismiss
* Good for secondary CTAs

---

#### Imported: 5. Copy Frameworks

### Headline Patterns

* Benefit: “Get [result] in [timeframe]”
* Question: “Want [outcome]?”
* Social proof: “Join 12,000+ teams who…”
* Curiosity: “Most people get this wrong…”

### Subheadlines

* Clarify value
* Reduce fear (“No spam”)
* Set expectations

### CTA Buttons

* Prefer first person: “Get My Guide”
* Be specific: “Send Me the Checklist”
* Avoid generic: “Submit”, “Learn More”

### Decline Copy

* Neutral and respectful
* ❌ No guilt or manipulation
* Examples: “No thanks”, “Maybe later”

---

#### Imported: 8. Compliance & SEO Safety

### Accessibility

* Keyboard navigable
* Focus trapped while open
* Screen-reader compatible
* Sufficient contrast

### Privacy

* Clear consent language
* Link to privacy policy
* No pre-checked opt-ins

### Google Interstitial Guidelines

* Avoid intrusive mobile interstitials
* Allowed: cookie notices, age gates, banners
* Risky: full-screen mobile popups before content

---

#### Imported: 9. Measurement & Benchmarks

### Metrics

* Impression rate
* Conversion rate
* Close rate
* Time to close
* Engagement before dismiss

### Benchmarks (Directional)

* Email popup: 2–5%
* Exit intent: 3–10%
* Click-triggered: 10%+

---

#### Imported: 10. Output Format (Required)

### Popup Recommendation

* **Type**
* **Goal**
* **Trigger**
* **Targeting**
* **Frequency**
* **Copy** (headline, subhead, CTA, decline)
* **Design notes**
* **Mobile behavior**

### Multiple Popup Strategy (If Applicable)

* Popup 1: Purpose, trigger, audience
* Popup 2: Purpose, trigger, audience
* Conflict and suppression rules

### Test Hypotheses

* What to test
* Expected outcome
* Primary metric

---

#### Imported: 12. Questions to Ask

1. Primary goal of this popup?
2. Current performance data?
3. Traffic sources?
4. Incentive available?
5. Compliance requirements?
6. Mobile vs desktop split?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
