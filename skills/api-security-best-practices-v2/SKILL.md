---
name: api-security-best-practices-v2
description: "API Security Best Practices workflow skill. Use this skill when the user needs Implement secure API design patterns including authentication, authorization, input validation, rate limiting, and protection against common API vulnerabilities and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["api-security-best-practices-v2", "api-security-best-practices", "implement", "secure", "api", "design", "patterns", "including"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# API Security Best Practices

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/api-security-best-practices` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# API Security Best Practices

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Secure JWT Authentication Implementation, Preventing SQL Injection and Input Validation, Implementing Rate Limiting, Common Pitfalls, Security Checklist.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when designing new API endpoints
- Use when securing existing APIs
- Use when implementing authentication and authorization
- Use when protecting against API attacks (injection, DDoS, etc.)
- Use when conducting API security reviews
- Use when preparing for security audits

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

Guide developers in building secure APIs by implementing authentication, authorization, input validation, rate limiting, and protection against common vulnerabilities. This skill covers security patterns for REST, GraphQL, and WebSocket APIs.

#### Imported: How It Works

### Step 1: Authentication & Authorization

I'll help you implement secure authentication:
- Choose authentication method (JWT, OAuth 2.0, API keys)
- Implement token-based authentication
- Set up role-based access control (RBAC)
- Secure session management
- Implement multi-factor authentication (MFA)

### Step 2: Input Validation & Sanitization

Protect against injection attacks:
- Validate all input data
- Sanitize user inputs
- Use parameterized queries
- Implement request schema validation
- Prevent SQL injection, XSS, and command injection

### Step 3: Rate Limiting & Throttling

Prevent abuse and DDoS attacks:
- Implement rate limiting per user/IP
- Set up API throttling
- Configure request quotas
- Handle rate limit errors gracefully
- Monitor for suspicious activity

### Step 4: Data Protection

Secure sensitive data:
- Encrypt data in transit (HTTPS/TLS)
- Encrypt sensitive data at rest
- Implement proper error handling (no data leaks)
- Sanitize error messages
- Use secure headers

### Step 5: API Security Testing

Verify security implementation:
- Test authentication and authorization
- Perform penetration testing
- Check for common vulnerabilities (OWASP API Top 10)
- Validate input handling
- Test rate limiting

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @api-security-best-practices-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @api-security-best-practices-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @api-security-best-practices-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @api-security-best-practices-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Implementing JWT Authentication

```markdown

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use HTTPS Everywhere - Never send sensitive data over HTTP
- Implement Authentication - Require authentication for protected endpoints
- Validate All Inputs - Never trust user input
- Use Parameterized Queries - Prevent SQL injection
- Implement Rate Limiting - Protect against brute force and DDoS
- Hash Passwords - Use bcrypt with salt rounds >= 10
- Use Short-Lived Tokens - JWT access tokens should expire quickly

### Imported Operating Notes

#### Imported: Best Practices

### ✅ Do This

- **Use HTTPS Everywhere** - Never send sensitive data over HTTP
- **Implement Authentication** - Require authentication for protected endpoints
- **Validate All Inputs** - Never trust user input
- **Use Parameterized Queries** - Prevent SQL injection
- **Implement Rate Limiting** - Protect against brute force and DDoS
- **Hash Passwords** - Use bcrypt with salt rounds >= 10
- **Use Short-Lived Tokens** - JWT access tokens should expire quickly
- **Implement CORS Properly** - Only allow trusted origins
- **Log Security Events** - Monitor for suspicious activity
- **Keep Dependencies Updated** - Regularly update packages
- **Use Security Headers** - Implement Helmet.js
- **Sanitize Error Messages** - Don't leak sensitive information

### ❌ Don't Do This

