---
name: "angular-ui-patterns-v2"
description: "Angular UI Patterns workflow skill. Use this skill when the user needs Modern Angular UI patterns for loading states, error handling, and data display. Use when building UI components, handling async data, or managing component states and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "angular-ui-patterns-v2"
  - "angular-ui-patterns"
  - "modern"
  - "angular"
  - "patterns"
  - "for"
  - "loading"
  - "states"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-21"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "angular-ui-patterns-v2"
family_name: "Angular UI Patterns"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/angular-ui-patterns-v2"
upstream_skill: "skills/angular-ui-patterns-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "91"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "angular-ui-patterns-v2"
---

# Angular UI Patterns

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/angular-ui-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Angular UI Patterns

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Loading State Patterns, Control Flow Patterns, Error Handling Patterns, Button State Patterns, Empty States, Form Patterns.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Modern Angular UI patterns for loading states, error handling, and data display. Use when building UI components, handling async data, or managing component states.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Loading State Patterns

### The Golden Rule

**Show loading indicator ONLY when there's no data to display.**

```typescript
@Component({
  template: `
    @if (error()) {
      <app-error-state [error]="error()" (retry)="load()" />
    } @else if (loading() && !items().length) {
      <app-skeleton-list />
    } @else if (!items().length) {
      <app-empty-state message="No items found" />
    } @else {
      <app-item-list [items]="items()" />
    }
  `,
})
export class ItemListComponent {
  private store = inject(ItemStore);

  items = this.store.items;
  loading = this.store.loading;
  error = this.store.error;
}
```

### Loading State Decision Tree

```
Is there an error?
  → Yes: Show error state with retry option
  → No: Continue

Is it loading AND we have no data?
  → Yes: Show loading indicator (spinner/skeleton)
  → No: Continue

Do we have data?
  → Yes, with items: Show the data
  → Yes, but empty: Show empty state
  → No: Show loading (fallback)
```

### Skeleton vs Spinner

| Use Skeleton When    | Use Spinner When      |
| -------------------- | --------------------- |
| Known content shape  | Unknown content shape |
| List/card layouts    | Modal actions         |
| Initial page load    | Button submissions    |
| Content placeholders | Inline operations     |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @angular-ui-patterns-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @angular-ui-patterns-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @angular-ui-patterns-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @angular-ui-patterns-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Never show stale UI - Loading states only when actually loading
- Always surface errors - Users must know when something fails
- Optimistic updates - Make the UI feel instant
- Progressive disclosure - Use @defer to show content as available
- Graceful degradation - Partial data is better than no data
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Core Principles

1. **Never show stale UI** - Loading states only when actually loading
2. **Always surface errors** - Users must know when something fails
3. **Optimistic updates** - Make the UI feel instant
4. **Progressive disclosure** - Use `@defer` to show content as available
5. **Graceful degradation** - Partial data is better than no data

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/angular-ui-patterns`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Control Flow Patterns

### @if/@else for Conditional Rendering

```html
@if (user(); as user) {
<span>Welcome, {{ user.name }}</span>
} @else if (loading()) {
<app-spinner size="small" />
} @else {
<a routerLink="/login">Sign In</a>
}
```

### @for with Track

```html
@for (item of items(); track item.id) {
<app-item-card [item]="item" (delete)="remove(item.id)" />
} @empty {
<app-empty-state
  icon="inbox"
  message="No items yet"
  actionLabel="Create Item"
  (action)="create()"
/>
}
```

### @defer for Progressive Loading

```html
<!-- Critical content loads immediately -->
<app-header />
<app-hero-section />

<!-- Non-critical content deferred -->
@defer (on viewport) {
<app-comments [postId]="postId()" />
} @placeholder {
<div class="h-32 bg-gray-100 animate-pulse"></div>
} @loading (minimum 200ms) {
<app-spinner />
} @error {
<app-error-state message="Failed to load comments" />
}
```

---

#### Imported: Error Handling Patterns

### Error Handling Hierarchy

```
1. Inline error (field-level) → Form validation errors
2. Toast notification → Recoverable errors, user can retry
3. Error banner → Page-level errors, data still partially usable
4. Full error screen → Unrecoverable, needs user action
```

### Always Show Errors

**CRITICAL: Never swallow errors silently.**

```typescript
// CORRECT - Error always surfaced to user
@Component({...})
export class CreateItemComponent {
  private store = inject(ItemStore);
  private toast = inject(ToastService);

  async create(data: CreateItemDto) {
    try {
      await this.store.create(data);
      this.toast.success('Item created successfully');
      this.router.navigate(['/items']);
    } catch (error) {
      console.error('createItem failed:', error);
      this.toast.error('Failed to create item. Please try again.');
    }
  }
}

