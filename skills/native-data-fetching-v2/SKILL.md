---
name: native-data-fetching-v2
description: "Expo Networking workflow skill. Use this skill when the user needs implementing or debugging ANY network request, API call, or data fetching. Covers fetch API, React Query, SWR, error handling, caching, offline support, and Expo Router data loaders (useLoaderData) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["native-data-fetching-v2", "native-data-fetching", "implementing", "debugging", "any", "network", "request", "api"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Expo Networking

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/native-data-fetching` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Expo Networking You MUST use this skill for ANY networking work including API requests, data fetching, caching, or network debugging.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Common Issues & Solutions, Decision Tree.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Implementing API requests
- Setting up data fetching (React Query, SWR)
- Using Expo Router data loaders (useLoaderData, web SDK 55+)
- Debugging network failures
- Implementing caching strategies
- Handling offline scenarios

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Common Issues & Solutions

### 1. Basic Fetch Usage

**Simple GET request**:

```tsx
const fetchUser = async (userId: string) => {
  const response = await fetch(`https://api.example.com/users/${userId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
```

**POST request with body**:

```tsx
const createUser = async (userData: UserData) => {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};
```

---

### 2. React Query (TanStack Query)

**Setup**:

```tsx
// app/_layout.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
```

**Fetching data**:

```tsx
import { useQuery } from "@tanstack/react-query";

function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return <Profile user={data} />;
}
```

**Mutations**:

```tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

function CreateUserForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleSubmit = (data: UserData) => {
    mutation.mutate(data);
  };

  return <Form onSubmit={handleSubmit} isLoading={mutation.isPending} />;
}
```

---

### 3. Error Handling

**Comprehensive error handling**:

```tsx
class ApiError extends Error {
  constructor(message: string, public status: number, public code?: string) {
    super(message);
    this.name = "ApiError";
  }
}

const fetchWithErrorHandling = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new ApiError(
        error.message || "Request failed",
        response.status,
        error.code
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    // Network error (no internet, timeout, etc.)
    throw new ApiError("Network error", 0, "NETWORK_ERROR");
  }
};
```

**Retry logic**:

```tsx
const fetchWithRetry = async (
  url: string,
  options?: RequestInit,
  retries = 3
) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetchWithErrorHandling(url, options);
    } catch (error) {
      if (i === retries - 1) throw error;
      // Exponential backoff
      await new Promise((r) => setTimeout(r, Math.pow(2, i) * 1000));
    }
  }
};
```

---

### 4. Authentication

**Token management**:

```tsx
import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "auth_token";

export const auth = {
  getToken: () => SecureStore.getItemAsync(TOKEN_KEY),
  setToken: (token: string) => SecureStore.setItemAsync(TOKEN_KEY, token),
  removeToken: () => SecureStore.deleteItemAsync(TOKEN_KEY),
};

// Authenticated fetch wrapper
const authFetch = async (url: string, options: RequestInit = {}) => {
  const token = await auth.getToken();

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
```

**Token refresh**:

```tsx
let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;

const getValidToken = async (): Promise<string> => {
  const token = await auth.getToken();

  if (!token || isTokenExpired(token)) {
    if (!isRefreshing) {
      isRefreshing = true;
      refreshPromise = refreshToken().finally(() => {
        isRefreshing = false;
        refreshPromise = null;
      });
    }
    return refreshPromise!;
  }

  return token;
};
```

---

### 5. Offline Support

**Check network status**:

```tsx
import NetInfo from "@react-native-community/netinfo";

// Hook for network status
function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    return NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected ?? true);
    });
  }, []);

  return isOnline;
}
```

**Offline-first with React Query**:

```tsx
import { onlineManager } from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";

// Sync React Query with network status
onlineManager.setEventListener((setOnline) => {
  return NetInfo.addEventListener((state) => {
    setOnline(state.isConnected ?? true);
  });
});

// Queries will pause when offline and resume when online
```

---

### 6. Environment Variables

**Using environment variables for API configuration**:

Expo supports environment variables with the `EXPO_PUBLIC_` prefix. These are inlined at build time and available in your JavaScript code.

```tsx
// .env
EXPO_PUBLIC_API_URL=https://api.example.com
EXPO_PUBLIC_API_VERSION=v1

// Usage in code
const API_URL = process.env.EXPO_PUBLIC_API_URL;

const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};
```

**Environment-specific configuration**:

```tsx
// .env.development
EXPO_PUBLIC_API_URL=http://localhost:3000

// .env.production
EXPO_PUBLIC_API_URL=https://api.production.com
```

**Creating an API client with environment config**:

```tsx
// api/client.ts
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error("EXPO_PUBLIC_API_URL is not defined");
}

export const apiClient = {
  get: async <T,>(path: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  },

  post: async <T,>(path: string, body: unknown): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  },
};
```

**Important notes**:

- Only variables prefixed with `EXPO_PUBLIC_` are exposed to the client bundle
- Never put secrets (API keys with write access, database passwords) in `EXPO_PUBLIC_` variables—they're visible in the built app
- Environment variables are inlined at **build time**, not runtime
- Restart the dev server after changing `.env` files
- For server-side secrets in API routes, use variables without the `EXPO_PUBLIC_` prefix

**TypeScript support**:

```tsx
// types/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_URL: string;
      EXPO_PUBLIC_API_VERSION?: string;
    }
  }
}

export {};
```

---

### 7. Request Cancellation

**Cancel on unmount**:

```tsx
useEffect(() => {
  const controller = new AbortController();

  fetch(url, { signal: controller.signal })
    .then((response) => response.json())
    .then(setData)
    .catch((error) => {
      if (error.name !== "AbortError") {
        setError(error);
      }
    });

  return () => controller.abort();
}, [url]);
```

**With React Query** (automatic):

```tsx
// React Query automatically cancels requests when queries are invalidated
// or components unmount
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @native-data-fetching-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/native-data-fetching-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/native-data-fetching-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @native-data-fetching-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Invocations

User: "How do I make API calls in React Native?"
-> Use fetch, wrap with error handling

User: "Should I use React Query or SWR?"
-> React Query for complex apps, SWR for simpler needs

User: "My app needs to work offline"
-> Use NetInfo for status, React Query persistence for caching

User: "How do I handle authentication tokens?"
-> Store in expo-secure-store, implement refresh flow

User: "API calls are slow"
-> Check caching strategy, use React Query staleTime

User: "How do I configure different API URLs for dev and prod?"
-> Use EXPO*PUBLIC* env vars with .env.development and .env.production files

User: "Where should I put my API key?"
-> Client-safe keys: EXPO*PUBLIC* in .env. Secret keys: non-prefixed env vars in API routes only

User: "How do I load data for a page in Expo Router?"
-> See references/expo-router-loaders.md for route-level loaders (web, SDK 55+). For native, use React Query or fetch.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/native-data-fetching`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common Mistakes

**Wrong: No error handling**

```tsx
const data = await fetch(url).then((r) => r.json());
```

**Right: Check response status**

```tsx
const response = await fetch(url);
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const data = await response.json();
```

**Wrong: Storing tokens in AsyncStorage**

```tsx
await AsyncStorage.setItem("token", token); // Not secure!
```

**Right: Use SecureStore for sensitive data**

```tsx
await SecureStore.setItemAsync("token", token);
```

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: References

Consult these resources as needed:

```
references/
  expo-router-loaders.md   Route-level data loading with Expo Router loaders (web, SDK 55+)
```

#### Imported: Preferences

- Avoid axios, prefer expo/fetch

#### Imported: Decision Tree

```
User asks about networking
  |-- Route-level data loading (web, SDK 55+)?
  |   \-- Expo Router loaders — see references/expo-router-loaders.md
  |
  |-- Basic fetch?
  |   \-- Use fetch API with error handling
  |
  |-- Need caching/state management?
  |   |-- Complex app -> React Query (TanStack Query)
  |   \-- Simpler needs -> SWR or custom hooks
  |
  |-- Authentication?
  |   |-- Token storage -> expo-secure-store
  |   \-- Token refresh -> Implement refresh flow
  |
  |-- Error handling?
  |   |-- Network errors -> Check connectivity first
  |   |-- HTTP errors -> Parse response, throw typed errors
  |   \-- Retries -> Exponential backoff
  |
  |-- Offline support?
  |   |-- Check status -> NetInfo
  |   \-- Queue requests -> React Query persistence
  |
  |-- Environment/API config?
  |   |-- Client-side URLs -> EXPO_PUBLIC_ prefix in .env
  |   |-- Server secrets -> Non-prefixed env vars (API routes only)
  |   \-- Multiple environments -> .env.development, .env.production
  |
  \-- Performance?
      |-- Caching -> React Query with staleTime
      |-- Deduplication -> React Query handles this
      \-- Cancellation -> AbortController or React Query
```
