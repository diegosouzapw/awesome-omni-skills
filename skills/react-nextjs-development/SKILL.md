---
name: react-nextjs-development
description: "React/Next.js Development Workflow workflow skill. Use this skill when the user needs React and Next.js 14+ application development with App Router, Server Components, TypeScript, Tailwind CSS, and modern frontend patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["react-nextjs-development", "react", "and", "next", "application", "development", "app", "router"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# React/Next.js Development Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/react-nextjs-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# React/Next.js Development Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Technology Stack, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building new React applications
- Creating Next.js 14+ projects with App Router
- Implementing Server Components
- Setting up TypeScript with React
- Styling with Tailwind CSS
- Building full-stack Next.js applications

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

1. app-builder - Application scaffolding
2. senior-fullstack - Full-stack guidance
3. nextjs-app-router-patterns - Next.js 14+ patterns
4. typescript-pro - TypeScript setup
5. Choose project type (React SPA, Next.js app)
6. Select build tool (Vite, Next.js, Create React App)
7. Scaffold project structure

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Project Setup

#### Skills to Invoke
- `app-builder` - Application scaffolding
- `senior-fullstack` - Full-stack guidance
- `nextjs-app-router-patterns` - Next.js 14+ patterns
- `typescript-pro` - TypeScript setup

#### Actions
1. Choose project type (React SPA, Next.js app)
2. Select build tool (Vite, Next.js, Create React App)
3. Scaffold project structure
4. Configure TypeScript
5. Set up ESLint and Prettier

#### Copy-Paste Prompts
```
Use @app-builder to scaffold a new Next.js 14 project with App Router
```

```
Use @nextjs-app-router-patterns to set up Server Components
```

### Phase 2: Component Architecture

#### Skills to Invoke
- `frontend-developer` - Component development
- `react-patterns` - React patterns
- `react-state-management` - State management
- `react-ui-patterns` - UI patterns

#### Actions
1. Design component hierarchy
2. Create base components
3. Implement layout components
4. Set up state management
5. Create custom hooks

#### Copy-Paste Prompts
```
Use @frontend-developer to create reusable React components
```

```
Use @react-patterns to implement proper component composition
```

```
Use @react-state-management to set up Zustand store
```

### Phase 3: Styling and Design

#### Skills to Invoke
- `frontend-design` - UI design
- `tailwind-patterns` - Tailwind CSS
- `tailwind-design-system` - Design system
- `core-components` - Component library

#### Actions
1. Set up Tailwind CSS
2. Configure design tokens
3. Create utility classes
4. Build component styles
5. Implement responsive design

#### Copy-Paste Prompts
```
Use @tailwind-patterns to style components with Tailwind CSS v4
```

```
Use @frontend-design to create a modern dashboard UI
```

### Phase 4: Data Fetching

#### Skills to Invoke
- `nextjs-app-router-patterns` - Server Components
- `react-state-management` - React Query
- `api-patterns` - API integration

#### Actions
1. Implement Server Components
2. Set up React Query/SWR
3. Create API client
4. Handle loading states
5. Implement error boundaries

#### Copy-Paste Prompts
```
Use @nextjs-app-router-patterns to implement Server Components data fetching
```

### Phase 5: Routing and Navigation

#### Skills to Invoke
- `nextjs-app-router-patterns` - App Router
- `nextjs-best-practices` - Next.js patterns

#### Actions
1. Set up file-based routing
2. Create dynamic routes
3. Implement nested routes
4. Add route guards
5. Configure redirects

#### Copy-Paste Prompts
```
Use @nextjs-app-router-patterns to set up parallel routes and intercepting routes
```

### Phase 6: Forms and Validation

#### Skills to Invoke
- `frontend-developer` - Form development
- `typescript-advanced-types` - Type validation
- `react-ui-patterns` - Form patterns

#### Actions
1. Choose form library (React Hook Form, Formik)
2. Set up validation (Zod, Yup)
3. Create form components
4. Handle submissions
5. Implement error handling

#### Copy-Paste Prompts
```
Use @frontend-developer to create forms with React Hook Form and Zod
```

### Phase 7: Testing

#### Skills to Invoke
- `javascript-testing-patterns` - Jest/Vitest
- `playwright-skill` - E2E testing
- `e2e-testing-patterns` - E2E patterns

#### Actions
1. Set up testing framework
2. Write unit tests
3. Create component tests
4. Implement E2E tests
5. Configure CI integration

#### Copy-Paste Prompts
```
Use @javascript-testing-patterns to write Vitest tests
```

```
Use @playwright-skill to create E2E tests for critical flows
```

### Phase 8: Build and Deployment

#### Skills to Invoke
- `vercel-deployment` - Vercel deployment
- `vercel-deploy-claimable` - Vercel deployment
- `web-performance-optimization` - Performance

#### Actions
1. Configure build settings
2. Optimize bundle size
3. Set up environment variables
4. Deploy to Vercel
5. Configure preview deployments

#### Copy-Paste Prompts
```
Use @vercel-deployment to deploy Next.js app to production
```

#### Imported: Related Workflow Bundles

- `development` - General development
- `testing-qa` - Testing workflow
- `documentation` - Documentation
- `typescript-development` - TypeScript patterns

#### Imported: Overview

Specialized workflow for building React and Next.js 14+ applications with modern patterns including App Router, Server Components, TypeScript, and Tailwind CSS.

#### Imported: Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14+, React 18+ |
| Language | TypeScript 5+ |
| Styling | Tailwind CSS v4 |
| State | Zustand, React Query |
| Forms | React Hook Form, Zod |
| Testing | Vitest, Playwright |
| Deployment | Vercel |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @react-nextjs-development to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @react-nextjs-development against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @react-nextjs-development for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @react-nextjs-development using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/react-nextjs-development`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@programmatic-seo` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@progressive-estimation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@progressive-web-app` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@project-development` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- [ ] TypeScript compiles without errors
- [ ] All tests passing
- [ ] Linting clean
- [ ] Performance metrics met (LCP, CLS, FID)
- [ ] Accessibility checked (WCAG 2.1)
- [ ] Responsive design verified

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
