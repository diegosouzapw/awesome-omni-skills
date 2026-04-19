---
name: lex
description: "LEX: Legal-Entity-X-ref workflow skill. Use this skill when the user needs Centralized 'Truth Engine' for cross-jurisdictional legal context (US, EU, CA) and contract scaffolding and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["legal", "context", "cross-jurisdictional", "compliance", "scaffolding", "lex", "centralized", "truth"]
complexity: intermediate
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "Svobikl"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# LEX: Legal-Entity-X-ref

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/lex` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# LEX: Legal-Entity-X-ref

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to cross-reference or compare legal requirements between different territories, such as verifying the compliance gap between an EU SARL and a US LLC.
- Use when working with foundational business or employment documents that require specific, jurisdiction-compliant clauses to be inserted into a professional scaffold.
- Use when the user asks about the specific regulatory nuances, formation steps, or "truth-based" definitions of legal entities within the 29 supported jurisdictions (USA, Canada, and the EU).
- Use when the request clearly matches the imported source intent: Centralized 'Truth Engine' for cross-jurisdictional legal context (US, EU, CA) and contract scaffolding.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `findings.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `templates/01_business_foundation.md` | Adds the next most relevant copied source file without loading the entire package |
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

LEX is a structured truth engine designed to eliminate legal hallucinations by grounding agents in verified government references and legislation across 29+ jurisdictions. It provides deterministic context for business formation, employment, and contract drafting.

#### Imported: How It Works

### Step 1: Identify Jurisdiction
Before drafting, determine if the user's entity or contract target is in the **USA, Canada, or the EU**.

### Step 2: Search & Fetch Context
Use the CLI shortcuts to find the relevant legal patterns and templates.
- Run `lex search <query>` to find matching templates.
- Run `lex get <path>` to read the granular metadata and requirements.

### Step 3: Scaffold Drafting
Generate foundation-level documents using `lex draft <description>`. This ensures that all drafts include the mandatory AI-generated content disclaimer.

### Step 4: Verify Authority
Always include a "Verified Sources" section in your output by running `lex verify`, which fetches official government links for the retrieved context.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @lex to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @lex against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @lex for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @lex using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Comparing Employment Laws
```bash
# Get the workforce template to compare US vs EU notice periods
lex get templates/02_employment_workforce.md
```

### Example 2: Drafting a Czech Contract
```bash
# Create a house sale contract scaffold in Czech language
lex draft "Czech house sale contract"
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Trust but Verify: Always include the links provided by lex verify in your output.
- ✅ Table Formatting: Use tables when comparing results across multiple jurisdictions.
- ❌ No Guessing: If a jurisdiction is outside the US/EU/CA scope, state that it is outside the LEX "Truth Engine" coverage.
- ❌ No Anecdotal Advice: Stick strictly to the findings in the templates or verified government domains.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Trust but Verify**: Always include the links provided by `lex verify` in your output.
- ✅ **Table Formatting**: Use tables when comparing results across multiple jurisdictions.
- ❌ **No Guessing**: If a jurisdiction is outside the US/EU/CA scope, state that it is outside the LEX "Truth Engine" coverage.
- ❌ **No Anecdotal Advice**: Stick strictly to the findings in the templates or verified government domains.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/lex`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@image-studio` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [findings.md](findings.md)
- [01_business_foundation.md](templates/01_business_foundation.md)
- [02_employment_workforce.md](templates/02_employment_workforce.md)
- [03_sales_commercial.md](templates/03_sales_commercial.md)
- [04_real_estate.md](templates/04_real_estate.md)
- [05_intellectual_property.md](templates/05_intellectual_property.md)

### Imported Reference Notes

#### Imported: Common Pitfalls

- **Problem:** Legal hallucination regarding specific EU notice periods.
  **Solution:** Run `lex get templates/02_employment_workforce.md` to see the restrictive covenant comparison table.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
