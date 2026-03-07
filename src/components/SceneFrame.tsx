import React from "react";

export const SceneFrame: React.FC<{
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  accent?: string;
}> = ({ title, subtitle, children, accent = "#7c3aed" }) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "radial-gradient(circle at top right, #1f2937, #030712)",
        color: "#f9fafb",
        padding: 60,
        border: `2px solid ${accent}`,
        borderRadius: 24,
      }}
    >
      <div>
        <div style={{ color: accent, letterSpacing: 1.4, fontSize: 24 }}>{subtitle}</div>
        <h1 style={{ margin: "12px 0 0", fontSize: 56 }}>{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};
