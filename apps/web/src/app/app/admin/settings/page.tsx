import type { Metadata } from "next";
import { SchoolSettingsWorkspace } from "@/features/core-operations/admin-workspaces";
export const metadata: Metadata = { title: "School settings" };
export default function SchoolSettingsPage() { return <SchoolSettingsWorkspace />; }
