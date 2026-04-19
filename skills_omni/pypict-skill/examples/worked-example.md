# Worked Pairwise Examples

These examples show how to move from raw combinations to a smaller, more reviewable PICT-style model.

## Example 1: Simple reduced model

### Scenario

You need coverage for a login API across a few major behavior dimensions.

### Raw thinking

You could list many browsers, many account states, and many MFA configurations. That is usually too literal.

### Reduced model

```text
Browser: Chromium, Firefox, Safari
AuthMode: Password, SSO
MFA: Off, On
AccountState: Active, Locked
```

### Why these values

- `Browser` captures broad rendering/client classes instead of every version
- `AuthMode` represents two distinct login paths
- `MFA` is modeled as a behavior toggle
- `AccountState` captures a key success-vs-blocked branch

### What pairwise generation gives you

A pairwise generator should produce a compact set where every pair of values across parameters appears at least once.

Possible output excerpt:

```text
Browser   AuthMode   MFA   AccountState
Chromium  Password   Off   Active
Firefox   SSO        On    Active
Safari    Password   On    Locked
Chromium  SSO        Off   Locked
Firefox   Password   On    Active
Safari    SSO        Off   Active
```

### Review note

This is useful for broad interaction coverage, but it does **not** yet cover:

- malformed credentials
- session fixation or auth bypass attempts
- rate limiting and lockout edge timing
- sequence-sensitive password reset or recovery flows

## Example 2: Constrained model

### Scenario

Now add a business rule: anonymous access is allowed for some requests, but anonymous users cannot have MFA enabled, and locked accounts do not use SSO success paths.

### Model

```text
Role: Anonymous, User, Admin
AuthMode: Password, SSO
MFA: Off, On
AccountState: Active, Locked

IF [Role] = "Anonymous" THEN [MFA] <> "On";
IF [AccountState] = "Locked" THEN [AuthMode] <> "SSO";
```

### Why the constraints exist

- Anonymous users do not complete an MFA flow
- Locked accounts should not be represented as valid SSO-success combinations in this test slice

### Possible output excerpt

```text
Role       AuthMode   MFA   AccountState
Anonymous  Password   Off   Active
User       SSO        On    Active
Admin      Password   On    Active
User       Password   Off   Locked
Admin      Password   Off   Locked
Anonymous  SSO        Off   Active
```

### What changed

Without constraints, a generator might emit rows like:

```text
Anonymous  Password   On    Active
User       SSO        On    Locked
```

Those rows would be invalid for this modeled scope. Adding constraints removes them from the generated set.

## Example 3: What still needs targeted testing

Even after generation, add hand-picked tests for:

- wrong-password attempts and lockout thresholds
- expired or replayed SSO assertions
- privilege transition checks between `User` and `Admin`
- concurrent login/session invalidation behavior
- recovery and password-reset flows

## Practical takeaway

A good pairwise model:

1. uses reduced, behaviorally distinct values
2. encodes impossible combinations as constraints
3. keeps mandatory scenarios outside pure generation if needed
4. is reviewed as a starting test set, not the whole strategy
