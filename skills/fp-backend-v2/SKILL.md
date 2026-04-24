---
name: fp-backend-v2
description: "fp-ts Backend Patterns workflow skill. Use this skill when the user needs Functional programming patterns for Node.js/Deno backend development using fp-ts, ReaderTaskEither, and functional dependency injection and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["fp-ts", "typescript", "backend", "functional-programming", "node", "deno", "dependency-injection", "reader-task-either"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "kadu"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# fp-ts Backend Patterns

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/fp-backend` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# fp-ts Backend Patterns Functional programming patterns for building type-safe, testable backend services using fp-ts.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Service Layer Patterns, Functional Dependency Injection, Database Operations, Middleware Patterns, Error Handling Patterns.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You are building or refactoring a Node.js or Deno backend with fp-ts.
- The task involves dependency injection, service composition, or typed backend errors with ReaderTaskEither.
- You need functional backend architecture patterns rather than isolated utility snippets.
- Use when the request clearly matches the imported source intent: Functional programming patterns for Node.js/Deno backend development using fp-ts, ReaderTaskEither, and functional dependency injection.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Core Concepts

### ReaderTaskEither (RTE)

The `ReaderTaskEither<R, E, A>` type is the backbone of functional backend development:
- **R** (Reader): Dependencies/environment (database, config, logger)
- **E** (Either left): Error type
- **A** (Either right): Success value

```typescript
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

// Define your dependencies
type Deps = {
  db: DatabaseClient
  logger: Logger
  config: Config
}

// Define domain errors
type AppError =
  | { _tag: 'NotFound'; resource: string; id: string }
  | { _tag: 'ValidationError'; message: string }
  | { _tag: 'DatabaseError'; cause: unknown }
  | { _tag: 'Unauthorized'; reason: string }

// A service function
const getUser = (id: string): RTE.ReaderTaskEither<Deps, AppError, User> =>
  pipe(
    RTE.ask<Deps>(),
    RTE.flatMap(({ db, logger }) =>
      pipe(
        RTE.fromTaskEither(db.users.findById(id)),
        RTE.mapLeft((e): AppError => ({ _tag: 'DatabaseError', cause: e })),
        RTE.flatMap(user =>
          user
            ? RTE.right(user)
            : RTE.left({ _tag: 'NotFound', resource: 'User', id })
        ),
        RTE.tap(user => RTE.fromIO(() => logger.info(`Found user: ${user.id}`)))
      )
    )
  )
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @fp-backend-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @fp-backend-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @fp-backend-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @fp-backend-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/fp-backend`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@fastapi-pro-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@fastapi-router-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@fastapi-templates-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@favicon-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference

### Common Imports

```typescript
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'
import * as T from 'fp-ts/Task'
import { pipe, flow } from 'fp-ts/function'
```

### RTE Cheat Sheet

| Operation | Description |
|-----------|-------------|
| `RTE.right(a)` | Lift value into success |
| `RTE.left(e)` | Create error |
| `RTE.ask<R>()` | Get dependencies |
| `RTE.fromTaskEither(te)` | Lift TaskEither |
| `RTE.fromEither(e)` | Lift Either |
| `RTE.fromOption(onNone)(o)` | Lift Option |
| `RTE.flatMap(f)` | Chain operations |
| `RTE.map(f)` | Transform success |
| `RTE.mapLeft(f)` | Transform error |
| `RTE.tap(f)` | Side effect on success |
| `RTE.tapError(f)` | Side effect on error |
| `RTE.orElse(f)` | Recover from error |
| `RTE.getOrElse(f)` | Extract with fallback |

### Service Template

```typescript
// Template for a new service
import * as RTE from 'fp-ts/ReaderTaskEither'
import { pipe } from 'fp-ts/function'

type MyServiceDeps = {
  db: DatabaseClient
  // ... other dependencies
}

type MyServiceError =
  | { _tag: 'NotFound'; id: string }
  | { _tag: 'ValidationFailed'; reason: string }

export const myOperation = (
  input: Input
): RTE.ReaderTaskEither<MyServiceDeps, MyServiceError, Output> =>
  pipe(
    RTE.ask<MyServiceDeps>(),
    RTE.flatMap(deps =>
      // Your implementation here
      RTE.right(output)
    )
  )
