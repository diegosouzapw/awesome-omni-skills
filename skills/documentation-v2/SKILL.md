---
name: documentation-v2
description: "Documentation Workflow Bundle workflow skill. Use this skill when the user needs Documentation generation workflow covering API docs, architecture docs, README files, code comments, and technical writing and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: documentation
tags: ["documentation-v2", "documentation", "generation", "covering", "api", "docs", "architecture", "readme"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Documentation Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/documentation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Documentation Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Documentation Types, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating project documentation
- Generating API documentation
- Writing architecture docs
- Documenting code
- Creating user guides
- Maintaining wikis

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. docs-architect - Documentation architecture
2. documentation-templates - Documentation templates
3. Identify documentation needs
4. Choose documentation tools
5. Plan documentation structure
6. Define style guidelines
7. Set up documentation site

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Documentation Planning

#### Skills to Invoke
- `docs-architect` - Documentation architecture
- `documentation-templates` - Documentation templates

#### Actions
1. Identify documentation needs
2. Choose documentation tools
3. Plan documentation structure
4. Define style guidelines
5. Set up documentation site

#### Copy-Paste Prompts
```
Use @docs-architect to plan documentation structure
```

```
Use @documentation-templates to set up documentation
```

### Phase 2: API Documentation

#### Skills to Invoke
- `api-documenter` - API documentation
- `api-documentation-generator` - Auto-generation
- `openapi-spec-generation` - OpenAPI specs

#### Actions
1. Extract API endpoints
2. Generate OpenAPI specs
3. Create API reference
4. Add usage examples
5. Set up auto-generation

#### Copy-Paste Prompts
```
Use @api-documenter to generate API documentation
```

```
Use @openapi-spec-generation to create OpenAPI specs
```

### Phase 3: Architecture Documentation

#### Skills to Invoke
- `c4-architecture-c4-architecture` - C4 architecture
- `c4-context` - Context diagrams
- `c4-container` - Container diagrams
- `c4-component` - Component diagrams
- `c4-code` - Code diagrams
- `mermaid-expert` - Mermaid diagrams

#### Actions
1. Create C4 diagrams
2. Document architecture
3. Generate sequence diagrams
4. Document data flows
5. Create deployment docs

#### Copy-Paste Prompts
```
Use @c4-architecture-c4-architecture to create C4 diagrams
```

```
Use @mermaid-expert to create architecture diagrams
```

### Phase 4: Code Documentation

#### Skills to Invoke
- `code-documentation-code-explain` - Code explanation
- `code-documentation-doc-generate` - Doc generation
- `documentation-generation-doc-generate` - Auto-generation

#### Actions
1. Extract code comments
2. Generate JSDoc/TSDoc
3. Create type documentation
4. Document functions
5. Add usage examples

#### Copy-Paste Prompts
```
Use @code-documentation-code-explain to explain code
```

```
Use @code-documentation-doc-generate to generate docs
```

### Phase 5: README and Getting Started

#### Skills to Invoke
- `readme` - README generation
- `environment-setup-guide` - Setup guides
- `tutorial-engineer` - Tutorial creation

#### Actions
1. Create README
2. Write getting started guide
3. Document installation
4. Add usage examples
5. Create troubleshooting guide

#### Copy-Paste Prompts
```
Use @readme to create project README
```

```
Use @tutorial-engineer to create tutorials
```

### Phase 6: Wiki and Knowledge Base

#### Skills to Invoke
- `wiki-architect` - Wiki architecture
- `wiki-page-writer` - Wiki pages
- `wiki-onboarding` - Onboarding docs
- `wiki-qa` - Wiki Q&A
- `wiki-researcher` - Wiki research
- `wiki-vitepress` - VitePress wiki

#### Actions
1. Design wiki structure
2. Create wiki pages
3. Write onboarding guides
4. Document processes
5. Set up wiki site

#### Copy-Paste Prompts
```
Use @wiki-architect to design wiki structure
```

```
Use @wiki-page-writer to create wiki pages
```

```
Use @wiki-onboarding to create onboarding docs
```

### Phase 7: Changelog and Release Notes

#### Skills to Invoke
- `changelog-automation` - Changelog generation
- `wiki-changelog` - Changelog from git

#### Actions
1. Extract commit history
2. Categorize changes
3. Generate changelog
4. Create release notes
5. Publish updates

#### Copy-Paste Prompts
```
Use @changelog-automation to generate changelog
```

```
Use @wiki-changelog to create release notes
```

### Phase 8: Documentation Maintenance

#### Skills to Invoke
- `doc-coauthoring` - Collaborative writing
- `reference-builder` - Reference docs

#### Actions
1. Review documentation
2. Update outdated content
3. Fix broken links
4. Add new features
5. Gather feedback

#### Copy-Paste Prompts
```
Use @doc-coauthoring to collaborate on docs
```

#### Imported: Related Workflow Bundles

- `development` - Development workflow
- `testing-qa` - Documentation testing
- `ai-ml` - AI documentation

#### Imported: Overview

Comprehensive documentation workflow for generating API documentation, architecture documentation, README files, code comments, and technical content from codebases.

#### Imported: Documentation Types

### Code-Level
- JSDoc/TSDoc comments
- Function documentation
- Type definitions
- Example code

### API Documentation
- Endpoint reference
- Request/response schemas
- Authentication guides
- SDK documentation

### Architecture Documentation
- System overview
- Component diagrams
- Data flow diagrams
- Deployment architecture

### User Documentation
- Getting started guides
- User manuals
- Tutorials
- FAQs

### Process Documentation
- Runbooks
- Onboarding guides
- SOPs
- Decision records

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @documentation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @documentation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @documentation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @documentation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/documentation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Quality Gates

- [ ] All APIs documented
- [ ] Architecture diagrams current
- [ ] README up to date
- [ ] Code comments helpful
- [ ] Examples working
- [ ] Links valid

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
