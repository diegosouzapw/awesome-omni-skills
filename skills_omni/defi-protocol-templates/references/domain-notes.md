# DeFi Protocol Template Domain Notes

Use this file when the main skill is not enough to decide which module pattern to start from or what to review before accepting a copied template.

## Protocol Pattern Matrix

| Module | Typical standards or building blocks | Common privileged actions | Oracle or pricing assumptions | Upgradeability notes | Review gate before handoff |
| --- | --- | --- | --- | --- | --- |
| Staking / rewards | ERC-20 token integration, reward-per-token accounting, pause controls only if justified | set reward rate, fund rewards, pause stake or unstake, recover tokens | usually no external oracle, but reward token and accounting assumptions still matter | if upgradeable, preserve reward state layout and initializer order | confirm rewards cannot be double-counted, stranded, or drained by timing edge cases |
| Vault / yield wrapper | ERC-4626-style vaults, fee hooks, deposit or withdraw caps | set fees, set strategy, pause deposits, rescue funds | share price depends on honest asset accounting and strategy reporting | avoid mixing upgradeable and non-upgradeable vault bases; review share math storage | confirm share conversion behavior for first depositor, dust, and fee changes |
| AMM / liquidity pool | reserve-based pool logic, LP token accounting, fee configuration | set fees, pause swaps, list tokens, migrate pool | spot reserves are easy to manipulate within one transaction | reserve and fee state changes must preserve storage layout if upgradeable | confirm price-sensitive logic does not use raw pool spot state as a trusted oracle |
| Governance | ERC20Votes, Governor modules, timelock execution, role-based admin | set proposal threshold, quorum, guardian powers, execute queued actions | governance weight often depends on token snapshots rather than real-time balances | upgrade authority must be governed explicitly; avoid hidden admin bypasses | confirm no path can bypass timelock or declared governance execution rules |
| Lending | collateral and debt token logic, health-factor and liquidation accounting | set collateral factors, freeze markets, set liquidation parameters, configure oracle | requires explicit price source, freshness, and manipulation-resistance assumptions | state layout changes can break debt accounting and liquidation storage | confirm liquidation math, bad-debt handling, and stale-price behavior |
| Flash-liquidity or callback feature | callback interface, repayment checks, fee accounting | set fees, enable borrowers, pause callbacks | temporary balance changes during one transaction must not mislead accounting | upgrades must not break callback entry assumptions or fee storage | confirm repayment is checked by final state, not by assumptions about intermediate balances |

## Standardized Building Blocks to Prefer First

Use standards and known modules before custom rewrites unless the repository has a documented need otherwise.

- **OpenZeppelin ERC-20 utilities** for token behavior and role wiring.
- **ERC-4626** for tokenized vaults when deposits mint shares against managed assets.
- **ERC20Votes** for governance tokens that need historical voting power snapshots.
- **Governor-style composition** when on-chain proposal lifecycle and execution need standard structure.
- **TimelockController or equivalent delayed execution control** when governance actions should not execute instantly.
- **AccessControl, Ownable, or AccessManager-style role systems** depending on whether the design needs one admin, several roles, or policy-based capability separation.

## High-Risk Assumptions to Force Into Writing

Before modifying a template, require answers to these questions:

1. Who can change fees, rates, collateral factors, pause state, or upgrade targets?
2. Which actions are immediate, and which are delayed by governance or timelock?
3. What asset or state is trusted for price or valuation?
4. Can a flash loan temporarily distort balances, reserves, utilization, collateral value, or reward accounting?
5. Are there external calls before core accounting is finalized?
6. What happens if a token is fee-on-transfer, rebasing, or otherwise non-standard?
7. What happens at zero supply, first deposit, tiny deposit, and maximum-size operations?
8. Is the template intended to be immutable or upgradeable?

If these answers are unavailable, treat the template as unready for production adaptation.

## Oracle Design Notes

### Safe default posture
Do not use raw AMM spot state as the sole oracle for collateral valuation, liquidation decisions, or any other security-critical price path.

### Minimum oracle note contents
- price source
- update or observation method
- freshness requirement
- manipulation resistance assumptions
- fallback behavior when the oracle is stale, paused, or inconsistent
- assets or markets that should be rejected entirely

### Common operator mistake
A pool reserve ratio may be acceptable for quoting swaps inside the pool, but it is not automatically acceptable for lending risk controls.

## Access Control Review Notes

Build a plain-language privilege map before handoff.

Minimum map:
- owner or root admin
- multisig or operational admin
- timelock or governance executor
- pauser or guardian
- upgrader
- parameter manager
- rescue or sweep authority

For each role, list:
- protected functions
- how the role is assigned
- whether it can be revoked
- whether its actions are delayed
- what monitoring or review the repository expects

## Upgradeability Notes

If the template is upgradeable:
- verify initializer usage instead of constructors where required
- keep inheritance order and storage layout review in scope
- document who can approve upgrades
- verify emergency pause and upgrade powers are not conflated casually
- record whether downstream integrators assume implementation immutability

If the template is not upgradeable:
- say so explicitly in the handoff
- do not imply future patch flexibility

## Security Review Gate

Do not call the work ready for merge, deployment, or audit handoff until all items below are answered:

- module type and standard starting point are identified
- privileged actions are listed
- oracle and pricing assumptions are written down where relevant
- flash-loan or temporary-balance distortion risk has been considered
- upgradeability status is explicit
- unresolved economic or formal verification questions are separated from implemented behavior
- provenance of copied templates or external code is preserved
