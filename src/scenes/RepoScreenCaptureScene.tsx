import React from "react";
import { SceneFrame } from "../components/SceneFrame";

export const RepoScreenCaptureScene: React.FC<{ description: string }> = ({ description }) => (
  <SceneFrame title="Repo Screen Capture" subtitle="Scene: repo_screen_capture" accent="#10b981">
    <p style={{ fontSize: 34, opacity: 0.9 }}>{description}</p>
  </SceneFrame>
);
