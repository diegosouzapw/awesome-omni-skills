# Python Packaging Implementation Examples

These examples are designed for operator comparison during real packaging work.

## Example 1: Minimal library package with `src/` layout

### Project tree

```text
acme-math/
├─ pyproject.toml
├─ README.md
├─ src/
│  └─ acme_math/
│     ├─ __init__.py
│     └─ core.py
└─ tests/
   └─ test_core.py
```

### `src/acme_math/__init__.py`

```python
from .core import add

__all__ = ["add"]
```

### `src/acme_math/core.py`

```python
def add(a: int, b: int) -> int:
    return a + b
```

### `pyproject.toml`

```toml
[build-system]
requires = ["setuptools>=68"]
build-backend = "setuptools.build_meta"

[project]
name = "acme-math"
version = "0.1.0"
description = "Small example math library"
readme = "README.md"
requires-python = ">=3.10"
dependencies = []
```

### Build and validate

```bash
python -m pip install --upgrade build twine
python -m build
twine check dist/*
python scripts/validate-runtime.py --project .
```

### Expected build outputs

```text
dist/
├─ acme_math-0.1.0-py3-none-any.whl
└─ acme_math-0.1.0.tar.gz
```

### Expected smoke test behavior

In a fresh environment after installing the wheel:

```python
from acme_math import add
print(add(2, 3))
```

Expected output:

```text
5
```

---

## Example 2: Library plus CLI package

### Project tree

```text
acme-greet/
├─ pyproject.toml
├─ README.md
├─ src/
│  └─ acme_greet/
│     ├─ __init__.py
│     ├─ cli.py
│     └─ greeting.py
└─ tests/
   └─ test_cli.py
```

### `src/acme_greet/greeting.py`

```python
def render(name: str) -> str:
    return f"Hello, {name}!"
```

### `src/acme_greet/cli.py`

```python
import argparse
from .greeting import render


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("name")
    args = parser.parse_args()
    print(render(args.name))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

### `pyproject.toml`

```toml
[build-system]
requires = ["setuptools>=68"]
build-backend = "setuptools.build_meta"

[project]
name = "acme-greet"
version = "0.1.0"
description = "Example package with a console command"
readme = "README.md"
requires-python = ">=3.10"
dependencies = []

[project.scripts]
acme-greet = "acme_greet.cli:main"
```

### Build and validate

```bash
python -m pip install --upgrade build twine
python -m build
twine check dist/*
python scripts/validate-runtime.py --project . --twine-check
```

### Expected build outputs

```text
dist/
├─ acme_greet-0.1.0-py3-none-any.whl
└─ acme_greet-0.1.0.tar.gz
```

### Expected installed behavior

After installing the built wheel into a fresh environment:

```bash
acme-greet world
```

Expected output:

```text
Hello, world!
```

### What to compare during review

- Does the package use `src/` layout for a distributable project?
- Does `[project]` contain standardized metadata?
- If a CLI is expected, is a console-script entry point declared?
- Does `dist/` contain the expected artifacts after `python -m build`?
- Does `twine check` pass before any upload?
