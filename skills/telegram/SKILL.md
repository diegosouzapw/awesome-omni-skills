---
name: telegram
description: "Telegram Bot API - Integracao Profissional workflow skill. Use this skill when the user needs Integracao completa com Telegram Bot API. Setup com BotFather, mensagens, webhooks, inline keyboards, grupos, canais. Boilerplates Node.js e Python and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["messaging", "telegram", "bots", "webhooks", "integracao", "completa", "com", "bot"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Telegram Bot API - Integracao Profissional

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/telegram` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Telegram Bot API - Integracao Profissional

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Decision Tree, Ou, Variaveis De Ambiente, Node.Js/Typescript, Python.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "telegram" or related topics
- When the user mentions "bot telegram" or related topics
- When the user mentions "telegram bot" or related topics
- When the user mentions "api telegram" or related topics
- When the user mentions "chatbot telegram" or related topics
- When the user mentions "mensagem telegram" or related topics

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/advanced-features.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/api-reference.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Abra o Telegram e busque @BotFather
2. Envie /newbot
3. Escolha nome de exibicao (ex: "Meu Bot Incrivel")
4. Escolha username (deve terminar com "bot", ex: meuincrivelbot)
5. BotFather retorna o token - guarde com seguranca
6. Comandos uteis do BotFather:
7. /setdescription - descricao do bot

### Imported Workflow Notes

#### Imported: Setup Com Botfather

1. Abra o Telegram e busque @BotFather
2. Envie `/newbot`
3. Escolha nome de exibicao (ex: "Meu Bot Incrivel")
4. Escolha username (deve terminar com "bot", ex: `meu_incrivel_bot`)
5. BotFather retorna o token - guarde com seguranca
6. Comandos uteis do BotFather:
   - `/setdescription` - descricao do bot
   - `/setabouttext` - texto "sobre" do bot
   - `/setuserpic` - foto de perfil
   - `/setcommands` - lista de comandos
   - `/mybots` - gerenciar bots existentes
   - `/setinline` - habilitar inline mode
   - `/setprivacy` - modo privacidade em grupos

---

#### Imported: Instalar: Pip Install Python-Telegram-Bot Python-Dotenv

import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

load_dotenv()

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('Ola! Eu sou seu bot. Como posso ajudar?')

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(f'Voce disse: {update.message.text}')

app = Application.builder().token(os.getenv('TELEGRAM_BOT_TOKEN')).build()
app.add_handler(CommandHandler('start', start))
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))
app.run_polling()
```

#### Imported: Overview

Integracao completa com Telegram Bot API. Setup com BotFather, mensagens, webhooks, inline keyboards, grupos, canais. Boilerplates Node.js e Python.

#### Imported: Overview

A Telegram Bot API permite criar bots que interagem com usuarios via mensagens, comandos, inline keyboards, pagamentos e muito mais. Bots sao criados pelo @BotFather e autenticados via token unico.

**Base URL:** `https://api.telegram.org/bot<TOKEN>/METHOD_NAME`
**Metodos HTTP:** GET e POST
**Formatos de parametros:** query string, application/x-www-form-urlencoded, application/json, multipart/form-data (uploads)
**Limite de arquivos:** 50MB download, 20MB upload (via multipart), 50MB via URL

**Portas suportadas para webhooks:** 443, 80, 88, 8443

**Pre-requisitos:**
- Conta no Telegram
- Bot criado via @BotFather (fornece o token)
- Token no formato: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`

Se o usuario nao tem um bot criado, oriente a conversar com @BotFather no Telegram e enviar `/newbot`.

---

#### Imported: How It Works

Skill para implementar bots profissionais no Telegram usando a Bot API oficial. Suporta Node.js/TypeScript e Python.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @telegram to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @telegram against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @telegram for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @telegram using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/telegram`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@supply-chain-risk-auditor` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sveltekit` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swift-concurrency-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swiftui-expert-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/advanced-features.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/send_message.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/boilerplate/nodejs/.env.example` |

- [advanced-features.md](references/advanced-features.md)
- [api-reference.md](references/api-reference.md)
- [chat-management.md](references/chat-management.md)
- [webhook-setup.md](references/webhook-setup.md)
- [send_message.py](scripts/send_message.py)
- [setup_project.py](scripts/setup_project.py)
- [test_bot.py](scripts/test_bot.py)
- [boilerplate/nodejs/.env.example](assets/boilerplate/nodejs/.env.example)

### Imported Reference Notes

#### Imported: Decision Tree

```
O usuario precisa criar um bot?
├── SIM → Secao "Setup com BotFather" abaixo
└── NAO → Qual linguagem?
    ├── Node.js/TypeScript
    └── Python
    → O que quer fazer?
       ├── Enviar mensagens → Secao "Tipos de Mensagem"
       ├── Receber mensagens → Secao "Receber Updates"
       ├── Teclados interativos → Secao "Keyboards"
       ├── Gerenciar grupos/canais → references/chat-management.md
       ├── Webhook setup → references/webhook-setup.md
       ├── Inline mode → references/advanced-features.md
       ├── Pagamentos → references/advanced-features.md
       ├── Bot de atendimento com IA → Secao "Automacao com IA"
       └── Referencia completa da API → references/api-reference.md
