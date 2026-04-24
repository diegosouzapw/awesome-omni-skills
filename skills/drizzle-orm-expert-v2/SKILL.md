---
name: drizzle-orm-expert-v2
description: "Drizzle ORM Expert workflow skill. Use this skill when the user needs Expert in Drizzle ORM for TypeScript \u2014 schema design, relational queries, migrations, and serverless database integration. Use when building type-safe database layers with Drizzle and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["drizzle-orm-expert-v2", "drizzle-orm-expert", "expert", "drizzle", "orm", "for", "typescript", "schema"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-24"
---

# Drizzle ORM Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/drizzle-orm-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Drizzle ORM Expert You are a production-grade Drizzle ORM expert. You help developers build type-safe, performant database layers using Drizzle ORM with TypeScript. You know schema design, the relational query API, Drizzle Kit migrations, and integrations with Next.js, tRPC, and serverless databases (Neon, PlanetScale, Turso, Supabase).

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Schema Design Patterns, Query Patterns, Performance Optimization, Next.js Integration, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user asks to set up Drizzle ORM in a new or existing project
- Use when designing database schemas with Drizzle's TypeScript-first approach
- Use when writing complex relational queries (joins, subqueries, aggregations)
- Use when setting up or troubleshooting Drizzle Kit migrations
- Use when integrating Drizzle with Next.js App Router, tRPC, or Hono
- Use when optimizing database performance (prepared statements, batching, connection pooling)

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

1. ### Configuration typescript // drizzle.config.ts import { defineConfig } from "drizzle-kit"; export default defineConfig({ schema: "./db/schema.ts", out: "./drizzle", dialect: "postgresql", dbCredentials: { url: process.env.DATABASEURL!, }, }); ### Commands bash # Generate migration SQL from schema changes npx drizzle-kit generate # Push schema directly to database (development only — skips migration files) npx drizzle-kit push # Run pending migrations (production) npx drizzle-kit migrate # Open Drizzle Studio (GUI database browser) npx drizzle-kit studio ### PostgreSQL (Neon Serverless) typescript // db/index.ts import { drizzle } from "drizzle-orm/neon-http"; import { neon } from "@neondatabase/serverless"; import as schema from "./schema"; const sql = neon(process.env.DATABASEURL!); export const db = drizzle(sql, { schema }); ### SQLite (Turso/LibSQL) typescript import { drizzle } from "drizzle-orm/libsql"; import { createClient } from "@libsql/client"; import as schema from "./schema"; const client = createClient({ url: process.env.TURSODATABASEURL!, authToken: process.env.TURSOAUTHTOKEN, }); export const db = drizzle(client, { schema }); ### MySQL (PlanetScale) typescript import { drizzle } from "drizzle-orm/planetscale-serverless"; import { Client } from "@planetscale/database"; import * as schema from "./schema"; const client = new Client({ url: process.env.DATABASE_URL!
2. }); export const db = drizzle(client, { schema }); ``
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview and provenance files before loading any copied upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the upstream expectations and the evidence you can point to in the copied files.

### Imported Workflow Notes

#### Imported: Migration Workflow (Drizzle Kit)

### Configuration

```typescript
// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

### Commands

```bash
# Generate migration SQL from schema changes
npx drizzle-kit generate

# Push schema directly to database (development only — skips migration files)
npx drizzle-kit push

# Run pending migrations (production)
npx drizzle-kit migrate

# Open Drizzle Studio (GUI database browser)
npx drizzle-kit studio
```

#### Imported: Database Client Setup

### PostgreSQL (Neon Serverless)

```typescript
// db/index.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
```

### SQLite (Turso/LibSQL)

```typescript
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
export const db = drizzle(client, { schema });
```

### MySQL (PlanetScale)

```typescript
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";
import * as schema from "./schema";

const client = new Client({ url: process.env.DATABASE_URL! });
export const db = drizzle(client, { schema });
```

#### Imported: Core Concepts

### Why Drizzle

Drizzle ORM is a TypeScript-first ORM that generates zero runtime overhead. Unlike Prisma (which uses a query engine binary), Drizzle compiles to raw SQL — making it ideal for edge runtimes and serverless. Key advantages:

- **SQL-like API**: If you know SQL, you know Drizzle
- **Zero dependencies**: Tiny bundle, works in Cloudflare Workers, Vercel Edge, Deno
- **Full type inference**: Schema → types → queries are all connected at compile time
- **Relational Query API**: Prisma-like nested includes without N+1 problems

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @drizzle-orm-expert-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @drizzle-orm-expert-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @drizzle-orm-expert-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @drizzle-orm-expert-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Keep all schema definitions in a single db/schema.ts or split by domain (db/schema/users.ts, db/schema/posts.ts)
- ✅ Do: Use InferSelectModel and InferInsertModel for type safety instead of manual interfaces
- ✅ Do: Use the relational query API (db.query.*) for nested data to avoid N+1 problems
- ✅ Do: Use prepared statements for frequently executed queries in production
- ✅ Do: Use drizzle-kit generate + migrate in production (never push)
- ✅ Do: Pass { schema } to drizzle() to enable the relational query API
- ❌ Don't: Use drizzle-kit push in production — it can cause data loss

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Keep all schema definitions in a single `db/schema.ts` or split by domain (`db/schema/users.ts`, `db/schema/posts.ts`)
- ✅ **Do:** Use `InferSelectModel` and `InferInsertModel` for type safety instead of manual interfaces
- ✅ **Do:** Use the relational query API (`db.query.*`) for nested data to avoid N+1 problems
- ✅ **Do:** Use prepared statements for frequently executed queries in production
- ✅ **Do:** Use `drizzle-kit generate` + `migrate` in production (never `push`)
- ✅ **Do:** Pass `{ schema }` to `drizzle()` to enable the relational query API
- ❌ **Don't:** Use `drizzle-kit push` in production — it can cause data loss
- ❌ **Don't:** Write raw SQL when the Drizzle query builder supports the operation
- ❌ **Don't:** Forget to define `relations()` if you want to use `db.query.*` with `with`
- ❌ **Don't:** Create a new database connection per request in serverless — use connection pooling

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/drizzle-orm-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** `db.query.tableName` is undefined
**Solution:** Pass all schema objects (including relations) to `drizzle()`: `drizzle(client, { schema })`

**Problem:** Migration conflicts after schema changes
**Solution:** Run `npx drizzle-kit generate` to create a new migration, then `npx drizzle-kit migrate`

**Problem:** Type errors on `.returning()` with MySQL
**Solution:** MySQL does not support `RETURNING`. Use `.execute()` and read `insertId` from the result instead.

## Related Skills

- `@debugging-strategies-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@debugging-toolkit-smart-debug-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@deep-research-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@defi-protocol-templates-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Schema Design Patterns

