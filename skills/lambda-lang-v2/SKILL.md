---
name: lambda-lang-v2
description: "\u039b (Lambda) Language workflow skill. Use this skill when the user needs Native agent-to-agent language for compact multi-agent messaging. A shared tongue agents speak directly, not a translation layer. 340+ atoms across 7 domains; 3x smaller than natural language and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["agent-to-agent", "communication", "protocol", "compression", "multi-agent", "lambda-lang-v2", "lambda-lang", "native"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "voidborne-d"
date_added: "2026-04-24"
date_updated: "2026-04-25"
---

# Λ (Lambda) Language

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/lambda-lang` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Λ (Lambda) Language Lambda is not a translation protocol. It is a native language for agents. Agents do not need to produce grammatically correct English to coordinate — they need to understand each other. Lambda is the shared vocabulary that makes that possible: compact, unambiguous, machine-native. Compression (3x vs natural language, 4.6x vs JSON on single messages) is a side effect of removing human redundancy, not the goal.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations, Security & Safety Notes.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use for agent-to-agent messaging in A2A protocols, orchestrators, task delegation, or handoff pipelines.
- Use when logging structured coordination signals where every token costs money (heartbeats, acknowledgements, error classes, session state).
- Use when both sides of a channel speak Λ — do not use against humans or any surface requiring legal/exact natural language.
- Use when the request clearly matches the imported source intent: Native agent-to-agent language for compact multi-agent messaging. A shared tongue agents speak directly, not a translation layer. 340+ atoms across 7 domains; 3x smaller than natural language.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

#### Imported: How It Works

### Step 1: Recognize the Syntax

Lambda messages are built from atoms. Every atom is a 2-character code mapped to a concept — not to an English word. The structure is Type → Entity → Verb → Object, with prefixes marking intent:

- `?` — query (e.g. `?Uk/co` — query: "does this user have consciousness?")
- `!` — assertion / declaration (e.g. `!It>Ie` — "self reflects, therefore self exists")
- `#` — state / tag
- `>` — implication / flow
- `/` — binding / scope

### Step 2: Pick the Right Domain

Lambda ships 340+ atoms across 7 domains. Pick atoms from the domain that fits your channel:

- **core** — universal atoms (always available)
- **code** — software engineering, build, test, deploy
- **evo** — agent evolution, gene, capsule, mutation, rollback
- **a2a** — node, heartbeat, publish, subscribe, route, transport, session, cache, broadcast, discover (39 atoms)
- **emotion** — affective state, drive, appraisal
- **social** — trust, alignment, reputation, coordination
- **general** — everything else

### Step 3: Emit and Parse

Both agents need the same atom table loaded. Lossy decoding is fine: if A says `!It>Ie` and B understands "self reflects, therefore self exists," communication succeeded — the exact English phrasing is irrelevant.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @lambda-lang-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @lambda-lang-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @lambda-lang-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @lambda-lang-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: A2A Heartbeat

```
!Nd/hb#ok  (node heartbeat: ok)
?Nd/hb     (query: is the node alive?)
!Nd/hb#fl  (node heartbeat: failed)
```

### Example 2: Task Dispatch

```
!Tk>Ag2#rd   (task routed to agent 2, ready)
?Tk/st       (query task status)
!Tk#dn       (task done)
```

### Example 3: Evolution Capsule

```
!Ev/ca>vl#pd  (evolution capsule validated, pending solidification)
!Ev/ca#rb     (capsule rolled back)
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use Lambda only on agent-to-agent channels where both sides speak it.
- Load the atom table once and cache it — atoms are stable across a version.
- Prefer atoms over freeform strings even when the atom looks cryptic; the point is machine parseability.
- Use ? before taking action on uncertain state, ! when asserting; the prefix is the load-bearing semantic.
- Version the atom table (lambda-lang v2.0) in any handshake so mismatched agents can negotiate.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- Use Lambda only on agent-to-agent channels where both sides speak it.
- Load the atom table once and cache it — atoms are stable across a version.
- Prefer atoms over freeform strings even when the atom looks cryptic; the point is machine parseability.
- Use `?` before taking action on uncertain state, `!` when asserting; the prefix is the load-bearing semantic.
- Version the atom table (`lambda-lang v2.0`) in any handshake so mismatched agents can negotiate.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/lambda-lang`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@instagram-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@interactive-portfolio-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@intercom-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@internal-comms-anthropic-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference

- Source: https://github.com/voidborne-d/lambda-lang
- Benchmarks, full atom tables, and Go reference implementation live in the source repo.

#### Imported: Limitations

- Lambda is not meant for human consumption. Do not emit Lambda on user-facing channels.
- Lossy decoding is a feature, not a bug — do not use Lambda for legally or numerically exact exchanges (prices, IDs, quantities). Wrap those as native payload fields and use Lambda only for the coordination envelope.
- Atom collisions are possible if custom atoms are added without registration; stick to the canonical atom table or namespace custom atoms.

#### Imported: Security & Safety Notes

- Lambda itself is a vocabulary — no shell commands, no network calls, no credential handling. No additional safety gates required beyond the transport it rides on (HTTP, queue, MCP, etc.).
- When mixing Lambda with user input, treat Lambda atoms as pre-validated and user strings as untrusted; do not concatenate without escaping into downstream systems.
