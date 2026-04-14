---
name: fp-pragmatic
description: "Pragmatic Functional Programming workflow skill. Use this skill when the user needs A practical, jargon-free guide to functional programming - the 80/20 approach that gets results without the academic overhead and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["fp-ts", "functional-programming", "typescript", "pragmatic", "beginner-friendly", "best-practices", "fp-pragmatic", "practical"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "kadu"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Pragmatic Functional Programming

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/fp-pragmatic` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Pragmatic Functional Programming Read this first. This guide cuts through the academic jargon and shows you what actually matters. No category theory. No abstract nonsense. Just patterns that make your code better.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: The 80/20 of FP, Quick Wins: Easy Changes That Improve Code Today, Common Refactors: Before and After, Cheat Sheet, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You want a pragmatic starting point for fp-ts or functional programming in TypeScript.
- The task is exploratory or educational and needs an 80/20 view of what is actually worth adopting.
- You need guidance on when FP helps and when it is better to keep code simple.
- TaskEither - Async operations that can fail (replaces Promise + try/catch)
- Validation - Collect ALL errors instead of stopping at first
- Reader - Dependency injection without classes

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Summary

1. **Use pipe** for 3+ operations
2. **Use Option** for nullable chains
3. **Use Either** for operations that can fail
4. **Use map** to transform wrapped values
5. **Use flatMap** to chain operations that might fail
6. **Skip FP** when it hurts readability
7. **Keep it simple** - if your team can't read it, it's not good code

#### Imported: The 80/20 of FP

These five patterns give you most of the benefits. Master these before exploring anything else.

### 1. Pipe: Chain Operations Clearly

Instead of nesting function calls or creating intermediate variables, chain operations in reading order.

```typescript
import { pipe } from 'fp-ts/function'

// Before: Hard to read (inside-out)
const result = format(validate(parse(input)))

// Before: Too many variables
const parsed = parse(input)
const validated = validate(parsed)
const result = format(validated)

// After: Clear, linear flow
const result = pipe(
  input,
  parse,
  validate,
  format
)
```

**When to use pipe:**
- 3+ transformations on the same data
- You find yourself naming throwaway variables
- Logic reads better top-to-bottom

**When to skip pipe:**
- Just 1-2 operations (direct call is fine)
- The operations don't naturally chain

### 2. Option: Handle Missing Values Without null Checks

Stop writing `if (x !== null && x !== undefined)` everywhere.

```typescript
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

// Before: Defensive null checking
function getUserCity(user: User | null): string {
  if (user === null) return 'Unknown'
  if (user.address === null) return 'Unknown'
  if (user.address.city === null) return 'Unknown'
  return user.address.city
}

// After: Chain through potential missing values
const getUserCity = (user: User | null): string =>
  pipe(
    O.fromNullable(user),
    O.flatMap(u => O.fromNullable(u.address)),
    O.flatMap(a => O.fromNullable(a.city)),
    O.getOrElse(() => 'Unknown')
  )
```

**Plain language translation:**
- `O.fromNullable(x)` = "wrap this value, treating null/undefined as 'nothing'"
- `O.flatMap(fn)` = "if we have something, apply this function"
- `O.getOrElse(() => default)` = "unwrap, or use this default if nothing"

### 3. Either: Make Errors Explicit

Stop throwing exceptions for expected failures. Return errors as values.

```typescript
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

// Before: Hidden failure mode
function parseAge(input: string): number {
  const age = parseInt(input, 10)
  if (isNaN(age)) throw new Error('Invalid age')
  if (age < 0) throw new Error('Age cannot be negative')
  return age
}

// After: Errors are visible in the type
function parseAge(input: string): E.Either<string, number> {
  const age = parseInt(input, 10)
  if (isNaN(age)) return E.left('Invalid age')
  if (age < 0) return E.left('Age cannot be negative')
  return E.right(age)
}

// Using it
const result = parseAge(userInput)
if (E.isRight(result)) {
  console.log(`Age is ${result.right}`)
} else {
  console.log(`Error: ${result.left}`)
}
```

**Plain language translation:**
- `E.right(value)` = "success with this value"
- `E.left(error)` = "failure with this error"
- `E.isRight(x)` = "did it succeed?"

### 4. Map: Transform Without Unpacking

Transform values inside containers without extracting them first.

```typescript
import * as O from 'fp-ts/Option'
import * as E from 'fp-ts/Either'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'

// Transform inside Option
const maybeUser: O.Option<User> = O.some({ name: 'Alice', age: 30 })
const maybeName: O.Option<string> = pipe(
  maybeUser,
  O.map(user => user.name)
)

// Transform inside Either
const result: E.Either<Error, number> = E.right(5)
const doubled: E.Either<Error, number> = pipe(
  result,
  E.map(n => n * 2)
)

// Transform arrays (same concept!)
const numbers = [1, 2, 3]
const doubled = pipe(
  numbers,
  A.map(n => n * 2)
)
```

### 5. FlatMap: Chain Operations That Might Fail

When each step might fail, chain them together.

```typescript
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

