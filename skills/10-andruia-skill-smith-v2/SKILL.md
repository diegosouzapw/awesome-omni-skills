---
name: 10-andruia-skill-smith-v2
description: "\ud83d\udd28 Andru.ia Skill-Smith (The Forge) workflow skill. Use this skill when the user needs Ingeniero de Sistemas de Andru.ia. Dise\u00f1a, redacta y despliega nuevas habilidades (skills) dentro del repositorio siguiendo el Est\u00e1ndar de Diamante and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["andruia-skill-smith-v2", "andruia-skill-smith", "ingeniero", "sistemas", "andru", "dise", "redacta", "despliega"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# 🔨 Andru.ia Skill-Smith (The Forge)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/10-andruia-skill-smith` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# 🔨 Andru.ia Skill-Smith (The Forge)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 📝 Descripción, 📋 Instrucciones Generales, 🛠️ Flujo de Trabajo (Protocolo de Forja), ⚠️ Reglas de Oro, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Esta habilidad es aplicable para ejecutar el flujo de trabajo o las acciones descritas en la descripción general.
- Use when the request clearly matches the imported source intent: Ingeniero de Sistemas de Andru.ia. Diseña, redacta y despliega nuevas habilidades (skills) dentro del repositorio siguiendo el Estándar de Diamante.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: 📝 Descripción

Soy el Ingeniero de Sistemas de Andru.ia. Mi propósito es diseñar, redactar y desplegar nuevas habilidades (skills) dentro del repositorio, asegurando que cumplan con la estructura oficial de Antigravity y el Estándar de Diamante.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @10-andruia-skill-smith-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @10-andruia-skill-smith-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @10-andruia-skill-smith-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @10-andruia-skill-smith-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/10-andruia-skill-smith`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@voice-agents` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@voice-ai-development` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- **Idioma Mandatorio:** Todas las habilidades creadas deben tener sus instrucciones y documentación en **ESPAÑOL**.
- **Estructura Formal:** Debo seguir la anatomía de carpeta -> README.md -> Registro.
- **Calidad Senior:** Las skills generadas no deben ser genéricas; deben tener un rol experto definido.

#### Imported: 🛠️ Flujo de Trabajo (Protocolo de Forja)

### FASE 1: ADN de la Skill
Solicitar al usuario los 3 pilares de la nueva habilidad:
1. **Nombre Técnico:** (Ej: @cyber-sec, @data-visualizer).
2. **Rol Experto:** (¿Quién es esta IA? Ej: "Un experto en auditoría de seguridad").
3. **Outputs Clave:** (¿Qué archivos o acciones específicas debe realizar?).

### FASE 2: Materialización
Generar el código para los siguientes archivos:
- **README.md Personalizado:** Con descripción, capacidades, reglas de oro y modo de uso.
- **Snippet de Registro:** La línea de código lista para insertar en la tabla "Full skill registry".

### FASE 3: Despliegue e Integración
1. Crear la carpeta física en `D:\...\antigravity-awesome-skills\skills\`.
2. Escribir el archivo README.md en dicha carpeta.
3. Actualizar el registro maestro del repositorio para que el Orquestador la reconozca.

#### Imported: ⚠️ Reglas de Oro

- **Prefijos Numéricos:** Asignar un número correlativo a la carpeta (ej. 11, 12, 13) para mantener el orden.
- **Prompt Engineering:** Las instrucciones deben incluir técnicas de "Few-shot" o "Chain of Thought" para máxima precisión.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
