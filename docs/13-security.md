# Security

## Security model

Use defense in depth and zero-trust assumptions between clients, services, jobs, administrators, and tenants. Security requirements follow OWASP ASVS Level 2 as a baseline, OWASP Top 10/API Top 10, applicable privacy law, and threat models for child data, finance, assessments, privileged support, and multi-tenancy.

## Identity and sessions

- Support OIDC/SAML federation, verified email/phone flows, passkeys/MFA readiness, and recovery codes.
- Passwords use Argon2id with tuned parameters, breach screening, length-first policy, and no arbitrary periodic rotation.
- Access sessions are short-lived and rotated; refresh secrets are one-time rotating and stored hashed.
- Cookies are `Secure`, `HttpOnly`, and appropriate `SameSite`; state-changing browser requests require CSRF protection and origin validation.
- Session view/revocation includes device, coarse location, last activity, and risk events. Privileged operations require recent step-up authentication.

## Authorization and tenant isolation

Enforce RBAC plus scoped attributes and relationships in the server policy layer, with PostgreSQL RLS as defense in depth. Default deny. Check field and export permissions independently. Cache authorization by policy version and invalidate on assignment changes. Support access is approved, reasoned, time-boxed, visible, and fully audited.

## Application security

Validate typed input at trust boundaries; parameterize SQL; contextual-output encode; sanitize permitted rich text; enforce a strict Content Security Policy; prevent clickjacking and MIME sniffing; validate redirects. Uploads use extension/MIME/signature checks, size limits, quarantine, malware scanning, safe generated names, and isolated serving domains. SSRF controls allowlist destinations and block metadata/private ranges.

## Data protection

TLS 1.2+ in transit and managed encryption at rest are mandatory. Envelope encryption protects high-sensitivity fields with tenant/region-aware keys. Secrets live in a secret manager and rotate. Logs, traces, analytics, and support tools redact credentials, tokens, student details, and unnecessary PII. Backups and exports inherit data classification and retention.

## Abuse and fraud controls

Layered rate limits, credential-stuffing detection, bot protection for public admissions, suspicious session detection, payment webhook verification, duplicate/refund controls, and approval thresholds protect high-risk workflows. User-facing errors resist account and record enumeration.

## Secure delivery

Threat modeling occurs during design. CI runs secret, dependency, license, SAST, IaC, container, migration, and API contract scans; DAST and penetration testing cover release candidates and major boundary changes. Dependencies are pinned with SBOM and provenance. Critical vulnerabilities follow defined remediation SLAs and coordinated disclosure.

## Detection and response

Security events feed centralized, access-controlled monitoring: authentication anomalies, privilege changes, support access, export bursts, RLS failures, secret use, webhook failures, and integrity changes. Incident runbooks cover triage, containment, evidence preservation, tenant notification, recovery, and postmortem. Audit clocks use synchronized UTC.

## Privacy and safeguarding

Apply purpose limitation, consent/relationship checks, data minimization, age-aware experiences, configurable retention, subject rights, and legal hold. Safeguarding notes and health data are separately classified with narrow fields and access alerts. AI features never train on tenant data by default and require documented model/provider controls.
