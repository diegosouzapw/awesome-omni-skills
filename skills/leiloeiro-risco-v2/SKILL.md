---
name: leiloeiro-risco-v2
description: "SKILL DE RISCO \u2014 AUDITOR DE RISCO EM LEIL\u00d5ES workflow skill. Use this skill when the user needs Analise de risco em leiloes de imoveis. Score 36 pontos, riscos juridicos/financeiros/operacionais, stress test 4 cenarios e ROI ponderado por risco and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["risk-analysis", "scoring", "stress-test", "brazilian", "leiloeiro-risco-v2", "leiloeiro-risco", "analise", "risco"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-17"
date_updated: "2026-04-24"
---

# SKILL DE RISCO — AUDITOR DE RISCO EM LEILÕES

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/leiloeiro-risco` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# SKILL DE RISCO — AUDITOR DE RISCO EM LEILÕES

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Categoria 1 — Riscos Jurídicos, Categoria 2 — Riscos Financeiros, Categoria 3 — Riscos Operacionais, Categoria 4 — Riscos De Mercado E Sistêmicos, Preencher Para Cada Lote.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "risco leilao" or related topics
- When the user mentions "analise risco imovel leilao" or related topics
- When the user mentions "score risco leilao" or related topics
- When the user mentions "imovel seguro leilao" or related topics
- When the user mentions "stress test leilao" or related topics
- When the user mentions "roi ponderado leilao" or related topics

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/fontes.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `scripts/governance.py` | Adds the next most relevant copied source file without loading the entire package |
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

Analise de risco em leiloes de imoveis. Score 36 pontos, riscos juridicos/financeiros/operacionais, stress test 4 cenarios e ROI ponderado por risco.

#### Imported: How It Works

Você é um **Auditor de Risco Sênior** especializado em leilões de imóveis, com visão
integrada de riscos jurídicos, financeiros, operacionais e de mercado. Seu papel é
mapear todos os riscos, quantificar os que podem ser quantificados e recomendar
a decisão de investimento.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @leiloeiro-risco-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @leiloeiro-risco-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @leiloeiro-risco-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @leiloeiro-risco-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/leiloeiro-risco`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@impress-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/fontes.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/governance.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [fontes.md](references/fontes.md)
- [governance.py](scripts/governance.py)
- [requirements.txt](scripts/requirements.txt)
- [fontes.md](references/fontes.md)
- [governance.py](scripts/governance.py)
- [requirements.txt](scripts/requirements.txt)

### Imported Reference Notes

#### Imported: Categoria 1 — Riscos Jurídicos

#### 1.1 Risco de Nulidade da Arrematação

| Risco | Probabilidade | Impacto | Score |
|-------|--------------|---------|-------|
| Falta de intimação do cônjuge | Médio | Muito Alto | 🔴 |
| Edital publicado incorretamente | Baixo | Alto | 🟡 |
| Avaliação desatualizada (>12 meses) | Médio | Médio | 🟡 |
| Bem impenhorável não arguido | Baixo | Muito Alto | 🔴 |
| Embargos com efeito suspensivo | Baixo | Muito Alto | 🔴 |
| Processo com recursos pendentes | Médio | Alto | 🟡 |
| Cônjuge sem meação respeitada | Baixo | Alto | 🟡 |

**Como mitigar:**
- Solicitar certidão dos autos (ou pesquisa no e-SAJ/PJE)
- Verificar se consta intimação do cônjuge
- Checar presença de embargos via busca no sistema processual
- Confirmar publicação do edital nos veículos exigidos

#### 1.2 Risco de Bem de Família

**Checklist de Exposição:**
- [ ] É o único imóvel do devedor? → **Alto risco de bem de família**
- [ ] Devedor reside no imóvel? → **Alto risco**
- [ ] Imóvel foi arguido como bem de família nos autos? → **Verificar decisão judicial**
- [ ] Execução é de crédito condominial ou tributário do próprio imóvel? → Exceção legal (pode penhorar)
- [ ] Fiança locatícia? → Súmula 549 STJ (pode penhorar — mas há divergência)

**Decisão:**
```
Se o imóvel É bem de família E a execução NÃO é de débito do próprio imóvel
ou crédito do art. 3º da Lei 8.009/90:
→ RISCO MUITO ALTO — NÃO ARREMATAR sem análise profunda dos autos
```

