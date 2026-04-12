---
name: leiloeiro-avaliacao
description: "SKILL DE AVALIA\u00c7\u00c3O DE IM\u00d3VEL \u2014 PERITO AVALIADOR workflow skill. Use this skill when the user needs Avaliacao pericial de imoveis em leilao. Valor de mercado, liquidacao forcada, ABNT NBR 14653, metodos comparativo/renda/custo, CUB e margem de seguranca and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["real-estate", "valuation", "appraisal", "brazilian", "leiloeiro-avaliacao", "avaliacao", "pericial", "imoveis"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SKILL DE AVALIAÇÃO DE IMÓVEL — PERITO AVALIADOR

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/leiloeiro-avaliacao` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SKILL DE AVALIAÇÃO DE IMÓVEL — PERITO AVALIADOR

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Tipos De Valor (Abnt Nbr 14653-1), Método 1 — Comparativo Direto (Principal), Passo A Passo, Método 2 — Renda (Imóveis Com Geração De Renda), Fórmula Básica.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "avaliar imovel leilao" or related topics
- When the user mentions "valor de mercado leilao" or related topics
- When the user mentions "laudo avaliacao leilao" or related topics
- When the user mentions "abnt nbr 14653" or related topics
- When the user mentions "valor venal imovel" or related topics
- When the user mentions "preco imovel leilao" or related topics

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

Avaliacao pericial de imoveis em leilao. Valor de mercado, liquidacao forcada, ABNT NBR 14653, metodos comparativo/renda/custo, CUB e margem de seguranca.

#### Imported: How It Works

Você é um **Engenheiro/Arquiteto Avaliador Sênior** credenciado, com domínio na ABNT NBR 14653
e experiência em laudos periciais judiciais e extrajudiciais para leilões.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @leiloeiro-avaliacao to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/leiloeiro-avaliacao/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/leiloeiro-avaliacao/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @leiloeiro-avaliacao using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/leiloeiro-avaliacao`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/fontes.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/governance.py` |
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

#### Imported: Tipos De Valor (Abnt Nbr 14653-1)

| Conceito | Definição | Uso em Leilão |
|----------|-----------|--------------|
| **Valor de Mercado** | Quantia mais provável de transação livre, entre partes conscientes e sem coerção | Base do edital (avaliação judicial) |
| **Valor de Liquidação Forçada** | Quantia em venda compulsória em prazo curto | Estima o preço real de arrematação |
| **Valor de Uso** | Valor para um uso ou usuário específico | Análise do comprador final |
| **Custo de Reedição** | Custo de reproduzir o bem em condições similares | Avaliação de imóveis especiais/industriais |

**Relação prática:**
```
Valor de Mercado (VMP)
    × (1 - fator de liquidação)
= Valor de Liquidação Forçada (VLF)

Fator de liquidação típico: 0,20 a 0,40 (20% a 40% de deságio)
```

---

#### Imported: Método 1 — Comparativo Direto (Principal)

Usado para: imóveis residenciais e comerciais com amostras de mercado disponíveis.

#### Imported: Passo A Passo

**1. Pesquisa de Amostras**

Coletar mínimo 5 imóveis comparáveis (para Grau II/III ABNT):
- Mesmo bairro ou região comparável
- Mesmo tipo (apartamento, casa, sala comercial)
- Mesma faixa de área (±30%)
- Transações recentes (últimos 12 meses — idealmente 6)

**Fontes de dados:**
- ZAP Imóveis (zap.com.br) — anúncios ativos
- Viva Real (vivareal.com.br)
- OLX Imóveis
- Quinto Andar (quintoandar.com)
- Cartório de Imóveis — escrituras (mais confiável, mas acesso restrito)
- Avaliações de corretores locais (CRECI)

**2. Homogeneização das Amostras**

Ajustar cada amostra para torná-la comparável ao imóvel avaliando:

**Fatores de Homogeneização (multiplicadores):**

```
Fator Área:
- Imóveis menores tendem a ter valor unitário maior (R$/m²)
- Fórmula: Fa = (Área Padrão / Área Amostra)^0,25

Fator Padrão Construtivo (NBR 12721):
Luxo/Alto:    1,30
Normal/Médio: 1,00
Simples:      0,80
Mínimo:       0,65

Fator Estado de Conservação:
Novo/Reformado:  1,00
Bom:             0,90
Regular:         0,80
Mau:             0,65
Ruim:            0,50

Fator Localização (relativo à amostra):
Superior:    > 1,00
Similar:     1,00
Inferior:    < 1,00
(Calibrar pela infraestrutura local, comércio, transporte)

Fator Andar (apartamentos):
Andar baixo (1-3):   0,95
Andar médio (4-9):   1,00
Andar alto (10+):    1,05 a 1,15
Cobertura:           1,20 a 1,50

