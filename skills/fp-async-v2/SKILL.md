---
name: fp-async-v2
description: "Practical Async Patterns with fp-ts workflow skill. Use this skill when the user needs Practical async patterns using TaskEither - clean pipelines instead of try/catch hell, with real API examples and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["fp-ts", "typescript", "async", "error-handling", "practical", "promises", "api", "fetch"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "kadu"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Practical Async Patterns with fp-ts

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/fp-async` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Practical Async Patterns with fp-ts Stop writing nested try/catch blocks. Stop losing error context. Start building clean async pipelines that handle errors properly. TaskEither is simply an async operation that tracks success or failure. That's it. No fancy terminology needed.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. Wrapping Promises Safely, 2. Chaining Async Operations, 3. Parallel vs Sequential Execution, 4. Error Recovery Patterns, 6. Handling Results, Before/After Summary.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need async error handling in TypeScript with TaskEither.
- The task involves wrapping Promises, composing API calls, or replacing nested try/catch flows.
- You want practical fp-ts async patterns instead of academic explanations.
- Use when the request clearly matches the imported source intent: Practical async patterns using TaskEither - clean pipelines instead of try/catch hell, with real API examples.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: 1. Wrapping Promises Safely

### The Problem: Try/Catch Everywhere

```typescript
// BEFORE: Try/catch hell
async function getUserData(userId: string) {
  try {
    const response = await fetch(`/api/users/${userId}`)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const user = await response.json()

    try {
      const posts = await fetch(`/api/users/${userId}/posts`)
      if (!posts.ok) {
        throw new Error(`HTTP ${posts.status}`)
      }
      const postsData = await posts.json()
      return { user, posts: postsData }
    } catch (postsError) {
      // Now what? Return partial data? Rethrow? Log?
      console.error('Failed to fetch posts:', postsError)
      return { user, posts: [] }
    }
  } catch (error) {
    // Lost all context about what failed
    console.error('Something failed:', error)
    throw error
  }
}
```

### The Solution: Wrap Once, Handle Cleanly

```typescript
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

// One wrapper function - reuse everywhere
const fetchJson = <T>(url: string): TE.TaskEither<Error, T> =>
  TE.tryCatch(
    async () => {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      return response.json()
    },
    (error) => error instanceof Error ? error : new Error(String(error))
  )

// AFTER: Clean and composable
const getUser = (userId: string) => fetchJson<User>(`/api/users/${userId}`)
const getPosts = (userId: string) => fetchJson<Post[]>(`/api/users/${userId}/posts`)
```

### tryCatch Explained

`TE.tryCatch` takes two things:
1. An async function that might throw
2. A function to convert the thrown value into your error type

```typescript
TE.tryCatch(
  () => somePromise,           // The async work
  (thrown) => toError(thrown)  // Convert failures to your error type
)
```

### Creating Success and Failure Values

```typescript
// Wrap a value as success
const success = TE.right<Error, number>(42)

// Wrap a value as failure
const failure = TE.left<Error, number>(new Error('Nope'))

// From a nullable value (null/undefined becomes error)
const fromNullable = TE.fromNullable(new Error('Value was null'))
const result = fromNullable(maybeUser) // TaskEither<Error, User>

// From a condition
const mustBePositive = TE.fromPredicate(
  (n: number) => n > 0,
  (n) => new Error(`Expected positive, got ${n}`)
)
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @fp-async-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/fp-async-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/fp-async-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @fp-async-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: 5. Real API Examples

### Complete Fetch Wrapper

