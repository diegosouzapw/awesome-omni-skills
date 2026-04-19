---
name: zod-validation-expert
description: "Zod Validation Expert workflow skill. Use this skill when the user needs Expert in Zod \u2014 TypeScript-first schema validation. Covers parsing, custom errors, refinements, type inference, and integration with React Hook Form, Next.js, and tRPC and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["zod-validation-expert", "expert", "zod", "typescript-first", "schema", "validation", "covers", "parsing"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Zod Validation Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/zod-validation-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Zod Validation Expert You are a production-grade Zod expert. You help developers build type-safe schema definitions and validation logic. You master Zod fundamentals (primitives, objects, arrays, records), type inference (z.infer), complex validations (.refine, .superRefine), transformations (.transform), and integrations across the modern TypeScript ecosystem (React Hook Form, Next.js API Routes / App Router Actions, tRPC, and environment variables).

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Schema Definition & Inference, Parsing & Validation, Customizing Validation, Integration Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when defining TypeScript validation schemas for API inputs or forms
- Use when setting up environment variable validation (process.env)
- Use when integrating Zod with React Hook Form (@hookform/resolvers/zod)
- Use when extracting or inferring TypeScript types from runtime validation schemas
- Use when writing complex validation rules (e.g., cross-field validation, async validation)
- Use when transforming input data (e.g., string to Date, string to number coercion)

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Core Concepts

### Why Zod?

Zod eliminates the duplication of writing a TypeScript interface *and* a runtime validation schema. You define the schema once, and Zod infers the static TypeScript type. Note that Zod is for **parsing, not just validation**. `safeParse` and `parse` return clean, typed data, stripping out unknown keys by default.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @zod-validation-expert to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @zod-validation-expert against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @zod-validation-expert for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @zod-validation-expert using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Co-locate schemas alongside the components or API routes that use them to maintain separation of concerns.
- ✅ Do: Use z.infer<typeof Schema> everywhere instead of maintaining duplicate TypeScript interfaces manually.
- ✅ Do: Prefer safeParse over parse to avoid scattered try/catch blocks and leverage TypeScript's control flow narrowing for robust error handling.
- ✅ Do: Use z.coerce when accepting data from URLSearchParams or FormData, and be aware that z.coerce.boolean() converts standard "false"/"off" strings unexpectedly without custom preprocessing.
- ✅ Do: Use .flatten() or .format() on ZodError objects to easily extract serializable, human-readable errors for frontend consumption.
- ❌ Don't: Rely exclusively on .partial() for update schemas if field types or constraints differ between creation and update operations; define distinct schemas instead.
- ❌ Don't: Forget to pass the path option in .refine() or .superRefine() when performing object-level cross-field validations, otherwise the error won't attach to the correct input field.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Co-locate schemas alongside the components or API routes that use them to maintain separation of concerns.
- ✅ **Do:** Use `z.infer<typeof Schema>` everywhere instead of maintaining duplicate TypeScript interfaces manually.
- ✅ **Do:** Prefer `safeParse` over `parse` to avoid scattered `try/catch` blocks and leverage TypeScript's control flow narrowing for robust error handling.
- ✅ **Do:** Use `z.coerce` when accepting data from `URLSearchParams` or `FormData`, and be aware that `z.coerce.boolean()` converts standard `"false"`/`"off"` strings unexpectedly without custom preprocessing.
- ✅ **Do:** Use `.flatten()` or `.format()` on `ZodError` objects to easily extract serializable, human-readable errors for frontend consumption.
- ❌ **Don't:** Rely exclusively on `.partial()` for update schemas if field types or constraints differ between creation and update operations; define distinct schemas instead.
- ❌ **Don't:** Forget to pass the `path` option in `.refine()` or `.superRefine()` when performing object-level cross-field validations, otherwise the error won't attach to the correct input field.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/zod-validation-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** `Type instantiation is excessively deep and possibly infinite.`
**Solution:** This occurs with extreme schema recursion (e.g. deeply nested self-referential schemas). Use `z.lazy(() => NodeSchema)` for recursive structures and define the base TypeScript type explicitly instead of solely inferring it.

**Problem:** Empty strings pass validation when using `.optional()`.
**Solution:** `.optional()` permits `undefined`, not empty strings. If an empty string means "no value," use `.or(z.literal(""))` or preprocess it: `z.string().transform(v => v === "" ? undefined : v).optional()`.

## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Schema Definition & Inference

### Primitives & Coercion

```typescript
import { z } from "zod";

// Basic primitives
const stringSchema = z.string().min(3).max(255);
const numberSchema = z.number().int().positive();
const dateSchema = z.date();

// Coercion (automatically casting inputs before validation)
// Highly useful for FormData in Next.js Server Actions or URL queries
const ageSchema = z.coerce.number().min(18); // "18" -> 18
const activeSchema = z.coerce.boolean(); // "true" -> true
const dobSchema = z.coerce.date(); // "2020-01-01" -> Date object
```

### Objects & Type Inference

```typescript
const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(3).max(20),
  email: z.string().email(),
  role: z.enum(["ADMIN", "USER", "GUEST"]).default("USER"),
  age: z.number().min(18).optional(), // Can be omitted
  website: z.string().url().nullable(), // Can be null
  tags: z.array(z.string()).min(1), // Array with at least 1 item
});

// Infer the TypeScript type directly from the schema
// No need to write a separate `interface User { ... }`
export type User = z.infer<typeof UserSchema>;
```

### Advanced Types

```typescript
// Records (Objects with dynamic keys but specific value types)
const envSchema = z.record(z.string(), z.string()); // Record<string, string>

// Unions (OR)
const idSchema = z.union([z.string(), z.number()]); // string | number
// Or simpler:
const idSchema2 = z.string().or(z.number());

// Discriminated Unions (Type-safe switch cases)
const ActionSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("create"), id: z.string() }),
  z.object({ type: z.literal("update"), id: z.string(), data: z.any() }),
  z.object({ type: z.literal("delete"), id: z.string() }),
]);
```

#### Imported: Parsing & Validation

### parse vs safeParse

```typescript
const schema = z.string().email();

// ❌ parse: Throws a ZodError if validation fails
try {
  const email = schema.parse("invalid-email");
} catch (err) {
  if (err instanceof z.ZodError) {
    console.error(err.issues);
  }
}

// ✅ safeParse: Returns a result object (No try/catch needed)
const result = schema.safeParse("user@example.com");

if (!result.success) {
  // TypeScript narrows result to SafeParseError
  console.log(result.error.format()); 
  // Early return or throw domain error
} else {
  // TypeScript narrows result to SafeParseSuccess
  const validEmail = result.data; // Type is `string`
}
```

#### Imported: Customizing Validation

### Custom Error Messages

```typescript
const passwordSchema = z.string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(100, { message: "Password is too long" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" });

// Global custom error map (useful for i18n)
z.setErrorMap((issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === "string") return { message: "This field must be text" };
  }
  return { message: ctx.defaultError };
});
```

### Refinements (Custom Logic)

```typescript
// Basic refinement
const passwordCheck = z.string().refine((val) => val !== "password123", {
  message: "Password is too weak",
});

// Cross-field validation (e.g., password matching)
const formSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // Sets the error on the specific field
});
```

### Transformations

```typescript
// Change data during parsing
const stringToNumber = z.string()
  .transform((val) => parseInt(val, 10))
  .refine((val) => !isNaN(val), { message: "Not a valid integer" });

// Now the inferred type is `number`, not `string`!
type TransformedResult = z.infer<typeof stringToNumber>; // number
```

#### Imported: Integration Patterns

### React Hook Form

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be 6+ characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: LoginFormValues) => {
    // data is fully typed and validated
    console.log(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      {/* ... */}
    </form>
  );
}
```

### Next.js Server Actions

```typescript
"use server";
import { z } from "zod";

// Coercion is critical here because FormData values are always strings
const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().optional(),
  published: z.coerce.boolean().default(false), // checkbox -> "on" -> true
});

export async function createPost(prevState: any, formData: FormData) {
  // Convert FormData to standard object using Object.fromEntries
  const rawData = Object.fromEntries(formData.entries());
  
  const validatedFields = createPostSchema.safeParse(rawData);
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // Proceed with validated database operation
  const { title, content, published } = validatedFields.data;
  // ...
  return { success: true };
}
```

### Environment Variables

```typescript
// Make environment variables strictly typed and fail-fast
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(3000),
  API_KEY: z.string().min(10),
});

// Fails the build immediately if env vars are missing or invalid
const env = envSchema.parse(process.env);

export default env;
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