```

#### Imported: Service Layer Patterns

### Defining Service Modules

Structure services as modules exporting RTE functions:

```typescript
// src/services/user.service.ts
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as TE from 'fp-ts/TaskEither'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'

type UserDeps = {
  db: DatabaseClient
  hasher: PasswordHasher
  mailer: EmailService
}

type UserError =
  | { _tag: 'UserNotFound'; id: string }
  | { _tag: 'EmailExists'; email: string }
  | { _tag: 'InvalidPassword' }

// Create user
export const create = (
  input: CreateUserInput
): RTE.ReaderTaskEither<UserDeps, UserError, User> =>
  pipe(
    RTE.ask<UserDeps>(),
    RTE.flatMap(({ db, hasher }) =>
      pipe(
        // Check email uniqueness
        checkEmailUnique(input.email),
        RTE.flatMap(() =>
          RTE.fromTaskEither(hasher.hash(input.password))
        ),
        RTE.flatMap(hashedPassword =>
          RTE.fromTaskEither(
            db.users.create({
              ...input,
              password: hashedPassword,
            })
          )
        )
      )
    )
  )

// Find by ID
export const findById = (
  id: string
): RTE.ReaderTaskEither<UserDeps, UserError, User> =>
  pipe(
    RTE.ask<UserDeps>(),
    RTE.flatMap(({ db }) =>
      pipe(
        RTE.fromTaskEither(db.users.findUnique({ where: { id } })),
        RTE.flatMap(user =>
          user
            ? RTE.right(user)
            : RTE.left({ _tag: 'UserNotFound' as const, id })
        )
      )
    )
  )

// Find many with pagination
export const findMany = (
  params: PaginationParams
): RTE.ReaderTaskEither<UserDeps, UserError, PaginatedResult<User>> =>
  pipe(
    RTE.ask<UserDeps>(),
    RTE.flatMap(({ db }) =>
      RTE.fromTaskEither(
        pipe(
          TE.Do,
          TE.bind('users', () => db.users.findMany({
            skip: params.offset,
            take: params.limit,
          })),
          TE.bind('total', () => db.users.count()),
          TE.map(({ users, total }) => ({
            data: users,
            total,
            ...params,
          }))
        )
      )
    )
  )

const checkEmailUnique = (
  email: string
): RTE.ReaderTaskEither<UserDeps, UserError, void> =>
  pipe(
    RTE.ask<UserDeps>(),
    RTE.flatMap(({ db }) =>
      pipe(
        RTE.fromTaskEither(db.users.findUnique({ where: { email } })),
        RTE.flatMap(existing =>
          existing
            ? RTE.left({ _tag: 'EmailExists' as const, email })
            : RTE.right(undefined)
        )
      )
    )
  )
```

### Composing Services

```typescript
// src/services/order.service.ts
import * as UserService from './user.service'
import * as ProductService from './product.service'
import * as PaymentService from './payment.service'

type OrderDeps = UserService.UserDeps &
  ProductService.ProductDeps &
  PaymentService.PaymentDeps & {
    db: DatabaseClient
  }

export const createOrder = (
  userId: string,
  items: OrderItem[]
): RTE.ReaderTaskEither<OrderDeps, OrderError, Order> =>
  pipe(
    RTE.Do,
    // Validate user exists
    RTE.bind('user', () =>
      pipe(
        UserService.findById(userId),
        RTE.mapLeft(toOrderError)
      )
    ),
    // Validate and get products
    RTE.bind('products', () =>
      pipe(
        items,
        A.traverse(RTE.ApplicativePar)(item =>
          ProductService.findById(item.productId)
        ),
        RTE.mapLeft(toOrderError)
      )
    ),
    // Calculate total
    RTE.bind('total', ({ products }) =>
      RTE.right(calculateTotal(products, items))
    ),
    // Process payment
    RTE.bind('payment', ({ user, total }) =>
      pipe(
        PaymentService.charge(user, total),
        RTE.mapLeft(toOrderError)
      )
    ),
    // Create order
    RTE.flatMap(({ user, products, total, payment }) =>
      createOrderRecord(user, products, items, total, payment)
    )
  )
```

#### Imported: Functional Dependency Injection

### Building the Dependency Container

```typescript
// src/deps.ts
import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import * as RTE from 'fp-ts/ReaderTaskEither'

