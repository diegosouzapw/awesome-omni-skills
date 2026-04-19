---
name: "python-packaging"
description: "Python Packaging workflow skill. Use this skill when the user needs comprehensive guidance for creating, structuring, validating, and distributing Python packages with modern packaging standards, `pyproject.toml`, and PyPI publishing workflows."
version: "0.0.1"
category: "tools"
tags:
  - "python-packaging"
  - "pyproject"
  - "pypi"
  - "wheel"
  - "sdist"
  - "python"
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
family_id: "python-packaging"
family_name: "Python Packaging"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/python-packaging"
upstream_skill: "skills/python-packaging"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "python-packaging"
---

# Python Packaging

## Overview

Use this skill when the task is to create, structure, validate, or publish a Python package using the modern PyPA workflow.

This enhanced version preserves the original skill intent while upgrading it into an operator-facing packaging workflow centered on:

- `pyproject.toml`-first configuration
- standardized project metadata
- backend-neutral build guidance
- `src/` layout decisions
- wheel and source distribution validation
- safer publishing practices for PyPI

Prefer this skill for distributable libraries, reusable internal packages, and Python CLI tools that should be installed through standard packaging workflows.

Do **not** use it as a substitute for framework-specific deployment guidance, OS packaging, containerization-only workflows, or environment-specific release approvals.

For deeper execution support, use:

- `references/runtime-practices.md` for standards and decision tables
- `examples/implementation-example.md` for concrete package layouts and `pyproject.toml` examples
- `scripts/validate-runtime.py` for preflight validation of packaging metadata and artifacts

## When to Use

Activate this skill when the user needs to:

- create a Python library for distribution
- package a Python CLI tool with console entry points
- migrate from legacy `setup.py`-first packaging toward `pyproject.toml`
- build and inspect wheels and source distributions
- publish to PyPI or TestPyPI
- troubleshoot packaging failures such as missing files, bad metadata, or editable install mismatches
- separate runtime dependencies from optional or development-only dependencies

Do not activate it when the task is mainly about:

- virtual environment management alone
- application deployment without packaging
- Docker image construction
- Conda packaging or Linux distro package maintenance
- framework-specific release automation with no Python packaging decisions involved

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New distributable library | Prefer `src/` layout and a `pyproject.toml` with `[build-system]` and `[project]` | Reduces accidental imports from the repo root and aligns with current PyPA guidance |
| Unsure which backend to use | `references/runtime-practices.md` | Gives backend-neutral criteria instead of pushing one tool as universally best |
| Building release artifacts | `python -m build` | Produces wheel and sdist through the standard frontend in an isolated build flow |
| Validating metadata before upload | `twine check dist/*` and `scripts/validate-runtime.py` | Catches broken README rendering, missing metadata, and absent artifacts before publication |
| Packaging a CLI | `examples/implementation-example.md` | Shows a concrete console-script example and expected installed command behavior |
| Publishing from CI | Prefer PyPI Trusted Publishers | Avoids long-lived API tokens where supported |
| Debugging package contents | Inspect `dist/` artifacts and compare against project tree | Many packaging bugs are build-output mismatches, not source-code bugs |

## Workflow

1. **Clarify package intent**
   - Determine whether the target is a library, a library plus CLI, or an internal package.
   - Confirm Python version support, target index, and release expectations.
   - Ask whether the user needs public PyPI, TestPyPI, or private index publication.

2. **Choose packaging structure deliberately**
   - For distributable libraries, prefer `src/` layout.
   - For very small internal apps, flat layout may be acceptable, but call out the risk of imports succeeding locally while failing after installation.
   - Decide whether the package needs only runtime dependencies, optional extras, or separate development groups.

3. **Author `pyproject.toml` first**
   - Define `[build-system]` with the selected backend requirements.
   - Put standardized metadata in `[project]` where possible.
   - Keep backend-specific configuration in tool-specific sections only when needed.
   - Avoid introducing legacy `setup.py` configuration unless the task is explicitly legacy maintenance.

4. **Create the package layout**
   - Ensure importable package directories are present.
   - Include `__init__.py` where appropriate for regular packages.
   - Place tests outside the package tree unless there is a deliberate reason not to.
   - If packaging a CLI, declare console entry points instead of relying on ad hoc wrapper scripts.

5. **Install and test in development mode**
   - Create a clean virtual environment.
   - Install editable dependencies if the backend supports editable installs.
   - Run the project test suite and basic import checks.
   - Confirm that development success is not caused by importing directly from the repository root.

6. **Build distributable artifacts**
   - Run:
     - `python -m pip install --upgrade build`
     - `python -m build`
   - Expect `dist/` to contain at least a wheel and often an sdist.
   - If only one artifact type is produced, verify that this is intentional.

7. **Validate artifacts before publishing**
   - Run `twine check dist/*`.
   - Optionally install the built wheel into a fresh environment and run a smoke test.
   - Use `python scripts/validate-runtime.py --twine-check` for a local preflight report.
   - Confirm package data, README rendering, entry points, and metadata fields.

