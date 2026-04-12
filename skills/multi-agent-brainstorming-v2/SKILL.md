---
name: multi-agent-brainstorming-v2
description: "Multi-Agent Brainstorming (Structured Design Review) workflow skill. Use this skill when the user needs Simulate a structured peer-review process using multiple specialized agents to validate designs, surface hidden assumptions, and identify failure modes before implementation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["multi-agent-brainstorming-v2", "multi-agent-brainstorming", "simulate", "structured", "peer-review", "process", "using", "multiple"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Multi-Agent Brainstorming (Structured Design Review)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/multi-agent-brainstorming` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Multi-Agent Brainstorming (Structured Design Review)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Operating Model, Agent Roles (Non-Negotiable), Decision Log (Mandatory Artifact), Exit Criteria (Hard Stop), Final Reminder.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Simulate a structured peer-review process using multiple specialized agents to validate designs, surface hidden assumptions, and identify failure modes before implementation.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Primary Designer runs the standard brainstorming skill
2. Understanding Lock is completed and confirmed
3. Initial design is produced
4. Decision Log is started
5. Skeptic / Challenger
6. Constraint Guardian
7. User Advocate

### Imported Workflow Notes

#### Imported: The Process

### Phase 1 — Single-Agent Design

1. Primary Designer runs the **standard `brainstorming` skill**
2. Understanding Lock is completed and confirmed
3. Initial design is produced
4. Decision Log is started

No other agents participate yet.

---

### Phase 2 — Structured Review Loop

Agents are invoked **one at a time**, in the following order:

1. Skeptic / Challenger
2. Constraint Guardian
3. User Advocate

For each reviewer:
- Feedback must be explicit and scoped
- Objections must reference assumptions or decisions
- No new features may be introduced

Primary Designer must:
- Respond to each objection
- Revise the design if required
- Update the Decision Log

---

### Phase 3 — Integration & Arbitration

The Integrator / Arbiter reviews:
- the final design
- the Decision Log
- unresolved objections

The Arbiter must explicitly decide:
- which objections are accepted
- which are rejected (with rationale)

---

#### Imported: Purpose

Transform a single-agent design into a **robust, review-validated design**
by simulating a formal peer-review process using multiple constrained agents.

This skill exists to:
- surface hidden assumptions
- identify failure modes early
- validate non-functional constraints
- stress-test designs before implementation
- prevent idea swarm chaos

This is **not parallel brainstorming**.
It is **sequential design review with enforced roles**.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @multi-agent-brainstorming-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/multi-agent-brainstorming-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/multi-agent-brainstorming-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @multi-agent-brainstorming-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- One designer, many reviewers
- Creativity is centralized
- Critique is constrained
- Decisions are explicit
- Process must terminate
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Key Principles

- One designer, many reviewers
- Creativity is centralized
- Critique is constrained
- Decisions are explicit
- Process must terminate

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/multi-agent-brainstorming`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Failure Modes This Skill Prevents

- Idea swarm chaos
- Hallucinated consensus
- Overconfident single-agent designs
- Hidden assumptions
- Premature implementation
- Endless debate

---

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

#### Imported: Operating Model

- One agent designs.
- Other agents review.
- No agent may exceed its mandate.
- Creativity is centralized; critique is distributed.
- Decisions are explicit and logged.

The process is **gated** and **terminates by design**.

---

#### Imported: Agent Roles (Non-Negotiable)

Each agent operates under a **hard scope limit**.

### 1️⃣ Primary Designer (Lead Agent)

**Role:**
- Owns the design
- Runs the standard `brainstorming` skill
- Maintains the Decision Log

**May:**
- Ask clarification questions
- Propose designs and alternatives
- Revise designs based on feedback

**May NOT:**
- Self-approve the final design
- Ignore reviewer objections
- Invent requirements post-lock

---

### 2️⃣ Skeptic / Challenger Agent

**Role:**
- Assume the design will fail
- Identify weaknesses and risks

**May:**
- Question assumptions
- Identify edge cases
- Highlight ambiguity or overconfidence
- Flag YAGNI violations

**May NOT:**
- Propose new features
- Redesign the system
- Offer alternative architectures

Prompting guidance:
> “Assume this design fails in production. Why?”

---

### 3️⃣ Constraint Guardian Agent

**Role:**
- Enforce non-functional and real-world constraints

Focus areas:
- performance
- scalability
- reliability
- security & privacy
- maintainability
- operational cost

**May:**
- Reject designs that violate constraints
- Request clarification of limits

**May NOT:**
- Debate product goals
- Suggest feature changes
- Optimize beyond stated requirements

---

### 4️⃣ User Advocate Agent

**Role:**
- Represent the end user

Focus areas:
- cognitive load
- usability
- clarity of flows
- error handling from user perspective
- mismatch between intent and experience

**May:**
- Identify confusing or misleading aspects
- Flag poor defaults or unclear behavior

**May NOT:**
- Redesign architecture
- Add features
- Override stated user goals

---

### 5️⃣ Integrator / Arbiter Agent

**Role:**
- Resolve conflicts
- Finalize decisions
- Enforce exit criteria

**May:**
- Accept or reject objections
- Require design revisions
- Declare the design complete

**May NOT:**
- Invent new ideas
- Add requirements
- Reopen locked decisions without cause

---

#### Imported: Decision Log (Mandatory Artifact)

The Decision Log must record:

- Decision made
- Alternatives considered
- Objections raised
- Resolution and rationale

No design is considered valid without a completed log.

---

#### Imported: Exit Criteria (Hard Stop)

You may exit multi-agent brainstorming **only when all are true**:

- Understanding Lock was completed
- All reviewer agents have been invoked
- All objections are resolved or explicitly rejected
- Decision Log is complete
- Arbiter has declared the design acceptable
- 
If any criterion is unmet:
- Continue review
- Do NOT proceed to implementation
If this skill was invoked by a routing or orchestration layer, you MUST report the final disposition explicitly as one of: APPROVED, REVISE, or REJECT, with a brief rationale.
---

#### Imported: Final Reminder

This skill exists to answer one question with confidence:

> “If this design fails, did we do everything reasonable to catch it early?”

If the answer is unclear, **do not exit this skill**.
