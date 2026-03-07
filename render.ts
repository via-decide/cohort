import fs from "node:fs";
import path from "node:path";
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import type { ProductionData } from "./src/types";

const productionPath = path.join(process.cwd(), "production.json");
const production = JSON.parse(fs.readFileSync(productionPath, "utf-8")) as ProductionData;
const allIds = production.videos.map((video) => video.id);
const compositionId = "EpisodeFromJson";

const args = process.argv.slice(2);
const wantsList = args.includes("--list");
const wantsAll = args.includes("--all");

if (wantsList) {
  console.log(allIds.join("\n"));
  process.exit(0);
}

const requestedIds = wantsAll ? allIds : args.filter((arg) => !arg.startsWith("--"));

if (requestedIds.length === 0) {
  console.error("Usage: ts-node --esm render.ts <id...> | --all | --list");
  process.exit(1);
}

const invalidIds = requestedIds.filter((id) => !allIds.includes(id));
if (invalidIds.length > 0) {
  console.error(`Unknown video id(s): ${invalidIds.join(", ")}`);
  console.error(`Valid ids: ${allIds.join(", ")}`);
  process.exit(1);
}

const run = async () => {
  const entry = path.join(process.cwd(), "src", "index.ts");
  const outDir = path.join(process.cwd(), "renders");
  fs.mkdirSync(outDir, { recursive: true });

  console.log("Bundling Remotion project...");
  const bundleLocation = await bundle({
    entryPoint: entry,
    webpackOverride: (config) => config,
  });

  for (const id of requestedIds) {
    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: compositionId,
      inputProps: { videoId: id },
    });

    const outputLocation = path.join(outDir, `${id}.mp4`);
    console.log(`Rendering ${id} -> ${outputLocation}`);

    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation,
      inputProps: { videoId: id },
    });
  }
};

void run();
