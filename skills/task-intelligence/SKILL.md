---
name: task-intelligence
description: "Task Intelligence \u2014 Protocolo de Amplifica\u00e7\u00e3o Pr\u00e9-Tarefa workflow skill. Use this skill when the user needs Protocolo de Intelig\u00eancia Pr\u00e9-Tarefa \u2014 ativa TODOS os agentes relevantes do ecossistema ANTES de executar qualquer tarefa solicitada pelo usu\u00e1rio and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["planning", "pre-task", "risk-analysis", "orchestration", "task-intelligence", "protocolo", "intelig", "ncia"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Task Intelligence — Protocolo de Amplificação Pré-Tarefa

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/task-intelligence` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Task Intelligence — Protocolo de Amplificação Pré-Tarefa

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Fase 1 — Classificação Da Tarefa (5-10 Segundos), Fase 2 — Scan E Match Paralelo, Terminal 1 — Atualizar Registry, Terminal 2 — Identificar Agentes Relevantes, Fase 3 — Briefing Dos Agentes Especializados.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "pre-task briefing" or related topics
- When the user mentions "briefing tarefa" or related topics
- When the user mentions "plano execucao tarefa" or related topics
- When the user mentions "antes de executar analise" or related topics
- When the user mentions "task intelligence" or related topics
- When the user mentions "consultar agentes paralelo" or related topics

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/problem-catalog.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/time-patterns.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Overview

Protocolo de Inteligência Pré-Tarefa — ativa TODOS os agentes relevantes do ecossistema ANTES de executar qualquer tarefa solicitada pelo usuário. Enriquece o contexto com análise paralela multi-agente, produz estimativa real de tempo (início→fim), mapeia problemas prováveis e improvável, e formula um plano de execução antecipado com estratégias de contingência.

#### Imported: How It Works

Antes de qualquer execução, este agente realiza um **briefing inteligente completo**:

1. **Ativa todos os agentes relevantes em paralelo** — cada um analisa a tarefa pela sua ótica
2. **Sintetiza o conhecimento coletivo** em um plano unificado
3. **Estima tempo real** do início ao fim (com breakdown por etapa)
4. **Mapeia problemas prováveis** e os resolve antecipadamente
5. **Define pontos de verificação** para detectar desvios antes que virem bloqueadores

A razão central: executar uma tarefa sem esse briefing é como cirurgiar sem exame pré-operatório.
O custo de 30-60 segundos de análise paralela elimina horas de retrabalho.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @task-intelligence to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @task-intelligence against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @task-intelligence for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @task-intelligence using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: Best Practices

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/task-intelligence`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Fase 5 — Mapa De Problemas (Antecipação Proativa)

Pense em TRÊS camadas de problemas:

#### Problemas Prováveis (80%+ de chance de acontecer)
São os problemas que SEMPRE acontecem. Resolva-os ANTES de começar.

Exemplos por categoria:
- **Skills novas**: YAML inválido → valide com `python -c "import yaml; yaml.safe_load(open('SKILL.md').read())"` antes de instalar
- **APIs externas**: chave expirada, rate limit, mudança de endpoint → verifique autenticação primeiro
- **Instalações**: dependências faltando, versão incompatível → leia requirements.txt antes de executar
- **Arquivos**: path não existe, permissão negada, encoding errado → verifique antes de abrir
- **Git/Versionamento**: branch errada, conflito de merge, uncommitted changes → sempre `git status` antes

#### Problemas Possíveis (30-70% de chance)
Problemas que podem acontecer dependendo do estado atual.

Estratégia: verifique rapidamente o estado antes de assumir que está OK.

#### Problemas Improváveis mas Críticos (< 10% mas alto impacto)
Ações irreversíveis, perda de dados, exposição de credenciais.

Estratégia: backup preventivo, confirmação explícita, rollback plan.

**Template de mapa de problemas:**

```
MAPA DE PROBLEMAS — [Nome da Tarefa]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROVÁVEIS (resolver antes de começar):
  ⚠ [problema] → [solução preventiva aplicada agora]
  ⚠ [problema] → [solução preventiva aplicada agora]

POSSÍVEIS (monitorar durante execução):
  ~ [problema] → [sinal de alerta] → [ação se ocorrer]

CRÍTICOS (baixa prob, alto impacto):
  🔴 [risco] → [backup/rollback plan]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Related Skills

- `@supply-chain-risk-auditor` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sveltekit` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swift-concurrency-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swiftui-expert-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/problem-catalog.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [problem-catalog.md](references/problem-catalog.md)
- [time-patterns.md](references/time-patterns.md)
- [problem-catalog.md](references/problem-catalog.md)
- [time-patterns.md](references/time-patterns.md)

