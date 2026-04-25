---
name: odoo-backup-strategy-v2
description: "Odoo Backup Strategy workflow skill. Use this skill when the user needs Complete Odoo backup and restore strategy: database dumps, filestore backup, automated scheduling, cloud storage upload, and tested restore procedures and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: business
tags: ["odoo-backup-strategy-v2", "odoo-backup-strategy", "complete", "odoo", "backup", "and", "restore", "strategy"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Odoo Backup Strategy

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/odoo-backup-strategy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Backup Strategy

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Setting up a backup strategy for a production Odoo instance.
- Automating daily backups with shell scripts and cron.
- Restoring Odoo after a server failure or data corruption event.
- Diagnosing a failed backup or corrupt restore.
- Use when the request clearly matches the imported source intent: Complete Odoo backup and restore strategy: database dumps, filestore backup, automated scheduling, cloud storage upload, and tested restore procedures.
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

A complete Odoo backup must include both the **PostgreSQL database** and the **filestore** (attachments, images). This skill covers manual and automated backup procedures, offsite storage, and the correct restore sequence to bring a down Odoo instance back online.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-backup-strategy` and describe your server environment.
2. **Generate**: Receive a complete backup script tailored to your setup.
3. **Restore**: Get step-by-step restore instructions for any failure scenario.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-backup-strategy-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-backup-strategy-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-backup-strategy-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-backup-strategy-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Manual Database + Filestore Backup

```bash
#!/bin/bash
# backup_odoo.sh

DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="odoo"
DB_USER="odoo"
FILESTORE_PATH="/var/lib/odoo/.local/share/Odoo/filestore/$DB_NAME"
BACKUP_DIR="/backups/odoo"

mkdir -p "$BACKUP_DIR"

# Step 1: Dump the database
pg_dump -U $DB_USER -Fc $DB_NAME > "$BACKUP_DIR/db_$DATE.dump"

# Step 2: Archive the filestore
tar -czf "$BACKUP_DIR/filestore_$DATE.tar.gz" -C "$FILESTORE_PATH" .

echo "✅ Backup complete: db_$DATE.dump + filestore_$DATE.tar.gz"
```

### Example 2: Automate with Cron (daily at 2 AM)

```bash
# Run: crontab -e
# Add this line:
0 2 * * * /opt/scripts/backup_odoo.sh >> /var/log/odoo_backup.log 2>&1
```

### Example 3: Upload to S3 (after backup)

```bash
# Add to backup script after tar command:
aws s3 cp "$BACKUP_DIR/db_$DATE.dump"        s3://my-odoo-backups/db/
aws s3 cp "$BACKUP_DIR/filestore_$DATE.tar.gz" s3://my-odoo-backups/filestore/

# Optional: Delete local backups older than 7 days
find "$BACKUP_DIR" -type f -mtime +7 -delete
```

### Example 4: Full Restore Procedure

```bash
# Step 1: Stop Odoo
docker compose stop odoo  # or: systemctl stop odoo

# Step 2: Recreate and restore the database
# (--clean alone fails if the DB doesn't exist; drop and recreate first)
dropdb -U odoo odoo 2>/dev/null || true
createdb -U odoo odoo
pg_restore -U odoo -d odoo db_YYYYMMDD_HHMMSS.dump

# Step 3: Restore the filestore
FILESTORE=/var/lib/odoo/.local/share/Odoo/filestore/odoo
rm -rf "$FILESTORE"/*
tar -xzf filestore_YYYYMMDD_HHMMSS.tar.gz -C "$FILESTORE"/

# Step 4: Restart Odoo
docker compose start odoo

# Step 5: Verify — open Odoo in the browser and check:
#   - Can you log in?
#   - Are recent records visible?
#   - Are file attachments loading?
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Test restores monthly in a staging environment — a backup you've never restored is not a backup.
- ✅ Do: Follow the 3-2-1 rule: 3 copies, 2 different media types, 1 offsite copy (e.g., S3 or a remote server).
- ✅ Do: Back up immediately before every Odoo upgrade — this is your rollback point.
- ✅ Do: Verify backup integrity: pg_restore --list backup.dump should complete without errors.
- ❌ Don't: Back up only the database without the filestore — all attachments and images will be missing after a restore.
- ❌ Don't: Store backups on the same disk or same server as Odoo — a disk or server failure destroys both.
- ❌ Don't: Run pg_restore --clean against a non-existent database — always create the database first.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Test restores monthly in a staging environment — a backup you've never restored is not a backup.
- ✅ **Do:** Follow the **3-2-1 rule**: 3 copies, 2 different media types, 1 offsite copy (e.g., S3 or a remote server).
- ✅ **Do:** Back up **immediately before every Odoo upgrade** — this is your rollback point.
- ✅ **Do:** Verify backup integrity: `pg_restore --list backup.dump` should complete without errors.
- ❌ **Don't:** Back up only the database without the filestore — all attachments and images will be missing after a restore.
- ❌ **Don't:** Store backups on the same disk or same server as Odoo — a disk or server failure destroys both.
- ❌ **Don't:** Run `pg_restore --clean` against a non-existent database — always create the database first.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/odoo-backup-strategy`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- Does not cover **Odoo.sh built-in backups** — Odoo.sh has its own backup system accessible from the dashboard.
- This script assumes a **single-database** Odoo setup. Multi-database instances require looping over all databases.
- Filestore path may differ between installations (Docker volume vs. bare-metal). Always verify the path with `odoo-bin shell` before running a restore.
- Large filestores (100GB+) may require incremental backup tools like `rsync` or `restic` rather than full `tar.gz` archives.
