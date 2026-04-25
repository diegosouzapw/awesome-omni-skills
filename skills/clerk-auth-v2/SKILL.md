---
name: clerk-auth-v2
description: "Clerk Authentication workflow skill. Use this skill when the user needs Expert patterns for Clerk auth implementation, middleware, and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["clerk-auth-v2", "clerk-auth", "expert", "patterns", "for", "clerk", "auth", "implementation"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Clerk Authentication

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/clerk-auth` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Clerk Authentication Expert patterns for Clerk auth implementation, middleware, organizations, webhooks, and user sync

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Patterns, Sharp Edges, Validation Checks, Collaboration, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: adding authentication
- User mentions or implies: clerk auth
- User mentions or implies: user authentication
- User mentions or implies: sign in
- User mentions or implies: sign up
- User mentions or implies: user management

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

#### Imported: Patterns

### Next.js App Router Setup

Complete Clerk setup for Next.js 14/15 App Router.

Includes ClerkProvider, environment variables, and basic
sign-in/sign-up components.

Key components:
- ClerkProvider: Wraps app for auth context
- <SignIn />, <SignUp />: Pre-built auth forms
- <UserButton />: User menu with session management

### Code_example

# Environment variables (.env.local)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  );
}

// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUp />
    </div>
  );
}

// components/Header.tsx
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export function Header() {
  return (
    <header className="flex justify-between p-4">
      <h1>My App</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  );
}

### Anti_patterns

- Pattern: ClerkProvider inside page component | Why: Provider must wrap entire app in root layout | Fix: Move ClerkProvider to app/layout.tsx
- Pattern: Using auth() without middleware | Why: auth() requires clerkMiddleware to be configured | Fix: Set up middleware.ts with clerkMiddleware

### References

- https://clerk.com/docs/nextjs/getting-started/quickstart

### Middleware Route Protection

Protect routes using clerkMiddleware and createRouteMatcher.

Best practices:
- Single middleware.ts file at project root
- Use createRouteMatcher for route groups
- auth.protect() for explicit protection
- Centralize all auth logic in middleware

### Code_example

// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define protected route patterns
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/settings(.*)',
  '/api/private(.*)',
]);

// Define public routes (optional, for clarity)
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // Protect matched routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Match all routes except static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

// Advanced: Role-based protection
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  // Admin routes require admin role
  if (req.nextUrl.pathname.startsWith('/admin')) {
    await auth.protect({
      role: 'org:admin',
    });
  }

  // Premium routes require premium permission
  if (req.nextUrl.pathname.startsWith('/premium')) {
    await auth.protect({
      permission: 'org:premium:access',
    });
  }
});

### Anti_patterns

- Pattern: Multiple middleware.ts files | Why: Causes conflicts and redirect loops | Fix: Use single middleware.ts with route matchers
- Pattern: Manual redirects in components | Why: Double redirects, missed routes | Fix: Handle all redirects in middleware
- Pattern: Missing matcher config | Why: Middleware won't run on all routes | Fix: Add comprehensive matcher pattern

### References

- https://clerk.com/docs/reference/nextjs/clerk-middleware

### Server Component Authentication

Access auth state in Server Components using auth() and currentUser().

Key functions:
- auth(): Returns userId, sessionId, orgId, claims
- currentUser(): Returns full User object
- Both require clerkMiddleware to be configured

### Code_example

// app/dashboard/page.tsx (Server Component)
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // Full user data (counts toward rate limits)
  const user = await currentUser();

  return (
    <div>
      <h1>Welcome, {user?.firstName}!</h1>
      <p>Email: {user?.emailAddresses[0]?.emailAddress}</p>
    </div>
  );
}

// Using auth() for quick checks
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, orgId, orgRole } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // Check organization access
  if (!orgId) {
    redirect('/select-org');
  }

  return (
    <div>
      <p>Organization Role: {orgRole}</p>
      {children}
    </div>
  );
}

// Server Action with auth check
// app/actions/posts.ts
'use server';
import { auth } from '@clerk/nextjs/server';

export async function createPost(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  const title = formData.get('title') as string;

  // Create post with userId
  const post = await prisma.post.create({
    data: {
      title,
      authorId: userId,
    },
  });

  return post;
}

### Anti_patterns

- Pattern: Not awaiting auth() | Why: auth() is async in App Router | Fix: Use await auth() or const { userId } = await auth()
- Pattern: Using currentUser() for simple checks | Why: Counts toward rate limits, slower than auth() | Fix: Use auth() for userId checks, currentUser() for user data

### References

- https://clerk.com/docs/references/nextjs/auth

### Client Component Hooks

Access auth state in Client Components using hooks.

Key hooks:
- useUser(): User object and loading state
- useAuth(): Auth state, signOut, etc.
- useSession(): Session object
- useOrganization(): Current organization

### Code_example

// components/UserProfile.tsx
'use client';
import { useUser, useAuth } from '@clerk/nextjs';

export function UserProfile() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Not signed in</div>;
  }

  return (
    <div>
      <img src={user.imageUrl} alt={user.fullName ?? ''} />
      <h2>{user.fullName}</h2>
      <p>{user.emailAddresses[0]?.emailAddress}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

// Organization context
'use client';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

export function OrgSwitcher() {
  const { organization, membership } = useOrganization();
  const { setActive, userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  if (!organization) {
    return <p>No organization selected</p>;
  }

  return (
    <div>
      <p>Current: {organization.name}</p>
      <p>Role: {membership?.role}</p>

      <select
        onChange={(e) => setActive?.({ organization: e.target.value })}
        value={organization.id}
      >
        {userMemberships.data?.map((mem) => (
          <option key={mem.organization.id} value={mem.organization.id}>
            {mem.organization.name}
          </option>
        ))}
      </select>
    </div>
  );
}

// Protected client component
'use client';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ProtectedContent() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push('/sign-in');
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) {
    return <div>Loading...</div>;
  }

  return <div>Protected content here</div>;
}

### Anti_patterns

- Pattern: Not checking isLoaded | Why: Auth state undefined during hydration | Fix: Always check isLoaded before accessing user/auth state
- Pattern: Using hooks in Server Components | Why: Hooks only work in Client Components | Fix: Use auth() and currentUser() in Server Components

### References

- https://clerk.com/docs/references/react/use-user

### Organizations and Multi-Tenancy

Implement B2B multi-tenancy with Clerk Organizations.

Features:
- Multiple orgs per user
- Roles and permissions
- Organization-scoped data
- Enterprise SSO per organization

### Code_example

// Organization creation UI
// app/create-org/page.tsx
import { CreateOrganization } from '@clerk/nextjs';

export default function CreateOrgPage() {
  return (
    <div className="flex justify-center">
      <CreateOrganization afterCreateOrganizationUrl="/dashboard" />
    </div>
  );
}

// Organization profile and management
// app/org-settings/page.tsx
import { OrganizationProfile } from '@clerk/nextjs';

export default function OrgSettingsPage() {
  return <OrganizationProfile />;
}

// Organization switcher in header
// components/Header.tsx
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

export function Header() {
  return (
    <header className="flex justify-between p-4">
      <OrganizationSwitcher
        hidePersonal
        afterCreateOrganizationUrl="/dashboard"
        afterSelectOrganizationUrl="/dashboard"
      />
      <UserButton />
    </header>
  );
}

// Org-scoped data access
// app/dashboard/page.tsx
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export default async function DashboardPage() {
  const { orgId } = await auth();

  if (!orgId) {
    redirect('/select-org');
  }

  // Fetch org-scoped data
  const projects = await prisma.project.findMany({
    where: { organizationId: orgId },
  });

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}

// Role-based UI
'use client';
import { useOrganization, Protect } from '@clerk/nextjs';

export function AdminPanel() {
  const { membership } = useOrganization();

  // Using Protect component
  return (
    <Protect role="org:admin" fallback={<p>Admin access required</p>}>
      <div>Admin content here</div>
    </Protect>
  );

  // Or manual check
  if (membership?.role !== 'org:admin') {
    return <p>Admin access required</p>;
  }

  return <div>Admin content here</div>;
}

### Anti_patterns

- Pattern: Not scoping data by orgId | Why: Data leaks between organizations | Fix: Always filter queries by orgId from auth()
- Pattern: Hardcoding role strings | Why: Typos cause access issues | Fix: Define role constants or use TypeScript enums

### References

- https://clerk.com/docs/guides/organizations
- https://clerk.com/articles/multi-tenancy-in-react-applications-guide

### Webhook User Sync

Sync Clerk users to your database using webhooks.

Key webhooks:
- user.created: New user signed up
- user.updated: User profile changed
- user.deleted: User deleted account

Uses svix for signature verification.

### Code_example

// app/api/webhooks/clerk/route.ts
import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Missing CLERK_WEBHOOK_SECRET');
  }

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Verify webhook
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return new Response('Verification failed', { status: 400 });
  }

  // Handle events
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    await prisma.user.create({
      data: {
        clerkId: id,
        email: email_addresses[0]?.email_address,
        firstName: first_name,
        lastName: last_name,
        imageUrl: image_url,
      },
    });
  }

  if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data;

    await prisma.user.update({
      where: { clerkId: id },
      data: {
        email: email_addresses[0]?.email_address,
        firstName: first_name,
        lastName: last_name,
        imageUrl: image_url,
      },
    });
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    await prisma.user.delete({
      where: { clerkId: id! },
    });
  }

  return new Response('Webhook processed', { status: 200 });
}

// Prisma schema
// prisma/schema.prisma
model User {
  id        String   @id @default(cuid())
  clerkId   String   @unique
  email     String   @unique
  firstName String?
  lastName  String?
  imageUrl  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  posts     Post[]
  @@index([clerkId])
}

### Anti_patterns

- Pattern: Not verifying webhook signature | Why: Anyone can hit your endpoint with fake data | Fix: Always verify with svix
- Pattern: Blocking middleware for webhook routes | Why: Webhooks come from Clerk, not authenticated users | Fix: Add /api/webhooks(.*)' to public routes
- Pattern: Not handling race conditions | Why: user.created might arrive after user.updated | Fix: Use upsert instead of create, handle missing records

### References

- https://clerk.com/docs/webhooks/sync-data
- https://clerk.com/articles/how-to-sync-clerk-user-data-to-your-database

### API Route Protection

Protect API routes using auth() from Clerk.

Route Handlers in App Router use auth() for authentication.
Middleware provides initial protection, auth() provides in-handler verification.

### Code_example

// app/api/projects/route.ts
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId, orgId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // User's personal projects or org projects
  const projects = await prisma.project.findMany({
    where: orgId
      ? { organizationId: orgId }
      : { userId, organizationId: null },
  });

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { userId, orgId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const project = await prisma.project.create({
    data: {
      name: body.name,
      userId,
      organizationId: orgId ?? null,
    },
  });

  return NextResponse.json(project, { status: 201 });
}

// Protected with role check
// app/api/admin/users/route.ts
export async function GET() {
  const { userId, orgRole } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (orgRole !== 'org:admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Admin-only logic
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// Using getAuth in older patterns (not recommended)
// For backwards compatibility only
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: Request) {
  const { userId } = getAuth(req);
  // ...
}

### Anti_patterns

- Pattern: Trusting middleware alone | Why: Middleware can be bypassed (CVE-2025-29927) | Fix: Always verify auth in route handler too
- Pattern: Not checking orgId for multi-tenant | Why: Users might access other org's data | Fix: Always filter by orgId from auth()

### References

- https://clerk.com/docs/guides/protecting-pages

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @clerk-auth-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @clerk-auth-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @clerk-auth-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @clerk-auth-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/clerk-auth`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Sharp Edges

