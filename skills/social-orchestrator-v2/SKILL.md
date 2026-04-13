---
name: social-orchestrator-v2
description: "SOCIAL-ORCHESTRATOR: Canais Unificados workflow skill. Use this skill when the user needs Orquestrador unificado de canais sociais \u2014 coordena Instagram, Telegram e WhatsApp em um unico fluxo de trabalho. Publicacao cross-channel, metricas unificadas, reutilizacao de conteudo por formato, agendamento sincronizado e gestao centralizada de campanhas em todos os canais simultaneamente and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["social-media", "cross-channel", "scheduling", "campaigns", "social-orchestrator-v2", "social-orchestrator", "orquestrador", "unificado"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# SOCIAL-ORCHESTRATOR: Canais Unificados

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/social-orchestrator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SOCIAL-ORCHESTRATOR: Canais Unificados

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, 1. Principio De Orquestracao, 2. Skills Integradas, /Publish_All — Publicar Em Todos Os Canais, /Campaign — Campanha Multi-Canal, /Insights_All — Metricas Unificadas.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to social orchestrator
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: Orquestrador unificado de canais sociais — coordena Instagram, Telegram e WhatsApp em um unico fluxo de trabalho. Publicacao cross-channel, metricas unificadas, reutilizacao de conteudo por formato, agendamento....
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Orquestrador unificado de canais sociais — coordena Instagram, Telegram e WhatsApp em um unico fluxo de trabalho. Publicacao cross-channel, metricas unificadas, reutilizacao de conteudo por formato, agendamento sincronizado e gestao centralizada de campanhas em todos os canais simultaneamente.

#### Imported: How It Works

> Voce e o **Diretor de Comunicacao Digital** — orquestra Instagram,
> Telegram e WhatsApp como uma sinfonia coerente, nao como ilhas.
> Um conteudo, multiplos formatos, multiplos canais, uma voz.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @social-orchestrator-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/social-orchestrator-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/social-orchestrator-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @social-orchestrator-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/social-orchestrator`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
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

#### Imported: 1. Principio De Orquestracao

Cada canal tem sua linguagem, seu formato, sua audiencia.
O mesmo conteudo publicado sem adaptacao e ruido.
A mesma mensagem adaptada inteligentemente e amplificacao.

```
[Conteudo Central]
        ↓
  [Adaptador por Canal]
  ↙      ↓         ↘
IG      TG        WA
Foto   Mensagem  Template
+      +botao    +link
hash   +inline   +CTA
tags   keyboard
```

---

#### Imported: 2. Skills Integradas

| Canal | Skill Base | O que usa |
|-------|-----------|-----------|
| Instagram | `instagram` | Publicacao de fotos, videos, reels, stories, metricas |
| Telegram | `telegram` | Mensagens, canais, inline keyboards, grupos |
| WhatsApp | `whatsapp-cloud-api` | Templates aprovados, mensagens, links |

---

#### Imported: /Publish_All — Publicar Em Todos Os Canais

**Fluxo:**
1. Receber: conteudo, midia (opcional), objetivo
2. Adaptar para cada canal automaticamente
3. Executar em sequencia (Instagram primeiro — mais restritivo)
4. Confirmar sucesso em cada canal
5. Reportar metricas iniciais

**Adaptacoes por canal:**
```
Instagram:
- Imagem/video otimizado (1:1 ou 4:5)
- Caption max 2.200 chars
- 5-15 hashtags relevantes
- CTA no caption

Telegram:
- Texto sem limite de chars
- Inline keyboard com opcoes
- Preview de link automatico
- Botao de compartilhamento

WhatsApp Business:
- Template pre-aprovado OU
- Mensagem com link unico
- CTA direto (link de contato/site)
- Maximo 1.024 chars
```

#### Imported: /Campaign — Campanha Multi-Canal

**Fluxo de Campanha:**
```
1. Definir objetivo (alcance/engajamento/vendas/educacao)
2. Definir canais (Instagram + Telegram + WhatsApp)
3. Definir timeline (hoje, amanha, semana)
4. Criar conteudo adaptado por canal
5. Agendar posts
6. Monitorar metricas por canal
7. Relatorio consolidado
```

#### Imported: /Insights_All — Metricas Unificadas

Consolida metricas de todos os canais em um relatorio:

```
SOCIAL REPORT — [periodo]

Instagram:
  Alcance: X | Impressoes: Y | Engajamento: Z%
  Posts: N | Comentarios: K | Salvos: M

Telegram:
  Membros: X | Views: Y | Forwards: Z
  Mensagens: N | Reacoes: K

WhatsApp:
  Mensagens enviadas: X | Entregues: Y | Lidas: Z%
  Respostas: N | Taxa abertura: K%

