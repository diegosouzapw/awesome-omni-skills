#!/usr/bin/env python3
"""Generate the canonical project status manifest for docs and release flows."""

from __future__ import annotations

import argparse
import hashlib
import json
import subprocess
from pathlib import Path

from skill_metadata import utc_now_iso


REPO_ROOT = Path(__file__).resolve().parents[2]
IDENTITY_PATH = REPO_ROOT / "data" / "project_identity.json"
STATUS_PATH = REPO_ROOT / "data" / "project_status.json"
METADATA_PATH = REPO_ROOT / "metadata.json"
INDEX_PATH = REPO_ROOT / "skills_index.json"
BUNDLES_PATH = REPO_ROOT / "data" / "bundles.json"
DIST_CATALOG_PATH = REPO_ROOT / "dist" / "catalog.json"
DIST_BUNDLES_PATH = REPO_ROOT / "dist" / "bundles.json"
PACKAGE_PATH = REPO_ROOT / "package.json"


def load_json(path: Path) -> dict | list:
    return json.loads(path.read_text(encoding="utf-8"))


def count_curated_skills(repo_root: Path) -> int:
    return len(list((repo_root / "skills_omni").glob("*/SKILL.md")))


def load_latest_release_tag(_repo_root: Path, package_version: str) -> str:
    """Return the canonical release label for the current repository state.

    This repository treats the source-controlled package version as the
    authoritative current release label. Older git tags are historical records
    and must not override the current repository version in generated docs.
    """
    return f"v{package_version}"


def load_local_sidecar_support_snapshot_fallback(repo_root: Path) -> dict:
    existing_status_path = repo_root / "data" / "project_status.json"
    if existing_status_path.exists():
        try:
            existing_status = load_json(existing_status_path)
        except Exception:
            existing_status = {}
        if isinstance(existing_status, dict):
            install_count = int(existing_status.get("install_client_count", 0) or 0)
            mcp_client_count = int(existing_status.get("mcp_client_count", 0) or 0)
            config_target_count = int(existing_status.get("mcp_config_target_count", 0) or 0)
            config_profile_count = int(existing_status.get("mcp_config_profile_count", 0) or 0)
            if install_count and mcp_client_count and config_target_count and config_profile_count:
                return {
                    "install_capable_client_count": install_count,
                    "config_capable_client_count": mcp_client_count,
                    "config_target_count": config_target_count,
                    "config_profile_count": config_profile_count,
                }
    return {
        "install_capable_client_count": 0,
        "config_capable_client_count": 0,
        "config_target_count": 0,
        "config_profile_count": 0,
    }


