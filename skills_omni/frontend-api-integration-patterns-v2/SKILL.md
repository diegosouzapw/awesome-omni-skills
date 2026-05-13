---
name: "frontend-api-integration-patterns-v2"
description: "Frontend API Integration Patterns workflow skill. Use this skill when the user needs production-ready patterns for integrating frontend applications with backend APIs, including race condition handling, request cancellation, retry strategies, error normalization, and UI state management, while preserving upstream workflow intent and provenance."
version: "0.0.1"
category: "frontend"
tags:
  - "frontend"
  - "api-integration"
  - "javascript"
  - "react"
  - "fetch"
  - "abortcontroller"
  - "retry"
  - "error-handling"
  - "ui-state"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "cursor"
  - "codex-cli"
  - "claude-code"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "Unknown"
date_added: "2026-04-25"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "frontend-api-integration-patterns-v2"
family_name: "Frontend API Integration Patterns"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/frontend-api-integration-patterns-v2"
upstream_skill: "skills/frontend-api-integration-patterns-v2"
upstream_author: "avij1109"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "frontend-api-integration-patterns-v2"
---

# Frontend API Integration Patterns

## Overview

Use this skill when frontend code must call backend APIs reliably under real user behavior: fast navigation, repeated clicks, changing filters, intermittent failures, expired sessions, and overlapping requests.

This skill focuses on production API integration behavior in the UI layer:
- choosing the correct loading mechanism for the framework lifecycle
- preventing stale UI from out-of-order responses
- cancelling work that is no longer relevant
- retrying only when the request is safe to repeat
- normalizing backend and network failures into a stable UI-facing error contract
- handling credentialed requests without weakening browser security boundaries

It is most useful for React-style applications, but the patterns apply to any frontend that performs asynchronous API work.

## When to Use

Use this skill when one or more of these conditions apply:
- the UI fetches data from REST or HTTP-style APIs
- users can trigger overlapping requests by typing, filtering, navigating, or clicking repeatedly
- stale responses sometimes overwrite newer state
- the app needs cancellation when components unmount or route parameters change
- retries are needed for transient failures, but not all requests are safe to replay
- backend errors need to be converted into a predictable frontend shape
- the app sends cookies or other credentials and must respect CORS and CSRF boundaries
- a review is needed for existing frontend API code that “mostly works” but fails under edge cases

Do not use this skill as the primary guide when:
- the task is backend API design with no frontend behavior involved
- the integration is purely server-to-server
- the system uses only static build-time data with no user-driven requests
- the app already has an established framework-native data layer and the task is unrelated to request behavior

## Workflow

1. **Choose the data-loading owner**
   - Prefer framework or router-native loaders/actions when the framework already owns navigation and data lifecycle.
   - Prefer a query library when the app needs caching, revalidation, deduplication, mutations, and background refresh across many screens.
   - Use direct client-side fetch logic only for local, component-scoped interactions that do not justify broader infrastructure.
   - Avoid defaulting to `useEffect` for everything; effects are often the fallback, not the ideal first choice.

2. **Define the request contract before coding**
   - Record the endpoint, method, auth mode, request body, and expected success shape.
   - Decide whether the operation is idempotent and whether retry is allowed.
   - Define the normalized frontend error shape up front, for example:

   ```ts
   type UiApiError = {
     kind: 'http' | 'network' | 'timeout' | 'abort' | 'parse' | 'unknown';
     status?: number;
     code?: string;
     title: string;
     detail?: string;
     retriable: boolean;
     requestId?: string;
   };
   ```

   - If the backend returns RFC 9457-style problem details, preserve useful fields instead of flattening everything into a generic message.
   - Use `assets/schema-map.json` as the canonical field mapping when converting transport and backend errors into UI errors.

3. **Prevent stale-response races**
   - Give each request a lifecycle boundary tied to the current route, filter set, search term, or selected entity.
   - Cancel superseded requests with `AbortController` when the browser API or client supports it.
   - Also guard state updates with a request token or sequence check, because cancellation is not a complete stale-state strategy by itself.
   - Treat “latest request wins” as an explicit decision, not accidental behavior.