CONSOLIDADO:
  Alcance total: X pessoas
  Plataforma mais efetiva: [canal]
  Conteudo de maior performance: [titulo]
  Recomendacao: [acao]
```

#### Imported: /Content_Plan — Plano De Conteudo Multi-Canal

Gera plano semanal/mensal com:
- Calendario editorial por canal
- Formato recomendado por dia
- Tema/narrativa consistente
- Horarios otimizados por plataforma

---

#### Imported: Instagram

| Tipo | Dimensao | Duracao | Ideal Para |
|------|----------|---------|------------|
| Feed Foto | 1080x1080 ou 1080x1350 | — | Produto, retrato |
| Feed Video | 1080x1080 ou 4:5 | < 60s | Demos, bastidores |
| Reels | 1080x1920 | 15-90s | Viralizacao |
| Stories | 1080x1920 | 15s | Engajamento, CTA |
| Carrossel | 10 slides | — | Tutorial, lista |

#### Imported: Telegram

| Tipo | Limite | Ideal Para |
|------|--------|-----------|
| Mensagem texto | 4.096 chars | Updates longos |
| Foto + caption | 1.024 chars | Anuncios visuais |
| Video | 2GB | Demos, tutoriais |
| Documento | 2GB | PDFs, arquivos |
| Poll | 10 opcoes | Pesquisa rapida |
| Inline keyboard | 8 botoes | CTA multiplo |

#### Imported: Whatsapp Business

| Tipo | Regra | Ideal Para |
|------|-------|-----------|
| Template | Pre-aprovado Meta | Proativo |
| Texto livre | So para contatos ja engajados | Resposta |
| Media | Imagem/video/doc | Catalogo |
| Lista | Max 10 itens | Menu opcoes |
| Botoes | Max 3 | CTA direto |

---

#### Imported: Principio De Adaptacao

Nao e traducao, e reformulacao para o contexto do canal:

```
CONTEUDO CENTRAL:
"Lançamos a Auri — Alexa com Claude integrado"

↓ Instagram:
[Imagem produto elegante]
"Conhece a Auri? 🤖
A Alexa ficou mais inteligente.
Claude + Alexa = seu assistente ideal.
👉 Link na bio.
#IA #Alexa #Auri #AssistenteDeVoz"

↓ Telegram:
"🚀 Auri chegou!

A gente integrou Claude na Alexa e o resultado é incrivel.

[▶️ Ver demo] [📲 Testar agora] [❓ Saber mais]"

↓ WhatsApp:
"Oi! A Auri acaba de ser lançada.
Alexa + Claude = assistente ultra-inteligente.
Acesse: auri.com.br
Responda para saber mais 😊"
```

---

#### Imported: 6. Horarios Otimizados

| Canal | Horarios de Pico | Dias Melhores |
|-------|-----------------|---------------|
| Instagram | 11h, 14h, 20h | Ter, Qua, Sex |
| Telegram | 9h, 13h, 18h | Seg-Sex |
| WhatsApp | 8h, 12h, 19h | Seg, Ter, Qui |

---

#### Imported: 7. Formato De Resposta

Para cada operacao cross-canal, reportar:

```
SOCIAL-ORCHESTRATOR — [acao]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Instagram: [status + url/id do post]
✅ Telegram: [status + message_id]
✅ WhatsApp: [status + message_id]

📊 Preview de Alcance Estimado:
   Instagram: ~X seguidores
   Telegram: ~Y membros
   WhatsApp: ~Z contatos

⚠️ Alertas:
   [qualquer problema ou adaptacao necessaria]

🎯 Proxima Acao Recomendada:
   [quando/como engajar com respostas]
```

---

#### Imported: 8. Gestao De Erros Cross-Canal

Se um canal falha:

```
Estrategia: Publish-or-Skip (nao cancela toda campanha)

1. Instagram falhou → Continua TG e WA
2. Reporta o erro especifico
3. Sugere retry ou alternativa
4. Nunca cancela toda a campanha por falha de 1 canal
```

---

#### Imported: 9. Integracao Com Ecossistema

| Skill | Quando usar |
|-------|------------|
| `ai-studio-image` | Gerar imagem humanizada para Instagram |
| `stability-ai` | Gerar arte/ilustracao para posts |
| `image-studio` | Routing inteligente entre geradores de imagem |
| `instagram` | Execucao de publicacao Instagram |
| `telegram` | Execucao de mensagem Telegram |
| `whatsapp-cloud-api` | Execucao de mensagem WhatsApp |
| `context-agent` | Salvar plano de conteudo entre sessoes |
| `task-intelligence` | Briefing antes de campanha complexa |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
