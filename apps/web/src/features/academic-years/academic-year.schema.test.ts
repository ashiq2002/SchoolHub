import { describe, expect, it } from "vitest";
import { academicYearSchema } from "./academic-year.schema";

describe("academicYearSchema", () => {
  it("rejects an end date before the start date", () => {
    const result = academicYearSchema.safeParse({ name: "Academic Year 2028", code: "AY28", startDate: "2028-07-01", endDate: "2028-06-01", isDefault: false });
    expect(result.success).toBe(false);
  });

  it("accepts a valid non-overlapping date range", () => {
    const result = academicYearSchema.safeParse({ name: "Academic Year 2028", code: "AY28", startDate: "2028-07-01", endDate: "2029-06-30", isDefault: false });
    expect(result.success).toBe(true);
  });
});
