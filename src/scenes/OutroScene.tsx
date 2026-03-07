import React from "react";
import { SceneFrame } from "../components/SceneFrame";

export const OutroScene: React.FC<{ description: string }> = ({ description }) => (
  <SceneFrame title="Outro" subtitle="Scene: outro" accent="#3b82f6">
    <p style={{ fontSize: 34, opacity: 0.9 }}>{description}</p>
  </SceneFrame>
);
