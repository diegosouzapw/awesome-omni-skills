# Emulator Rules Test Workflow

Use this example when you need a concrete, local validation loop for Firestore rules before deploying.

## Goal

Verify that:
- authenticated users can read and write only their own profile documents
- unauthenticated users are denied
- one user cannot read another user's profile
- an admin claim can read all profiles if that access is intentionally supported

## Example Firestore Rules

```firebase
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /profiles/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

## Example Test Intent

| Test case | Auth context | Operation | Expected result |
|---|---|---|---|
| Anonymous user reads profile | none | get `/profiles/alice` | denied |
| Alice reads her own profile | uid=`alice` | get `/profiles/alice` | allowed |
| Bob reads Alice profile | uid=`bob` | get `/profiles/alice` | denied |
| Alice writes her own profile | uid=`alice` | set `/profiles/alice` | allowed |
| Admin reads Alice profile | uid=`support1`, admin=`true` | get `/profiles/alice` | allowed |

## Recommended Local Workflow

1. Start the Firebase Local Emulator Suite with Firestore enabled.
2. Load the candidate rules into the emulator.
3. Seed minimal test data such as `profiles/alice` and `profiles/bob`.
4. Execute tests for anonymous, owner, non-owner, and admin cases.
5. Confirm that both allow and deny paths behave as expected.
6. Only then promote the rules to a deployment candidate.

## Example Pseudocode Test Shape

```javascript
// Pseudocode only: adapt to your Firebase test framework.

test("anonymous cannot read profile", async () => {
  const db = dbAsUnauthenticatedUser();
  await expect(getDoc(db, "profiles/alice")).toBeDenied();
});

test("owner can read own profile", async () => {
  const db = dbAsUser({ uid: "alice" });
  await expect(getDoc(db, "profiles/alice")).toBeAllowed();
});

test("non-owner cannot read another profile", async () => {
  const db = dbAsUser({ uid: "bob" });
  await expect(getDoc(db, "profiles/alice")).toBeDenied();
});

test("admin can read any profile", async () => {
  const db = dbAsUser({ uid: "support1", token: { admin: true } });
  await expect(getDoc(db, "profiles/alice")).toBeAllowed();
});
```

## Before/After Decision Example

### Before testing

```text
Assumption: "The rules look correct."
```

### After testing

```text
Observed outcome:
- anonymous denied
- owner allowed
- non-owner denied
- admin allowed
Decision: rules are behaviorally aligned with the intended access model.
```

## Pre-Deploy Checklist

- [ ] Every client-visible collection has explicit allow and deny tests.
- [ ] At least one unauthenticated test exists.
- [ ] At least one cross-user denial test exists.
- [ ] Role or custom-claim behavior is tested if present.
- [ ] Query-based reads are tested, not only single-document reads.
- [ ] The team knows which accesses happen via client SDK versus Admin SDK.

## Why this workflow matters

Rules failures are cheaper to discover in the emulator than after deployment. This workflow is especially valuable when application code, rule logic, and auth claims are changing together.
