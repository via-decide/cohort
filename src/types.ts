export type OverlayStyle =
  | "title"
  | "subtitle"
  | "body"
  | "code_label"
  | "decision_prompt"
  | "option_label"
  | "cta"
  | string;

export type OverlayPosition =
  | "center"
  | "top_left"
  | "top_right"
  | "bottom_left"
  | "bottom_right"
  | "lower_third"
  | string;

export interface TextOverlay {
  text: string;
  style: OverlayStyle;
  position: OverlayPosition;
  appear_frame: number;
}

export type SceneType =
  | "intro_animation"
  | "talking_explanation"
  | "story_scene"
  | "repo_screen_capture"
  | "diagram_animation"
  | "decision_overlay"
  | "outro";

export type LegacySceneType =
  | "talking_head"
  | "mixed_narration_broll"
  | "screen_capture_annotated"
  | "animated_diagram";

export type AnySceneType = SceneType | LegacySceneType;

export interface BaseScene {
  id: string;
  type: AnySceneType;
  start_frame: number;
  duration_frames: number;
  description: string;
  text_overlays: TextOverlay[];
  transition?: string;
}

export type Resolution =
  | string
  | {
      width: number;
      height: number;
    };

export interface RemotionSpec {
  resolution: Resolution;
  fps: number;
  duration_seconds: number;
  total_duration_frames: number;
  scenes: BaseScene[];
}

export interface DecisionOption {
  id: string;
  label: string;
  description: string;
  leads_to: string;
}

export interface DecisionPoint {
  question: string;
  options: DecisionOption[];
}



export interface FullScript {
  hook?: string;
  context?: string;
  repo_explanation?: string;
  decision_moment?: string;
  options_narration?: string;
  outro?: string;
}

export interface VideoDefinition {
  id: string;
  title: string;
  duration_seconds: number;
  decision_point: DecisionPoint;
  remotion_spec: RemotionSpec;
  full_script?: FullScript;
}


export interface BranchingMap {
  nodes?: string[];
  edges: Record<string, Record<string, string> | "TERMINAL">;
}

export interface ProductionData {
  series: {
    id: string;
    title: string;
  };
  videos: VideoDefinition[];
  branching_map: BranchingMap;
}

export interface EpisodeInputProps {
  videoId: string;
}
