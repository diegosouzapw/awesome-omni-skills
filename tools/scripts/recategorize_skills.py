#!/usr/bin/env python3
"""
Suggest or apply canonical category updates to SKILL.md frontmatter.
"""

from __future__ import annotations

import argparse
import os
import re
import sys

from skill_metadata import infer_category, normalize_category, parse_frontmatter, strip_frontmatter


def find_paths():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(os.path.dirname(script_dir))
    return os.path.join(repo_root, "skills"), repo_root


def rewrite_category(content: str, category: str) -> str:
    if content.startswith("\ufeff"):
        bom = "\ufeff"
        content = content[1:]
    else:
        bom = ""

    if not content.startswith("---"):
        return bom + content

    end_match = re.search(r"\n---\s*\n", content[3:])
    if not end_match:
        return bom + content

    end_index = 3 + end_match.start()
    after_index = end_index + len(end_match.group(0))
    yaml_block = content[3:end_index].strip("\n")
    lines = yaml_block.splitlines()
    category_line_index = None

    for index, line in enumerate(lines):
        if re.match(r"^\s*category\s*:", line):
            category_line_index = index
            break

    if category_line_index is None:
        insert_index = 0
        for index, line in enumerate(lines):
            if re.match(r"^\s*description\s*:", line):
                insert_index = index + 1
                break
        lines.insert(insert_index, f"category: {category}")
    else:
        lines[category_line_index] = f"category: {category}"

    rewritten_frontmatter = "---\n" + "\n".join(lines).rstrip() + "\n---\n"
    return bom + rewritten_frontmatter + content[after_index:]


def main():
    parser = argparse.ArgumentParser(description="Suggest or apply canonical category updates to SKILL.md files")
    parser.add_argument("--path", default=None, help="Skills directory path (default: auto-detect)")
    parser.add_argument("--write", action="store_true", help="Rewrite SKILL.md frontmatter with the suggested canonical category")
    parser.add_argument("--only-changed", action="store_true", help="Only print skills whose category would change")
    args = parser.parse_args()

    default_skills_dir, _repo_root = find_paths()
    skills_dir = args.path or default_skills_dir
    if not os.path.isdir(skills_dir):
        print(f"✗ Skills directory not found: {skills_dir}")
        sys.exit(1)

    updated = 0
    suggestions = 0

    for entry in sorted(os.listdir(skills_dir)):
        skill_path = os.path.join(skills_dir, entry)
        skill_md = os.path.join(skill_path, "SKILL.md")
        if not os.path.isdir(skill_path) or entry.startswith(".") or not os.path.isfile(skill_md):
            continue

        with open(skill_md, "r", encoding="utf-8") as handle:
            content = handle.read()

        frontmatter = parse_frontmatter(content)
        if not frontmatter:
            continue

        body = strip_frontmatter(content)
        raw_category = str(frontmatter.get("category") or "").strip()
        normalized = normalize_category(raw_category)
        suggested = infer_category(
            str(frontmatter.get("name") or entry).strip(),
            str(frontmatter.get("description") or "").strip(),
            body,
            raw_category,
        )

        if normalized == suggested and raw_category == suggested:
            if not args.only_changed:
                print(f"✓ {entry}: {suggested}")
            continue

        suggestions += 1
        print(
            f"⚠ {entry}: raw='{raw_category or '∅'}' | normalized='{normalized}' | suggested='{suggested}'"
        )

        if args.write:
            rewritten = rewrite_category(content, suggested)
            if rewritten != content:
                with open(skill_md, "w", encoding="utf-8") as handle:
                    handle.write(rewritten)
                updated += 1
                print(f"  ↳ updated SKILL.md category to '{suggested}'")

    print("")
    print(f"Suggestions: {suggestions}")
    if args.write:
        print(f"Updated: {updated}")


if __name__ == "__main__":
    main()
