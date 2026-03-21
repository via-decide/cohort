You are working in repository via-decide/cohort on branch main.

MISSION
Build the Universal Asset Registry & Dependency Librarian. 1. Create a centralized SQL schema to index every asset in the ecosystem: 3D Meshes (.via_mesh), Video Chunks (.m3u8), and Quiz Data (.json). 2. Implement a 'Deep Search' API that allows the Game Engine or Web Player to request an asset by its UUID and receive the optimized CDN URL. 3. Build a 'Health Monitor' that periodically pings asset URLs to ensure zero '404 Not Found' errors in the interactive series or game levels.

CONSTRAINTS
Strict TDD. @GN8RBot MUST write unit tests for the asset-lookup performance (ensuring < 5ms response time) and URL validation.

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