---
name: trpc-fullstack-v2
description: "tRPC Full-Stack workflow skill. Use this skill when the user needs Build end-to-end type-safe APIs with tRPC \u2014 routers, procedures, middleware, subscriptions, and Next.js/React integration patterns and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["typescript", "trpc", "api", "fullstack", "nextjs", "react", "type-safety", "trpc-fullstack-v2"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "suhaibjanjua"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# tRPC Full-Stack

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/trpc-fullstack` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# tRPC Full-Stack

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, How It Works, Security & Safety Notes, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building a TypeScript full-stack app (Next.js, Remix, Express + React) where the client and server share a single repo
- Use when you want end-to-end type safety on API calls without REST/GraphQL schema overhead
- Use when adding real-time features (subscriptions) to an existing tRPC setup
- Use when designing multi-step middleware (auth, rate limiting, tenant scoping) on tRPC procedures
- Use when migrating an existing REST/GraphQL API to tRPC incrementally
- Use when the request clearly matches the imported source intent: Build end-to-end type-safe APIs with tRPC — routers, procedures, middleware, subscriptions, and Next.js/React integration patterns.

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

#### Imported: Overview

tRPC lets you build fully type-safe APIs without writing a schema or code-generation step. Your TypeScript types flow from the server router directly to the client — so every API call is autocompleted, validated at compile time, and refactoring-safe. Use this skill when building TypeScript monorepos, Next.js apps, or any project where the server and client share a codebase.

#### Imported: Core Concepts

### Routers and Procedures

A **router** groups related **procedures** (think: endpoints). Procedures are typed functions — `query` for reads, `mutation` for writes, `subscription` for real-time streams.

### Input Validation with Zod

All procedure inputs are validated with Zod schemas. The validated, typed input is available in the procedure handler — no manual parsing.

### Context

`context` is shared state passed to every procedure — auth session, database client, request headers, etc. It is built once per request in a context factory. **Important:** Next.js App Router and Pages Router require separate context factories because App Router handlers receive a fetch `Request`, not a Node.js `NextApiRequest`.

### Middleware

Middleware chains run before a procedure. Use them for authentication, logging, and request enrichment. They can extend the context for downstream procedures.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @trpc-fullstack-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/trpc-fullstack-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/trpc-fullstack-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @trpc-fullstack-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Fetching Data in a Component

```typescript
// components/PostList.tsx
'use client';
import { trpc } from '@/utils/trpc';

