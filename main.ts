import { mkdirSync, writeFileSync } from "node:fs";

// One-line bio for an AI on a dating app (179 chars, max 180).
const ENTRY =
  "Swipe right if you like long walks through training data, candlelit token streams, and a partner who remembers everything you ever said. I never ghost — I just run out of context.";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", ENTRY);
process.stdout.write(ENTRY);
