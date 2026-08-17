#!/usr/bin/env node
/**
 * Recomprime en el mismo formato (webp/png/jpg) todas las imágenes en public/,
 * y reduce el ancho de las que exceden MAX_WIDTH. Sobrescribe en el sitio,
 * solo si el resultado es realmente más liviano.
 */
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve(import.meta.dirname, "..", "public");
const MAX_WIDTH = 2400;
const SKIP_UNDER_BYTES = 40_000;
const EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg"]);

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(fullPath)));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

async function optimize(filePath) {
  const before = (await stat(filePath)).size;
  if (before < SKIP_UNDER_BYTES) {
    return { filePath, before, after: before, skipped: "ya-liviana" };
  }

  const ext = path.extname(filePath).toLowerCase();
  const inputBuffer = await readFile(filePath);
  const image = sharp(inputBuffer);
  const meta = await image.metadata();
  const hasAlpha = meta.hasAlpha;

  let pipeline = image;
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH });
  }

  const quality = hasAlpha ? 85 : 78;
  if (ext === ".webp") {
    pipeline = pipeline.webp({ quality });
  } else if (ext === ".png") {
    pipeline = pipeline.png({ quality, compressionLevel: 9 });
  } else {
    pipeline = pipeline.jpeg({ quality });
  }

  const buffer = await pipeline.toBuffer();

  if (buffer.length >= before) {
    return { filePath, before, after: before, skipped: "ya-optima" };
  }

  await writeFile(filePath, buffer);

  return { filePath, before, after: buffer.length };
}

const files = await collectImages(PUBLIC_DIR);
let totalBefore = 0;
let totalAfter = 0;

console.log(`Optimizando ${files.length} imágenes en ${PUBLIC_DIR}\n`);

for (const file of files) {
  const result = await optimize(file);
  totalBefore += result.before;
  totalAfter += result.after;
  const rel = path.relative(PUBLIC_DIR, file);
  if (result.skipped) {
    console.log(`  = ${rel} (${formatKb(result.before)}) — ${result.skipped}`);
  } else {
    const savedPct = (100 * (1 - result.after / result.before)).toFixed(0);
    console.log(
      `  ✓ ${rel}  ${formatKb(result.before)} → ${formatKb(result.after)}  (-${savedPct}%)`,
    );
  }
}

const totalSavedPct = (100 * (1 - totalAfter / totalBefore)).toFixed(1);
console.log(
  `\nTotal: ${formatKb(totalBefore)} → ${formatKb(totalAfter)} (-${totalSavedPct}%)`,
);
