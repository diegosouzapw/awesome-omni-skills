---
name: odoo-performance-tuner
description: "Odoo Performance Tuner workflow skill. Use this skill when the user needs Expert guide for diagnosing and fixing Odoo performance issues: slow queries, worker configuration, memory limits, PostgreSQL tuning, and profiling tools and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["odoo-performance-tuner", "expert", "guide", "for", "diagnosing", "and", "fixing", "odoo"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Odoo Performance Tuner

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-performance-tuner` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Performance Tuner

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Odoo is slow in production (slow page loads, timeouts).
- Getting MemoryError or Worker timeout errors in logs.
- Diagnosing a slow database query using Odoo's profiler.
- Tuning odoo.conf for a specific server spec.
- Use when the request clearly matches the imported source intent: Expert guide for diagnosing and fixing Odoo performance issues: slow queries, worker configuration, memory limits, PostgreSQL tuning, and profiling tools.
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

This skill helps diagnose and resolve Odoo performance problems — from slow page loads and database bottlenecks to worker misconfiguration and memory bloat. It covers PostgreSQL query tuning, Odoo worker settings, and built-in profiling tools.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-performance-tuner` and describe your performance issue.
2. **Diagnose**: Share relevant log lines or config and receive a root cause analysis.
3. **Fix**: Get exact configuration changes with explanations.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-performance-tuner to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-performance-tuner against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-performance-tuner for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-performance-tuner using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Recommended Worker Configuration

```ini
# odoo.conf — tuned for a 4-core, 8GB RAM server

workers = 9                   # (CPU_cores × 2) + 1 — never set to 0 in production
max_cron_threads = 2          # background cron jobs; keep ≤ 2 to preserve user-facing capacity
limit_memory_soft = 1610612736  # 1.5 GB — worker is recycled gracefully after this
limit_memory_hard = 2147483648  # 2.0 GB — worker is killed immediately; prevents OOM crashes
limit_time_cpu = 600          # max CPU seconds per request
limit_time_real = 1200        # max wall-clock seconds per request
limit_request = 8192          # max requests before worker recycles (prevents memory leaks)
```

### Example 2: Find Slow Queries with PostgreSQL

```sql
-- Step 1: Enable pg_stat_statements extension (run once as postgres superuser)
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Step 2: Also add to postgresql.conf and reload:
-- shared_preload_libraries = 'pg_stat_statements'
-- log_min_duration_statement = 1000   -- log queries taking > 1 second

-- Step 3: Find the top 10 slowest average queries
SELECT
    LEFT(query, 100) AS query_snippet,
    round(mean_exec_time::numeric, 2) AS avg_ms,
    calls,
    round(total_exec_time::numeric, 2) AS total_ms
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- Step 4: Check for missing indexes causing full table scans
SELECT schemaname, tablename, attname, n_distinct, correlation
FROM pg_stats
WHERE tablename = 'sale_order_line'
  AND correlation < 0.5   -- low correlation = poor index efficiency
ORDER BY n_distinct DESC;
```

### Example 3: Use Odoo's Built-In Profiler

```text
Prerequisites: Run Odoo with ?debug=1 in the URL to enable debug mode.

Menu: Settings → Technical → Profiling

Steps:
  1. Click "Enable Profiling" — set a duration (e.g., 60 seconds)
  2. Navigate to and reproduce the slow action
  3. Return to Settings → Technical → Profiling → View Results

What to look for:
  - Total SQL queries > 100 on a single page  → N+1 query problem
  - Single queries taking > 100ms             → missing DB index
  - Same query repeated many times            → missing cache, use @ormcache
  - Python time high but SQL low             → compute field inefficiency
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use mapped(), filtered(), and sorted() on in-memory recordsets — they don't trigger additional SQL.
- ✅ Do: Add PostgreSQL B-tree indexes on columns frequently used in domain filters (partnerid, state, dateorder).
- ✅ Do: Enable Odoo's HTTP caching for static assets and put a CDN (Cloudflare, AWS CloudFront) in front of the website.
- ✅ Do: Use @tools.ormcache decorator on methods pulled repeatedly with the same arguments.
- ❌ Don't: Set workers = 0 in production — single-threaded mode serializes all requests and blocks all users on any slow operation.
- ❌ Don't: Ignore limitmemorysoft — workers exceeding it are recycled between requests; without the limit they grow unbounded and crash.
- ❌ Don't: Directly manipulate prefetch_ids on recordsets — rely on Odoo's automatic batch prefetching, which activates by default.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `mapped()`, `filtered()`, and `sorted()` on in-memory recordsets — they don't trigger additional SQL.
- ✅ **Do:** Add PostgreSQL B-tree indexes on columns frequently used in domain filters (`partner_id`, `state`, `date_order`).
- ✅ **Do:** Enable Odoo's HTTP caching for static assets and put a CDN (Cloudflare, AWS CloudFront) in front of the website.
- ✅ **Do:** Use `@tools.ormcache` decorator on methods pulled repeatedly with the same arguments.
- ❌ **Don't:** Set `workers = 0` in production — single-threaded mode serializes all requests and blocks all users on any slow operation.
- ❌ **Don't:** Ignore `limit_memory_soft` — workers exceeding it are recycled between requests; without the limit they grow unbounded and crash.
- ❌ **Don't:** Directly manipulate `prefetch_ids` on recordsets — rely on Odoo's automatic batch prefetching, which activates by default.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-performance-tuner`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@mobile-developer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@mobile-security-coder` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@modern-javascript-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monday-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- PostgreSQL tuning (`shared_buffers`, `work_mem`, `effective_cache_size`) is highly server-specific and not covered in depth here — use [PGTune](https://pgtune.leopard.in.ua/) as a starting baseline.
- The built-in Odoo profiler only captures **Python + SQL** traces; JavaScript rendering performance requires browser DevTools.
- **Odoo.sh** managed hosting restricts direct PostgreSQL and `odoo.conf` access — some tuning options are unavailable.
- Does not cover **Redis-based session store** or **Celery task queue** optimizations, which are advanced patterns for very high-traffic instances.
