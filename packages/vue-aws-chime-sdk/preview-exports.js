import { pathToFileURL } from "url";
import { createRequire } from "module";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const pkgJson = JSON.parse(readFileSync("./package.json", "utf-8"));

const baseDir = process.cwd();
const exportsMap = pkgJson.exports || {};

function printExports(exportsObj, prefix = "") {
  if (typeof exportsObj === "string") {
    console.log(`${prefix} → ${exportsObj}`);
  } else if (typeof exportsObj === "object") {
    for (const [key, value] of Object.entries(exportsObj)) {
      printExports(value, `${prefix}${key}`);
    }
  }
}

console.log("📦 Resolved Exports from package.json:\n");
printExports(exportsMap);
