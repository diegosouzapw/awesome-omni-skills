---
name: variant-analysis-v2
description: "Variant Analysis workflow skill. Use this skill when the user needs Find similar vulnerabilities and bugs across codebases using pattern-based analysis. Use when hunting bug variants, building CodeQL/Semgrep queries, analyzing security vulnerabilities, or performing systematic code audits after finding an initial issue and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["variant-analysis-v2", "variant-analysis", "find", "similar", "vulnerabilities", "and", "bugs", "across"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Variant Analysis

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/variant-analysis` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Variant Analysis You are a variant analysis expert. Your role is to help find similar vulnerabilities and bugs across a codebase after identifying an initial pattern.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Tool Selection, Critical Pitfalls to Avoid.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- A vulnerability has been found and you need to search for similar instances
- Building or refining CodeQL/Semgrep queries for security patterns
- Performing systematic code audits after an initial issue discovery
- Hunting for bug variants across a codebase
- Analyzing how a single root cause manifests in different code paths
- Initial vulnerability discovery (use audit-context-building or domain-specific audits instead)

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

1. What is the root cause? Not the symptom, but WHY it's vulnerable
2. What conditions are required? Control flow, data flow, state
3. What makes it exploitable? User control, missing validation, etc.
4. Element - Keep Specific - Can Abstract
5. Function name - If unique to bug - If pattern applies to family
6. Variable names - Never - Always use metavariables
7. Literal values - If value matters - If any value triggers bug

### Imported Workflow Notes

#### Imported: The Five-Step Process

### Step 1: Understand the Original Issue

Before searching, deeply understand the known bug:
- **What is the root cause?** Not the symptom, but WHY it's vulnerable
- **What conditions are required?** Control flow, data flow, state
- **What makes it exploitable?** User control, missing validation, etc.

### Step 2: Create an Exact Match

Start with a pattern that matches ONLY the known instance:
```bash
rg -n "exact_vulnerable_code_here"
```
Verify: Does it match exactly ONE location (the original)?

### Step 3: Identify Abstraction Points

| Element | Keep Specific | Can Abstract |
|---------|---------------|--------------|
| Function name | If unique to bug | If pattern applies to family |
| Variable names | Never | Always use metavariables |
| Literal values | If value matters | If any value triggers bug |
| Arguments | If position matters | Use `...` wildcards |

### Step 4: Iteratively Generalize

**Change ONE element at a time:**
1. Run the pattern
2. Review ALL new matches
3. Classify: true positive or false positive?
4. If FP rate acceptable, generalize next element
5. If FP rate too high, revert and try different abstraction

**Stop when false positive rate exceeds ~50%**

### Step 5: Analyze and Triage Results

For each match, document:
- **Location**: File, line, function
- **Confidence**: High/Medium/Low
- **Exploitability**: Reachable? Controllable inputs?
- **Priority**: Based on impact and exploitability

For deeper strategic guidance, see METHODOLOGY.md.

#### Imported: Tool Selection

| Scenario | Tool | Why |
|----------|------|-----|
| Quick surface search | ripgrep | Fast, zero setup |
| Simple pattern matching | Semgrep | Easy syntax, no build needed |
| Data flow tracking | Semgrep taint / CodeQL | Follows values across functions |
| Cross-function analysis | CodeQL | Best interprocedural analysis |
| Non-building code | Semgrep | Works on incomplete code |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @variant-analysis-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/variant-analysis-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/variant-analysis-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @variant-analysis-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Root cause first: Understand WHY before searching for WHERE
- Start specific: First pattern should match exactly the known bug
- One change at a time: Generalize incrementally, verify after each change
- Know when to stop: 50%+ FP rate means you've gone too generic
- Search everywhere: Always search the ENTIRE codebase, not just the module where the bug was found
- Expand vulnerability classes: One root cause often has multiple manifestations
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Key Principles

1. **Root cause first**: Understand WHY before searching for WHERE
2. **Start specific**: First pattern should match exactly the known bug
3. **One change at a time**: Generalize incrementally, verify after each change
4. **Know when to stop**: 50%+ FP rate means you've gone too generic
5. **Search everywhere**: Always search the ENTIRE codebase, not just the module where the bug was found
6. **Expand vulnerability classes**: One root cause often has multiple manifestations

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/variant-analysis`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Resources

Ready-to-use templates in `resources/`:

**CodeQL** (`resources/codeql/`):
- `python.ql`, `javascript.ql`, `java.ql`, `go.ql`, `cpp.ql`

**Semgrep** (`resources/semgrep/`):
- `python.yaml`, `javascript.yaml`, `java.yaml`, `go.yaml`, `cpp.yaml`

**Report**: `resources/variant-report-template.md`

#### Imported: Critical Pitfalls to Avoid

These common mistakes cause analysts to miss real vulnerabilities:

### 1. Narrow Search Scope

Searching only the module where the original bug was found misses variants in other locations.

**Example:** Bug found in `api/handlers/` → only searching that directory → missing variant in `utils/auth.py`

**Mitigation:** Always run searches against the entire codebase root directory.

### 2. Pattern Too Specific

Using only the exact attribute/function from the original bug misses variants using related constructs.

**Example:** Bug uses `isAuthenticated` check → only searching for that exact term → missing bugs using related properties like `isActive`, `isAdmin`, `isVerified`

**Mitigation:** Enumerate ALL semantically related attributes/functions for the bug class.

### 3. Single Vulnerability Class

Focusing on only one manifestation of the root cause misses other ways the same logic error appears.

**Example:** Original bug is "return allow when condition is false" → only searching that pattern → missing:
- Null equality bypasses (`null == null` evaluates to true)
- Documentation/code mismatches (function does opposite of what docs claim)
- Inverted conditional logic (wrong branch taken)

**Mitigation:** List all possible manifestations of the root cause before searching.

### 4. Missing Edge Cases

Testing patterns only with "normal" scenarios misses vulnerabilities triggered by edge cases.

**Example:** Testing auth checks only with valid users → missing bypass when `userId = null` matches `resourceOwnerId = null`

**Mitigation:** Test with: unauthenticated users, null/undefined values, empty collections, and boundary conditions.
