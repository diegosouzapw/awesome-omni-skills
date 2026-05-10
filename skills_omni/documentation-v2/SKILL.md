---
name: "documentation-v2"
description: "Documentation Workflow Bundle workflow skill. Use this skill when the user needs documentation work across API docs, architecture docs, README files, code comments, and technical writing, and the operator must preserve upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "documentation"
tags:
  - "documentation-v2"
  - "documentation"
  - "api-docs"
  - "architecture"
  - "readme"
  - "technical-writing"
  - "docs-as-code"
  - "openapi"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "SEE LICENSE IN UPSTREAM SOURCE"
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "documentation-v2"
family_name: "Documentation Workflow Bundle"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/documentation-v2"
upstream_skill: "skills/documentation-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "documentation-v2"
---

# Documentation Workflow Bundle

## Overview

Use this skill for repository-integrated documentation work where documentation must be updated with the code, config, API, architecture, or workflow change that caused it. Apply it to both authoring and review tasks.

This skill is especially useful when the operator must preserve upstream structure and provenance while still improving documentation quality, consistency, and readiness for merge.

Treat documentation as part of the change, not a follow-up task. If behavior, interfaces, configuration, or decisions changed, the matching documentation should change in the same work item whenever possible.

## When to Use

Use this skill when one or more of these are true:

- A code or configuration change requires README, setup, usage, or troubleshooting updates.
- An API surface changed and the request/response reference, examples, auth notes, or error descriptions must be updated.
- Architecture or design intent must be documented, clarified, or reviewed.
- Generated documentation exists and you need to verify the generated output still matches the source-of-truth inputs.
- A pull request includes documentation and you need a structured review pass instead of stylistic edits only.
- The user asks for technical writing help inside a repository, not a standalone marketing document.

Do not use this skill as the primary workflow for:

- Legal, policy, or compliance writing that needs specialist review.
- Product marketing pages where persuasion matters more than technical accuracy.
- Pure translation work with no technical validation.
- Large information architecture redesigns spanning many repositories unless the user explicitly asks for that scope.

## Workflow

1. **Confirm scope and provenance**
   - Identify the repository path, branch, and change source.
   - Preserve upstream workflow, copied support files, and provenance markers.
   - Determine whether you are authoring new docs, revising existing docs, or reviewing a proposed change.

2. **Classify the documentation artifact**
   - Decide whether the target is a tutorial, how-to, reference, explanation, README, architecture overview, ADR, or generated API doc.
   - Use the classification to set the right success criteria instead of forcing every page into one style.
   - Open `references/review-criteria.md` for the detailed acceptance matrix.

3. **Identify the source of truth**
   - For API docs, prefer the schema, OpenAPI definition, code annotations, or generated source inputs over prose recollection.
   - For architecture docs, verify diagrams and narrative against actual components, boundaries, and decisions.
   - For README and quickstart content, verify commands, prerequisites, environment assumptions, and expected outputs.
   - Use `assets/schema-map.json` to map common document types to preferred source inputs and validation expectations.

4. **Inspect the current state before editing**
   - Read the target document and nearby docs that link to it.
   - Check for version drift, broken anchors, stale file paths, renamed endpoints, outdated prerequisites, or commands that no longer work.
   - Distinguish authored content from generated content before making manual edits.

5. **Make the minimum correct documentation change**
   - Update only the sections affected by the underlying change unless the user asked for broader refactoring.
   - Keep examples concrete and realistic.
   - When behavior changed, document the new behavior and remove or clearly mark obsolete guidance.
   - When architecture changed, record the decision, consequences, and affected components.

6. **Validate the documentation change**
   - Confirm terminology, paths, command names, payload fields, and error semantics against the repository or source spec.
   - If docs are generated, regenerate from the source definition instead of editing generated output directly unless the repository explicitly permits it.
   - Check internal consistency across README, API reference, architecture docs, comments, changelog, and migration notes.

7. **Review as a user, not just as an editor**
   - Ask whether a new contributor or integrator could complete the task from the document as written.
   - Verify that the doc answers prerequisites, steps, expected result, failure handling, and next actions.
   - Use `examples/review-example.md` when you need a concrete model for documenting findings.

8. **Prepare handoff or merge notes**
   - Summarize what changed, what source of truth was used, what was validated, and any remaining gaps.
   - If validation could not be completed, state the exact unresolved point and the reason.

