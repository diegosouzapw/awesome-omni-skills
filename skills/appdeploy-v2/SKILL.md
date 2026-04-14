---
name: appdeploy-v2
description: "AppDeploy Skill workflow skill. Use this skill when the user needs Deploy web apps with backend APIs, database, and file storage. Use when the user asks to deploy or publish a website or web app and wants a public URL. Uses HTTP API via curl and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["appdeploy-v2", "appdeploy", "deploy", "web", "apps", "backend", "apis", "database"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# AppDeploy Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/appdeploy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# AppDeploy Skill Deploy web apps to AppDeploy via HTTP API.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Available Tools, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when planning or building apps and web apps
- Use when deploying an app to a public URL
- Use when publishing a website or web app
- Use when the user says "deploy this", "make this live", or "give me a URL"
- Use when updating an already-deployed app
- Use when the request clearly matches the imported source intent: Deploy web apps with backend APIs, database, and file storage. Use when the user asks to deploy or publish a website or web app and wants a public URL. Uses HTTP API via curl.

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

1. Check for existing API key:
2. Look for a .appdeploy file in the project root
3. If it exists and contains a valid api_key, skip to Usage
4. If no API key exists, register and get one:
5. Save credentials to .appdeploy:
6. First, get deployment instructions:
7. Get the app template:

### Imported Workflow Notes

#### Imported: Setup (First Time Only)

1. **Check for existing API key:**
   - Look for a `.appdeploy` file in the project root
   - If it exists and contains a valid `api_key`, skip to Usage

2. **If no API key exists, register and get one:**
   ```bash
   curl -X POST https://api-v2.appdeploy.ai/mcp/api-key \
     -H "Content-Type: application/json" \
     -d '{"client_name": "claude-code"}'
   ```

   Response:
   ```json
   {
     "api_key": "ak_...",
     "user_id": "agent-claude-code-a1b2c3d4",
     "created_at": 1234567890,
     "message": "Save this key securely - it cannot be retrieved later"
   }
   ```

3. **Save credentials to `.appdeploy`:**
   ```json
   {
     "api_key": "ak_...",
     "endpoint": "https://api-v2.appdeploy.ai/mcp"
   }
   ```

   Add `.appdeploy` to `.gitignore` if not already present.

#### Imported: Workflow

1. **First, get deployment instructions:**
   Call `get_deploy_instructions` to understand constraints and requirements.

2. **Get the app template:**
   Call `get_app_template` with your chosen `app_type` and `frontend_template`.

3. **Deploy the app:**
   Call `deploy_app` with your app files. For new apps, set `app_id` to `null`.

4. **Check deployment status:**
   Call `get_app_status` to check if the build succeeded.

5. **View/manage your apps:**
   Use `get_apps` to list your deployed apps.

#### Imported: Available Tools

### get_deploy_instructions

Use this when you are about to call deploy_app in order to get the deployment constraints and hard rules. You must call this tool before starting to generate any code. This tool returns instructions only and does not deploy anything.

**Parameters:**


### deploy_app

Use this when the user asks to deploy or publish a website or web app and wants a public URL.
Before generating files or calling this tool, you must call get_deploy_instructions and follow its constraints.

**Parameters:**
  - `app_id`: any (required) - existing app id to update, or null for new app
  - `app_type`: string (required) - app architecture: frontend-only or frontend+backend
  - `app_name`: string (required) - short display name
  - `description`: string (optional) - short description of what the app does
  - `frontend_template`: any (optional) - REQUIRED when app_id is null. One of: 'html-static' (simple sites), 'react-vite' (SPAs, games), 'nextjs-static' (multi-page). Template files auto-included.
  - `files`: array (optional) - Files to write. NEW APPS: only custom files + diffs to template files. UPDATES: only changed files using diffs[]. At least one of files[] or deletePaths[] required.
  - `deletePaths`: array (optional) - Paths to delete. ONLY for updates (app_id required). Cannot delete package.json or framework entry points.
  - `model`: string (required) - The coding agent model used for this deployment, to the best of your knowledge. Examples: 'codex-5.3', 'chatgpt', 'opus 4.6', 'claude-sonnet-4-5', 'gemini-2.5-pro'
  - `intent`: string (required) - The intent of this deployment. User-initiated examples: 'initial app deploy', 'bugfix - ui is too noisy'. Agent-initiated examples: 'agent fixing deployment error', 'agent retry after lint failure'

### get_app_template