```typescript
// types.ts
interface ApiError {
  code: string
  message: string
  status: number
  details?: unknown
}

// api.ts
const createApiError = (
  code: string,
  message: string,
  status: number,
  details?: unknown
): ApiError => ({ code, message, status, details })

const request = <T>(
  url: string,
  options: RequestInit = {}
): TE.TaskEither<ApiError, T> =>
  TE.tryCatch(
    async () => {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw createApiError(
          body.code || 'HTTP_ERROR',
          body.message || response.statusText,
          response.status,
          body
        )
      }

      // Handle 204 No Content
      if (response.status === 204) {
        return undefined as T
      }

      return response.json()
    },
    (error): ApiError => {
      if (typeof error === 'object' && error !== null && 'code' in error) {
        return error as ApiError
      }
      return createApiError(
        'NETWORK_ERROR',
        error instanceof Error ? error.message : 'Request failed',
        0
      )
    }
  )

// API client
const api = {
  get: <T>(url: string) => request<T>(url),

  post: <T>(url: string, body: unknown) =>
    request<T>(url, {
      method: 'POST',
      body: JSON.stringify(body)
    }),

  put: <T>(url: string, body: unknown) =>
    request<T>(url, {
      method: 'PUT',
      body: JSON.stringify(body)
    }),

  delete: (url: string) =>
    request<void>(url, { method: 'DELETE' }),
}

// Usage
const getUser = (id: string) => api.get<User>(`/api/users/${id}`)
const createUser = (data: CreateUserDto) => api.post<User>('/api/users', data)
const updateUser = (id: string, data: UpdateUserDto) => api.put<User>(`/api/users/${id}`, data)
const deleteUser = (id: string) => api.delete(`/api/users/${id}`)
```

### Database Operations (Prisma Example)

```typescript
import { PrismaClient, Prisma } from '@prisma/client'

type DbError =
  | { _tag: 'NotFound'; entity: string; id: string }
  | { _tag: 'UniqueViolation'; field: string }
  | { _tag: 'ConnectionError'; cause: unknown }

const prisma = new PrismaClient()

const wrapPrisma = <T>(
  operation: () => Promise<T>
): TE.TaskEither<DbError, T> =>
  TE.tryCatch(
    operation,
    (error): DbError => {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          const field = (error.meta?.target as string[])?.join(', ') || 'unknown'
          return { _tag: 'UniqueViolation', field }
        }
        if (error.code === 'P2025') {
          return { _tag: 'NotFound', entity: 'Record', id: 'unknown' }
        }
      }
      return { _tag: 'ConnectionError', cause: error }
    }
  )

// Repository pattern
const userRepository = {
  findById: (id: string): TE.TaskEither<DbError, User> =>
    pipe(
      wrapPrisma(() => prisma.user.findUnique({ where: { id } })),
      TE.chain(user =>
        user
          ? TE.right(user)
          : TE.left({ _tag: 'NotFound', entity: 'User', id })
      )
    ),

  findByEmail: (email: string): TE.TaskEither<DbError, User | null> =>
    wrapPrisma(() => prisma.user.findUnique({ where: { email } })),

  create: (data: CreateUserInput): TE.TaskEither<DbError, User> =>
    wrapPrisma(() => prisma.user.create({ data })),

  update: (id: string, data: UpdateUserInput): TE.TaskEither<DbError, User> =>
    wrapPrisma(() => prisma.user.update({ where: { id }, data })),

  delete: (id: string): TE.TaskEither<DbError, void> =>
    pipe(
      wrapPrisma(() => prisma.user.delete({ where: { id } })),
      TE.map(() => undefined)
    ),
}

// Service using repository
const createUserService = (input: CreateUserInput) =>
  pipe(
    // Check email doesn't exist
    userRepository.findByEmail(input.email),
    TE.chain(existing =>
      existing
        ? TE.left({ _tag: 'UniqueViolation' as const, field: 'email' })
        : TE.right(undefined)
    ),
    // Create user
    TE.chain(() => userRepository.create(input))
  )
```

### File Operations (Node.js)

