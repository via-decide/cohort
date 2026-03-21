You are working in repository via-decide/cohort on branch main.

MISSION
Develop the Global State Change Observer (via-state-sync). 1. Build a high-speed event listener that catches progress signals from external apps (e.g., "User finished Level 1 in 3D Engine"). 2. Implement a "Reward Processor" that updates the Cohort database in real-time based on these signals (e.g., unlocking a new video chapter in the interactive series). 3. Create a WebSocket-based "Achievement Toast" system that pushes a celebratory notification to the user's current active tab, regardless of which app they are in.

CONSTRAINTS
Isolate the event listener, the database update logic, and the WebSocket broadcaster. @GN8RBot MUST commit each "Achievement Logic" (e.g., Level Up vs. Item Unlock) as a standalone PR.

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