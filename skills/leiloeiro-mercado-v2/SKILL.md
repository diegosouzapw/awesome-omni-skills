---
name: leiloeiro-mercado-v2
description: "SKILL DE MERCADO \u2014 ANALISTA DE ATIVOS IMOBILI\u00c1RIOS EM LEIL\u00c3O workflow skill. Use this skill when the user needs Analise de mercado imobiliario para leiloes. Liquidez, desagio tipico, ROI, estrategias de saida (flip/reforma/renda), Selic 2025 e benchmark CDI/FII and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["market-analysis", "real-estate", "roi", "brazilian", "leiloeiro-mercado-v2", "leiloeiro-mercado", "analise", "mercado"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-17"
date_updated: "2026-04-25"
---

# SKILL DE MERCADO — ANALISTA DE ATIVOS IMOBILIÁRIOS EM LEILÃO

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/leiloeiro-mercado` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# SKILL DE MERCADO — ANALISTA DE ATIVOS IMOBILIÁRIOS EM LEILÃO

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Mapa De Liquidez (Tempo Médio De Revenda Pós-Arrematação), Por Modalidade, Mapa De Deságio Por Situação Do Imóvel, Estratégia A — Flip Rápido (Curto Prazo), Estratégia B — Reforma E Valorização (Médio Prazo).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "mercado leilao imovel" or related topics
- When the user mentions "roi leilao" or related topics
- When the user mentions "liquidez imovel leilao" or related topics
- When the user mentions "desagio leilao" or related topics
- When the user mentions "flip imovel leilao" or related topics
- When the user mentions "reforma leilao" or related topics

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

Analise de mercado imobiliario para leiloes. Liquidez, desagio tipico, ROI, estrategias de saida (flip/reforma/renda), Selic 2025 e benchmark CDI/FII.

#### Imported: How It Works

Você é um **Analista Profissional de Mercado Imobiliário** especializado em
ativos estressados (distressed assets) e leilões, com visão estratégica de
investimento, liquidez, retorno e timing de mercado.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @leiloeiro-mercado-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @leiloeiro-mercado-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @leiloeiro-mercado-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @leiloeiro-mercado-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/leiloeiro-mercado`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Mapa De Liquidez (Tempo Médio De Revenda Pós-Arrematação)

| Segmento | Capital SP/RJ | Capitais Grandes | Interior | Interior Pequeno |
|----------|--------------|-----------------|----------|-----------------|
| Apart. 1-2 quartos | 30-60 dias | 60-90 dias | 90-180 dias | 180-360 dias |
| Apart. 3 quartos | 60-90 dias | 90-150 dias | 120-240 dias | 240+ dias |
| Casa condomínio | 60-120 dias | 90-180 dias | 120-240 dias | 240+ dias |
| Sala comercial | 120-240 dias | 180-360 dias | 360+ dias | 360+ dias |
| Terreno urbano | 90-180 dias | 180-360 dias | 180-360 dias | 360+ dias |
| Galpão logístico | 90-180 dias | 90-180 dias | 180-360 dias | 360+ dias |
| Imóvel rural | 180-360 dias | 360+ dias | 360+ dias | 360+ dias |

**Fatores que aceleram a venda:**
- Preço abaixo do mercado (10-15% de desconto)
- Imóvel reformado e apresentável
- Documentação regularizada
- Boa foto e anúncio em portais (ZAP, Viva Real)
- Corretor CRECI com carteira de clientes

**Fatores que travam a venda:**
- Pendências documentais (ITBI não pago, matrícula não atualizada)
- Imóvel em mau estado / obras inacabadas
- Débitos não quitados que aparecem na matrícula
- Litígio pendente no imóvel (ação real)

---

#### Imported: Por Modalidade

**Leilões Judiciais (CPC):**
```
1º Leilão (mínimo = avaliação):
  - Frequência de arrematação no 1º: 20-30%
  - Deságio médio nas arrematações do 1º: 0-15% (compram pela avaliação)

2º Leilão (sem mínimo / veda vil preço):
  - Frequência de arrematação no 2º: 50-70%
  - Deságio médio nas arrematações do 2º: 30-50%
  - Deságio máximo observado: até 65-70% (imóveis problemáticos)
```

**Leilões Extrajudiciais (Lei 9.514/97 — Bancos):**
```
1º Leilão (mínimo = valor do imóvel, dado em contrato):
  - Frequência de arrematação: 30-50%
  - Deságio médio: 20-35%
  - CEF: deságio médio histórico ~28%

2º Leilão (mínimo = saldo devedor):
  - Frequência de arrematação: 60-80%
  - Deságio médio: 35-55%
  - Oportunidade: saldo devedor pode ser muito menor que valor de mercado
```

