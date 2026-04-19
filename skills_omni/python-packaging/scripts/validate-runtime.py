#!/usr/bin/env python3
"""Preflight validation for Python packaging projects.

Checks:
- pyproject.toml presence and parseability
- build-system and project metadata sanity
- package layout hints (`src/` vs flat)
- dist artifact presence
- optional build invocation
- optional twine check

This script is intentionally conservative: it reports actionable warnings and
errors without mutating project files.
"""

from __future__ import annotations

import argparse
import pathlib
import subprocess
import sys
import tarfile
import zipfile

try:
    import tomllib
except ModuleNotFoundError:  # pragma: no cover
    print("ERROR: Python 3.11+ is required for tomllib support.", file=sys.stderr)
    raise


class Reporter:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []
        self.infos: list[str] = []

    def error(self, msg: str) -> None:
        self.errors.append(msg)

    def warn(self, msg: str) -> None:
        self.warnings.append(msg)

    def info(self, msg: str) -> None:
        self.infos.append(msg)

    def emit(self) -> int:
        for msg in self.infos:
            print(f"INFO: {msg}")
        for msg in self.warnings:
            print(f"WARN: {msg}")
        for msg in self.errors:
            print(f"ERROR: {msg}")
        print(
            f"\nSummary: {len(self.errors)} error(s), "
            f"{len(self.warnings)} warning(s), {len(self.infos)} info item(s)."
        )
        return 1 if self.errors else 0


RECOMMENDED_PROJECT_FIELDS = ["name", "description", "readme", "requires-python"]


def run_command(cmd: list[str], cwd: pathlib.Path, reporter: Reporter) -> bool:
    reporter.info("Running: " + " ".join(cmd))
    try:
        completed = subprocess.run(cmd, cwd=cwd, check=False)
    except FileNotFoundError:
        reporter.error(f"Command not found: {cmd[0]}")
        return False
    if completed.returncode != 0:
        reporter.error(f"Command failed with exit code {completed.returncode}: {' '.join(cmd)}")
        return False
    return True


def load_pyproject(project_dir: pathlib.Path, reporter: Reporter) -> dict | None:
    pyproject = project_dir / "pyproject.toml"
    if not pyproject.exists():
        reporter.error("pyproject.toml not found")
        return None
    try:
        data = tomllib.loads(pyproject.read_text(encoding="utf-8"))
    except Exception as exc:
        reporter.error(f"Could not parse pyproject.toml: {exc}")
        return None
    reporter.info("Loaded pyproject.toml")
    return data


def validate_build_system(data: dict, reporter: Reporter) -> None:
    build_system = data.get("build-system")
    if not isinstance(build_system, dict):
        reporter.error("Missing [build-system] table")
        return
    requires = build_system.get("requires")
    backend = build_system.get("build-backend")
    if not requires:
        reporter.error("[build-system].requires is missing or empty")
    if not backend:
        reporter.error("[build-system].build-backend is missing")
    else:
        reporter.info(f"Build backend: {backend}")


def validate_project_table(data: dict, reporter: Reporter) -> None:
    project = data.get("project")
    if not isinstance(project, dict):
        reporter.error("Missing [project] table")
        return

    name = project.get("name")
    if not name:
        reporter.error("[project].name is required")
    else:
        reporter.info(f"Project name: {name}")

    version = project.get("version")
    dynamic = project.get("dynamic", [])
    if not version and "version" not in dynamic:
        reporter.error("Project must define version or declare it in [project].dynamic")

    for field in RECOMMENDED_PROJECT_FIELDS:
        if field not in project:
            reporter.warn(f"Recommended metadata missing: [project].{field}")

    dependencies = project.get("dependencies", [])
    if dependencies and not isinstance(dependencies, list):
        reporter.error("[project].dependencies must be a list if present")

    scripts = project.get("scripts")
    if scripts:
        if not isinstance(scripts, dict):
            reporter.error("[project.scripts] must be a table of command-to-callable mappings")
        else:
            reporter.info(f"Console scripts declared: {', '.join(sorted(scripts.keys()))}")


def find_package_dirs(base: pathlib.Path) -> list[pathlib.Path]:
    results: list[pathlib.Path] = []
    for child in base.iterdir() if base.exists() else []:
        if child.is_dir() and not child.name.startswith((".", "__")):
            if (child / "__init__.py").exists():
                results.append(child)
    return results


