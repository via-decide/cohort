import React from "react";
import { Composition } from "remotion";
import { EpisodeFromJson } from "./EpisodeFromJson";
import type { EpisodeProps, ProductionData } from "./types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const production = require("../production-v2.json") as unknown as ProductionData;

const FPS = production.series.fps;
const DURATION = production.series.frames_per_video;

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
          defaultProps={{ videoId: video.id, voEnabled: false }}
        />
      ))}
      <Composition
        id="EpisodeFromJson"
        component={EpisodeFromJson}
        durationInFrames={DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ videoId: "V01", voEnabled: false }}
      />
    </>
  );
};
