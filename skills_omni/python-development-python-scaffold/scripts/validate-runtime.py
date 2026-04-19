#!/usr/bin/env python3
from __future__ import annotations

import argparse
import sys
from pathlib import Path


try:
    import tomllib
except ModuleNotFoundError:  # pragma: no cover
    print("ERROR: Python 3.11+ is required for tomllib.", file=sys.stderr)
    sys.exit(2)


class Validator:
    def __init__(self, root: Path, project_type: str | None, app_dir: str | None) -> None:
        self.root = root
        self.project_type = project_type
        self.app_dir = app_dir
        self.errors: list[str] = []
        self.warnings: list[str] = []
        self.notes: list[str] = []

    def run(self) -> int:
        pyproject_path = self.root / "pyproject.toml"
        if not pyproject_path.exists():
            self.errors.append("Missing pyproject.toml at repository root.")
            return self.finish()

        try:
            data = tomllib.loads(pyproject_path.read_text(encoding="utf-8"))
        except Exception as exc:
            self.errors.append(f"Could not parse pyproject.toml: {exc}")
            return self.finish()

        self.validate_pyproject(data)
        self.validate_tests()
        self.validate_layout(data)
        return self.finish()

    def validate_pyproject(self, data: dict) -> None:
        build_system = data.get("build-system")
        if not isinstance(build_system, dict):
            self.errors.append("pyproject.toml is missing [build-system].")
        else:
            if not build_system.get("requires"):
                self.errors.append("[build-system] is missing 'requires'.")
            if not build_system.get("build-backend"):
                self.errors.append("[build-system] is missing 'build-backend'.")

        project = data.get("project")
        if not isinstance(project, dict):
            self.errors.append("pyproject.toml is missing [project].")
            return

        for field in ("name", "requires-python"):
            if not project.get(field):
                self.errors.append(f"[project] is missing '{field}'.")

        has_version = bool(project.get("version"))
        dynamic = project.get("dynamic", [])
        if not has_version and "version" not in dynamic:
            self.errors.append("[project] must define 'version' or mark it as dynamic.")

    def validate_tests(self) -> None:
        tests_dir = self.root / "tests"
        if not tests_dir.exists() or not tests_dir.is_dir():
            self.errors.append("Missing tests/ directory.")
            return

        test_files = list(tests_dir.rglob("test_*.py")) + list(tests_dir.rglob("*_test.py"))
        if not test_files:
            self.warnings.append("tests/ exists but contains no obvious pytest test files.")

    def validate_layout(self, data: dict) -> None:
        project = data.get("project", {})
        project_name = project.get("name", "")
        normalized = project_name.replace("-", "_").replace(".", "_")

        src_pkg = self.root / "src" / normalized
        flat_pkg = self.root / normalized
        app_dir = self.root / self.app_dir if self.app_dir else None
        manage_py = self.root / "manage.py"

        if self.project_type == "django":
            if not manage_py.exists():
                self.errors.append("Django project expected but manage.py is missing.")
            project_candidates = [p for p in self.root.iterdir() if p.is_dir() and (p / "settings.py").exists()]
            if not project_candidates:
                self.errors.append("Django project expected but no project package with settings.py was found.")
            return

        if self.project_type == "fastapi":
            if app_dir is None:
                app_dir = self.root / "app"
            if not app_dir.exists():
                self.errors.append(f"FastAPI project expected but app directory '{app_dir.name}' is missing.")
                return
            main_py = app_dir / "main.py"
            if not main_py.exists():
                self.errors.append(f"FastAPI app directory '{app_dir.name}' is missing main.py.")
            return

        if src_pkg.exists():
            self.notes.append(f"Detected src layout package: src/{normalized}")
        elif flat_pkg.exists():
            self.notes.append(f"Detected flat/app layout package: {normalized}/")
        elif (self.root / "app").exists():
            self.notes.append("Detected application directory: app/")
        else:
            self.errors.append(
                "Could not find an obvious package or app directory. Expected one of: "
                f"src/{normalized}, {normalized}/, or app/."
            )

    def finish(self) -> int:
        for note in self.notes:
            print(f"NOTE: {note}")
        for warning in self.warnings:
            print(f"WARN: {warning}")
        for error in self.errors:
            print(f"ERROR: {error}")

        if self.errors:
            print(f"FAIL: {len(self.errors)} error(s), {len(self.warnings)} warning(s)")
            return 1

        print(f"OK: scaffold passed structural validation with {len(self.warnings)} warning(s)")
        return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Validate a Python project scaffold.")
    parser.add_argument("root", nargs="?", default=".", help="Repository root to inspect")
    parser.add_argument(
        "--project-type",
        choices=["library", "cli", "fastapi", "django", "generic"],
        default=None,
        help="Optional expected project type",
    )
    parser.add_argument(
        "--app-dir",
        default=None,
        help="Application directory name for app-centric projects, for example 'app'",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    root = Path(args.root).resolve()
    if not root.exists() or not root.is_dir():
        print(f"ERROR: root path does not exist or is not a directory: {root}", file=sys.stderr)
        return 2

    validator = Validator(root=root, project_type=args.project_type, app_dir=args.app_dir)
    return validator.run()


if __name__ == "__main__":
    raise SystemExit(main())
