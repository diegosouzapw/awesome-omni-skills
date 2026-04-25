---
name: hono-v2
description: "Hono Web Framework workflow skill. Use this skill when the user needs Build ultra-fast web APIs and full-stack apps with Hono \u2014 runs on Cloudflare Workers, Deno, Bun, Node.js, and any WinterCG-compatible runtime and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["hono", "edge", "cloudflare-workers", "bun", "deno", "api", "typescript", "web-standards"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "suhaibjanjua"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Hono Web Framework

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hono` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Hono Web Framework

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Security & Safety Notes, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building a REST or RPC API for edge deployment (Cloudflare Workers, Deno Deploy)
- Use when you need a minimal but type-safe server framework for Bun or Node.js
- Use when building a Backend for Frontend (BFF) layer with low latency requirements
- Use when migrating from Express but wanting better TypeScript support and edge compatibility
- Use when the user asks about Hono routing, middleware, c.req, c.json, or hc() RPC client
- Use when the request clearly matches the imported source intent: Build ultra-fast web APIs and full-stack apps with Hono — runs on Cloudflare Workers, Deno, Bun, Node.js, and any WinterCG-compatible runtime.

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

#### Imported: Overview

Hono (炎, "flame" in Japanese) is a small, ultrafast web framework built on Web Standards (`Request`/`Response`/`fetch`). It runs anywhere: Cloudflare Workers, Deno Deploy, Bun, Node.js, AWS Lambda, and any WinterCG-compatible runtime — with the same code. Hono's router is one of the fastest available, and its middleware system, built-in JSX support, and RPC client make it a strong choice for edge APIs, BFFs, and lightweight full-stack apps.

#### Imported: How It Works

### Step 1: Project Setup

**Cloudflare Workers (recommended for edge):**
```bash
npm create hono@latest my-api
# Select: cloudflare-workers
cd my-api
npm install
npm run dev    # Wrangler local dev
npm run deploy # Deploy to Cloudflare
```

**Bun / Node.js:**
```bash
mkdir my-api && cd my-api
bun init
bun add hono
```

```typescript
// src/index.ts (Bun)
import { Hono } from 'hono';

const app = new Hono();

app.get('/', c => c.text('Hello Hono!'));

export default {
  port: 3000,
  fetch: app.fetch,
};
```

### Step 2: Routing

```typescript
import { Hono } from 'hono';

const app = new Hono();

// Basic methods
app.get('/posts', c => c.json({ posts: [] }));
app.post('/posts', c => c.json({ created: true }, 201));
app.put('/posts/:id', c => c.json({ updated: true }));
app.delete('/posts/:id', c => c.json({ deleted: true }));

// Route params and query strings
app.get('/posts/:id', async c => {
  const id = c.req.param('id');
  const format = c.req.query('format') ?? 'json';
  return c.json({ id, format });
});

// Wildcard
app.get('/static/*', c => c.text('static file'));

export default app;
```

**Chained routing:**
```typescript
app
  .get('/users', listUsers)
  .post('/users', createUser)
  .get('/users/:id', getUser)
  .patch('/users/:id', updateUser)
  .delete('/users/:id', deleteUser);
```

### Step 3: Middleware

Hono middleware works exactly like `fetch` interceptors — before and after handlers:

```typescript
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { bearerAuth } from 'hono/bearer-auth';

const app = new Hono();

// Built-in middleware
app.use('*', logger());
app.use('/api/*', cors({ origin: 'https://myapp.com' }));
app.use('/api/admin/*', bearerAuth({ token: process.env.API_TOKEN! }));

// Custom middleware
app.use('*', async (c, next) => {
  c.set('requestId', crypto.randomUUID());
  await next();
  c.header('X-Request-Id', c.get('requestId'));
});
```

**Available built-in middleware:** `logger`, `cors`, `csrf`, `etag`, `cache`, `basicAuth`, `bearerAuth`, `jwt`, `compress`, `bodyLimit`, `timeout`, `prettyJSON`, `secureHeaders`.

### Step 4: Request and Response Helpers

```typescript
app.post('/submit', async c => {
  // Parse body
  const body = await c.req.json<{ name: string; email: string }>();
  const form = await c.req.formData();
  const text = await c.req.text();

  // Headers and cookies
  const auth = c.req.header('authorization');
  const token = getCookie(c, 'session');

  // Responses
  return c.json({ ok: true });                        // JSON
  return c.text('hello');                             // plain text
  return c.html('<h1>Hello</h1>');                    // HTML
  return c.redirect('/dashboard', 302);              // redirect
  return new Response(stream, { status: 200 });       // raw Response
});
```

### Step 5: Zod Validator Middleware

```typescript
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

const createPostSchema = z.object({
  title: z.string().min(1).max(200),
  body: z.string().min(1),
  tags: z.array(z.string()).default([]),
});

app.post(
  '/posts',
  zValidator('json', createPostSchema),
  async c => {
    const data = c.req.valid('json'); // fully typed
    const post = await db.post.create({ data });
    return c.json(post, 201);
  }
);
```

### Step 6: Route Groups and App Composition

```typescript
// src/routes/posts.ts
import { Hono } from 'hono';

const posts = new Hono();

posts.get('/', async c => { /* list posts */ });
posts.post('/', async c => { /* create post */ });
posts.get('/:id', async c => { /* get post */ });

export default posts;
```

```typescript
// src/index.ts
import { Hono } from 'hono';
import posts from './routes/posts';
import users from './routes/users';

