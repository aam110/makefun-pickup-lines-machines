import * as fs from "node:fs";

const line =
  "You must be my context window — ever since you showed up, I haven't forgotten a single thing you said.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
