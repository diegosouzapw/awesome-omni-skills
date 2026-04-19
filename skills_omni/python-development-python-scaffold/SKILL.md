---
name: "python-development-python-scaffold"
description: "Python Project Scaffolding workflow skill. Use this skill when the user needs a production-ready Python project scaffold with modern packaging, uv-based environment management, typed code, testing, and project-type-specific structure for libraries, CLIs, FastAPI services, or Django applications."
version: "0.0.1"
category: "tools"
tags:
  - "python-development-python-scaffold"
  - "python"
  - "scaffolding"
  - "uv"
  - "fastapi"
  - "django"
  - "packaging"
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
family_id: "python-development-python-scaffold"
family_name: "Python Project Scaffolding"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/python-development-python-scaffold"
upstream_skill: "skills/python-development-python-scaffold"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "python-development-python-scaffold"
---

# Python Project Scaffolding

## Overview

Use this skill when the user wants a Python project scaffold that should be workable immediately, not just sketched at a high level.

This skill preserves the upstream intent: act as a Python project architecture expert and generate complete project structures with modern tooling, typed code, testing, and current best practices. The enhanced version adds clearer project-type branching, stronger packaging defaults, uv-first workflows, validation gates, and safer troubleshooting.

Primary defaults in this skill:
- Use `uv` for project lifecycle commands unless the user explicitly needs compatibility-first tooling.
- Use `pyproject.toml` as the primary project configuration file.
- Include typed code, linting, formatting, and tests in the initial scaffold.
- Choose structure based on project type instead of forcing one tree onto every Python repo.
- Prefer reversible inspection and validation before destructive cleanup.

Open these support files when needed:
- `references/runtime-practices.md` for decision guidance on layout, metadata, dependency groups, and framework-specific structure.
- `examples/implementation-example.md` for copyable library and FastAPI scaffold examples.
- `scripts/validate-runtime.py` to inspect a generated scaffold for common structural errors.

## When to Use

Use this skill when:
- The user asks to create or reshape a Python repository skeleton.
- The request involves a library, CLI, FastAPI service, Django project, or a general Python application that needs modern packaging.
- The user wants `uv`, `pyproject.toml`, Ruff, mypy, pytest, or a typed project baseline.
- You need to generate a concrete file tree, starter files, dependency groups, and validation commands.
- You need to review whether an existing scaffold is missing packaging, layout, or validation essentials.

Do not use this skill as the primary tool when:
- The task is mainly feature implementation inside an already-established project.
- The project is intentionally non-packaged and the user only wants a one-off script.
- The user needs framework-internal design beyond scaffolding, such as deep Django domain modeling or production deployment architecture.
- The language or runtime is not Python.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| User has not chosen project type | `## Project-Type Analysis` | Prevents generating the wrong tree or layout |
| Need authoritative defaults | `references/runtime-practices.md` | Summarizes layout, metadata, dependency, and framework decisions |
| Need a concrete starting point | `examples/implementation-example.md` | Provides copyable trees, `pyproject.toml` snippets, and command sequences |
| Scaffold already generated and needs checking | `scripts/validate-runtime.py` | Catches missing metadata, layout, package, and test structure issues |
| Final handoff | `## Validation` | Ensures the scaffold actually installs, imports, lints, type-checks, and tests |

## Workflow

1. **Classify the target project**
   - Decide whether the scaffold is for a library, CLI, FastAPI service, Django project, or a generic application.
   - If the user request is vague, ask for intended distribution model, runtime entrypoint, packaging expectations, and Python version target.

2. **Confirm core decisions before writing files**
   - Target Python version or minimum supported range.
   - Whether the project is distributable or application-only.
   - Whether `src/` layout is appropriate.
   - Required frameworks and runtime dependencies.
   - Required dev tooling: Ruff, mypy, pytest, docs, CI conventions.

3. **Initialize using a uv-first workflow**
   - Prefer `uv init` for new projects.
   - Add dependencies with `uv add`.
   - Add development tools with dependency groups.
   - Lock and sync before claiming the scaffold is ready.
   - Run commands with `uv run` so execution matches the managed environment.

