---
name: "ai-native-cli-v2"
description: "Agent-Friendly CLI Spec v0.1 workflow skill. Use this skill when the user needs Design spec with 98 rules for building CLI tools that AI agents can safely use. Covers structured JSON output, error handling, input contracts, safety guardrails, exit codes, and agent self-description and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "ai-native-cli-v2"
  - "ai-native-cli"
  - "design"
  - "spec"
  - "rules"
  - "for"
  - "building"
  - "cli"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-20"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "ai-native-cli-v2"
family_name: "Agent-Friendly CLI Spec v0.1"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/ai-native-cli-v2"
upstream_skill: "skills/ai-native-cli-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "85"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "ai-native-cli-v2"
---

# Agent-Friendly CLI Spec v0.1

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ai-native-cli` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Agent-Friendly CLI Spec v0.1 When building or modifying CLI tools, follow these rules to make them safe and reliable for AI agents to use.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Philosophy, Layer Model, How It Works, Certification Requirements, Quick Implementation Checklist, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building a new CLI tool that AI agents will invoke
- Use when retrofitting an existing CLI to be agent-friendly
- Use when designing command-line interfaces for automation pipelines
- Use when auditing a CLI tool's compliance with agent-safety standards
- Use when the request clearly matches the imported source intent: Design spec with 98 rules for building CLI tools that AI agents can safely use. Covers structured JSON output, error handling, input contracts, safety guardrails, exit codes, and agent self-description.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

#### Imported: Overview

A comprehensive design specification for building AI-native CLI tools. It defines
98 rules across three certification levels (Agent-Friendly, Agent-Ready, Agent-Native)
with prioritized requirements (P0/P1/P2). The spec covers structured JSON output,
error handling, input contracts, safety guardrails, exit codes, self-description,
and a feedback loop via a built-in issue system.

#### Imported: Core Philosophy

1. **Agent-first** -- default output is JSON; human-friendly is opt-in via `--human`
2. **Agent is untrusted** -- validate all input at the same level as a public API
3. **Fail-Closed** -- when validation logic itself errors, deny by default
4. **Verifiable** -- every rule is written so it can be automatically checked

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-native-cli-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ai-native-cli-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ai-native-cli-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ai-native-cli-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: JSON Output (Agent Mode)

```bash
$ mycli list
{"result": [{"id": 1, "title": "Buy milk", "status": "todo"}], "rules": [...], "skills": [...], "issue": "..."}
```

### Example 2: Structured Error

```json
{
  "error": true,
  "code": "AUTH_EXPIRED",
  "message": "Access token expired 2 hours ago",
  "suggestion": "Run 'mycli auth refresh' to get a new token"
}
```

### Example 3: Exit Code Table

```
0   success         10  auth failed       20  resource not found
1   general error   11  permission denied 30  conflict/precondition
2   param/usage error
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Do: Default to JSON output so agents never need to add flags
- Do: Include suggestion field in every error response
- Do: Use the three-level certification model for incremental adoption
- Do: Keep agent/brief.md to one paragraph for token efficiency
- Don't: Enter interactive mode on errors -- always exit immediately
- Don't: Change JSON schema or error codes within the same version
- Don't: Put logs or progress info on stdout -- use stderr only

### Imported Operating Notes

#### Imported: Best Practices

- Do: Default to JSON output so agents never need to add flags
- Do: Include `suggestion` field in every error response
- Do: Use the three-level certification model for incremental adoption
- Do: Keep `agent/brief.md` to one paragraph for token efficiency
- Don't: Enter interactive mode on errors -- always exit immediately
- Don't: Change JSON schema or error codes within the same version
- Don't: Put logs or progress info on stdout -- use stderr only
- Don't: Accept unknown flags silently -- reject with exit code 2

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ai-native-cli`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Additional Resources

- [Agent CLI Spec Repository](https://github.com/ChaosRealmsAI/agent-cli-spec)

#### Imported: Layer Model

This spec uses two orthogonal axes:

- **Layer** answers rollout scope: `core`, `recommended`, `ecosystem`
- **Priority** answers severity: `P0`, `P1`, `P2`

Use layers for migration and certification:

- **core** -- execution contract: JSON, errors, exit codes, stdout/stderr, safety
- **recommended** -- better machine UX: self-description, explicit modes, richer schemas
- **ecosystem** -- agent-native integration: `agent/`, `skills`, `issue`, inline context

Certification maps to layers:

- **Agent-Friendly** -- all `core` rules pass
- **Agent-Ready** -- all `core` + `recommended` rules pass
- **Agent-Native** -- all layers pass

#### Imported: How It Works

### Step 1: Output Mode

Default is agent mode (JSON). Explicit flags to switch:

```bash
$ mycli list              # default = JSON output (agent mode)
$ mycli list --human      # human-friendly: colored, tables, formatted
$ mycli list --agent      # explicit agent mode (override config if needed)
```

- **Default (no flag)** -- JSON to stdout. Agent never needs to add a flag.
- **--human** -- human-friendly format (colors, tables, progress bars)
- **--agent** -- explicit JSON mode (useful when env/config overrides default)

### Step 2: agent/ Directory Convention

Every CLI tool MUST have an `agent/` directory at its project root. This is the
tool's identity and behavior contract for AI agents.

```
agent/
  brief.md          # One paragraph: who am I, what can I do
  rules/            # Behavior constraints (auto-registered)
    trigger.md      # When should an agent use this tool
    workflow.md     # Step-by-step usage flow
    writeback.md    # How to write feedback back
  skills/           # Extended capabilities (auto-registered)
    getting-started.md
