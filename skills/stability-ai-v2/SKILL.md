---
name: stability-ai-v2
description: "Stability AI \u2014 Gerador de Imagens Profissional workflow skill. Use this skill when the user needs Geracao de imagens via Stability AI (SD3.5, Ultra, Core). Text-to-image, img2img, inpainting, upscale, remove-bg, search-replace. 15 estilos artisticos and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["image-generation", "stable-diffusion", "ai-art", "api", "stability-ai-v2", "stability-ai", "geracao", "imagens"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Stability AI — Gerador de Imagens Profissional

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/stability-ai` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Stability AI — Gerador de Imagens Profissional

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Quando Usar Esta Skill Vs Ai-Studio-Image, 1. Modos De Operacao, 2. Exemplos De Uso, Geracao Basica (Sd 3.5 Large), Qualidade Maxima (Ultra).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "stability ai" or related topics
- When the user mentions "stable diffusion" or related topics
- When the user mentions "sd3.5" or related topics
- When the user mentions "gerar arte" or related topics
- When the user mentions "gerar ilustracao" or related topics
- When the user mentions "image to image" or related topics

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

1. Criar conta em platform.stability.ai (gratuito)
2. Copiar API Key do dashboard
3. Colar no .env: STABILITYAPIKEY=sk-sua-chave-aqui
4. pip install -r scripts/requirements.txt
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Setup Rapido

1. Criar conta em **platform.stability.ai** (gratuito)
2. Copiar API Key do dashboard
3. Colar no `.env`: `STABILITY_API_KEY=sk-sua-chave-aqui`
4. `pip install -r scripts/requirements.txt`

Detalhes completos em `references/setup-guide.md`.

#### Imported: Overview

Geracao de imagens via Stability AI (SD3.5, Ultra, Core). Text-to-image, img2img, inpainting, upscale, remove-bg, search-replace. 15 estilos artisticos.

#### Imported: How It Works

Skill para gerar imagens artisticas e fotorrealistas usando a Stability AI API.
**Gratuito** com Community License (sem limite para uso pessoal/pequenas empresas).

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @stability-ai-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/stability-ai-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/stability-ai-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @stability-ai-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/stability-ai`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/api-reference.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/config.py` |
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

#### Imported: Quando Usar Esta Skill Vs Ai-Studio-Image

| Cenario | Skill recomendada |
|---------|-------------------|
| Foto humanizada para Instagram/redes sociais | ai-studio-image |
| Arte digital, ilustracao, concept art | **stability-ai** |
| Foto com camera de celular (realismo casual) | ai-studio-image |
| Fotorrealismo cinematografico (8K, detalhado) | **stability-ai** |
| Material educacional com visual profissional | ai-studio-image |
| Poster, wallpaper, book cover, game asset | **stability-ai** |
| Inpainting (editar parte de uma imagem) | **stability-ai** |
| Upscale (aumentar resolucao) | **stability-ai** |
| Remover fundo de imagem | **stability-ai** |
| Search & Replace (trocar objeto em imagem) | **stability-ai** |
| Apagar elemento de uma imagem | **stability-ai** |

#### Imported: 1. Modos De Operacao

| Comando | O que faz | Endpoint |
|---------|-----------|----------|
| `--mode generate` | Texto para imagem (SD3.5) | `/generate/sd3` |
| `--mode ultra` | Texto para imagem premium | `/generate/ultra` |
| `--mode core` | Texto para imagem rapido | `/generate/core` |
| `--mode img2img` | Imagem + texto para nova imagem | `/generate/sd3` |
| `--mode upscale` | Aumentar resolucao (conservativo) | `/upscale/conservative` |
| `--mode upscale-creative` | Aumentar resolucao com detalhes | `/upscale/creative` |
| `--mode remove-bg` | Remover fundo (PNG transparente) | `/edit/remove-background` |
| `--mode inpaint` | Editar parte da imagem (mascara) | `/edit/inpaint` |
| `--mode search-replace` | Trocar objeto por descricao | `/edit/search-and-replace` |
| `--mode erase` | Apagar parte da imagem | `/edit/erase` |

#### Imported: 2. Exemplos De Uso

```bash

#### Imported: Geracao Basica (Sd 3.5 Large)

python scripts/generate.py --prompt "a serene mountain landscape at sunset" --mode generate

#### Imported: Qualidade Maxima (Ultra)

