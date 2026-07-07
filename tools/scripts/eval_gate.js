#!/usr/bin/env node

"use strict";

/**
 * Compara um resultado de eval_search contra um baseline versionado.
 * Uma métrica falha quando cai abaixo do piso (baseline - tolerância).
 * Cobre os escopos "golden" e "knownItem" e as chaves recall@k e mrr.
 */

const SCOPES = ["golden", "knownItem"];

function isTrackedMetric(key) {
  return key === "mrr" || key.startsWith("recall@");
}

function checkAgainstBaseline(result, baseline, tolerance = 0.03) {
  const failures = [];

  for (const scope of SCOPES) {
    const baselineGroup = baseline?.[scope];
    const resultGroup = result?.[scope];
    if (!baselineGroup || !resultGroup) continue;

    for (const metric of Object.keys(baselineGroup)) {
      if (!isTrackedMetric(metric)) continue;
      const expected = Number(baselineGroup[metric]);
      const actual = Number(resultGroup[metric] ?? 0);
      const floor = expected - tolerance;
      if (actual < floor) {
        failures.push({ scope, metric, actual, expected, floor });
      }
    }
  }

  return { ok: failures.length === 0, failures };
}

module.exports = { checkAgainstBaseline };
