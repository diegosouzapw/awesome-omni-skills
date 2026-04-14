---
name: clarity-gate
description: "Clarity Gate v2.1 workflow skill. Use this skill when the user needs > and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["clarity-gate", "backend", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Francesco Marinoni Moretto"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Clarity Gate v2.1

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/clarity-gate` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Clarity Gate v2.1 Purpose: Pre-ingestion verification system that enforces epistemic quality before documents enter RAG knowledge bases. Produces Clarity-Gated Documents (CGD) compliant with the Clarity Gate Format Specification v2.1. Core Question: "If another LLM reads this document, will it mistake assumptions for facts?" Core Principle: "Detection finds what is; enforcement ensures what should be. In practice: find the missing uncertainty markers before they become confident hallucinations." ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What's New in v2.1, Specifications, Validation Codes, Bundled Scripts, The Key Distinction, Critical Limitation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Before ingesting documents into RAG systems
- Before sharing documents with other AI systems
- After writing specifications, state docs, or methodology descriptions
- When a document contains projections, estimates, or hypotheses
- Before publishing claims that haven't been validated
- When handing off documentation between LLM sessions

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

#### Imported: What's New in v2.1

| Feature | Description |
|---------|-------------|
| **Claim Completion Status** | PENDING/VERIFIED determined by field presence (no explicit status field) |
| **Source Field Semantics** | Actionable source (PENDING) vs. what-was-found (VERIFIED) |
| **Claim ID Format Guidance** | Hash-based IDs preferred, collision analysis for scale |
| **Body Structure Requirements** | HITL Verification Record section mandatory when claims exist |
| **New Validation Codes** | E-ST10, W-ST11, W-HC01, W-HC02, E-SC06 (FORMAT_SPEC); E-TB01-07 (SOT validation) |
| **Bundled Scripts** | `claim_id.py` and `document_hash.py` for deterministic computations |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @clarity-gate to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/clarity-gate/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/clarity-gate/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @clarity-gate using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/clarity-gate`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Specifications

This skill implements and references:

| Specification | Version | Location |
|---------------|---------|----------|
| Clarity Gate Format (Unified) | v2.1 | docs/CLARITY_GATE_FORMAT_SPEC.md |

**Note:** v2.0 unifies CGD and SOT into a single `.cgd.md` format. SOT is now a CGD with an optional `tier:` block.

---

#### Imported: Validation Codes

Clarity Gate defines validation codes for structural and semantic checks per FORMAT_SPEC v2.1:

### HITL Claim Validation (§1.3.2-1.3.3)
| Code | Check | Severity |
|------|-------|----------|
| **W-HC01** | Partial `confirmed-by`/`confirmed-date` fields | WARNING |
| **W-HC02** | Vague source (e.g., "industry reports", "TBD") | WARNING |
| **E-SC06** | Schema error in `hitl-claims` structure | ERROR |

### Body Structure (§1.2.1)
| Code | Check | Severity |
|------|-------|----------|
| **E-ST10** | Missing `## HITL Verification Record` when claims exist | ERROR |
| **W-ST11** | Table rows don't match `hitl-claims` count | WARNING |

### SOT Table Validation (§3.1)
| Code | Check | Severity |
|------|-------|----------|
| **E-TB01** | No `## Verified Claims` section | ERROR |
| **E-TB02** | Table has no data rows | ERROR |
| **E-TB03** | Required columns missing | ERROR |
| **E-TB04** | Column order wrong | ERROR |
| **E-TB05** | Empty cell in required column | ERROR |
| **E-TB06** | Invalid date format in Verified column | ERROR |
| **E-TB07** | Verified date in future (beyond 24h grace) | ERROR |

**Note:** Additional validation codes may be defined in RFC-001 (clarification document) but are not part of the normative FORMAT_SPEC.

---

#### Imported: Bundled Scripts

This skill includes Python scripts for deterministic computations per FORMAT_SPEC.

### scripts/claim_id.py

Computes stable, hash-based claim IDs for HITL tracking (per §1.3.4).

```bash
# Generate claim ID
python scripts/claim_id.py "Base price is $99/mo" "api-pricing/1"
# Output: claim-75fb137a

# Run test vectors
python scripts/claim_id.py --test
```

