---
name: semgrep-rule-creator-v2
description: "Semgrep Rule Creator workflow skill. Use this skill when the user needs Creates custom Semgrep rules for detecting security vulnerabilities, bug patterns, and code patterns. Use when writing Semgrep rules or building custom static analysis detections and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["semgrep-rule-creator-v2", "semgrep-rule-creator", "creates", "custom", "semgrep", "rules", "for", "detecting"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Semgrep Rule Creator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/semgrep-rule-creator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Semgrep Rule Creator Create production-quality Semgrep rules with proper testing and validation.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Rationalizations to Reject, Anti-Patterns, Strictness Level, Documentation, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Writing Semgrep rules for specific bug patterns
- Writing rules to detect security vulnerabilities in your codebase
- Writing taint mode rules for data flow vulnerabilities
- Writing rules to enforce coding standards
- Running existing Semgrep rulesets
- General static analysis without custom rules (use static-analysis skill)

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. [ ] Step 1: Analyze the Problem
2. [ ] Step 2: Write Tests First
3. [ ] Step 3: Analyze AST structure
4. [ ] Step 4: Write the rule
5. [ ] Step 5: Iterate until all tests pass (semgrep --test)
6. [ ] Step 6: Optimize the rule (remove redundancies, re-test)
7. [ ] Step 7: Final Run

### Imported Workflow Notes

#### Imported: Workflow

Copy this checklist and track progress:

```
Semgrep Rule Progress:
- [ ] Step 1: Analyze the Problem
- [ ] Step 2: Write Tests First
- [ ] Step 3: Analyze AST structure
- [ ] Step 4: Write the rule
- [ ] Step 5: Iterate until all tests pass (semgrep --test)
- [ ] Step 6: Optimize the rule (remove redundancies, re-test)
- [ ] Step 7: Final Run
```

#### Imported: Overview

This skill guides creation of Semgrep rules that detect security vulnerabilities and code patterns. Rules are created iteratively: analyze the problem, write tests first, analyze AST structure, write the rule, iterate until all tests pass, optimize the rule.

**Approach selection:**
- **Taint mode** (prioritize): Data flow issues where untrusted input reaches dangerous sinks
- **Pattern matching**: Simple syntactic patterns without data flow requirements

**Why prioritize taint mode?** Pattern matching finds syntax but misses context. A pattern `eval($X)` matches both `eval(user_input)` (vulnerable) and `eval("safe_literal")` (safe). Taint mode tracks data flow, so it only alerts when untrusted data actually reaches the sink—dramatically reducing false positives for injection vulnerabilities.

**Iterating between approaches:** It's okay to experiment. If you start with taint mode and it's not working well (e.g., taint doesn't propagate as expected, too many false positives/negatives), switch to pattern matching. Conversely, if pattern matching produces too many false positives on safe cases, try taint mode instead. The goal is a working rule—not rigid adherence to one approach.

**Output structure** - exactly 2 files in a directory named after the rule-id:
```
<rule-id>/
├── <rule-id>.yaml     # Semgrep rule
└── <rule-id>.<ext>    # Test file with ruleid/ok annotations
```

#### Imported: Rationalizations to Reject

When writing Semgrep rules, reject these common shortcuts:

- **"The pattern looks complete"** → Still run `semgrep --test --config <rule-id>.yaml <rule-id>.<ext>` to verify. Untested rules have hidden false positives/negatives.
- **"It matches the vulnerable case"** → Matching vulnerabilities is half the job. Verify safe cases don't match (false positives break trust).
- **"Taint mode is overkill for this"** → If data flows from user input to a dangerous sink, taint mode gives better precision than pattern matching.
- **"One test is enough"** → Include edge cases: different coding styles, sanitized inputs, safe alternatives, and boundary conditions.
- **"I'll optimize the patterns first"** → Write correct patterns first, optimize after all tests pass. Premature optimization causes regressions.
- **"The AST dump is too complex"** → The AST reveals exactly how Semgrep sees code. Skipping it leads to patterns that miss syntactic variations.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @semgrep-rule-creator-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/semgrep-rule-creator-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/semgrep-rule-creator-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @semgrep-rule-creator-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```yaml
rules:
  - id: insecure-eval
    languages: [python]
    severity: HIGH
    message: User input passed to eval() allows code execution
    mode: taint
    pattern-sources:
      - pattern: request.args.get(...)
    pattern-sinks:
      - pattern: eval(...)
```

Test file (`insecure-eval.py`):
```python
# ruleid: insecure-eval
eval(request.args.get('code'))

# ok: insecure-eval
eval("print('safe')")
```

Run tests (from rule directory): `semgrep --test --config <rule-id>.yaml <rule-id>.<ext>`

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/semgrep-rule-creator`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Quick Reference

- For commands, pattern operators, and taint mode syntax, see quick-reference.md.
- For detailed workflow and examples, you MUST see workflow.md

#### Imported: Anti-Patterns

**Too broad** - matches everything, useless for detection:
```yaml
# BAD: Matches any function call
pattern: $FUNC(...)

# GOOD: Specific dangerous function
pattern: eval(...)
```

**Missing safe cases in tests** - leads to undetected false positives:
```python
# BAD: Only tests vulnerable case
# ruleid: my-rule
dangerous(user_input)

# GOOD: Include safe cases to verify no false positives
# ruleid: my-rule
dangerous(user_input)

# ok: my-rule
dangerous(sanitize(user_input))

# ok: my-rule
dangerous("hardcoded_safe_value")
```

**Overly specific patterns** - misses variations:
```yaml
# BAD: Only matches exact format
pattern: os.system("rm " + $VAR)

# GOOD: Matches all os.system calls with taint tracking
mode: taint
pattern-sinks:
  - pattern: os.system(...)
```

#### Imported: Strictness Level

This workflow is **strict** - do not skip steps:
- **Read documentation first**: See [Documentation](#documentation) before writing Semgrep rules
- **Test-first is mandatory**: Never write a rule without tests
- **100% test pass is required**: "Most tests pass" is not acceptable
- **Optimization comes last**: Only simplify patterns after all tests pass
- **Avoid generic patterns**: Rules must be specific, not match broad patterns
- **Prioritize taint mode**: For data flow vulnerabilities
- **One YAML file - one Semgrep rule**: Each YAML file must contain only one Semgrep rule; don't combine multiple rules in a single file
- **No generic rules**: When targeting a specific language for Semgrep rules - avoid generic pattern matching (`languages: generic`)
- **Forbidden `todook` and `todoruleid` test annotations**: `todoruleid: <rule-id>` and `todook: <rule-id>` annotations in tests files for future rule improvements are forbidden

#### Imported: Documentation

**REQUIRED**: Before writing any rule, use WebFetch to read **all** of these 4 links with Semgrep documentation:

1. [Rule Syntax](https://semgrep.dev/docs/writing-rules/rule-syntax)
2. [Pattern Syntax](https://semgrep.dev/docs/writing-rules/pattern-syntax)
3. [ToB Testing Handbook - Semgrep](https://appsec.guide/docs/static-analysis/semgrep/advanced/)
4. [Constant propagation](https://semgrep.dev/docs/writing-rules/data-flow/constant-propagation)
5. [Writing Rules Index](https://github.com/semgrep/semgrep-docs/tree/main/docs/writing-rules/)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
