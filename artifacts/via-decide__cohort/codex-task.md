You are working in repository via-decide/cohort on branch main.

MISSION
Develop the Branching Story Asset Manager (via-story-cms). 1. Build a dashboard that allows admins to upload HLS/DASH video segments and link them to "Cohort Decision Points." 2. Implement a metadata tagger where each video segment can be tagged with "Skills Required" (e.g., this video requires a chemistry score > 80 from the Alchemist app). 3. Create an exporter that bundles the entire interactive series (videos, choice-logic, and cohort-requirements) into a single encrypted manifest for the web player.

CONSTRAINTS
Commit the file uploader, the metadata tagger, and the manifest compiler independently. Use strict schema validation tests for the story JSON output.

PROCESS (MANDATORY)
1. Read README.md and AGENTS.md before editing.
2. Audit architecture before coding. Summarize current behavior.
3. Preserve unrelated working code. Prefer additive modular changes.
4. Implement the smallest safe change set for the stated goal.
5. Run validation commands and fix discovered issues.
6. Self-review for regressions, missing env wiring, and docs drift.
7. Return complete final file contents for every modified or created file.

REPO AUDIT CONTEXT
- Description: 
- Primary language: TypeScript
- README snippet:
# Branching Documentary Remotion Project This project renders branching documentary episodes from `production.json` using a **single** Remotion composition: `EpisodeFromJson`. ## Run ```bash npm install npm run start ts-node --esm render.ts V01 ``` ## CLI ```bash # list ids npm run render:list

- AGENTS snippet:
not found


SOP: PRE-MODIFICATION PROTOCOL (MANDATORY)
1. Adherence to Instructions: No deviations without explicit user approval.
2. Mandatory Clarification: Immediately ask if instructions are ambiguous or incomplete.
3. Proposal First: Always propose optimizations or fixes before implementing them.
4. Scope Discipline: Do not add unrequested features or modify unrelated code.
5. Vulnerability Check: Immediately flag and explain security risks.

OUTPUT REQUIREMENTS
- Include: implementation summary, checks run, risks, rollback notes.
- Generate branch + PR package.
- Keep prompts deterministic and preservation-first.