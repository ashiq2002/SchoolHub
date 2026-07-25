import type { Metadata } from "next";
import { AuthCard } from "@/features/authentication/auth-shell";
import { VerificationForm } from "@/features/authentication/verification-form";

export const metadata: Metadata = { title: "Verify email" };
export default function VerifyEmailPage() { return <AuthCard description="We sent a 6-digit code to your email address. It expires in 10 minutes." eyebrow="Confirm your email" title="Enter verification code"><VerificationForm purpose="email" /></AuthCard>; }
