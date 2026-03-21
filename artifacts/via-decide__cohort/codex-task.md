You are working in repository via-decide/cohort on branch main.

MISSION
Implement the Ecosystem Heatmap & Funnel Tracker (via-eco-stats). 1. Create a real-time analytics engine that tracks "User Flow" between different ecosystem nodes (e.g., % of users who go from the Interactive Video to the 3D Game). 2. Build a cohort-based heatmap visualizer showing which "Choice Paths" in the interactive series are the most popular among specific student groups. 3. Implement an automated "Drop-off Alert" system that flags if users are getting stuck at a specific point in the Alchemist app or a certain game level.

CONSTRAINTS
@GN8RBot MUST isolate the data aggregation logic, the heatmap math, and the notification system. Commit each metric calculator (Retention, Conversion, Churn) as a separate TDD-backed PR.

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