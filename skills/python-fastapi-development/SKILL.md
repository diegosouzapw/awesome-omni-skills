---
name: python-fastapi-development
description: "Python/FastAPI Development Workflow workflow skill. Use this skill when the user needs Python FastAPI backend development with async patterns, SQLAlchemy, Pydantic, authentication, and production API patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["python-fastapi-development", "python", "fastapi", "backend", "development", "async", "patterns", "sqlalchemy"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Python/FastAPI Development Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/python-fastapi-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Python/FastAPI Development Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Technology Stack, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building new REST APIs with FastAPI
- Creating async Python backends
- Implementing database integration with SQLAlchemy
- Setting up API authentication
- Developing microservices
- Use when the request clearly matches the imported source intent: Python FastAPI backend development with async patterns, SQLAlchemy, Pydantic, authentication, and production API patterns.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. app-builder - Application scaffolding
2. python-development-python-scaffold - Python scaffolding
3. fastapi-templates - FastAPI templates
4. uv-package-manager - Package management
5. Set up Python environment (uv/poetry)
6. Create project structure
7. Configure FastAPI app

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Project Setup

#### Skills to Invoke
- `app-builder` - Application scaffolding
- `python-development-python-scaffold` - Python scaffolding
- `fastapi-templates` - FastAPI templates
- `uv-package-manager` - Package management

#### Actions
1. Set up Python environment (uv/poetry)
2. Create project structure
3. Configure FastAPI app
4. Set up logging
5. Configure environment variables

#### Copy-Paste Prompts
```
Use @fastapi-templates to scaffold a new FastAPI project
```

```
Use @python-development-python-scaffold to set up Python project structure
```

### Phase 2: Database Setup

#### Skills to Invoke
- `prisma-expert` - Prisma ORM (alternative)
- `database-design` - Schema design
- `postgresql` - PostgreSQL setup
- `pydantic-models-py` - Pydantic models

#### Actions
1. Design database schema
2. Set up SQLAlchemy models
3. Create database connection
4. Configure migrations (Alembic)
5. Set up session management

#### Copy-Paste Prompts
```
Use @database-design to design PostgreSQL schema
```

```
Use @pydantic-models-py to create Pydantic models for API
```

### Phase 3: API Routes

#### Skills to Invoke
- `fastapi-router-py` - FastAPI routers
- `api-design-principles` - API design
- `api-patterns` - API patterns

#### Actions
1. Design API endpoints
2. Create API routers
3. Implement CRUD operations
4. Add request validation
5. Configure response models

#### Copy-Paste Prompts
```
Use @fastapi-router-py to create API endpoints with CRUD operations
```

```
Use @api-design-principles to design RESTful API
```

### Phase 4: Authentication

#### Skills to Invoke
- `auth-implementation-patterns` - Authentication
- `api-security-best-practices` - API security

#### Actions
1. Choose auth strategy (JWT, OAuth2)
2. Implement user registration
3. Set up login endpoints
4. Create auth middleware
5. Add password hashing

#### Copy-Paste Prompts
```
Use @auth-implementation-patterns to implement JWT authentication
```

### Phase 5: Error Handling

#### Skills to Invoke
- `fastapi-pro` - FastAPI patterns
- `error-handling-patterns` - Error handling

#### Actions
1. Create custom exceptions
2. Set up exception handlers
3. Implement error responses
4. Add request logging
5. Configure error tracking

#### Copy-Paste Prompts
```
Use @fastapi-pro to implement comprehensive error handling
```

### Phase 6: Testing

#### Skills to Invoke
- `python-testing-patterns` - pytest testing
- `api-testing-observability-api-mock` - API testing

#### Actions
1. Set up pytest
2. Create test fixtures
3. Write unit tests
4. Implement integration tests
5. Configure test database

#### Copy-Paste Prompts
```
Use @python-testing-patterns to write pytest tests for FastAPI
```

### Phase 7: Documentation

#### Skills to Invoke
- `api-documenter` - API documentation
- `openapi-spec-generation` - OpenAPI specs

#### Actions
1. Configure OpenAPI schema
2. Add endpoint documentation
3. Create usage examples
4. Set up API versioning
5. Generate API docs

#### Copy-Paste Prompts
```
Use @api-documenter to generate comprehensive API documentation
```

### Phase 8: Deployment

#### Skills to Invoke
- `deployment-engineer` - Deployment
- `docker-expert` - Containerization

#### Actions
1. Create Dockerfile
2. Set up docker-compose
3. Configure production settings
4. Set up reverse proxy
5. Deploy to cloud

#### Copy-Paste Prompts
```
Use @docker-expert to containerize FastAPI application
```

#### Imported: Related Workflow Bundles

- `development` - General development
- `database` - Database operations
- `security-audit` - Security testing
- `api-development` - API patterns

#### Imported: Overview

Specialized workflow for building production-ready Python backends with FastAPI, featuring async patterns, SQLAlchemy ORM, Pydantic validation, and comprehensive API patterns.

#### Imported: Technology Stack

| Category | Technology |
|----------|------------|
| Framework | FastAPI |
| Language | Python 3.11+ |
| ORM | SQLAlchemy 2.0 |
| Validation | Pydantic v2 |
| Database | PostgreSQL |
| Migrations | Alembic |
| Auth | JWT, OAuth2 |
| Testing | pytest |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @python-fastapi-development to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @python-fastapi-development against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @python-fastapi-development for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @python-fastapi-development using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/python-fastapi-development`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- [ ] All tests passing (>80% coverage)
- [ ] Type checking passes (mypy)
- [ ] Linting clean (ruff, black)
- [ ] API documentation complete
- [ ] Security scan passed
- [ ] Performance benchmarks met

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
