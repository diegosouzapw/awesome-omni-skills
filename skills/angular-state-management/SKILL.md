---
name: angular-state-management
description: "Angular State Management workflow skill. Use this skill when the user needs Master modern Angular state management with Signals, NgRx, and RxJS. Use when setting up global state, managing component stores, choosing between state solutions, or migrating from legacy patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["angular-state-management", "master", "modern", "angular", "state", "management", "signals", "ngrx"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Angular State Management

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/angular-state-management` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Angular State Management Comprehensive guide to modern Angular state management patterns, from Signal-based local state to global stores and server state synchronization.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Quick Start: Signal-Based State, NgRx Store (Global State), RxJS-Based Patterns, Server State with Signals, Migration Path.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Setting up global state management in Angular
- Choosing between Signals, NgRx, or Akita
- Managing component-level stores
- Implementing optimistic updates
- Debugging state-related issues
- Migrating from legacy state patterns

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `README.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `metadata.json` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Core Concepts

### State Categories

| Type             | Description                  | Solutions             |
| ---------------- | ---------------------------- | --------------------- |
| **Local State**  | Component-specific, UI state | Signals, `signal()`   |
| **Shared State** | Between related components   | Signal services       |
| **Global State** | App-wide, complex            | NgRx, Akita, Elf      |
| **Server State** | Remote data, caching         | NgRx Query, RxAngular |
| **URL State**    | Route parameters             | ActivatedRoute        |
| **Form State**   | Input values, validation     | Reactive Forms        |

### Selection Criteria

```
Small app, simple state → Signal Services
Medium app, moderate state → Component Stores
Large app, complex state → NgRx Store
Heavy server interaction → NgRx Query + Signal Services
Real-time updates → RxAngular + Signals
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @angular-state-management to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @angular-state-management against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @angular-state-management for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @angular-state-management using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Practice - Why
- Use Signals for local state - Simple, reactive, no subscriptions
- Use computed() for derived data - Auto-updates, memoized
- Colocate state with feature - Easier to maintain
- Use NgRx for complex flows - Actions, effects, devtools
- Prefer inject() over constructor - Cleaner, works in factories
- Anti-Pattern - Instead

### Imported Operating Notes

#### Imported: Best Practices

### Do's

| Practice                           | Why                                |
| ---------------------------------- | ---------------------------------- |
| Use Signals for local state        | Simple, reactive, no subscriptions |
| Use `computed()` for derived data  | Auto-updates, memoized             |
| Colocate state with feature        | Easier to maintain                 |
| Use NgRx for complex flows         | Actions, effects, devtools         |
| Prefer `inject()` over constructor | Cleaner, works in factories        |

### Don'ts

| Anti-Pattern                      | Instead                                               |
| --------------------------------- | ----------------------------------------------------- |
| Store derived data                | Use `computed()`                                      |
| Mutate signals directly           | Use `set()` or `update()`                             |
| Over-globalize state              | Keep local when possible                              |
| Mix RxJS and Signals chaotically  | Choose primary, bridge with `toSignal`/`toObservable` |
| Subscribe in components for state | Use template with signals                             |

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/angular-state-management`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [README.md](README.md)
- [metadata.json](metadata.json)

### Imported Reference Notes

#### Imported: Resources