### CVE-2025-29927 Middleware Bypass Vulnerability

Severity: CRITICAL

### Multiple Middleware Files Cause Conflicts

Severity: HIGH

### 4KB Session Token Cookie Limit

Severity: HIGH

### auth() Requires clerkMiddleware Configuration

Severity: HIGH

### Webhook Race Conditions

Severity: MEDIUM

### auth() is Async in App Router

Severity: MEDIUM

### Middleware Blocks Webhook Endpoints

Severity: MEDIUM

### Accessing Auth State Before isLoaded

Severity: MEDIUM

### Manual Redirects Cause Double Redirects

Severity: MEDIUM

### Organization Data Not Scoped by orgId

Severity: HIGH

#### Imported: Validation Checks

### Clerk Secret Key in Client Code

Severity: ERROR

CLERK_SECRET_KEY must only be used server-side

Message: Clerk secret key exposed to client. Use CLERK_SECRET_KEY without NEXT_PUBLIC prefix.

### Protected Route Without Middleware

Severity: ERROR

API routes should have middleware protection

Message: API route without auth check. Add middleware protection or auth() check.

### Hardcoded Clerk API Keys

Severity: ERROR

Clerk keys should use environment variables

Message: Hardcoded Clerk keys. Use environment variables.

### Missing Await on auth()