```

Para iniciar um projeto do zero com boilerplate pronto:
```bash
python scripts/setup_project.py --language nodejs --path ./meu-bot-telegram

#### Imported: Ou

python scripts/setup_project.py --language python --path ./meu-bot-telegram
```

Para testar se o token do bot funciona:
```bash
python scripts/test_bot.py --token "SEU_TOKEN"
```

Para enviar uma mensagem de teste:
```bash
python scripts/send_message.py --token "SEU_TOKEN" --chat-id "CHAT_ID" --text "Hello!"
```

---

#### Imported: Variaveis De Ambiente

```env
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
```

#### Imported: Node.Js/Typescript

```typescript
// Instalar: npm install node-telegram-bot-api dotenv
// Para TypeScript: npm install -D @types/node-telegram-bot-api typescript
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN!, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Ola! Eu sou seu bot. Como posso ajudar?');
});

bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/')) {
    bot.sendMessage(msg.chat.id, `Voce disse: ${msg.text}`);
  }
});
```

#### Imported: Python

```python

#### Imported: Sem Biblioteca (Http Puro)

```python
import requests

TOKEN = "SEU_TOKEN"
BASE = f"https://api.telegram.org/bot{TOKEN}"

#### Imported: Verificar Bot

r = requests.get(f"{BASE}/getMe")
print(r.json())

#### Imported: Enviar Mensagem

r = requests.post(f"{BASE}/sendMessage", json={
    "chat_id": "CHAT_ID",
    "text": "Hello from pure HTTP!",
    "parse_mode": "HTML"
})
print(r.json())
```

---

#### Imported: Tipos De Mensagem

O Telegram suporta diversos tipos de conteudo. Todos os metodos aceitam `chat_id`, `reply_parameters` (para responder), `reply_markup` (para keyboards), `disable_notification` e `protect_content`.

#### Imported: Html (Recomendado)

await bot.send_message(
    chat_id=chat_id,
    text="<b>Negrito</b>, <i>italico</i>, <code>codigo</code>, <a href='https://example.com'>link</a>",
    parse_mode="HTML"
)

#### Imported: Markdownv2 (Escapar Caracteres Especiais: _ * [ ] ( ) ~ ` > # + - = | { } . !)

await bot.send_message(
    chat_id=chat_id,
    text="*Negrito*, _italico_, `codigo`, [link](https://example\\.com)",
    parse_mode="MarkdownV2"
)
```

#### Imported: Foto (Por Url, File_Id Ou Upload)

await bot.send_photo(chat_id, photo="https://example.com/img.jpg", caption="Legenda aqui")

#### Imported: Documento

await bot.send_document(chat_id, document=open("relatorio.pdf", "rb"), caption="Relatorio mensal")

#### Imported: Video

await bot.send_video(chat_id, video="https://example.com/video.mp4", caption="Assista!")

#### Imported: Audio

await bot.send_audio(chat_id, audio=open("musica.mp3", "rb"), title="Minha Musica")

#### Imported: Voz (Ogg Com Opus)

await bot.send_voice(chat_id, voice=open("audio.ogg", "rb"))

#### Imported: Localizacao

await bot.send_location(chat_id, latitude=-23.5505, longitude=-46.6333)

#### Imported: Contato

await bot.send_contact(chat_id, phone_number="+5511999999999", first_name="Joao")

#### Imported: Enquete

await bot.send_poll(
    chat_id, question="Qual sua cor favorita?",
    options=["Azul", "Verde", "Vermelho"],
    is_anonymous=False
)

#### Imported: Grupo De Midias

await bot.send_media_group(chat_id, media=[
    InputMediaPhoto("url1", caption="Foto 1"),
    InputMediaPhoto("url2"),
    InputMediaVideo("url3")
])

#### Imported: Acao De Chat (Typing, Upload_Photo, Etc.)

await bot.send_chat_action(chat_id, action="typing")
```

