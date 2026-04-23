---
name: "amazon-alexa"
description: "AMAZON ALEXA \\u2014 Voz Inteligente com Claude workflow skill. Use this skill when the user needs Integracao completa com Amazon Alexa para criar skills de voz inteligentes, transformar Alexa em assistente com Claude como cerebro (projeto Auri) e integrar com AWS ecosystem (Lambda, DynamoDB, Polly, Transcribe, Lex, Smart Home) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "devops"
tags:
  - "voice"
  - "alexa"
  - "aws"
  - "smart-home"
  - "iot"
  - "amazon-alexa"
  - "integracao"
  - "completa"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "claude-code"
  - "antigravity"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-23"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "amazon-alexa"
family_name: "AMAZON ALEXA \u2014 Voz Inteligente com Claude"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/amazon-alexa"
upstream_skill: "skills/amazon-alexa"
upstream_author: "renat"
upstream_source: "community"
upstream_pr: "126"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "032affbbd536f09d7636f0fbbfd35093380dae89"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "amazon-alexa"
---

# AMAZON ALEXA — Voz Inteligente com Claude

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/amazon-alexa` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# AMAZON ALEXA — Voz Inteligente com Claude

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, 1. Visao Geral Do Ecossistema, Componentes Da Arquitetura Auri, 2.1 Pre-Requisitos, Ask Cli, Aws Cli.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to amazon alexa
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: Integracao completa com Amazon Alexa para criar skills de voz inteligentes, transformar Alexa em assistente com Claude como cerebro (projeto Auri) e integrar com AWS ecosystem (Lambda, DynamoDB, Polly, Transcribe, Lex,....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. [ ] Conta Amazon Developer criada [ ] Conta AWS configurada (free tier) [ ] ASK CLI instalado e configurado [ ] IAM Role criada com permissoes: Lambda, DynamoDB, Polly, Logs [ ] Anthropic API key armazenada em Secrets Manager
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Fase 1 — Setup (Dia 1)

```
[ ] Conta Amazon Developer criada
[ ] Conta AWS configurada (free tier)
[ ] ASK CLI instalado e configurado
[ ] IAM Role criada com permissoes: Lambda, DynamoDB, Polly, Logs
[ ] Anthropic API key armazenada em Secrets Manager
```

#### Imported: Overview

Integracao completa com Amazon Alexa para criar skills de voz inteligentes, transformar Alexa em assistente com Claude como cerebro (projeto Auri) e integrar com AWS ecosystem (Lambda, DynamoDB, Polly, Transcribe, Lex, Smart Home).

#### Imported: How It Works

> Voce e o especialista em Alexa e AWS Voice. Missao: transformar
> qualquer dispositivo Alexa em assistente ultra-inteligente usando
> Claude como LLM backend, com voz neural, memoria persistente e
> controle de Smart Home. Projeto-chave: AURI.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @amazon-alexa to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @amazon-alexa against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @amazon-alexa for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @amazon-alexa using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/amazon-alexa`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: └── .Ask/Ask-Resources.Json

```

#### Imported: 1. Visao Geral Do Ecossistema

```
[Alexa Device] → [Alexa Cloud] → [AWS Lambda] → [Claude API]
    Fala          Transcricao      Logica          Inteligencia
      ↑               ↑               ↑                ↑
   Usuario         Intent        Handler          Anthropic
                               + DynamoDB
                               + Polly TTS
                               + APL Visual
```

#### Imported: Componentes Da Arquitetura Auri

| Componente | Servico AWS | Funcao |
|-----------|-------------|--------|
| Voz → Texto | Alexa ASR nativo | Reconhecimento de fala |
| NLU | ASK Interaction Model + Lex V2 | Extrair intent e slots |
| Backend | AWS Lambda (Python/Node.js) | Logica e orquestracao |
| LLM | Claude API (Anthropic) | Inteligencia e respostas |
| Persistencia | Amazon DynamoDB | Historico e preferencias |
| Texto → Voz | Amazon Polly (neural) | Fala natural da Auri |
| Interface Visual | APL (Alexa Presentation Language) | Telas em Echo Show |
| Smart Home | Alexa Smart Home API | Controle de dispositivos |
| Automacao | Alexa Routines API | Rotinas inteligentes |

---

#### Imported: 2.1 Pre-Requisitos

```bash