**Algorithm:**
1. Normalize text (strip + collapse whitespace)
2. Concatenate with location using pipe delimiter
3. SHA-256 hash, take first 8 hex chars
4. Prefix with "claim-"

**Test vectors:**
- `claim_id("Base price is $99/mo", "api-pricing/1")` → `claim-75fb137a`
- `claim_id("The API supports GraphQL", "features/1")` → `claim-eb357742`

### scripts/document_hash.py

Computes document SHA-256 hash per FORMAT_SPEC §2.2-2.4 with full canonicalization.

```bash
# Compute hash
python scripts/document_hash.py my-doc.cgd.md
# Output: 7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730

# Verify existing hash
python scripts/document_hash.py --verify my-doc.cgd.md
# Output: PASS: Hash verified: 7d865e...

# Run normalization tests
python scripts/document_hash.py --test
```

**Algorithm (per §2.2-2.4):**
1. Extract content between opening `---\n` and `<!-- CLARITY_GATE_END -->`
2. Remove `document-sha256` line from YAML frontmatter ONLY (with multiline continuation support)
3. Canonicalize:
   - Strip trailing whitespace per line
   - Collapse 3+ consecutive newlines to 2
   - Normalize final newline (exactly 1 LF)
   - UTF-8 NFC normalization
4. Compute SHA-256

**Cross-platform normalization:**
- BOM removed if present
- CRLF to LF (Windows)
- CR to LF (old Mac)
- Boundary detection (prevents hash computation on content outside CGD structure)
- Whitespace variations produce identical hashes (deterministic across platforms)

---

#### Imported: The Key Distinction

Existing tools like UnScientify and HedgeHunter (CoNLL-2010) **detect** uncertainty markers already present in text ("Is uncertainty expressed?").

Clarity Gate **enforces** their presence where epistemically required ("Should uncertainty be expressed but isn't?").

| Tool Type | Question | Example |
|-----------|----------|---------|
| **Detection** | "Does this text contain hedges?" | UnScientify/HedgeHunter find "may", "possibly" |
| **Enforcement** | "Should this claim be hedged but isn't?" | Clarity Gate flags "Revenue will be $50M" |

---

#### Imported: Critical Limitation

> **Clarity Gate verifies FORM, not TRUTH.**
>
> This skill checks whether claims are properly marked as uncertain—it cannot verify if claims are actually true. 
>
> **Risk:** An LLM can hallucinate facts INTO a document, then "pass" Clarity Gate by adding source markers to false claims.
>
> **Solution:** HITL (Human-In-The-Loop) verification is **MANDATORY** before declaring PASS.

---

#### Imported: The 9 Verification Points

### Relationship to Spec Suite

The 9 Verification Points guide **semantic review** — content quality checks that require judgment (human or AI). They answer questions like "Should this claim be hedged?" and "Are these numbers consistent?"

When review completes, output a CGD file conforming to CLARITY_GATE_FORMAT_SPEC.md. The C/S rules in CLARITY_GATE_FORMAT_SPEC.md validate **file structure**, not semantic content.

**The connection:**
1. Semantic findings (9 points) determine what issues exist
2. Issues are recorded in CGD state fields (`clarity-status`, `hitl-status`, `hitl-pending-count`)
3. State consistency is enforced by structural rules (C7-C10)

*Example: If Point 5 (Data Consistency) finds conflicting numbers, you'd mark `clarity-status: UNCLEAR` until resolved. Rule C7 then ensures you can't claim `REVIEWED` while still `UNCLEAR`.*

---

### Epistemic Checks (Core Focus: Points 1-4)

**1. HYPOTHESIS vs FACT LABELING**
Every claim must be clearly marked as validated or hypothetical.

| Fails | Passes |
|-------|--------|
| "Our architecture outperforms competitors" | "Our architecture outperforms competitors [benchmark data in Table 3]" |
| "The model achieves 40% improvement" | "The model achieves 40% improvement [measured on dataset X]" |

**Fix:** Add markers: "PROJECTED:", "HYPOTHESIS:", "UNTESTED:", "(estimated)", "~", "?"

---

**2. UNCERTAINTY MARKER ENFORCEMENT**
Forward-looking statements require qualifiers.

| Fails | Passes |
|-------|--------|
| "Revenue will be $50M by Q4" | "Revenue is **projected** to be $50M by Q4" |
| "The feature will reduce churn" | "The feature is **expected** to reduce churn" |

