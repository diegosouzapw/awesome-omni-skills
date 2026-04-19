#!/usr/bin/env python3
"""Inspect a Python repository for runtime-pattern mismatches.

Checks:
- pyproject.toml presence and basic sections
- layout indicators (src vs flat)
- test/import risks
- obvious async/blocking and subprocess shell=True heuristics

Usage:
    python scripts/validate-runtime.py .
"""

from __future__ import annotations

import argparse
import ast
import os
from pathlib import Path
from typing import Iterable, List, Tuple

SEVERITY_ORDER = {"INFO": 0, "WARN": 1, "RISK": 2}
SKIP_DIRS = {
    ".git",
    ".hg",
    ".svn",
    ".mypy_cache",
    ".pytest_cache",
    ".ruff_cache",
    ".tox",
    ".venv",
    "venv",
    "node_modules",
    "dist",
    "build",
    "__pycache__",
}


class Finding:
    def __init__(self, severity: str, category: str, message: str, path: str | None = None):
        self.severity = severity
        self.category = category
        self.message = message
        self.path = path

    def render(self) -> str:
        prefix = f"[{self.severity}] {self.category}"
        if self.path:
            return f"{prefix}: {self.message} ({self.path})"
        return f"{prefix}: {self.message}"


def read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return path.read_text(encoding="utf-8", errors="replace")


def iter_python_files(root: Path) -> Iterable[Path]:
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for filename in filenames:
            if filename.endswith(".py"):
                yield Path(dirpath) / filename


def detect_layout(root: Path) -> Tuple[bool, bool, bool]:
    has_pyproject = (root / "pyproject.toml").exists()
    has_src = (root / "src").is_dir()
    has_tests = (root / "tests").is_dir()
    return has_pyproject, has_src, has_tests


def scan_pyproject(root: Path, findings: List[Finding]) -> None:
    pyproject = root / "pyproject.toml"
    if not pyproject.exists():
        findings.append(Finding("WARN", "metadata", "Missing pyproject.toml; modern Python metadata/tool configuration often belongs here"))
        return

    text = read_text(pyproject)
    if "[project]" not in text:
        findings.append(Finding("WARN", "metadata", "pyproject.toml exists but lacks a [project] section; confirm whether packaging metadata is intended", str(pyproject)))
    if "[tool.pytest.ini_options]" not in text and "pytest" not in text:
        findings.append(Finding("INFO", "testing", "No pytest configuration detected in pyproject.toml; this may be fine, but import/test behavior should still be intentional", str(pyproject)))
    if "ruff" not in text:
        findings.append(Finding("INFO", "tooling", "No Ruff configuration detected in pyproject.toml; acceptable if another formatter/linter is used", str(pyproject)))
    if "mypy" not in text:
        findings.append(Finding("INFO", "typing", "No mypy configuration detected in pyproject.toml; acceptable if another type checker is used or typing is not part of the workflow", str(pyproject)))


def scan_layout(root: Path, findings: List[Finding]) -> None:
    has_pyproject, has_src, has_tests = detect_layout(root)
    top_level_packages = []
    for child in root.iterdir():
        if child.is_dir() and child.name not in SKIP_DIRS and (child / "__init__.py").exists():
            top_level_packages.append(child.name)

    if has_src:
        findings.append(Finding("INFO", "layout", "src/ layout detected", str(root / "src")))
    elif top_level_packages and has_tests:
        findings.append(Finding("WARN", "layout", "Flat package layout with tests detected; verify tests are not relying on repository-root imports instead of installable package behavior", str(root)))
    elif not top_level_packages and not has_src:
        findings.append(Finding("INFO", "layout", "No package layout detected; repo may be script-oriented", str(root)))

    if has_tests and not has_pyproject:
        findings.append(Finding("WARN", "testing", "tests/ exists without pyproject.toml; import mode and tool configuration may drift across environments", str(root / "tests")))


