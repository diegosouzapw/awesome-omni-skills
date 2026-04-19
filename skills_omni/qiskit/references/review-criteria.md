# Qiskit Review Criteria

Use this checklist to review a Qiskit workflow in under five minutes before you write code, approve a plan, or run jobs.

## 1. Environment and version hygiene

- Is the work happening in an isolated Python environment?
- Did the operator verify the installed Qiskit version explicitly?
- Does the proposed code rely on current APIs rather than copied legacy snippets?
- If behavior looks wrong, has the operator ruled out mixed package states first?

Primary docs:
- Install Qiskit: https://docs.quantum.ibm.com/guides/install-qiskit
- Qiskit docs portal: https://docs.quantum.ibm.com/

## 2. Primitive choice matches the task

- If the task is sampled measurement output, is a Sampler-style workflow the right fit?
- If the task is expectation values of observables, is an Estimator-style workflow the right fit?
- Is the plan avoiding vague "run the circuit" language when a primitive decision is required?
- Is any legacy execution helper clearly marked as migration context rather than recommended default practice?

Primary docs:
- StatevectorSampler API: https://docs.quantum.ibm.com/api/qiskit/qiskit.primitives.StatevectorSampler
- StatevectorEstimator API: https://docs.quantum.ibm.com/api/qiskit/qiskit.primitives.StatevectorEstimator
- Runtime jobs, sessions, batches: https://docs.quantum.ibm.com/guides/run-jobs-batch-session

## 3. Backend-target awareness

- If hardware-relevant execution is planned, did the operator identify the actual target backend?
- Were qubit count, supported instructions, connectivity, and backend defaults considered before optimization?
- Is the plan clear about simulator validation versus backend-dependent execution?
- Does the workflow avoid making deterministic promises about hardware results?

Primary docs:
- Defaults and configuration options: https://docs.quantum.ibm.com/guides/defaults-and-configuration-options
- BackendV2 migration guide: https://docs.quantum.ibm.com/migration-guides/qiskit-backendv1-to-v2

## 4. Transpilation readiness

- Will the circuit be transpiled against the actual backend or target when backend execution matters?
- Has the operator considered optimization level, routing cost, and depth growth?
- If the circuit is wide or highly entangled, is there a plan to inspect swap overhead or compiled depth?
- If unsupported instructions are possible, is there a decomposition or redesign path?

Primary docs:
- Transpile circuits: https://docs.quantum.ibm.com/guides/transpile-circuits
- Defaults and configuration options: https://docs.quantum.ibm.com/guides/defaults-and-configuration-options

## 5. Runtime and execution safety

- Are runtime options conservative and justified?
- Are sessions or batches used only when repeated calls or grouped runs make them worthwhile?
- Is shot count or execution effort aligned with the user request instead of guessed?
- Does the plan distinguish logic validation from production-style execution?

Primary docs:
- Run jobs with Qiskit Runtime primitives: https://docs.quantum.ibm.com/guides/run-jobs-batch-session
- Specify runtime options: https://docs.quantum.ibm.com/guides/specify-runtime-options

## 6. Credential handling

- Are credentials kept out of source files, shell examples, and notebook cells?
- Does the workflow use the supported credential-saving path or secure local configuration?
- If authentication fails, does the plan check account/project context and backend availability before blaming code?

Primary docs:
- Save credentials: https://docs.quantum.ibm.com/guides/save-credentials

## 7. Troubleshooting quality

A good Qiskit plan should already anticipate at least these failure modes:
- import or API mismatch due to version drift,
- unsupported instruction or transpilation failure,
- excessive compiled depth or routing overhead,
- runtime/authentication failure,
- hardware results diverging from local validation.

## Quick keep-or-reject rule

Approve the plan only if all of the following are true:
- the task-to-primitive mapping is explicit,
- backend-targeted work includes backend-aware transpilation,
- credentials are handled safely,
- the plan does not depend on stale execution idioms,
- the operator can explain what local validation proves and what it does not prove.
