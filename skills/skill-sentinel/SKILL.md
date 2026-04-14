---
name: skill-sentinel
description: "Skill Sentinel workflow skill. Use this skill when the user needs Auditoria e evolucao do ecossistema de skills. Qualidade de codigo, seguranca, custos, gaps, duplicacoes, dependencias e relatorios de saude and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["governance", "audit", "quality", "skill-health", "skill-sentinel", "auditoria", "evolucao", "ecossistema"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Skill Sentinel

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/skill-sentinel` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Skill Sentinel

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Resumo Rapido, Localizacao, Instalacao, Comandos Principais, Auditoria Completa De Todas As Skills.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "auditar skills" or related topics
- When the user mentions "qualidade skills" or related topics
- When the user mentions "verificar skills ecossistema" or related topics
- When the user mentions "saude ecossistema skills" or related topics
- When the user mentions "skills duplicadas" or related topics
- When the user mentions "otimizar skills" or related topics

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

1. python C:\Users\renat\skills\skill-sentinel\scripts\runaudit.py --format json 1.
2. Primeira auditoria do ecossistema: ` python runaudit.py Gera relatorio completo com scores, findings e recomendacoes.
3. Monitorar evolucao ao longo do tempo: python runaudit.py --compare Mostra delta de scores entre auditorias.
4. Validar uma skill antes de deploy: python runaudit.py --skill nome-da-skill Auditoria focada com findings especificos.
5. Identificar proxima skill a criar: python run_audit.py --recommend ` Gap analysis com templates prontos.
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview, playbook, and source summary before loading any upstream support files.

### Imported Workflow Notes

#### Imported: Output Em Json (Para Processamento)

python C:\Users\renat\skills\skill-sentinel\scripts\run_audit.py --format json

#### Imported: Workflows Comuns

**1. Primeira auditoria do ecossistema:**
```
python run_audit.py
```
Gera relatorio completo com scores, findings e recomendacoes.

**2. Monitorar evolucao ao longo do tempo:**
```
python run_audit.py --compare
```
Mostra delta de scores entre auditorias.

**3. Validar uma skill antes de deploy:**
```
python run_audit.py --skill nome-da-skill
```
Auditoria focada com findings especificos.

**4. Identificar proxima skill a criar:**
```
python run_audit.py --recommend
```
Gap analysis com templates prontos.

#### Imported: Overview

Auditoria e evolucao do ecossistema de skills. Qualidade de codigo, seguranca, custos, gaps, duplicacoes, dependencias e relatorios de saude.

#### Imported: How It Works

Meta-agente que monitora, audita e evolui o ecossistema de skills. Analisa
todas as skills em 7 dimensoes, identifica problemas, sugere melhorias
e recomenda novas skills especialistas.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-sentinel to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/skill-sentinel/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/skill-sentinel/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @skill-sentinel using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: Best Practices

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/skill-sentinel`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/analysis_criteria.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/analyzers/__init__.py` |
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

#### Imported: Resumo Rapido

| Area | Script | O que faz |
|------|--------|-----------|
| **Discovery** | `scanner.py` | Descobre todas as skills automaticamente |
| **Qualidade** | `analyzers/code_quality.py` | Complexidade, docstrings, error handling |
| **Seguranca** | `analyzers/security.py` | Secrets, SQL injection, HTTPS |
| **Performance** | `analyzers/performance.py` | API calls, caching, retry |
| **Governanca** | `analyzers/governance_audit.py` | Rate limits, audit log, confirmacoes |
| **Documentacao** | `analyzers/documentation.py` | SKILL.md, triggers, references |
| **Dependencias** | `analyzers/dependencies.py` | requirements.txt, versoes |
| **Cross-Skill** | `analyzers/cross_skill.py` | Duplicacao, padroes compartilhados |
| **Custos** | `cost_optimizer.py` | Tokens, verbosidade, output |
| **Recomendacoes** | `recommender.py` | Gap analysis, novas skills |
| **Relatorio** | `report_generator.py` | Markdown estruturado |
| **Orquestracao** | `run_audit.py` | CLI principal |

#### Imported: Localizacao

```
C:\Users\renat\skills\skill-sentinel\
├── SKILL.md
├── scripts/
│   ├── requirements.txt
│   ├── config.py
│   ├── db.py
│   ├── governance.py
│   ├── scanner.py
│   ├── analyzers/
│   │   ├── code_quality.py
│   │   ├── security.py
│   │   ├── performance.py
│   │   ├── governance_audit.py
│   │   ├── documentation.py
│   │   ├── dependencies.py
│   │   └── cross_skill.py
│   ├── recommender.py
│   ├── cost_optimizer.py
│   ├── report_generator.py
│   └── run_audit.py
├── references/
│   ├── analysis_criteria.md
│   ├── security_patterns.md
│   ├── skill_template.md
│   └── schema.md
└── data/
    ├── sentinel.db
    └── reports/