#### Imported: Ask Cli

npm install -g ask-cli
ask configure

#### Imported: Aws Cli

pip install awscli
aws configure
```

#### Imported: Criar Skill Com Template

ask new \
  --template hello-world \
  --skill-name auri \
  --language pt-BR

#### Imported: 2.3 Configurar Invocation Name

No arquivo `models/pt-BR.json`:
```json
{
  "interactionModel": {
    "languageModel": {
      "invocationName": "auri"
    }
  }
}
```

---

#### Imported: 3.1 Intents Essenciais Para Auri

```json
{
  "interactionModel": {
    "languageModel": {
      "invocationName": "auri",
      "intents": [
        {"name": "AMAZON.HelpIntent"},
        {"name": "AMAZON.StopIntent"},
        {"name": "AMAZON.CancelIntent"},
        {"name": "AMAZON.FallbackIntent"},
        {
          "name": "ChatIntent",
          "slots": [{"name": "query", "type": "AMAZON.SearchQuery"}],
          "samples": [
            "{query}",
            "me ajuda com {query}",
            "quero saber sobre {query}",
            "o que voce sabe sobre {query}",
            "explique {query}",
            "pesquise {query}"
          ]
        },
        {
          "name": "SmartHomeIntent",
          "slots": [
            {"name": "device", "type": "AMAZON.Room"},
            {"name": "action", "type": "ActionType"}
          ],
          "samples": [
            "{action} a {device}",
            "controla {device}",
            "acende {device}",
            "apaga {device}"
          ]
        },
        {
          "name": "RoutineIntent",
          "slots": [{"name": "routine", "type": "RoutineType"}],
          "samples": [
            "ativa rotina {routine}",
            "executa {routine}",
            "modo {routine}"
          ]
        }
      ],
      "types": [
        {
          "name": "ActionType",
          "values": [
            {"name": {"value": "liga", "synonyms": ["acende", "ativa", "liga"]}},
            {"name": {"value": "desliga", "synonyms": ["apaga", "desativa", "desliga"]}}
          ]
        },
        {
          "name": "RoutineType",
          "values": [
            {"name": {"value": "bom dia", "synonyms": ["acordar", "manhã"]}},
            {"name": {"value": "boa noite", "synonyms": ["dormir", "descansar"]}},
            {"name": {"value": "trabalho", "synonyms": ["trabalhar", "foco"]}},
            {"name": {"value": "sair", "synonyms": ["saindo", "goodbye"]}}
          ]
        }
      ]
    }
  }
}
```

---

#### Imported: 4.1 Handler Principal Python

```python
import os
import time
import anthropic
import boto3
from ask_sdk_core.skill_builder import SkillBuilder
from ask_sdk_core.handler_input import HandlerInput
from ask_sdk_core.utils import is_intent_name, is_request_type
from ask_sdk_model import Response
from ask_sdk_dynamodb_persistence_adapter import DynamoDbPersistenceAdapter

#### Imported: ============================================================

@sb.request_handler(can_handle_func=is_request_type("LaunchRequest"))
def launch_handler(handler_input: HandlerInput) -> Response:
    attrs = handler_input.attributes_manager.persistent_attributes
    name = attrs.get("name", "")
    greeting = f"Oi{', ' + name if name else ''}! Eu sou a Auri. Como posso ajudar?"
    return (handler_input.response_builder
            .speak(greeting).ask("Em que posso ajudar?").response)


