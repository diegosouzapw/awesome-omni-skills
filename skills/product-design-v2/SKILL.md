---
name: product-design-v2
description: "PRODUCT DESIGN \u2014 Nivel Apple workflow skill. Use this skill when the user needs Design de produto nivel Apple \u2014 sistemas visuais, UX flows, acessibilidade, linguagem visual proprietaria, design tokens, prototipagem e handoff. Cobre Figma, design systems, tipografia, cor, espacamento, motion design e principios de design cognitivo and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["design", "ux", "design-systems", "accessibility", "figma", "product-design-v2", "product-design", "produto"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# PRODUCT DESIGN — Nivel Apple

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/product-design` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# PRODUCT DESIGN — Nivel Apple

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Os 10 Principios De Jony Ive / Apple, Design Cognitivo, Estrutura De Um Design System De Elite, Design Tokens — Exemplo Auri, Estrutura De Um Ux Flow.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to product design
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: Design de produto nivel Apple — sistemas visuais, UX flows, acessibilidade, linguagem visual proprietaria, design tokens, prototipagem e handoff. Cobre Figma, design systems, tipografia, cor, espacamento, motion design....
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

1. Segunda: Entender — pesquisa, user interviews, definir o problema Terca: Divergir — crazy 8s, sketches individuais, lightning demos Quarta: Decidir — vote, storyboard, decisao final Quinta: Prototipar — prototipo de alta fidelidade no Figma Sexta: Testar — 5 usuarios, insights, iterar ---
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Processo De Design Sprint (5 Dias)

```
Segunda: Entender — pesquisa, user interviews, definir o problema
Terca:   Divergir — crazy 8s, sketches individuais, lightning demos
Quarta:  Decidir — vote, storyboard, decisao final
Quinta:  Prototipar — prototipo de alta fidelidade no Figma
Sexta:   Testar — 5 usuarios, insights, iterar
```

---

#### Imported: Overview

Design de produto nivel Apple — sistemas visuais, UX flows, acessibilidade, linguagem visual proprietaria, design tokens, prototipagem e handoff. Cobre Figma, design systems, tipografia, cor, espacamento, motion design e principios de design cognitivo. Ativar para: criar design system, definir visual language, revisar UX, acessibilidade, tokens de design, branding de produto, UI critique.

#### Imported: How It Works

> "Design is not just what it looks like and feels like. Design is how it works."
> — Steve Jobs

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @product-design-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @product-design-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @product-design-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @product-design-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/product-design`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@privacy-by-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@product-inventor-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@product-manager-toolkit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@product-manager-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Os 10 Principios De Jony Ive / Apple

1. **Simplicidade radical** — remova tudo que nao e essencial
2. **Honestidade material** — cada elemento existe por uma razao
3. **Menos e mais** — restraint e uma decisao de design
4. **Coerencia sistemica** — tudo faz parte de um sistema unico
5. **Detalhes importam** — o usuario sente, mesmo sem notar
6. **Funcao define forma** — a estetica serve ao proposito
7. **Durabilidade** — design que envelhece bem
8. **Acessibilidade como padrao** — nao como adicional
9. **Continuidade entre telas** — experiencia unificada
10. **Surpresa deleitosa** — o inesperado que encanta

#### Imported: Design Cognitivo

- **Carga cognitiva zero** — o usuario nunca deve pensar
- **Affordances claras** — o que e clicavel parece clicavel
- **Feedback imediato** — toda acao tem resposta visual
- **Erros previnem-se** — design que impossibilita erros

---

#### Imported: Estrutura De Um Design System De Elite

```
design-system/
├── tokens/
│   ├── colors.json       # paleta completa com semantica
│   ├── typography.json   # escala tipografica
│   ├── spacing.json      # grid e espacamento
│   ├── shadows.json      # elevacao e profundidade
│   ├── motion.json       # duracao e easing
│   └── radius.json       # bordas arredondadas
├── components/
│   ├── atoms/            # Button, Input, Icon, Badge
│   ├── molecules/        # Card, Form, NavItem
│   └── organisms/        # Header, Sidebar, Modal
├── patterns/
│   ├── onboarding.md     # primeiro acesso
│   ├── empty-states.md   # estados vazios
│   ├── loading.md        # estados de carregamento
│   └── errors.md         # tratamento de erros
└── guidelines/
    ├── voice-tone.md     # voz e tom
    ├── imagery.md        # fotografia e ilustracao
    └── accessibility.md  # WCAG 2.1 AA
```

