You are working in repository via-decide/cohort on branch main.

MISSION
Build the Cross-App Progress Sync API (via-sync-hub). 1. Create a centralized REST API that tracks user state variables across the 3D Engine, the Interactive Series, and the Alchemist app. 2. Implement a "Global Unlock" trigger system: e.g., if a user passes the "Acids" quiz in Alchemist, the API broadcasts an unlock code to the 3D Game Engine to open a secret laboratory level. 3. Build a JWT-based authentication bridge so users stay logged into their specific Cohort regardless of which tool or site they are currently using.

CONSTRAINTS
Strict TDD. @GN8RBot MUST write unit tests for the cross-origin state updates and token validation. Commit the API router, the state-change broadcaster, and the Auth middleware as separate, atomic pushes.

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