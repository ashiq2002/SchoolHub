# Module Catalog

## Capability groups

| Group | Modules |
|---|---|
| Foundation | Authentication, Dashboard, Settings, Notification, Audit Logs, System Administration |
| People | Student, Teacher, Parent, Guardian, Principal, Vice Principal, Reception, Employee |
| Academics | Attendance, Timetable, Subjects, Class, Section, Academic Year, Exam, Result, Homework, Assignment, Promotion |
| Workforce | HR, Payroll |
| Finance | Finance, Accounting, Fee Management, Scholarship, Billing, Subscription |
| Student lifecycle | Admission, Transfer Certificate, Certificates |
| Campus services | Library, Transport, Hostel, Inventory, Events, Calendar, Gallery, Downloads, Document Management |
| Engagement and insight | Communication, Reports, Analytics, AI Assistant |
| Enterprise platform | Multi School, White Label |

## Boundary notes

Persona-named modules are role workspaces composed over canonical domains, not separate copies of person or academic data. Homework is teacher-authored work; Assignment owns richer submissions, rubrics, and grading. Finance provides subledger/cash operations; Accounting owns the general ledger. Notification owns delivery while Communication owns authored audience content. Reports provides governed documents; Analytics provides interactive trends/models.

## Dependency policy

Foundation modules provide identity, institution context, policy, files, jobs, notifications, and audit. People and structure precede transactional academics/services. Finance and workforce consume canonical identities/assignments. Insight consumes published events/read models and never becomes a transaction source. Platform modules govern entitlement and tenancy but do not bypass customer-data authorization.

## Module status

All catalog modules have a baseline specification under `docs/modules/`. Specifications are discovery baselines: country-specific law, institution policy, migration mapping, and provider selection require validation before implementation.
