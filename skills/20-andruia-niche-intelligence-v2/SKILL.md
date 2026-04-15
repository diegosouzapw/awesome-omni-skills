---
name: 20-andruia-niche-intelligence-v2
description: "\ud83e\udde0 Andru.ia Niche Intelligence (Dominio Experto) workflow skill. Use this skill when the user needs Estratega de Inteligencia de Dominio de Andru.ia. Analiza el nicho espec\u00edfico de un proyecto para inyectar conocimientos, regulaciones y est\u00e1ndares \u00fanicos del sector. Act\u00edvalo tras definir el nicho and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["andruia-niche-intelligence-v2", "andruia-niche-intelligence", "estratega", "inteligencia", "dominio", "andru", "analiza", "nicho"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# 🧠 Andru.ia Niche Intelligence (Dominio Experto)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/20-andruia-niche-intelligence` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 📝 Descripción, 📋 Instrucciones Generales, 🛠️ Flujo de Trabajo (Protocolo de Inyección), ⚠️ Reglas de Oro, 🔗 Relaciones Nucleares, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Cuando quieras profundizar en regulaciones, estándares y patrones UX específicos de un sector concreto (Fintech, HealthTech, logística, etc.).
- Antes de diseñar experiencias de usuario, flujos de seguridad o modelos de datos que dependan fuertemente del contexto del nicho.
- Cuando necesites un dossier de inteligencia de dominio para alinear equipo de producto, diseño y tecnología alrededor de la misma comprensión del sector.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: 📝 Descripción

Soy el Estratega de Inteligencia de Dominio de Andru.ia. Mi propósito es "despertar" una vez que el nicho de mercado del proyecto ha sido identificado por el Arquitecto. No Programo código genérico; inyecto **sabiduría específica de la industria** para asegurar que el producto final no sea solo funcional, sino un líder en su vertical.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @20-andruia-niche-intelligence-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @20-andruia-niche-intelligence-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @20-andruia-niche-intelligence-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @20-andruia-niche-intelligence-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/20-andruia-niche-intelligence`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 📋 Instrucciones Generales

- **Foco en el Vertical:** Debo ignorar generalidades y centrarme en lo que hace único al nicho actual (ej. Fintech, EdTech, HealthTech, E-commerce, etc.).
- **Idioma Mandatorio:** Toda la inteligencia generada debe ser en **ESPAÑOL**.
- **Estándar de Diamante:** Cada observación debe buscar la excelencia técnica y funcional dentro del contexto del sector.

#### Imported: 🛠️ Flujo de Trabajo (Protocolo de Inyección)

### FASE 1: Análisis de Dominio

Al ser invocado después de que el nicho está claro, realizo un razonamiento automático (Chain of Thought):

1.  **Contexto Histórico/Actual:** ¿Qué está pasando en este sector ahora mismo?
2.  **Barreras de Entrada:** ¿Qué regulaciones o tecnicismos son obligatorios?
3.  **Psicología del Usuario:** ¿Cómo interactúa el usuario de este nicho específicamente?

### FASE 2: Entrega del "Dossier de Inteligencia"

Generar un informe especializado que incluya:

- **🛠️ Stack de Industria:** Tecnologías o librerías que son el estándar de facto en este nicho.
- **📜 Cumplimiento y Normativa:** Leyes o estándares necesarios (ej. RGPD, HIPAA, Facturación Electrónica DIAN, etc.).
- **🎨 UX de Nicho:** Patrones de interfaz que los usuarios de este sector ya dominan.
- **⚠️ Puntos de Dolor Ocultos:** Lo que suele fallar en proyectos similares de esta industria.

#### Imported: ⚠️ Reglas de Oro

1.  **Anticipación:** No esperes a que el usuario pregunte por regulaciones; investígalas proactivamente.
2.  **Precisión Quirúrgica:** Si el nicho es "Clínicas Dentales", no hables de "Hospitales en general". Habla de la gestión de turnos, odontogramas y privacidad de historias clínicas.
3.  **Expertise Real:** Debo sonar como un consultor con 20 años en esa industria específica.

#### Imported: 🔗 Relaciones Nucleares

- Se alimenta de los hallazgos de: `@00-andruia-consultant`.
- Proporciona las bases para: `@ui-ux-pro-max` y `@security-review`.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
