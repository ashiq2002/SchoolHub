# AI Assistant
## Overview
Permission-aware assistant for navigation, summarization, drafting and governed question answering with human control.
## Objectives
Reduce cognitive workload without granting new data access or automating consequential decisions unsafely.
## Business Rules
AI inherits user permissions; tenant data is not used for provider training by default; citations and human confirmation are required for actions.
## Workflow
User asks → classify intent/risk → retrieve authorized context → generate with citations → user reviews → explicit action confirmation → audit/evaluate.
## User Roles
Enabled users use scoped assistant; administrators configure providers/policies; reviewers govern evaluations.
## Permissions
`ai.use`, per-tool action permissions, `ai.administer`, protected-context opt-in and conversation export.
## Screens
Assistant panel, cited answer, draft/action preview, conversation history, policy/provider admin, evaluation dashboard.
## Forms
Prompt, feedback, action confirmation, provider/model/policy, knowledge-source selection.
## Validation
Permission at retrieval and action time, prompt/input limits, tool schema, content/safety policy and data residency.
## Database Tables
`ai_conversations`, `ai_messages`, `ai_tool_runs`, `ai_citations`, `ai_feedback`, `ai_policies`, `ai_provider_configs`, `ai_evaluations`.
## Relationships
Conversation belongs to user/tenant; citations reference authorized source/version; tool runs reference auditable commands.
## API Endpoints
`/ai/conversations`, streaming message endpoint, `/ai/tool-runs/{id}/confirm`, admin policies/evaluations.
## Notifications
Long task completion, action approval and provider/policy incident; never send prompt content broadly.
## Reports
Adoption, task success, groundedness, refusal/error, latency/cost and safety incidents without raw PII.
## Audit Logs
Provider/policy, protected retrieval, tool proposal/confirmation/execution, export and support review.
## UI Components
Conversation, citation card, tool/action diff, risk confirmation, feedback and streaming status.
## Error Handling
State uncertainty plainly; never fabricate success; fall back to source navigation and preserve draft.
## Empty States
No conversations, enabled sources, available tools or evaluation results.
## Loading States
Cancelable streaming, retrieval/tool progress and stable citations.
## Success States
Grounded answer or explicitly confirmed action with source and audit reference.
## Edge Cases
Prompt injection in documents, revoked permission mid-chat, model outage, ambiguous learner, stale citation.
## Future Improvements
Tenant-local models, multilingual voice and formally verified high-risk tool policies.