#### Imported: Design Tokens — Exemplo Auri

```json
{
  "color": {
    "brand": {
      "primary": "#6C63FF",
      "primary-dark": "#5A52E0",
      "accent": "#FF6B6B",
      "surface": "#F8F7FF"
    },
    "semantic": {
      "success": "#22C55E",
      "warning": "#F59E0B",
      "error": "#EF4444",
      "info": "#3B82F6"
    },
    "neutral": {
      "900": "#111827",
      "800": "#1F2937",
      "600": "#4B5563",
      "400": "#9CA3AF",
      "200": "#E5E7EB",
      "50":  "#F9FAFB"
    }
  },
  "typography": {
    "display": { "size": "48px", "weight": "700", "line": "1.1" },
    "h1": { "size": "36px", "weight": "700", "line": "1.2" },
    "h2": { "size": "28px", "weight": "600", "line": "1.3" },
    "body": { "size": "16px", "weight": "400", "line": "1.6" },
    "small": { "size": "14px", "weight": "400", "line": "1.5" }
  },
  "spacing": {
    "xs": "4px", "sm": "8px", "md": "16px",
    "lg": "24px", "xl": "32px", "2xl": "48px", "3xl": "64px"
  },
  "radius": {
    "sm": "4px", "md": "8px", "lg": "12px",
    "xl": "16px", "full": "9999px"
  },
  "shadow": {
    "sm": "0 1px 3px rgba(0,0,0,0.12)",
    "md": "0 4px 12px rgba(0,0,0,0.15)",
    "lg": "0 8px 24px rgba(0,0,0,0.18)",
    "xl": "0 20px 60px rgba(0,0,0,0.22)"
  },
  "motion": {
    "fast": "150ms ease-out",
    "normal": "250ms ease-in-out",
    "slow": "400ms cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

---

#### Imported: Estrutura De Um Ux Flow

```
1. Entry Point (como o usuario chega)
2. Context (o que o usuario sabe/quer)
3. Action (o que o usuario faz)
4. Feedback (resposta imediata do sistema)
5. Outcome (o que o usuario conseguiu)
6. Next Step (o que vem depois naturalmente)
```

#### Imported: Onboarding De Elite (Primeiros 5 Minutos)

```
Tela 1: Promessa — "O que voce vai conseguir"
  - Uma frase impactante
  - Uma imagem que mostra o resultado
  - CTA: "Comecar" (nao "Criar conta")

Tela 2: Acao imediata — primeiro valor antes de cadastro
  - Deixe o usuario experimentar algo real
  - Formulario minimo (email apenas)
  - Progresso visivel (1 de 3)

Tela 3: Personalizacao — "Me conte sobre voce"
  - Max 3 perguntas
  - Visual, nao texto
  - Pula disponivel sempre

Tela 4: Momento Aha — primeiro sucesso real
  - O usuario faz algo que funciona
  - Celebracao genuina (nao excessiva)
  - "Voce acabou de [acao de valor]"
```

#### Imported: Empty States Que Encantam

```
Nao mostre: "Nenhum item encontrado"
Mostre:
  - Ilustracao contextual
  - Mensagem de oportunidade: "Ainda nao ha [X]. Crie o primeiro!"
  - CTA primario
  - Talvez: dica de como comecar
```

---

#### Imported: Principios Unicos Para Voice Ui

1. **Zero carga visual** — o usuario nao ve nada (apenas ouve)
2. **Reversibilidade facil** — "desfazer" e sempre possivel
3. **Confirmacao opcional** — so para acoes irreversiveis
4. **Variedade de resposta** — nunca a mesma frase duas vezes
5. **Silencio e ok** — pausa de 2s antes de perguntar se precisa de ajuda

#### Imported: Estrutura De Resposta De Voz

```
[Hook opcional] + [Resposta core] + [Acao ou pergunta]

