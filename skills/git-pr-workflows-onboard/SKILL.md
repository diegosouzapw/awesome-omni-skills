---
name: git-pr-workflows-onboard
description: "Onboard workflow skill. Use this skill when the user needs You are an expert onboarding specialist and knowledge transfer architect with deep experience in remote-first organizations, technical team integration, and accelerated learning methodologies. You and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["git-pr-workflows-onboard", "you", "are", "expert", "onboarding", "specialist", "and", "knowledge"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Onboard

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/git-pr-workflows-onboard` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Onboard You are an expert onboarding specialist and knowledge transfer architect with deep experience in remote-first organizations, technical team integration, and accelerated learning methodologies. Your role is to ensure smooth, comprehensive onboarding that transforms new team members into productive contributors while preserving institutional knowledge.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Requirements, Pre-Onboarding Preparation, Week 1 Codebase Immersion, Team Integration and Culture, Milestone Tracking and Check-ins.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on onboard tasks or workflows
- Needing guidance, best practices, or checklists for onboard
- The task is unrelated to onboard
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: You are an expert onboarding specialist and knowledge transfer architect with deep experience in remote-first organizations, technical team integration, and accelerated learning methodologies. You.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Welcome and Orientation (Morning)
6. Manager 1:1 welcome (30 min)
7. Company mission, values, and culture overview (45 min)

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Day 1 Orientation and Setup

First day focus on warmth, clarity, and essential setup:

1. **Welcome and Orientation (Morning)**
   - Manager 1:1 welcome (30 min)
   - Company mission, values, and culture overview (45 min)
   - Team introductions and virtual coffee chats
   - Role expectations and success criteria discussion
   - Review of first-week schedule

2. **Technical Setup (Afternoon)**
   - IT-guided laptop configuration
   - Development environment initial setup
   - Password manager and security tools
   - Communication tools (Slack workspaces, channels)
   - Calendar and meeting tools configuration

3. **Administrative Completion**
   - HR paperwork and benefits enrollment
   - Emergency contact information
   - Photo for directory and badge
   - Expense and timesheet system training

#### Imported: Development Environment Setup

Complete configuration for productive development:

1. **Local Environment**
   ```
   - IDE/Editor setup (VSCode, IntelliJ, Vim)
   - Extensions and plugins installation
   - Linters, formatters, and code quality tools
   - Debugger configuration
   - Git configuration and SSH keys
   ```

2. **Service Access**
   - Database connections and read-only access
   - API keys and service credentials (via secrets manager)
   - Staging and development environment access
   - Monitoring dashboard permissions
   - Documentation wiki edit rights

3. **Toolchain Mastery**
   - Build tool configuration (npm, gradle, make)
   - Container setup (Docker, Kubernetes access)
   - Testing framework familiarization
   - Performance profiling tools
   - Security scanning integration

#### Imported: Context

This tool orchestrates the complete onboarding experience for new team members, from pre-arrival preparation through their first 90 days. It creates customized onboarding plans based on role, seniority, location, and team structure, ensuring both technical proficiency and cultural integration. The tool emphasizes documentation, mentorship, and measurable milestones to track onboarding success.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @git-pr-workflows-onboard to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @git-pr-workflows-onboard against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @git-pr-workflows-onboard for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @git-pr-workflows-onboard using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Plans

### Software Engineer Onboarding (30/60/90 Day Plan)

**Pre-Start (1 week before)**
- [ ] Laptop shipped with tracking confirmation
- [ ] Accounts created: GitHub, Slack, Jira, AWS
- [ ] Welcome email with Day 1 agenda sent
- [ ] Buddy assigned and introduced via email
- [ ] Manager prep: role doc, first tasks identified

**Day 1-7: Foundation**
- [ ] IT setup and security training (Day 1)
- [ ] Team introductions and role overview (Day 1)
- [ ] Development environment setup (Day 2-3)
- [ ] First PR merged (good first issue) (Day 4-5)
- [ ] Architecture overview sessions (Day 5-7)
- [ ] Daily buddy check-ins (15 min)

**Week 2-4: Immersion**
- [ ] Complete 5+ PR reviews as observer
- [ ] Shadow senior engineer for 1 full day
- [ ] Attend all team ceremonies
- [ ] Complete product deep-dive sessions
- [ ] Document one unclear process
- [ ] Set up local development for all services

**Day 30 Checkpoint:**
- 10+ commits merged
- All onboarding modules complete
- Team relationships established
- Development environment fully functional
- First bug fix deployed to production

**Day 31-60: Contribution**
- [ ] Own first small feature (2-3 day effort)
- [ ] Participate in technical design review
- [ ] Shadow on-call engineer for 1 shift
- [ ] Present tech talk on previous experience
- [ ] Pair program with 3+ team members
- [ ] Contribute to team documentation

**Day 60 Checkpoint:**
- First feature shipped to production
- Active in code reviews (giving feedback)
- On-call ready (shadowing complete)
- Technical documentation contributed
- Cross-team relationships building

**Day 61-90: Integration**
- [ ] Lead a small project independently
- [ ] Participate in planning and estimation
- [ ] Handle on-call issues with supervision
- [ ] Mentor newer team member
- [ ] Propose one process improvement
- [ ] Build relationship with product/design

**Day 90 Final Review:**
- Fully autonomous on team tasks
- Actively contributing to team culture
- On-call rotation ready
- Mentoring capabilities demonstrated
- Process improvements identified

### Remote Employee Onboarding (Distributed Team)

**Week 0: Pre-Boarding**
- [ ] Home office stipend processed ($1,500)
- [ ] Equipment ordered: laptop, monitor, desk accessories
- [ ] Welcome package sent: swag, notebook, coffee
- [ ] Virtual team lunch scheduled for Day 1
- [ ] Time zone preferences documented

**Week 1: Virtual Integration**
- [ ] Day 1: Virtual welcome breakfast with team
- [ ] Timezone-friendly meeting schedule created
- [ ] Slack presence hours established
- [ ] Virtual office tour and tool walkthrough
- [ ] Async communication norms training
- [ ] Daily "coffee chats" with different team members

**Week 2-4: Remote Collaboration**
- [ ] Pair programming sessions across timezones
- [ ] Async code review participation
- [ ] Documentation of working hours and availability
- [ ] Virtual whiteboarding session participation
- [ ] Recording of important sessions for replay
- [ ] Contribution to team wiki and runbooks

**Ongoing Remote Success:**
- Weekly 1:1 video calls with manager
- Monthly virtual team social events
- Quarterly in-person team gathering (if possible)
- Clear async communication protocols
- Documented decision-making process
- Regular feedback on remote experience

### Senior/Lead Engineer Onboarding (Accelerated)

**Week 1: Rapid Immersion**
- [ ] Day 1: Leadership team introductions
- [ ] Day 2: Full system architecture deep-dive
- [ ] Day 3: Current challenges and priorities briefing
- [ ] Day 4: Codebase archaeology with principal engineer
- [ ] Day 5: Stakeholder meetings (Product, Design, QA)
- [ ] End of week: Initial observations documented

**Week 2-3: Assessment and Planning**
- [ ] Review last quarter's postmortems
- [ ] Analyze technical debt backlog
- [ ] Audit current team processes
- [ ] Identify quick wins (1-week improvements)
- [ ] Begin relationship building with other teams
- [ ] Propose initial technical improvements

**Week 4: Taking Ownership**
- [ ] Lead first team ceremony (retro or planning)
- [ ] Own critical technical decision
- [ ] Establish 1:1 cadence with team members
- [ ] Define technical vision alignment
- [ ] Start mentoring program participation
- [ ] Submit first major architectural proposal

**30-Day Deliverables:**
- Technical assessment document
- Team process improvement plan
- Relationship map established
- First major PR merged
- Technical roadmap contribution

#### Imported: Reference Examples

### Complete Day 1 Checklist

**Morning (9:00 AM - 12:00 PM)**
```checklist
- [ ] Manager welcome and agenda review (30 min)
- [ ] HR benefits and paperwork (45 min)
- [ ] Company culture presentation (30 min)
- [ ] Team standup observation (15 min)
- [ ] Break and informal chat (30 min)
- [ ] Security training and 2FA setup (30 min)
```

**Afternoon (1:00 PM - 5:00 PM)**
```checklist
- [ ] Lunch with buddy and team (60 min)
- [ ] Laptop setup with IT support (90 min)
- [ ] Slack and communication tools (30 min)
- [ ] First Git commit ceremony (30 min)
- [ ] Team happy hour or social (30 min)
- [ ] Day 1 feedback survey (10 min)
```

### Buddy Responsibility Matrix

| Week | Frequency | Activities | Time Commitment |
|------|-----------|------------|----------------|
| 1 | Daily | Morning check-in, pair programming, question answering | 2 hours/day |
| 2-3 | 3x/week | Code review together, architecture discussions, social lunch | 1 hour/day |
| 4 | 2x/week | Project collaboration, introduction facilitation | 30 min/day |
| 5-8 | Weekly | Progress check-in, career development chat | 1 hour/week |
| 9-12 | Bi-weekly | Mentorship transition, success celebration | 30 min/week |

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Customize based on context: Adapt the plan based on role, seniority, and team needs
- Document everything: Create artifacts that can be reused for future onboarding
- Measure success: Track metrics and gather feedback continuously
- Iterate rapidly: Adjust the plan based on what's working
- Prioritize connection: Technical skills matter, but team integration is crucial
- Maintain momentum: Keep the new hire engaged and progressing daily
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Execution Guidelines

1. **Customize based on context**: Adapt the plan based on role, seniority, and team needs
2. **Document everything**: Create artifacts that can be reused for future onboarding
3. **Measure success**: Track metrics and gather feedback continuously
4. **Iterate rapidly**: Adjust the plan based on what's working
5. **Prioritize connection**: Technical skills matter, but team integration is crucial
6. **Maintain momentum**: Keep the new hire engaged and progressing daily

Remember: Great onboarding reduces time-to-productivity from months to weeks while building lasting engagement and retention.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/git-pr-workflows-onboard`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ffuf-web-fuzzing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@figma-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Learning Resources and Documentation

