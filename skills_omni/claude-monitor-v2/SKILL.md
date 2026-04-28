---
name: "claude-monitor-v2"
description: "Claude Monitor \\u2014 Diagn\\u00f3stico de Performance workflow skill. Use this skill when the user needs Monitor de performance do Claude Code e sistema local. Diagnostica lentidao, mede CPU/RAM/disco, verifica API latency e gera relatorios de saude do sistema and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "backend"
tags:
  - "monitoring"
  - "performance"
  - "diagnostics"
  - "system-health"
  - "claude-monitor-v2"
  - "claude-monitor"
  - "monitor"
  - "claude"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "claude-code"
  - "antigravity"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-16"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "claude-monitor-v2"
family_name: "Claude Monitor \u2014 Diagn\u00f3stico de Performance"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/claude-monitor-v2"
upstream_skill: "skills/claude-monitor-v2"
upstream_author: "renat"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "claude-monitor-v2"
---

# Claude Monitor — Diagnóstico de Performance

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/claude-monitor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Claude Monitor — Diagnóstico de Performance

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Quando Usar, 1. Diagnóstico Rápido (Health_Check.Py), 2. Interpretar O Resultado, 3. Ações Corretivas Automáticas, 4. Monitor Contínuo (Opcional).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "lento" or related topics
- When the user mentions "lentidao" or related topics
- When the user mentions "lag" or related topics
- When the user mentions "lagado" or related topics
- When the user mentions "travando" or related topics
- When the user mentions "claude lento" or related topics

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `scripts/api_bench.py` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `scripts/config.py` | Adds the next most relevant copied source file without loading the entire package |
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

Monitor de performance do Claude Code e sistema local. Diagnostica lentidao, mede CPU/RAM/disco, verifica API latency e gera relatorios de saude do sistema.

#### Imported: How It Works

Skill para diagnosticar e resolver problemas de lentidão no Claude Code e no sistema.
Determina se o gargalo é local (PC) ou remoto (API Claude) e sugere ações corretivas.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @claude-monitor-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @claude-monitor-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @claude-monitor-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @claude-monitor-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/claude-monitor`, fails to mention provenance, or does not use any copied source files at all.
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
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/api_bench.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [api_bench.py](scripts/api_bench.py)
- [config.py](scripts/config.py)
- [health_check.py](scripts/health_check.py)
- [monitor.py](scripts/monitor.py)
- [api_bench.py](scripts/api_bench.py)
- [config.py](scripts/config.py)

### Imported Reference Notes

#### Imported: Quando Usar

- Usuário reclama que o Claude Code está lento ou travando
- Troca de sessões de conversa demora para carregar
- Respostas do Claude demoram muito
- PC parece lento enquanto usa o Claude Code
- Qualquer menção a performance, lag, lentidão

#### Imported: 1. Diagnóstico Rápido (Health_Check.Py)

Rode SEMPRE como primeiro passo:

```bash
python C:\Users\renat\skills\claude-monitor\scripts\health_check.py
```

O script analisa em ~3 segundos:
- **CPU**: Uso atual e por core. >80% = gargalo provável
- **RAM**: Total, usada, disponível. >85% = pressão de memória
- **Browsers**: Processos e RAM por browser. >5GB total = excesso de abas
- **Claude Code**: Processos e RAM consumida
- **Disco**: Espaço livre. <10% = impacto em swap/performance
- **Rede**: Latência ao endpoint da API Claude
- **Diagnóstico**: Classificação automática do problema com sugestões

#### Imported: 2. Interpretar O Resultado

O script retorna um JSON com `diagnosis` contendo:

- `bottleneck`: "cpu" | "ram" | "browsers" | "disk" | "network" | "claude_api" | "ok"
- `severity`: "critical" | "warning" | "ok"
- `suggestions`: Lista de ações recomendadas
- `summary`: Resumo em português para mostrar ao usuário

**Mostre o `summary` ao usuário** e ofereça executar as sugestões.

#### Imported: 3. Ações Corretivas Automáticas

Baseado no diagnóstico, ofereça ao usuário:

#### Se CPU alta (>80%):
- Listar processos consumindo mais CPU
- Sugerir fechar processos pesados desnecessários
- Verificar se Windows Update está rodando em background

#### Se browsers pesados (>5GB RAM ou >40 processos):
```bash
python C:\Users\renat\skills\claude-monitor\scripts\health_check.py --browsers-detail
```
Mostra RAM por browser e sugere quais fechar. **Nunca fechar processos sem permissão explícita do usuário.**

#### Se disco cheio (>85%):
- Mostrar pastas maiores
- Sugerir limpeza de Temp, cache de browsers, lixeira

#### Se rede lenta (latência >500ms):
- Testar conexão com api.anthropic.com
- Sugerir verificar VPN, proxy, ou conexão WiFi

#### Imported: 4. Monitor Contínuo (Opcional)

Se o usuário quiser monitoramento em background:

```bash
python C:\Users\renat\skills\claude-monitor\scripts\monitor.py --interval 30 --duration 300
```

Parâmetros:
- `--interval`: Segundos entre cada amostra (default: 30)
- `--duration`: Duração total em segundos (default: 300 = 5 min)
- `--output`: Caminho do arquivo de log (default: monitor_log.json)
- `--alert-cpu`: Threshold de CPU para alerta (default: 80)
- `--alert-ram`: Threshold de RAM % para alerta (default: 85)

O monitor salva snapshots periódicos e gera um relatório ao final com:
- Picos de CPU e RAM
- Tendência (melhorando/piorando/estável)
- Eventos de alerta detectados
- Recomendação final

#### Imported: 5. Benchmark Da Api Claude (Opcional)

Para testar se a lentidão é da API:

```bash
python C:\Users\renat\skills\claude-monitor\scripts\api_bench.py
```

Mede o tempo de resposta do processo Claude Code local (não faz chamadas à API).
Compara com tempos típicos e indica se está dentro do esperado.

#### Imported: Thresholds De Referência

| Métrica | OK | Warning | Critical |
|---------|-----|---------|----------|
| CPU % | <60% | 60-85% | >85% |
| RAM usada % | <70% | 70-85% | >85% |
| RAM browsers | <3 GB | 3-6 GB | >6 GB |
| Processos browser | <30 | 30-60 | >60 |
| Disco livre | >15% | 10-15% | <10% |
| Latência rede | <200ms | 200-500ms | >500ms |

#### Imported: Dicas Para O Usuário

Quando apresentar o diagnóstico, inclua estas dicas contextuais:

- **Muitas abas = muito CPU/RAM**: Cada aba de browser é um processo separado.
  50 abas = 50 processos competindo por recursos.
- **Claude Code é pesado**: Ele roda vários processos Electron. É normal consumir 3-5 GB.
  Mas se estiver usando >6 GB com várias sessões, considere fechar sessões antigas.
- **Troca de sessão lenta**: Geralmente causada por CPU alta ou muitos processos competindo.
  A sessão precisa carregar o histórico da conversa, e se o CPU está ocupado, demora.
- **Disco quase cheio**: Afeta a velocidade do swap (memória virtual) e pode causar
  lentidão generalizada.

#### Imported: Dependências

- Python 3.10+
- psutil (instalado automaticamente pelo script se não disponível)
- Nenhuma API key necessária

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