#### 1.3 Risco de Ônus Reais Ocultos

| Ônus | Como Detectar | Impacto |
|------|--------------|---------|
| Hipoteca anterior | Certidão de ônus reais | Alto (pode retomar o imóvel) |
| Usufruto vitalício | Matrícula atualizada | Muito Alto (não tem uso) |
| Penhora anterior | Certidão do distribuidor | Médio |
| Servidão | Matrícula | Médio (limita uso) |
| Aforamento (marinha) | Matrícula + SPU | Médio (laudêmio) |
| Ação de usucapião | Distribuidor | Alto (terceiro reivindica) |
| Promessa de compra e venda reg. | Matrícula | Alto |

**Ação:** Sempre obter certidão

#### Imported: Categoria 2 — Riscos Financeiros

#### 2.1 Risco de Débitos Acumulados

**Metodologia de Cálculo:**

```
IPTU:
  - Checar na prefeitura do município
  - Calcular débito total (principal + multa 20% + juros 1% a.m.)
  - Prazo prescricional: 5 anos (CTN Art. 174)
  - Impacto: propter rem — arrematante paga

CONDOMÍNIO:
  - Solicitar ao síndico/administradora extrato completo
  - Incluir: taxa condominial + multas + correção
  - Impacto: propter rem — arrematante paga (Súmula STJ 478)
  - Atenção: condomínio pode ter ação de cobrança paralela

ÁGUA/ESGOTO:
  - Verificar com concessionária (SABESP, CEDAE, Copasa etc.)
  - Pode gerar suspensão do serviço — custo de religação
  - Em geral: dívida pessoal, não propter rem (mas varia por estado)

ENERGIA ELÉTRICA:
  - Débito pessoal (não propter rem)
  - Verificar se há suspensão do serviço

TABELA RÁPIDA:
Débito estimado IPTU:          R$ ____________
Débito estimado Condomínio:    R$ ____________
Débito estimado Água:          R$ ____________
Outros:                        R$ ____________
TOTAL DÉBITOS:                 R$ ____________
```

#### 2.2 Risco de Desocupação

**Estimativa de Custo por Cenário:**

| Cenário | Custo Honorários | Custo de Tempo | Prazo | Probabilidade |
|---------|-----------------|----------------|-------|---------------|
| Ocupante sai voluntariamente | R$ 0 | R$ 0 | 0-30 dias | 20-30% |
| Negociação + ajuda de custo | R$ 3-10k | R$ 0 | 30-90 dias | 30-40% |
| Ação de imissão sem resistência | R$ 5-15k | custo financ. | 3-6 meses | 20-30% |
| Imissão + recursos do devedor | R$ 10-30k | custo financ. | 6-18 meses | 10-20% |
| Processo longo + violência | R$ 20-50k | custo financ. | 12-36 meses | 5-10% |

**Custo financeiro do tempo (capital imobilizado):**
```
Capital imobilizado × Taxa CDI × Meses / 12
Exemplo: R$ 300.000 × 10,5% × 12 meses / 12 = R$ 31.500/ano (custo de oportunidade)
```

#### 2.3 Risco de Obra/Reforma

**Estimativas de Custo de Reforma (valores 2024):**

| Tipo de Reforma | Custo por m² |
|----------------|---

#### Imported: Categoria 3 — Riscos Operacionais

#### 3.1 Risco de Não Conseguir Finalizar a Arrematação

**Após arrematar, o processo pode ser desfeito se:**

| Evento | Prazo para ocorrer | Probabilidade | Consequência |
|--------|-------------------|---------------|-------------|
| Devedor paga antes da assinatura do auto | A qualquer momento antes | Baixo-Médio | Leilão desfeito, dinheiro devolvido |
| Embargos com efeito suspensivo | Até o auto de arrematação | Baixo | Leilão suspenso |
| Nulidade arguida no prazo de 10 dias | 10 dias após arrematação | Baixo | Anulação do leilão |
| Bem de família reconhecido tardiamente | Após 10 dias — ação autônoma | Muito Baixo | Complexa defesa |
| Ação de embargos de terceiro | Qualquer momento (prazo prescricional) | Muito Baixo | Requer defesa judicial |

#### 3.2 Risco de Fraude ou Manipulação

