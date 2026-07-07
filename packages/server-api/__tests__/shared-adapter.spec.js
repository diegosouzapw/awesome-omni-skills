import { describe, test, expect, afterAll } from "vitest";
import { vi } from "vitest";
import { __resetSharedSearchAdapters } from "@omni-skills/catalog-core";
import { SQLiteSearchAdapter } from "../../catalog-core/src/adapters/SQLiteSearchAdapter.js";
import { app } from "../src/server.js";

let server;
function start() {
  return new Promise((resolve) => {
    server = app.listen(0, "127.0.0.1", () => resolve(server.address().port));
  });
}
afterAll(() => new Promise((resolve) => (server ? server.close(resolve) : resolve())));

describe("shared search adapter reuse (server-api)", () => {
  test("reuses a single SQLite adapter across requests", async () => {
    __resetSharedSearchAdapters();
    const initSpy = vi.spyOn(SQLiteSearchAdapter.prototype, "init");
    const port = await start();
    const base = `http://127.0.0.1:${port}`;

    for (let i = 0; i < 3; i += 1) {
      const res = await fetch(`${base}/v1/search?q=kubernetes`);
      expect(res.status).toBe(200);
    }

    // O adapter compartilhado abre o SQLite no máximo uma vez para as 3 requests.
    expect(initSpy.mock.calls.length).toBeLessThanOrEqual(1);
    initSpy.mockRestore();
    __resetSharedSearchAdapters();
  });
});
