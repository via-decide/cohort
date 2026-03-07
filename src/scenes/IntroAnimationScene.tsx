import React from "react";
import { SceneFrame } from "../components/SceneFrame";

export const IntroAnimationScene: React.FC<{ description: string }> = ({ description }) => (
  <SceneFrame title="Intro Animation" subtitle="Scene: intro_animation" accent="#22d3ee">
    <p style={{ fontSize: 34, opacity: 0.9 }}>{description}</p>
  </SceneFrame>
);
