import React from "react";
import type { SceneVoiceConfig } from "../voice/voiceResolver";

interface VoiceDebugPanelProps {
  videoId: string;
  activeSceneId: string;
  voice: SceneVoiceConfig;
}

export const VoiceDebugPanel: React.FC<VoiceDebugPanelProps> = ({ videoId, activeSceneId, voice }) => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        right: 16,
        bottom: 16,
        width: 420,
        backgroundColor: "rgba(3, 7, 18, 0.86)",
        border: "1px solid rgba(148, 163, 184, 0.6)",
        borderRadius: 12,
        padding: 12,
        fontSize: 14,
        lineHeight: 1.4,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 8 }}>Voice Debug Panel</div>
      <div>module_id: {videoId}</div>
      <div>scene_id: {activeSceneId}</div>
      <div>selected_voice: {voice.selectedVoiceId ?? "none"}</div>
      <div>source_url: {voice.sourceUrl ?? "none"}</div>
      <div>generation_status: {voice.generationStatus}</div>
      <div>playback_status: {voice.sourceUrl ? "ready" : "no-audio-src"}</div>
      <div>transcript_segments: {voice.transcriptSegments.length}</div>
      <div>last_api_response: {voice.lastApiResponse ?? "none"}</div>
      <div>last_error: {voice.lastError ?? "none"}</div>
    </div>
  );
};
