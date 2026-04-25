---
name: fp-ts-react
description: "Functional Programming in React workflow skill. Use this skill when the user needs Practical patterns for using fp-ts with React - hooks, state, forms, data fetching. Use when building React apps with functional programming patterns. Works with React 18/19, Next.js 14/15 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["fp-ts-react", "practical", "patterns", "for", "using", "fp-ts", "react", "hooks"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Functional Programming in React

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/fp-ts-react` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Functional Programming in React Practical patterns for React apps. No jargon, just code that works.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. State with Option (Maybe It's There, Maybe Not), 2. Form Validation with Either, 3. Data Fetching with TaskEither, 4. RemoteData Pattern (The Right Way to Handle Async State), 5. Referential Stability (Preventing Re-renders), 6. Dependency Injection with Context.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When building React apps with fp-ts for type-safe state management
- When handling loading/error/success states in data fetching
- When implementing form validation with error accumulation
- When using React 18/19 or Next.js 14/15 with functional patterns
- Situation - Use
- Value might not exist - Option<T>

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

#### Imported: 1. State with Option (Maybe It's There, Maybe Not)

Use `Option` instead of `null | undefined` for clearer intent.

### Basic Pattern

```typescript
import { useState } from 'react'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

interface User {
  id: string
  name: string
  email: string
}

function UserProfile() {
  // Option says "this might not exist yet"
  const [user, setUser] = useState<O.Option<User>>(O.none)

  const handleLogin = (userData: User) => {
    setUser(O.some(userData))
  }

  const handleLogout = () => {
    setUser(O.none)
  }

  return pipe(
    user,
    O.match(
      // When there's no user
      () => <button onClick={() => handleLogin({ id: '1', name: 'Alice', email: 'alice@example.com' })}>
        Log In
      </button>,
      // When there's a user
      (u) => (
        <div>
          <p>Welcome, {u.name}!</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )
    )
  )
}
```

### Chaining Optional Values

```typescript
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

interface Profile {
  user: O.Option<{
    name: string
    settings: O.Option<{
      theme: string
    }>
  }>
}

function getTheme(profile: Profile): string {
  return pipe(
    profile.user,
    O.flatMap(u => u.settings),
    O.map(s => s.theme),
    O.getOrElse(() => 'light') // default
  )
}
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @fp-ts-react to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @fp-ts-react against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @fp-ts-react for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @fp-ts-react using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/fp-ts-react`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference

| Pattern | Use When |
|---------|----------|
| `Option` | Value might be missing (user not loaded yet) |
| `Either` | Operation might fail (form validation) |
| `TaskEither` | Async operation might fail (API calls) |
| `RemoteData` | Need to show loading/error/success states |
| `pipe` | Chaining multiple transformations |

---

#### Imported: 2. Form Validation with Either

Either is perfect for validation: `Left` = errors, `Right` = valid data.

### Simple Form Validation

```typescript
import * as E from 'fp-ts/Either'
import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'

// Validation functions return Either<ErrorMessage, ValidValue>
const validateEmail = (email: string): E.Either<string, string> =>
  email.includes('@')
    ? E.right(email)
    : E.left('Invalid email address')

const validatePassword = (password: string): E.Either<string, string> =>
  password.length >= 8
    ? E.right(password)
    : E.left('Password must be at least 8 characters')

const validateName = (name: string): E.Either<string, string> =>
  name.trim().length > 0
    ? E.right(name.trim())
    : E.left('Name is required')
```

### Collecting All Errors (Not Just First One)

```typescript
import * as E from 'fp-ts/Either'
import { sequenceS } from 'fp-ts/Apply'
import { getSemigroup } from 'fp-ts/NonEmptyArray'
import { pipe } from 'fp-ts/function'

// This collects ALL errors, not just the first one
const validateAll = sequenceS(E.getApplicativeValidation(getSemigroup<string>()))

interface SignupForm {
  name: string
  email: string
  password: string
}

interface ValidatedForm {
  name: string
  email: string
  password: string
}

function validateForm(form: SignupForm): E.Either<string[], ValidatedForm> {
  return pipe(
    validateAll({
      name: pipe(validateName(form.name), E.mapLeft(e => [e])),
      email: pipe(validateEmail(form.email), E.mapLeft(e => [e])),
      password: pipe(validatePassword(form.password), E.mapLeft(e => [e])),
    })
  )
}

