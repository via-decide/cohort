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
  transition?: string;
}

export interface DecisionOption {
  id: string;
  label: string;
  description?: string;
  leads_to: string;
}

export interface YoutubeMeta {
  title: string;
  description: string;
  tags: string[];
  thumbnail_concept?: string;
}

export interface VideoVisuals {
  github_repos?: string[];
}

export interface VideoDefinition {
  id: string;
  title: string;
  parent_id?: string | null;
  branch_from_option?: string | null;
  concept?: string;
  repo_stage?: string;
  notebookllm_prompt?: string;
  youtube?: YoutubeMeta;
  visuals?: VideoVisuals;
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
  voEnabled?: boolean;
  voEnabled: boolean;
}
