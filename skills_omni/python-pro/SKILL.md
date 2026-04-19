---
name: "python-pro"
description: "python-pro workflow skill. Use this skill when the user needs advanced Python 3.12+ implementation or review work involving modern language features, async programming, performance tuning, packaging, typing, and production-ready practices. Expert in the current Python ecosystem including uv, ruff, pydantic, and FastAPI, while preserving repository conventions, upstream provenance, and safe validation before merge or handoff."
version: "0.0.1"
category: "backend"
tags:
  - "python-pro"
  - "python"
  - "python-3.12"
  - "async"
  - "performance"
  - "ruff"
  - "pydantic"
  - "fastapi"
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
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "python-pro"
family_name: "python-pro"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/python-pro"
upstream_skill: "skills/python-pro"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "python-pro"
---

# python-pro

## Overview

This skill packages the upstream `python-pro` workflow from `sickn33/antigravity-awesome-skills` into a more execution-oriented operator guide without hiding its origin.

Use it for real Python repository work: implementation, review, migration, debugging, async correctness, runtime/tooling validation, packaging checks, and production-readiness improvements in Python 3.12+ codebases.

Preserve provenance and existing repository conventions. Prefer improving a healthy project in place over forcing tool churn. If the repo already uses a coherent stack that is not `uv`, `ruff`, `mypy`, `pytest`, `FastAPI`, or `Pydantic`, follow the established conventions unless there is a concrete defect, risk, or user request to change them.

Open the bundled support files when you need dense operational detail instead of rereading this skill:

- `references/runtime-practices.md` for repository intake, tool detection, validation sequencing, async review criteria, packaging checks, and security signals.
- `examples/implementation-example.md` for worked repository scenarios with commands, expected findings, and operator decisions.
- `scripts/validate-runtime.py` for a quick local repository inspection report.

## When to Use This Skill

Use this skill when the task is primarily about advanced Python engineering or review, especially when one or more of these are true:

- You are writing, modifying, or reviewing Python 3.12+ application or library code.
- You need to inspect a Python repository and determine its runtime, packaging, lint, type-check, and test posture.
- You are working on async services, concurrency behavior, cancellation handling, or FastAPI request paths.
- You need to improve typing, validation, serialization, or Pydantic/FastAPI model behavior.
- You need to assess performance-sensitive Python code without abandoning correctness or maintainability.
- You need to review `pyproject.toml`, environment management, dependency hygiene, or release/build setup.
- You need to troubleshoot disagreements between linting, type-checking, tests, and runtime behavior.

Do not use this skill as the primary router when:

- The work is mostly beginner Python tutoring or syntax explanation.
- The problem is mostly infrastructure, container orchestration, cloud deployment, or platform operations rather than Python code/runtime behavior.
- The task is a pure security audit with little Python-specific implementation or review work.
- The repo is not Python, or Python is incidental.
- The request is architectural planning with minimal code/runtime inspection.

## Operating Table

| Area | Preferred default | Acceptable fallback | Review notes |
| --- | --- | --- | --- |
| Python baseline | Python 3.12+ | Project-declared supported version | Confirm `requires-python`, CI version matrix, local interpreter, and deployment target all agree. |
| Project metadata | `pyproject.toml` | Legacy config only if already established | Prefer modern pyproject-based inspection before assuming `setup.py` workflows. |
| Environment isolation | `uv` project/env flow when already used or safe to adopt | `venv` + project-native installer | Do not replace a healthy Poetry/pip-tools/PDM workflow without reason. |
| Dependency installation | Project lock/sync method | Explicit install commands from project docs | Reproducibility matters more than tool preference. |
| Lint / format | `ruff check` and `ruff format` when configured | Existing flake8/black/isort stack | Respect current config discovery and CI expectations. |
| Typing | Repository-configured type checker, often `mypy` | Pyright or no checker if absent | Preserve signatures, add useful annotations, avoid unnecessary `Any`. |
| Testing | `pytest` | Project-native runner | Run the narrowest tests that validate your change, then broaden if risk justifies it. |
| Async orchestration | Structured concurrency with `asyncio.TaskGroup` for related tasks | Existing coherent async orchestration | Review cancellation, exception propagation, and shutdown behavior. |
| Validation layer | Pydantic v2 patterns when in Pydantic projects | Project-native validation layer | Avoid v1-era assumptions about config, validators, and serialization. |
| Web stack | FastAPI conventions when present | Existing framework conventions | Check sync vs async boundaries carefully in request handlers. |
| Logging | Structured, context-rich logging | Existing logging policy | Prefer logging over ad hoc prints for production debugging. |
| Dependency security | Audit dependencies and review upgrade pressure | Manual review if audit tooling unavailable | Hash-checked installs are situational, not mandatory for every dev flow. |

