/**
 * Alchemist Series — Batch Remotion Renderer
 *
 * Usage:
 *   ts-node --esm render.ts V01           # render single episode
 *   ts-node --esm render.ts V01 V03 V08   # render multiple
 *   ts-node --esm render.ts --all         # render every video in production.json
 *   ts-node --esm render.ts --list        # list all available video ids
 *
 * Output: ./renders/{VIDEO_ID}.mp4
 */

import fs   from "node:fs";
import path from "node:path";
import { bundle }        from "@remotion/bundler";
import { selectComposition, renderMedia, RenderMediaOptions } from "@remotion/renderer";

// ─── Load production data ─────────────────────────────────────────────────────

const productionPath = path.join(process.cwd(), "production.json");
const production = JSON.parse(fs.readFileSync(productionPath, "utf-8"));
const allVideos  = (production.videos ?? []) as Array<{ id: string; [k: string]: unknown }>;
const allIds     = allVideos.map((v) => v.id);

// ─── Parse CLI args ───────────────────────────────────────────────────────────

const args = process.argv.slice(2);

if (args.includes("--list")) {
  console.log("Available video IDs:");
  allIds.forEach((id) => console.log(` ${id}`));
  process.exit(0);
}

const renderAll = args.includes("--all");
const idsToRender: string[] = renderAll
  ? allIds
  : args.filter((a) => !a.startsWith("--"));

if (idsToRender.length === 0) {
  console.error("No video IDs specified. Use --all or pass IDs: V01 V03");
  process.exit(1);
}

// Validate requested IDs
const invalid = idsToRender.filter((id) => !allIds.includes(id));
if (invalid.length > 0) {
  console.error(`Unknown video IDs: ${invalid.join(", ")}`);
  console.error(`Valid IDs: ${allIds.join(", ")}`);
  process.exit(1);
}

// ─── Bundle once, render multiple ────────────────────────────────────────────

const entry = path.join(process.cwd(), "src", "index.ts");
const outDir = path.join(process.cwd(), "renders");
fs.mkdirSync(outDir, { recursive: true });

console.log(`\n🎬 Alchemist Renderer`);
console.log(`   Bundling entry: ${entry}`);
console.log(`   Rendering ${idsToRender.length} video(s): ${idsToRender.join(", ")}\n`);

const bundleLocation = await bundle({
  entryPoint: entry,
  webpackOverride: (config) => config,
});

console.log(`✅ Bundle complete: ${bundleLocation}\n`);

// ─── Render each episode ──────────────────────────────────────────────────────

let success = 0;
let failed  = 0;

for (const videoId of idsToRender) {
  const video   = allVideos.find((v) => v.id === videoId)!;
  const outPath = path.join(outDir, `${videoId}.mp4`);
  const fps     = (video.remotion_spec as any)?.fps ?? 30;
  const frames  = (video.remotion_spec as any)?.total_duration_frames
                    ?? ((video.duration_seconds as number) ?? 240) * fps;

  console.log(`▶ Rendering ${videoId}  (${frames} frames @ ${fps}fps = ${frames/fps}s)`);

  try {
    const composition = await selectComposition({
      serveUrl:    bundleLocation,
      id:          videoId,
      inputProps:  { video },
    });

    const renderOptions: RenderMediaOptions = {
      composition,
      serveUrl:       bundleLocation,
      codec:          "h264",
      outputLocation: outPath,
      inputProps:     { video },
      // Concurrency — adjust to available CPU cores
      concurrency:    4,
      // Quality
      videoBitrate:   "8M",
      // Progress
      onProgress: ({ progress }) => {
        const pct = Math.round(progress * 100);
        process.stdout.write(`\r  ${videoId}: ${pct}%  `);
      },
    };

    await renderMedia(renderOptions);
    console.log(`\n✅ ${videoId} → ${outPath}\n`);
    success++;
  } catch (err) {
    console.error(`\n❌ ${videoId} failed:`, err);
    failed++;
  }
}

// ─── Summary ──────────────────────────────────────────────────────────────────

console.log("─────────────────────────────────────────────");
console.log(`Done. ${success} succeeded, ${failed} failed.`);
console.log(`Output directory: ${outDir}`);

if (failed > 0) process.exit(1);