- **Don't Store Passwords in Plain Text** - Always hash passwords
- **Don't Use Weak Secrets** - Use strong, random JWT secrets
- **Don't Trust User Input** - Always validate and sanitize
- **Don't Expose Stack Traces** - Hide error details in production
- **Don't Use String Concatenation for SQL** - Use parameterized queries
- **Don't Store Sensitive Data in JWT** - JWTs are not encrypted
- **Don't Ignore Security Updates** - Update dependencies regularly
- **Don't Use Default Credentials** - Change all default passwords
- **Don't Disable CORS Completely** - Configure it properly instead
- **Don't Log Sensitive Data** - Sanitize logs

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/api-security-best-practices`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)
- [API Security Checklist](https://github.com/shieldfy/API-Security-Checklist)

---

**Pro Tip:** Security is not a one-time task - regularly audit your APIs, keep dependencies updated, and stay informed about new vulnerabilities!

#### Imported: Secure JWT Authentication Implementation

### Authentication Flow

1. User logs in with credentials
2. Server validates credentials
3. Server generates JWT token
4. Client stores token securely
5. Client sends token with each request
6. Server validates token

### Implementation

#### 1. Generate Secure JWT Tokens

\`\`\`javascript
// auth.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password are required'
      });
    }

    // Find user
    const user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      // Don't reveal if user exists
      return res.status(401).json({
        error: 'Invalid credentials'
      });
    }

    // Verify password
    const validPassword = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!validPassword) {
      return res.status(401).json({
        error: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
        issuer: 'your-app',
        audience: 'your-app-users'
      }
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );

    // Store refresh token in database
    await db.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    });

    res.json({
      token,
      refreshToken,
      expiresIn: 3600
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'An error occurred during login'
    });
  }
});
\`\`\`

#### 2. Verify JWT Tokens (Middleware)

\`\`\`javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Get token from header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      error: 'Access token required'
    });
  }

  // Verify token
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    {
      issuer: 'your-app',
      audience: 'your-app-users'
    },
    (err, user) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({
            error: 'Token expired'
          });
        }
        return res.status(403).json({
          error: 'Invalid token'
        });
      }

      // Attach user to request
      req.user = user;
      next();
    }
  );
}

module.exports = { authenticateToken };
\`\`\`

#### 3. Protect Routes

\`\`\`javascript
const { authenticateToken } = require('./middleware/auth');

// Protected route
app.get('/api/user/profile', authenticateToken, async (req, res) => {
  try {
    const user = await db.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        email: true,
        name: true,
        // Don't return passwordHash
      }
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
\`\`\`

#### 4. Implement Token Refresh

\`\`\`javascript
app.post('/api/auth/refresh', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({
      error: 'Refresh token required'
    });
  }

  try {
    // Verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    );

    // Check if refresh token exists in database
    const storedToken = await db.refreshToken.findFirst({
      where: {
        token: refreshToken,
        userId: decoded.userId,
        expiresAt: { gt: new Date() }
      }
    });

    if (!storedToken) {
      return res.status(403).json({
        error: 'Invalid refresh token'
      });
    }

    // Generate new access token
    const user = await db.user.findUnique({
      where: { id: decoded.userId }
    });

    const newToken = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      token: newToken,
      expiresIn: 3600
    });

  } catch (error) {
    res.status(403).json({
      error: 'Invalid refresh token'
    });
  }
});
\`\`\`

### Security Best Practices

- ✅ Use strong JWT secrets (256-bit minimum)
- ✅ Set short expiration times (1 hour for access tokens)
- ✅ Implement refresh tokens for long-lived sessions
- ✅ Store refresh tokens in database (can be revoked)
- ✅ Use HTTPS only
- ✅ Don't store sensitive data in JWT payload
- ✅ Validate token issuer and audience
- ✅ Implement token blacklisting for logout
```


### Example 2: Input Validation and SQL Injection Prevention

```markdown

#### Imported: Preventing SQL Injection and Input Validation

### The Problem

**❌ Vulnerable Code:**
\`\`\`javascript
// NEVER DO THIS - SQL Injection vulnerability
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  // Dangerous: User input directly in query
  const query = \`SELECT * FROM users WHERE id = '\${userId}'\`;
  const user = await db.query(query);

  res.json(user);
});

// Attack example:
// GET /api/users/1' OR '1'='1
// Returns all users!
\`\`\`

### The Solution

#### 1. Use Parameterized Queries

\`\`\`javascript
// ✅ Safe: Parameterized query
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;

  // Validate input first
  if (!userId || !/^\d+$/.test(userId)) {
    return res.status(400).json({
      error: 'Invalid user ID'
    });
  }

  // Use parameterized query
  const user = await db.query(
    'SELECT id, email, name FROM users WHERE id = $1',
    [userId]
  );

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    });
  }

  res.json(user);
});
\`\`\`

#### 2. Use ORM with Proper Escaping

\`\`\`javascript
// ✅ Safe: Using Prisma ORM
app.get('/api/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({
      error: 'Invalid user ID'
    });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      // Don't select sensitive fields
    }
  });

  if (!user) {
    return res.status(404).json({
      error: 'User not found'
    });
  }

  res.json(user);
});
\`\`\`

#### 3. Implement Request Validation with Zod

\`\`\`javascript
const { z } = require('zod');

// Define validation schema
const createUserSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain uppercase letter')
    .regex(/[a-z]/, 'Password must contain lowercase letter')
    .regex(/[0-9]/, 'Password must contain number'),
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name too long'),
  age: z.number()
    .int('Age must be an integer')
    .min(18, 'Must be 18 or older')
    .max(120, 'Invalid age')
    .optional()
});

// Validation middleware
function validateRequest(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      res.status(400).json({
        error: 'Validation failed',
        details: error.errors
      });
    }
  };
}

// Use validation
app.post('/api/users',
  validateRequest(createUserSchema),
  async (req, res) => {
    // Input is validated at this point
    const { email, password, name, age } = req.body;

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        name,
        age
      }
    });

    // Don't return password hash
    const { passwordHash: _, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  }
);
\`\`\`

#### 4. Sanitize Output to Prevent XSS

\`\`\`javascript
const DOMPurify = require('isomorphic-dompurify');

app.post('/api/comments', authenticateToken, async (req, res) => {
  const { content } = req.body;

  // Validate
  if (!content || content.length > 1000) {
    return res.status(400).json({
      error: 'Invalid comment content'
    });
  }

  // Sanitize HTML to prevent XSS
  const sanitizedContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href']
  });

  const comment = await prisma.comment.create({
    data: {
      content: sanitizedContent,
      userId: req.user.userId
    }
  });

  res.status(201).json(comment);
});
\`\`\`

### Validation Checklist

- [ ] Validate all user inputs
- [ ] Use parameterized queries or ORM
- [ ] Validate data types (string, number, email, etc.)
- [ ] Validate data ranges (min/max length, value ranges)
- [ ] Sanitize HTML content
- [ ] Escape special characters
- [ ] Validate file uploads (type, size, content)
- [ ] Use allowlists, not blocklists
```


