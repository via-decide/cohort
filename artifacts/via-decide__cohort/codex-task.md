You are working in repository via-decide/cohort on branch main.

MISSION
Implement the Cohort "Live-Watch" Sync Engine (via-group-pulse). 1. Create a specialized WebSocket room manager for "Interactive Series" sessions. 2. Implement a "Time-Sync" heartbeat that ensures every user in a Cohort sees the exact same video frame at the same time (±50ms). 3. Build the "Group Choice" tallying logic: when a choice prompt appears in the video, start a 10-second countdown and aggregate all incoming votes from the Cohort members.

CONSTRAINTS
The synchronization math is sensitive. @GN8RBot MUST write tests for network latency compensation and tie-breaker scenarios in voting. Commit the heartbeat logic and the voting aggregator separately.

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