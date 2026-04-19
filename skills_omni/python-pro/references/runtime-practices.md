# Python Runtime Practices Reference

Use this file during repository intake and validation. It is intentionally dense and operational.

## 1. Repository intake checklist

Inspect these first, in roughly this order:

1. `pyproject.toml`
   - `project.requires-python`
   - dependencies and optional dependency groups
   - build backend
   - tool sections for `ruff`, `pytest`, `mypy`, and others
2. lock and dependency files
   - `uv.lock`
   - `requirements.txt`, `requirements-dev.txt`
   - `poetry.lock`, `pdm.lock`, `Pipfile.lock` if present
3. CI definitions
   - Python version matrix
   - exact lint/type/test commands
4. application entry points
   - CLI module, service app, worker startup, package exports
5. test layout
   - `tests/`, fixtures, async test plugins, markers
6. framework markers
   - FastAPI app creation
   - Pydantic models or settings classes
   - async database or HTTP clients

## 2. Environment and install posture

### Preferred decision rule
Follow the repository's existing healthy toolchain first.

### Common patterns

| Signal | Likely workflow | Notes |
| --- | --- | --- |
| `uv.lock`, `.python-version`, uv docs in README | `uv sync`, `uv run ...` | Strong modern default when already present |
| `requirements*.txt` and venv docs | `python -m venv .venv`, installer from docs | Standard fallback |
| Poetry/PDM/pip-tools files | Project-native commands | Do not replace casually |

### Checks
- Confirm Python version locally: `python --version`
- Confirm interpreter path: `python -c "import sys; print(sys.executable)"`
- Confirm install runner used in CI matches local workflow

## 3. Validation matrix

Run the smallest safe subset first.

| Goal | Typical command | What to look for |
| --- | --- | --- |
| Tests | `pytest` or targeted path/node | Existing failures, flaky async tests, import problems |
| Lint | `ruff check .` | rule categories, import sorting, dead code, bugbear-style issues |
| Format check | `ruff format --check .` | whether format drift is separate from logic changes |
| Types | `mypy .` | missing stubs, Any spread, config discovery, Python version mismatch |
| Dependency audit | `pip-audit` | vulnerable direct/transitive packages, upgrade pressure |

If the project uses different tools, map the same goals to those tools rather than forcing replacement.

## 4. Async review cues

Look for these signs of trouble:

### Green flags
- related concurrent tasks are managed together
- cancellation and shutdown paths are explicit
- async request handlers call async-compatible libraries where expected
- timeouts, retries, and background work are not silently detached

### Red flags
- `create_task()` with no tracking, waiting, or shutdown handling
- blocking file/network/database calls inside async handlers
- CPU-heavy loops directly on the event loop
- broad `except Exception` around async orchestration that hides cancellation or root errors

### Questions to answer
- If one concurrent subtask fails, what happens to the others?
- Is background work truly independent, or should it be structured and awaited?
- Can this endpoint block under load because a sync library is used in the hot path?

## 5. Typing and validation review cues

### Typing
- preserve public function signatures unless change is intentional
- annotate new code where practical
- prefer specific container/value types over broad `Any`
- check whether mypy config pins a Python version or excludes important paths

### Pydantic / FastAPI
- confirm project versions before suggesting syntax changes
- prefer current project patterns over v1-era blog examples
- inspect settings loading, aliases, validators, serialization, and response models
- add narrow tests for payload and response edge cases rather than only full-stack manual checks

## 6. Packaging and build checks

Inspect `pyproject.toml` for:
- `build-system`
- `project.name`
- `project.requires-python`
- dependency declarations and optional groups
- script entry points if relevant

Red flags:
- Python requirement missing or inconsistent with CI/runtime
- build backend absent in a distributable project
- dependencies scattered across undocumented files
- importable package layout does not match metadata expectations

## 7. Security and dependency hygiene

Apply proportionally.

Use stronger reproducibility guidance when:
- the environment is production-sensitive
- the project has supply-chain constraints
- deployment or release workflows depend on deterministic installs

Otherwise, avoid presenting hash-checked installs as universal day-to-day dev defaults.

Minimum review questions:
- Are dependency versions constrained appropriately?
- Is there a lock file or another reproducible install path?
- Has the project run vulnerability auditing recently?
- Are abandoned or duplicate libraries present?

## 8. Logging and diagnostics

Prefer focused logging and reproducible checks over guesswork.

Useful signals:
- startup/shutdown logs for services
- request IDs or correlation metadata if already present
- timing around suspect async or I/O boundaries
- warnings that appear only under test or CI concurrency

## 9. Fast decision shortcuts

- **Repo has `pyproject.toml` + `uv.lock` + tool sections**: use project-native uv flow and inspect CI parity.
- **Repo has tests but no type checker**: preserve types in changed code anyway; do not force a type-system migration without scope.
- **FastAPI app with async endpoints and sync clients**: inspect for blocking behavior before any performance claims.
- **Pydantic project with odd validation behavior**: confirm version and model semantics before changing field definitions.
- **Lint/type/test disagreement**: suspect config discovery and environment mismatch before suspecting business logic.