- [Angular Signals Guide](https://angular.dev/guide/signals)
- [NgRx Documentation](https://ngrx.io/)
- [NgRx SignalStore](https://ngrx.io/guide/signals)
- [RxAngular](https://www.rx-angular.io/)

#### Imported: Quick Start: Signal-Based State

### Pattern 1: Simple Signal Service

```typescript
// services/counter.service.ts
import { Injectable, signal, computed } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CounterService {
  // Private writable signals
  private _count = signal(0);

  // Public read-only
  readonly count = this._count.asReadonly();
  readonly doubled = computed(() => this._count() * 2);
  readonly isPositive = computed(() => this._count() > 0);

  increment() {
    this._count.update((v) => v + 1);
  }

  decrement() {
    this._count.update((v) => v - 1);
  }

  reset() {
    this._count.set(0);
  }
}

// Usage in component
@Component({
  template: `
    <p>Count: {{ counter.count() }}</p>
    <p>Doubled: {{ counter.doubled() }}</p>
    <button (click)="counter.increment()">+</button>
  `,
})
export class CounterComponent {
  counter = inject(CounterService);
}
```

### Pattern 2: Feature Signal Store

```typescript
// stores/user.store.ts
import { Injectable, signal, computed, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

@Injectable({ providedIn: "root" })
export class UserStore {
  private http = inject(HttpClient);

  // State signals
  private _user = signal<User | null>(null);
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  // Selectors (read-only computed)
  readonly user = computed(() => this._user());
  readonly loading = computed(() => this._loading());
  readonly error = computed(() => this._error());
  readonly isAuthenticated = computed(() => this._user() !== null);
  readonly displayName = computed(() => this._user()?.name ?? "Guest");

  // Actions
  async loadUser(id: string) {
    this._loading.set(true);
    this._error.set(null);

    try {
      const user = await fetch(`/api/users/${id}`).then((r) => r.json());
      this._user.set(user);
    } catch (e) {
      this._error.set("Failed to load user");
    } finally {
      this._loading.set(false);
    }
  }

  updateUser(updates: Partial<User>) {
    this._user.update((user) => (user ? { ...user, ...updates } : null));
  }

  logout() {
    this._user.set(null);
    this._error.set(null);
  }
}
```

### Pattern 3: SignalStore (NgRx Signals)

```typescript
// stores/products.store.ts
import {
  signalStore,
  withState,
  withMethods,
  withComputed,
  patchState,
} from "@ngrx/signals";
import { inject } from "@angular/core";
import { ProductService } from "./product.service";

interface ProductState {
  products: Product[];
  loading: boolean;
  filter: string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  filter: "",
};

export const ProductStore = signalStore(
  { providedIn: "root" },

  withState(initialState),

  withComputed((store) => ({
    filteredProducts: computed(() => {
      const filter = store.filter().toLowerCase();
      return store
        .products()
        .filter((p) => p.name.toLowerCase().includes(filter));
    }),
    totalCount: computed(() => store.products().length),
  })),

  withMethods((store, productService = inject(ProductService)) => ({
    async loadProducts() {
      patchState(store, { loading: true });

      try {
        const products = await productService.getAll();
        patchState(store, { products, loading: false });
      } catch {
        patchState(store, { loading: false });
      }
    },

    setFilter(filter: string) {
      patchState(store, { filter });
    },

    addProduct(product: Product) {
      patchState(store, ({ products }) => ({
        products: [...products, product],
      }));
    },
  })),
);

// Usage
@Component({
  template: `
    <input (input)="store.setFilter($event.target.value)" />
    @if (store.loading()) {
      <app-spinner />
    } @else {
      @for (product of store.filteredProducts(); track product.id) {
        <app-product-card [product]="product" />
      }
    }
  `,
})
export class ProductListComponent {
  store = inject(ProductStore);

  ngOnInit() {
    this.store.loadProducts();
  }
}
```

---

#### Imported: NgRx Store (Global State)

### Setup

```typescript
// store/app.state.ts
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  user: UserState;
  cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  cart: cartReducer,
};

// main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideStore(reducers),
    provideEffects([UserEffects, CartEffects]),
    provideStoreDevtools({ maxAge: 25 }),
  ],
});
```

### Feature Slice Pattern

```typescript
// store/user/user.actions.ts
import { createActionGroup, props, emptyProps } from "@ngrx/store";

export const UserActions = createActionGroup({
  source: "User",
  events: {
    "Load User": props<{ userId: string }>(),
    "Load User Success": props<{ user: User }>(),
    "Load User Failure": props<{ error: string }>(),
    "Update User": props<{ updates: Partial<User> }>(),
    Logout: emptyProps(),
  },
});
```

```typescript
// store/user/user.reducer.ts
import { createReducer, on } from "@ngrx/store";
import { UserActions } from "./user.actions";

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.loadUser, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),

  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(UserActions.logout, () => initialState),
);
```

```typescript
// store/user/user.selectors.ts
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>("user");

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user,
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state) => state.loading,
);

export const selectIsAuthenticated = createSelector(
  selectUser,
  (user) => user !== null,
);
```

```typescript
// store/user/user.effects.ts
import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of } from "rxjs";

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap(({ userId }) =>
        this.userService.getUser(userId).pipe(
          map((user) => UserActions.loadUserSuccess({ user })),
          catchError((error) =>
            of(UserActions.loadUserFailure({ error: error.message })),
          ),
        ),
      ),
    ),
  );
}
```

### Component Usage

```typescript
@Component({
  template: `
    @if (loading()) {
      <app-spinner />
    } @else if (user(); as user) {
      <h1>Welcome, {{ user.name }}</h1>
      <button (click)="logout()">Logout</button>
    }
  `,
})
export class HeaderComponent {
  private store = inject(Store);

  user = this.store.selectSignal(selectUser);
  loading = this.store.selectSignal(selectUserLoading);

  logout() {
    this.store.dispatch(UserActions.logout());
  }
}
```

---

#### Imported: RxJS-Based Patterns

### Component Store (Local Feature State)

```typescript
// stores/todo.store.ts
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { switchMap, tap, catchError, EMPTY } from "rxjs";

interface TodoState {
  todos: Todo[];
  loading: boolean;
}

@Injectable()
export class TodoStore extends ComponentStore<TodoState> {
  constructor(private todoService: TodoService) {
    super({ todos: [], loading: false });
  }

  // Selectors
  readonly todos$ = this.select((state) => state.todos);
  readonly loading$ = this.select((state) => state.loading);
  readonly completedCount$ = this.select(
    this.todos$,
    (todos) => todos.filter((t) => t.completed).length,
  );

  // Updaters
  readonly addTodo = this.updater((state, todo: Todo) => ({
    ...state,
    todos: [...state.todos, todo],
  }));

  readonly toggleTodo = this.updater((state, id: string) => ({
    ...state,
    todos: state.todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    ),
  }));

  // Effects
  readonly loadTodos = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.todoService.getAll().pipe(
          tap({
            next: (todos) => this.patchState({ todos, loading: false }),
            error: () => this.patchState({ loading: false }),
          }),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );
}
```

---

#### Imported: Server State with Signals

### HTTP + Signals Pattern

```typescript
// services/api.service.ts
import { Injectable, signal, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

@Injectable({ providedIn: "root" })
export class ProductApiService {
  private http = inject(HttpClient);

  private _state = signal<ApiState<Product[]>>({
    data: null,
    loading: false,
    error: null,
  });

  readonly products = computed(() => this._state().data ?? []);
  readonly loading = computed(() => this._state().loading);
  readonly error = computed(() => this._state().error);

  async fetchProducts(): Promise<void> {
    this._state.update((s) => ({ ...s, loading: true, error: null }));

    try {
      const data = await firstValueFrom(
        this.http.get<Product[]>("/api/products"),
      );
      this._state.update((s) => ({ ...s, data, loading: false }));
    } catch (e) {
      this._state.update((s) => ({
        ...s,
        loading: false,
        error: "Failed to fetch products",
      }));
    }
  }

  // Optimistic update
  async deleteProduct(id: string): Promise<void> {
    const previousData = this._state().data;

    // Optimistically remove
    this._state.update((s) => ({
      ...s,
      data: s.data?.filter((p) => p.id !== id) ?? null,
    }));

    try {
      await firstValueFrom(this.http.delete(`/api/products/${id}`));
    } catch {
      // Rollback on error
      this._state.update((s) => ({ ...s, data: previousData }));
    }
  }
}
```

---

#### Imported: Migration Path

### From BehaviorSubject to Signals

```typescript
// Before: RxJS-based
@Injectable({ providedIn: "root" })
export class OldUserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }
}

// After: Signal-based
@Injectable({ providedIn: "root" })
export class UserService {
  private _user = signal<User | null>(null);
  readonly user = this._user.asReadonly();

  setUser(user: User) {
    this._user.set(user);
  }
}
```

### Bridging Signals and RxJS

```typescript
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

// Observable → Signal
@Component({...})
export class ExampleComponent {
  private route = inject(ActivatedRoute);

  // Convert Observable to Signal
  userId = toSignal(
    this.route.params.pipe(map(p => p['id'])),
    { initialValue: '' }
  );
}

// Signal → Observable
export class DataService {
  private filter = signal('');

  // Convert Signal to Observable
  filter$ = toObservable(this.filter);

  filteredData$ = this.filter$.pipe(
    debounceTime(300),
    switchMap(filter => this.http.get(`/api/data?q=${filter}`))
  );
}
```

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
