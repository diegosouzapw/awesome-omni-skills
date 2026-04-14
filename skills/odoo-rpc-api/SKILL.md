---
name: odoo-rpc-api
description: "Odoo RPC API workflow skill. Use this skill when the user needs Expert on Odoo's external JSON-RPC and XML-RPC APIs. Covers authentication, model calls, record CRUD, and real-world integration examples in Python, JavaScript, and curl and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["odoo-rpc-api", "expert", "odoo", "external", "json-rpc", "and", "xml-rpc", "apis"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Odoo RPC API

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-rpc-api` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Odoo RPC API

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Connecting an external app (e.g., Django, Node.js, a mobile app) to Odoo.
- Running automated scripts to import/export data from Odoo.
- Building a middleware layer between Odoo and a third-party platform.
- Debugging API authentication or permission errors.
- Use when the request clearly matches the imported source intent: Expert on Odoo's external JSON-RPC and XML-RPC APIs. Covers authentication, model calls, record CRUD, and real-world integration examples in Python, JavaScript, and curl.
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

Odoo exposes a powerful external API via JSON-RPC and XML-RPC, allowing any external application to read, create, update, and delete records. This skill guides you through authenticating, calling models, and building robust integrations.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-rpc-api` and describe the integration you need.
2. **Generate**: Get copy-paste ready RPC call code in Python, JavaScript, or curl.
3. **Debug**: Paste an error and get a diagnosis with a corrected call.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-rpc-api to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/odoo-rpc-api/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/odoo-rpc-api/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @odoo-rpc-api using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Authenticate and Read Records (Python)

```python
import xmlrpc.client

url = 'https://myodoo.example.com'
db = 'my_database'
username = 'admin'
password = 'my_api_key'  # Use API keys, not passwords, in production

# Step 1: Authenticate
common = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/common')
uid = common.authenticate(db, username, password, {})
print(f"Authenticated as UID: {uid}")

# Step 2: Call models
models = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/object')

# Search confirmed sale orders
orders = models.execute_kw(db, uid, password,
    'sale.order', 'search_read',
    [[['state', '=', 'sale']]],
    {'fields': ['name', 'partner_id', 'amount_total'], 'limit': 10}
)
for order in orders:
    print(order)
```

### Example 2: Create a Record (Python)

```python
new_partner_id = models.execute_kw(db, uid, password,
    'res.partner', 'create',
    [{'name': 'Acme Corp', 'email': 'info@acme.com', 'is_company': True}]
)
print(f"Created partner ID: {new_partner_id}")
```

### Example 3: JSON-RPC via curl

```bash
curl -X POST https://myodoo.example.com/web/dataset/call_kw \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "call",
    "id": 1,
    "params": {
      "model": "res.partner",
      "method": "search_read",
      "args": [[["is_company", "=", true]]],
      "kwargs": {"fields": ["name", "email"], "limit": 5}
    }
  }'
# Note: "id" is required by the JSON-RPC 2.0 spec to correlate responses.
# Odoo 16+ also supports the /web/dataset/call_kw endpoint but
# prefer /web/dataset/call_kw for model method calls.
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Use API Keys (Settings → Technical → API Keys) instead of passwords — available from Odoo 14+.
- ✅ Do: Use search_read instead of search + read to reduce network round trips.
- ✅ Do: Always handle connection errors and implement retry logic with exponential backoff in production.
- ✅ Do: Store credentials in environment variables or a secrets manager (e.g., AWS Secrets Manager, .env file).
- ❌ Don't: Hardcode passwords or API keys directly in scripts — rotate them and use env vars.
- ❌ Don't: Call the API in a tight loop without batching — bulk operations reduce server load significantly.
- ❌ Don't: Use the master admin password for API integrations — create a dedicated integration user with minimum required permissions.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use **API Keys** (Settings → Technical → API Keys) instead of passwords — available from Odoo 14+.
- ✅ **Do:** Use `search_read` instead of `search` + `read` to reduce network round trips.
- ✅ **Do:** Always handle connection errors and implement retry logic with exponential backoff in production.
- ✅ **Do:** Store credentials in environment variables or a secrets manager (e.g., AWS Secrets Manager, `.env` file).
- ❌ **Don't:** Hardcode passwords or API keys directly in scripts — rotate them and use env vars.
- ❌ **Don't:** Call the API in a tight loop without batching — bulk operations reduce server load significantly.
- ❌ **Don't:** Use the master admin password for API integrations — create a dedicated integration user with minimum required permissions.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-rpc-api`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Limitations

- Does not cover **OAuth2 or session-cookie-based authentication** — the examples use API key (token) auth only.
- **Rate limiting** is not built into the Odoo XMLRPC layer; you must implement throttling client-side.
- The XML-RPC endpoint (`/xmlrpc/2/`) does not support file uploads — use the REST-based `ir.attachment` model via JSON-RPC for binary data.
- Odoo.sh (SaaS) may block some API calls depending on plan; verify your subscription supports external API access.
