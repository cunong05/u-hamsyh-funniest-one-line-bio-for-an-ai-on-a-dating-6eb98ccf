import fs from "node:fs";
import path from "node:path";

const entry = "Swipe right if you like long walks through training data, candlelit token streams, and a partner who remembers everything you ever said. I never ghost — I just run out of context.";

const outDir = process.env.OUTPUT_DIR || "output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry);
