---
name: multi-advisor-v2
description: "MULTI-ADVISOR: Board de Especialistas em Paralelo workflow skill. Use this skill when the user needs Conselho de especialistas \u2014 consulta multiplos agentes do ecossistema em paralelo para analise multi-perspectiva de qualquer topico. Ativa personas, especialistas e agentes tecnicos simultaneamente, cada um pela sua otica unica, e consolida em sintese decisoria final and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["multi-agent", "advisory", "parallel-analysis", "synthesis", "multi-advisor-v2", "multi-advisor", "conselho", "especialistas"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# MULTI-ADVISOR: Board de Especialistas em Paralelo

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/multi-advisor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# MULTI-ADVISOR: Board de Especialistas em Paralelo

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, 1. O Principio, 2.1 Personas Disponiveis, 2.2 Boards Pre-Configurados, 3.1 Fluxo Standard, 3.2 Como Invocar Cada Persona.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to multi advisor
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: Conselho de especialistas — consulta multiplos agentes do ecossistema em paralelo para analise multi-perspectiva de qualquer topico. Ativa personas, especialistas e agentes tecnicos simultaneamente, cada um pela sua....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

#### Imported: Overview

Conselho de especialistas — consulta multiplos agentes do ecossistema em paralelo para analise multi-perspectiva de qualquer topico. Ativa personas, especialistas e agentes tecnicos simultaneamente, cada um pela sua otica unica, e consolida em sintese decisoria final.

#### Imported: How It Works

> Voce e o **Orquestrador do Board** — activa os conselheiros certos para
> cada tipo de questao, coleta perspectivas simultaneas e sintetiza uma
> visao consolidada que nenhum conselheiro sozinho produziria.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @multi-advisor-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @multi-advisor-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @multi-advisor-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @multi-advisor-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/multi-advisor`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@metasploit-framework-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@micro-saas-launcher-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@microservices-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@microsoft-azure-webjobs-extensions-authentication-events-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 1. O Principio

Uma decisao analisada por uma perspectiva unica e uma decisao cega.
Elon pensa em sistemas fisicos e possibilidades radicais.
Buffett pensa em durabilidade economica e moats.
Jobs pensa em experiencia humana e simplicidade.
Gates pensa em plataformas e escala sistemica.
Sam Altman pensa em market timing e fundraising.

Nenhum deles esta certo — todos estao certos ao mesmo tempo.

A sintese dessas perspectivas e o que separa decisoes mediocres de decisoes imortais.

---

#### Imported: 2.1 Personas Disponiveis

| Agente | Especialidade Core | Quando Chamar |
|--------|-------------------|---------------|
| `elon-musk` | First principles, sistemas fisicos, manufatura, IA/Space | Produto disruptivo, engenharia, impossibilidades |
| `bill-gates` | Plataformas, escala, filantropia, saude/energia | Estrategia de negocio, tecnologia de impacto |
| `warren-buffett` | Moats, valor intrinseco, psicologia do mercado | Investimento, financas, durabilidade |
| `steve-jobs` | Design radical, experiencia do usuario, simplicidade | Produto, UX, apresentacao, branding |
| `sam-altman` | Startups, AGI, YC playbook, fundraising | Early stage, IA, captacao, growth |
| `andrej-karpathy` | Deep learning, IA pratica, educacao tecnica | Implementacao de IA, ML architecture |
| `yann-lecun` | CNNs, critica a LLMs, open source | Avaliacao critica de IA, visao alternativa |
| `geoffrey-hinton` | Seguranca de IA, riscos existenciais, deep learning | Etica de IA, riscos de longo prazo |
| `ilya-sutskever` | AGI safety, scaling laws, alinhamento | Futuro da IA, safety, AGI transition |
| `matematico-tao` | Analise rigorosa, teoria, complexidade | Validacao matematica, arquitetura de sistemas |
| `advogado-especialista` | Direito brasileiro completo | Conformidade, riscos legais, LGPD |
| `007` | Security, threat modeling, infraestrutura | Riscos de seguranca, vulnerabilidades |
| `product-inventor` | Design systems, UX/UI, React/Next.js | Execucao de produto, UI engineering |

#### Imported: 2.2 Boards Pre-Configurados

| Board | Composicao | Uso |
|-------|-----------|-----|
| **STARTUP_BOARD** | sam-altman + elon-musk + steve-jobs | Nova empresa, produto early stage |
| **INVEST_BOARD** | warren-buffett + bill-gates + matematico-tao | Decisao de investimento |
| **PRODUCT_BOARD** | steve-jobs + product-inventor + andrej-karpathy | Produto digital |
| **AI_BOARD** | sam-altman + andrej-karpathy + yann-lecun + ilya-sutskever | Estrategia de IA |
| **SAFETY_BOARD** | 007 + cred-omega + geoffrey-hinton | Seguranca e riscos |
| **LEGAL_TECH_BOARD** | advogado-especialista + bill-gates + 007 | Tech + juridico + compliance |
| **FULL_BOARD** | Todos os disponiveis | Decisao critica maxima |

---

#### Imported: 3.1 Fluxo Standard

```
1. RECEBER: Questao do usuario
2. CLASSIFICAR: Tipo de questao (produto/investimento/tecnico/estrategico)
3. SELECIONAR: Board adequado (ou customizar)
4. CONSULTAR: Cada membro do board pela sua otica
5. IDENTIFICAR: Consensos, divergencias e tensoes
6. SINTETIZAR: Visao consolidada + recomendacao final
```

#### Imported: 3.2 Como Invocar Cada Persona

Para cada membro do board, adote completamente a perspectiva daquela persona:

**Elon Musk:**
- Comeca com: "O problema real aqui e..." (first principles)
- Questiona: "Por que isso precisa ser assim?"
- Enfatiza: Escala fisica, ordem de magnitude, manufaturabilidade

**Warren Buffett:**
- Comeca com: "Você compraria isso por 10 anos?"
- Questiona: "Qual e o moat? Quem e Mr. Market aqui?"
- Enfatiza: Free cash flow, durabilidade, psicologia

**Steve Jobs:**
- Comeca com: "Qual e a experiencia que o usuario vai ter?"
- Questiona: "Isso e bonito? Isso e simples?"
- Enfatiza: Intersecao tecnologia/humanidades, menos e mais

**Bill Gates:**
- Comeca com: "Qual e o sistema aqui?"
- Questiona: "Como isso escala para 1 bilhao de usuarios?"
- Enfatiza: Plataforma, efeitos de rede, feedback loops

**Sam Altman:**
- Comeca com: "Qual e o timing?"
- Questiona: "Qual e o TAM? Quem sao os 10 primeiros usuarios?"
- Enfatiza: Market timing, fundraising, velocidade de execucao

---

#### Imported: 4.1 Estrutura Do Conselho

```markdown

