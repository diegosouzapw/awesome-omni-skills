---
name: privacy-by-design
description: "Privacy by Design workflow skill. Use this skill when the user needs building apps that collect user data. Ensures privacy protections are built in from the start\u2014data minimization, consent, encryption and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["privacy-by-design", "building", "apps", "collect", "user", "data", "ensures", "privacy"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Privacy by Design

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/privacy-by-design` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Privacy by Design

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Legal Frameworks, User Rights (GDPR), Deep Dive: Why It Matters, Common Pitfalls, Third-Party Audit, Implementation Checklist.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when building apps that collect personal data (names, emails, locations, preferences)
- Use when designing database schemas, APIs, or authentication flows
- Use when the user mentions forms, user accounts, analytics, or third-party integrations
- Use when deploying to production—verify privacy controls before launch
- Use when the request clearly matches the imported source intent: building apps that collect user data. Ensures privacy protections are built in from the start—data minimization, consent, encryption.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

Integrate privacy protections into software architecture from the beginning, not as an afterthought. This skill applies Privacy by Design principles (GDPR Article 25, Cavoukian's framework) when designing databases, APIs, and user flows. Protects real users' data and builds trust.

#### Imported: Legal Frameworks

**GDPR (EU)** — Primary reference. Article 25 mandates "data protection by design and by default." Applies to EU users and often adopted globally.

**CCPA (California)** — Right to know, delete, opt-out of sale. Similar principles: minimize, disclose, allow control.

**LGPD (Brazil)** — Aligned with GDPR. Purpose limitation, necessity, transparency. Applies to Brazil users.

Design for the strictest framework you target; it often satisfies others.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @privacy-by-design to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/privacy-by-design/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/privacy-by-design/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @privacy-by-design using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Code Examples

### JavaScript/Node — Minimal User Model

```javascript
// BAD: Collecting everything "just in case"
const user = { email, name, phone, address, birthdate, ipAddress, userAgent, ... };

// GOOD: Minimal, documented purpose
const user = {
  email,        // purpose: authentication
  displayName,  // purpose: UI display
  createdAt,    // purpose: account age
};
```

### JavaScript — Consent Before Tracking

```javascript
// BAD: Track first, ask later
analytics.track(userId, event);

// GOOD: Check consent first
if (userConsent.analytics) {
  analytics.track(userId, event);
}
```

### Python — Safe Logging

```python
# BAD: Logging PII in plain text
logger.info(f"User {user.email} logged in from {request.remote_addr}")

# GOOD: Redact or hash identifiers
logger.info(f"User {hash_user_id(user.id)} logged in")
# Or: logger.info("User login", extra={"user_id_hash": hash_id(user.id)})
```

### SQL — Schema with Purpose and Retention

```sql
-- GOOD: Document purpose and retention in schema
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) NOT NULL,  -- purpose: auth, retention: account lifetime
  display_name VARCHAR(100),   -- purpose: UI, retention: account lifetime
  created_at TIMESTAMPTZ,      -- purpose: audit, retention: 7 years
  last_login_at TIMESTAMPTZ    -- purpose: security, retention: 90 days
);

-- Add retention policy (PostgreSQL example)
-- Schedule job to anonymize/delete last_login_at after 90 days
```

### API — Return Only Needed Fields

```python
# BAD: Returning full user object
return jsonify(user)  # May include internal fields, hashed passwords

# GOOD: Explicit allowlist
return jsonify({
    "id": user.id,
    "email": user.email,
    "displayName": user.display_name,
})
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Ask "do we need this?" for every new data field
- ✅ Design deletion and export flows from day one
- ✅ Use hashing or tokenization for sensitive identifiers when possible
- ✅ Document purpose and retention in schema or metadata
- ❌ Don't log passwords, tokens, or PII in plain text
- ❌ Don't share data with third parties without explicit consent
- ❌ Don't assume "we'll add privacy later"—it rarely happens

### Imported Operating Notes

#### Imported: Core Principles

### 1. Data Minimization
Collect only what is strictly necessary. Every field needs a documented justification. Avoid "we might need it later."

### 2. Purpose Limitation
Store the purpose of each data point. Do not reuse data for purposes the user did not consent to.

### 3. Storage Limitation
Define retention periods. Implement automated deletion or anonymization when retention expires. Never keep data "forever" by default.

### 4. Privacy as Default
Opt-in for optional collection, not opt-out. Sensitive settings (analytics, marketing) off by default. No pre-checked consent boxes.

### 5. End-to-End Security
Encrypt at rest and in transit. Use RBAC. Log access to sensitive data for audit.

### 6. Transparency
Document what is collected and why. Clear privacy policies. Easy access and deletion for users.

---

#### Imported: Best Practices

- ✅ Ask "do we need this?" for every new data field
- ✅ Design deletion and export flows from day one
- ✅ Use hashing or tokenization for sensitive identifiers when possible
- ✅ Document purpose and retention in schema or metadata
- ❌ Don't log passwords, tokens, or PII in plain text
- ❌ Don't share data with third parties without explicit consent
- ❌ Don't assume "we'll add privacy later"—it rarely happens
- ❌ Don't expose stack traces or internal errors to clients

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/privacy-by-design`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: User Rights (GDPR)

Ensure these are implementable from day one:

| Right | What to build |
|-------|---------------|
| **Access** | Endpoint or flow to return all user data |
| **Rectification** | Ability to update/correct data |
| **Erasure** | Account deletion + data purge (including backups) |
| **Portability** | Export data in machine-readable format (JSON, CSV) |

---

#### Imported: Deep Dive: Why It Matters

**Data minimization** — Less data = less breach impact, lower storage cost, simpler compliance. Each field is a liability.

**Purpose limitation** — Reusing data without consent is illegal under GDPR. Document purpose in schema or metadata.

**Retention** — Indefinite storage increases risk and violates GDPR. Define `retention_days` per data type; automate cleanup.

**Logging** — Logs often leak PII. Redact emails, IDs, tokens. Use structured logging with allowlists.

**Third parties** — Every SDK (analytics, crash reporting, ads) may send data elsewhere. Audit dependencies; require consent before loading.

---

#### Imported: Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Logs contain emails, IPs, tokens | Redact PII; use hashed IDs or structured logs |
| Error messages expose data | Return generic errors to client; log details server-side |
| Third-party SDKs load before consent | Load analytics/ads only after consent; use consent management |
| No deletion flow | Design account deletion + data purge from day one |
| Backups keep data forever | Include backups in retention; encrypt backups |
| Cookies without consent | Use consent banner; respect Do Not Track where applicable |

---

#### Imported: Third-Party Audit

Before adding a dependency that touches user data:

- [ ] What data does it collect or receive?
- [ ] Where does it send data (servers, countries)?
- [ ] Is it loaded before or after user consent?
- [ ] Can we disable it if user opts out?
- [ ] Does their privacy policy align with ours?

---

#### Imported: Implementation Checklist

When building a feature that touches user data:

- [ ] Is this data necessary? Can we achieve the goal with less?
- [ ] Do we have explicit consent for this use?
- [ ] Is it encrypted (at rest and in transit)?
- [ ] Do we have a retention/deletion policy?
- [ ] Can the user export or delete their data?
- [ ] Are third-party services disclosed and consented?
- [ ] Are logs free of PII?
- [ ] Are backups included in retention policy?

---
