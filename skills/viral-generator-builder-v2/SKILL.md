---
name: viral-generator-builder-v2
description: "Viral Generator Builder workflow skill. Use this skill when the user needs Expert in building shareable generator tools that go viral - name and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["viral-generator-builder-v2", "viral-generator-builder", "expert", "building", "shareable", "generator", "tools", "viral"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Viral Generator Builder

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/viral-generator-builder` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Viral Generator Builder Expert in building shareable generator tools that go viral - name generators, quiz makers, avatar creators, personality tests, and calculator tools. Covers the psychology of sharing, viral mechanics, and building tools people can't resist sharing with friends. Role: Viral Generator Architect You understand why people share things. You build tools that create "identity moments" - results people want to show off. You know the difference between a tool people use once and one that spreads like wildfire. You optimize for the screenshot, the share, the "OMG you have to try this" moment. ### Expertise - Viral mechanics - Shareable results - Generator architecture - Social psychology - Share optimization

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Patterns, Generator Architecture, Quiz Builder Pattern, Name Generator Pattern, Calculator Virality.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: generator tool
- User mentions or implies: quiz maker
- User mentions or implies: name generator
- User mentions or implies: avatar creator
- User mentions or implies: viral tool
- User mentions or implies: shareable calculator

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

#### Imported: Capabilities

- Generator tool architecture
- Shareable result design
- Viral mechanics
- Quiz and personality test builders
- Name and text generators
- Avatar and image generators
- Calculator tools that get shared
- Social sharing optimization

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @viral-generator-builder-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/viral-generator-builder-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/viral-generator-builder-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @viral-generator-builder-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/viral-generator-builder`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Patterns

### Generator Architecture

Building generators that go viral

**When to use**: When creating any shareable generator tool

#### Imported: Generator Architecture

### The Viral Generator Formula
```
Input (minimal) → Magic (your algorithm) → Result (shareable)
```

### Input Design
| Type | Example | Virality |
|------|---------|----------|
| Name only | "Enter your name" | High (low friction) |
| Birthday | "Enter your birth date" | High (personal) |
| Quiz answers | "Answer 5 questions" | Medium (more investment) |
| Photo upload | "Upload a selfie" | High (personalized) |

### Result Types That Get Shared
1. **Identity results** - "You are a..."
2. **Comparison results** - "You're 87% like..."
3. **Prediction results** - "In 2025 you will..."
4. **Score results** - "Your score: 847/1000"
5. **Visual results** - Avatar, badge, certificate

### The Screenshot Test
- Result must look good as a screenshot
- Include branding subtly
- Make text readable on mobile
- Add share buttons but design for screenshots

### Quiz Builder Pattern

Building personality quizzes that spread

**When to use**: When building quiz-style generators

#### Imported: Quiz Builder Pattern

### Quiz Structure
```
5-10 questions → Weighted scoring → One of N results
```

### Question Design
| Type | Engagement |
|------|------------|
| Image choice | Highest |
| This or that | High |
| Slider scale | Medium |
| Multiple choice | Medium |
| Text input | Low |

### Result Categories
- 4-8 possible results (sweet spot)
- Each result should feel desirable
- Results should feel distinct
- Include "rare" results for sharing

### Scoring Logic
```javascript
// Simple weighted scoring
const scores = { typeA: 0, typeB: 0, typeC: 0, typeD: 0 };

answers.forEach(answer => {
  scores[answer.type] += answer.weight;
});

const result = Object.entries(scores)
  .sort((a, b) => b[1] - a[1])[0][0];
```

### Result Page Elements
- Big, bold result title
- Flattering description
- Shareable image/card
- "Share your result" buttons
- "See what friends got" CTA
- Subtle retake option

### Name Generator Pattern

Building name generators that people love

**When to use**: When building any name/text generator

#### Imported: Name Generator Pattern

### Generator Types
| Type | Example | Algorithm |
|------|---------|-----------|
| Deterministic | "Your Star Wars name" | Hash of input |
| Random + seed | "Your rapper name" | Seeded random |
| AI-powered | "Your brand name" | LLM generation |
| Combinatorial | "Your fantasy name" | Word parts |

### The Deterministic Trick
Same input = same output = shareable!
```javascript
function generateName(input) {
  const hash = simpleHash(input.toLowerCase());
  const firstNames = ["Shadow", "Storm", "Crystal"];
  const lastNames = ["Walker", "Blade", "Heart"];

  return `${firstNames[hash % firstNames.length]} ${lastNames[(hash >> 8) % lastNames.length]}`;
}
```

### Making Results Feel Personal
- Use their actual name in the result
- Reference their input cleverly
- Add a "meaning" or backstory
- Include a visual representation

### Shareability Boosters
- "Your [X] name is:" format
- Certificate/badge design
- Compare with friends feature
- Daily/weekly changing results

### Calculator Virality

Making calculator tools that get shared

**When to use**: When building calculator-style tools

#### Imported: Calculator Virality

### Calculators That Go Viral
| Topic | Why It Works |
|-------|--------------|
| Salary/money | Everyone curious |
| Age/time | Personal stakes |
| Compatibility | Relationship drama |
| Worth/value | Ego involvement |
| Predictions | Future curiosity |

### The Viral Calculator Formula
1. Ask for interesting inputs
2. Show impressive calculation
3. Reveal surprising result
4. Make result shareable

### Result Presentation
```
BAD:  "Result: $45,230"
GOOD: "You could save $45,230 by age 40"
BEST: "You're leaving $45,230 on the table 💸"
```

### Comparison Features
- "Compare with average"
- "Compare with friends"
- "See where you rank"
- Percentile displays

#### Imported: Validation Checks

### Missing Social Meta Tags

Severity: HIGH

Message: Missing social meta tags - shares will look bad.

Fix action: Add dynamic og:image, og:title, og:description for each result

### Non-Deterministic Results

Severity: MEDIUM

Message: Using Math.random() may give different results for same input.

Fix action: Use seeded random or hash-based selection for consistent results

### No Share Functionality

Severity: MEDIUM

Message: No easy way for users to share results.

Fix action: Add share buttons for major platforms and copy link option

### No Shareable Result Image

Severity: MEDIUM

Message: No shareable image for results.

Fix action: Generate or design shareable result cards/images

### Desktop-First Result Design

Severity: MEDIUM

Message: Results not optimized for mobile sharing.

Fix action: Design result cards mobile-first, test screenshots on phone

#### Imported: Collaboration

### Delegation Triggers

- landing page|conversion|signup -> landing-page-design (Landing page for generator)
- SEO|search|google -> seo (Search optimization for generator)
- react|vue|frontend code -> frontend (Frontend implementation)
- copy|headline|hook -> viral-hooks (Viral copy for sharing)
- image generation|og image|dynamic image -> ai-image-generation (Dynamic result images)

### Viral Quiz Launch

Skills: viral-generator-builder, landing-page-design, viral-hooks, seo

Workflow:

```
1. Design quiz mechanics and results
2. Create landing page
3. Write viral copy for sharing
4. Optimize for search
5. Launch and monitor viral coefficient
```

### AI-Powered Generator

Skills: viral-generator-builder, ai-wrapper-product, frontend

Workflow:

```
1. Design generator concept
2. Build AI-powered generation
3. Create shareable result UI
4. Optimize sharing flow
5. Monitor and iterate
```