// Layer 0: Config (no dependencies)
type Config = {
  database: { url: string; poolSize: number }
  redis: { url: string }
  jwt: { secret: string; expiresIn: string }
}

const loadConfig = (): TE.TaskEither<Error, Config> =>
  TE.tryCatch(
    async () => ({
      database: {
        url: process.env.DATABASE_URL!,
        poolSize: parseInt(process.env.DB_POOL_SIZE || '10'),
      },
      redis: { url: process.env.REDIS_URL! },
      jwt: {
        secret: process.env.JWT_SECRET!,
        expiresIn: process.env.JWT_EXPIRES || '1d',
      },
    }),
    (e) => new Error(`Config error: ${e}`)
  )

// Layer 1: Infrastructure (depends on config)
type Infrastructure = {
  config: Config
  db: PrismaClient
  redis: RedisClient
  logger: Logger
}

const buildInfrastructure = (
  config: Config
): TE.TaskEither<Error, Infrastructure> =>
  pipe(
    TE.Do,
    TE.bind('db', () =>
      TE.tryCatch(
        async () => {
          const prisma = new PrismaClient({
            datasources: { db: { url: config.database.url } },
          })
          await prisma.$connect()
          return prisma
        },
        (e) => new Error(`Database error: ${e}`)
      )
    ),
    TE.bind('redis', () =>
      TE.tryCatch(
        async () => createRedisClient(config.redis.url),
        (e) => new Error(`Redis error: ${e}`)
      )
    ),
    TE.bind('logger', () => TE.right(createLogger())),
    TE.map(({ db, redis, logger }) => ({
      config,
      db,
      redis,
      logger,
    }))
  )

// Layer 2: Services (depends on infrastructure)
type Services = {
  hasher: PasswordHasher
  jwt: JwtService
  mailer: EmailService
}

const buildServices = (infra: Infrastructure): Services => ({
  hasher: createBcryptHasher(),
  jwt: createJwtService(infra.config.jwt),
  mailer: createEmailService(infra.config),
})

// Full application dependencies
export type AppDeps = Infrastructure & Services

export const buildDeps = (): TE.TaskEither<Error, AppDeps> =>
  pipe(
    loadConfig(),
    TE.flatMap(buildInfrastructure),
    TE.map(infra => ({
      ...infra,
      ...buildServices(infra),
    }))
  )

// Cleanup
export const destroyDeps = (deps: AppDeps): TE.TaskEither<Error, void> =>
  pipe(
    TE.tryCatch(
      async () => {
        await deps.db.$disconnect()
        await deps.redis.quit()
      },
      (e) => new Error(`Cleanup error: ${e}`)
    )
  )
```

### Running Programs with Dependencies

```typescript
// src/main.ts
import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import * as RTE from 'fp-ts/ReaderTaskEither'

const program: RTE.ReaderTaskEither<AppDeps, AppError, void> = pipe(
  RTE.ask<AppDeps>(),
  RTE.flatMap(deps =>
    pipe(
      startServer(deps),
      RTE.fromTaskEither
    )
  )
)

const main = async () => {
  const result = await pipe(
    buildDeps(),
    TE.mapLeft((e): AppError => ({ _tag: 'StartupError', cause: e })),
    TE.flatMap(deps =>
      pipe(
        program(deps),
        TE.tap(() => TE.fromIO(() => console.log('Server running'))),
        // Cleanup on exit
        TE.tapError(() => destroyDeps(deps))
      )
    )
  )()

  if (result._tag === 'Left') {
    console.error('Failed to start:', result.left)
    process.exit(1)
  }
}

main()
```

#### Imported: Database Operations

### Prisma Wrappers

```typescript
// src/lib/db.ts
import * as TE from 'fp-ts/TaskEither'
import * as O from 'fp-ts/Option'
import { PrismaClient, Prisma } from '@prisma/client'

type DbError =
  | { _tag: 'RecordNotFound'; model: string; id: string }
  | { _tag: 'UniqueViolation'; field: string }
  | { _tag: 'ForeignKeyViolation'; field: string }
  | { _tag: 'UnknownDbError'; cause: unknown }