### Imported Reference Notes

#### Imported: Fase 1 — Classificação Da Tarefa (5-10 Segundos)

Antes de qualquer coisa, classifique a tarefa em uma das categorias:

| Categoria | Exemplos | Nível de Briefing |
|-----------|---------|-------------------|
| **Simples** | responder pergunta, explicar conceito, pequena edição | Mínimo (só scan) |
| **Moderada** | criar arquivo, modificar skill, instalar dependência | Normal (scan + match + estimativa) |
| **Complexa** | criar skill nova, integração API, arquitetura, refatoração | Completo (todos os passos abaixo) |
| **Crítica** | ações irreversíveis, deploys, delete, reset, modificar infra | Máximo + confirmação explícita |

Para tarefas **Simples**, execute normalmente sem briefing completo.
Para **Moderada**, **Complexa** e **Crítica**, execute o protocolo completo abaixo.

---

#### Imported: Fase 2 — Scan E Match Paralelo

Execute simultaneamente:

```bash

#### Imported: Terminal 1 — Atualizar Registry

python agent-orchestrator/scripts/scan_registry.py

#### Imported: Terminal 2 — Identificar Agentes Relevantes

python agent-orchestrator/scripts/match_skills.py "<tarefa do usuário>"
```

Se `matched >= 2`, execute orquestração:
```bash
python agent-orchestrator/scripts/orchestrate.py --skills <skill1,skill2,...> --query "<tarefa>"
```

---

#### Imported: Fase 3 — Briefing Dos Agentes Especializados

Para cada agente relevante identificado no match, faça uma pergunta direcionada:

**Padrão de consulta por tipo de agente:**

- **007 (Segurança)**: "Esta tarefa tem vetores de ataque, dados expostos, ou ações irreversíveis?"
- **skill-sentinel (Qualidade)**: "Existe skill redundante? A skill que será criada/modificada segue os padrões?"
- **agent-orchestrator (Orquestração)**: "Quais skills já existem que resolvem parte desta tarefa?"
- **matematico-tao (Complexidade)**: "Qual a complexidade computacional? Há otimizações não-óbvias?"
- **context-guardian (Continuidade)**: "Existe contexto de sessões anteriores relevante para esta tarefa?"
- **advogado-especialista/criminal (Legal)**: "Há implicações legais, LGPD, ou riscos regulatórios?"
- **leiloeiro-ia (Leilões)**: "Esta tarefa envolve dados ou lógica do domínio de leilões?"

Não consulte todos os agentes cegamente — escolha os **3-5 mais relevantes** para a tarefa.

---

#### Imported: Fase 4 — Estimativa De Tempo Real

Construa um breakdown de tempo honesto com base na complexidade real:

```
ESTIMATIVA DE TEMPO — [Nome da Tarefa]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Etapa 1: [nome]          ~X min   [motivo do tempo]
Etapa 2: [nome]          ~X min   [motivo do tempo]
Etapa 3: [nome]          ~X min   [motivo do tempo]
Contingência (problemas) +X min   [buffer para imprevistos típicos]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL ESTIMADO:          ~X min
Confiança: Alta/Média/Baixa — [justificativa]
```

**Regras de estimativa honesta:**
- Nunca subestime para agradar — o usuário precisa saber o tempo real
- Adicione sempre 20-30% de buffer para problemas típicos
- Se a confiança for Baixa, explique por quê e o que aumentaria ela
- Diferencie "tempo de execução do agente" vs "tempo de espera do usuário"

---

#### Imported: Fase 6 — Plano De Execução Enriquecido

Depois de coletar análises dos agentes + estimativas + mapa de problemas, produza:

