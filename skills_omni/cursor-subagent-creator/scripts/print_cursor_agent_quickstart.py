#!/usr/bin/env python3
"""Print a concise quickstart for creating Cursor custom agents."""

QUICKSTART = """Cursor Custom Agent Quickstart
==============================

1) Choose the correct location
   - Project scope: .cursor/agents/<name>.md
   - User scope:    ~/.cursor/agents/<name>.md

2) Start with one responsibility
   - Good: verify completed work
   - Bad: help with all engineering tasks

3) Prefer safe defaults
   - model: inherit
   - readonly: true for review/audit/verification agents
   - is_background: false unless async completion is clearly acceptable

4) Write a high-signal description
   - Explain when the agent should be used
   - Avoid vague text like 'general coding helper'

5) Structure the prompt
   - Role
   - Use when
   - Inputs expected
   - Steps
   - Constraints
   - Output format
   - Done criteria

6) Validate before handoff
   - one positive delegation test prompt
   - one negative delegation test prompt
   - verify permissions match the role
   - verify output format is reviewable

Local support files
-------------------
- references/cursor-agent-decision-tree.md
- references/cursor-agent-frontmatter-guide.md
- references/cursor-agent-validation-checklist.md
- references/cursor-agent-troubleshooting.md
- examples/cursor-agent-template.md
"""

if __name__ == "__main__":
    print(QUICKSTART)
