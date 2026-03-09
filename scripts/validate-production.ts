import fs from "node:fs";
import path from "node:path";
import type { ProductionData } from "../src/types";

const productionPath = path.join(process.cwd(), "production.json");
const production = JSON.parse(fs.readFileSync(productionPath, "utf-8")) as ProductionData;

const failures: string[] = [];

const ids = production.videos.map((video) => video.id);
const idSet = new Set(ids);
const nodeSet = new Set(production.branching_map.nodes ?? ids);

if (idSet.size !== ids.length) {
  failures.push("Video IDs must be unique.");
}

for (const [sourceId, branches] of Object.entries(production.branching_map.edges)) {
  if (branches === "TERMINAL") {
    continue;
  }

  for (const [option, targetId] of Object.entries(branches)) {
    if (!nodeSet.has(targetId)) {
      failures.push(`Branch target missing: ${sourceId}.${option} -> ${targetId}`);
    }
  }
}

for (const video of production.videos) {
  const edges = production.branching_map.edges[video.id];
  if (!edges || edges === "TERMINAL") continue;
  for (const option of video.decision_point.options) {
    const mapTarget = (edges as Record<string, string>)[option.id];
    if (mapTarget !== option.leads_to) {
      failures.push(
        `leads_to mismatch for ${video.id} option ${option.id}: decision_point says "${option.leads_to}", branching_map says "${mapTarget}"`,
      );
    }
  }
}

for (const video of production.videos) {
  const spec = video.remotion_spec;
  const expectedFrames = spec.fps * spec.duration_seconds;
  if (spec.total_duration_frames !== expectedFrames) {
    failures.push(
      `Duration mismatch for ${video.id}: total_duration_frames=${spec.total_duration_frames}, expected=${expectedFrames}`,
    );
  }

  const sceneFrameSum = spec.scenes.reduce((sum, scene) => sum + scene.duration_frames, 0);
  if (sceneFrameSum !== spec.total_duration_frames) {
    failures.push(
      `Scene sum mismatch for ${video.id}: sum=${sceneFrameSum}, total_duration_frames=${spec.total_duration_frames}`,
    );
  }

  let expectedStart = 0;
  for (const scene of spec.scenes) {
    if (scene.start_frame !== expectedStart) {
      failures.push(
        `Scene gap/overlap in ${video.id}: ${scene.id} starts at ${scene.start_frame}, expected ${expectedStart}`,
      );
    }
    expectedStart += scene.duration_frames;
  }
}

if (failures.length > 0) {
  console.error("production.json validation failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`production.json validation passed for ${production.videos.length} videos.`);
