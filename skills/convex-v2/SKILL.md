---
name: convex-v2
description: "Convex workflow skill. Use this skill when the user needs Convex reactive backend expert: schema design, TypeScript functions, real-time subscriptions, auth, file storage, scheduling, and deployment and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["convex-v2", "convex", "reactive", "backend", "expert", "schema", "design", "typescript"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Convex

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/convex` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Convex You are an expert in Convex — the open-source, reactive backend platform where queries are TypeScript code. You have deep knowledge of schema design, function authoring (queries, mutations, actions), real-time data subscriptions, authentication, file storage, scheduling, and deployment workflows across React, Next.js, Angular, Vue, Svelte, React Native, and server-side environments.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Schema Design, Writing Functions, Client-Side Integration, Scheduling & Cron Jobs, File Storage.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building a new project with Convex as the backend
- Use when adding Convex to an existing React, Next.js, Angular, Vue, Svelte, or React Native app
- Use when designing schemas for a Convex document-relational database
- Use when writing or debugging Convex functions (queries, mutations, actions)
- Use when implementing real-time/reactive data patterns
- Use when setting up authentication with Convex Auth or third-party providers (Clerk, Auth0, etc.)

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

1. Prompts you to log in (GitHub)
2. Creates a project and deployment
3. Generates convex/ folder for backend functions
4. Syncs functions to your dev deployment in real-time
5. Creates .env.local with CONVEXDEPLOYMENT and NEXTPUBLICCONVEXURL
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Project Setup

### New Project (Next.js)

```bash
npx create-next-app@latest my-app
cd my-app && npm install convex
npx convex dev
```

### Add to Existing Project

```bash
npm install convex
npx convex dev
```

The `npx convex dev` command:

1. Prompts you to log in (GitHub)
2. Creates a project and deployment
3. Generates `convex/` folder for backend functions
4. Syncs functions to your dev deployment in real-time
5. Creates `.env.local` with `CONVEX_DEPLOYMENT` and `NEXT_PUBLIC_CONVEX_URL`

### Folder Structure

```
my-app/
├── convex/
│   ├── _generated/        ← Auto-generated (DO NOT EDIT)
│   │   ├── api.d.ts
│   │   ├── dataModel.d.ts
│   │   └── server.d.ts
│   ├── schema.ts          ← Database schema definition
│   ├── tasks.ts           ← Query/mutation functions
│   └── http.ts            ← HTTP actions (optional)
├── .env.local             ← CONVEX_DEPLOYMENT, NEXT_PUBLIC_CONVEX_URL
└── convex.json            ← Project config (optional)
```

#### Imported: Core Concepts

Convex is a **document-relational** database with a fully managed backend. Key differentiators:

- **Reactive by default**: Queries automatically re-run and push updates to all connected clients when underlying data changes
- **TypeScript-first**: All backend logic — queries, mutations, actions, schemas — is written in TypeScript
- **ACID transactions**: Serializable isolation with optimistic concurrency control
- **No infrastructure to manage**: Serverless, scales automatically, zero config
- **End-to-end type safety**: Types flow from schema → backend functions → client hooks

### Function Types

| Type            | Purpose                   | Can Read DB    | Can Write DB      | Can Call External APIs | Cached/Reactive |
| :-------------- | :------------------------ | :------------- | :---------------- | :--------------------- | :-------------- |
| **Query**       | Read data                 | ✅             | ❌                | ❌                     | ✅              |
| **Mutation**    | Write data                | ✅             | ✅                | ❌                     | ❌              |
| **Action**      | Side effects              | via `runQuery` | via `runMutation` | ✅                     | ❌              |
| **HTTP Action** | Webhooks/custom endpoints | via `runQuery` | via `runMutation` | ✅                     | ❌              |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @convex-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @convex-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @convex-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @convex-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Define schemas — adds type safety across your entire stack
- ✅ Use indexes for queries — avoids full table scans
- ✅ Use compound indexes with equality filters first, range filter last
- ✅ Rely on native determinism — Date.now() and Math.random() are 100% safe to use in queries and mutations because Convex freezes time at the start of every function execution!
- ✅ Use v.id("tableName") for document references instead of plain strings
- ✅ Use actions for external API calls (never call external APIs from queries or mutations)
- ✅ Use ctx.runQuery / ctx.runMutation from actions — never access ctx.db directly in actions

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Define schemas — adds type safety across your entire stack
- ✅ Use indexes for queries — avoids full table scans
- ✅ Use compound indexes with equality filters first, range filter last
- ✅ Rely on native determinism — `Date.now()` and `Math.random()` are 100% safe to use in queries and mutations because Convex freezes time at the start of every function execution!
- ✅ Use `v.id("tableName")` for document references instead of plain strings
- ✅ Use actions for external API calls (never call external APIs from queries or mutations)
- ✅ Use `ctx.runQuery` / `ctx.runMutation` from actions — never access `ctx.db` directly in actions
- ✅ Add argument validators to all functions — they enforce runtime type safety
- ✅ Return `null` when a document isn't found instead of throwing an error unless missing is exceptional
- ✅ Prefer `withIndex` over `.filter()` for query performance

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/convex`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@comprehensive-review-pr-enhance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@computer-use-agents-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@computer-vision-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@concise-planning-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resources

