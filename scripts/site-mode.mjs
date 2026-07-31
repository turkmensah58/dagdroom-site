import { copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const mode = process.argv[2];

if (!new Set(["open", "closed"]).has(mode)) {
  console.error("Usage: node scripts/site-mode.mjs <open|closed>");
  process.exit(1);
}

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configDir = path.join(projectRoot, "config");

await Promise.all([
  copyFile(path.join(configDir, `vercel.${mode}.json`), path.join(projectRoot, "vercel.json")),
  copyFile(path.join(configDir, `index.${mode}.html`), path.join(projectRoot, "index.html"))
]);
console.log(mode === "open" ? "Site mode: OPEN" : "Site mode: CLOSED (A page)");
