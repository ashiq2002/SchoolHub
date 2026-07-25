import type { Metadata } from "next";
import { AuthCard } from "@/features/authentication/auth-shell";
import { OrganizationSelector } from "@/features/authentication/organization-selector";

export const metadata: Metadata = { title: "Choose organization" };
export default function SelectOrganizationPage() { return <AuthCard description="Your account belongs to more than one organization. Choose where you want to work." title="Choose an organization"><OrganizationSelector /></AuthCard>; }
