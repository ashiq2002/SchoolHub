import type { Metadata } from "next";
import { AuthCard } from "@/features/authentication/auth-shell";
import { SignInForm } from "@/features/authentication/sign-in-form";

export const metadata: Metadata = { title: "Sign in" };
export default function SignInPage() { return <AuthCard description="Use your school account to continue to your workspace." title="Welcome back"><SignInForm /></AuthCard>; }