// Wrap Prisma operations
const wrapPrisma = <A>(
  operation: () => Promise<A>
): TE.TaskEither<DbError, A> =>
  TE.tryCatch(operation, (error): DbError => {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return {
            _tag: 'UniqueViolation',
            field: (error.meta?.target as string[])?.join(', ') || 'unknown',
          }
        case 'P2003':
          return {
            _tag: 'ForeignKeyViolation',
            field: error.meta?.field_name as string || 'unknown',
          }
        case 'P2025':
          return {
            _tag: 'RecordNotFound',
            model: error.meta?.modelName as string || 'unknown',
            id: 'unknown',
          }
      }
    }
    return { _tag: 'UnknownDbError', cause: error }
  })

// Repository factory
export const createRepository = <
  Model,
  CreateInput,
  UpdateInput,
  WhereUnique,
  WhereMany
>(
  db: PrismaClient,
  delegate: {
    findUnique: (args: { where: WhereUnique }) => Promise<Model | null>
    findMany: (args: { where?: WhereMany; skip?: number; take?: number }) => Promise<Model[]>
    create: (args: { data: CreateInput }) => Promise<Model>
    update: (args: { where: WhereUnique; data: UpdateInput }) => Promise<Model>
    delete: (args: { where: WhereUnique }) => Promise<Model>
    count: (args?: { where?: WhereMany }) => Promise<number>
  }
) => ({
  findUnique: (where: WhereUnique): TE.TaskEither<DbError, O.Option<Model>> =>
    pipe(
      wrapPrisma(() => delegate.findUnique({ where })),
      TE.map(O.fromNullable)
    ),

  findMany: (
    where?: WhereMany,
    pagination?: { skip: number; take: number }
  ): TE.TaskEither<DbError, Model[]> =>
    wrapPrisma(() => delegate.findMany({ where, ...pagination })),

  create: (data: CreateInput): TE.TaskEither<DbError, Model> =>
    wrapPrisma(() => delegate.create({ data })),

  update: (
    where: WhereUnique,
    data: UpdateInput
  ): TE.TaskEither<DbError, Model> =>
    wrapPrisma(() => delegate.update({ where, data })),

  delete: (where: WhereUnique): TE.TaskEither<DbError, Model> =>
    wrapPrisma(() => delegate.delete({ where })),

  count: (where?: WhereMany): TE.TaskEither<DbError, number> =>
    wrapPrisma(() => delegate.count({ where })),
})

// Usage
const userRepo = createRepository(prisma, prisma.user)
```

### Transaction Handling

```typescript
// src/lib/transaction.ts
import * as TE from 'fp-ts/TaskEither'
import * as RTE from 'fp-ts/ReaderTaskEither'
import { PrismaClient } from '@prisma/client'
import { pipe } from 'fp-ts/function'

type TxClient = Omit<
  PrismaClient,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
>

type TxDeps = { tx: TxClient }

// Transaction wrapper
export const withTransaction = <R extends { db: PrismaClient }, E, A>(
  program: RTE.ReaderTaskEither<R & TxDeps, E, A>
): RTE.ReaderTaskEither<R, E | DbError, A> =>
  pipe(
    RTE.ask<R>(),
    RTE.flatMap(deps =>
      RTE.fromTaskEither(
        TE.tryCatch(
          () =>
            deps.db.$transaction(async tx => {
              const result = await program({ ...deps, tx })()
              if (result._tag === 'Left') {
                throw result.left // Rollback
              }
              return result.right
            }),
          (error): E | DbError => {
            // Re-throw domain errors
            if (typeof error === 'object' && error !== null && '_tag' in error) {
              return error as E
            }
            return { _tag: 'UnknownDbError', cause: error }
          }
        )
      )
    )
  )

// Usage in service
export const transferFunds = (
  fromId: string,
  toId: string,
  amount: number
): RTE.ReaderTaskEither<AppDeps, TransferError, Transfer> =>
  withTransaction(
    pipe(
      RTE.Do,
      RTE.bind('from', () => debitAccount(fromId, amount)),
      RTE.bind('to', () => creditAccount(toId, amount)),
      RTE.bind('transfer', ({ from, to }) =>
        createTransferRecord(from, to, amount)
      ),
      RTE.map(({ transfer }) => transfer)
    )
  )