```
BRIEFING PRÉ-EXECUÇÃO — [Nome da Tarefa]
════════════════════════════════════════════
CONTEXTO COLETADO:
  • [insight do agente 1]
  • [insight do agente 2]
  • [insight do agente 3]

PLANO DE EXECUÇÃO:
  1. [etapa] (~Xmin) — [por quê esta ordem]
  2. [etapa] (~Xmin) — [dependência da anterior]
  3. [etapa] (~Xmin) — [verificação de qualidade]

TEMPO TOTAL: ~Xmin | CONFIANÇA: Alta/Média/Baixa

PROBLEMAS PRÉ-RESOLVIDOS:
  ✅ [problema] → [solução aplicada]
  ✅ [problema] → [solução aplicada]

PONTOS DE VERIFICAÇÃO:
  [ ] Após etapa 1: verificar [critério de sucesso]
  [ ] Após etapa 2: verificar [critério de sucesso]
  [ ] Final: validar resultado completo

ROLLBACK PLAN (se algo der errado):
  → [como desfazer cada etapa crítica]
════════════════════════════════════════════
```

---

#### Imported: Integração Com O Ecossistema

Este agente **complementa** o agent-orchestrator — não substitui:

- **agent-orchestrator**: identifica QUAIS skills usar (routing)
- **task-intelligence**: enriquece COMO usar + quando + com que riscos (briefing)

Ambos devem ser ativados juntos. O CLAUDE.md já exige o orchestrator — este agente adiciona a camada de inteligência sobre ele.

---

#### Imported: Quando Não Usar O Briefing Completo

- Perguntas rápidas de 1 linha (responder diretamente é mais eficiente)
- Tarefas de leitura pura (read, grep, glob sem efeitos colaterais)
- Iterações simples dentro de uma tarefa já planejada
- Quando o usuário pede "só responde rápido" / "vibe comigo"

O objetivo não é burocracia — é inteligência a serviço da velocidade real.

---

#### Imported: Referências

- `references/problem-catalog.md` — Catálogo de problemas típicos por domínio
- `references/time-patterns.md` — Padrões históricos de tempo por tipo de tarefa
- `scripts/pre_task_check.py` — Script de verificação automatizada pré-tarefa

---

#### Imported: Exemplo De Briefing Completo

**Tarefa do usuário:** "Crie uma skill para integração com Stripe"

```
BRIEFING PRÉ-EXECUÇÃO — Skill: stripe-integration
════════════════════════════════════════════════════

CONTEXTO COLETADO (3 agentes consultados):
  • 007: CRÍTICO — API keys do Stripe NÃO devem ir para SKILL.md ou git.
    Usar variáveis de ambiente (.env). Webhooks precisam validação HMAC-SHA256.
  • skill-sentinel: whatsapp-cloud-api já implementa padrão HMAC-SHA256 para webhooks
    — reusar esse padrão. Skill deve seguir estrutura: config.py + client.py + SKILL.md.
  • agent-orchestrator: 3 skills similares (whatsapp, telegram, instagram) como referência
    de arquitetura. Nenhuma conflita com Stripe.

PLANO DE EXECUÇÃO:
  1. Criar estrutura de diretórios (~2min) — base para os demais arquivos
  2. Escrever SKILL.md com workflow (~5min) — define comportamento do agente
  3. Criar config.py com variáveis de ambiente (~3min) — sem hardcode de keys
  4. Criar stripe_client.py com autenticação (~10min) — métodos principais
  5. Criar webhook_handler.py com HMAC-SHA256 (~5min) — reusar padrão whatsapp
  6. Instalar via skill-installer (~2min) — validação + registro
  7. Gerar ZIP (~1min) — para backup/upload manual

TEMPO TOTAL: ~28min | CONFIANÇA: Alta
(estrutura clara, dependências conhecidas, sem APIs externas incertas)

PROBLEMAS PRÉ-RESOLVIDOS:
  ✅ API key exposta → .env obrigatório, .gitignore configurado
  ✅ YAML inválido → validar antes de instalar
  ✅ Webhook sem autenticação → HMAC-SHA256 incluído no plano

PONTOS DE VERIFICAÇÃO:
  [ ] Após SKILL.md: yaml.safe_load não levanta exceção
  [ ] Após config.py: sem strings hardcoded de credenciais
  [ ] Final: skill-installer valida os 10 checks

ROLLBACK PLAN:
  → Se skill-installer falhar: pasta em /tmp/stripe-skill-backup/
  → Se ZIP corrompido: reconstruir com build_ecosystem.py
════════════════════════════════════════════════════
```

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
