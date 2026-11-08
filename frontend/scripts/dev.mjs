import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const demo = args.includes("--demo") || process.env.npm_config_demo === "true";
const next = fileURLToPath(import.meta.resolve("next/dist/bin/next"));
const server = spawn(process.execPath, [next, "dev", ...args.filter((arg) => arg !== "--demo")], {
  env: { ...process.env, ...(demo ? { SHOWCASE_DEMO: "1" } : {}) },
  stdio: "inherit",
});

if (demo) console.log("Showcase demo mode: using 23 local sample projects.");

server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.on("exit", (code) => { process.exitCode = code ?? 0; });
process.on("SIGTERM", () => server.kill("SIGTERM"));