## Examples

### Example 1: README update after a CLI flag change

**Input**
```text
Code change: `mytool deploy --env prod` was replaced by `mytool deploy --environment production`
README still shows the old flag.
```

**Expected documentation action**
```markdown
- Update setup or usage examples to use `--environment production`.
- Remove references to `--env prod` unless documenting a migration path.
- Verify any troubleshooting text that mentions the old flag.
- If shell output is shown, update it to match the new command behavior.
```

### Example 2: API docs update from an OpenAPI change

**Input**
```yaml
paths:
  /v1/widgets:
    post:
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [name]
              properties:
                name:
                  type: string
                mode:
                  type: string
                  enum: [fast, safe]
```

**Expected documentation action**
```markdown
- Regenerate or update the endpoint reference from the OpenAPI source.
- Ensure the request example includes `name`.
- Document `mode` as optional and enumerate `fast` and `safe`.
- Verify auth, status codes, and error examples are still accurate.
```

### Example 3: Architecture decision capture

**Input**
```text
The service moved from direct database calls to a queue-based write path for reliability.
```

**Expected documentation action**
```markdown
- Update the architecture overview to show the queue in the write path.
- Record why the change was made, trade-offs, and operational consequences.
- Note any new failure modes, latency expectations, or retry behavior.
- Link the overview to an ADR if the repository uses ADRs.
```

## Best Practices

- Do classify the document before editing it; README, reference, tutorial, and ADR content should not be judged by the same standard.
- Do update documentation in the same change as the code or schema when the change is tightly coupled.
- Do prefer source-controlled truth such as code, schemas, and config over memory or issue comments.
- Do keep authored and generated docs separate in your reasoning.
- Do include prerequisites, expected results, and failure conditions in operational docs.
- Do preserve provenance and imported workflow details when this bundle was copied from an upstream source.

- Do not manually patch generated docs if the real fix belongs in the generator input.
- Do not leave examples abstract when the user needs something runnable or reviewable.
- Do not describe endpoints, flags, or architecture components that you did not verify.
- Do not hide uncertainty; state exactly what could not be confirmed.
- Do not expand scope into a full documentation rewrite unless requested.

## Troubleshooting

**Symptoms:** The README looks polished, but users still cannot complete setup.

**Solution:** Check whether prerequisites, environment variables, versions, permissions, seed data, and expected output are explicitly stated. A readable README can still fail as an operational guide.

**Symptoms:** API prose and generated reference disagree on field names or required properties.

**Solution:** Treat the schema or generator input as the source of truth. Regenerate or align the prose with the spec, then remove stale hand-written examples.

**Symptoms:** Architecture docs describe components that no longer exist or omit new ones.

**Solution:** Compare the architecture page with the current repository layout, deployment manifests, service boundaries, and recent change history. Update diagrams and narrative together.

**Symptoms:** A documentation PR contains many wording changes but misses the behavioral change introduced by the code.

**Solution:** Re-anchor the review on the underlying change. Ask what user-visible behavior, interface, or operator workflow changed, then verify the document covers that exact delta.

**Symptoms:** Generated docs keep being edited manually and later overwritten.

**Solution:** Identify the actual generator source file or annotations and update those instead. Add a note in review feedback if the repository’s workflow makes this distinction easy to miss.

## Additional Resources

- `references/review-criteria.md` — Open this when you need a detailed checklist by document type, including README, API reference, architecture overview, ADR, and generated docs.
- `examples/review-example.md` — Open this when you want a concrete example of reviewing a documentation change with findings, rationale, and a clear disposition.
- `assets/schema-map.json` — Open this when you need a compact source-of-truth map for common documentation artifacts and their preferred validation targets.

## Notes on Generated vs Authored Documentation

Generated documentation should usually be regenerated from its source definition, not edited directly. Common source inputs include OpenAPI files, code annotations, configuration schemas, or generator configuration.

Authored documentation such as READMEs, architecture overviews, ADRs, and troubleshooting guides should be reviewed for task success, accuracy, and maintenance cost.

When a repository contains both, verify that generated reference material and authored explanatory material do not contradict each other.

## Related Skills

Use related repository or review skills if the documentation task is only one part of a larger code-change workflow. This skill should remain the documentation-focused pass, not the only review step for code correctness, security, or release readiness.