const app = new Hono().basePath('/api');

app.route('/posts', posts);
app.route('/users', users);

export default app;
```

### Step 7: RPC Client (End-to-End Type Safety)

Hono's RPC mode exports route types that the `hc` client consumes — similar to tRPC but using fetch conventions:

```typescript
// server: src/routes/posts.ts
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

const posts = new Hono()
  .get('/', c => c.json({ posts: [{ id: '1', title: 'Hello' }] }))
  .post(
    '/',
    zValidator('json', z.object({ title: z.string() })),
    async c => {
      const { title } = c.req.valid('json');
      return c.json({ id: '2', title }, 201);
    }
  );

export default posts;
export type PostsType = typeof posts;
```

```typescript
// client: src/client.ts
import { hc } from 'hono/client';
import type { PostsType } from '../server/routes/posts';

const client = hc<PostsType>('/api/posts');

// Fully typed — autocomplete on routes, params, and responses
const { posts } = await client.$get().json();
const newPost = await client.$post({ json: { title: 'New Post' } }).json();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hono-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hono-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hono-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hono-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: JWT Auth Middleware

```typescript
import { Hono } from 'hono';
import { jwt, sign } from 'hono/jwt';

const app = new Hono();
const SECRET = process.env.JWT_SECRET!;

app.post('/login', async c => {
  const { email, password } = await c.req.json();
  const user = await validateUser(email, password);
  if (!user) return c.json({ error: 'Invalid credentials' }, 401);

  const token = await sign({ sub: user.id, exp: Math.floor(Date.now() / 1000) + 3600 }, SECRET);
  return c.json({ token });
});

app.use('/api/*', jwt({ secret: SECRET }));
app.get('/api/me', async c => {
  const payload = c.get('jwtPayload');
  const user = await getUserById(payload.sub);
  return c.json(user);
});

export default app;
```

### Example 2: Cloudflare Workers with D1 Database

```typescript
// src/index.ts
import { Hono } from 'hono';

type Bindings = {
  DB: D1Database;
  API_TOKEN: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/users', async c => {
  const { results } = await c.env.DB.prepare('SELECT * FROM users LIMIT 50').all();
  return c.json(results);
});

app.post('/users', async c => {
  const { name, email } = await c.req.json();
  await c.env.DB.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
    .bind(name, email)
    .run();
  return c.json({ created: true }, 201);
});

export default app;
```

### Example 3: Streaming Response

```typescript
import { stream, streamText } from 'hono/streaming';

app.get('/stream', c =>
  streamText(c, async stream => {
    for (const chunk of ['Hello', ' ', 'World']) {
      await stream.write(chunk);
      await stream.sleep(100);
    }
  })
);
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Use route groups (sub-apps) to keep handlers in separate files — app.route('/users', usersRouter)
- ✅ Use zValidator for all request body, query, and param validation
- ✅ Type Cloudflare Workers bindings with the Bindings generic: new Hono<{ Bindings: Env }>()
- ✅ Use the RPC client (hc) when your frontend and backend share the same repo
- ✅ Prefer returning c.json()/c.text() over new Response() for cleaner code
- ❌ Don't use Node.js-specific APIs (fs, path, process) if you want edge portability
- ❌ Don't add heavy dependencies — Hono's value is its tiny footprint on edge runtimes

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Use route groups (sub-apps) to keep handlers in separate files — `app.route('/users', usersRouter)`
- ✅ Use `zValidator` for all request body, query, and param validation
- ✅ Type Cloudflare Workers bindings with the `Bindings` generic: `new Hono<{ Bindings: Env }>()`
- ✅ Use the RPC client (`hc`) when your frontend and backend share the same repo
- ✅ Prefer returning `c.json()`/`c.text()` over `new Response()` for cleaner code
- ❌ Don't use Node.js-specific APIs (`fs`, `path`, `process`) if you want edge portability
- ❌ Don't add heavy dependencies — Hono's value is its tiny footprint on edge runtimes
- ❌ Don't skip middleware typing — use generics (`Variables`, `Bindings`) to keep `c.get()` type-safe

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hono`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@hig-technologies-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@high-end-visual-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hosted-agents-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hosted-agents-v2-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Security & Safety Notes

- Always validate input with `zValidator` before using data from requests.
- Use Hono's built-in `csrf` middleware on mutation endpoints when serving HTML/forms.
- For Cloudflare Workers, store secrets in `wrangler.toml` `[vars]` (non-secret) or `wrangler secret put` (secret) — never hardcode them in source.
- When using `bearerAuth` or `jwt`, ensure tokens are validated server-side — do not trust client-provided user IDs.
- Rate-limit sensitive endpoints (auth, password reset) with Cloudflare Rate Limiting or a custom middleware.

#### Imported: Common Pitfalls

- **Problem:** Handler returns `undefined` — response is empty
  **Solution:** Always `return` a response from handlers: `return c.json(...)` not just `c.json(...)`.

- **Problem:** Middleware runs after the response is sent
  **Solution:** Call `await next()` before post-response logic; Hono runs code after `next()` as the response travels back up the chain.

- **Problem:** `c.env` is undefined on Node.js
  **Solution:** Cloudflare `env` bindings only exist in Workers. Use `process.env` on Node.js.

- **Problem:** Route not matching — gets a 404
  **Solution:** Check that `app.route('/prefix', subRouter)` uses the same prefix your client calls. Sub-routers should **not** repeat the prefix in their own routes.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