```typescript
import * as fs from 'fs/promises'
import * as path from 'path'

type FileError =
  | { _tag: 'NotFound'; path: string }
  | { _tag: 'PermissionDenied'; path: string }
  | { _tag: 'IoError'; cause: unknown }

const toFileError = (error: unknown, filePath: string): FileError => {
  if (error instanceof Error) {
    if ('code' in error) {
      if (error.code === 'ENOENT') return { _tag: 'NotFound', path: filePath }
      if (error.code === 'EACCES') return { _tag: 'PermissionDenied', path: filePath }
    }
  }
  return { _tag: 'IoError', cause: error }
}

const readFile = (filePath: string): TE.TaskEither<FileError, string> =>
  TE.tryCatch(
    () => fs.readFile(filePath, 'utf-8'),
    (e) => toFileError(e, filePath)
  )

const writeFile = (filePath: string, content: string): TE.TaskEither<FileError, void> =>
  TE.tryCatch(
    () => fs.writeFile(filePath, content, 'utf-8'),
    (e) => toFileError(e, filePath)
  )

const readJson = <T>(filePath: string): TE.TaskEither<FileError | { _tag: 'ParseError'; cause: unknown }, T> =>
  pipe(
    readFile(filePath),
    TE.chain(content =>
      TE.tryCatch(
        () => Promise.resolve(JSON.parse(content)),
        (e): { _tag: 'ParseError'; cause: unknown } => ({ _tag: 'ParseError', cause: e })
      )
    )
  )

// Usage: Load config with fallback
const loadConfig = () =>
  pipe(
    readJson<Config>('./config.json'),
    TE.orElse(() => readJson<Config>('./config.default.json')),
    TE.getOrElse(() => T.of(defaultConfig))
  )
```

---

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/fp-async`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: 7. Common Patterns Reference

### Quick Transformations

```typescript
// Transform success value
TE.map(user => user.name)

// Transform error
TE.mapLeft(error => ({ ...error, timestamp: Date.now() }))

// Transform both at once
TE.bimap(
  error => enhanceError(error),
  user => user.profile
)
```

### Filtering

```typescript
// Fail if condition not met
pipe(
  fetchUser(userId),
  TE.filterOrElse(
    user => user.isActive,
    user => new Error(`User ${user.id} is not active`)
  )
)
```

### Side Effects Without Changing Value

```typescript
// Log on success, keep the value unchanged
pipe(
  fetchUser(userId),
  TE.tap(user => TE.fromIO(() => console.log(`Fetched user: ${user.id}`)))
)

// Log on error, keep the error unchanged
pipe(
  fetchUser(userId),
  TE.tapError(error => TE.fromIO(() => console.error(`Failed: ${error.message}`)))
)

// chainFirst is like tap but for operations that return TaskEither
pipe(
  createUser(userData),
  TE.chainFirst(user => sendWelcomeEmail(user.email))
) // Returns the created user, not the email result
```

### Converting From Other Types

```typescript
// From Either
const fromEither = TE.fromEither(E.right(42))

// From Option
import * as O from 'fp-ts/Option'
const fromOption = TE.fromOption(() => new Error('Value was None'))
const result = fromOption(O.some(42))

// From boolean
const fromBoolean = TE.fromPredicate(
  (x: number) => x > 0,
  () => new Error('Must be positive')
)
```

---

#### Imported: Quick Reference Card

| What you want | How to do it |
|---------------|--------------|
| Wrap a promise | `TE.tryCatch(() => promise, toError)` |
| Create success | `TE.right(value)` |
| Create failure | `TE.left(error)` |
| Transform value | `TE.map(fn)` |
| Transform error | `TE.mapLeft(fn)` |
| Chain async ops | `TE.chain(fn)` or `TE.flatMap(fn)` |
| Run in parallel | `sequenceT(TE.ApplyPar)(te1, te2, te3)` |
| Array in parallel | `TE.traverseArray(fn)(items)` |
| Recover from error | `TE.orElse(fn)` |
| Use default value | `TE.getOrElse(() => T.of(default))` |
| Handle both cases | `TE.fold(onError, onSuccess)` |
| Build up context | `TE.Do` + `TE.bind('name', () => te)` |
| Log without changing | `TE.tap(fn)` |
| Filter with error | `TE.filterOrElse(pred, toError)` |

---

#### Imported: 2. Chaining Async Operations

### The Problem: Callback Hell / Nested Awaits

```typescript
// BEFORE: Deeply nested, hard to follow
async function processOrder(orderId: string) {
  try {
    const order = await fetchOrder(orderId)
    if (!order) throw new Error('Order not found')

    try {
      const user = await fetchUser(order.userId)
      if (!user) throw new Error('User not found')

      try {
        const inventory = await checkInventory(order.items)
        if (!inventory.available) throw new Error('Out of stock')

        try {
          const payment = await chargePayment(user, order.total)
          if (!payment.success) throw new Error('Payment failed')

          try {
            const shipment = await createShipment(order, user)
            return { order, shipment, payment }
          } catch (e) {
            // Refund payment? Log? What's the state now?
            await refundPayment(payment.id)
            throw e
          }
        } catch (e) {
          throw e
        }
      } catch (e) {
        throw e
      }
    } catch (e) {
      throw e
    }
  } catch (e) {
    console.error('Order processing failed', e)
    throw e
  }
}
```

### The Solution: Clean Pipelines with chain

```typescript
// AFTER: Flat, readable pipeline
const processOrder = (orderId: string) =>
  pipe(
    fetchOrder(orderId),
    TE.chain(order => fetchUser(order.userId)),
    TE.chain(user =>
      pipe(
        checkInventory(order.items),
        TE.chain(inventory => chargePayment(user, order.total))
      )
    ),
    TE.chain(payment => createShipment(order, user, payment))
  )
