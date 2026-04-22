---
name: api-documentation-generator
description: "API Documentation Generator workflow skill. Use this skill when the user needs Generate comprehensive, developer-friendly API documentation from code, including endpoints, parameters, examples, and best practices and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["api-documentation-generator", "generate", "comprehensive", "developer-friendly", "api", "documentation", "including", "endpoints"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-22"
---

# API Documentation Generator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/api-documentation-generator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# API Documentation Generator

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Create User, User Query, Authentication, Documentation Structure, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to document a new API
- Use when updating existing API documentation
- Use when your API lacks clear documentation
- Use when onboarding new developers to your API
- Use when preparing API documentation for external users
- Use when creating OpenAPI/Swagger specifications

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

#### Imported: Overview

Automatically generate clear, comprehensive API documentation from your codebase. This skill helps you create professional documentation that includes endpoint descriptions, request/response examples, authentication details, error handling, and usage guidelines.

Perfect for REST APIs, GraphQL APIs, and WebSocket APIs.

#### Imported: How It Works

### Step 1: Analyze the API Structure

First, I'll examine your API codebase to understand:
- Available endpoints and routes
- HTTP methods (GET, POST, PUT, DELETE, etc.)
- Request parameters and body structure
- Response formats and status codes
- Authentication and authorization requirements
- Error handling patterns

### Step 2: Generate Endpoint Documentation

For each endpoint, I'll create documentation including:

**Endpoint Details:**
- HTTP method and URL path
- Brief description of what it does
- Authentication requirements
- Rate limiting information (if applicable)

**Request Specification:**
- Path parameters
- Query parameters
- Request headers
- Request body schema (with types and validation rules)

**Response Specification:**
- Success response (status code + body structure)
- Error responses (all possible error codes)
- Response headers

**Code Examples:**
- cURL command
- JavaScript/TypeScript (fetch/axios)
- Python (requests)
- Other languages as needed

### Step 3: Add Usage Guidelines

I'll include:
- Getting started guide
- Authentication setup
- Common use cases
- Best practices
- Rate limiting details
- Pagination patterns
- Filtering and sorting options

### Step 4: Document Error Handling

Clear error documentation including:
- All possible error codes
- Error message formats
- Troubleshooting guide
- Common error scenarios and solutions

### Step 5: Create Interactive Examples

Where possible, I'll provide:
- Postman collection
- OpenAPI/Swagger specification
- Interactive code examples
- Sample responses

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @api-documentation-generator to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @api-documentation-generator against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @api-documentation-generator for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @api-documentation-generator using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: REST API Endpoint Documentation

```markdown

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Be Consistent - Use the same format for all endpoints
- Include Examples - Provide working code examples in multiple languages
- Document Errors - List all possible error codes and their meanings
- Show Real Data - Use realistic example data, not "foo" and "bar"
- Explain Parameters - Describe what each parameter does and its constraints
- Version Your API - Include version numbers in URLs (/api/v1/)
- Add Timestamps - Show when documentation was last updated

### Imported Operating Notes

#### Imported: Best Practices

### ✅ Do This

- **Be Consistent** - Use the same format for all endpoints
- **Include Examples** - Provide working code examples in multiple languages
- **Document Errors** - List all possible error codes and their meanings
- **Show Real Data** - Use realistic example data, not "foo" and "bar"
- **Explain Parameters** - Describe what each parameter does and its constraints
- **Version Your API** - Include version numbers in URLs (/api/v1/)
- **Add Timestamps** - Show when documentation was last updated
- **Link Related Endpoints** - Help users discover related functionality
- **Include Rate Limits** - Document any rate limiting policies
- **Provide Postman Collection** - Make it easy to test your API

### ❌ Don't Do This

- **Don't Skip Error Cases** - Users need to know what can go wrong
- **Don't Use Vague Descriptions** - "Gets data" is not helpful
- **Don't Forget Authentication** - Always document auth requirements
- **Don't Ignore Edge Cases** - Document pagination, filtering, sorting
- **Don't Leave Examples Broken** - Test all code examples
- **Don't Use Outdated Info** - Keep documentation in sync with code
- **Don't Overcomplicate** - Keep it simple and scannable
- **Don't Forget Response Headers** - Document important headers

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/api-documentation-generator`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Additional Resources

