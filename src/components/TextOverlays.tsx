import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import type { TextOverlay } from "../types";

export const TextOverlays: React.FC<{ overlays: TextOverlay[] }> = ({ overlays }) => {
  const frame = useCurrentFrame();

  return (
    <>
      {overlays.map((overlay, index) => {
        const local = frame - overlay.appear_frame;
        const opacity = interpolate(local, [0, 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const scale = interpolate(local, [0, 12], [0.98, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={`${overlay.text}-${index}`}
            style={{ position: "absolute", left: 90, bottom: 120 - index * 56, opacity, transform: `scale(${scale})` }}
          >
            {overlay.text}
          </div>
        );
      })}
    </>
  );
};
