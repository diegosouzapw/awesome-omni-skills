---
name: "python-patterns"
description: "Python Patterns workflow skill. Use this skill when the user needs Python development principles and decision-making. Framework selection, async patterns, type hints, project structure. Teaches thinking, not copying and the operator should rely on the packaged workflow, runtime references, implementation examples, and validation script before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "python-patterns"
  - "python"
  - "development"
  - "principles"
  - "decision-making"
  - "architecture"
  - "async"
  - "typing"
  - "project-structure"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "python-patterns"
family_name: "Python Patterns"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/python-patterns"
upstream_skill: "skills/python-patterns"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "python-patterns"
---

# Python Patterns

## Overview

This skill curates the upstream `python-patterns` workflow from `sickn33/antigravity-awesome-skills` into a practical decision aid for real Python work.

Use it when the task is not “write some Python,” but “choose the right Python approach.” The core idea from upstream remains intact: teach decision-making, not pattern memorization.

This skill is strongest when the operator must decide among:

- sync vs async execution models
- threads vs processes vs in-process work
- framework or stack fit based on constraints
- where type hints add the most leverage
- how to structure a project around `pyproject.toml`, tests, and imports
- how to verify that a chosen pattern is actually working

Open the support files when needed:

- `references/runtime-practices.md` for decision matrices and failure modes
- `examples/implementation-example.md` for worked before/after scenarios
- `scripts/validate-runtime.py` to inspect a repository for layout, tooling, async, and subprocess risks

## When to Use This Skill

Use this skill when:

- the user wants Python architecture guidance rather than a single code snippet
- the task involves framework selection, concurrency choices, typing strategy, packaging, or project layout
- the request asks whether a system should be async, typed, packaged, or reorganized
- the operator needs to justify tradeoffs, not just produce an implementation
- a repository should be checked for Python structure or runtime-pattern mismatches before changes are proposed

Do **not** use this skill as the primary router when:

- the task is language-agnostic system design with little Python-specific impact
- the user already chose the architecture and only needs feature implementation
- the work is mainly deployment, containerization, CI, or cloud operations rather than Python design

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need to decide sync vs async | `references/runtime-practices.md` | Gives a concrete decision matrix instead of treating async as a default |
| Need to choose how work runs in the background | `references/runtime-practices.md` | Separates in-request work, thread/process offloading, and external job systems |
| Need to improve project structure | `examples/implementation-example.md` | Shows realistic `pyproject.toml` and `src/` tradeoffs with expected outcomes |
| Need typing guidance | `references/runtime-practices.md` | Focuses typing on API boundaries and static-analysis value |
| Need to inspect an existing repo | `scripts/validate-runtime.py` | Reports concrete findings on metadata, layout, test/import risks, async smells, and subprocess safety |
| Need to explain a recommendation | `SKILL.md` + linked support files | Keeps the answer tied to explicit tradeoffs and verification steps |

## Workflow

1. **Clarify the decision.**
   - What is being chosen: framework, concurrency model, typing depth, layout, or background-task pattern?
   - What constraints matter: latency, throughput, CPU load, I/O wait, packaging needs, team familiarity, deployment model?

2. **Classify the workload.**
   - Mostly sequential business logic: start sync.
   - High I/O concurrency with async-capable dependencies: consider async.
   - Blocking I/O from libraries you cannot replace: consider thread offloading.
   - CPU-heavy work: consider processes or external workers.

3. **Inventory the dependency stack.**
   - Are the database, HTTP, messaging, and framework layers async-capable end to end?
   - Are there blocking SDKs that would negate async benefits?
   - Is this a package, an internal service, or a script repo?

4. **Choose the smallest sound pattern.**
   - Prefer the least complex model that fits the workload.
   - Do not adopt async only because it is modern.
   - Do not force `src/` layout or heavy typing if the repo is a small script-only tool.

5. **Define verification gates before implementation.**
   - tests run in the intended import mode
   - lint/format checks run cleanly
   - type checking is applied where it adds signal
   - blocking calls are identified in async paths
   - performance claims are measured, not assumed

6. **Implement or recommend with explicit tradeoffs.**
   Include:
   - why this pattern was chosen
   - what alternative was rejected
   - what failure mode the choice avoids
   - how the team can verify the result

7. **Validate the repository when relevant.**
   Run:
   ```bash
   python scripts/validate-runtime.py .
   ```
   Then use the findings to refine the recommendation.

## Decision Principles

### 1. Framework and stack selection

Do not rank frameworks generically. Choose based on constraints.

Prefer questions like:

- Does the app need high fan-out I/O concurrency?
- Are the core dependencies async-native?
- Is this a small internal service where simplicity matters more than concurrency features?
- Does the team need strong typing, validation, or admin tooling?
- Will the app be packaged and reused, or only deployed as one service?

A good answer names selection criteria and tradeoffs. A weak answer says “always use X.”

### 2. Async vs sync

