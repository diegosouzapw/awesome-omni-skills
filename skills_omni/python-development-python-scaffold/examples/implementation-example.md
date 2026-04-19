# Implementation Examples

These examples are intended to be copied and adapted, not treated as the only valid layouts.

## Example 1: Distributable Library

### User intent

"Create a reusable Python library with typed code, pytest, mypy, and Ruff using modern packaging."

### Suggested tree

```text
sample-lib/
├── .gitignore
├── README.md
├── pyproject.toml
├── src/
│   └── sample_lib/
│       ├── __init__.py
│       ├── core.py
│       └── py.typed
└── tests/
    └── test_core.py
```

### `pyproject.toml` snippet

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "sample-lib"
version = "0.1.0"
description = "Example distributable library"
readme = "README.md"
requires-python = ">=3.12"
dependencies = []

[dependency-groups]
dev = [
  "mypy>=1.0",
  "pytest>=8.0",
  "ruff>=0.0.0",
]

[tool.ruff]
line-length = 100

[tool.mypy]
python_version = "3.12"
strict = false

[tool.pytest.ini_options]
testpaths = ["tests"]
```

### Starter code

`src/sample_lib/core.py`

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```

`tests/test_core.py`

```python
from sample_lib.core import greet


def test_greet() -> None:
    assert greet("world") == "Hello, world!"
```

### Commands

```bash
uv init
uv add --group dev ruff mypy pytest
uv lock
uv sync
uv run ruff check .
uv run ruff format --check .
uv run mypy .
uv run pytest
uv run python -c "import sample_lib"
python scripts/validate-runtime.py .
```

### Expected results

- `ruff check` passes
- `mypy` passes
- `pytest` reports 1 passed
- import smoke test succeeds
- structural validator exits `0`

## Example 2: FastAPI Service

### User intent

"Create a small FastAPI service scaffold with uv, tests, Ruff, and mypy."

### Suggested tree

```text
sample-api/
├── .gitignore
├── README.md
├── pyproject.toml
├── app/
│   ├── __init__.py
│   ├── main.py
│   └── routers/
│       ├── __init__.py
│       └── health.py
└── tests/
    └── test_health.py
```

### `pyproject.toml` snippet

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "sample-api"
version = "0.1.0"
description = "Example FastAPI service"
readme = "README.md"
requires-python = ">=3.12"
dependencies = [
  "fastapi>=0.110",
  "uvicorn>=0.29",
]

[dependency-groups]
dev = [
  "mypy>=1.0",
  "pytest>=8.0",
  "ruff>=0.0.0",
]
```

### Starter code

`app/main.py`

```python
from fastapi import FastAPI

from app.routers.health import router as health_router

app = FastAPI(title="sample-api")
app.include_router(health_router)
```

`app/routers/health.py`

```python
from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
```

### Commands

```bash
uv init
uv add fastapi uvicorn
uv add --group dev ruff mypy pytest
uv lock
uv sync
uv run ruff check .
uv run ruff format --check .
uv run mypy .
uv run pytest
uv run python -c "from app.main import app; print(app.title)"
python scripts/validate-runtime.py . --project-type fastapi --app-dir app
```

### Expected results

- app import succeeds
- title prints `sample-api`
- quality checks pass
- tests are discovered
- structural validator exits `0`
