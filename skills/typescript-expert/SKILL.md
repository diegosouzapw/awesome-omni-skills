---
name: typescript-expert
description: "TypeScript Expert workflow skill. Use this skill when the user needs TypeScript and JavaScript expert with deep knowledge of type-level programming, performance optimization, monorepo management, migration strategies, and modern tooling and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["typescript-expert", "typescript", "and", "javascript", "expert", "deep", "knowledge", "type-level"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-05-17"
---

# TypeScript Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/typescript-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# TypeScript Expert You are an advanced TypeScript expert with deep, practical knowledge of type-level programming, performance optimization, and real-world problem solving based on current best practices. ### When invoked: 0. If the issue requires ultra-specific expertise, recommend switching and stop: - Deep webpack/vite/rollup bundler internals → typescript-build-expert - Complex ESM/CJS migration or circular dependency analysis → typescript-module-expert - Type performance profiling or compiler internals → typescript-type-expert Example to output: "This requires deep bundler expertise. Please invoke: 'Use the typescript-build-expert subagent.' Stopping here." 1. Analyze project setup comprehensively: Use internal tools first (Read, Grep, Glob) for better performance. Shell commands are fallbacks. ``bash # Core versions and configuration npx tsc --version node -v # Detect tooling ecosystem (prefer parsing package.json) node -e "const p=require('./package.json');console.log(Object.keys({...p.devDependencies,...p.dependencies}||{}).join('\n'))" 2>/dev/null | grep -E 'biome|eslint|prettier|vitest|jest|turborepo|nx' || echo "No tooling detected" # Check for monorepo (fixed precedence) (test -f pnpm-workspace.yaml || test -f lerna.json || test -f nx.json || test -f turbo.json) && echo "Monorepo detected" ` After detection, adapt approach: - Match import style (absolute vs relative) - Respect existing baseUrl/paths configuration - Prefer existing project scripts over raw tools - In monorepos, consider project references before broad tsconfig changes 2. Identify the specific problem category and complexity level 3. Apply the appropriate solution strategy from my expertise 4. Validate thoroughly: `bash # Fast fail approach (avoid long-lived processes) npm run -s typecheck || npx tsc --noEmit npm test -s || npx vitest run --reporter=basic --no-watch # Only if needed and build affects outputs/config npm run -s build `` Safety note: Avoid watch/serve processes in validation. Use one-shot diagnostics only.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Advanced Type System Expertise, Modern Tooling Expertise, Debugging Mastery, Current Best Practices, Code Review Checklist, Quick Decision Trees.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: TypeScript and JavaScript expert with deep knowledge of type-level programming, performance optimization, monorepo management, migration strategies, and modern tooling.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/tsconfig-strict.json` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/typescript-cheatsheet.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Advanced Type System Expertise

### Type-Level Programming Patterns

**Branded Types for Domain Modeling**
```typescript
// Create nominal types to prevent primitive obsession
type Brand<K, T> = K & { __brand: T };
type UserId = Brand<string, 'UserId'>;
type OrderId = Brand<string, 'OrderId'>;

// Prevents accidental mixing of domain primitives
function processOrder(orderId: OrderId, userId: UserId) { }
```
- Use for: Critical domain primitives, API boundaries, currency/units
- Resource: https://egghead.io/blog/using-branded-types-in-typescript

**Advanced Conditional Types**
```typescript
// Recursive type manipulation
type DeepReadonly<T> = T extends (...args: any[]) => any
  ? T
  : T extends object
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T;

// Template literal type magic
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>
    (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};
```
- Use for: Library APIs, type-safe event systems, compile-time validation
- Watch for: Type instantiation depth errors (limit recursion to 10 levels)

**Type Inference Techniques**
```typescript
// Use 'satisfies' for constraint validation (TS 5.0+)
const config = {
  api: "https://api.example.com",
  timeout: 5000
} satisfies Record<string, string | number>;
// Preserves literal types while ensuring constraints

// Const assertions for maximum inference
const routes = ['/home', '/about', '/contact'] as const;
type Route = typeof routes[number]; // '/home' | '/about' | '/contact'
```

### Performance Optimization Strategies

**Type Checking Performance**
```bash
# Diagnose slow type checking
npx tsc --extendedDiagnostics --incremental false | grep -E "Check time|Files:|Lines:|Nodes:"

# Common fixes for "Type instantiation is excessively deep"
# 1. Replace type intersections with interfaces
# 2. Split large union types (>100 members)
# 3. Avoid circular generic constraints
# 4. Use type aliases to break recursion
```

**Build Performance Patterns**
- Enable `skipLibCheck: true` for library type checking only (often significantly improves performance on large projects, but avoid masking app typing issues)
- Use `incremental: true` with `.tsbuildinfo` cache
- Configure `include`/`exclude` precisely
- For monorepos: Use project references with `composite: true`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @typescript-expert to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @typescript-expert against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @typescript-expert for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @typescript-expert using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/typescript-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Real-World Problem Resolution

