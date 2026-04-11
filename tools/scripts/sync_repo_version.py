#!/usr/bin/env python3
"""Synchronize repository version references from package.json.

This script can also update the root/workspace package.json files so CI does not
need to rely on ``npm version --workspaces``. That npm command can try to
resolve unpublished private workspaces from the registry during automated
releases, which is not what this repository wants.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from generate_project_status import write_project_status
from generate_i18n import render_i18n_docs
from render_project_docs import render_project_docs
from repository_sources import render_registry_file

REPO_ROOT = Path(__file__).resolve().parents[2]


def load_package_version(repo_root: Path) -> str:
    package_path = repo_root / "package.json"
    package = json.loads(package_path.read_text(encoding="utf-8"))
    version = package.get("version")
    if not isinstance(version, str) or not version.strip():
        raise ValueError("package.json does not contain a valid version")
    return version.strip()


def write_package_version(package_path: Path, version: str) -> None:
    package = json.loads(package_path.read_text(encoding="utf-8"))
    package["version"] = version
    package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")


def update_internal_dependency_versions(package: dict, version: str) -> None:
    for section in ("dependencies", "devDependencies", "optionalDependencies", "peerDependencies"):
        entries = package.get(section)
        if not isinstance(entries, dict):
            continue
        for dependency_name in list(entries.keys()):
            if dependency_name.startswith("@omni-skills/"):
                entries[dependency_name] = version


def update_workspace_package_versions(repo_root: Path, version: str) -> None:
    root_package_path = repo_root / "package.json"
    root_package = json.loads(root_package_path.read_text(encoding="utf-8"))
    root_package["version"] = version
    update_internal_dependency_versions(root_package, version)
    root_package_path.write_text(json.dumps(root_package, indent=2) + "\n", encoding="utf-8")

    packages_dir = repo_root / "packages"
    if not packages_dir.is_dir():
        return

    for package_path in sorted(packages_dir.glob("*/package.json")):
        package = json.loads(package_path.read_text(encoding="utf-8"))
        package["version"] = version
        update_internal_dependency_versions(package, version)
        package_path.write_text(json.dumps(package, indent=2) + "\n", encoding="utf-8")

    openapi_path = repo_root / "packages" / "server-api" / "openapi.yaml"
    if openapi_path.exists():
        replace_required(
            openapi_path,
            r"(^info:\n(?:[^\n]*\n)*?\s+version:\s+).*$",
            rf"\g<1>{version}",
        )


def replace_required(path: Path, pattern: str, replacement: str) -> None:
    content = path.read_text(encoding="utf-8")
    updated, count = re.subn(pattern, replacement, content, flags=re.MULTILINE)
    if count == 0:
        raise ValueError(f"Pattern not found in {path}: {pattern}")
    path.write_text(updated, encoding="utf-8")


def sync_version(repo_root: Path, version: str) -> None:
    write_project_status(repo_root, version_override=version)
    render_project_docs(repo_root)
    render_registry_file(repo_root / "REPOSITORY-SOURCES.md", check=False)
    render_i18n_docs(repo_root, check=False, refresh_english=False)

def main() -> int:
    parser = argparse.ArgumentParser(description="Sync repository version references from package.json.")
    parser.add_argument("--version", default=None, help="Explicit version override")
    parser.add_argument("--repo-root", default=str(REPO_ROOT), help="Repository root")
    parser.add_argument(
        "--update-package-jsons",
        action="store_true",
        help="Also update root/workspace package.json files before syncing references.",
    )
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    version = args.version or load_package_version(repo_root)
    if args.update_package_jsons:
        update_workspace_package_versions(repo_root, version)
    sync_version(repo_root, version)
    print(version)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
