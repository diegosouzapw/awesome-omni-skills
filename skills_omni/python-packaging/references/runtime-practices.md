# Python Packaging Runtime Practices Reference

Use this reference when you need packaging standards detail during implementation or review.

## 1. Backend-neutral baseline

| Topic | Recommended baseline | Notes |
| --- | --- | --- |
| Primary config file | `pyproject.toml` | Modern packaging starts here |
| Build frontend | `python -m build` | Standard way to produce wheel and sdist |
| Metadata location | `[project]` | Prefer standardized metadata from PEP 621 |
| Validation | `twine check dist/*` | Catches metadata and README rendering issues |
| First publication path | TestPyPI or other non-production validation | Avoid first validating on production PyPI |
| CI publishing | Trusted Publishers when supported | Safer than long-lived API tokens |

## 2. Minimal `pyproject.toml` shape

A minimal modern package usually needs:

```toml
[build-system]
requires = ["setuptools>=68"]
build-backend = "setuptools.build_meta"

[project]
name = "example-package"
version = "0.1.0"
description = "Short package summary"
readme = "README.md"
requires-python = ">=3.10"
dependencies = []
```

Important points:

- `name` is required.
- `version` is required unless it is declared as dynamic.
- `requires-python` is strongly recommended.
- `readme` is strongly recommended because packaging metadata quality is part of release quality.

## 3. Choosing a layout

| Layout | Best for | Risks | Recommendation |
| --- | --- | --- | --- |
| `src/` layout | Distributable libraries, reusable packages, library+CLI projects | Slightly more setup | Default recommendation for packages meant to be installed by others |
| Flat layout | Very small apps or internal tools | Local imports can hide packaging mistakes | Use only when the tradeoff is understood |

Typical `src/` tree:

```text
project/
├─ pyproject.toml
├─ README.md
├─ src/
│  └─ package_name/
│     ├─ __init__.py
│     └─ module.py
└─ tests/
```

## 4. Artifact expectations

| Artifact | Purpose | Typical file pattern |
| --- | --- | --- |
| Wheel | Built distribution for installation | `dist/<name>-<version>-*.whl` |
| Source distribution | Source archive used for rebuilding | `dist/<name>-<version>.tar.gz` |

Why build both:

- Wheels make installation faster and more predictable.
- Sdists support rebuilding and improve compatibility for some consumers.
- Validating both helps catch packaging omissions early.

## 5. CLI entry points

If the package exposes a command, use a console-script entry point instead of a shell wrapper.

Backend-specific syntax varies, but the concept is consistent:

- map a command name to a Python callable
- build the package
- install the wheel in a fresh environment
- verify the command exists and runs

## 6. Dependency organization

Keep dependency intent clear:

| Dependency type | Where it belongs | Why |
| --- | --- | --- |
| Mandatory runtime dependency | Core project metadata | Required for package consumers |
| Optional feature dependency | Optional dependencies / extras | Avoids forcing all users to install everything |
| Development-only dependency | Tool-specific dev groups or dependency groups | Keeps test and lint tools out of runtime requirements |

Note: dependency-group workflow support can vary across tools and installers, so verify toolchain support before standardizing on it.

## 7. Release preflight checklist

Before upload:

1. Run tests in a clean environment.
2. Build with `python -m build`.
3. Confirm `dist/` contains expected artifacts.
4. Run `twine check dist/*`.
5. Install the wheel into a fresh environment.
6. Smoke-test imports or CLI commands.
7. Verify non-code files are present where needed.

## 8. Publishing security notes

| Publishing mode | Guidance |
| --- | --- |
| CI/CD to PyPI | Prefer Trusted Publishers |
| Manual upload | Use scoped credentials carefully if Trusted Publishers are unavailable |
| Advanced integrity | Consider attestations for mature release workflows |

Trusted Publishers are the preferred modern direction because they reduce reliance on stored, long-lived secrets.

## 9. Common failure patterns

| Symptom | First check |
| --- | --- |
| Works locally, fails when installed | Compare repository import behavior vs installed wheel behavior |
| `twine check` fails | Review `readme` metadata and long-description format |
| Missing package data | Inspect built artifacts, not just source tree |
| CLI command missing | Review entry point declaration and environment path |
| Editable install differs from wheel install | Treat wheel behavior as release truth |
| Resolver rejects dependency string | Validate version specifier syntax |