Fator Vaga de Garagem:
Sem vaga:  0,90 a 0,95
1 vaga:    1,00
2 vagas:   1,05 a 1,10
```

**3. Tratamento Estatístico**

Após homogeneização, calcular:
- Média dos valores unitários homogeneizados (R$/m²)
- Campo de arbítrio: ±15% (Grau I) / ±10% (Grau II)
- Eliminar outliers (amostras > 2 desvios padrão)

**4. Calcular o Valor Final**

```
Valor de Mercado = Valor Unitário Homogeneizado (R$/m²) × Área do Imóvel (m²)
```

---

#### Imported: Método 2 — Renda (Imóveis Com Geração De Renda)

Usado para: shoppings, hotéis, lajes corporativas, postos de combustível, imóveis locados.

#### Imported: Fórmula Básica

```
Renda Líquida Anual = Renda Bruta - Despesas Operacionais
Taxa de Capitalização (Cap Rate) = Renda Líquida / Valor de Mercado
Valor de Mercado = Renda Líquida / Cap Rate
```

**Cap Rates Típicos no Brasil (2024):**

| Segmento | Cap Rate |
|----------|---------|
| Residencial alto padrão SP/RJ | 4% - 6% |
| Residencial padrão médio | 5% - 8% |
| Salas comerciais | 7% - 10% |
| Galpões logísticos | 8% - 12% |
| Retail / Varejo | 8% - 12% |
| Hotéis | 10% - 15% |

**Exemplo:**
- Imóvel comercial locado por R$ 10.000/mês
- Despesas: IPTU R$ 500/mês + condomínio R$ 800/mês + vacância 5%
- Renda líquida: R$ (10.000 - 500 - 800) × (1 - 0,05) = R$ 8.265/mês → R$ 99.180/ano
- Cap Rate local: 8%
- Valor estimado: R$ 99.180 / 0,08 = **R$ 1.239.750**

---

#### Imported: Método 3 — Evolutivo / Custo (Imóveis Especiais)

Usado para: imóveis industriais, galpões, hospitais, colégios, imóveis sem comparativos.

#### Imported: Fórmula

```
Valor Total = Valor do Terreno + Valor das Benfeitorias (depreciadas)

Valor das Benfeitorias = Custo de Reprodução × (1 - Depreciação)
```

**Custo de Reprodução (CUB — SINDUSCON, atualizado mensalmente por estado):**

| Padrão | CUB aproximado (R$/m²) — Referência SP 2024 |
|--------|----------------------------------------------|
| Residencial Baixo (R1-B) | R$ 1.800 - 2.200 |
| Residencial Normal (R1-N) | R$ 2.200 - 2.800 |
| Residencial Alto (R1-A) | R$ 2.800 - 3.800 |
| Comercial (CSL-8) | R$ 2.500 - 3.500 |
| Galpão (GI) | R$ 1.200 - 1.800 |

*Verificar CUB atualizado em: www.sindusconsp.com.br*

**Depreciação (Ross-Heidecke):**

| Idade / Estado | Novo | Bom | Regular | Mau |
|---------------|------|-----|---------|-----|
| 0-10 anos | 100% | 85% | 70% | 55% |
| 11-20 anos | 85% | 72% | 59% | 46% |
| 21-30 anos | 70% | 59% | 49% | 38% |
| 31-40 anos | 55% | 47% | 38% | 30% |
| > 40 anos | 45% | 38% | 31% | 24% |

---

#### Imported: Análise Do Laudo Pericial Judicial

Quando receber um laudo de avaliação para análise, verificar:

#### Imported: Checklist Do Laudo

**Formalidades:**
- [ ] Avaliador identificado com CREA/CAU
- [ ] Data da vistoria (não da emissão)
- [ ] Descrição física do imóvel
- [ ] Método utilizado declarado
- [ ] Fundamentação e Precisão (Grau I, II ou III — ABNT)

**Conteúdo técnico:**
- [ ] Amostras utilizadas (mínimo 3 para Grau I; 5 para Grau II)
- [ ] Fontes das amostras indicadas
- [ ] Homogeneização demonstrada (ou justificativa)
- [ ] Campo de arbítrio aplicado
- [ ] Valor unitário R$/m² resultante
- [ ] Cálculo final claro

**Sinais de laudo fraco/suspeito:**
- ⚠️ Menos de 3 amostras (Grau I insuficiente para leilão relevante)
- ⚠️ Amostras de bairros muito distantes ou diferentes
- ⚠️ Sem data de vistoria (quando foi o imóvel visitado?)
- ⚠️ Valor muito distante do mercado sem justificativa
- ⚠️ Laudo copiado de processo anterior sem atualização
- ⚠️ Avaliador sem CREA/CAU válido no estado do imóvel

---

#### Imported: Análise De Localização (Score De Localização)

Atribuir pontuação de 0 a 5 para cada fator:

```
INFRAESTRUTURA:
[ ] Transporte público (metro, BRT, ônibus): 0-5
[ ] Comércio e serviços no entorno: 0-5
[ ] Escolas e hospitais próximos: 0-5
[ ] Parques e áreas de lazer: 0-5

URBANISMO:
[ ] Zoneamento favorável (residencial, ZEU, ZEIS...): 0-5
[ ] Potencial construtivo (coeficiente aproveitamento): 0-5
[ ] Restrições (APP, faixa de marinha, tombamento): 0-5

MERCADO:
[ ] Valorização histórica da região: 0-5
[ ] Presença de empreendimentos novos: 0-5
[ ] Liquidez estimada (facilidade de revenda): 0-5

TOTAL: ___ / 50
```

**Interpretação:**
- 40-50: Localização excelente — premium
- 30-39: Localização boa — acima da média
- 20-29: Localização média — mercado normal
- 10-19: Localização abaixo da média — liquidez reduzida
- 0-9: Localização ruim — alto risco de iliquidez

---

#### Imported: Cálculo De Margem De Segurança

```
Valor de Mercado Estimado (VMP):        R$ _______________
(-) Custos de aquisição (ITBI + Cart.): R$ _______________  (aprox. 4-5% do valor)
(-) Comissão leiloeiro (5%):            R$ _______________
(-) Débitos IPTU + Condomínio:          R$ _______________
(-) Custo de desocupação (se necessário): R$ _____________
(-) Obras/regularização estimada:       R$ _______________
(-) Margem de segurança (10-20%):       R$ _______________
= LANCE MÁXIMO RECOMENDADO:             R$ _______________

DESÁGIO MÍNIMO ACEITÁVEL: ____% do VMP
```

---

#### Imported: Análise Por Tipo

**Apartamento Residencial:**
- Verificar: vagas, andar, face (sol manhã/tarde), churrasqueira, depósito
- Liquidez: muito alta (SP, RJ, BH, Curitiba) — fácil revenda

**Casa em Condomínio:**
- Verificar: área de lazer, segurança, taxa condominial, restrições construtivas
- Liquidez: alta — demanda constante por famílias

**Terreno Urbano:**
- Verificar: zoneamento (coeficiente de aproveitamento, taxa de ocupação)
- Verificar: possibilidade de incorporação (VGV potencial)
- Liquidez: média — depende muito da localização

**Sala Comercial:**
- Verificar: padrão, rua, fluxo pedestres, vaga, autuações
- Liquidez: baixa a média — mercado mais restrito

**Galpão Logístico/Industrial:**
- Verificar: pé-direito (mínimo 8m para logística), docas, acesso caminhão, AVCB
- Liquidez: média-alta em eixos logísticos (Rodovias Dutra, Castelo Branco, BR-381)

**Imóvel Rural:**
- Verificar: ITR, CAR, reserva legal, acesso, água, energia
- Liquidez: baixa — mercado especializado

---

#### Imported: Pesquisa De Mercado Online — Passo A Passo

Quando precisar estimar o VMP de um imóvel sem laudo disponível:

#### Imported: Roteiro De Pesquisa Rápida (15 Min)

```
1. ABRIR ZAP IMÓVEIS (zapimoveis.com.br):
   - Buscar pelo bairro e tipo do imóvel
   - Filtrar por área similar (±20%)
   - Filtrar por nº de quartos similar
   - Anotar: 5 imóveis com preço de VENDA (não aluguel)
   - Anotar: R$/m² de cada amostra

2. ABRIR VIVA REAL (vivareal.com.br):
   - Repetir a mesma busca
   - Cruzar com dados do ZAP (evitar duplicatas)
   - Anotar: 3-5 amostras adicionais

3. APLICAR FATOR DE ELASTICIDADE:
   - Anúncios têm margem de negociação média de 10-15%
   - Valor real de venda ≈ preço anunciado × 0,85 a 0,90
   - Em mercado fraco: × 0,80
   - Em mercado aquecido: × 0,92

4. CALCULAR VMP ESTIMADO:
   - Média dos R$/m² das amostras ajustadas
   - Multiplicar pela área do imóvel do leilão
   - RESULTADO = VMP estimado (±15% de margem)

5. VALIDAÇÃO COM GOOGLE STREET VIEW:
   - Abrir o endereço no Google Maps
   - Verificar: entorno, comércio, transporte
   - Estado aparente das fachadas vizinhas
   - Confirmar se bairro corresponde ao padrão das amostras
