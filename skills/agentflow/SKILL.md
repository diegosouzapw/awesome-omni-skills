---
name: agentflow
description: "AgentFlow workflow skill. Use this skill when the user needs Orchestrate autonomous AI development pipelines through your Kanban board (Asana, GitHub Projects, Linear). Manages multi-worker Claude Code dispatch, deterministic quality gates, adversarial review, per-task cost tracking, and crash-proof pipeline execution and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["agentflow", "orchestrate", "autonomous", "development", "pipelines", "your", "kanban", "board"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# AgentFlow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/agentflow` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# AgentFlow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Quality Gates, Cost Tracking, Safety and Recovery.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to orchestrate multiple Claude Code workers across a full development lifecycle (build, review, test, integrate)
- Use when you want deterministic quality gates (tsc/eslint/tests) before AI review on AI-generated code
- Use when you want full pipeline visibility from your Kanban board or phone
- Use when running a solo or team project that needs autonomous task dispatch with cost tracking
- Use when you need crash-proof orchestration that survives session restarts
- Use when the request clearly matches the imported source intent: Orchestrate autonomous AI development pipelines through your Kanban board (Asana, GitHub Projects, Linear). Manages multi-worker Claude Code dispatch, deterministic quality gates, adversarial review, per-task cost....

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

1. Write Your Spec Create a SPEC.md for your project describing what you want to build.
2. Decompose Into Tasks ` claude -p "/spec-to-board" This reads your SPEC.md, decomposes it into atomic tasks, maps dependencies, and creates them on your Kanban board.
3. Start Workers Open 3-4 terminal windows, each as a worker slot: bash # Terminal 2 — Builder claude -p "/sdlc-worker --slot T2" # Terminal 3 — Builder claude -p "/sdlc-worker --slot T3" # Terminal 4 — Reviewer claude -p "/sdlc-worker --slot T4" # Terminal 5 — Tester claude -p "/sdlc-worker --slot T5" ### 4.
4. Start the Orchestrator bash # Add to crontab (runs every 15 minutes) crontab -e # Add: /15 ~/.claude/sdlc/agentflow-cron.sh >> /tmp/agentflow-orchestrate.log 2>&1 ### 5.
5. Monitor and Intervene Open your Kanban board on your phone.
6. Watch tasks flow through the pipeline.
7. Drag any card to "Needs Human" to intervene.

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Write Your Spec

Create a `SPEC.md` for your project describing what you want to build.

### 2. Decompose Into Tasks

```
claude -p "/spec-to-board"
```

This reads your SPEC.md, decomposes it into atomic tasks, maps dependencies, and creates them on your Kanban board.

### 3. Start Workers

Open 3-4 terminal windows, each as a worker slot:

```bash
# Terminal 2 — Builder
claude -p "/sdlc-worker --slot T2"

# Terminal 3 — Builder
claude -p "/sdlc-worker --slot T3"

# Terminal 4 — Reviewer
claude -p "/sdlc-worker --slot T4"

# Terminal 5 — Tester
claude -p "/sdlc-worker --slot T5"
```

### 4. Start the Orchestrator

```bash
# Add to crontab (runs every 15 minutes)
crontab -e
# Add: */15 * * * * ~/.claude/sdlc/agentflow-cron.sh >> /tmp/agentflow-orchestrate.log 2>&1
```

### 5. Monitor and Intervene

Open your Kanban board on your phone. Watch tasks flow through the pipeline. Drag any card to "Needs Human" to intervene. Run `/sdlc-health` for a terminal dashboard.

### 6. Stop the Pipeline

```
claude -p "/sdlc-stop"
```

#### Imported: Installation

```bash
# Clone the repo
git clone https://github.com/UrRhb/agentflow.git