Default to synchronous code unless there is a real need for structured I/O concurrency.

Use async when:

- the workload is I/O-bound
- the framework and key dependencies are async-capable
- request handlers would otherwise spend significant time waiting on sockets or similar external operations
- the team can debug event-loop behavior and cancellation correctly

Stay sync when:

- work is mostly CPU or straightforward request/response logic
- important libraries are blocking
- concurrency demands are low
- introducing async would create a mixed model with little benefit

Do not claim async is inherently faster. It is often better for coordinating many I/O-bound operations, not as a blanket performance upgrade.

### 3. Background work

Separate these cases clearly:

- **small in-process follow-up work:** safe only if it is brief, observable, and failure handling is explicit
- **blocking I/O offload:** use threads or executor-style offloading where appropriate
- **CPU-heavy work:** prefer processes or an external worker system
- **durable long-running jobs:** use an external queue/worker model rather than pretending in-request background tasks are reliable job infrastructure

If subprocesses are involved, prefer argument lists over shell command strings, validate inputs, and make timeouts explicit.

### 4. Type hints

Treat typing as a way to improve API clarity and static analysis.

Prioritize:

1. public interfaces
2. module boundaries
3. complex data structures and return types
4. internal helpers only when the signal is worth the maintenance cost

Important boundary:

- type hints help static tools and readers
- they do **not** automatically enforce runtime validation

### 5. Project structure

Use `pyproject.toml` as the default metadata and tool-configuration anchor.

Use `src/` layout when:

- you are building a package
- you want tests to exercise installed/importable code more reliably
- import-path mistakes have caused issues before

A flat layout can still be reasonable when:

- the repo is a small script collection
- packaging is not a goal
- the extra structure would add ceremony without operational benefit

The goal is not aesthetic purity. The goal is predictable imports, packaging behavior, and test execution.

## Examples

See `examples/implementation-example.md` for complete worked scenarios.

Typical use cases covered there:

- fixing an async endpoint that still performs blocking work
- choosing `src/` layout for a reusable package while avoiding unnecessary structure for simple script repos
- introducing gradual typing at module boundaries instead of annotating everything at once

## Troubleshooting

### `RuntimeError: event loop is already running`

Usually means async code is being started from an environment that already owns the loop, or async entry points are being nested incorrectly.

Check:

- where the loop is created
- whether framework code already manages it
- whether helper code is calling top-level loop runners from inside async contexts

### Service stayed slow after async adoption

Common causes:

- blocking database or HTTP clients remain in the request path
- CPU-heavy work still runs on the event loop
- concurrency was added without measuring the actual bottleneck

Check dependencies, profile the hot path, and confirm the workload was actually I/O-bound.

### Tests pass locally but imports fail after packaging or install

Common causes:

- flat-layout imports accidentally rely on the repository root being on `PYTHONPATH`
- tests import source files directly rather than the installable package
- project metadata and package discovery are incomplete

Inspect layout choices and run the validator script for import-risk hints.

### Type checker noise exploded after partial adoption

Common causes:

- typing was started in unstable internal code rather than stable boundaries
- strictness was enabled repo-wide too early
- untyped third-party interfaces were not isolated behind typed wrappers

Adopt types module by module. Raise strictness where signal is high.

### Background task blocks the server

Common causes:

- CPU-heavy work left in request handlers
- “fire-and-forget” tasks still use blocking code
- exceptions are not surfaced or monitored

Move work to the right execution model and make timeout, retry, and cancellation behavior explicit.

### `shell=True` or shell-string command construction appears in helpers

This is a security review point.

Prefer:

```python
subprocess.run(["python", "-m", "pytest"], check=True)
```

Over:

```python
subprocess.run("python -m pytest", shell=True, check=True)
```

Especially when any input is dynamic.

## Additional Resources

- `references/runtime-practices.md` — decision matrices, checklists, and common failure modes
- `examples/implementation-example.md` — concrete scenarios with chosen and rejected patterns
- `scripts/validate-runtime.py` — repository scanner for Python runtime-pattern mismatches

Suggested validation commands when appropriate:

```bash
python scripts/validate-runtime.py .
python -m pytest
```

If the repo already uses Ruff or mypy, include them in the verification gate rather than adding tools unconditionally.

## Related Skills

Use a different or additional skill when the center of gravity shifts to:

- framework-specific implementation details
- packaging and publishing mechanics beyond architecture choice
- deployment, containers, CI/CD, or production operations
- deep performance profiling beyond pattern selection

## Operator Notes

A strong answer from this skill:

- starts from workload and constraints
- recommends the least complex sound pattern
- avoids universal claims about frameworks or async
- makes typing and structure decisions intentionally
- includes a verification plan, not just a recommendation

A weak answer:

- prescribes one framework by habit
- treats async as automatically faster
- equates type hints with runtime validation
- forces `src/` layout everywhere
- gives no way to verify the recommendation in the repository
