import React from "react";
import { useCurrentFrame } from "remotion";
import type { TextOverlay } from "../types";

const POSITIONS: Record<string, React.CSSProperties> = {
  center: { left: "50%", top: "50%", transform: "translate(-50%, -50%)" },
  top_left: { left: 80, top: 80 },
  top_right: { right: 80, top: 80 },
  bottom_left: { left: 80, bottom: 80 },
  bottom_right: { right: 80, bottom: 80 },
  lower_third: { left: 80, bottom: 220 },
};

const STYLES: Record<string, React.CSSProperties> = {
  title: { fontSize: 64, fontWeight: 800 },
  subtitle: { fontSize: 40, fontWeight: 600, color: "#c4b5fd" },
  body: { fontSize: 34, maxWidth: 1000, lineHeight: 1.35 },
  decision_prompt: { fontSize: 42, fontWeight: 700, maxWidth: 1100 },
  option_label: { fontSize: 26, fontWeight: 600 },
  cta: { fontSize: 32, fontWeight: 700, color: "#34d399" },
};

export const TextOverlays: React.FC<{ overlays: TextOverlay[] }> = ({ overlays }) => {
  const frame = useCurrentFrame();

  return (
    <>
      {overlays.map((overlay, index) => {
        const style = STYLES[overlay.style] ?? STYLES.body;
        const position = POSITIONS[overlay.position] ?? POSITIONS.lower_third;
        const visible = frame >= overlay.appear_frame;

        return (
          <div
            key={`${overlay.text}-${index}`}
            style={{
              position: "absolute",
              opacity: visible ? 1 : 0,
              transition: "opacity 200ms",
              ...position,
              ...style,
            }}
          >
            {overlay.text}
          </div>
        );
      })}
    </>
  );
};
