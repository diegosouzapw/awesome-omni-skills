---
name: agent-orchestrator
description: "Agent Orchestrator workflow skill. Use this skill when the user needs Meta-skill que orquestra todos os agentes do ecossistema. Scan automatico de skills, match por capacidades, coordenacao de workflows multi-skill e registry management and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["orchestration", "multi-agent", "workflow", "automation", "agent-orchestrator", "meta-skill", "que", "orquestra"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Agent Orchestrator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/agent-orchestrator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Agent Orchestrator

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Principio: Zero Intervencao Manual, Passo 1: Auto-Discovery (Varredura), Passo 2: Match De Skills, Passo 3: Orquestracao (Se Matched >= 2), Passo Rapido (Atalho).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to agent orchestrator
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: Meta-skill que orquestra todos os agentes do ecossistema. Scan automatico de skills, match por capacidades, coordenacao de workflows multi-skill e registry management.
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

1. Execute estes passos ANTES de processar qualquer request do usuario.
2. Os scripts usam paths relativos automaticamente - funciona de qualquer diretorio.
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview, playbook, and source summary before loading any upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the checklist, rubric, and expected evidence for the task.

### Imported Workflow Notes

#### Imported: Workflow Obrigatorio (Toda Solicitacao)

Execute estes passos ANTES de processar qualquer request do usuario.
Os scripts usam paths relativos automaticamente - funciona de qualquer diretorio.

#### Imported: Overview

Meta-skill que orquestra todos os agentes do ecossistema. Scan automatico de skills, match por capacidades, coordenacao de workflows multi-skill e registry management.

#### Imported: How It Works

Meta-skill que funciona como camada central de decisao e coordenacao para todo
o ecossistema de skills. Faz varredura automatica, identifica agentes relevantes
e orquestra multiplos skills para tarefas complexas.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agent-orchestrator to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/agent-orchestrator/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/agent-orchestrator/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @agent-orchestrator using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/agent-orchestrator`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/capability-taxonomy.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/match_skills.py` |
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

#### Imported: Detalhes Em `References/Orchestration-Patterns.Md`

---

#### Imported: Principio: Zero Intervencao Manual

- **SEMPRE faz varredura** antes de processar qualquer solicitacao
- Novas skills sao **auto-detectadas e incluidas** ao criar SKILL.md em qualquer subpasta
- Skills removidas sao **auto-excluidas** do registry
- Nenhum comando manual e necessario para registrar novas skills

---

#### Imported: Passo 1: Auto-Discovery (Varredura)

```bash
python agent-orchestrator/scripts/scan_registry.py
```

Ultra-rapido (<100ms) via cache de hashes MD5. So re-processa arquivos alterados.
Retorna JSON com resumo de todos os skills encontrados.

#### Imported: Passo 2: Match De Skills

```bash
python agent-orchestrator/scripts/match_skills.py "<solicitacao do usuario>"
```

Retorna JSON com skills ranqueadas por relevancia. Interpretar o resultado:

| Resultado              | Acao                                                    |
|:-----------------------|:--------------------------------------------------------|
| `matched: 0`          | Nenhum skill relevante. Operar normalmente sem skills.  |
| `matched: 1`          | Um skill relevante. Carregar seu SKILL.md e seguir.     |
| `matched: 2+`         | Multiplos skills. Executar Passo 3 (orquestracao).      |

#### Imported: Passo 3: Orquestracao (Se Matched >= 2)

```bash
python agent-orchestrator/scripts/orchestrate.py --skills skill1,skill2 --query "<solicitacao>"
```

Retorna plano de execucao com padrao, ordem dos steps e data flow entre skills.

#### Imported: Passo Rapido (Atalho)

Para queries simples, os passos 1+2 podem ser combinados em sequencia:
```bash
python agent-orchestrator/scripts/scan_registry.py && python agent-orchestrator/scripts/match_skills.py "<solicitacao>"
```

---

#### Imported: Skill Registry

O registry vive em:
```
agent-orchestrator/data/registry.json
```

#### Imported: Locais De Busca

O scanner procura SKILL.md em:
1. `.claude/skills/*/` (skills registradas no Claude Code)
2. `*/` (skills standalone no top-level)
3. `*/*\` (skills em subpastas, ate profundidade 3)

#### Imported: Metadata Por Skill

Cada entrada no registry contem:

| Campo          | Descricao                                          |
|:---------------|:---------------------------------------------------|
| name           | Nome da skill (do frontmatter YAML)                |
| description    | Descricao completa (triggers inclusos)             |
| location       | Caminho absoluto do diretorio                      |
| skill_md       | Caminho absoluto do SKILL.md                       |
| registered     | Se esta em .claude/skills/ (true/false)            |
| capabilities   | Tags de capacidade (auto-extraidas + explicitas)   |
| triggers       | Keywords de ativacao extraidas da description      |
| language       | Linguagem principal (python/nodejs/bash/none)      |
| status         | active / incomplete / missing                      |

#### Imported: Comandos Do Registry

```bash

