---
name: context-guardian-v2
description: "Context Guardian workflow skill. Use this skill when the user needs Guardiao de contexto que preserva dados criticos antes da compactacao automatica. Snapshots, verificacao de integridade e zero perda de informacao and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["context", "data-integrity", "snapshots", "verification", "context-guardian-v2", "context-guardian", "guardiao", "contexto"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Context Guardian

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/context-guardian` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Context Guardian

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Por Que Isto Existe, Localizacao, Integracao Com O Ecossistema, Ativacao Automatica (O Claude Deve Iniciar Sozinho), Ativacao Manual (Usuario Solicita).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "compactacao contexto" or related topics
- When the user mentions "perda de contexto" or related topics
- When the user mentions "snapshot contexto" or related topics
- When the user mentions "preservar contexto" or related topics
- When the user mentions "contexto critico" or related topics
- When the user mentions "antes de compactar" or related topics

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

#### Imported: Overview

Guardiao de contexto que preserva dados criticos antes da compactacao automatica. Snapshots, verificacao de integridade e zero perda de informacao.

#### Imported: How It Works

Sistema de integridade de contexto que protege projetos tecnicoss complexos contra
perda de informacao durante compactacao automatica do Claude Code. Enquanto o
`context-agent` atua APOS as sessoes (save/load), o context-guardian atua DURANTE
a sessao, detectando quando a compactacao esta proxima e executando protocolos de
preservacao com verificacao redundante.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @context-guardian-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/context-guardian-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/context-guardian-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @context-guardian-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/context-guardian`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/extraction-protocol.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/context_snapshot.py` |
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

#### Imported: Por Que Isto Existe

O Claude Code compacta automaticamente mensagens antigas quando o contexto se
aproxima do limite da janela. Essa compactacao e heuristica — ela resume mensagens
para liberar espaco, mas inevitavelmente perde detalhes. Para projetos simples,
isso funciona bem. Mas para projetos tecnicos pesados (como ecossistemas com 21+
skills, auditorias de seguranca, refatoracoes de arquitetura), a perda de um unico
detalhe pode causar regressoes, re-trabalho ou inconsistencias graves.

O context-guardian resolve isso criando uma camada de protecao PRE-compactacao:
extrai, classifica, verifica e persiste todas as informacoes criticas ANTES que a
compactacao automatica as destrua.

#### Imported: Localizacao

```
C:\Users\renat\skills\context-guardian\
├── SKILL.md                          # Este arquivo
├── references/
│   ├── extraction-protocol.md        # Protocolo detalhado de extracao
│   └── verification-checklist.md     # Checklist de verificacao e redundancia
└── scripts/
    └── context_snapshot.py           # Script de snapshot automatico
```

#### Imported: Integracao Com O Ecossistema

```
context-guardian (PRE-compactacao)    context-agent (POS-sessao)
         │                                    │
         ├── Detecta contexto grande          ├── Salva resumo ao final
         ├── Extrai dados criticos            ├── Atualiza ACTIVE_CONTEXT.md
         ├── Verifica integridade             ├── Sincroniza MEMORY.md
         ├── Salva snapshot verificado        ├── Indexa busca FTS5
         └── Gera briefing de transicao       └── Arquiva sessoes antigas