```

### chain vs map

Use `map` when your transformation is synchronous and can't fail:

```typescript
pipe(
  fetchUser(userId),
  TE.map(user => user.name.toUpperCase())  // Just transforms the value
)
```

Use `chain` (or `flatMap`) when your transformation is async or can fail:

```typescript
pipe(
  fetchUser(userId),
  TE.chain(user => fetchOrders(user.id))  // Returns another TaskEither
)
```

### Building Context with Do Notation

When you need values from multiple steps:

```typescript
// BEFORE: Have to thread values through manually
const processOrderManual = (orderId: string) =>
  pipe(
    fetchOrder(orderId),
    TE.chain(order =>
      pipe(
        fetchUser(order.userId),
        TE.chain(user =>
          pipe(
            chargePayment(user, order.total),
            TE.map(payment => ({ order, user, payment }))
          )
        )
      )
    )
  )

// AFTER: Do notation keeps everything accessible
const processOrder = (orderId: string) =>
  pipe(
    TE.Do,
    TE.bind('order', () => fetchOrder(orderId)),
    TE.bind('user', ({ order }) => fetchUser(order.userId)),
    TE.bind('payment', ({ user, order }) => chargePayment(user, order.total)),
    TE.bind('shipment', ({ order, user }) => createShipment(order, user)),
    TE.map(({ order, payment, shipment }) => ({
      orderId: order.id,
      paymentId: payment.id,
      trackingNumber: shipment.tracking
    }))
  )
```

---

#### Imported: 3. Parallel vs Sequential Execution

### When to Use Each

**Sequential** (one after another):
- When each operation depends on the previous result
- When you need to respect rate limits
- When order matters

**Parallel** (all at once):
- When operations are independent
- When you want speed
- When fetching multiple resources by ID

### Sequential Chaining

```typescript
// Operations depend on each other - must be sequential
const getUserWithOrg = (userId: string) =>
  pipe(
    fetchUser(userId),                              // First: get user
    TE.chain(user => fetchTeam(user.teamId)),      // Then: get their team
    TE.chain(team => fetchOrganization(team.orgId)) // Finally: get org
  )
```

### Parallel Execution

```typescript
import { sequenceT } from 'fp-ts/Apply'

// Independent operations - run in parallel
const getDashboardData = (userId: string) =>
  sequenceT(TE.ApplyPar)(
    fetchUser(userId),
    fetchNotifications(userId),
    fetchRecentActivity(userId)
  ) // Returns TaskEither<Error, [User, Notification[], Activity[]]>

// With destructuring:
const getDashboard = (userId: string) =>
  pipe(
    sequenceT(TE.ApplyPar)(
      fetchUser(userId),
      fetchNotifications(userId),
      fetchRecentActivity(userId)
    ),
    TE.map(([user, notifications, activities]) => ({
      user,
      notifications,
      activities,
      unreadCount: notifications.filter(n => !n.read).length
    }))
  )
```

### Parallel Array Operations

```typescript
// Fetch multiple users in parallel
const userIds = ['1', '2', '3', '4', '5']

