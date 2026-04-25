---
name: jobgpt-v2
description: "JobGPT - Job Search Automation workflow skill. Use this skill when the user needs Job search automation, auto apply, resume generation, application tracking, salary intelligence, and recruiter outreach using the JobGPT MCP server and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["jobgpt-v2", "jobgpt", "job", "search", "automation", "auto", "apply", "resume"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-17"
date_updated: "2026-04-25"
---

# JobGPT - Job Search Automation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/jobgpt` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# JobGPT - Job Search Automation

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You want to search for jobs with filters like titles, locations, salary, remote, and H1B sponsorship
- You want to auto-apply to jobs automatically
- You want to generate a tailored resume for a specific job application
- You want to track your job applications across multiple job hunts
- You want to find recruiters or referrers at target companies and send outreach emails
- You want to import a job from LinkedIn, Greenhouse, Lever, Workday, or any job board URL

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

1. Create an account - Sign up at 6figr.com/jobgpt-ai
2. Get an API key - Go to 6figr.com/account, scroll to MCP Integrations, and click Generate API Key. The key starts with mcp_.
3. Add the MCP server:
4. Claude Code: claude mcp add jobgpt -t http -u https://mcp.6figr.com/mcp --header "Authorization: <api-key>"
5. Other tools: Add jobgpt-mcp-server as an MCP server with env var JOBGPTAPIKEY set. Install via npx jobgpt-mcp-server.
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Setup

This skill requires the JobGPT MCP server:

1. **Create an account** - Sign up at [6figr.com/jobgpt-ai](https://6figr.com/jobgpt-ai)
2. **Get an API key** - Go to [6figr.com/account](https://6figr.com/account), scroll to MCP Integrations, and click Generate API Key. The key starts with `mcp_`.
3. **Add the MCP server:**
   - Claude Code: `claude mcp add jobgpt -t http -u https://mcp.6figr.com/mcp --header "Authorization: <api-key>"`
   - Other tools: Add `jobgpt-mcp-server` as an MCP server with env var `JOBGPT_API_KEY` set. Install via `npx jobgpt-mcp-server`.

Set the `JOBGPT_API_KEY` environment variable when you are running the local `npx jobgpt-mcp-server` path.

#### Imported: Overview

JobGPT connects your AI assistant to a complete job search automation platform via the JobGPT MCP server. It provides 34 tools covering job search, auto-apply, resume generation, application tracking, salary intelligence, and recruiter outreach so you can manage your entire job hunt from your AI coding assistant.

Built by [6figr.com](https://6figr.com/jobgpt-ai), the platform supports 150+ countries with salary data, job matching, and automated applications.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @jobgpt-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @jobgpt-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @jobgpt-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @jobgpt-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Find Remote Jobs

> "Find remote senior React jobs paying over $150k"

The skill uses `search_jobs` with title, remote, and salary filters to find matching positions, then presents results with company, title, location, salary range, and key skills.

### Auto-Apply to Jobs

> "Auto-apply to the top 5 matches from my job hunt"

The skill checks that your resume is uploaded, uses `match_jobs` to find new matches, saves the selected matches with `add_job_to_applications`, then triggers `apply_to_job` for each resulting application. It monitors progress with `get_application_stats`.

### Generate a Tailored Resume

> "Generate a tailored resume for this Google application"

The skill calls `generate_resume_for_job` to create an AI-optimized resume targeting the specific job's requirements, then provides the download link via `get_generated_resume`.

### Import and Apply from a URL

> "Apply to this job for me - https://boards.greenhouse.io/company/jobs/12345"

The skill uses `import_job_by_url` to import the job from any supported platform (LinkedIn, Greenhouse, Lever, Workday), adds it to applications, and optionally triggers auto-apply.

### Recruiter Outreach

> "Find recruiters for this job and draft an outreach email"

The skill finds recruiters with `get_job_recruiters` and helps craft a personalized message. The draft is presented to the user for review; `send_outreach` is only called after explicit user confirmation.

### Check Application Stats

> "Show my application stats for the last 7 days"

The skill uses `get_application_stats` for an aggregated overview - total counts by status, auto-apply metrics, and pipeline progress.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Check credits first - Auto-apply and resume generation consume credits. Use get_credits before batch operations.
- Complete your profile - Run getprofile first and fill in missing fields with updateprofile for better job matches.
- Upload a resume before applying - Use listresumes to check, and uploadresume if needed.
- Use job hunts for ongoing searches - Create a job hunt with createjobhunt to save filters and get continuous matches.
- Use getapplication for saved jobs - If a user asks about a job they've already saved, use getapplication instead of get_job.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- **Check credits first** - Auto-apply and resume generation consume credits. Use `get_credits` before batch operations.
- **Complete your profile** - Run `get_profile` first and fill in missing fields with `update_profile` for better job matches.
- **Upload a resume before applying** - Use `list_resumes` to check, and `upload_resume` if needed.
- **Use job hunts for ongoing searches** - Create a job hunt with `create_job_hunt` to save filters and get continuous matches.
- **Use `get_application` for saved jobs** - If a user asks about a job they've already saved, use `get_application` instead of `get_job`.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/jobgpt`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Problem | Solution |
|---------|----------|
| "Missing Authorization header" | For Claude Code and other remote HTTP MCP setups, confirm the `Authorization` header is configured on the MCP server entry |
| "Missing API key" | For the local `npx jobgpt-mcp-server` setup, ensure `JOBGPT_API_KEY` is set to your API key |
| "Insufficient credits" | Check balance with `get_credits`. Purchase more at 6figr.com/account |
| Auto-apply not working | Ensure a resume is uploaded and the job hunt has auto-apply enabled |
| No job matches found | Broaden your search filters (fewer titles, more locations, wider salary range) |

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

#### Imported: Additional Resources

- [JobGPT Platform](https://6figr.com/jobgpt-ai) - Sign up and manage your account
- [MCP Server Repo](https://github.com/6figr-com/jobgpt-mcp-server) - Source code and setup guides
- [Skills Repo](https://github.com/6figr-com/skills) - This skill's source
- [npm Package](https://www.npmjs.com/package/jobgpt-mcp-server) - Install via npm
