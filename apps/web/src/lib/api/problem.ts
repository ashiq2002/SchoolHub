export type ApiProblem = {
  type: string;
  title: string;
  status: number;
  detail?: string;
  code: string;
  requestId?: string;
  errors?: Record<string, string[]>;
};

export class ApiProblemError extends Error {
  constructor(readonly problem: ApiProblem) {
    super(problem.detail ?? problem.title);
    this.name = "ApiProblemError";
  }
}

export function isApiProblem(value: unknown): value is ApiProblem {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<ApiProblem>;
  return typeof candidate.title === "string" && typeof candidate.status === "number" && typeof candidate.code === "string";
}