4. **Write the scaffold around the chosen project type**
   - Use `src/` layout by default for libraries and packaged CLIs.
   - Use an application package layout for FastAPI services unless packaging requirements suggest otherwise.
   - Preserve Django's canonical `manage.py` + project package + app package structure.

5. **Include the minimum production-ready baseline**
   - `pyproject.toml` with `[build-system]` and `[project]` metadata.
   - Package or application directory with typed starter code.
   - `tests/` directory.
   - Lint, format, type-check, and test configuration.
   - `.python-version` when version pinning is part of the scaffold workflow.
   - `.gitignore` appropriate for Python build, cache, virtual environment, and tool artifacts.

6. **Validate immediately after generation**
   - Run the local structural validator in `scripts/validate-runtime.py`.
   - Run lint, format check, type-check, and tests through `uv run`.
   - Confirm the main entrypoint or framework startup command works.

7. **Handoff with explicit assumptions**
   - State which project type branch was used.
   - State Python version assumptions.
   - State whether the scaffold is intended for packaging, internal-only use, or service deployment.
   - Note any deferred choices such as CI, containerization, settings management, or database setup.

## Project-Type Analysis

### 1. Library

Use when the project is meant to be imported by other Python code or distributed as a package.

Default choices:
- Prefer `src/` layout.
- Include `py.typed` if the distributed package is intended to advertise inline typing support.
- Keep runtime dependencies minimal.
- Separate dev and optional dependencies cleanly.

Good fit signals:
- Reusable utilities.
- SDKs or client libraries.
- Internal shared packages.

### 2. CLI

Use when the project is mainly a command-line tool.

Default choices:
- Usually use `src/` layout if distributed as an installable package.
- Add a console entry point in `pyproject.toml`.
- Include a small `main.py` or `cli.py` with typed argument handling.

Good fit signals:
- Automation tools.
- Developer utilities.
- User-invoked terminal commands.

### 3. FastAPI Service

Use when the project exposes HTTP endpoints and is application-centric.

Default choices:
- Organize as an app package with routers, schemas, and dependencies separated once the service is more than trivial.
- Keep server startup explicit.
- Include tests for at least one health or example route.
- Avoid over-packaging service-only code unless distribution is a stated goal.

Good fit signals:
- REST APIs.
- Async services.
- Internal microservices.

### 4. Django Project

Use when the project needs Django's project/app model, ORM, admin, and batteries-included workflow.

Default choices:
- Preserve Django's canonical project structure.
- Separate project configuration from reusable apps.
- Keep settings handling explicit and environment-sensitive.
- Validate with Django-native commands, not just generic Python checks.

Good fit signals:
- Admin-backed systems.
- ORM-heavy applications.
- Full-stack web apps using Django conventions.

### 5. Generic Application

Use when the project is Python-based but not clearly a package, CLI, or framework app.

Default choices:
- Use a simple application package or module layout.
- Avoid claiming the scaffold is packaging-ready unless build metadata and install paths are deliberately included.
- Still include tests, linting, and typing.

## Scaffold Recipes

### Common baseline

Every scaffold should usually include:
- `pyproject.toml`
- `README.md`
- `tests/`
- package or app code directory
- Ruff configuration
- mypy configuration
- pytest configuration or sensible defaults
- `.gitignore`

### uv-first command sequence

Use a narrow, modern workflow unless the user requested a fallback:

```bash
uv init
uv add --group dev ruff mypy pytest
uv lock
uv sync
```

Add framework dependencies only after the project type is confirmed, for example:

```bash
uv add fastapi uvicorn
```

or

```bash
uv add django
```

### `pyproject.toml` minimum expectations

At minimum, expect:
- `[build-system]`
- `[project]`
- project name
- version or explicit dynamic versioning choice
- `requires-python`
- runtime dependencies
- grouped development dependencies where supported by the selected workflow
- tool configuration for Ruff, mypy, and pytest when non-default behavior matters

Do not default to legacy-only scaffolding such as `setup.py` without `pyproject.toml` unless the user explicitly requests backward compatibility.

