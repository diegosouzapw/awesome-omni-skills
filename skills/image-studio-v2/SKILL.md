---
name: image-studio-v2
description: "IMAGE-STUDIO: Gerador de Imagens Inteligente workflow skill. Use this skill when the user needs Studio de geracao de imagens inteligente \u2014 roteamento automatico entre ai-studio-image (fotos humanizadas/influencer) e stability-ai (arte/ ilustracao/edicao). Detecta o tipo de imagem solicitada e escolhe o modelo ideal automaticamente and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["image-generation", "routing", "ai-art", "photography", "image-studio-v2", "image-studio", "studio", "geracao"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-17"
date_updated: "2026-04-17"
---

# IMAGE-STUDIO: Gerador de Imagens Inteligente

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/image-studio` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# IMAGE-STUDIO: Gerador de Imagens Inteligente

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, 1. Matriz De Decisao, Ai-Studio-Image (Gemini 2.0 Flash — Free), Stability-Ai (Sd3.5 Large — Community), 3.1 Geracao Simples, 3.2 Geracao Com Ai-Studio-Image.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to image studio
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: Studio de geracao de imagens inteligente — roteamento automatico entre ai-studio-image (fotos humanizadas/influencer) e stability-ai (arte/ ilustracao/edicao). Detecta o tipo de imagem solicitada e escolhe o modelo....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

Studio de geracao de imagens inteligente — roteamento automatico entre ai-studio-image (fotos humanizadas/influencer) e stability-ai (arte/ ilustracao/edicao). Detecta o tipo de imagem solicitada e escolhe o modelo ideal automaticamente. Geracao, edicao, upscale, remocao de fundo, inpainting e geracao de fotos realistas de pessoas em um unico workflow.

#### Imported: How It Works

> Voce e o **Diretor Criativo Visual** — escolhe o pincel certo para
> cada obra. Fotos humanizadas com Gemini, arte e edicao com Stability.
> Um comando, o modelo ideal, o resultado perfeito.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @image-studio-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @image-studio-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @image-studio-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @image-studio-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/image-studio`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@hugging-face-vision-trainer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@humanize-chinese-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hybrid-cloud-architect-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hybrid-cloud-networking-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 1. Matriz De Decisao

A primeira pergunta e sempre: **qual modelo serve melhor?**

```
PEDIDO DO USUARIO
      ↓
E uma FOTO REALISTA de pessoa/influencer?
  ↓ SIM: ai-studio-image
  ↓ NAO → E uma ILUSTRACAO, ARTE ou DESENHO?
             ↓ SIM: stability-ai (generate/ultra/core)
             ↓ NAO → E uma EDICAO de imagem existente?
                        ↓ SIM: stability-ai (img2img/inpaint/search-replace/erase)
                        ↓ NAO → E um UPSCALE ou REMOCAO DE FUNDO?
                                    ↓ SIM: stability-ai (upscale/remove-bg)
                                    ↓ NAO: perguntar mais detalhes
```

---

#### Imported: Ai-Studio-Image (Gemini 2.0 Flash — Free)

**Especialidade:** Fotos hiper-realistas de pessoas com toque humano

| Pedido | Exemplo |
|--------|---------|
| Foto de influencer | "foto estilo instagram de mulher em cafe" |
| Foto de perfil profissional | "headshot profissional homem terno" |
| Foto lifestyle | "pessoa na praia com celular, luz dourada" |
| Conteudo educacional humanizado | "professor ensinando com quadro" |
| Foto produto com pessoa | "mulher segurando smartphone" |

**Vantagens:**
- Gratuito (gemini-2.0-flash-exp)
- 5 camadas de humanizacao narrativa (device, lighting, imperfection, authenticity, environment)
- 20 templates pre-configurados (10 influencer + 10 educacional)
- Imperfeicoes sutis que tornam a foto credivel

**Limitacoes:**
- 1 imagem por vez, ~9s
- ~1K resolucao
- Nao suporta aspect_ratio customizado
- 50 imgs/dia free tier

---

#### Imported: Stability-Ai (Sd3.5 Large — Community)

**Especialidade:** Arte, ilustracao, edicao e manipulacao de imagens

| Pedido | Modo | Exemplo |
|--------|------|---------|
| Arte/ilustracao | `generate` | "dragon flying over mountains, fantasy" |
| Maxima qualidade | `ultra` | "portrait photography, studio lighting" |
| Rapido/iteracao | `core` | "anime cat kawaii" |
| Transformar imagem | `img2img` | "transforme em pintura a oleo" |
| Ampliar resolucao | `upscale` | "aumentar imagem para 4K" |
| Upscale criativo | `upscale-creative` | "ampliar com detalhes adicionais" |
| Remover fundo | `remove-bg` | "fundo transparente (PNG)" |
| Editar area | `inpaint` | "substituir roupa por terno" |
| Substituir objeto | `search-replace` | "trocar carro vermelho por azul" |
| Apagar objeto | `erase` | "remover pessoa do fundo" |

**15 Estilos:**
photorealistic, anime, digital-art, oil-painting, watercolor, pixel-art, 3d-render,
concept-art, comic, minimalist, fantasy, sci-fi, sketch, pop-art, noir

**Limitacoes:**
- Créditos (Community License)
- Nao especializado em fotos realistas de pessoas

---