```

#### Imported: Instalacao

```bash
pip install -r C:\Users\renat\skills\skill-sentinel\scripts\requirements.txt
```

#### Imported: Comandos Principais

```bash

#### Imported: Auditoria Completa De Todas As Skills

python C:\Users\renat\skills\skill-sentinel\scripts\run_audit.py

#### Imported: Auditar Apenas Uma Skill

python C:\Users\renat\skills\skill-sentinel\scripts\run_audit.py --skill instagram

#### Imported: Apenas Recomendacoes De Novas Skills

python C:\Users\renat\skills\skill-sentinel\scripts\run_audit.py --recommend

#### Imported: Comparar Com Auditoria Anterior (Tendencias)

python C:\Users\renat\skills\skill-sentinel\scripts\run_audit.py --compare

#### Imported: Ver Historico De Auditorias

python C:\Users\renat\skills\skill-sentinel\scripts\run_audit.py --history

#### Imported: Descobrir Skills Disponiveis

python C:\Users\renat\skills\skill-sentinel\scripts\scanner.py

#### Imported: Ver Audit Log Do Sentinel

python C:\Users\renat\skills\skill-sentinel\scripts\governance.py

#### Imported: Verificar Banco De Dados

python C:\Users\renat\skills\skill-sentinel\scripts\db.py
```

#### Imported: 1. Qualidade De Codigo (Peso: 20%)

- Complexidade ciclomatica por funcao (limiar: 10)
- Tamanho de funcoes (limiar: 50 linhas)
- Tamanho de arquivos (limiar: 500 linhas)
- Cobertura de docstrings
- Padroes de error handling (bare except, broad except)

#### Imported: 2. Seguranca (Peso: 20%)

- Secrets hardcoded (tokens, passwords, API keys)
- SQL injection (f-strings em queries)
- URLs HTTP inseguras
- Tokens em logs
- Validacao de input

#### Imported: 3. Performance (Peso: 15%)

- Retry com backoff para APIs
- Timeouts configurados
- Reuso de conexoes HTTP
- N+1 queries
- Async/concorrencia

#### Imported: 4. Governanca (Peso: 15%)

- Nivel 0: Nenhuma
- Nivel 1: Action logging
- Nivel 2: Logging + rate limiting
- Nivel 3: Completa (+ confirmacoes 2-step)
- Nivel 4: Avancada (+ alertas e trends)

#### Imported: 5. Documentacao (Peso: 15%)

- SKILL.md com frontmatter (name, description, version)
- Trigger keywords (PT-BR e EN)
- Secoes obrigatorias e recomendadas
- Reference files

#### Imported: 6. Dependencias (Peso: 15%)

- requirements.txt presente
- Versoes pinadas
- Deps importadas vs listadas
- Deps listadas vs importadas

#### Imported: 7. Cross-Skill (Analise Global)

- Modulos duplicados entre skills
- Padroes de Database compartilhados
- Governanca inconsistente
- Oportunidades de extracao

#### Imported: Otimizacao De Custos

Alem das 7 dimensoes, o sentinel analisa impacto de custo:
- Tamanho do SKILL.md (tokens consumidos por ativacao)
- References grandes sem indice
- Output verboso dos scripts
- Ausencia de output JSON estruturado

#### Imported: Gap Analysis E Recomendacoes

O recommender identifica capacidades ausentes no ecossistema comparando
com uma taxonomia de 20 categorias e gera templates de SKILL.md prontos
para novas skills sugeridas.

#### Imported: Governanca Do Sentinel

O proprio sentinel pratica o que prega:
- Todas as auditorias sao registradas em action_log
- Historico de scores em score_history para tendencias
- Relatorios salvos em data/reports/

#### Imported: Formato Do Relatorio

O relatorio gerado em `data/reports/` contem:
1. Resumo executivo (tabela de scores)
2. Tendencias (se houver auditoria anterior)
3. Findings por severidade (critico/alto/medio/baixo/info)
4. Analise por skill (detalhada)
5. Recomendacoes de novas skills
6. Plano de acao priorizado

#### Imported: Referencias

Para detalhes tecnicos, consultar:
- `references/analysis_criteria.md` - Rubricas de scoring
- `references/security_patterns.md` - Padroes de seguranca
- `references/skill_template.md` - Template para novas skills
- `references/schema.md` - Schema do banco de dados

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