python scripts/generate.py --prompt "cinematic portrait, dramatic lighting" --mode ultra --aspect-ratio 16:9

#### Imported: Rapido Para Iteracao (Core)

python scripts/generate.py --prompt "cute cat ninja" --mode core --style anime

#### Imported: Image-To-Image

python scripts/generate.py --prompt "watercolor style" --mode img2img --image foto.jpg --strength 0.7

#### Imported: Upscale Conservativo

python scripts/generate.py --prompt "landscape photo" --mode upscale --image foto_pequena.jpg

#### Imported: Remover Fundo

python scripts/generate.py --mode remove-bg --image produto.jpg

#### Imported: Inpainting Com Mascara

python scripts/generate.py --prompt "red roses" --mode inpaint --image jardim.jpg --mask mascara.png

#### Imported: Search & Replace

python scripts/generate.py --prompt "a golden retriever" --mode search-replace --image parque.jpg --search "the cat"

#### Imported: Apagar Objeto

python scripts/generate.py --mode erase --image foto.jpg --mask area.png

#### Imported: Listar Modelos

python scripts/generate.py --list-models

#### Imported: Listar Estilos

python scripts/generate.py --list-styles

#### Imported: Analisar Prompt (Sugestoes Automaticas)

python scripts/generate.py --prompt "anime warrior girl, widescreen" --analyze --json
```

#### Imported: 3. Aspect Ratios

| Nome | Ratio | Aliases | Uso tipico |
|------|-------|---------|-----------|
| square | 1:1 | ig, instagram, quadrado | Feed Instagram |
| portrait | 2:3 | retrato, pinterest | Retrato, poster |
| landscape | 3:2 | paisagem, horizontal | Paisagem, banner |
| photo | 4:5 | ig-feed | Instagram feed otimizado |
| wide | 16:9 | widescreen, youtube, cinema, wallpaper | Cinema, YT |
| ultrawide | 21:9 | — | Monitor ultrawide |
| stories | 9:16 | vertical, tiktok, ig-stories | Stories, Reels |
| phone | 9:21 | — | Wallpaper celular |

#### Imported: 4. Estilos (15 Presets)

Cada estilo adiciona qualificadores automaticamente ao prompt:

| Estilo | Descricao | Ideal para |
|--------|-----------|-----------|
| photorealistic | Fotorrealismo cinematografico | Retratos, cenas |
| anime | Anime/Manga japones | Personagens, cenas |
| digital-art | Arte digital detalhada | Ilustracoes gerais |
| oil-painting | Pintura a oleo classica | Arte classica |
| watercolor | Aquarela fluida | Arte delicada |
| pixel-art | Pixel art retro 8/16-bit | Games retro |
| 3d-render | Render 3D fotorrealista | Produtos, cenas 3D |
| concept-art | Concept art profissional | Games, filmes |
| comic | Comics/HQ estilizado | Quadrinhos |
| minimalist | Minimalista limpo | Design, logos |
| fantasy | Fantasy art epico | RPG, medieval |
| sci-fi | Sci-fi futurista | Cyberpunk, espaco |
| sketch | Desenho a lapis/carvao | Estudos, rascunhos |
| pop-art | Pop art vibrante | Arte moderna |
| noir | Film noir dramatico | Atmosfera sombria |

#### Imported: 5. Output

Imagens salvas em `data/outputs/` com naming: `{mode}_{style}_{timestamp}_{index}.png`

Metadados salvos em `.meta.json` com: prompt original, prompt final, modelo, aspect ratio, seed, tempo, tamanho.

#### Imported: Integracao Com Outras Skills

- **ai-studio-image**: Complementar — Stability AI para arte, Gemini para fotos humanizadas
- **instagram**: Gerar arte → publicar no Instagram
- **telegram**: Gerar imagem → enviar via bot

#### Imported: Rate Limits & Seguranca

- **Community License**: 150 requests/10 segundos
- **Limite diario**: 100 imagens/dia (configuravel via `SAFETY_MAX_IMAGES_PER_DAY`)
- **Retry automatico** com backoff exponencial em caso de 429
- **Fallback de API keys** (primaria + backups)

#### Imported: Referencia De Arquivos

| Arquivo | Quando consultar |
|---------|-----------------|
| `references/setup-guide.md` | Setup inicial, API key, troubleshooting |
| `references/prompt-engineering.md` | Tecnicas avancadas de prompt |
| `references/api-reference.md` | Endpoints, parametros, respostas, erros |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis
