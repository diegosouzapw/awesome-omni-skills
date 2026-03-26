#!/usr/bin/env python3
"""
Generate skills_index.json from all SKILL.md frontmatter.

Scans skills/ directory and builds a JSON index with:
- All frontmatter fields
- File path
- Content length
- List of sub-resources (references/, agents/, assets/)
"""

import json
import os
import re
import sys


def find_skills_dir():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(os.path.dirname(script_dir))
    return os.path.join(repo_root, "skills"), repo_root


def parse_frontmatter(content):
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not match:
        return {}

    fm = {}
    for line in match.group(1).strip().split('\n'):
        line = line.strip()
        if ':' in line:
            key, _, value = line.partition(':')
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if value.startswith('[') and value.endswith(']'):
                value = [v.strip().strip('"').strip("'") for v in value[1:-1].split(',') if v.strip()]
            fm[key] = value
    return fm


def get_sub_resources(skill_path):
    """List sub-directories in a skill (references, agents, assets, etc.)."""
    resources = []
    for entry in sorted(os.listdir(skill_path)):
        full = os.path.join(skill_path, entry)
        if os.path.isdir(full) and not entry.startswith('.'):
            resources.append(entry)
    return resources


def main():
    skills_dir, repo_root = find_skills_dir()
    output_path = os.path.join(repo_root, "skills_index.json")

    if not os.path.isdir(skills_dir):
        print(f"✗ Skills directory not found: {skills_dir}")
        sys.exit(1)

    index = {
        "version": "1.0.0",
        "generated_at": None,
        "total_skills": 0,
        "categories": {},
        "skills": [],
    }

    from datetime import datetime, timezone
    index["generated_at"] = datetime.now(timezone.utc).isoformat()

    category_counts = {}

    for entry in sorted(os.listdir(skills_dir)):
        skill_path = os.path.join(skills_dir, entry)
        if not os.path.isdir(skill_path) or entry.startswith('.'):
            continue

        skill_md = os.path.join(skill_path, "SKILL.md")
        if not os.path.isfile(skill_md):
            continue

        with open(skill_md, 'r', encoding='utf-8') as f:
            content = f.read()

        fm = parse_frontmatter(content)
        if not fm:
            continue

        sub_resources = get_sub_resources(skill_path)

        skill_entry = {
            "name": fm.get("name", entry),
            "description": fm.get("description", ""),
            "version": fm.get("version", ""),
            "category": fm.get("category", "uncategorized"),
            "tags": fm.get("tags", []),
            "complexity": fm.get("complexity", ""),
            "risk": fm.get("risk", "unknown"),
            "tools": fm.get("tools", []),
            "source": fm.get("source", ""),
            "author": fm.get("author", ""),
            "date_added": fm.get("date_added", ""),
            "date_updated": fm.get("date_updated", ""),
            "path": f"skills/{entry}",
            "content_length": len(content),
            "sub_resources": sub_resources,
        }

        index["skills"].append(skill_entry)

        cat = skill_entry["category"]
        category_counts[cat] = category_counts.get(cat, 0) + 1

    index["total_skills"] = len(index["skills"])
    index["categories"] = dict(sorted(category_counts.items()))

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=2, ensure_ascii=False)

    print(f"✅ Generated {output_path}")
    print(f"   Total skills: {index['total_skills']}")
    print(f"   Categories: {', '.join(f'{k}({v})' for k, v in sorted(category_counts.items()))}")


if __name__ == "__main__":
    main()
