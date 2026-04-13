---
name: apify-actorization-v2
description: "Apify Actorization workflow skill. Use this skill when the user needs Actorization converts existing software into reusable serverless applications compatible with the Apify platform. Actors are programs packaged as Docker images that accept well-defined JSON input, perform an action, and optionally produce structured JSON output and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["apify-actorization-v2", "apify-actorization", "actorization", "converts", "existing", "software", "reusable", "serverless"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Apify Actorization

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/apify-actorization` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Apify Actorization Actorization converts existing software into reusable serverless applications compatible with the Apify platform. Actors are programs packaged as Docker images that accept well-defined JSON input, perform an action, and optionally produce structured JSON output.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Actorization Checklist, Monetization (Optional), Pre-Deployment Checklist, Apify MCP Tools, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Converting an existing project to run on Apify platform
- Adding Apify SDK integration to a project
- Wrapping a CLI tool or script as an Actor
- Migrating a Crawlee project to Apify
- Use when the request clearly matches the imported source intent: Actorization converts existing software into reusable serverless applications compatible with the Apify platform. Actors are programs packaged as Docker images that accept well-defined JSON input, perform an action,....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Identify the language - JavaScript/TypeScript, Python, or other
2. Find the entry point - The main file that starts execution
3. Identify inputs - Command-line arguments, environment variables, config files
4. Identify outputs - Files, console output, API responses
5. Check for state - Does it need to persist data between runs?
6. .actor/actor.json - Actor configuration and metadata
7. .actor/input_schema.json - Input definition for the Apify Console

### Imported Workflow Notes

#### Imported: Step 1: Analyze the Project

Before making changes, understand the project:

1. **Identify the language** - JavaScript/TypeScript, Python, or other
2. **Find the entry point** - The main file that starts execution
3. **Identify inputs** - Command-line arguments, environment variables, config files
4. **Identify outputs** - Files, console output, API responses
5. **Check for state** - Does it need to persist data between runs?

#### Imported: Step 2: Initialize Actor Structure

Run in the project root:

```bash
apify init
```

This creates:
- `.actor/actor.json` - Actor configuration and metadata
- `.actor/input_schema.json` - Input definition for the Apify Console
- `Dockerfile` (if not present) - Container image definition

#### Imported: Step 3: Apply Language-Specific Changes

Choose based on your project's language:

- **JavaScript/TypeScript**: See [js-ts-actorization.md](references/js-ts-actorization.md)
- **Python**: See [python-actorization.md](references/python-actorization.md)
- **Other Languages (CLI-based)**: See [cli-actorization.md](references/cli-actorization.md)

### Quick Reference

| Language | Install | Wrap Code |
|----------|---------|-----------|
| JS/TS | `npm install apify` | `await Actor.init()` ... `await Actor.exit()` |
| Python | `pip install apify` | `async with Actor:` |
| Other | Use CLI in wrapper script | `apify actor:get-input` / `apify actor:push-data` |

#### Imported: Steps 4-6: Configure Schemas

See [schemas-and-output.md](references/schemas-and-output.md) for detailed configuration of:
- Input schema (`.actor/input_schema.json`)
- Output schema (`.actor/output_schema.json`)
- Actor configuration (`.actor/actor.json`)
- State management (request queues, key-value stores)

Validate schemas against `@apify/json_schemas` npm package.

#### Imported: Step 7: Test Locally

Run the actor with inline input (for JS/TS and Python actors):

```bash
apify run --input '{"startUrl": "https://example.com", "maxItems": 10}'
```

Or use an input file:

```bash
apify run --input-file ./test-input.json
```

**Important:** Always use `apify run`, not `npm start` or `python main.py`. The CLI sets up the proper environment and storage.

#### Imported: Step 8: Deploy

```bash
apify push
```

This uploads and builds your actor on the Apify platform.

#### Imported: Prerequisites

Verify `apify` CLI is installed:

```bash
apify --help
```

If not installed:

```bash
brew install apify-cli

# Or: npm install -g apify-cli
# Or install from an official release package that your OS package manager verifies
```

Verify CLI is logged in:

```bash
apify info  # Should return your username
```

If not logged in, check if `APIFY_TOKEN` environment variable is defined. If not, ask the user to generate one at https://console.apify.com/settings/integrations, add it to their shell or secret manager without putting the literal token in command history, then run:

```bash
apify login
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @apify-actorization-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/apify-actorization-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/apify-actorization-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @apify-actorization-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

1. Run `apify init` in project root
2. Wrap code with SDK lifecycle (see language-specific section below)
3. Configure `.actor/input_schema.json`
4. Test with `apify run --input '{"key": "value"}'`
5. Deploy with `apify push`

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/apify-actorization`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/cli-actorization.md` |
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

#### Imported: Resources

- [Actorization Academy](https://docs.apify.com/academy/actorization) - Comprehensive guide
- [Apify SDK for JavaScript](https://docs.apify.com/sdk/js) - Full SDK reference
- [Apify SDK for Python](https://docs.apify.com/sdk/python) - Full SDK reference
- [Apify CLI Reference](https://docs.apify.com/cli) - CLI commands
- [Actor Specification](https://raw.githubusercontent.com/apify/actor-whitepaper/refs/heads/master/README.md) - Complete specification

#### Imported: Actorization Checklist

Copy this checklist to track progress:

- [ ] Step 1: Analyze project (language, entry point, inputs, outputs)
- [ ] Step 2: Run `apify init` to create Actor structure
- [ ] Step 3: Apply language-specific SDK integration
- [ ] Step 4: Configure `.actor/input_schema.json`
- [ ] Step 5: Configure `.actor/output_schema.json` (if applicable)
- [ ] Step 6: Update `.actor/actor.json` metadata
- [ ] Step 7: Test locally with `apify run`
- [ ] Step 8: Deploy with `apify push`

#### Imported: Monetization (Optional)

After deploying, you can monetize your actor in the Apify Store. The recommended model is **Pay Per Event (PPE)**:

- Per result/item scraped
- Per page processed
- Per API call made

Configure PPE in the Apify Console under Actor > Monetization. Charge for events in your code with `await Actor.charge('result')`.

Other options: **Rental** (monthly subscription) or **Free** (open source).

#### Imported: Pre-Deployment Checklist

- [ ] `.actor/actor.json` exists with correct name and description
- [ ] `.actor/actor.json` validates against `@apify/json_schemas` (`actor.schema.json`)
- [ ] `.actor/input_schema.json` defines all required inputs
- [ ] `.actor/input_schema.json` validates against `@apify/json_schemas` (`input.schema.json`)
- [ ] `.actor/output_schema.json` defines output structure (if applicable)
- [ ] `.actor/output_schema.json` validates against `@apify/json_schemas` (`output.schema.json`)
- [ ] `Dockerfile` is present and builds successfully
- [ ] `Actor.init()` / `Actor.exit()` wraps main code (JS/TS)
- [ ] `async with Actor:` wraps main code (Python)
- [ ] Inputs are read via `Actor.getInput()` / `Actor.get_input()`
- [ ] Outputs use `Actor.pushData()` or key-value store
- [ ] `apify run` executes successfully with test input
- [ ] `generatedBy` is set in actor.json meta section

#### Imported: Apify MCP Tools

If MCP server is configured, use these tools for documentation:

- `search-apify-docs` - Search documentation
- `fetch-apify-docs` - Get full doc pages

Otherwise, the MCP Server url: `https://mcp.apify.com/?tools=docs`.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
