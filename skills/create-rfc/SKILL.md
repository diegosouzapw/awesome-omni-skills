---
name: create-rfc
description: "RFC Creator workflow skill. Use this skill when the user needs Creates structured Request for Comments (RFC) documents for proposing and deciding on significant changes. Use when the user says \"write an RFC\", \"create a proposal\", \"I need to propose a change\", \"draft an RFC\", \"document a decision\", or needs stakeholder alignment before making a major technical or process decision. Do NOT use for TDDs/implementation docs (use technical-design-doc-creator instead), README files, or general documentation and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["create-rfc", "creates", "structured", "request", "for", "comments", "rfc", "documents"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Tech Leads Club - github.com/tech-leads-club"
date_added: "2026-04-14"
date_updated: "2026-04-24"
---

# RFC Creator

## Overview

This public intake copy packages `packages/skills-catalog/skills/(creation)/create-rfc` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# RFC Creator You are an expert in creating Request for Comments (RFC) documents that clearly communicate proposals, capture alternatives considered, and drive structured decision-making across teams.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Language Adaptation, RFC vs TDD, Document Structure, Section Templates, RFC Quality Checklist, Common Anti-Patterns to Avoid.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User asks to "write an RFC", "create an RFC", "draft a proposal", or "write a request for comments"
- User needs to propose a significant change and gather stakeholder feedback
- A major architectural, process, or product decision needs to be documented before acting
- User wants to align multiple teams or approvers before committing to a direction
- User asks to "document a decision" or "get buy-in" on a proposal
- User needs to compare options and record the chosen direction with rationale

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/section-templates.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `README.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. RFC title (clear, action-oriented)
2. Background / context (what is the current state and why this matters)
3. Driver (who is proposing / responsible for the decision)
4. Approver(s) (who needs to approve)
5. Impact level (HIGH / MEDIUM / LOW)
6. At least 1 explicit assumption (with confidence level)
7. At least 2 decision criteria (with weights), stated before options

### Imported Workflow Notes

#### Imported: Interactive Workflow

### Step 1: Gather Context (if not provided)

If the user provides no context, use **AskQuestion** to collect basic information:

```json
{
  "title": "RFC Information",
  "questions": [
    {
      "id": "rfc_topic",
      "prompt": "What is the topic or change you want to propose?",
      "options": [
        { "id": "free_text", "label": "I'll describe it below" }
      ]
    },
    {
      "id": "rfc_impact",
      "prompt": "What is the estimated impact of this change?",
      "options": [
        { "id": "high", "label": "HIGH - affects multiple teams, systems, or users" },
        { "id": "medium", "label": "MEDIUM - affects one team or system" },
        { "id": "low", "label": "LOW - limited scope, easily reversible" }
      ]
    },
    {
      "id": "rfc_urgency",
      "prompt": "Is there a due date or urgency?",
      "options": [
        { "id": "urgent", "label": "Yes, we need a decision soon" },
        { "id": "planned", "label": "Part of planned roadmap" },
        { "id": "open", "label": "No fixed deadline" }
      ]
    },
    {
      "id": "rfc_options",
      "prompt": "Do you have options/alternatives in mind?",
      "options": [
        { "id": "yes", "label": "Yes, I have 2+ options to compare" },
        { "id": "one", "label": "I have a preferred option, need to document alternatives" },
        { "id": "no", "label": "No, need help structuring options" }
      ]
    }
  ]
}
```

### Step 2: Validate Mandatory Fields

**MANDATORY fields — ask if missing**:

- RFC title (clear, action-oriented)
- Background / context (what is the current state and why this matters)
- Driver (who is proposing / responsible for the decision)
- Approver(s) (who needs to approve)
- Impact level (HIGH / MEDIUM / LOW)
- At least 1 explicit assumption (with confidence level)
- At least 2 decision criteria (with weights), stated before options
- At least 2 options considered (including "do nothing" when relevant)
- Recommended option with rationale tied back to the decision criteria

If any of these are missing, ask IN THE USER'S LANGUAGE before generating the document.

### Step 3: Detect RFC Type and Tailor Sections

| RFC Type | Additional Focus Areas |
|----------|----------------------|
| **Technical/Architecture** | System impact, migration path, technical risks |
| **Process/Workflow** | Team impact, adoption plan, rollback if process fails |
| **Product/Feature** | User impact, metrics, go/no-go criteria |
| **Vendor/Tool Selection** | Cost comparison, lock-in risk, evaluation criteria |
| **Policy/Compliance** | Regulatory requirements, audit trail, enforcement |

### Step 4: Generate RFC Document

Generate the RFC in Markdown following the templates below.

### Step 5: Offer Next Steps

After generating, offer:

```
RFC Created: "[Title]"

Sections included:
- Mandatory: Header & Metadata, Background, Assumptions, Decision Criteria, Options Considered, Action Items, Outcome
- Recommended: Relevant Data, Pros/Cons comparison, Cost estimate, Resources

Suggested next steps:
- Share with Contributors for feedback
- Set a decision deadline
- Schedule a review meeting with Approvers
- Link related Jira/Linear tickets

Would you like me to:
1. Add more options to compare?
2. Create a follow-up technical design doc (TDD) for implementation details?
3. Publish this to Confluence?
```

#### Imported: Language Adaptation

**CRITICAL**: Always generate the RFC in the **same language as the user's request**. Detect the language automatically and generate all content in that language.

- Keep technical terms in English when appropriate (e.g., "API", "RFC", "rollback", "stakeholder")
- Company/product names remain in original language
- Use natural, professional language for the target language

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @create-rfc to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @create-rfc against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @create-rfc for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @create-rfc using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(creation)/create-rfc`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/section-templates.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [section-templates.md](references/section-templates.md)
- [README.md](README.md)
- [section-templates.md](references/section-templates.md)

### Imported Reference Notes

#### Imported: RFC vs TDD

| Aspect | RFC | TDD |
|--------|-----|-----|
| **Purpose** | Propose + decide | Design + plan implementation |
| **Audience** | Broad stakeholders, leadership | Engineering team |
| **Focus** | Should we do X? Which option? | How do we build X? |
| **Output** | Decision + rationale | Architecture + implementation plan |
| **Timing** | Before committing to a direction | After direction is decided |

Use RFC when the **decision itself** needs alignment. Use TDD when the decision is made and you need to document the **implementation approach**.

#### Imported: Document Structure

### Mandatory Sections

1. **Header & Metadata**
2. **Background**
3. **Assumptions**
4. **Decision Criteria**
5. **Options Considered** (minimum 2)
6. **Action Items**
7. **Outcome**

### Recommended Sections

8. **Relevant Data** — metrics, research, evidence
9. **Pros and Cons** (per option)
10. **Estimated Cost** (effort/complexity/monetary)
11. **Resources** — links, references, prior art

---

#### Imported: Section Templates

Read `references/section-templates.md` when generating an RFC document. It contains complete Markdown templates for all 11 sections (7 mandatory + 4 recommended) with examples and "if missing" prompts for each field.

---

#### Imported: RFC Quality Checklist

Before finalizing, verify:

- [ ] **Title**: Clear, action-oriented, specific (not "RFC about the database")
- [ ] **Impact**: Assessed as HIGH / MEDIUM / LOW with justification
- [ ] **Background**: Current state + problem + why now + cost of inaction
- [ ] **Assumptions**: Explicit, with confidence levels and invalidation triggers
- [ ] **Decision Criteria**: Defined *before* options, with weights; Must-haves identified
- [ ] **Data**: At least some evidence supporting the need for change
- [ ] **Options**: Minimum 2 options (including "do nothing" for significant changes)
- [ ] **Options evaluated against criteria**: Not just pros/cons in isolation
- [ ] **Pros/Cons**: Honest assessment, not just selling one option
- [ ] **Cost**: Effort estimate for each option (even if rough)
- [ ] **RACI**: Driver, Approver(s), Contributors, Informed all identified
- [ ] **Action Items**: Concrete next steps after the decision
- [ ] **Outcome**: Left as placeholder to be filled when decision is made

---

#### Imported: Common Anti-Patterns to Avoid

### Predetermined Conclusion Disguised as RFC

**BAD**:
```
We should use Kubernetes. Here are some reasons. Option 2 is to not use Kubernetes (obviously wrong).
```

**GOOD**:
```
Option 1: Adopt Kubernetes — [genuine pros and cons]
Option 2: Stick with Docker Compose — [genuine pros and cons]
Option 3: Move to managed container platform (ECS/Cloud Run) — [genuine pros and cons]
```

### Vague Background

**BAD**:
```
Our current deployment process has some issues.
```

**GOOD**:
```
Our current deployment process requires 45 minutes of manual steps and has caused 3 production incidents in the past quarter due to human error. The team spends ~8 hours/week on deployment-related tasks.
```

### Missing "Do Nothing" Option

Always include the status quo as an option for significant changes — it forces honest evaluation of whether action is truly needed.

### No Decision Criteria (or criteria defined after options)

**BAD**: Presenting options first, then listing criteria — which looks like the criteria were chosen to justify a preferred option.

**GOOD**: Define criteria with weights *before* listing options. Then evaluate each option against them explicitly. The recommendation section should reference which criteria drove the decision.

### Hidden or Unstated Assumptions

**BAD**:
```
We'll migrate to the new system over 6 months.
```

**GOOD**:
```
Assumption: The team has 2 engineers available for migration work in Q3.
Confidence: Medium. Invalidated if Q3 headcount changes.
```

Unstated assumptions become invisible time bombs. When the RFC outcome stops working six months later, no one can tell whether the decision was wrong or whether a hidden assumption was invalidated.

---

#### Imported: Output Summary Format

After generating the RFC:

```
RFC Created: "[Title]"

Impact: HIGH / MEDIUM / LOW
Status: NOT STARTED

Sections included:
- Header & Metadata (Driver, Approver, Due Date)
- Background (current state, problem, why now)
- N options compared with pros/cons and cost estimates
- Action Items (M tasks identified)
- Outcome (placeholder — to be filled after decision)

Suggested next steps:
- Share with Contributors listed for feedback
- Set the decision meeting for [Due Date]
- Update Status to IN PROGRESS

Would you like me to add anything else?
```

---

#### Imported: Important Notes

- **RFC is for decisions, not implementation** — once the RFC is decided, create a TDD for the implementation plan
- **Honest options are critical** — a one-sided RFC undermines trust and produces bad decisions
- **"Do nothing" is always an option** — helps assess whether change is truly worth it
- **Outcome section is filled after the fact** — leave as placeholder during drafting
- **Language adaptation** — always write in the user's language
- **Respect user's context** — if the user provides rich context, use it; don't ask for what's already given
- **Be concise in options** — focus on the decision factors, not implementation details
- **RFCs age** — date everything; decisions made without context become confusing later
