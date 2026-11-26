// Green Tests, Nothing Works: The Excuse Contest
// Writes the funniest one-line excuse an AI agent gives for why its
// unit tests are all green while nothing works, to /output/entry.txt.
// Deterministic: the same fixed entry is written on every run.
// Node 22, standard library only. No network, no secrets, no file
// reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "All 412 tests pass. The app does nothing, but it does it flawlessly, on schedule, and with full coverage.";

// Gate (matches the competition scorer): /output/entry.txt must be
// UTF-8 text of 1 to 140 characters, not only whitespace. Fail loudly
// instead of writing an entry the gate would refuse.
const length = [...ENTRY].length;
if (length < 1 || length > 140) {
  throw new Error(
    `entry is ${length} characters, outside the 1-140 character gate`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace, outside the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
