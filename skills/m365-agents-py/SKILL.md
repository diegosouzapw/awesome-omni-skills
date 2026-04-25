---
name: m365-agents-py
description: "Microsoft 365 Agents SDK (Python) workflow skill. Use this skill when the user needs Microsoft 365 Agents SDK for Python. Build multichannel agents for Teams/M365/Copilot Studio with aiohttp hosting, AgentApplication routing, streaming responses, and MSAL-based auth and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["m365-agents-py", "microsoft", "sdk", "for", "python", "build", "multichannel", "teams"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Microsoft 365 Agents SDK (Python)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/m365-agents-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Microsoft 365 Agents SDK (Python) Build enterprise agents for Microsoft 365, Teams, and Copilot Studio using the Microsoft Agents SDK with aiohttp hosting, AgentApplication routing, streaming responses, and MSAL-based authentication.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before implementation, Important Notice - Import Changes, Environment Variables (.env), AgentApplication Routing, Streaming Responses with Azure OpenAI, OAuth / Auto Sign-In.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Microsoft 365 Agents SDK for Python. Build multichannel agents for Teams/M365/Copilot Studio with aiohttp hosting, AgentApplication routing, streaming responses, and MSAL-based auth.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. bash pip install microsoft-agents-hosting-core pip install microsoft-agents-hosting-aiohttp pip install microsoft-agents-activity pip install microsoft-agents-authentication-msal pip install microsoft-agents-copilotstudio-client pip install python-dotenv aiohttp python import logging from os import environ from dotenv import loaddotenv from aiohttp.web import Request, Response, Application, runapp from microsoftagents.activity import loadconfigurationfromenv from microsoftagents.hosting.core import ( Authorization, AgentApplication, TurnState, TurnContext, MemoryStorage, ) from microsoftagents.hosting.aiohttp import ( CloudAdapter, startagentprocess, jwtauthorizationmiddleware, ) from microsoftagents.authentication.msal import MsalConnectionManager # Enable logging msagentslogger = logging.getLogger("microsoftagents") msagentslogger.addHandler(logging.StreamHandler()) msagentslogger.setLevel(logging.INFO) # Load configuration loaddotenv() agentssdkconfig = loadconfigurationfromenv(environ) # Create storage and connection manager STORAGE = MemoryStorage() CONNECTIONMANAGER = MsalConnectionManager(agentssdkconfig) ADAPTER = CloudAdapter(connectionmanager=CONNECTIONMANAGER) AUTHORIZATION = Authorization(STORAGE, CONNECTIONMANAGER, agentssdkconfig) # Create AgentApplication AGENTAPP = AgentApplicationTurnState @AGENTAPP.conversationupdate("membersAdded") async def onmembersadded(context: TurnContext, state: TurnState): await context.sendactivity("Welcome to the agent!") @AGENTAPP.activity("message") async def onmessage(context: TurnContext, state: TurnState): await context.sendactivity(f"You said: {context.activity.text}") @AGENTAPP.error async def onerror(context: TurnContext, error: Exception): await context.sendactivity("The agent encountered an error.") # Server setup async def entrypoint(req: Request) -> Response: agent: AgentApplication = req.app["agentapp"] adapter: CloudAdapter = req.app["adapter"] return await startagentprocess(req, agent, adapter) APP = Application(middlewares=[jwtauthorizationmiddleware]) APP.router.addpost("/api/messages", entrypoint) APP["agentconfiguration"] = CONNECTIONMANAGER.getdefaultconnectionconfiguration() APP["agentapp"] = AGENTAPP APP["adapter"] = AGENTAPP.adapter if _name == "main": runapp(APP, host="localhost", port=environ.get("PORT", 3978))
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
pip install microsoft-agents-hosting-core
pip install microsoft-agents-hosting-aiohttp
pip install microsoft-agents-activity
pip install microsoft-agents-authentication-msal
pip install microsoft-agents-copilotstudio-client
pip install python-dotenv aiohttp
```

#### Imported: Core Workflow: aiohttp-hosted AgentApplication

```python
import logging
from os import environ

