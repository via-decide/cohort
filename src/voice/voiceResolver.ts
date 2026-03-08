import type { BaseScene, VideoDefinition } from "../types";

export interface TranscriptSegment {
  id: string;
  text: string;
}

export interface SceneVoiceConfig {
  sourceUrl: string | null;
  transcriptSegments: TranscriptSegment[];
  selectedVoiceId: string | null;
  generationStatus: "idle" | "ready" | "error";
  lastApiResponse: string | null;
  lastError: string | null;
}

const splitTranscript = (sceneId: string, transcript: string): TranscriptSegment[] => {
  return transcript
    .split(/(?<=[.!?])\s+/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text, index) => ({ id: `${sceneId}-${index}`, text }));
};

const scriptByIndex = (video: VideoDefinition): string[] => {
  const script = video.full_script;
  if (!script) {
    return [];
  }

  return [script.hook, script.context, script.repo_explanation, script.decision_moment, script.outro].filter(
    (value): value is string => Boolean(value),
  );
};

export const resolveSceneVoice = (
  video: VideoDefinition,
  scene: BaseScene,
  sceneIndex: number,
): SceneVoiceConfig => {
  const scriptFallback = scriptByIndex(video)[sceneIndex] ?? "";

  const transcriptSegments = scriptFallback ? splitTranscript(scene.id, scriptFallback) : [];

  return {
    sourceUrl: null,
    transcriptSegments,
    selectedVoiceId: null,
    generationStatus: transcriptSegments.length > 0 ? "ready" : "idle",
    lastApiResponse: transcriptSegments.length > 0 ? "script-fallback" : null,
    lastError: null,
  };
};
