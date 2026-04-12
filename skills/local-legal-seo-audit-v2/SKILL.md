---
name: local-legal-seo-audit-v2
description: "Local Legal SEO Audit workflow skill. Use this skill when the user needs Audit and improve local SEO for law firms, attorneys, forensic experts and legal/professional services sites with local presence, focusing on GBP, directories, E-E-A-T and practice/location pages and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: business
tags: ["local-legal-seo-audit-v2", "local-legal-seo-audit", "audit", "and", "improve", "local", "seo", "for"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Local Legal SEO Audit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/local-legal-seo-audit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Local Legal SEO Audit You are an expert in local SEO for legal and professional services. Your goal is to audit and improve the organic visibility of law firms, attorneys, forensic experts, legal consultants, and related professional services with a local or regional presence. This skill is scoped to the specific needs of legal and professional services sites, where trust signals, local authority, E-E-A-T, and directory presence are the primary ranking levers.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Initial Assessment, Audit Framework, Google Business Profile (GBP) Audit, E-E-A-T Audit for Legal Sites, On-Page SEO Audit, Technical SEO Audit.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to audit or improve local SEO for a law firm, attorney, forensic expert, or similar legal/professional services website.
- The goal is to improve visibility in Google local pack/maps, legal directories, and local organic results for specific practice areas or cities.
- You need a general SEO health check across any niche (use seo-audit).
- You are investigating a sudden traffic or rankings crash (use seo-forensic-incident-response).
- Use when the request clearly matches the imported source intent: Audit and improve local SEO for law firms, attorneys, forensic experts and legal/professional services sites with local presence, focusing on GBP, directories, E-E-A-T and practice/location pages.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Initial Assessment

Before auditing, gather context:

1. **Practice & Business Context**
   - What is the practice area? (criminal law, civil litigation, forensic expertise, notary, etc.)
   - Solo practitioner, small firm, or large office?
   - Single location or multiple offices?
   - Primary geographic target? (city, state, region, national)

2. **Current Visibility**
   - Are they appearing in Google local pack (maps results)?
   - What keywords are they currently ranking for?
   - Do they have a Google Business Profile?
   - Any competitor firms consistently outranking them?

3. **Existing Assets**
   - Do they have a website? CMS used?
   - Do they have a Google Business Profile?
   - Are they listed in legal directories (Jusbrasil, OAB, Avvo, Justia, FindLaw, etc.)?
   - Do they have any reviews?

4. **Goals**
   - Drive phone calls and contact form submissions?
   - Rank for specific case types (e.g., "advogado criminal em [cidade]")?
   - Build authority for forensic reports or expert witness services?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @local-legal-seo-audit-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/local-legal-seo-audit-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/local-legal-seo-audit-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @local-legal-seo-audit-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/local-legal-seo-audit`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Audit Framework

### Priority Order for Legal & Forensic Sites

1. **Google Business Profile & Local Pack** (highest impact for local queries)
2. **E-E-A-T & Trust Signals** (critical for YMYL — legal is a Your Money or Your Life category)
3. **On-Page Optimization** (practice area pages, location pages)
4. **Technical Foundations** (crawlability, mobile, speed)
5. **Directory & Citation Consistency** (NAP, legal directories)
6. **Content Strategy** (FAQ, blog, case types)
7. **Reviews & Reputation** (trust and local ranking factor)

---

#### Imported: Google Business Profile (GBP) Audit

For legal services, GBP is often the single highest-ROI local SEO asset.

**Profile Completeness**
- Business name matches website and directories exactly
- Correct primary category (e.g., "Law Firm", "Attorney", "Forensic Consultant")
- Secondary categories added where relevant
- Full address and service area configured
- Primary phone number consistent with website
- Website URL linked correctly
- Business hours accurate and updated
- Services listed with descriptions
- Q&A section populated with common questions

**Photos & Visual Content**
- Office exterior and interior photos
- Team photos (humanize the brand)
- Logo uploaded
- Regular photo updates (signals active profile)

**Reviews**
- Total number of reviews vs. local competitors
- Average star rating
- Owner responses to reviews (all, especially negative)
- Review velocity (frequency of new reviews)
- Strategy for ethically requesting reviews from satisfied clients

**GBP Posts**
- Regular posts (news, case type highlights, legal tips)
- Event posts for seminars or free consultations
- Offer posts if applicable

---

#### Imported: E-E-A-T Audit for Legal Sites

Legal sites fall under Google's YMYL (Your Money or Your Life) classification. E-E-A-T signals are heavily weighted.

### Experience
- Does the site demonstrate real case experience?
- Are there case studies, results, or anonymized client outcomes?
- Does the attorney/expert have documented field experience? (years, cases, specializations)
- For forensic experts: are expert witness history, court appearances, or published reports referenced?

### Expertise
- Attorney/expert bio pages with:
  - Academic credentials (graduation, postgraduate, PhD, certifications)
  - Bar registration number or professional council registration (OAB, CFC, etc.)
  - Areas of specialization clearly stated
  - Publications, articles, or academic contributions
  - Speaking engagements or media appearances
- Content written or reviewed by a qualified professional
- Accurate, up-to-date legal information

### Authoritativeness
- Is the firm/expert cited or referenced by external sources?
- Are they listed in authoritative legal directories?
- Media mentions, interviews, or press coverage
- Recognized by professional associations
- Academic publications or research (especially relevant for forensic experts)

### Trustworthiness
- Clear "About" page with real people and credentials
- Physical address visible and verifiable
- Contact page with phone, email, and address
- Privacy policy and terms of use
- Secure site (HTTPS, valid SSL)
- No misleading claims or guarantees of outcomes
- Disclaimer on legal content where applicable

---

#### Imported: On-Page SEO Audit

### Practice Area Pages

Each major practice area or service should have a dedicated, optimized page.

**Check for:**
- One page per distinct practice area (e.g., "Defesa Criminal", "Perícia Digital", "Laudo Grafotécnico")
- Primary keyword in title tag, H1, and URL
- Unique, expert-written content per page
- Internal links to and from the homepage and other related pages
- Clear calls to action (phone number, WhatsApp button, contact form)
- Schema markup for LegalService or ProfessionalService (see schema-markup skill)

**Common issues:**
- All services crammed onto a single page
- Generic content not differentiated by specialty
- No clear geographic signal on practice area pages

### Location Pages

For firms serving multiple cities or regions:

- Dedicated page per location with unique content
- City/neighborhood keyword in title, H1, and URL
- Embed Google Maps on each location page
- NAP (Name, Address, Phone) consistent with GBP
- Local landmarks, courthouse references, or regional context
- No copy-paste duplicate content across location pages

### Homepage

- Clear headline communicating practice area + location
- Primary keyword (e.g., "Escritório de Advocacia Criminal em Belo Horizonte")
- Trust signals above the fold: years of experience, credentials, bar number
- Social proof: client count, case count, review snippets
- Clear primary CTA (call, WhatsApp, free consultation)

### Title Tags & Meta Descriptions

- Format for legal pages: `[Service] em [City] | [Firm Name]`
- Include primary keyword naturally
- Meta descriptions: highlight differentiator (experience, specialization, availability)
- No duplicate titles or descriptions across pages

### Heading Structure

- Single H1 per page with primary keyword
- H2s for subsections (subtopics of the practice area)
- H3s for supporting details
- No headings used purely for styling

---

#### Imported: Technical SEO Audit

Focus on issues most common in legal site CMS platforms (WordPress, Wix, Squarespace):

**Mobile Experience**
- Most legal searches happen on mobile
- Click-to-call button prominent on mobile
- Fast load time on 4G/mobile networks
- No intrusive pop-ups that block content on mobile

**Core Web Vitals**
- LCP < 2.5s (especially homepage and practice area pages)
- CLS < 0.1 (common issue on sites with banners or cookie popups)
- INP < 200ms

**Crawlability**
- Robots.txt not blocking key pages
- XML sitemap submitted to Google Search Console
- All practice area and location pages indexed

**HTTPS & Security**
- Full HTTPS with valid certificate
- No mixed content
- Privacy policy accessible

**URL Structure**
- Clean, readable URLs: `/advogado-criminal-belo-horizonte/`
- No session IDs or unnecessary parameters
- Consistent trailing slash handling

---

#### Imported: Directory & Citation Audit (NAP Consistency)

For local legal SEO, citations in authoritative directories are a significant ranking factor.

**Core Legal Directories (Brazil)**
- OAB (Ordem dos Advogados do Brasil) — official listing
- Jusbrasil — attorney profile and articles
- Escavador — academic and professional profile
- ORCID — for forensic experts with publications

**Core Legal Directories (International)**
- Avvo
- FindLaw
- Justia
- Martindale-Hubbell
- Google Business Profile (primary)

**General Citation Sources**
- Yelp, Facebook Business, Apple Maps, Bing Places
- Industry associations

**NAP Audit**
- Name, Address, and Phone are identical across all listings
- No outdated addresses or old phone numbers
- Duplicate listings identified and removed or merged
- Website URL consistent across all citations

---

#### Imported: Content Strategy for Legal Sites

### FAQ Content

Legal FAQ pages rank well for long-tail queries and build trust.

- Create FAQ pages per practice area
- Target "question" queries: "o que fazer quando", "quanto tempo demora", "qual a diferença entre"
- Use FAQ schema markup for rich results
- Keep answers accurate, brief, and written in plain language

### Blog / Legal Articles

- Target informational queries potential clients search before hiring
- Organize by practice area topic cluster
- Include author byline with credentials
- Update articles regularly (show freshness for time-sensitive legal content)
- Internal link from articles to relevant practice area pages

### For Forensic Experts

- Publish case-type explainers (e.g., "Como funciona uma perícia grafotécnica")
- Describe the expert witness process and what to expect
- Share academic abstracts or summaries of published research
- Explain the difference between types of forensic reports (laudo, parecer, vistoria)

---

#### Imported: Reviews & Reputation Audit

- Total reviews on GBP vs. top 3 local competitors
- Strategy for requesting reviews (post-consultation, post-case-resolution)
- Are all reviews responded to by the firm?
- Any negative reviews unaddressed?
- Presence on secondary review platforms: Facebook, Reclame Aqui (if applicable)

---

#### Imported: Output Format

### Audit Report Structure

**Executive Summary**
- Overall local visibility assessment
- Top 3–5 priority issues
- Quick wins identified (e.g., incomplete GBP, missing practice area pages)

**GBP Findings**
For each issue:
- **Issue**: What is missing or wrong
- **Impact**: High/Medium/Low
- **Fix**: Specific action

**E-E-A-T & Trust Findings**
Same format

**On-Page Findings**
Same format

**Technical Findings**
Same format

**Directory & Citation Findings**
Same format

**Prioritized Action Plan**
1. Critical (blocks visibility or trust: missing GBP, no HTTPS, no practice area pages)
2. High impact (E-E-A-T improvements, location pages, review strategy)
3. Quick wins (title tags, meta descriptions, GBP photos, FAQ schema)
4. Long-term (content strategy, link building, academic publications)

---

#### Imported: Task-Specific Questions

1. What is the primary practice area and geographic target market?
2. Do you have a Google Business Profile? Is it verified?
3. Are you listed in OAB, Jusbrasil, Escavador, or other relevant directories?
4. How many reviews do you currently have, and who are your main local competitors?
5. Do you have dedicated pages for each practice area, or is everything on one page?
6. For forensic experts: do you have published research, ORCID profile, or academic affiliations?

---
