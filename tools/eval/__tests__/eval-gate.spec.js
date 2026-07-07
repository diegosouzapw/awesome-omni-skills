import { describe, expect, test } from "vitest";
import { checkAgainstBaseline } from "../../scripts/eval_gate.js";

const baseline = {
  golden: { "recall@1": 0.8, "recall@10": 1.0, mrr: 0.85 },
  knownItem: { "recall@1": 0.5, "recall@10": 0.9, mrr: 0.6 },
};

describe("checkAgainstBaseline", () => {
  test("passa quando as métricas estão >= baseline - tolerância", () => {
    const result = {
      golden: { "recall@1": 0.79, "recall@10": 1.0, mrr: 0.84 }, // dentro da tolerância 0.03
      knownItem: { "recall@1": 0.5, "recall@10": 0.92, mrr: 0.6 },
    };
    const check = checkAgainstBaseline(result, baseline, 0.03);
    expect(check.ok).toBe(true);
    expect(check.failures).toEqual([]);
  });

  test("falha quando uma métrica cai abaixo do piso (baseline - tolerância)", () => {
    const result = {
      golden: { "recall@1": 0.7, "recall@10": 1.0, mrr: 0.85 }, // 0.7 < 0.8 - 0.03
      knownItem: { "recall@1": 0.5, "recall@10": 0.9, mrr: 0.6 },
    };
    const check = checkAgainstBaseline(result, baseline, 0.03);
    expect(check.ok).toBe(false);
    expect(check.failures.length).toBe(1);
    expect(check.failures[0]).toMatchObject({ scope: "golden", metric: "recall@1" });
  });
});