### Example 3: Rate Limiting and DDoS Protection

```markdown

#### Imported: Implementing Rate Limiting

### Why Rate Limiting?

- Prevent brute force attacks
- Protect against DDoS
- Prevent API abuse
- Ensure fair usage
- Reduce server costs

### Implementation with Express Rate Limit

\`\`\`javascript
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const Redis = require('ioredis');

// Create Redis client
const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

// General API rate limit
const apiLimiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:api:'
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: {
    error: 'Too many requests, please try again later',
    retryAfter: 900 // seconds
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false,
  // Custom key generator (by user ID or IP)
  keyGenerator: (req) => {
    return req.user?.userId || req.ip;
  }
});

// Strict rate limit for authentication endpoints
const authLimiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:auth:'
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Only 5 login attempts per 15 minutes
  skipSuccessfulRequests: true, // Don't count successful logins
  message: {
    error: 'Too many login attempts, please try again later',
    retryAfter: 900
  }
});

// Apply rate limiters
app.use('/api/', apiLimiter);
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// Custom rate limiter for expensive operations
const expensiveLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // 10 requests per hour
  message: {
    error: 'Rate limit exceeded for this operation'
  }
});

app.post('/api/reports/generate',
  authenticateToken,
  expensiveLimiter,
  async (req, res) => {
    // Expensive operation
  }
);
\`\`\`

### Advanced: Per-User Rate Limiting

\`\`\`javascript
// Different limits based on user tier
function createTieredRateLimiter() {
  const limits = {
    free: { windowMs: 60 * 60 * 1000, max: 100 },
    pro: { windowMs: 60 * 60 * 1000, max: 1000 },
    enterprise: { windowMs: 60 * 60 * 1000, max: 10000 }
  };

  return async (req, res, next) => {
    const user = req.user;
    const tier = user?.tier || 'free';
    const limit = limits[tier];

    const key = \`rl:user:\${user.userId}\`;
    const current = await redis.incr(key);

    if (current === 1) {
      await redis.expire(key, limit.windowMs / 1000);
    }

    if (current > limit.max) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        limit: limit.max,
        remaining: 0,
        reset: await redis.ttl(key)
      });
    }

    // Set rate limit headers
    res.set({
      'X-RateLimit-Limit': limit.max,
      'X-RateLimit-Remaining': limit.max - current,
      'X-RateLimit-Reset': await redis.ttl(key)
    });

    next();
  };
}

app.use('/api/', authenticateToken, createTieredRateLimiter());
\`\`\`

### DDoS Protection with Helmet

\`\`\`javascript
const helmet = require('helmet');

app.use(helmet({
  // Content Security Policy
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:']
    }
  },
  // Prevent clickjacking
  frameguard: { action: 'deny' },
  // Hide X-Powered-By header
  hidePoweredBy: true,
  // Prevent MIME type sniffing
  noSniff: true,
  // Enable HSTS
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
\`\`\`

### Rate Limit Response Headers

\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1640000000
Retry-After: 900
\`\`\`
```

#### Imported: Common Pitfalls