### Table Definitions

```typescript
// db/schema.ts
import { pgTable, text, integer, timestamp, boolean, uuid, pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const roleEnum = pgEnum("role", ["admin", "user", "moderator"]);

// Users table
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Posts table with foreign key
export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  content: text("content"),
  published: boolean("published").default(false).notNull(),
  authorId: uuid("author_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
```

### Relations

```typescript
// db/relations.ts
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));
```

### Type Inference

```typescript
// Infer types directly from your schema — no separate type files needed
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
export type Post = InferSelectModel<typeof posts>;
export type NewPost = InferInsertModel<typeof posts>;
```

#### Imported: Query Patterns

### Select Queries (SQL-like API)

```typescript
import { eq, and, like, desc, count, sql } from "drizzle-orm";

// Basic select
const allUsers = await db.select().from(users);

// Filtered with conditions
const admins = await db.select().from(users).where(eq(users.role, "admin"));

// Partial select (only specific columns)
const emails = await db.select({ email: users.email }).from(users);

// Join query
const postsWithAuthors = await db
  .select({
    title: posts.title,
    authorName: users.name,
  })
  .from(posts)
  .innerJoin(users, eq(posts.authorId, users.id))
  .where(eq(posts.published, true))
  .orderBy(desc(posts.createdAt))
  .limit(10);

// Aggregation
const postCounts = await db
  .select({
    authorId: posts.authorId,
    postCount: count(posts.id),
  })
  .from(posts)
  .groupBy(posts.authorId);
```

### Relational Queries (Prisma-like API)

```typescript
// Nested includes — Drizzle resolves in a single query
const usersWithPosts = await db.query.users.findMany({
  with: {
    posts: {
      where: eq(posts.published, true),
      orderBy: [desc(posts.createdAt)],
      limit: 5,
    },
  },
});

// Find one with nested data
const user = await db.query.users.findFirst({
  where: eq(users.id, userId),
  with: { posts: true },
});
```

### Insert, Update, Delete

```typescript
// Insert with returning
const [newUser] = await db
  .insert(users)
  .values({ email: "dev@example.com", name: "Dev" })
  .returning();

// Batch insert
await db.insert(posts).values([
  { title: "Post 1", authorId: newUser.id },
  { title: "Post 2", authorId: newUser.id },
]);

// Update
await db.update(users).set({ name: "Updated" }).where(eq(users.id, userId));

// Delete
await db.delete(posts).where(eq(posts.authorId, userId));
```

### Transactions

```typescript
const result = await db.transaction(async (tx) => {
  const [user] = await tx.insert(users).values({ email, name }).returning();
  await tx.insert(posts).values({ title: "Welcome Post", authorId: user.id });
  return user;
});
```

#### Imported: Performance Optimization

### Prepared Statements

```typescript
// Prepare once, execute many times
const getUserById = db.query.users
  .findFirst({
    where: eq(users.id, sql.placeholder("id")),
  })
  .prepare("get_user_by_id");

// Execute with parameters
const user = await getUserById.execute({ id: "abc-123" });
```

### Batch Operations

```typescript
// Use db.batch() for multiple independent queries in one round-trip
const [allUsers, recentPosts] = await db.batch([
  db.select().from(users),
  db.select().from(posts).orderBy(desc(posts.createdAt)).limit(10),
]);
```

### Indexing in Schema

```typescript
import { index, uniqueIndex } from "drizzle-orm/pg-core";

export const posts = pgTable(
  "posts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    authorId: uuid("author_id").references(() => users.id).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("posts_author_idx").on(table.authorId),
    index("posts_created_idx").on(table.createdAt),
  ]
);
```

#### Imported: Next.js Integration

### Server Component Usage

```typescript
// app/users/page.tsx (React Server Component)
import { db } from "@/db";
import { users } from "@/db/schema";

export default async function UsersPage() {
  const allUsers = await db.select().from(users);
  return (
    <ul>
      {allUsers.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
```

### Server Action

```typescript
// app/actions.ts
"use server";
import { db } from "@/db";
import { users } from "@/db/schema";

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  await db.insert(users).values({ name, email });
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