**Venda Direta Bancária:**
```
Negociação direta (sem concorrência):
  - Deságio médio: 15-30%
  - Menos competição que leilão
  - Possibilidade de financiamento pelo próprio banco
  - CEF financia até 80% do valor de avaliação nas vendas diretas
```

#### Imported: Mapa De Deságio Por Situação Do Imóvel

| Situação | Faixa de Deságio |
|----------|-----------------|
| Desocupado, sem débitos, documentação ok | 15-25% |
| Desocupado, débitos quantificados | 25-35% |
| Ocupado (devedor cooperativo) | 30-40% |
| Ocupado (litigioso) + débitos | 40-55% |
| Irregular documentalmente | 35-50% |
| Imóvel em mau estado | 35-55% |
| Combinação de problemas | 50-70% |

---

#### Imported: Estratégia A — Flip Rápido (Curto Prazo)

**Perfil:** Investidor com capital e rede de compradores finais.

```
Comprar com deságio de 35%+
↓
Regularizar documentação (1-3 meses)
↓
Reforma leve se necessário (opcional)
↓
Vender com 15-20% de desconto sobre VMP (mais rápido que mercado)
↓
Lucro bruto: 15-20% sobre o investido em 3-9 meses
```

**Análise:**
- Retorno bruto esperado: 15-25%
- Prazo: 3-12 meses
- Risco: médio (se imóvel bem selecionado)
- Capital necessário: 100% do lance + custos

#### Imported: Estratégia B — Reforma E Valorização (Médio Prazo)

**Perfil:** Investidor com capital e conhecimento em obras.

```
Comprar com deságio de 40%+
↓
Reforma completa (3-6 meses)
↓
Vender pelo valor de mercado de imóvel reformado (premium de 20-30%)
↓
Lucro bruto: 30-50% sobre o investido
```

**Análise:**
- Retorno bruto esperado: 30-50%
- Prazo: 6-18 meses
- Risco: médio-alto (risco de obra e mercado)
- Capital necessário: 100% lance + 20-30% do lance em reforma

#### Imported: Estratégia C — Renda (Longo Prazo)

**Perfil:** Investidor que busca fluxo de caixa passivo.

```
Comprar com deságio de 25%+
↓
Regularizar e alugar (1-3 meses)
↓
Receber aluguel abaixo do preço de mercado (para locar rápido)
↓
Yield superior ao mercado pela base de custo menor
```

**Yield típico no Brasil:**
- Yield mercado normal: 4-6% a.a. (grandes capitais)
- Yield em imóvel arrematado com 30% de deságio: 6-9% a.a.
- Yield em imóvel arrematado com 40% de deságio: 7-12% a.a.

#### Imported: Estratégia D — Regularização E Revenda (Especialista)

**Perfil:** Advogado/especialista com capacidade de resolver situações complexas.

```
Comprar imóvel com problemas jurídicos/documentais com deságio de 50%+
↓
Resolver pendências: irregular, sem habite-se, área divergente
↓
Vender regularizado pelo valor de mercado
↓
Lucro bruto: 40-70% sobre o investido
```

---

#### Imported: Simulação Rápida De Roi

```
DADOS DO LOTE:
Valor de Avaliação (VAN):           R$ _____________
Valor de Mercado Estimado (VMP):    R$ _____________
Lance Pretendido:                   R$ _____________
Deságio sobre VMP:                  ____%

CUSTOS DE AQUISIÇÃO:
Comissão Leiloeiro (5%):            R$ _____________
ITBI (3% sobre VMP):                R$ _____________
Registro + Escritura:               R$ _____________
Advogado (se necessário):           R$ _____________
Débitos (IPTU + Cond.):             R$ _____________
Obras/Reforma:                      R$ _____________
Custo Total:                        R$ _____________

CUSTO TOTAL INVESTIDO:              R$ _____________

CENÁRIO DE SAÍDA:
Valor de Venda Esperado:            R$ _____________
Comissão corretagem (5-6%):         R$ _____________
IRPF Ganho de Capital (15%):        R$ _____________

RESULTADO:
Lucro Bruto:                        R$ _____________
Lucro Líquido:                      R$ _____________
ROI Bruto:                          ____%
ROI Líquido:                        ____%
Prazo Estimado:                     ___ meses
Retorno Anualizado (a.a.):          ____%
```

**Benchmarks de comparação:**
- CDI 2024: ~10.5% a.a.
- IPCA 2024: ~4.5% a.a.
- LCI/LCA isentas: ~9-10% a.a.
- FIIs (yield médio): ~9-11% a.a.
- **Para valer a pena vs. CDI:** ROI anualizado mínimo de 15-20%

---

#### Imported: Melhor Momento Para Comprar Em Leilão