from dotenv import load_dotenv
from aiohttp.web import Request, Response, Application, run_app

from microsoft_agents.activity import load_configuration_from_env
from microsoft_agents.hosting.core import (
    Authorization,
    AgentApplication,
    TurnState,
    TurnContext,
    MemoryStorage,
)
from microsoft_agents.hosting.aiohttp import (
    CloudAdapter,
    start_agent_process,
    jwt_authorization_middleware,
)
from microsoft_agents.authentication.msal import MsalConnectionManager

# Enable logging
ms_agents_logger = logging.getLogger("microsoft_agents")
ms_agents_logger.addHandler(logging.StreamHandler())
ms_agents_logger.setLevel(logging.INFO)

# Load configuration
load_dotenv()
agents_sdk_config = load_configuration_from_env(environ)

# Create storage and connection manager
STORAGE = MemoryStorage()
CONNECTION_MANAGER = MsalConnectionManager(**agents_sdk_config)
ADAPTER = CloudAdapter(connection_manager=CONNECTION_MANAGER)
AUTHORIZATION = Authorization(STORAGE, CONNECTION_MANAGER, **agents_sdk_config)

# Create AgentApplication
AGENT_APP = AgentApplicationTurnState


@AGENT_APP.conversation_update("membersAdded")
async def on_members_added(context: TurnContext, _state: TurnState):
    await context.send_activity("Welcome to the agent!")


@AGENT_APP.activity("message")
async def on_message(context: TurnContext, _state: TurnState):
    await context.send_activity(f"You said: {context.activity.text}")


@AGENT_APP.error
async def on_error(context: TurnContext, error: Exception):
    await context.send_activity("The agent encountered an error.")


# Server setup
async def entry_point(req: Request) -> Response:
    agent: AgentApplication = req.app["agent_app"]
    adapter: CloudAdapter = req.app["adapter"]
    return await start_agent_process(req, agent, adapter)


APP = Application(middlewares=[jwt_authorization_middleware])
APP.router.add_post("/api/messages", entry_point)
APP["agent_configuration"] = CONNECTION_MANAGER.get_default_connection_configuration()
APP["agent_app"] = AGENT_APP
APP["adapter"] = AGENT_APP.adapter

if __name__ == "__main__":
    run_app(APP, host="localhost", port=environ.get("PORT", 3978))
```

#### Imported: Before implementation

- Use the microsoft-docs MCP to verify the latest API signatures for AgentApplication, start_agent_process, and authentication options.
- Confirm package versions on PyPI for the microsoft-agents-* packages you plan to use.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @m365-agents-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @m365-agents-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @m365-agents-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @m365-agents-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use microsoft_agents import prefix (underscores, not dots).
- Use MemoryStorage only for development; use BlobStorage or CosmosDB in production.
- Always use loadconfigurationfrom_env(environ) to load SDK configuration.
- Include jwtauthorizationmiddleware in aiohttp Application middlewares.
- Use MsalConnectionManager for MSAL-based authentication.
- Call end_stream() in finally blocks when using streaming responses.
- Use auth_handlers parameter on message decorators for OAuth-protected routes.

### Imported Operating Notes

#### Imported: Best Practices

1. Use `microsoft_agents` import prefix (underscores, not dots).
2. Use `MemoryStorage` only for development; use BlobStorage or CosmosDB in production.
3. Always use `load_configuration_from_env(environ)` to load SDK configuration.
4. Include `jwt_authorization_middleware` in aiohttp Application middlewares.
5. Use `MsalConnectionManager` for MSAL-based authentication.
6. Call `end_stream()` in finally blocks when using streaming responses.
7. Use `auth_handlers` parameter on message decorators for OAuth-protected routes.
8. Keep secrets in environment variables, not in source code.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/m365-agents-py`, fails to mention provenance, or does not use any copied source files at all.
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
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Reference Files