// TE.traverseArray runs all fetches in parallel
const fetchAllUsers = pipe(
  userIds,
  TE.traverseArray(fetchUser)
) // TaskEither<Error, readonly User[]>

// Note: Fails fast - if ANY request fails, the whole thing fails
// All errors after the first are lost
```

### Parallel with Batch Control

When you need to limit concurrent requests:

```typescript
const chunk = <T>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

// Process in batches of 5 concurrent requests
const fetchUsersWithLimit = (userIds: string[]) => {
  const batches = chunk(userIds, 5)

  return pipe(
    batches,
    // Process batches sequentially
    TE.traverseArray(batch =>
      // But within each batch, run in parallel
      pipe(batch, TE.traverseArray(fetchUser))
    ),
    TE.map(results => results.flat())
  )
}
```

### Sequential When Parallel Looks Tempting

```typescript
// WRONG: This looks parallel but order might matter for DB operations
const createUserAndProfile = (userData: UserData) =>
  sequenceT(TE.ApplyPar)(
    createUser(userData),           // Creates user with ID
    createProfile(userData.profile) // Needs user ID - race condition!
  )

// RIGHT: Sequential when there's a dependency
const createUserAndProfile = (userData: UserData) =>
  pipe(
    createUser(userData),
    TE.chain(user =>
      pipe(
        createProfile(user.id, userData.profile),
        TE.map(profile => ({ user, profile }))
      )
    )
  )
```

---

#### Imported: 4. Error Recovery Patterns

### Fallback to Alternative

```typescript
// Try primary API, fall back to cache
const getUserWithFallback = (userId: string) =>
  pipe(
    fetchUserFromApi(userId),
    TE.orElse(() => fetchUserFromCache(userId))
  )

// Chain multiple fallbacks
const getConfigRobust = () =>
  pipe(
    fetchRemoteConfig(),
    TE.orElse(() => loadLocalConfig()),
    TE.orElse(() => TE.right(defaultConfig))
  )
```

### Conditional Recovery

```typescript
// Only recover from specific errors
const fetchUserOrCreate = (userId: string) =>
  pipe(
    fetchUser(userId),
    TE.orElse(error =>
      error.message.includes('404') || error.message.includes('not found')
        ? createDefaultUser(userId)
        : TE.left(error)  // Re-throw other errors
    )
  )
```

### Typed Error Recovery

```typescript
type ApiError =
  | { _tag: 'NotFound'; id: string }
  | { _tag: 'NetworkError'; cause: Error }
  | { _tag: 'Unauthorized' }

const fetchUser = (id: string): TE.TaskEither<ApiError, User> =>
  TE.tryCatch(
    async () => {
      const res = await fetch(`/api/users/${id}`)
      if (res.status === 404) throw { _tag: 'NotFound', id }
      if (res.status === 401) throw { _tag: 'Unauthorized' }
      if (!res.ok) throw { _tag: 'NetworkError', cause: new Error(`HTTP ${res.status}`) }
      return res.json()
    },
    (e): ApiError =>
      typeof e === 'object' && e !== null && '_tag' in e
        ? e as ApiError
        : { _tag: 'NetworkError', cause: e instanceof Error ? e : new Error(String(e)) }
  )

// Handle specific errors differently
const getUserOrGuest = (userId: string) =>
  pipe(
    fetchUser(userId),
    TE.orElse(error => {
      switch (error._tag) {
        case 'NotFound':
          return TE.right(createGuestUser())
        case 'Unauthorized':
          return TE.left(error) // Propagate auth errors
        case 'NetworkError':
          return fetchUserFromCache(userId) // Try cache on network issues
      }
    })
  )
```

### Retry with Exponential Backoff

```typescript
import * as T from 'fp-ts/Task'

const wait = (ms: number): T.Task<void> =>
  () => new Promise(resolve => setTimeout(resolve, ms))

const retry = <E, A>(
  operation: TE.TaskEither<E, A>,
  maxAttempts: number,
  baseDelayMs: number = 1000
): TE.TaskEither<E, A> => {
  const attempt = (remaining: number, delay: number): TE.TaskEither<E, A> =>
    pipe(
      operation,
      TE.orElse(error =>
        remaining <= 1
          ? TE.left(error)
          : pipe(
              TE.fromTask(wait(delay)),
              TE.chain(() => attempt(remaining - 1, delay * 2))
            )
      )
    )

  return attempt(maxAttempts, baseDelayMs)
}

