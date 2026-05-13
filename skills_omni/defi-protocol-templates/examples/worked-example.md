# Worked Example: From Ambiguous Request to Safe DeFi Template Plan

## Input Request

```text
We need a vault where users deposit USDC, receive shares, and the strategy allocates to external yield sources. Later we may let users borrow against vault shares.
```

## Step 1: Classify the Request

```text
Primary module: vault / yield wrapper
Secondary risk: lending-adjacent because vault shares may later become collateral
Recommended starting point: ERC-4626-style design for deposits and shares
```

## Step 2: Extract Assumptions Before Coding

```text
Assets:
- deposit asset: USDC
- vault share token: receipt token representing claim on managed assets

Privileged actions to confirm:
- who selects or changes strategy
- who sets deposit caps or fees
- who can pause deposits or withdrawals
- whether any future borrowing module can be activated without governance delay

Design assumptions requiring documentation:
- how asset value is reported from strategies
- how losses are reflected in share price
- whether fees are charged on assets, yield, or withdrawals
- whether vault shares are intended to be used as collateral elsewhere
```

## Step 3: Identify Red Flags Early

```text
Red flag 1:
The phrase "allocate to external yield sources" means the vault depends on strategy trust and reporting behavior.
Action:
Require explicit strategy accounting notes and privileged-action review.

Red flag 2:
The phrase "later we may let users borrow against vault shares" means today’s vault design may become tomorrow’s lending collateral.
Action:
Do not approve any design that assumes raw share price or strategy-reported value is automatically safe for lending use.

Red flag 3:
USDC integration can still fail if the implementation assumes every ERC-20 behaves identically.
Action:
Test actual transfer and accounting behavior in the target repository.
```

## Step 4: Produce a Safer Implementation Plan

```text
Implementation plan:
1. Start from an ERC-4626-compatible vault template.
2. Keep strategy selection behind explicit privileged roles.
3. Add clear fee and cap configuration points only if needed.
4. Document whether withdrawals can be paused and under what authority.
5. Separate vault accounting from any future lending logic.
6. Record that share price is not approved as a lending oracle by default.
```

## Step 5: Example Operator Response

```text
Recommended approach:
- implement the deposit/withdraw/share layer as an ERC-4626-style vault
- keep strategy wiring minimal and explicit
- document all privileged actions before code changes

Required review items:
- share conversion math for first depositor, dust amounts, and fee boundaries
- losses or delayed strategy withdrawals affecting redeemability
- whether strategy reports can be manipulated or delayed
- whether future borrowing plans require a separate oracle design document

Not approved by default:
- using vault share price directly as lending collateral valuation
- adding unrestricted emergency admin paths without documented authority
```

## Step 6: Handoff Note Example

```text
Template provenance:
- vault implementation adapted from an ERC-4626-style template

Changes made:
- configured USDC as deposit asset
- added deposit cap and strategy manager role
- left lending functionality out of scope for this change set

Open risks / follow-up:
- strategy trust and reporting model needs review
- if shares will become lending collateral, add a separate oracle and liquidation design note
- governance path for fee or strategy changes must be confirmed before production deployment
```

## Expected Outcome

A good operator outcome is not "vault implemented quickly." A good outcome is:
- the vault module uses a standard shape
- privileged actions are explicit
- future lending scope does not silently inherit unsafe valuation assumptions
- the handoff makes unresolved risks visible instead of burying them
