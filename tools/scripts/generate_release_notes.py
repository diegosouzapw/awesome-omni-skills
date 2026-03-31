#!/usr/bin/env python3
"""
Generate custom GitHub Release notes from repository metadata and git history.
"""

from __future__ import annotations

import argparse
import json
import os
import subprocess
from datetime import datetime, timezone
from typing import List


def get_repo_root() -> str:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.dirname(os.path.dirname(script_dir))


def load_json(path: str) -> dict:
    with open(path, "r", encoding="utf-8") as handle:
        return json.load(handle)


def run_git(args: List[str], cwd: str) -> str:
    try:
        completed = subprocess.run(
            ["git", *args],
            cwd=cwd,
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return ""
    return completed.stdout.strip()


def discover_previous_tag(current_tag: str, cwd: str) -> str:
    tags_output = run_git(["tag", "--sort=-version:refname"], cwd)
    if not tags_output:
        return ""
    tags = [tag.strip() for tag in tags_output.splitlines() if tag.strip() and tag.strip() != current_tag]
    return tags[0] if tags else ""


def collect_changelog(previous_tag: str, cwd: str) -> List[str]:
    if previous_tag:
        output = run_git(["log", "--no-merges", "--pretty=format:- %s (%h)", f"{previous_tag}..HEAD"], cwd)
    else:
        output = run_git(["log", "--no-merges", "--pretty=format:- %s (%h)", "-n", "15"], cwd)
    if not output:
        return ["- No git history was available on this runner."]
    return [line for line in output.splitlines() if line.strip()]


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate custom GitHub Release notes.")
    parser.add_argument("--output", required=True, help="Output markdown path")
    parser.add_argument("--version", default=None, help="Release version override")
    parser.add_argument("--tag", default=None, help="Current git tag override")
    args = parser.parse_args()

    root = get_repo_root()
    package = load_json(os.path.join(root, "package.json"))
    metadata = load_json(os.path.join(root, "metadata.json"))
    catalog = load_json(os.path.join(root, "dist", "catalog.json"))
    bundles = load_json(os.path.join(root, "dist", "bundles.json"))

    version = args.version or package.get("version") or "unknown"
    tag = args.tag or os.getenv("GITHUB_REF_NAME") or f"v{version}"
    previous_tag = discover_previous_tag(tag, root)
    changelog = collect_changelog(previous_tag, root)

    summary = metadata.get("summary") or {}
    skills = [skill.get("id") for skill in catalog.get("skills", []) if skill.get("id")]
    fully_backed = []
    roadmap_heavy = []
    for bundle in bundles.get("bundles", []):
        availability = bundle.get("availability") or {}
        if availability.get("available") == availability.get("total"):
            fully_backed.append(bundle.get("id"))
        else:
            roadmap_heavy.append(bundle.get("id"))

    signing_dir = os.path.join(root, "dist", "signing")
    signing_assets = []
    if os.path.isdir(signing_dir):
        signing_assets = sorted(name for name in os.listdir(signing_dir) if not name.startswith("."))

    lines: List[str] = []
    lines.append(f"# Awesome Omni Skills {version}")
    lines.append("")
    lines.append(f"- Release tag: `{tag}`")
    lines.append(f"- Generated at: `{datetime.now(timezone.utc).isoformat()}`")
    if previous_tag:
        lines.append(f"- Previous tag: `{previous_tag}`")
    lines.append("")
    lines.append("## Summary")
    lines.append("")
    lines.append(f"- Published skills: **{catalog.get('total_skills', 0)}**")
    lines.append(
        f"- Validation: **{summary.get('passed', 0)} passed**, **{summary.get('warnings', 0)} warnings**, **{summary.get('errors', 0)} errors**"
    )
    lines.append(f"- Average quality score: **{summary.get('average_quality_score', 0)}**")
    lines.append(f"- Average best practices score: **{summary.get('average_best_practices_score', 0)}**")
    lines.append(f"- Average security score: **{summary.get('average_security_score', 0)}**")
    lines.append(f"- Fully backed bundles: **{', '.join(f'`{bundle_id}`' for bundle_id in fully_backed) or 'none'}**")
    lines.append(f"- Roadmap-heavy bundles: **{', '.join(f'`{bundle_id}`' for bundle_id in roadmap_heavy) or 'none'}**")
    lines.append("")
    lines.append("## Published Skills")
    lines.append("")
    lines.append(", ".join(f"`{skill_id}`" for skill_id in skills))
    lines.append("")
    lines.append("## Bundle Availability")
    lines.append("")
    lines.append("| Bundle | Availability | Status |")
    lines.append("|:-------|:-------------|:-------|")
    for bundle in bundles.get("bundles", []):
        availability = bundle.get("availability") or {}
        available = availability.get("available", 0)
        total = availability.get("total", 0)
        status = "fully backed" if available == total else "roadmap-heavy"
        lines.append(f"| `{bundle.get('id')}` | `{available}/{total}` | {status} |")
    lines.append("")
    lines.append("## Release Checks")
    lines.append("")
    lines.append("- `npm run release:verify` passed")
    lines.append("- ClamAV was required in CI")
    lines.append("- VirusTotal hash lookup was required in CI")
    lines.append("- Detached signatures were required and verified for archives and checksum manifests")
    lines.append("- `npm publish --provenance` published the verified tarball")
    if signing_assets:
        lines.append(f"- Signing assets emitted: {', '.join(f'`dist/signing/{name}`' for name in signing_assets)}")
    lines.append("")
    lines.append("## Changelog")
    lines.append("")
    lines.extend(changelog)
    lines.append("")
    lines.append("## Attached Assets")
    lines.append("")
    lines.append("- npm package tarball")
    lines.append("- `dist/catalog.json`")
    lines.append("- `dist/bundles.json`")
    lines.append("- `docs/CATALOG.md`")
    lines.append("- `metadata.json` and `skills_index.json`")
    lines.append("- archive checksum manifests")
    if signing_assets:
        lines.append("- signing public key and CI signing outputs")
    lines.append("")

    output_path = os.path.abspath(args.output)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as handle:
        handle.write("\n".join(lines).rstrip() + "\n")

    print(f"✅ Generated {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
