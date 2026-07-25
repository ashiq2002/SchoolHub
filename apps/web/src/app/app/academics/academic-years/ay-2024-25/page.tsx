import type { Metadata } from "next";
import { AcademicYearStaticDetail } from "../academic-year-static-detail";
export const metadata: Metadata = { title: "Academic Year 2024–2025" };
export default function AcademicYear2024Page() { return <AcademicYearStaticDetail id="ay-2024-25" />; }