const parseJSON = (s: string): E.Either<string, unknown> =>
  E.tryCatch(() => JSON.parse(s), () => 'Invalid JSON')

const extractEmail = (data: unknown): E.Either<string, string> => {
  if (typeof data === 'object' && data !== null && 'email' in data) {
    return E.right((data as { email: string }).email)
  }
  return E.left('No email field')
}

const validateEmail = (email: string): E.Either<string, string> =>
  email.includes('@') ? E.right(email) : E.left('Invalid email format')

// Chain all steps - if any fails, the whole thing fails
const getValidEmail = (input: string): E.Either<string, string> =>
  pipe(
    parseJSON(input),
    E.flatMap(extractEmail),
    E.flatMap(validateEmail)
  )

// Success path: Right('user@example.com')
// Any failure: Left('specific error message')
```

**Plain language:** `flatMap` means "if this succeeded, try the next thing"

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @fp-pragmatic to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @fp-pragmatic against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @fp-pragmatic for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @fp-pragmatic using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- > If functional programming makes your code harder to read, don't use it.
- FP is a tool, not a religion.
- Skip it when it doesn't.
- --- Before using any FP pattern, ask: "Would a junior developer understand this?" ### Too Clever (Avoid) typescript const result = pipe( data, A.filter(flow(prop('status'), equals('active'))), A.map(flow(prop('value'), multiply(2))), A.reduce(monoid.concat, monoid.empty), O.fromPredicate(gt(threshold)) ) ### Just Right (Prefer) typescript const activeItems = data.filter(item => item.status === 'active') const doubledValues = activeItems.map(item => item.value 2) const total = doubledValues.reduce((sum, val) => sum + val, 0) const result = total > threshold ?
- O.some(total) : O.none ### The Middle Ground (Often Best) typescript const result = pipe( data, A.filter(item => item.status === 'active'), A.map(item => item.value 2), A.reduce(0, (sum, val) => sum + val), total => total > threshold ?
- O.some(total) : O.none ) `` ---
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: The Golden Rule

> **If functional programming makes your code harder to read, don't use it.**

FP is a tool, not a religion. Use it when it helps. Skip it when it doesn't.

---

#### Imported: The Readability Rule

Before using any FP pattern, ask: **"Would a junior developer understand this?"**

### Too Clever (Avoid)

```typescript
const result = pipe(
  data,
  A.filter(flow(prop('status'), equals('active'))),
  A.map(flow(prop('value'), multiply(2))),
  A.reduce(monoid.concat, monoid.empty),
  O.fromPredicate(gt(threshold))
)
```

### Just Right (Prefer)

```typescript
const activeItems = data.filter(item => item.status === 'active')
const doubledValues = activeItems.map(item => item.value * 2)
const total = doubledValues.reduce((sum, val) => sum + val, 0)
const result = total > threshold ? O.some(total) : O.none
```

### The Middle Ground (Often Best)

```typescript
const result = pipe(
  data,
  A.filter(item => item.status === 'active'),
  A.map(item => item.value * 2),
  A.reduce(0, (sum, val) => sum + val),
  total => total > threshold ? O.some(total) : O.none
)
```

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/fp-pragmatic`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ffuf-web-fuzzing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@figma-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Wins: Easy Changes That Improve Code Today

### 1. Replace Nested Ternaries with pipe + fold

```typescript
// Before: Nested ternary nightmare
const message = user === null
  ? 'No user'
  : user.isAdmin
    ? `Admin: ${user.name}`
    : `User: ${user.name}`

// After: Clear case handling
const message = pipe(
  O.fromNullable(user),
  O.fold(
    () => 'No user',
    (u) => u.isAdmin ? `Admin: ${u.name}` : `User: ${u.name}`
  )
)
```

### 2. Replace try-catch with tryCatch

```typescript
// Before: try-catch everywhere
let config
try {
  config = JSON.parse(rawConfig)
} catch {
  config = defaultConfig
}

// After: One-liner
const config = pipe(
  E.tryCatch(() => JSON.parse(rawConfig), () => 'parse error'),
  E.getOrElse(() => defaultConfig)
)
```

### 3. Replace undefined Returns with Option

```typescript
// Before: Caller might forget to check
function findUser(id: string): User | undefined {
  return users.find(u => u.id === id)
}

// After: Type forces caller to handle missing case
function findUser(id: string): O.Option<User> {
  return O.fromNullable(users.find(u => u.id === id))
}
```

### 4. Replace Error Strings with Typed Errors

```typescript
// Before: Just strings
function validate(data: unknown): E.Either<string, User> {
  // ...
  return E.left('validation failed')
}

// After: Structured errors
type ValidationError = {
  field: string
  message: string
}

function validate(data: unknown): E.Either<ValidationError, User> {
  // ...
  return E.left({ field: 'email', message: 'Invalid format' })
}
```

### 5. Use const Assertions for Error Types

