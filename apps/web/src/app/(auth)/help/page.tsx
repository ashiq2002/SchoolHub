import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/features/authentication/auth-shell";
import styles from "@/features/authentication/authentication.module.css";

export const metadata: Metadata = { title: "Sign-in help" };
export default function HelpPage() { return <AuthCard description="Safe ways to regain access to your school workspace." title="Need help signing in?"><div className={styles.successBox}><strong>Start with account recovery</strong><p>Use your school email address to request a time-limited recovery link. If your school uses SSO, contact your school administrator or identity-provider help desk.</p><p>Never share a verification or recovery code with anyone, including support staff.</p><Link href="/forgot-password">Recover your account</Link><Link href="/sign-in">Return to sign in</Link></div></AuthCard>; }
