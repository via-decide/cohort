import type { ProductionData } from "../types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const raw = require("../../production-v2.json") as ProductionData;
export const production: ProductionData = raw;