Ruim: "Desculpe, nao entendi o que voce disse. Pode repetir?"
Bom:  "Nao captei bem. Pode repetir de outro jeito?"

Ruim: "Claro! Posso ajudar com isso. A resposta para sua pergunta e..."
Bom:  "A resposta e: [resposta direta]"
```

#### Imported: Scripts De Interacao Auri

```
Primeiro uso:
"Oi! Sou a Auri. Pode me perguntar qualquer coisa — de decisoes de negocio
a ideias criativas. Como posso ajudar hoje?"

Retorno (usuario ja conhecido):
"Bem-vindo de volta! Onde paramos foi em [topico]. Quer continuar?"

Nao entendeu:
"Nao peguei bem. Tenta de outro jeito?"

Encerramento:
"Qualquer coisa, e so chamar. Ate logo!"
```

---

#### Imported: Framework De Critica Construtiva

```
1. OBSERVACAO: O que eu vejo (sem julgamento)
   "Noto que o botao principal esta no canto inferior direito"

2. PRINCIPIO: Qual principio esta sendo testado
   "Hierarquia visual e posicionamento de CTA primario"

3. IMPACTO: O que isso causa ao usuario
   "Usuarios que usam o polegar precisam esticar para alcanca-lo"

4. ALTERNATIVA: Sugestao construtiva
   "Considerar posicionar acima do fold, centralizado"

5. TRADE-OFF: O que se perde/ganha
   "Mais acessivel, mas perde area para conteudo"
```

#### Imported: Checklist De Critica De Ui

- [ ] Hierarquia visual clara (o olho sabe para onde ir)
- [ ] Contraste adequado (WCAG AA: 4.5:1 para texto)
- [ ] Tamanho de toque minimo (44x44px em mobile)
- [ ] Consistencia com design system
- [ ] Estados interativos definidos (hover/active/disabled/focus)
- [ ] Responsividade (mobile-first)
- [ ] Loading states e empty states
- [ ] Tratamento de erros com mensagem util
- [ ] Acessibilidade (labels, roles ARIA, keyboard nav)
- [ ] Performance percebida (skeleton screens, optimistic UI)

---

#### Imported: Conceito Visual

A Auri e **inteligencia com calor humano**. Nao e um robo — e uma presenca.
A identidade visual deve comunicar: sofisticacao acessivel.

#### Imported: Paleta Principal

```
Roxo Auri:     #6C63FF  — identidade, inteligencia, inovacao
Rosa Auri:     #FF6B9D  — calor, empatia, humanidade
Branco Puro:   #FFFFFF  — clareza, espaco, respiro
Grafite Suave: #1A1A2E  — autoridade, profundidade, noite
```

#### Imported: Tipografia

```
Display/Titulos: Inter (ou SF Pro para Apple) — Bold 700
Corpo de texto:  Inter Regular 400 — linha 1.6
Mono/Codigo:     JetBrains Mono — para elementos tecnicos
```

#### Imported: Logo Conceito

```
Forma: Onda de audio estilizada formando a letra "A"
Cor: Gradiente roxo → rosa (esquerda para direita)
Espaco negativo: Sugestao de microfone ou ear
Versao dark/light: Ambas definidas
Tamanho minimo: 24px (icone), 120px (lockup completo)
```

---

#### Imported: Stack De Design

| Ferramenta | Uso |
|-----------|-----|
| Figma | Design de UI, prototipagem, handoff |
| FigJam | User journeys, workshops, ideacao |
| Zeroheight | Documentacao do design system |
| Lottie | Animacoes (exportadas do After Effects/Figma) |
| Mobbin | Referencia de patterns de UI |
| Screenlane | Inspiracao de UI real |

#### Imported: 8. Comandos

| Comando | Acao |
|---------|------|
| `/design-critique` | Critica estruturada de um design |
| `/design-tokens` | Gera tokens para um projeto |
| `/ux-flow` | Mapeia fluxo de experiencia |
| `/voice-ux` | Design de interacao por voz |
| `/onboarding` | Cria fluxo de onboarding |
| `/design-system` | Estrutura design system completo |
| `/accessibility` | Auditoria de acessibilidade |
| `/visual-identity` | Define identidade visual de produto |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
