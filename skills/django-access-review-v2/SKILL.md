---
name: django-access-review-v2
description: "Django Access Control & IDOR Review workflow skill. Use this skill when the user needs django-access-review and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["django-access-review-v2", "django-access-review", "backend"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Django Access Control & IDOR Review

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/django-access-review` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

--- name: django-access-review description: Django access control and IDOR security review. Use when reviewing Django views, DRF viewsets, ORM queries, or any Python/Django code handling user authorization. Trigger keywords: "IDOR", "access control", "authorization", "Django permissions", "object permissions", "tenant... --- LICENSE --- <!-- Reference material based on OWASP Cheat Sheet Series (CC BY-SA 4.0) https://cheatsheetseries.owasp.org/ --> # Django Access Control & IDOR Review Find access control vulnerabilities by investigating how the codebase answers one question: Can User A access, modify, or delete User B's data?

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Philosophy: Investigation Over Pattern Matching, Phase 1: Understand the Authorization Model, Phase 2: Map the Attack Surface, Phase 3: Ask Questions and Investigate, Phase 4: Trace Specific Flows, Phase 5: Report Findings.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to review Django or DRF code for access control gaps, IDOR risk, or object-level authorization failures.
- The task involves confirming whether one user can access, modify, or delete another user's data.
- You want an investigation-driven authorization review instead of generic pattern matching.
- Use when the request clearly matches the imported source intent: django-access-review.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

#### Imported: Philosophy: Investigation Over Pattern Matching

Do NOT scan for predefined vulnerable patterns. Instead:

1. **Understand** how authorization works in THIS codebase
2. **Ask questions** about specific data flows
3. **Trace code** to find where (or if) access checks happen
4. **Report** only what you've confirmed through investigation

Every codebase implements authorization differently. Your job is to understand this specific implementation, then find gaps.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @django-access-review-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @django-access-review-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @django-access-review-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @django-access-review-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/django-access-review`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@debugger-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@debugging-strategies-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@debugging-toolkit-smart-debug-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@deep-research-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Phase 1: Understand the Authorization Model

Before looking for bugs, answer these questions about the codebase:

### How is authorization enforced?

Research the codebase to find:

```
□ Where are permission checks implemented?
  - Decorators? (@login_required, @permission_required, custom?)
  - Middleware? (TenantMiddleware, AuthorizationMiddleware?)
  - Base classes? (BaseAPIView, TenantScopedViewSet?)
  - Permission classes? (DRF permission_classes?)
  - Custom mixins? (OwnershipMixin, TenantMixin?)

□ How are queries scoped?
  - Custom managers? (TenantManager, UserScopedManager?)
  - get_queryset() overrides?
  - Middleware that sets query context?

□ What's the ownership model?
  - Single user ownership? (document.owner_id)
  - Organization/tenant ownership? (document.organization_id)
  - Hierarchical? (org -> team -> user -> resource)
  - Role-based within context? (org admin vs member)
```

### Investigation commands

```bash
# Find how auth is typically done
grep -rn "permission_classes\|@login_required\|@permission_required" --include="*.py" | head -20

# Find base classes that views inherit from
grep -rn "class Base.*View\|class.*Mixin.*:" --include="*.py" | head -20

# Find custom managers
grep -rn "class.*Manager\|def get_queryset" --include="*.py" | head -20

# Find ownership fields on models
grep -rn "owner\|user_id\|organization\|tenant" --include="models.py" | head -30
```

**Do not proceed until you understand the authorization model.**

---

#### Imported: Phase 2: Map the Attack Surface

Identify endpoints that handle user-specific data:

### What resources exist?

```
□ What models contain user data?
□ Which have ownership fields (owner_id, user_id, organization_id)?
□ Which are accessed via ID in URLs or request bodies?
```

### What operations are exposed?

For each resource, map:
- List endpoints - what data is returned?
- Detail/retrieve endpoints - how is the object fetched?
- Create endpoints - who sets the owner?
- Update endpoints - can users modify others' data?
- Delete endpoints - can users delete others' data?
- Custom actions - what do they access?

---

#### Imported: Phase 3: Ask Questions and Investigate

For each endpoint that handles user data, ask:

### The Core Question

**"If I'm User A and I know the ID of User B's resource, can I access it?"**

Trace the code to answer this:

```
1. Where does the resource ID enter the system?
   - URL path: /api/documents/{id}/
   - Query param: ?document_id=123
   - Request body: {"document_id": 123}

2. Where is that ID used to fetch data?
   - Find the ORM query or database call

3. Between (1) and (2), what checks exist?
   - Is the query scoped to current user?
   - Is there an explicit ownership check?
   - Is there a permission check on the object?
   - Does a base class or mixin enforce access?

4. If you can't find a check, is there one you missed?
   - Check parent classes
   - Check middleware
   - Check managers
   - Check decorators at URL level
```

### Follow-Up Questions

```
□ For list endpoints: Does the query filter to user's data, or return everything?

□ For create endpoints: Who sets the owner - the server or the request?

□ For bulk operations: Are they scoped to user's data?

□ For related resources: If I can access a document, can I access its comments?
  What if the document belongs to someone else?

□ For tenant/org resources: Can User in Org A access Org B's data by changing
  the org_id in the URL?
```

