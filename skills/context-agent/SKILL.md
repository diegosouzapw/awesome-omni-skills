---
name: context-agent
description: "Context Agent workflow skill. Use this skill when the user needs Agente de contexto para continuidade entre sessoes. Salva resumos, decisoes, tarefas pendentes e carrega briefing automatico na sessao seguinte and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["context", "session-management", "continuity", "memory", "context-agent", "agente", "contexto", "para"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Context Agent

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/context-agent` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Context Agent

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Localização, Inicialização (Primeira Vez), Salvar Contexto Da Sessão Atual, Carregar Contexto (Briefing), Status Rápido.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "salvar contexto" or related topics
- When the user mentions "salva o contexto" or related topics
- When the user mentions "proxima sessao" or related topics
- When the user mentions "briefing sessao" or related topics
- When the user mentions "resumo sessao" or related topics
- When the user mentions "continuidade sessao" or related topics

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/compression-rules.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/context-format.md` | Adds the next most relevant copied source file without loading the entire package |
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

Agente de contexto para continuidade entre sessoes. Salva resumos, decisoes, tarefas pendentes e carrega briefing automatico na sessao seguinte.

#### Imported: How It Works

Continuidade perfeita entre sessões do Claude Code. Captura, comprime e
restaura contexto automaticamente — tópicos, decisões, tarefas, erros,
arquivos modificados e descobertas técnicas.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @context-agent to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @context-agent against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @context-agent for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @context-agent using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/context-agent`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@conductor-validator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@confluence-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-marketer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/compression-rules.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/active_context.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [compression-rules.md](references/compression-rules.md)
- [context-format.md](references/context-format.md)
- [active_context.py](scripts/active_context.py)
- [compressor.py](scripts/compressor.py)
- [config.py](scripts/config.py)
- [context_loader.py](scripts/context_loader.py)

### Imported Reference Notes

#### Imported: Localização

```
C:\Users\renat\skills\context-agent\
├── SKILL.md
├── scripts/
│   ├── config.py               # Paths e constantes
│   ├── models.py               # Dataclasses
│   ├── session_parser.py       # Parser JSONL do Claude Code
│   ├── session_summary.py      # Gerador de resumos
│   ├── active_context.py       # Gerencia ACTIVE_CONTEXT.md
│   ├── project_registry.py     # Registro de projetos
│   ├── compressor.py           # Compressão e arquivamento
│   ├── search.py               # Busca FTS5
│   ├── context_loader.py       # Carrega contexto
│   └── context_manager.py      # CLI entry point
├── references/
│   ├── context-format.md       # Especificação de formatos
│   └── compression-rules.md    # Regras de compressão
└── data/
    ├── sessions/               # session-001.md, session-002.md, ...
    ├── archive/                # Sessões arquivadas
    ├── ACTIVE_CONTEXT.md       # Contexto consolidado (max 150 linhas)
    ├── PROJECT_REGISTRY.md     # Status de todos os projetos
    └── context.db              # SQLite FTS5 para busca
```

#### Imported: Inicialização (Primeira Vez)

```bash
python C:\Users\renat\skills\context-agent\scripts\context_manager.py init
```

#### Imported: Salvar Contexto Da Sessão Atual

Quando a sessão está terminando ou antes de uma tarefa longa, salvar o contexto:

```bash
python C:\Users\renat\skills\context-agent\scripts\context_manager.py save
```

O que faz:
1. Encontra o arquivo JSONL mais recente da sessão
2. Analisa todas as mensagens, tool calls e resultados
3. Gera resumo estruturado (session-NNN.md)
4. Atualiza ACTIVE_CONTEXT.md com novas informações
5. Sincroniza com MEMORY.md (carregado no system prompt)
6. Indexa para busca full-text

#### Imported: Carregar Contexto (Briefing)

No início de uma nova sessão, carregar o contexto:

```bash
python C:\Users\renat\skills\context-agent\scripts\context_manager.py load
```

Gera briefing com: projetos ativos, tarefas pendentes (por prioridade),
bloqueadores, decisões recentes, convenções e resumo das últimas sessões.

#### Imported: Status Rápido

```bash
python C:\Users\renat\skills\context-agent\scripts\context_manager.py status
```

Resumo em poucas linhas: projetos, pendências críticas, bloqueadores.

#### Imported: Buscar No Histórico

```bash
python C:\Users\renat\skills\context-agent\scripts\context_manager.py search "rate limit"
```

Busca full-text (SQLite FTS5) em todas as sessões — tópicos, decisões,
erros, arquivos, etc.

#### Imported: Manutenção

```bash
python C:\Users\renat\skills\context-agent\scripts\context_manager.py maintain
```

Arquiva sessões antigas, comprime arquivo, ressincroniza MEMORY.md,
reconstrói índice de busca.

#### Imported: Fluxo De Trabalho

```
[Sessão termina]
  → save → session-NNN.md + ACTIVE_CONTEXT.md + MEMORY.md

[Nova sessão começa]
  → MEMORY.md já está no system prompt (automático)
  → load → briefing detalhado com tudo que precisa saber

[Contexto cresce demais]
  → maintain → arquiva sessões antigas, comprime, otimiza
```

#### Imported: O Que É Capturado Em Cada Sessão

- **Tópicos**: assuntos discutidos
- **Decisões**: escolhas técnicas e de arquitetura
- **Tarefas concluídas**: o que foi feito
- **Tarefas pendentes**: o que falta (com prioridade)
- **Arquivos modificados**: quais arquivos foram editados/criados
- **Descobertas**: insights técnicos importantes
- **Erros resolvidos**: problemas e suas soluções
- **Questões em aberto**: perguntas sem resposta
- **Métricas**: tokens consumidos, mensagens, tool calls

#### Imported: Integração Com Memory.Md

O ACTIVE_CONTEXT.md é automaticamente copiado para:
`C:\Users\renat\.claude\projects\C--Users-renat-skills\memory\MEMORY.md`

Como o MEMORY.md é incluído no system prompt de toda sessão, o Claude
sempre começa sabendo o estado atual dos projetos, tarefas pendentes
e decisões tomadas — sem precisar de nenhuma ação manual.

#### Imported: Referências

- Para formato detalhado dos arquivos: `references/context-format.md`
- Para regras de compressão e arquivamento: `references/compression-rules.md`

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