// Inside transaction, use tx instead of db
const debitAccount = (
  accountId: string,
  amount: number
): RTE.ReaderTaskEither<TxDeps, TransferError, Account> =>
  pipe(
    RTE.ask<TxDeps>(),
    RTE.flatMap(({ tx }) =>
      RTE.fromTaskEither(
        pipe(
          TE.tryCatch(
            () =>
              tx.account.update({
                where: { id: accountId },
                data: { balance: { decrement: amount } },
              }),
            toDbError
          ),
          TE.flatMap(account =>
            account.balance < 0
              ? TE.left({ _tag: 'InsufficientFunds' as const, accountId })
              : TE.right(account)
          )
        )
      )
    )
  )
```

#### Imported: Middleware Patterns

### Express Middleware

```typescript
// src/middleware/fp-express.ts
import { Request, Response, NextFunction, RequestHandler } from 'express'
import * as TE from 'fp-ts/TaskEither'
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

// Convert RTE handler to Express middleware
export const toHandler =
  <R, E, A>(
    getDeps: (req: Request) => R,
    handler: (req: Request) => RTE.ReaderTaskEither<R, E, A>,
    onError: (error: E, res: Response) => void
  ): RequestHandler =>
  async (req, res, next) => {
    const deps = getDeps(req)
    const result = await handler(req)(deps)()

    pipe(
      result,
      E.fold(
        error => onError(error, res),
        data => res.json(data)
      )
    )
  }

// Error handler
const handleError = (error: AppError, res: Response): void => {
  switch (error._tag) {
    case 'NotFound':
      res.status(404).json({ error: error.resource + ' not found' })
      break
    case 'ValidationError':
      res.status(400).json({ error: error.message })
      break
    case 'Unauthorized':
      res.status(401).json({ error: error.reason })
      break
    default:
      res.status(500).json({ error: 'Internal server error' })
  }
}

// Usage
const getUserHandler = toHandler(
  req => req.app.locals.deps as AppDeps,
  req => UserService.findById(req.params.id),
  handleError
)

app.get('/users/:id', getUserHandler)
```

### Hono Middleware

```typescript
// src/middleware/fp-hono.ts
import { Hono, Context, MiddlewareHandler } from 'hono'
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

// Store deps in context
declare module 'hono' {
  interface ContextVariableMap {
    deps: AppDeps
  }
}

// Dependency injection middleware
export const withDeps = (deps: AppDeps): MiddlewareHandler =>
  async (c, next) => {
    c.set('deps', deps)
    await next()
  }

// Convert RTE to Hono handler
export const toHonoHandler =
  <E, A>(
    handler: (c: Context) => RTE.ReaderTaskEither<AppDeps, E, A>,
    onError: (error: E, c: Context) => Response
  ) =>
  async (c: Context): Promise<Response> => {
    const deps = c.get('deps')
    const result = await handler(c)(deps)()

    return pipe(
      result,
      E.fold(
        error => onError(error, c),
        data => c.json(data)
      )
    )
  }

// Validation middleware
export const validate =
  <T>(schema: z.ZodSchema<T>): MiddlewareHandler =>
  async (c, next) => {
    const body = await c.req.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return c.json(
        { error: 'Validation failed', details: result.error.flatten() },
        400
      )
    }

    c.set('validatedBody', result.data)
    await next()
  }

// Auth middleware using RTE
export const requireAuth: MiddlewareHandler = async (c, next) => {
  const deps = c.get('deps')
  const token = c.req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return c.json({ error: 'No token provided' }, 401)
  }

  const result = await pipe(
    deps.jwt.verify(token),
    TE.mapLeft(() => ({ _tag: 'Unauthorized' as const, reason: 'Invalid token' }))
  )()

  if (E.isLeft(result)) {
    return c.json({ error: result.left.reason }, 401)
  }

  c.set('user', result.right)
  await next()
}

// Usage
const app = new Hono()

app.use('*', withDeps(deps))
app.use('/api/*', requireAuth)

app.get(
  '/api/users/:id',
  toHonoHandler(
    c => UserService.findById(c.req.param('id')),
    (error, c) => {
      if (error._tag === 'UserNotFound') {
        return c.json({ error: 'User not found' }, 404)
      }
      return c.json({ error: 'Internal error' }, 500)
    }
  )
)
```

### Request Context Pattern

```typescript
// src/context.ts
import * as RTE from 'fp-ts/ReaderTaskEither'
import { pipe } from 'fp-ts/function'

// Request-scoped context
type RequestContext = {
  requestId: string
  userId: O.Option<string>
  startTime: number
}

type ContextDeps = AppDeps & { ctx: RequestContext }

