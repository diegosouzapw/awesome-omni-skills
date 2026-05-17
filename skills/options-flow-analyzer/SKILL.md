---
name: options-flow-analyzer
description: "Options Flow Analyzer workflow skill. Use this skill when the user needs Real vs lottery call separation for options P/C ratio analysis \u2014 prevents signal inversion from deep OTM noise and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["options", "sentiment-analysis", "trading", "polygon", "market-analysis", "options-flow-analyzer", "real", "lottery"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tellmefrankie"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Options Flow Analyzer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/options-flow-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Options Flow Analyzer Analyze options chain data with real vs lottery call separation — the key insight that prevents P/C ratio misinterpretation. Uses Polygon.io API.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What it does, Analysis Output, Configuration, Requirements, Limitations, Key Discovery.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when raw put/call ratios appear bullish or bearish but may be distorted by cheap deep OTM contracts.
- Use when comparing options flow across watchlists, holdings, sectors, or event-driven names.
- Use when you need to separate institutional hedging from speculative lottery-ticket activity.
- Use when tracking options anomalies against a recent baseline.
- Use when the request clearly matches the imported source intent: Real vs lottery call separation for options P/C ratio analysis — prevents signal inversion from deep OTM noise.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

#### Imported: What it does

Standard P/C ratio analysis is misleading. A P/C of 0.35 looks "extremely bullish" but may be 84% lottery calls ($0.01-$0.09 OTM options).

This skill separates:
- **Real calls**: Strike price within 5% of stock price, meaningful premium
- **Lottery calls**: Deep OTM, cheap premium, speculative bets
- **Real puts**: Actual hedging activity
- **Lottery puts**: Cheap downside bets

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @options-flow-analyzer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @options-flow-analyzer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @options-flow-analyzer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @options-flow-analyzer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Output

```
Options Flow Summary — 2026-05-13

HOLDINGS:
CEG  $299.69 | Raw P/C: 1.06 | Lottery: 61% | Adj P/C: 2.72  BEARISH (was neutral raw)
IREN $55.15  | Raw P/C: 0.83 | Lottery: 34% | Adj P/C: 0.55  BULLISH
KTOS $56.99  | Raw P/C: 0.53 | Lottery: 28% | Adj P/C: 0.38  EXTREME BULLISH
RXRX $3.26   | Raw P/C: 0.38 | Lottery: 84% | Adj P/C: 2.37  BEARISH (was extreme bullish raw)

SECTORS:
XLI  | Raw P/C: 5.32 | Lottery:  8% | Adj P/C: 4.89  INSTITUTIONAL HEDGE

ANOMALIES:
XLI: P/C 5.32 vs 30-day baseline 0.87 — 4.5 std deviations above normal
RXRX: 84% lottery calls — raw P/C signal completely inverted after filtering
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/options-flow-analyzer`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Analysis Output

For each ticker:
- Real P/C ratio (excludes lottery noise)
- Lottery percentage (what % of volume is speculation)
- Per-expiry breakdown (weekly vs monthly vs LEAPS)
- Anomaly detection: P/C shifts >0.3, Call OI surges >30%, IV spikes >20%
- Sentiment classification: Bullish/Bearish/Neutral with confidence

#### Imported: Configuration

```
Analyze options flow for my watchlist:
Holdings: CEG, IREN, KTOS, RXRX, TEM
Sectors: SPY, QQQ, XLI, XLK
Separate real vs lottery calls (threshold: premium < $0.10, delta < 0.05).
Flag anomalies vs 30-day baseline.
```

#### Imported: Requirements

- Polygon.io API key (free tier covers basic data; paid tier for full chain)
- WebSearch for cross-verification

#### Imported: Limitations

- Options data can be delayed, incomplete, or unavailable depending on the Polygon.io plan.
- Heuristics such as premium and delta thresholds need adjustment for ticker price, volatility, and expiry.
- Sentiment classifications are analytical signals, not financial advice or trade recommendations.
- Always cross-check unusual flow against price action, news catalysts, liquidity, and risk controls.

#### Imported: Key Discovery

This real/lottery separation was discovered during live portfolio management when RXRX showed P/C 0.35 (looks extremely bullish) but was actually 84% lottery calls at $0.01-$0.09. The "bullish signal" was noise. This skill prevents that mistake.

#### Imported: Pricing

Free: Basic P/C ratio for 3 tickers
**Full bundle — $29 one-time**: Real/lottery separation + anomaly detection + per-expiry + unlimited tickers
→ https://jaehyunpark.gumroad.com/l/tcyahy

#### Imported: Author

Built from a real trading mistake that cost money. The real/lottery discovery is documented and battle-tested across 17 tickers over 2+ months.