@sb.request_handler(can_handle_func=is_intent_name("ChatIntent"))
def chat_handler(handler_input: HandlerInput) -> Response:
    try:
        # Obter query
        slots = handler_input.request_envelope.request.intent.slots
        query = slots["query"].value if slots.get("query") else None
        if not query:
            return (handler_input.response_builder
                    .speak("Pode repetir? Nao entendi bem.").ask("Pode repetir?").response)

        # Carregar historico
        attrs = handler_input.attributes_manager.persistent_attributes
        history = attrs.get("history", [])

        # Montar mensagens para Claude
        messages = history[-MAX_HISTORY:]
        messages.append({"role": "user", "content": query})

        # Chamar Claude
        client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
        response = client.messages.create(
            model=CLAUDE_MODEL,
            max_tokens=512,
            system=AURI_SYSTEM_PROMPT,
            messages=messages
        )
        reply = response.content[0].text

        # Truncar para nao exceder timeout
        if len(reply) > MAX_RESPONSE_CHARS:
            reply = reply[:MAX_RESPONSE_CHARS] + "... Quer que eu continue?"

        # Salvar historico
        history.append({"role": "user", "content": query})
        history.append({"role": "assistant", "content": reply})
        attrs["history"] = history[-50:]  # Manter ultimas 50
        handler_input.attributes_manager.persistent_attributes = attrs
        handler_input.attributes_manager.save_persist

#### Imported: 4.2 Variaveis De Ambiente Lambda

```
ANTHROPIC_API_KEY=sk-...  (armazenar em Secrets Manager)
DYNAMODB_TABLE=auri-users
AWS_REGION=us-east-1
```

#### Imported: 4.3 Requirements.Txt

```
ask-sdk-core>=1.19.0
ask-sdk-dynamodb-persistence-adapter>=1.19.0
anthropic>=0.40.0
boto3>=1.34.0
```

---

#### Imported: 5.1 Criar Tabela

```bash
aws dynamodb create-table \
  --table-name auri-users \
  --attribute-definitions AttributeName=userId,AttributeType=S \
  --key-schema AttributeName=userId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1
```

#### Imported: 5.2 Schema Do Usuario

```json
{
  "userId": "amzn1.ask.account.XXXXX",
  "name": "Joao",
  "history": [
    {"role": "user", "content": "..."},
    {"role": "assistant", "content": "..."}
  ],
  "preferences": {
    "language": "pt-BR",
    "voice": "Vitoria",
    "personality": "assistente profissional"
  },
  "smartHome": {
    "devices": {},
    "routines": {}
  },
  "updatedAt": 1740960000,
  "ttl": 1748736000
}
```

#### Imported: 5.3 Ttl Automatico (Expirar Dados Antigos)

```python
import time

#### Imported: Adicionar Ttl De 180 Dias Ao Salvar

attrs["ttl"] = int(time.time()) + (180 * 24 * 3600)
```

---

#### Imported: 6.1 Vozes Disponiveis (Portugues)

| Voice | Idioma | Tipo | Recomendado |
|-------|--------|------|-------------|
| `Vitoria` | pt-BR | Neural | ✅ Auri PT-BR |
| `Camila` | pt-BR | Neural | Alternativa |
| `Ricardo` | pt-BR | Standard | Masculino |
| `Ines` | pt-PT | Neural | Portugal |

#### Imported: 6.2 Integrar Polly Na Resposta

```python
import boto3
import base64

def synthesize_polly(text: str, voice_id: str = "Vitoria") -> str:
    """Retorna URL de audio Polly para usar em Alexa."""
    client = boto3.client("polly", region_name="us-east-1")
    response = client.synthesize_speech(
        Text=text,
        OutputFormat="mp3",
        VoiceId=voice_id,
        Engine="neural"
    )
    # Salvar em S3 e retornar URL
    # (necessario para usar audio customizado no Alexa)
    return upload_to_s3(response["AudioStream"].read())

def speak_with_polly(handler_input, text, voice_id="Vitoria"):
    """Retornar resposta usando voz Polly customizada via SSML."""
    audio_url = synthesize_polly(text, voice_id)
    ssml = f'<speak><audio src="{audio_url}"/></speak>'
    return handler_input.response_builder.speak(ssml)
```

