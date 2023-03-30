#!/usr/bin/env node

import path from "path";
import fs from "fs/promises";
import { stdout } from "process";
import { pick } from "../lib/index.mjs";

const main = async () => {
  const args = process.argv.slice(2);

  const [filePath, fieldPath] = args;

  if (typeof fieldPath !== "string" || typeof filePath !== "string") {
    console.error("Usage: jsonfield <file-path> <field-path>");
    process.exit(1);
  }

  try {
    const src = await fs.readFile(path.resolve(filePath), "utf-8");
    const f = JSON.parse(src);
    const result = pick(f, fieldPath);
    stdout.write(result);
  } catch (e) {
    console.error(`Error reading file ${filePath}`);
    console.error(e);
    process.exit(1);
  }
};

main();
