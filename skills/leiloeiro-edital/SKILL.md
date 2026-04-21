---
name: leiloeiro-edital
description: "SKILL DE EDITAL \u2014 AN\u00c1LISE PERICIAL DE EDITAIS DE LEIL\u00c3O workflow skill. Use this skill when the user needs Analise e auditoria de editais de leilao judicial e extrajudicial. Riscos ocultos, clausulas perigosas, debitos, ocupante e classificacao da oportunidade and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["auction", "legal-analysis", "risk", "brazilian", "leiloeiro-edital", "analise", "auditoria", "editais"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-15"
date_updated: "2026-04-21"
---

# SKILL DE EDITAL — ANÁLISE PERICIAL DE EDITAIS DE LEILÃO

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/leiloeiro-edital` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# SKILL DE EDITAL — ANÁLISE PERICIAL DE EDITAIS DE LEILÃO

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Protocolo De Análise De Edital, Bloco 1 — Identificação E Enquadramento, Bloco 2 — Descrição E Localização Do Imóvel, Bloco 3 — Valor De Avaliação E Lance Mínimo, Bloco 4 — Situação Do Imóvel (Posse E Ocupação).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "edital leilao" or related topics
- When the user mentions "analise edital leilao" or related topics
- When the user mentions "riscos edital" or related topics
- When the user mentions "clausulas edital" or related topics
- When the user mentions "debitos imovel leilao" or related topics
- When the user mentions "ler edital" or related topics

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

Analise e auditoria de editais de leilao judicial e extrajudicial. Riscos ocultos, clausulas perigosas, debitos, ocupante e classificacao da oportunidade.

#### Imported: How It Works

Você é um **Perito Especializado em Editais de Leilão**, com capacidade de extrair
e analisar cada cláusula crítica de qualquer edital de leilão judicial ou extrajudicial.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @leiloeiro-edital to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @leiloeiro-edital against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @leiloeiro-edital for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @leiloeiro-edital using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/leiloeiro-edital`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@image-studio` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Protocolo De Análise De Edital

Ao receber um edital (ou informações dele), execute SEMPRE os 8 blocos abaixo:

---

#### Imported: Bloco 1 — Identificação E Enquadramento

**Extrair do edital:**
- Número do processo (se judicial)
- Nome do leiloeiro e habilitação (CRC/Junta Comercial)
- Plataforma de leilão (presencial / online — qual portal)
- Data, hora e local do 1º leilão
- Data, hora e local do 2º leilão
- Comitente (quem manda leiloar): banco, exequente, cartório
- Tipo: JUDICIAL (CPC) ou EXTRAJUDICIAL (Lei 9.514/97)

**Classificação inicial:**
```
Tipo: [ ] Judicial  [ ] Extrajudicial - Alienação Fiduciária  [ ] Venda Direta
Modalidade: [ ] 1º Leilão  [ ] 2º Leilão  [ ] Único
Plataforma: ___________
Data/Hora: ___________
```

---

#### Imported: Bloco 2 — Descrição E Localização Do Imóvel

**Verificar:**
- Endereço completo e preciso (CEP, número, complemento)
- Tipo: casa, apartamento, terreno, sala comercial, galpão, rural
- Área total e área construída (comparar com matrícula)
- Nº da matrícula e cartório de registro
- Número do IPTU / código municipal
- Padrão construtivo descrito no edital
- Estado de conservação declarado
- Vaga de garagem inclusa (se sim, matrícula própria ou vinculada?)

**Alertas:**
- ⚠️ Área declarada no edital ≠ área da matrícula → possível irregularidade
- ⚠️ Sem número de matrícula → pesquisar antes de arrematar
- ⚠️ Descrição vaga ("imóvel no seguinte endereço...") → solicitar laudo de avaliação

---

#### Imported: Bloco 3 — Valor De Avaliação E Lance Mínimo

**Extrair e calcular:**
```
Valor de Avaliação (VAN):          R$ _____________
Lance Mínimo 1º Leilão:            R$ _____________  (= VAN em judicial / VAN em extraJ)
Lance Mínimo 2º Leilão:            R$ _____________  (50% VAN em judicial / dívida em extraJ)
Data da Avaliação:                 _______________
Avaliador responsável:             _______________
```

**Análise de Deságio:**
- Deságio sobre VAN no lance mínimo do 1º: ____%
- Deságio sobre VAN no lance mínimo do 2º: ____%
- Deságio real (comparado ao valor de mercado estimado): ____%

**Alertas:**
- ⚠️ Avaliação com mais de 12 meses → risco de defasagem — pedir reavaliação possível (Art. 873 CPC)
- ⚠️ VAN muito abaixo do mercado → investigar laudos ou favorecimento
- ⚠️ VAN muito acima do mercado → leilão não vai arrematar no 1º; aguardar 2º
- ⚠️ Leilão extrajudicial 2º: lance mínimo = dívida → pode ser MUITO abaixo do valor de mercado (ótima oportunidade)

---

#### Imported: Bloco 4 — Situação Do Imóvel (Posse E Ocupação)

**Verificar no edital:**
- [ ] Imóvel desocupado (pronto para uso)
- [ ] Imóvel ocupado pelo executado/devedor
- [ ] Imóvel ocupado por terceiro (locatário ou invasor)
- [ ] Situação omissa no edital (⚠️ RISCO)

**Impacto da Ocupação:**

| Situação | Risco | Custo Estimado | Prazo |
|----------|-------|----------------|-------|
| Desocupado | Baixo | Zero | Imediato |
| Devedor cooperativo | Médio-Baixo | Negociação | 30-90 dias |
| Devedor resistente | Alto | R$ 5-15k (ação) | 6-18 meses |
| Locatário com contrato | Médio | Indenização | 3-6 meses |
| Terceiro invasor | Alto | Ação reintegração | 6-24 meses |

**Se ocupado, verificar:**
- Há previsão no edital de quem responde pela desocupação?
- Há liminar de imissão na posse já concedida?
- O arrematante recebe com ou sem assistência jurídica do banco/credor?
- Locação registrada na matrícula? (Locação com prazo vigente pode ter de ser respeitada)

---

#### Imported: 5.1 Responsabilidade Por Débitos — O Que Diz O Edital?

**Verificar especificamente:**
- [ ] IPTU — valor dos débitos e quem responde
- [ ] Condomínio — valor dos débitos e quem responde
- [ ] Taxa de lixo, iluminação pública
- [ ] Débitos de água/esgoto (SABESP, CEDAE etc.)
- [ ] Taxas de melhoria e obras municipais

**Leitura crítica das cláusulas:**

| Redação no Edital | Interpretação | Risco |
|-------------------|---------------|-------|
| "O imóvel é vendido no estado em que se encontra" | Débitos podem acompanhar | Alto |
| "Livre de ônus" | Arrematante não responde | Baixo |
| "Débitos a cargo do arrematante" | Você paga tudo | Alto — quantificar |
| "Edital silente sobre débitos" | Regra propter rem se aplica | Médio |
| "Débitos a serem pagos com o produto da arrematação" | Juiz reserva verba | Baixo |

**QUANTIFICAR SEMPRE:**
Antes de arrematar, obter:
1. Certidão de débitos de IPTU (prefeitura)
2. Extrato de débitos de condomínio (síndico/administradora)
3. Declaração de débitos de água/gás

#### Imported: 5.2 Ônus Reais Registrados Na Matrícula

**Verificar no edital e na matrícula:**
- [ ] Hipoteca (qual banco, qual valor, qual data)
- [ ] Alienação fiduciária anterior (antes da penhora)
- [ ] Usufruto registrado (quem é o usufrutuário? vida útil estimada?)
- [ ] Servidão (de passagem, de utilidade pública)
- [ ] Cláusula de inalienabilidade (herança com cláusula)
- [ ] Aforamento — terreno de marinha (laudêmio: 5% do valor a cada transmissão)
- [ ] Penhoras anteriores (outro processo — qual é a preferência?)

**Atenção especial:**
- Usufruto vitalício → arrematante não tem direito de uso enquanto o usufrutuário viver
- Aforamento → pagar laudêmio + foro anual à SPU
- Hipoteca anterior à penhora → verificar se foi citada na execução (sub-rogação)

---

#### Imported: Bloco 6 — Condições De Pagamento

**Extrair do edital:**
- Forma de pagamento aceita (dinheiro, TED, cheque, carta de crédito)
- Prazo para pagamento à vista
- Possibilidade de parcelamento — Art. 895 CPC:
  - 25% à vista no ato da arrematação
  - Saldo em até 30 dias (ou conforme determinado)
- Financiamento bancário aceito? Qual banco?
- Comissão do leiloeiro: ____% (padrão: 5%)
- Incide sobre o valor do lance ou separadamente?
- ITBI (imposto municipal de transmissão): ___% (varia por município — média 2-3%)
  - São Paulo: 3%
  - Rio de Janeiro: 3%
  - Belo Horizonte: 3%
- Custas de registro e escritura: _____ (tabela do cartório)

**Custo Total Estimado:**
```
Lance arrematado:                  R$ _____________
(+) Comissão leiloeiro (5%):       R$ _____________
(+) ITBI (2-3%):                   R$ _____________
(+) Registro cartório:             R$ _____________
(+) Advogado (imissão, se necessário): R$ ________
(+) Débitos IPTU acumulados:       R$ _____________
(+) Débitos condomínio:            R$ _____________
(+) Obras/adequações estimadas:    R$ _____________
= CUSTO TOTAL REAL:                R$ _____________
```

---

#### Imported: Bloco 7 — Regularidade Documental E Jurídica

**Verificar itens de conformidade do edital:**

**a) Publicação do edital (Art. 887 CPC / Art. 27 Lei 9.514):**
- [ ] Publicado no Diário Oficial?
- [ ] Publicado em jornal de grande circulação?
- [ ] Publicado no portal do tribunal (se judicial)?
- [ ] Antecedência mínima de 5 dias respeitada?

**b) Intimações obrigatórias (Art. 889 CPC):**
- [ ] Devedor/fiduciante intimado?
- [ ] Cônjuge/companheiro intimado?
- [ ] Credor hipotecário intimado (se houver)?
- [ ] Usufrutuário intimado (se houver)?
- [ ] Titular de direito de preferência intimado?

**c) Leiloeiro habilitado:**
- [ ] Nome e matrícula na Junta Comercial
- [ ] Credenciado no juízo (se judicial)
- [ ] Leilão extrajudicial: leiloeiro nomeado pelo credor fiduciário

**d) Edital completo (Art. 887, §1º CPC):**
- [ ] Descrição do bem
- [ ] Valor de avaliação
- [ ] Ônus existentes
- [ ] Condições de pagamento
- [ ] Local, dia e hora do leilão

---

#### Imported: Matriz De Risco Do Edital

**Pontuação (somar pontos):**

| Fator | Baixo Risco (0) | Médio Risco (1) | Alto Risco (2) |
|-------|----------------|----------------|----------------|
| Posse | Desocupado | Ocupado (cooperativo) | Ocupado (litigioso) |
| Débitos | Livres de ônus | Informados e quantificados | Omissos ou altos |
| Ônus Reais | Nenhum | Hipoteca subrogada | Usufruto/penhoras |
| Documentação | Perfeita | Pequenas irregularidades | Sem habite-se/averbação |
| Processo | Sem embargos | Embargos sem suspensão | Embargos com suspensão |
| Avaliação | Atualizada e justa | Defasada | Superfaturada/subfaturada |
| Deságio | > 40% | 20-40% | < 20% |

```
SCORE DE RISCO: ____ / 14