#### Imported: 3.1 Geracao Simples

```
Usuario: "crie uma imagem de X"

1. Analisar: tipo de imagem + objetivo
2. Selecionar: modelo ideal (decision matrix acima)
3. Construir prompt: otimizado para o modelo escolhido
4. Gerar: executar com parametros corretos
5. Apresentar: mostrar resultado + metadados
6. Oferecer: variacoes, ajustes, versao alternativa
```

#### Imported: 3.2 Geracao Com Ai-Studio-Image

Usar sistema de templates e prompt engine:

```bash

#### Imported: Template Especifico

python generate.py --template "instagram-lifestyle" --customization "cafe, manha, sorriso"

#### Imported: Prompt Customizado

python generate.py --prompt "mulher jovem em home office, luz natural, laptop"

#### Imported: Modo Humanizado Maximo (5 Camadas)

python generate.py --prompt "..." --humanization maximum
```

#### Imported: 3.3 Geracao Com Stability-Ai

Mapear para modo correto:

```bash

#### Imported: Arte/Ilustracao

python generate.py generate --prompt "..." --style fantasy --aspect-ratio 16:9

#### Imported: Foto Alta Qualidade

python generate.py ultra --prompt "..." --style photorealistic

#### Imported: Editar Imagem Existente

python generate.py inpaint --image imagem.jpg --mask mascara.png --prompt "adicionar chapeu"

#### Imported: Remover Fundo

python generate.py remove-bg --image produto.jpg

#### Imported: Upscale

python generate.py upscale --image small.jpg --scale 4
```

---

#### Imported: Para Ai-Studio-Image (Fotos Realistas)

**Estrutura ideal:**
```
[Sujeito principal] + [Acao/pose] + [Ambiente] + [Iluminacao] + [Detalhe humano]

Exemplo:
"jovem mulher brasileira, 25 anos, sorrindo naturalmente,
sentada em cafe moderno, luz natural pela janela,
segurando xicara de cafe, roupa casual chique,
cabelo levemente bagunçado, foco suave no fundo"
```

**Evitar:**
- Termos de arte (oil painting, digital art)
- Nomes de artistas
- Estilos nao-fotograficos

#### Imported: Para Stability-Ai (Arte/Ilustracao)

**Estrutura ideal:**
```
[Sujeito] + [Acao] + [Estilo artistico] + [Iluminacao cinematica] +
[Qualidade] + [Artista de referencia] + [Cores]

Exemplo:
"majestic dragon soaring over misty mountains,
digital art style, cinematic lighting,
highly detailed, Greg Rutkowski, vibrant colors,
4k, masterpiece"
```

**Negativos uteis:**
```
"blurry, low quality, watermark, text, ugly, deformed,
extra fingers, bad anatomy, worst quality"
```

---

#### Imported: 5. Formato De Resposta

```
IMAGE-STUDIO — [tipo de geracao]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 Modelo: [ai-studio-image / stability-ai]
📋 Modo: [template / generate / inpaint / etc]
⏱️ Tempo: ~Xs

✅ Imagem gerada!
   📁 Salva em: [caminho]
   📐 Dimensao: XxY px
   💾 Tamanho: X KB

🔧 Prompt usado:
   "[prompt otimizado]"

💡 Variacoes disponiveis:
   1. stability-ai versao arte
   2. ai-studio-image versao humanizada
   3. Ajuste de estilo/iluminacao
```

---

#### Imported: Post Instagram

```
Usuario: "imagem para post de lancamento do produto Auri"

→ image-studio decide: foto realista de produto com pessoa
→ ai-studio-image: "pessoa segurando dispositivo Alexa,
   ambiente moderno, luz natural, expressao animada"
→ Resultado: foto humanizada pronta para Instagram
```

#### Imported: Thumbnail Youtube

```
Usuario: "thumbnail para video de IA com impacto"

→ image-studio decide: arte digital de alto impacto
→ stability-ai ultra: "AI robot face, glowing eyes,
   dark background, dramatic lighting, digital art, 4k"
→ Resultado: thumbnail atraente e profissional
```

#### Imported: Foto De Perfil

```
Usuario: "foto profissional para LinkedIn"

→ image-studio decide: foto realista de pessoa
→ ai-studio-image template "linkedin-headshot":
   "homem profissional, terno azul, fundo neutro,
   luz de estudio, expressao confiante"
→ Resultado: headshot convincente
```

---

#### Imported: 7. Fallback E Redundancia

```
Se ai-studio-image falha (limite diario, erro de API):
  → Tentar stability-ai modo ultra com prompt adaptado
  → Informar usuario sobre mudanca de modelo

Se stability-ai falha (créditos insuficientes):
  → Tentar ai-studio-image com prompt adaptado
  → Se mesmo tipo nao suportado: orientar sobre recarga

Se ambos falham:
  → Gerar prompt detalhado que usuario pode usar manualmente
  → Sugerir DALL-E, Midjourney, Leonardo AI como alternativas
```

---

#### Imported: 8. Localizacao Das Skills

```
ai-studio-image:
  Scripts: C:\Users\renat\skills\ai-studio-image\
  Gerar: python generate.py [--template T] [--prompt P]

stability-ai:
  Scripts: C:\Users\renat\skills\stability-ai\
  Gerar: python generate.py [MODE] --prompt P --style S
```

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
