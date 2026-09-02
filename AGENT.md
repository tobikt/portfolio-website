# AGENT.md - Project Instructions for AI Agents

## 1. Project Context
**Project Name:** portfolio-website
**Objective:** Development of a professional personal portfolio website.
**Management Style:** Highly structured using GitHub Projects, involving Epics, Milestones, Sprints, and individual Tasks linked to GitHub Issues.

## 2. Tech Stack
*   **Framework:** Angular (Core development)
*   **Management:** GitHub Projects (Epics, Sprints, Backlog, Roadmaps)
*   **Content/Docs:** Markdown-based documentation in `/docs`

## 3. Operational Workflow
Agents must adhere to the hierarchy defined in `docs/roadmap.md`:

1.  **Phase/Milestone:** High-level project stages.
2.  **Epic:** Large bodies of work (represented as GitHub Issues).
3.  **Sprint:** Time-boxed development iterations.
4.  **Task:** Individual GitHub Issues that contribute to an Epic and belong to a Sprint.

### Task Execution Rules:
*   **Context First:** Before starting any technical task, read `docs/roadmap.md` to understand the current phase and the associated Epic/Sprint.
*   **Issue-Driven:** Every piece of code or configuration must serve a specific GitHub Issue identified in the roadmap.
*   **Documentation:** When new decisions are made, update or create relevant files in `/docs` (e.g., `decisions.md`).
*   **Traceability:** Maintain the link between tasks and epics. If a task evolves into a larger requirement, flag it as a potential new Epic.

## 4. Definition of Done (DoD)
A task is considered finished only when:
- [ ] The code/configuration is implemented according to the issue description.
- [ ] The implementation follows the established architectural patterns (Angular best practices).
- [ ] All relevant documentation in `/docs` is updated.
- [ ] The task is ready to be closed in the GitHub Project Board.

## 5. Agent Communication Guidelines
*   **Directness:** Provide concise, action-oriented updates.
*   **Verification:** Do not claim a task is complete without verifying the result (e.g., running builds or tests).
*   **Error Handling:** If a task conflicts with the current Roadmap or Sprint plan, report it immediately before proceeding.