Project conventions override defaults when they are already coherent, documented, and passing validation.

## Workflow

1. **Confirm scope and routing**
   - Verify that the request is primarily advanced Python work.
   - Identify whether the task is implementation, review, migration, debugging, packaging, async correctness, or production hardening.
   - Preserve provenance and do not discard upstream context if the imported workflow matters to the handoff.

2. **Perform repository intake before editing**
   - Inspect `pyproject.toml`, `requirements*.txt`, lock files, CI config, test config, and app entry points.
   - Confirm the intended Python version and active interpreter.
   - Detect toolchain and framework markers: `uv`, `ruff`, `pytest`, `mypy`, `FastAPI`, `Pydantic`, build backend, dependency groups.
   - If useful, run `python scripts/validate-runtime.py` from the skill root after copying it into the working context or adapt its logic to the repository.

3. **Follow the repository's existing healthy workflow**
   - Use the existing dependency and execution flow first.
   - If the repo uses `uv`, prefer commands such as `uv sync`, `uv run pytest`, `uv run ruff check .`, or `uv run mypy .`.
   - If it uses standard virtual environments, activate the env and run the configured equivalents.
   - Do not introduce new tooling merely because it is modern.

4. **Establish a validation baseline**
   - Run the smallest safe command set that reveals current repo health.
   - Typical sequence, adjusted to project conventions:
     - tests: `pytest` or a targeted subset
     - lint: `ruff check .` or project equivalent
     - format check: `ruff format --check .` or project equivalent
     - types: `mypy .` or project equivalent
     - dependency audit when appropriate: `pip-audit` or project-approved alternative
   - Record existing failures before making changes.

5. **Inspect runtime-sensitive code paths**
   - For async code, check for blocking I/O or CPU-heavy work inside async handlers.
   - For service code, review request validation, serialization, settings loading, startup/shutdown, and exception handling.
   - For libraries, review public APIs, type contracts, import behavior, and packaging metadata.
   - For performance work, prefer measurement and focused profiling over speculative rewrites.

6. **Make minimal, reversible improvements**
   - Preserve public contracts unless the user asks for a breaking change.
   - Keep edits narrow and explain behavior changes.
   - Prefer small refactors that improve correctness, typing, observability, or maintainability without widening scope.
   - When touching async logic, preserve cancellation semantics and do not create untracked background tasks casually.

7. **Re-run targeted validation after each meaningful change**
   - Re-run affected tests first, then lint/type checks for touched modules, then broader validation if risk warrants it.
   - If a tool disagreement appears, reproduce it with explicit commands and inspect config discovery paths before changing code.

8. **Prepare handoff or merge guidance**
   - Summarize what was inspected, what was changed, what passed, what remains risky, and whether another skill should take over.
   - If the work drifts into infra, security-only, or architecture-heavy territory, hand off deliberately rather than stretching this skill.

## Troubleshooting

### 1) Import or module path failures after setup

**Typical symptoms**
- `ModuleNotFoundError`
- tests pass in one shell but fail in another
- editable install behavior differs from direct module execution

**Likely causes**
- Wrong interpreter or inactive virtual environment
- package layout and import root mismatch
- repo expects editable install or `uv run`/project runner usage
- CI and local environment use different Python versions

**Checks**
- Confirm interpreter: `python --version`
- Confirm interpreter path: `python -c "import sys; print(sys.executable)"`
- Inspect project metadata and package layout in `pyproject.toml`
- Compare local commands with CI workflow definitions
- Run the runtime validator script to inspect config/tool discovery

