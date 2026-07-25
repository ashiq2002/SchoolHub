export type AcademicYearStatus = "draft" | "published" | "closed";

export type AcademicTerm = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  instructionalDays: number;
};

export type AcademicYear = {
  id: string;
  name: string;
  code: string;
  startDate: string;
  endDate: string;
  status: AcademicYearStatus;
  isDefault: boolean;
  terms: AcademicTerm[];
  updatedAt: string;
  version: number;
};
