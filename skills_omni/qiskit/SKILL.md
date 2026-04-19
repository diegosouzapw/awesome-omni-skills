---
name: "qiskit"
description: "Qiskit workflow skill for building, transpiling, executing, and reviewing quantum-circuit workflows with modern Qiskit practices. Use it for backend-aware circuit development, local primitive-based validation, IBM Quantum Runtime execution, and troubleshooting environment, transpilation, and credential issues while preserving upstream provenance."
version: "0.0.1"
category: "frontend"
tags:
  - "qiskit"
  - "quantum-computing"
  - "quantum-circuits"
  - "transpilation"
  - "ibm-quantum"
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
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "qiskit"
family_name: "Qiskit"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/qiskit"
upstream_skill: "skills/qiskit"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "qiskit"
---

# Qiskit

## Overview

This skill curates the upstream Qiskit workflow into an operator-ready guide for modern Qiskit usage.

Use it when the task is to:
- build or modify quantum circuits in Qiskit,
- choose an appropriate execution path for local validation versus hardware-backed runs,
- transpile against a real backend or target,
- use primitives-oriented workflows instead of stale execution idioms,
- troubleshoot environment, transpilation, runtime, or credential failures,
- preserve upstream provenance and workflow intent during review or handoff.

This enhancement keeps the original skill identity and scope, but sharpens it around current operational practice: isolated installs, backend-aware transpilation, primitives-first execution, secure credential handling, and concrete failure recovery.

## When to Use This Skill

Use this skill when:
- You are building Qiskit circuits, observables, or experiment workflows in Python.
- You need to decide between local validation and backend-targeted execution.
- You need a reviewable workflow for circuit construction, transpilation, execution, and result interpretation.
- You are working with IBM Quantum-compatible Qiskit workflows and want guidance that avoids legacy patterns.
- You need to assess whether a proposed Qiskit plan is modern, safe, and likely to run.

Do **not** use this skill as the primary guide when:
- The request is mainly about quantum theory tutoring rather than operational Qiskit work.
- The user wants a non-Qiskit SDK or provider-native workflow outside documented Qiskit support.
- The main problem is generic Python packaging, secret-management architecture, or scientific post-processing beyond Qiskit execution.
- The user asks for speculative benchmarking claims without actual backend data or target constraints.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Review an existing Qiskit plan before coding | `references/review-criteria.md` | Fast audit for environment hygiene, primitive choice, backend fit, transpilation readiness, and credential safety |
| Need a concrete modern pattern | `examples/review-example.md` | Shows a local primitive workflow and how it changes for backend-targeted execution |
| New implementation from scratch | `## Workflow` | Provides the execution sequence and decision points |
| Debugging failed or stale code | `## Troubleshooting` | Focuses on common Qiskit failure modes rather than generic advice |
| Need deeper official detail | `## Additional Resources` | Routes to primary Qiskit and IBM Quantum documentation |

## Workflow

1. **Confirm the task type before writing code**
   - Measurement distribution from a circuit: prefer a Sampler-style workflow.
   - Expectation values of observables: prefer an Estimator-style workflow.
   - Local correctness check only: use a local primitive first.
   - Real hardware or runtime-managed execution: plan around the target backend before transpiling.

2. **Prepare a clean environment**
   - Create and activate a fresh virtual environment.
   - Install Qiskit using current official guidance.
   - Verify the installed version before debugging API behavior.
   - Avoid mixing old tutorial snippets with a newer installed package set.

3. **Build the smallest correct circuit first**
   - Start with the required qubit count, classical measurements, and observable definitions.
   - Keep the first version simple enough to inspect visually and reason about.
   - If hardware execution is likely, avoid introducing unsupported or expensive structure too early.

4. **Choose a target execution path**
   - **Local validation:** use local primitives to confirm circuit logic and expected output shape.
   - **Backend-targeted execution:** inspect the target backend or target model before optimization.
   - **Repeated runtime calls or grouped jobs:** use Runtime session or batch concepts only when they add clear value.

