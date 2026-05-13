# Integration Patterns Reference

Use this file as the compact lookup sheet while implementing or reviewing frontend API integrations.

## Retry Safety Matrix

Automatic retry should be based on both transport outcome and operation semantics.

| Request type | Usually safe to auto-retry? | Notes |
|---|---:|---|
| `GET` | Yes | Safe for many transient failures if the endpoint is read-only as intended. |
| `HEAD` | Yes | Same retry reasoning as `GET`. |
| `OPTIONS` | Usually yes | Rare in app code, but generally safe if needed. |
| `PUT` | Maybe | Defined as idempotent in HTTP semantics, but only retry if the endpoint truly honors that contract. |
| `DELETE` | Maybe | Often treated as idempotent, but confirm backend behavior and side effects. |
| `PATCH` | Usually no | Retry only with explicit replay safety guarantees. |
| `POST` | Usually no | Retry only when the backend supports safe replay, such as an idempotency key or equivalent contract. |

### Retry by failure class

| Failure | Retry? | Notes |
|---|---:|---|
| Network interruption / connection failure | Yes | Use bounded backoff with jitter. |
| Timeout | Yes | Verify the operation is safe to replay. |
| `408 Request Timeout` | Yes | Usually transient. |
| `425 Too Early` | Maybe | Follow backend guidance; often better to avoid replaying unsafe work. |
| `429 Too Many Requests` | Yes | Respect `Retry-After` when present. |
| `500 Internal Server Error` | Maybe | Retry for reads or other safe operations; not blindly for mutations. |
| `502 Bad Gateway` | Yes | Common transient infrastructure failure. |
| `503 Service Unavailable` | Yes | Respect `Retry-After` when present. |
| `504 Gateway Timeout` | Yes | Common transient infrastructure failure. |
| `400 Bad Request` | No | Client request issue; fix payload or caller behavior. |
| `401 Unauthorized` | No automatic loop | Refresh auth state if the architecture supports it; avoid infinite retry loops. |
| `403 Forbidden` | No | Permission or policy issue. |
| `404 Not Found` | Usually no | Domain-specific; not usually transient. |
| `409 Conflict` | Maybe | Requires domain handling, not generic auto-retry. |
| `422 Unprocessable Content` | No | Treat as validation or semantic input failure. |

## Cancellation and Stale-Response Matrix

| Situation | Cancel request? | Also guard state update? | Reason |
|---|---:|---:|---|
| Component unmounts | Yes | Yes | Prevent unnecessary work and stale commits. |
| Search term changes rapidly | Yes | Yes | Later request should win. |
| Route parameter changes | Yes | Yes | Old screen data must not overwrite new route state. |
| Background refresh starts while data is shown | Usually no | Yes | You may keep both requests meaningful, but only relevant result should commit. |
| Mutation already accepted by server | Not always useful | Yes | Aborting client wait does not necessarily undo server work. |

## Normalized Frontend Error Contract

Recommended UI-facing contract:

```ts
type UiApiError = {
  kind: 'http' | 'network' | 'timeout' | 'abort' | 'parse' | 'unknown';
  status?: number;
  code?: string;
  title: string;
  detail?: string;
  retriable: boolean;
  requestId?: string;
  fieldErrors?: Record<string, string[]>;
};
```

### Mapping guidance

| Source | Map to |
|---|---|
| RFC 9457 `type` | `code` |
| RFC 9457 `title` | `title` |
| RFC 9457 `detail` | `detail` |
| HTTP status | `status` |
| Response header like `x-request-id` | `requestId` |
| Validation object such as `errors` or `invalid-params` | `fieldErrors` when shape permits |
| `AbortError` | `kind: 'abort'`, `retriable: false` |
| browser/network `TypeError` | `kind: 'network'`, `retriable: true` |
| JSON parse failure on success-looking response | `kind: 'parse'` |

## Credentialed Request Checklist

Use this checklist for requests that include cookies or other credentials.

- Confirm whether the frontend actually needs credentials for this endpoint.
- If using `fetch`, set credential behavior intentionally rather than relying on assumptions.
- For cross-origin credentialed requests, verify the server is configured to allow the exact origin and credentials behavior expected by the browser.
- Do not expect wildcard cross-origin settings to work for credentialed browser flows.
- If using session cookies, confirm the backend's CSRF defense model and required frontend token/header behavior.
- Avoid storing sensitive tokens in places that conflict with the app's security posture.
- Ensure failure handling distinguishes auth expiry, permission denial, and network transport errors.

## Quick Review Questions

- What owns this request lifecycle: router, query library, or component?
- Can a newer request supersede an older one?
- What prevents stale responses from committing?
- Which failures are retriable, and why?
- How are backend errors normalized before reaching components?
- Does this request include credentials, and what browser/server constraints apply?
