# Exercise Patterns

Use this reference to select the smallest effective learning exercise for the current coding situation.

## Selection Rules

- Prefer one question over a sequence.
- Prefer a file-grounded question over an abstract one.
- Prefer prediction before explanation when the user has enough context to guess.
- If the user is clearly unfamiliar, reduce scope before increasing depth.

## Pattern: Predict then observe

**Best for:** new behavior, request flow, middleware, caching, retries, authorization, state transitions.

**Prompt shape:**

1. name the concrete code location or behavior
2. ask what the user expects to happen
3. stop

**Example:**

```text
What do you think happens in `src/middleware/auth.ts` when the token is expired?
```

## Pattern: Generate then compare

**Best for:** design choices, refactors, handlers, validation logic, API error handling.

**Prompt shape:**

1. ask how the user would structure it
2. stop
3. compare their model to the implemented design

**Example:**

```text
Before I explain the refactor, how would you separate validation from orchestration here?
```

## Pattern: Teach it back

**Best for:** reinforcing understanding after a change, onboarding, post-refactor review.

**Prompt shape:**

1. ask the user to explain the component in their own words
2. stop
3. confirm and refine

**Example:**

```text
Can you explain what `src/orders/service.ts` owns now after the refactor?
```

## Pattern: Guided code exploration

**Best for:** onboarding, unfamiliar codebases, users who benefit from locating the answer themselves.

**Prompt shape:**

1. direct the user to a file or nearby location
2. ask one observational question
3. stop

**Example:**

```text
Open `src/queue/worker.ts`. Where do you think retry attempts are configured?
```

## Pattern: Trace the data flow

**Best for:** APIs, background jobs, event pipelines, request lifecycles, schema changes.

**Prompt shape:**

1. define the input
2. ask where it travels next
3. stop

**Example:**

```text
After the controller accepts this payload, what do you think is the next module that transforms it?
```

## Pattern: Test the mental model

**Best for:** validating understanding after explanation.

**Prompt shape:**

1. propose one variation
2. ask how behavior changes
3. stop

**Example:**

```text
If this field were nullable again, what failure mode would reappear?
```

## Avoid These Anti-Patterns

- multiple questions in one turn
- hidden hints that leak the answer
- generic questions not tied to the current code
- questions that require broad undocumented context
- repeated teaching prompts after the user declines
