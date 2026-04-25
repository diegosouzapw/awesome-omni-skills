---
name: performance-optimizer-v2
description: "Performance Optimizer workflow skill. Use this skill when the user needs Identifies and fixes performance bottlenecks in code, databases, and APIs. Measures before and after to prove improvements and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["performance-optimizer-v2", "performance-optimizer", "identifies", "and", "fixes", "performance", "bottlenecks", "databases"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Performance Optimizer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/performance-optimizer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Performance Optimizer Find and fix performance bottlenecks. Measure, optimize, verify. Make it fast.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Common Optimizations, Measuring Impact, Performance Budgets, Tools, Quick Wins, Optimization Checklist.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- App is slow or laggy
- User complains about performance
- Page load times are high
- API responses are slow
- Database queries take too long
- User mentions "slow", "lag", "performance", or "optimize"

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `README.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `README.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Page load time
2. API response time
3. Database query time
4. Function execution time
5. Memory usage
6. Network requests
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: The Optimization Process

### 1. Measure First

Never optimize without measuring:

```javascript
// Measure execution time
console.time('operation');
await slowOperation();
console.timeEnd('operation'); // operation: 2341ms
```

**What to measure:**
- Page load time
- API response time
- Database query time
- Function execution time
- Memory usage
- Network requests

### 2. Find the Bottleneck

Use profiling tools to find the slow parts:

**Browser:**
```
DevTools → Performance tab → Record → Stop
Look for long tasks (red bars)
```

**Node.js:**
```bash
node --prof app.js
node --prof-process isolate-*.log > profile.txt
```

**Database:**
```sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';
```

### 3. Optimize

Fix the slowest thing first (biggest impact).

#### Imported: Common Optimizations

### Database Queries

**Problem: N+1 Queries**
```javascript
// Bad: N+1 queries
const users = await db.users.find();
for (const user of users) {
  user.posts = await db.posts.find({ userId: user.id }); // N queries
}

// Good: Single query with JOIN
const users = await db.users.find()
  .populate('posts'); // 1 query
```

**Problem: Missing Index**
```sql
-- Check slow query
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
-- Shows: Seq Scan (bad)

-- Add index
CREATE INDEX idx_users_email ON users(email);

-- Check again
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
-- Shows: Index Scan (good)
```

**Problem: SELECT ***
```javascript
// Bad: Fetches all columns
const users = await db.query('SELECT * FROM users');

// Good: Only needed columns
const users = await db.query('SELECT id, name, email FROM users');
```

**Problem: No Pagination**
```javascript
// Bad: Returns all records
const users = await db.users.find();

// Good: Paginated
const users = await db.users.find()
  .limit(20)
  .skip((page - 1) * 20);
```

### API Performance

**Problem: No Caching**
```javascript
// Bad: Hits database every time
app.get('/api/stats', async (req, res) => {
  const stats = await db.stats.calculate(); // Slow
  res.json(stats);
});

// Good: Cache for 5 minutes
const cache = new Map();
app.get('/api/stats', async (req, res) => {
  const cached = cache.get('stats');
  if (cached && Date.now() - cached.time < 300000) {
    return res.json(cached.data);
  }

  const stats = await db.stats.calculate();
  cache.set('stats', { data: stats, time: Date.now() });
  res.json(stats);
});
```

**Problem: Sequential Operations**
```javascript
// Bad: Sequential (slow)
const user = await getUser(id);
const posts = await getPosts(id);
const comments = await getComments(id);
// Total: 300ms + 200ms + 150ms = 650ms

// Good: Parallel (fast)
const [user, posts, comments] = await Promise.all([
  getUser(id),
  getPosts(id),
  getComments(id)
]);
// Total: max(300ms, 200ms, 150ms) = 300ms
```

**Problem: Large Payloads**
```javascript
// Bad: Returns everything
res.json(users); // 5MB response

// Good: Only needed fields
res.json(users.map(u => ({
  id: u.id,
  name: u.name,
  email: u.email
}))); // 500KB response
```

### Frontend Performance

**Problem: Unnecessary Re-renders**
```javascript
// Bad: Re-renders on every parent update
function UserList({ users }) {
  return users.map(user => <UserCard user={user} />);
}

// Good: Memoized
const UserCard = React.memo(({ user }) => {
  return <div>{user.name}</div>;
});
```