**Fix:** Add "projected", "estimated", "expected", "designed to", "intended to"

---

**3. ASSUMPTION VISIBILITY**
Implicit assumptions that affect interpretation must be explicit.

| Fails | Passes |
|-------|--------|
| "The system scales linearly" | "The system scales linearly [assuming <1000 concurrent users]" |
| "Response time is 50ms" | "Response time is 50ms [under standard load conditions]" |

**Fix:** Add bracketed conditions: "[assuming X]", "[under conditions Y]", "[when Z]"

---

**4. AUTHORITATIVE-LOOKING UNVALIDATED DATA**
Tables with specific percentages and checkmarks look like measured data.

**Red flag:** Tables with specific numbers (89%, 95%, 100%) without sources

**Fix:** Add "(guess)", "(est.)", "?" to numbers. Add explicit warning: "PROJECTED VALUES - NOT MEASURED"

---

### Data Quality Checks (Complementary: Points 5-7)

**5. DATA CONSISTENCY**
Scan for conflicting numbers, dates, or facts within the document.

**Red flag:** "500 users" in one section, "750 users" in another

**Fix:** Reconcile conflicts or explicitly note the discrepancy with explanation.

---

**6. IMPLICIT CAUSATION**
Claims that imply causation without evidence.

**Red flag:** "Shorter prompts improve response quality" (plausible but unproven)

**Fix:** Reframe as hypothesis: "Shorter prompts MAY improve response quality (hypothesis, not validated)"

---

**7. FUTURE STATE AS PRESENT**
Describing planned/hoped outcomes as if already achieved.

