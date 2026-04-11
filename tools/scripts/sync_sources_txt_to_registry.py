#!/usr/bin/env python3
"""
sync_sources_txt_to_registry.py — Sync SOURCES.txt → REPOSITORY-SOURCES.md

Reads the simple SOURCES.txt file (one URL per line) and generates the
machine-readable registry table inside REPOSITORY-SOURCES.md.

The SOURCES.txt file is the contributor-friendly entry point.
REPOSITORY-SOURCES.md remains the canonical registry with full metadata.

Usage:
    python3 tools/scripts/sync_sources_txt_to_registry.py
    python3 tools/scripts/sync_sources_txt_to_registry.py --dry-run
    python3 tools/scripts/sync_sources_txt_to_registry.py --sources-txt SOURCES.txt --registry REPOSITORY-SOURCES.md
"""

import argparse
import re
import sys
from pathlib import Path


# ── Defaults ────────────────────────────────────────────────────────

DEFAULT_SOURCES_TXT = "SOURCES.txt"
DEFAULT_REGISTRY_MD = "REPOSITORY-SOURCES.md"

REGISTRY_START = "<!-- registry:repositories:start -->"
REGISTRY_END = "<!-- registry:repositories:end -->"
STATUS_START = "<!-- registry:status:start -->"
STATUS_END = "<!-- registry:status:end -->"


# ── Parsing ─────────────────────────────────────────────────────────

def parse_sources_txt(path: Path) -> list[dict]:
    """Parse SOURCES.txt into a list of source entries."""
    entries = []
    if not path.exists():
        print(f"⚠️  SOURCES.txt not found at {path}")
        return entries

    for line_no, raw in enumerate(path.read_text().splitlines(), start=1):
        line = raw.strip()

        # Skip comments and empty lines
        if not line or line.startswith("#"):
            continue

        # Parse URL and optional notes
        parts = line.split("|", maxsplit=1)
        url = parts[0].strip()
        notes = parts[1].strip() if len(parts) > 1 else ""

        # Basic URL validation
        if not url.startswith("https://"):
            print(f"⚠️  Line {line_no}: skipping non-HTTPS URL: {url}")
            continue

        # Derive slug from URL
        slug = derive_slug(url)
        owner = derive_owner(url)

        entries.append({
            "slug": slug,
            "repo_url": url,
            "branch": "auto",
            "skills_path": "auto",
            "status": "candidate",
            "owner": owner,
            "license": "review-required",
            "notes": notes,
        })

    return entries


def derive_slug(url: str) -> str:
    """Derive a registry slug from a GitHub URL.

    https://github.com/vercel-labs/agent-skills → vercel-labs-agent-skills
    https://github.com/openai/skills.git → openai-skills
    """
    clean = url.rstrip("/")
    if clean.endswith(".git"):
        clean = clean[:-4]
    parts = clean.split("/")
    if len(parts) >= 2:
        return f"{parts[-2]}-{parts[-1]}"
    return parts[-1]


def derive_owner(url: str) -> str:
    """Derive an owner label from a GitHub URL.

    https://github.com/vercel-labs/agent-skills → vercel-labs
    """
    clean = url.rstrip("/")
    if clean.endswith(".git"):
        clean = clean[:-4]
    parts = clean.split("/")
    if len(parts) >= 2:
        return parts[-2]
    return "unknown"


# ── Registry Merge ──────────────────────────────────────────────────

def parse_existing_registry(md_path: Path) -> list[dict]:
    """Parse existing rows from REPOSITORY-SOURCES.md registry block."""
    if not md_path.exists():
        return []

    text = md_path.read_text()
    match = re.search(
        rf"{re.escape(REGISTRY_START)}\n(.*?)\n{re.escape(REGISTRY_END)}",
        text,
        re.DOTALL,
    )
    if not match:
        return []

    block = match.group(1).strip()
    lines = block.splitlines()

    # Skip header row and separator row
    data_lines = [l for l in lines if l.strip() and not l.strip().startswith("| ----") and not l.strip().startswith("| slug")]

    entries = []
    for line in data_lines:
        cols = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cols) >= 8:
            entries.append({
                "slug": cols[0].strip(),
                "repo_url": cols[1].strip(),
                "branch": cols[2].strip(),
                "skills_path": cols[3].strip(),
                "status": cols[4].strip(),
                "owner": cols[5].strip(),
                "license": cols[6].strip(),
                "notes": cols[7].strip(),
            })

    return entries


def merge_sources(txt_entries: list[dict], existing_entries: list[dict]) -> list[dict]:
    """Merge SOURCES.txt entries with existing registry entries.

    - Existing entries with matching slug are preserved (keep their metadata)
    - New entries from SOURCES.txt are added as candidates
    - Entries only in the registry (not in SOURCES.txt) are kept unchanged
    """
    existing_by_slug = {e["slug"]: e for e in existing_entries}
    txt_by_slug = {e["slug"]: e for e in txt_entries}

    merged = []

    # Process txt entries first (maintain txt order)
    for entry in txt_entries:
        slug = entry["slug"]
        if slug in existing_by_slug:
            # Existing entry: keep its metadata but update notes if txt has new ones
            existing = existing_by_slug[slug].copy()
            if entry["notes"] and not existing["notes"]:
                existing["notes"] = entry["notes"]
            merged.append(existing)
        else:
            # New entry from SOURCES.txt
            merged.append(entry)

    # Add entries only in registry (not in txt) at the end
    for entry in existing_entries:
        if entry["slug"] not in txt_by_slug:
            merged.append(entry)

    return merged