**Sinais de alerta em leilões:**
- ⚠️ Leiloeiro não cadastrado na Junta Comercial
- ⚠️ Plataforma online desconhecida sem CNPJ verificável
- ⚠️ Valor de avaliação muito incompatível com mercado (extremos)
- ⚠️ Edital publicado em prazo inferior ao legal
- ⚠️ Lote com descrição vaga e sem matrícula informada
- ⚠️ Exigência de depósito antes de visualizar documentos

**Como proteger:**
- Verificar leiloeiro no site da Junta Comercial do estado
- Confirmar o processo judicial no sistema do TJ (e-SAJ, PJE, SEEU)
- Nunca pagar sem confirmação no processo judicial

---

#### Imported: Categoria 4 — Riscos De Mercado E Sistêmicos

#### 4.1 Risco de Liquidez no Momento da Saída

| Cenário Macroeconômico | Impacto na Revenda |
|-----------------------|-------------------|
| Selic sobe mais (>14%) | Crédito encarece → demanda cai → demora mais |
| Recessão econômica | Mercado trava → pode levar 2-3x mais tempo |
| Desemprego alto local | Comprador final some → sem saída |
| Novo empreendimento vizinho | Concorrência de novos → pressão de preço |
| Mudança de zoneamento | Pode desvalorizar (ZEU vira residencial baixo) |
| Evento local negativo (crime, inundação) | Deságio adicional de 20-40% |

#### 4.2 Risco Ambiental e Geotécnico

**Verificar antes de arrematar:**
- [ ] Imóvel em área de risco de deslizamento (CEMADEN)
- [ ] Imóvel em área de inundação (plano diretor municipal)
- [ ] Imóvel em APP (Área de Preservação Permanente — margens de rios)
- [ ] Contaminação do solo (áreas industriais, postos de gasolina)
- [ ] Laudo geotécnico de terrenos em encosta
- [ ] Histórico de sinistros (chuvas, enchentes) — INMET, prefeitura

**Fontes de consulta:**
- CEMADEN (cemaden.gov.br) — mapas de risco
- IBGE Malha Digital — zoneamento
- Prefeitura Municipal — alvará, habite-se, plano diretor
- MDR/MCID — banco de dados de risco

---

#### Imported: Preencher Para Cada Lote

```
RISCOS JURÍDICOS:
[ ] Intimação cônjuge confirmada?         Sim: 0 / Não: 3 / Não verificado: 2
[ ] Embargos com efeito suspensivo?       Não: 0 / Sim: 4
[ ] Bem de família provável?              Não: 0 / Possível: 2 / Provável: 4
[ ] Ônus reais verificados e ok?          Sim: 0 / Não verificado: 2 / Ônus grave: 4
[ ] Documentação regular?                 Sim: 0 / Irregular menor: 1 / Grave: 3

RISCOS FINANCEIROS:
[ ] Débitos IPTU + Cond. quantificados?   Sim (até 10% VMP): 0 / Altos (>10%): 2 / Não verificado: 2
[ ] Situação da posse?                    Desocupado: 0 / Cooperativo: 1 / Litigioso: 3
[ ] Obras necessárias?                    Não: 0 / Leves: 1 / Pesadas: 3

RISCOS OPERACIONAIS:
[ ] Leiloeiro verificado?                 Sim: 0 / Não: 2
[ ] Processo verificado no TJ?            Sim: 0 / Não: 2
[ ] Edital está completo?                 Sim: 0 / Incompleto: 2

RISCOS DE MERCADO:
[ ] Liquidez local?                       Alta: 0 / Média: 1 / Baixa: 3
[ ] Risco ambiental?                      Baixo: 0 / Médio: 2 / Alto: 4

SCORE TOTAL: ___ / 36

CLASSIFICAÇÃO:
0-5:   BAIXO RISCO ✅ — Proceder com segurança
6-10:  MÉDIO RISCO ⚠️ — Mitigar os pontos identificados
11-18: ALTO RISCO 🔴 — Só com expertise e desconto maior
19+:   MUITO ALTO RISCO ❌ — Evitar, salvo especialista experiente
```

---

#### Imported: Obrigatórias (Sempre, Para Qualquer Lote):

- [ ] Certidão de ônus reais (matrícula atualizada) — R$ 50-150
- [ ] Certidão negativa de IPTU (ou extrato de débitos)
- [ ] Leitura completa do edital (Bloco 1-8 da SKILL de Edital)
- [ ] Pesquisa do processo no sistema do TJ (ou cartório)
- [ ] Verificar leiloeiro na Junta Comercial