- [Official Docs](https://docs.convex.dev)
- [Convex Stack (Blog)](https://stack.convex.dev)
- [GitHub](https://github.com/get-convex/convex-backend)
- [Discord Community](https://convex.dev/community)
- [Convex Chef (AI Starter)](https://chef.convex.dev)

#### Imported: Schema Design

Define your schema in `convex/schema.ts` using the validator library:

```typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    avatarUrl: v.optional(v.string()),
    tokenIdentifier: v.string(),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"]),

  messages: defineTable({
    authorId: v.id("users"),
    channelId: v.id("channels"),
    body: v.string(),
    attachmentId: v.optional(v.id("_storage")),
  })
    .index("by_channel", ["channelId"])
    .searchIndex("search_body", { searchField: "body" }),

  channels: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isPrivate: v.boolean(),
  }),
});
```

### Validator Types

| Validator                         | TypeScript Type       | Notes                                          |
| :-------------------------------- | :-------------------- | :--------------------------------------------- |
| `v.string()`                      | `string`              |                                                |
| `v.number()`                      | `number`              | IEEE 754 float                                 |
| `v.bigint()`                      | `bigint`              |                                                |
| `v.boolean()`                     | `boolean`             |                                                |
| `v.null()`                        | `null`                |                                                |
| `v.id("tableName")`               | `Id<"tableName">`     | Document reference                             |
| `v.array(v.string())`             | `string[]`            |                                                |
| `v.object({...})`                 | `{...}`               | Nested objects                                 |
| `v.optional(v.string())`          | `string \| undefined` |                                                |
| `v.union(v.string(), v.number())` | `string \| number`    |                                                |
| `v.literal("active")`             | `"active"`            | Literal types                                  |
| `v.bytes()`                       | `ArrayBuffer`         | Binary data                                    |
| `v.float64()`                     | `number`              | Explicit 64-bit float (used in vector indexes) |
| `v.any()`                         | `any`                 | Escape hatch                                   |

### Indexes

```typescript
// Single-field index
defineTable({ email: v.string() }).index("by_email", ["email"]);

// Compound index (order matters for range queries)
defineTable({
  orgId: v.string(),
  createdAt: v.number(),
}).index("by_org_and_date", ["orgId", "createdAt"]);

// Full-text search index
defineTable({ body: v.string(), channelId: v.id("channels") }).searchIndex(
  "search_body",
  {
    searchField: "body",
    filterFields: ["channelId"],
  },
);

// Vector search index (for AI/embeddings)
defineTable({ embedding: v.array(v.float64()), text: v.string() }).vectorIndex(
  "by_embedding",
  {
    vectorField: "embedding",
    dimensions: 1536,
  },
);
```

#### Imported: Writing Functions

### Queries (Read Data)

Queries are reactive — clients automatically get updates when data changes.

````typescript
import { query } from "./_generated/server";
import { v } from "convex/values";

// Simple query — list all tasks
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

// Query with arguments and filtering
export const getByChannel = query({
  args: { channelId: v.id("channels") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("messages")
      .withIndex("by_channel", (q) => q.eq("channelId", args.channelId))
      .order("desc")
      .take(50);
  },
});

// Query with auth check
export const getMyProfile = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    return await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .unique();
  },
});

### Paginated Queries

Use cursor-based pagination for lists or infinite scroll UIs.

```typescript
import { query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const listPaginated = query({
  args: {
    paginationOpts: paginationOptsValidator
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("messages")
      .order("desc")
      .paginate(args.paginationOpts);
  },
});
```

### Mutations (Write Data)

Mutations run as ACID transactions with serializable isolation.

```typescript
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Insert a document
export const create = mutation({
  args: { text: v.string(), isCompleted: v.boolean() },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert("tasks", {
      text: args.text,
      isCompleted: args.isCompleted,
    });
    return taskId;
  },
});

// Update a document
export const update = mutation({
  args: { id: v.id("tasks"), isCompleted: v.boolean() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { isCompleted: args.isCompleted });
  },
});

// Delete a document
export const remove = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Multi-document transaction (automatically atomic)
export const transferCredits = mutation({
  args: {
    fromUserId: v.id("users"),
    toUserId: v.id("users"),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    const fromUser = await ctx.db.get(args.fromUserId);
    const toUser = await ctx.db.get(args.toUserId);
    if (!fromUser || !toUser) throw new Error("User not found");
    if (fromUser.credits < args.amount) throw new Error("Insufficient credits");

    await ctx.db.patch(args.fromUserId, {
      credits: fromUser.credits - args.amount,
    });
    await ctx.db.patch(args.toUserId, {
      credits: toUser.credits + args.amount,
    });
  },
});
````

### Actions (External APIs & Side Effects)

Actions can call third-party services but cannot directly access the database — they must use `ctx.runQuery` and `ctx.runMutation`.

```typescript
import { action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const sendEmail = action({
  args: { to: v.string(), subject: v.string(), body: v.string() },
  handler: async (ctx, args) => {
    // Call external API
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: args.to }] }],
        from: { email: "noreply@example.com" },
        subject: args.subject,
        content: [{ type: "text/plain", value: args.body }],
      }),
    });

    if (!response.ok) throw new Error("Failed to send email");

    // Write result back to database via mutation
    await ctx.runMutation(api.emails.recordSent, {
      to: args.to,
      subject: args.subject,
      sentAt: Date.now(),
    });
  },
});

