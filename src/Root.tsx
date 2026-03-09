import React from "react";
import { Composition } from "remotion";
import { EpisodeFromJson } from "./EpisodeFromJson";
import { MergeComposition } from "./MergeComposition.js";
import { loadMergeManifest } from "./data/load-merge.js";
import type { EpisodeProps, ProductionData } from "./types";
import type { MergeProps } from "./types-merge.js";

const mode = (process.env.PRODUCTION_MODE ?? "v2").toLowerCase();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const production = require(mode === "v1" ? "../production.json" : "../production-v2.json") as unknown as ProductionData;

const FPS = production.series.fps;
const DURATION = production.series.frames_per_video;

let mergeManifest: MergeProps["manifest"] | null = null;
try {
  mergeManifest = loadMergeManifest();
} catch {
  mergeManifest = null;
}

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {production.videos.map((video) => (
        <Composition
          key={video.id}
          id={video.id}
          component={EpisodeFromJson}
          durationInFrames={DURATION}
          fps={FPS}
          width={1920}
          height={1080}
          defaultProps={{ videoId: video.id, voEnabled: false } as EpisodeProps}
        />
      ))}
      <Composition
        id="EpisodeFromJson"
        component={EpisodeFromJson}
        durationInFrames={DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ videoId: production.videos[0]?.id ?? "V01", voEnabled: false } as EpisodeProps}
      />
      {mergeManifest ? (
        <Composition
          id="MergeComposition"
          component={MergeComposition}
          durationInFrames={
            mergeManifest.timeline.durationMs == null
              ? mergeManifest.output.fps * 30
              : Math.round((mergeManifest.timeline.durationMs / 1000) * mergeManifest.output.fps)
          }
          fps={mergeManifest.output.fps}
          width={mergeManifest.output.width}
          height={mergeManifest.output.height}
          defaultProps={{ manifest: mergeManifest } as MergeProps}
        />
      ) : null}
    </>
  );
};