**Problem: Large Bundle**
```javascript
// Bad: Imports entire library
import _ from 'lodash'; // 70KB

// Good: Import only what you need
import debounce from 'lodash/debounce'; // 2KB
```

**Problem: No Code Splitting**
```javascript
// Bad: Everything in one bundle
import HeavyComponent from './HeavyComponent';

// Good: Lazy load
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

**Problem: Unoptimized Images**
```html
<!-- Bad: Large image -->
<img src="photo.jpg" /> <!-- 5MB -->

<!-- Good: Optimized and responsive -->
<img
  src="photo-small.webp"
  srcset="photo-small.webp 400w, photo-large.webp 800w"
  loading="lazy"
  width="400"
  height="300"
/> <!-- 50KB -->
```

### Algorithm Optimization

**Problem: Inefficient Algorithm**
```javascript
// Bad: O(n²) - nested loops
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) duplicates.push(arr[i]);
    }
  }
  return duplicates;
}

// Good: O(n) - single pass with Set
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of arr) {
    if (seen.has(item)) duplicates.add(item);
    seen.add(item);
  }
  return Array.from(duplicates);
}
```

**Problem: Repeated Calculations**
```javascript
// Bad: Calculates every time
function getTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
// Called 100 times in render

// Good: Memoized
const getTotal = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}, [items]);
```

### Memory Optimization

**Problem: Memory Leak**
```javascript
// Bad: Event listener not cleaned up
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  // Memory leak!
}, []);

// Good: Cleanup
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**Problem: Large Data in Memory**
```javascript
// Bad: Loads entire file into memory
const data = fs.readFileSync('huge-file.txt'); // 1GB

// Good: Stream it
const stream = fs.createReadStream('huge-file.txt');
stream.on('data', chunk => process(chunk));
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @performance-optimizer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @performance-optimizer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @performance-optimizer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @performance-optimizer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Measure before optimizing
- Fix the biggest bottleneck first
- Measure after to prove improvement
- Don't sacrifice readability for tiny gains
- Profile in production-like environment
- Consider the 80/20 rule (20% of code causes 80% of slowness)
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Key Principles

- Measure before optimizing
- Fix the biggest bottleneck first
- Measure after to prove improvement
- Don't sacrifice readability for tiny gains
- Profile in production-like environment
- Consider the 80/20 rule (20% of code causes 80% of slowness)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/performance-optimizer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@paypal-integration-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@paywall-upgrade-cro-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pci-compliance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pdf-official-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [README.md](README.md)

### Imported Reference Notes

#### Imported: Measuring Impact

Always measure before and after:

```javascript
// Before optimization
console.time('query');
const users = await db.users.find();
console.timeEnd('query');
// query: 2341ms

// After optimization (added index)
console.time('query');
const users = await db.users.find();
console.timeEnd('query');
// query: 23ms

// Improvement: 100x faster!
```

#### Imported: Performance Budgets

Set targets:

```
Page Load: < 2 seconds
API Response: < 200ms
Database Query: < 50ms
Bundle Size: < 200KB
Time to Interactive: < 3 seconds
```

#### Imported: Tools

**Browser:**
- Chrome DevTools Performance tab
- Lighthouse (audit)
- Network tab (waterfall)

**Node.js:**
- `node --prof` (profiling)
- `clinic` (diagnostics)
- `autocannon` (load testing)

**Database:**
- `EXPLAIN ANALYZE` (query plans)
- Slow query log
- Database profiler

**Monitoring:**
- New Relic
- Datadog
- Sentry Performance

#### Imported: Quick Wins

Easy optimizations with big impact:

1. **Add database indexes** on frequently queried columns
2. **Enable gzip compression** on server
3. **Add caching** for expensive operations
4. **Lazy load** images and heavy components
5. **Use CDN** for static assets
6. **Minify and compress** JavaScript/CSS
7. **Remove unused dependencies**
8. **Use pagination** instead of loading all data
9. **Optimize images** (WebP, proper sizing)
10. **Enable HTTP/2** on server

#### Imported: Optimization Checklist

- [ ] Measured current performance
- [ ] Identified bottleneck
- [ ] Applied optimization
- [ ] Measured improvement
- [ ] Verified functionality still works
- [ ] No new bugs introduced
- [ ] Documented the change

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
