You are working in repository via-decide/cohort on branch main.

MISSION
Build the Developer Portal Live Metrics HUD. 1. Create a responsive dashboard layout with high-speed data widgets for: Active Users, Live Group Votes, and API Latency. 2. Implement a 'World Map' visualization showing where in the world your Cohorts are currently active. 3. Build a 'Log Streamer' that pipes real-time security alerts and telemetry signals from the Security Auditor directly to the UI via WebSockets.

CONSTRAINTS
Strict TDD. @GN8RBot MUST write unit tests for the WebSocket data-throttling logic (ensuring the UI doesn't crash during high-traffic spikes).

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