def load_local_sidecar_support_snapshot(repo_root: Path) -> dict:
    node_code = """
import { getLocalSidecarSupportSnapshot } from "./packages/server-mcp/src/local-sidecar.js";
console.log(JSON.stringify(getLocalSidecarSupportSnapshot()));
"""
    try:
        result = subprocess.run(
            ["node", "--input-type=module", "-e", node_code],
            cwd=repo_root,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return load_local_sidecar_support_snapshot_fallback(repo_root)
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError:
        return load_local_sidecar_support_snapshot_fallback(repo_root)


def compute_catalog_hash(paths: list[Path]) -> str:
    digest = hashlib.sha256()
    for path in paths:
        digest.update(str(path.relative_to(REPO_ROOT)).encode("utf-8"))
        digest.update(b"\0")
        digest.update(path.read_bytes())
        digest.update(b"\0")
    return digest.hexdigest()


def list_docs_i18n_locales(repo_root: Path) -> list[str]:
    i18n_root = repo_root / "docs" / "i18n"
    if not i18n_root.exists():
        return []
    return sorted(path.name for path in i18n_root.iterdir() if path.is_dir())


def build_project_status(repo_root: Path, version_override: str | None = None) -> dict:
    identity = load_json(repo_root / "data" / "project_identity.json")
    package_json = load_json(repo_root / "package.json")
    metadata = load_json(repo_root / "metadata.json")
    bundles = load_json(repo_root / "data" / "bundles.json")
    local_sidecar = load_local_sidecar_support_snapshot(repo_root)

    package_version = str(version_override or package_json["version"]).strip()
    summary = metadata["summary"]
    taxonomy_counts = metadata["taxonomy"]["counts"]
    distribution = metadata.get("distribution", {})
    skills = metadata.get("skills", [])

    quality_scores = [int(skill.get("quality_score", 0)) for skill in skills]
    best_scores = [int(skill.get("best_practices_score", 0)) for skill in skills]
    docs_i18n_locales = list_docs_i18n_locales(repo_root)

    status = {
        "schema_version": "2026-03-31",
        "generated_at": utc_now_iso(),
        "package_version": package_version,
        "latest_release": load_latest_release_tag(repo_root, package_version),
        "release_tag": load_latest_release_tag(repo_root, package_version),
        "native_skill_count": int(summary["total_skills"]),
        "curated_skill_count": count_curated_skills(repo_root),
        "bundle_count": len(bundles),
        "docs_i18n_language_count": len(docs_i18n_locales),
        "docs_i18n_languages": docs_i18n_locales,
        "active_category_count": len(taxonomy_counts),
        "active_categories": sorted(taxonomy_counts.keys()),
        "install_client_count": int(local_sidecar["install_capable_client_count"]),
        "mcp_client_count": int(local_sidecar["config_capable_client_count"]),
        "mcp_config_target_count": int(local_sidecar["config_target_count"]),
        "mcp_config_profile_count": int(local_sidecar["config_profile_count"]),
        "runtime_surface_count": len(identity.get("runtime_surfaces", [])),
        "runtime_surfaces": identity.get("runtime_surfaces", []),
        "validation_passed": int(summary["passed"]),
        "validation_warn": int(summary["warnings"]),
        "validation_error": int(summary["errors"]),
        "average_quality_score": float(summary["average_quality_score"]),
        "average_best_practices_score": float(summary["average_best_practices_score"]),
        "average_security_score": float(summary["average_security_score"]),
        "quality_score_range": {
            "min": min(quality_scores) if quality_scores else 0,
            "max": max(quality_scores) if quality_scores else 0,
        },
        "best_practices_score_range": {
            "min": min(best_scores) if best_scores else 0,
            "max": max(best_scores) if best_scores else 0,
        },
        "skill_level_counts": distribution.get("skill_levels", {}),
        "security_status_counts": distribution.get("security_status", {}),
        "native_intake_modes": [
            "direct-pr",
            "repository-external-intake",
        ],
        "paired_private_release_floor": identity.get("paired_private_release_floor"),
        "production_dependency_count": len(package_json.get("dependencies", {})),
        "catalog_hash": compute_catalog_hash(
            [
                repo_root / "metadata.json",
                repo_root / "skills_index.json",
                repo_root / "dist" / "catalog.json",
                repo_root / "dist" / "bundles.json",
            ]
        ),
        "generated_from": {
            "identity_path": "data/project_identity.json",
            "metadata_path": "metadata.json",
            "skills_index_path": "skills_index.json",
            "bundles_path": "data/bundles.json",
            "catalog_path": "dist/catalog.json",
            "catalog_bundles_path": "dist/bundles.json",
        },
    }
    return status


def write_project_status(repo_root: Path, version_override: str | None = None) -> dict:
    status = build_project_status(repo_root, version_override=version_override)
    output_path = repo_root / "data" / "project_status.json"
    output_path.write_text(json.dumps(status, indent=2) + "\n", encoding="utf-8")
    return status


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate data/project_status.json from repository artifacts.")
    parser.add_argument("--repo-root", default=str(REPO_ROOT), help="Repository root")
    parser.add_argument("--version", default=None, help="Optional package version override")
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    status = write_project_status(repo_root, version_override=args.version)
    print(json.dumps({"path": str(repo_root / "data" / "project_status.json"), "package_version": status["package_version"]}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