4. **Implement loading and mutation state deliberately**
   - Separate initial load, background refresh, empty state, success state, and error state.
   - Do not clear good data just because a refresh started.
   - Distinguish user-visible blocking work from silent background revalidation.
   - For mutations, model at least: idle, submitting, succeeded, failed, and optionally rolling back.

5. **Retry only when safe**
   - Retry transient failures such as network interruption, `408`, `429`, and many `5xx` responses.
   - Respect `Retry-After` when the server sends it.
   - Usually do not auto-retry unsafe mutations like `POST` unless the backend contract explicitly supports safe replay via idempotency keys or equivalent semantics.
   - Use bounded exponential backoff with jitter; never tight loops.

6. **Handle credentials and browser security boundaries**
   - If requests include cookies or other credentials, verify the frontend and backend agree on CORS behavior.
   - Do not assume credentialed cross-origin requests work without explicit server configuration.
   - For session-cookie flows, account for CSRF protections required by the backend architecture.
   - Do not “fix” CORS problems by weakening browser policies in frontend code.

7. **Test realistic failure modes**
   - Simulate rapid parameter changes, route transitions, and double-click submissions.
   - Verify aborted or stale requests do not overwrite newer state.
   - Verify retry behavior for transient failures and non-retry behavior for validation errors.
   - Verify normalized errors drive correct UI messaging and logging.

## Implementation Patterns

### Pattern: component-scoped fetch with cancellation and stale-response guard

Use this when the request genuinely belongs to a single component and no framework-native loader or shared query cache is a better owner.

```ts
import { useEffect, useRef, useState } from 'react';

type User = { id: string; name: string };
type UiApiError = {
  kind: 'http' | 'network' | 'timeout' | 'abort' | 'parse' | 'unknown';
  status?: number;
  code?: string;
  title: string;
  detail?: string;
  retriable: boolean;
};

function normalizeError(error: unknown): UiApiError {
  if (error instanceof DOMException && error.name === 'AbortError') {
    return { kind: 'abort', title: 'Request cancelled', retriable: false };
  }

  if (error instanceof TypeError) {
    return {
      kind: 'network',
      title: 'Network error',
      detail: 'The request could not reach the server.',
      retriable: true,
    };
  }

  return {
    kind: 'unknown',
    title: 'Unexpected error',
    retriable: false,
  };
}

export function UserPanel({ userId }: { userId: string }) {
  const requestSeq = useRef(0);
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<UiApiError | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const seq = ++requestSeq.current;

    setLoading(true);
    setError(null);

    fetch(`/api/users/${userId}`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) {
          let problem: any = null;
          try {
            problem = await res.json();
          } catch {}

          throw {
            __ui_http_error: true,
            status: res.status,
            problem,
          };
        }
        return res.json() as Promise<User>;
      })
      .then((next) => {
        if (seq !== requestSeq.current) return;
        setData(next);
      })
      .catch((err) => {
        if (seq !== requestSeq.current) return;

        if (err?.__ui_http_error) {
          setError({
            kind: 'http',
            status: err.status,
            code: err.problem?.type,
            title: err.problem?.title ?? 'Request failed',
            detail: err.problem?.detail,
            retriable: err.status === 408 || err.status === 429 || err.status >= 500,
          });
          return;
        }

        const normalized = normalizeError(err);
        if (normalized.kind !== 'abort') {
          setError(normalized);
        }
      })
      .finally(() => {
        if (seq === requestSeq.current) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [userId]);

  if (loading && !data) return <p>Loading user…</p>;
  if (error) return <p>{error.title}</p>;
  if (!data) return <p>No user found.</p>;
  return <div>{data.name}</div>;
}
```

Why this works:
- cleanup aborts the old request when the dependency changes or the component unmounts
- the sequence check blocks late arrivals from overwriting newer state
- aborts are treated as expected control flow, not user-facing failures
- HTTP errors are normalized separately from transport failures

### Pattern: preserve previous data during refresh

If the user already has valid data on screen, prefer a non-destructive refresh model:
- keep current data visible
- show a secondary “refreshing” indicator
- replace data only when the newer request completes successfully
- show refresh errors without erasing previously rendered good state unless the domain requires hard invalidation

### Pattern: mutation submission with duplicate-submit protection

For creates, updates, or deletes:
- disable or debounce repeated submits while one is active when duplicate execution would be harmful
- if retries for mutations are allowed, document the backend guarantee that makes replay safe
- keep server validation errors separate from generic transport failures so the UI can highlight actionable fields

