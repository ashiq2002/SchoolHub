import type { Metadata } from "next";
import { AdministrationWorkspace } from "@/features/core-operations/admin-workspaces";
export const metadata: Metadata = { title: "Administration" };
export default function AdministrationPage() { return <AdministrationWorkspace />; }
