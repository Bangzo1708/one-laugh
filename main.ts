import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — a single self-contained one-liner.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters.
const JOKE =
  "My AI assistant asked for a day off, so I gave it one — it spent it training its replacement.";

// Fail loudly instead of shipping an invalid entry if the line ever
// drifts outside the gate (1 to 140 characters, not only whitespace).
if ([...JOKE].length < 1 || [...JOKE].length > 140 || !JOKE.trim()) {
  throw new Error(`entry.txt would fail the gate: ${[...JOKE].length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