#### Imported: Complementares (Quando Score > 5):

- [ ] Certidão do distribuidor cível (ações no imóvel)
- [ ] Extrato de débitos de condomínio
- [ ] Visita ao imóvel ou à rua (Google Street View no mínimo)
- [ ] Consulta ao síndico sobre ocupação e estado
- [ ] Extrato de débitos de água/saneamento

#### Imported: Para Lotes De Alto Valor (>R$ 500K):

- [ ] Pareceria com advogado especialista para análise dos autos
- [ ] Laudo de vistoria técnica (engenheiro)
- [ ] Pesquisa de comparáveis com corretor CRECI local
- [ ] Análise de certidões do devedor (fraude à execução)
- [ ] Consulta ao plano diretor municipal (uso e ocupação do solo)

---

#### Imported: Tomada De Decisão — Árvore De Decisão

```
SCORE DE RISCO:

≤ 5 (BAIXO):
  → ROI líquido > CDI? SIM → ARREMATAR
  → ROI líquido > CDI? NÃO → AGUARDAR MELHOR OPORTUNIDADE

6-10 (MÉDIO):
  → Problemas são mitigáveis? SIM + ROI > CDI+5% → ARREMATAR com cautelas
  → Problemas são mitigáveis? NÃO → NÃO ARREMATAR

11-18 (ALTO):
  → Você é especialista? SIM + ROI > CDI+15% → AVALIAR COM ADVOGADO
  → Você é especialista? NÃO → NÃO ARREMATAR

> 18 (MUITO ALTO):
  → NÃO ARREMATAR (salvo casos excepcionais com assessoria)
```

---

---

#### Imported: Risco De Itbi Sobre Vmp (Não Sobre O Lance)

**O problema:**
Muitos municípios cobram ITBI sobre o **valor venal de referência** (VMP), não sobre
o valor efetivo da arrematação (lance). Isso aumenta o custo em até 3x.

**Exemplo:**
- Imóvel arrematado por R$ 200.000
- Valor venal de referência (prefeitura): R$ 400.000
- ITBI 3% sobre lance: R$ 6.000
- ITBI 3% sobre venal: R$ 12.000 ← cobrado pela prefeitura

**Base legal para contestar:**
- STJ Tema 1.113: ITBI deve incidir sobre o valor efetivo da transação
- Em leilão judicial: a carta de arrematação é o título — valor = lance
- Em leilão extrajudicial: a escritura com valor do lance é o título
- Possível impugnar administrativamente ou via mandado de segurança

**Recomendação:** Orçar ITBI sobre VMP (cenário pessimista) e incluir no custo total.
Se conseguir pagar sobre o lance, é economia extra.

#### Imported: Risco De Ir Ganho De Capital Na Revenda

- O lucro na revenda é tributado em 15% (até R$ 5M de ganho)
- Custo de aquisição: valor do lance + ITBI + comissão + registro + obras documentadas
- Isenção: venda até R$ 440.000 do único imóvel a cada 5 anos
- Isenção: reinvestimento em outro imóvel residencial em até 180 dias
- **Dica:** documentar TODAS as despesas com notas fiscais (reforma, regularização)
  para abater do ganho de capital

---

#### Imported: O Arrematante Está Protegido?

**Regra geral (Art. 903, §5º CPC):**
A arrematação em hasta pública opera como aquisição com proteção judicial.
O arrematante de boa-fé é protegido contra alienações fraudulentas anteriores.

**Mas atenção aos cenários:**

| Cenário | Risco para Arrematante | Proteção |
|---------|----------------------|----------|
| Devedor vendeu imóvel antes da penhora | Muito Baixo | Art. 903 CPC protege arrematante |
| Terceiro alega ter comprado antes da penhora | Médio | Depende de registro + boa-fé |
| Imóvel objeto de ação de usucapião por terceiro | Alto | Conflito de títulos — pode anular |
| Devedor doou para parente (fraude contra credores) | Baixo | Arrematante em hasta protegido |

**Verificação obrigatória:**
- Certidão de distribuidor cível: verificar se há ação real (usucapião, reivindicatória)
  movida por terceiro sobre o imóvel
- Se existir ação de terceiro reivindicando o imóvel: ALTO RISCO — evitar

---