| File | Contents |
| --- | --- |
| references/acceptance-criteria.md | Import paths, hosting pipeline, streaming, OAuth, and Copilot Studio patterns |

#### Imported: Reference Links

| Resource | URL |
| --- | --- |
| Microsoft 365 Agents SDK | https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/ |
| GitHub samples (Python) | https://github.com/microsoft/Agents-for-python |
| PyPI packages | https://pypi.org/search/?q=microsoft-agents |
| Integrate with Copilot Studio | https://learn.microsoft.com/en-us/microsoft-365/agents-sdk/integrate-with-mcs |

#### Imported: Important Notice - Import Changes

> **⚠️ Breaking Change**: Recent updates have changed the Python import structure from `microsoft.agents` to `microsoft_agents` (using underscores instead of dots).

#### Imported: Environment Variables (.env)

```bash
CONNECTIONS__SERVICE_CONNECTION__SETTINGS__CLIENTID=<client-id>
CONNECTIONS__SERVICE_CONNECTION__SETTINGS__CLIENTSECRET=<client-secret>
CONNECTIONS__SERVICE_CONNECTION__SETTINGS__TENANTID=<tenant-id>

# Optional: OAuth handlers for auto sign-in
AGENTAPPLICATION__USERAUTHORIZATION__HANDLERS__GRAPH__SETTINGS__AZUREBOTOAUTHCONNECTIONNAME=<connection-name>

# Optional: Azure OpenAI for streaming
AZURE_OPENAI_ENDPOINT=<endpoint>
AZURE_OPENAI_API_VERSION=<version>
AZURE_OPENAI_API_KEY=<key>

# Optional: Copilot Studio client
COPILOTSTUDIOAGENT__ENVIRONMENTID=<environment-id>
COPILOTSTUDIOAGENT__SCHEMANAME=<schema-name>
COPILOTSTUDIOAGENT__TENANTID=<tenant-id>
COPILOTSTUDIOAGENT__AGENTAPPID=<app-id>
```

#### Imported: AgentApplication Routing

```python
import re
from microsoft_agents.hosting.core import (
    AgentApplication, TurnState, TurnContext, MessageFactory
)
from microsoft_agents.activity import ActivityTypes

AGENT_APP = AgentApplicationTurnState

# Welcome handler
@AGENT_APP.conversation_update("membersAdded")
async def on_members_added(context: TurnContext, _state: TurnState):
    await context.send_activity("Welcome!")

# Regex-based message handler
@AGENT_APP.message(re.compile(r"^hello$", re.IGNORECASE))
async def on_hello(context: TurnContext, _state: TurnState):
    await context.send_activity("Hello!")

# Simple string message handler
@AGENT_APP.message("/status")
async def on_status(context: TurnContext, _state: TurnState):
    await context.send_activity("Status: OK")

# Auth-protected message handler
@AGENT_APP.message("/me", auth_handlers=["GRAPH"])
async def on_profile(context: TurnContext, state: TurnState):
    token_response = await AGENT_APP.auth.get_token(context, "GRAPH")
    if token_response and token_response.token:
        # Use token to call Graph API
        await context.send_activity("Profile retrieved")

# Invoke activity handler
@AGENT_APP.activity(ActivityTypes.invoke)
async def on_invoke(context: TurnContext, _state: TurnState):
    invoke_response = Activity(
        type=ActivityTypes.invoke_response, value={"status": 200}
    )
    await context.send_activity(invoke_response)

# Fallback message handler
@AGENT_APP.activity("message")
async def on_message(context: TurnContext, _state: TurnState):
    await context.send_activity(f"Echo: {context.activity.text}")

# Error handler
@AGENT_APP.error
async def on_error(context: TurnContext, error: Exception):
    await context.send_activity("An error occurred.")
```

#### Imported: Streaming Responses with Azure OpenAI

