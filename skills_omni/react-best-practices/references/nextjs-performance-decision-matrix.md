# Next.js Performance Decision Matrix

Use this matrix for App Router performance decisions.

## 1. Server Component or Client Component?

Choose **Server Component** by default when the code:

- fetches data
- transforms large datasets
- does not need browser APIs
- does not need client hooks or interactive local state
- should avoid shipping code to the browser

Choose **Client Component** only when the code needs:

- event handlers
- browser APIs
- refs tied to browser behavior
- local interactive state
- client hooks that require the browser runtime

### Rule of thumb

If only one small part is interactive, keep the parent on the server and make only that leaf client-side.

## 2. Should this route be static, revalidated, or dynamic?

### Static-friendly

Use when data:

- is public
- changes infrequently
- benefits from reuse across requests

### Revalidated

Use when data:

- can be a little stale
- should refresh on a known cadence or invalidation event

### Dynamic or request-bound

Use when data:

- depends on the current request
- depends on auth, cookies, headers, or user-specific state
- must always reflect the latest personalized value

Do not describe personalized or request-specific data as safely cacheable without explicit reasoning.

## 3. When should you use Suspense?

Use Suspense when:

- one region of the page is slower than the rest
- users can benefit from seeing partial content earlier
- independent work can stream separately

Do not add a boundary mechanically if the whole page still blocks on a single root dependency.

## 4. When should you use dynamic import?

Good candidates:

- charting libraries
- rich text editors
- maps
- browser-only widgets
- below-the-fold optional panels

Bad candidate patterns:

- critical above-the-fold content
- code that remains required immediately on first render
- broad route trees that should have remained server-rendered

## 5. What should cross the server/client boundary?

Prefer sending:

- small, stable, already-shaped props
- identifiers rather than large objects when possible
- data already prepared for rendering

Avoid sending:

- large nested objects unless truly needed
- unstable values recreated unnecessarily
- server-only logic that can stay on the server