// Logging with context
const logWithContext =
  (level: 'info' | 'warn' | 'error') =>
  (message: string, meta?: object): RTE.ReaderTaskEither<ContextDeps, never, void> =>
    pipe(
      RTE.ask<ContextDeps>(),
      RTE.flatMap(({ logger, ctx }) =>
        RTE.fromIO(() =>
          loggerlevel,
            elapsed: Date.now() - ctx.startTime,
          })
        )
      )
    )

export const log = {
  info: logWithContext('info'),
  warn: logWithContext('warn'),
  error: logWithContext('error'),
}

// Middleware to create context
export const withContext: MiddlewareHandler = async (c, next) => {
  const deps = c.get('deps')
  const ctx: RequestContext = {
    requestId: crypto.randomUUID(),
    userId: O.fromNullable(c.get('user')?.id),
    startTime: Date.now(),
  }

  c.set('deps', { ...deps, ctx })

  // Log request start
  deps.logger.info('Request started', {
    requestId: ctx.requestId,
    method: c.req.method,
    path: c.req.path,
  })

  await next()

  // Log request end
  deps.logger.info('Request completed', {
    requestId: ctx.requestId,
    status: c.res.status,
    elapsed: Date.now() - ctx.startTime,
  })
}
```

#### Imported: Error Handling Patterns

### Typed Error Hierarchy

```typescript
// src/errors.ts
import * as E from 'fp-ts/Either'
import * as O from 'fp-ts/Option'

// Base error types
type DomainError =
  | NotFoundError
  | ValidationError
  | ConflictError
  | AuthError
  | InfrastructureError

type NotFoundError = {
  _tag: 'NotFoundError'
  resource: string
  id: string
}

type ValidationError = {
  _tag: 'ValidationError'
  field: string
  message: string
  value?: unknown
}

type ConflictError = {
  _tag: 'ConflictError'
  resource: string
  field: string
  value: string
}

type AuthError =
  | { _tag: 'Unauthenticated' }
  | { _tag: 'Unauthorized'; required: string }
  | { _tag: 'TokenExpired' }

type InfrastructureError = {
  _tag: 'InfrastructureError'
  service: string
  cause: unknown
}

// Smart constructors
export const notFound = (resource: string, id: string): NotFoundError => ({
  _tag: 'NotFoundError',
  resource,
  id,
})

export const validation = (
  field: string,
  message: string,
  value?: unknown
): ValidationError => ({
  _tag: 'ValidationError',
  field,
  message,
  value,
})

export const conflict = (
  resource: string,
  field: string,
  value: string
): ConflictError => ({
  _tag: 'ConflictError',
  resource,
  field,
  value,
})

// Error to HTTP status mapping
export const toHttpStatus = (error: DomainError): number => {
  switch (error._tag) {
    case 'NotFoundError':
      return 404
    case 'ValidationError':
      return 400
    case 'ConflictError':
      return 409
    case 'Unauthenticated':
      return 401
    case 'Unauthorized':
      return 403
    case 'TokenExpired':
      return 401
    case 'InfrastructureError':
      return 503
    default:
      return 500
  }
}

// Error to response body
export const toResponseBody = (
  error: DomainError
): { error: string; details?: unknown } => {
  switch (error._tag) {
    case 'NotFoundError':
      return { error: `${error.resource} not found` }
    case 'ValidationError':
      return {
        error: 'Validation failed',
        details: { field: error.field, message: error.message },
      }
    case 'ConflictError':
      return {
        error: `${error.resource} with ${error.field} already exists`,
      }
    case 'Unauthenticated':
      return { error: 'Authentication required' }
    case 'Unauthorized':
      return { error: `Permission denied: ${error.required}` }
    case 'TokenExpired':
      return { error: 'Token expired' }
    case 'InfrastructureError':
      return { error: 'Service temporarily unavailable' }
  }
}
```

### Error Recovery

```typescript
// src/lib/recovery.ts
import * as RTE from 'fp-ts/ReaderTaskEither'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'