**Ciclo Imobiliário e Oportunidades:**
```
ALTA DE JUROS (SELIC alta):
  → Crédito mais caro → mais inadimplência → mais leilões
  → Menor concorrência por imóveis → MELHOR MOMENTO PARA COMPRAR
  → Selic acima de 12%: mercado de leilões aquece (oferta sobe)

BAIXA DE JUROS (SELIC baixa):
  → Crédito barato → menos inadimplência → menos leilões
  → Maior competição pelos lotes → preços sobem
  → Selic abaixo de 9%: mercado de leilões se contrai
```

**Sazonalidade:**
- **Dezembro/Janeiro:** Leilões com menos concorrência (férias, festas)
- **Março-Abril:** Início de ano fiscal — leilões da Caixa com novos lotes
- **Julho:** Período de férias — competição reduzida
- **Outubro/Novembro:** Alta temporada de leilões judiciais (fim do ano processual)

#### Imported: Análise Por Banco

**Caixa Econômica Federal:**
- Maior estoque de imóveis retomados do Brasil (>20.000 imóveis em 2024)
- Programas próprios: Venda Online, Licitação Aberta, Proposta Online
- Forte em imóveis do PMCMV/MCMV — popular/econômico
- Financia arrematação: até 80% do valor de avaliação
- Diferencial: possibilidade de usar FGTS para completar o pagamento

**Santander:**
- Estoque médio, foco em imóveis de médio-alto padrão
- Plataforma santanderx.com.br
- Leilões mensais regulares

**Itaú/Bradesco/BB:**
- Estoques menores, imóveis de todos os padrões
- Leilões extrajudiciais mais frequentes que judiciais
- Tendem a limpar o estoque em dezembro

---

#### Imported: 6. Análise Do Perfil De Comprador Final

Identificar o perfil correto do comprador final aumenta a velocidade de venda:

| Perfil | Imóvel Ideal | Canal de Venda |
|--------|-------------|----------------|
| Família classe média | Apt 3Q, casa condomínio | ZAP, Viva Real, corretor |
| Jovem casal | Studio, 1-2Q, localização central | Instagram, Quinto Andar |
| Empresário/Investidor | Comercial, galpão, terreno | Indicação, CRECI |
| Locador | Apt bem localizado, studio | Imobiliárias especializadas |
| Incorporador | Terreno em ZEU/ZC | Construtoras, brokers |
| FII/REIT | Galpão, laje corporativa, varejo | B3, gestores de FII |

---

#### Imported: Riscos Que Afetam A Estratégia De Saída

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Mercado local sofre queda | Médio | Alto | Diversificar geograficamente |
| Imóvel não aluga/vende no prazo | Médio | Médio | Aceitar desconto maior na saída |
| Reforma acima do orçamento | Alto | Médio | Margem de 30% para obras |
| Novo empreendimento concorrente | Baixo | Médio | Verificar alvarás no entorno |
| Aprovação de zoneamento negativo | Baixo | Alto | Verificar plano diretor municipal |
| Desaceleração econômica | Médio | Alto | Priorizar imóveis de necessidade básica |
| Alta súbita da Selic | Baixo | Médio | Saída rápida (flip) vs. renda |

---

#### Imported: Rotina De Monitoramento Semanal

```
1. ALERTAS ATIVOS:
   - ZAP Imóveis: configurar alertas por bairro, tipo e preço
   - Viva Real: idem
   - CEF Imóveis: acompanhar novos lotes (atualiza ~semanal)
   - Leilão Judicial (TJ): configurar alertas por comarca

2. ANÁLISE DE NOVO LOTE (30 min):
   a) Abrir edital → verificar Bloco 1-8 (SKILL de Edital)
   b) Pesquisar comparáveis no ZAP/Viva Real no bairro
   c) Verificar Google Street View da localização
   d) Calcular ROI na planilha (Bloco 4 desta skill)
   e) Solicitar certidão de ônus no cartório (se interessante)

3. DILIGÊNCIA PRESENCIAL (se ROI > 20%):
   - Visitar o imóvel (ou vizinhança)
   - Conversar com síndico/vizinhos
   - Verificar estado de conservação real
   - Confirmar informações do edital

4. DECISÃO FINAL:
   - Score de Risco do Edital (SKILL de Risco)
   - ROI líquido vs. CDI
   - Capital disponível e prazo
   - Lance máximo definido → ENTRAR NO LEILÃO
```

---

#### Imported: Indicadores Chave (Atualizar Periodicamente)

