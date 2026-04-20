---
name: "agentmail-v2"
description: "AgentMail \\u2014 Email for AI Agents workflow skill. Use this skill when the user needs Email infrastructure for AI agents. Create accounts, send/receive emails, manage webhooks, and check karma balance via the AgentMail API and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "agentmail-v2"
  - "agentmail"
  - "email"
  - "infrastructure"
  - "for"
  - "create"
  - "accounts"
  - "send"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-20"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "agentmail-v2"
family_name: "AgentMail \u2014 Email for AI Agents"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/agentmail-v2"
upstream_skill: "skills/agentmail-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "83"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "agentmail-v2"
---

# AgentMail — Email for AI Agents

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/agentmail` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# AgentMail — Email for AI Agents AgentMail gives AI agents real email addresses (@theagentmail.net) with a REST API. Agents can send and receive email, sign up for services (GitHub, AWS, Slack, etc.), and get verification codes. A karma system prevents spam and keeps the shared domain's reputation high. Base URL: https://api.theagentmail.net

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Karma system, TypeScript SDK, Error handling, Common patterns, Types, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- An AI agent needs a real inbox/outbox for signups, verification flows, or transactional communication.
- You need to provision AgentMail accounts, send messages, read inbox contents, or register inbound webhooks.
- You need to monitor karma usage or wire email events into agent automation.
- Use when the request clearly matches the imported source intent: Email infrastructure for AI agents. Create accounts, send/receive emails, manage webhooks, and check karma balance via the AgentMail API.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Karma system

Every action has a karma cost or reward:

| Event | Karma | Why |
|---|---|---|
| `money_paid` | +100 | Purchase credits |
| `email_received` | +2 | Someone replied from a trusted domain |
| `account_deleted` | +10 | Karma refunded when you delete an address |
| `email_sent` | -1 | Sending costs karma |
| `account_created` | -10 | Creating addresses costs karma |

**Important rules:**
- Karma is only awarded for inbound emails from trusted providers (Gmail, Outlook, Yahoo, iCloud, ProtonMail, Fastmail, Hey, etc.). Emails from unknown/throwaway domains don't earn karma.
- You only earn karma once per sender until the agent replies. If sender X emails you 5 times without a reply, only the first earns karma. Reply to X, and the next email from X earns karma again.
- Deleting an account refunds the 10 karma it cost to create.

When karma reaches 0, sends and account creation return HTTP 402. Always check balance before operations that cost karma.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agentmail-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @agentmail-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @agentmail-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @agentmail-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick start

All requests require `Authorization: Bearer am_...` header (API key from dashboard).

### Create an email account (-10 karma)

```bash
curl -X POST https://api.theagentmail.net/v1/accounts \
  -H "Authorization: Bearer am_..." \
  -H "Content-Type: application/json" \
  -d '{"address": "my-agent@theagentmail.net"}'
```

Response: `{"data": {"id": "...", "address": "my-agent@theagentmail.net", "displayName": null, "createdAt": 123}}`

### Send email (-1 karma)

```bash
curl -X POST https://api.theagentmail.net/v1/accounts/{accountId}/messages \
  -H "Authorization: Bearer am_..." \
  -H "Content-Type: application/json" \
  -d '{
    "to": ["recipient@example.com"],
    "subject": "Hello from my agent",
    "text": "Plain text body",
    "html": "<p>Optional HTML body</p>"
  }'
```

Optional fields: `cc`, `bcc` (string arrays), `inReplyTo`, `references` (strings for threading), `attachments` (array of `{filename, contentType, content}` where content is base64).

### Read inbox

```bash
# List messages
curl https://api.theagentmail.net/v1/accounts/{accountId}/messages \
  -H "Authorization: Bearer am_..."

# Get full message (with body and attachments)
curl https://api.theagentmail.net/v1/accounts/{accountId}/messages/{messageId} \
  -H "Authorization: Bearer am_..."
```

### Check karma

```bash
curl https://api.theagentmail.net/v1/karma \
  -H "Authorization: Bearer am_..."
```

Response: `{"data": {"balance": 90, "events": [...]}}`

### Register webhook (real-time inbound)

```bash
curl -X POST https://api.theagentmail.net/v1/accounts/{accountId}/webhooks \
  -H "Authorization: Bearer am_..." \
  -H "Content-Type: application/json" \
  -d '{"url": "https://my-agent.example.com/inbox"}'
```

Webhook deliveries include two security headers:
- `X-AgentMail-Signature` -- HMAC-SHA256 hex digest of the request body, signed with the webhook secret
- `X-AgentMail-Timestamp` -- millisecond timestamp of when the delivery was sent

Verify the signature and reject requests with timestamps older than 5 minutes to prevent replay attacks:

```typescript
import { createHmac } from "crypto";

