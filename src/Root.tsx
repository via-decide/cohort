import React from "react";
import { Composition } from "remotion";
import { EpisodeFromJson } from "./EpisodeFromJson";
import { getProduction } from "./data/load-production";
import { parseResolution } from "./utils/resolution";
import type { EpisodeInputProps } from "./types";

const production = getProduction();
const defaultVideo = production.videos[0];
const { width, height } = parseResolution(defaultVideo.remotion_spec.resolution);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition<EpisodeInputProps>
      id="EpisodeFromJson"
      component={EpisodeFromJson}
      width={width}
      height={height}
      fps={defaultVideo.remotion_spec.fps}
      durationInFrames={defaultVideo.remotion_spec.total_duration_frames}
      defaultProps={{ videoId: defaultVideo.id }}
    />
  );
};