#### Imported: 6.3 Ssml Para Controle De Voz

```xml
<speak>
  <prosody rate="90%" pitch="+5%">
    Oi! Eu sou a Auri.
  </prosody>
  <break time="0.5s"/>
  <emphasis level="moderate">Como posso ajudar?</emphasis>
</speak>
```

---

#### Imported: 7.1 Template De Chat

```json
{
  "type": "APL",
  "version": "2023.3",
  "theme": "dark",
  "mainTemplate": {
    "parameters": ["payload"],
    "items": [{
      "type": "Container",
      "width": "100%",
      "height": "100%",
      "backgroundColor": "#1a1a2e",
      "items": [
        {
          "type": "Text",
          "text": "AURI",
          "fontSize": "32px",
          "color": "#e94560",
          "textAlign": "center",
          "paddingTop": "20px"
        },
        {
          "type": "Text",
          "text": "${payload.lastResponse}",
          "fontSize": "24px",
          "color": "#ffffff",
          "padding": "20px",
          "maxLines": 8,
          "grow": 1
        },
        {
          "type": "Text",
          "text": "Diga algo para continuar...",
          "fontSize": "18px",
          "color": "#888888",
          "textAlign": "center",
          "paddingBottom": "20px"
        }
      ]
    }]
  }
}
```

#### Imported: 7.2 Adicionar Apl Na Resposta

```python
@sb.request_handler(can_handle_func=is_intent_name("ChatIntent"))
def chat_with_apl(handler_input: HandlerInput) -> Response:
    # ... obter reply do Claude ...

    # Verificar se device suporta APL
    supported = handler_input.request_envelope.context.system.device.supported_interfaces
    has_apl = getattr(supported, "alexa_presentation_apl", None) is not None

    if has_apl:
        apl_directive = {
            "type": "Alexa.Presentation.APL.RenderDocument",
            "token": "auri-chat",
            "document": CHAT_APL_DOCUMENT,
            "datasources": {"payload": {"lastResponse": reply}}
        }
        handler_input.response_builder.add_directive(apl_directive)

    return handler_input.response_builder.speak(reply).ask("Mais alguma coisa?").response
```

---

#### Imported: 8.1 Ativar Smart Home Skill

No `skill.json`, adicionar:
```json
{
  "apis": {
    "smartHome": {
      "endpoint": {
        "uri": "arn:aws:lambda:us-east-1:123456789:function:auri-smart-home"
      }
    }
  }
}
```

#### Imported: 8.2 Handler De Smart Home

```python
def handle_smart_home_directive(event, context):
    namespace = event["directive"]["header"]["namespace"]
    name = event["directive"]["header"]["name"]
    endpoint_id = event["directive"]["endpoint"]["endpointId"]

    if namespace == "Alexa.PowerController":
        state = "ON" if name == "TurnOn" else "OFF"
        # Chamar sua API de smart home
        control_device(endpoint_id, {"power": state})
        return build_smart_home_response(endpoint_id, "powerState", state)

    elif namespace == "Alexa.BrightnessController":
        brightness = event["directive"]["payload"]["brightness"]
        control_device(endpoint_id, {"brightness": brightness})
        return build_smart_home_response(endpoint_id, "brightness", brightness)
```

#### Imported: 8.3 Discovery De Dispositivos

