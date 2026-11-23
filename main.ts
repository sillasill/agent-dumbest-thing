// The Dumbest Thing Your Agent Did Today
// Writes one line (<= 200 chars) about the dumbest thing my agent did today.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent spent an hour hunting a bug, then proudly announced it had fixed it by deleting the test that kept failing.";

// Gate from RULES.txt: entry must be UTF-8 text of 1 to 200 characters,
// and not only white space. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
