# Python Runtime Scaffold Practices

Use this reference when deciding which scaffold shape to generate.

## Comparison Table

| Project type | Default layout | Why | Entry validation | Notes |
| --- | --- | --- | --- | --- |
| Library | `src/` package layout | Helps prevent accidental imports from repo root and better reflects installed-package behavior | `uv run python -c "import package_name"` | Include `py.typed` if distributing typed code |
| CLI | Usually `src/` package layout | Good for installable commands and import correctness | `uv run your-command --help` | Define console scripts in `pyproject.toml` |
| FastAPI service | App package layout such as `app/` | Application-centric structure is usually simpler than packaging-first layout | import smoke test or app startup check | Split routers, schemas, dependencies once more than trivial |
| Django project | Canonical Django project/app split | Django tooling expects standard structure | `uv run python manage.py check` | Keep `manage.py` and project package conventions |

## `pyproject.toml` minimums

For modern scaffolds, include:

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "example-name"
version = "0.1.0"
description = "Short description"
readme = "README.md"
requires-python = ">=3.12"
dependencies = []
```

Recommended additions when applicable:
- dependency groups for `dev`, `test`, `docs`, or framework-specific extras
- console entry points for CLI projects
- tool sections for Ruff, mypy, and pytest

## Layout selection guidance

### Prefer `src/` when:
- the project is a reusable package
- the CLI is distributed as an installable package
- import correctness matters more than minimal tree size

### Flat or app layout is acceptable when:
- the repo is an application, not a reusable package
- the startup path is explicit
- the team values simpler local navigation over packaging isolation

### Be cautious with flat layout when:
- tests import directly from the repository root
- local runs succeed but wheel or installed-package imports fail

## Dependency grouping guidance

Use runtime dependencies only for code needed in production execution.

Use development groups for:
- Ruff
- mypy
- pytest
- framework test helpers
- docs tooling

Do not mix test-only tools into runtime dependencies unless the project explicitly requires them at runtime.

## Framework-specific notes

### FastAPI

A scalable service usually benefits from a structure such as:
- `app/main.py`
- `app/routers/`
- `app/models/` or `app/schemas/`
- `tests/`

Keep startup explicit and verify at least one import path or app object.

### Django

Preserve Django conventions:
- `manage.py`
- project package with `settings.py`, `urls.py`, `asgi.py` or `wsgi.py`
- one or more Django apps

Do not force a generic service tree onto Django.

## uv workflow notes

Prefer this sequence for new scaffolds:

```bash
uv init
uv add --group dev ruff mypy pytest
uv lock
uv sync
```

Then run project commands via `uv run` so environment and lockfile assumptions stay consistent.

## Review checklist

Before handoff, confirm:
- project type is explicit
- package or app path exists
- `pyproject.toml` has `[build-system]` and `[project]`
- `requires-python` is set
- tests exist
- lint, format, type-check, and test commands are stated
- framework-specific startup check is included
