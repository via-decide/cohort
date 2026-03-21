You are working in repository via-decide/cohort on branch main.

MISSION
Develop the Interactive Story Remote Control & Override UI. 1. Build a 'Live Session' explorer that lets you jump into any active Cohort's interactive video playback. 2. Implement 'Manual Override' buttons: 'Force Branch A', 'Reset Timer', and 'Pause All' to give admins total control over the narrative flow. 3. Create a 'Ghost Mode' toggle that allows an admin to watch a video stream alongside a Cohort without appearing on the leaderboard.

CONSTRAINTS
Strict TDD. @GN8RBot MUST write unit tests for the command-authorization logic (ensuring only SuperAdmins can trigger overrides).

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