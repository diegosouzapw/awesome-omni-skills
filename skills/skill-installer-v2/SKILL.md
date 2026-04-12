---
name: skill-installer-v2
description: "Skill Installer v3.0 workflow skill. Use this skill when the user needs Instala, valida, registra e verifica novas skills no ecossistema. 10 checks de seguranca, copia, registro no orchestrator e verificacao pos-instalacao and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["skill-management", "deployment", "validation", "installation", "skill-installer-v2", "skill-installer", "instala", "valida"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Skill Installer v3.0

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/skill-installer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Skill Installer v3.0

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Principio: Redundancia Maxima, Localizacao, Cenario 1: Apos Skill-Creator Finalizar, Cenario 2: Usuario Pede Para Instalar Uma Skill Especifica, Cenario 3: Simular Instalacao Sem Fazer Nada (Dry-Run).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "instalar skill" or related topics
- When the user mentions "install skill" or related topics
- When the user mentions "registrar skill" or related topics
- When the user mentions "nova skill" or related topics
- When the user mentions "new skill" or related topics
- When the user mentions "adicionar skill ao ecossistema" or related topics

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

1. Comando - Descricao
2. --source <path> - Instalar skill de caminho
3. --source <path> --force - Sobrescrever se existir
4. --source <path> --name <nome> - Nome customizado
5. --source <path> --dry-run - Simular sem alterar
6. --detect - Auto-detectar skills pendentes
7. --detect --auto - Detectar e instalar automaticamente

### Imported Workflow Notes

#### Imported: Workflow Principal

Quando esta skill for ativada, siga estes passos na ordem:

#### Imported: Install_Skill.Py

| Comando | Descricao |
|---------|-----------|
| `--source <path>` | Instalar skill de caminho |
| `--source <path> --force` | Sobrescrever se existir |
| `--source <path> --name <nome>` | Nome customizado |
| `--source <path> --dry-run` | Simular sem alterar |
| `--detect` | Auto-detectar skills pendentes |
| `--detect --auto` | Detectar e instalar automaticamente |
| `--uninstall <nome>` | Desinstalar (com backup) |
| `--rollback <nome>` | Restaurar do ultimo backup |
| `--reinstall-all` | Re-registrar + re-empacotar todas |
| `--health` | Health check de todas as skills |
| `--health --repair` | Health check + auto-correcao |
| `--status` | Dashboard rico com versoes, saude, backups |
| `--log [N]` | Ultimas N operacoes (padrao: 20) |
| `--json` | Saida JSON em vez de texto formatado |

---

#### Imported: Overview

Instala, valida, registra e verifica novas skills no ecossistema. 10 checks de seguranca, copia, registro no orchestrator e verificacao pos-instalacao.

#### Imported: How It Works

Agente instalador enterprise-grade que garante que toda skill criada (via skill-creator
ou manualmente) seja corretamente instalada, registrada e verificada no ecossistema.
Inclui auto-repair, rollback, dry-run, dashboard, e diagnostico avancado.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-installer-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/skill-installer-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/skill-installer-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @skill-installer-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/skill-installer`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Cenario 6: Health Check + Auto-Repair

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --health
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --health --repair
```

`--health` verifica TODAS as skills: frontmatter, registro, registry, duplicatas.
`--health --repair` encontra problemas E os corrige automaticamente:
- Skills nao registradas -> registra
- Skills faltando no registry -> atualiza
- Duplicatas -> remove

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/known-locations.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/detect_skills.py` |
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

#### Imported: Principio: Redundancia Maxima

Seis camadas de validacao garantem que nenhuma skill fique mal-instalada:

| Camada | Script | O que valida |
|--------|--------|-------------|
| 1 | detect_skills.py | SKILL.md existe + tem frontmatter |
| 2 | validate_skill.py | 10 checks profundos |
| 3 | install_skill.py (pre) | Conflitos, permissoes, espaco, versao |
| 4 | install_skill.py (pos) | Arquivos copiados corretamente |
| 5 | scan_registry.py | Skill aparece no registry (com deduplicacao) |
| 6 | package_skill.py | ZIP valido sem backslashes, nao-vazio, integrity check |

---

#### Imported: Localizacao

```
C:\Users\renat\skills\skill-installer\
├── SKILL.md              <- este arquivo
├── scripts/
│   ├── install_skill.py  <- instalador principal (11 passos) + todos os comandos
│   ├── detect_skills.py  <- scanner de skills nao-instaladas
│   ├── validate_skill.py <- validacao profunda (10 checks)
│   ├── package_skill.py  <- empacotador ZIP + verificador de integridade
│   └── requirements.txt
├── references/
│   └── known-locations.md
└── data/
    ├── install_log.json  <- log de operacoes (auto-gerado, com rotacao)
    ├── backups/          <- backups antes de sobrescrever
    └── staging/          <- area temporaria para copias seguras
```

---

#### Imported: Cenario 1: Apos Skill-Creator Finalizar

O skill-creator acabou de criar uma skill em algum diretorio. Execute:

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --source "<caminho-da-skill-criada>" --force
```

Substitua `<caminho-da-skill-criada>` pelo diretorio onde o skill-creator salvou a skill.

#### Imported: Cenario 2: Usuario Pede Para Instalar Uma Skill Especifica

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --source "<caminho>" [--name "nome-override"] [--force]
```

#### Imported: Cenario 3: Simular Instalacao Sem Fazer Nada (Dry-Run)

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --source "<caminho>" --dry-run
```

Mostra exatamente o que seria feito em cada um dos 11 passos, sem alterar nenhum arquivo.

