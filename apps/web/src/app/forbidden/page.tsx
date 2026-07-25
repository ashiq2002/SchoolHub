import { LockKey } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import styles from "../status.module.css";

export default function ForbiddenPage() { return <main className={styles.page}><LockKey aria-hidden="true" size={30} /><div className={styles.mark}>ACCESS RESTRICTED</div><h1>You don’t have access to this page</h1><p>Your account is signed in, but your current role or school assignment doesn’t include this area. Contact a school administrator if you believe this is unexpected.</p><Link className={styles.link} href="/app/home">Return to dashboard</Link></main>; }