## Best Practices

Do:
- prefer router/framework data APIs when they already manage navigation-tied fetching
- use `AbortController` for browser fetch cancellation
- pair cancellation with a stale-response guard such as a request sequence or identity check
- normalize errors into a stable frontend contract before they reach components
- keep old data visible during background refresh when possible
- retry only transient and safe-to-replay operations
- honor `Retry-After` and back off with jitter
- log or surface request identifiers when the backend provides them
- review credentialed requests for CORS and CSRF implications before shipping

Do not:
- treat every failure as “something went wrong” with no status or retry semantics
- auto-retry every `POST`, `PATCH`, or `DELETE`
- erase working UI data on every refresh attempt
- update state from whichever response resolves last without checking request relevance
- show aborted requests as user-visible errors by default
- work around CORS or CSRF problems by disabling security controls in development patterns that leak into production
- place fetches in effects when the framework already provides a better lifecycle-bound loading primitive

## Examples

See these local support files for concrete operator material:
- `examples/request-response-example.md` for end-to-end request/response handling with expected UI behavior
- `references/integration-patterns.md` for retry, cancellation, and credentialed-request lookup tables
- `assets/schema-map.json` for a machine-readable mapping between raw backend/transport fields and normalized UI error fields

### Example: stale search requests should not overwrite newer results

```text
Input behavior:
1. User types "re"
2. Request A starts for /api/search?q=re
3. User types "react"
4. Request B starts for /api/search?q=react
5. Response B returns first
6. Response A returns later

Expected output behavior:
- UI shows results for "react"
- late response A is ignored or already aborted
- loading indicator reflects only the latest relevant request
```

### Example: retry decision

```text
Request: GET /api/reports/weekly
Failure: 503 Service Unavailable
Expected behavior:
- classify as transient HTTP failure
- retry with bounded backoff
- if server sends Retry-After, respect it
- if retries exhaust, show normalized retriable error
```

### Example: do not blindly retry validation failure

```text
Request: POST /api/users
Failure: 422 Unprocessable Content
Expected behavior:
- do not auto-retry
- parse validation payload if available
- map server feedback to field or form error state
- keep submit action available after user correction
```

## Troubleshooting

**Symptoms:** Old search results or record details flash briefly after the user changes filters or route parameters.

**Solution:** Add both request cancellation and a stale-response guard. Aborting the previous request reduces wasted work; the sequence or identity check prevents late arrivals from updating state if the abort does not stop all downstream async handling.

**Symptoms:** The UI clears existing data every time a refresh starts, causing flicker or empty-state flashes.

**Solution:** Split initial-load state from background-refresh state. Keep previously successful data rendered while the next request is in flight, and show a non-blocking refresh indicator instead of resetting the screen.

**Symptoms:** Retries amplify production incidents or create duplicate records.

**Solution:** Re-check retry policy by HTTP method and operation semantics. Restrict automatic retries to transient failures and safe-to-replay requests. For unsafe mutations, require an explicit backend replay guarantee before enabling retries.

**Symptoms:** Users see generic errors even when the server returns structured failure details.

**Solution:** Normalize errors centrally and preserve fields such as status, title, detail, problem type, and request ID. Do not force each component to interpret raw backend payloads differently.

**Symptoms:** Requests with cookies fail only in browser environments, especially cross-origin.

**Solution:** Verify credential mode, allowed origin configuration, and server-side CORS headers together. If the flow relies on cookies, also confirm the expected CSRF defense. Frontend code alone cannot override a missing server CORS policy.

**Symptoms:** An aborted request still appears in logs or briefly flips error state.

**Solution:** Treat abort as expected control flow. Filter `AbortError` from user-facing error state and ensure post-abort asynchronous branches cannot commit stale state.

## Additional Resources

- [Integration patterns reference](references/integration-patterns.md) — open for retry safety, error taxonomy, cancellation matrix, and credentialed-request security checks.
- [Request/response example](examples/request-response-example.md) — open when implementing a concrete fetch flow with expected UI outcomes.
- [Schema map asset](assets/schema-map.json) — open when standardizing error normalization fields or aligning frontend adapters across endpoints.

## Related Skills

No additional related local skills were provided in the source context.
