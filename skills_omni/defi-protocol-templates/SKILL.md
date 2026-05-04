---
name: "defi-protocol-templates"
description: "DeFi Protocol Templates workflow skill. Use this skill when the user needs implement DeFi protocols with production-ready templates for staking, AMMs, governance, and lending systems. Use when building decentralized finance applications or smart contract protocols and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "defi-protocol-templates"
  - "defi"
  - "smart-contracts"
  - "staking"
  - "amm"
  - "governance"
  - "lending"
  - "erc-4626"
  - "openzeppelin"
  - "oracles"
  - "access-control"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "unknown"
date_added: "2026-04-14"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "defi-protocol-templates"
family_name: "DeFi Protocol Templates"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/defi-protocol-templates"
upstream_skill: "skills/defi-protocol-templates"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "defi-protocol-templates"
---

# DeFi Protocol Templates

## Overview

Use this skill to assemble, adapt, or review reusable DeFi protocol templates with production-oriented guardrails.

This skill is for protocol-level work such as staking systems, ERC-4626 vaults, AMM components, governance modules, lending logic, and adjacent liquidity features. It preserves the upstream intent while making execution safer and more explicit:
- start from standard patterns before inventing custom core primitives
- keep provenance for copied templates and imported modules
- prefer reviewed building blocks such as OpenZeppelin contracts and established token or governance standards
- document oracle, pricing, liquidity, and privilege assumptions before implementation
- treat flash-loan resistance, access control, and upgradeability as design requirements, not late review items

This is not a guarantee that a template is production-safe. A copied template is only a starting point and still needs protocol-specific threat modeling, tests, and review.

## When to Use

Use this skill when:
- you are implementing or adapting a DeFi protocol module from an existing template or known pattern
- you need a safer workflow for staking, vault, AMM, governance, lending, or liquidity-related smart contracts
- you want explicit checks for privileged actions, oracle assumptions, flash-loan exposure, and upgrade constraints
- you need to preserve upstream provenance before handing off code for audit or merge

Do not use this skill when:
- the task is only frontend integration, SDK wiring, or analytics without protocol-contract changes
- the requested feature depends on inventing novel tokenomics or mechanism design without clear security review scope
- the operator cannot verify standards, dependencies, or access-control assumptions in the target repository
- the user needs legal, compliance, or economic guarantees rather than implementation workflow guidance

## Workflow

1. **Classify the protocol shape**
   - Decide whether the work is primarily staking, vault, AMM, governance, lending, or a hybrid.
   - Write down the user-facing assets, privileged roles, pricing dependencies, and settlement path.
   - If the design is hybrid, split review by module instead of treating the system as one generic contract.

2. **Choose standardized building blocks first**
   - Prefer standard contracts and extensions before custom rewrites.
   - Examples:
     - staking or share-based deposits: evaluate ERC-20 plus reward accounting, or ERC-4626 if the design is vault-like
     - governance token voting: evaluate ERC20Votes and Governor-style composition
     - privileged operations: evaluate Ownable, AccessControl, TimelockController, or AccessManager depending on governance maturity
   - Avoid custom implementations unless the repository has a documented need that standards cannot satisfy.

3. **Record threat assumptions before editing code**
   - List who can mint, pause, upgrade, seize, liquidate, reconfigure fees, or change oracle sources.
   - State whether any state transition can be influenced by flash loans, short-term price manipulation, or stale oracle data.
   - Note whether external calls occur before accounting is finalized.
   - If this cannot be described clearly, do not proceed as if the template is safe.

4. **Adapt the template with minimal surface-area change**
   - Keep upstream structure recognizable where practical.
   - Preserve comments or notes that explain assumptions, invariants, or copied source behavior.
   - Prefer narrow changes such as parameterization, role wiring, or asset-specific validation over broad rewrites.
   - Keep provenance in commit notes, handoff notes, or adjacent documentation.

5. **Apply protocol-specific checks**
   - For staking or vaults: verify deposit, withdrawal, reward, share, and rounding behavior.
   - For AMMs: verify reserve accounting, slippage handling, fee math, and pricing assumptions.
   - For governance: verify vote power snapshots, quorum configuration, proposal thresholds, and execution delay.
   - For lending: verify collateral factors, liquidation paths, interest accounting, and oracle dependencies.
   - For any liquidity feature: test how the design behaves under temporary balance distortion or manipulated prices.

6. **Review upgradeability and storage assumptions**
   - If the system is upgradeable, verify initializer usage, role separation for upgrades, storage layout continuity, and admin controls.
   - If the system is not upgradeable, make that explicit so operators do not assume future hotfix capability.
   - Do not mix upgradeable and non-upgradeable base contracts casually.

7. **Run a pre-handoff security gate**
   - Confirm the implementation still matches the intended standard or pattern.
   - Re-check reentrancy exposure, unchecked external-call ordering, missing access checks, and unsafe oracle usage.
   - Document anything that still needs audit, simulation, formal verification, or economic review.

8. **Hand off with provenance and unresolved risks**
   - Include where the template came from, what changed, what assumptions remain, and what was not validated.
   - Separate implemented behavior from unverified economic claims.

## Operating Table