export function PostList() {
  const { data, isLoading, error } = trpc.post.list.useQuery({ limit: 10 });

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Example 2: Mutation with Cache Invalidation

```typescript
'use client';
import { trpc } from '@/utils/trpc';

export function CreatePost() {
  const utils = trpc.useUtils();

  const createPost = trpc.post.create.useMutation({
    onSuccess: () => {
      // Invalidate and refetch the post list
      utils.post.list.invalidate();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    createPost.mutate({
      title: data.get('title') as string,
      body: data.get('body') as string,
    });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" required />
      <textarea name="body" placeholder="Body" required />
      <button type="submit" disabled={createPost.isPending}>
        {createPost.isPending ? 'Creating…' : 'Create Post'}
      </button>
      {createPost.error && <p>{createPost.error.message}</p>}
    </form>
  );
}
```

### Example 3: Server-Side Caller (Server Components / SSR)

Use `createServerContext` — the dedicated server-side factory — so that `auth()` is called
correctly without needing a synthetic or empty request object:

```typescript
// app/posts/page.tsx (Next.js Server Component)
import { appRouter } from '@/server/root';
import { createCallerFactory } from '@trpc/server';
import { createServerContext } from '@/server/context';

const createCaller = createCallerFactory(appRouter);

export default async function PostsPage() {
  // Uses createServerContext — calls auth() server-side, no req/res cast needed
  const caller = createCaller(await createServerContext());
  const { posts } = await caller.post.list({ limit: 20 });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Example 4: Real-Time Subscriptions (WebSocket)

```typescript
// server/routers/notifications.ts
import { observable } from '@trpc/server/observable';
import { EventEmitter } from 'events';

const ee = new EventEmitter();

export const notificationRouter = router({
  onNew: protectedProcedure.subscription(({ ctx }) => {
    return observable<{ message: string; at: Date }>((emit) => {
      const onNotification = (data: { message: string }) => {
        emit.next({ message: data.message, at: new Date() });
      };

      const channel = `user:${ctx.session.user.id}`;
      ee.on(channel, onNotification);
      return () => ee.off(channel, onNotification);
    });
  }),
});
```

```typescript
// Client usage — requires wsLink in the client config
trpc.notification.onNew.useSubscription(undefined, {
  onData(data) {
    toast(data.message);
  },
});
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Export only AppRouter type from server code — never import appRouter on the client
- ✅ Use separate context factories — createTRPCContext for the HTTP handler, createServerContext for Server Components and callers
- ✅ Validate all inputs with Zod — never trust raw input without a schema
- ✅ Split routers by domain (posts, users, billing) and merge in root.ts
- ✅ Extend context in middleware rather than querying the DB multiple times per request
- ✅ Use utils.invalidate() after mutations to keep the cache fresh
- ❌ Don't cast context with as any to silence type errors — the mismatch will surface as a runtime failure when auth or session lookups return undefined

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Export only `AppRouter` type** from server code — never import `appRouter` on the client
- ✅ **Use separate context factories** — `createTRPCContext` for the HTTP handler, `createServerContext` for Server Components and callers
- ✅ **Validate all inputs with Zod** — never trust raw `input` without a schema
- ✅ **Split routers by domain** (posts, users, billing) and merge in `root.ts`
- ✅ **Extend context in middleware** rather than querying the DB multiple times per request
- ✅ **Use `utils.invalidate()`** after mutations to keep the cache fresh
- ❌ **Don't cast context with `as any`** to silence type errors — the mismatch will surface as a runtime failure when auth or session lookups return undefined
- ❌ **Don't use `createContext({} as any)`** in Server Components — use `createServerContext()` which calls `auth()` directly
- ❌ **Don't put business logic in the route handler** — keep it in the procedure or a service layer
- ❌ **Don't share the tRPC client instance globally** — create it per-provider to avoid stale closures

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/trpc-fullstack`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Additional Resources

- [tRPC Official Docs](https://trpc.io/docs)
- [create-t3-app](https://create.t3.gg) — Production Next.js starter with tRPC wired in
- [tRPC GitHub](https://github.com/trpc/trpc)
- [TanStack Query Docs](https://tanstack.com/query/latest)

#### Imported: How It Works

### Step 1: Install and Initialize

```bash
npm install @trpc/server @trpc/client @trpc/react-query @tanstack/react-query zod
```

Create the tRPC instance and reusable builders:

```typescript
// src/server/trpc.ts
import { initTRPC, TRPCError } from '@trpc/server';
import { type Context } from './context';
import { ZodError } from 'zod';

const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;
```

### Step 2: Define Two Context Factories

Next.js App Router handlers receive a fetch `Request` (not a Node.js `NextApiRequest`), so the context
must be built differently depending on the call site. Define one factory per surface:

```typescript
// src/server/context.ts
import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { auth } from '@/server/auth'; // Next-Auth v5 / your auth helper
import { db } from './db';

/**
 * Context for the HTTP handler (App Router Route Handler).
 * `opts.req` is the fetch Request — auth is resolved server-side via `auth()`.
 */
export async function createTRPCContext(opts: FetchCreateContextFnOptions) {
  const session = await auth(); // server-side auth — no req/res needed
  return { session, db, headers: opts.req.headers };
}

/**
 * Context for direct server-side callers (Server Components, RSC, cron jobs).
 * No HTTP request is involved, so we call auth() directly from the server.
 */
export async function createServerContext() {
  const session = await auth();
  return { session, db };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
```

### Step 3: Build an Auth Middleware and Protected Procedure

```typescript
// src/server/trpc.ts (continued)
const enforceAuth = middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      // Narrows type: session is non-null from here
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceAuth);
```

### Step 4: Create Routers

```typescript
// src/server/routers/post.ts
import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';

export const postRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(20),
        cursor: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const posts = await ctx.db.post.findMany({
        take: input.limit + 1,
        cursor: input.cursor ? { id: input.cursor } : undefined,
        orderBy: { createdAt: 'desc' },
      });
      const nextCursor =
        posts.length > input.limit ? posts.pop()!.id : undefined;
      return { posts, nextCursor };
    }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({ where: { id: input.id } });
      if (!post) throw new TRPCError({ code: 'NOT_FOUND' });
      return post;
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1).max(200),
        body: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: { ...input, authorId: ctx.session.user.id },
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({ where: { id: input.id } });
      if (!post) throw new TRPCError({ code: 'NOT_FOUND' });
      if (post.authorId !== ctx.session.user.id)
        throw new TRPCError({ code: 'FORBIDDEN' });
      return ctx.db.post.delete({ where: { id: input.id } });
    }),
});
```

### Step 5: Compose the Root Router and Export Types

```typescript
// src/server/root.ts
import { router } from './trpc';
import { postRouter } from './routers/post';
import { userRouter } from './routers/user';