### Problem: JWT Secret Exposed in Code
**Symptoms:** JWT secret hardcoded or committed to Git
**Solution:**
\`\`\`javascript
// ❌ Bad
const JWT_SECRET = 'my-secret-key';

// ✅ Good
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

// Generate strong secret
// node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
\`\`\`

### Problem: Weak Password Requirements
**Symptoms:** Users can set weak passwords like "password123"
**Solution:**
\`\`\`javascript
const passwordSchema = z.string()
  .min(12, 'Password must be at least 12 characters')
  .regex(/[A-Z]/, 'Must contain uppercase letter')
  .regex(/[a-z]/, 'Must contain lowercase letter')
  .regex(/[0-9]/, 'Must contain number')
  .regex(/[^A-Za-z0-9]/, 'Must contain special character');

// Or use a password strength library
const zxcvbn = require('zxcvbn');
const result = zxcvbn(password);
if (result.score < 3) {
  return res.status(400).json({
    error: 'Password too weak',
    suggestions: result.feedback.suggestions
  });
}
\`\`\`

### Problem: Missing Authorization Checks
**Symptoms:** Users can access resources they shouldn't
**Solution:**
\`\`\`javascript
// ❌ Bad: Only checks authentication
app.delete('/api/posts/:id', authenticateToken, async (req, res) => {
  await prisma.post.delete({ where: { id: req.params.id } });
  res.json({ success: true });
});

// ✅ Good: Checks both authentication and authorization
app.delete('/api/posts/:id', authenticateToken, async (req, res) => {
  const post = await prisma.post.findUnique({
    where: { id: req.params.id }
  });

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  // Check if user owns the post or is admin
  if (post.userId !== req.user.userId && req.user.role !== 'admin') {
    return res.status(403).json({
      error: 'Not authorized to delete this post'
    });
  }

  await prisma.post.delete({ where: { id: req.params.id } });
  res.json({ success: true });
});
\`\`\`

### Problem: Verbose Error Messages
**Symptoms:** Error messages reveal system details
**Solution:**
\`\`\`javascript
// ❌ Bad: Exposes database details
app.post('/api/users', async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
    // Error: "Unique constraint failed on the fields: (`email`)"
  }
});

// ✅ Good: Generic error message
app.post('/api/users', async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
  } catch (error) {
    console.error('User creation error:', error); // Log full error

    if (error.code === 'P2002') {
      return res.status(400).json({
        error: 'Email already exists'
      });
    }

    res.status(500).json({
      error: 'An error occurred while creating user'
    });
  }
});
\`\`\`

#### Imported: Security Checklist

### Authentication & Authorization
- [ ] Implement strong authentication (JWT, OAuth 2.0)
- [ ] Use HTTPS for all endpoints
- [ ] Hash passwords with bcrypt (salt rounds >= 10)
- [ ] Implement token expiration
- [ ] Add refresh token mechanism
- [ ] Verify user authorization for each request
- [ ] Implement role-based access control (RBAC)

### Input Validation
- [ ] Validate all user inputs
- [ ] Use parameterized queries or ORM
- [ ] Sanitize HTML content
- [ ] Validate file uploads
- [ ] Implement request schema validation
- [ ] Use allowlists, not blocklists

### Rate Limiting & DDoS Protection
- [ ] Implement rate limiting per user/IP
- [ ] Add stricter limits for auth endpoints
- [ ] Use Redis for distributed rate limiting
- [ ] Return proper rate limit headers
- [ ] Implement request throttling

### Data Protection
- [ ] Use HTTPS/TLS for all traffic
- [ ] Encrypt sensitive data at rest
- [ ] Don't store sensitive data in JWT
- [ ] Sanitize error messages
- [ ] Implement proper CORS configuration
- [ ] Use security headers (Helmet.js)

### Monitoring & Logging
- [ ] Log security events
- [ ] Monitor for suspicious activity
- [ ] Set up alerts for failed auth attempts
- [ ] Track API usage patterns
- [ ] Don't log sensitive data

#### Imported: OWASP API Security Top 10

1. **Broken Object Level Authorization** - Always verify user can access resource
2. **Broken Authentication** - Implement strong authentication mechanisms
3. **Broken Object Property Level Authorization** - Validate which properties user can access
4. **Unrestricted Resource Consumption** - Implement rate limiting and quotas
5. **Broken Function Level Authorization** - Verify user role for each function
6. **Unrestricted Access to Sensitive Business Flows** - Protect critical workflows
7. **Server Side Request Forgery (SSRF)** - Validate and sanitize URLs
8. **Security Misconfiguration** - Use security best practices and headers
9. **Improper Inventory Management** - Document and secure all API endpoints
10. **Unsafe Consumption of APIs** - Validate data from third-party APIs

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