#### Imported: Cenario 4: Detectar E Instalar Skills Pendentes

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --detect
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --detect --auto
```

Escaneia locais conhecidos (Desktop, Downloads, Temp, workspaces) e apresenta
candidatos com timestamps e tamanho. Com --auto instala todos automaticamente.

#### Imported: Cenario 5: Desinstalar Uma Skill

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --uninstall "nome-da-skill"
```

Remove de `skills/`, `.claude/skills/`, atualiza o registry e remove ZIP do Desktop.
Backup automatico e feito antes da remocao.

#### Imported: Cenario 7: Rollback (Restaurar De Backup)

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --rollback "nome-da-skill"
```

Encontra o backup mais recente da skill e restaura para o estado anterior.
Re-registra e atualiza o registry automaticamente.

#### Imported: Cenario 8: Reinstalar Todas As Skills

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --reinstall-all
```

Re-registra TODAS as skills em `.claude/skills/`, re-empacota todos os ZIPs,
e atualiza o registry. Util apos mudancas em massa ou migracao.

#### Imported: Cenario 9: Dashboard De Status

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --status
```

Exibe dashboard rico com: nome, versao, saude, registro, backups de cada skill,
estatisticas de operacoes (installs, uninstalls, rollbacks).

#### Imported: Cenario 10: Ver Historico De Operacoes

```bash
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --log
python C:\Users\renat\skills\skill-installer\scripts\install_skill.py --log 50
```

Mostra as ultimas N operacoes com timestamp, tipo, skill e resultado.

---

#### Imported: Validar Uma Skill

```bash
python C:\Users\renat\skills\skill-installer\scripts\validate_skill.py "C:\caminho\para\skill"
python C:\Users\renat\skills\skill-installer\scripts\validate_skill.py "C:\caminho\para\skill" --strict
```

Retorna JSON com `valid` (bool), `checks`, `warnings`, `errors`.

#### Imported: Detectar Skills Nao-Instaladas

```bash
python C:\Users\renat\skills\skill-installer\scripts\detect_skills.py
python C:\Users\renat\skills\skill-installer\scripts\detect_skills.py --path "C:\diretorio\especifico"
python C:\Users\renat\skills\skill-installer\scripts\detect_skills.py --all
```

Retorna JSON com candidatos incluindo: `name`, `source_path`, `already_installed`,
`valid_frontmatter`, `last_modified`, `size_kb`, `file_count`.

#### Imported: Empacotar Zip Para Claude.Ai

```bash
python C:\Users\renat\skills\skill-installer\scripts\package_skill.py --source "C:\caminho"
python C:\Users\renat\skills\skill-installer\scripts\package_skill.py --all
python C:\Users\renat\skills\skill-installer\scripts\package_skill.py --all --output "C:\Users\renat\Desktop"
```

#### Imported: Verificar Integridade De Zips Existentes

```bash
python C:\Users\renat\skills\skill-installer\scripts\package_skill.py --verify
python C:\Users\renat\skills\skill-installer\scripts\package_skill.py --verify --output "C:\Users\renat\Desktop"
```

---

#### Imported: O Que O Instalador Faz (11 Passos)

1. **Resolver fonte** - identifica o diretorio da skill
2. **Validar** - roda 10 checks no SKILL.md e estrutura
3. **Determinar nome** - extrai do frontmatter ou usa --name, compara versoes
4. **Verificar conflitos** - checa se ja existe no destino
5. **Backup** - se sobrescrevendo, faz backup timestamped (exclui backups/ e staging/)
6. **Copiar via staging** - copia para area temp, valida hash, depois move
7. **Registrar no Claude Code CLI** - copia SKILL.md para .claude/skills/<nome>/
8. **Atualizar registry** - roda scan_registry.py --force (com deduplicacao por nome)
9. **Verificar instalacao** - confirma arquivos, registry, registro (5 checks)
10. **Empacotar ZIP** - cria ZIP para upload no Claude.ai web/desktop (validado)
11. **Logar operacao** - append em install_log.json (com rotacao automatica)

**IMPORTANTE**: Skills no Claude Code (CLI) e Claude.ai (web/desktop) sao SEPARADAS.
O instalador cobre ambas superficies automaticamente.

---

#### Imported: Seguranca

- **Backups automaticos**: antes de qualquer sobrescrita, backup em `data/backups/<nome>_<timestamp>/`
- **Staging area**: copia para temp primeiro, valida hash, depois move (minimiza corrupcao)
- **Idempotencia**: rodar 2x com mesma source detecta hashes identicos, nao duplica
- **Arquivos proibidos**: bloqueia instalacao se encontrar .env, *.key, *.pem, credentials.*
- **Log com rotacao**: toda operacao logada; mantem ultimas 500 entradas
- **Limite de backups**: mantem ultimos 5 por skill, limpa automaticamente
- **Anti-recursao**: backup e staging excluem seus proprios subdiretorios
- **Deduplicacao no registry**: scan_registry.py deduplica por nome (case-insensitive)
- **ZIP validado**: verifica ausencia de backslashes, conteudo nao-vazio, integridade
- **Dry-run**: simula instalacao completa sem tocar nenhum arquivo
- **Rollback**: restaura de backup com re-registro automatico
- **Comparacao de versao**: detecta upgrade/downgrade/same antes de sobrescrever
- **Hash normalizado**: md5_dir usa forward slashes e exclui dirs de sistema

---

#### Imported: Integracao Com Orchestrator

Esta skill e auto-detectada pelo `scan_registry.py` e matchada pelo `match_skills.py`
quando o usuario menciona keywords de instalacao. Nenhuma configuracao manual necessaria.

Alem disso, o CLAUDE.md global contem instrucao para rodar o instalador automaticamente
apos o skill-creator finalizar uma skill.

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis
