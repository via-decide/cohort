import type { Resolution } from "../types";

export const parseResolution = (resolution: Resolution) => {
  if (typeof resolution !== "string") {
    return resolution;
  }

  const [widthRaw, heightRaw] = resolution.split("x");
  const width = Number(widthRaw);
  const height = Number(heightRaw);

  if (!Number.isFinite(width) || !Number.isFinite(height)) {
    return { width: 1920, height: 1080 };
  }

  return { width, height };
};