```

### Step 3: Four Levels of Self-Description

1. **--brief** (business card, injected into agent config)
2. **Every Command Response** (always-on context: data + rules + skills + issue)
3. **--help** (full self-description: brief + commands + rules + skills + issue)
4. **skills \<name\>** (on-demand deep dive into a specific skill)

#### Imported: Certification Requirements

Each level includes all rules from the previous level.
Priority tag `[P0]`=agent breaks without it, `[P1]`=agent works but poorly, `[P2]`=nice to have.

### Level 1: Agent-Friendly (core -- 20 rules)

Goal: CLI is a stable, callable API. Agent can invoke, parse, and handle errors.

**Output** -- default is JSON, stable schema
- `[P0]` O1: Default output is JSON. No `--json` flag needed
- `[P0]` O2: JSON MUST pass `jq .` validation
- `[P0]` O3: JSON schema MUST NOT change within same version

**Error** -- structured, to stderr, never interactive
- `[P0]` E1: Errors -> `{"error":true, "code":"...", "message":"...", "suggestion":"..."}` to stderr
- `[P0]` E4: Error has machine-readable `code` (e.g. `MISSING_REQUIRED`)
- `[P0]` E5: Error has human-readable `message`
- `[P0]` E7: On error, NEVER enter interactive mode -- exit immediately
- `[P0]` E8: Error codes are API contracts -- MUST NOT rename across versions

**Exit Code** -- predictable failure signals
- `[P0]` X3: Parameter/usage errors MUST exit 2
- `[P0]` X9: Failures MUST exit non-zero -- never exit 0 then report error in stdout

**Composability** -- clean pipe semantics
- `[P0]` C1: stdout is for data ONLY
- `[P0]` C2: logs, progress, warnings go to stderr ONLY

**Input** -- fail fast on bad input
- `[P1]` I4: Missing required param -> structured error, never interactive prompt
- `[P1]` I5: Type mismatch -> exit 2 + structured error

**Safety** -- protect against agent mistakes
- `[P1]` S1: Destructive ops require `--yes` confirmation
- `[P1]` S4: Reject `../../` path traversal, control chars

**Guardrails** -- runtime input protection
- `[P1]` G1: Unknown flags rejected with exit 2
- `[P1]` G2: Detect API key / token patterns in args, reject execution
- `[P1]` G3: Reject sensitive file paths (*.env, *.key, *.pem)
- `[P1]` G8: Reject shell metacharacters in arguments (; | && $())

### Level 2: Agent-Ready (+ recommended -- 59 rules)

Goal: CLI is self-describing, well-named, and pipe-friendly. Agent discovers capabilities and chains commands without trial and error.

**Self-Description** -- agent discovers what CLI can do
- `[P1]` D1: `--help` outputs structured JSON with `commands[]`
- `[P1]` D3: Schema has required fields (help, commands)
- `[P1]` D4: All parameters have type declarations
- `[P1]` D7: Parameters annotated as required/optional
- `[P1]` D9: Every command has a description
- `[P1]` D11: `--help` outputs JSON with help, rules, skills, commands
- `[P1]` D15: `--brief` outputs `agent/brief.md` content
- `[P1]` D16: Default JSON (agent mode), `--human` for human-friendly
- `[P2]` D2/D5/D6/D8/D10: per-command help, enums, defaults, output schema, version

**Input** -- unambiguous calling convention
- `[P1]` I1: All flags use `--long-name` format
- `[P1]` I2: No positional argument ambiguity
- `[P2]` I3/I6/I7: --json-input, boolean --no-X, array params

**Error**
- `[P1]` E6: Error includes `suggestion` field
- `[P2]` E2/E3: errors to stderr, error JSON valid

**Safety**
- `[P1]` S8: `--sanitize` flag for external input
- `[P2]` S2/S3/S5/S6/S7: default deny, --dry-run, no auto-update, destructive marking

**Exit Code**
- `[P1]` X1: 0 = success
- `[P2]` X2/X4-X8: 1=general, 10=auth, 11=permission, 20=not-found, 30=conflict

**Composability**
- `[P1]` C6: No interactive prompts in pipe mode
- `[P2]` C3/C4/C5/C7: pipe-friendly, --quiet, pipe chain, idempotency

**Naming** -- predictable flag conventions
- `[P1]` N4: Reserved flags (--agent, --human, --brief, --help, --version, --yes, --dry-run, --quiet, --fields)
- `[P2]` N1/N2/N3/N5/N6: consistent naming, kebab-case, max 3 levels, --version semver

**Guardrails**
- `[P1]` I8/I9: no implicit state, non-interactive auth
- `[P1]` G6/G9: precondition checks, fail-closed
- `[P2]` G4/G5/G7: permission levels, PII redaction, batch limits

#### Reserved Flags

| Flag | Semantics | Notes |
|------|-----------|-------|
| `--agent` | JSON output (default) | Explicit override |
| `--human` | Human-friendly output | Colors, tables, formatted |
| `--brief` | One-paragraph identity | For sync into agent config |
| `--help` | Full self-description JSON | Brief + commands + rules + skills + issue |
| `--version` | Semver version string | |
| `--yes` | Confirm destructive ops | Required for delete/destroy |
| `--dry-run` | Preview without executing | |
| `--quiet` | Suppress stderr output | |
| `--fields` | Filter output fields | Save tokens |

### Level 3: Agent-Native (+ ecosystem -- 19 rules)

Goal: CLI has identity, behavior contract, skill system, and feedback loop. Agent can learn the tool, extend its use, and report problems -- full closed-loop collaboration.

**Agent Directory** -- tool identity and behavior contract
- `[P1]` D12: `agent/brief.md` exists
- `[P1]` D13: `agent/rules/` has trigger.md, workflow.md, writeback.md
- `[P1]` D17: agent/rules/*.md have YAML frontmatter (name, description)
- `[P1]` D18: agent/skills/*.md have YAML frontmatter (name, description)
- `[P2]` D14: `agent/skills/` directory + `skills` subcommand

**Response Structure** -- inline context on every call
- `[P1]` R1: Every response includes `rules[]` (full content from agent/rules/)
- `[P1]` R2: Every response includes `skills[]` (name + description + command)
- `[P1]` R3: Every response includes `issue` (feedback guide)

**Meta** -- project-level integration
- `[P2]` M1: AGENTS.md at project root
- `[P2]` M2: Optional MCP tool schema export
- `[P2]` M3: CHANGELOG.md marks breaking changes

**Feedback** -- built-in issue system
- `[P2]` F1: `issue` subcommand (create/list/show)
- `[P2]` F2: Structured submission with version/context/exit_code
- `[P2]` F3: Categories: bug / requirement / suggestion / bad-output
- `[P2]` F4: Issues stored locally, no external service dependency
- `[P2]` F5: `issue list` / `issue show <id>` queryable
- `[P2]` F6: Issues have status tracking (open/in-progress/resolved/closed)
- `[P2]` F7: Issue JSON has all required fields (id, type, status, message, created_at, updated_at)
- `[P2]` F8: All issues have status field

#### Imported: Quick Implementation Checklist

Implement by layer -- each phase gets you the next certification level.

**Phase 1: Agent-Friendly (core)**
1. Default output is JSON -- no `--json` flag needed
2. Error handler: `{ error, code, message, suggestion }` to stderr
3. Exit codes: 0 success, 2 param error, 1 general
4. stdout = data only, stderr = logs only
5. Missing param -> structured error (never interactive)
6. `--yes` guard on destructive operations
7. Guardrails: reject secrets, path traversal, shell metacharacters

**Phase 2: Agent-Ready (+ recommended)**
8. `--help` returns structured JSON (help, commands[], rules[], skills[])
9. `--brief` reads and outputs `agent/brief.md` content
10. `--human` flag switches to human-friendly format
11. Reserved flags: --agent, --version, --dry-run, --quiet, --fields
12. Exit codes: 20 not found, 30 conflict, 10 auth, 11 permission

**Phase 3: Agent-Native (+ ecosystem)**
13. Create `agent/` directory: `brief.md`, `rules/trigger.md`, `rules/workflow.md`, `rules/writeback.md`
14. Every command response appends: rules[] + skills[] + issue
15. `skills` subcommand: list all / show one with full content
16. `issue` subcommand for feedback (create/list/show/close/transition)
17. AGENTS.md at project root

#### Imported: Common Pitfalls

- **Problem:** CLI outputs human-readable text by default, breaking agent parsing
  **Solution:** Make JSON the default output format; add `--human` flag for human-friendly mode

- **Problem:** Errors reported in stdout with exit code 0
  **Solution:** Always exit non-zero on failure and write structured error JSON to stderr

- **Problem:** CLI prompts for missing input interactively
  **Solution:** Return structured error with suggestion field and exit immediately

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