# Copy skills and prompts to your Claude Code config
cp -r agentflow/skills/* ~/.claude/skills/
cp -r agentflow/prompts/* ~/.claude/sdlc/prompts/
cp agentflow/conventions.md ~/.claude/sdlc/conventions.md
```

Or install as a Claude Code plugin:

```bash
/plugin marketplace add UrRhb/agentflow
/plugin install agentflow
```

#### Imported: Overview

AgentFlow turns your existing Kanban board into a fully autonomous AI development pipeline. Instead of building custom orchestration infrastructure, it treats your project management tool (Asana, GitHub Projects, Linear) as a distributed state machine — tasks move through stages, AI agents read and write state via comments, and humans intervene through the same UI they already use.

The result is complete pipeline observability from your phone, free crash recovery (state lives in your PM tool, not in memory), and human override at any point by dragging a card.

#### Imported: Core Concepts

### 7-Stage Kanban Pipeline

Tasks flow through: Backlog, Research, Build, Review, Test, Integrate, Done. Each stage has specific gates. The Kanban board IS the orchestration layer — no separate database, no message queue, no custom infrastructure.

### Stateless Orchestrator

A crontab-driven one-shot sweep runs every 15 minutes. No daemon, no session dependency. If it crashes, the next sweep picks up where it left off because all state lives in your PM tool.

### Deterministic Before Probabilistic

Hard gates (tsc + eslint + tests) run before any AI review, catching roughly 60% of issues at near-zero cost. AI review comes after, as a second layer.

### Adversarial Review

A different AI agent reviews code and must list 3 things wrong before deciding to pass. This prevents rubber-stamp approvals.

### Transitive Priority Dispatch

Tasks that unblock the most downstream work get built first, automatically computing the critical path.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agentflow to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/agentflow/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/agentflow/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @agentflow using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Skills / Commands

### `/spec-to-board`
Decomposes a SPEC.md into atomic tasks on your Kanban board with dependencies mapped.

### `/sdlc-orchestrate`
Dispatches tasks to workers based on transitive priority and conflict detection. Runs as a crontab sweep.

### `/sdlc-worker --slot <N>`
Runs a worker in a terminal slot that picks up tasks, builds code, and creates PRs. Run 3-4 workers in parallel.

### `/sdlc-health`
Real-time pipeline status dashboard showing current stage, assigned agent, retry count, and accumulated cost for every task.

### `/sdlc-stop`
Graceful shutdown: active workers finish their current task, unstarted tasks return to Backlog.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Do: Write a clear SPEC.md before running /spec-to-board
- Do: Start with 3-4 workers for a typical project
- Do: Monitor from your Kanban board and drag cards to "Needs Human" when needed
- Do: Review LEARNINGS.md periodically — it captures common failure patterns
- Don't: Skip the deterministic quality gates — they catch most issues cheaply
- Don't: Force-push to main — AgentFlow uses git revert for safety
- Don't: Run more workers than your project's parallelism supports

### Imported Operating Notes

#### Imported: Best Practices

- Do: Write a clear SPEC.md before running `/spec-to-board`
- Do: Start with 3-4 workers for a typical project
- Do: Monitor from your Kanban board and drag cards to "Needs Human" when needed
- Do: Review LEARNINGS.md periodically — it captures common failure patterns
- Don't: Skip the deterministic quality gates — they catch most issues cheaply
- Don't: Force-push to main — AgentFlow uses `git revert` for safety
- Don't: Run more workers than your project's parallelism supports

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/agentflow`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Problem: Worker appears stuck or dead
**Symptoms:** Task card hasn't moved in 15+ minutes, no new comments
**Solution:** The orchestrator detects dead agents via heartbeat and reassigns after 10 minutes. If the issue persists, run `/sdlc-health` to check status and manually drag the card back to Backlog.

### Problem: Cost guardrail triggered
**Symptoms:** Task moved to "Needs Human" with COST:CRITICAL tag
**Solution:** Review the task's comment thread for accumulated context. Decide whether to increase the budget, simplify the task, or split it into smaller pieces.

### Problem: Integration test failure after merge
**Symptoms:** Task auto-reverted from main
**Solution:** The auto-revert preserves main stability. Check the task's retry context in comments, which carries what was tried and what failed. The next worker assigned will use this context.

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

#### Imported: Additional Resources

- [AgentFlow Repository](https://github.com/UrRhb/agentflow)
- [Architecture Documentation](https://github.com/UrRhb/agentflow/blob/main/docs/architecture.md)
- [Gap Registry (45 failure modes)](https://github.com/UrRhb/agentflow/blob/main/docs/gap-registry.md)
- [Getting Started Guide](https://github.com/UrRhb/agentflow/blob/main/docs/getting-started.md)

#### Imported: Quality Gates

Each stage enforces specific gates before promotion:

- **Build to Review**: `tsc` + `eslint` + `npm test` must all pass (deterministic)
- **Review to Test**: Adversarial reviewer must list 3 issues before passing
- **Test to Integrate**: 80% coverage threshold on new files
- **Integrate to Done**: Full test suite on main after merge; auto-reverts on failure

#### Imported: Cost Tracking

Per-task cost tracking with stage ceilings (Sonnet defaults):

- Research: ~$0.10
- Build: ~$0.40
- Review: ~$0.10
- Test: ~$0.05
- Integrate: ~$0.03

Automatic guardrails: warning at $3/$8, hard stop at $10/$20 (Sonnet/Opus) with human escalation.

#### Imported: Safety and Recovery

- **Auto-revert**: Integration failures trigger `git revert` (new commit, never force-push)
- **Blocked tasks**: After 2 failed attempts, tasks escalate to human review
- **Dead agent detection**: Heartbeat every 5 min, reassign after 10 min timeout
- **Graceful shutdown**: `/sdlc-stop` drains workers, returns unstarted tasks to backlog
- **Scope creep detection**: PR diff files compared against predicted files list
- **Spec drift detection**: SHA-256 hash comparison catches requirement changes mid-sprint