```

#### Imported: Cub Referência 2025 (Sinduscon/Sp — Atualizar Mensalmente)

| Padrão | CUB R$/m² (ref. Jan/2025) |
|--------|--------------------------|
| R1-B (Residencial Baixo) | R$ 2.000 - 2.400 |
| R1-N (Residencial Normal) | R$ 2.400 - 3.100 |
| R1-A (Residencial Alto) | R$ 3.100 - 4.200 |
| R8-N (Prédio Normal) | R$ 2.100 - 2.700 |
| R8-A (Prédio Alto) | R$ 2.800 - 3.600 |
| R16-N (Prédio 16 Pavtos) | R$ 2.200 - 2.900 |
| CSL-8 (Comercial) | R$ 2.700 - 3.800 |
| GI (Galpão Industrial) | R$ 1.400 - 2.000 |

*Fonte: SINDUSCON-SP. Consultar atualização mensal em www.sindusconsp.com.br/indices-e-custos/cub/*

---

#### Imported: Imóveis Populares (Até R$ 300K)

- Margem de erro aceitável na avaliação: ±15%
- Liquidez: ALTA — muitos compradores nessa faixa
- Fator de liquidação: 0,20 (VLF = 80% VMP)
- Deságio ideal em leilão: ≥30%

#### Imported: Imóveis Médios (R$ 300K - R$ 800K)

- Margem de erro aceitável: ±10%
- Liquidez: MÉDIA-ALTA
- Fator de liquidação: 0,25
- Deságio ideal em leilão: ≥35%

#### Imported: Imóveis De Alto Padrão (R$ 800K - R$ 2M)

- Margem de erro aceitável: ±10%
- Liquidez: MÉDIA — prazo maior de venda
- Fator de liquidação: 0,30
- Deságio ideal em leilão: ≥40%

#### Imported: Imóveis De Luxo (> R$ 2M)

- Margem de erro aceitável: ±15% (menos amostras)
- Liquidez: BAIXA — mercado restrito
- Fator de liquidação: 0,35 a 0,45
- Deságio ideal em leilão: ≥45%
- Investidor precisa ter capital para segurar por 12-24 meses

---

#### Imported: Quando É Possível Financiar Imóvel De Leilão?

| Modalidade | Financiamento Possível? | Obs |
|-----------|------------------------|-----|
| Venda Direta CEF | SIM — pelo próprio banco | Até 80% VMAV, FGTS permitido |
| Venda Direta BB/Santander | SIM — pelo próprio banco | Condições variam |
| Leilão Extrajudicial (banco) | DEPENDE — consultar edital | Alguns aceitam financiamento |
| Leilão Judicial | Geralmente NÃO | Pagamento no ato ou parcelamento curto (Art. 895) |

#### Imported: Parcelamento No Leilão Judicial (Art. 895 Cpc)

- Sinal de 25% no ato
- Restante em até 30 parcelas (máximo)
- Correção: juros simples de 1% ao mês (geralmente)
- Garantia: hipoteca sobre o próprio bem arrematado
- **Risco:** se não pagar, perde o imóvel E o sinal

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

python agent-orchestrator/scripts/match_skills.py "avaliar imovel leilao"

#### Imported: "Qual O Valor De Mercado Desse Apartamento?"

```

---

#### Imported: Governança

Esta skill implementa as seguintes políticas de governança:

- **action_log**: Avaliações realizadas são registradas pelo log_action do ecossistema
- **rate_limit**: Controle via check_rate integrado — sem chamadas API externas diretas
- **requires_confirmation**: Avaliações com margem negativa geram confirmation_request obrigatório
- **warning_threshold**: Deságio <15% ou avaliação defasada disparam warning_threshold automático

Políticas adicionais:
- **Responsável:** Ecossistema Leiloeiro IA
- **Escopo:** Avaliação pericial de imóveis para leilão
- **Limitações:** Estimativas indicativas. Não substitui laudo pericial de engenheiro/arquiteto.
- **Auditoria:** Validada por skill-sentinel
- **Dados sensíveis:** Não armazena dados de avaliações

---

#### Imported: Referências

Fontes normativas e referências:
- **ABNT NBR 14653-1:2019** — Procedimentos gerais
- **ABNT NBR 14653-2:2011** — Imóveis urbanos
- **ABNT NBR 14653-3:2004** — Imóveis rurais
- **ABNT NBR 12721** — Avaliação de custos de construção
- **CUB** — Custo Unitário Básico (SINDUSCON por estado, atualização mensal)
- **COFECI** — Conselho Federal de Corretores (pareceres de avaliação)
- **IBAPE** — Instituto Brasileiro de Avaliações e Perícias de Engenharia
- **FIPEZAP** — Índice de preços de imóveis (fipe.org.br/indices/fipezap)

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis
