import type { Metadata } from "next";
import { AuthCard } from "@/features/authentication/auth-shell";
import { RecoveryForm } from "@/features/authentication/recovery-form";

export const metadata: Metadata = { title: "Recover account" };
export default function ForgotPasswordPage() { return <AuthCard description="Enter your email. For privacy, we show the same result whether or not an account exists." title="Recover your account"><RecoveryForm /></AuthCard>; }
