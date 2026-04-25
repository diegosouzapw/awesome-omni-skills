---
name: odoo-hr-payroll-setup
description: "Odoo HR & Payroll Setup workflow skill. Use this skill when the user needs Expert guide for Odoo HR and Payroll: salary structures, payslip rules, leave policies, employee contracts, and payroll journal entries and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["odoo-hr-payroll-setup", "expert", "guide", "for", "odoo", "and", "payroll", "salary"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-20"
---

# Odoo HR & Payroll Setup

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-hr-payroll-setup` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo HR & Payroll Setup

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating a salary structure with gross pay, deductions, and net pay.
- Configuring annual leave, sick leave, and public holiday policies.
- Troubleshooting incorrect payslip amounts or missing rule contributions.
- Setting up the payroll journal to correctly post to accounting.
- Use when the request clearly matches the imported source intent: Expert guide for Odoo HR and Payroll: salary structures, payslip rules, leave policies, employee contracts, and payroll journal entries.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

This skill guides HR managers and payroll accountants through setting up Odoo HR and Payroll correctly. It covers salary structure creation with Python-computed rules, time-off policies, employee contract types, and the payroll → accounting journal posting flow.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-hr-payroll-setup` and describe your payroll scenario.
2. **Configure**: Receive step-by-step setup for salary rules and leave allocation.
3. **Debug**: Paste a salary rule or payslip issue and receive a root cause analysis.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-hr-payroll-setup to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-hr-payroll-setup against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-hr-payroll-setup for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-hr-payroll-setup using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Salary Structure with Deductions

```text
Menu: Payroll → Configuration → Salary Structures → New

Name: US Employee Monthly
Payslip Code: MONTHLY

Rules (executed top-to-bottom — order matters):
  Code  | Name                   | Formula                        | Category
  ----- | ---------------------- | ------------------------------ | ---------
  BASIC | Basic Wage             | contract.wage                  | Basic
  GROSS | Gross                  | BASIC                          | Gross
  SS    | Social Security (6.2%) | -GROSS * 0.062                 | Deduction
  MED   | Medicare (1.45%)       | -GROSS * 0.0145                | Deduction
  FIT   | Federal Income Tax     | -GROSS * inputs.FIT_RATE.amount| Deduction
  NET   | Net Salary             | GROSS + SS + MED + FIT         | Net
```

> **Federal Income Tax:** The standard Odoo US localization does not expose a single `l10n_us_w4_rate` field. Use an **input** (salary input type) to pass the withholding rate per employee, or install a community US payroll module (OCA `l10n_us_hr_payroll`) which handles W4 filing status properly.

### Example 2: Configure a Time Off Type

```text
Menu: Time Off → Configuration → Time Off Types → New

Name: Annual Leave / PTO
Approval: Time Off Officer
Leave Validation: Time Off Officer  (single approver)
  or: "Both" for HR + Manager double approval

Allocation:
  ☑ Employees can allocate time off themselves
  Requires approval: No

Negative Balance: Not allowed (employees cannot go negative)

Then create initial allocations:
Menu: Time Off → Managers → Allocations → New
  Employee: [Each employee]
  Time Off Type: Annual Leave / PTO
  Allocation: 15 days
  Validity: Jan 1 – Dec 31 [current year]
```

### Example 3: Payroll Journal Entry Result

```text
After validating a payroll batch, Odoo generates:

Debit   Salary Expense Account     $5,000.00
  Credit  Social Security Payable     $310.00
  Credit  Medicare Payable             $72.50
  Credit  Federal Tax Payable         (varies)
  Credit  Salary Payable           $4,617.50+

When net salary is paid:
Debit   Salary Payable            $4,617.50
  Credit  Bank Account              $4,617.50

Employer taxes (e.g., FUTA, SUTA) post as separate journal entries.
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Install your country's payroll localization (l10nushrpayroll, l10nmxhrpayroll, etc.) before building custom rules — it provides pre-configured tax structures.
- ✅ Do: Use salary rule inputs (inputs.ALLOWANCE.amount) to pass variable values (bonuses, allowances, withholding rates) rather than hardcoding them in the rule formula.
- ✅ Do: Archive old salary structures rather than deleting them — active payslips reference their structure and will break if the structure is deleted.
- ✅ Do: Always set an active Employee Contract with correct dates and salary before generating payslips.
- ❌ Don't: Manually edit posted payslips — cancel and regenerate the payslip batch if corrections are needed.
- ❌ Don't: Use contract.wage in deduction rules without verifying whether the structure is monthly or annual — always check the contract wage period.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Install your country's **payroll localization** (`l10n_us_hr_payroll`, `l10n_mx_hr_payroll`, etc.) before building custom rules — it provides pre-configured tax structures.
- ✅ **Do:** Use **salary rule inputs** (`inputs.ALLOWANCE.amount`) to pass variable values (bonuses, allowances, withholding rates) rather than hardcoding them in the rule formula.
- ✅ **Do:** Archive old salary structures rather than deleting them — active payslips reference their structure and will break if the structure is deleted.
- ✅ **Do:** Always set an active **Employee Contract** with correct dates and salary before generating payslips.
- ❌ **Don't:** Manually edit posted payslips — cancel and regenerate the payslip batch if corrections are needed.
- ❌ **Don't:** Use `contract.wage` in deduction rules without verifying whether the structure is monthly or annual — always check the contract wage period.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-hr-payroll-setup`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@monday-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monetization` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monorepo-architect` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monorepo-management` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- **Odoo Payroll is Enterprise-only** — the Community Edition does not include the Payroll module (`hr_payroll`).
- US-specific compliance (W2, 941, state SUI/SDI filing) requires additional modules beyond the base localization; Odoo does not generate tax filings directly.
- Does not cover **multi-country payroll** (employees in different countries require separate structures and localizations).
- **Expense reimbursements** via payslip (e.g., mileage, home office) require a custom salary rule input and are not covered in standard HR Payroll documentation.
