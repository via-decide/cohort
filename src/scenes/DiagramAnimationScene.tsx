import React from "react";
import { SceneFrame } from "../components/SceneFrame";

export const DiagramAnimationScene: React.FC<{ description: string }> = ({ description }) => (
  <SceneFrame title="Diagram Animation" subtitle="Scene: diagram_animation" accent="#a78bfa">
    <p style={{ fontSize: 34, opacity: 0.9 }}>{description}</p>
  </SceneFrame>
);
