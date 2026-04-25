---
name: postmortem-writing
description: "Postmortem Writing workflow skill. Use this skill when the user needs Comprehensive guide to writing effective, blameless postmortems that drive organizational learning and prevent incident recurrence and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: communication
tags: ["postmortem-writing", "comprehensive", "guide", "writing", "effective", "blameless", "postmortems", "drive"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Postmortem Writing

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/postmortem-writing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Postmortem Writing Comprehensive guide to writing effective, blameless postmortems that drive organizational learning and prevent incident recurrence.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Templates, Executive Summary, Timeline (All times UTC), Root Cause Analysis, Detection.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to postmortem writing
- You need a different domain or tool outside this scope
- Conducting post-incident reviews
- Writing postmortem documents
- Facilitating blameless postmortem meetings
- Identifying root causes and contributing factors

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Core Concepts

### 1. Blameless Culture

| Blame-Focused | Blameless |
|---------------|-----------|
| "Who caused this?" | "What conditions allowed this?" |
| "Someone made a mistake" | "The system allowed this mistake" |
| Punish individuals | Improve systems |
| Hide information | Share learnings |
| Fear of speaking up | Psychological safety |

### 2. Postmortem Triggers

- SEV1 or SEV2 incidents
- Customer-facing outages > 15 minutes
- Data loss or security incidents
- Near-misses that could have been severe
- Novel failure modes
- Incidents requiring unusual intervention

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @postmortem-writing to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @postmortem-writing against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @postmortem-writing for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @postmortem-writing using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

### Postmortem Timeline
```
Day 0: Incident occurs
Day 1-2: Draft postmortem document
Day 3-5: Postmortem meeting
Day 5-7: Finalize document, create tickets
Week 2+: Action item completion
Quarterly: Review patterns across incidents
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Start immediately - Memory fades fast
- Be specific - Exact times, exact errors
- Include graphs - Visual evidence
- Assign owners - No orphan action items
- Share widely - Organizational learning
- Don't name and shame - Ever
- Don't skip small incidents - They reveal patterns

### Imported Operating Notes

#### Imported: Best Practices

### Do's
- **Start immediately** - Memory fades fast
- **Be specific** - Exact times, exact errors
- **Include graphs** - Visual evidence
- **Assign owners** - No orphan action items
- **Share widely** - Organizational learning

### Don'ts
- **Don't name and shame** - Ever
- **Don't skip small incidents** - They reveal patterns
- **Don't make it a blame doc** - That kills learning
- **Don't create busywork** - Actions should be meaningful
- **Don't skip follow-up** - Verify actions completed

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/postmortem-writing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Problem Statement

Payment service experienced 47-minute outage due to database connection exhaustion.

## Related Skills

- `@odoo-rpc-api` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-sales-crm-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-security-rules` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-shopify-integration` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Appendix

### Supporting Data

#### Error Rate Graph
[Link to Grafana dashboard snapshot]

#### Database Connection Graph
[Link to metrics]

### Related Incidents
- 2023-11-02: Similar connection issue in User Service (POSTMORTEM-42)

### References
- Connection Pool Best Practices
- Deployment Runbook
```

### Template 2: 5 Whys Analysis

```markdown
# 5 Whys Analysis: [Incident]

#### Imported: Resources

- [Google SRE - Postmortem Culture](https://sre.google/sre-book/postmortem-culture/)
- [Etsy's Blameless Postmortems](https://codeascraft.com/2012/05/22/blameless-postmortems/)
- [PagerDuty Postmortem Guide](https://postmortems.pagerduty.com/)

#### Imported: Templates

### Template 1: Standard Postmortem

```markdown
# Postmortem: [Incident Title]

**Date**: 2024-01-15
**Authors**: @alice, @bob
**Status**: Draft | In Review | Final
**Incident Severity**: SEV2
**Incident Duration**: 47 minutes

#### Imported: Executive Summary

On January 15, 2024, the payment processing service experienced a 47-minute outage affecting approximately 12,000 customers. The root cause was a database connection pool exhaustion triggered by a configuration change in deployment v2.3.4. The incident was resolved by rolling back to v2.3.3 and increasing connection pool limits.

**Impact**:
- 12,000 customers unable to complete purchases
- Estimated revenue loss: $45,000
- 847 support tickets created
- No data loss or security implications

#### Imported: Timeline (All times UTC)

| Time | Event |
|------|-------|
| 14:23 | Deployment v2.3.4 completed to production |
| 14:31 | First alert: `payment_error_rate > 5%` |
| 14:33 | On-call engineer @alice acknowledges alert |
| 14:35 | Initial investigation begins, error rate at 23% |
| 14:41 | Incident declared SEV2, @bob joins |
| 14:45 | Database connection exhaustion identified |
| 14:52 | Decision to rollback deployment |
| 14:58 | Rollback to v2.3.3 initiated |
| 15:10 | Rollback complete, error rate dropping |
| 15:18 | Service fully recovered, incident resolved |

#### Imported: Root Cause Analysis

### What Happened

The v2.3.4 deployment included a change to the database query pattern that inadvertently removed connection pooling for a frequently-called endpoint. Each request opened a new database connection instead of reusing pooled connections.

### Why It Happened

1. **Proximate Cause**: Code change in `PaymentRepository.java` replaced pooled `DataSource` with direct `DriverManager.getConnection()` calls.

2. **Contributing Factors**:
   - Code review did not catch the connection handling change
   - No integration tests specifically for connection pool behavior
   - Staging environment has lower traffic, masking the issue
   - Database connection metrics alert threshold was too high (90%)

3. **5 Whys Analysis**:
   - Why did the service fail? → Database connections exhausted
   - Why were connections exhausted? → Each request opened new connection
   - Why did each request open new connection? → Code bypassed connection pool
   - Why did code bypass connection pool? → Developer unfamiliar with codebase patterns
   - Why was developer unfamiliar? → No documentation on connection management patterns

### System Diagram

```
[Client] → [Load Balancer] → [Payment Service] → [Database]
                                    ↓
                            Connection Pool (broken)
                                    ↓
                            Direct connections (cause)
```

#### Imported: Detection

### What Worked
- Error rate alert fired within 8 minutes of deployment
- Grafana dashboard clearly showed connection spike
- On-call response was swift (2 minute acknowledgment)

### What Didn't Work
- Database connection metric alert threshold too high
- No deployment-correlated alerting
- Canary deployment would have caught this earlier

### Detection Gap
The deployment completed at 14:23, but the first alert didn't fire until 14:31 (8 minutes). A deployment-aware alert could have detected the issue faster.

#### Imported: Response

### What Worked
- On-call engineer quickly identified database as the issue
- Rollback decision was made decisively
- Clear communication in incident channel

### What Could Be Improved
- Took 10 minutes to correlate issue with recent deployment
- Had to manually check deployment history
- Rollback took 12 minutes (could be faster)

#### Imported: Impact

### Customer Impact
- 12,000 unique customers affected
- Average impact duration: 35 minutes
- 847 support tickets (23% of affected users)
- Customer satisfaction score dropped 12 points

### Business Impact
- Estimated revenue loss: $45,000
- Support cost: ~$2,500 (agent time)
- Engineering time: ~8 person-hours

### Technical Impact
- Database primary experienced elevated load
- Some replica lag during incident
- No permanent damage to systems

#### Imported: Lessons Learned

### What Went Well
1. Alerting detected the issue before customer reports
2. Team collaborated effectively under pressure
3. Rollback procedure worked smoothly
4. Communication was clear and timely

### What Went Wrong
1. Code review missed critical change
2. Test coverage gap for connection pooling
3. Staging environment doesn't reflect production traffic
4. Alert thresholds were not tuned properly

### Where We Got Lucky
1. Incident occurred during business hours with full team available
2. Database handled the load without failing completely
3. No other incidents occurred simultaneously

#### Imported: Action Items

| Priority | Action | Owner | Due Date | Ticket |
|----------|--------|-------|----------|--------|
| P0 | Add integration test for connection pool behavior | @alice | 2024-01-22 | ENG-1234 |
| P0 | Lower database connection alert threshold to 70% | @bob | 2024-01-17 | OPS-567 |
| P1 | Document connection management patterns | @alice | 2024-01-29 | DOC-89 |
| P1 | Implement deployment-correlated alerting | @bob | 2024-02-05 | OPS-568 |
| P2 | Evaluate canary deployment strategy | @charlie | 2024-02-15 | ENG-1235 |
| P2 | Load test staging with production-like traffic | @dave | 2024-02-28 | QA-123 |

#### Imported: Analysis

### Why #1: Why did the service fail?
**Answer**: Database connections were exhausted, causing all new requests to fail.

**Evidence**: Metrics showed connection count at 100/100 (max), with 500+ pending requests.

---

### Why #2: Why were database connections exhausted?
**Answer**: Each incoming request opened a new database connection instead of using the connection pool.

**Evidence**: Code diff shows direct `DriverManager.getConnection()` instead of pooled `DataSource`.

---

### Why #3: Why did the code bypass the connection pool?
**Answer**: A developer refactored the repository class and inadvertently changed the connection acquisition method.

**Evidence**: PR #1234 shows the change, made while fixing a different bug.

---

### Why #4: Why wasn't this caught in code review?
**Answer**: The reviewer focused on the functional change (the bug fix) and didn't notice the infrastructure change.

**Evidence**: Review comments only discuss business logic.

---

### Why #5: Why isn't there a safety net for this type of change?
**Answer**: We lack automated tests that verify connection pool behavior and lack documentation about our connection patterns.

**Evidence**: Test suite has no tests for connection handling; wiki has no article on database connections.

#### Imported: Root Causes Identified

1. **Primary**: Missing automated tests for infrastructure behavior
2. **Secondary**: Insufficient documentation of architectural patterns
3. **Tertiary**: Code review checklist doesn't include infrastructure considerations

#### Imported: Systemic Improvements

| Root Cause | Improvement | Type |
|------------|-------------|------|
| Missing tests | Add infrastructure behavior tests | Prevention |
| Missing docs | Document connection patterns | Prevention |
| Review gaps | Update review checklist | Detection |
| No canary | Implement canary deployments | Mitigation |
```

### Template 3: Quick Postmortem (Minor Incidents)

```markdown
# Quick Postmortem: [Brief Title]

**Date**: 2024-01-15 | **Duration**: 12 min | **Severity**: SEV3

#### Imported: What Happened

API latency spiked to 5s due to cache miss storm after cache flush.

#### Imported: Timeline

- 10:00 - Cache flush initiated for config update
- 10:02 - Latency alerts fire
- 10:05 - Identified as cache miss storm
- 10:08 - Enabled cache warming
- 10:12 - Latency normalized

#### Imported: Root Cause

Full cache flush for minor config update caused thundering herd.

#### Imported: Fix

- Immediate: Enabled cache warming
- Long-term: Implement partial cache invalidation (ENG-999)

#### Imported: Lessons

Don't full-flush cache in production; use targeted invalidation.
```

#### Imported: Facilitation Guide

### Running a Postmortem Meeting

```markdown

#### Imported: Meeting Structure (60 minutes)

### 1. Opening (5 min)
- Remind everyone of blameless culture
- "We're here to learn, not to blame"
- Review meeting norms

### 2. Timeline Review (15 min)
- Walk through events chronologically
- Ask clarifying questions
- Identify gaps in timeline

### 3. Analysis Discussion (20 min)
- What failed?
- Why did it fail?
- What conditions allowed this?
- What would have prevented it?

### 4. Action Items (15 min)
- Brainstorm improvements
- Prioritize by impact and effort
- Assign owners and due dates

### 5. Closing (5 min)
- Summarize key learnings
- Confirm action item owners
- Schedule follow-up if needed

#### Imported: Facilitation Tips

- Keep discussion on track
- Redirect blame to systems
- Encourage quiet participants
- Document dissenting views
- Time-box tangents
```

#### Imported: Anti-Patterns to Avoid

| Anti-Pattern | Problem | Better Approach |
|--------------|---------|-----------------|
| **Blame game** | Shuts down learning | Focus on systems |
| **Shallow analysis** | Doesn't prevent recurrence | Ask "why" 5 times |
| **No action items** | Waste of time | Always have concrete next steps |
| **Unrealistic actions** | Never completed | Scope to achievable tasks |
| **No follow-up** | Actions forgotten | Track in ticketing system |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
