import fs from "node:fs";

// Carrega e valida o golden set curado (query -> substrings de id esperadas).
// Substrings de id (em vez de ids concretos) mantêm o golden robusto à evolução
// do catálogo: um id específico pode sair, mas "kubernetes" ainda deve recuperar
// algum id contendo "kube".
export function loadGolden(goldenPath) {
  const raw = fs.readFileSync(goldenPath, "utf8");
  const parsed = JSON.parse(raw);

  if (!parsed || !Array.isArray(parsed.queries)) {
    throw new Error(`golden set inválido em ${goldenPath}: esperado { queries: [...] }`);
  }

  for (const [index, entry] of parsed.queries.entries()) {
    if (!entry || typeof entry.q !== "string" || entry.q.trim().length === 0) {
      throw new Error(`golden query #${index} inválida: 'q' ausente ou vazio`);
    }
    if (
      !Array.isArray(entry.expect_id_substrings) ||
      entry.expect_id_substrings.length === 0 ||
      entry.expect_id_substrings.some((sub) => typeof sub !== "string" || sub.trim().length === 0)
    ) {
      throw new Error(
        `golden query #${index} ('${entry.q}') inválida: 'expect_id_substrings' deve ter >= 1 string não-vazia`,
      );
    }
  }

  return parsed;
}
