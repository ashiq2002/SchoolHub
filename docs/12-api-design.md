# API Design

## Style and lifecycle

Expose JSON REST under `/api/v1`. OpenAPI 3.1 is the contract and generates validation, clients, examples, and documentation. Additive compatible changes stay within a version; breaking semantic or structural changes require a new version and published migration/deprecation window.

## Resource conventions

Plural nouns identify resources: `/api/v1/students/{id}`. Workflow actions use explicit subresources or commands such as `POST /results/{id}/publish`; clients never set protected states directly. Tenant comes from verified context, not request payload. School scope may be a validated query/header context where the resource is not self-scoping.

## Request and response

```json
{
  "data": { "id": "...", "type": "student", "version": 4 },
  "meta": { "requestId": "..." },
  "links": { "self": "/api/v1/students/..." }
}
```

Errors use `application/problem+json` with `type`, `title`, `status`, safe `detail`, `instance`, `requestId`, stable `code`, and field `errors`. Never expose stack traces, SQL, secrets, or existence of unauthorized records.

## Queries

- Cursor pagination is default for changing/large datasets: `page[size]` and `page[after]`; bounded offset pagination is allowed for stable administrative tables.
- `filter[field]`, `sort=-createdAt,name`, `q`, and sparse `fields[resource]` are allowlisted.
- Responses include authoritative totals only when requested and economical.
- Date/time filters declare inclusive/exclusive behavior and accept ISO 8601.
- Unknown filters or fields return validation errors rather than being ignored.

## Mutation safety

`POST` commands that can be retried accept `Idempotency-Key`, scoped to tenant, actor, route, and canonical request hash. Updates use `If-Match`/version to prevent lost writes. Bulk mutations first validate and return a preview token; execution is asynchronous with job status and row-level result artifacts. Delete means soft delete only where the resource contract says so.

## Authentication and authorization

Browser clients use secure, HttpOnly, SameSite cookies with CSRF defense; trusted non-browser integrations use OAuth 2.1/OIDC tokens with audience and scopes. Each endpoint documents permissions, resource scope, field filtering, rate-limit class, and audit behavior. Authentication success never implies authorization.

## Long-running jobs and files

`202 Accepted` returns a job resource with state, progress, timestamps, safe error, and result links. Uploads use short-lived signed object URLs followed by finalize/scan; downloads check authorization before issuing short-lived disposition-safe URLs. Exports are encrypted at rest, expire, and are audited.

## Webhooks

Outbound webhooks contain event ID and schema version, are HMAC-signed with rotating secrets, retried with jitter, ordered only per aggregate where promised, and provide replay controls. Payloads minimize PII. Receivers acknowledge quickly. Inbound provider callbacks verify signature, timestamp, replay window, and provider event idempotency before mutation.

## Limits and observability

Rate limits combine tenant, user/service identity, IP-risk, and endpoint cost with standard limit headers and `Retry-After`. Every request receives a correlation ID; telemetry records normalized route, status, latency, tenant pseudonym, and trace link without raw sensitive payloads.
