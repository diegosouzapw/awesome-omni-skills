---
name: api-documentation
description: "API Documentation Workflow workflow skill. Use this skill when the user needs API documentation workflow for generating OpenAPI specs, creating developer guides, and maintaining comprehensive API documentation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["api-documentation", "api", "documentation", "for", "generating", "openapi", "specs", "creating"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# API Documentation Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/api-documentation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# API Documentation Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating API documentation
- Generating OpenAPI specs
- Writing developer guides
- Adding code examples
- Setting up API portals
- Use when the request clearly matches the imported source intent: API documentation workflow for generating OpenAPI specs, creating developer guides, and maintaining comprehensive API documentation.

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

1. api-documenter - API documentation
2. api-design-principles - API design
3. Inventory endpoints
4. Document request/response
5. Identify authentication
6. Map error codes
7. Note rate limits

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: API Discovery

#### Skills to Invoke
- `api-documenter` - API documentation
- `api-design-principles` - API design

#### Actions
1. Inventory endpoints
2. Document request/response
3. Identify authentication
4. Map error codes
5. Note rate limits

#### Copy-Paste Prompts
```
Use @api-documenter to discover and document API endpoints
```

### Phase 2: OpenAPI Specification

#### Skills to Invoke
- `openapi-spec-generation` - OpenAPI
- `api-documenter` - API specs

#### Actions
1. Create OpenAPI schema
2. Define paths
3. Add schemas
4. Configure security
5. Add examples

#### Copy-Paste Prompts
```
Use @openapi-spec-generation to create OpenAPI specification
```

### Phase 3: Developer Guide

#### Skills to Invoke
- `api-documentation-generator` - Documentation
- `documentation-templates` - Templates

#### Actions
1. Create getting started
2. Write authentication guide
3. Document common patterns
4. Add troubleshooting
5. Create FAQ

#### Copy-Paste Prompts
```
Use @api-documentation-generator to create developer guide
```

### Phase 4: Code Examples

#### Skills to Invoke
- `api-documenter` - Code examples
- `tutorial-engineer` - Tutorials

#### Actions
1. Create example requests
2. Write SDK examples
3. Add curl examples
4. Create tutorials
5. Test examples

#### Copy-Paste Prompts
```
Use @api-documenter to generate code examples
```

### Phase 5: Interactive Docs

#### Skills to Invoke
- `api-documenter` - Interactive docs

#### Actions
1. Set up Swagger UI
2. Configure Redoc
3. Add try-it functionality
4. Test interactivity
5. Deploy docs

#### Copy-Paste Prompts
```
Use @api-documenter to set up interactive documentation
```

### Phase 6: Documentation Site

#### Skills to Invoke
- `docs-architect` - Documentation architecture
- `wiki-page-writer` - Documentation

#### Actions
1. Choose platform
2. Design structure
3. Create pages
4. Add navigation
5. Configure search

#### Copy-Paste Prompts
```
Use @docs-architect to design API documentation site
```

### Phase 7: Maintenance

#### Skills to Invoke
- `api-documenter` - Doc maintenance

#### Actions
1. Set up auto-generation
2. Configure validation
3. Add review process
4. Schedule updates
5. Monitor feedback

#### Copy-Paste Prompts
```
Use @api-documenter to set up automated doc generation
```

#### Imported: Related Workflow Bundles

- `documentation` - Documentation
- `api-development` - API development
- `development` - Development

#### Imported: Overview

Specialized workflow for creating comprehensive API documentation including OpenAPI/Swagger specs, developer guides, code examples, and interactive documentation.

#### Imported: Quality Gates

- [ ] OpenAPI spec complete
- [ ] Developer guide written
- [ ] Code examples working
- [ ] Interactive docs functional
- [ ] Documentation deployed

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @api-documentation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/api-documentation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/api-documentation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @api-documentation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/api-documentation`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
