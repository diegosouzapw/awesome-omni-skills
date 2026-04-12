---
name: odoo-upgrade-advisor
description: "Odoo Upgrade Advisor workflow skill. Use this skill when the user needs Step-by-step Odoo version upgrade advisor: pre-upgrade checklist, community vs enterprise upgrade path, OCA module compatibility, and post-upgrade validation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["odoo-upgrade-advisor", "step-by-step", "odoo", "version", "upgrade", "advisor", "pre-upgrade", "checklist"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Odoo Upgrade Advisor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-upgrade-advisor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Odoo Upgrade Advisor

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Upgrade Paths, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Planning a major Odoo version upgrade.
- Identifying which custom modules need to be migrated.
- Running the upgrade on a staging environment before production.
- Validating the system after an upgrade.
- Use when the request clearly matches the imported source intent: Step-by-step Odoo version upgrade advisor: pre-upgrade checklist, community vs enterprise upgrade path, OCA module compatibility, and post-upgrade validation.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

#### Imported: Overview

Upgrading Odoo between major versions (e.g., v15 → v16 → v17) requires careful preparation, testing, and validation. This skill provides a structured pre-upgrade checklist, guides you through the upgrade tools (Odoo Upgrade Service and OpenUpgrade), and gives you a post-upgrade validation protocol.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-upgrade-advisor`, state your current and target version.
2. **Plan**: Receive the full upgrade roadmap and risk assessment.
3. **Execute**: Get a step-by-step upgrade command sequence.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-upgrade-advisor to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/odoo-upgrade-advisor/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/odoo-upgrade-advisor/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @odoo-upgrade-advisor using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Pre-Upgrade Checklist

```text
BEFORE YOU START:
  ☑ 1. List all installed modules (Settings → Technical → Modules)
        Export to CSV and review for custom/OCA modules
  ☑ 2. Check OCA compatibility matrix for each community module
        https://github.com/OCA/maintainer-tools/wiki/Migration-Status
  ☑ 3. Take a full backup (database + filestore) — your restore point
  ☑ 4. Clone production to a staging environment
  ☑ 5. Run the Odoo Upgrade pre-analysis:
        https://upgrade.odoo.com/ → Upload DB → Review breaking changes report
  ☑ 6. Review custom modules against migration notes
        (use @odoo-migration-helper for per-module analysis)
  ☑ 7. Upgrade and test in staging → Fix all errors → Re-test
  ☑ 8. Schedule a production maintenance window
  ☑ 9. Notify users of scheduled downtime
  ☑ 10. Perform production upgrade → Validate → Go/No-Go decision
```

### Example 2: Community Upgrade with OpenUpgrade

```bash
# Clone OpenUpgrade for the TARGET version (e.g., upgrading to v17)
git clone https://github.com/OCA/OpenUpgrade.git \
  --branch 17.0 \
  --single-branch \
  /opt/openupgrade

# Run the migration against your staging database
python3 /opt/openupgrade/odoo-bin \
  --update all \
  --database odoo_staging \
  --config /etc/odoo/odoo.conf \
  --stop-after-init \
  --load openupgrade_framework

# Review the log for errors before touching production
tail -200 /var/log/odoo/odoo.log | grep -E "ERROR|WARNING|Traceback"
```

### Example 3: Post-Upgrade Validation Checklist

```text
After upgrading, validate these critical areas before going live:

Accounting:
  ☑ Trial Balance totals match the pre-upgrade snapshot
  ☑ Open invoices, bills, and payments are accessible
  ☑ Bank reconciliation can be performed on a test statement

Inventory:
  ☑ Stock valuation report matches pre-upgrade (run Inventory Valuation)
  ☑ Open Purchase Orders and Sale Orders are visible

HR / Payroll:
  ☑ All employee records are intact
  ☑ Payslips from the last 3 months are accessible and correct

Custom Modules:
  ☑ Every custom module loaded without ImportError or XML error
  ☑ Run the critical business workflows end-to-end:
      Create sale order → confirm → deliver → invoice → payment

Users & Security:
  ☑ User logins work correctly
  ☑ Access rights are preserved (spot-check 3-5 users)
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Always upgrade on a copy of production (staging) first — never the live instance.
- ✅ Do: Keep the old version running until the new version is fully validated and signed off.
- ✅ Do: Check OCA's migration status page: OCA Migration Status
- ✅ Do: Use the Odoo Upgrade Service pre-analysis report to get a list of breaking changes before writing any code.
- ❌ Don't: Skip intermediate versions — Odoo requires sequential upgrades (v14→v15→v16→v17).
- ❌ Don't: Upgrade custom modules and Odoo core simultaneously — adapt Odoo core first, then fix custom modules.
- ❌ Don't: Run OpenUpgrade against production directly — always test on a staging copy first.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Always upgrade on a **copy of production** (staging) first — never the live instance.
- ✅ **Do:** Keep the old version running until the new version is **fully validated and signed off**.
- ✅ **Do:** Check OCA's migration status page: [OCA Migration Status](https://github.com/OCA/maintainer-tools/wiki/Migration-Status)
- ✅ **Do:** Use the [Odoo Upgrade Service](https://upgrade.odoo.com/) pre-analysis report to get a list of breaking changes **before writing any code**.
- ❌ **Don't:** Skip intermediate versions — Odoo requires sequential upgrades (v14→v15→v16→v17).
- ❌ **Don't:** Upgrade custom modules and Odoo core simultaneously — adapt Odoo core first, then fix custom modules.
- ❌ **Don't:** Run OpenUpgrade against production directly — always test on a staging copy first.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-upgrade-advisor`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Upgrade Paths

| From | To | Supported? | Tool |
|---|---|---|---|
| v16 | v17 | ✅ Direct | Odoo Upgrade Service / OpenUpgrade |
| v15 | v16 | ✅ Direct | Odoo Upgrade Service / OpenUpgrade |
| v14 | v15 | ✅ Direct | Odoo Upgrade Service / OpenUpgrade |
| v14 | v17 | ⚠️ Multi-hop | v14→v15→v16→v17 (cannot skip) |
| v13 or older | any | ❌ Not supported | Manual migration required |

#### Imported: Limitations

- Covers **v14–v17** only. Versions v13 and older have a fundamentally different module structure and require manual migration.
- **Enterprise-exclusive module changes** (e.g., `sign`, `account_accountant`) may have undocumented breaking changes not included in OpenUpgrade.
- The **Odoo.sh** automated upgrade path has a separate workflow (managed from the Odoo.sh dashboard) not covered here.
- OWL JavaScript component migration (legacy widget → OWL v16+) is a complex front-end topic beyond the scope of this skill.
