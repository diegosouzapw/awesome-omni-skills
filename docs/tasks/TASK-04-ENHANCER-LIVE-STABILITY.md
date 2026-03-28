# TASK-04 — Enhancer Live Stability

## Status

Completed on `2026-03-28`.

Outcome:

- hosted `live` is now preflight-gated and explicitly downgraded to `blocked` when the public OmniRoute path is unavailable or unstable
- the reliable supported `live` path is documented as LAN or local service execution
- failure classification now distinguishes WAF, gateway timeout, auth, route, network, and generic provider failures

## Objective

Make the private enhancer’s hosted `live` mode reliable enough to be trusted for PR-time processing, or explicitly document a narrower supported operating model if hosted live remains constrained by infrastructure.

## Current State

The private enhancer works well in:

- `mock` mode for batch processing
- `live` mode against the LAN OmniRoute endpoint

The unstable area is the hosted public OmniRoute path for `live` execution. That is the main operational blocker left in the private pipeline.

Primary references:

- `omni-skills-private/README.md`
- `omni-skills-private/docs/github-automation.md`
- `omni-skills-private/scripts/openai_responses.py`
- `omni-skills-private/scripts/enhance_repo_changes.py`

## Goals

- understand and classify all hosted live failures
- distinguish provider, gateway, WAF, timeout, and payload-shape failure modes
- harden request timeouts, fallback logic, and operator messages
- decide the canonical supported operating mode for hosted PR-time enhancement

## Work Breakdown

1. Collect error cases from recent hosted live failures.
2. Compare public-cloud and LAN behavior for the same requests.
3. Instrument request IDs and stage-level timing where missing.
4. Add more explicit failure classification in the enhancer runtime.
5. Add graceful degradation paths where possible.
6. Decide the supported hosted mode and document it.

## Acceptance Criteria

- operators can tell why a live run failed without reading raw logs
- hosted live either succeeds reliably enough or is intentionally downgraded and documented
- PR-time automation no longer appears flaky without explanation
