---
name: aomi-transact
description: "Aomi Transact workflow skill. Use this skill when the user needs Build natural-language crypto/DeFi agents and EVM MCP plugins (Claude Code, Cursor, Codex, Gemini). Aomi turns prompts into wallet-signed txs on Ethereum, Base, Arbitrum, Optimism, Polygon, Linea \u2014 non-custodial, fork-simulated. 40+ apps: Uniswap, Aave, Lido, Morpho, GMX, Hyperliquid, Polymarket and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["defi", "wallet", "account-abstraction", "cli", "eip-712", "onchain", "agent", "intent"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Aomi Transact

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/aomi-transact` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Aomi Transact > Authorized use only. This skill signs and broadcasts on-chain transactions on the user's behalf. The user must explicitly request each signing step. The skill will not run aomi tx sign without an explicit user request and a corresponding tx-N queued by aomi tx list. > > Signing gate. Do not include aomi tx sign in a copied or runnable multi-command block. Stop after listing or simulating queued transactions, summarize the tx ids, chain, value, recipient, calldata purpose, and simulation result, then ask the user for an explicit signing instruction such as sign tx-1. Only run the exact signing command after that separate approval.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations, Authorization Disclaimer, Source.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The user wants to chat with the Aomi agent from the terminal.
- The user wants balances, prices, routes, quotes, or transaction status.
- The user wants to build, simulate, confirm, sign, or broadcast wallet requests.
- The user wants to simulate a batch of pending transactions before signing.
- The user wants to inspect or switch apps, models, chains, or sessions.
- The user wants to inspect or change Account Abstraction settings (EIP-7702 / ERC-4337).

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

`aomi-transact` is a procedure for driving the Aomi CLI ([`@aomi-labs/client`](https://www.npmjs.com/package/@aomi-labs/client)) from natural-language prompts. The user types something like *"swap 1 ETH for USDC on Uniswap"*; the agent picks the right protocol and contract, stages the approve+swap as a batch, simulates it on a forked chain, and returns a queued wallet request for the user to sign. The wallet only ever sees calldata that already passed simulation.

The CLI is **account-abstraction-first**: by default it signs through a zero-config Alchemy proxy (no provider credentials needed), using EIP-7702 on Ethereum mainnet and ERC-4337 on L2s. Each `aomi <subcommand>` invocation starts, runs, and exits — there is no long-running process.

The full skill including references (`account-abstraction.md`, `apps.md`, `examples.md`, `session.md`, `troubleshooting.md`, `drain-vectors.md`), templates (`aomi-workflow.sh`), and per-host metadata (`agents/openai.yaml`) lives upstream at [`aomi-labs/skills`](https://github.com/aomi-labs/skills/tree/main/aomi-transact). This entry is the canonical SKILL.md only — clone the upstream for the full bundle.

#### Imported: Limitations

- **Requires `@aomi-labs/client` v0.1.30 or newer.** Older versions lack `--aa`, `--aa-provider`, `--aa-mode` and the simulation gate. Install with `npm install -g @aomi-labs/client` or run on demand via `npx @aomi-labs/client@0.1.30 ...`.
- **Active backend connection.** The skill drives a CLI that talks to `api.aomi.dev`. Without network access, only local read commands (`aomi tx list`, `aomi session log`) work.
- **AA sponsorship on L2s is not guaranteed.** The zero-config proxy path does not reliably sponsor on Base/Arbitrum/Optimism in v0.1.30. If the EOA has 0 native gas on the destination chain, `aomi tx sign` returns viem's `insufficient funds for transfer`. Either fund the EOA with a small amount of native gas, or configure a real BYOK Alchemy/Pimlico provider with a sponsorship policy. Do not retry with `--eoa` — that path also needs gas.
- **Per-session secret ingestion.** Apps that require provider tokens (`binance`, `polymarket`, `dune`, etc.) must have credentials configured by the user in their own shell or via `aomi secret add NAME=<value>`. The skill never sets credentials on its own initiative.
- **Drain vectors are guard-blocked.** The agent rejects calldata where `recipient`/`onBehalfOf`/`mintRecipient` ≠ `msg.sender`. This is a security feature, not a bug — surface the block to the user rather than reformulating the prompt.
- **Network/RPC failures.** Public RPCs may rate-limit (`429`) or fail auth (`401`). The user must supply a reliable chain-matching RPC via `--rpc-url` for production signing.
- **Slippage and deadlines on live transactions.** Quotes from deadline-bearing routes (Across, Khalani fillers) can expire while the user is reviewing; the agent self-heals by rebuilding with fresh deadlines, but the user should re-check `aomi tx list` for the latest passing batch.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @aomi-transact to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @aomi-transact against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @aomi-transact for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @aomi-transact using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Read-only — price check

```bash
aomi --prompt "what is the price of ETH?" --new-session
```

Returns a quote with no wallet request queued. Use `aomi tx list` to confirm there's nothing pending.

### Single-tx flow — Lido stake

```bash
aomi chat "Stake 0.01 ETH with Lido to get stETH" \
  --public-key 0xUserAddress --chain 1 --new-session