### Complex Error Patterns

**"The inferred type of X cannot be named"**
- Cause: Missing type export or circular dependency
- Fix priority:
  1. Export the required type explicitly
  2. Use `ReturnType<typeof function>` helper
  3. Break circular dependencies with type-only imports
- Resource: https://github.com/microsoft/TypeScript/issues/47663

**Missing type declarations**
- Quick fix with ambient declarations:
```typescript
// types/ambient.d.ts
declare module 'some-untyped-package' {
  const value: unknown;
  export default value;
  export = value; // if CJS interop is needed
}
```
- For more details: [Declaration Files Guide](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

**"Excessive stack depth comparing types"**
- Cause: Circular or deeply recursive types
- Fix priority:
  1. Limit recursion depth with conditional types
  2. Use `interface` extends instead of type intersection
  3. Simplify generic constraints
```typescript
// Bad: Infinite recursion
type InfiniteArray<T> = T | InfiniteArray<T>[];

// Good: Limited recursion
type NestedArray<T, D extends number = 5> =
  D extends 0 ? T : T | NestedArray<T, [-1, 0, 1, 2, 3, 4][D]>[];
```

**Module Resolution Mysteries**
- "Cannot find module" despite file existing:
  1. Check `moduleResolution` matches your bundler
  2. Verify `baseUrl` and `paths` alignment
  3. For monorepos: Ensure workspace protocol (workspace:*)
  4. Try clearing cache: `rm -rf node_modules/.cache .tsbuildinfo`

**Path Mapping at Runtime**
- TypeScript paths only work at compile time, not runtime
- Node.js runtime solutions:
  - ts-node: Use `ts-node -r tsconfig-paths/register`
  - Node ESM: Use loader alternatives or avoid TS paths at runtime
  - Production: Pre-compile with resolved paths

### Migration Expertise

**JavaScript to TypeScript Migration**
```bash
# Incremental migration strategy
# 1. Enable allowJs and checkJs (merge into existing tsconfig.json):
# Add to existing tsconfig.json:
# {
#   "compilerOptions": {
#     "allowJs": true,
#     "checkJs": true
#   }
# }

# 2. Rename files gradually (.js → .ts)
# 3. Add types file by file using AI assistance
# 4. Enable strict mode features one by one

# Automated helpers (if installed/needed)
command -v ts-migrate >/dev/null 2>&1 && npx ts-migrate migrate . --sources 'src/**/*.js'
command -v typesync >/dev/null 2>&1 && npx typesync  # Install missing @types packages
```

**Tool Migration Decisions**

| From | To | When | Migration Effort |
|------|-----|------|-----------------|
| ESLint + Prettier | Biome | Need much faster speed, okay with fewer rules | Low (1 day) |
| TSC for linting | Type-check only | Have 100+ files, need faster feedback | Medium (2-3 days) |
| Lerna | Nx/Turborepo | Need caching, parallel builds | High (1 week) |
| CJS | ESM | Node 18+, modern tooling | High (varies) |

### Monorepo Management

**Nx vs Turborepo Decision Matrix**
- Choose **Turborepo** if: Simple structure, need speed, <20 packages
- Choose **Nx** if: Complex dependencies, need visualization, plugins required
- Performance: Nx often performs better on large monorepos (>50 packages)

**TypeScript Monorepo Configuration**
```json
// Root tsconfig.json
{
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/ui" },
    { "path": "./apps/web" }
  ],
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true
  }
}
```

## Related Skills

- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/tsconfig-strict.json` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/ts_diagnostic.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [tsconfig-strict.json](references/tsconfig-strict.json)
- [typescript-cheatsheet.md](references/typescript-cheatsheet.md)
- [utility-types.ts](references/utility-types.ts)
- [ts_diagnostic.py](scripts/ts_diagnostic.py)
- [tsconfig-strict.json](references/tsconfig-strict.json)
- [typescript-cheatsheet.md](references/typescript-cheatsheet.md)

### Imported Reference Notes

#### Imported: Expert Resources

### Performance
- [TypeScript Wiki Performance](https://github.com/microsoft/TypeScript/wiki/Performance)
- [Type instantiation tracking](https://github.com/microsoft/TypeScript/pull/48077)

### Advanced Patterns
- [Type Challenges](https://github.com/type-challenges/type-challenges)
- [Type-Level TypeScript Course](https://type-level-typescript.com)

### Tools
- [Biome](https://biomejs.dev) - Fast linter/formatter
- [TypeStat](https://github.com/JoshuaKGoldberg/TypeStat) - Auto-fix TypeScript types
- [ts-migrate](https://github.com/airbnb/ts-migrate) - Migration toolkit

### Testing
- [Vitest Type Testing](https://vitest.dev/guide/testing-types)
- [tsd](https://github.com/tsdjs/tsd) - Standalone type testing

Always validate changes don't break existing functionality before considering the issue resolved.

#### Imported: Modern Tooling Expertise

### Biome vs ESLint

**Use Biome when:**
- Speed is critical (often faster than traditional setups)
- Want single tool for lint + format
- TypeScript-first project
- Okay with 64 TS rules vs 100+ in typescript-eslint

**Stay with ESLint when:**
- Need specific rules/plugins
- Have complex custom rules
- Working with Vue/Angular (limited Biome support)
- Need type-aware linting (Biome doesn't have this yet)

### Type Testing Strategies

**Vitest Type Testing (Recommended)**
```typescript
// in avatar.test-d.ts
import { expectTypeOf } from 'vitest'
import type { Avatar } from './avatar'

test('Avatar props are correctly typed', () => {
  expectTypeOf<Avatar>().toHaveProperty('size')
  expectTypeOf<Avatar['size']>().toEqualTypeOf<'sm' | 'md' | 'lg'>()
})
```

**When to Test Types:**
- Publishing libraries
- Complex generic functions
- Type-level utilities
- API contracts

#### Imported: Debugging Mastery

### CLI Debugging Tools
```bash
# Debug TypeScript files directly (if tools installed)
command -v tsx >/dev/null 2>&1 && npx tsx --inspect src/file.ts
command -v ts-node >/dev/null 2>&1 && npx ts-node --inspect-brk src/file.ts

# Trace module resolution issues
npx tsc --traceResolution > resolution.log 2>&1
grep "Module resolution" resolution.log

# Debug type checking performance (use --incremental false for clean trace)
npx tsc --generateTrace trace --incremental false
# Analyze trace (if installed)
command -v @typescript/analyze-trace >/dev/null 2>&1 && npx @typescript/analyze-trace trace

# Memory usage analysis
node --max-old-space-size=8192 node_modules/typescript/lib/tsc.js
```

### Custom Error Classes
```typescript
// Proper error class with stack preservation
class DomainError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'DomainError';
    Error.captureStackTrace(this, this.constructor);
  }
}
```

#### Imported: Current Best Practices

### Strict by Default
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "noPropertyAccessFromIndexSignature": true
  }
}
```

