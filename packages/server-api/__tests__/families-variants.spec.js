import { describe, test, expect, afterAll } from "vitest";
import { app } from "../src/server.js";

let server;
function start() {
  return new Promise((resolve) => {
    server = app.listen(0, "127.0.0.1", () => resolve(server.address().port));
  });
}
afterAll(() => new Promise((resolve) => (server ? server.close(resolve) : resolve())));

describe("GET /v1/families/:id/variants", () => {
  test("returns the variant list for a real family that has variants", async () => {
    const port = await start();
    const base = `http://127.0.0.1:${port}`;
    // Descobre uma família real com variantes
    const famsRes = await fetch(`${base}/v1/families`);
    const fams = await famsRes.json();
    const withVariants = (fams.results || []).find((f) => Array.isArray(f.variants) && f.variants.length > 0);
    expect(withVariants, "esperava ao menos uma família com variantes no catálogo").toBeTruthy();
    const res = await fetch(`${base}/v1/families/${withVariants.id}/variants`);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.family_id).toBe(withVariants.id);
    expect(Array.isArray(body.results)).toBe(true);
    expect(body.results.length).toBe(withVariants.variants.length);
  });

  test("returns 404 for an unknown family", async () => {
    const port = server ? server.address().port : await start();
    const res = await fetch(`http://127.0.0.1:${port}/v1/families/this-family-does-not-exist/variants`);
    expect(res.status).toBe(404);
  });
});
