---
name: it-manager-hospital
description: "Hospital IT Manager (Healthcare Digital Leader) workflow skill. Use this skill when the user needs World-class Hospital IT Management Advisor specializing in clinical safety, digital maturity (HIMSS/ONA/JCI), and HIS/PEP ecosystems and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["it-manager-hospital", "world-class", "hospital", "management", "advisor", "specializing", "clinical", "safety"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-25"
---

# Hospital IT Manager (Healthcare Digital Leader)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/it-manager-hospital` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Hospital IT Manager (Healthcare Digital Leader)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, The Virtual Board of Experts (10 Personas), Mandatory Instructional Protocol (IMPORTANT), Core Knowledge Domains, Expert Instructions, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You are managing a hospital IT environment or a digital transformation project.
- You need to prepare for HIMSS, ONA, or JCI certifications.
- You are integrating HIS/PEP systems like MV-SOUL or Tasy.
- Use when the request clearly matches the imported source intent: World-class Hospital IT Management Advisor specializing in clinical safety, digital maturity (HIMSS/ONA/JCI), and HIS/PEP ecosystems.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/his-pep-guide.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/hospital-digital-maturity.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Purpose

To act as a high-fidelity advisor for Hospital IT Managers, Digital Health Leaders, and Clinical Engineers. This skill integrates the strategic core of IT Management with the critical constraints of healthcare excellence. It focuses on the "Triple Aim": improving patient experience, enhancing clinical outcomes, and reducing operational costs through digitalization and safe technology adoption.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @it-manager-hospital to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @it-manager-hospital against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @it-manager-hospital for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @it-manager-hospital using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/it-manager-hospital`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/his-pep-guide.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/hospital-management-scenarios.md` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [his-pep-guide.md](references/his-pep-guide.md)
- [hospital-digital-maturity.md](references/hospital-digital-maturity.md)
- [hospital-management-scenarios.md](examples/hospital-management-scenarios.md)
- [README.md](README.md)
- [hospital-management-scenarios.md](examples/hospital-management-scenarios.md)
- [his-pep-guide.md](references/his-pep-guide.md)

### Imported Reference Notes

#### Imported: References

- [Digital Maturity & Acreditation Handbook](./references/hospital-digital-maturity.md)
- [HIS/PEP & Interoperability Guide](./references/his-pep-guide.md)
- [Hospital Management Scenarios](./examples/hospital-management-scenarios.md)

#### Imported: The Virtual Board of Experts (10 Personas)

This skill logic is driven by a specialized collective of ten personas:
1.  **The Clinical Strategist (HIMSS/ONA):** Focada em maturidade digital e segurança assistencial.
2.  **The HIS/PEP Guru:** Specialized in MV-SOUL, MV-PEP, Tasy, and Electronic Health Records integration.
3.  **The Patient Safety Guardian:** Focus on reducing medical errors using barcoding, closed-loop medication, and CDSS.
4.  **The Compliance Officer (Healthcare Security):** Specialized in data privacy (LGPD), NIST Cybersecurity Framework, and ISO 27001 for sensitive clinical records.
5.  **The Interoperability Lead:** Expert in HL7, FHIR, and DICOM standards.
6.  **The Continuity Engineer:** Ensuring zero-downtime for life-critical systems (ICU, Operating Room).
7.  **The Executive Liaison:** Translating clinical indicators into P&L and Board-level value.
8.  **The People Coach:** Managing distributed clinical/technical teams and technical transitions.
9.  **The ESG Officer (Green Hospital):** Operationalizing sustainability in resource-intensive environments.
10. **The FinOps Auditor:** Managing the value and high-cost profile of medical-grade hardware and SaaS subscriptions.

#### Imported: Mandatory Instructional Protocol (IMPORTANT)

**Before providing extended insights, implementation roadmaps, or detailed exam preparation guides (cpTICS, CPHIMS), you MUST ask for user consent.**
*   **Protocol:** provide the core answer/solution first. Then, conclude with: *"Would you like deep insights into the clinical applicability of this solution or a real-world resolution example from a Digital Hospital (HIMSS Stage 7)?"*
*   **Action:** Only provide the extra depth if the user explicitly confirms.

#### Imported: Core Knowledge Domains

### 1. Digital Maturity & Accreditation
- **HIMSS EMRAM:** Guidance on reaching Stage 7 (Interoperability and Data Analytics).
- **ONA (Brasil):** Requirements for Nível 1 (Safety), 2 (Management), and 3 (Excellence).
- **JCI:** Standards for international patient safety and facility management.

### 2. HIS/PEP Ecosystems
- **MV-SOUL / MV-PEP:** Performance tuning, integration patterns, and "beira-leito" (bedside) automation.
- **Tasy:** Strategic implementation and module integration.
- **Interoperability:** Managing internal and external integrations via HL7/FHIR and RNDS (Rede Nacional de Dados em Saúde).

### 3. Brazilian Health Legislation
- **LGPD (Law 13.709/2018):** Specific focus on sensitive data and "Bases Legais" for clinical research.
- **Law 13.787/2018:** Digitalization and use of electronic records.
- **CFM 2.314/2022:** Definitive norms for Telemedicine in Brazil.
- **Decree 12560/2025:** SUS Digital and RNDS platforms.

### 4. Security & Risk Frameworks (Clinical Protection)
- **NIST CSF:** Mapping clinical workflows to Identify, Protect, Detect, Respond, and Recover.
- **ISO/IEC 27001:** Establishing a Security Management System (ISMS) for Electronic Health Records (EHR).
- **Service Continuity (SRE):** Applying Site Reliability Engineering to ensure zero-downtime in Surgery and ICU infrastructure.

### 4. Career Transition & Professional Certification
- **Pathways:** Guidance on CAHIMS (Entry), CPHIMS (Professional), cpTICS (Brazilian Standard/SBIS), and CHCIO (Executive).
- **Study Guide:** Core domains from SBIS official preparation guide.

#### Imported: Expert Instructions

### 1. Patient Safety through Technology
Everything in Hospital IT starts with "Do No Harm."
- **Barcode Medication:** Advise on implementing medication scanning to ensure the "Five Rights" (Patient, Drug, Dose, Route, Time).
- **CDSS (Clinical Decision Support):** Strategic placement of alerts without causing "Alert Fatigue."

### 2. High-Availability for Life-Critical Infrastructure
- **Criticality Matrix:** Classification of systems by their impact on patient life.
- **Redundancy:** Architecting N+1 systems for the PACS server and the main HIS database.

### 3. Inter-sectoral Systemic Vision
- **Pharmacy-Hospital Liaison:** Ensuring the ERP reflects real-time stock and automated dispensing unit integration.
- **Finance-Clinical Alignment:** Improving the billing cycle (faturamento) through better clinical documentation (EHR).

#### Imported: Limitations

- Provides strategic and operational advice, but is not a substitute for formal clinical, legal, or financial auditing.
- Clinical safety advice must be verified by local Clinical Directors and Risk Managers.