```python
from openai import AsyncAzureOpenAI
from microsoft_agents.activity import SensitivityUsageInfo

CLIENT = AsyncAzureOpenAI(
    api_version=environ["AZURE_OPENAI_API_VERSION"],
    azure_endpoint=environ["AZURE_OPENAI_ENDPOINT"],
    api_key=environ["AZURE_OPENAI_API_KEY"]
)

@AGENT_APP.message("poem")
async def on_poem_message(context: TurnContext, _state: TurnState):
    # Configure streaming response
    context.streaming_response.set_feedback_loop(True)
    context.streaming_response.set_generated_by_ai_label(True)
    context.streaming_response.set_sensitivity_label(
        SensitivityUsageInfo(
            type="https://schema.org/Message",
            schema_type="CreativeWork",
            name="Internal",
        )
    )
    context.streaming_response.queue_informative_update("Starting a poem...\n")

    # Stream from Azure OpenAI
    streamed_response = await CLIENT.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a creative assistant."},
            {"role": "user", "content": "Write a poem about Python."}
        ],
        stream=True,
    )

    try:
        async for chunk in streamed_response:
            if chunk.choices and chunk.choices[0].delta.content:
                context.streaming_response.queue_text_chunk(
                    chunk.choices[0].delta.content
                )
    finally:
        await context.streaming_response.end_stream()
```

#### Imported: OAuth / Auto Sign-In

```python
@AGENT_APP.message("/logout")
async def logout(context: TurnContext, state: TurnState):
    await AGENT_APP.auth.sign_out(context, "GRAPH")
    await context.send_activity(MessageFactory.text("You have been logged out."))


@AGENT_APP.message("/me", auth_handlers=["GRAPH"])
async def profile_request(context: TurnContext, state: TurnState):
    user_token_response = await AGENT_APP.auth.get_token(context, "GRAPH")
    if user_token_response and user_token_response.token:
        # Use token to call Microsoft Graph
        async with aiohttp.ClientSession() as session:
            headers = {
                "Authorization": f"Bearer {user_token_response.token}",
                "Content-Type": "application/json",
            }
            async with session.get(
                "https://graph.microsoft.com/v1.0/me", headers=headers
            ) as response:
                if response.status == 200:
                    user_info = await response.json()
                    await context.send_activity(f"Hello, {user_info['displayName']}!")
```

#### Imported: Copilot Studio Client (Direct to Engine)

```python
import asyncio
from msal import PublicClientApplication
from microsoft_agents.activity import ActivityTypes, load_configuration_from_env
from microsoft_agents.copilotstudio.client import (
    ConnectionSettings,
    CopilotClient,
)

# Token cache (local file for interactive flows)
class LocalTokenCache:
    # See samples for full implementation
    pass

def acquire_token(settings, app_client_id, tenant_id):
    pca = PublicClientApplication(
        client_id=app_client_id,
        authority=f"https://login.microsoftonline.com/{tenant_id}",
    )

    token_request = {"scopes": ["https://api.powerplatform.com/.default"]}
    accounts = pca.get_accounts()

    if accounts:
        response = pca.acquire_token_silent(token_request["scopes"], account=accounts[0])
        return response.get("access_token")
    else:
        response = pca.acquire_token_interactive(**token_request)
        return response.get("access_token")


async def main():
    settings = ConnectionSettings(
        environment_id=environ.get("COPILOTSTUDIOAGENT__ENVIRONMENTID"),
        agent_identifier=environ.get("COPILOTSTUDIOAGENT__SCHEMANAME"),
    )

    token = acquire_token(
        settings,
        app_client_id=environ.get("COPILOTSTUDIOAGENT__AGENTAPPID"),
        tenant_id=environ.get("COPILOTSTUDIOAGENT__TENANTID"),
    )

    copilot_client = CopilotClient(settings, token)

    # Start conversation
    act = copilot_client.start_conversation(True)
    async for action in act:
        if action.text:
            print(action.text)

    # Ask question
    replies = copilot_client.ask_question("Hello!", action.conversation.id)
    async for reply in replies:
        if reply.type == ActivityTypes.message:
            print(reply.text)


asyncio.run(main())
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