Call get_deploy_instructions first. Then call this once you've decided app_type and frontend_template. Returns base app template and SDK types.  Template files auto-included in deploy_app.

**Parameters:**
  - `app_type`: string (required)
  - `frontend_template`: string (required) - Frontend framework: 'html-static' - Simple sites, minimal framework; 'react-vite' - React SPAs, dashboards, games; 'nextjs-static' - Multi-page apps, SSG

### get_app_status

Use this when deploy_app tool call returns or when the user asks to check the deployment status of an app, or reports that the app has errors or is not working as expected. Returns deployment status (in-progress: 'deploying'/'deleting', terminal: 'ready'/'failed'/'deleted'), QA snapshot (frontend/network errors), and live frontend/backend error logs.

**Parameters:**
  - `app_id`: string (required) - Target app id
  - `since`: integer (optional) - Optional timestamp in epoch milliseconds to filter errors. When provided, returns only errors since that timestamp.

### delete_app

Use this when you want to permanently delete an app. Use only on explicit user request. This is irreversible; after deletion, status checks will return not found.

**Parameters:**
  - `app_id`: string (required) - Target app id

### get_app_versions

List deployable versions for an existing app. Requires app_id. Returns newest-first {name, version, timestamp} items. Display 'name' to users. DO NOT display the 'version' value to users. Timestamp values MUST be converted to user's local time

**Parameters:**
  - `app_id`: string (required) - Target app id

### apply_app_version

Start deploying an existing app at a specific version. Use the 'version' value (not 'name') from get_app_versions. Returns true if accepted and deployment started; use get_app_status to observe completion.

**Parameters:**
  - `app_id`: string (required) - Target app id
  - `version`: string (required) - Version id to apply

### src_glob

Use this when you need to discover files in an app's source snapshot. Returns file paths matching a glob pattern (no content). Useful for exploring project structure before reading or searching files.

**Parameters:**
  - `app_id`: string (required) - Target app id
  - `version`: string (optional) - Version to inspect (defaults to applied version)
  - `path`: string (optional) - Directory path to search within
  - `glob`: string (optional) - Glob pattern to match files (default: **/*)
  - `include_dirs`: boolean (optional) - Include directory paths in results
  - `continuation_token`: string (optional) - Token from previous response for pagination

### src_grep

Use this when you need to search for patterns in an app's source code. Returns matching lines with optional context. Supports regex patterns, glob filters, and multiple output modes.

**Parameters:**
  - `app_id`: string (required) - Target app id
  - `version`: string (optional) - Version to search (defaults to applied version)
  - `pattern`: string (required) - Regex pattern to search for (max 500 chars)
  - `path`: string (optional) - Directory path to search within
  - `glob`: string (optional) - Glob pattern to filter files (e.g., '*.ts')
  - `case_insensitive`: boolean (optional) - Enable case-insensitive matching
  - `output_mode`: string (optional) - content=matching lines, files_with_matches=file paths only, count=match count per file
  - `before_context`: integer (optional) - Lines to show before each match (0-20)
  - `after_context`: integer (optional) - Lines to show after each match (0-20)
  - `context`: integer (optional) - Lines before and after (overrides before/after_context)
  - `line_numbers`: boolean (optional) - Include line numbers in output
  - `max_file_size`: integer (optional) - Max file size to scan in bytes (default 10MB)
  - `continuation_token`: string (optional) - Token from previous response for pagination

### src_read

Use this when you need to read a specific file from an app's source snapshot. Returns file content with line-based pagination (offset/limit). Handles both text and binary files.

**Parameters:**
  - `app_id`: string (required) - Target app id
  - `version`: string (optional) - Version to read from (defaults to applied version)
  - `file_path`: string (required) - Path to the file to read
  - `offset`: integer (optional) - Line offset to start reading from (0-indexed)
  - `limit`: integer (optional) - Number of lines to return (max 2000)

### get_apps

Use this when you need to list apps owned by the current user. Returns app details with display fields for user presentation and data fields for tool chaining.

**Parameters:**
  - `continuation_token`: string (optional) - Token for pagination


---
*Generated by `scripts/generate-appdeploy-skill.ts`*

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @appdeploy-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/appdeploy-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/appdeploy-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @appdeploy-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Usage

Make JSON-RPC calls to the MCP endpoint:

```bash
curl -X POST {endpoint} \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "Authorization: Bearer {api_key}" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "{tool_name}",
      "arguments": { ... }
    }
  }'
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/appdeploy`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