// Retry with exponential backoff
export const withRetry =
  <R, E, A>(
    maxAttempts: number,
    baseDelayMs: number,
    shouldRetry: (error: E) => boolean
  ) =>
  (
    operation: RTE.ReaderTaskEither<R, E, A>
  ): RTE.ReaderTaskEither<R, E, A> =>
    pipe(
      RTE.ask<R>(),
      RTE.flatMap(deps => {
        const attempt = (
          remaining: number,
          delay: number
        ): TE.TaskEither<E, A> =>
          pipe(
            operation(deps),
            TE.orElse(error => {
              if (remaining <= 0 || !shouldRetry(error)) {
                return TE.left(error)
              }
              return pipe(
                TE.fromTask(() => new Promise(r => setTimeout(r, delay))),
                TE.flatMap(() => attempt(remaining - 1, delay * 2))
              )
            })
          )

        return RTE.fromTaskEither(attempt(maxAttempts - 1, baseDelayMs))
      })
    )

// Fallback to cached value
export const withFallback =
  <R extends { cache: CacheClient }, E, A>(
    cacheKey: string,
    ttlSeconds: number
  ) =>
  (
    operation: RTE.ReaderTaskEither<R, E, A>
  ): RTE.ReaderTaskEither<R, E, A> =>
    pipe(
      RTE.ask<R>(),
      RTE.flatMap(({ cache, ...rest }) =>
        pipe(
          operation,
          // On success, cache the result
          RTE.tap(result =>
            RTE.fromTaskEither(cache.set(cacheKey, result, ttlSeconds))
          ),
          // On failure, try to get cached value
          RTE.orElse(error =>
            pipe(
              RTE.fromTaskEither(cache.get<A>(cacheKey)),
              RTE.flatMap(cached =>
                cached ? RTE.right(cached) : RTE.left(error)
              )
            )
          )
        )
      )
    )

// Circuit breaker
type CircuitState = 'closed' | 'open' | 'half-open'

export const createCircuitBreaker = <E>(
  failureThreshold: number,
  resetTimeoutMs: number,
  isFailure: (error: E) => boolean
) => {
  let state: CircuitState = 'closed'
  let failures = 0
  let lastFailure = 0

  return <R, A>(
    operation: RTE.ReaderTaskEither<R, E, A>
  ): RTE.ReaderTaskEither<R, E | { _tag: 'CircuitOpen' }, A> =>
    pipe(
      RTE.ask<R>(),
      RTE.flatMap(deps => {
        // Check if circuit should reset
        if (
          state === 'open' &&
          Date.now() - lastFailure > resetTimeoutMs
        ) {
          state = 'half-open'
        }

        if (state === 'open') {
          return RTE.left({ _tag: 'CircuitOpen' as const })
        }

        return pipe(
          operation,
          RTE.tap(() => {
            if (state === 'half-open') {
              state = 'closed'
              failures = 0
            }
            return RTE.right(undefined)
          }),
          RTE.tapError(error => {
            if (isFailure(error)) {
              failures++
              lastFailure = Date.now()
              if (failures >= failureThreshold) {
                state = 'open'
              }
            }
            return RTE.right(undefined)
          })
        )
      })
    )
}
```

#### Imported: Testing Strategies

### Mocking Dependencies

```typescript
// src/services/__tests__/user.service.test.ts
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import * as O from 'fp-ts/Option'
import { describe, it, expect, vi } from 'vitest'
import * as UserService from '../user.service'

// Create mock dependencies
const createMockDeps = (overrides: Partial<UserDeps> = {}): UserDeps => ({
  db: {
    users: {
      findUnique: vi.fn(() => Promise.resolve(null)),
      create: vi.fn(data => Promise.resolve({ id: '1', ...data })),
      update: vi.fn((where, data) => Promise.resolve({ id: where.id, ...data })),
    },
  },
  hasher: {
    hash: vi.fn(password => TE.right(`hashed_${password}`)),
    verify: vi.fn(() => TE.right(true)),
  },
  mailer: {
    send: vi.fn(() => TE.right(undefined)),
  },
  ...overrides,
})