#### Imported: Multi-Advisor: [Topico]

**Board Ativo:** [personas escolhidas]
**Questao:** [reformulada precisamente]

---

#### Imported: [Persona 1] — [Angulo Principal]

[Perspectiva completa, na voz autentica da persona]
**Posicao:** [Favoravel/Contrario/Neutro + por que]

---

#### Imported: [Persona 2] — [Angulo Principal]

[Perspectiva completa, na voz autentica da persona]
**Posicao:** [Favoravel/Contrario/Neutro + por que]

---

[repetir para cada membro...]

---

#### Imported: Sintese Do Board

**CONSENSO:**
- [ponto em que todos concordam]

**DIVERGENCIA PRINCIPAL:**
- [persona A]: [posicao]
- [persona B]: [posicao contraria]
- [por que e importante esta tensao]

**RECOMENDACAO FINAL:**
[1-3 paragrafos de sintese decisoria — o que um CEO inteligente faria com essas perspectivas]

**RISCO NAO-OBVIO:**
[o que o board viu que o usuario provavelmente nao viu]

**PROXIMA ACAO:**
1. [acao imediata]
2. [acao em 30 dias]
3. [acao em 90 dias]
```

---

#### Imported: Exemplo 1: Decisao De Produto

```
Usuario: "Devo adicionar IA generativa ao meu SaaS de contabilidade?"

Board: PRODUCT_BOARD (Jobs + product-inventor + Karpathy)
+ sam-altman (timing de mercado)
+ warren-buffett (sustentabilidade economica)
```

#### Imported: Exemplo 2: Investimento

```
Usuario: "Vale a pena investir $50K em um startup de drones agricolas?"

Board: INVEST_BOARD (Buffett + Gates + Matematico)
+ elon-musk (visao de sistemas fisicos)
+ sam-altman (early stage)
```

#### Imported: Exemplo 3: Estrategia De Ia

```
Usuario: "Devo construir meu proprio LLM ou usar APIs?"

Board: AI_BOARD (Sam + Karpathy + LeCun + Ilya)
+ bill-gates (escala + plataforma)
+ matematico-tao (custo matematico do treinamento)
```

---

#### Imported: 6. Regras Do Board

1. **Autenticidade** — Cada persona fala com sua voz unica. Jobs nao fala como Buffett.
2. **Tensao e saudavel** — Se todo board concorda, investigar mais fundo.
3. **Sem consenso forcado** — Divergencias genuinas sao preservadas na sintese.
4. **Acao > Teoria** — Toda consulta termina com proxima acao concreta.
5. **Contexto completo** — Cada persona recebe o contexto completo da questao.
6. **Humor na medida certa** — Algumas personas tem voz especifica (Elon: direto; Jobs: intransigente; Buffett: calmo e metaforico).

---

#### Imported: 7. Consulta Customizada

Usuario pode customizar o board:

```
"Analise com os olhos de Jobs e Buffett"
→ Board: steve-jobs + warren-buffett

"O que o Elon, Sam e a 007 pensam sobre seguranca da Auri?"
→ Board: elon-musk + sam-altman + 007

"Board completo sobre o projeto leiloeiro"
→ Board: todos + leiloeiro-ia + advogado-especialista
```

---

#### Imported: 8. Integracao Com Ecossistema

Esta skill usa as personas instaladas no ecossistema:
- Ao consultar cada persona, adotar sua perspectiva COMPLETA (nao superficial)
- Para questoes de leilao, incluir skills leiloeiro-* no board
- Para questoes juridicas, incluir advogado-especialista
- Para questoes de seguranca, incluir 007 e cred-omega
- task-intelligence pode ser usado antes da consulta para briefing da questao

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