5. **Transpile against the real target when backend execution matters**
   - Check qubit capacity, supported instructions, connectivity, and basis behavior.
   - Transpile against the actual backend or target, not a generic placeholder.
   - Treat transpilation as part of feasibility, not just final optimization.

6. **Run and interpret results carefully**
   - Local results are useful for logic validation, not for proving hardware behavior.
   - Hardware results can vary because of noise, queueing, calibration drift, and runtime options.
   - Compare observed output with expected structure, shot count, and measurement semantics.

7. **Document assumptions before handoff**
   - Record the environment, primitive choice, target backend, transpilation intent, and any backend-dependent caveats.
   - If you used migration-sensitive APIs, note the version context explicitly.

## Setup and Installation

Use a fresh Python virtual environment whenever possible.

Example safe setup flow:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install qiskit
python -c "import qiskit; print(qiskit.__version__)"
```

Setup guidance:
- Prefer isolated environments over system-wide installs.
- Verify the installed Qiskit version before assuming an API from an older example still exists.
- If the user already has a broken environment, inspect package versions before changing code.
- Do not hardcode API tokens in scripts, notebooks, shell history, or examples.

For IBM Quantum access:
- Use the supported credential-saving flow from official documentation.
- Prefer environment-backed or secure local configuration over inline secrets.
- Treat account, project, and backend access as configuration inputs that may differ across users.

## Building Quantum Circuits

When constructing circuits:
- Model the smallest circuit that expresses the intended computation.
- Add measurements only when the task requires sampled outcomes.
- For expectation-value workflows, keep observables and circuit preparation clearly separated.
- Use circuit diagrams and qubit counts to catch logic mistakes early.

Good operator habits:
- Confirm whether the user needs sampled counts, probabilities, or expectation values.
- Keep classical registers and measurement structure explicit.
- Avoid assuming that a circuit that works locally will map efficiently to hardware.
- If hardware execution is the goal, design with connectivity and transpilation overhead in mind.

## Transpilation and Backend Selection

Backend-aware transpilation is mandatory whenever real backend execution is part of the task.

Before transpiling, check:
- target qubit count,
- supported instructions or effective basis behavior,
- connectivity or routing constraints,
- measurement requirements,
- optimization level,
- shot budget and runtime expectations.

Operational guidance:
- Transpile against the actual backend or target whenever the results must be hardware-relevant.
- Expect depth and gate counts to change materially after routing and optimization.
- Treat large swap insertion or depth growth as a signal to revisit circuit structure or backend choice.
- If transpilation takes unexpectedly long, reduce circuit size, inspect optimization settings, or simplify the target goal.

Review questions:
- Does the circuit fit the backend's qubit and instruction constraints?
- Is the chosen backend sensible for the circuit width and routing burden?
- Is the requested optimization level aligned with speed versus quality needs?
- Is the operator interpreting transpiled depth and layout changes before execution?

## Execution on Simulators vs Hardware

### Local validation

Use local primitives when you need to:
- verify circuit logic,
- inspect measurement structure,
- test expectation-value code paths,
- iterate safely without queue or credential dependence.

Local execution is best for fast debugging, but it does not model hardware noise, queue conditions, or calibration state by default.

### Hardware or Runtime-backed execution

Use backend-targeted execution when you need:
- real-device behavior,
- backend-specific transpilation realism,
- runtime-managed job execution,
- hardware results that justify queue time and credential use.

Hardware guidance:
- Inspect backend availability and suitability before committing to a run.
- Choose options conservatively unless the user has a clear reason to tune them.
- Use Sampler-like flows for sampled circuit outcomes and Estimator-like flows for observable estimation.
- Use sessions or batches only when repeated calls or grouped execution justify the extra operational complexity.

### Interpretation caution

Do not present simulator and hardware results as interchangeable.
Differences can come from noise, shot count, resilience settings, backend calibration state, routing overhead, and readout effects.

## Troubleshooting

### Import errors or missing APIs

Symptoms:
- `ImportError`, missing classes, or examples that do not match the installed package.

Check:
- Qiskit version in the current environment.
- Whether the example came from an older tutorial or migration context.
- Whether the environment contains mixed package states.

Recovery:
- Reproduce in a fresh virtual environment.
- Re-check the official install guide and API reference.
- Update the code to a primitives-first pattern when a legacy helper is the issue.

### Transpiler rejects a gate or instruction

Symptoms:
- Unsupported instruction errors or failed backend compilation.

Check:
- The actual backend target.
- Whether the circuit uses instructions not supported or not decomposed appropriately.
- Whether the selected path assumes a generic simulator rather than a real backend.

Recovery:
- Transpile against the intended target explicitly.
- Replace or decompose unsupported operations.
- Simplify the circuit or adjust the target backend.

### Compiled circuit becomes too deep or slow

Symptoms:
- Large depth increase, many swaps, long transpilation times, or weak expected hardware performance.

Check:
- Backend connectivity.
- Qubit layout and routing overhead.
- Optimization level.
- Whether the original circuit structure is hardware-hostile.

Recovery:
- Try a more suitable backend.
- Reduce width or entanglement pattern complexity.
- Revisit circuit design before spending more effort on execution options.

### Runtime or authentication failures

Symptoms:
- Job submission failure, access errors, unexpected waiting, or provider/context mismatch.

Check:
- Saved credentials and active account context.
- Backend availability.
- Whether runtime-specific options or session assumptions are valid.

Recovery:
- Re-authenticate with the supported credential flow.
- Confirm account and project access.
- Retry with a simpler run configuration before tuning advanced options.

### Hardware results differ from local validation

Symptoms:
- Output distributions or expectation values differ materially from local expectations.

Check:
- Noise sensitivity.
- Shot count.
- Resilience or mitigation options.
- Transpiled depth and readout behavior.

Recovery:
- Treat local runs as logic validation only.
- Review transpiled circuit metrics.
- Increase shots or adjust runtime options only when the user has a concrete reason.
- Explain hardware-dependent variance instead of promising deterministic agreement.

## Additional Resources

Use primary documentation when exact API or platform behavior matters:
- Qiskit documentation portal: `https://docs.quantum.ibm.com/`
- Install Qiskit: `https://docs.quantum.ibm.com/guides/install-qiskit`
- Transpile circuits: `https://docs.quantum.ibm.com/guides/transpile-circuits`
- Defaults and configuration options: `https://docs.quantum.ibm.com/guides/defaults-and-configuration-options`
- Run jobs with Qiskit Runtime primitives: `https://docs.quantum.ibm.com/guides/run-jobs-batch-session`
- Specify runtime options: `https://docs.quantum.ibm.com/guides/specify-runtime-options`
- Save credentials securely: `https://docs.quantum.ibm.com/guides/save-credentials`
- QuantumCircuit API reference: `https://docs.quantum.ibm.com/api/qiskit/qiskit.circuit.QuantumCircuit`
- StatevectorSampler API reference: `https://docs.quantum.ibm.com/api/qiskit/qiskit.primitives.StatevectorSampler`
- StatevectorEstimator API reference: `https://docs.quantum.ibm.com/api/qiskit/qiskit.primitives.StatevectorEstimator`
- BackendV2 migration guidance: `https://docs.quantum.ibm.com/migration-guides/qiskit-backendv1-to-v2`

Also use these local support files:
- `references/review-criteria.md`
- `examples/review-example.md`

## Related Skills

Route to adjacent skills when the request shifts away from core Qiskit workflow execution:
- Python environment or dependency repair when packaging is the dominant issue.
- Secret or credential management when account handling is the real blocker.
- Scientific analysis or visualization skills when post-processing dominates the task.
- Cloud-provider-specific orchestration skills when the user is asking about infrastructure, not Qiskit workflow design.

## Provenance Note

This skill preserves the upstream community intent and identity while rewriting the operator guidance into clear English and aligning it with current Qiskit operational practice. Keep provenance visible in review, handoff, or merge contexts when upstream lineage matters.
