---
name: hugging-face-papers
description: "Hugging Face Paper Pages workflow skill. Use this skill when the user needs Read and analyze Hugging Face paper pages or arXiv papers with markdown and papers API metadata and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["hugging-face-papers", "read", "and", "analyze", "hugging", "face", "paper", "pages"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Hugging Face Paper Pages

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hugging-face-papers` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Hugging Face Paper Pages Hugging Face Paper pages (hf.co/papers) is a platform built on top of arXiv (arxiv.org), specifically for research papers in the field of artificial intelligence (AI) and computer science. Hugging Face users can submit their paper at hf.co/papers/submit, which features it on the Daily Papers feed (hf.co/papers). Each day, users can upvote papers and comment on papers. Each paper page allows authors to: - claim their paper (by clicking their name on the authors field). This makes the paper page appear on their Hugging Face profile. - link the associated model checkpoints, datasets and Spaces by including the HF paper or arXiv URL in the model card, dataset card or README of the Space - link the Github repository and/or project page URLs - link the HF organization. This also makes the paper page appear on the Hugging Face organization page. Whenever someone mentions a HF paper or arXiv abstract/PDF URL in a model card, dataset card or README of a Space repository, the paper will be automatically indexed. Note that not all papers indexed on Hugging Face are also submitted to daily papers. The latter is more a manner of promoting a research paper. Papers can only be submitted to daily papers up until 14 days after their publication date on arXiv. The Hugging Face team has built an easy-to-use API to interact with paper pages. Content of the papers can be fetched as markdown, or structured metadata can be returned such as author names, linked models/datasets/spaces, linked Github repo and project page.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Parsing the paper ID, Error Handling, Notes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User shares a Hugging Face paper page URL (e.g. https://huggingface.co/papers/2602.08025)
- User shares a Hugging Face markdown paper page URL (e.g. https://huggingface.co/papers/2602.08025.md)
- User shares an arXiv URL (e.g. https://arxiv.org/abs/2602.08025 or https://arxiv.org/pdf/2602.08025)
- User mentions a arXiv ID (e.g. 2602.08025)
- User asks you to summarize, explain, or analyze an AI research paper
- Use when the request clearly matches the imported source intent: Read and analyze Hugging Face paper pages or arXiv papers with markdown and papers API metadata.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Parsing the paper ID

It's recommended to parse the paper ID (arXiv ID) from whatever the user provides:

| Input | Paper ID |
| --- | --- |
| `https://huggingface.co/papers/2602.08025` | `2602.08025` |
| `https://huggingface.co/papers/2602.08025.md` | `2602.08025` |
| `https://arxiv.org/abs/2602.08025` | `2602.08025` |
| `https://arxiv.org/pdf/2602.08025` | `2602.08025` |
| `2602.08025v1` | `2602.08025v1` |
| `2602.08025` | `2602.08025` |

This allows you to provide the paper ID into any of the hub API endpoints mentioned below.

### Fetch the paper page as markdown

The content of a paper can be fetched as markdown like so:

```bash
curl -s "https://huggingface.co/papers/{PAPER_ID}.md"
```

This should return the Hugging Face paper page as markdown. This relies on the HTML version of the paper at https://arxiv.org/html/{PAPER_ID}.

