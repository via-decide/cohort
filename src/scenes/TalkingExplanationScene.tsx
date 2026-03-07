import React from "react";
import { SceneFrame } from "../components/SceneFrame";

export const TalkingExplanationScene: React.FC<{ description: string }> = ({ description }) => (
  <SceneFrame title="Talking Explanation" subtitle="Scene: talking_explanation" accent="#f59e0b">
    <p style={{ fontSize: 34, opacity: 0.9 }}>{description}</p>
  </SceneFrame>
);
