You are working in repository via-decide/cohort on branch main.

MISSION
Develop the Ecosystem Security Auditor & Anomaly Detector. 1. Build a 'Request Signature Validator' that ensures every telemetry signal from the 3D Engine or Alchemist app is signed with a valid HMAC-SHA256 key. 2. Implement a 'Rate Limiter' specifically for the Consensus Engine to prevent 'Vote Spamming' from automated scripts. 3. Build an 'Anomaly Detector' that flags suspicious activity: e.g., if a user gains 500 XP in 0.5 seconds or jumps from 'Level 1' to 'Level 50' without passing intermediate checkpoints.

CONSTRAINTS
Strict TDD. @GN8RBot MUST write tests for signature spoofing and rate-limit bypass attempts.

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