# ── Rendering ───────────────────────────────────────────────────────

def render_registry_table(entries: list[dict]) -> str:
    """Render entries as a markdown registry table."""
    lines = [
        "| slug | repo_url | branch | skills_path | status | owner | license | notes |",
        "| ---- | -------- | ------ | ----------- | ------ | ----- | ------- | ----- |",
    ]
    for e in entries:
        lines.append(
            f"| {e['slug']} | {e['repo_url']} | {e['branch']} | {e['skills_path']} "
            f"| {e['status']} | {e['owner']} | {e['license']} | {e['notes']} |"
        )
    return "\n".join(lines)


def render_status_table(entries: list[dict]) -> str:
    """Render the registry status summary table."""
    total = len(entries)
    tracked = sum(1 for e in entries if e["status"] == "tracked")
    candidate = sum(1 for e in entries if e["status"] == "candidate")
    disabled = sum(1 for e in entries if e["status"] == "disabled")
    auto_branch = sum(1 for e in entries if e["branch"] == "auto" or not e["branch"])
    explicit_branch = total - auto_branch
    auto_path = sum(1 for e in entries if e["skills_path"] == "auto" or not e["skills_path"])
    default_path = sum(1 for e in entries if e["skills_path"] == "skills")
    custom_path = total - auto_path - default_path

    lines = [
        "| Metric | Value |",
        "|:-------|:------|",
        f"| 📦 Registry rows | `{total}` |",
        f"| ✅ Tracked upstream repositories | `{tracked}` |",
        f"| 🧪 Candidate upstream repositories | `{candidate}` |",
        f"| ⏸️ Disabled rows | `{disabled}` |",
        f"| 🌿 Auto branch rows | `{auto_branch}` |",
        f"| 🌿 Explicit branch rows | `{explicit_branch}` |",
        f"| 🔎 Auto-detect skills path rows | `{auto_path}` |",
        f"| 📁 Default `skills/` path rows | `{default_path}` |",
        f"| 🧭 Custom skills path rows | `{custom_path}` |",
        "| 🔒 Operator gate | Merge here does not auto-sync. The private dashboard still imports and enables rows explicitly. |",
        "| 🧪 Local validation | `npm run registry:lint` and `npm run registry:check` |",
    ]
    return "\n".join(lines)


def update_registry_md(md_path: Path, entries: list[dict], dry_run: bool = False) -> None:
    """Update REPOSITORY-SOURCES.md with merged entries."""
    if not md_path.exists():
        print(f"⚠️  Registry file not found at {md_path}")
        return

    text = md_path.read_text()

    # Replace registry table
    registry_table = render_registry_table(entries)
    text = re.sub(
        rf"({re.escape(REGISTRY_START)}\n).*?(\n{re.escape(REGISTRY_END)})",
        rf"\g<1>{registry_table}\g<2>",
        text,
        flags=re.DOTALL,
    )

    # Replace status table
    status_table = render_status_table(entries)
    text = re.sub(
        rf"({re.escape(STATUS_START)}\n).*?(\n{re.escape(STATUS_END)})",
        rf"\g<1>{status_table}\g<2>",
        text,
        flags=re.DOTALL,
    )

    if dry_run:
        print("📋 Dry run — would write to", md_path)
        print(text)
    else:
        md_path.write_text(text)
        print(f"✅ Updated {md_path}")


# ── CLI ─────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Sync SOURCES.txt → REPOSITORY-SOURCES.md"
    )
    parser.add_argument(
        "--sources-txt",
        default=DEFAULT_SOURCES_TXT,
        help=f"Path to SOURCES.txt (default: {DEFAULT_SOURCES_TXT})",
    )
    parser.add_argument(
        "--registry",
        default=DEFAULT_REGISTRY_MD,
        help=f"Path to REPOSITORY-SOURCES.md (default: {DEFAULT_REGISTRY_MD})",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the result without writing",
    )
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parents[2]
    sources_path = repo_root / args.sources_txt
    registry_path = repo_root / args.registry

    print(f"📖 Reading {sources_path}")
    txt_entries = parse_sources_txt(sources_path)
    print(f"   Found {len(txt_entries)} entries in SOURCES.txt")

    print(f"📖 Reading {registry_path}")
    existing_entries = parse_existing_registry(registry_path)
    print(f"   Found {len(existing_entries)} existing rows in registry")

    merged = merge_sources(txt_entries, existing_entries)
    print(f"📊 Merged result: {len(merged)} total rows")

    new_count = len(merged) - len(existing_entries)
    if new_count > 0:
        print(f"   🆕 {new_count} new entries from SOURCES.txt")

    update_registry_md(registry_path, merged, dry_run=args.dry_run)

    # Summary
    print()
    print("📊 Registry summary:")
    for e in merged:
        status_icon = {"tracked": "✅", "candidate": "🧪", "disabled": "⏸️"}.get(e["status"], "❓")
        print(f"   {status_icon} {e['slug']} → {e['status']}")


if __name__ == "__main__":
    main()
