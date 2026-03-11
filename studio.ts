import { runValidateCommand } from "./src/commands/validate.ts";

const command = process.argv[2];

const main = async () => {
  switch (command) {
    case "validate":
      await runValidateCommand();
      break;
    default:
      console.error(`Unknown or missing command: ${command ?? "<none>"}`);
      console.error("Usage: ts-node --esm studio.ts validate");
      process.exit(1);
  }
};

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
