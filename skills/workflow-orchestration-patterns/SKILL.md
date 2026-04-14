---
name: workflow-orchestration-patterns
description: "Workflow Orchestration Patterns workflow skill. Use this skill when the user needs Master workflow orchestration architecture with Temporal, covering fundamental design decisions, resilience patterns, and best practices for building reliable distributed systems and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["workflow-orchestration-patterns", "master", "orchestration", "architecture", "temporal", "covering", "fundamental", "design"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Workflow Orchestration Patterns

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/workflow-orchestration-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Workflow Orchestration Patterns Master workflow orchestration architecture with Temporal, covering fundamental design decisions, resilience patterns, and best practices for building reliable distributed systems.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: State Management and Determinism, Resilience and Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on workflow orchestration patterns tasks or workflows
- Needing guidance, best practices, or checklists for workflow orchestration patterns
- The task is unrelated to workflow orchestration patterns
- You need a different domain or tool outside this scope
- Multi-step processes spanning machines/services/databases
- Distributed transactions requiring all-or-nothing semantics

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Workflows = Orchestration logic and decision-making
6. Activities = External interactions (APIs, databases, network calls)
7. Contain business logic and coordination

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Critical Design Decision: Workflows vs Activities

**The Fundamental Rule** (Source: temporal.io/blog/workflow-engine-principles):

- **Workflows** = Orchestration logic and decision-making
- **Activities** = External interactions (APIs, databases, network calls)

### Workflows (Orchestration)

**Characteristics:**

- Contain business logic and coordination
- **MUST be deterministic** (same inputs → same outputs)
- **Cannot** perform direct external calls
- State automatically preserved across failures
- Can run for years despite infrastructure failures

**Example workflow tasks:**

- Decide which steps to execute
- Handle compensation logic
- Manage timeouts and retries
- Coordinate child workflows

### Activities (External Interactions)

**Characteristics:**

- Handle all external system interactions
- Can be non-deterministic (API calls, DB writes)
- Include built-in timeouts and retry logic
- **Must be idempotent** (calling N times = calling once)
- Short-lived (seconds to minutes typically)

**Example activity tasks:**

- Call payment gateway API
- Write to database
- Send emails or notifications
- Query external services

### Design Decision Framework

```
Does it touch external systems? → Activity
Is it orchestration/decision logic? → Workflow
```

#### Imported: Core Workflow Patterns

### 1. Saga Pattern with Compensation

**Purpose**: Implement distributed transactions with rollback capability

**Pattern** (Source: temporal.io/blog/compensating-actions-part-of-a-complete-breakfast-with-sagas):

```
For each step:
  1. Register compensation BEFORE executing
  2. Execute the step (via activity)
  3. On failure, run all compensations in reverse order (LIFO)
```

**Example: Payment Workflow**

1. Reserve inventory (compensation: release inventory)
2. Charge payment (compensation: refund payment)
3. Fulfill order (compensation: cancel fulfillment)

**Critical Requirements:**

- Compensations must be idempotent
- Register compensation BEFORE executing step
- Run compensations in reverse order
- Handle partial failures gracefully

### 2. Entity Workflows (Actor Model)

**Purpose**: Long-lived workflow representing single entity instance

**Pattern** (Source: docs.temporal.io/evaluate/use-cases-design-patterns):

- One workflow execution = one entity (cart, account, inventory item)
- Workflow persists for entity lifetime
- Receives signals for state changes
- Supports queries for current state

**Example Use Cases:**

- Shopping cart (add items, checkout, expiration)
- Bank account (deposits, withdrawals, balance checks)
- Product inventory (stock updates, reservations)

**Benefits:**

- Encapsulates entity behavior
- Guarantees consistency per entity
- Natural event sourcing

### 3. Fan-Out/Fan-In (Parallel Execution)

**Purpose**: Execute multiple tasks in parallel, aggregate results

**Pattern:**

- Spawn child workflows or parallel activities
- Wait for all to complete
- Aggregate results
- Handle partial failures

**Scaling Rule** (Source: temporal.io/blog/workflow-engine-principles):

- Don't scale individual workflows
- For 1M tasks: spawn 1K child workflows × 1K tasks each
- Keep each workflow bounded

### 4. Async Callback Pattern

**Purpose**: Wait for external event or human approval

**Pattern:**

- Workflow sends request and waits for signal
- External system processes asynchronously
- Sends signal to resume workflow
- Workflow continues with response

**Use Cases:**

- Human approval workflows
- Webhook callbacks
- Long-running external processes

#### Imported: State Management and Determinism