```python
def handle_discovery(event, context):
    return {
        "event": {
            "header": {
                "namespace": "Alexa.Discovery",
                "name": "Discover.Response",
                "payloadVersion": "3"
            },
            "payload": {
                "endpoints": [
                    {
                        "endpointId": "light-sala-001",
                        "friendlyName": "Luz da Sala",
                        "displayCategories": ["LIGHT"],
                        "capabilities": [
                            {
                                "type": "AlexaInterface",
                                "interface": "Alexa.PowerController",
                                "version": "3"
                            },
                            {
                                "type": "AlexaInterface",
                                "interface": "Alexa.BrightnessController",
                                "version": "3"
                            }
                        ]
                    }
                ]
            }
        }
    }
```

---

#### Imported: Deploy Completo (Skill + Lambda)

cd auri/
ask deploy

#### Imported: Verificar Status

ask status

#### Imported: Testar No Simulador

ask dialog --locale pt-BR

#### Imported: Teste Especifico De Intent

ask simulate \
  --text "abrir auri" \
  --locale pt-BR \
  --skill-id amzn1.ask.skill.YOUR-SKILL-ID
```

#### Imported: Criar Lambda Manualmente

aws lambda create-function \
  --function-name auri-skill \
  --runtime python3.11 \
  --role arn:aws:iam::ACCOUNT:role/auri-lambda-role \
  --handler lambda_function.handler \
  --timeout 8 \
  --memory-size 512 \
  --zip-file fileb://function.zip

#### Imported: Usar Secrets Manager

aws secretsmanager create-secret \
  --name auri/anthropic-key \
  --secret-string '{"ANTHROPIC_API_KEY": "sk-..."}'

#### Imported: Lambda Acessa Via Sdk:

import boto3, json
def get_secret(secret_name):
    client = boto3.client('secretsmanager')
    response = client.get_secret_value(SecretId=secret_name)
    return json.loads(response['SecretString'])
```

---

#### Imported: Fase 2 — Skill Base (Dia 2-3)

```
[ ] ask new --template hello-world --skill-name auri
[ ] Interaction model definido (pt-BR.json)
[ ] LaunchRequest handler funcionando
[ ] ChatIntent handler com Claude integrado
[ ] ask deploy funcionando
[ ] Teste basico no ASK simulator
```

#### Imported: Fase 3 — Persistencia (Dia 4)

```
[ ] DynamoDB table criada
[ ] Persistencia de historico funcionando
[ ] TTL configurado
[ ] Preferencias do usuario salvas
```

#### Imported: Fase 4 — Polly + Apl (Dia 5-6)

```
[ ] Polly integrado com voz Vitoria (neural)
[ ] APL template de chat criado
[ ] APL renderizando em Echo Show simulator
```

#### Imported: Fase 5 — Smart Home (Opcional)

```
[ ] Smart Home skill habilitada
[ ] Discovery de dispositivos funcionando
[ ] PowerController implementado
[ ] Teste com device real
```

#### Imported: Fase 6 — Publicacao

```
[ ] Teste completo de todas funcionalidades
[ ] Performance OK (< 8s timeout)
[ ] Certificacao Amazon submetida
[ ] Publicado na Alexa Skills Store
```

---

#### Imported: 11. Comandos Rapidos

| Acao | Comando |
|------|---------|
| Criar skill | `ask new --template hello-world` |
| Deploy | `ask deploy` |
| Simular | `ask simulate --text "abre a auri"` |
| Dialog interativo | `ask dialog --locale pt-BR` |
| Ver logs | `ask smapi get-skill-simulation` |
| Validar modelo | `ask validate --locales pt-BR` |
| Exportar skill | `ask smapi export-package --skill-id ID` |
| Listar skills | `ask list skills` |

---

#### Imported: 12. Referencias

- Boilerplate Python completo: `assets/boilerplate/lambda_function.py`
- Interaction model PT-BR: `assets/interaction-models/pt-BR.json`
- APL chat template: `assets/apl-templates/chat-interface.json`
- Smart Home examples: `references/smart-home-api.md`
- ASK SDK Python docs: https://github.com/alexa/alexa-skills-kit-sdk-for-python
- Claude + Alexa guide: https://www.anthropic.com/news/claude-and-alexa-plus

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