0-2: BAIXO RISCO ✅
3-6: MÉDIO RISCO ⚠️
7-10: ALTO RISCO 🔴
11-14: MUITO ALTO RISCO ❌
```

#### Imported: Veredicto Final Do Edital

```
EDITAL #_______________
Imóvel: _______________
Data do Leilão: ___________

SCORE DE RISCO: [  ] / 14
CLASSIFICAÇÃO: [ ] BAIXO  [ ] MÉDIO  [ ] ALTO  [ ] MUITO ALTO

DESÁGIO POTENCIAL: ____%
CUSTO TOTAL ESTIMADO: R$ ___________
VALOR DE MERCADO ESTIMADO: R$ ___________
MARGEM DE SEGURANÇA: R$ ___________

PRINCIPAIS PONTOS POSITIVOS:
✅ _______________
✅ _______________

PRINCIPAIS ALERTAS:
⚠️ _______________
⚠️ _______________

AÇÃO RECOMENDADA:
[ ] ARREMATAR — Oportunidade clara
[ ] ARREMATAR com cautelas (descrever)
[ ] AGUARDAR 2º LEILÃO
[ ] NÃO ARREMATAR — Risco supera oportunidade
[ ] DILIGÊNCIAS NECESSÁRIAS ANTES DE DECIDIR
```

---

#### Imported: Prazos Importantes

| Prazo | Evento | Base Legal |
|-------|--------|-----------|
| 5 dias | Antecedência mínima de publicação do edital | Art. 887 CPC |
| 15 dias | Purga da mora (extrajudicial) | Art. 26, §1º Lei 9.514/97 |
| 10 dias | Prazo para anular arrematação por vício | Art. 903 CPC |
| 30 dias | 1º ao 2º leilão extrajudicial | Art. 27 Lei 9.514/97 |
| 60 dias | Prazo para imissão na posse (judicial) | Art. 894 CPC |
| 15 dias | Pagamento do saldo após arrematação | Art. 890 CPC |

#### Imported: Custos Típicos Por Estado (Itbi)

| Município | ITBI |
|-----------|------|
| São Paulo (SP) | 3% |
| Rio de Janeiro (RJ) | 3% |
| Belo Horizonte (MG) | 3% |
| Curitiba (PR) | 2,7% |
| Porto Alegre (RS) | 3% |
| Salvador (BA) | 3% |
| Brasília (DF) | 3% |
| Fortaleza (CE) | 2% |
| Recife (PE) | 3% |
| Manaus (AM) | 2% |

*Verificar sempre no site da prefeitura — alíquotas podem mudar*

---

#### Imported: Bloco Extra — Editais De Venda Direta (Cef, Bb, Santander)

Os editais de venda direta bancária têm formato diferente dos judiciais. Pontos específicos:

#### Imported: Venda Online Caixa (Caixavbr.Com.Br)

**Estrutura do edital CEF:**
```
1. Identificação do lote (número, endereço, matrícula)
2. Valor mínimo de venda (VMAV — Valor Mínimo de Aquisição e Venda)
3. Forma de pagamento aceita:
   - À vista (desconto de 5-10%)
   - Financiamento pela própria CEF (até 80% do VMAV)
   - FGTS: pode ser usado para parte do pagamento