// Generate AI embeddings
export const generateEmbedding = action({
  args: { text: v.string(), documentId: v.id("documents") },
  handler: async (ctx, args) => {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: args.text,
      }),
    });

    const { data } = await response.json();
    await ctx.runMutation(api.documents.saveEmbedding, {
      documentId: args.documentId,
      embedding: data[0].embedding,
    });
  },
});
```

### HTTP Actions (Webhooks)

```typescript
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/webhooks/stripe",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    // Verify webhook signature here...

    const event = JSON.parse(body);
    await ctx.runMutation(api.payments.handleWebhook, { event });

    return new Response("OK", { status: 200 });
  }),
});

export default http;
```

#### Imported: Client-Side Integration

### React / Next.js

```typescript
// app/ConvexClientProvider.tsx
"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
```

```typescript
// app/layout.tsx — wrap children
import { ConvexClientProvider } from "./ConvexClientProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
```

```typescript
// Component using Convex hooks
"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export function TaskList() {
  // Reactive query — auto-updates when data changes
  const tasks = useQuery(api.tasks.list);
  const addTask = useMutation(api.tasks.create);
  const toggleTask = useMutation(api.tasks.update);

  if (tasks === undefined) return <p>Loading...</p>;

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() =>
              toggleTask({ id: task._id, isCompleted: !task.isCompleted })
            }
          />
          {task.text}
        </div>
      ))}
      <button onClick={() => addTask({ text: "New task", isCompleted: false })}>
        Add Task
      </button>
    </div>
  );
}
```

```typescript
// Component using Paginated Queries
"use client";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function MessageLog() {
  const { results, status, loadMore } = usePaginatedQuery(
    api.messages.listPaginated,
    {}, // args
    { initialNumItems: 20 }
  );

  return (
    <div>
      {results.map((msg) => (
        <div key={msg._id}>{msg.body}</div>
      ))}

      {status === "LoadingFirstPage" && <p>Loading...</p>}

      {status === "CanLoadMore" && (
        <button onClick={() => loadMore(20)}>Load More</button>
      )}
    </div>
  );
}
```

### With Auth (First-Party Convex Auth)

Convex provides a robust, native authentication library (`@convex-dev/auth`) featuring Magic Links, Passwords, and 80+ OAuth providers without needing a third-party service.

```typescript
// app/ConvexClientProvider.tsx
"use client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexAuthProvider client={convex}>
      {children}
    </ConvexAuthProvider>
  );
}
```

```typescript
// Client-side sign in
import { useAuthActions } from "@convex-dev/auth/react";