```

O context-guardian e o context-agent sao complementares:
- **context-guardian**: protecao em tempo real, DURANTE a sessao
- **context-agent**: persistencia entre sessoes, APOS a sessao

#### Imported: Ativacao Automatica (O Claude Deve Iniciar Sozinho)

1. **Limite de contexto**: quando perceber que ja consumiu ~60-70% da janela de
   contexto (indicadores: mensagens comecando a ser resumidas, aviso de compactacao)
2. **Projetos pesados**: sessoes com muitos arquivos editados, muitas tool calls,
   ou projetos com dependencias complexas entre componentes
3. **Antes de tarefas longas**: quando uma proxima tarefa pode gerar output extenso
   que empurraria o contexto para alem do limite

#### Imported: Ativacao Manual (Usuario Solicita)

- "salva o estado antes de comprimir"
- "faz um checkpoint"
- "snapshot do contexto"
- "nao quero perder nada dessa sessao"
- "prepara pra compactacao"
- "o contexto ta grande, protege"

#### Imported: Fase 1: Extracao Estruturada

Percorrer toda a conversa ate o momento e extrair categorias criticas.
Para cada categoria, classificar por prioridade (P0 = perda fatal, P1 = perda grave,
P2 = perda toleravel).

**P0 — Perda Fatal (preservar com redundancia tripla)**

| Categoria | O que extrair | Exemplo |
|-----------|--------------|---------|
| Decisoes tecnicas | Escolhas de arquitetura, padrao, tecnologia E motivo | "Usamos parameterized queries porque f-strings causam SQL injection" |
| Estado de tarefas | O que foi feito, o que falta, dependencias | "18/18 match OK, falta ZIP" |
| Correcoes aplicadas | Bug, causa raiz, solucao exata, arquivos afetados | "instagram/db.py: SQL injection via f-string → ? placeholders" |
| Codigo gerado/modificado | Caminho exato, linhas alteradas, natureza da mudanca | "match_skills.py:40-119: adicionou 5 categorias" |
| Erros encontrados | Mensagem exata, stack trace relevante, como resolveu | "TypeError at line 45 → cast para int" |
| Comandos que funcionaram | Comando completo que produziu resultado correto | "python verify_zips.py → 22/22 OK" |

**P1 — Perda Grave (preservar com verificacao)**

| Categoria | O que extrair |
|-----------|--------------|
| Padroes descobertos | Convencoes, patterns de codigo observados |
| Dependencias entre componentes | "scan_registry.py E match_skills.py devem ter categorias identicas" |
| Preferencias do usuario | Idioma, estilo, nivel de detalhe, workflow preferido |
| Contexto de projeto | Estrutura de diretorios, arquivos-chave, proposito |
| Questoes em aberto | Perguntas sem resposta, ambiguidades nao resolvidas |

**P2 — Perda Toleravel (resumo compacto)**

| Categoria | O que extrair |
|-----------|--------------|
| Historico de tentativas | "Tentei X, nao funcionou por Y, entao Z" |
| Metricas de progresso | Contadores, tempos, tamanhos |
| Discussoes exploratórias | Brainstorm, opcoes consideradas e descartadas |

#### Imported: Fase 2: Verificacao De Integridade

Apos extrair, verificar que NADA critico foi omitido.

**Checklist de Verificacao (executar mentalmente para cada item):**

```
□ Cada arquivo modificado tem: caminho, natureza da mudanca, motivo
□ Cada bug corrigido tem: sintoma, causa raiz, solucao, arquivo
□ Cada decisao tem: o que, por que, alternativas descartadas
□ Cada tarefa pendente tem: descricao, prioridade, dependencias
□ Cada padrao/convencao tem: regra, motivo, exemplos
□ Nenhuma informacao de uma secao contradiz outra
□ Referencias cruzadas estao consistentes (ex: "18 queries testadas" aparece em
  multiplos lugares com o mesmo numero)
□ Caminhos de arquivo estao completos (absolutos, nao relativos)
```

Se qualquer item falhar, voltar a Fase 1 e re-extrair a informacao faltante.

Para detalhes sobre verificacao avancada, ler `references/verification-checklist.md`.

#### Imported: Fase 3: Persistencia Redundante

Salvar as informacoes extraidas em 3 camadas de redundancia:

**Camada 1 — Snapshot estruturado (arquivo .md)**

```bash
python C:\Users\renat\skills\context-guardian\scripts\context_snapshot.py save
```

Gera `C:\Users\renat\skills\context-guardian\data\snapshot-YYYYMMDD-HHMMSS.md` com
todas as informacoes extraidas em formato estruturado.

Se o script nao estiver disponivel, criar manualmente o arquivo seguindo o formato
descrito em `references/extraction-protocol.md`.

**Camada 2 — MEMORY.md atualizado**

Atualizar `C:\Users\renat\.claude\projects\C--Users-renat-Skill-JUD\memory\MEMORY.md`
com as informacoes P0 mais criticas em formato ultra-compacto. O MEMORY.md e carregado
automaticamente em toda nova sessao, entao ele e a ultima linha de defesa.

**Camada 3 — Context-agent save**

```bash
python C:\Users\renat\skills\context-agent\scripts\context_manager.py save
```

Aciona o context-agent para salvar sessao completa com indexacao FTS5.

#### Imported: Fase 4: Briefing De Transicao

Gerar um bloco de texto formatado que serve como "cartao de visita" para o Claude
que continuar apos a compactacao. Este briefing deve ser a ULTIMA coisa escrita antes
da compactacao, para que fique no topo do contexto compactado.

**Formato do briefing:**

```markdown