### Automatic State Preservation

**How Temporal Works** (Source: docs.temporal.io/workflows):

- Complete program state preserved automatically
- Event History records every command and event
- Seamless recovery from crashes
- Applications restore pre-failure state

### Determinism Constraints

**Workflows Execute as State Machines**:

- Replay behavior must be consistent
- Same inputs → identical outputs every time

**Prohibited in Workflows** (Source: docs.temporal.io/workflows):

- ❌ Threading, locks, synchronization primitives
- ❌ Random number generation (`random()`)
- ❌ Global state or static variables
- ❌ System time (`datetime.now()`)
- ❌ Direct file I/O or network calls
- ❌ Non-deterministic libraries

**Allowed in Workflows**:

- ✅ `workflow.now()` (deterministic time)
- ✅ `workflow.random()` (deterministic random)
- ✅ Pure functions and calculations
- ✅ Calling activities (non-deterministic operations)

### Versioning Strategies

**Challenge**: Changing workflow code while old executions still running

**Solutions**:

1. **Versioning API**: Use `workflow.get_version()` for safe changes
2. **New Workflow Type**: Create new workflow, route new executions to it
3. **Backward Compatibility**: Ensure old events replay correctly

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @workflow-orchestration-patterns to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/workflow-orchestration-patterns/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/workflow-orchestration-patterns/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @workflow-orchestration-patterns using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep workflows focused - Single responsibility per workflow
- Small workflows - Use child workflows for scalability
- Clear boundaries - Workflow orchestrates, activities execute
- Test locally - Use time-skipping test environment
- Idempotent operations - Safe to retry
- Short-lived - Seconds to minutes, not hours
- Timeout configuration - Always set timeouts

### Imported Operating Notes

#### Imported: Best Practices

### Workflow Design

1. **Keep workflows focused** - Single responsibility per workflow
2. **Small workflows** - Use child workflows for scalability
3. **Clear boundaries** - Workflow orchestrates, activities execute
4. **Test locally** - Use time-skipping test environment

### Activity Design

1. **Idempotent operations** - Safe to retry
2. **Short-lived** - Seconds to minutes, not hours
3. **Timeout configuration** - Always set timeouts
4. **Heartbeat for long tasks** - Report progress
5. **Error handling** - Distinguish retryable vs non-retryable

### Common Pitfalls

**Workflow Violations**:

- Using `datetime.now()` instead of `workflow.now()`
- Threading or async operations in workflow code
- Calling external APIs directly from workflow
- Non-deterministic logic in workflows

**Activity Mistakes**:

- Non-idempotent operations (can't handle retries)
- Missing timeouts (activities run forever)
- No error classification (retry validation errors)
- Ignoring payload limits (2MB per argument)

### Operational Considerations

**Monitoring**:

- Workflow execution duration
- Activity failure rates
- Retry attempts and backoff
- Pending workflow counts

**Scalability**:

- Horizontal scaling with workers
- Task queue partitioning
- Child workflow decomposition
- Activity batching when appropriate

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/workflow-orchestration-patterns`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Additional Resources

**Official Documentation**:

- Temporal Core Concepts: docs.temporal.io/workflows
- Workflow Patterns: docs.temporal.io/evaluate/use-cases-design-patterns
- Best Practices: docs.temporal.io/develop/best-practices
- Saga Pattern: temporal.io/blog/saga-pattern-made-easy

**Key Principles**:

1. Workflows = orchestration, Activities = external calls
2. Determinism is non-negotiable for workflows
3. Idempotency is critical for activities
4. State preservation is automatic
5. Design for failure and recovery

#### Imported: Resilience and Error Handling

### Retry Policies

**Default Behavior**: Temporal retries activities forever

**Configure Retry**:

- Initial retry interval
- Backoff coefficient (exponential backoff)
- Maximum interval (cap retry delay)
- Maximum attempts (eventually fail)

**Non-Retryable Errors**:

- Invalid input (validation failures)
- Business rule violations
- Permanent failures (resource not found)

### Idempotency Requirements

**Why Critical** (Source: docs.temporal.io/activities):

- Activities may execute multiple times
- Network failures trigger retries
- Duplicate execution must be safe

**Implementation Strategies**:

- Idempotency keys (deduplication)
- Check-then-act with unique constraints
- Upsert operations instead of insert
- Track processed request IDs

### Activity Heartbeats

**Purpose**: Detect stalled long-running activities

**Pattern**:

- Activity sends periodic heartbeat
- Includes progress information
- Timeout if no heartbeat received
- Enables progress-based retry

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