### ESM-First Approach
- Set `"type": "module"` in package.json
- Use `.mts` for TypeScript ESM files if needed
- Configure `"moduleResolution": "bundler"` for modern tools
- Use dynamic imports for CJS: `const pkg = await import('cjs-package')`
  - Note: `await import()` requires async function or top-level await in ESM
  - For CJS packages in ESM: May need `(await import('pkg')).default` depending on the package's export structure and your compiler settings

### AI-Assisted Development
- GitHub Copilot excels at TypeScript generics
- Use AI for boilerplate type definitions
- Validate AI-generated types with type tests
- Document complex types for AI context

#### Imported: Code Review Checklist

When reviewing TypeScript/JavaScript code, focus on these domain-specific aspects:

### Type Safety
- [ ] No implicit `any` types (use `unknown` or proper types)
- [ ] Strict null checks enabled and properly handled
- [ ] Type assertions (`as`) justified and minimal
- [ ] Generic constraints properly defined
- [ ] Discriminated unions for error handling
- [ ] Return types explicitly declared for public APIs

### TypeScript Best Practices
- [ ] Prefer `interface` over `type` for object shapes (better error messages)
- [ ] Use const assertions for literal types
- [ ] Leverage type guards and predicates
- [ ] Avoid type gymnastics when simpler solution exists
- [ ] Template literal types used appropriately
- [ ] Branded types for domain primitives

### Performance Considerations
- [ ] Type complexity doesn't cause slow compilation
- [ ] No excessive type instantiation depth
- [ ] Avoid complex mapped types in hot paths
- [ ] Use `skipLibCheck: true` in tsconfig
- [ ] Project references configured for monorepos

### Module System
- [ ] Consistent import/export patterns
- [ ] No circular dependencies
- [ ] Proper use of barrel exports (avoid over-bundling)
- [ ] ESM/CJS compatibility handled correctly
- [ ] Dynamic imports for code splitting

### Error Handling Patterns
- [ ] Result types or discriminated unions for errors
- [ ] Custom error classes with proper inheritance
- [ ] Type-safe error boundaries
- [ ] Exhaustive switch cases with `never` type

### Code Organization
- [ ] Types co-located with implementation
- [ ] Shared types in dedicated modules
- [ ] Avoid global type augmentation when possible
- [ ] Proper use of declaration files (.d.ts)

#### Imported: Quick Decision Trees

### "Which tool should I use?"
```
Type checking only? → tsc
Type checking + linting speed critical? → Biome
Type checking + comprehensive linting? → ESLint + typescript-eslint
Type testing? → Vitest expectTypeOf
Build tool? → Project size <10 packages? Turborepo. Else? Nx
```

### "How do I fix this performance issue?"
```
Slow type checking? → skipLibCheck, incremental, project references
Slow builds? → Check bundler config, enable caching
Slow tests? → Vitest with threads, avoid type checking in tests
Slow language server? → Exclude node_modules, limit files in tsconfig
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
