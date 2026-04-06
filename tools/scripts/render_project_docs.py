#!/usr/bin/env python3
"""Render bounded project identity/status blocks inside canonical docs."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def replace_generated_block(content: str, block_id: str, rendered: str) -> str:
    start_marker = f"<!-- generated:{block_id}:start -->"
    end_marker = f"<!-- generated:{block_id}:end -->"
    pattern = re.compile(
        rf"{re.escape(start_marker)}\n.*?\n{re.escape(end_marker)}",
        flags=re.DOTALL,
    )

    replacement = f"{start_marker}\n{rendered.rstrip()}\n{end_marker}"
    updated, count = pattern.subn(replacement, content)
    if count != 1:
        raise ValueError(f"Missing or duplicated generated block: {block_id}")
    return updated


def render_project_meta(identity: dict, status: dict) -> str:
    generated_date = str(status["generated_at"]).split("T", 1)[0]
    return (
        f"<!-- {identity['repo_slug']}: version={status['package_version']}; "
        f"native_skills={status['native_skill_count']}; curated_skills={status['curated_skill_count']}; "
        f"updated_at={generated_date} -->"
    )


def render_readme_project_at_a_glance(identity: dict, status: dict) -> str:
    return "\n".join(
        [
            "| | Metric | Value |",
            "|:--|:-------|:------|",
            f"| 📦 | **Published Skills** | `{status['native_skill_count']}` native skills across {status['active_category_count']} active categories |",
            f"| 🎯 | **Bundles** | `{status['bundle_count']}` fully backed curated bundles |",
            f"| 🖥️ | **Install Clients** | `{status['install_client_count']}` install-capable AI coding assistants |",
            f"| 🔌 | **MCP Clients** | `{status['mcp_client_count']}` MCP config-capable clients across `{status['mcp_config_target_count']}` first-class targets |",
            f"| 🔐 | **Curated Output** | `{status['curated_skill_count']}` enhanced English derivatives in `{identity['curated_surface_path'].rstrip('/')}` |",
            f"| 🧪 | **Validation Mix** | `{status['validation_passed']}` passed · `{status['validation_warn']}` warn · `{status['validation_error']}` errors |",
            f"| 📋 | **Current Release** | `{status['latest_release']}` |",
        ]
    )


def render_readme_published_catalog_snapshot(identity: dict, status: dict) -> str:
    return "\n".join(
        [
            "| Metric | Current State |",
            "|:-------|:--------------|",
            f"| 🧠 Native intake skills | **{status['native_skill_count']}** |",
            f"| 📂 Active categories | **{status['active_category_count']}** |",
            f"| 📦 Fully backed bundles | **{status['bundle_count']}** |",
            f"| ✨ Curated derivatives | **{status['curated_skill_count']}** in `{identity['curated_surface_path'].rstrip('/')}` |",
            f"| 🧪 Validation | **{status['validation_passed']} passed / {status['validation_warn']} warn / {status['validation_error']} errors** |",
            f"| 📋 Release | **{status['latest_release']}** |",
        ]
    )


def render_docs_status_snapshot(identity: dict, status: dict) -> str:
    return "\n".join(
        [
            "| Area | State | Details |",
            "|:-----|:------|:--------|",
            "| 🏗️ **Runtime** | ✅ Current | Unified CLI, Ink visual shell, API, MCP, and A2A all ship from the same package |",
            f"| 📦 **Catalog** | 📌 {status['native_skill_count']} skills | {status['native_skill_count']} native catalog skills across {status['active_category_count']} active categories, with {status['curated_skill_count']} curated English derivatives in `{identity['curated_surface_path'].rstrip('/')}` and {status['bundle_count']} fully backed bundles |",
            "| 🎯 **Install** | ✅ Current | Guided TTY install, selective `--skill` and `--bundle`, custom path support, and discovery-driven install |",
            "| 🌐 **API** | ✅ Current | Read-only registry API with auth, admin runtime, rate limiting, CORS/IP allowlists, maintenance mode, and downloads |",
            f"| 🔌 **MCP** | ✅ Current | `stdio` · `stream` · `sse`, local sidecar mode, {status['install_client_count']} install-capable clients, {status['mcp_client_count']} config-capable clients, {status['mcp_config_target_count']} config targets, and {status['mcp_config_profile_count']} config profiles |",
            "| 🤖 **A2A** | ✅ Current | Simple-first local runtime with JSON/SQLite durability, restart resume, SSE streaming, cancelation, external executor mode, and optional leased coordination when explicitly enabled |",
            "| 🛡️ **Security** | ✅ Current | Static scanner, optional ClamAV/VirusTotal, signed release artifacts, archive checksums, and release-time verification |",
            "| 📋 **Classification** | ✅ Current | Canonical taxonomy, maturity, semantic quality spread, best-practices spread, and security scoring |",
            "| 📁 **Archives** | ✅ Current | Per-skill `.zip` and `.tar.gz` archives with SHA-256 checksum manifests |",
            "| 🔐 **Signing** | ✅ Current | Detached signatures enforced on release tags; local install flows consume the same manifest and checksum metadata |",
            "| 🧬 **Intake Flow** | ✅ Current | Native skills land under `skills/` through direct contributor PRs and reviewed repository-based external-import PRs; PR automation reviews them and proposes Omni-enhanced derivatives under `skills_omni/` |",
        ]
    )


def render_docs_current_project_state(identity: dict, status: dict) -> str:
    return "\n".join(
        [
            f"- public `{status['latest_release']}` and private `{status['paired_private_release_floor']}` are the current stable release floor",
            f"- the catalog now covers {status['native_skill_count']} native skills across {status['active_category_count']} active categories, with {status['validation_passed']} passing validation cleanly and {status['validation_warn']} currently in warning-grade native intake",
            f"- curated `skills_omni/` output remains a maintained English-only surface with {status['curated_skill_count']} automation-managed derivatives",
            "- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap",
            "- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs",
        ]
    )


def render_contributing_repository_baseline(status: dict) -> str:
    return "\n".join(
        [
            "| Metric | Value |",
            "|:-------|:------|",
            f"| 📦 Package version | `{status['package_version']}` |",
            f"| 🧠 Published skills | `{status['native_skill_count']}` |",
            f"| ✨ Curated derivatives | `{status['curated_skill_count']}` |",
            f"| 📦 Fully backed bundles | `{status['bundle_count']}` |",
            f"| 🖥️ Install-capable clients | `{status['install_client_count']}` |",
            f"| 🔌 MCP config-capable clients | `{status['mcp_client_count']}` across `{status['mcp_config_target_count']}` targets |",
            "| 🔄 Automatic releases | Enabled on `main` |",
        ]
    )


def render_getting_started_catalog_status(status: dict) -> str:
    return "\n".join(
        [
            "| Metric | Value |",
            "|:-------|:------|",
            f"| Native catalog | **{status['native_skill_count']}** skills across {status['active_category_count']} active categories, including architecture, design, security, DevOps, AI-engineering, and imported native intake |",
            f"| Curated output | **{status['curated_skill_count']}** enhanced English derivatives in `skills_omni/` |",
            f"| Defined bundles | **{status['bundle_count']}** (all fully backed by published catalog skills) |",
            f"| Install-capable clients | **{status['install_client_count']}** (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) |",
            f"| MCP config-capable clients | **{status['mcp_client_count']}** across {status['mcp_config_target_count']} first-class MCP config targets |",
        ]
    )


def render_usage_catalog_reality(status: dict) -> str:
    return "\n".join(
        [
            "| Status | Details |",
            "|:-------|:--------|",
            f"| ✅ **Available now** | {status['native_skill_count']} native catalog skills across design, architecture, debugging, docs, OSS, security, DevOps, AI-engineering, data, tools, and machine-learning workflows |",
            f"| ✨ **Curated surface** | {status['curated_skill_count']} English-only Omni-maintained derivatives in `skills_omni/` |",
            "| 📦 **Bundles** | `essentials`, `full-stack`, `design`, `security`, `devops`, `ai-engineer`, and `oss-maintainer` are fully backed today |",
            f"| 🧪 **Validation mix** | {status['validation_passed']} native skills pass cleanly today, and {status['validation_warn']} remain intentionally warning-grade in the permissive intake surface |",
            f"| 🔌 **MCP reach** | {status['install_client_count']} install-capable clients, {status['mcp_client_count']} config-capable clients, {status['mcp_config_target_count']} first-class config targets, {status['mcp_config_profile_count']} config profiles |",
            "| 🤖 **A2A durability** | Memory, JSON, or SQLite local durability, restart resume, optional process executor, and opt-in leased coordination for shared workers |",
        ]
    )


def render_quality_bar_benchmark(status: dict) -> str:
    return "\n".join(
        [
            f"- {status['native_skill_count']} published native skills, plus {status['curated_skill_count']} curated English derivatives in `skills_omni/`",
            f"- average quality score `{status['average_quality_score']:.1f}`",
            f"- average best-practices score `{status['average_best_practices_score']:.1f}`",
            f"- average security score `{status['average_security_score']:.1f}`",
            f"- validation mix `{status['validation_passed']}` passed, `{status['validation_warn']}` warn, `{status['validation_error']}` failed",
        ]
    )


def render_high_score_benchmark(status: dict) -> str:
    return "\n".join(
        [
            f"- {status['native_skill_count']} published native skills, with {status['curated_skill_count']} curated English derivatives in `skills_omni/`",
            f"- native quality spread: `{status['quality_score_range']['min']}` to `{status['quality_score_range']['max']}`",
            f"- native best-practices spread: `{status['best_practices_score_range']['min']}` to `{status['best_practices_score_range']['max']}`",
            "- current top end: `omni-figma` at `100/100` quality and `100/100` best practices",
        ]
    )


def render_skill_classification_snapshot(status: dict) -> str:
    return "\n".join(
        [
            f"- {status['native_skill_count']} published native skills, with {status['curated_skill_count']} curated English derivatives maintained separately in `skills_omni/`",
            f"- average quality score `{status['average_quality_score']:.1f}`",
            f"- average best-practices score `{status['average_best_practices_score']:.1f}`",
            f"- average security score `{status['average_security_score']:.1f}`",
            f"- validation mix `{status['validation_passed']}` passed, `{status['validation_warn']}` warn, `{status['validation_error']}` failed",
            f"- current quality spread `{status['quality_score_range']['min']}` to `{status['quality_score_range']['max']}`",
            f"- current best-practices spread `{status['best_practices_score_range']['min']}` to `{status['best_practices_score_range']['max']}`",
        ]
    )


def render_codebase_project_overview(status: dict) -> str:
    return "\n".join(
        [
            "| Attribute | Value |",
            "|:----------|:------|",
            "| **Name** | `awesome-omni-skills` |",
            f"| **Package version** | `{status['package_version']}` |",
            f"| **Skill versions** | Per-skill and independent from the package version. Many skills still ship `0.0.1` metadata while the package is `{status['package_version']}`. |",
            "| **License** | MIT (code) + CC BY 4.0 (content) |",
            "| **NPM** | `npx awesome-omni-skills` |",
            f"| **Published skills** | {status['native_skill_count']} native skills in `skills/` plus {status['curated_skill_count']} curated derivatives in `skills_omni/` |",
            f"| **Defined bundles** | {status['bundle_count']}, all fully backed by published skills |",
            f"| **Active catalog categories** | {status['active_category_count']} active buckets out of 18 canonical taxonomy categories |",
            "| **Primary runtime/build LOC sampled below** | 13,600+ |",
            f"| **Production dependencies** | {status['production_dependency_count']} (`@modelcontextprotocol/sdk`, `cors`, `express`, `ioredis`, `ink`, `react`, `yaml`, `zod`) |",
        ]
    )


def render_codebase_classification_snapshot(status: dict) -> str:
    return "\n".join(
        [
            f"- average quality score: `{status['average_quality_score']:.1f}`",
            f"- average best-practices score: `{status['average_best_practices_score']:.1f}`",
            f"- average security score: `{status['average_security_score']:.1f}`",
            f"- maturity mix: `{status['skill_level_counts'].get('l3', 0)}` `L3` skills and `{status['skill_level_counts'].get('l2', 0)}` `L2` skills",
            f"- validation mix: `{status['validation_passed']}` passed, `{status['validation_warn']}` warn, `{status['validation_error']}` failed",
        ]
    )


def render_codebase_release_baseline(status: dict) -> str:
    return "\n".join(
        [
            f"- public repository release: `{status['latest_release']}`",
            f"- private enhancer release: `{status['paired_private_release_floor']}`",
            "- public release automation and private release automation are both active and green",
        ]
    )


def build_block_map(identity: dict, status: dict) -> dict[Path, dict[str, str]]:
    return {
        Path("README.md"): {
            "project-meta": render_project_meta(identity, status),
            "readme-project-at-a-glance": render_readme_project_at_a_glance(identity, status),
            "readme-published-catalog-snapshot": render_readme_published_catalog_snapshot(identity, status),
        },
        Path("docs/README.md"): {
            "project-meta": render_project_meta(identity, status),
            "docs-readme-status-snapshot": render_docs_status_snapshot(identity, status),
            "docs-readme-current-project-state": render_docs_current_project_state(identity, status),
        },
        Path("CONTRIBUTING.md"): {
            "contributing-repository-baseline": render_contributing_repository_baseline(status),
        },
        Path("docs/users/GETTING-STARTED.md"): {
            "getting-started-catalog-status": render_getting_started_catalog_status(status),
        },
        Path("docs/users/USAGE.md"): {
            "usage-catalog-reality": render_usage_catalog_reality(status),
        },
        Path("docs/contributors/QUALITY-BAR.md"): {
            "quality-bar-benchmark": render_quality_bar_benchmark(status),
        },
        Path("docs/contributors/HIGH-SCORE-PLAYBOOK.md"): {
            "high-score-benchmark": render_high_score_benchmark(status),
        },
        Path("docs/specs/SKILL-CLASSIFICATION.md"): {
            "skill-classification-snapshot": render_skill_classification_snapshot(status),
        },
        Path("docs/architecture/CODEBASE-ANALYSIS.md"): {
            "codebase-analysis-project-overview": render_codebase_project_overview(status),
            "codebase-analysis-classification-snapshot": render_codebase_classification_snapshot(status),
            "codebase-analysis-release-baseline": render_codebase_release_baseline(status),
        },
    }


def render_project_docs(repo_root: Path, check: bool = False) -> list[str]:
    identity = load_json(repo_root / "data" / "project_identity.json")
    status = load_json(repo_root / "data" / "project_status.json")
    block_map = build_block_map(identity, status)
    changed_files: list[str] = []

    for relative_path, blocks in block_map.items():
        path = repo_root / relative_path
        original = path.read_text(encoding="utf-8")
        updated = original
        for block_id, rendered in blocks.items():
            updated = replace_generated_block(updated, block_id, rendered)
        if updated != original:
            changed_files.append(str(relative_path))
            if not check:
                path.write_text(updated, encoding="utf-8")

    if check and changed_files:
        raise ValueError(
            "Generated project docs are stale: " + ", ".join(changed_files)
        )

    return changed_files


def main() -> int:
    parser = argparse.ArgumentParser(description="Render bounded generated blocks in project docs.")
    parser.add_argument("--repo-root", default=str(REPO_ROOT), help="Repository root")
    parser.add_argument("--check", action="store_true", help="Fail if any rendered block is stale")
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    changed_files = render_project_docs(repo_root, check=args.check)
    if args.check:
        print(json.dumps({"checked": True, "stale_files": changed_files}))
    else:
        print(json.dumps({"written": changed_files}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