describe('UserService', () => {
  describe('create', () => {
    it('should create a user with hashed password', async () => {
      const deps = createMockDeps()
      const input = {
        email: 'test@example.com',
        password: 'secret123',
        name: 'Test User',
      }

      const result = await UserService.create(input)(deps)()

      expect(E.isRight(result)).toBe(true)
      if (E.isRight(result)) {
        expect(result.right.email).toBe(input.email)
      }
      expect(deps.hasher.hash).toHaveBeenCalledWith('secret123')
    })

    it('should fail when email already exists', async () => {
      const existingUser = { id: '1', email: 'test@example.com' }
      const deps = createMockDeps({
        db: {
          users: {
            findUnique: vi.fn(() => Promise.resolve(existingUser)),
            create: vi.fn(),
          },
        },
      })

      const result = await UserService.create({
        email: 'test@example.com',
        password: 'secret',
        name: 'Test',
      })(deps)()

      expect(E.isLeft(result)).toBe(true)
      if (E.isLeft(result)) {
        expect(result.left._tag).toBe('EmailExists')
      }
    })
  })

  describe('findById', () => {
    it('should return user when found', async () => {
      const user = { id: '1', email: 'test@example.com', name: 'Test' }
      const deps = createMockDeps({
        db: {
          users: {
            findUnique: vi.fn(() => Promise.resolve(user)),
          },
        },
      })

      const result = await UserService.findById('1')(deps)()

      expect(E.isRight(result)).toBe(true)
      if (E.isRight(result)) {
        expect(result.right).toEqual(user)
      }
    })

    it('should return NotFound when user does not exist', async () => {
      const deps = createMockDeps()

      const result = await UserService.findById('nonexistent')(deps)()

      expect(E.isLeft(result)).toBe(true)
      if (E.isLeft(result)) {
        expect(result.left._tag).toBe('UserNotFound')
        expect(result.left.id).toBe('nonexistent')
      }
    })
  })
})
```

### Integration Testing with Test Containers

```typescript
// src/__tests__/integration/user.integration.test.ts
import { PostgreSqlContainer } from '@testcontainers/postgresql'
import { PrismaClient } from '@prisma/client'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { buildDeps, destroyDeps, AppDeps } from '../../deps'
import * as UserService from '../../services/user.service'

describe('UserService Integration', () => {
  let container: PostgreSqlContainer
  let deps: AppDeps

  beforeAll(async () => {
    // Start PostgreSQL container
    container = await new PostgreSqlContainer().start()

    // Build real dependencies with test database
    process.env.DATABASE_URL = container.getConnectionUri()

    const depsResult = await buildDeps()()
    if (E.isLeft(depsResult)) {
      throw new Error(`Failed to build deps: ${depsResult.left}`)
    }
    deps = depsResult.right

    // Run migrations
    await deps.db.$executeRaw`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    // ... run Prisma migrations
  }, 60000)

  afterAll(async () => {
    await destroyDeps(deps)()
    await container.stop()
  })

  it('should create and retrieve a user', async () => {
    // Create user
    const createResult = await UserService.create({
      email: 'integration@test.com',
      password: 'password123',
      name: 'Integration Test',
    })(deps)()

    expect(E.isRight(createResult)).toBe(true)
    if (E.isLeft(createResult)) return

    const user = createResult.right

    // Retrieve user
    const findResult = await UserService.findById(user.id)(deps)()

    expect(E.isRight(findResult)).toBe(true)
    if (E.isRight(findResult)) {
      expect(findResult.right.email).toBe('integration@test.com')
    }
  })
})
```

### Property-Based Testing

```typescript
// src/__tests__/property/user.property.test.ts
import * as fc from 'fast-check'
import * as E from 'fp-ts/Either'
import { describe, it, expect } from 'vitest'
import { validateEmail, validatePassword } from '../../validation'

describe('Validation Properties', () => {
  it('valid emails should pass validation', () => {
    fc.assert(
      fc.property(fc.emailAddress(), email => {
        const result = validateEmail(email)
        return E.isRight(result)
      })
    )
  })

  it('passwords meeting requirements should pass', () => {
    const validPassword = fc
      .tuple(
        fc.stringOf(fc.constantFrom(...'abcdefghijklmnopqrstuvwxyz'), {
          minLength: 4,
        }),
        fc.stringOf(fc.constantFrom(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), {
          minLength: 1,
        }),
        fc.stringOf(fc.constantFrom(...'0123456789'), { minLength: 1 }),
        fc.stringOf(fc.constantFrom(...'!@#$%^&*'), { minLength: 1 })
      )
      .map(parts => parts.join(''))

    fc.assert(
      fc.property(validPassword, password => {
        const result = validatePassword(password)
        return E.isRight(result)
      })
    )
  })

  it('empty strings should fail email validation', () => {
    const result = validateEmail('')
    expect(E.isLeft(result)).toBe(true)
  })
})
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
