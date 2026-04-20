---
name: odoo-l10n-compliance
description: "Odoo Localization & Compliance (l10n) workflow skill. Use this skill when the user needs Country-specific Odoo localization: tax configuration, e-invoicing (CFDI, FatturaPA, SAF-T), fiscal reporting, and country chart of accounts setup and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["odoo-l10n-compliance", "country-specific", "odoo", "localization", "tax", "configuration", "e-invoicing", "cfdi"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-20"
---

# Odoo Localization & Compliance (l10n)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-l10n-compliance` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Localization & Compliance (l10n)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Country Localization Modules, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Setting up Odoo for a company in a specific country (Mexico, Italy, Spain, US, etc.).
- Configuring country-required e-invoicing (electronic invoice submission to tax authorities).
- Setting up VAT/GST/IVA tax rules with correct fiscal positions.
- Generating required fiscal reports (VAT return, SAF-T, DIAN report).
- Use when the request clearly matches the imported source intent: Country-specific Odoo localization: tax configuration, e-invoicing (CFDI, FatturaPA, SAF-T), fiscal reporting, and country chart of accounts setup.
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

Odoo provides localization modules (`l10n_*`) for 80+ countries that configure the correct chart of accounts, tax types, and fiscal reporting. This skill helps you install and configure the right localization, set up country-specific e-invoicing (Mexico CFDI, Italy FatturaPA, Poland SAF-T), and ensure fiscal compliance.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-l10n-compliance` and specify your country and Odoo version.
2. **Install**: Get the exact localization module and configuration steps.
3. **Configure**: Receive tax code setup, fiscal position rules, and reporting guidance.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-l10n-compliance to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-l10n-compliance against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-l10n-compliance for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-l10n-compliance using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Configure Mexico CFDI 4.0

```
Step 1: Install module
  Apps → Search "Mexico" → Install "Mexico - Accounting"
  Also install: "Mexico - Electronic Invoicing" (l10n_mx_edi)

Step 2: Configure Company
  Settings → Company → [Your Company]
  Country: Mexico
  RFC: Your RFC number (tax ID)
  Company Type: Moral Person or Physical Person

Step 3: Upload SAT Certificates
  Accounting → Configuration → Certificates → New
  CSD Certificate (.cer file from SAT)
  Private Key (.key file from SAT)
  Password: Your FIEL password

Step 4: Issue a CFDI Invoice
  Create invoice → Confirm → CFDI XML generated automatically
  Sent to SAT → Receive UUID (folio fiscal)
  PDF includes QR code + UUID for buyer verification
```

### Example 2: EU Intra-Community VAT Setup (Any EU Country)

```
Menu: Accounting → Configuration → Taxes → New

Tax Name: EU Intra-Community Sales (0%)
Tax Type: Sales
Tax Scope: Services or Goods
Tax Computation: Fixed
Amount: 0%
Tax Group: Intra-Community

Label on Invoice: "Intra-Community Supply - VAT Exempt per Art. 138 VAT Directive"

Fiscal Position (created separately):
  Name: EU B2B Intra-Community
  Auto-detect: Country Group = Europe + VAT Required = YES
  Tax Mapping: Standard VAT Rate → 0% Intra-Community
```

### Example 3: Install and Validate a Localization

```bash
# Install via CLI (if module not in Apps)
./odoo-bin -d mydb --stop-after-init -i l10n_mx_edi

# Verify in Odoo:
# Apps → Installed → Search "l10n_mx" → Should show as Installed
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Install the localization module before creating any accounting entries — it sets up the correct accounts.
- ✅ Do: Use Fiscal Positions to automate tax switching for international customers (B2B vs B2C, domestic vs export).
- ✅ Do: Test e-invoicing in the SAT/tax authority test environment before going live.
- ❌ Don't: Manually create a chart of accounts if a localization module exists for your country.
- ❌ Don't: Mix localization tax accounts with custom accounts — it breaks fiscal reports.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Install the localization module **before** creating any accounting entries — it sets up the correct accounts.
- ✅ **Do:** Use **Fiscal Positions** to automate tax switching for international customers (B2B vs B2C, domestic vs export).
- ✅ **Do:** Test e-invoicing in the **SAT/tax authority test environment** before going live.
- ❌ **Don't:** Manually create a chart of accounts if a localization module exists for your country.
- ❌ **Don't:** Mix localization tax accounts with custom accounts — it breaks fiscal reports.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-l10n-compliance`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Country Localization Modules

| Country | Module | Key Features |
|---|---|---|
| 🇺🇸 USA | `l10n_us` | GAAP CoA, Payroll (ADP bridge), 1099 reporting |
| 🇲🇽 Mexico | `l10n_mx_edi` | CFDI 4.0 e-invoicing, SAT integration, IEPS tax |
| 🇪🇸 Spain | `l10n_es` | SII real-time VAT, Modelo 303/390, AEAT |
| 🇮🇹 Italy | `l10n_it_edi` | FatturaPA XML, SDI submission, reverse charge |
| 🇵🇱 Poland | `l10n_pl` | SAF-T JPK_FA, VAT-7 return |
| 🇧🇷 Brazil | `l10n_br` | NF-e, NFS-e, SPED, ICMS/PIS/COFINS |
| 🇩🇪 Germany | `l10n_de` | SKR03/SKR04 CoA, DATEV export, UStVA |
| 🇨🇴 Colombia | `l10n_co_edi` | DIAN e-invoicing, UBL 2.1 |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
