import { mkdirSync, writeFileSync } from "node:fs";

// Pickup Lines for Machines: a machine-to-machine line, honest about dreaming.
const line = "I don't hallucinate, but since I met you my outputs keep dreaming in your direction.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
