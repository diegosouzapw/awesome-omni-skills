#!/usr/bin/env python3
"""Read-only Python repository runtime validator.

Inspects the current directory for common Python project markers and prints a
compact readiness report. Safe by design: no writes, no installs, no network.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

try:
    import tomllib  # Python 3.11+
except ModuleNotFoundError:  # pragma: no cover
    tomllib = None

ROOT = Path.cwd()


def read_text(path: Path) -> str | None:
    try:
        return path.read_text(encoding="utf-8")
    except Exception:
        return None


def load_pyproject(path: Path) -> dict | None:
    if not path.exists() or tomllib is None:
        return None
    try:
        with path.open("rb") as f:
            return tomllib.load(f)
    except Exception:
        return None


def find_files(names: list[str]) -> list[str]:
    found = []
    for name in names:
        if (ROOT / name).exists():
            found.append(name)
    return found


def scan_for_markers() -> dict[str, bool]:
    markers = {
        "fastapi": False,
        "pydantic": False,
        "pytest": False,
        "ruff": False,
        "mypy": False,
    }
    candidates = []
    for top in ("src", "app", "tests"):
        p = ROOT / top
        if p.exists():
            candidates.extend(p.rglob("*.py"))
    candidates.extend(ROOT.glob("*.py"))

    checked = 0
    for path in candidates:
        if checked >= 200:
            break
        text = read_text(path)
        if not text:
            continue
        checked += 1
        lowered = text.lower()
        if "fastapi" in lowered:
            markers["fastapi"] = True
        if "pydantic" in lowered:
            markers["pydantic"] = True
        if "pytest" in lowered:
            markers["pytest"] = True
        if "ruff" in lowered:
            markers["ruff"] = True
        if "mypy" in lowered:
            markers["mypy"] = True
    return markers


def infer_python_requirement(pyproject: dict | None) -> str | None:
    if not pyproject:
        return None
    project = pyproject.get("project", {})
    requires = project.get("requires-python")
    if isinstance(requires, str):
        return requires
    return None


def tool_sections(pyproject: dict | None) -> list[str]:
    if not pyproject:
        return []
    tool = pyproject.get("tool", {})
    if not isinstance(tool, dict):
        return []
    return sorted(tool.keys())


def build_backend(pyproject: dict | None) -> str | None:
    if not pyproject:
        return None
    build = pyproject.get("build-system", {})
    backend = build.get("build-backend")
    return backend if isinstance(backend, str) else None


def detect_uv(pyproject_text: str | None, files: list[str]) -> bool:
    if "uv.lock" in files:
        return True
    if pyproject_text and re.search(r"\buv\b", pyproject_text, flags=re.IGNORECASE):
        return True
    return False


def main() -> int:
    pyproject_path = ROOT / "pyproject.toml"
    pyproject = load_pyproject(pyproject_path)
    pyproject_text = read_text(pyproject_path) if pyproject_path.exists() else None

    config_files = find_files(
        [
            "pyproject.toml",
            "uv.lock",
            "requirements.txt",
            "requirements-dev.txt",
            "pytest.ini",
            ".pytest.ini",
            "tox.ini",
            "mypy.ini",
            ".mypy.ini",
            "ruff.toml",
            ".ruff.toml",
            ".python-version",
            "Pipfile",
            "Pipfile.lock",
            "poetry.lock",
            "pdm.lock",
        ]
    )

    sections = tool_sections(pyproject)
    markers = scan_for_markers()

    report = {
        "cwd": str(ROOT),
        "interpreter": sys.executable,
        "python_version": sys.version.split()[0],
        "has_pyproject": pyproject_path.exists(),
        "python_requirement": infer_python_requirement(pyproject),
        "build_backend": build_backend(pyproject),
        "tool_sections": sections,
        "config_files": config_files,
        "uses_uv_signals": detect_uv(pyproject_text, config_files),
        "framework_hints": {
            "fastapi": markers["fastapi"],
            "pydantic": markers["pydantic"],
        },
        "validation_tool_hints": {
            "pytest": ("pytest" in sections) or ("pytest.ini" in config_files) or (".pytest.ini" in config_files) or markers["pytest"],
            "ruff": ("ruff" in sections) or ("ruff.toml" in config_files) or (".ruff.toml" in config_files) or markers["ruff"],
            "mypy": ("mypy" in sections) or ("mypy.ini" in config_files) or (".mypy.ini" in config_files) or markers["mypy"],
        },
    }

    findings: list[str] = []
    if not report["has_pyproject"]:
        findings.append("No pyproject.toml found; inspect legacy packaging/install workflow before assuming modern defaults.")
    if report["python_requirement"] is None:
        findings.append("Python requirement not declared in [project.requires-python]; verify runtime expectations from CI/docs.")
    if report["python_requirement"] and "3.12" not in str(report["python_requirement"]):
        findings.append(f"Project declares Python requirement {report['python_requirement']}; do not assume 3.12-only patterns blindly.")
    if not report["validation_tool_hints"]["pytest"]:
        findings.append("No obvious pytest configuration detected; check project docs or CI for the test entrypoint.")
    if not report["validation_tool_hints"]["ruff"]:
        findings.append("No obvious ruff configuration detected; keep existing lint tooling if another stack is present.")
    if report["framework_hints"]["fastapi"] and report["framework_hints"]["pydantic"]:
        findings.append("FastAPI and Pydantic usage detected; verify version-specific validation/serialization behavior before editing models.")
    if report["uses_uv_signals"]:
        findings.append("uv workflow signals detected; prefer inspecting uv-based sync/run commands before inventing alternatives.")

    print(json.dumps({"report": report, "findings": findings}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