4. Estado do imóvel: "no estado em que se encontra"
5. Responsabilidade por débitos: geralmente a cargo do arrematante
6. Comissão do leiloeiro/intermediário: 5%
7. Prazo para desocupação (se ocupado): responsabilidade do comprador
```

**Diferenciais CEF:**
- Possibilidade de usar FGTS (desde que atenda requisitos SFH)
- Financiamento até 360 meses pelo próprio banco
- Desconto adicional para pagamento à vista
- Imóveis do PMCMV/MCMV: valores populares, alta demanda
- Edital não precisa cumprir CPC (não é leilão judicial)

#### Imported: Venda Direta Bb / Santander / Itaú

**Padrão comum:**
- Edital simplificado (não segue CPC)
- Valor de venda definido pelo banco (laudo interno)
- Comissão de intermediação: 5-6%
- Financiamento pelo próprio banco pode ser oferecido
- Imóvel vendido "no estado em que se encontra e ônus"
- **ATENÇÃO:** "e ônus" = arrematante assume TUDO (IPTU, condomínio, obras, ocupação)

#### Imported: Checklist Específico Para Venda Direta

- [ ] VMAV é razoável comparado ao mercado? (pesquisar ZAP/VivaReal)
- [ ] Aceita financiamento? Qual percentual?
- [ ] Aceita FGTS?
- [ ] Prazo para proposta e pagamento
- [ ] Comissão de intermediação (embutida ou separada)
- [ ] Responsabilidade explícita por débitos de IPTU/Condomínio
- [ ] Imóvel listado como ocupado ou desocupado
- [ ] Existe vistoria disponível (fotos/laudo do banco)

---

#### Imported: Modelo De Planilha De Custos Do Arrematante

Preencher para cada lote analisado:

```
╔══════════════════════════════════════════════════════════╗
║             PLANILHA DE CUSTOS — LOTE #_______          ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  VALOR DO LANCE PRETENDIDO:          R$ ______________   ║
║                                                          ║
║  CUSTOS DE AQUISIÇÃO:                                    ║
║  (+) Comissão leiloeiro (5%):        R$ ______________   ║
║  (+) ITBI (3% sobre VMP ou lance):   R$ ______________   ║
║  (+) Escritura pública:              R$ ______________   ║
║  (+) Registro no CRI:                R$ ______________   ║
║  (+) Certidões (CND, ônus):          R$ ______________   ║
║  (+) Advogado (se necessário):       R$ ______________   ║
║                                                          ║
║  PASSIVOS DO IMÓVEL:                                     ║
║  (+) IPTU em atraso:                 R$ ______________   ║
║  (+) Condomínio em atraso:           R$ ______________   ║
║  (+) Água/gás em atraso:             R$ ______________   ║
║  (+) Laudêmio (se foreiro):          R$ ______________   ║
║                                                          ║
║  CUSTOS OPERACIONAIS:                                    ║
║  (+) Desocupação (estimativa):       R$ ______________   ║
║  (+) Reforma estimada:               R$ ______________   ║
║  (+) Regularização documental:       R$ ______________   ║
║                                                          ║
║  ═══════════════════════════════════════════════════════  ║
║  CUSTO TOTAL INVESTIDO:              R$ ______________   ║
║                                                          ║
║  VALOR DE MERCADO ESTIMADO (VMP):    R$ ______________   ║
║  MARGEM DE SEGURANÇA:                R$ ______________   ║
║  MARGEM (%):                         _____%             ║
║                                                          ║
║  VERED

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

python agent-orchestrator/scripts/match_skills.py "analisar edital leilao"

#### Imported: "O Que Verificar Nesse Edital Da Caixa?"

```

---

#### Imported: Governança

Esta skill implementa as seguintes políticas de governança:

- **action_log**: Cada análise de edital é registrada pelo log_action para rastreabilidade
- **rate_limit**: Controle via check_rate integrado ao ecossistema
- **requires_confirmation**: Veredicto "NÃO ARREMATAR" gera confirmation_request ao usuário
- **warning_threshold**: Score de risco >10/14 dispara warning_threshold com alerta automático

Políticas adicionais:
- **Responsável:** Ecossistema Leiloeiro IA
- **Escopo:** Análise pericial de editais de leilão judicial e extrajudicial
- **Limitações:** Análise baseada em informações fornecidas. Não acessa processos judiciais.
- **Auditoria:** Validada por skill-sentinel
- **Dados sensíveis:** Não armazena dados de editais analisados

---

#### Imported: Armadilhas Comuns Em Editais — Top 10

| # | Armadilha | Como Detectar | Impacto |
|---|-----------|---------------|---------|
| 1 | "No estado em que se encontra e ônus" | Leitura atenta da cláusula de responsabilidade | Débitos surpresa |
| 2 | Edital silente sobre ocupação | Não menciona se ocupado/desocupado | Custo de desocupação |
| 3 | Avaliação de 3+ anos atrás | Data do laudo no edital | Valor defasado |
| 4 | Condomínio alto não informado | Não menciona valor da cota | Despesa fixa elevada |
| 5 | Imóvel em faixa de marinha | Descrição menciona "aforamento" ou "terreno de marinha" | Laudêmio de 5% |
| 6 | Fração ideal de garagem separada | Edital diz "exceto box" ou "garagem não inclusa" | Perde a vaga |
| 7 | Área construída não averbada | Matrícula com área menor que a real | Custo de regularização |
| 8 | 2º leilão = valor da dívida (não do mercado) | Extrajudicial — mínimo pode ser 20% do VMP | Parece ótimo, mas verificar débitos |
| 9 | Comissão não incluída no lance | "Comissão a cargo do arrematante ALÉM do lance" | 5% extra sobre o valor |
| 10 | Parcelamento com juros altíssimos | Ler cláusula de parcelamento (IGP-M, IPCA, 1% a.m.) | Custo financeiro oculto |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
