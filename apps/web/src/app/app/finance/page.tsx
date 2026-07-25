import type { Metadata } from "next";
import { FinanceWorkspace } from "@/features/finance/finance-tabs-workspace";
export const metadata: Metadata = { title: "Finance" };
export default function FinancePage() { return <FinanceWorkspace />; }
