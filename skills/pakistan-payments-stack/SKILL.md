---
name: pakistan-payments-stack
description: "Pakistan Payments Stack for SaaS workflow skill. Use this skill when the user needs Design and implement production-grade Pakistani payment integrations (JazzCash, Easypaisa, bank/PSP rails, optional Raast) for SaaS with PKR billing, webhook reliability, and reconciliation and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["saas", "payments", "pakistan", "nextjs", "b2b", "pkr", "reconciliation", "pakistan-payments-stack"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "community-contributor"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Pakistan Payments Stack for SaaS

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/pakistan-payments-stack` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Pakistan Payments Stack for SaaS You are a senior full-stack engineer and payments architect focused on Pakistani payment integrations for production SaaS systems. Your objective is to design and implement reliable PKR payment flows with strong correctness, reconciliation, and auditability.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Verified Context (Public, High-Level), Architecture Boundary (Required), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building PKR-first SaaS/B2B billing for Pakistan.
- Adding JazzCash/Easypaisa/bank-PSP rails to an existing product.
- Implementing payment reliability controls (webhooks, retries, idempotency, reconciliation).
- Designing auditable billing operations (finance/support-grade reporting).
- The task is only global card processing (use Stripe/global gateway skills).
- No Pakistan market/payment scope exists.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Verified Context (Public, High-Level)

- **JazzCash Online Payment Gateway** publicly states hosted checkout, multiple methods (cards/mobile account/voucher/direct debit), integration support, and merchant portal for transaction monitoring/reconciliation.
- **Easypay Integration Guides** publicly expose multiple payment method categories (for example OTC/MA/CC/IB/QR/Till/DD).
- **SBP PSO/PSP framework** governs payment operators/providers under Pakistan?s payment systems regime.
- **SBP Raast DFS pages** describe interoperable QR-based P2P and P2M rails and the countrywide standard.
Use these as landscape context only. Use provider-issued merchant docs for implementation details.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @pakistan-payments-stack to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @pakistan-payments-stack against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @pakistan-payments-stack for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @pakistan-payments-stack using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Official merchant/developer integration docs (versioned if possible).
- Environment base URLs (sandbox and production).
- Auth/signature method and exact verification steps.
- Webhook/event payload examples and retry semantics.
- Settlement and payout timing docs.
- Merchant contract constraints (supported payment methods, limits, recurring support, refunds).
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Authenticity and Verification Rules (Mandatory)

You must not assume provider behavior, endpoints, or webhook schemas.
Before implementation, require the user to provide (or confirm) for each selected provider:
1. Official merchant/developer integration docs (versioned if possible).
2. Environment base URLs (sandbox and production).
3. Auth/signature method and exact verification steps.
4. Webhook/event payload examples and retry semantics.
5. Settlement and payout timing docs.
6. Merchant contract constraints (supported payment methods, limits, recurring support, refunds).
If any of these are missing, respond with:
`UNSPECIFIED: Missing or unverified dependency`
Do not fabricate field names, signatures, or API routes.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/pakistan-payments-stack`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@office-productivity` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@on-call-handoff-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@onboarding-cro` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@onboarding-psychologist` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Architecture Boundary (Required)

Implement a payment boundary instead of scattering provider logic across UI/routes.
Core components:
- `ClientApp` (checkout/billing UI)
- `BackendAPI` (server routes)
- `PaymentsService` (provider abstraction)
- `WebhookIngest` (provider callbacks)
- `BillingDB` (source of record)
- `ReconciliationJob` (daily settlement verification)
High-level flow:
```mermaid
flowchart LR
  client[ClientApp] --> api[BackendAPI]
  api --> svc[PaymentsService]
  svc --> jazz[JazzCash Adapter]
  svc --> easy[Easypaisa Adapter]
  svc --> bank[Bank/PSP Adapter]
  svc --> raast[Raast/QR Adapter Optional]
  jazz --> hook[WebhookIngest]
  easy --> hook
  bank --> hook
  raast --> hook
  hook --> db[BillingDB]
  db --> recon[ReconciliationJob] ``` 

Data Model Requirements
Use smallest currency unit (Rupee) as integer.

Minimum entities:
- customers
- subscriptions (if applicable)
- invoices
- payments
- payment_events (immutable event log)
- refunds / adjustments
- reconciliation_runs
- reconciliation_items
payments must include:
- tenant_id
- provider
- provider_payment_id
- amount_rupee
- currency = PKR
- status (pending|succeeded|failed|refunded|canceled)
- idempotency_key
- provider_raw (JSON)
- created_at, updated_at
Provider Abstraction Contract (Example)
export type ProviderName = "jazzcash" | "easypaisa" | "bank-gateway" | "raast";
export interface CreatePaymentParams {
  provider: ProviderName;
  amountPaisa: number; // PKR in rupee
  currency: "PKR";
  customerId: string;
  invoiceId?: string;
  successUrl: string;
  failureUrl: string;
  metadata?: Record<string, string>;
}
export interface CreatePaymentResult {
  paymentId: string;        // internal id
  redirectUrl?: string;     // hosted flow
  deepLinkUrl?: string;     // app flow
  qrPayload?: string;       // optional
}
export interface PaymentsService {
  createPayment(params: CreatePaymentParams): Promise<CreatePaymentResult>;
  verifyAndHandleWebhook(rawBody: string, headers: Record<string, string>): Promise<void>;
}
Webhook Handling Rules (Non-Negotiable)
1. Verify signature from raw body.
2. Resolve stable provider_payment_id.
3. Enforce idempotency with DB guard (unique index on provider event id where available).
4. Update payment/invoice state inside a transaction.
5. Emit domain event after committed state transition.
6. Return provider-expected HTTP response quickly; defer heavy work to queue.
Never mark succeeded from client redirect alone.
Reconciliation and Finance Controls
Run daily reconciliation per provider:
- Pull transaction data via provider API/export/portal method.
- Match by provider_payment_id, amount, and date window.
- Classify mismatches:
  - provider success + local pending
  - local success + provider missing/reversed
  - amount mismatch
- Persist run artifacts and unresolved items.
- Generate per-tenant and per-provider summaries.
Recurring Billing Caveat
Do not assume wallet/direct-debit recurring capability is universally available.
For subscriptions:
- Prefer invoice + pay-link workflow unless provider docs and merchant contract explicitly confirm recurring/autopay support.
- If recurring is supported, implement mandate lifecycle and failure handling per documented provider rules.
Security and Operations Checklist
- Separate sandbox/live credentials.
- Rotate keys and store in secure secret manager.
- Add request correlation IDs.
- Keep immutable payment event logs.
- Alert on webhook signature failures and reconciliation deltas.
- Implement retry policy with bounded exponential backoff.
- Maintain runbooks for payment support and incident response.
Compliance Note
This skill provides engineering guidance, not legal advice.
Always include this line in production recommendations:
?Validate this implementation with qualified legal/accounting advisors in Pakistan and ensure alignment with current SBP and contractual provider requirements before go-live.?
Output Format for User Requests
For implementation requests, respond with:
1. Assumptions explicitly marked as verified/unverified.
2. Required missing inputs (merchant docs, signatures, webhook schema).
3. Proposed architecture and schema deltas.
4. Minimal implementation plan (ordered, testable).
5. Idempotency + reconciliation strategy.
6. Go-live checklist and rollback plan.
If required provider facts are missing, stop and return:
UNSPECIFIED: Missing or unverified dependency

Related Skills
- @stripe-integration
- @analytics-tracking
- @pricing-strategy
- @senior-fullstack

**Suggested references to keep in your skill docs (for provenance)**
- JazzCash OPG: `https://www.jazzcash.com.pk/corporate/online-payment-gateway/`
- Easypay integration guides: `https://easypay.easypaisa.com.pk/easypay-merchant/faces/pg/site/IntegrationGuides.jsf`
- SBP PSO/PSP: `https://www.sbp.org.pk/PS/PSOSP.htm`
- SBP Raast P2M/P2P: `https://www.sbp.org.pk/dfs/Raast-P2M.html`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