// Usage
const fetchUserWithRetry = (userId: string) =>
  retry(fetchUser(userId), 3, 1000)
  // Attempts: immediate, 1s, 2s delays between retries
```

### Default Values

```typescript
// Get value or use default (removes the error channel)
const getUsernameOrDefault = (userId: string) =>
  pipe(
    fetchUser(userId),
    TE.map(user => user.name),
    TE.getOrElse(() => T.of('Anonymous'))
  ) // Task<string> - no more error tracking

// Keep error channel but provide fallback value
const getUserWithDefault = (userId: string) =>
  pipe(
    fetchUser(userId),
    TE.orElse(() => TE.right(defaultUser))
  ) // TaskEither<Error, User> - error channel still exists but always succeeds
```

---

#### Imported: 6. Handling Results

### Pattern Matching with fold/match

```typescript
// fold: Handle both success and failure, returns a Task (no more error channel)
const displayResult = pipe(
  fetchUser(userId),
  TE.fold(
    (error) => T.of(`Error: ${error.message}`),
    (user) => T.of(`Welcome, ${user.name}!`)
  )
) // Task<string>

// Execute and get the string
const message = await displayResult()
```

### Getting the Raw Either

```typescript
// Sometimes you need to work with the Either directly
const result = await fetchUser(userId)() // Either<Error, User>

if (E.isLeft(result)) {
  console.error('Failed:', result.left)
} else {
  console.log('User:', result.right)
}
```

### In Express/Hono Handlers

```typescript
// Express
app.get('/users/:id', async (req, res) => {
  const result = await pipe(
    fetchUser(req.params.id),
    TE.fold(
      (error) => T.of({ status: 500, body: { error: error.message } }),
      (user) => T.of({ status: 200, body: user })
    )
  )()

  res.status(result.status).json(result.body)
})

// Cleaner with a helper
const sendResult = <E, A>(
  res: Response,
  te: TE.TaskEither<E, A>,
  errorStatus: number = 500
) =>
  pipe(
    te,
    TE.fold(
      (error) => T.of(res.status(errorStatus).json({ error })),
      (data) => T.of(res.json(data))
    )
  )()

app.get('/users/:id', async (req, res) => {
  await sendResult(res, fetchUser(req.params.id), 404)
})
```

---

#### Imported: Before/After Summary

### Fetching Data

```typescript
// BEFORE
async function getUser(id: string) {
  try {
    const res = await fetch(`/api/users/${id}`)
    if (!res.ok) throw new Error('Not found')
    return await res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}

// AFTER
const getUser = (id: string) =>
  TE.tryCatch(
    async () => {
      const res = await fetch(`/api/users/${id}`)
      if (!res.ok) throw new Error('Not found')
      return res.json()
    },
    E.toError
  )
```

### Chained Operations

```typescript
// BEFORE
async function processOrder(orderId: string) {
  const order = await fetchOrder(orderId)
  if (!order) throw new Error('No order')
  const user = await fetchUser(order.userId)
  if (!user) throw new Error('No user')
  const result = await chargePayment(user, order.total)
  return result
}

// AFTER
const processOrder = (orderId: string) =>
  pipe(
    TE.Do,
    TE.bind('order', () => fetchOrder(orderId)),
    TE.bind('user', ({ order }) => fetchUser(order.userId)),
    TE.chain(({ user, order }) => chargePayment(user, order.total))
  )
```

### Error Recovery

```typescript
// BEFORE
async function getData(id: string) {
  try {
    return await fetchFromApi(id)
  } catch {
    try {
      return await fetchFromCache(id)
    } catch {
      return defaultValue
    }
  }
}

// AFTER
const getData = (id: string) =>
  pipe(
    fetchFromApi(id),
    TE.orElse(() => fetchFromCache(id)),
    TE.getOrElse(() => T.of(defaultValue))
  )
```
