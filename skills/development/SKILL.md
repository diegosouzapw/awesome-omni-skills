---
name: development
description: "Development Workflow Bundle workflow skill. Use this skill when the user needs Comprehensive web, mobile, and backend development workflow bundling frontend, backend, full-stack, and mobile development skills for end-to-end application delivery and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["development", "comprehensive", "web", "mobile", "and", "backend", "bundling", "frontend"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Development Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Development Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building new web or mobile applications
- Adding features to existing applications
- Refactoring or modernizing legacy code
- Setting up new projects with best practices
- Full-stack feature development
- Cross-platform application development

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. app-builder - Main application building orchestrator
2. senior-fullstack - Full-stack development guidance
3. environment-setup-guide - Development environment setup
4. concise-planning - Task planning and breakdown
5. Determine project type (web, mobile, full-stack)
6. Select technology stack
7. Scaffold project structure

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Project Setup and Scaffolding

#### Skills to Invoke
- `app-builder` - Main application building orchestrator
- `senior-fullstack` - Full-stack development guidance
- `environment-setup-guide` - Development environment setup
- `concise-planning` - Task planning and breakdown

#### Actions
1. Determine project type (web, mobile, full-stack)
2. Select technology stack
3. Scaffold project structure
4. Configure development environment
5. Set up version control and CI/CD

#### Copy-Paste Prompts
```
Use @app-builder to scaffold a new React + Node.js full-stack application
```

```
Use @senior-fullstack to set up a Next.js 14 project with App Router
```

```
Use @environment-setup-guide to configure my development environment
```

### Phase 2: Frontend Development

#### Skills to Invoke
- `frontend-developer` - React/Next.js component development
- `frontend-design` - UI/UX design implementation
- `react-patterns` - Modern React patterns
- `typescript-pro` - TypeScript best practices
- `tailwind-patterns` - Tailwind CSS styling
- `nextjs-app-router-patterns` - Next.js 14+ patterns

#### Actions
1. Design component architecture
2. Implement UI components
3. Set up state management
4. Configure routing
5. Apply styling and theming
6. Implement responsive design

#### Copy-Paste Prompts
```
Use @frontend-developer to create a dashboard component with React and TypeScript
```

```
Use @react-patterns to implement proper state management with Zustand
```

```
Use @tailwind-patterns to style components with a consistent design system
```

### Phase 3: Backend Development

#### Skills to Invoke
- `backend-architect` - Backend architecture design
- `backend-dev-guidelines` - Backend development standards
- `nodejs-backend-patterns` - Node.js/Express patterns
- `fastapi-pro` - FastAPI development
- `api-design-principles` - REST/GraphQL API design
- `auth-implementation-patterns` - Authentication implementation

#### Actions
1. Design API architecture
2. Implement REST/GraphQL endpoints
3. Set up database connections
4. Implement authentication/authorization
5. Configure middleware
6. Set up error handling

#### Copy-Paste Prompts
```
Use @backend-architect to design a microservices architecture for my application
```

```
Use @nodejs-backend-patterns to create Express.js API endpoints
```

```
Use @auth-implementation-patterns to implement JWT authentication
```

### Phase 4: Database Development

#### Skills to Invoke
- `database-architect` - Database design
- `database-design` - Schema design principles
- `prisma-expert` - Prisma ORM
- `postgresql` - PostgreSQL optimization
- `neon-postgres` - Serverless Postgres

#### Actions
1. Design database schema
2. Create migrations
3. Set up ORM
4. Optimize queries
5. Configure connection pooling

#### Copy-Paste Prompts
```
Use @database-architect to design a normalized schema for an e-commerce platform
```

```
Use @prisma-expert to set up Prisma ORM with TypeScript
```

### Phase 5: Testing

#### Skills to Invoke
- `test-driven-development` - TDD workflow
- `javascript-testing-patterns` - Jest/Vitest testing
- `python-testing-patterns` - pytest testing
- `e2e-testing-patterns` - Playwright/Cypress E2E
- `playwright-skill` - Browser automation testing

#### Actions
1. Write unit tests
2. Create integration tests
3. Set up E2E tests
4. Configure CI test runners
5. Achieve coverage targets

#### Copy-Paste Prompts
```
Use @test-driven-development to implement features with TDD
```

```
Use @playwright-skill to create E2E tests for critical user flows
```

### Phase 6: Code Quality and Review

#### Skills to Invoke
- `code-reviewer` - AI-powered code review
- `clean-code` - Clean code principles
- `lint-and-validate` - Linting and validation
- `security-scanning-security-sast` - Static security analysis

#### Actions
1. Run linters and formatters
2. Perform code review
3. Fix code quality issues
4. Run security scans
5. Address vulnerabilities

#### Copy-Paste Prompts
```
Use @code-reviewer to review my pull request
```

```
Use @lint-and-validate to check code quality
```

### Phase 7: Build and Deployment

#### Skills to Invoke
- `deployment-engineer` - Deployment orchestration
- `docker-expert` - Containerization
- `vercel-deployment` - Vercel deployment
- `github-actions-templates` - CI/CD workflows
- `cicd-automation-workflow-automate` - CI/CD automation

#### Actions
1. Create Dockerfiles
2. Configure build pipelines
3. Set up deployment workflows
4. Configure environment variables
5. Deploy to production

#### Copy-Paste Prompts
```
Use @docker-expert to containerize my application
```

```
Use @vercel-deployment to deploy my Next.js app to production
```

```
Use @github-actions-templates to set up CI/CD pipeline
```

#### Imported: Technology-Specific Workflows

### React/Next.js Development
```
Skills: frontend-developer, react-patterns, nextjs-app-router-patterns, typescript-pro, tailwind-patterns
```

### Python/FastAPI Development
```
Skills: fastapi-pro, python-pro, python-patterns, pydantic-models-py
```

### Node.js/Express Development
```
Skills: nodejs-backend-patterns, javascript-pro, typescript-pro, express (via nodejs-backend-patterns)
```

### Full-Stack Development
```
Skills: senior-fullstack, app-builder, frontend-developer, backend-architect, database-architect
```

### Mobile Development
```
Skills: mobile-developer, react-native-architecture, flutter-expert, ios-developer
```

#### Imported: Related Workflow Bundles

- `wordpress` - WordPress-specific development
- `security-audit` - Security testing workflow
- `testing-qa` - Comprehensive testing workflow
- `documentation` - Documentation generation workflow

#### Imported: Overview

Consolidated workflow for end-to-end software development covering web, mobile, and backend development. This bundle orchestrates skills for building production-ready applications from scaffolding to deployment.

#### Imported: Quality Gates

Before moving to next phase, verify:
- [ ] All tests passing
- [ ] Code review completed
- [ ] Security scan passed
- [ ] Linting/formatting clean
- [ ] Documentation updated

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @development to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @development against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @development for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @development using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/development`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@conductor-validator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@confluence-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-marketer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
