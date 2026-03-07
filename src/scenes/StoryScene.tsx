import React from "react";
import { SceneFrame } from "../components/SceneFrame";

export const StoryScene: React.FC<{ description: string }> = ({ description }) => (
  <SceneFrame title="Story Scene" subtitle="Scene: story_scene" accent="#ec4899">
    <p style={{ fontSize: 34, opacity: 0.9 }}>{description}</p>
  </SceneFrame>
);
