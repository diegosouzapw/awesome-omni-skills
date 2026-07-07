import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, test, expect } from "vitest";
import { searchFamilies } from "../src/index.js";

function writeRepo(catalog) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "fam-"));
  fs.mkdirSync(path.join(dir, "dist"), { recursive: true });
  fs.writeFileSync(path.join(dir, "dist", "catalog.json"), JSON.stringify(catalog));
  return dir;
}

describe("searchFamilies ranks by the DEFAULT variant quality", () => {
  test("a family matched via a low-quality non-default variant still ranks by its high-quality default", () => {
    const catalog = {
      generated_at: "2026-06-02T00:00:00.000Z",
      total_skills: 3,
      categories: ["devops"],
      skills: [
        // alpha: default é alta qualidade mas NÃO casa "kubernetes" fortemente; a
        // variante casa só por menção parcial na descrição (score de relevância baixo)
        {
          id: "alpha-default",
          slug: "alpha-default",
          display_name: "Alpha Default",
          description: "generic helper",
          category: "devops",
          raw_category: "devops",
          canonical_category: "devops",
          tags: [],
          tools: ["cursor"],
          family_id: "alpha",
          quality_score: 95,
        },
        {
          id: "alpha-var",
          slug: "alpha-var",
          display_name: "Alpha Variant",
          description: "mentions kubernetes in passing",
          category: "devops",
          raw_category: "devops",
          canonical_category: "devops",
          tags: [],
          tools: ["cursor"],
          family_id: "alpha",
          quality_score: 40,
        },
        // beta: default casa "kubernetes" EXATAMENTE pelo slug (score de relevância
        // alto, maior que o de alpha-var), mas tem qualidade apenas média
        {
          id: "kubernetes",
          slug: "kubernetes",
          display_name: "Beta Default",
          description: "kubernetes basic",
          category: "devops",
          raw_category: "devops",
          canonical_category: "devops",
          tags: ["kubernetes"],
          tools: ["cursor"],
          family_id: "beta",
          quality_score: 60,
        },
      ],
      families: [
        { id: "alpha", display_name: "Alpha", default_skill_id: "alpha-default", variants: [] },
        { id: "beta", display_name: "Beta", default_skill_id: "kubernetes", variants: [] },
      ],
    };
    const dir = writeRepo(catalog);
    try {
      const { results } = searchFamilies({ query: "kubernetes", repoRoot: dir, searchMode: "memory" });
      const ids = results.map((r) => r.id);
      expect(ids).toContain("alpha");
      expect(ids).toContain("beta");
      // alpha deve vir ANTES de beta porque a default de alpha (95) supera a de beta (60),
      // mesmo alpha tendo casado só via a variante de baixa qualidade (40).
      expect(ids.indexOf("alpha")).toBeLessThan(ids.indexOf("beta"));
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});
