import type { Metadata } from "next";
import { TeachersWorkspace } from "@/features/core-operations/teachers-workspace";
export const metadata: Metadata = { title: "Teachers" };
export default function TeachersPage() { return <TeachersWorkspace />; }