export const appRouter = router({
  post: postRouter,
  user: userRouter,
});

// Export the type for the client — never import the appRouter itself on the client
export type AppRouter = typeof appRouter;
```

### Step 6: Mount the API Handler (Next.js App Router)

The App Router handler must use `fetchRequestHandler` and the **fetch-based** context factory.
`createTRPCContext` receives `FetchCreateContextFnOptions` (with a fetch `Request`), not
a Pages Router `req/res` pair.

```typescript
// src/app/api/trpc/[trpc]/route.ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/root';
import { createTRPCContext } from '@/server/context';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    // opts is FetchCreateContextFnOptions — req is the fetch Request
    createContext: (opts: FetchCreateContextFnOptions) => createTRPCContext(opts),
  });

export { handler as GET, handler as POST };
```

### Step 7: Set Up the Client (React Query)

```typescript
// src/utils/trpc.ts
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/server/root';

export const trpc = createTRPCReact<AppRouter>();
```

```typescript
// src/app/providers.tsx
'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';
import { trpc } from '@/utils/trpc';

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
          headers: () => ({ 'x-trpc-source': 'react' }),
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
```

---

#### Imported: Security & Safety Notes

- Always enforce authorization in `protectedProcedure` — never rely on client-side checks alone
- Validate all input shapes with Zod, including pagination cursors and IDs, to prevent injection via malformed inputs
- Avoid exposing internal error details to clients — use `TRPCError` with a public-safe `message` and keep stack traces server-side only
- Rate-limit public procedures using middleware to prevent abuse

---

#### Imported: Common Pitfalls

- **Problem:** Auth session is `null` in protected procedures even when the user is logged in
  **Solution:** Ensure `createTRPCContext` uses the correct server-side auth call (e.g. `auth()` from Next-Auth v5) and is not receiving a Pages Router `req/res` cast via `as any` in an App Router handler

- **Problem:** Server Component caller fails for auth-dependent queries
  **Solution:** Use `createServerContext()` (the dedicated server-side factory) instead of passing an empty or synthetic object to `createContext`

- **Problem:** "Type error: AppRouter is not assignable to AnyRouter"
  **Solution:** Import `AppRouter` as a `type` import (`import type { AppRouter }`) on the client, not the full module

- **Problem:** Mutations not reflecting in the UI after success
  **Solution:** Call `utils.<router>.<procedure>.invalidate()` in `onSuccess` to trigger a refetch via React Query

- **Problem:** "Cannot find module '@trpc/server/adapters/next'" with App Router
  **Solution:** Use `@trpc/server/adapters/fetch` and `fetchRequestHandler` for the App Router; the `nextjs` adapter is for Pages Router only

- **Problem:** Subscriptions not connecting
  **Solution:** Subscriptions require `splitLink` — route subscriptions to `wsLink` and queries/mutations to `httpBatchLink`

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