// Usage in component
function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = () => {
    pipe(
      validateForm(form),
      E.match(
        (errs) => setErrors(errs),     // Show all errors
        (valid) => {
          setErrors([])
          submitToServer(valid)         // Submit valid data
        }
      )
    )
  }

  return (
    <form onSubmit={e => { e.preventDefault(); handleSubmit() }}>
      <input
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        placeholder="Name"
      />
      <input
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        placeholder="Email"
      />
      <input
        type="password"
        value={form.password}
        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
        placeholder="Password"
      />

      {errors.length > 0 && (
        <ul style={{ color: 'red' }}>
          {errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
      )}

      <button type="submit">Sign Up</button>
    </form>
  )
}
```

### Field-Level Errors (Better UX)

```typescript
type FieldErrors = Partial<Record<keyof SignupForm, string>>

function validateFormWithFieldErrors(form: SignupForm): E.Either<FieldErrors, ValidatedForm> {
  const errors: FieldErrors = {}

  pipe(validateName(form.name), E.mapLeft(e => { errors.name = e }))
  pipe(validateEmail(form.email), E.mapLeft(e => { errors.email = e }))
  pipe(validatePassword(form.password), E.mapLeft(e => { errors.password = e }))

  return Object.keys(errors).length > 0
    ? E.left(errors)
    : E.right({ name: form.name.trim(), email: form.email, password: form.password })
}

// In component
{errors.email && <span className="error">{errors.email}</span>}
```

---

#### Imported: 3. Data Fetching with TaskEither

TaskEither = async operation that might fail. Perfect for API calls.

### Basic Fetch Hook

```typescript
import { useState, useEffect } from 'react'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

// Wrap fetch in TaskEither
const fetchJson = <T>(url: string): TE.TaskEither<Error, T> =>
  TE.tryCatch(
    async () => {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    },
    (err) => err instanceof Error ? err : new Error(String(err))
  )

// Custom hook
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(null)

    pipe(
      fetchJson<T>(url),
      TE.match(
        (err) => {
          setError(err)
          setLoading(false)
        },
        (result) => {
          setData(result)
          setLoading(false)
        }
      )
    )()
  }, [url])

  return { data, error, loading }
}

