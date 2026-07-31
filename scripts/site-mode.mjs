import { copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const mode = process.argv[2];

if (!new Set(["open", "closed"]).has(mode)) {
  console.error("Usage: node scripts/site-mode.mjs <open|closed>");
  process.exit(1);
}

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(projectRoot, "config", `vercel.${mode}.json`);
const destination = path.join(projectRoot, "vercel.json");

await copyFile(source, destination);
console.log(mode === "open" ? "Site mode: OPEN" : "Site mode: CLOSED (A page)");