def is_blocking_http_call(node: ast.Call) -> bool:
    func = node.func
    if isinstance(func, ast.Attribute) and isinstance(func.value, ast.Name):
        if func.value.id in {"requests", "httpx"} and func.attr in {"get", "post", "put", "delete", "patch", "request"}:
            return True
    return False


def is_subprocess_call(node: ast.Call) -> bool:
    func = node.func
    return (
        isinstance(func, ast.Attribute)
        and isinstance(func.value, ast.Name)
        and func.value.id == "subprocess"
        and func.attr in {"run", "Popen", "call", "check_call", "check_output"}
    )


def keyword_bool(node: ast.Call, keyword: str) -> bool | None:
    for kw in node.keywords:
        if kw.arg == keyword:
            if isinstance(kw.value, ast.Constant) and isinstance(kw.value.value, bool):
                return kw.value.value
    return None


class FileScanner(ast.NodeVisitor):
    def __init__(self, path: Path):
        self.path = path
        self.findings: List[Finding] = []
        self.async_stack = 0

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef) -> None:
        self.async_stack += 1
        self.generic_visit(node)
        self.async_stack -= 1

    def visit_Call(self, node: ast.Call) -> None:
        if self.async_stack and is_blocking_http_call(node):
            self.findings.append(Finding(
                "RISK",
                "async",
                "Blocking HTTP-style call found inside async function; verify the client is truly async or offload the call",
                f"{self.path}:{node.lineno}",
            ))

        if is_subprocess_call(node):
            shell_value = keyword_bool(node, "shell")
            if shell_value is True:
                self.findings.append(Finding(
                    "RISK",
                    "subprocess",
                    "subprocess call uses shell=True; prefer argument lists and validate any dynamic input",
                    f"{self.path}:{node.lineno}",
                ))
            has_timeout = any(kw.arg == "timeout" for kw in node.keywords)
            if not has_timeout:
                self.findings.append(Finding(
                    "INFO",
                    "subprocess",
                    "subprocess call has no explicit timeout; confirm this is safe for the execution path",
                    f"{self.path}:{node.lineno}",
                ))

        self.generic_visit(node)


def scan_python_files(root: Path, findings: List[Finding]) -> None:
    for path in iter_python_files(root):
        try:
            tree = ast.parse(read_text(path), filename=str(path))
        except SyntaxError as exc:
            findings.append(Finding("WARN", "parse", f"Could not parse Python file: {exc.msg}", f"{path}:{exc.lineno}"))
            continue
        scanner = FileScanner(path)
        scanner.visit(tree)
        findings.extend(scanner.findings)


def summarize(findings: List[Finding]) -> str:
    counts = {"INFO": 0, "WARN": 0, "RISK": 0}
    for finding in findings:
        counts[finding.severity] += 1
    return f"Summary: {counts['RISK']} risk, {counts['WARN']} warning, {counts['INFO']} info finding(s)"


def main() -> int:
    parser = argparse.ArgumentParser(description="Inspect a Python repository for runtime-pattern mismatches")
    parser.add_argument("root", nargs="?", default=".", help="Repository root to inspect")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    if not root.exists() or not root.is_dir():
        print(f"[ERROR] Path is not a directory: {root}")
        return 2

    findings: List[Finding] = []
    scan_pyproject(root, findings)
    scan_layout(root, findings)
    scan_python_files(root, findings)

    findings.sort(key=lambda f: (SEVERITY_ORDER[f.severity], f.category, f.path or ""), reverse=True)

    print(f"Python runtime validation report for: {root}")
    print(summarize(findings))
    print()
    if not findings:
        print("No findings. Confirm manually that the repository still matches intended runtime, layout, and safety choices.")
        return 0

    for finding in findings:
        print(finding.render())

    return 1 if any(f.severity in {"WARN", "RISK"} for f in findings) else 0


if __name__ == "__main__":
    raise SystemExit(main())
