You are working in repository via-decide/cohort on branch main.

MISSION
Create the Automated Cohort "Progress Report" Bot (via-cohort-intel). 1. Write a daily cron-job script that aggregates the total learning time, game progress, and quiz scores for every active Cohort. 2. Build a report generator that compares different Cohorts (e.g., "Group A is 20% faster at Chemistry than Group B"). 3. Configure the bot to auto-generate a cohort_performance_summary.md and commit it back to the repository every 24 hours.

CONSTRAINTS
The data aggregation must be highly optimized. @GN8RBot MUST program the bot to use a distinct signature and isolate the "Comparison Logic" from the "Markdown Formatting" code.

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