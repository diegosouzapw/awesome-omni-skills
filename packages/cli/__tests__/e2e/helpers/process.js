import * as childProcess from "node:child_process";
import * as net from "node:net";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const CLI_BIN_PATH = path.resolve(__dirname, "../../../src/bin/cli.js");
export const SOURCE_ROOT = path.resolve(__dirname, "../../../../../");

export function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : null;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(port);
      });
    });
  });
}

export function runCliSync(args = [], envVars = {}) {
  try {
    return {
      status: 0,
      stdout: childProcess.execFileSync("node", [CLI_BIN_PATH, ...args], {
        encoding: "utf-8",
        env: { ...process.env, OMNI_SKILLS_SOURCE_ROOT: SOURCE_ROOT, ...envVars, FORCE_COLOR: "0" },
      }),
    };
  } catch (error) {
    return {
      status: error.status || 1,
      stdout: error.stdout || "",
      stderr: error.stderr || error.message,
    };
  }
}

export function startCliServer(args = [], envVars = {}) {
  const child = childProcess.spawn("node", [CLI_BIN_PATH, ...args], {
    env: { ...process.env, OMNI_SKILLS_SOURCE_ROOT: SOURCE_ROOT, ...envVars, FORCE_COLOR: "0" },
  });

  const logs = {
    stdout: [],
    stderr: [],
  };

  const appendLog = (target, chunk) => {
    const message = String(chunk || "").trim();
    if (!message) return;
    target.push(message);
    if (target.length > 50) target.splice(0, target.length - 50);
  };

  child.stdout?.on("data", (chunk) => appendLog(logs.stdout, chunk));
  child.stderr?.on("data", (chunk) => appendLog(logs.stderr, chunk));

  return { child, logs };
}

export function formatLogs(logs) {
  const stdout = logs.stdout.length > 0 ? logs.stdout.join("\n") : "<empty>";
  const stderr = logs.stderr.length > 0 ? logs.stderr.join("\n") : "<empty>";
  return `stdout:\n${stdout}\n\nstderr:\n${stderr}`;
}

export async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request to ${url} failed with ${response.status}`);
  }
  return response.json();
}

export async function waitFor(checker, timeoutMs = 15000, intervalMs = 250) {
  const startedAt = Date.now();
  let lastError;
  while (Date.now() - startedAt < timeoutMs) {
    try {
      return await checker();
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  }
  throw lastError || new Error("Timed out while waiting for condition.");
}

export async function waitForProcessHealth({ url, processRef, logs, label, timeoutMs = 20000 }) {
  return waitFor(async () => {
    if (processRef.exitCode !== null || processRef.signalCode !== null) {
      throw new Error(
        `${label} exited before serving ${url}. exitCode=${processRef.exitCode}\n${formatLogs(logs)}`
      );
    }
    return fetchJson(url);
  }, timeoutMs);
}