**Red flag:** "The system processes 10,000 requests per second" (when it hasn't been built)

**Fix:** Use future/conditional: "The system is DESIGNED TO process..." or "TARGET: 10,000 rps"

---

### Verification Routing (Points 8-9)

**8. TEMPORAL COHERENCE**
Document dates and timestamps must be internally consistent and plausible.

| Fails | Passes |
|-------|--------|
| "Last Updated: December 2024" (when current is 2026) | "Last Updated: January 2026" |
| v1.0.0 dated 2024-12-23, v1.1.0 dated 2024-12-20 | Versions in chronological order |

**Sub-checks:**
1. Document date vs current date
2. Internal chronology (versions, events in order)
3. Reference freshness ("current", "now", "today" claims)

**Fix:** Update dates, add "as of [date]" qualifiers, flag stale claims

---

**9. EXTERNALLY VERIFIABLE CLAIMS**
Specific numbers that could be fact-checked should be flagged for verification.

| Type | Example | Risk |
|------|---------|------|
| Pricing | "Costs ~$0.005 per call" | API pricing changes |
| Statistics | "Papers average 15-30 equations" | May be wildly off |
| Rates/ratios | "40% of researchers use X" | Needs citation |
| Competitor claims | "No competitor offers Y" | May be outdated |

**Fix options:**
1. Add source with date
2. Add uncertainty marker
3. Route to HITL or external search
4. Generalize ("low cost" instead of "$0.005")

---

#### Imported: The Verification Hierarchy

```
Claim Extracted --> Does Source of Truth Exist?
                           |
           +---------------+---------------+
           YES                             NO
           |                               |
   Tier 1: Automated              Tier 2: HITL
   Consistency & Verification     Two-Round Verification
           |                               |
   PASS / BLOCK                   Round A → Round B → APPROVE / REJECT
```

### Tier 1: Automated Verification

**A. Internal Consistency**
- Figure vs. Text contradictions
- Abstract vs. Body mismatches
- Table vs. Prose conflicts
- Numerical consistency

**B. External Verification (Extension Interface)**
- User-provided connectors to structured sources
- Financial systems, Git commits, CRM, etc.

### Tier 2: Two-Round HITL Verification — MANDATORY

**Round A: Derived Data Confirmation**
- Claims from sources found in session
- Human confirms interpretation, not truth

**Round B: True HITL Verification**
- Claims needing actual verification
- No source found, human's own data, extrapolations

---

#### Imported: CGD Output Format

When producing a Clarity-Gated Document, use this format per CLARITY_GATE_FORMAT_SPEC.md v2.1:

```yaml
---
clarity-gate-version: 2.1
processed-date: 2026-01-12
processed-by: Claude + Human Review
clarity-status: CLEAR
hitl-status: REVIEWED
hitl-pending-count: 0
points-passed: 1-9
rag-ingestable: true          # computed by validator - do not set manually
document-sha256: 7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730
hitl-claims:
  - id: claim-75fb137a
    text: "Revenue projection is $50M"
    value: "$50M"
    source: "Q3 planning doc"
    location: "revenue-projections/1"
    round: B
    confirmed-by: Francesco
    confirmed-date: 2026-01-12
---

# Document Title

[Document body with epistemic markers applied]

Claims like "Revenue will be $50M" become "Revenue is **projected** to be $50M *(unverified projection)*"

---

#### Imported: HITL Verification Record

### Round A: Derived Data Confirmation
- Claim 1 (source) ✓
- Claim 2 (source) ✓

### Round B: True HITL Verification
| # | Claim | Status | Verified By | Date |
|---|-------|--------|-------------|------|
| 1 | [claim] | ✓ Confirmed | [name] | [date] |

<!-- CLARITY_GATE_END -->
Clarity Gate: CLEAR | REVIEWED
```

**Required CGD Elements (per spec):**
- YAML frontmatter with all required fields:
  - `clarity-gate-version` — Tool version (no "v" prefix)
  - `processed-date` — YYYY-MM-DD format
  - `processed-by` — Processor name
  - `clarity-status` — CLEAR or UNCLEAR
  - `hitl-status` — PENDING, REVIEWED, or REVIEWED_WITH_EXCEPTIONS
  - `hitl-pending-count` — Integer ≥ 0
  - `points-passed` — e.g., `1-9` or `1-4,7,9`
  - `hitl-claims` — List of verified claims (may be empty `[]`)
- End marker (HTML comment + status line):
  ```
  <!-- CLARITY_GATE_END -->
  Clarity Gate: <clarity-status> | <hitl-status>
  ```
- HITL verification record (if status is REVIEWED)

**Optional/Computed Fields:**
- `rag-ingestable` — **Computed by validators**, not manually set. Shows `true` only when `CLEAR | REVIEWED` with no exclusion blocks.
- `document-sha256` — Required. 64-char lowercase hex hash for integrity verification. See spec §2 for computation rules.
- `exclusions-coverage` — Optional. Fraction of body inside exclusion blocks (0.0–1.0).

**Escape Mechanism:** To write about markers like `*(estimated)*` without triggering parsing, wrap in backticks: `` `*(estimated)*` ``

### Claim Completion Status (v2.1)

Claim verification status is determined by field **presence**, not an explicit status field:

| State | `confirmed-by` | `confirmed-date` | Meaning |
|-------|----------------|------------------|----------|
| **PENDING** | absent | absent | Awaiting human verification |
| **VERIFIED** | present | present | Human has confirmed |
| *(invalid)* | present | absent | W-HC01: partial fields |
| *(invalid)* | absent | present | W-HC01: partial fields |

**Why no explicit status field?** Field presence is self-enforcing—you can't accidentally set status without providing who/when.

### Source Field Semantics (v2.1)

The `source` field meaning changes based on claim state:

| State | `source` Contains | Example |
|-------|-------------------|----------|
| **PENDING** | Where to verify (actionable) | `"Check Q3 planning doc"` |
| **VERIFIED** | What was found (evidence) | `"Q3 planning doc, page 12"` |

**Vague source detection (W-HC02):** Sources like `"industry reports"`, `"research"`, `"TBD"` trigger warnings.

### Claim ID Format (v2.1)

**General pattern:** `claim-[a-z0-9._-]{1,64}` (alphanumeric, dots, underscores, hyphens)

| Approach | Pattern | Example | Use Case |
|----------|---------|---------|----------|
| **Hash-based** (preferred) | `claim-[a-f0-9]{8,}` | `claim-75fb137a` | Deterministic, collision-resistant |
| **Sequential** | `claim-[0-9]+` | `claim-1`, `claim-2` | Simple documents |
| **Semantic** | `claim-[a-z0-9-]+` | `claim-revenue-q3` | Human-friendly |

**Collision probability:** At 1,000 claims with 8-char hex IDs: ~0.012%. For >1,000 claims, use 12+ hex characters.

**Recommendation:** Use hash-based IDs generated by `scripts/claim_id.py` for consistency and collision resistance.

---

#### Imported: Exclusion Blocks

When content cannot be resolved (no SME available, legacy prose, etc.), mark it as excluded rather than leaving it ambiguous:

```markdown
<!-- CG-EXCLUSION:BEGIN id=auth-legacy-1 -->
Legacy authentication details that require SME review...
<!-- CG-EXCLUSION:END id=auth-legacy-1 -->
```

**Rules:**
- IDs must match: `[A-Za-z0-9][A-Za-z0-9._-]{0,63}`
- No nesting or overlapping blocks
- Each ID used only once
- Requires `hitl-status: REVIEWED_WITH_EXCEPTIONS`
- Must document `exceptions-reason` and `exceptions-ids` in frontmatter

**Important:** Documents with exclusion blocks are **not RAG-ingestable**. They're rejected entirely (no partial ingestion).

See CLARITY_GATE_FORMAT_SPEC.md §4 for complete rules.

---

#### Imported: SOT Validation

When validating a Source of Truth file, the skill checks both **format compliance** (per CLARITY_GATE_FORMAT_SPEC.md) and **content quality** (the 9 points).

### Format Compliance (Structural Rules)

SOT documents are CGDs with a `tier:` block. They require a `## Verified Claims` section with a valid table.

| Code | Check | Severity |
|------|-------|----------|
| E-TB01 | No `## Verified Claims` section | ERROR |
| E-TB02 | Table has no data rows | ERROR |
| E-TB03 | Required columns missing (Claim, Value, Source, Verified) | ERROR |
| E-TB04 | Column order wrong (Claim not first or Verified not last) | ERROR |
| E-TB05 | Empty cell in required column | ERROR |
| E-TB06 | Invalid date format in Verified column | ERROR |
| E-TB07 | Verified date in future (beyond 24h grace) | ERROR |

### Content Quality (9 Points)

The 9 Verification Points apply to SOT content:

| Point | SOT Application |
|-------|-----------------|
| 1-4 | Check claims in `## Verified Claims` are actually verified |
| 5 | Check for conflicting values across tables |
| 6 | Check claims don't imply unsupported causation |
| 7 | Check table doesn't state futures as present |
| 8 | Check dates are chronologically consistent |
| 9 | Flag specific numbers for external check |

### SOT-Specific Requirements

- **Tier block required:** SOT is a CGD with `tier:` block containing `level`, `owner`, `version`, `promoted-date`, `promoted-by`
- **Structured claims table:** `## Verified Claims` section with columns: Claim, Value, Source, Verified
- **Table outside exclusions:** The verified claims table must NOT be inside an exclusion block
- **Staleness markers:** Use `[STABLE]`, `[CHECK]`, `[VOLATILE]`, `[SNAPSHOT]` in content
  - `[STABLE]` — Safe to cite without rechecking
  - `[CHECK]` — Verify before citing
  - `[VOLATILE]` — Changes frequently; always verify
  - `[SNAPSHOT]` — Point-in-time data; include date when citing

---

#### Imported: Output Format

After running Clarity Gate, report:

```

#### Imported: Clarity Gate Results

**Document:** [filename]
**Issues Found:** [number]

### Critical (will cause hallucination)
- [issue + location + fix]

### Warning (could cause equivocation)  
- [issue + location + fix]

### Temporal (date/time issues)
- [issue + location + fix]

### Externally Verifiable Claims
| # | Claim | Type | Suggested Verification |
|---|-------|------|------------------------|
| 1 | [claim] | Pricing | [where to verify] |

---

#### Imported: Round A: Derived Data Confirmation

- [claim] ([source])

Reply "confirmed" or flag any I misread.

---

#### Imported: Round B: HITL Verification Required

| # | Claim | Why HITL Needed | Human Confirms |
|---|-------|-----------------|----------------|
| 1 | [claim] | [reason] | [ ] True / [ ] False |

---

**Would you like me to produce an annotated CGD version?**

---

**Verdict:** PENDING CONFIRMATION
```

---

#### Imported: Severity Levels

| Level | Definition | Action |
|-------|------------|--------|
| **CRITICAL** | LLM will likely treat hypothesis as fact | Must fix before use |
| **WARNING** | LLM might misinterpret | Should fix |
| **TEMPORAL** | Date/time inconsistency detected | Verify and update |
| **VERIFIABLE** | Specific claim that could be fact-checked | Route to HITL or external search |
| **ROUND A** | Derived from witnessed source | Quick confirmation |
| **ROUND B** | Requires true verification | Cannot pass without confirmation |
| **PASS** | Clearly marked, no ambiguity, verified | No action needed |

---

#### Imported: Quick Scan Checklist

| Pattern | Action |
|---------|--------|
| Specific percentages (89%, 73%) | Add source or mark as estimate |
| Comparison tables | Add "PROJECTED" header |
| "Achieves", "delivers", "provides" | Use "designed to", "intended to" if not validated |
| Checkmarks | Verify these are confirmed |
| "100%" anything | Almost always needs qualification |
| "Last Updated: [date]" | Check against current date |
| Version numbers with dates | Verify chronological order |
| "$X.XX" or "~$X" (pricing) | Flag for external verification |
| "averages", "typically" | Flag for source/citation |
| Competitor capability claims | Flag for external verification |

---

#### Imported: What This Skill Does NOT Do

- Does not classify document types (use Stream Coding for that)
- Does not restructure documents 
- Does not add deep links or references
- Does not evaluate writing quality
- **Does not check factual accuracy autonomously** (requires HITL)

---

#### Imported: Changelog

### v2.1.3 (2026-03-02)
- **FIXED:** `document_hash.py` now implements full FORMAT_SPEC §2.1-2.4 compliance
- **FIXED:** Fence-aware end marker detection (Quine Protection per §2.3/§8.5)
- **FIXED:** All 4 deployment copies converged to single canonical implementation
- **ADDED:** `canonicalize()` function: trailing whitespace stripping, newline collapsing, NFC normalization
- **ADDED:** YAML-aware `document-sha256` removal with multiline continuation support (§2.2)
- **ADDED:** Fence-tracking test vectors (7 new tests, 15 total)

### v2.1.0 (2026-01-27)
- **ADDED:** Claim Completion Status semantics (PENDING/VERIFIED by field presence)
- **ADDED:** Source Field Semantics (actionable vs. what-was-found)
- **ADDED:** Claim ID Format guidance with collision analysis
- **ADDED:** Body Structure Requirements (HITL Verification Record mandatory when claims exist)
- **ADDED:** New validation codes: E-ST10, W-ST11, W-HC01, W-HC02, E-SC06 (FORMAT_SPEC §1.2-1.3)
- **ADDED:** Bundled scripts: `claim_id.py`, `document_hash.py`
- **UPDATED:** References to FORMAT_SPEC v2.1
- **UPDATED:** CGD output example to version 2.1

### v2.0.0 (2026-01-13)
- **ADDED:** agentskills.io compliant YAML frontmatter
- **ADDED:** Clarity Gate Format Specification v2.0 compliance (unified CGD/SOT)
- **ADDED:** SOT validation support with E-TB* error codes
- **ADDED:** Validation rules mapping (9 points → rule codes)
- **ADDED:** CGD output format template with `<!-- CLARITY_GATE_END -->` markers
- **ADDED:** Quine Protection note (§2.3 fence-aware marker detection)
- **ADDED:** Redacted Export feature (§8.11)
- **UPDATED:** `hitl-claims` format to v2.0 schema (id, text, value, source, location, round)
- **UPDATED:** End marker format to HTML comment style
- **UPDATED:** Unified format spec v2.0 (single `.cgd.md` extension)
- **RESTRUCTURED:** For multi-platform skill discovery

### v1.6 (2025-12-31)
- Added Two-Round HITL verification system
- Round A: Derived Data Confirmation
- Round B: True HITL Verification

### v1.5 (2025-12-28)
- Added Point 8: Temporal Coherence
- Added Point 9: Externally Verifiable Claims

### v1.4 (2025-12-23)
- Added CGD annotation output mode

### v1.3 (2025-12-21)
- Restructured points into Epistemic (1-4) and Data Quality (5-7)

### v1.2 (2025-12-21)
- Added Source of Truth request step

### v1.1 (2025-12-21)
- Added HITL Fact Verification (mandatory)

### v1.0 (2025-11)
- Initial release with 6-point verification

---

**Version:** 2.1.3
**Spec Version:** 2.1
**Author:** Francesco Marinoni Moretto
**License:** CC-BY-4.0
