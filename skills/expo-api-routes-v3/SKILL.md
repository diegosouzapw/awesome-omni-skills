---
name: expo-api-routes-v3
description: "Create a secret workflow skill. Use this skill when the user needs Guidelines for creating API routes in Expo Router with EAS Hosting and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["expo-api-routes-v3", "expo-api-routes", "guidelines", "for", "creating", "api", "routes", "expo"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Create a secret

## Overview

This public intake copy packages `plugins/antigravity-bundle-expo-react-native/skills/expo-api-routes` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: File Structure, Basic API Route, HTTP Methods, Dynamic Routes, Request Handling, Environment Variables.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Server-side secrets — API keys, database credentials, or tokens that must never reach the client
- Database operations — Direct database queries that shouldn't be exposed
- Third-party API proxies — Hide API keys when calling external services (OpenAI, Stripe, etc.)
- Server-side validation — Validate data before database writes
- Webhook endpoints — Receive callbacks from services like Stripe or GitHub
- Rate limiting — Control access at the server level

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

#### Imported: File Structure

API routes live in the `app` directory with `+api.ts` suffix:

```
app/
  api/
    hello+api.ts          → GET /api/hello
    users+api.ts          → /api/users
    users/[id]+api.ts     → /api/users/:id
  (tabs)/
    index.tsx
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @expo-api-routes-v3 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/expo-api-routes-v3/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/expo-api-routes-v3/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @expo-api-routes-v3 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- NEVER expose API keys or secrets in client code
- ALWAYS validate and sanitize user input
- Use proper HTTP status codes (200, 201, 400, 401, 404, 500)
- Handle errors gracefully with try/catch
- Keep API routes focused — one responsibility per endpoint
- Use TypeScript for type safety
- Log errors server-side for debugging

### Imported Operating Notes

#### Imported: Rules

- NEVER expose API keys or secrets in client code
- ALWAYS validate and sanitize user input
- Use proper HTTP status codes (200, 201, 400, 401, 404, 500)
- Handle errors gracefully with try/catch
- Keep API routes focused — one responsibility per endpoint
- Use TypeScript for type safety
- Log errors server-side for debugging

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-expo-react-native/skills/expo-api-routes`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Basic API Route

```ts
// app/api/hello+api.ts
export function GET(request: Request) {
  return Response.json({ message: "Hello from Expo!" });
}
```

#### Imported: HTTP Methods

Export named functions for each HTTP method:

```ts
// app/api/items+api.ts
export function GET(request: Request) {
  return Response.json({ items: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({ created: body }, { status: 201 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  return Response.json({ updated: body });
}

export async function DELETE(request: Request) {
  return new Response(null, { status: 204 });
}
```

#### Imported: Dynamic Routes

```ts
// app/api/users/[id]+api.ts
export function GET(request: Request, { id }: { id: string }) {
  return Response.json({ userId: id });
}
```

#### Imported: Request Handling

### Query Parameters

```ts
export function GET(request: Request) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") ?? "1";
  const limit = url.searchParams.get("limit") ?? "10";

  return Response.json({ page, limit });
}
```

### Headers

```ts
export function GET(request: Request) {
  const auth = request.headers.get("Authorization");

  if (!auth) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ authenticated: true });
}
```

### JSON Body

```ts
export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  return Response.json({ success: true });
}
```

#### Imported: Environment Variables

Use `process.env` for server-side secrets:

```ts
// app/api/ai+api.ts
export async function POST(request: Request) {
  const { prompt } = await request.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  return Response.json(data);
}
```

Set environment variables:

- **Local**: Create `.env` file (never commit)
- **EAS Hosting**: Use `eas env:create` or Expo dashboard

#### Imported: CORS Headers

Add CORS for web clients:

```ts
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function OPTIONS() {
  return new Response(null, { headers: corsHeaders });
}

export function GET() {
  return Response.json({ data: "value" }, { headers: corsHeaders });
}
```

#### Imported: Error Handling

```ts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Process...
    return Response.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
```

#### Imported: Testing Locally

Start the development server with API routes:

```bash
npx expo serve
```

This starts a local server at `http://localhost:8081` with full API route support.

Test with curl:

```bash
curl http://localhost:8081/api/hello
curl -X POST http://localhost:8081/api/users -H "Content-Type: application/json" -d '{"name":"Test"}'
```

#### Imported: Deployment to EAS Hosting

### Prerequisites

```bash
npm install -g eas-cli
eas login
```

### Deploy

```bash
eas deploy
```

This builds and deploys your API routes to EAS Hosting (Cloudflare Workers).

### Environment Variables for Production

```bash
# Create a secret
eas env:create --name OPENAI_API_KEY --value sk-xxx --environment production

# Or use the Expo dashboard
```

### Custom Domain

Configure in `eas.json` or Expo dashboard.

#### Imported: EAS Hosting Runtime (Cloudflare Workers)

API routes run on Cloudflare Workers. Key limitations:

### Missing/Limited APIs

- **No Node.js filesystem** — `fs` module unavailable
- **No native Node modules** — Use Web APIs or polyfills
- **Limited execution time** — 30 second timeout for CPU-intensive tasks
- **No persistent connections** — WebSockets require Durable Objects
- **fetch is available** — Use standard fetch for HTTP requests

### Use Web APIs Instead

```ts
// Use Web Crypto instead of Node crypto
const hash = await crypto.subtle.digest(
  "SHA-256",
  new TextEncoder().encode("data")
);

// Use fetch instead of node-fetch
const response = await fetch("https://api.example.com");

// Use Response/Request (already available)
return new Response(JSON.stringify(data), {
  headers: { "Content-Type": "application/json" },
});
```

### Database Options

Since filesystem is unavailable, use cloud databases:

- **Cloudflare D1** — SQLite at the edge
- **Turso** — Distributed SQLite
- **PlanetScale** — Serverless MySQL
- **Supabase** — Postgres with REST API
- **Neon** — Serverless Postgres

Example with Turso:

```ts
// app/api/users+api.ts
import { createClient } from "@libsql/client/web";

const db = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export async function GET() {
  const result = await db.execute("SELECT * FROM users");
  return Response.json(result.rows);
}
```

#### Imported: Calling API Routes from Client

```ts
// From React Native components
const response = await fetch("/api/hello");
const data = await response.json();

// With body
const response = await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "John" }),
});
```

#### Imported: Common Patterns

### Authentication Middleware

```ts
// utils/auth.ts
export async function requireAuth(request: Request) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Verify token...
  return { userId: "123" };
}

// app/api/protected+api.ts
import { requireAuth } from "../../utils/auth";

export async function GET(request: Request) {
  const { userId } = await requireAuth(request);
  return Response.json({ userId });
}
```

### Proxy External API

```ts
// app/api/weather+api.ts
export async function GET(request: Request) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");

  const response = await fetch(
    `https://api.weather.com/v1/current?city=${city}&key=${process.env.WEATHER_API_KEY}`
  );

  return Response.json(await response.json());
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