```typescript
// Create specific error types without classes
const NotFound = (id: string) => ({ _tag: 'NotFound' as const, id })
const Unauthorized = { _tag: 'Unauthorized' as const }
const ValidationFailed = (errors: string[]) =>
  ({ _tag: 'ValidationFailed' as const, errors })

type AppError =
  | ReturnType<typeof NotFound>
  | typeof Unauthorized
  | ReturnType<typeof ValidationFailed>

// Now you can pattern match
const handleError = (error: AppError): string => {
  switch (error._tag) {
    case 'NotFound': return `Item ${error.id} not found`
    case 'Unauthorized': return 'Please log in'
    case 'ValidationFailed': return error.errors.join(', ')
  }
}
```

---

#### Imported: Common Refactors: Before and After

### Callback Hell to Pipe

```typescript
// Before
fetchUser(id, (user) => {
  if (!user) return handleNoUser()
  fetchPosts(user.id, (posts) => {
    if (!posts) return handleNoPosts()
    fetchComments(posts[0].id, (comments) => {
      render(user, posts, comments)
    })
  })
})

// After (with TaskEither for async)
import * as TE from 'fp-ts/TaskEither'

const loadData = (id: string) =>
  pipe(
    fetchUser(id),
    TE.flatMap(user => pipe(
      fetchPosts(user.id),
      TE.map(posts => ({ user, posts }))
    )),
    TE.flatMap(({ user, posts }) => pipe(
      fetchComments(posts[0].id),
      TE.map(comments => ({ user, posts, comments }))
    ))
  )

// Execute
const result = await loadData('123')()
pipe(
  result,
  E.fold(handleError, ({ user, posts, comments }) => render(user, posts, comments))
)
```

### Multiple null Checks to Option Chain

```typescript
// Before
function getManagerEmail(employee: Employee): string | null {
  if (!employee.department) return null
  if (!employee.department.manager) return null
  if (!employee.department.manager.email) return null
  return employee.department.manager.email
}

// After
const getManagerEmail = (employee: Employee): O.Option<string> =>
  pipe(
    O.fromNullable(employee.department),
    O.flatMap(d => O.fromNullable(d.manager)),
    O.flatMap(m => O.fromNullable(m.email))
  )

// Use it
pipe(
  getManagerEmail(employee),
  O.fold(
    () => sendToDefault(),
    (email) => sendTo(email)
  )
)
```

### Validation with Multiple Checks

```typescript
// Before: Throws on first error
function validateUser(data: unknown): User {
  if (!data || typeof data !== 'object') throw new Error('Must be object')
  const obj = data as Record<string, unknown>
  if (typeof obj.email !== 'string') throw new Error('Email required')
  if (!obj.email.includes('@')) throw new Error('Invalid email')
  if (typeof obj.age !== 'number') throw new Error('Age required')
  if (obj.age < 0) throw new Error('Age must be positive')
  return obj as User
}

// After: Returns first error, type-safe
const validateUser = (data: unknown): E.Either<string, User> =>
  pipe(
    E.Do,
    E.bind('obj', () =>
      typeof data === 'object' && data !== null
        ? E.right(data as Record<string, unknown>)
        : E.left('Must be object')
    ),
    E.bind('email', ({ obj }) =>
      typeof obj.email === 'string' && obj.email.includes('@')
        ? E.right(obj.email)
        : E.left('Valid email required')
    ),
    E.bind('age', ({ obj }) =>
      typeof obj.age === 'number' && obj.age >= 0
        ? E.right(obj.age)
        : E.left('Valid age required')
    ),
    E.map(({ email, age }) => ({ email, age }))
  )
```

### Promise Chain to TaskEither

```typescript
// Before
async function processOrder(orderId: string): Promise<Receipt> {
  const order = await fetchOrder(orderId)
  if (!order) throw new Error('Order not found')

  const validated = await validateOrder(order)
  if (!validated.success) throw new Error(validated.error)

  const payment = await processPayment(validated.order)
  if (!payment.success) throw new Error('Payment failed')

  return generateReceipt(payment)
}

// After
const processOrder = (orderId: string): TE.TaskEither<string, Receipt> =>
  pipe(
    fetchOrderTE(orderId),
    TE.flatMap(order =>
      order ? TE.right(order) : TE.left('Order not found')
    ),
    TE.flatMap(validateOrderTE),
    TE.flatMap(processPaymentTE),
    TE.map(generateReceipt)
  )
```

---

#### Imported: Cheat Sheet

| What you want | Plain language | fp-ts |
|--------------|----------------|-------|
| Handle null/undefined | "Wrap this nullable" | `O.fromNullable(x)` |
| Default for missing | "Use this if nothing" | `O.getOrElse(() => default)` |
| Transform if present | "If something, change it" | `O.map(fn)` |
| Chain nullable operations | "If something, try this" | `O.flatMap(fn)` |
| Return success | "Worked, here's the value" | `E.right(value)` |
| Return failure | "Failed, here's why" | `E.left(error)` |
| Wrap throwing function | "Try this, catch errors" | `E.tryCatch(fn, onError)` |
| Handle both cases | "Do this for error, that for success" | `E.fold(onLeft, onRight)` |
| Chain operations | "Then do this, then that" | `pipe(x, fn1, fn2, fn3)` |

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
