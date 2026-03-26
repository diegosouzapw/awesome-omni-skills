#!/usr/bin/env python3
"""
omni-skills SKILL.md validator.

Checks every skill directory for:
- SKILL.md existence
- Valid YAML frontmatter with required fields
- name matches directory name
- category is in the allowed list
- risk is in the allowed list
- description is non-empty
"""

import sys
import os
import re
import argparse

REQUIRED_FIELDS = ["name", "description"]
STRICT_REQUIRED = ["name", "description", "version", "category", "risk", "source", "date_added"]

ALLOWED_CATEGORIES = [
    "architecture", "business", "data-ai", "development", "general",
    "infrastructure", "security", "testing", "workflow",
]

ALLOWED_RISKS = ["safe", "caution", "offensive", "critical", "unknown"]

ALLOWED_SOURCES = ["omni-team", "community", "official"]

ALLOWED_COMPLEXITIES = ["beginner", "intermediate", "advanced", "expert"]


def find_skills_dir():
    """Find the skills/ directory relative to the script."""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(os.path.dirname(script_dir))
    return os.path.join(repo_root, "skills")


def parse_frontmatter(content):
    """Parse YAML frontmatter from SKILL.md content."""
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not match:
        return None

    fm = {}
    for line in match.group(1).strip().split('\n'):
        line = line.strip()
        if ':' in line:
            key, _, value = line.partition(':')
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            # Handle arrays like [tag1, tag2]
            if value.startswith('[') and value.endswith(']'):
                value = [v.strip().strip('"').strip("'") for v in value[1:-1].split(',') if v.strip()]
            fm[key] = value
    return fm


def validate_skill(skill_dir, skill_name, strict=False):
    """Validate a single skill directory. Returns list of (level, message) tuples."""
    issues = []
    skill_md = os.path.join(skill_dir, "SKILL.md")

    if not os.path.isfile(skill_md):
        issues.append(("ERROR", "Missing SKILL.md"))
        return issues

    with open(skill_md, 'r', encoding='utf-8') as f:
        content = f.read()

    fm = parse_frontmatter(content)
    if fm is None:
        issues.append(("ERROR", "Missing or invalid YAML frontmatter (---...---)"))
        return issues

    # Check required fields
    required = STRICT_REQUIRED if strict else REQUIRED_FIELDS
    for field in required:
        if field not in fm or not fm[field]:
            issues.append(("ERROR" if field in REQUIRED_FIELDS else "WARN", f"Missing field: {field}"))

    # Name must match directory
    if "name" in fm and fm["name"] != skill_name:
        issues.append(("ERROR", f"name '{fm['name']}' does not match directory '{skill_name}'"))

    # Validate category
    if "category" in fm:
        if fm["category"] not in ALLOWED_CATEGORIES:
            issues.append(("WARN", f"category '{fm['category']}' not in allowed list: {ALLOWED_CATEGORIES}"))

    # Validate risk
    if "risk" in fm:
        if fm["risk"] not in ALLOWED_RISKS:
            issues.append(("WARN", f"risk '{fm['risk']}' not in allowed list: {ALLOWED_RISKS}"))

    # Validate source
    if "source" in fm:
        if fm["source"] not in ALLOWED_SOURCES:
            issues.append(("WARN", f"source '{fm['source']}' not in allowed list: {ALLOWED_SOURCES}"))

    # Validate complexity
    if "complexity" in fm:
        if fm["complexity"] not in ALLOWED_COMPLEXITIES:
            issues.append(("WARN", f"complexity '{fm['complexity']}' not in allowed list: {ALLOWED_COMPLEXITIES}"))

    # Description length
    if "description" in fm and len(fm["description"]) < 10:
        issues.append(("WARN", "description is very short (< 10 chars)"))

    return issues


def main():
    parser = argparse.ArgumentParser(description="Validate omni-skills SKILL.md files")
    parser.add_argument("--strict", action="store_true", help="Require all extended frontmatter fields")
    parser.add_argument("--path", default=None, help="Skills directory path (default: auto-detect)")
    args = parser.parse_args()

    skills_dir = args.path or find_skills_dir()

    if not os.path.isdir(skills_dir):
        print(f"✗ Skills directory not found: {skills_dir}")
        sys.exit(1)

    print(f"🔍 Validating skills in: {skills_dir}")
    print(f"   Mode: {'strict' if args.strict else 'standard'}\n")

    errors = 0
    warnings = 0
    passed = 0
    total = 0

    for entry in sorted(os.listdir(skills_dir)):
        skill_path = os.path.join(skills_dir, entry)
        if not os.path.isdir(skill_path):
            continue
        if entry.startswith('.'):
            continue

        total += 1
        issues = validate_skill(skill_path, entry, strict=args.strict)

        has_errors = any(level == "ERROR" for level, _ in issues)
        has_warnings = any(level == "WARN" for level, _ in issues)

        if has_errors:
            errors += 1
            print(f"  ✗ {entry}")
        elif has_warnings:
            warnings += 1
            print(f"  ⚠ {entry}")
        else:
            passed += 1
            print(f"  ✓ {entry}")

        for level, msg in issues:
            prefix = "    ✗" if level == "ERROR" else "    ⚠"
            print(f"{prefix} {msg}")

    print(f"\n{'━' * 50}")
    print(f"Results: {total} skills | ✓ {passed} passed | ⚠ {warnings} warnings | ✗ {errors} errors")

    if errors > 0:
        print("\n❌ Validation FAILED — fix errors above before committing.")
        sys.exit(1)
    else:
        print("\n✅ Validation PASSED")
        sys.exit(0)


if __name__ == "__main__":
    main()