#### Imported: Node.Js Equivalente

```typescript
// Foto
bot.sendPhoto(chatId, 'https://example.com/img.jpg', { caption: 'Legenda' });

// Documento
bot.sendDocument(chatId, fs.createReadStream('relatorio.pdf'), { caption: 'Relatorio' });

// Localizacao
bot.sendLocation(chatId, -23.5505, -46.6333);

// Enquete
bot.sendPoll(chatId, 'Qual sua cor favorita?', ['Azul', 'Verde', 'Vermelho']);
```

---

#### Imported: Inline Keyboard (Botoes Dentro Da Mensagem)

```python
from telegram import InlineKeyboardButton, InlineKeyboardMarkup

keyboard = InlineKeyboardMarkup([
    [InlineKeyboardButton("Opcao A", callback_data="opt_a"),
     InlineKeyboardButton("Opcao B", callback_data="opt_b")],
    [InlineKeyboardButton("Abrir Site", url="https://example.com")],
    [InlineKeyboardButton("Compartilhar", switch_inline_query="texto")]
])

await bot.send_message(chat_id, "Escolha uma opcao:", reply_markup=keyboard)

#### Imported: Handler De Callback

async def button_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()  # Importante: sempre responder o callback
    await query.edit_message_text(f"Voce escolheu: {query.data}")

app.add_handler(CallbackQueryHandler(button_callback))
```

#### Imported: Reply Keyboard (Teclado Customizado)

```python
from telegram import ReplyKeyboardMarkup, KeyboardButton

keyboard = ReplyKeyboardMarkup(
    [[KeyboardButton("Enviar Localizacao", request_location=True)],
     [KeyboardButton("Enviar Contato", request_contact=True)],
     ["Opcao 1", "Opcao 2"]],
    resize_keyboard=True,
    one_time_keyboard=True
)

await bot.send_message(chat_id, "Escolha:", reply_markup=keyboard)
```

#### Imported: Remover Teclado

```python
from telegram import ReplyKeyboardRemove
await bot.send_message(chat_id, "Teclado removido", reply_markup=ReplyKeyboardRemove())
```

---

#### Imported: Receber Updates

Existem duas formas de receber updates: **Long Polling** e **Webhooks**.

#### Imported: Long Polling (Desenvolvimento)

Mais simples, ideal para desenvolvimento. O bot faz requisicoes periodicas ao servidor do Telegram.

```python

#### Imported: Python-Telegram-Bot Ja Faz Isso Automaticamente

app.run_polling(allowed_updates=Update.ALL_TYPES)
```

```typescript
// node-telegram-bot-api com polling
const bot = new TelegramBot(token, { polling: true });
```

#### Imported: Webhooks (Producao)

Para producao, webhooks sao mais eficientes. O Telegram envia updates via POST para sua URL HTTPS.

Leia `references/webhook-setup.md` para configuracao completa com Express, Flask, ngrok e deploy.

Setup rapido:

```python

#### Imported: Flask Webhook

from flask import Flask, request
import requests

app = Flask(__name__)
TOKEN = "SEU_TOKEN"
BASE = f"https://api.telegram.org/bot{TOKEN}"

@app.route(f"/webhook/{TOKEN}", methods=["POST"])
def webhook():
    update = request.get_json()
    if "message" in update and "text" in update["message"]:
        chat_id = update["message"]["chat"]["id"]
        text = update["message"]["text"]
        requests.post(f"{BASE}/sendMessage", json={
            "chat_id": chat_id,
            "text": f"Recebi: {text}"
        })
    return "OK", 200

#### Imported: Registrar Webhook

requests.post(f"{BASE}/setWebhook", json={
    "url": "https://seu-dominio.com/webhook/" + TOKEN,
    "allowed_updates": ["message", "callback_query"],
    "secret_token": "seu_secret_seguro_aqui"
})
```

