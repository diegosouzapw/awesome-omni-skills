# Request and Response Example

This example shows a realistic browser request flow for loading an account profile and how the UI should react to different outcomes.

## Scenario

A profile page loads account details for the route `/accounts/42`. The user can navigate quickly between accounts, so stale responses must not overwrite the newest route state.

## Request

```http
GET /api/accounts/42 HTTP/1.1
Accept: application/json
X-Request-ID: ui-profile-42-001
```

## Successful response

```http
HTTP/1.1 200 OK
Content-Type: application/json
X-Request-ID: api-7f3c1

{
  "id": 42,
  "name": "Ada Lovelace",
  "plan": "pro",
  "status": "active"
}
```

### Expected UI behavior

- initial load shows a blocking loading state if no prior account data exists
- on success, the page renders the account details
- the stored request ID is available for logging or support diagnostics

### Example normalized result

```json
{
  "data": {
    "id": 42,
    "name": "Ada Lovelace",
    "plan": "pro",
    "status": "active"
  },
  "error": null
}
```

## Validation or semantic failure response

```http
HTTP/1.1 422 Unprocessable Content
Content-Type: application/problem+json
X-Request-ID: api-7f3c2

{
  "type": "https://example.com/problems/invalid-account-filter",
  "title": "Invalid filter",
  "detail": "The status filter must be one of: active, suspended, archived.",
  "status": 422,
  "errors": {
    "status": ["Unsupported value."]
  }
}
```

### Expected UI behavior

- do not auto-retry
- show actionable feedback near the relevant control if this was triggered by a filter or form
- preserve any previously rendered good data unless the interaction semantics require a hard reset

### Example normalized error

```json
{
  "kind": "http",
  "status": 422,
  "code": "https://example.com/problems/invalid-account-filter",
  "title": "Invalid filter",
  "detail": "The status filter must be one of: active, suspended, archived.",
  "retriable": false,
  "requestId": "api-7f3c2",
  "fieldErrors": {
    "status": ["Unsupported value."]
  }
}
```

## Transient server failure response

```http
HTTP/1.1 503 Service Unavailable
Content-Type: application/problem+json
Retry-After: 10
X-Request-ID: api-7f3c3

{
  "type": "https://example.com/problems/upstream-unavailable",
  "title": "Temporary outage",
  "detail": "Profile data is temporarily unavailable.",
  "status": 503
}
```

### Expected UI behavior

- classify as retriable
- if the request is safe to replay, retry with bounded backoff
- respect `Retry-After: 10` instead of retrying immediately
- after retry exhaustion, show a stable, normalized error and preserve previous good data if available

### Example normalized error

```json
{
  "kind": "http",
  "status": 503,
  "code": "https://example.com/problems/upstream-unavailable",
  "title": "Temporary outage",
  "detail": "Profile data is temporarily unavailable.",
  "retriable": true,
  "requestId": "api-7f3c3"
}
```

## Cancelled or stale request scenario

```text
1. User opens /accounts/42
2. Request A starts
3. User immediately navigates to /accounts/43
4. Request B starts
5. Request A is aborted or later ignored by sequence check
6. Request B completes and updates the UI
```

### Expected UI behavior

- account 42 data must not replace account 43 data after navigation
- an aborted request should not surface a user-visible error toast by default
- loading state should correspond to the active route request, not the cancelled one

## Minimal adapter sketch

```ts
function normalizeProblemResponse(status: number, body: any, requestId?: string) {
  return {
    kind: 'http',
    status,
    code: body?.type,
    title: body?.title ?? 'Request failed',
    detail: body?.detail,
    retriable: status === 408 || status === 429 || status >= 500,
    requestId,
    fieldErrors: body?.errors,
  };
}
```