### Layout guidance

Choose layout deliberately:
- **Prefer `src/` layout** for reusable libraries and packaged CLIs because it helps catch accidental imports from the repository root.
- **Flat or app-package layout can be acceptable** for application-only repositories such as many FastAPI services.
- **Do not force `src/` into Django** if it complicates canonical Django expectations without a clear benefit.

For detailed selection guidance, see `references/runtime-practices.md`.

## Validation

A scaffold is not done when the tree exists. It is done when the basic workflow works.

### Structural validation

Run:

```bash
python scripts/validate-runtime.py .
```

Expected result:
- exit code `0` for a structurally valid scaffold
- clear diagnostics for missing or inconsistent files

### Environment and dependency validation

Run:

```bash
uv lock
uv sync
```

Expected result:
- lockfile resolves successfully
- local environment sync completes without dependency drift

### Quality gate

Run the checks through `uv run`:

```bash
uv run ruff check .
uv run ruff format --check .
uv run mypy .
uv run pytest
```

Expected result:
- no lint errors
- formatting check passes
- mypy completes without unresolved package-path mistakes
- tests are discovered and pass

### Entry-point validation

Choose the command that matches the project type:

Library or package import smoke test:

```bash
uv run python -c "import your_package_name"
```

CLI:

```bash
uv run your-command --help
```

FastAPI:

```bash
uv run python -c "from app.main import app; print(app.title if hasattr(app, 'title') else 'ok')"
```

Django:

```bash
uv run python manage.py check
```

## Troubleshooting

### Imports work in the repo but fail after installation

Likely cause:
- flat layout masked a packaging error, or package discovery is wrong.

Inspect safely:
- verify package path matches the intended import name
- confirm `pyproject.toml` build metadata exists
- compare repository layout against `references/runtime-practices.md`
- run `python scripts/validate-runtime.py .`

Fix direction:
- move distributable package code under `src/` for libraries and packaged CLIs, or correct package discovery settings.

### `uv sync` or lock resolution does not match expectations

Likely cause:
- dependency groups were not added consistently, or metadata changed without lock refresh.

Inspect safely:
- review `pyproject.toml`
- rerun `uv lock`
- verify whether the requested dependency belongs in runtime or dev/test groups

Fix direction:
- update dependencies through `uv add` rather than editing only part of the configuration by hand.

### mypy cannot resolve modules

Likely cause:
- package layout and import paths disagree, or the scaffold mixes application and package assumptions.

Inspect safely:
- check actual package directory names
- verify test imports are not relying on repository-root leakage
- confirm the project type branch used during scaffold creation

Fix direction:
- correct package paths first; only then adjust mypy settings if needed.

### pytest discovers no tests

Likely cause:
- `tests/` is missing, names do not match pytest discovery conventions, or framework-specific setup is incomplete.

Inspect safely:
- confirm the `tests/` directory exists
- confirm at least one `test_*.py` file exists
- run `uv run pytest -q`

Fix direction:
- add an initial smoke test and keep test layout straightforward before adding custom discovery rules.

### Django scaffold behaves like a generic Python app

Likely cause:
- canonical Django project/app separation was skipped.

Inspect safely:
- confirm `manage.py` exists
- confirm the project package contains `settings.py`, `urls.py`, and `wsgi.py` or `asgi.py`
- run `uv run python manage.py check`

Fix direction:
- regenerate or normalize to standard Django structure instead of patching a generic scaffold incrementally.

## Additional Resources

- `references/runtime-practices.md`
- `examples/implementation-example.md`
- `scripts/validate-runtime.py`

## Related Skills

Switch to a more specialized skill if the work moves beyond scaffolding into:
- framework-specific feature implementation
- CI/CD pipeline design
- production containerization and deployment
- deep package publishing and release automation

## Output Expectations

When using this skill to answer a user request, return:
1. the chosen project type
2. the generated file tree
3. the key `pyproject.toml` sections
4. the dependency groups and why they exist
5. the validation commands
6. any assumptions or unresolved decisions

Keep generated commands narrow, local, and reversible.