aomi tx list
```

`submit(address(0))` on Lido stETH `0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84`, `value = 0.01 ETH`. No approve, single tx. Stop here, show the queued transaction details, and wait for the user's explicit instruction before signing.

### Multi-step batch — Uniswap V3 swap

```bash
aomi chat "swap 1 USDC for WETH on Uniswap V3, send to my wallet" \
  --public-key 0xUserAddress --chain 1 --new-session
aomi tx list                        # tx-1 = approve, tx-2 = swap
aomi tx simulate tx-1 tx-2          # mandatory for multi-step
```

The simulator runs each tx sequentially on a forked chain so the swap step sees the approve's state changes. Don't sign step 2 independently — it would revert. Stop after simulation, summarize the batch, and wait for an explicit user instruction naming both tx ids before signing.

### Cross-chain — CCTP Ethereum → Base

```bash
aomi chat "Bridge 50 USDC from Ethereum to Base via CCTP. Recipient is my wallet." \
  --public-key 0xUserAddress --chain 1 --new-session
aomi tx list
aomi tx simulate tx-1 tx-2
```

Stop after simulation and wait for the user to explicitly approve signing the named tx ids. After signing, source-chain burn confirms in 1-2 blocks; destination mint requires Circle's off-chain attestation (~13-19 minutes).

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Default --new-session on the first command of a new task. Reusing it mid-task starts a fresh conversation and the agent loses the quote it just gave you.
- Always aomi tx list before aomi tx sign. Never assume a chat response queued a transaction.
- Always aomi tx simulate tx-1 tx-2 ... before signing a multi-step batch. Single-tx flows are simulation-optional but never wrong to simulate.
- Keep signing commands out of runnable examples. Show or run aomi tx sign only after the user gives a separate, explicit approval naming the exact queued tx-N ids.
- Sign only Batch [...] passed txs. Skip orphans from earlier failed attempts (failed at step N: 0x...).
- Match --rpc-url to the queued tx's chain, not the session chain (--chain) — they are independent controls.
- Never echo credential values. The skill confirms credential setup with handle name or derived address only.

### Imported Operating Notes

#### Imported: Best Practices

- **Default `--new-session` on the first command of a new task.** Reusing it mid-task starts a fresh conversation and the agent loses the quote it just gave you.
- **Always `aomi tx list` before `aomi tx sign`.** Never assume a chat response queued a transaction.
- **Always `aomi tx simulate tx-1 tx-2 ...` before signing a multi-step batch.** Single-tx flows are simulation-optional but never wrong to simulate.
- **Keep signing commands out of runnable examples.** Show or run `aomi tx sign` only after the user gives a separate, explicit approval naming the exact queued `tx-N` ids.
- **Sign only `Batch [...] passed` txs.** Skip orphans from earlier failed attempts (`failed at step N: 0x...`).
- **Match `--rpc-url` to the queued tx's chain**, not the session chain (`--chain`) — they are independent controls.
- **Never echo credential values.** The skill confirms credential setup with handle name or derived address only.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/aomi-transact`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-criminal` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@advogado-especialista` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-memory-systems` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Additional Resources

For the full skill including per-flow examples (CCTP bridge, Aave supply, Lido stake, Uniswap swap), AA mode reference, drain-vector table, troubleshooting guide, and the bash workflow template, see the upstream repo:

- [Account Abstraction reference](https://github.com/aomi-labs/skills/blob/main/aomi-transact/references/account-abstraction.md)
- [App catalog (25+ apps)](https://github.com/aomi-labs/skills/blob/main/aomi-transact/references/apps.md)
- [Flow examples](https://github.com/aomi-labs/skills/blob/main/aomi-transact/references/examples.md)
- [Drain-vector reference](https://github.com/aomi-labs/skills/blob/main/aomi-transact/references/drain-vectors.md)
- [Troubleshooting](https://github.com/aomi-labs/skills/blob/main/aomi-transact/references/troubleshooting.md)
- [aomi-workflow.sh template](https://github.com/aomi-labs/skills/blob/main/aomi-transact/templates/aomi-workflow.sh)

#### Imported: Authorization Disclaimer

This skill can sign and broadcast on-chain transactions worth real value. Use only on accounts you own and on networks you trust. The skill does not custody funds; the user retains full control of signing keys via `--public-key` and the underlying wallet. Review every queued `tx-N` before running `aomi tx sign`.

#### Imported: Source

- **Upstream**: [aomi-labs/skills](https://github.com/aomi-labs/skills) — MIT licensed
- **Author**: [Aomi Labs](https://aomi.dev)
- **CLI**: [`@aomi-labs/client`](https://www.npmjs.com/package/@aomi-labs/client) on npm
- **Security review**: [aomi-transact/SECURITY.md](https://github.com/aomi-labs/skills/blob/main/aomi-transact/SECURITY.md) — OWASP AST01–AST10 walkthrough plus captured scanner reports