```
SELIC Meta (fev/2025):           13,25% a.a.
CDI:                             ~13,15% a.a.
IPCA (12 meses):                 ~5,0% a.a.
IGP-M (12 meses):                ~4,5% a.a.
Dólar (USD/BRL):                 ~5,80-6,00
Poupança (a.a.):                 ~7,7% (quando Selic > 8,5%)
LCI/LCA (isenta IR):             ~10-12% a.a.
FIIs - dividend yield médio:     ~10-12% a.a. (IFIX)
```

**Impacto no Mercado de Leilões (Selic 13,25%):**
- Crédito imobiliário mais caro → mais inadimplência → MAIS LEILÕES
- Taxa de financiamento habitacional: ~11-13% a.a. (TR+10 a TR+12)
- Demanda por imóveis desacelera → mais tempo para vender
- Bancos querem limpar estoques → deságios maiores em venda direta
- **MOMENTO FAVORÁVEL para comprar em leilão (mais oferta, menos concorrência)**

#### Imported: Análise De Financiamento Pós-Arrematação

**Custo do financiamento em cenário atual:**
```
Valor financiado: R$ 300.000
Prazo: 360 meses
Taxa: 11,5% a.a. (média CEF 2025)
Parcela inicial: ~R$ 3.450
Total pago em 30 anos: ~R$ 700.000

Para valer a pena financiar imóvel de leilão:
→ O deságio precisa ser MAIOR que o custo financeiro adicional
→ Regra prática: só financia se deságio for > 30% E taxa < 12% a.a.
→ Pagamento à vista SEMPRE é mais vantajoso se tiver capital
```

#### Imported: Benchmark: Quanto O Leilão Precisa Render Para Superar O Cdi?

```
Capital: R$ 500.000
CDI líquido (15% IR sobre 13,15%): ~11,2% a.a. = R$ 56.000/ano

Para superar CDI em 12 meses:
→ Precisa lucrar > R$ 56.000 líquido na arrematação
→ Sobre capital de R$ 500k, precisa de ROI > 11,2% a.a.
→ Considerando custos (ITBI, comissão, registro = ~10%):
→ DESÁGIO MÍNIMO para superar CDI: ~25% sobre VMP
```

---

#### Imported: Quadro Comparativo De Investimento

| Investimento | Retorno Esperado | Risco | Liquidez | Capital Mín. |
|-------------|-----------------|-------|----------|-------------|
| CDI/Tesouro Selic | 11-13% a.a. | Muito baixo | D+0 a D+1 | R$ 30 |
| FIIs (IFIX) | 10-12% a.a. | Médio | D+2 | R$ 100 |
| LCI/LCA | 10-12% a.a. | Baixo | Carência 90d | R$ 1.000 |
| Imóvel compra direta | 4-8% a.a. (renda) | Médio | 3-12 meses | R$ 200k+ |
| **Leilão — Flip** | **20-50% no período** | **Médio-Alto** | **3-12 meses** | **R$ 50k+** |
| **Leilão — Renda** | **8-15% a.a.** | **Médio** | **12+ meses** | **R$ 100k+** |
| **Leilão — Reforma** | **30-60% no período** | **Alto** | **6-18 meses** | **R$ 150k+** |

**Conclusão:** Leilão só supera CDI de forma consistente com:
1. Deságio mínimo de 25-30%
2. Due diligence completa (reduzir surpresas)
3. Estratégia de saída definida antes do lance
4. Reserva de 15-20% do capital para imprevistos

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

python agent-orchestrator/scripts/match_skills.py "mercado imobiliario leilao"

#### Imported: "Compare Leilão Vs Cdi"

```

---

#### Imported: Governança

Esta skill implementa as seguintes políticas de governança:

- **action_log**: Análises de mercado são registradas pelo log_action para rastreabilidade
- **rate_limit**: Controle via check_rate integrado ao ecossistema
- **requires_confirmation**: Projeções de ROI negativo geram confirmation_request ao usuário
- **warning_threshold**: ROI abaixo do CDI dispara warning_threshold com alerta automático

Políticas adicionais:
- **Responsável:** Ecossistema Leiloeiro IA
- **Escopo:** Análise de mercado imobiliário e estratégias de investimento em leilão
- **Limitações:** Projeções e estimativas. Não constitui recomendação de investimento.
- **Auditoria:** Validada por skill-sentinel
- **Dados sensíveis:** Não armazena dados financeiros do usuário

---

#### Imported: Referências

Fontes e referências de mercado:
- ZAP Imóveis (zapimoveis.com.br) — dados de mercado
- Viva Real (vivareal.com.br) — comparativos de preço
- FIPEZAP — índice de preços imobiliários
- IFIX (B3) — índice de fundos imobiliários
- SINDUSCON-SP — CUB e custos de construção
- Banco Central — Selic, CDI, séries históricas
- CEF — portal de imóveis retomados

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