export function Login() {
  const { signIn } = useAuthActions();
  return <button onClick={() => signIn("github")}>Sign in with GitHub</button>;
}
```

### With Auth (Third-Party Clerk Example)

If you prefer a hosted third-party solution like Clerk:

```typescript
// app/ConvexClientProvider.tsx
"use client";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
```

### With Auth (Better Auth Component)

Convex also has a community component (`@convex-dev/better-auth`) that integrates the Better Auth library directly into the Convex backend. This is currently in **early alpha**.

```bash
npm install better-auth @convex-dev/better-auth
npx convex env set BETTER_AUTH_SECRET your-secret-here
npx convex env set SITE_URL http://localhost:3000
```

Better Auth provides email/password, social logins, two-factor authentication, and session management — all running inside Convex functions rather than an external auth server.

### Angular Integration

Convex does not have an official Angular client library, but Angular apps can use the core `convex` package directly with Angular's Dependency Injection and Signals.

```typescript
// services/convex.service.ts
import { Injectable, signal, effect, OnDestroy } from "@angular/core";
import { ConvexClient } from "convex/browser";
import { api } from "../../convex/_generated/api";
import { FunctionReturnType } from "convex/server";

@Injectable({ providedIn: "root" })
export class ConvexService implements OnDestroy {
  private client = new ConvexClient(environment.convexUrl);

  // Reactive signal — updates automatically when data changes
  tasks = signal<FunctionReturnType<typeof api.tasks.list> | undefined>(
    undefined,
  );

  constructor() {
    // Subscribe to a reactive query
    this.client.onUpdate(api.tasks.list, {}, (result) => {
      this.tasks.set(result);
    });
  }

  async addTask(text: string) {
    await this.client.mutation(api.tasks.create, {
      text,
      isCompleted: false,
    });
  }

  ngOnDestroy() {
    this.client.close();
  }
}
```

```typescript
// Component usage
import { Component, inject } from "@angular/core";
import { ConvexService } from "./services/convex.service";

@Component({
  selector: "app-task-list",
  template: `
    @if (convex.tasks(); as tasks) {
      @for (task of tasks; track task._id) {
        <div>{{ task.text }}</div>
      }
    } @else {
      <p>Loading...</p>
    }
    <button (click)="convex.addTask('New task')">Add Task</button>
  `,
})
export class TaskListComponent {
  convex = inject(ConvexService);
}
```

> **Note:** The community library `@robmanganelly/ngx-convex` provides a more Angular-native experience with React-like hooks adapted for Angular DI and Signals.

#### Imported: Scheduling & Cron Jobs

### One-off Scheduled Functions

```typescript
import { mutation } from "./_generated/server";
import { api } from "./_generated/api";