- [OpenAPI Specification](https://swagger.io/specification/)
- [REST API Best Practices](https://restfulapi.net/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [API Design Patterns](https://www.apiguide.com/)
- [Postman Documentation](https://learning.postman.com/docs/)

---

**Pro Tip:** Keep your API documentation as close to your code as possible. Use tools that generate docs from code comments to ensure they stay in sync!

#### Imported: Create User

Creates a new user account.

**Endpoint:** `POST /api/v1/users`

**Authentication:** Required (Bearer token)

**Request Body:**
\`\`\`json
{
  "email": "user@example.com",      // Required: Valid email address
  "password": "SecurePass123!",     // Required: Min 8 chars, 1 uppercase, 1 number
  "name": "John Doe",               // Required: 2-50 characters
  "role": "user"                    // Optional: "user" or "admin" (default: "user")
}
\`\`\`

**Success Response (201 Created):**
\`\`\`json
{
  "id": "usr_1234567890",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "createdAt": "2026-01-20T10:30:00Z",
  "emailVerified": false
}
\`\`\`

**Error Responses:**

- `400 Bad Request` - Invalid input data
  \`\`\`json
  {
    "error": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "field": "email"
  }
  \`\`\`

- `409 Conflict` - Email already exists
  \`\`\`json
  {
    "error": "EMAIL_EXISTS",
    "message": "An account with this email already exists"
  }
  \`\`\`

- `401 Unauthorized` - Missing or invalid authentication token

**Example Request (cURL):**
\`\`\`bash
curl -X POST https://api.example.com/api/v1/users \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "name": "John Doe"
  }'
\`\`\`

**Example Request (JavaScript):**
\`\`\`javascript
const response = await fetch('https://api.example.com/api/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'SecurePass123!',
    name: 'John Doe'
  })
});

const user = await response.json();
console.log(user);
\`\`\`

**Example Request (Python):**
\`\`\`python
import requests

response = requests.post(
    'https://api.example.com/api/v1/users',
    headers={
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    },
    json={
        'email': 'user@example.com',
        'password': 'SecurePass123!',
        'name': 'John Doe'
    }
)

user = response.json()
print(user)
\`\`\`
```

### Example 2: GraphQL API Documentation

```markdown

#### Imported: User Query

Fetch user information by ID.

**Query:**
\`\`\`graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    email
    name
    role
    createdAt
    posts {
      id
      title
      publishedAt
    }
  }
}
\`\`\`

**Variables:**
\`\`\`json
{
  "id": "usr_1234567890"
}
\`\`\`

**Response:**
\`\`\`json
{
  "data": {
    "user": {
      "id": "usr_1234567890",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user",
      "createdAt": "2026-01-20T10:30:00Z",
      "posts": [
        {
          "id": "post_123",
          "title": "My First Post",
          "publishedAt": "2026-01-21T14:00:00Z"
        }
      ]
    }
  }
}
\`\`\`

**Errors:**
\`\`\`json
{
  "errors": [
    {
      "message": "User not found",
      "extensions": {
        "code": "USER_NOT_FOUND",
        "userId": "usr_1234567890"
      }
    }
  ]
}
\`\`\`
```

### Example 3: Authentication Documentation

```markdown

#### Imported: Authentication

All API requests require authentication using Bearer tokens.

### Getting a Token

**Endpoint:** `POST /api/v1/auth/login`

**Request:**
\`\`\`json
{
  "email": "user@example.com",
  "password": "your-password"
}
\`\`\`

**Response:**
\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600,
  "refreshToken": "refresh_token_here"
}
\`\`\`

### Using the Token

Include the token in the Authorization header:

\`\`\`
Authorization: Bearer YOUR_TOKEN
\`\`\`

### Token Expiration

Tokens expire after 1 hour. Use the refresh token to get a new access token:

**Endpoint:** `POST /api/v1/auth/refresh`

**Request:**
\`\`\`json
{
  "refreshToken": "refresh_token_here"
}
\`\`\`
```

#### Imported: Documentation Structure

### Recommended Sections

1. **Introduction**
   - What the API does
   - Base URL
   - API version
   - Support contact

2. **Authentication**
   - How to authenticate
   - Token management
   - Security best practices

3. **Quick Start**
   - Simple example to get started
   - Common use case walkthrough

4. **Endpoints**
   - Organized by resource
   - Full details for each endpoint

5. **Data Models**
   - Schema definitions
   - Field descriptions
   - Validation rules

6. **Error Handling**
   - Error code reference
   - Error response format
   - Troubleshooting guide

7. **Rate Limiting**
   - Limits and quotas
   - Headers to check
   - Handling rate limit errors

8. **Changelog**
   - API version history
   - Breaking changes
   - Deprecation notices

9. **SDKs and Tools**
   - Official client libraries
   - Postman collection
   - OpenAPI specification

#### Imported: Common Pitfalls

### Problem: Documentation Gets Out of Sync
**Symptoms:** Examples don't work, parameters are wrong, endpoints return different data
**Solution:** 
- Generate docs from code comments/annotations
- Use tools like Swagger/OpenAPI
- Add API tests that validate documentation
- Review docs with every API change

### Problem: Missing Error Documentation
**Symptoms:** Users don't know how to handle errors, support tickets increase
**Solution:**
- Document every possible error code
- Provide clear error messages
- Include troubleshooting steps
- Show example error responses

### Problem: Examples Don't Work
**Symptoms:** Users can't get started, frustration increases
**Solution:**
- Test every code example
- Use real, working endpoints
- Include complete examples (not fragments)
- Provide a sandbox environment

### Problem: Unclear Parameter Requirements
**Symptoms:** Users send invalid requests, validation errors
**Solution:**
- Mark required vs optional clearly
- Document data types and formats
- Show validation rules
- Provide example values

#### Imported: Tools and Formats

### OpenAPI/Swagger
Generate interactive documentation:
```yaml
openapi: 3.0.0
info:
  title: My API
  version: 1.0.0
paths:
  /users:
    post:
      summary: Create a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
```

### Postman Collection
Export collection for easy testing:
```json
{
  "info": {
    "name": "My API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Create User",
      "request": {
        "method": "POST",
        "url": "{{baseUrl}}/api/v1/users"
      }
    }
  ]
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
