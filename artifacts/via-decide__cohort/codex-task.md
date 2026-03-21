You are working in repository via-decide/cohort on branch main.

MISSION
Develop the Semantic Message Hub & Intent Router. 1. Build a 'Message Translator' that receives 'message_slugs' from the Kada and maps them to Ecosystem Actions (e.g., 'HELP_REQUIRED' opens a chat with a mentor). 2. Implement a 'Social Context' filter: if a 'CONSENSUS_AGREE' is received during a live vote, count it as a vote for the current highlighted option. 3. Create an 'Interaction Log' that stores these haptic messages to train the 'Calmness Predictor' AI.

CONSTRAINTS
Isolate the Intent Router, the Vote Integration, and the Logging logic. @GN8RBot MUST write unit tests for the 'Priority' handling (ensuring 'HIGH' priority help requests bypass all queues).

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