**Operator action**
- Use the repo's intended execution path instead of ad hoc imports.
- Fix environment selection before changing imports.
- Only change package structure if the failure is structural and reproducible.

### 2) Async endpoint is slow, hangs, or behaves inconsistently

**Typical symptoms**
- FastAPI endpoint latency spikes under concurrency
- request handlers appear async but throughput is poor
- shutdown leaves unfinished work or swallowed exceptions

**Likely causes**
- Blocking sync I/O inside async path
- CPU-heavy work running directly on the event loop
- fire-and-forget tasks with no lifecycle management
- weak cancellation/error propagation across related tasks

**Checks**
- Inspect handlers for blocking file, network, database, or subprocess calls
- Review task creation patterns; prefer tracked task groups for related concurrent work
- Check startup/shutdown hooks and background job handling
- Add targeted timing/logging around suspect code paths

**Operator action**
- Move blocking work out of the event loop when justified.
- Replace ad hoc concurrent task spawning with structured orchestration where possible.
- Keep exception and cancellation behavior explicit.

### 3) Lint, type check, tests, and runtime disagree

**Typical symptoms**
- `ruff`, `mypy`, and `pytest` disagree on imports or module discovery
- local results differ from CI
- formatting passes but lint rules still fail

**Likely causes**
- config split across multiple files
- tool invocation from wrong working directory
- missing optional dependencies or test extras
- stale assumptions about which files are included/excluded

**Checks**
- Inspect `pyproject.toml`, `ruff.toml`, `mypy.ini`, `pytest.ini`, and CI commands
- Re-run each tool explicitly from repo root
- Confirm whether the project expects extras, dependency groups, or `uv sync`
- Compare include/exclude paths and Python version settings across tools

**Operator action**
- Align execution context before changing code.
- Fix config inconsistency when that is the real source of failure.
- Avoid suppressing errors until config drift is ruled out.

### 4) Pydantic or FastAPI validation/serialization mismatch

**Typical symptoms**
- request payloads validate differently than expected
- response serialization differs from declared models
- settings loading behaves differently across environments

**Likely causes**
- Pydantic v1-era assumptions applied to v2 code
- model config or validators not updated to current patterns
- runtime data shape does not match declared types
- serialization options differ between internal model use and API response use

**Checks**
- Confirm installed Pydantic/FastAPI versions
- Inspect model declarations, settings classes, validators, and response models
- Reproduce with a focused test case instead of only through the full app
- Check whether coercion or alias behavior is relied upon implicitly

**Operator action**
- Update code and review assumptions against current project versions.
- Prefer explicit model behavior over relying on accidental coercion.
- Add narrow tests for the exact payload/serialization edge case.

## Examples

Use `examples/implementation-example.md` for worked scenarios covering:

- async FastAPI endpoints blocked by sync work
- repository intake for pyproject-based projects
- resolving lint/type/test disagreement without unnecessary tool churn

## Additional Resources

- `references/runtime-practices.md` - operator checklist and review matrix for Python 3.12+, packaging, typing, async, testing, and dependency hygiene
- `examples/implementation-example.md` - concrete repository scenarios with commands, findings, and decisions
- `scripts/validate-runtime.py` - local repository inspection script for `pyproject.toml`, Python requirement, tool config, and framework hints

## Related Skills

Hand off when the center of gravity moves elsewhere:

- **Infrastructure / deployment skill** when the main issue is containers, process supervision, networking, cloud runtime, or orchestration.
- **Database-focused skill** when the main work is query design, schema tuning, indexing, or migration planning beyond Python integration.
- **Security-review skill** when the task becomes a broad security audit rather than Python implementation or runtime review.
- **Architecture / planning skill** when the request is mainly system design, tradeoff analysis, or cross-service planning.

## Preserved Upstream Intent

The upstream skill's core intent remains intact: expert Python development with modern features, async patterns, current tooling, performance awareness, and production-ready practices. This enhanced version makes that intent easier to execute in real repositories by adding explicit activation boundaries, a concrete workflow, troubleshooting depth, and targeted support files.
