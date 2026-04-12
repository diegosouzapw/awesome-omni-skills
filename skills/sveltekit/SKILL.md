---
name: sveltekit
description: "SvelteKit Full-Stack Development workflow skill. Use this skill when the user needs Build full-stack web applications with SvelteKit \u2014 file-based routing, SSR, SSG, API routes, and form actions in one framework and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["svelte", "sveltekit", "fullstack", "ssr", "ssg", "typescript", "build", "full-stack"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "suhaibjanjua"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SvelteKit Full-Stack Development

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/sveltekit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SvelteKit Full-Stack Development

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Security & Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building a new full-stack web application with Svelte
- Use when you need SSR or SSG with fine-grained control per route
- Use when migrating a SPA to a framework with server capabilities
- Use when working on a project that needs file-based routing and collocated API endpoints
- Use when the user asks about +page.svelte, +layout.svelte, load functions, or form actions
- Use when the request clearly matches the imported source intent: Build full-stack web applications with SvelteKit — file-based routing, SSR, SSG, API routes, and form actions in one framework.

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

SvelteKit is the official full-stack framework built on top of Svelte. It provides file-based routing, server-side rendering (SSR), static site generation (SSG), API routes, and progressive form actions — all with Svelte's compile-time reactivity model that ships zero runtime overhead to the browser. Use this skill when building fast, modern web apps where both DX and performance matter.

#### Imported: How It Works

### Step 1: Project Setup

```bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```

Choose **Skeleton project** + **TypeScript** + **ESLint/Prettier** when prompted.

Directory structure after scaffolding:

```
src/
  routes/
    +page.svelte        ← Root page component
    +layout.svelte      ← Root layout (wraps all pages)
    +error.svelte       ← Error boundary
  lib/
    server/             ← Server-only code (never bundled to client)
    components/         ← Shared components
  app.html              ← HTML shell
static/                 ← Static assets
```

### Step 2: File-Based Routing

Every `+page.svelte` file in `src/routes/` maps directly to a URL:

```
src/routes/+page.svelte          → /
src/routes/about/+page.svelte    → /about
src/routes/blog/[slug]/+page.svelte  → /blog/:slug
src/routes/shop/[...path]/+page.svelte → /shop/* (catch-all)
```

**Route groups** (no URL segment): wrap in `(group)/` folder.
**Private routes** (not accessible as URLs): prefix with `_` or `(group)`.

### Step 3: Loading Data with `load` Functions

Use a `+page.ts` (universal) or `+page.server.ts` (server-only) file alongside the page:

```typescript
// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
  const post = await fetch(`/api/posts/${params.slug}`).then(r => r.json());

  if (!post) {
    error(404, 'Post not found');
  }

  return { post };
};
```

```svelte
<!-- src/routes/blog/[slug]/+page.svelte -->
<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<h1>{data.post.title}</h1>
<article>{@html data.post.content}</article>
```

### Step 4: API Routes (Server Endpoints)

Create `+server.ts` files for REST-style endpoints:

```typescript
// src/routes/api/posts/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const limit = Number(url.searchParams.get('limit') ?? 10);
  const posts = await db.post.findMany({ take: limit });
  return json(posts);
};

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();
  const post = await db.post.create({ data: body });
  return json(post, { status: 201 });
};
```

### Step 5: Form Actions

Form actions are the SvelteKit-native way to handle mutations — no client-side fetch required:

```typescript
// src/routes/contact/+page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');

    if (!email) {
      return fail(400, { email, missing: true });
    }

    await sendEmail(String(email));
    redirect(303, '/thank-you');
  }
};
```

```svelte
<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';
  export let form: ActionData;
</script>

<form method="POST" use:enhance>
  <input name="email" type="email" />
  {#if form?.missing}<p class="error">Email is required</p>{/if}
  <button type="submit">Subscribe</button>
</form>
```

### Step 6: Layouts and Nested Routes

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import type { LayoutData } from './$types';
  export let data: LayoutData;
</script>

<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  {#if data.user}
    <a href="/dashboard">Dashboard</a>
  {/if}
</nav>

<slot />  <!-- child page renders here -->
```

```typescript
// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  return { user: locals.user ?? null };
};
```

### Step 7: Rendering Modes

Control per-route rendering with page options:

```typescript
// src/routes/docs/+page.ts
export const prerender = true;   // Static — generated at build time
export const ssr = true;         // Default — rendered on server per request
export const csr = false;        // Disable client-side hydration entirely
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sveltekit to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/sveltekit/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/sveltekit/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @sveltekit using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Protected Dashboard Route

```typescript
// src/routes/dashboard/+layout.server.ts
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  if (!locals.user) {
    redirect(303, '/login');
  }
  return { user: locals.user };
};
```

### Example 2: Hooks — Session Middleware

```typescript
// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { verifyToken } from '$lib/server/auth';

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get('session');
  if (token) {
    event.locals.user = await verifyToken(token);
  }
  return resolve(event);
};
```

### Example 3: Preloading and Invalidation

```svelte
<script lang="ts">
  import { invalidateAll } from '$app/navigation';

  async function refresh() {
    await invalidateAll(); // re-runs all load functions on the page
  }
</script>

<button on:click={refresh}>Refresh</button>
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Use +page.server.ts for database/auth logic — it never ships to the client
- ✅ Use $lib/server/ for shared server-only modules (DB client, auth helpers)
- ✅ Use form actions for mutations instead of client-side fetch — works without JS
- ✅ Type all load return values with generated $types (PageData, LayoutData)
- ✅ Use event.locals in hooks to pass server-side context to load functions
- ❌ Don't import server-only code in +page.svelte or +layout.svelte directly
- ❌ Don't store sensitive state in stores — use locals on the server

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Use `+page.server.ts` for database/auth logic — it never ships to the client
- ✅ Use `$lib/server/` for shared server-only modules (DB client, auth helpers)
- ✅ Use form actions for mutations instead of client-side `fetch` — works without JS
- ✅ Type all `load` return values with generated `$types` (`PageData`, `LayoutData`)
- ✅ Use `event.locals` in hooks to pass server-side context to load functions
- ❌ Don't import server-only code in `+page.svelte` or `+layout.svelte` directly
- ❌ Don't store sensitive state in stores — use `locals` on the server
- ❌ Don't skip `use:enhance` on forms — without it, forms lose progressive enhancement

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/sveltekit`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Security & Safety Notes

- All code in `+page.server.ts`, `+server.ts`, and `$lib/server/` runs exclusively on the server — safe for DB queries, secrets, and session validation.
- Always validate and sanitize form data before database writes.
- Use `error(403)` or `redirect(303)` from `@sveltejs/kit` rather than returning raw error objects.
- Set `httpOnly: true` and `secure: true` on all auth cookies.
- CSRF protection is built-in for form actions — do not disable `checkOrigin` in production.

#### Imported: Common Pitfalls

- **Problem:** `Cannot use import statement in a module` in `+page.server.ts`
  **Solution:** The file must be `.ts` or `.js`, not `.svelte`. Server files and Svelte components are separate.

- **Problem:** Store value is `undefined` on first SSR render
  **Solution:** Populate the store from the `load` function return value (`data` prop), not from client-side `onMount`.

- **Problem:** Form action does not redirect after submit
  **Solution:** Use `redirect(303, '/path')` from `@sveltejs/kit`, not a plain `return`. 303 is required for POST redirects.

- **Problem:** `locals.user` is undefined inside a `+page.server.ts` load function
  **Solution:** Set `event.locals.user` in `src/hooks.server.ts` before the `resolve()` call.
