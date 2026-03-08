import React, { useEffect, useMemo } from "react";
import { AbsoluteFill, Audio, Sequence, useCurrentFrame } from "remotion";
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
import { resolveSceneVoice } from "./voice/voiceResolver";
import { VoiceDebugPanel } from "./components/VoiceDebugPanel";

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
      return (
        <AbsoluteFill style={{ backgroundColor: "#000", color: "#fff" }}>
          Unknown scene type
        </AbsoluteFill>
      );
  }
};

export const EpisodeFromJson: React.FC<EpisodeInputProps> = ({ videoId }) => {
  const frame = useCurrentFrame();
  const video = getVideoById(videoId);

  const sceneVoiceMap = useMemo(() => {
    if (!video) {
      return new Map();
    }

    return new Map(
      video.remotion_spec.scenes.map((scene, index) => [scene.id, resolveSceneVoice(video, scene, index)]),
    );
  }, [video]);

  const activeScene = video?.remotion_spec.scenes.find(
    (scene) => frame >= scene.start_frame && frame < scene.start_frame + scene.duration_frames,
  );

  const activeSceneVoice = activeScene ? sceneVoiceMap.get(activeScene.id) : null;

  useEffect(() => {
    if (!activeScene || !activeSceneVoice || process.env.NODE_ENV === "production") {
      return;
    }

    console.info("[voice] scene-voice-state", {
      moduleId: videoId,
      sceneId: activeScene.id,
      selectedVoice: activeSceneVoice.selectedVoiceId,
      sourceUrl: activeSceneVoice.sourceUrl,
      generationStatus: activeSceneVoice.generationStatus,
      transcriptSegments: activeSceneVoice.transcriptSegments.length,
      lastError: activeSceneVoice.lastError,
    });
  }, [activeScene, activeSceneVoice, videoId]);

  if (!video) {
    return (
      <AbsoluteFill
        style={{ backgroundColor: "#000", color: "#fff", justifyContent: "center", alignItems: "center" }}
      >
        Video not found for id: {videoId}
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#030712", fontFamily: "Inter, system-ui, sans-serif" }}>
      {video.remotion_spec.scenes.map((scene) => {
        const sceneVoice = sceneVoiceMap.get(scene.id);

        return (
          <Sequence key={scene.id} from={scene.start_frame} durationInFrames={scene.duration_frames}>
            <AbsoluteFill>
              <SceneRenderer scene={scene} decisionPoint={video.decision_point} />
              <TextOverlays overlays={scene.text_overlays} />
              {sceneVoice?.sourceUrl ? <Audio src={sceneVoice.sourceUrl} /> : null}
            </AbsoluteFill>
          </Sequence>
        );
      })}
      {activeScene && activeSceneVoice ? (
        <VoiceDebugPanel videoId={videoId} activeSceneId={activeScene.id} voice={activeSceneVoice} />
      ) : null}
    </AbsoluteFill>
  );
};