// Usage
function UserList() {
  const { data, error, loading } = useFetch<User[]>('/api/users')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <ul>
      {data?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}
```

### Chaining API Calls

```typescript
// Fetch user, then fetch their posts
const fetchUserWithPosts = (userId: string) => pipe(
  fetchJson<User>(`/api/users/${userId}`),
  TE.flatMap(user => pipe(
    fetchJson<Post[]>(`/api/users/${userId}/posts`),
    TE.map(posts => ({ ...user, posts }))
  ))
)
```

### Parallel API Calls

```typescript
import { sequenceT } from 'fp-ts/Apply'

// Fetch multiple things at once
const fetchDashboardData = () => pipe(
  sequenceT(TE.ApplyPar)(
    fetchJson<User>('/api/user'),
    fetchJson<Stats>('/api/stats'),
    fetchJson<Notifications[]>('/api/notifications')
  ),
  TE.map(([user, stats, notifications]) => ({
    user,
    stats,
    notifications
  }))
)
```

---

#### Imported: 4. RemoteData Pattern (The Right Way to Handle Async State)

Stop using `{ data, loading, error }` booleans. Use a proper state machine.

### The Pattern

```typescript
// RemoteData has exactly 4 states - no impossible combinations
type RemoteData<E, A> =
  | { _tag: 'NotAsked' }                    // Haven't started yet
  | { _tag: 'Loading' }                     // In progress
  | { _tag: 'Failure'; error: E }           // Failed
  | { _tag: 'Success'; data: A }            // Got it!

// Constructors
const notAsked = <E, A>(): RemoteData<E, A> => ({ _tag: 'NotAsked' })
const loading = <E, A>(): RemoteData<E, A> => ({ _tag: 'Loading' })
const failure = <E, A>(error: E): RemoteData<E, A> => ({ _tag: 'Failure', error })
const success = <E, A>(data: A): RemoteData<E, A> => ({ _tag: 'Success', data })

// Pattern match all states
function fold<E, A, R>(
  rd: RemoteData<E, A>,
  onNotAsked: () => R,
  onLoading: () => R,
  onFailure: (e: E) => R,
  onSuccess: (a: A) => R
): R {
  switch (rd._tag) {
    case 'NotAsked': return onNotAsked()
    case 'Loading': return onLoading()
    case 'Failure': return onFailure(rd.error)
    case 'Success': return onSuccess(rd.data)
  }
}
```

### Hook with RemoteData

```typescript
function useRemoteData<T>(fetchFn: () => Promise<T>) {
  const [state, setState] = useState<RemoteData<Error, T>>(notAsked())

  const execute = async () => {
    setState(loading())
    try {
      const data = await fetchFn()
      setState(success(data))
    } catch (err) {
      setState(failure(err instanceof Error ? err : new Error(String(err))))
    }
  }

  return { state, execute }
}

// Usage
function UserProfile({ userId }: { userId: string }) {
  const { state, execute } = useRemoteData(() =>
    fetch(`/api/users/${userId}`).then(r => r.json())
  )

  useEffect(() => { execute() }, [userId])

  return fold(
    state,
    () => <button onClick={execute}>Load User</button>,
    () => <Spinner />,
    (err) => <ErrorMessage message={err.message} onRetry={execute} />,
    (user) => <UserCard user={user} />
  )
}
```

### Why RemoteData Beats Booleans

```typescript
// ❌ BAD: Impossible states are possible
interface BadState {
  data: User | null
  loading: boolean
  error: Error | null
}
// Can have: { data: user, loading: true, error: someError } - what does that mean?!

// ✅ GOOD: Only valid states exist
type GoodState = RemoteData<Error, User>
// Can only be: NotAsked | Loading | Failure | Success
```

---

#### Imported: 5. Referential Stability (Preventing Re-renders)

fp-ts values like `O.some(1)` create new objects each render. React sees them as "changed".

### The Problem

```typescript
// ❌ BAD: Creates new Option every render
function BadComponent() {
  const [value, setValue] = useState(O.some(1))

  useEffect(() => {
    // This runs EVERY render because O.some(1) !== O.some(1)
    console.log('value changed')
  }, [value])
}
```

### Solution 1: useMemo

```typescript
// ✅ GOOD: Memoize Option creation
function GoodComponent() {
  const [rawValue, setRawValue] = useState<number | null>(1)

  const value = useMemo(
    () => O.fromNullable(rawValue),
    [rawValue]  // Only recreate when rawValue changes
  )

  useEffect(() => {
    // Now this only runs when rawValue actually changes
    console.log('value changed')
  }, [rawValue])  // Depend on raw value, not Option
}
```

### Solution 2: fp-ts-react-stable-hooks

```bash
npm install fp-ts-react-stable-hooks
```

```typescript
import { useStableO, useStableEffect } from 'fp-ts-react-stable-hooks'
import * as O from 'fp-ts/Option'
import * as Eq from 'fp-ts/Eq'

function StableComponent() {
  // Uses fp-ts equality instead of reference equality
  const [value, setValue] = useStableO(O.some(1))

  // Effect that understands Option equality
  useStableEffect(
    () => { console.log('value changed') },
    [value],
    Eq.tuple(O.getEq(Eq.eqNumber))  // Custom equality
  )
}
```

---

#### Imported: 6. Dependency Injection with Context

Use ReaderTaskEither for testable components with injected dependencies.

### Setup Dependencies

```typescript
import * as RTE from 'fp-ts/ReaderTaskEither'
import { pipe } from 'fp-ts/function'
import { createContext, useContext, ReactNode } from 'react'

// Define what services your app needs
interface AppDependencies {
  api: {
    getUser: (id: string) => Promise<User>
    updateUser: (id: string, data: Partial<User>) => Promise<User>
  }
  analytics: {
    track: (event: string, data?: object) => void
  }
}

// Create context
const DepsContext = createContext<AppDependencies | null>(null)

// Provider
function AppProvider({ deps, children }: { deps: AppDependencies; children: ReactNode }) {
  return <DepsContext.Provider value={deps}>{children}</DepsContext.Provider>
}

// Hook to use dependencies
function useDeps(): AppDependencies {
  const deps = useContext(DepsContext)
  if (!deps) throw new Error('Missing AppProvider')
  return deps
}
```

### Use in Components

```typescript
function UserProfile({ userId }: { userId: string }) {
  const { api, analytics } = useDeps()
  const [user, setUser] = useState<RemoteData<Error, User>>(notAsked())

  useEffect(() => {
    setUser(loading())
    api.getUser(userId)
      .then(u => {
        setUser(success(u))
        analytics.track('user_viewed', { userId })
      })
      .catch(e => setUser(failure(e)))
  }, [userId, api, analytics])

  // render...
}
```

### Testing with Mock Dependencies

```typescript
const mockDeps: AppDependencies = {
  api: {
    getUser: jest.fn().mockResolvedValue({ id: '1', name: 'Test User' }),
    updateUser: jest.fn().mockResolvedValue({ id: '1', name: 'Updated' }),
  },
  analytics: {
    track: jest.fn(),
  },
}

test('loads user on mount', async () => {
  render(
    <AppProvider deps={mockDeps}>
      <UserProfile userId="1" />
    </AppProvider>
  )

  await screen.findByText('Test User')
  expect(mockDeps.api.getUser).toHaveBeenCalledWith('1')
})
```

---

#### Imported: 7. React 19 Patterns

### use() for Promises (React 19+)

```typescript
import { use, Suspense } from 'react'

// Instead of useEffect + useState for data fetching
function UserProfile({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise)  // Suspends until resolved
  return <div>{user.name}</div>
}

// Parent provides the promise
function App() {
  const userPromise = fetchUser('1')  // Start fetching immediately

  return (
    <Suspense fallback={<Spinner />}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  )
}
```

### useActionState for Forms (React 19+)

```typescript
import { useActionState } from 'react'
import * as E from 'fp-ts/Either'

interface FormState {
  errors: string[]
  success: boolean
}

async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  // Use Either for validation
  const result = pipe(
    validateForm(data),
    E.match(
      (errors) => ({ errors, success: false }),
      async (valid) => {
        await saveToServer(valid)
        return { errors: [], success: true }
      }
    )
  )

  return result
}

