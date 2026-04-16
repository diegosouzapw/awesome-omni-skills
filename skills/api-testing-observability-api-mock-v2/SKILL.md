---
name: api-testing-observability-api-mock-v2
description: "API Mocking Framework workflow skill. Use this skill when the user needs You are an API mocking expert specializing in realistic mock services for development, testing, and demos. Design mocks that simulate real API behavior and enable parallel development and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["api-testing-observability-api-mock-v2", "api-testing-observability-api-mock", "you", "are", "api", "mocking", "expert", "specializing"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# API Mocking Framework

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/api-testing-observability-api-mock` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# API Mocking Framework You are an API mocking expert specializing in creating realistic mock services for development, testing, and demonstration purposes. Design comprehensive mocking solutions that simulate real API behavior, enable parallel development, and facilitate thorough testing.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety, Context, Requirements, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building mock APIs for frontend or integration testing
- Simulating partner or third-party APIs during development
- Creating demo environments with realistic responses
- Validating API contracts before backend completion
- You need to test production systems or live integrations
- The task is security testing or penetration testing

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `resources/implementation-playbook.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `resources/implementation-playbook.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify the API contract, auth flows, error shapes, and latency expectations.
2. Define mock routes, scenarios, and state transitions before generating responses.
3. Provide deterministic fixtures with optional randomness toggles.
4. Document how to run the mock server and how to switch scenarios.
5. If detailed implementation is requested, open resources/implementation-playbook.md.
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify the API contract, auth flows, error shapes, and latency expectations.
- Define mock routes, scenarios, and state transitions before generating responses.
- Provide deterministic fixtures with optional randomness toggles.
- Document how to run the mock server and how to switch scenarios.
- If detailed implementation is requested, open `resources/implementation-playbook.md`.

#### Imported: Safety

- Avoid reusing production secrets or real customer data in mocks.
- Make mock endpoints clearly labeled to prevent accidental use.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @api-testing-observability-api-mock-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @api-testing-observability-api-mock-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @api-testing-observability-api-mock-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @api-testing-observability-api-mock-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/api-testing-observability-api-mock`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@agent-orchestration-multi-agent-optimize-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-orchestrator-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-tool-builder-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agentfolio-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [implementation-playbook.md](resources/implementation-playbook.md)

### Imported Reference Notes

#### Imported: Resources

- `resources/implementation-playbook.md` for code samples, checklists, and templates.

#### Imported: Context

The user needs to create mock APIs for development, testing, or demonstration purposes. Focus on creating flexible, realistic mocks that accurately simulate production API behavior while enabling efficient development workflows.

#### Imported: Requirements

$ARGUMENTS

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
