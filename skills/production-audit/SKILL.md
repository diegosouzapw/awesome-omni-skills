---
name: production-audit
description: "Production Audit workflow skill. Use this skill when the user needs Audit a shipped repo for production-readiness gaps across RLS, webhooks, secrets, grants, Stripe idempotency, mobile UX, and deployment health and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["security", "audit", "production", "vibe-coding", "rls", "webhook", "stripe", "supabase"]
complexity: advanced
risk: caution
tools: ["cursor", "antigravity", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "commitshow"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Production Audit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/production-audit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Production Audit

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security & Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user asks "is this production-ready", "what would break in prod", "score my project", "what did I miss", "audit my repo", "ready to ship".
- Use right after merging a feature branch to main (helpful as a pre-deploy gate).
- Use before a public launch / Show HN post / investor demo.
- Use when git log shows >20 commits since the last .commitshow/audit.md was written.
- During active in-session coding — use security-review / OWASP-style for line-level patterns. This skill is for post-merge / pre-ship review.
- For library / scaffold-form repos — the engine handles app form best; libraries get a partial-substitute score.

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

A skill that runs an external audit on a shipped repo's deployed state — live URL, GitHub signals, secrets exposure, RLS gaps, webhook idempotency, indexes, observability, prompt injection, and ten other failure modes that AI-assisted projects routinely miss.

This is **complementary** to in-session security skills (`security-review`, OWASP-style, VibeSec, Trail of Bits). Those scan the editor buffer at write-time. This scans the deployed product after you commit. Different timing, different inputs, different findings. Run both for serious launches.

The skill wraps the [commit.show](https://commit.show) audit engine via the public CLI (`npx commitshow@0.3.23 audit . --json`). Stable JSON envelope (`schema_version: "1"`, additive-only). Writes a `.commitshow/audit.{md,json}` sidecar so future agent sessions can read prior state without re-running the engine.

#### Imported: How It Works

### Step 1: Run the audit

From the repo root. The CLI is pinned to an exact reviewed version so future npm releases are not selected silently. Because `npx` downloads and runs npm package code locally with the current user's permissions, run it only after the user explicitly approves this external execution and only in a repository where local files and environment variables are safe for that process to access. The sidecar directory is created up-front, and stderr is split off so install/deprecation warnings can't corrupt the JSON envelope:

```bash
mkdir -p .commitshow
npx commitshow@0.3.23 audit . --json \
  > .commitshow/audit.json \
  2> .commitshow/audit.stderr.log
```

This also writes a human-readable `.commitshow/audit.md` next to it. Subsequent invocations should diff against the prior `audit.json` if it exists, so you can lead with "+5 since yesterday's audit" instead of just an absolute number.

If the user pointed at a remote URL instead of `.`, swap `.` for the URL — keep the same `mkdir -p` + version pin + stderr split:

```bash
mkdir -p .commitshow
npx commitshow@0.3.23 audit github.com/owner/repo --json \
  > .commitshow/audit.json \
  2> .commitshow/audit.stderr.log
```

### Step 2: Parse the envelope

The JSON envelope is stable (`schema_version: "1"`, additive-only). Read these fields:

| Field | Meaning |
|---|---|
| `score.total` | 0-100 production-readiness score |
| `score.delta_since_last` | change vs. parent snapshot · positive = improving |
| `score.band` | `strong` (80+) · `mid` (60-79) · `early` (<60) |
| `concerns[]` | top issues, ordered by impact · each has `axis` + `bullet` |
| `strengths[]` | top 3 things that work · for context only |
| `standing` | optional · only when the project is auditioning on commit.show |
| `snapshot.created_at` / `trigger_type` | when the audit ran |

Concerns are sorted by decision-impact, not severity. Position 1 is the bullet to lead with.

### Step 3: Surface to the user

Lead with score + trajectory in **one sentence**, then the top concerns. Do not dump the full JSON. Format:

```
Score: 82/100 (+5 since yesterday) · band: strong

Top concerns:
  ↓ [Security] No API rate limiting on /auth — IP cap missing
  ↓ [Infrastructure] webhook handler at api/stripe.ts — signature verified, but no
    idempotency-key check (replay attack window open)

Want me to fix the webhook idempotency gap first?
```

Rules:
- Use the exact bullet from `concerns[].bullet` — the audit engine already wrote action-oriented copy.
- Don't list strengths unless the user explicitly asks. They're not actionable in this context.
- Always end with a follow-up question that names a specific concern. Don't ask "what do you want to do?" — ask "fix X first?".
- If `score.delta_since_last` is negative or null, lead with the absolute score only.

### Step 4: If the user picks a concern, scope a fix

For the chosen concern:
1. Read the file(s) cited in the bullet.
2. Confirm the gap matches the description (the engine occasionally over-flags when the issue is mitigated elsewhere).
3. Propose a minimal patch — single-file when possible.
4. **Don't apply without explicit approval.** Show the diff first. The user is deciding what to ship; you're a lens.

After applying a fix, suggest re-running with `--refresh` (same canonical form as Step 1, so `audit.json` stays the source of truth for delta calculations):

```bash
mkdir -p .commitshow
npx commitshow@0.3.23 audit . --json --refresh \
  > .commitshow/audit.json \
  2> .commitshow/audit.stderr.log
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @production-audit to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @production-audit against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @production-audit for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @production-audit using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: User asks "is this production-ready?"

```bash
mkdir -p .commitshow
npx commitshow@0.3.23 audit . --json \
  > .commitshow/audit.json \
  2> .commitshow/audit.stderr.log
```

Then surface:

```
Score: 67/100 · band: mid

Top concerns:
  ↓ [Security] members table uses column-level GRANT but paid_audits_credit
    column lacks SELECT grant — silent 42501 on every read
  ↓ [Infrastructure] stripe.checkout.sessions.create called without
    idempotencyKey — duplicate-charge surface

Want me to fix the column GRANT first? Single SQL line.
```

### Example 2: Cross-check a specific concern

User: "show me where the webhook idempotency gap is"

```bash
cat .commitshow/audit.json | jq '.concerns[] | select(.axis=="Infrastructure")'
```

Find the file path in the bullet, read it, confirm the gap matches.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Always cite the exact bullet from concerns[].bullet — they're already action-oriented
- ✅ Lead with score + delta in a single sentence, then concerns
- ✅ End with a specific follow-up question naming a concern
- ✅ Read prior .commitshow/audit.json before re-running (within 1h)
- ✅ Use --refresh after the user merges a fix so the next audit reflects it
- ❌ Don't dump full JSON to the user
- ❌ Don't list strengths unless the user explicitly asks

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Always cite the exact bullet from `concerns[].bullet` — they're already action-oriented
- ✅ Lead with score + delta in a single sentence, then concerns
- ✅ End with a specific follow-up question naming a concern
- ✅ Read prior `.commitshow/audit.json` before re-running (within 1h)
- ✅ Use `--refresh` after the user merges a fix so the next audit reflects it
- ❌ Don't dump full JSON to the user
- ❌ Don't list strengths unless the user explicitly asks
- ❌ Don't apply fixes without approval — show diff first
- ❌ Don't fault private repos for not auditing — explain why and suggest making public

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/production-audit`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Additional Resources

- Canonical repo: <https://github.com/commitshow/production-audit>
- Audit engine source: <https://github.com/commitshow/commitshow/blob/main/supabase/functions/analyze-project/index.ts>
- 14-frame failure framework documented in the engine source above.
- JSON schema: stable at `schema_version: "1"` · additive-only changes.
- CLI: <https://github.com/commitshow/cli>
- Public REST API: `https://api.commit.show/audit?repo=...&format=json`
- skills.sh listing: <https://skills.sh/commitshow/production-audit>

#### Imported: Limitations

- This skill does not replace environment-specific validation, testing, or expert review.
- The audit engine is calibrated for **deployed apps** with a live URL. CLI / library / scaffold form gets a partial-substitute score (max ~45/50 on the audit pillar) — fair but not flattering.
- Behind a corporate firewall blocking `*.supabase.co`, the API call fails. There is no offline mode — the audit relies on the public engine.
- Cold audit takes 60-90s. Cached audits (within 7 days) return instantly. `--refresh` force-bypasses cache (counts against rate limits).

#### Imported: Security & Safety Notes

- The skill executes `npx commitshow@0.3.23 audit ...`, which downloads and runs that exact npm package version locally, then calls the public API at `https://api.commit.show` (proxied to Supabase Edge Functions). Do not replace the exact version with `latest` or a semver range during normal use.
- Treat the CLI as external code with local process privileges. It must not be run in repositories containing secrets or sensitive uncommitted files unless the user has explicitly accepted that risk. No credentials are intentionally sent to the API, but the local process can access files and environment variables available to the current user.
- The CLI writes `.commitshow/audit.{md,json}` in the current working directory. These files are safe to commit (no secrets) but conventionally gitignored as transient artifacts.
- The audit engine **only reads** public GitHub signals. It does not modify the user's repo or push commits.
- All per-finding fix proposals must be shown as diffs and approved by the user before any edit. Never apply without explicit confirmation.

#### Imported: Common Pitfalls

- **Problem:** Audit returns `not_found` for a private repo
  **Solution:** The engine pulls public GitHub signals only. Either make the repo public or use `--no-network` for local-only deterministic checks.

- **Problem:** Rate limit hit (`429`)
  **Solution:** Wait until next day (limits reset 00:00 UTC) or sign in at commit.show for higher per-repo caps.

- **Problem:** Score seems too low for a polished library / CLI
  **Solution:** The engine biases toward app form. CLI / library / scaffold gets a partial substitute score capped around 45/50 on the audit pillar. Calibration acknowledged trade-off.

- **Problem:** `concerns[]` is empty after re-running
  **Solution:** Re-audit may have hit cache. Use `--refresh` to force-bypass.
