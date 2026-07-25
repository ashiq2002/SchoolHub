import type { Metadata } from "next";
import { SessionManager } from "@/features/authentication/session-manager";
import styles from "@/features/authentication/sessions.module.css";

export const metadata: Metadata = { title: "Sessions and devices" };
export default function SessionsPage() { return <div className={styles.page}><header className={styles.pageHeader}><h1>Sessions and devices</h1><p>Review where you’re signed in and remove access you don’t recognize.</p></header><SessionManager /></div>; }
