#!/usr/bin/env node
/**
 * Optimize every PNG in `public/assets/photos/` in-place using sharp.
 *
 * Flat brand illustrations (limited palette, soft gradients) compress
 * dramatically when re-encoded with sharp's `palette: true` + max effort.
 * On a typical brand illustration we see 50-75% size reduction with no
 * visible change.
 *
 * The script:
 *   1. Backs up the original to `<filename>.orig.png` (kept on disk so you
 *      can revert with `rename *.orig.png *.png` if anything looks off).
 *   2. Re-encodes via sharp at max effort, palette mode, compressionLevel 9.
 *   3. Only commits the optimized file when it is strictly smaller than the
 *      original — otherwise the original stays unchanged.
 *   4. Prints a per-file summary and a total at the end.
 *
 * Usage:
 *   node scripts/optimize-photos.mjs
 *
 * To restore originals after running:
 *   node scripts/optimize-photos.mjs --restore
 *
 * To delete the .orig.png backups once you've reviewed the result:
 *   node scripts/optimize-photos.mjs --cleanup
 */

import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PHOTOS_DIR = resolve(__dirname, "..", "public", "assets", "photos");

const mode = process.argv[2] ?? "optimize";

async function listPngs(dir) {
  const all = await readdir(dir);
  return all.filter((f) => f.endsWith(".png") && !f.endsWith(".orig.png"));
}

async function fileSize(path) {
  const s = await stat(path);
  return s.size;
}

function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function optimizeOne(file) {
  const src = join(PHOTOS_DIR, file);
  const backup = join(PHOTOS_DIR, `${file.replace(/\.png$/, "")}.orig.png`);
  const tmp = join(PHOTOS_DIR, `${file}.tmp`);

  const originalSize = await fileSize(src);

  // Back up the original on the first run only; on re-runs reuse the existing backup
  try {
    await stat(backup);
  } catch {
    await rename(src, backup);
  }

  // Always start optimization from the pristine backup
  await sharp(backup)
    .png({
      compressionLevel: 9,
      effort: 10,
      palette: true,
      quality: 90,
    })
    .toFile(tmp);

  const optimizedSize = await fileSize(tmp);

  // Commit the optimized version only when it's actually smaller
  if (optimizedSize < originalSize) {
    await rename(tmp, src);
    const saved = originalSize - optimizedSize;
    const pct = ((saved / originalSize) * 100).toFixed(1);
    return {
      file,
      originalSize,
      optimizedSize,
      saved,
      pct,
      committed: true,
    };
  } else {
    await unlink(tmp);
    // Restore the original to its name
    await rename(backup, src);
    return {
      file,
      originalSize,
      optimizedSize,
      saved: 0,
      pct: "0.0",
      committed: false,
    };
  }
}

async function restoreAll() {
  const files = await readdir(PHOTOS_DIR);
  const backups = files.filter((f) => f.endsWith(".orig.png"));
  if (backups.length === 0) {
    console.log("Nothing to restore — no .orig.png backups found.");
    return;
  }
  for (const b of backups) {
    const target = b.replace(/\.orig\.png$/, ".png");
    await rename(join(PHOTOS_DIR, b), join(PHOTOS_DIR, target));
    console.log(`restored ${target}`);
  }
}

async function cleanupBackups() {
  const files = await readdir(PHOTOS_DIR);
  const backups = files.filter((f) => f.endsWith(".orig.png"));
  if (backups.length === 0) {
    console.log("Nothing to clean — no .orig.png backups found.");
    return;
  }
  for (const b of backups) {
    await unlink(join(PHOTOS_DIR, b));
    console.log(`deleted ${b}`);
  }
  console.log(`Removed ${backups.length} backup file(s).`);
}

async function main() {
  if (mode === "--restore") {
    await restoreAll();
    return;
  }
  if (mode === "--cleanup") {
    await cleanupBackups();
    return;
  }

  const pngs = await listPngs(PHOTOS_DIR);
  console.log(`Optimizing ${pngs.length} PNGs in ${PHOTOS_DIR}\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  const skipped = [];

  for (const file of pngs) {
    const result = await optimizeOne(file);
    totalBefore += result.originalSize;
    totalAfter += result.committed ? result.optimizedSize : result.originalSize;
    if (result.committed) {
      console.log(
        `  ${file.padEnd(48)} ${fmt(result.originalSize).padStart(8)} → ${fmt(result.optimizedSize).padStart(8)}  (-${result.pct}%)`
      );
    } else {
      skipped.push(file);
      console.log(`  ${file.padEnd(48)} (skipped — re-encoded version was not smaller)`);
    }
  }

  const totalSaved = totalBefore - totalAfter;
  const totalPct = ((totalSaved / totalBefore) * 100).toFixed(1);
  console.log(
    `\nTotal: ${fmt(totalBefore)} → ${fmt(totalAfter)}  saved ${fmt(totalSaved)} (${totalPct}%)`
  );
  if (skipped.length) {
    console.log(`Skipped ${skipped.length} file(s) (already at or near optimal).`);
  }
  console.log(
    `\nBackups of originals are kept as *.orig.png. Once you've reviewed the result,`
  );
  console.log(`run: node scripts/optimize-photos.mjs --cleanup`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
