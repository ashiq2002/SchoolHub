import type { Metadata } from "next";
import { AuthCard } from "@/features/authentication/auth-shell";
import { VerificationForm } from "@/features/authentication/verification-form";

export const metadata: Metadata = { title: "Verify sign in" };
export default function MfaPage() { return <AuthCard description="Your account requires an additional check before you can continue." eyebrow="Security check" title="Verify it’s you"><VerificationForm /></AuthCard>; }