8. **Publish safely**
   - Prefer TestPyPI or another non-production validation path before a first public release.
   - For CI/CD publication, prefer PyPI Trusted Publishers when available.
   - Treat long-lived API tokens as a fallback, not the preferred baseline.
   - If release integrity is a mature concern, consider attestations as an advanced enhancement.

9. **Hand off with concrete verification**
   - Report the backend used, project layout, build commands, artifact results, and publishing path.
   - Include any warnings from `scripts/validate-runtime.py` and the fix applied or deferred.

## Examples

Open `examples/implementation-example.md` when the task needs copy-check-compare examples.

Use those examples for:

- a minimal distributable library using `src/` layout
- a library plus CLI package with a console entry point
- expected `dist/` outputs after build
- validation steps before TestPyPI or PyPI publication

## Troubleshooting

### 1. Tests pass locally but the installed package is broken

**Symptoms**
- Imports work from the repository root.
- A wheel installs, but runtime imports fail.

**Likely causes**
- Flat layout is masking missing package discovery or missing files.
- Tests are importing from the working tree instead of the installed package.

**Checks**
- Confirm whether the project uses `src/` or flat layout.
- Create a fresh environment and install the built wheel.
- Run imports from outside the repository directory.

**Fix**
- Prefer `src/` layout for distributable libraries.
- Rebuild and retest using the wheel, not only editable install behavior.

### 2. `twine check` fails or README rendering is broken

**Symptoms**
- `twine check dist/*` reports invalid long description content type or rendering issues.

**Likely causes**
- `readme` metadata is missing or mismatched.
- README content or format declaration is inconsistent.

**Checks**
- Review the `readme` field in `[project]`.
- Confirm the README file exists and matches the declared format.

**Fix**
- Correct the `readme` declaration.
- Rebuild artifacts and rerun `twine check` before any upload.

### 3. Package installs but the CLI command is missing or fails

**Symptoms**
- Installation succeeds, but the expected command is unavailable.
- The command exists but crashes on startup.

**Likely causes**
- Missing or incorrect console-script entry point.
- The entry point target does not resolve to a callable.
- The command was installed into a different environment than the one being used.

**Checks**
- Review entry point configuration in `pyproject.toml`.
- Verify the target object exists and is importable.
- Confirm the environment and `PATH` are the expected ones.

**Fix**
- Declare the console entry point correctly.
- Reinstall the built wheel in a fresh environment and test the installed command.

### 4. Built distribution is missing templates, data files, or other non-code assets

**Symptoms**
- Source tree contains files that are absent after installation.
- Runtime file lookups fail only in built artifacts.

**Likely causes**
- Package data was not included in the build configuration.
- The file exists in the repository but is outside the packaged paths.

**Checks**
- Inspect wheel and sdist contents directly.
- Compare source tree paths with packaged paths.

**Fix**
- Configure package data explicitly using backend-specific packaging rules.
- Rebuild and inspect artifacts again before upload.

### 5. Editable install behavior differs from wheel install behavior

**Symptoms**
- Editable install works, but the built wheel behaves differently.

**Likely causes**
- The project relies on repository-local paths or undeclared files.
- Backend editable install behavior differs from assumptions.

**Checks**
- Test both editable install and wheel install in fresh environments.
- Compare import paths and package contents.

**Fix**
- Treat wheel installation as the release truth.
- Remove assumptions that only hold in editable mode.

### 6. Dependency specification is rejected or resolves unexpectedly

**Symptoms**
- Installer errors mention invalid requirement strings.
- Consumers get broader or narrower dependency resolution than intended.

**Likely causes**
- Invalid version specifier syntax.
- Development-only requirements were placed in runtime dependencies.

**Checks**
- Review dependency strings against the version-specifier specification.
- Separate mandatory runtime dependencies from optional features and development groups.

**Fix**
- Correct the requirement syntax.
- Move non-runtime dependencies out of the core runtime dependency list.

## Additional Resources

- `references/runtime-practices.md` for backend-neutral decision guidance, metadata reminders, and release checks
- `examples/implementation-example.md` for concrete project trees and packaging examples
- `scripts/validate-runtime.py` for local inspection of `pyproject.toml`, layout, and `dist/` artifacts

External standards and primary references:

- PyPA Packaging tutorial
- PyPA guide to writing `pyproject.toml`
- PyPA discussion on `src/` layout vs flat layout
- PyPA discussion of package formats
- PEP 621 for project metadata
- PEP 660 for editable installs
- `build` documentation
- Twine documentation
- PyPI Trusted Publishers documentation

## Related Skills

Use a different skill when the task shifts to:

- environment management rather than packaging
- CI/CD workflow authoring beyond package release specifics
- Docker or container image build pipelines
- framework deployment patterns
- repository-wide release engineering outside Python packaging scope
