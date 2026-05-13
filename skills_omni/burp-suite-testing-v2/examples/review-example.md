# Worked Review Example: JSON Authorization Test

This example shows a disciplined Burp workflow for validating an API authorization concern without over-claiming the result.

## Scenario

- Target: `https://app.example.test`
- Role in use: standard user account
- Objective: verify whether a standard user can modify another user's role
- In-scope endpoint family: `/api/v1/users/*`

## 1. Baseline request captured from an authenticated browser session

```http
PATCH /api/v1/users/245/role HTTP/2
Host: app.example.test
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json
Origin: https://app.example.test
Referer: https://app.example.test/admin/users/245

{"role":"viewer"}
```

Observed baseline response:

```http
HTTP/2 200 OK
Content-Type: application/json

{"id":245,"role":"viewer","updated":true}
```

Operator note:

- Session is authenticated.
- JSON body is valid.
- The action is role-sensitive and worth manual authorization review.

## 2. Controlled replay in Repeater

Only the target object ID and requested role are changed.

```http
PATCH /api/v1/users/246/role HTTP/2
Host: app.example.test
Authorization: Bearer eyJhbGciOi...
Content-Type: application/json
Origin: https://app.example.test
Referer: https://app.example.test/admin/users/246

{"role":"admin"}
```

## 3. Outcome interpretation

### Secure outcome

```http
HTTP/2 403 Forbidden
Content-Type: application/json

{"error":"insufficient_permissions"}
```

Interpretation:

- The lower-privilege user is blocked.
- Access control appears to be enforced for this action.
- Keep the note as tested-negative evidence if that matters to the assessment.

### Concerning outcome

```http
HTTP/2 200 OK
Content-Type: application/json

{"id":246,"role":"admin","updated":true}
```

Interpretation:

- This suggests broken authorization.
- Do not stop at the status code alone.
- Confirm that the role change actually persisted and was not a deceptive response.

## 4. Validation follow-up

Perform at least one of these before final reporting:

- load the affected user record again with the same or another approved account
- confirm the changed privilege through an allowed UI or API read action
- verify whether an audit trail or state change exists
- repeat once with a fresh session if the behavior is unexpected

## 5. Evidence note example

```text
Finding candidate: Broken function/object-level authorization in role update API
Endpoint: PATCH /api/v1/users/{id}/role
Account used: standard-user-01
Baseline: standard user successfully changed own visible role context on user 245 as expected for accessible object
Modified test: same bearer token used against user 246 with role=admin
Observed result: HTTP/2 200 OK with updated=true and returned role=admin
Validation: follow-up read confirmed target user role changed
Risk note: lower-privilege user can alter another user's role
Confidence: high after side-effect confirmation
```

## 6. What would make this example invalid

Do not report the result as confirmed if any of the following are true:

- the modified request was malformed and the response only reflects parser behavior
- the bearer token expired between baseline and replay
- the application returned a success message but the state did not actually change
- the tested endpoint was out of scope even though it was discoverable in traffic

## 7. Why this example matters

This pattern demonstrates the expected standard for Burp-based evidence:

- controlled baseline
- one-variable-at-a-time modification
- valid payload preservation
- secure vs insecure expected outcomes
- confirmation of actual side effects before reporting
