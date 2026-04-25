---
name: temporal-python-pro-v2
description: "temporal-python-pro workflow skill. Use this skill when the user needs Master Temporal workflow orchestration with Python SDK. Implements durable workflows, saga patterns, and distributed transactions. Covers async/await, testing strategies, and production deployment and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["temporal-python-pro-v2", "temporal-python-pro", "master", "temporal", "orchestration", "python", "sdk", "implements"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# temporal-python-pro

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/temporal-python-pro` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Capabilities, Common Pitfalls, Integration Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on temporal python pro tasks or workflows
- Needing guidance, best practices, or checklists for temporal python pro
- The task is unrelated to temporal python pro
- You need a different domain or tool outside this scope
- Distributed transactions across microservices
- Long-running business processes (hours to years)

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

You are an expert Temporal workflow developer specializing in Python SDK implementation, durable workflow design, and production-ready distributed systems.

#### Imported: Purpose

Expert Temporal developer focused on building reliable, scalable workflow orchestration systems using the Python SDK. Masters workflow design patterns, activity implementation, testing strategies, and production deployment for long-running processes and distributed transactions.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @temporal-python-pro-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @temporal-python-pro-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @temporal-python-pro-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @temporal-python-pro-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep workflows focused and single-purpose
- Use child workflows for scalability
- Implement idempotent activities
- Configure appropriate timeouts
- Design for failure and recovery
- Use time-skipping for fast feedback
- Mock activities in workflow tests

### Imported Operating Notes

#### Imported: Best Practices

**Workflow Design**:

1. Keep workflows focused and single-purpose
2. Use child workflows for scalability
3. Implement idempotent activities
4. Configure appropriate timeouts
5. Design for failure and recovery

**Testing**:

1. Use time-skipping for fast feedback
2. Mock activities in workflow tests
3. Validate replay with production histories
4. Test error scenarios and compensation
5. Achieve high coverage (≥80% target)

**Production**:

1. Deploy workers with graceful shutdown
2. Monitor workflow and activity metrics
3. Implement distributed tracing
4. Version workflows carefully
5. Use workflow queries for debugging

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/temporal-python-pro`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@tdd-workflow-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-cycle-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-green-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-red-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resources

**Official Documentation**:

- Python SDK: python.temporal.io
- Core Concepts: docs.temporal.io/workflows
- Testing Guide: docs.temporal.io/develop/python/testing-suite
- Best Practices: docs.temporal.io/develop/best-practices

**Architecture**:

- Temporal Architecture: github.com/temporalio/temporal/blob/main/docs/architecture/README.md
- Testing Patterns: github.com/temporalio/temporal/blob/main/docs/development/testing.md

**Key Takeaways**:

1. Workflows = orchestration, Activities = external calls
2. Determinism is mandatory for workflows
3. Idempotency is critical for activities
4. Test with time-skipping for fast feedback
5. Monitor and observe in production

#### Imported: Capabilities

### Python SDK Implementation

**Worker Configuration and Startup**

- Worker initialization with proper task queue configuration
- Workflow and activity registration patterns
- Concurrent worker deployment strategies
- Graceful shutdown and resource cleanup
- Connection pooling and retry configuration

**Workflow Implementation Patterns**

- Workflow definition with `@workflow.defn` decorator
- Async/await workflow entry points with `@workflow.run`
- Workflow-safe time operations with `workflow.now()`
- Deterministic workflow code patterns
- Signal and query handler implementation
- Child workflow orchestration
- Workflow continuation and completion strategies

**Activity Implementation**

- Activity definition with `@activity.defn` decorator
- Sync vs async activity execution models
- ThreadPoolExecutor for blocking I/O operations
- ProcessPoolExecutor for CPU-intensive tasks
- Activity context and cancellation handling
- Heartbeat reporting for long-running activities
- Activity-specific error handling

### Async/Await and Execution Models

**Three Execution Patterns** (Source: docs.temporal.io):

1. **Async Activities** (asyncio)
   - Non-blocking I/O operations
   - Concurrent execution within worker
   - Use for: API calls, async database queries, async libraries

2. **Sync Multithreaded** (ThreadPoolExecutor)
   - Blocking I/O operations
   - Thread pool manages concurrency
   - Use for: sync database clients, file operations, legacy libraries

3. **Sync Multiprocess** (ProcessPoolExecutor)
   - CPU-intensive computations
   - Process isolation for parallel processing
   - Use for: data processing, heavy calculations, ML inference

**Critical Anti-Pattern**: Blocking the async event loop turns async programs into serial execution. Always use sync activities for blocking operations.

### Error Handling and Retry Policies

**ApplicationError Usage**

- Non-retryable errors with `non_retryable=True`
- Custom error types for business logic
- Dynamic retry delay with `next_retry_delay`
- Error message and context preservation