#### Imported: Scan Rapido (Usa Cache De Hashes)

python agent-orchestrator/scripts/scan_registry.py

#### Imported: Tabela De Status Detalhada

python agent-orchestrator/scripts/scan_registry.py --status

#### Imported: Re-Scan Completo (Ignora Cache)

python agent-orchestrator/scripts/scan_registry.py --force
```

---

#### Imported: Algoritmo De Matching

Para cada solicitacao, o matcher pontua skills usando:

| Criterio                     | Pontos | Exemplo                               |
|:-----------------------------|:-------|:--------------------------------------|
| Nome do skill na query       | +15    | "use web-scraper" -> web-scraper      |
| Keyword trigger exata        | +10    | "scrape" -> web-scraper               |
| Categoria de capacidade      | +5     | data-extraction -> web-scraper        |
| Sobreposicao de palavras     | +1     | Palavras da query na description      |
| Boost de projeto             | +20    | Skill atribuida ao projeto ativo      |

Threshold minimo: 5 pontos. Skills abaixo disso sao ignoradas.

#### Imported: Match Com Projeto

```bash
python agent-orchestrator/scripts/match_skills.py --project meu-projeto "query aqui"
```

Skills atribuidas ao projeto recebem +20 de boost automatico.

---

#### Imported: Padroes De Orquestracao

Quando multiplos skills sao relevantes, o orchestrator classifica o padrao:

#### Imported: 1. Pipeline Sequencial

Skills formam uma cadeia onde o output de uma alimenta a proxima.

**Quando:** Mix de skills "produtoras" (data-extraction, government-data) e "consumidoras" (messaging, social-media).

**Exemplo:** web-scraper coleta precos -> whatsapp-cloud-api envia alerta

```
user_query -> web-scraper -> whatsapp-cloud-api -> result
```

#### Imported: 2. Execucao Paralela

Skills trabalham independentemente em aspectos diferentes da solicitacao.

**Quando:** Todas as skills tem o mesmo papel (todas produtoras ou todas consumidoras).

**Exemplo:** instagram publica post + whatsapp envia notificacao (ambos recebem o mesmo conteudo)

```
user_query -> [instagram, whatsapp-cloud-api] -> aggregated_result
```

#### Imported: 3. Primario + Suporte

Uma skill principal lidera; outras fornecem dados de apoio.

**Quando:** Uma skill tem score muito superior as demais (>= 2x).

**Exemplo:** whatsapp-cloud-api envia mensagem (primario) + web-scraper fornece dados (suporte)

```
user_query -> whatsapp-cloud-api (primary) + web-scraper (support) -> result
```

#### Imported: Gerenciamento De Projetos

Atribuir skills a projetos permite boost de relevancia e contexto persistente.

#### Imported: Arquivo De Projetos

```
agent-orchestrator/data/projects.json
```

#### Imported: Operacoes

**Criar projeto:**
Adicionar entrada ao projects.json:
```json
{
  "name": "nome-do-projeto",
  "created_at": "2026-02-25T12:00:00",
  "skills": ["web-scraper", "whatsapp-cloud-api"],
  "description": "Descricao do projeto"
}
```

**Adicionar skill a projeto:** Atualizar o array `skills` do projeto.

**Remover skill de projeto:** Remover do array `skills`.

**Consultar skills do projeto:** Ler o projects.json e listar skills atribuidas.

---

#### Imported: Adicionando Novas Skills

Para adicionar uma nova skill ao ecossistema:

1. Criar uma pasta em qualquer lugar sob `skills root:`
2. Criar um `SKILL.md` com frontmatter YAML:
```yaml
---
name: minha-nova-skill
description: "Descricao com keywords de ativacao..."
---

#### Imported: Documentacao Da Skill

```
3. **Pronto!** O auto-discovery detecta automaticamente na proxima solicitacao.

Opcionalmente, para discovery nativo do Claude Code:
4. Copiar o SKILL.md para `.claude/skills/<nome>/SKILL.md`

#### Imported: Tags De Capacidade Explicitas (Opcional)

Adicionar ao frontmatter para matching mais preciso:
```yaml
capabilities: [data-extraction, web-automation]
```

---

#### Imported: Ver Status De Todos Os Skills

```bash
python agent-orchestrator/scripts/scan_registry.py --status
```

#### Imported: Interpretar Status

| Status     | Significado                                        |
|:-----------|:---------------------------------------------------|
| active     | SKILL.md com name + description presentes          |
| incomplete | SKILL.md existe mas falta name ou description      |
| missing    | Diretorio existe mas sem SKILL.md                  |

---

#### Imported: Skills Atuais Do Ecossistema

| Skill              | Capacidades                           | Status  |
|:-------------------|:--------------------------------------|:--------|
| web-scraper        | data-extraction, web-automation       | active  |
| junta-leiloeiros   | government-data, data-extraction      | active  |
| whatsapp-cloud-api | messaging, api-integration            | active  |
| instagram          | social-media, api-integration         | partial |

*Esta tabela e atualizada automaticamente via `scan_registry.py --status`.*

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
