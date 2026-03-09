export type VoiceGenerationStatus = "idle" | "generating" | "ready" | "error";
export type VoicePlaybackStatus = "idle" | "loading" | "playing" | "paused" | "ended" | "error";

export interface VoiceStudioState {
  selectedVoiceId: string | null;
  sourceUrl: string | null;
  generationStatus: VoiceGenerationStatus;
  playbackStatus: VoicePlaybackStatus;
  activeRequestId: string | null;
  lastApiResponse: string | null;
  lastError: string | null;
}

export type VoiceStudioAction =
  | { type: "select-voice"; voiceId: string }
  | { type: "start-generation"; requestId: string }
  | { type: "generation-success"; requestId: string; sourceUrl: string; apiResponse?: string }
  | { type: "generation-error"; requestId: string; error: string }
  | { type: "playback-status"; status: VoicePlaybackStatus; error?: string };

export const initialVoiceStudioState: VoiceStudioState = {
  selectedVoiceId: null,
  sourceUrl: null,
  generationStatus: "idle",
  playbackStatus: "idle",
  activeRequestId: null,
  lastApiResponse: null,
  lastError: null,
};

export const voiceStudioReducer = (
  state: VoiceStudioState,
  action: VoiceStudioAction,
): VoiceStudioState => {
  switch (action.type) {
    case "select-voice":
      return { ...state, selectedVoiceId: action.voiceId };
    case "start-generation":
      return {
        ...state,
        generationStatus: "generating",
        activeRequestId: action.requestId,
        lastError: null,
      };
    case "generation-success":
      if (state.activeRequestId !== action.requestId) {
        return state;
      }

      return {
        ...state,
        sourceUrl: action.sourceUrl,
        generationStatus: "ready",
        activeRequestId: null,
        lastApiResponse: action.apiResponse ?? null,
      };
    case "generation-error":
      if (state.activeRequestId !== action.requestId) {
        return state;
      }

      return {
        ...state,
        generationStatus: "error",
        playbackStatus: "error",
        activeRequestId: null,
        lastError: action.error,
      };
    case "playback-status":
      return {
        ...state,
        playbackStatus: action.status,
        lastError: action.error ?? state.lastError,
      };
    default:
      return state;
  }
};