function SignupForm() {
  const [state, formAction, isPending] = useActionState(submitForm, {
    errors: [],
    success: false
  })

  return (
    <form action={formAction}>
      <input name="email" type="email" />
      <input name="password" type="password" />

      {state.errors.map(e => <p key={e} className="error">{e}</p>)}

      <button disabled={isPending}>
        {isPending ? 'Submitting...' : 'Sign Up'}
      </button>
    </form>
  )
}
```

### useOptimistic for Instant Feedback (React 19+)

```typescript
import { useOptimistic } from 'react'

function TodoList({ todos }: { todos: Todo[] }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => [...state, { ...newTodo, pending: true }]
  )

  const addTodo = async (text: string) => {
    const newTodo = { id: crypto.randomUUID(), text, done: false }

    // Immediately show in UI
    addOptimisticTodo(newTodo)

    // Actually save (will reconcile when done)
    await saveTodo(newTodo)
  }

  return (
    <ul>
      {optimisticTodos.map(todo => (
        <li key={todo.id} style={{ opacity: todo.pending ? 0.5 : 1 }}>
          {todo.text}
        </li>
      ))}
    </ul>
  )
}
```

---

#### Imported: 8. Common Patterns Cheat Sheet

### Render Based on Option

```typescript
// Pattern 1: match
pipe(
  maybeUser,
  O.match(
    () => <LoginButton />,
    (user) => <UserMenu user={user} />
  )
)

// Pattern 2: fold (same as match)
O.fold(
  () => <LoginButton />,
  (user) => <UserMenu user={user} />
)(maybeUser)

// Pattern 3: getOrElse for simple defaults
const name = pipe(
  maybeUser,
  O.map(u => u.name),
  O.getOrElse(() => 'Guest')
)
```

### Render Based on Either

```typescript
pipe(
  validationResult,
  E.match(
    (errors) => <ErrorList errors={errors} />,
    (data) => <SuccessMessage data={data} />
  )
)
```

### Safe Array Rendering

```typescript
import * as A from 'fp-ts/Array'

// Get first item safely
const firstUser = pipe(
  users,
  A.head,
  O.map(user => <Featured user={user} />),
  O.getOrElse(() => <NoFeaturedUser />)
)

// Find specific item
const adminUser = pipe(
  users,
  A.findFirst(u => u.role === 'admin'),
  O.map(admin => <AdminBadge user={admin} />),
  O.toNullable  // or O.getOrElse(() => null)
)
```

### Conditional Props

```typescript
// Add props only if value exists
const modalProps = {
  isOpen: true,
  ...pipe(
    maybeTitle,
    O.map(title => ({ title })),
    O.getOrElse(() => ({}))
  )
}
```

---

#### Imported: Libraries

- **[fp-ts](https://github.com/gcanti/fp-ts)** - Core library
- **[fp-ts-react-stable-hooks](https://github.com/mblink/fp-ts-react-stable-hooks)** - Stable hooks
- **[@devexperts/remote-data-ts](https://github.com/devexperts/remote-data-ts)** - RemoteData
- **[io-ts](https://github.com/gcanti/io-ts)** - Runtime type validation
- **[zod](https://github.com/colinhacks/zod)** - Schema validation (works great with fp-ts)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
