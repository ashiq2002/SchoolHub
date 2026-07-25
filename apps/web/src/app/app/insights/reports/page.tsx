import type { Metadata } from "next";
import { ReportsWorkspace } from "@/features/reports/reports-workspace";
export const metadata: Metadata = { title: "Reports and analytics" };
export default function ReportsPage() { return <ReportsWorkspace />; }
