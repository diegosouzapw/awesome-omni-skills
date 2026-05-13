# Worked Example: Full-Stack Profile Editing Change

## User Request

```text
Add profile editing to the web app and backend API. Existing mobile clients must keep working.
```

## Applied Workflow

### 1. Scope
- Affected components: web frontend, backend API, shared user profile contract
- Constraint: existing mobile clients cannot break
- Success criteria: web users can edit profile data; old mobile clients still read and write the supported subset safely

### 2. Plan
1. Inspect the current profile schema and existing clients
2. Design a backward-compatible API change
3. Update backend validation and handlers first
4. Update web UI to consume the new response shape
5. Run targeted validation on backend and frontend
6. Prepare merge notes with compatibility and rollout details

### 3. Example Change Strategy

**Before**
```json
{
  "displayName": "A. User",
  "bio": "Hello"
}
```

**After: additive contract**
```json
{
  "displayName": "A. User",
  "bio": "Hello",
  "avatarUrl": "https://cdn.example.test/avatar.png"
}
```

Why this is safer:
- existing clients can ignore the new field
- backend can accept requests without `avatarUrl`
- frontend can adopt the field immediately without forcing other clients to update

### 4. Validation Performed
- Backend unit test for profile update handler
- Integration test confirming requests without `avatarUrl` still succeed
- Frontend manual or automated check that editing name and bio still works
- Frontend check that `avatarUrl` renders when present
- Confirmed error response shape did not change unexpectedly

### 5. Example Final Output

```text
Scope
- Added profile editing support for the web app and backend API.
- Affected areas: backend profile update endpoint, frontend profile form, shared response handling.

Plan
1. Reviewed current profile contract and identified mobile compatibility constraints.
2. Chose an additive API change by introducing optional avatarUrl.
3. Updated backend validation and response serialization.
4. Updated frontend form submission and display logic.
5. Ran focused backend and frontend validation.
6. Prepared handoff notes for reviewers.

Changes Made
- Backend: accepted optional avatarUrl and preserved previous request behavior.
- Frontend: added avatar field handling without changing required existing fields.
- Tests: added compatibility coverage for requests that omit avatarUrl.

Validation Performed
- Passed: backend unit tests for profile update flow.
- Passed: integration check for old request shape compatibility.
- Passed: frontend profile edit flow with and without avatarUrl.
- Not run: mobile app full regression in this workspace.

Risks / Follow-ups
- Mobile compatibility is expected because the change is additive, but a downstream mobile verification pass is still recommended.
- Reviewers should verify no generated API client requires regeneration.

Handoff Notes
- If deployed gradually, release backend support before frontend reliance on avatarUrl.
- No migration required.
```

## What Makes This a Good Skill Output

- It names the compatibility constraint early.
- It uses a countable plan.
- It distinguishes what was validated from what was not.
- It gives reviewers concrete rollout guidance instead of a vague success claim.