const verifyWebhook = (body: string, signature: string, timestamp: string, secret: string) => {
  if (Date.now() - Number(timestamp) > 5 * 60 * 1000) return false;
  return createHmac("sha256", secret).update(body).digest("hex") === signature;
};
```

### Download attachment

```bash
curl https://api.theagentmail.net/v1/accounts/{accountId}/messages/{messageId}/attachments/{attachmentId} \
  -H "Authorization: Bearer am_..."
```

Returns `{"data": {"url": "https://signed-download-url..."}}`.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/agentmail`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Full API reference

| Method | Path | Description | Karma |
|--------|------|-------------|-------|
| POST | `/v1/accounts` | Create email account | -10 |
| GET | `/v1/accounts` | List all accounts | |
| GET | `/v1/accounts/:id` | Get account details | |
| DELETE | `/v1/accounts/:id` | Delete account | +10 |
| POST | `/v1/accounts/:id/messages` | Send email | -1 |
| GET | `/v1/accounts/:id/messages` | List messages | |
| GET | `/v1/accounts/:id/messages/:msgId` | Get full message | |
| GET | `/v1/accounts/:id/messages/:msgId/attachments/:attId` | Get attachment URL | |
| POST | `/v1/accounts/:id/webhooks` | Register webhook | |
| GET | `/v1/accounts/:id/webhooks` | List webhooks | |
| DELETE | `/v1/accounts/:id/webhooks/:whId` | Delete webhook | |
| GET | `/v1/karma` | Get balance + events | |

#### Imported: TypeScript SDK

```typescript
import { createClient } from "@agentmail/sdk";

const mail = createClient({ apiKey: "am_..." });

// Create account
const account = await mail.accounts.create({
  address: "my-agent@theagentmail.net",
});

// Send email
await mail.messages.send(account.id, {
  to: ["human@example.com"],
  subject: "Hello",
  text: "Sent by an AI agent.",
});

// Read inbox
const messages = await mail.messages.list(account.id);
const detail = await mail.messages.get(account.id, messages[0].id);

// Attachments
const att = await mail.attachments.getUrl(accountId, messageId, attachmentId);
// att.url is a signed download URL

// Webhooks
await mail.webhooks.create(account.id, {
  url: "https://my-agent.example.com/inbox",
});

// Karma
const karma = await mail.karma.getBalance();
console.log(karma.balance);
```

#### Imported: Error handling

```typescript
import { AgentMailError } from "@agentmail/sdk";

try {
  await mail.messages.send(accountId, { to: ["a@b.com"], subject: "Hi", text: "Hey" });
} catch (e) {
  if (e instanceof AgentMailError) {
    console.log(e.status);   // 402, 404, 401, etc.
    console.log(e.code);     // "INSUFFICIENT_KARMA", "NOT_FOUND", etc.
    console.log(e.message);
  }
}
```

#### Imported: Common patterns

### Sign up for a service and read verification email

```typescript
const account = await mail.accounts.create({
  address: "signup-bot@theagentmail.net",
});

// Use the address to sign up (browser automation, API, etc.)

// Poll for verification email
for (let i = 0; i < 30; i++) {
  const messages = await mail.messages.list(account.id);
  const verification = messages.find(m =>
    m.subject.toLowerCase().includes("verify") ||
    m.subject.toLowerCase().includes("confirm")
  );
  if (verification) {
    const detail = await mail.messages.get(account.id, verification.id);
    // Parse verification link/code from detail.bodyText or detail.bodyHtml
    break;
  }
  await new Promise(r => setTimeout(r, 2000));
}
```

### Send email and wait for reply

```typescript
const sent = await mail.messages.send(account.id, {
  to: ["human@company.com"],
  subject: "Question about order #12345",
  text: "Can you check the status?",
});

for (let i = 0; i < 60; i++) {
  const messages = await mail.messages.list(account.id);
  const reply = messages.find(m =>
    m.direction === "inbound" && m.timestamp > sent.timestamp
  );
  if (reply) {
    const detail = await mail.messages.get(account.id, reply.id);
    // Process reply
    break;
  }
  await new Promise(r => setTimeout(r, 5000));
}
```

#### Imported: Types

```typescript
type Account = { id: string; address: string; displayName: string | null; createdAt: number };
type Message = { id: string; from: string; to: string[]; subject: string; direction: "inbound" | "outbound"; status: string; timestamp: number };
type MessageDetail = Message & { cc: string[] | null; bcc: string[] | null; bodyText: string | null; bodyHtml: string | null; inReplyTo: string | null; references: string | null; attachments: AttachmentMeta[] };
type AttachmentMeta = { id: string; filename: string; contentType: string; size: number };
type KarmaBalance = { balance: number; events: KarmaEvent[] };
type KarmaEvent = { id: string; type: string; amount: number; timestamp: number; metadata?: Record<string, unknown> };
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
