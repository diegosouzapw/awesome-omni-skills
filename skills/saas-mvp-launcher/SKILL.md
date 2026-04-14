---
name: saas-mvp-launcher
description: "SaaS MVP Launcher workflow skill. Use this skill when the user needs planning or building a SaaS MVP from scratch. Provides a structured roadmap covering tech stack, architecture, auth, payments, and launch checklist and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["saas-mvp-launcher", "planning", "building", "saas", "mvp", "scratch", "provides", "structured"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# SaaS MVP Launcher

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/saas-mvp-launcher` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SaaS MVP Launcher

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when starting a new SaaS product from scratch
- Use when you need to choose a tech stack for a web application
- Use when setting up authentication, billing, or database for a SaaS
- Use when you want a structured launch checklist before going live
- Use when designing the architecture of a multi-tenant application
- Use when doing a technical review of an existing early-stage SaaS

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

1. [ ] Can you describe the problem in one sentence?
2. [ ] Who is the exact customer? (not "everyone")
3. [ ] What do they pay for today to solve this?
4. [ ] Have you talked to 5+ potential customers?
5. [ ] Will they pay $X/month for your solution?
6. Layer - Choice - Why
7. Frontend - Next.js 15 + TypeScript - Full-stack, great DX, Vercel deploy

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Validate Before You Build

Before writing any code, validate the idea:

```
Validation checklist:
- [ ] Can you describe the problem in one sentence?
- [ ] Who is the exact customer? (not "everyone")
- [ ] What do they pay for today to solve this?
- [ ] Have you talked to 5+ potential customers?
- [ ] Will they pay $X/month for your solution?
```

**Rule:** If you can't get 3 people to pre-pay or sign a letter of intent, don't build yet.

### 2. Choose Your Tech Stack

Recommended modern SaaS stack (2026):

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | Next.js 15 + TypeScript | Full-stack, great DX, Vercel deploy |
| Styling | Tailwind CSS + shadcn/ui | Fast, accessible, customizable |
| Backend | Next.js API Routes or tRPC | Type-safe, co-located |
| Database | PostgreSQL via Supabase | Reliable, scalable, free tier |
| ORM | Prisma or Drizzle | Type-safe queries, migrations |
| Auth | Clerk or NextAuth.js | Social login, session management |
| Payments | Stripe | Industry standard, great docs |
| Email | Resend + React Email | Modern, developer-friendly |
| Deployment | Vercel (frontend) + Railway (backend) | Zero-config, fast CI/CD |
| Monitoring | Sentry + PostHog | Error tracking + analytics |

### 3. Project Structure

```
my-saas/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Auth routes (login, signup)
│   ├── (dashboard)/        # Protected app routes
│   ├── (marketing)/        # Public landing pages
│   └── api/                # API routes
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── [feature]/          # Feature-specific components
├── lib/
│   ├── db.ts               # Database client (Prisma/Drizzle)
│   ├── stripe.ts           # Stripe client
│   └── email.ts            # Email client (Resend)
├── prisma/
│   └── schema.prisma       # Database schema
├── .env.local              # Environment variables
└── middleware.ts           # Auth middleware
```

### 4. Core Database Schema (Multi-tenant SaaS)

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  createdAt     DateTime  @default(now())
  subscription  Subscription?
  workspaces    WorkspaceMember[]
}

model Workspace {
  id        String    @id @default(cuid())
  name      String
  slug      String    @unique
  plan      Plan      @default(FREE)
  members   WorkspaceMember[]
  createdAt DateTime  @default(now())
}

model Subscription {
  id                 String   @id @default(cuid())
  userId             String   @unique
  user               User     @relation(fields: [userId], references: [id])
  stripeCustomerId   String   @unique
  stripePriceId      String
  stripeSubId        String   @unique
  status             String   # active, canceled, past_due
  currentPeriodEnd   DateTime
}

enum Plan {
  FREE
  PRO
  ENTERPRISE
}
```

### 5. Authentication Setup (Clerk)

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/pricing',
  '/blog(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

### 6. Stripe Integration (Subscriptions)

```typescript
// lib/stripe.ts
import Stripe from 'stripe';
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

// Create checkout session
export async function createCheckoutSession(userId: string, priceId: string) {
  return stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
    metadata: { userId },
  });
}
```

### 7. Pre-Launch Checklist

**Technical:**
- [ ] Authentication works (signup, login, logout, password reset)
- [ ] Payments work end-to-end (subscribe, cancel, upgrade)
- [ ] Error monitoring configured (Sentry)
- [ ] Environment variables documented
- [ ] Database backups configured
- [ ] Rate limiting on API routes
- [ ] Input validation with Zod on all forms
- [ ] HTTPS enforced, security headers set

**Product:**
- [ ] Landing page with clear value proposition
- [ ] Pricing page with 2-3 tiers
- [ ] Onboarding flow (first value in < 5 minutes)
- [ ] Email sequences (welcome, trial ending, payment failed)
- [ ] Terms of Service and Privacy Policy pages
- [ ] Support channel (email / chat)

**Marketing:**
- [ ] Domain purchased and configured
- [ ] SEO meta tags on all pages
- [ ] Google Analytics or PostHog installed
- [ ] Social media accounts created
- [ ] Product Hunt draft ready

#### Imported: Overview

This skill guides you through building a production-ready SaaS MVP in the shortest time possible. It covers everything from idea validation and tech stack selection to authentication, payments, database design, deployment, and launch — using modern, battle-tested tools.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @saas-mvp-launcher to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/saas-mvp-launcher/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/saas-mvp-launcher/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @saas-mvp-launcher using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Ship a working MVP in 4-6 weeks maximum, then iterate based on feedback
- ✅ Do: Charge from day 1 — free users don't validate product-market fit
- ✅ Do: Build the "happy path" first, handle edge cases later
- ✅ Do: Use feature flags for gradual rollouts (e.g., Vercel Edge Config)
- ✅ Do: Monitor user behavior from launch day — not after problems arise
- ❌ Don't: Build every feature before talking to customers
- ❌ Don't: Optimize for scale before reaching $10k MRR

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Ship a working MVP in 4-6 weeks maximum, then iterate based on feedback
- ✅ **Do:** Charge from day 1 — free users don't validate product-market fit
- ✅ **Do:** Build the "happy path" first, handle edge cases later
- ✅ **Do:** Use feature flags for gradual rollouts (e.g., Vercel Edge Config)
- ✅ **Do:** Monitor user behavior from launch day — not after problems arise
- ❌ **Don't:** Build every feature before talking to customers
- ❌ **Don't:** Optimize for scale before reaching $10k MRR
- ❌ **Don't:** Build a custom auth system — use Clerk, Auth.js, or Supabase Auth
- ❌ **Don't:** Skip the onboarding flow — it's where most SaaS lose users

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/saas-mvp-launcher`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** Users sign up but don't activate (don't use core feature)
**Solution:** Reduce steps to first value. Track with PostHog where users drop off in onboarding.

**Problem:** High churn after trial
**Solution:** Add an exit survey. Most churn is due to lack of perceived value, not price.

**Problem:** Stripe webhook events not received locally
**Solution:** Use Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

**Problem:** Database migrations failing in production
**Solution:** Always run `prisma migrate deploy` (not `prisma migrate dev`) in production environments.

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
