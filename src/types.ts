export type SceneType =
  | "intro_animation"
  | "talking_explanation"
  | "story_scene"
  | "repo_screen_capture"
  | "diagram_animation"
  | "decision_overlay"
  | "outro";

export interface TextOverlay {
  text: string;
  style: string;
  position: string;
  appear_frame: number;
}

export interface Scene {
  id: string;
  type: SceneType;
  start_frame: number;
  duration_frames: number;
  description?: string;
  text_overlays?: TextOverlay[];
}

export interface DecisionOption {
  id: string;
  label: string;
  description?: string;
  leads_to: string;
}

export interface VideoDefinition {
  id: string;
  title: string;
  full_script?: Record<string, string>;
  creator_script?: Record<string, string>;
  decision_point?: {
    question: string;
    options: DecisionOption[];
  };
  leads_to?: string[];
  remotion_spec: {
    fps: number;
    total_duration_frames: number;
    scenes: Scene[];
  };
}

export interface ProductionData {
  series: {
    id: string;
    title: string;
    fps: number;
    frames_per_video: number;
  };
  videos: VideoDefinition[];
  branching_map?: {
    edges: Record<string, Record<string, string> | "TERMINAL">;
  };
}

export interface EpisodeProps {
  videoId: string;
  voEnabled: boolean;
}
