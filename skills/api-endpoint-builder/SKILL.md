---
name: api-endpoint-builder
description: "API Endpoint Builder workflow skill. Use this skill when the user needs Builds production-ready REST API endpoints with validation, error handling, authentication, and documentation. Follows best practices for security and scalability and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["api-endpoint-builder", "builds", "production-ready", "rest", "api", "endpoints", "validation", "error"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# API Endpoint Builder

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/api-endpoint-builder` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# API Endpoint Builder Build complete, production-ready REST API endpoints with proper validation, error handling, authentication, and documentation.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What You'll Build, Endpoint Structure, Common Patterns, Documentation Template.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User asks to "create an API endpoint" or "build a REST API"
- Building new backend features
- Adding endpoints to existing APIs
- User mentions "API", "endpoint", "route", or "REST"
- Creating CRUD operations
- Use when the request clearly matches the imported source intent: Builds production-ready REST API endpoints with validation, error handling, authentication, and documentation. Follows best practices for security and scalability.

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

#### Imported: What You'll Build

For each endpoint, you create:
- Route handler with proper HTTP method
- Input validation (request body, params, query)
- Authentication/authorization checks
- Business logic
- Error handling
- Response formatting
- API documentation
- Tests (if requested)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @api-endpoint-builder to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/api-endpoint-builder/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/api-endpoint-builder/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @api-endpoint-builder using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Testing Example

```javascript
describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.email).toBe('test@example.com');
    expect(response.body.data.password).toBeUndefined();
  });
  
  it('should reject invalid email', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        email: 'invalid',
        name: 'Test User',
        password: 'password123'
      });
    
    expect(response.status).toBe(400);
    expect(response.body.error).toContain('email');
  });
});
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- 200 - Success (GET, PUT, PATCH)
- 201 - Created (POST)
- 204 - No Content (DELETE)
- 400 - Bad Request (validation failed)
- 401 - Unauthorized (not authenticated)
- 403 - Forbidden (not authorized)
- 404 - Not Found

### Imported Operating Notes

#### Imported: Best Practices

### HTTP Status Codes
- `200` - Success (GET, PUT, PATCH)
- `201` - Created (POST)
- `204` - No Content (DELETE)
- `400` - Bad Request (validation failed)
- `401` - Unauthorized (not authenticated)
- `403` - Forbidden (not authorized)
- `404` - Not Found
- `409` - Conflict (duplicate)
- `500` - Internal Server Error

### Response Format

Consistent structure:

```javascript
// Success
{
  "success": true,
  "data": { ... }
}

// Error
{
  "error": "Error message",
  "details": { ... } // optional
}

// List with pagination
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### Security Checklist

- [ ] Authentication required for protected routes
- [ ] Authorization checks (user owns resource)
- [ ] Input validation on all fields
- [ ] SQL injection prevention (use parameterized queries)
- [ ] Rate limiting on public endpoints
- [ ] No sensitive data in responses (passwords, tokens)
- [ ] CORS configured properly
- [ ] Request size limits set

### Error Handling

```javascript
// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  // Don't leak error details in production
  const message = process.env.NODE_ENV === 'production' 
    ? 'Internal server error' 
    : err.message;
  
  res.status(err.status || 500).json({ error: message });
});
```

#### Imported: Key Principles

- Validate all inputs before processing
- Use proper HTTP status codes
- Handle errors gracefully
- Never expose sensitive data
- Keep responses consistent
- Add authentication where needed
- Document your endpoints
- Write tests for critical paths

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/api-endpoint-builder`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Endpoint Structure

### 1. Route Definition

```javascript
// Express example
router.post('/api/users', authenticate, validateUser, createUser);

// Fastify example
fastify.post('/api/users', {
  preHandler: [authenticate],
  schema: userSchema
}, createUser);
```

### 2. Input Validation

Always validate before processing:

```javascript
const validateUser = (req, res, next) => {
  const { email, name, password } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  
  if (!name || name.length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters' });
  }
  
  if (!password || password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }
  
  next();
};
```

### 3. Handler Implementation

```javascript
const createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    
    // Check if user exists
    const existing = await db.users.findOne({ email });
    if (existing) {
      return res.status(409).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await db.users.create({
      email,
      name,
      password: hashedPassword,
      createdAt: new Date()
    });
    
    // Don't return password
    const { password: _, ...userWithoutPassword } = user;
    
    res.status(201).json({
      success: true,
      data: userWithoutPassword
    });
    
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
```

#### Imported: Common Patterns

### CRUD Operations

```javascript
// Create
POST /api/resources
Body: { name, description }

// Read (list)
GET /api/resources?page=1&limit=20

// Read (single)
GET /api/resources/:id

// Update
PUT /api/resources/:id
Body: { name, description }

// Delete
DELETE /api/resources/:id
```

### Pagination

```javascript
const getResources = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;
  
  const [resources, total] = await Promise.all([
    db.resources.find().skip(skip).limit(limit),
    db.resources.countDocuments()
  ]);
  
  res.json({
    success: true,
    data: resources,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
};
```

### Filtering & Sorting

```javascript
const getResources = async (req, res) => {
  const { status, sort = '-createdAt' } = req.query;
  
  const filter = {};
  if (status) filter.status = status;
  
  const resources = await db.resources
    .find(filter)
    .sort(sort)
    .limit(20);
  
  res.json({ success: true, data: resources });
};
```

#### Imported: Documentation Template

```javascript
/**
 * @route POST /api/users
 * @desc Create a new user
 * @access Public
 * 
 * @body {string} email - User email (required)
 * @body {string} name - User name (required)
 * @body {string} password - Password, min 8 chars (required)
 * 
 * @returns {201} User created successfully
 * @returns {400} Validation error
 * @returns {409} User already exists
 * @returns {500} Server error
 * 
 * @example
 * POST /api/users
 * {
 *   "email": "user@example.com",
 *   "name": "John Doe",
 *   "password": "securepass123"
 * }
 */
```