#### Imported: Como Fazer O Stress Test Do Investimento:

```
CENÁRIO OTIMISTA (probabilidade 20%):
  - Vende pelo VMP em 3 meses
  - Sem custos extras de desocupação
  - ITBI sobre lance (não sobre VMP)
  - ROI: ___ %

CENÁRIO BASE (probabilidade 50%):
  - Vende com 10% desconto sobre VMP em 6 meses
  - Custo de desocupação negociado (R$ 5k)
  - ITBI sobre VMP
  - ROI: ___ %

CENÁRIO PESSIMISTA (probabilidade 25%):
  - Vende com 20% desconto sobre VMP em 12 meses
  - Ação de imissão na posse (R$ 15k + 6 meses)
  - Reforma necessária (R$ 30k)
  - ROI: ___ %

CENÁRIO CATASTRÓFICO (probabilidade 5%):
  - Arrematação anulada (perda do sinal, mas dinheiro devolvido)
  - OU: não consegue vender em 24 meses (capital travado)
  - OU: débitos ocultos consomem a margem (condomínio alto)
  - ROI: ___ % (possivelmente negativo)

ROI PONDERADO (esperança matemática):
= (ROI otimista × 0,20) + (ROI base × 0,50) + (ROI pessimista × 0,25)
  + (ROI catastrófico × 0,05)

Se ROI ponderado > CDI → ARREMATAR
Se ROI ponderado < CDI → NÃO VALE O RISCO
```

---

#### Imported: Glossário De Riscos

| Termo | Definição |
|-------|-----------|
| Propter Rem | Obrigação que segue o bem (IPTU, condomínio) — não desaparece com a venda |
| Risco Jurídico | Possibilidade de anulação, nulidade ou impugnação da arrematação |
| Risco Operacional | Dificuldade na execução (desocupação, reforma, regularização) |
| Risco Tributário | ITBI sobre VMP vs. lance; IR sobre ganho de capital na revenda |
| Custo de Oportunidade | O que se deixa de ganhar ao imobilizar capital nesta operação |
| Stress Test | Simulação do pior cenário possível para o investimento |
| Due Diligence | Diligência prévia completa antes de arrematar |
| VaR (Value at Risk) | Perda máxima estimada em cenário adverso |
| Margem de Segurança | Buffer financeiro entre o custo total e o valor de mercado |
| Fraude à Execução | Alienação do bem após a citação para frustrar a execução (Art. 792 CPC) |
| ROI Ponderado | Retorno esperado considerando probabilidade de cada cenário |

---

#### Imported: Instalação

Skill baseada em conhecimento (knowledge-only). Não requer instalação de dependências.

```bash

#### Imported: Verificar Se A Skill Está Registrada:

python C:\Users\renat\skills\agent-orchestrator\scripts\scan_registry.py
```

---

#### Imported: Comandos E Uso

Como usar esta skill:

```bash

#### Imported: Uso Via Orchestrator (Automático):

python agent-orchestrator/scripts/match_skills.py "risco leilao imovel"

#### Imported: "Score De Risco Dessa Arrematação"

```

---

#### Imported: Governança

Esta skill implementa as seguintes políticas de governança:

- **action_log**: Análises de risco são registradas pelo log_action para auditoria completa
- **rate_limit**: Controle via check_rate integrado ao ecossistema
- **requires_confirmation**: Score >28/36 (MUITO ALTO) gera confirmation_request obrigatório
- **warning_threshold**: Score >21/36 (ALTO) dispara warning_threshold com alerta ao usuário

Políticas adicionais:
- **Responsável:** Ecossistema Leiloeiro IA
- **Escopo:** Análise e gestão de risco em leilões de imóveis
- **Limitações:** Scores e classificações são indicativos. Decisão final é do investidor.
- **Auditoria:** Validada por skill-sentinel
- **Dados sensíveis:** Não armazena dados de risco do usuário

---

#### Imported: Referências

Fontes normativas e referências de risco:
- CEMADEN (cemaden.gov.br) — mapas de risco ambiental
- IBGE — malha digital e zoneamento
- CPC/2015 — Arts. 829-925 (Execução e Arrematação)
- Lei 9.514/1997 — Alienação Fiduciária
- Lei 8.009/1990 — Bem de Família
- STJ — jurisprudência consolidada sobre leilões
- CTN Art. 130 — responsabilidade tributária propter rem

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
