# ✅ Quality Bar

Minimum requirements for a skill to be accepted into the Omni Skills repository.

---

## Required

1. **Valid frontmatter** — passes `python3 tools/scripts/validate_skills.py`
2. **Clear description** — the one-liner must explain what the skill does (10+ chars)
3. **Name matches directory** — `name:` field matches the folder name exactly
4. **Overview section** — a brief explanation of purpose
5. **When to Use section** — at least 2 usage scenarios
6. **Actionable instructions** — step-by-step content an AI agent can execute

## Recommended

7. **Examples** — at least one concrete example with expected output
8. **Best practices** — do/don't guidance
9. **Tested with a tool** — verified with at least one AI coding assistant
10. **Tags** — relevant searchable tags
11. **Category** — assigned to one of the 9 categories

## Reasons for Rejection

- ❌ Missing or invalid frontmatter
- ❌ Name doesn't match directory
- ❌ Empty or trivially short description
- ❌ No actionable content (just links or stubs)
- ❌ Duplicate of an existing skill without clear improvement
- ❌ Offensive content without proper `risk: offensive` tagging and authorization warnings
