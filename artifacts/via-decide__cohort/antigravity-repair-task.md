Repair mode for repository via-decide/cohort.

TARGET
Validate and repair only the files touched by the previous implementation.

TASK
Develop the Branching Story Asset Manager (via-story-cms). 1. Build a dashboard that allows admins to upload HLS/DASH video segments and link them to "Cohort Decision Points." 2. Implement a metadata tagger where each video segment can be tagged with "Skills Required" (e.g., this video requires a chemistry score > 80 from the Alchemist app). 3. Create an exporter that bundles the entire interactive series (videos, choice-logic, and cohort-requirements) into a single encrypted manifest for the web player.

RULES
1. Audit touched files first and identify regressions.
2. Preserve architecture and naming conventions.
3. Make minimal repairs only; do not expand scope.
4. Re-run checks and provide concise root-cause notes.
5. Return complete contents for changed files only.

SOP: REPAIR PROTOCOL (MANDATORY)
1. Strict Fix Only: Do not use repair mode to expand scope or add features.
2. Regression Check: Audit why previous attempt failed before proposing a fix.
3. Minimal Footprint: Only return contents for the actual repaired files.

REPO CONTEXT
- README snippet:
# Branching Documentary Remotion Project This project renders branching documentary episodes from `production.json` using a **single** Remotion composition: `EpisodeFromJson`. ## Run ```bash npm install npm run start ts-node --esm render.ts V01 ``` ## CLI ```bash # list ids npm run render:list
- AGENTS snippet:
not found
- package.json snippet:
{ "name": "alchemist-remotion", "version": "2.0.0", "type": "module", "scripts": { "start": "remotion studio src/index.ts", "render": "ts-node --esm render.ts", "render:all": "ts-node --esm render.ts --all", "render:list": "ts-node --esm render.ts --list", "voice:gen": "t