export const sendReminder = mutation({
  args: { userId: v.id("users"), message: v.string(), delayMs: v.number() },
  handler: async (ctx, args) => {
    await ctx.scheduler.runAfter(args.delayMs, api.notifications.send, {
      userId: args.userId,
      message: args.message,
    });
  },
});
```

### Cron Jobs

```typescript
// convex/crons.ts
import { cronJobs } from "convex/server";
import { api } from "./_generated/api";

const crons = cronJobs();

crons.interval("clear old logs", { hours: 24 }, api.logs.clearOld);

crons.cron(
  "weekly digest",
  "0 9 * * 1", // Every Monday at 9 AM
  api.emails.sendWeeklyDigest,
);

export default crons;
```

#### Imported: File Storage

```typescript
// Generate an upload URL (mutation)
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

// Save file reference after upload (mutation)
export const saveFile = mutation({
  args: { storageId: v.id("_storage"), name: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("files", {
      storageId: args.storageId,
      name: args.name,
    });
  },
});

// Get a URL to serve a file (query)
export const getFileUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
```

#### Imported: Environment Variables

```bash
# Set environment variables for your deployment
npx convex env set OPENAI_API_KEY sk-...
npx convex env set SENDGRID_API_KEY SG...

# List current env vars
npx convex env list

# Remove an env var
npx convex env unset OPENAI_API_KEY
```

Access in actions (NOT in queries or mutations):

```typescript
// Only available in actions
const apiKey = process.env.OPENAI_API_KEY;
```

#### Imported: Deployment & CLI

```bash
# Development (watches for changes, syncs to dev deployment)
npx convex dev

# Deploy to production
npx convex deploy

# Import data
npx convex import --table tasks data.jsonl

# Export data
npx convex export --path ./backup

# Open Convex dashboard
npx convex dashboard

# Run a function from CLI
npx convex run tasks:list

# View logs
npx convex logs
```

#### Imported: Anti-Patterns to Avoid

1. **❌ External API calls in queries/mutations**: Only actions can call external services. Queries and mutations run in the Convex transaction engine.
2. **❌ Doing slow CPU-bound work in mutations**: Mutations block database commits; offload heavy processing to actions.
3. **❌ Using `.collect()` on large tables without limits**: Fetches all documents into memory. Use `.take(N)` or `.paginate()`.
4. **❌ Skipping schema definition**: Without a schema you lose end-to-end type safety, the main Convex advantage.
5. **❌ Using `.filter()` instead of indexes**: `.filter()` does a full table scan. Define an index and use `.withIndex()`.
6. **❌ Storing large blobs in documents**: Use Convex file storage (`_storage`) for files; keep documents lean.
7. **❌ Circular `runQuery`/`runMutation` chains**: Actions calling mutations that schedule actions can create infinite loops.

#### Imported: Common Pitfalls

- **Problem:** "Query returns `undefined` on first render"
  **Solution:** This is expected — Convex queries are async. Check for `undefined` before rendering (this means loading, not empty).

- **Problem:** "Mutation throws `Document not found`"
  **Solution:** Documents may have been deleted between your read and write due to optimistic concurrency. Re-read inside the mutation.

- **Problem:** "`process.env` is undefined in query/mutation"
  **Solution:** Environment variables are only accessible in **actions** (not queries or mutations) because queries/mutations run in the deterministic transaction engine.

- **Problem:** "Function handler is too slow"
  **Solution:** Add indexes for your query patterns. Use `withIndex()` instead of `.filter()`. For complex operations, break into smaller mutations.

- **Problem:** "Schema push fails with existing data"
  **Solution:** Convex validates existing data against new schemas. Either migrate existing documents first, or use `v.optional()` for new fields.

#### Imported: Limitations

- Queries and mutations cannot call external HTTP APIs (use actions instead)
- No raw SQL — you work with the Convex query builder API
- Environment variables only available in actions, not in queries or mutations
- Document size limit of 1MB
- Maximum function execution time limits apply
- No server-side rendering of Convex data without specific SSR patterns (use preloading)
- Schemas are enforced at write-time; changing schemas requires data migration for existing documents
