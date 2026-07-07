import * as fs from "node:fs";
import * as path from "node:path";
import { describe, it, expect } from "vitest";
import { SOURCE_ROOT, runCliSync } from "./helpers/process.js";

const catalog = JSON.parse(
  fs.readFileSync(path.join(SOURCE_ROOT, "dist", "catalog.json"), "utf-8"),
);
const publishedSkills = Array.isArray(catalog.skills) ? catalog.skills : [];
const families = Array.isArray(catalog.families) ? catalog.families : [];

// Discover, from the real catalog, a family that has >= 2 concrete skills
// (variants). The `find --show-variants` flag should surface those concrete
// variants instead of collapsing them into a single family row.
const skillsByFamily = new Map();
for (const skill of publishedSkills) {
  if (!skill || !skill.family_id) continue;
  const list = skillsByFamily.get(skill.family_id) || [];
  list.push(skill);
  skillsByFamily.set(skill.family_id, list);
}
const multiVariantFamilyId = [...skillsByFamily.entries()]
  .filter(([, list]) => list.length >= 2)
  .map(([familyId]) => familyId)
  .find(Boolean);

const familyMeta = families.find((family) => family.id === multiVariantFamilyId) || null;
const sampleSkill = multiVariantFamilyId
  ? (skillsByFamily.get(multiVariantFamilyId) || [])[0]
  : null;

// Derive a robust query term from the family's display name / id (same
// tokenizing approach used by discovery.spec.js) so we never hardcode a
// fragile id that could disappear from the catalog.
const queryCandidates = [
  String(familyMeta?.display_name || ""),
  String(sampleSkill?.display_name || ""),
  String(multiVariantFamilyId || ""),
];
const query = queryCandidates
  .flatMap((value) => value.toLowerCase().match(/[a-z][a-z0-9-]{2,}/g) || [])
  .find(Boolean) || String(multiVariantFamilyId || "").toLowerCase();

const canRun = Boolean(multiVariantFamilyId) && Boolean(query);

describe("CLI E2E: find --show-variants", () => {
  it("has a multi-variant family to exercise the flag", () => {
    // Guardrail: if the catalog ever loses all multi-variant families this
    // test's premise no longer holds and the assertions below are meaningless.
    expect(canRun).toBe(true);
  });

  it("lists concrete variants and tags the payload as mode=variants", () => {
    if (!canRun) return;
    const result = runCliSync(["find", query, "--show-variants", "--json"]);
    expect(result.status).toBe(0);
    const parsed = JSON.parse(result.stdout);

    // The flag must switch the grouping mode from families to variants.
    expect(parsed.mode).toBe("variants");
    expect(Array.isArray(parsed.results)).toBe(true);
    expect(parsed.results.length).toBeGreaterThan(0);

    // Results are concrete skills (variants), not collapsed family rows.
    // Two independent proofs supported by the real catalog:
    //  - two+ results share the same family_id (sibling variants), OR
    //  - at least one id carries a numeric variant suffix like `-v2`.
    const familyCounts = new Map();
    for (const skill of parsed.results) {
      const familyId = String(skill.family_id || "");
      familyCounts.set(familyId, (familyCounts.get(familyId) || 0) + 1);
    }
    const hasSiblingVariants = [...familyCounts.values()].some((count) => count >= 2);
    const hasNumericVariantSuffix = parsed.results.some((skill) =>
      /-v\d+$/.test(String(skill.id || "")),
    );
    expect(hasSiblingVariants || hasNumericVariantSuffix).toBe(true);

    // Sanity: the concrete skill shape carries per-skill fields (a plain
    // family row would not expose `family_id` on every entry).
    expect(parsed.results.every((skill) => typeof skill.id === "string")).toBe(true);
  });

  it("keeps family grouping (mode=families) without the flag", () => {
    if (!canRun) return;
    const result = runCliSync(["find", query, "--json"]);
    expect(result.status).toBe(0);
    const parsed = JSON.parse(result.stdout);
    expect(parsed.mode).toBe("families");
  });

  it("rejects combining --show-variants with --install", () => {
    if (!canRun) return;
    const result = runCliSync(["find", query, "--show-variants", "--install"]);
    expect(result.status).not.toBe(0);
    expect(String(result.stderr || "")).toContain(
      "Use either --show-variants or --install, not both",
    );
  });
});
