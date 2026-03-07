import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { getVideoById, normalizeSceneType } from "./data/load-production";
import { TextOverlays } from "./components/TextOverlays";
import type { BaseScene, DecisionPoint, EpisodeInputProps } from "./types";
import { IntroAnimationScene } from "./scenes/IntroAnimationScene";
import { TalkingExplanationScene } from "./scenes/TalkingExplanationScene";
import { StoryScene } from "./scenes/StoryScene";
import { RepoScreenCaptureScene } from "./scenes/RepoScreenCaptureScene";
import { DiagramAnimationScene } from "./scenes/DiagramAnimationScene";
import { DecisionOverlayScene } from "./scenes/DecisionOverlayScene";
import { OutroScene } from "./scenes/OutroScene";

const SceneRenderer: React.FC<{ scene: BaseScene; decisionPoint: DecisionPoint }> = ({
  scene,
  decisionPoint,
}) => {
  const normalizedType = normalizeSceneType(scene.type);

  switch (normalizedType) {
    case "intro_animation":
      return <IntroAnimationScene description={scene.description} />;
    case "talking_explanation":
      return <TalkingExplanationScene description={scene.description} />;
    case "story_scene":
      return <StoryScene description={scene.description} />;
    case "repo_screen_capture":
      return <RepoScreenCaptureScene description={scene.description} />;
    case "diagram_animation":
      return <DiagramAnimationScene description={scene.description} />;
    case "decision_overlay":
      return <DecisionOverlayScene description={scene.description} decisionPoint={decisionPoint} />;
    case "outro":
      return <OutroScene description={scene.description} />;
    default:
      return <AbsoluteFill style={{ backgroundColor: "#000", color: "#fff" }}>Unknown scene type</AbsoluteFill>;
  }
};

export const EpisodeFromJson: React.FC<EpisodeInputProps> = ({ videoId }) => {
  const video = getVideoById(videoId);

  if (!video) {
    return (
      <AbsoluteFill style={{ backgroundColor: "#000", color: "#fff", justifyContent: "center", alignItems: "center" }}>
        Video not found for id: {videoId}
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#030712", fontFamily: "Inter, system-ui, sans-serif" }}>
      {video.remotion_spec.scenes.map((scene) => (
        <Sequence key={scene.id} from={scene.start_frame} durationInFrames={scene.duration_frames}>
          <AbsoluteFill>
            <SceneRenderer scene={scene} decisionPoint={video.decision_point} />
            <TextOverlays overlays={scene.text_overlays} />
          </AbsoluteFill>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