#### Imported: Estado Atual

- Projeto: [nome]
- Fase: [fase atual]
- Progresso: [X/Y tarefas completas]

#### Imported: O Que Foi Feito Nesta Sessao

1. [tarefa 1 — resultado]
2. [tarefa 2 — resultado]
...

#### Imported: O Que Falta Fazer

1. [tarefa pendente — prioridade] [dependencia se houver]
2. ...

#### Imported: Decisoes Criticas (Nao Alterar Sem Motivo)

- [decisao 1]: [motivo]
- [decisao 2]: [motivo]

#### Imported: Correcoes Aplicadas (Nao Reverter)

- [arquivo]: [correcao] — [motivo]

#### Imported: Caminhos Importantes

- [caminho 1]: [proposito]
- [caminho 2]: [proposito]

#### Imported: Alertas

- [qualquer armadilha, edge case, ou cuidado especial]

#### Imported: Onde Recuperar Mais Informacoes

- Snapshot: C:\Users\renat\skills\context-guardian\data\snapshot-[timestamp].md
- MEMORY.md: carregado automaticamente
- Context-agent: `python context_manager.py load`
- Busca historica: `python context_manager.py search "termo"`
```

#### Imported: Protocolo Rapido (Quando O Tempo E Curto)

Se a compactacao esta iminente e nao ha tempo para o protocolo completo de 4 fases:

1. **30 segundos** — Escrever um mini-briefing com: tarefas pendentes, decisoes
   criticas, caminhos de arquivo modificados
2. **1 minuto** — Atualizar MEMORY.md com informacoes P0
3. **2 minutos** — Executar context-agent save

Mesmo o protocolo rapido e melhor que nenhuma protecao.

#### Imported: Deteccao De Completude Pos-Compactacao

Quando uma sessao continuar apos compactacao, verificar se o contexto preservado
esta completo:

1. Ler MEMORY.md (ja estara carregado automaticamente)
2. Se disponivel, ler o snapshot mais recente em `data/`
3. Comparar com o briefing de transicao (se visivel no contexto compactado)
4. Se encontrar lacunas, executar:
   ```bash
   python C:\Users\renat\skills\context-agent\scripts\context_manager.py load
   ```
5. Se ainda houver lacunas, buscar por termo:
   ```bash
   python C:\Users\renat\skills\context-agent\scripts\context_manager.py search "termo"
   ```

#### Imported: Exemplo De Uso Real

**Cenario**: Sessao longa criando advogado-especialista (46KB), corrigindo match_skills
(5 categorias novas), auditando seguranca (10 vulnerabilidades), gerando 22 ZIPs.

**Sem context-guardian**:
Compactacao resume tudo em "criou skill juridica, corrigiu bugs, gerou zips".
Proximo Claude nao sabe quais categorias foram adicionadas, quais vulnerabilidades
foram corrigidas, qual o estado de cada ZIP, ou por que certas decisoes foram tomadas.
Resultado: re-trabalho, inconsistencias, regressoes.

**Com context-guardian**:
Antes da compactacao, executa protocolo completo:
- Snapshot com 5 categorias novas listadas (legal, auction, security, image-generation, monitoring)
- 10 vulnerabilidades catalogadas com arquivo, tipo, e correcao exata
- 22 ZIPs verificados com checksums
- Decisoes documentadas ("removeu 'saude' de monitoring porque causava false positive")
- Briefing de transicao no topo do contexto
Proximo Claude continua com precisao total, zero re-trabalho.

#### Imported: Consideracoes De Performance

- O protocolo completo leva 2-5 minutos de trabalho do Claude
- Para projetos simples, usar apenas o protocolo rapido
- Nao ativar para sessoes curtas ou conversas casuais
- A persistencia em 3 camadas (snapshot + MEMORY.md + context-agent) garante que
  mesmo se uma camada falhar, as outras duas preservam a informacao
- Snapshots antigos (>10) podem ser podados manualmente

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