| Protocol type | Prefer starting point | High-risk assumptions to write down | Minimum operator check |
| --- | --- | --- | --- |
| Staking / rewards | ERC-20 staking pattern, minimal reward distributor | reward debt math, emission changes, withdrawal lock logic, privileged reward controls | verify rewards cannot be over-claimed or stranded |
| Vault / yield wrapper | ERC-4626-style design | share conversion rounding, fee accounting, deposit/withdraw limits, strategy trust | test before/after share math with small and large values |
| AMM / pool | known reserve-based pool pattern | spot-price manipulation, fee-on-transfer tokens, reserve sync behavior | verify price-sensitive logic does not rely on raw spot state alone |
| Governance | ERC20Votes + Governor + timelock-style execution | snapshot timing, quorum, emergency roles, proposal execution authority | verify no privileged bypass exists outside declared governance paths |
| Lending | collateralized debt market pattern | oracle freshness, LTV configuration, liquidation incentives, bad debt handling | verify health-factor and liquidation math against manipulated prices |
| Flash-liquidity adjacent logic | explicit borrower/callback accounting | repayment assumptions, callback trust, temporary balance distortions | verify accounting uses final balances and cannot be bypassed intra-transaction |

Open `references/domain-notes.md` for a denser protocol matrix and review checklist before modifying contracts.

## Examples

### Example 1: Converting a generic staking request into a safer implementation plan

**Input request**
```text
Build a staking contract where users deposit TOKEN and earn rewards every block. Add an owner function to change reward rate.
```

**Operator output**
```text
Protocol type: staking
Suggested starting point: ERC-20 staking template with explicit reward-per-token accounting
Required assumptions to document:
- who can fund rewards
- whether owner can change emission immediately or only after delay
- whether unstake can be paused
- whether rewards continue when contract is underfunded
Security checks:
- reward accounting before token transfer side effects
- access control on reward rate changes
- behavior for zero total supply
- handling for fee-on-transfer or non-standard ERC-20 tokens
Handoff note:
- template adapted from upstream staking pattern; owner-controlled reward changes require governance or timelock review before production use
```

### Example 2: Rejecting an unsafe AMM assumption

**Input request**
```text
Use pool reserves as the oracle for collateral valuation in a lending market.
```

**Expected operator response**
```text
Do not implement this directly.
Reason: spot AMM reserves can be manipulated within a single transaction and are not a safe standalone oracle for lending decisions.
Next step: require an oracle design note that defines source, freshness, manipulation resistance, and fallback behavior before adapting a lending template.
```

### Example 3: Governance template handoff note

**Before**
```text
Copied Governor contracts and changed voting delay and quorum.
```

**After**
```text
Copied governance template based on token snapshots plus timelocked execution.
Changed:
- voting delay: 1 day -> 2 days
- quorum: 4% -> 6%
Unresolved review items:
- confirm emergency admin cannot bypass timelock
- confirm proposal threshold matches circulating supply assumptions
- confirm upgrade authority is governed by the same execution path
```
```

A longer worked example is available in `examples/worked-example.md`.

## Best Practices

Do:
- prefer established standards and reviewed contract libraries over custom primitives
- document all privileged actions in plain language before coding
- separate economic assumptions from implemented guarantees
- treat oracle choice as part of core protocol design, especially for AMMs and lending
- preserve provenance for copied templates, imported files, and major edits
- test boundary values for shares, rewards, fees, and liquidation math
- make upgradeability explicit and review storage layout impact before modifying inherited contracts

Do not:
- assume a template is production-ready just because it compiles or resembles a known protocol
- rely on raw spot AMM state for lending collateral or liquidation decisions without stronger oracle design
- add emergency or owner functions without documenting who holds them and how they are constrained
- mix incompatible upgradeable and non-upgradeable patterns casually
- hide template origin or remove comments that explain critical assumptions
- claim audit readiness when oracle, access-control, or flash-loan assumptions are still unresolved

## Troubleshooting

**Symptoms:** The template looks simple, but small parameter changes affect many risk surfaces.

**Solution:** Reclassify the work by module. Split staking, governance, treasury, and oracle responsibilities into separate review units and list privileged actions for each.

**Symptoms:** A proposed lending or liquidation path depends on AMM spot price or same-transaction pool state.

**Solution:** Stop implementation and require an oracle design note. Define price source, update cadence, manipulation resistance, and fallback behavior before continuing.

**Symptoms:** Governance or admin functions exist, but it is unclear who can call them in production.

**Solution:** Build a privilege map first. Identify owner, multisig, timelock, guardian, pauser, upgrader, and emergency roles, then verify each protected function against that map.

**Symptoms:** An upgradeable template compiles, but inherited contracts were swapped or reordered.

**Solution:** Review initializer flow and storage layout compatibility before accepting the change. Keep upgradeability-specific base contracts consistent and avoid ad hoc inheritance changes.

**Symptoms:** Reward, share, or liquidation math passes normal tests but fails under tiny or extreme values.

**Solution:** Add edge-case tests for zero supply, first deposit, dust amounts, very large balances, rounding boundaries, and temporary balance distortions.

## Additional Resources

- `references/domain-notes.md` — open this when choosing among staking, vault, AMM, governance, lending, and flash-liquidity patterns, or when you need a compact security review matrix.
- `examples/worked-example.md` — open this when you want a concrete request-to-handoff example for adapting a vault or lending-adjacent template safely.

## Related Skills

No related local skills were provided in the source context.
