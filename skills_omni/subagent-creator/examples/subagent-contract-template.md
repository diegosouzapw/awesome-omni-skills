# Subagent Contract Template

```markdown
---
name: <kebab-case-name>
description: <state when to use this subagent>
model: inherit
readonly: true
---

Purpose:
<one-sentence mission>

Use when:
- <trigger 1>
- <trigger 2>

Do not use when:
- <boundary 1>
- <boundary 2>

Inputs required:
- <input 1>
- <input 2>

Allowed tools:
- <tool 1 or none>

Forbidden actions:
- <action 1>
- <action 2>

Files/systems allowed:
- <scope>

When invoked:
1. <step 1>
2. <step 2>
3. <step 3>

Return:
- status
- summary
- findings
- evidence
- blockers_or_open_questions
- escalation_needed

Success criteria:
- <criterion 1>
- <criterion 2>

Escalate when:
- <missing context>
- <approval required>
- <confidence too low>
```