// WRONG - Error silently caught
async create(data: CreateItemDto) {
  try {
    await this.store.create(data);
  } catch (error) {
    console.error(error); // User sees nothing!
  }
}
```

### Error State Component Pattern

```typescript
@Component({
  selector: "app-error-state",
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="error-state">
      <img ngSrc="/assets/error-icon.svg" width="64" height="64" alt="" />
      <h3>{{ title() }}</h3>
      <p>{{ message() }}</p>
      @if (retry.observed) {
        <button (click)="retry.emit()" class="btn-primary">Try Again</button>
      }
    </div>
  `,
})
export class ErrorStateComponent {
  title = input("Something went wrong");
  message = input("An unexpected error occurred");
  retry = output<void>();
}
```

---

#### Imported: Button State Patterns

### Button Loading State

```html
<button
  (click)="handleSubmit()"
  [disabled]="isSubmitting() || !form.valid"
  class="btn-primary"
>
  @if (isSubmitting()) {
  <app-spinner size="small" class="mr-2" />
  Saving... } @else { Save Changes }
</button>
```

### Disable During Operations

**CRITICAL: Always disable triggers during async operations.**

```typescript
// CORRECT - Button disabled while loading
@Component({
  template: `
    <button
      [disabled]="saving()"
      (click)="save()"
    >
      @if (saving()) {
        <app-spinner size="sm" /> Saving...
      } @else {
        Save
      }
    </button>
  `
})
export class SaveButtonComponent {
  saving = signal(false);

  async save() {
    this.saving.set(true);
    try {
      await this.service.save();
    } finally {
      this.saving.set(false);
    }
  }
}

// WRONG - User can click multiple times
<button (click)="save()">
  {{ saving() ? 'Saving...' : 'Save' }}
</button>
```

---

#### Imported: Empty States

### Empty State Requirements

Every list/collection MUST have an empty state:

```html
@for (item of items(); track item.id) {
<app-item-card [item]="item" />
} @empty {
<app-empty-state
  icon="folder-open"
  title="No items yet"
  description="Create your first item to get started"
  actionLabel="Create Item"
  (action)="openCreateDialog()"
/>
}
```

### Contextual Empty States

```typescript
@Component({
  selector: "app-empty-state",
  template: `
    <div class="empty-state">
      <span class="icon" [class]="icon()"></span>
      <h3>{{ title() }}</h3>
      <p>{{ description() }}</p>
      @if (actionLabel()) {
        <button (click)="action.emit()" class="btn-primary">
          {{ actionLabel() }}
        </button>
      }
    </div>
  `,
})
export class EmptyStateComponent {
  icon = input("inbox");
  title = input.required<string>();
  description = input("");
  actionLabel = input<string | null>(null);
  action = output<void>();
}
```

---

#### Imported: Form Patterns

### Form with Loading and Validation

```typescript
@Component({
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="form-field">
        <label for="name">Name</label>
        <input
          id="name"
          formControlName="name"
          [class.error]="isFieldInvalid('name')"
        />
        @if (isFieldInvalid("name")) {
          <span class="error-text">
            {{ getFieldError("name") }}
          </span>
        }
      </div>

      <div class="form-field">
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
        @if (isFieldInvalid("email")) {
          <span class="error-text">
            {{ getFieldError("email") }}
          </span>
        }
      </div>

      <button type="submit" [disabled]="form.invalid || submitting()">
        @if (submitting()) {
          <app-spinner size="sm" /> Submitting...
        } @else {
          Submit
        }
      </button>
    </form>
  `,
})
export class UserFormComponent {
  private fb = inject(FormBuilder);

  submitting = signal(false);

  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
  });

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return control ? control.invalid && control.touched : false;
  }

  getFieldError(field: string): string {
    const control = this.form.get(field);
    if (control?.hasError("required")) return "This field is required";
    if (control?.hasError("email")) return "Invalid email format";
    if (control?.hasError("minlength")) return "Too short";
    return "";
  }

  async onSubmit() {
    if (this.form.invalid) return;

    this.submitting.set(true);
    try {
      await this.service.submit(this.form.value);
      this.toast.success("Submitted successfully");
    } catch {
      this.toast.error("Submission failed");
    } finally {
      this.submitting.set(false);
    }
  }
}
```

---

#### Imported: Dialog/Modal Patterns

### Confirmation Dialog

```typescript
// dialog.service.ts
@Injectable({ providedIn: 'root' })
export class DialogService {
  private dialog = inject(Dialog); // CDK Dialog or custom

  async confirm(options: {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
  }): Promise<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: options,
    });

    return await firstValueFrom(dialogRef.closed) ?? false;
  }
}

// Usage
async deleteItem(item: Item) {
  const confirmed = await this.dialog.confirm({
    title: 'Delete Item',
    message: `Are you sure you want to delete "${item.name}"?`,
    confirmText: 'Delete',
  });

  if (confirmed) {
    await this.store.delete(item.id);
  }
}
```

---

#### Imported: Anti-Patterns

### Loading States

```typescript
// WRONG - Spinner when data exists (causes flash on refetch)
@if (loading()) {
  <app-spinner />
}

// CORRECT - Only show loading without data
@if (loading() && !items().length) {
  <app-spinner />
}
```

### Error Handling

```typescript
// WRONG - Error swallowed
try {
  await this.service.save();
} catch (e) {
  console.log(e); // User has no idea!
}

// CORRECT - Error surfaced
try {
  await this.service.save();
} catch (e) {
  console.error("Save failed:", e);
  this.toast.error("Failed to save. Please try again.");
}
```

### Button States

```html
<!-- WRONG - Button not disabled during submission -->
<button (click)="submit()">Submit</button>

<!-- CORRECT - Disabled and shows loading -->
<button (click)="submit()" [disabled]="loading()">
  @if (loading()) {
  <app-spinner size="sm" />
  } Submit
</button>
```

---

#### Imported: UI State Checklist

Before completing any UI component:

### UI States

- [ ] Error state handled and shown to user
- [ ] Loading state shown only when no data exists
- [ ] Empty state provided for collections (`@empty` block)
- [ ] Buttons disabled during async operations
- [ ] Buttons show loading indicator when appropriate

### Data & Mutations

- [ ] All async operations have error handling
- [ ] All user actions have feedback (toast/visual)
- [ ] Optimistic updates rollback on failure

### Accessibility

- [ ] Loading states announced to screen readers
- [ ] Error messages linked to form fields
- [ ] Focus management after state changes

---

#### Imported: Integration with Other Skills

- **angular-state-management**: Use Signal stores for state
- **angular**: Apply modern patterns (Signals, @defer)
- **testing-patterns**: Test all UI states

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
