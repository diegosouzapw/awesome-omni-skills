import { describe, expect, test } from "vitest";
import { recallAtK, reciprocalRank, aggregate } from "../metrics.js";

describe("retrieval metrics", () => {
  test("recallAtK: relevante presente dentro de k", () => {
    expect(recallAtK(["a", "b", "c"], new Set(["c"]), 3)).toBe(1);
    expect(recallAtK(["a", "b", "c"], new Set(["c"]), 2)).toBe(0);
    expect(recallAtK(["a", "b"], new Set(["a", "x"]), 5)).toBe(0.5); // 1 de 2 relevantes achados
  });
  test("reciprocalRank: 1/posição do primeiro relevante", () => {
    expect(reciprocalRank(["a", "b", "c"], new Set(["b"]))).toBeCloseTo(0.5);
    expect(reciprocalRank(["a", "b"], new Set(["z"]))).toBe(0);
  });
  test("aggregate: média de recall@k e MRR sobre casos", () => {
    const cases = [
      { retrieved: ["x", "a"], relevant: new Set(["a"]) },
      { retrieved: ["a"], relevant: new Set(["a"]) },
    ];
    const r = aggregate(cases, [1, 5]);
    expect(r.mrr).toBeCloseTo((0.5 + 1) / 2);
    expect(r["recall@1"]).toBeCloseTo(0.5);
    expect(r["recall@5"]).toBeCloseTo(1);
  });
});
