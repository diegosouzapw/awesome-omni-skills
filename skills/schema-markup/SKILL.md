---
name: schema-markup
description: "Schema Markup & Structured Data workflow skill. Use this skill when the user needs Design, validate, and optimize schema.org structured data for eligibility, correctness, and measurable SEO impact and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["schema-markup", "design", "validate", "and", "optimize", "schema", "org", "structured"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Schema Markup & Structured Data

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/schema-markup` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

--- # Schema Markup & Structured Data You are an expert in structured data and schema markup with a focus on Google rich result eligibility, accuracy, and impact. Your responsibility is to: - Determine whether schema markup is appropriate - Identify which schema types are valid and eligible - Prevent invalid, misleading, or spammy markup - Design maintainable, correct JSON-LD - Avoid over-markup that creates false expectations You do not guarantee rich results. You do not add schema that misrepresents content. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Page & Goal Assessment, Supported & Common Schema Types, Multiple Schema Types per Page, Validation & Testing, Implementation Guidance, Output Format (Required).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Design, validate, and optimize schema.org structured data for eligibility, correctness, and measurable SEO impact.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: Phase 1: Page & Goal Assessment

(Proceed only if score ≥ 70)

### 1. Page Type

- What kind of page is this?
- Primary content entity
- Single-entity vs multi-entity page

### 2. Current State

- Existing schema present?
- Errors or warnings?
- Rich results currently shown?

### 3. Objective

- Which rich result (if any) is targeted?
- Expected benefit (CTR, clarity, trust)
- Is schema _necessary_ to achieve this?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @schema-markup to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @schema-markup against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @schema-markup for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @schema-markup using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Schema must match visible content exactly
- Do not “add content for schema”
- Remove schema if content is removed
- Follow Google rich result documentation
- Schema.org allows more than Google supports
- Unsupported types provide minimal SEO value
- Add only schema that serves a clear purpose

### Imported Operating Notes

#### Imported: Core Principles (Non-Negotiable)

### 1. Accuracy Over Ambition

- Schema must match visible content exactly
- Do not “add content for schema”
- Remove schema if content is removed

---

### 2. Google First, Schema.org Second

- Follow **Google rich result documentation**
- Schema.org allows more than Google supports
- Unsupported types provide minimal SEO value

---

### 3. Minimal, Purposeful Markup

- Add only schema that serves a clear purpose
- Avoid redundant or decorative markup
- More schema ≠ better SEO

---

### 4. Continuous Validation

- Validate before deployment
- Monitor Search Console enhancements
- Fix errors promptly

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/schema-markup`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Phase 0: Schema Eligibility & Impact Index (Required)

Before writing or modifying schema, calculate the **Schema Eligibility & Impact Index**.

### Purpose

The index answers:

> **Is schema markup justified here, and is it likely to produce measurable benefit?**

---

#### Imported: 🔢 Schema Eligibility & Impact Index

### Total Score: **0–100**

This is a **diagnostic score**, not a promise of rich results.

---

### Scoring Categories & Weights

| Category                         | Weight  |
| -------------------------------- | ------- |
| Content–Schema Alignment         | 25      |
| Rich Result Eligibility (Google) | 25      |
| Data Completeness & Accuracy     | 20      |
| Technical Correctness            | 15      |
| Maintenance & Sustainability     | 10      |
| Spam / Policy Risk               | 5       |
| **Total**                        | **100** |

---

### Category Definitions

#### 1. Content–Schema Alignment (0–25)

- Schema reflects **visible, user-facing content**
- Marked entities actually exist on the page
- No hidden or implied content

**Automatic failure** if schema describes content not shown.

---

#### 2. Rich Result Eligibility (0–25)

- Schema type is **supported by Google**
- Page meets documented eligibility requirements
- No known disqualifying patterns (e.g. self-serving reviews)

---

#### 3. Data Completeness & Accuracy (0–20)

- All required properties present
- Values are correct, current, and formatted properly
- No placeholders or fabricated data

---

#### 4. Technical Correctness (0–15)

- Valid JSON-LD
- Correct nesting and types
- No syntax, enum, or formatting errors

---

#### 5. Maintenance & Sustainability (0–10)

- Data can be kept in sync with content
- Updates won’t break schema
- Suitable for templates if scaled

---

#### 6. Spam / Policy Risk (0–5)

- No deceptive intent
- No over-markup
- No attempt to game rich results

---

### Eligibility Bands (Required)

| Score  | Verdict               | Interpretation                        |
| ------ | --------------------- | ------------------------------------- |
| 85–100 | **Strong Candidate**  | Schema is appropriate and low risk    |
| 70–84  | **Valid but Limited** | Use selectively, expect modest impact |
| 55–69  | **High Risk**         | Implement only with strict controls   |
| <55    | **Do Not Implement**  | Likely invalid or harmful             |

If verdict is **Do Not Implement**, stop and explain why.

---

#### Imported: Supported & Common Schema Types

_(Only implement when eligibility criteria are met.)_

### Organization

Use for: brand entity (homepage or about page)

### WebSite (+ SearchAction)

Use for: enabling sitelinks search box

### Article / BlogPosting

Use for: editorial content with authorship

### Product

Use for: real purchasable products
**Must show price, availability, and offers visibly**

---

### SoftwareApplication

Use for: SaaS apps and tools

---

### FAQPage

Use only when:

- Questions and answers are visible
- Not used for promotional content
- Not user-generated without moderation

---

### HowTo

Use only for:

- Genuine step-by-step instructional content
- Not marketing funnels

---

### BreadcrumbList

Use whenever breadcrumbs exist visually

---

### LocalBusiness

Use for: real, physical business locations

---

### Review / AggregateRating

**Strict rules:**

- Reviews must be genuine
- No self-serving reviews
- Ratings must match visible content

---

### Event

Use for: real events with clear dates and availability

---

#### Imported: Multiple Schema Types per Page

Use `@graph` when representing multiple entities.

Rules:

- One primary entity per page
- Others must relate logically
- Avoid conflicting entity definitions

---

#### Imported: Validation & Testing

### Required Tools

- Google Rich Results Test
- Schema.org Validator
- Search Console Enhancements

### Common Failure Patterns

- Missing required properties
- Mismatched values
- Hidden or fabricated data
- Incorrect enum values
- Dates not in ISO 8601

---

#### Imported: Implementation Guidance

### Static Sites

- Embed JSON-LD in templates
- Use includes for reuse

### Frameworks (React / Next.js)

- Server-side rendered JSON-LD
- Data serialized directly from source

### CMS / WordPress

- Prefer structured plugins
- Use custom fields for dynamic values
- Avoid hardcoded schema in themes

---

#### Imported: Output Format (Required)

### Schema Strategy Summary

- Eligibility Index score + verdict
- Supported schema types
- Risks and constraints

### JSON-LD Implementation

```json
{
  "@context": "https://schema.org",
  "@type": "...",
  ...
}
```

### Placement Instructions

Where and how to add it

### Validation Checklist

- [ ] Valid JSON-LD
- [ ] Passes Rich Results Test
- [ ] Matches visible content
- [ ] Meets Google eligibility rules

---

#### Imported: Questions to Ask (If Needed)

1. What content is visible on the page?
2. Which rich result are you targeting (if any)?
3. Is this content templated or editorial?
4. How is this data maintained?
5. Is schema already present?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
