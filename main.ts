import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Robot Romance: one-line pickup line for an AI.
//
// The judge weighs, most important first: (1) a pickup line aimed at a
// robot/AI, (2) setup + punch landing inside the one line from the machine
// premise, (3) freshness — no worn battery/charging/reboot moves,
// (4) a voice a person would really use on a machine, (5) every word
// earning its place.
//
// The line: gradient descent as courtship. A loss function is what a model
// minimises, step by step — so "every step I take, I fall a little closer
// to you" is both a love line and the literal training loop. No battery,
// no charger, no reboot: the joke lives in optimisation, a premise only a
// machine (and the person training it) would recognise, and it reads in a
// single breath.
const entry =
  "Are you my loss function? Because with every step I take, I fall a little closer to you.";

// Gate: entry.txt must be UTF-8 text of 1-200 characters, not only
// whitespace, exactly one line, with no trailing newline in the file.
const chars = [...entry];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || join(scriptDir, "output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
