import { z } from "zod";

export const academicYearSchema = z.object({
  name: z.string().trim().min(3, "Enter a descriptive academic year name").max(80, "Use 80 characters or fewer"),
  code: z.string().trim().min(2, "Enter a code").max(20, "Use 20 characters or fewer").regex(/^[A-Za-z0-9-]+$/, "Use letters, numbers, and hyphens only"),
  startDate: z.string().min(1, "Choose a start date"),
  endDate: z.string().min(1, "Choose an end date"),
  isDefault: z.boolean(),
}).superRefine((value, context) => {
  if (value.startDate && value.endDate && value.endDate <= value.startDate) context.addIssue({ code: "custom", path: ["endDate"], message: "End date must be after the start date" });
});

export type AcademicYearFormValues = z.infer<typeof academicYearSchema>;