There are 2 exceptions:
- Not all arXiv papers have an HTML version. If the HTML version of the paper does not exist, then the content falls back to the HTML of the Hugging Face paper page.
- If it results in a 404, it means the paper is not yet indexed on hf.co/papers. See [Error handling](#error-handling) for info.

Alternatively, you can request markdown from the normal paper page URL, like so:

```bash
curl -s -H "Accept: text/markdown" "https://huggingface.co/papers/{PAPER_ID}"
```

### Paper Pages API Endpoints

All endpoints use the base URL `https://huggingface.co`.

#### Get structured metadata

Fetch the paper metadata as JSON using the Hugging Face REST API:

```bash
curl -s "https://huggingface.co/api/papers/{PAPER_ID}"
```

This returns structured metadata that can include:

- authors (names and Hugging Face usernames, in case they have claimed the paper)
- media URLs (uploaded when submitting the paper to Daily Papers)
- summary (abstract) and AI-generated summary
- project page and GitHub repository
- organization and engagement metadata (number of upvotes)

To find models linked to the paper, use:

```bash
curl https://huggingface.co/api/models?filter=arxiv:{PAPER_ID}
```

To find datasets linked to the paper, use:

```bash
curl https://huggingface.co/api/datasets?filter=arxiv:{PAPER_ID}
```

To find spaces linked to the paper, use:

```bash
curl https://huggingface.co/api/spaces?filter=arxiv:{PAPER_ID}
```

#### Claim paper authorship

Claim authorship of a paper for a Hugging Face user:

```bash
curl "https://huggingface.co/api/settings/papers/claim" \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $HF_TOKEN" \
  --data '{
    "paperId": "{PAPER_ID}",
    "claimAuthorId": "{AUTHOR_ENTRY_ID}",
    "targetUserId": "{USER_ID}"
  }'
```

- Endpoint: `POST /api/settings/papers/claim`
- Body:
  - `paperId` (string, required): arXiv paper identifier being claimed
  - `claimAuthorId` (string): author entry on the paper being claimed, 24-char hex ID
  - `targetUserId` (string): HF user who should receive the claim, 24-char hex ID
- Response: paper authorship claim result, including the claimed paper ID

#### Get daily papers

Fetch the Daily Papers feed:

```bash
curl -s -H "Authorization: Bearer $HF_TOKEN" \
  "https://huggingface.co/api/daily_papers?p=0&limit=20&date=2017-07-21&sort=publishedAt"
```

- Endpoint: `GET /api/daily_papers`
- Query parameters:
  - `p` (integer): page number
  - `limit` (integer): number of results, between 1 and 100
  - `date` (string): RFC 3339 full-date, for example `2017-07-21`
  - `week` (string): ISO week, for example `2024-W03`
  - `month` (string): month value, for example `2024-01`
  - `submitter` (string): filter by submitter
  - `sort` (enum): `publishedAt` or `trending`
- Response: list of daily papers

#### List papers

List arXiv papers sorted by published date:

```bash
curl -s -H "Authorization: Bearer $HF_TOKEN" \
  "https://huggingface.co/api/papers?cursor={CURSOR}&limit=20"
```

- Endpoint: `GET /api/papers`
- Query parameters:
  - `cursor` (string): pagination cursor
  - `limit` (integer): number of results, between 1 and 100
- Response: list of papers

#### Search papers

Perform hybrid semantic and full-text search on papers:

```bash
curl -s -H "Authorization: Bearer $HF_TOKEN" \
  "https://huggingface.co/api/papers/search?q=vision+language&limit=20"
```

This searches over the paper title, authors, and content.

- Endpoint: `GET /api/papers/search`
- Query parameters:
  - `q` (string): search query, max length 250
  - `limit` (integer): number of results, between 1 and 120
- Response: matching papers

#### Index a paper

Insert a paper from arXiv by ID. If the paper is already indexed, only its authors can re-index it:

```bash
curl "https://huggingface.co/api/papers/index" \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $HF_TOKEN" \
  --data '{
    "arxivId": "{ARXIV_ID}"
  }'
```

- Endpoint: `POST /api/papers/index`
- Body:
  - `arxivId` (string, required): arXiv ID to index, for example `2301.00001`
- Pattern: `^\d{4}\.\d{4,5}$`
- Response: empty JSON object on success

#### Update paper links

Update the project page, GitHub repository, or submitting organization for a paper. The requester must be the paper author, the Daily Papers submitter, or a papers admin:

```bash
curl "https://huggingface.co/api/papers/{PAPER_OBJECT_ID}/links" \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $HF_TOKEN" \
  --data '{
    "projectPage": "https://example.com",
    "githubRepo": "https://github.com/org/repo",
    "organizationId": "{ORGANIZATION_ID}"
  }'
```

- Endpoint: `POST /api/papers/{paperId}/links`
- Path parameters:
  - `paperId` (string, required): Hugging Face paper object ID
- Body:
  - `githubRepo` (string, nullable): GitHub repository URL
  - `organizationId` (string, nullable): organization ID, 24-char hex ID
  - `projectPage` (string, nullable): project page URL
- Response: empty JSON object on success

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hugging-face-papers to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hugging-face-papers against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hugging-face-papers for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hugging-face-papers using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hugging-face-papers`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Error Handling

- **404 on `https://huggingface.co/papers/{PAPER_ID}` or `md` endpoint**: the paper is not indexed on Hugging Face paper pages yet.
- **404 on `/api/papers/{PAPER_ID}`**: the paper may not be indexed on Hugging Face paper pages yet.
- **Paper ID not found**: verify the extracted arXiv ID, including any version suffix

### Fallbacks

If the Hugging Face paper page does not contain enough detail for the user's question:

- Check the regular paper page at `https://huggingface.co/papers/{PAPER_ID}`
- Fall back to the arXiv page or PDF for the original source:
  - `https://arxiv.org/abs/{PAPER_ID}`
  - `https://arxiv.org/pdf/{PAPER_ID}`

#### Imported: Notes

- No authentication is required for public paper pages.
- Write endpoints such as claim authorship, index paper, and update paper links require `Authorization: Bearer $HF_TOKEN`.
- Prefer the `.md` endpoint for reliable machine-readable output.
- Prefer `/api/papers/{PAPER_ID}` when you need structured JSON fields instead of page markdown.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