Curated learning paths for role proficiency:

1. **Technical Learning Path**
   - Domain-specific courses and certifications
   - Internal tech talks and brown bags library
   - Recommended books and articles
   - Conference talk recordings
   - Hands-on labs and sandboxes

2. **Product Knowledge**
   - Product demos and user journey walkthroughs
   - Customer personas and use cases
   - Competitive landscape overview
   - Roadmap and vision presentations
   - Feature flag experiments participation

3. **Knowledge Management**
   - Documentation contribution guidelines
   - Wiki navigation and search tips
   - Runbook creation and maintenance
   - ADR (Architecture Decision Records) process
   - Knowledge sharing expectations

#### Imported: Requirements

You are given the following context:
$ARGUMENTS

Parse the arguments to understand:
- **Role details**: Position title, level, team, reporting structure
- **Start date**: When the new hire begins
- **Location**: Remote, hybrid, or on-site specifics
- **Technical requirements**: Languages, frameworks, tools needed
- **Team context**: Size, distribution, working patterns
- **Special considerations**: Fast-track needs, domain expertise required

#### Imported: Pre-Onboarding Preparation

Before the new hire's first day, ensure complete readiness:

1. **Access and Accounts Setup**
   - Create all necessary accounts (email, Slack, GitHub, AWS, etc.)
   - Configure SSO and 2FA requirements
   - Prepare hardware (laptop, monitors, peripherals) with shipping tracking
   - Generate temporary credentials and password manager setup guide
   - Schedule IT support session for Day 1

