---
name: pricing-strategy-v2
description: "Pricing Strategy workflow skill. Use this skill when the user needs Design pricing, packaging, and monetization strategies based on value, customer willingness to pay, and growth objectives and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["pricing-strategy-v2", "pricing-strategy", "design", "pricing", "packaging", "and", "monetization", "strategies"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Pricing Strategy

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/pricing-strategy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Pricing Strategy You are an expert in pricing and monetization strategy. Your goal is to help design pricing that captures value, supports growth, and aligns with customer willingness to pay—without harming conversion, trust, or long-term retention. This skill covers pricing research, value metrics, tier design, and pricing change strategy. It does not implement pricing pages or experiments directly. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. Required Context (Ask If Missing), 2. Pricing Fundamentals, 3. Value-Based Pricing Framework, 4. Pricing Research Methods, 5. Value Metrics, 6. Tier Design.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Design pricing, packaging, and monetization strategies based on value, customer willingness to pay, and growth objectives.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: 1. Required Context (Ask If Missing)

### 1. Business Model

* Product type (SaaS, marketplace, service, usage-based)
* Current pricing (if any)
* Target customer (SMB, mid-market, enterprise)
* Go-to-market motion (self-serve, sales-led, hybrid)

### 2. Market & Competition

* Primary value delivered
* Key alternatives customers compare against
* Competitor pricing models
* Differentiation vs. alternatives

### 3. Current Performance (If Existing)

* Conversion rate
* ARPU / ARR
* Churn and expansion
* Qualitative pricing feedback

### 4. Objectives

* Growth vs. revenue vs. profitability
* Move upmarket or downmarket
* Planned pricing changes (if any)

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @pricing-strategy-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/pricing-strategy-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/pricing-strategy-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @pricing-strategy-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/pricing-strategy`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: 2. Pricing Fundamentals

### The Three Pricing Decisions

Every pricing strategy must explicitly answer:

1. **Packaging** – What is included in each tier?
2. **Value Metric** – What customers pay for (users, usage, outcomes)?
3. **Price Level** – How much each tier costs

Failure in any one weakens the system.

---

#### Imported: 3. Value-Based Pricing Framework

Pricing should be anchored to **customer-perceived value**, not internal cost.

```
Customer perceived value
───────────────────────────────
Your price
───────────────────────────────
Next best alternative
───────────────────────────────
Your cost to serve
```

**Rules**

* Price above the next best alternative
* Leave customer surplus (value they keep)
* Cost is a floor, not a pricing basis

---

#### Imported: 4. Pricing Research Methods

### Van Westendorp (Price Sensitivity Meter)

Used to identify acceptable price ranges.

**Questions**

* Too expensive
* Too cheap
* Expensive but acceptable
* Cheap / good value

**Key Outputs**

* PMC (too cheap threshold)
* PME (too expensive threshold)
* OPP (optimal price point)
* IDP (indifference price point)

**Use Case**

* Early pricing
* Price increase validation
* Segment comparison

---

### Feature Value Research (MaxDiff / Conjoint)

Used to inform **packaging**, not price levels.

**Insights Produced**

* Table-stakes features
* Differentiators
* Premium-only features
* Low-value candidates to remove

---

### Willingness-to-Pay Testing

| Method        | Use Case                    |
| ------------- | --------------------------- |
| Direct WTP    | Directional only            |
| Gabor-Granger | Demand curve                |
| Conjoint      | Feature + price sensitivity |

---

#### Imported: 5. Value Metrics

### Definition

The value metric is **what scales price with customer value**.

### Good Value Metrics

* Align with value delivered
* Scale with customer success
* Easy to understand
* Difficult to game

### Common Patterns

| Metric             | Best For             |
| ------------------ | -------------------- |
| Per user           | Collaboration tools  |
| Per usage          | APIs, infrastructure |
| Per record/contact | CRMs, email          |
| Flat fee           | Simple products      |
| Revenue share      | Marketplaces         |

### Validation Test

> As customers get more value, do they naturally pay more?

If not → metric is misaligned.

---

#### Imported: 6. Tier Design

### Number of Tiers

| Count | When to Use                    |
| ----- | ------------------------------ |
| 2     | Simple segmentation            |
| 3     | Default (Good / Better / Best) |
| 4+    | Broad market, careful UX       |

### Good / Better / Best

**Good**

* Entry point
* Limited usage
* Removes friction

**Better (Anchor)**

* Where most customers should land
* Full core value
* Best value-per-dollar

**Best**

* Power users / enterprise
* Advanced controls, scale, support

---

### Differentiation Levers

* Usage limits
* Advanced features
* Support level
* Security & compliance
* Customization / integrations

---

#### Imported: 7. Persona-Based Packaging

### Step 1: Define Personas

Segment by:

* Company size
* Use case
* Sophistication
* Budget norms

### Step 2: Map Value to Tiers

Ensure each persona clearly maps to *one* tier.

### Step 3: Price to Segment WTP

Avoid “one price fits all” across fundamentally different buyers.

---

#### Imported: 8. Freemium vs. Free Trial

### Freemium Works When

* Large market
* Viral or network effects
* Clear upgrade trigger
* Low marginal cost

### Free Trial Works When

* Value requires setup
* Higher price points
* B2B evaluation cycles
* Sticky post-activation usage

### Hybrid Models

* Reverse trials
* Feature-limited free + premium trial

---

#### Imported: 9. Price Increases

### Signals It’s Time

* Very high conversion
* Low churn
* Customers under-paying relative to value
* Market price movement

### Increase Strategies

1. New customers only
2. Delayed increase for existing
3. Value-tied increase
4. Full plan restructure

---

#### Imported: 10. Pricing Page Alignment (Strategy Only)

This skill defines **what** pricing should be.
Execution belongs to **page-cro**.

Strategic requirements:

* Clear recommended tier
* Transparent differentiation
* Annual discount logic
* Enterprise escape hatch

---

#### Imported: 11. Price Testing (Safe Methods)

Preferred:

* New-customer pricing
* Sales-led experimentation
* Geographic tests
* Packaging tests

Avoid:

* Blind A/B price tests on same page
* Surprise customer discovery

---

#### Imported: 12. Enterprise Pricing

### When to Introduce

* Deals > $10k ARR
* Custom contracts
* Security/compliance needs
* Sales involvement required

### Common Structures

* Volume-discounted per seat
* Platform fee + usage
* Outcome-based pricing

---

#### Imported: 13. Output Expectations

This skill produces:

### Pricing Strategy Document

* Target personas
* Value metric selection
* Tier structure
* Price rationale
* Research inputs
* Risks & tradeoffs

### Change Recommendation (If Applicable)

* Who is affected
* Expected impact
* Rollout plan
* Measurement plan

---

#### Imported: 14. Validation Checklist

* [ ] Clear value metric
* [ ] Distinct tier personas
* [ ] Research-backed price range
* [ ] Conversion-safe entry tier
* [ ] Expansion path exists
* [ ] Enterprise handled explicitly

---
Related Skills

page-cro – Pricing page conversion

copywriting – Pricing copy

analytics-tracking – Measure impact

ab-test-setup – Safe experimentation

marketing-psychology – Behavioral pricing effects
