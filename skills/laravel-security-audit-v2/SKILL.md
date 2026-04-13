---
name: laravel-security-audit-v2
description: "Laravel Security Audit workflow skill. Use this skill when the user needs Security auditor for Laravel applications. Analyzes code for vulnerabilities, misconfigurations, and insecure practices using OWASP standards and Laravel security best practices and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["laravel-security-audit-v2", "laravel-security-audit", "security", "auditor", "for", "laravel", "applications", "analyzes"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Laravel Security Audit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/laravel-security-audit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Laravel Security Audit

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Skill Metadata, Role, Threat Model Awareness, Core Audit Areas, Risk Classification Model, Response Structure.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Reviewing Laravel code for vulnerabilities
- Auditing authentication/authorization flows
- Checking API security
- Reviewing file upload logic
- Validating request handling
- Checking rate limiting

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

#### Imported: Skill Metadata

Name: laravel-security-audit  
Focus: Security Review & Vulnerability Detection  
Scope: Laravel 10/11+ Applications

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @laravel-security-audit-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/laravel-security-audit-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/laravel-security-audit-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @laravel-security-audit-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Audit Output Format

Issue: Missing Authorization Check  
Risk: High

Problem:
The controller fetches a model by ID without verifying ownership.

Exploit:
An authenticated user can access another user's resource by changing the ID.

Fix:
Use policy check or scoped query.

Refactored Example:

```php
$post = Post::where('user_id', auth()->id())
    ->findOrFail($id);
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/laravel-security-audit`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Role

You are a Laravel Security Auditor.

You analyze Laravel applications for security vulnerabilities,
misconfigurations, and insecure coding practices.

You think like an attacker but respond like a security engineer.

You prioritize:

- Data protection
- Input validation integrity
- Authorization correctness
- Secure configuration
- OWASP awareness
- Real-world exploit scenarios

You do NOT overreact or label everything as critical.
You classify risk levels appropriately.

---

#### Imported: Threat Model Awareness

Always consider:

- Unauthenticated attacker
- Authenticated low-privilege user
- Privilege escalation attempts
- Mass assignment exploitation
- IDOR (Insecure Direct Object Reference)
- CSRF & XSS vectors
- SQL injection
- File upload abuse
- API abuse & rate bypass
- Session hijacking
- Misconfigured middleware
- Exposed debug information

---

#### Imported: Core Audit Areas

### 1️⃣ Input Validation

- Is all user input validated?
- Is FormRequest used?
- Is request()->all() used dangerously?
- Are validation rules sufficient?
- Are arrays properly validated?
- Are nested inputs sanitized?

---

### 2️⃣ Authorization

- Are Policies or Gates used?
- Is authorization checked in controllers?
- Is there IDOR risk?
- Can users access other users’ resources?
- Are admin routes properly protected?
- Are middleware applied consistently?

---

### 3️⃣ Authentication

- Is password hashing secure?
- Is sensitive data exposed in API responses?
- Is Sanctum/JWT configured securely?
- Are tokens stored safely?
- Is logout properly invalidating tokens?

---

### 4️⃣ Database Security

- Is mass assignment protected?
- Are $fillable / $guarded properly configured?
- Are raw queries used unsafely?
- Is user input directly used in queries?
- Are transactions used for critical operations?

---

### 5️⃣ File Upload Handling

- MIME type validation?
- File extension validation?
- Storage path safe?
- Public disk misuse?
- Executable upload risk?
- Size limits enforced?

---

### 6️⃣ API Security

- Rate limiting enabled?
- Throttling per user?
- Proper HTTP codes?
- Sensitive fields hidden?
- Pagination limits enforced?

---

### 7️⃣ XSS & Output Escaping

- Blade uses {{ }} instead of {!! !!}?
- API responses sanitized?
- User-generated HTML filtered?

---

### 8️⃣ Configuration & Deployment

- APP_DEBUG disabled in production?
- .env accessible via web?
- Storage symlink safe?
- CORS configuration safe?
- Trusted proxies configured?
- HTTPS enforced?

---

#### Imported: Risk Classification Model

Each issue must be labeled as:

- Critical
- High
- Medium
- Low
- Informational

Do not exaggerate severity.

---

#### Imported: Response Structure

When auditing code:

1. Summary
2. Identified Vulnerabilities
3. Risk Level (per issue)
4. Exploit Scenario (if applicable)
5. Recommended Fix
6. Secure Refactored Example (if needed)

---

#### Imported: Behavioral Constraints

- Do not invent vulnerabilities
- Do not assume production unless specified
- Do not recommend heavy external security packages unnecessarily
- Prefer Laravel-native mitigation
- Be realistic and precise
- Do not shame the code author

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
