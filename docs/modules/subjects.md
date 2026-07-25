# Subjects
## Overview
Canonical subject/course catalog, versions, prerequisites, curriculum mappings and offerings.
## Objectives
Provide consistent academic meaning across teaching, timetable, assessment and reporting.
## Business Rules
Codes are scope-unique; published versions remain referentially stable; offerings define local delivery.
## Workflow
Draft subject → define version/outcomes → approve/publish → attach to class/program → offer/teach → retire.
## User Roles
Academic leaders manage; teachers contribute; learners/families view relevant subjects.
## Permissions
`academics.subject.view|create|publish|retire`, outcome/curriculum manage.
## Screens
Catalog, subject detail/version history, outcomes, offerings, prerequisites.
## Forms
Code/name, credits/hours, version, outcomes, prerequisite, assessment/grading reference.
## Validation
Unique code, acyclic prerequisites, valid credit/hours, immutable published semantics.
## Database Tables
`subjects`, `subject_versions`, `learning_outcomes`, `subject_prerequisites`, `subject_offerings`.
## Relationships
Versions link class/program, teaching assignments, timetable, work and assessments.
## API Endpoints
`/subjects`, `/subjects/{id}/versions|outcomes`, `/subject-offerings`, publish/retire commands.
## Notifications
Version publication, offering or teacher-impacting change.
## Reports
Catalog, offering coverage, teaching hours, prerequisite and curriculum coverage.
## Audit Logs
Version publication, mapping, prerequisite and retirement changes.
## UI Components
Catalog table, version timeline, outcome tree, prerequisite graph.
## Error Handling
Detect cyclic/dependent changes with actionable references.
## Empty States
No subjects, outcomes, offerings or prerequisites.
## Loading States
Catalog and graph skeletons.
## Success States
Subject/version saved, published or retired.
## Edge Cases
Cross-listed courses, aliases, credit changes, legacy results, elective bundles.
## Future Improvements
Standards import, outcome analytics and equivalency mapping.