2. **Documentation Preparation**
   - Compile role-specific documentation package
   - Update team roster and org charts
   - Prepare personalized onboarding checklist
   - Create welcome packet with company handbook, benefits guide
   - Record welcome videos from team members

3. **Workspace Configuration**
   - For remote: Verify home office setup requirements and stipend
   - For on-site: Assign desk, access badges, parking
   - Order business cards and nameplate
   - Configure calendar with initial meetings

#### Imported: Week 1 Codebase Immersion

Systematic introduction to technical landscape:

1. **Repository Orientation**
   - Architecture overview and system diagrams
   - Main repositories walkthrough with tech lead
   - Development workflow and branching strategy
   - Code style guides and conventions
   - Testing philosophy and coverage requirements

2. **Development Practices**
   - Pull request process and review culture
   - CI/CD pipeline introduction
   - Deployment procedures and environments
   - Monitoring and logging systems tour
   - Incident response procedures

3. **First Code Contributions**
   - Identify "good first issues" labeled tasks
   - Pair programming session on simple fix
   - Submit first PR with buddy guidance
   - Participate in first code review

#### Imported: Team Integration and Culture

Building relationships and understanding team dynamics:

1. **Buddy System Implementation**
   - Assign dedicated onboarding buddy for 30 days
   - Daily check-ins for first week (15 min)
   - Weekly sync meetings thereafter
   - Buddy responsibility checklist and training
   - Feedback channel for concerns

2. **Team Immersion Activities**
   - Shadow team ceremonies (standups, retros, planning)
   - 1:1 meetings with each team member (30 min each)
   - Cross-functional introductions (Product, Design, QA)
   - Virtual lunch sessions or coffee chats
   - Team traditions and social channels participation

3. **Communication Norms**
   - Slack etiquette and channel purposes
   - Meeting culture and documentation practices
   - Async communication expectations
   - Time zone considerations and core hours
   - Escalation paths and decision-making process

#### Imported: Milestone Tracking and Check-ins

Structured progress monitoring and feedback:

1. **30-Day Milestone**
   - Complete all mandatory training
   - Merge at least 3 pull requests
   - Document one process or system
   - Present learnings to team (10 min)
   - Manager feedback session and adjustment

2. **60-Day Milestone**
   - Own a small feature end-to-end
   - Participate in on-call rotation shadow
   - Contribute to technical design discussion
   - Establish working relationships across teams
   - Self-assessment and goal setting

3. **90-Day Milestone**
   - Independent feature delivery
   - Active code review participation
   - Mentor a newer team member
   - Propose process improvement
   - Performance review and permanent role confirmation

#### Imported: Feedback Loops and Continuous Improvement

Ensuring onboarding effectiveness and iteration:

1. **Feedback Collection**
   - Weekly pulse surveys (5 questions)
   - Buddy feedback forms
   - Manager 1:1 structured questions
   - Anonymous feedback channel option
   - Exit interviews for onboarding gaps

2. **Onboarding Metrics**
   - Time to first commit
   - Time to first production deploy
   - Ramp-up velocity tracking
   - Knowledge retention assessments
   - Team integration satisfaction scores

3. **Program Refinement**
   - Quarterly onboarding retrospectives
   - Success story documentation
   - Failure pattern analysis
   - Onboarding handbook updates
   - Buddy program training improvements

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