Severity: ERROR

auth() is async in App Router and must be awaited

Message: auth() not awaited. Use 'await auth()' in App Router.

### Multiple Middleware Files

Severity: WARNING

Only one middleware.ts file should exist

Message: Multiple middleware files detected. Use single middleware.ts.

### Webhook Route Not Excluded from Protection

Severity: WARNING

Webhook routes should be public

Message: Webhook route may be blocked by middleware. Add to public routes.

### Accessing Auth Without isLoaded Check

Severity: WARNING

Check isLoaded before accessing user state in client components

Message: Accessing user without isLoaded check. Check isLoaded first.

### Clerk Hooks in Server Component

Severity: ERROR

Clerk hooks only work in Client Components

Message: Clerk hooks in Server Component. Add 'use client' or use auth().

### Multi-Tenant Query Without orgId

Severity: WARNING

Organization data should be scoped by orgId

Message: Query without organization scope. Filter by orgId for multi-tenancy.

### Webhook Without Signature Verification

Severity: ERROR

Clerk webhooks must verify svix signature

Message: Webhook without signature verification. Use svix to verify.

#### Imported: Collaboration

### Delegation Triggers

- user needs database -> postgres-wizard (User table with clerkId)
- user needs payments -> stripe-integration (Customer linked to Clerk user)
- user needs search -> algolia-search (Secured API keys per user)
- user needs analytics -> segment-cdp (User identification)
- user needs email -> resend-email (Transactional emails)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
