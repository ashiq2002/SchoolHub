import type { AcademicYear } from "./academic-year.types";

export const academicYears: AcademicYear[] = [
  {
    id: "ay-2025-26", name: "Academic Year 2025–2026", code: "AY25-26", startDate: "2025-07-01", endDate: "2026-06-30", status: "published", isDefault: true, updatedAt: "2026-01-04T10:30:00Z", version: 4,
    terms: [
      { id: "term-1", name: "Term 1", startDate: "2025-07-01", endDate: "2025-10-30", instructionalDays: 79 },
      { id: "term-2", name: "Term 2", startDate: "2025-11-09", endDate: "2026-02-26", instructionalDays: 72 },
      { id: "term-3", name: "Term 3", startDate: "2026-03-08", endDate: "2026-06-30", instructionalDays: 71 },
    ],
  },
  {
    id: "ay-2026-27", name: "Academic Year 2026–2027", code: "AY26-27", startDate: "2026-07-01", endDate: "2027-06-30", status: "draft", isDefault: false, updatedAt: "2026-07-18T08:15:00Z", version: 2,
    terms: [
      { id: "term-4", name: "Term 1", startDate: "2026-07-01", endDate: "2026-10-29", instructionalDays: 78 },
      { id: "term-5", name: "Term 2", startDate: "2026-11-08", endDate: "2027-02-25", instructionalDays: 73 },
      { id: "term-6", name: "Term 3", startDate: "2027-03-07", endDate: "2027-06-30", instructionalDays: 72 },
    ],
  },
  {
    id: "ay-2024-25", name: "Academic Year 2024–2025", code: "AY24-25", startDate: "2024-07-01", endDate: "2025-06-30", status: "closed", isDefault: false, updatedAt: "2025-07-02T06:00:00Z", version: 8,
    terms: [
      { id: "term-7", name: "Term 1", startDate: "2024-07-01", endDate: "2024-10-31", instructionalDays: 80 },
      { id: "term-8", name: "Term 2", startDate: "2024-11-10", endDate: "2025-02-27", instructionalDays: 72 },
      { id: "term-9", name: "Term 3", startDate: "2025-03-09", endDate: "2025-06-30", instructionalDays: 70 },
    ],
  },
];

export function getAcademicYear(id: string) {
  return academicYears.find((year) => year.id === id);
}
