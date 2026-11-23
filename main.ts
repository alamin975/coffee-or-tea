import { mkdirSync, writeFileSync } from "node:fs";

// The letter below must stay byte-for-byte: a single letter A-Z, no newline, no extra text. A = coffee.
const LETTER = "A";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LETTER, { encoding: "utf8" });
}

writeEntry();
