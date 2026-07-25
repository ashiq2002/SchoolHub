import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/features/authentication/auth-shell";
import styles from "@/features/authentication/authentication.module.css";

export const metadata: Metadata = { title: "Privacy" };
export default function PrivacyPage() { return <AuthCard description="How SchoolHub handles information in the school workspace." title="Privacy at SchoolHub"><div className={styles.successBox}><strong>Data belongs to your organization</strong><p>SchoolHub limits access by organization, school, role, and relationship. Authentication details and sensitive school records are never placed in general analytics.</p><p>Your organization controls retention and subject-rights requests according to its policy and applicable law.</p><Link href="/sign-in">Return to sign in</Link></div></AuthCard>; }