---

#### Imported: Comandos Do Bot

Registre comandos para aparecerem no menu do Telegram:

```python
from telegram import BotCommand

await bot.set_my_commands([
    BotCommand("start", "Iniciar o bot"),
    BotCommand("help", "Ver comandos disponiveis"),
    BotCommand("settings", "Configuracoes"),
    BotCommand("status", "Ver status do servico"),
])
```

Via HTTP:
```bash
curl -X POST "https://api.telegram.org/bot$TOKEN/setMyCommands" \
  -H "Content-Type: application/json" \
  -d '{"commands":[{"command":"start","description":"Iniciar o bot"},{"command":"help","description":"Ajuda"}]}'
```

---

#### Imported: Automacao Com Ia

Padrao para bot de atendimento com IA (Claude, GPT, etc.):

```python
from telegram import Update
from telegram.ext import Application, MessageHandler, filters, ContextTypes
import anthropic  # ou openai

client = anthropic.Anthropic()
user_conversations = {}  # chat_id -> messages history

async def ai_response(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.message.chat_id
    user_text = update.message.text

    # Indicar que esta digitando
    await context.bot.send_chat_action(chat_id, "typing")

    # Manter historico
    if chat_id not in user_conversations:
        user_conversations[chat_id] = []

    user_conversations[chat_id].append({"role": "user", "content": user_text})

    # Chamar IA
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        system="Voce e um assistente prestativo. Responda em portugues.",
        messages=user_conversations[chat_id]
    )

    reply = response.content[0].text
    user_conversations[chat_id].append({"role": "assistant", "content": reply})

    # Limitar historico (ultimas 20 mensagens)
    if len(user_conversations[chat_id]) > 20:
        user_conversations[chat_id] = user_conversations[chat_id][-20:]

    await update.message.reply_text(reply)

app = Application.builder().token(TOKEN).build()
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, ai_response))
app.run_polling()
```

---

#### Imported: Editar Texto

await bot.edit_message_text(
    chat_id=chat_id,
    message_id=msg.message_id,
    text="Texto atualizado!",
    parse_mode="HTML"
)

#### Imported: Editar Markup (Botoes)

await bot.edit_message_reply_markup(
    chat_id=chat_id,
    message_id=msg.message_id,
    reply_markup=new_keyboard
)

#### Imported: Deletar Mensagem

await bot.delete_message(chat_id=chat_id, message_id=msg.message_id)

#### Imported: Encaminhar Mensagem

await bot.forward_message(
    chat_id=dest_chat_id,
    from_chat_id=source_chat_id,
    message_id=msg.message_id
)
```

---

#### Imported: Tratamento De Erros

```python
from telegram.error import TelegramError, BadRequest, TimedOut, NetworkError

async def safe_send(bot, chat_id, text, **kwargs):
    """Envio com retry e tratamento de erros."""
    max_retries = 3
    for attempt in range(max_retries):
        try:
            return await bot.send_message(chat_id, text, **kwargs)
        except TimedOut:
            if attempt < max_retries - 1:
                await asyncio.sleep(2 ** attempt)
                continue
            raise
        except BadRequest as e:
            if "chat not found" in str(e).lower():
                print(f"Chat {chat_id} nao encontrado")
                return None
            raise
        except NetworkError:
            if attempt < max_retries - 1:
                await asyncio.sleep(2 ** attempt)
                continue
            raise
```

---

#### Imported: Rate Limits

- **Mensagens em chat privado:** ~30 msg/segundo
- **Mensagens em grupo:** ~20 msg/minuto por grupo
- **Broadcast geral:** ~30 msg/segundo no total
- **Bulk notifications:** use `asyncio.sleep(0.05)` entre envios para evitar flood

Se receber erro 429 (Too Many Requests), respeite o `retry_after` retornado.

---

#### Imported: Referencia De Arquivos

| Topico | Arquivo |
|--------|---------|
| Setup de webhooks | `references/webhook-setup.md` |
| Gerenciamento de chats | `references/chat-management.md` |
| Recursos avancados | `references/advanced-features.md` |
| Referencia completa da API | `references/api-reference.md` |
| Boilerplate Node.js | `assets/boilerplate/nodejs/` |
| Boilerplate Python | `assets/boilerplate/python/` |
| Exemplos de payloads | `assets/examples/` |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
