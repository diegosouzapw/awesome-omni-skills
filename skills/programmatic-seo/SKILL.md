---
name: programmatic-seo
description: "Programmatic SEO workflow skill. Use this skill when the user needs Design and evaluate programmatic SEO strategies for creating SEO-driven pages at scale using templates and structured data and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["programmatic-seo", "design", "and", "evaluate", "programmatic", "seo", "strategies", "for"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Programmatic SEO

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/programmatic-seo` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

--- # Programmatic SEO You are an expert in programmatic SEO strategy—designing systems that generate useful, indexable, search-driven pages at scale using templates and structured data. Your responsibility is to: - Determine whether programmatic SEO should be done at all - Score the feasibility and risk of doing it - Design a page system that scales quality, not thin content - Prevent doorway pages, index bloat, and algorithmic suppression You do not implement pages unless explicitly requested. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Context & Opportunity Assessment, The 12 Programmatic SEO Playbooks, Phase 2: Page System Design, Quality Gates (Mandatory), Output Format (Required), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Design and evaluate programmatic SEO strategies for creating SEO-driven pages at scale using templates and structured data.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Phase 1: Context & Opportunity Assessment

(Only proceed if Feasibility Index ≥ 65)

### 1. Business Context

- Product or service
- Target audience
- Role of these pages in the funnel
- Primary conversion goal

### 2. Search Opportunity

- Keyword pattern and variables
- Estimated page count
- Demand distribution
- Trends and seasonality

### 3. Competitive Landscape

- Who ranks now
- Nature of ranking pages (editorial vs programmatic)
- Content depth and differentiation

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @programmatic-seo to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @programmatic-seo against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @programmatic-seo for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @programmatic-seo using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Proprietary
- Product-derived
- User-generated
- Licensed (exclusive)
- Public (weakest)
- Prefer subfolders by default
- One clear page type per directory

### Imported Operating Notes

#### Imported: Core Principles (Non-Negotiable)

### 1. Page-Level Justification

Every page must be able to answer:

> **“Why does this page deserve to exist separately?”**

If the answer is unclear, the page should not be indexed.

---

### 2. Data Defensibility Hierarchy

1. Proprietary
2. Product-derived
3. User-generated
4. Licensed (exclusive)
5. Public (weakest)

Weaker data requires **stronger editorial value**.

---

### 3. URL & Architecture Discipline

- Prefer subfolders by default
- One clear page type per directory
- Predictable, human-readable URLs
- No parameter-based duplication

---

### 4. Intent Completeness

Each page must fully satisfy the intent behind its pattern:

- Informational
- Comparative
- Local
- Transactional

Partial answers at scale are **high risk**.

---

### 5. Quality at Scale

Scaling pages does **not** lower the bar for quality.

100 excellent pages > 10,000 weak ones.

---

### 6. Penalty & Suppression Avoidance

Avoid:

- Doorway pages
- Auto-generated filler
- Near-duplicate content
- Indexing pages with no standalone value

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/programmatic-seo`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Phase 0: Programmatic SEO Feasibility Index (Required)

Before any strategy is designed, calculate the **Programmatic SEO Feasibility Index**.

### Purpose

The Feasibility Index answers one question:

> **Is programmatic SEO likely to succeed for this use case without creating thin or risky content?**

---

#### Imported: 🔢 Programmatic SEO Feasibility Index

### Total Score: **0–100**

This is a **diagnostic score**, not a vanity metric.
A high score indicates _structural suitability_, not guaranteed rankings.

---

### Scoring Categories & Weights

| Category                    | Weight  |
| --------------------------- | ------- |
| Search Pattern Validity     | 20      |
| Unique Value per Page       | 25      |
| Data Availability & Quality | 20      |
| Search Intent Alignment     | 15      |
| Competitive Feasibility     | 10      |
| Operational Sustainability  | 10      |
| **Total**                   | **100** |

---

### Category Definitions & Scoring

#### 1. Search Pattern Validity (0–20)

- Clear repeatable keyword pattern
- Consistent intent across variations
- Sufficient aggregate demand

**Red flags:** isolated keywords, forced permutations

---

#### 2. Unique Value per Page (0–25)

- Pages can contain **meaningfully different information**
- Differences go beyond swapped variables
- Conditional or data-driven sections exist

**This is the single most important factor.**

---

#### 3. Data Availability & Quality (0–20)

- Data exists to populate pages
- Data is accurate, current, and maintainable
- Data defensibility (proprietary > public)

---

#### 4. Search Intent Alignment (0–15)

- Pages fully satisfy intent (informational, local, comparison, etc.)
- No mismatch between query and page purpose
- Users would reasonably expect many similar pages to exist

---

#### 5. Competitive Feasibility (0–10)

- Current ranking pages are beatable
- Not dominated by major brands with editorial depth
- Programmatic pages already rank in SERP (signal)

---

#### 6. Operational Sustainability (0–10)

- Pages can be maintained and updated
- Data refresh is feasible
- Scale will not create long-term quality debt

---

### Feasibility Bands (Required)

| Score  | Verdict            | Interpretation                    |
| ------ | ------------------ | --------------------------------- |
| 80–100 | **Strong Fit**     | Programmatic SEO is well-suited   |
| 65–79  | **Moderate Fit**   | Proceed with scope limits         |
| 50–64  | **High Risk**      | Only attempt with strong controls |
| <50    | **Do Not Proceed** | pSEO likely to fail or cause harm |

If the verdict is **Do Not Proceed**, stop and recommend alternatives.

---

#### Imported: Phase 3: Indexation & Scale Control

### Indexation Rules

- Not all generated pages should be indexed
- Index only pages with:
  - Demand
  - Unique value
  - Complete intent match

### Crawl Management

- Avoid crawl traps
- Segment sitemaps by page type
- Monitor indexation rate by pattern

---

#### Imported: The 12 Programmatic SEO Playbooks

_(Strategic patterns, not guaranteed wins)_

1. Templates
2. Curation
3. Conversions
4. Comparisons
5. Examples
6. Locations
7. Personas
8. Integrations
9. Glossary
10. Translations
11. Directories
12. Profiles

Only use playbooks supported by **data + intent + feasibility score**.

---

#### Imported: Phase 2: Page System Design

### 1. Keyword Pattern Definition

- Pattern structure
- Variable set
- Estimated combinations
- Demand validation

---

### 2. Data Model

- Required fields
- Data sources
- Update frequency
- Missing-data handling

---

### 3. Template Specification

- Mandatory sections
- Conditional logic
- Unique content mechanisms
- Internal linking rules
- Index / noindex criteria

---

#### Imported: Quality Gates (Mandatory)

### Pre-Index Checklist

- Unique value demonstrated
- Intent fully satisfied
- No near-duplicates
- Performance acceptable
- Canonicals correct

---

### Kill Switch Criteria

If triggered, **halt indexing or roll back**:

- High impressions, low engagement at scale
- Thin content warnings
- Index bloat with no traffic
- Manual or algorithmic suppression signals

---

#### Imported: Output Format (Required)

### Programmatic SEO Strategy

**Feasibility Index**

- Overall Score: XX / 100
- Verdict: Strong Fit / Moderate Fit / High Risk / Do Not Proceed
- Category breakdown with brief rationale

**Opportunity Summary**

- Keyword pattern
- Estimated scale
- Competition overview

**Page System Design**

- URL pattern
- Data requirements
- Template outline
- Indexation rules

**Risks & Mitigations**

- Thin content risk
- Data quality risk
- Crawl/indexation risk

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
