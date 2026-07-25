import type { Metadata } from "next";
import { StudentsWorkspace } from "@/features/core-operations/students-workspace";
export const metadata: Metadata = { title: "Students" };
export default function StudentsPage() { return <StudentsWorkspace />; }