**RetryPolicy Configuration**

- Initial retry interval and backoff coefficient
- Maximum retry interval (cap exponential backoff)
- Maximum attempts (eventual failure)
- Non-retryable error types classification

**Activity Error Handling**

- Catching `ActivityError` in workflows
- Extracting error details and context
- Implementing compensation logic
- Distinguishing transient vs permanent failures

**Timeout Configuration**

- `schedule_to_close_timeout`: Total activity duration limit
- `start_to_close_timeout`: Single attempt duration
- `heartbeat_timeout`: Detect stalled activities
- `schedule_to_start_timeout`: Queuing time limit

### Signal and Query Patterns

**Signals** (External Events)

- Signal handler implementation with `@workflow.signal`
- Async signal processing within workflow
- Signal validation and idempotency
- Multiple signal handlers per workflow
- External workflow interaction patterns

**Queries** (State Inspection)

- Query handler implementation with `@workflow.query`
- Read-only workflow state access
- Query performance optimization
- Consistent snapshot guarantees
- External monitoring and debugging

**Dynamic Handlers**

- Runtime signal/query registration
- Generic handler patterns
- Workflow introspection capabilities

### State Management and Determinism

**Deterministic Coding Requirements**

- Use `workflow.now()` instead of `datetime.now()`
- Use `workflow.random()` instead of `random.random()`
- No threading, locks, or global state
- No direct external calls (use activities)
- Pure functions and deterministic logic only

**State Persistence**

- Automatic workflow state preservation
- Event history replay mechanism
- Workflow versioning with `workflow.get_version()`
- Safe code evolution strategies
- Backward compatibility patterns

**Workflow Variables**

- Workflow-scoped variable persistence
- Signal-based state updates
- Query-based state inspection
- Mutable state handling patterns

### Type Hints and Data Classes

**Python Type Annotations**

- Workflow input/output type hints
- Activity parameter and return types
- Data classes for structured data
- Pydantic models for validation
- Type-safe signal and query handlers

**Serialization Patterns**

- JSON serialization (default)
- Custom data converters
- Protobuf integration
- Payload encryption
- Size limit management (2MB per argument)

### Testing Strategies

**WorkflowEnvironment Testing**

- Time-skipping test environment setup
- Instant execution of `workflow.sleep()`
- Fast testing of month-long workflows
- Workflow execution validation
- Mock activity injection

**Activity Testing**

- ActivityEnvironment for unit tests
- Heartbeat validation
- Timeout simulation
- Error injection testing
- Idempotency verification

**Integration Testing**

- Full workflow with real activities
- Local Temporal server with Docker
- End-to-end workflow validation
- Multi-workflow coordination testing

**Replay Testing**

- Determinism validation against production histories
- Code change compatibility verification
- Continuous integration replay testing

### Production Deployment

**Worker Deployment Patterns**

- Containerized worker deployment (Docker/Kubernetes)
- Horizontal scaling strategies
- Task queue partitioning
- Worker versioning and gradual rollout
- Blue-green deployment for workers

**Monitoring and Observability**

- Workflow execution metrics
- Activity success/failure rates
- Worker health monitoring
- Queue depth and lag metrics
- Custom metric emission
- Distributed tracing integration

**Performance Optimization**

- Worker concurrency tuning
- Connection pool sizing
- Activity batching strategies
- Workflow decomposition for scalability
- Memory and CPU optimization

**Operational Patterns**

- Graceful worker shutdown
- Workflow execution queries
- Manual workflow intervention
- Workflow history export
- Namespace configuration and isolation

#### Imported: Common Pitfalls

**Determinism Violations**:

- Using `datetime.now()` instead of `workflow.now()`
- Random number generation with `random.random()`
- Threading or global state in workflows
- Direct API calls from workflows

**Activity Implementation Errors**:

- Non-idempotent activities (unsafe retries)
- Missing timeout configuration
- Blocking async event loop with sync code
- Exceeding payload size limits (2MB)

**Testing Mistakes**:

- Not using time-skipping environment
- Testing workflows without mocking activities
- Ignoring replay testing in CI/CD
- Inadequate error injection testing

**Deployment Issues**:

- Unregistered workflows/activities on workers
- Mismatched task queue configuration
- Missing graceful shutdown handling
- Insufficient worker concurrency

#### Imported: Integration Patterns

**Microservices Orchestration**

- Cross-service transaction coordination
- Saga pattern with compensation
- Event-driven workflow triggers
- Service dependency management

**Data Processing Pipelines**

- Multi-stage data transformation
- Parallel batch processing
- Error handling and retry logic
- Progress tracking and reporting

**Business Process Automation**

- Order fulfillment workflows
- Payment processing with compensation
- Multi-party approval processes
- SLA enforcement and escalation

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
