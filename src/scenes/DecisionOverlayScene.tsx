import React from "react";
import { SceneFrame } from "../components/SceneFrame";
import type { DecisionPoint } from "../types";

export const DecisionOverlayScene: React.FC<{ decisionPoint: DecisionPoint; description: string }> = ({
  decisionPoint,
  description,
}) => (
  <SceneFrame title="Decision Overlay" subtitle="Scene: decision_overlay" accent="#ef4444">
    <p style={{ fontSize: 28, opacity: 0.8 }}>{description}</p>
    <h2 style={{ fontSize: 40, marginBottom: 20 }}>{decisionPoint.question}</h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {decisionPoint.options.map((option) => (
        <div key={option.id} style={{ border: "1px solid #f87171", borderRadius: 14, padding: 16 }}>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            {option.id}. {option.label}
          </div>
          <div style={{ opacity: 0.8 }}>{option.description}</div>
        </div>
      ))}
    </div>
  </SceneFrame>
);
