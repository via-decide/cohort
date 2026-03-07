import rawProduction from "../../production.json";
import type { ProductionData, SceneType, AnySceneType } from "../types";

const sceneTypeMap: Record<AnySceneType, SceneType> = {
  intro_animation: "intro_animation",
  talking_explanation: "talking_explanation",
  story_scene: "story_scene",
  repo_screen_capture: "repo_screen_capture",
  diagram_animation: "diagram_animation",
  decision_overlay: "decision_overlay",
  outro: "outro",
  talking_head: "talking_explanation",
  mixed_narration_broll: "story_scene",
  screen_capture_annotated: "repo_screen_capture",
  animated_diagram: "diagram_animation",
};

const production = rawProduction as unknown as ProductionData;

export const getProduction = (): ProductionData => production;

export const normalizeSceneType = (sceneType: AnySceneType): SceneType => {
  return sceneTypeMap[sceneType];
};

export const getVideoById = (videoId: string) => {
  return production.videos.find((video) => video.id === videoId);
};