def validate_layout(project_dir: pathlib.Path, reporter: Reporter) -> None:
    src_dir = project_dir / "src"
    src_packages = find_package_dirs(src_dir)
    root_packages = find_package_dirs(project_dir)

    if src_packages:
        reporter.info("Detected src/ layout: " + ", ".join(p.name for p in src_packages))
    if root_packages:
        names = [p.name for p in root_packages if p.name not in {"tests", "dist", "build"}]
        if names:
            reporter.info("Detected top-level packages: " + ", ".join(names))

    if src_packages and root_packages:
        meaningful_root = [p for p in root_packages if p.name not in {"tests", "dist", "build"}]
        if meaningful_root:
            reporter.warn("Both src/ and top-level packages detected; confirm package discovery is intentional")
    elif not src_packages and not root_packages:
        reporter.warn("No obvious importable package directory found; confirm layout or backend discovery config")
    elif root_packages and not src_packages:
        reporter.warn("Flat layout detected; acceptable for some projects, but verify imports using an installed wheel")

    tests_dir = project_dir / "tests"
    if tests_dir.exists():
        reporter.info("tests/ directory present")
    else:
        reporter.warn("tests/ directory not found")


def collect_dist_artifacts(project_dir: pathlib.Path, reporter: Reporter) -> tuple[list[pathlib.Path], list[pathlib.Path]]:
    dist_dir = project_dir / "dist"
    if not dist_dir.exists():
        reporter.warn("dist/ directory not found; build artifacts have not been created yet")
        return [], []
    wheels = sorted(dist_dir.glob("*.whl"))
    sdists = sorted(dist_dir.glob("*.tar.gz"))
    if wheels:
        reporter.info("Wheel artifacts: " + ", ".join(p.name for p in wheels))
    if sdists:
        reporter.info("Source distributions: " + ", ".join(p.name for p in sdists))
    if not wheels and not sdists:
        reporter.warn("dist/ exists but contains no wheel or source distribution artifacts")
    return wheels, sdists


def inspect_wheel(path: pathlib.Path, reporter: Reporter) -> None:
    try:
        with zipfile.ZipFile(path) as zf:
            names = zf.namelist()
    except Exception as exc:
        reporter.error(f"Could not inspect wheel {path.name}: {exc}")
        return
    if not any(name.endswith(".dist-info/METADATA") for name in names):
        reporter.error(f"Wheel {path.name} is missing .dist-info/METADATA")
    if not any(name.endswith(".dist-info/WHEEL") for name in names):
        reporter.error(f"Wheel {path.name} is missing .dist-info/WHEEL")


def inspect_sdist(path: pathlib.Path, reporter: Reporter) -> None:
    try:
        with tarfile.open(path, "r:gz") as tf:
            names = tf.getnames()
    except Exception as exc:
        reporter.error(f"Could not inspect sdist {path.name}: {exc}")
        return
    if not any(name.endswith("pyproject.toml") for name in names):
        reporter.warn(f"sdist {path.name} does not appear to contain pyproject.toml")
    if not any(name.endswith("README.md") or name.endswith("README.rst") for name in names):
        reporter.warn(f"sdist {path.name} does not appear to contain a README file")


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate a Python packaging project")
    parser.add_argument("--project", default=".", help="Path to the project root (default: current directory)")
    parser.add_argument("--build", action="store_true", help="Run `python -m build` before inspection")
    parser.add_argument("--twine-check", action="store_true", help="Run `twine check dist/*` if artifacts exist")
    args = parser.parse_args()

    project_dir = pathlib.Path(args.project).resolve()
    reporter = Reporter()

    if not project_dir.exists() or not project_dir.is_dir():
        print(f"ERROR: Project path is not a directory: {project_dir}", file=sys.stderr)
        return 2

    reporter.info(f"Project directory: {project_dir}")
    data = load_pyproject(project_dir, reporter)
    if data is None:
        return reporter.emit()

    validate_build_system(data, reporter)
    validate_project_table(data, reporter)
    validate_layout(project_dir, reporter)

    if args.build:
        run_command([sys.executable, "-m", "build"], project_dir, reporter)

    wheels, sdists = collect_dist_artifacts(project_dir, reporter)
    for wheel in wheels:
        inspect_wheel(wheel, reporter)
    for sdist in sdists:
        inspect_sdist(sdist, reporter)

    if not wheels:
        reporter.warn("No wheel found in dist/")
    if not sdists:
        reporter.warn("No source distribution found in dist/")

    if args.twine_check:
        if wheels or sdists:
            dist_args = [str(p) for p in sorted((project_dir / "dist").iterdir()) if p.is_file()]
            run_command([sys.executable, "-m", "twine", "check", *dist_args], project_dir, reporter)
        else:
            reporter.warn("Skipping twine check because no artifacts were found")

    return reporter.emit()


if __name__ == "__main__":
    raise SystemExit(main())
