import { spawnSync } from "node:child_process";

const run = (label: string, command: string, args: string[]) => {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    env: process.env,
  });

  if (result.status !== 0) {
    throw new Error(`${label} failed with exit code ${result.status ?? "unknown"}`);
  }
};

export const runValidateCommand = async (): Promise<void> => {
  run("production validation", "node", ["--loader", "ts-node/esm", "scripts/validate-production.ts"]);
  run("merge validation", "npm", ["run", "merge:validate"]);
};
