import React from "react";
import { Composition } from "remotion";
import { EpisodeFromJson } from "./EpisodeFromJson";
import { getProduction } from "./data/load-production";
import { parseResolution } from "./utils/resolution";

const production = getProduction();

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {production.videos.map((video) => {
        const { width, height } = parseResolution(video.remotion_spec.resolution);
        return (
          <Composition
            key={video.id}
            id={video.id}
            component={EpisodeFromJson}
            width={width}
            height={height}
            fps={video.remotion_spec.fps}
            durationInFrames={video.remotion_spec.total_duration_frames}
            defaultProps={{ videoId: video.id }}
          />
        );
      })}
    </>
  );
};