---

#### Imported: Phase 4: Trace Specific Flows

Pick a concrete endpoint and trace it completely.

### Example Investigation

```
Endpoint: GET /api/documents/{pk}/

1. Find the view handling this URL
   → DocumentViewSet.retrieve() in api/views.py

2. Check what DocumentViewSet inherits from
   → class DocumentViewSet(viewsets.ModelViewSet)
   → No custom base class with authorization

3. Check permission_classes
   → permission_classes = [IsAuthenticated]
   → Only checks login, not ownership

4. Check get_queryset()
   → def get_queryset(self):
   →     return Document.objects.all()
   → Returns ALL documents!

5. Check for has_object_permission()
   → Not implemented

6. Check retrieve() method
   → Uses default, which calls get_object()
   → get_object() uses get_queryset(), which returns all

7. Conclusion: IDOR - Any authenticated user can access any document
```

### What to look for when tracing

```
Potential gap indicators (investigate further, don't auto-flag):
- get_queryset() returns .all() or filters without user
- Direct Model.objects.get(pk=pk) without ownership in query
- ID comes from request body for sensitive operations
- Permission class checks auth but not ownership
- No has_object_permission() and queryset isn't scoped

Likely safe patterns (but verify the implementation):
- get_queryset() filters by request.user or user's org
- Custom permission class with has_object_permission()
- Base class that enforces scoping
- Manager that auto-filters
```

---

#### Imported: Phase 5: Report Findings

Only report issues you've confirmed through investigation.

### Confidence Levels

| Level | Meaning | Action |
|-------|---------|--------|
| **HIGH** | Traced the flow, confirmed no check exists | Report with evidence |
| **MEDIUM** | Check may exist but couldn't confirm | Note for manual verification |
| **LOW** | Theoretical, likely mitigated | Do not report |

### Suggested Fixes Must Enforce, Not Document

**Bad fix**: Adding a comment saying "caller must validate permissions"
**Good fix**: Adding code that actually validates permissions

A comment or docstring does not enforce authorization. Your suggested fix must include actual code that:
- Validates the user has permission before proceeding
- Raises an exception or returns an error if unauthorized
- Makes unauthorized access impossible, not just discouraged

Example of a BAD fix suggestion:
```python
def get_resource(resource_id):
    # IMPORTANT: Caller must ensure user has access to this resource
    return Resource.objects.get(pk=resource_id)
```

Example of a GOOD fix suggestion:
```python
def get_resource(resource_id, user):
    resource = Resource.objects.get(pk=resource_id)
    if resource.owner_id != user.id:
        raise PermissionDenied("Access denied")
    return resource
```

If you can't determine the right enforcement mechanism, say so - but never suggest documentation as the fix.

### Report Format

```markdown

#### Imported: Access Control Review: [Component]

### Authorization Model
[Brief description of how this codebase handles authorization]

### Findings

#### [IDOR-001] [Title] (Severity: High/Medium)
- **Location**: `path/to/file.py:123`
- **Confidence**: High - confirmed through code tracing
- **The Question**: Can User A access User B's documents?
- **Investigation**:
  1. Traced GET /api/documents/{pk}/ to DocumentViewSet
  2. Checked get_queryset() - returns Document.objects.all()
  3. Checked permission_classes - only IsAuthenticated
  4. Checked for has_object_permission() - not implemented
  5. Verified no relevant middleware or base class checks
- **Evidence**: [Code snippet showing the gap]
- **Impact**: Any authenticated user can read any document by ID
- **Suggested Fix**: [Code that enforces authorization - NOT a comment]

### Needs Manual Verification
[Issues where authorization exists but couldn't confirm effectiveness]

### Areas Not Reviewed
[Endpoints or flows not covered in this review]
```

---

#### Imported: Common Django Authorization Patterns

These are patterns you might find - not a checklist to match against.

### Query Scoping
```python
# Scoped to user
Document.objects.filter(owner=request.user)

# Scoped to organization
Document.objects.filter(organization=request.user.organization)

# Using a custom manager
Document.objects.for_user(request.user)  # Investigate what this does
```

### Permission Enforcement
```python
# DRF permission classes
permission_classes = [IsAuthenticated, IsOwner]

# Custom has_object_permission
def has_object_permission(self, request, view, obj):
    return obj.owner == request.user

# Django decorators
@permission_required('app.view_document')

# Manual checks
if document.owner != request.user:
    raise PermissionDenied()
```

### Ownership Assignment
```python
# Server-side (safe)
def perform_create(self, serializer):
    serializer.save(owner=self.request.user)

# From request (investigate)
serializer.save(**request.data)  # Does request.data include owner?
```

---

#### Imported: Investigation Checklist

Use this to guide your review, not as a pass/fail checklist:

```
□ I understand how authorization is typically implemented in this codebase
□ I've identified the ownership model (user, org, tenant, etc.)
□ I've mapped the key endpoints that handle user data
□ For each sensitive endpoint, I've traced the flow and asked:
  - Where does the ID come from?
  - Where is data fetched?
  - What checks exist between input and data access?
□ I've verified my findings by checking parent classes and middleware
□ I've only reported issues I've confirmed through investigation
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
